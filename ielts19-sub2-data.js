// Topic 19 Subunit 2 Quiz Data: Diseases & Infection 疾病與感染
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S02 - Diseases & Infection 疾病與感染",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "disease",
    "pos": "n.",
    "cn_def": "疾病",
    "en_def": "an illness of people, animals or plants",
    "sentence": "Heart {{BLANK}} is one of the main causes of death in Taiwan, but a healthy diet can lower the risk.",
    "cn": "心臟疾病是台灣主要的死因之一,但健康的飲食可以降低風險。"
  },
  {
    "word": "illness",
    "pos": "n.",
    "cn_def": "生病;疾病",
    "en_def": "the state of being sick",
    "sentence": "Tom missed two weeks of school because of a serious {{BLANK}}, so his classmates sent him their notes.",
    "cn": "湯姆因為一場嚴重的疾病缺課兩週,所以同學們把筆記寄給他。"
  },
  {
    "word": "infection",
    "pos": "n.",
    "cn_def": "感染",
    "en_def": "a disease caused by germs entering the body",
    "sentence": "The cut on my knee became red and hot, so the doctor said I had an {{BLANK}} and gave me some cream.",
    "cn": "我膝蓋上的傷口變得又紅又熱,所以醫生說我被感染了,並給了我一些藥膏。"
  },
  {
    "word": "infect",
    "pos": "v.",
    "cn_def": "傳染;使感染",
    "en_def": "to give someone a disease",
    "sentence": "Please stay at home when you have the flu, because you could easily {{BLANK}} your classmates.",
    "cn": "得流感時請待在家裡,因為你很容易傳染給同學。"
  },
  {
    "word": "germ",
    "pos": "n.",
    "cn_def": "細菌;病菌",
    "en_def": "a very small living thing that can cause disease",
    "sentence": "Wash your hands before you eat, because your fingers carry many {{BLANK}} that you cannot see.",
    "cn": "吃東西前要洗手,因為你的手指上帶有許多看不見的病菌。"
  },
  {
    "word": "pandemic",
    "pos": "n.",
    "cn_def": "全球大流行病",
    "en_def": "a disease that spreads over many countries",
    "sentence": "The COVID-19 {{BLANK}} closed schools around the world, so millions of students had to study online.",
    "cn": "新冠肺炎全球大流行讓世界各地的學校停課,所以數百萬學生必須在線上學習。"
  },
  {
    "word": "airborne",
    "pos": "adj.",
    "cn_def": "經由空氣傳播的",
    "en_def": "carried through the air",
    "sentence": "Measles is an {{BLANK}} disease, so it can spread quickly in a crowded classroom with closed windows.",
    "cn": "麻疹是一種經由空氣傳播的疾病,所以在門窗緊閉、擁擠的教室裡會快速傳播。"
  },
  {
    "word": "droplet",
    "pos": "n.",
    "cn_def": "飛沫",
    "en_def": "a very small drop of liquid",
    "sentence": "When you sneeze, tiny {{BLANK}} fly into the air, so you should cover your mouth with your elbow.",
    "cn": "打噴嚏時微小的飛沫會飛到空中,所以你應該用手肘遮住嘴巴。"
  },
  {
    "word": "incubation period",
    "pos": "n.phr.",
    "cn_def": "潛伏期",
    "en_def": "the time between catching a disease and showing signs",
    "sentence": "The virus has an {{BLANK}} of about five days, so people can spread it before they feel sick.",
    "cn": "這種病毒的潛伏期大約五天,所以人們在感到不舒服之前就可能傳播病毒。"
  },
  {
    "word": "asymptomatic",
    "pos": "adj.",
    "cn_def": "無症狀的",
    "en_def": "having a disease but showing no signs of it",
    "sentence": "Many young people were {{BLANK}}, so they did not know they had the virus until they took a test.",
    "cn": "許多年輕人是無症狀的,所以他們直到做了檢測才知道自己感染了病毒。"
  },
  {
    "word": "fever",
    "pos": "n.",
    "cn_def": "發燒",
    "en_def": "a body temperature that is higher than normal",
    "sentence": "My little sister had a high {{BLANK}} last night, so my mother stayed with her and checked her temperature every hour.",
    "cn": "我妹妹昨晚發高燒,所以媽媽陪著她,每小時量一次體溫。"
  },
  {
    "word": "cough",
    "pos": "n.",
    "cn_def": "咳嗽",
    "en_def": "the act or sound of pushing air out of the throat",
    "sentence": "I have had a dry {{BLANK}} for two weeks, so the doctor wants me to take an X-ray of my chest.",
    "cn": "我已經乾咳兩週了,所以醫生要我照一張胸部X光片。"
  },
  {
    "word": "sneeze",
    "pos": "v.",
    "cn_def": "打噴嚏",
    "en_def": "to force air out through the nose suddenly",
    "sentence": "Every spring I {{BLANK}} a lot because of the pollen, so I always carry tissues in my bag.",
    "cn": "每年春天我都因為花粉常常打噴嚏,所以我總是在包包裡放面紙。"
  },
  {
    "word": "sore throat",
    "pos": "n.phr.",
    "cn_def": "喉嚨痛",
    "en_def": "pain in the throat, often from a cold",
    "sentence": "I had a {{BLANK}} after the concert, so I drank warm water with honey and stopped talking for a day.",
    "cn": "演唱會後我喉嚨痛,所以我喝了溫蜂蜜水,還一整天不說話。"
  },
  {
    "word": "runny nose",
    "pos": "n.phr.",
    "cn_def": "流鼻水",
    "en_def": "a nose with liquid coming out because of a cold",
    "sentence": "The little boy had a {{BLANK}} all week, but he still wanted to play outside with his friends.",
    "cn": "那個小男孩整個星期都在流鼻水,但他還是想和朋友在外面玩。"
  },
  {
    "word": "influenza",
    "pos": "n.",
    "cn_def": "流行性感冒",
    "en_def": "a common infectious illness with fever and aches; the flu",
    "sentence": "Every winter many elderly people catch {{BLANK}}, so the government offers them free flu jabs.",
    "cn": "每年冬天許多長者會感染流行性感冒,所以政府提供他們免費的流感疫苗。"
  },
  {
    "word": "common cold",
    "pos": "n.phr.",
    "cn_def": "普通感冒",
    "en_def": "a mild illness with a runny nose and sore throat",
    "sentence": "There is still no cure for the {{BLANK}}, but most people feel better after about a week.",
    "cn": "普通感冒至今仍無法根治,但大多數人大約一週後就會好轉。"
  },
  {
    "word": "tuberculosis",
    "pos": "n.",
    "cn_def": "肺結核",
    "en_def": "a serious infectious disease that mainly affects the lungs",
    "sentence": "{{BLANK}} can be cured with medicine, but patients must take the pills every day for several months.",
    "cn": "肺結核可以用藥物治癒,但病人必須連續數個月每天服藥。"
  },
  {
    "word": "measles",
    "pos": "n.",
    "cn_def": "麻疹",
    "en_def": "an infectious disease that causes red spots and fever",
    "sentence": "{{BLANK}} spreads very easily among children, so doctors want every child to be vaccinated before school.",
    "cn": "麻疹在兒童之間非常容易傳播,所以醫生希望每個孩子上學前都接種疫苗。"
  },
  {
    "word": "dengue fever",
    "pos": "n.phr.",
    "cn_def": "登革熱",
    "en_def": "a tropical disease spread by mosquitoes",
    "sentence": "Cases of {{BLANK}} rise in southern Taiwan every summer, so residents are told to empty water from old containers.",
    "cn": "每年夏天南台灣的登革熱病例都會增加,所以居民被要求清除舊容器裡的積水。"
  },
  {
    "word": "hepatitis",
    "pos": "n.",
    "cn_def": "肝炎",
    "en_def": "a disease that damages the liver",
    "sentence": "{{BLANK}} B used to be very common in Taiwan, but a vaccine for babies has reduced it greatly.",
    "cn": "B型肝炎過去在台灣非常普遍,但嬰兒疫苗已經大幅減少了這種病。"
  },
  {
    "word": "cancer",
    "pos": "n.",
    "cn_def": "癌症",
    "en_def": "a serious disease in which cells grow in an uncontrolled way",
    "sentence": "Smoking is a major cause of lung {{BLANK}}, so my father finally quit after his doctor warned him.",
    "cn": "吸菸是肺癌的主要成因,所以我爸爸在醫生警告後終於戒菸了。"
  },
  {
    "word": "tumour",
    "pos": "n.",
    "cn_def": "腫瘤",
    "en_def": "a lump that grows inside the body",
    "sentence": "The scan showed a small {{BLANK}} in her brain, but luckily the doctors could remove it completely.",
    "cn": "掃描顯示她的腦部有一個小腫瘤,但幸運的是醫生能將它完全切除。"
  },
  {
    "word": "heart disease",
    "pos": "n.phr.",
    "cn_def": "心臟病",
    "en_def": "any illness that affects the heart",
    "sentence": "Eating too much salt can lead to {{BLANK}}, so the school canteen now uses less salt in its dishes.",
    "cn": "吃太多鹽可能導致心臟病,所以學校餐廳現在的菜都少放鹽了。"
  },
  {
    "word": "heart attack",
    "pos": "n.phr.",
    "cn_def": "心臟病發作",
    "en_def": "a sudden serious problem when blood stops reaching the heart",
    "sentence": "A man had a {{BLANK}} in the gym, but a staff member saved his life with CPR before the ambulance came.",
    "cn": "一名男子在健身房心臟病發作,但一位員工在救護車抵達前用心肺復甦術救了他一命。"
  },
  {
    "word": "respiratory",
    "pos": "adj.",
    "cn_def": "呼吸的;呼吸系統的",
    "en_def": "relating to breathing and the lungs",
    "sentence": "Air pollution can cause {{BLANK}} problems, so many people wear masks on days when the air quality is poor.",
    "cn": "空氣污染會引起呼吸系統的問題,所以空氣品質差的日子許多人會戴口罩。"
  },
  {
    "word": "pneumonia",
    "pos": "n.",
    "cn_def": "肺炎",
    "en_def": "a serious infection of the lungs",
    "sentence": "My grandfather caught a cold that turned into {{BLANK}}, so he had to stay in hospital for ten days.",
    "cn": "我爺爺的感冒惡化成肺炎,所以他必須住院十天。"
  },
  {
    "word": "chickenpox",
    "pos": "n.",
    "cn_def": "水痘",
    "en_def": "a common children's disease that causes itchy red spots",
    "sentence": "My little brother caught {{BLANK}} at kindergarten, and he had itchy red spots all over his body for a week.",
    "cn": "我弟弟在幼兒園得了水痘,他全身長滿會癢的紅疹,持續了一週。"
  },
  {
    "word": "allergy",
    "pos": "n.",
    "cn_def": "過敏",
    "en_def": "a bad reaction of the body to certain food, dust or plants",
    "sentence": "Jenny has a peanut {{BLANK}}, so she always checks the label before she buys any snacks.",
    "cn": "珍妮對花生過敏,所以她買任何零食前都會先看標籤。"
  },
  {
    "word": "asthma",
    "pos": "n.",
    "cn_def": "氣喘",
    "en_def": "an illness that makes breathing difficult at times",
    "sentence": "Kevin has {{BLANK}}, so he always carries an inhaler when he goes running in cold weather.",
    "cn": "凱文有氣喘,所以天冷去跑步時他總是隨身帶著吸入器。"
  },
  {
    "word": "self-isolate",
    "pos": "v.",
    "cn_def": "自我隔離",
    "en_def": "to stay away from other people to avoid spreading a disease",
    "sentence": "After she tested positive, she had to {{BLANK}} at home for five days, so her friends delivered food to her door.",
    "cn": "她檢測呈陽性後必須在家自我隔離五天,所以朋友們把食物送到她家門口。"
  },
  {
    "word": "super-spreader",
    "pos": "n.",
    "cn_def": "超級傳播者",
    "en_def": "a person who passes a disease to many others",
    "sentence": "One {{BLANK}} at the wedding infected forty guests, and health officials had to trace all of them.",
    "cn": "婚禮上一名超級傳播者傳染了四十位賓客,衛生官員必須追蹤所有人。"
  },
  {
    "word": "immunity",
    "pos": "n.",
    "cn_def": "免疫力",
    "en_def": "the body's ability to fight a disease",
    "sentence": "After you have had chickenpox, you usually have {{BLANK}} for life, so you will not catch it again.",
    "cn": "得過水痘之後,你通常會有終身免疫力,所以不會再被感染。"
  },
  {
    "word": "antibody",
    "pos": "n.",
    "cn_def": "抗體",
    "en_def": "a substance the body makes to fight germs",
    "sentence": "The vaccine helps your body make {{BLANK}}, and these protect you if the real virus enters your body.",
    "cn": "疫苗幫助你的身體製造抗體,而當真正的病毒進入體內時,這些抗體會保護你。"
  }
];

const MCQS = [
  {
    "q": "Heart _____ is one of the main causes of death in Taiwan, but a healthy diet can lower the risk.",
    "options": [
      "governance",
      "recipient",
      "physician",
      "disease"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Tom missed two weeks of school because of a serious _____, so his classmates sent him their notes.",
    "options": [
      "necessity",
      "taxation",
      "illness",
      "negligence"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The cut on my knee became red and hot, so the doctor said I had an _____ and gave me some cream.",
    "options": [
      "infection",
      "centenarian",
      "investment",
      "necessity"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Please stay at home when you have the flu, because you could easily _____ your classmates.",
    "options": [
      "worsen",
      "infect",
      "hospitalise",
      "subsidise"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Wash your hands before you eat, because your fingers carry many _____ that you cannot see.",
    "options": [
      "germ",
      "standard",
      "agreement",
      "reduction"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The COVID-19 _____ closed schools around the world, so millions of students had to study online.",
    "options": [
      "epidemiology",
      "pandemic",
      "inadequacy",
      "cataract"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Measles is an _____ disease, so it can spread quickly in a crowded classroom with closed windows.",
    "options": [
      "compassionate",
      "unhealthy",
      "airborne",
      "physiological"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "When you sneeze, tiny _____ fly into the air, so you should cover your mouth with your elbow.",
    "options": [
      "incapacity",
      "bedtime",
      "inpatient",
      "droplet"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The virus has an _____ of about five days, so people can spread it before they feel sick.",
    "options": [
      "border control",
      "incubation period",
      "assisted living",
      "hearing loss"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Many young people were _____, so they did not know they had the virus until they took a test.",
    "options": [
      "overburdened",
      "unsafe",
      "unhealthy",
      "asymptomatic"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "My little sister had a high _____ last night, so my mother stayed with her and checked her temperature every hour.",
    "options": [
      "jab",
      "expectancy",
      "fever",
      "physician"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "I have had a dry _____ for two weeks, so the doctor wants me to take an X-ray of my chest.",
    "options": [
      "cough",
      "capsule",
      "prescription",
      "infringement"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Every spring I _____ a lot because of the pollen, so I always carry tissues in my bag.",
    "options": [
      "reimburse",
      "sneeze",
      "counsel",
      "quit"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "I had a _____ after the concert, so I drank warm water with honey and stopped talking for a day.",
    "options": [
      "healthcare worker",
      "medical record",
      "health education",
      "sore throat"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The little boy had a _____ all week, but he still wanted to play outside with his friends.",
    "options": [
      "runny nose",
      "retirement age",
      "silver economy",
      "face mask"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Every winter many elderly people catch _____, so the government offers them free flu jabs.",
    "options": [
      "necessity",
      "quality",
      "influenza",
      "discomfort"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "There is still no cure for the _____, but most people feel better after about a week.",
    "options": [
      "face mask",
      "waiting list",
      "early detection",
      "common cold"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "_____ can be cured with medicine, but patients must take the pills every day for several months.",
    "options": [
      "tuberculosis",
      "participation",
      "allowance",
      "nicotine"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "_____ spreads very easily among children, so doctors want every child to be vaccinated before school.",
    "options": [
      "reduction",
      "measles",
      "licensing",
      "salt"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Cases of _____ rise in southern Taiwan every summer, so residents are told to empty water from old containers.",
    "options": [
      "retirement home",
      "ageing population",
      "dengue fever",
      "a new lease of life"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "_____ B used to be very common in Taiwan, but a vaccine for babies has reduced it greatly.",
    "options": [
      "acupuncture",
      "pharmacy",
      "exacerbation",
      "hepatitis"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Smoking is a major cause of lung _____, so my father finally quit after his doctor warned him.",
    "options": [
      "commencement",
      "cancer",
      "belief",
      "delivery"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The scan showed a small _____ in her brain, but luckily the doctors could remove it completely.",
    "options": [
      "governance",
      "salt",
      "tumour",
      "centenarian"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Eating too much salt can lead to _____, so the school canteen now uses less salt in its dishes.",
    "options": [
      "heart disease",
      "waiting list",
      "palliative care",
      "retirement home"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "A man had a _____ in the gym, but a staff member saved his life with CPR before the ambulance came.",
    "options": [
      "waiting list",
      "blood test",
      "healthcare worker",
      "heart attack"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Air pollution can cause _____ problems, so many people wear masks on days when the air quality is poor.",
    "options": [
      "respiratory",
      "intergenerational",
      "age-friendly",
      "unequal"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "My grandfather caught a cold that turned into _____, so he had to stay in hospital for ten days.",
    "options": [
      "prescription",
      "pneumonia",
      "frailty",
      "chemotherapy"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "My little brother caught _____ at kindergarten, and he had itchy red spots all over his body for a week.",
    "options": [
      "commencement",
      "infringement",
      "chickenpox",
      "detriment"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Jenny has a peanut _____, so she always checks the label before she buys any snacks.",
    "options": [
      "fragility",
      "allergy",
      "necessity",
      "inspection"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Kevin has _____, so he always carries an inhaler when he goes running in cold weather.",
    "options": [
      "acupuncture",
      "precondition",
      "pharmacy",
      "asthma"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "After she tested positive, she had to _____ at home for five days, so her friends delivered food to her door.",
    "options": [
      "immunise",
      "floss",
      "self-isolate",
      "supervise"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "One _____ at the wedding infected forty guests, and health officials had to trace all of them.",
    "options": [
      "super-spreader",
      "sustainability",
      "reduction",
      "tobacco"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "After you have had chickenpox, you usually have _____ for life, so you will not catch it again.",
    "options": [
      "inequity",
      "necessity",
      "immunity",
      "equality"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The vaccine helps your body make _____, and these protect you if the real virus enters your body.",
    "options": [
      "acupuncture",
      "investment",
      "fragility",
      "antibody"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "disease": {
    "pos": "n.",
    "en_def": "an illness of people, animals or plants",
    "cn_def": "疾病"
  },
  "illness": {
    "pos": "n.",
    "en_def": "the state of being sick",
    "cn_def": "生病;疾病"
  },
  "infection": {
    "pos": "n.",
    "en_def": "a disease caused by germs entering the body",
    "cn_def": "感染"
  },
  "infect": {
    "pos": "v.",
    "en_def": "to give someone a disease",
    "cn_def": "傳染;使感染"
  },
  "germ": {
    "pos": "n.",
    "en_def": "a very small living thing that can cause disease",
    "cn_def": "細菌;病菌"
  },
  "pandemic": {
    "pos": "n.",
    "en_def": "a disease that spreads over many countries",
    "cn_def": "全球大流行病"
  },
  "airborne": {
    "pos": "adj.",
    "en_def": "carried through the air",
    "cn_def": "經由空氣傳播的"
  },
  "droplet": {
    "pos": "n.",
    "en_def": "a very small drop of liquid",
    "cn_def": "飛沫"
  },
  "incubation period": {
    "pos": "n.phr.",
    "en_def": "the time between catching a disease and showing signs",
    "cn_def": "潛伏期"
  },
  "asymptomatic": {
    "pos": "adj.",
    "en_def": "having a disease but showing no signs of it",
    "cn_def": "無症狀的"
  },
  "fever": {
    "pos": "n.",
    "en_def": "a body temperature that is higher than normal",
    "cn_def": "發燒"
  },
  "cough": {
    "pos": "n.",
    "en_def": "the act or sound of pushing air out of the throat",
    "cn_def": "咳嗽"
  },
  "sneeze": {
    "pos": "v.",
    "en_def": "to force air out through the nose suddenly",
    "cn_def": "打噴嚏"
  },
  "sore throat": {
    "pos": "n.phr.",
    "en_def": "pain in the throat, often from a cold",
    "cn_def": "喉嚨痛"
  },
  "runny nose": {
    "pos": "n.phr.",
    "en_def": "a nose with liquid coming out because of a cold",
    "cn_def": "流鼻水"
  },
  "influenza": {
    "pos": "n.",
    "en_def": "a common infectious illness with fever and aches; the flu",
    "cn_def": "流行性感冒"
  },
  "common cold": {
    "pos": "n.phr.",
    "en_def": "a mild illness with a runny nose and sore throat",
    "cn_def": "普通感冒"
  },
  "tuberculosis": {
    "pos": "n.",
    "en_def": "a serious infectious disease that mainly affects the lungs",
    "cn_def": "肺結核"
  },
  "measles": {
    "pos": "n.",
    "en_def": "an infectious disease that causes red spots and fever",
    "cn_def": "麻疹"
  },
  "dengue fever": {
    "pos": "n.phr.",
    "en_def": "a tropical disease spread by mosquitoes",
    "cn_def": "登革熱"
  },
  "hepatitis": {
    "pos": "n.",
    "en_def": "a disease that damages the liver",
    "cn_def": "肝炎"
  },
  "cancer": {
    "pos": "n.",
    "en_def": "a serious disease in which cells grow in an uncontrolled way",
    "cn_def": "癌症"
  },
  "tumour": {
    "pos": "n.",
    "en_def": "a lump that grows inside the body",
    "cn_def": "腫瘤"
  },
  "heart disease": {
    "pos": "n.phr.",
    "en_def": "any illness that affects the heart",
    "cn_def": "心臟病"
  },
  "heart attack": {
    "pos": "n.phr.",
    "en_def": "a sudden serious problem when blood stops reaching the heart",
    "cn_def": "心臟病發作"
  },
  "respiratory": {
    "pos": "adj.",
    "en_def": "relating to breathing and the lungs",
    "cn_def": "呼吸的;呼吸系統的"
  },
  "pneumonia": {
    "pos": "n.",
    "en_def": "a serious infection of the lungs",
    "cn_def": "肺炎"
  },
  "chickenpox": {
    "pos": "n.",
    "en_def": "a common children's disease that causes itchy red spots",
    "cn_def": "水痘"
  },
  "allergy": {
    "pos": "n.",
    "en_def": "a bad reaction of the body to certain food, dust or plants",
    "cn_def": "過敏"
  },
  "asthma": {
    "pos": "n.",
    "en_def": "an illness that makes breathing difficult at times",
    "cn_def": "氣喘"
  },
  "self-isolate": {
    "pos": "v.",
    "en_def": "to stay away from other people to avoid spreading a disease",
    "cn_def": "自我隔離"
  },
  "super-spreader": {
    "pos": "n.",
    "en_def": "a person who passes a disease to many others",
    "cn_def": "超級傳播者"
  },
  "immunity": {
    "pos": "n.",
    "en_def": "the body's ability to fight a disease",
    "cn_def": "免疫力"
  },
  "antibody": {
    "pos": "n.",
    "en_def": "a substance the body makes to fight germs",
    "cn_def": "抗體"
  },
  "governance": {
    "pos": "n.",
    "en_def": "the way an organisation is controlled and managed",
    "cn_def": "治理"
  },
  "recipient": {
    "pos": "n.",
    "en_def": "a person who receives something",
    "cn_def": "接受者;受贈者"
  },
  "physician": {
    "pos": "n.",
    "en_def": "a medical doctor",
    "cn_def": "內科醫師;醫師"
  },
  "necessity": {
    "pos": "n.",
    "en_def": "something that you need",
    "cn_def": "必需品;必要"
  },
  "taxation": {
    "pos": "n.",
    "en_def": "the system of taxes",
    "cn_def": "課稅;稅收"
  },
  "negligence": {
    "pos": "n.",
    "en_def": "failure to take proper care",
    "cn_def": "疏失;過失"
  },
  "centenarian": {
    "pos": "n.",
    "en_def": "a person who is 100 years old or more",
    "cn_def": "百歲人瑞"
  },
  "investment": {
    "pos": "n.",
    "en_def": "money spent to get future benefits",
    "cn_def": "投資"
  },
  "worsen": {
    "pos": "v.",
    "en_def": "to become worse",
    "cn_def": "惡化"
  },
  "hospitalise": {
    "pos": "v.",
    "en_def": "to send someone to hospital for treatment",
    "cn_def": "使住院"
  },
  "subsidise": {
    "pos": "v.",
    "en_def": "to pay part of the cost of something",
    "cn_def": "補助;補貼"
  },
  "standard": {
    "pos": "n.",
    "en_def": "a level of quality",
    "cn_def": "標準;水準"
  },
  "agreement": {
    "pos": "n.",
    "en_def": "a situation in which people share the same opinion",
    "cn_def": "共識;同意"
  },
  "reduction": {
    "pos": "n.",
    "en_def": "a decrease in size or amount",
    "cn_def": "減少;降低"
  },
  "epidemiology": {
    "pos": "n.",
    "en_def": "the study of how diseases spread in populations",
    "cn_def": "流行病學"
  },
  "inadequacy": {
    "pos": "n.",
    "en_def": "the state of not being good enough",
    "cn_def": "不足;不充分"
  },
  "cataract": {
    "pos": "n.",
    "en_def": "a cloudy area in the eye that makes it hard to see",
    "cn_def": "白內障"
  },
  "compassionate": {
    "pos": "adj.",
    "en_def": "showing kindness and care for people who suffer",
    "cn_def": "有同情心的"
  },
  "unhealthy": {
    "pos": "adj.",
    "en_def": "bad for your health",
    "cn_def": "不健康的"
  },
  "physiological": {
    "pos": "adj.",
    "en_def": "relating to how the body works",
    "cn_def": "生理的"
  },
  "incapacity": {
    "pos": "n.",
    "en_def": "the inability to do something",
    "cn_def": "無能力;失能"
  },
  "bedtime": {
    "pos": "n.",
    "en_def": "the time when you usually go to bed",
    "cn_def": "就寢時間"
  },
  "inpatient": {
    "pos": "n.",
    "en_def": "a patient who stays in a hospital for treatment",
    "cn_def": "住院病人"
  },
  "border control": {
    "pos": "n.phr.",
    "en_def": "checks on people entering a country",
    "cn_def": "邊境管制"
  },
  "assisted living": {
    "pos": "n.phr.",
    "en_def": "housing where older people get some help with daily tasks",
    "cn_def": "協助型生活住宅"
  },
  "hearing loss": {
    "pos": "n.phr.",
    "en_def": "a reduced ability to hear",
    "cn_def": "聽力損失"
  },
  "overburdened": {
    "pos": "adj.",
    "en_def": "having too much work or too many problems",
    "cn_def": "負擔過重的"
  },
  "unsafe": {
    "pos": "adj.",
    "en_def": "dangerous",
    "cn_def": "不安全的"
  },
  "jab": {
    "pos": "n.",
    "en_def": "an injection, especially a vaccine (informal)",
    "cn_def": "打針;疫苗注射"
  },
  "expectancy": {
    "pos": "n.",
    "en_def": "how long something is expected to last",
    "cn_def": "預期;預期壽命"
  },
  "capsule": {
    "pos": "n.",
    "en_def": "a small tube of medicine that you swallow whole",
    "cn_def": "膠囊"
  },
  "prescription": {
    "pos": "n.",
    "en_def": "a doctor's written order for medicine",
    "cn_def": "處方箋"
  },
  "infringement": {
    "pos": "n.",
    "en_def": "an action that breaks a rule or law",
    "cn_def": "侵犯;違反"
  },
  "reimburse": {
    "pos": "v.",
    "en_def": "to pay back money someone has spent",
    "cn_def": "償還;給付"
  },
  "counsel": {
    "pos": "v.",
    "en_def": "to give advice to someone about their problems",
    "cn_def": "輔導;提供諮詢"
  },
  "quit": {
    "pos": "v.",
    "en_def": "to stop doing something, such as smoking",
    "cn_def": "戒除;停止"
  },
  "healthcare worker": {
    "pos": "n.phr.",
    "en_def": "a person who works in medical care, such as a nurse",
    "cn_def": "醫事人員;醫療工作者"
  },
  "medical record": {
    "pos": "n.phr.",
    "en_def": "the official history of a person's health and treatment",
    "cn_def": "病歷"
  },
  "health education": {
    "pos": "n.phr.",
    "en_def": "teaching people how to stay healthy",
    "cn_def": "健康教育"
  },
  "retirement age": {
    "pos": "n.phr.",
    "en_def": "the age at which people usually stop working",
    "cn_def": "退休年齡"
  },
  "silver economy": {
    "pos": "n.phr.",
    "en_def": "business and services aimed at older people",
    "cn_def": "銀髮經濟"
  },
  "face mask": {
    "pos": "n.phr.",
    "en_def": "a covering for the nose and mouth",
    "cn_def": "口罩"
  },
  "quality": {
    "pos": "n.",
    "en_def": "how good something is",
    "cn_def": "品質"
  },
  "discomfort": {
    "pos": "n.",
    "en_def": "a feeling of mild pain or being uncomfortable",
    "cn_def": "不適"
  },
  "waiting list": {
    "pos": "n.phr.",
    "en_def": "a list of people who must wait for a service",
    "cn_def": "候補名單;等候名單"
  },
  "early detection": {
    "pos": "n.phr.",
    "en_def": "finding a disease at an early stage",
    "cn_def": "早期發現"
  },
  "participation": {
    "pos": "n.",
    "en_def": "taking part in an activity",
    "cn_def": "參與"
  },
  "allowance": {
    "pos": "n.",
    "en_def": "money given regularly for a special purpose",
    "cn_def": "津貼;補助"
  },
  "nicotine": {
    "pos": "n.",
    "en_def": "the addictive drug in cigarettes",
    "cn_def": "尼古丁"
  },
  "licensing": {
    "pos": "n.",
    "en_def": "giving official permission to do something",
    "cn_def": "核發執照;許可"
  },
  "salt": {
    "pos": "n.",
    "en_def": "a white substance used to flavour food",
    "cn_def": "鹽"
  },
  "retirement home": {
    "pos": "n.phr.",
    "en_def": "a place where retired people live together",
    "cn_def": "養老院;退休住宅"
  },
  "ageing population": {
    "pos": "n.phr.",
    "en_def": "a population with a growing share of old people",
    "cn_def": "人口老化"
  },
  "a new lease of life": {
    "pos": "n.phr.",
    "en_def": "a chance to be active and happy again",
    "cn_def": "重獲新生;煥然一新"
  },
  "acupuncture": {
    "pos": "n.",
    "en_def": "treatment using thin needles put into the skin",
    "cn_def": "針灸"
  },
  "pharmacy": {
    "pos": "n.",
    "en_def": "a shop where medicines are sold",
    "cn_def": "藥局"
  },
  "exacerbation": {
    "pos": "n.",
    "en_def": "the act of making a problem worse",
    "cn_def": "惡化;加劇"
  },
  "commencement": {
    "pos": "n.",
    "en_def": "the beginning of something",
    "cn_def": "開始"
  },
  "belief": {
    "pos": "n.",
    "en_def": "a feeling that something is true",
    "cn_def": "信念;看法"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of providing a service",
    "cn_def": "提供;遞送"
  },
  "palliative care": {
    "pos": "n.phr.",
    "en_def": "care that reduces pain for people who cannot be cured",
    "cn_def": "安寧緩和照護"
  },
  "blood test": {
    "pos": "n.phr.",
    "en_def": "a check of a small amount of blood for health problems",
    "cn_def": "驗血"
  },
  "intergenerational": {
    "pos": "adj.",
    "en_def": "involving people of different generations",
    "cn_def": "跨世代的"
  },
  "age-friendly": {
    "pos": "adj.",
    "en_def": "designed to be easy for older people to use",
    "cn_def": "高齡友善的"
  },
  "unequal": {
    "pos": "adj.",
    "en_def": "not fair or the same for everyone",
    "cn_def": "不平等的"
  },
  "frailty": {
    "pos": "n.",
    "en_def": "the state of being physically weak, often due to age",
    "cn_def": "衰弱"
  },
  "chemotherapy": {
    "pos": "n.",
    "en_def": "treatment of cancer with strong drugs",
    "cn_def": "化學治療;化療"
  },
  "detriment": {
    "pos": "n.",
    "en_def": "harm or damage",
    "cn_def": "損害;傷害"
  },
  "fragility": {
    "pos": "n.",
    "en_def": "the quality of being weak and easily broken",
    "cn_def": "脆弱"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "an official check",
    "cn_def": "檢查;稽查"
  },
  "precondition": {
    "pos": "n.",
    "en_def": "something that must happen before something else",
    "cn_def": "先決條件"
  },
  "immunise": {
    "pos": "v.",
    "en_def": "to protect someone from disease, usually with a vaccine",
    "cn_def": "使免疫;為……預防注射"
  },
  "floss": {
    "pos": "v.",
    "en_def": "to clean between your teeth with a thin thread",
    "cn_def": "用牙線清潔"
  },
  "supervise": {
    "pos": "v.",
    "en_def": "to watch over someone to make sure they act correctly",
    "cn_def": "監督;督導"
  },
  "sustainability": {
    "pos": "n.",
    "en_def": "the ability to continue for a long time",
    "cn_def": "永續性"
  },
  "tobacco": {
    "pos": "n.",
    "en_def": "dried leaves that are smoked in cigarettes",
    "cn_def": "菸草"
  },
  "inequity": {
    "pos": "n.",
    "en_def": "unfairness",
    "cn_def": "不公平"
  },
  "equality": {
    "pos": "n.",
    "en_def": "the state of being equal",
    "cn_def": "平等"
  }
};

const EXTRA_GLOSSES = {};
