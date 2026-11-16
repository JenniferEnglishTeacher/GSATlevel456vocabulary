// Topic 19 Subunit 11 Quiz Data: Academic Words 學術單字 5 (obese – sudden)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S11 - Academic Words 學術單字 5 (obese – sudden)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "obese",
    "pos": "adj.",
    "cn_def": "肥胖的",
    "en_def": "very overweight in a way that is unhealthy",
    "sentence": "The number of {{BLANK}} children has increased, so schools now offer more after-school sports clubs.",
    "cn": "肥胖兒童的人數增加了,所以學校現在提供更多課後運動社團。"
  },
  {
    "word": "overburdened",
    "pos": "adj.",
    "cn_def": "負擔過重的",
    "en_def": "having too much work or too many problems",
    "sentence": "{{BLANK}} nurses often quit their jobs, so the hospital is trying to reduce their working hours.",
    "cn": "負擔過重的護理師常常辭職,所以醫院正試著縮短她們的工時。"
  },
  {
    "word": "overstretched",
    "pos": "adj.",
    "cn_def": "不堪負荷的",
    "en_def": "having too much to do with too few resources",
    "sentence": "The emergency room was {{BLANK}} during the holiday, and some patients waited more than six hours to see a doctor.",
    "cn": "假期期間急診室不堪負荷,有些病人等了超過六個小時才看到醫生。"
  },
  {
    "word": "physiological",
    "pos": "adj.",
    "cn_def": "生理的",
    "en_def": "relating to how the body works",
    "sentence": "Stress causes {{BLANK}} changes like a faster heartbeat, so it can affect your health over time.",
    "cn": "壓力會引起心跳加快等生理變化,所以長期下來會影響你的健康。"
  },
  {
    "word": "precautionary",
    "pos": "adj.",
    "cn_def": "預防性的;防範的",
    "en_def": "done to avoid possible danger",
    "sentence": "As a {{BLANK}} measure, the school closed for two days, although only three students were sick.",
    "cn": "作為防範措施,學校停課兩天,儘管只有三名學生生病。"
  },
  {
    "word": "rehabilitative",
    "pos": "adj.",
    "cn_def": "復健的",
    "en_def": "helping someone return to normal life after illness",
    "sentence": "After the stroke, he joined a {{BLANK}} programme, and he can now use his right hand again.",
    "cn": "中風後他參加了一項復健計畫,現在他的右手又能使用了。"
  },
  {
    "word": "sanitary",
    "pos": "adj.",
    "cn_def": "衛生的;衛生設備的",
    "en_def": "clean and not likely to cause disease",
    "sentence": "Poor {{BLANK}} conditions in the camp led to an outbreak of disease, so aid groups sent clean water.",
    "cn": "營區衛生條件差導致疾病爆發,所以救援團體送來了乾淨的水。"
  },
  {
    "word": "subsidised",
    "pos": "adj.",
    "cn_def": "受補助的",
    "en_def": "partly paid for by the government",
    "sentence": "Seniors can join {{BLANK}} exercise classes at the community centre, so each lesson costs only fifty dollars.",
    "cn": "長者可以參加社區中心受補助的運動課程,所以每堂課只要五十元。"
  },
  {
    "word": "terminal",
    "pos": "adj.",
    "cn_def": "末期的",
    "en_def": "(of an illness) leading to death",
    "sentence": "When her father was diagnosed with {{BLANK}} cancer, she took leave from work to spend time with him.",
    "cn": "當她父親被診斷出末期癌症時,她向公司請假陪伴他。"
  },
  {
    "word": "unhealthy",
    "pos": "adj.",
    "cn_def": "不健康的",
    "en_def": "bad for your health",
    "sentence": "Many convenience store snacks are {{BLANK}}, so I try to bring fruit to school instead.",
    "cn": "許多便利商店的零食都不健康,所以我盡量改帶水果到學校。"
  },
  {
    "word": "unhygienic",
    "pos": "adj.",
    "cn_def": "不衛生的",
    "en_def": "dirty and likely to spread disease",
    "sentence": "The restaurant kitchen was so {{BLANK}} that inspectors closed it, and its regular customers were shocked by the news.",
    "cn": "那家餐廳的廚房非常不衛生,所以稽查員勒令它停業,常客們聽到消息都很震驚。"
  },
  {
    "word": "untreated",
    "pos": "adj.",
    "cn_def": "未經治療的",
    "en_def": "not given medical care",
    "sentence": "If high blood pressure is left {{BLANK}}, it can lead to a stroke, so regular checks are important.",
    "cn": "如果高血壓未經治療,可能導致中風,所以定期檢查很重要。"
  },
  {
    "word": "clinical",
    "pos": "adj.",
    "cn_def": "臨床的",
    "en_def": "relating to the treatment of patients",
    "sentence": "The nursing students spend their final year in {{BLANK}} training, so they learn by working with real patients.",
    "cn": "護理系學生在最後一年進行臨床訓練,所以他們透過照顧真正的病人來學習。"
  },
  {
    "word": "curable",
    "pos": "adj.",
    "cn_def": "可治癒的",
    "en_def": "able to be cured",
    "sentence": "Many types of cancer are {{BLANK}} if they are found early, so regular screening saves lives.",
    "cn": "許多類型的癌症若及早發現是可治癒的,所以定期篩檢能救命。"
  },
  {
    "word": "treatable",
    "pos": "adj.",
    "cn_def": "可治療的",
    "en_def": "able to be treated with medicine or therapy",
    "sentence": "Depression is a {{BLANK}} illness, so people who feel low for weeks should ask for help.",
    "cn": "憂鬱症是一種可治療的疾病,所以情緒低落好幾週的人應該尋求協助。"
  },
  {
    "word": "non-invasive",
    "pos": "adj.",
    "cn_def": "非侵入性的",
    "en_def": "not needing to cut or enter the body",
    "sentence": "The new scan is {{BLANK}}, so patients can go home right after it without any pain.",
    "cn": "這種新的掃描是非侵入性的,所以病人做完後馬上就能回家,也不會痛。"
  },
  {
    "word": "underfunded",
    "pos": "adj.",
    "cn_def": "資金不足的",
    "en_def": "not given enough money",
    "sentence": "Mental health services are {{BLANK}} in many countries, so patients wait several months for professional help.",
    "cn": "許多國家的心理健康服務資金不足,所以病人要等好幾個月才能得到專業協助。"
  },
  {
    "word": "unmet",
    "pos": "adj.",
    "cn_def": "未被滿足的",
    "en_def": "not satisfied or provided",
    "sentence": "There is a large {{BLANK}} need for dental care in rural areas, because few dentists want to work there.",
    "cn": "鄉村地區有大量未被滿足的牙科照護需求,因為很少牙醫願意在那裡工作。"
  },
  {
    "word": "unaffordable",
    "pos": "adj.",
    "cn_def": "負擔不起的",
    "en_def": "too expensive to pay for",
    "sentence": "The new medicine is {{BLANK}} for most families, so doctors hope insurance will cover it soon.",
    "cn": "這種新藥對大多數家庭來說是負擔不起的,所以醫生希望保險很快能給付。"
  },
  {
    "word": "involuntary",
    "pos": "adj.",
    "cn_def": "不自主的;非自願的",
    "en_def": "done without choosing to",
    "sentence": "Sneezing is an {{BLANK}} action, so you cannot stop it, but you can cover your mouth.",
    "cn": "打噴嚏是一種不自主的動作,所以你無法阻止它,但你可以遮住嘴巴。"
  },
  {
    "word": "short-lived",
    "pos": "adj.",
    "cn_def": "短暫的",
    "en_def": "lasting only a short time",
    "sentence": "The benefits of crash diets are {{BLANK}}, because most people regain the weight within a year.",
    "cn": "速成節食的效果是短暫的,因為大多數人一年內就會復胖。"
  },
  {
    "word": "long-lasting",
    "pos": "adj.",
    "cn_def": "持久的",
    "en_def": "continuing for a long time",
    "sentence": "Good habits that you build as a teenager have {{BLANK}} effects, so start exercising regularly while you are young.",
    "cn": "青少年時期養成的好習慣有持久的效果,所以趁年輕開始規律運動吧。"
  },
  {
    "word": "nationwide",
    "pos": "adj.",
    "cn_def": "全國性的",
    "en_def": "happening in all parts of a country",
    "sentence": "The government launched a {{BLANK}} campaign against smoking, and adverts appeared on every TV channel.",
    "cn": "政府發起了一項全國性的反菸運動,每個電視頻道都出現了廣告。"
  },
  {
    "word": "worldwide",
    "pos": "adj.",
    "cn_def": "全世界的",
    "en_def": "happening all over the world",
    "sentence": "The {{BLANK}} spread of the virus shocked everyone, because it reached almost every country within months.",
    "cn": "病毒在全世界的擴散震驚了所有人,因為它在幾個月內就傳到了幾乎每個國家。"
  },
  {
    "word": "sudden",
    "pos": "adj.",
    "cn_def": "突然的",
    "en_def": "happening quickly and unexpectedly",
    "sentence": "A {{BLANK}} pain in the chest can be a sign of a heart attack, so call an ambulance immediately.",
    "cn": "胸口突然的疼痛可能是心臟病發作的徵兆,所以要立即叫救護車。"
  }
];

const MCQS = [
  {
    "q": "The number of _____ children has increased, so schools now offer more after-school sports clubs.",
    "options": [
      "obese",
      "dental",
      "means-tested",
      "antiviral"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "_____ nurses often quit their jobs, so the hospital is trying to reduce their working hours.",
    "options": [
      "anti-ageing",
      "unsafe",
      "overburdened",
      "steady"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The emergency room was _____ during the holiday, and some patients waited more than six hours to see a doctor.",
    "options": [
      "malignant",
      "at-risk",
      "slight",
      "overstretched"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Stress causes _____ changes like a faster heartbeat, so it can affect your health over time.",
    "options": [
      "health-conscious",
      "physiological",
      "age-friendly",
      "asymptomatic"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "As a _____ measure, the school closed for two days, although only three students were sick.",
    "options": [
      "low-income",
      "over-the-counter",
      "unequal",
      "precautionary"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "After the stroke, he joined a _____ programme, and he can now use his right hand again.",
    "options": [
      "rehabilitative",
      "high-risk",
      "feeble",
      "bedridden"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Poor _____ conditions in the camp led to an outbreak of disease, so aid groups sent clean water.",
    "options": [
      "antiviral",
      "anti-ageing",
      "sanitary",
      "means-tested"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Seniors can join _____ exercise classes at the community centre, so each lesson costs only fifty dollars.",
    "options": [
      "effective",
      "subsidised",
      "home-cooked",
      "antiviral"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "When her father was diagnosed with _____ cancer, she took leave from work to spend time with him.",
    "options": [
      "unequal",
      "malignant",
      "terminal",
      "unsafe"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Many convenience store snacks are _____, so I try to bring fruit to school instead.",
    "options": [
      "unhealthy",
      "slight",
      "feeble",
      "antiviral"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The restaurant kitchen was so _____ that inspectors closed it, and its regular customers were shocked by the news.",
    "options": [
      "mild",
      "unhygienic",
      "intergenerational",
      "malignant"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "If high blood pressure is left _____, it can lead to a stroke, so regular checks are important.",
    "options": [
      "deadly",
      "frontline",
      "dysfunctional",
      "untreated"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The nursing students spend their final year in _____ training, so they learn by working with real patients.",
    "options": [
      "clinical",
      "hygienic",
      "deadly",
      "life-threatening"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Many types of cancer are _____ if they are found early, so regular screening saves lives.",
    "options": [
      "inactive",
      "airborne",
      "preventive",
      "curable"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Depression is a _____ illness, so people who feel low for weeks should ask for help.",
    "options": [
      "effective",
      "treatable",
      "frontline",
      "health-conscious"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The new scan is _____, so patients can go home right after it without any pain.",
    "options": [
      "life-threatening",
      "asymptomatic",
      "non-invasive",
      "bedridden"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Mental health services are _____ in many countries, so patients wait several months for professional help.",
    "options": [
      "steady",
      "underfunded",
      "underweight",
      "short-sighted"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "There is a large _____ need for dental care in rural areas, because few dentists want to work there.",
    "options": [
      "unmet",
      "optional",
      "overweight",
      "compassionate"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new medicine is _____ for most families, so doctors hope insurance will cover it soon.",
    "options": [
      "steady",
      "health-conscious",
      "anti-ageing",
      "unaffordable"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Sneezing is an _____ action, so you cannot stop it, but you can cover your mouth.",
    "options": [
      "bedridden",
      "inactive",
      "involuntary",
      "slight"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The benefits of crash diets are _____, because most people regain the weight within a year.",
    "options": [
      "short-lived",
      "at-risk",
      "home-cooked",
      "over-the-counter"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Good habits that you build as a teenager have _____ effects, so start exercising regularly while you are young.",
    "options": [
      "health-conscious",
      "anti-ageing",
      "long-lasting",
      "waterborne"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The government launched a _____ campaign against smoking, and adverts appeared on every TV channel.",
    "options": [
      "frontline",
      "optional",
      "dysfunctional",
      "nationwide"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The _____ spread of the virus shocked everyone, because it reached almost every country within months.",
    "options": [
      "mild",
      "worldwide",
      "unequal",
      "sharp"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "A _____ pain in the chest can be a sign of a heart attack, so call an ambulance immediately.",
    "options": [
      "short-sighted",
      "unequal",
      "bedridden",
      "sudden"
    ],
    "answer": 3,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "obese": {
    "pos": "adj.",
    "en_def": "very overweight in a way that is unhealthy",
    "cn_def": "肥胖的"
  },
  "overburdened": {
    "pos": "adj.",
    "en_def": "having too much work or too many problems",
    "cn_def": "負擔過重的"
  },
  "overstretched": {
    "pos": "adj.",
    "en_def": "having too much to do with too few resources",
    "cn_def": "不堪負荷的"
  },
  "physiological": {
    "pos": "adj.",
    "en_def": "relating to how the body works",
    "cn_def": "生理的"
  },
  "precautionary": {
    "pos": "adj.",
    "en_def": "done to avoid possible danger",
    "cn_def": "預防性的;防範的"
  },
  "rehabilitative": {
    "pos": "adj.",
    "en_def": "helping someone return to normal life after illness",
    "cn_def": "復健的"
  },
  "sanitary": {
    "pos": "adj.",
    "en_def": "clean and not likely to cause disease",
    "cn_def": "衛生的;衛生設備的"
  },
  "subsidised": {
    "pos": "adj.",
    "en_def": "partly paid for by the government",
    "cn_def": "受補助的"
  },
  "terminal": {
    "pos": "adj.",
    "en_def": "(of an illness) leading to death",
    "cn_def": "末期的"
  },
  "unhealthy": {
    "pos": "adj.",
    "en_def": "bad for your health",
    "cn_def": "不健康的"
  },
  "unhygienic": {
    "pos": "adj.",
    "en_def": "dirty and likely to spread disease",
    "cn_def": "不衛生的"
  },
  "untreated": {
    "pos": "adj.",
    "en_def": "not given medical care",
    "cn_def": "未經治療的"
  },
  "clinical": {
    "pos": "adj.",
    "en_def": "relating to the treatment of patients",
    "cn_def": "臨床的"
  },
  "curable": {
    "pos": "adj.",
    "en_def": "able to be cured",
    "cn_def": "可治癒的"
  },
  "treatable": {
    "pos": "adj.",
    "en_def": "able to be treated with medicine or therapy",
    "cn_def": "可治療的"
  },
  "non-invasive": {
    "pos": "adj.",
    "en_def": "not needing to cut or enter the body",
    "cn_def": "非侵入性的"
  },
  "underfunded": {
    "pos": "adj.",
    "en_def": "not given enough money",
    "cn_def": "資金不足的"
  },
  "unmet": {
    "pos": "adj.",
    "en_def": "not satisfied or provided",
    "cn_def": "未被滿足的"
  },
  "unaffordable": {
    "pos": "adj.",
    "en_def": "too expensive to pay for",
    "cn_def": "負擔不起的"
  },
  "involuntary": {
    "pos": "adj.",
    "en_def": "done without choosing to",
    "cn_def": "不自主的;非自願的"
  },
  "short-lived": {
    "pos": "adj.",
    "en_def": "lasting only a short time",
    "cn_def": "短暫的"
  },
  "long-lasting": {
    "pos": "adj.",
    "en_def": "continuing for a long time",
    "cn_def": "持久的"
  },
  "nationwide": {
    "pos": "adj.",
    "en_def": "happening in all parts of a country",
    "cn_def": "全國性的"
  },
  "worldwide": {
    "pos": "adj.",
    "en_def": "happening all over the world",
    "cn_def": "全世界的"
  },
  "sudden": {
    "pos": "adj.",
    "en_def": "happening quickly and unexpectedly",
    "cn_def": "突然的"
  },
  "dental": {
    "pos": "adj.",
    "en_def": "relating to teeth",
    "cn_def": "牙齒的"
  },
  "means-tested": {
    "pos": "adj.",
    "en_def": "given only to people whose income is low enough",
    "cn_def": "經資產調查的"
  },
  "antiviral": {
    "pos": "adj.",
    "en_def": "used to fight viruses",
    "cn_def": "抗病毒的"
  },
  "anti-ageing": {
    "pos": "adj.",
    "en_def": "intended to stop or slow the signs of getting older",
    "cn_def": "抗老的"
  },
  "unsafe": {
    "pos": "adj.",
    "en_def": "dangerous",
    "cn_def": "不安全的"
  },
  "steady": {
    "pos": "adj.",
    "en_def": "developing gradually and evenly",
    "cn_def": "穩定的;持續的"
  },
  "malignant": {
    "pos": "adj.",
    "en_def": "(of a tumour) dangerous and likely to spread",
    "cn_def": "惡性的"
  },
  "at-risk": {
    "pos": "adj.",
    "en_def": "likely to be harmed",
    "cn_def": "高風險的;易受危害的"
  },
  "slight": {
    "pos": "adj.",
    "en_def": "small in degree",
    "cn_def": "輕微的"
  },
  "health-conscious": {
    "pos": "adj.",
    "en_def": "careful about doing things that are good for your health",
    "cn_def": "注重健康的"
  },
  "age-friendly": {
    "pos": "adj.",
    "en_def": "designed to be easy for older people to use",
    "cn_def": "高齡友善的"
  },
  "asymptomatic": {
    "pos": "adj.",
    "en_def": "having a disease but showing no signs of it",
    "cn_def": "無症狀的"
  },
  "low-income": {
    "pos": "adj.",
    "en_def": "earning little money",
    "cn_def": "低收入的"
  },
  "over-the-counter": {
    "pos": "adj.",
    "en_def": "able to be bought without a doctor's prescription",
    "cn_def": "非處方的;成藥的"
  },
  "unequal": {
    "pos": "adj.",
    "en_def": "not fair or the same for everyone",
    "cn_def": "不平等的"
  },
  "high-risk": {
    "pos": "adj.",
    "en_def": "having a greater chance of danger",
    "cn_def": "高風險的"
  },
  "feeble": {
    "pos": "adj.",
    "en_def": "very weak",
    "cn_def": "虛弱的;無力的"
  },
  "bedridden": {
    "pos": "adj.",
    "en_def": "unable to get out of bed because of illness or age",
    "cn_def": "臥床不起的"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "producing the result that you want",
    "cn_def": "有效的"
  },
  "home-cooked": {
    "pos": "adj.",
    "en_def": "made at home rather than bought",
    "cn_def": "家常的;自己煮的"
  },
  "mild": {
    "pos": "adj.",
    "en_def": "not serious or strong",
    "cn_def": "輕微的"
  },
  "intergenerational": {
    "pos": "adj.",
    "en_def": "involving people of different generations",
    "cn_def": "跨世代的"
  },
  "deadly": {
    "pos": "adj.",
    "en_def": "able to cause death",
    "cn_def": "致命的"
  },
  "frontline": {
    "pos": "adj.",
    "en_def": "working directly in the most important or dangerous place",
    "cn_def": "第一線的"
  },
  "dysfunctional": {
    "pos": "adj.",
    "en_def": "not working normally or properly",
    "cn_def": "失能的;運作不良的"
  },
  "hygienic": {
    "pos": "adj.",
    "en_def": "clean and free of germs",
    "cn_def": "衛生的"
  },
  "life-threatening": {
    "pos": "adj.",
    "en_def": "able to cause death",
    "cn_def": "危及生命的"
  },
  "inactive": {
    "pos": "adj.",
    "en_def": "not doing much physical activity",
    "cn_def": "不活動的;缺乏活動的"
  },
  "airborne": {
    "pos": "adj.",
    "en_def": "carried through the air",
    "cn_def": "經由空氣傳播的"
  },
  "preventive": {
    "pos": "adj.",
    "en_def": "intended to stop something bad from happening",
    "cn_def": "預防性的"
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
  "optional": {
    "pos": "adj.",
    "en_def": "that you can choose to do or not",
    "cn_def": "可選擇的;非強制的"
  },
  "overweight": {
    "pos": "adj.",
    "en_def": "heavier than is healthy",
    "cn_def": "過重的"
  },
  "compassionate": {
    "pos": "adj.",
    "en_def": "showing kindness and care for people who suffer",
    "cn_def": "有同情心的"
  },
  "waterborne": {
    "pos": "adj.",
    "en_def": "spread by water",
    "cn_def": "經由水傳播的"
  },
  "sharp": {
    "pos": "adj.",
    "en_def": "sudden and large",
    "cn_def": "急劇的"
  }
};

const EXTRA_GLOSSES = {};
