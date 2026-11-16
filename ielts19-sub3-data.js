// Topic 19 Subunit 3 Quiz Data: Vaccines, Medicine & Treatment 疫苗、藥物與治療
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S03 - Vaccines, Medicine & Treatment 疫苗、藥物與治療",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "vaccination",
    "pos": "n.",
    "cn_def": "預防接種",
    "en_def": "giving people a vaccine to protect them from disease",
    "sentence": "{{BLANK}} has saved millions of lives, but some parents still worry about the side effects.",
    "cn": "預防接種已經拯救了數百萬條生命,但有些家長仍擔心副作用。"
  },
  {
    "word": "vaccinate",
    "pos": "v.",
    "cn_def": "為……接種疫苗",
    "en_def": "to give someone a vaccine",
    "sentence": "The school nurse will {{BLANK}} all first-year students next week, so parents must sign the form by Friday.",
    "cn": "學校護理師下週將為所有一年級學生接種疫苗,所以家長必須在週五前簽好同意書。"
  },
  {
    "word": "booster",
    "pos": "n.",
    "cn_def": "追加劑",
    "en_def": "an extra dose of a vaccine to keep protection strong",
    "sentence": "Protection from the vaccine becomes weaker over time, so older people are advised to get a {{BLANK}} every year.",
    "cn": "疫苗的保護力會隨著時間減弱,所以建議長者每年接種一劑追加劑。"
  },
  {
    "word": "jab",
    "pos": "n.",
    "cn_def": "打針;疫苗注射",
    "en_def": "an injection, especially a vaccine (informal)",
    "sentence": "I was nervous about my flu {{BLANK}}, but it was quick and my arm only hurt a little the next day.",
    "cn": "我對打流感疫苗很緊張,但它很快就結束了,隔天手臂只痛了一點點。"
  },
  {
    "word": "dose",
    "pos": "n.",
    "cn_def": "一劑;劑量",
    "en_def": "an amount of medicine taken at one time",
    "sentence": "Take one {{BLANK}} of this medicine after each meal, but do not take more than three in one day.",
    "cn": "這種藥每餐飯後吃一劑,但一天不要超過三次。"
  },
  {
    "word": "pill",
    "pos": "n.",
    "cn_def": "藥丸",
    "en_def": "a small round piece of medicine that you swallow",
    "sentence": "My grandfather takes four different {{BLANK}} every morning, so he uses a box with the days of the week on it.",
    "cn": "我爺爺每天早上要吃四種不同的藥丸,所以他用一個標有星期幾的藥盒。"
  },
  {
    "word": "capsule",
    "pos": "n.",
    "cn_def": "膠囊",
    "en_def": "a small tube of medicine that you swallow whole",
    "sentence": "Swallow the {{BLANK}} with a full glass of water, and do not open it or chew it.",
    "cn": "請配一整杯水吞下這顆膠囊,不要打開或咀嚼它。"
  },
  {
    "word": "antiviral",
    "pos": "adj.",
    "cn_def": "抗病毒的",
    "en_def": "used to fight viruses",
    "sentence": "The doctor gave her {{BLANK}} medicine on the first day of the flu, so she recovered much faster.",
    "cn": "醫生在她得流感的第一天就開了抗病毒藥物,所以她康復得快多了。"
  },
  {
    "word": "ointment",
    "pos": "n.",
    "cn_def": "藥膏",
    "en_def": "a smooth cream you put on the skin to heal it",
    "sentence": "Put this {{BLANK}} on the burn twice a day, and keep the area clean and dry.",
    "cn": "這種藥膏每天擦在燙傷處兩次,並保持患部清潔乾燥。"
  },
  {
    "word": "syringe",
    "pos": "n.",
    "cn_def": "注射器;針筒",
    "en_def": "a tube with a needle used to give injections",
    "sentence": "The nurse filled the {{BLANK}} with the vaccine, and then she asked me to relax my arm.",
    "cn": "護理師把疫苗吸進注射器,然後請我放鬆手臂。"
  },
  {
    "word": "injection",
    "pos": "n.",
    "cn_def": "注射;打針",
    "en_def": "putting medicine into the body with a needle",
    "sentence": "Some children cry when they get an {{BLANK}}, so the nurse gives them a sticker afterwards.",
    "cn": "有些孩子打針時會哭,所以護理師之後會送他們一張貼紙。"
  },
  {
    "word": "inject",
    "pos": "v.",
    "cn_def": "注射",
    "en_def": "to put medicine into the body with a needle",
    "sentence": "People with diabetes may need to {{BLANK}} insulin every day, so they learn to do it themselves.",
    "cn": "糖尿病患者可能每天都需要注射胰島素,所以他們學會自己打針。"
  },
  {
    "word": "antiseptic",
    "pos": "n.",
    "cn_def": "消毒劑;抗菌劑",
    "en_def": "a liquid or cream that kills germs on cuts",
    "sentence": "Clean the cut with some {{BLANK}} first, or it may become infected in this hot weather.",
    "cn": "先用一點消毒劑清潔傷口,否則在這麼熱的天氣裡可能會感染。"
  },
  {
    "word": "heal",
    "pos": "v.",
    "cn_def": "癒合;痊癒",
    "en_def": "to become healthy again after an injury",
    "sentence": "The cut on his hand took two weeks to {{BLANK}}, because he kept getting it wet at work.",
    "cn": "他手上的傷口花了兩週才癒合,因為他工作時一直把它弄濕。"
  },
  {
    "word": "chemotherapy",
    "pos": "n.",
    "cn_def": "化學治療;化療",
    "en_def": "treatment of cancer with strong drugs",
    "sentence": "My aunt lost her hair during {{BLANK}}, but it grew back after her treatment finished.",
    "cn": "我阿姨在化療期間掉了頭髮,但治療結束後頭髮又長回來了。"
  },
  {
    "word": "radiotherapy",
    "pos": "n.",
    "cn_def": "放射治療;放療",
    "en_def": "treatment of cancer using radiation",
    "sentence": "After the operation, he needed six weeks of {{BLANK}}, so he went to the hospital every weekday.",
    "cn": "手術後他需要六週的放射治療,所以他每個平日都要去醫院。"
  },
  {
    "word": "organ donation",
    "pos": "n.phr.",
    "cn_def": "器官捐贈",
    "en_def": "giving a body part to help someone who is ill",
    "sentence": "My father signed up for {{BLANK}}, because he believes it is a way to save lives after death.",
    "cn": "我爸爸簽署了器官捐贈同意書,因為他相信這是死後拯救生命的一種方式。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "手術",
    "en_def": "cutting the body open to repair or remove something",
    "sentence": "The {{BLANK}} on her knee was successful, but she must use crutches for a month.",
    "cn": "她的膝蓋手術很成功,但她必須拄一個月的拐杖。"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "cn_def": "減輕;緩解",
    "en_def": "to make pain or a problem less bad",
    "sentence": "A hot shower can {{BLANK}} the pain in your back, and gentle stretching will also help.",
    "cn": "洗個熱水澡可以緩解背痛,溫和的伸展也會有幫助。"
  },
  {
    "word": "overdose",
    "pos": "n.",
    "cn_def": "用藥過量",
    "en_def": "too much of a drug taken at one time",
    "sentence": "Never take two kinds of cold medicine together, because an {{BLANK}} of paracetamol can damage your liver.",
    "cn": "絕不要同時服用兩種感冒藥,因為乙醯胺酚用藥過量會傷害你的肝臟。"
  },
  {
    "word": "herbal medicine",
    "pos": "n.phr.",
    "cn_def": "草藥",
    "en_def": "medicine made from plants",
    "sentence": "Many older people in Taiwan use {{BLANK}}, but they should tell their doctor because it can mix badly with other drugs.",
    "cn": "台灣許多長者會使用草藥,但他們應該告訴醫生,因為它可能和其他藥物產生不良交互作用。"
  },
  {
    "word": "acupuncture",
    "pos": "n.",
    "cn_def": "針灸",
    "en_def": "treatment using thin needles put into the skin",
    "sentence": "My mother tried {{BLANK}} for her shoulder pain, and she said she felt better after three visits.",
    "cn": "我媽媽為了肩膀痛去試了針灸,她說去了三次後感覺好多了。"
  },
  {
    "word": "over-the-counter",
    "pos": "adj.",
    "cn_def": "非處方的;成藥的",
    "en_def": "able to be bought without a doctor's prescription",
    "sentence": "You can buy {{BLANK}} medicine for a headache at any pharmacy, but read the instructions carefully.",
    "cn": "你可以在任何藥局買到治頭痛的成藥,但要仔細閱讀說明。"
  },
  {
    "word": "generic drug",
    "pos": "n.phr.",
    "cn_def": "學名藥",
    "en_def": "a cheaper copy of a brand-name medicine",
    "sentence": "The hospital now uses a {{BLANK}} for high blood pressure, because it works the same but costs much less.",
    "cn": "醫院現在改用一種治療高血壓的學名藥,因為效果相同但便宜得多。"
  },
  {
    "word": "herd immunity",
    "pos": "n.phr.",
    "cn_def": "群體免疫",
    "en_def": "protection that happens when most people in a group are immune",
    "sentence": "When most children are vaccinated, {{BLANK}} protects babies who are too young for the vaccine.",
    "cn": "當大多數孩子都接種疫苗時,群體免疫就能保護年紀太小還不能打疫苗的嬰兒。"
  },
  {
    "word": "vaccine hesitancy",
    "pos": "n.phr.",
    "cn_def": "疫苗猶豫",
    "en_def": "unwillingness or delay in getting vaccinated",
    "sentence": "{{BLANK}} grew because of false stories online, so doctors started making short videos to explain the facts.",
    "cn": "疫苗猶豫因網路上的不實消息而增加,所以醫生們開始製作短片來說明事實。"
  },
  {
    "word": "needle",
    "pos": "n.",
    "cn_def": "針;針頭",
    "en_def": "a thin sharp metal tube used for injections",
    "sentence": "Some adults are afraid of {{BLANK}}, so they look away while the nurse gives them a vaccine.",
    "cn": "有些大人害怕針頭,所以護理師幫他們打疫苗時他們會把頭轉開。"
  },
  {
    "word": "stitches",
    "pos": "n.",
    "cn_def": "縫針;縫線",
    "en_def": "short threads used to close a cut in the skin",
    "sentence": "He cut his head when he fell off his bike, so the doctor gave him five {{BLANK}} in the emergency room.",
    "cn": "他騎腳踏車摔倒時割傷了頭,所以醫生在急診室幫他縫了五針。"
  },
  {
    "word": "scar",
    "pos": "n.",
    "cn_def": "疤痕",
    "en_def": "a mark left on the skin after a wound heals",
    "sentence": "The operation left a long {{BLANK}} on his stomach, but he says it reminds him how lucky he is.",
    "cn": "手術在他的肚子上留下一道長長的疤痕,但他說這提醒他自己有多幸運。"
  },
  {
    "word": "wound",
    "pos": "n.",
    "cn_def": "傷口",
    "en_def": "an injury where the skin is cut or broken",
    "sentence": "The nurse cleaned the {{BLANK}} carefully and covered it, and she told me to change the bandage every day.",
    "cn": "護理師仔細清理了傷口並包紮起來,她告訴我每天換一次繃帶。"
  },
  {
    "word": "cough syrup",
    "pos": "n.phr.",
    "cn_def": "止咳糖漿",
    "en_def": "a sweet liquid medicine for coughs",
    "sentence": "This {{BLANK}} may make you sleepy, so you should not drive after you take it.",
    "cn": "這種止咳糖漿可能會讓你想睡,所以服用後不應該開車。"
  },
  {
    "word": "eye drops",
    "pos": "n.phr.",
    "cn_def": "眼藥水",
    "en_def": "liquid medicine that you put into your eyes",
    "sentence": "My eyes feel dry after hours on the computer, so the doctor told me to use {{BLANK}} three times a day.",
    "cn": "我在電腦前待好幾個小時後眼睛很乾,所以醫生要我一天點三次眼藥水。"
  }
];

const MCQS = [
  {
    "q": "_____ has saved millions of lives, but some parents still worry about the side effects.",
    "options": [
      "agreement",
      "quality",
      "tobacco",
      "vaccination"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The school nurse will _____ all first-year students next week, so parents must sign the form by Friday.",
    "options": [
      "vaccinate",
      "overstretch",
      "ration",
      "inform"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Protection from the vaccine becomes weaker over time, so older people are advised to get a _____ every year.",
    "options": [
      "discomfort",
      "booster",
      "overcrowding",
      "participation"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "I was nervous about my flu _____, but it was quick and my arm only hurt a little the next day.",
    "options": [
      "triage",
      "fragility",
      "jab",
      "fulfilment"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Take one _____ of this medicine after each meal, but do not take more than three in one day.",
    "options": [
      "dose",
      "toothache",
      "prevention",
      "reduction"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "My grandfather takes four different _____ every morning, so he uses a box with the days of the week on it.",
    "options": [
      "priority",
      "discomfort",
      "paediatrician",
      "pill"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Swallow the _____ with a full glass of water, and do not open it or chew it.",
    "options": [
      "acceptance",
      "immunity",
      "capsule",
      "pandemic"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The doctor gave her _____ medicine on the first day of the flu, so she recovered much faster.",
    "options": [
      "physiological",
      "antiviral",
      "non-invasive",
      "dysfunctional"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Put this _____ on the burn twice a day, and keep the area clean and dry.",
    "options": [
      "ointment",
      "remission",
      "incapacity",
      "enforcement"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The nurse filled the _____ with the vaccine, and then she asked me to relax my arm.",
    "options": [
      "licensing",
      "immunity",
      "syringe",
      "disability"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Some children cry when they get an _____, so the nurse gives them a sticker afterwards.",
    "options": [
      "association",
      "marker",
      "investment",
      "injection"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "People with diabetes may need to _____ insulin every day, so they learn to do it themselves.",
    "options": [
      "inform",
      "inject",
      "skyrocket",
      "prolong"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Clean the cut with some _____ first, or it may become infected in this hot weather.",
    "options": [
      "lockdown",
      "pensioner",
      "waistline",
      "antiseptic"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The cut on his hand took two weeks to _____, because he kept getting it wet at work.",
    "options": [
      "heal",
      "recommend",
      "endanger",
      "self-isolate"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "My aunt lost her hair during _____, but it grew back after her treatment finished.",
    "options": [
      "precondition",
      "chemotherapy",
      "waistline",
      "epidemiology"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "After the operation, he needed six weeks of _____, so he went to the hospital every weekday.",
    "options": [
      "inspection",
      "adulthood",
      "radiotherapy",
      "cough"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "My father signed up for _____, because he believes it is a way to save lives after death.",
    "options": [
      "portion size",
      "organ donation",
      "grey hair",
      "health education"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The _____ on her knee was successful, but she must use crutches for a month.",
    "options": [
      "cavity",
      "smartwatch",
      "objection",
      "operation"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "A hot shower can _____ the pain in your back, and gentle stretching will also help.",
    "options": [
      "sneeze",
      "infect",
      "relieve",
      "endanger"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Never take two kinds of cold medicine together, because an _____ of paracetamol can damage your liver.",
    "options": [
      "overdose",
      "recipient",
      "check-up",
      "disruption"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Many older people in Taiwan use _____, but they should tell their doctor because it can mix badly with other drugs.",
    "options": [
      "general practitioner",
      "herbal medicine",
      "emergency room",
      "hand sanitiser"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "My mother tried _____ for her shoulder pain, and she said she felt better after three visits.",
    "options": [
      "acupuncture",
      "priority",
      "negligence",
      "check-up"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "You can buy _____ medicine for a headache at any pharmacy, but read the instructions carefully.",
    "options": [
      "obese",
      "rehabilitative",
      "precautionary",
      "over-the-counter"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The hospital now uses a _____ for high blood pressure, because it works the same but costs much less.",
    "options": [
      "long-term care",
      "border control",
      "generic drug",
      "health app"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "When most children are vaccinated, _____ protects babies who are too young for the vaccine.",
    "options": [
      "death rate",
      "herd immunity",
      "hearing loss",
      "body mass index"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "_____ grew because of false stories online, so doctors started making short videos to explain the facts.",
    "options": [
      "health insurance",
      "infant mortality",
      "silver economy",
      "vaccine hesitancy"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Some adults are afraid of _____, so they look away while the nurse gives them a vaccine.",
    "options": [
      "infringement",
      "readiness",
      "needle",
      "epidemiology"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "He cut his head when he fell off his bike, so the doctor gave him five _____ in the emergency room.",
    "options": [
      "stitches",
      "arthritis",
      "cough",
      "pandemic"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The operation left a long _____ on his stomach, but he says it reminds him how lucky he is.",
    "options": [
      "disinfectant",
      "governance",
      "scar",
      "exacerbation"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The nurse cleaned the _____ carefully and covered it, and she told me to change the bandage every day.",
    "options": [
      "wound",
      "behaviour",
      "referral",
      "paramedic"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "This _____ may make you sleepy, so you should not drive after you take it.",
    "options": [
      "walking stick",
      "cough syrup",
      "step count",
      "filial piety"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "My eyes feel dry after hours on the computer, so the doctor told me to use _____ three times a day.",
    "options": [
      "smoking ban",
      "empty nester",
      "waiting list",
      "eye drops"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "vaccination": {
    "pos": "n.",
    "en_def": "giving people a vaccine to protect them from disease",
    "cn_def": "預防接種"
  },
  "vaccinate": {
    "pos": "v.",
    "en_def": "to give someone a vaccine",
    "cn_def": "為……接種疫苗"
  },
  "booster": {
    "pos": "n.",
    "en_def": "an extra dose of a vaccine to keep protection strong",
    "cn_def": "追加劑"
  },
  "jab": {
    "pos": "n.",
    "en_def": "an injection, especially a vaccine (informal)",
    "cn_def": "打針;疫苗注射"
  },
  "dose": {
    "pos": "n.",
    "en_def": "an amount of medicine taken at one time",
    "cn_def": "一劑;劑量"
  },
  "pill": {
    "pos": "n.",
    "en_def": "a small round piece of medicine that you swallow",
    "cn_def": "藥丸"
  },
  "capsule": {
    "pos": "n.",
    "en_def": "a small tube of medicine that you swallow whole",
    "cn_def": "膠囊"
  },
  "antiviral": {
    "pos": "adj.",
    "en_def": "used to fight viruses",
    "cn_def": "抗病毒的"
  },
  "ointment": {
    "pos": "n.",
    "en_def": "a smooth cream you put on the skin to heal it",
    "cn_def": "藥膏"
  },
  "syringe": {
    "pos": "n.",
    "en_def": "a tube with a needle used to give injections",
    "cn_def": "注射器;針筒"
  },
  "injection": {
    "pos": "n.",
    "en_def": "putting medicine into the body with a needle",
    "cn_def": "注射;打針"
  },
  "inject": {
    "pos": "v.",
    "en_def": "to put medicine into the body with a needle",
    "cn_def": "注射"
  },
  "antiseptic": {
    "pos": "n.",
    "en_def": "a liquid or cream that kills germs on cuts",
    "cn_def": "消毒劑;抗菌劑"
  },
  "heal": {
    "pos": "v.",
    "en_def": "to become healthy again after an injury",
    "cn_def": "癒合;痊癒"
  },
  "chemotherapy": {
    "pos": "n.",
    "en_def": "treatment of cancer with strong drugs",
    "cn_def": "化學治療;化療"
  },
  "radiotherapy": {
    "pos": "n.",
    "en_def": "treatment of cancer using radiation",
    "cn_def": "放射治療;放療"
  },
  "organ donation": {
    "pos": "n.phr.",
    "en_def": "giving a body part to help someone who is ill",
    "cn_def": "器官捐贈"
  },
  "operation": {
    "pos": "n.",
    "en_def": "cutting the body open to repair or remove something",
    "cn_def": "手術"
  },
  "relieve": {
    "pos": "v.",
    "en_def": "to make pain or a problem less bad",
    "cn_def": "減輕;緩解"
  },
  "overdose": {
    "pos": "n.",
    "en_def": "too much of a drug taken at one time",
    "cn_def": "用藥過量"
  },
  "herbal medicine": {
    "pos": "n.phr.",
    "en_def": "medicine made from plants",
    "cn_def": "草藥"
  },
  "acupuncture": {
    "pos": "n.",
    "en_def": "treatment using thin needles put into the skin",
    "cn_def": "針灸"
  },
  "over-the-counter": {
    "pos": "adj.",
    "en_def": "able to be bought without a doctor's prescription",
    "cn_def": "非處方的;成藥的"
  },
  "generic drug": {
    "pos": "n.phr.",
    "en_def": "a cheaper copy of a brand-name medicine",
    "cn_def": "學名藥"
  },
  "herd immunity": {
    "pos": "n.phr.",
    "en_def": "protection that happens when most people in a group are immune",
    "cn_def": "群體免疫"
  },
  "vaccine hesitancy": {
    "pos": "n.phr.",
    "en_def": "unwillingness or delay in getting vaccinated",
    "cn_def": "疫苗猶豫"
  },
  "needle": {
    "pos": "n.",
    "en_def": "a thin sharp metal tube used for injections",
    "cn_def": "針;針頭"
  },
  "stitches": {
    "pos": "n.",
    "en_def": "short threads used to close a cut in the skin",
    "cn_def": "縫針;縫線"
  },
  "scar": {
    "pos": "n.",
    "en_def": "a mark left on the skin after a wound heals",
    "cn_def": "疤痕"
  },
  "wound": {
    "pos": "n.",
    "en_def": "an injury where the skin is cut or broken",
    "cn_def": "傷口"
  },
  "cough syrup": {
    "pos": "n.phr.",
    "en_def": "a sweet liquid medicine for coughs",
    "cn_def": "止咳糖漿"
  },
  "eye drops": {
    "pos": "n.phr.",
    "en_def": "liquid medicine that you put into your eyes",
    "cn_def": "眼藥水"
  },
  "agreement": {
    "pos": "n.",
    "en_def": "a situation in which people share the same opinion",
    "cn_def": "共識;同意"
  },
  "quality": {
    "pos": "n.",
    "en_def": "how good something is",
    "cn_def": "品質"
  },
  "tobacco": {
    "pos": "n.",
    "en_def": "dried leaves that are smoked in cigarettes",
    "cn_def": "菸草"
  },
  "overstretch": {
    "pos": "v.",
    "en_def": "to make a system try to do more than it can",
    "cn_def": "使不堪負荷"
  },
  "ration": {
    "pos": "v.",
    "en_def": "to limit how much of something each person can have",
    "cn_def": "配給;限量供應"
  },
  "inform": {
    "pos": "v.",
    "en_def": "to tell someone facts",
    "cn_def": "告知;通知"
  },
  "discomfort": {
    "pos": "n.",
    "en_def": "a feeling of mild pain or being uncomfortable",
    "cn_def": "不適"
  },
  "overcrowding": {
    "pos": "n.",
    "en_def": "too many people in one place",
    "cn_def": "過度擁擠"
  },
  "participation": {
    "pos": "n.",
    "en_def": "taking part in an activity",
    "cn_def": "參與"
  },
  "triage": {
    "pos": "n.",
    "en_def": "deciding which patients need treatment first",
    "cn_def": "檢傷分類"
  },
  "fragility": {
    "pos": "n.",
    "en_def": "the quality of being weak and easily broken",
    "cn_def": "脆弱"
  },
  "fulfilment": {
    "pos": "n.",
    "en_def": "a feeling of happiness from doing something useful",
    "cn_def": "滿足感;成就感"
  },
  "toothache": {
    "pos": "n.",
    "en_def": "a pain in a tooth",
    "cn_def": "牙痛"
  },
  "prevention": {
    "pos": "n.",
    "en_def": "stopping something bad from happening",
    "cn_def": "預防"
  },
  "reduction": {
    "pos": "n.",
    "en_def": "a decrease in size or amount",
    "cn_def": "減少;降低"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something that is more important than other things",
    "cn_def": "優先事項"
  },
  "paediatrician": {
    "pos": "n.",
    "en_def": "a doctor who treats children",
    "cn_def": "小兒科醫師"
  },
  "acceptance": {
    "pos": "n.",
    "en_def": "the act of agreeing to or believing in something",
    "cn_def": "接受"
  },
  "immunity": {
    "pos": "n.",
    "en_def": "the body's ability to fight a disease",
    "cn_def": "免疫力"
  },
  "pandemic": {
    "pos": "n.",
    "en_def": "a disease that spreads over many countries",
    "cn_def": "全球大流行病"
  },
  "physiological": {
    "pos": "adj.",
    "en_def": "relating to how the body works",
    "cn_def": "生理的"
  },
  "non-invasive": {
    "pos": "adj.",
    "en_def": "not needing to cut or enter the body",
    "cn_def": "非侵入性的"
  },
  "dysfunctional": {
    "pos": "adj.",
    "en_def": "not working normally or properly",
    "cn_def": "失能的;運作不良的"
  },
  "remission": {
    "pos": "n.",
    "en_def": "a period when a serious illness becomes less severe",
    "cn_def": "緩解期"
  },
  "incapacity": {
    "pos": "n.",
    "en_def": "the inability to do something",
    "cn_def": "無能力;失能"
  },
  "enforcement": {
    "pos": "n.",
    "en_def": "making sure a law is obeyed",
    "cn_def": "執法;執行"
  },
  "licensing": {
    "pos": "n.",
    "en_def": "giving official permission to do something",
    "cn_def": "核發執照;許可"
  },
  "disability": {
    "pos": "n.",
    "en_def": "a condition that limits a person's movement or senses",
    "cn_def": "身心障礙;失能"
  },
  "association": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "關聯"
  },
  "marker": {
    "pos": "n.",
    "en_def": "a sign that shows something exists",
    "cn_def": "指標;標記"
  },
  "investment": {
    "pos": "n.",
    "en_def": "money spent to get future benefits",
    "cn_def": "投資"
  },
  "skyrocket": {
    "pos": "v.",
    "en_def": "to increase very quickly",
    "cn_def": "暴漲;飆升"
  },
  "prolong": {
    "pos": "v.",
    "en_def": "to make something last longer",
    "cn_def": "延長"
  },
  "lockdown": {
    "pos": "n.",
    "en_def": "an official order for people to stay at home",
    "cn_def": "封城"
  },
  "pensioner": {
    "pos": "n.",
    "en_def": "a person who receives a pension after retiring",
    "cn_def": "領退休金的人"
  },
  "waistline": {
    "pos": "n.",
    "en_def": "the size of the middle of your body",
    "cn_def": "腰圍"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to advise that something should be done",
    "cn_def": "建議"
  },
  "endanger": {
    "pos": "v.",
    "en_def": "to put someone in danger",
    "cn_def": "危及"
  },
  "self-isolate": {
    "pos": "v.",
    "en_def": "to stay away from other people to avoid spreading a disease",
    "cn_def": "自我隔離"
  },
  "precondition": {
    "pos": "n.",
    "en_def": "something that must happen before something else",
    "cn_def": "先決條件"
  },
  "epidemiology": {
    "pos": "n.",
    "en_def": "the study of how diseases spread in populations",
    "cn_def": "流行病學"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "an official check",
    "cn_def": "檢查;稽查"
  },
  "adulthood": {
    "pos": "n.",
    "en_def": "the time of life when you are an adult",
    "cn_def": "成年期"
  },
  "cough": {
    "pos": "n.",
    "en_def": "the act or sound of pushing air out of the throat",
    "cn_def": "咳嗽"
  },
  "portion size": {
    "pos": "n.phr.",
    "en_def": "the amount of food served to one person",
    "cn_def": "份量"
  },
  "grey hair": {
    "pos": "n.phr.",
    "en_def": "hair that has lost its colour with age",
    "cn_def": "白髮"
  },
  "health education": {
    "pos": "n.phr.",
    "en_def": "teaching people how to stay healthy",
    "cn_def": "健康教育"
  },
  "cavity": {
    "pos": "n.",
    "en_def": "a hole in a tooth caused by decay",
    "cn_def": "蛀牙;齲齒"
  },
  "smartwatch": {
    "pos": "n.",
    "en_def": "a watch that works like a small computer",
    "cn_def": "智慧手錶"
  },
  "objection": {
    "pos": "n.",
    "en_def": "a reason for not agreeing",
    "cn_def": "反對;異議"
  },
  "sneeze": {
    "pos": "v.",
    "en_def": "to force air out through the nose suddenly",
    "cn_def": "打噴嚏"
  },
  "infect": {
    "pos": "v.",
    "en_def": "to give someone a disease",
    "cn_def": "傳染;使感染"
  },
  "recipient": {
    "pos": "n.",
    "en_def": "a person who receives something",
    "cn_def": "接受者;受贈者"
  },
  "check-up": {
    "pos": "n.",
    "en_def": "a general medical examination",
    "cn_def": "健康檢查"
  },
  "disruption": {
    "pos": "n.",
    "en_def": "a problem that stops something from continuing normally",
    "cn_def": "中斷;干擾"
  },
  "general practitioner": {
    "pos": "n.phr.",
    "en_def": "a family doctor who treats common illnesses",
    "cn_def": "家庭醫師;一般科醫師"
  },
  "emergency room": {
    "pos": "n.phr.",
    "en_def": "the part of a hospital for people who need help immediately",
    "cn_def": "急診室"
  },
  "hand sanitiser": {
    "pos": "n.phr.",
    "en_def": "a liquid that kills germs on your hands without water",
    "cn_def": "乾洗手液"
  },
  "negligence": {
    "pos": "n.",
    "en_def": "failure to take proper care",
    "cn_def": "疏失;過失"
  },
  "obese": {
    "pos": "adj.",
    "en_def": "very overweight in a way that is unhealthy",
    "cn_def": "肥胖的"
  },
  "rehabilitative": {
    "pos": "adj.",
    "en_def": "helping someone return to normal life after illness",
    "cn_def": "復健的"
  },
  "precautionary": {
    "pos": "adj.",
    "en_def": "done to avoid possible danger",
    "cn_def": "預防性的;防範的"
  },
  "long-term care": {
    "pos": "n.phr.",
    "en_def": "support for people who cannot fully look after themselves for a long time",
    "cn_def": "長期照顧;長照"
  },
  "border control": {
    "pos": "n.phr.",
    "en_def": "checks on people entering a country",
    "cn_def": "邊境管制"
  },
  "health app": {
    "pos": "n.phr.",
    "en_def": "a phone program that tracks your health",
    "cn_def": "健康應用程式"
  },
  "death rate": {
    "pos": "n.phr.",
    "en_def": "the number of deaths in a group in a period of time",
    "cn_def": "死亡率"
  },
  "hearing loss": {
    "pos": "n.phr.",
    "en_def": "a reduced ability to hear",
    "cn_def": "聽力損失"
  },
  "body mass index": {
    "pos": "n.phr.",
    "en_def": "a number based on weight and height used to judge health",
    "cn_def": "身體質量指數;BMI"
  },
  "health insurance": {
    "pos": "n.phr.",
    "en_def": "a system that pays for medical care",
    "cn_def": "健康保險"
  },
  "infant mortality": {
    "pos": "n.phr.",
    "en_def": "the number of babies who die before age one",
    "cn_def": "嬰兒死亡率"
  },
  "silver economy": {
    "pos": "n.phr.",
    "en_def": "business and services aimed at older people",
    "cn_def": "銀髮經濟"
  },
  "infringement": {
    "pos": "n.",
    "en_def": "an action that breaks a rule or law",
    "cn_def": "侵犯;違反"
  },
  "readiness": {
    "pos": "n.",
    "en_def": "the state of being prepared",
    "cn_def": "準備就緒"
  },
  "arthritis": {
    "pos": "n.",
    "en_def": "a disease that makes joints painful and stiff",
    "cn_def": "關節炎"
  },
  "disinfectant": {
    "pos": "n.",
    "en_def": "a chemical that kills germs on surfaces",
    "cn_def": "消毒劑"
  },
  "governance": {
    "pos": "n.",
    "en_def": "the way an organisation is controlled and managed",
    "cn_def": "治理"
  },
  "exacerbation": {
    "pos": "n.",
    "en_def": "the act of making a problem worse",
    "cn_def": "惡化;加劇"
  },
  "behaviour": {
    "pos": "n.",
    "en_def": "the way a person acts",
    "cn_def": "行為"
  },
  "referral": {
    "pos": "n.",
    "en_def": "sending a patient to another doctor or service",
    "cn_def": "轉介;轉診"
  },
  "paramedic": {
    "pos": "n.",
    "en_def": "a trained person who gives medical help in an ambulance",
    "cn_def": "醫護救援人員"
  },
  "walking stick": {
    "pos": "n.phr.",
    "en_def": "a stick that helps a person walk",
    "cn_def": "手杖;拐杖"
  },
  "step count": {
    "pos": "n.phr.",
    "en_def": "the number of steps you walk in a day",
    "cn_def": "步數"
  },
  "filial piety": {
    "pos": "n.phr.",
    "en_def": "respect and care for one's parents and older relatives",
    "cn_def": "孝道"
  },
  "smoking ban": {
    "pos": "n.phr.",
    "en_def": "a law that stops people smoking in certain places",
    "cn_def": "禁菸令"
  },
  "empty nester": {
    "pos": "n.",
    "en_def": "a parent whose children have grown up and left home",
    "cn_def": "空巢父母"
  },
  "waiting list": {
    "pos": "n.phr.",
    "en_def": "a list of people who must wait for a service",
    "cn_def": "候補名單;等候名單"
  }
};

const EXTRA_GLOSSES = {};
