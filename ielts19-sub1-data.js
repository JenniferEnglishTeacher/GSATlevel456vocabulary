// Topic 19 Subunit 1 Quiz Data: Medical Care & Hospitals 醫療照護與醫院
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S01 - Medical Care & Hospitals 醫療照護與醫院",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "clinic",
    "pos": "n.",
    "cn_def": "診所",
    "en_def": "a small place where people see a doctor",
    "sentence": "My grandmother goes to the {{BLANK}} near our home every month, and the doctor there checks her blood pressure.",
    "cn": "我奶奶每個月都去我們家附近的診所,那裡的醫生會幫她量血壓。"
  },
  {
    "word": "outpatient",
    "pos": "n.",
    "cn_def": "門診病人",
    "en_def": "a patient who visits a hospital but does not stay overnight",
    "sentence": "The hospital treats more than two thousand {{BLANK}} every day, so the waiting area is always crowded.",
    "cn": "這間醫院每天治療兩千多名門診病人,所以候診區總是很擁擠。"
  },
  {
    "word": "inpatient",
    "pos": "n.",
    "cn_def": "住院病人",
    "en_def": "a patient who stays in a hospital for treatment",
    "sentence": "Visitors can see {{BLANK}} only between six and eight in the evening, because the patients need plenty of rest.",
    "cn": "訪客只能在晚上六點到八點探視住院病人,因為病人需要充分休息。"
  },
  {
    "word": "emergency room",
    "pos": "n.phr.",
    "cn_def": "急診室",
    "en_def": "the part of a hospital for people who need help immediately",
    "sentence": "My brother broke his arm at basketball practice, so we rushed him to the {{BLANK}} late at night.",
    "cn": "我弟弟在籃球練習時摔斷了手臂,所以我們深夜急忙把他送到急診室。"
  },
  {
    "word": "ambulance",
    "pos": "n.",
    "cn_def": "救護車",
    "en_def": "a vehicle that takes sick or injured people to hospital",
    "sentence": "An old man fainted on the MRT platform, and a passenger called an {{BLANK}} while others gave him water.",
    "cn": "一位老先生在捷運月台上昏倒,一名乘客叫了救護車,其他人則給他水喝。"
  },
  {
    "word": "paramedic",
    "pos": "n.",
    "cn_def": "醫護救援人員",
    "en_def": "a trained person who gives medical help in an ambulance",
    "sentence": "The {{BLANK}} arrived within ten minutes, and they treated the driver before they took him to hospital.",
    "cn": "醫護救援人員在十分鐘內抵達,他們先為駕駛治療,再把他送往醫院。"
  },
  {
    "word": "general practitioner",
    "pos": "n.phr.",
    "cn_def": "家庭醫師;一般科醫師",
    "en_def": "a family doctor who treats common illnesses",
    "sentence": "If you have a cough that lasts for weeks, you should first see a {{BLANK}}, and he may send you to a specialist.",
    "cn": "如果你咳嗽持續好幾週,應該先去看家庭醫師,他可能會把你轉介給專科醫師。"
  },
  {
    "word": "physician",
    "pos": "n.",
    "cn_def": "內科醫師;醫師",
    "en_def": "a medical doctor",
    "sentence": "The {{BLANK}} listened carefully to my father's heart, but she said he needed more tests to be sure.",
    "cn": "那位醫師仔細聽了我爸爸的心跳,但她說需要更多檢查才能確定。"
  },
  {
    "word": "specialist",
    "pos": "n.",
    "cn_def": "專科醫師",
    "en_def": "a doctor who knows a lot about one area of medicine",
    "sentence": "My mother waited three weeks to see a skin {{BLANK}}, but the treatment finally cleared her problem.",
    "cn": "我媽媽等了三週才看到皮膚科專科醫師,但治療終於解決了她的問題。"
  },
  {
    "word": "pharmacist",
    "pos": "n.",
    "cn_def": "藥劑師",
    "en_def": "a person who prepares and sells medicine",
    "sentence": "The {{BLANK}} explained how often I should take the medicine, and she warned me not to drink coffee with it.",
    "cn": "藥劑師向我解釋藥要多久吃一次,還提醒我不要配咖啡服用。"
  },
  {
    "word": "pharmacy",
    "pos": "n.",
    "cn_def": "藥局",
    "en_def": "a shop where medicines are sold",
    "sentence": "There is a 24-hour {{BLANK}} next to the hospital, so patients can get their medicine even late at night.",
    "cn": "醫院旁邊有一家二十四小時營業的藥局,所以病人即使深夜也能拿到藥。"
  },
  {
    "word": "prescription",
    "pos": "n.",
    "cn_def": "處方箋",
    "en_def": "a doctor's written order for medicine",
    "sentence": "You cannot buy this strong medicine without a {{BLANK}}, so you need to see a doctor first.",
    "cn": "沒有處方箋你不能買這種強效藥物,所以你需要先去看醫生。"
  },
  {
    "word": "check-up",
    "pos": "n.",
    "cn_def": "健康檢查",
    "en_def": "a general medical examination",
    "sentence": "My parents have a full {{BLANK}} every year, because doctors can find many problems early this way.",
    "cn": "我爸媽每年都做一次完整的健康檢查,因為醫生可以藉此及早發現許多問題。"
  },
  {
    "word": "appointment",
    "pos": "n.",
    "cn_def": "預約;掛號",
    "en_def": "an arranged time to meet a doctor or other person",
    "sentence": "I made an {{BLANK}} with the dentist online, so I did not have to wait in line at the clinic.",
    "cn": "我在網路上和牙醫預約了時間,所以不必在診所排隊等候。"
  },
  {
    "word": "waiting list",
    "pos": "n.phr.",
    "cn_def": "候補名單;等候名單",
    "en_def": "a list of people who must wait for a service",
    "sentence": "There is a long {{BLANK}} for knee operations, so some patients wait almost a year for surgery.",
    "cn": "膝蓋手術的等候名單很長,所以有些病人要等將近一年才能開刀。"
  },
  {
    "word": "admit",
    "pos": "v.",
    "cn_def": "使住院;收治",
    "en_def": "to let someone stay in hospital for treatment",
    "sentence": "The doctor decided to {{BLANK}} my grandfather for a few days, because his fever was not going down.",
    "cn": "醫生決定讓我爺爺住院幾天,因為他的燒一直沒有退。"
  },
  {
    "word": "referral",
    "pos": "n.",
    "cn_def": "轉介;轉診",
    "en_def": "sending a patient to another doctor or service",
    "sentence": "My family doctor wrote a {{BLANK}} to the eye hospital, and I got an appointment there the next week.",
    "cn": "我的家庭醫師開了一張到眼科醫院的轉診單,我隔週就在那裡掛到號了。"
  },
  {
    "word": "consultation",
    "pos": "n.",
    "cn_def": "看診;諮詢",
    "en_def": "a meeting with a doctor to discuss a health problem",
    "sentence": "Each {{BLANK}} lasts only five minutes at the busy clinic, so I write down my questions before I go.",
    "cn": "在那間忙碌的診所,每次看診只有五分鐘,所以我去之前會先把問題寫下來。"
  },
  {
    "word": "intensive care unit",
    "pos": "n.phr.",
    "cn_def": "加護病房",
    "en_def": "a hospital area for very seriously ill patients",
    "sentence": "After the car accident, the driver spent two weeks in the {{BLANK}}, but he is now slowly recovering.",
    "cn": "車禍之後,那名駕駛在加護病房待了兩週,但他現在正慢慢康復。"
  },
  {
    "word": "stretcher",
    "pos": "n.",
    "cn_def": "擔架",
    "en_def": "a long frame used to carry a sick or injured person",
    "sentence": "The player could not walk after the fall, so two medics carried him off the field on a {{BLANK}}.",
    "cn": "那名球員跌倒後無法走路,所以兩名醫護人員用擔架把他抬離球場。"
  },
  {
    "word": "wheelchair",
    "pos": "n.",
    "cn_def": "輪椅",
    "en_def": "a chair with wheels for people who cannot walk",
    "sentence": "My grandmother uses a {{BLANK}} after her operation, so we chose a restaurant with no steps at the entrance.",
    "cn": "我奶奶手術後要坐輪椅,所以我們選了一家入口沒有階梯的餐廳。"
  },
  {
    "word": "blood test",
    "pos": "n.phr.",
    "cn_def": "驗血",
    "en_def": "a check of a small amount of blood for health problems",
    "sentence": "You must not eat breakfast before the {{BLANK}}, because food can change the results.",
    "cn": "驗血前你不能吃早餐,因為食物會影響檢驗結果。"
  },
  {
    "word": "medical record",
    "pos": "n.phr.",
    "cn_def": "病歷",
    "en_def": "the official history of a person's health and treatment",
    "sentence": "Doctors in Taiwan can check your {{BLANK}} on your health card, so they know which medicines you are taking.",
    "cn": "台灣的醫生可以透過健保卡查看你的病歷,所以他們知道你正在服用哪些藥。"
  },
  {
    "word": "health insurance",
    "pos": "n.phr.",
    "cn_def": "健康保險",
    "en_def": "a system that pays for medical care",
    "sentence": "Most people in Taiwan have national {{BLANK}}, so a visit to the doctor costs only a few hundred dollars.",
    "cn": "台灣大多數人都有全民健康保險,所以看一次醫生只要幾百元。"
  },
  {
    "word": "triage",
    "pos": "n.",
    "cn_def": "檢傷分類",
    "en_def": "deciding which patients need treatment first",
    "sentence": "In the emergency room, nurses use {{BLANK}} to decide who needs help first, so people with small injuries may wait longer.",
    "cn": "在急診室裡,護理師會用檢傷分類決定誰最需要先治療,所以小傷的人可能要等比較久。"
  },
  {
    "word": "paediatrician",
    "pos": "n.",
    "cn_def": "小兒科醫師",
    "en_def": "a doctor who treats children",
    "sentence": "The baby had a high temperature all night, so her parents took her to the {{BLANK}} early in the morning.",
    "cn": "寶寶整晚發高燒,所以她的爸媽一大早就帶她去看小兒科醫師。"
  },
  {
    "word": "cardiologist",
    "pos": "n.",
    "cn_def": "心臟科醫師",
    "en_def": "a doctor who treats heart problems",
    "sentence": "My uncle often felt pain in his chest, so his doctor sent him to a {{BLANK}} for more tests.",
    "cn": "我叔叔常常胸口痛,所以他的醫生把他轉給心臟科醫師做更多檢查。"
  },
  {
    "word": "operating theatre",
    "pos": "n.phr.",
    "cn_def": "手術室",
    "en_def": "a room in a hospital where operations are done",
    "sentence": "The surgeons were already waiting in the {{BLANK}}, and the nurses prepared all the tools for the long operation.",
    "cn": "外科醫師已經在手術室裡等候,護理師們則為這場漫長的手術準備好所有器械。"
  },
  {
    "word": "hospital bed",
    "pos": "n.phr.",
    "cn_def": "病床",
    "en_def": "a bed in a hospital for a patient",
    "sentence": "During the flu season there were not enough {{BLANK}}, so some patients had to stay in the corridor.",
    "cn": "流感季期間病床不夠,所以有些病人只能待在走廊上。"
  },
  {
    "word": "out-of-pocket",
    "pos": "adj.",
    "cn_def": "自費的;自付的",
    "en_def": "paid by the patient, not by insurance",
    "sentence": "The new cancer drug is not covered by insurance, so the {{BLANK}} costs are too high for many families.",
    "cn": "這種新的抗癌藥不在保險給付範圍內,所以自費金額對許多家庭來說太高了。"
  },
  {
    "word": "medical staff",
    "pos": "n.phr.",
    "cn_def": "醫護人員",
    "en_def": "the doctors and nurses who work in a hospital",
    "sentence": "The {{BLANK}} worked very long hours during the pandemic, and many of them were completely exhausted.",
    "cn": "疫情期間醫護人員工作時數非常長,他們當中許多人都筋疲力盡。"
  },
  {
    "word": "night shift",
    "pos": "n.phr.",
    "cn_def": "夜班",
    "en_def": "a period of work during the night",
    "sentence": "My aunt is a nurse who often works the {{BLANK}}, so she sleeps during the day while we are at school.",
    "cn": "我阿姨是護理師,經常上夜班,所以我們上學時她在白天睡覺。"
  }
];

const MCQS = [
  {
    "q": "My grandmother goes to the _____ near our home every month, and the doctor there checks her blood pressure.",
    "options": [
      "renewal",
      "clinic",
      "pandemic",
      "certification"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The hospital treats more than two thousand _____ every day, so the waiting area is always crowded.",
    "options": [
      "adulthood",
      "smartwatch",
      "outpatient",
      "disability"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Visitors can see _____ only between six and eight in the evening, because the patients need plenty of rest.",
    "options": [
      "expectancy",
      "remission",
      "enrolment",
      "inpatient"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "My brother broke his arm at basketball practice, so we rushed him to the _____ late at night.",
    "options": [
      "emergency room",
      "dependency ratio",
      "reading glasses",
      "healthcare worker"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "An old man fainted on the MRT platform, and a passenger called an _____ while others gave him water.",
    "options": [
      "disability",
      "governance",
      "ambulance",
      "chemotherapy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The _____ arrived within ten minutes, and they treated the driver before they took him to hospital.",
    "options": [
      "tobacco",
      "paramedic",
      "allowance",
      "antiseptic"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "If you have a cough that lasts for weeks, you should first see a _____, and he may send you to a specialist.",
    "options": [
      "face mask",
      "body mass index",
      "walking stick",
      "general practitioner"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The _____ listened carefully to my father's heart, but she said he needed more tests to be sure.",
    "options": [
      "physician",
      "adulthood",
      "recommendation",
      "infirmity"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "My mother waited three weeks to see a skin _____, but the treatment finally cleared her problem.",
    "options": [
      "overdose",
      "frailty",
      "cough",
      "specialist"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ explained how often I should take the medicine, and she warned me not to drink coffee with it.",
    "options": [
      "approval",
      "pharmacist",
      "antiseptic",
      "asthma"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "There is a 24-hour _____ next to the hospital, so patients can get their medicine even late at night.",
    "options": [
      "endorsement",
      "affluence",
      "pharmacy",
      "infirmity"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "You cannot buy this strong medicine without a _____, so you need to see a doctor first.",
    "options": [
      "prescription",
      "epidemiology",
      "needle",
      "recipient"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "My parents have a full _____ every year, because doctors can find many problems early this way.",
    "options": [
      "enrolment",
      "discomfort",
      "check-up",
      "affluence"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "I made an _____ with the dentist online, so I did not have to wait in line at the clinic.",
    "options": [
      "allergy",
      "appointment",
      "facility",
      "morbidity"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "There is a long _____ for knee operations, so some patients wait almost a year for surgery.",
    "options": [
      "waiting list",
      "portion size",
      "social distancing",
      "vaccine hesitancy"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The doctor decided to _____ my grandfather for a few days, because his fever was not going down.",
    "options": [
      "overuse",
      "quit",
      "immunise",
      "admit"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "My family doctor wrote a _____ to the eye hospital, and I got an appointment there the next week.",
    "options": [
      "droplet",
      "certification",
      "referral",
      "disease"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Each _____ lasts only five minutes at the busy clinic, so I write down my questions before I go.",
    "options": [
      "readiness",
      "consultation",
      "commencement",
      "acupuncture"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "After the car accident, the driver spent two weeks in the _____, but he is now slowly recovering.",
    "options": [
      "intensive care unit",
      "end-of-life care",
      "super-aged society",
      "a bitter pill to swallow"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The player could not walk after the fall, so two medics carried him off the field on a _____.",
    "options": [
      "governance",
      "frailty",
      "reassurance",
      "stretcher"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "My grandmother uses a _____ after her operation, so we chose a restaurant with no steps at the entrance.",
    "options": [
      "belief",
      "wheelchair",
      "endorsement",
      "eyesight"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "You must not eat breakfast before the _____, because food can change the results.",
    "options": [
      "blood test",
      "healthcare worker",
      "dependency ratio",
      "end-of-life care"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Doctors in Taiwan can check your _____ on your health card, so they know which medicines you are taking.",
    "options": [
      "empty nester",
      "runny nose",
      "healthcare worker",
      "medical record"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Most people in Taiwan have national _____, so a visit to the doctor costs only a few hundred dollars.",
    "options": [
      "vaccine hesitancy",
      "second-hand smoke",
      "health insurance",
      "care worker"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "In the emergency room, nurses use _____ to decide who needs help first, so people with small injuries may wait longer.",
    "options": [
      "licensing",
      "antibody",
      "e-cigarette",
      "triage"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The baby had a high temperature all night, so her parents took her to the _____ early in the morning.",
    "options": [
      "belief",
      "paediatrician",
      "chemotherapy",
      "smartwatch"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "My uncle often felt pain in his chest, so his doctor sent him to a _____ for more tests.",
    "options": [
      "asthma",
      "recipient",
      "cardiologist",
      "expectancy"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The surgeons were already waiting in the _____, and the nurses prepared all the tools for the long operation.",
    "options": [
      "operating theatre",
      "hand sanitiser",
      "social distancing",
      "mental health"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "During the flu season there were not enough _____, so some patients had to stay in the corridor.",
    "options": [
      "sore throat",
      "fast food",
      "memory loss",
      "hospital bed"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The new cancer drug is not covered by insurance, so the _____ costs are too high for many families.",
    "options": [
      "out-of-pocket",
      "overweight",
      "curable",
      "age-friendly"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The _____ worked very long hours during the pandemic, and many of them were completely exhausted.",
    "options": [
      "care worker",
      "portion size",
      "medical staff",
      "old age"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "My aunt is a nurse who often works the _____, so she sleeps during the day while we are at school.",
    "options": [
      "step count",
      "night shift",
      "ageing population",
      "body mass index"
    ],
    "answer": 1,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "clinic": {
    "pos": "n.",
    "en_def": "a small place where people see a doctor",
    "cn_def": "診所"
  },
  "outpatient": {
    "pos": "n.",
    "en_def": "a patient who visits a hospital but does not stay overnight",
    "cn_def": "門診病人"
  },
  "inpatient": {
    "pos": "n.",
    "en_def": "a patient who stays in a hospital for treatment",
    "cn_def": "住院病人"
  },
  "emergency room": {
    "pos": "n.phr.",
    "en_def": "the part of a hospital for people who need help immediately",
    "cn_def": "急診室"
  },
  "ambulance": {
    "pos": "n.",
    "en_def": "a vehicle that takes sick or injured people to hospital",
    "cn_def": "救護車"
  },
  "paramedic": {
    "pos": "n.",
    "en_def": "a trained person who gives medical help in an ambulance",
    "cn_def": "醫護救援人員"
  },
  "general practitioner": {
    "pos": "n.phr.",
    "en_def": "a family doctor who treats common illnesses",
    "cn_def": "家庭醫師;一般科醫師"
  },
  "physician": {
    "pos": "n.",
    "en_def": "a medical doctor",
    "cn_def": "內科醫師;醫師"
  },
  "specialist": {
    "pos": "n.",
    "en_def": "a doctor who knows a lot about one area of medicine",
    "cn_def": "專科醫師"
  },
  "pharmacist": {
    "pos": "n.",
    "en_def": "a person who prepares and sells medicine",
    "cn_def": "藥劑師"
  },
  "pharmacy": {
    "pos": "n.",
    "en_def": "a shop where medicines are sold",
    "cn_def": "藥局"
  },
  "prescription": {
    "pos": "n.",
    "en_def": "a doctor's written order for medicine",
    "cn_def": "處方箋"
  },
  "check-up": {
    "pos": "n.",
    "en_def": "a general medical examination",
    "cn_def": "健康檢查"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "an arranged time to meet a doctor or other person",
    "cn_def": "預約;掛號"
  },
  "waiting list": {
    "pos": "n.phr.",
    "en_def": "a list of people who must wait for a service",
    "cn_def": "候補名單;等候名單"
  },
  "admit": {
    "pos": "v.",
    "en_def": "to let someone stay in hospital for treatment",
    "cn_def": "使住院;收治"
  },
  "referral": {
    "pos": "n.",
    "en_def": "sending a patient to another doctor or service",
    "cn_def": "轉介;轉診"
  },
  "consultation": {
    "pos": "n.",
    "en_def": "a meeting with a doctor to discuss a health problem",
    "cn_def": "看診;諮詢"
  },
  "intensive care unit": {
    "pos": "n.phr.",
    "en_def": "a hospital area for very seriously ill patients",
    "cn_def": "加護病房"
  },
  "stretcher": {
    "pos": "n.",
    "en_def": "a long frame used to carry a sick or injured person",
    "cn_def": "擔架"
  },
  "wheelchair": {
    "pos": "n.",
    "en_def": "a chair with wheels for people who cannot walk",
    "cn_def": "輪椅"
  },
  "blood test": {
    "pos": "n.phr.",
    "en_def": "a check of a small amount of blood for health problems",
    "cn_def": "驗血"
  },
  "medical record": {
    "pos": "n.phr.",
    "en_def": "the official history of a person's health and treatment",
    "cn_def": "病歷"
  },
  "health insurance": {
    "pos": "n.phr.",
    "en_def": "a system that pays for medical care",
    "cn_def": "健康保險"
  },
  "triage": {
    "pos": "n.",
    "en_def": "deciding which patients need treatment first",
    "cn_def": "檢傷分類"
  },
  "paediatrician": {
    "pos": "n.",
    "en_def": "a doctor who treats children",
    "cn_def": "小兒科醫師"
  },
  "cardiologist": {
    "pos": "n.",
    "en_def": "a doctor who treats heart problems",
    "cn_def": "心臟科醫師"
  },
  "operating theatre": {
    "pos": "n.phr.",
    "en_def": "a room in a hospital where operations are done",
    "cn_def": "手術室"
  },
  "hospital bed": {
    "pos": "n.phr.",
    "en_def": "a bed in a hospital for a patient",
    "cn_def": "病床"
  },
  "out-of-pocket": {
    "pos": "adj.",
    "en_def": "paid by the patient, not by insurance",
    "cn_def": "自費的;自付的"
  },
  "medical staff": {
    "pos": "n.phr.",
    "en_def": "the doctors and nurses who work in a hospital",
    "cn_def": "醫護人員"
  },
  "night shift": {
    "pos": "n.phr.",
    "en_def": "a period of work during the night",
    "cn_def": "夜班"
  },
  "renewal": {
    "pos": "n.",
    "en_def": "the act of making something valid again",
    "cn_def": "更新;續約"
  },
  "pandemic": {
    "pos": "n.",
    "en_def": "a disease that spreads over many countries",
    "cn_def": "全球大流行病"
  },
  "certification": {
    "pos": "n.",
    "en_def": "an official document that proves something",
    "cn_def": "認證;證照"
  },
  "adulthood": {
    "pos": "n.",
    "en_def": "the time of life when you are an adult",
    "cn_def": "成年期"
  },
  "smartwatch": {
    "pos": "n.",
    "en_def": "a watch that works like a small computer",
    "cn_def": "智慧手錶"
  },
  "disability": {
    "pos": "n.",
    "en_def": "a condition that limits a person's movement or senses",
    "cn_def": "身心障礙;失能"
  },
  "expectancy": {
    "pos": "n.",
    "en_def": "how long something is expected to last",
    "cn_def": "預期;預期壽命"
  },
  "remission": {
    "pos": "n.",
    "en_def": "a period when a serious illness becomes less severe",
    "cn_def": "緩解期"
  },
  "enrolment": {
    "pos": "n.",
    "en_def": "the act of officially joining a programme",
    "cn_def": "登記;報名"
  },
  "dependency ratio": {
    "pos": "n.phr.",
    "en_def": "the number of non-working people compared with workers",
    "cn_def": "扶養比"
  },
  "reading glasses": {
    "pos": "n.phr.",
    "en_def": "glasses that help older people see small print",
    "cn_def": "老花眼鏡"
  },
  "healthcare worker": {
    "pos": "n.phr.",
    "en_def": "a person who works in medical care, such as a nurse",
    "cn_def": "醫事人員;醫療工作者"
  },
  "governance": {
    "pos": "n.",
    "en_def": "the way an organisation is controlled and managed",
    "cn_def": "治理"
  },
  "chemotherapy": {
    "pos": "n.",
    "en_def": "treatment of cancer with strong drugs",
    "cn_def": "化學治療;化療"
  },
  "tobacco": {
    "pos": "n.",
    "en_def": "dried leaves that are smoked in cigarettes",
    "cn_def": "菸草"
  },
  "allowance": {
    "pos": "n.",
    "en_def": "money given regularly for a special purpose",
    "cn_def": "津貼;補助"
  },
  "antiseptic": {
    "pos": "n.",
    "en_def": "a liquid or cream that kills germs on cuts",
    "cn_def": "消毒劑;抗菌劑"
  },
  "face mask": {
    "pos": "n.phr.",
    "en_def": "a covering for the nose and mouth",
    "cn_def": "口罩"
  },
  "body mass index": {
    "pos": "n.phr.",
    "en_def": "a number based on weight and height used to judge health",
    "cn_def": "身體質量指數;BMI"
  },
  "walking stick": {
    "pos": "n.phr.",
    "en_def": "a stick that helps a person walk",
    "cn_def": "手杖;拐杖"
  },
  "recommendation": {
    "pos": "n.",
    "en_def": "a suggestion about what should be done",
    "cn_def": "建議"
  },
  "infirmity": {
    "pos": "n.",
    "en_def": "physical or mental weakness, especially from old age",
    "cn_def": "虛弱;病弱"
  },
  "overdose": {
    "pos": "n.",
    "en_def": "too much of a drug taken at one time",
    "cn_def": "用藥過量"
  },
  "frailty": {
    "pos": "n.",
    "en_def": "the state of being physically weak, often due to age",
    "cn_def": "衰弱"
  },
  "cough": {
    "pos": "n.",
    "en_def": "the act or sound of pushing air out of the throat",
    "cn_def": "咳嗽"
  },
  "approval": {
    "pos": "n.",
    "en_def": "official permission",
    "cn_def": "核准;批准"
  },
  "asthma": {
    "pos": "n.",
    "en_def": "an illness that makes breathing difficult at times",
    "cn_def": "氣喘"
  },
  "endorsement": {
    "pos": "n.",
    "en_def": "public support or approval",
    "cn_def": "背書;支持"
  },
  "affluence": {
    "pos": "n.",
    "en_def": "the state of having a lot of money",
    "cn_def": "富裕"
  },
  "epidemiology": {
    "pos": "n.",
    "en_def": "the study of how diseases spread in populations",
    "cn_def": "流行病學"
  },
  "needle": {
    "pos": "n.",
    "en_def": "a thin sharp metal tube used for injections",
    "cn_def": "針;針頭"
  },
  "recipient": {
    "pos": "n.",
    "en_def": "a person who receives something",
    "cn_def": "接受者;受贈者"
  },
  "discomfort": {
    "pos": "n.",
    "en_def": "a feeling of mild pain or being uncomfortable",
    "cn_def": "不適"
  },
  "allergy": {
    "pos": "n.",
    "en_def": "a bad reaction of the body to certain food, dust or plants",
    "cn_def": "過敏"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building or place for a particular purpose",
    "cn_def": "設施"
  },
  "morbidity": {
    "pos": "n.",
    "en_def": "the rate of illness in a population",
    "cn_def": "罹病率"
  },
  "portion size": {
    "pos": "n.phr.",
    "en_def": "the amount of food served to one person",
    "cn_def": "份量"
  },
  "social distancing": {
    "pos": "n.phr.",
    "en_def": "keeping a safe distance from other people to stop disease",
    "cn_def": "社交距離"
  },
  "vaccine hesitancy": {
    "pos": "n.phr.",
    "en_def": "unwillingness or delay in getting vaccinated",
    "cn_def": "疫苗猶豫"
  },
  "overuse": {
    "pos": "v.",
    "en_def": "to use something too much",
    "cn_def": "過度使用"
  },
  "quit": {
    "pos": "v.",
    "en_def": "to stop doing something, such as smoking",
    "cn_def": "戒除;停止"
  },
  "immunise": {
    "pos": "v.",
    "en_def": "to protect someone from disease, usually with a vaccine",
    "cn_def": "使免疫;為……預防注射"
  },
  "droplet": {
    "pos": "n.",
    "en_def": "a very small drop of liquid",
    "cn_def": "飛沫"
  },
  "disease": {
    "pos": "n.",
    "en_def": "an illness of people, animals or plants",
    "cn_def": "疾病"
  },
  "readiness": {
    "pos": "n.",
    "en_def": "the state of being prepared",
    "cn_def": "準備就緒"
  },
  "commencement": {
    "pos": "n.",
    "en_def": "the beginning of something",
    "cn_def": "開始"
  },
  "acupuncture": {
    "pos": "n.",
    "en_def": "treatment using thin needles put into the skin",
    "cn_def": "針灸"
  },
  "end-of-life care": {
    "pos": "n.phr.",
    "en_def": "medical and emotional care for people near death",
    "cn_def": "臨終照護"
  },
  "super-aged society": {
    "pos": "n.phr.",
    "en_def": "a society where over 20% of people are 65 or older",
    "cn_def": "超高齡社會"
  },
  "a bitter pill to swallow": {
    "pos": "n.phr.",
    "en_def": "an unpleasant fact that you must accept",
    "cn_def": "難以接受的事實"
  },
  "reassurance": {
    "pos": "n.",
    "en_def": "words that make someone feel less worried",
    "cn_def": "安心;寬慰"
  },
  "belief": {
    "pos": "n.",
    "en_def": "a feeling that something is true",
    "cn_def": "信念;看法"
  },
  "eyesight": {
    "pos": "n.",
    "en_def": "the ability to see",
    "cn_def": "視力"
  },
  "empty nester": {
    "pos": "n.",
    "en_def": "a parent whose children have grown up and left home",
    "cn_def": "空巢父母"
  },
  "runny nose": {
    "pos": "n.phr.",
    "en_def": "a nose with liquid coming out because of a cold",
    "cn_def": "流鼻水"
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
  "licensing": {
    "pos": "n.",
    "en_def": "giving official permission to do something",
    "cn_def": "核發執照;許可"
  },
  "antibody": {
    "pos": "n.",
    "en_def": "a substance the body makes to fight germs",
    "cn_def": "抗體"
  },
  "e-cigarette": {
    "pos": "n.",
    "en_def": "an electronic device that lets people breathe in nicotine",
    "cn_def": "電子菸"
  },
  "hand sanitiser": {
    "pos": "n.phr.",
    "en_def": "a liquid that kills germs on your hands without water",
    "cn_def": "乾洗手液"
  },
  "mental health": {
    "pos": "n.phr.",
    "en_def": "the health of a person's mind and feelings",
    "cn_def": "心理健康"
  },
  "sore throat": {
    "pos": "n.phr.",
    "en_def": "pain in the throat, often from a cold",
    "cn_def": "喉嚨痛"
  },
  "fast food": {
    "pos": "n.phr.",
    "en_def": "quick, cheap food such as burgers and fries",
    "cn_def": "速食"
  },
  "memory loss": {
    "pos": "n.phr.",
    "en_def": "the inability to remember things",
    "cn_def": "失憶;記憶力減退"
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "heavier than is healthy",
    "cn_def": "過重的"
  },
  "curable": {
    "pos": "adj.",
    "en_def": "able to be cured",
    "cn_def": "可治癒的"
  },
  "age-friendly": {
    "pos": "adj.",
    "en_def": "designed to be easy for older people to use",
    "cn_def": "高齡友善的"
  },
  "old age": {
    "pos": "n.phr.",
    "en_def": "the later part of life",
    "cn_def": "老年;晚年"
  },
  "step count": {
    "pos": "n.phr.",
    "en_def": "the number of steps you walk in a day",
    "cn_def": "步數"
  },
  "ageing population": {
    "pos": "n.phr.",
    "en_def": "a population with a growing share of old people",
    "cn_def": "人口老化"
  }
};

const EXTRA_GLOSSES = {};
