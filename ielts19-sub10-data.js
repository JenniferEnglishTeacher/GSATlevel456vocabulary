// Topic 19 Subunit 10 Quiz Data: Academic Words 學術單字 4 (recommend – nutritional)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S10 - Academic Words 學術單字 4 (recommend – nutritional)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "建議",
    "en_def": "to advise that something should be done",
    "sentence": "Doctors {{BLANK}} at least seven hours of sleep a night, but many teenagers get much less.",
    "cn": "醫生建議每晚至少睡七個小時,但許多青少年睡得少得多。"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "cn_def": "減少;降低",
    "en_def": "to make something smaller or less",
    "sentence": "Eating more vegetables can {{BLANK}} the risk of heart disease, so try to fill half your plate with them.",
    "cn": "多吃蔬菜可以降低罹患心臟病的風險,所以試著讓蔬菜佔你餐盤的一半。"
  },
  {
    "word": "immunise",
    "pos": "v.",
    "cn_def": "使免疫;為……預防注射",
    "en_def": "to protect someone from disease, usually with a vaccine",
    "sentence": "The programme aims to {{BLANK}} every child against measles, so nurses visit even remote villages.",
    "cn": "這項計畫的目標是為每個孩子接種麻疹疫苗,所以護理師連偏遠村莊都會前往。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助",
    "en_def": "to help",
    "sentence": "Volunteers {{BLANK}} older patients at the hospital entrance, and they show them where to register.",
    "cn": "志工在醫院入口協助年長病人,並告訴他們在哪裡掛號。"
  },
  {
    "word": "shorten",
    "pos": "v.",
    "cn_def": "縮短",
    "en_def": "to make something shorter",
    "sentence": "Smoking can {{BLANK}} your life by ten years, but quitting at any age brings real benefits.",
    "cn": "吸菸可能縮短你十年的壽命,但任何年紀戒菸都能帶來實際的好處。"
  },
  {
    "word": "supervise",
    "pos": "v.",
    "cn_def": "監督;督導",
    "en_def": "to watch over someone to make sure they act correctly",
    "sentence": "A senior doctor must {{BLANK}} new doctors during their first year, so patients stay safe.",
    "cn": "資深醫師必須在新進醫師第一年期間督導他們,以確保病人安全。"
  },
  {
    "word": "stagnate",
    "pos": "v.",
    "cn_def": "停滯",
    "en_def": "to stop developing or growing",
    "sentence": "Life expectancy began to {{BLANK}} in some countries, and experts blamed poor diets and stress.",
    "cn": "某些國家的平均壽命開始停滯,專家將原因歸咎於不良飲食和壓力。"
  },
  {
    "word": "skyrocket",
    "pos": "v.",
    "cn_def": "暴漲;飆升",
    "en_def": "to increase very quickly",
    "sentence": "The price of face masks began to {{BLANK}} at the start of the pandemic, so the government set a fixed price.",
    "cn": "疫情剛開始時口罩價格開始飆升,所以政府訂定了固定價格。"
  },
  {
    "word": "halve",
    "pos": "v.",
    "cn_def": "減半",
    "en_def": "to reduce something by half",
    "sentence": "Regular exercise can {{BLANK}} the risk of some diseases, so it is one of the best medicines we have.",
    "cn": "規律運動可以使某些疾病的風險減半,所以它是我們擁有的最好的藥之一。"
  },
  {
    "word": "hospitalise",
    "pos": "v.",
    "cn_def": "使住院",
    "en_def": "to send someone to hospital for treatment",
    "sentence": "More than one hundred children were {{BLANK}} with flu last month, so schools were asked to clean classrooms daily.",
    "cn": "上個月有一百多名兒童因流感住院,所以學校被要求每天清潔教室。"
  },
  {
    "word": "counsel",
    "pos": "v.",
    "cn_def": "輔導;提供諮詢",
    "en_def": "to give advice to someone about their problems",
    "sentence": "Nurses {{BLANK}} new mothers on how to feed their babies, and they also visit them at home.",
    "cn": "護理師輔導新手媽媽如何餵養嬰兒,也會到家裡訪視她們。"
  },
  {
    "word": "inform",
    "pos": "v.",
    "cn_def": "告知;通知",
    "en_def": "to tell someone facts",
    "sentence": "Doctors must {{BLANK}} patients about the risks of an operation, so they can make a careful decision.",
    "cn": "醫生必須告知病人手術的風險,讓他們能審慎做決定。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "producing the result that you want",
    "sentence": "The new flu vaccine is very {{BLANK}}, so doctors expect far fewer hospital visits this winter.",
    "cn": "新的流感疫苗非常有效,所以醫生預期今年冬天就醫人數會少很多。"
  },
  {
    "word": "ailing",
    "pos": "adj.",
    "cn_def": "生病的;每況愈下的",
    "en_def": "ill or in a weak condition",
    "sentence": "She moved back to her hometown to look after her {{BLANK}} mother, and she found a part-time job nearby.",
    "cn": "她搬回家鄉照顧生病的母親,並在附近找了一份兼職工作。"
  },
  {
    "word": "compassionate",
    "pos": "adj.",
    "cn_def": "有同情心的",
    "en_def": "showing kindness and care for people who suffer",
    "sentence": "Patients love Dr. Lin because she is so {{BLANK}}, and she always takes time to listen.",
    "cn": "病人們很喜歡林醫師,因為她非常有同情心,總是花時間傾聽。"
  },
  {
    "word": "critical",
    "pos": "adj.",
    "cn_def": "危急的;嚴重的",
    "en_def": "very serious and dangerous",
    "sentence": "The injured driver was in a {{BLANK}} condition, so he was taken straight to the operating theatre.",
    "cn": "受傷的駕駛情況危急,所以被直接送進手術室。"
  },
  {
    "word": "dysfunctional",
    "pos": "adj.",
    "cn_def": "失能的;運作不良的",
    "en_def": "not working normally or properly",
    "sentence": "Critics say the {{BLANK}} system wastes money, because patients see several doctors for the same problem.",
    "cn": "批評者說這個運作不良的制度浪費金錢,因為病人為了同一個問題看好幾位醫生。"
  },
  {
    "word": "escalating",
    "pos": "adj.",
    "cn_def": "不斷升高的",
    "en_def": "increasing quickly",
    "sentence": "The {{BLANK}} cost of medicine worries many families, so they are asking the government for help.",
    "cn": "不斷升高的藥價讓許多家庭擔憂,所以他們向政府請求協助。"
  },
  {
    "word": "feeble",
    "pos": "adj.",
    "cn_def": "虛弱的;無力的",
    "en_def": "very weak",
    "sentence": "After weeks in bed, my grandfather felt {{BLANK}}, so a physiotherapist helped him walk again.",
    "cn": "臥床幾週後,我爺爺覺得很虛弱,所以一位物理治療師幫助他重新走路。"
  },
  {
    "word": "hygienic",
    "pos": "adj.",
    "cn_def": "衛生的",
    "en_def": "clean and free of germs",
    "sentence": "The night market stall looks {{BLANK}}, because the cook wears gloves and covers all the food.",
    "cn": "這個夜市攤位看起來很衛生,因為廚師戴著手套並把所有食物都蓋起來。"
  },
  {
    "word": "inactive",
    "pos": "adj.",
    "cn_def": "不活動的;缺乏活動的",
    "en_def": "not doing much physical activity",
    "sentence": "People who stay {{BLANK}} for long periods lose muscle quickly, so even short walks can help.",
    "cn": "長時間缺乏活動的人肌肉流失很快,所以即使短距離散步也有幫助。"
  },
  {
    "word": "life-threatening",
    "pos": "adj.",
    "cn_def": "危及生命的",
    "en_def": "able to cause death",
    "sentence": "A peanut allergy can be {{BLANK}}, so Mia always carries an emergency pen in her bag.",
    "cn": "花生過敏可能危及生命,所以米亞總是在包包裡帶著緊急注射筆。"
  },
  {
    "word": "malignant",
    "pos": "adj.",
    "cn_def": "惡性的",
    "en_def": "(of a tumour) dangerous and likely to spread",
    "sentence": "The doctor was relieved that the lump was not {{BLANK}}, so the patient did not need cancer treatment.",
    "cn": "醫生鬆了一口氣,因為那個腫塊不是惡性的,所以病人不需要接受癌症治療。"
  },
  {
    "word": "mild",
    "pos": "adj.",
    "cn_def": "輕微的",
    "en_def": "not serious or strong",
    "sentence": "Most people with the virus have only {{BLANK}} symptoms, but older people may become very ill.",
    "cn": "大多數感染病毒的人只有輕微的症狀,但長者可能會病得很重。"
  },
  {
    "word": "nutritional",
    "pos": "adj.",
    "cn_def": "營養的",
    "en_def": "relating to the food you need to be healthy",
    "sentence": "The school lunch must meet {{BLANK}} standards, so a dietitian plans the menu every month.",
    "cn": "學校午餐必須符合營養標準,所以營養師每個月都會規劃菜單。"
  }
];

const MCQS = [
  {
    "q": "Doctors _____ at least seven hours of sleep a night, but many teenagers get much less.",
    "options": [
      "infect",
      "floss",
      "contain",
      "recommend"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Eating more vegetables can _____ the risk of heart disease, so try to fill half your plate with them.",
    "options": [
      "vaccinate",
      "reduce",
      "afflict",
      "subsidise"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The programme aims to _____ every child against measles, so nurses visit even remote villages.",
    "options": [
      "overuse",
      "insure",
      "immunise",
      "reimburse"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Volunteers _____ older patients at the hospital entrance, and they show them where to register.",
    "options": [
      "assist",
      "overstretch",
      "contain",
      "worsen"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Smoking can _____ your life by ten years, but quitting at any age brings real benefits.",
    "options": [
      "infect",
      "shorten",
      "sneeze",
      "ration"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "A senior doctor must _____ new doctors during their first year, so patients stay safe.",
    "options": [
      "prolong",
      "infect",
      "prevent",
      "supervise"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Life expectancy began to _____ in some countries, and experts blamed poor diets and stress.",
    "options": [
      "self-isolate",
      "prolong",
      "stagnate",
      "overuse"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The price of face masks began to _____ at the start of the pandemic, so the government set a fixed price.",
    "options": [
      "skyrocket",
      "admit",
      "prevent",
      "ration"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Regular exercise can _____ the risk of some diseases, so it is one of the best medicines we have.",
    "options": [
      "heal",
      "floss",
      "halve",
      "vaccinate"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "More than one hundred children were _____ with flu last month, so schools were asked to clean classrooms daily.",
    "options": [
      "hospitalise",
      "prevent",
      "self-isolate",
      "prolong"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Nurses _____ new mothers on how to feed their babies, and they also visit them at home.",
    "options": [
      "overstretch",
      "admit",
      "relieve",
      "counsel"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Doctors must _____ patients about the risks of an operation, so they can make a careful decision.",
    "options": [
      "self-isolate",
      "inform",
      "afflict",
      "infect"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The new flu vaccine is very _____, so doctors expect far fewer hospital visits this winter.",
    "options": [
      "effective",
      "underfunded",
      "deadly",
      "degenerative"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "She moved back to her hometown to look after her _____ mother, and she found a part-time job nearby.",
    "options": [
      "underweight",
      "ailing",
      "short-sighted",
      "unequal"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Patients love Dr. Lin because she is so _____, and she always takes time to listen.",
    "options": [
      "overweight",
      "degenerative",
      "compassionate",
      "treatable"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The injured driver was in a _____ condition, so he was taken straight to the operating theatre.",
    "options": [
      "obese",
      "short-lived",
      "overstretched",
      "critical"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Critics say the _____ system wastes money, because patients see several doctors for the same problem.",
    "options": [
      "sanitary",
      "dysfunctional",
      "asymptomatic",
      "steady"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The _____ cost of medicine worries many families, so they are asking the government for help.",
    "options": [
      "over-the-counter",
      "respiratory",
      "underfunded",
      "escalating"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "After weeks in bed, my grandfather felt _____, so a physiotherapist helped him walk again.",
    "options": [
      "feeble",
      "slight",
      "terminal",
      "home-cooked"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The night market stall looks _____, because the cook wears gloves and covers all the food.",
    "options": [
      "involuntary",
      "unmet",
      "hygienic",
      "overweight"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "People who stay _____ for long periods lose muscle quickly, so even short walks can help.",
    "options": [
      "inactive",
      "obese",
      "asymptomatic",
      "degenerative"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "A peanut allergy can be _____, so Mia always carries an emergency pen in her bag.",
    "options": [
      "unmet",
      "short-sighted",
      "dental",
      "life-threatening"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The doctor was relieved that the lump was not _____, so the patient did not need cancer treatment.",
    "options": [
      "treatable",
      "communicable",
      "malignant",
      "dental"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Most people with the virus have only _____ symptoms, but older people may become very ill.",
    "options": [
      "worldwide",
      "mild",
      "overburdened",
      "subsidised"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The school lunch must meet _____ standards, so a dietitian plans the menu every month.",
    "options": [
      "nutritional",
      "subsidised",
      "unequal",
      "sanitary"
    ],
    "answer": 0,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "recommend": {
    "pos": "v.",
    "en_def": "to advise that something should be done",
    "cn_def": "建議"
  },
  "reduce": {
    "pos": "v.",
    "en_def": "to make something smaller or less",
    "cn_def": "減少;降低"
  },
  "immunise": {
    "pos": "v.",
    "en_def": "to protect someone from disease, usually with a vaccine",
    "cn_def": "使免疫;為……預防注射"
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help",
    "cn_def": "協助"
  },
  "shorten": {
    "pos": "v.",
    "en_def": "to make something shorter",
    "cn_def": "縮短"
  },
  "supervise": {
    "pos": "v.",
    "en_def": "to watch over someone to make sure they act correctly",
    "cn_def": "監督;督導"
  },
  "stagnate": {
    "pos": "v.",
    "en_def": "to stop developing or growing",
    "cn_def": "停滯"
  },
  "skyrocket": {
    "pos": "v.",
    "en_def": "to increase very quickly",
    "cn_def": "暴漲;飆升"
  },
  "halve": {
    "pos": "v.",
    "en_def": "to reduce something by half",
    "cn_def": "減半"
  },
  "hospitalise": {
    "pos": "v.",
    "en_def": "to send someone to hospital for treatment",
    "cn_def": "使住院"
  },
  "counsel": {
    "pos": "v.",
    "en_def": "to give advice to someone about their problems",
    "cn_def": "輔導;提供諮詢"
  },
  "inform": {
    "pos": "v.",
    "en_def": "to tell someone facts",
    "cn_def": "告知;通知"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "producing the result that you want",
    "cn_def": "有效的"
  },
  "ailing": {
    "pos": "adj.",
    "en_def": "ill or in a weak condition",
    "cn_def": "生病的;每況愈下的"
  },
  "compassionate": {
    "pos": "adj.",
    "en_def": "showing kindness and care for people who suffer",
    "cn_def": "有同情心的"
  },
  "critical": {
    "pos": "adj.",
    "en_def": "very serious and dangerous",
    "cn_def": "危急的;嚴重的"
  },
  "dysfunctional": {
    "pos": "adj.",
    "en_def": "not working normally or properly",
    "cn_def": "失能的;運作不良的"
  },
  "escalating": {
    "pos": "adj.",
    "en_def": "increasing quickly",
    "cn_def": "不斷升高的"
  },
  "feeble": {
    "pos": "adj.",
    "en_def": "very weak",
    "cn_def": "虛弱的;無力的"
  },
  "hygienic": {
    "pos": "adj.",
    "en_def": "clean and free of germs",
    "cn_def": "衛生的"
  },
  "inactive": {
    "pos": "adj.",
    "en_def": "not doing much physical activity",
    "cn_def": "不活動的;缺乏活動的"
  },
  "life-threatening": {
    "pos": "adj.",
    "en_def": "able to cause death",
    "cn_def": "危及生命的"
  },
  "malignant": {
    "pos": "adj.",
    "en_def": "(of a tumour) dangerous and likely to spread",
    "cn_def": "惡性的"
  },
  "mild": {
    "pos": "adj.",
    "en_def": "not serious or strong",
    "cn_def": "輕微的"
  },
  "nutritional": {
    "pos": "adj.",
    "en_def": "relating to the food you need to be healthy",
    "cn_def": "營養的"
  },
  "infect": {
    "pos": "v.",
    "en_def": "to give someone a disease",
    "cn_def": "傳染;使感染"
  },
  "floss": {
    "pos": "v.",
    "en_def": "to clean between your teeth with a thin thread",
    "cn_def": "用牙線清潔"
  },
  "contain": {
    "pos": "v.",
    "en_def": "to stop something from spreading",
    "cn_def": "控制;遏制"
  },
  "vaccinate": {
    "pos": "v.",
    "en_def": "to give someone a vaccine",
    "cn_def": "為……接種疫苗"
  },
  "afflict": {
    "pos": "v.",
    "en_def": "to cause pain or suffering to someone",
    "cn_def": "折磨;使受苦"
  },
  "subsidise": {
    "pos": "v.",
    "en_def": "to pay part of the cost of something",
    "cn_def": "補助;補貼"
  },
  "overuse": {
    "pos": "v.",
    "en_def": "to use something too much",
    "cn_def": "過度使用"
  },
  "insure": {
    "pos": "v.",
    "en_def": "to buy insurance against loss or illness",
    "cn_def": "為……投保"
  },
  "reimburse": {
    "pos": "v.",
    "en_def": "to pay back money someone has spent",
    "cn_def": "償還;給付"
  },
  "overstretch": {
    "pos": "v.",
    "en_def": "to make a system try to do more than it can",
    "cn_def": "使不堪負荷"
  },
  "worsen": {
    "pos": "v.",
    "en_def": "to become worse",
    "cn_def": "惡化"
  },
  "sneeze": {
    "pos": "v.",
    "en_def": "to force air out through the nose suddenly",
    "cn_def": "打噴嚏"
  },
  "ration": {
    "pos": "v.",
    "en_def": "to limit how much of something each person can have",
    "cn_def": "配給;限量供應"
  },
  "prolong": {
    "pos": "v.",
    "en_def": "to make something last longer",
    "cn_def": "延長"
  },
  "prevent": {
    "pos": "v.",
    "en_def": "to stop something from happening",
    "cn_def": "預防;防止"
  },
  "self-isolate": {
    "pos": "v.",
    "en_def": "to stay away from other people to avoid spreading a disease",
    "cn_def": "自我隔離"
  },
  "admit": {
    "pos": "v.",
    "en_def": "to let someone stay in hospital for treatment",
    "cn_def": "使住院;收治"
  },
  "heal": {
    "pos": "v.",
    "en_def": "to become healthy again after an injury",
    "cn_def": "癒合;痊癒"
  },
  "relieve": {
    "pos": "v.",
    "en_def": "to make pain or a problem less bad",
    "cn_def": "減輕;緩解"
  },
  "underfunded": {
    "pos": "adj.",
    "en_def": "not given enough money",
    "cn_def": "資金不足的"
  },
  "deadly": {
    "pos": "adj.",
    "en_def": "able to cause death",
    "cn_def": "致命的"
  },
  "degenerative": {
    "pos": "adj.",
    "en_def": "getting gradually worse over time",
    "cn_def": "退化性的"
  },
  "underweight": {
    "pos": "adj.",
    "en_def": "lighter than is healthy",
    "cn_def": "過輕的"
  },
  "short-sighted": {
    "pos": "adj.",
    "en_def": "able to see near things clearly but not far things",
    "cn_def": "近視的"
  },
  "unequal": {
    "pos": "adj.",
    "en_def": "not fair or the same for everyone",
    "cn_def": "不平等的"
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "heavier than is healthy",
    "cn_def": "過重的"
  },
  "treatable": {
    "pos": "adj.",
    "en_def": "able to be treated with medicine or therapy",
    "cn_def": "可治療的"
  },
  "obese": {
    "pos": "adj.",
    "en_def": "very overweight in a way that is unhealthy",
    "cn_def": "肥胖的"
  },
  "short-lived": {
    "pos": "adj.",
    "en_def": "lasting only a short time",
    "cn_def": "短暫的"
  },
  "overstretched": {
    "pos": "adj.",
    "en_def": "having too much to do with too few resources",
    "cn_def": "不堪負荷的"
  },
  "sanitary": {
    "pos": "adj.",
    "en_def": "clean and not likely to cause disease",
    "cn_def": "衛生的;衛生設備的"
  },
  "asymptomatic": {
    "pos": "adj.",
    "en_def": "having a disease but showing no signs of it",
    "cn_def": "無症狀的"
  },
  "steady": {
    "pos": "adj.",
    "en_def": "developing gradually and evenly",
    "cn_def": "穩定的;持續的"
  },
  "over-the-counter": {
    "pos": "adj.",
    "en_def": "able to be bought without a doctor's prescription",
    "cn_def": "非處方的;成藥的"
  },
  "respiratory": {
    "pos": "adj.",
    "en_def": "relating to breathing and the lungs",
    "cn_def": "呼吸的;呼吸系統的"
  },
  "slight": {
    "pos": "adj.",
    "en_def": "small in degree",
    "cn_def": "輕微的"
  },
  "terminal": {
    "pos": "adj.",
    "en_def": "(of an illness) leading to death",
    "cn_def": "末期的"
  },
  "home-cooked": {
    "pos": "adj.",
    "en_def": "made at home rather than bought",
    "cn_def": "家常的;自己煮的"
  },
  "involuntary": {
    "pos": "adj.",
    "en_def": "done without choosing to",
    "cn_def": "不自主的;非自願的"
  },
  "unmet": {
    "pos": "adj.",
    "en_def": "not satisfied or provided",
    "cn_def": "未被滿足的"
  },
  "dental": {
    "pos": "adj.",
    "en_def": "relating to teeth",
    "cn_def": "牙齒的"
  },
  "communicable": {
    "pos": "adj.",
    "en_def": "able to be passed from one person to another",
    "cn_def": "傳染性的"
  },
  "worldwide": {
    "pos": "adj.",
    "en_def": "happening all over the world",
    "cn_def": "全世界的"
  },
  "overburdened": {
    "pos": "adj.",
    "en_def": "having too much work or too many problems",
    "cn_def": "負擔過重的"
  },
  "subsidised": {
    "pos": "adj.",
    "en_def": "partly paid for by the government",
    "cn_def": "受補助的"
  }
};

const EXTRA_GLOSSES = {};
