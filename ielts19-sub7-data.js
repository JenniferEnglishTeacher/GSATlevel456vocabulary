// Topic 19 Subunit 7 Quiz Data: Academic Words 學術單字 1 (adulthood – inadequacy)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S07 - Academic Words 學術單字 1 (adulthood – inadequacy)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "adulthood",
    "pos": "n.",
    "cn_def": "成年期",
    "en_def": "the time of life when you are an adult",
    "sentence": "Habits that start in childhood often continue into {{BLANK}}, so it is important to teach children to exercise.",
    "cn": "童年養成的習慣常會延續到成年期,所以教孩子運動很重要。"
  },
  {
    "word": "affliction",
    "pos": "n.",
    "cn_def": "苦難;病痛",
    "en_def": "something that causes pain or suffering",
    "sentence": "Back pain is a common {{BLANK}} among office workers, because they sit at their desks for hours.",
    "cn": "背痛是上班族常見的病痛,因為他們在辦公桌前一坐就是好幾個小時。"
  },
  {
    "word": "ailment",
    "pos": "n.",
    "cn_def": "小病;疾病",
    "en_def": "a minor illness",
    "sentence": "The pharmacist can help with small {{BLANK}} like colds and headaches, so you do not always need to see a doctor.",
    "cn": "藥劑師可以幫忙處理感冒和頭痛這類小病,所以你不一定都要去看醫生。"
  },
  {
    "word": "allowance",
    "pos": "n.",
    "cn_def": "津貼;補助",
    "en_def": "money given regularly for a special purpose",
    "sentence": "Families who look after a disabled relative can get a monthly {{BLANK}}, but the forms are complicated.",
    "cn": "照顧失能親人的家庭可以領取每月津貼,但申請表格很複雜。"
  },
  {
    "word": "apprehension",
    "pos": "n.",
    "cn_def": "憂慮;擔心",
    "en_def": "worry about something that may happen",
    "sentence": "Many patients feel some {{BLANK}} before surgery, so the nurses explain every step to calm them.",
    "cn": "許多病人在手術前會感到些許憂慮,所以護理師會解釋每個步驟來安撫他們。"
  },
  {
    "word": "detriment",
    "pos": "n.",
    "cn_def": "損害;傷害",
    "en_def": "harm or damage",
    "sentence": "He worked long hours to the {{BLANK}} of his health, and in the end he became seriously ill.",
    "cn": "他長時間工作,對健康造成損害,最後他病得很重。"
  },
  {
    "word": "disability",
    "pos": "n.",
    "cn_def": "身心障礙;失能",
    "en_def": "a condition that limits a person's movement or senses",
    "sentence": "Buildings should be designed for people with a {{BLANK}}, so ramps and wide doors are now required.",
    "cn": "建築物應該為身心障礙人士設計,所以現在規定要有坡道和寬門。"
  },
  {
    "word": "discomfort",
    "pos": "n.",
    "cn_def": "不適",
    "en_def": "a feeling of mild pain or being uncomfortable",
    "sentence": "You may feel some {{BLANK}} after the injection, but it usually disappears within a day.",
    "cn": "注射後你可能會感到些許不適,但通常一天內就會消失。"
  },
  {
    "word": "dissatisfaction",
    "pos": "n.",
    "cn_def": "不滿",
    "en_def": "the feeling of not being happy with something",
    "sentence": "There is growing {{BLANK}} with long waiting times, so the hospital is hiring more doctors.",
    "cn": "民眾對漫長的等候時間越來越不滿,所以醫院正在招募更多醫生。"
  },
  {
    "word": "expectancy",
    "pos": "n.",
    "cn_def": "預期;預期壽命",
    "en_def": "how long something is expected to last",
    "sentence": "Life {{BLANK}} in Taiwan is now over eighty years, but people often spend their last years in poor health.",
    "cn": "台灣的預期壽命現在已超過八十歲,但人們往往在健康不佳中度過最後幾年。"
  },
  {
    "word": "fatality",
    "pos": "n.",
    "cn_def": "死亡;死亡人數",
    "en_def": "a death caused by an accident or disease",
    "sentence": "The new road safety rules reduced traffic {{BLANK}} by twenty percent, and fewer families lost loved ones.",
    "cn": "新的道路安全規定讓交通死亡人數減少了百分之二十,失去親人的家庭也變少了。"
  },
  {
    "word": "fragility",
    "pos": "n.",
    "cn_def": "脆弱",
    "en_def": "the quality of being weak and easily broken",
    "sentence": "The pandemic showed the {{BLANK}} of the health system, because hospitals quickly ran out of beds.",
    "cn": "疫情顯示出醫療體系的脆弱,因為醫院很快就沒有病床了。"
  },
  {
    "word": "infirmity",
    "pos": "n.",
    "cn_def": "虛弱;病弱",
    "en_def": "physical or mental weakness, especially from old age",
    "sentence": "Despite the {{BLANK}} of old age, my great-grandmother still insists on cooking her own meals, and she refuses any help.",
    "cn": "儘管年老體弱,我曾祖母仍堅持自己煮飯,而且拒絕任何幫忙。"
  },
  {
    "word": "morbidity",
    "pos": "n.",
    "cn_def": "罹病率",
    "en_def": "the rate of illness in a population",
    "sentence": "Air pollution increases {{BLANK}} in big cities, so more people visit doctors for breathing problems.",
    "cn": "空氣污染提高了大城市的罹病率,所以更多人因呼吸問題去看醫生。"
  },
  {
    "word": "necessity",
    "pos": "n.",
    "cn_def": "必需品;必要",
    "en_def": "something that you need",
    "sentence": "For older people living alone, a phone that calls for help is a {{BLANK}}, not a luxury, so many families buy one for their grandparents.",
    "cn": "對獨居長者來說,一支能求救的電話是必需品,而不是奢侈品,所以許多家庭會為祖父母買一支。"
  },
  {
    "word": "negligence",
    "pos": "n.",
    "cn_def": "疏失;過失",
    "en_def": "failure to take proper care",
    "sentence": "The family sued the hospital for {{BLANK}}, because the nurse gave the patient the wrong medicine.",
    "cn": "那家人控告醫院疏失,因為護理師給病人用錯了藥。"
  },
  {
    "word": "prevention",
    "pos": "n.",
    "cn_def": "預防",
    "en_def": "stopping something bad from happening",
    "sentence": "The {{BLANK}} of diabetes is cheaper than treatment, so the government pays for free health checks.",
    "cn": "預防糖尿病比治療便宜,所以政府支付免費健康檢查的費用。"
  },
  {
    "word": "remission",
    "pos": "n.",
    "cn_def": "緩解期",
    "en_def": "a period when a serious illness becomes less severe",
    "sentence": "After a year of treatment, her cancer is in {{BLANK}}, but she still has regular check-ups.",
    "cn": "經過一年的治療,她的癌症已進入緩解期,但她仍然定期回診檢查。"
  },
  {
    "word": "sustainability",
    "pos": "n.",
    "cn_def": "永續性",
    "en_def": "the ability to continue for a long time",
    "sentence": "Experts question the {{BLANK}} of the health insurance system, because costs are rising every year.",
    "cn": "專家質疑健保制度的永續性,因為成本每年都在上升。"
  },
  {
    "word": "dependency",
    "pos": "n.",
    "cn_def": "依賴",
    "en_def": "the state of needing something or someone too much",
    "sentence": "Doctors try to avoid long-term {{BLANK}} on sleeping pills, so they suggest other ways to improve sleep.",
    "cn": "醫生盡量避免病人長期依賴安眠藥,所以會建議其他改善睡眠的方法。"
  },
  {
    "word": "disclosure",
    "pos": "n.",
    "cn_def": "揭露;公開",
    "en_def": "making information known",
    "sentence": "The law requires the {{BLANK}} of side effects, so every medicine box contains a long information sheet.",
    "cn": "法律規定必須揭露副作用,所以每盒藥裡都附有一張很長的說明書。"
  },
  {
    "word": "endorsement",
    "pos": "n.",
    "cn_def": "背書;支持",
    "en_def": "public support or approval",
    "sentence": "The new exercise programme received an {{BLANK}} from the health ministry, so many schools adopted it.",
    "cn": "這項新的運動計畫獲得衛福部的背書,所以許多學校採用了它。"
  },
  {
    "word": "enrolment",
    "pos": "n.",
    "cn_def": "登記;報名",
    "en_def": "the act of officially joining a programme",
    "sentence": "{{BLANK}} in the free flu vaccine programme begins in October, and seniors can sign up at any clinic.",
    "cn": "免費流感疫苗計畫的登記從十月開始,長者可以在任何診所報名。"
  },
  {
    "word": "exacerbation",
    "pos": "n.",
    "cn_def": "惡化;加劇",
    "en_def": "the act of making a problem worse",
    "sentence": "Cold weather often causes an {{BLANK}} of asthma, so patients should keep warm in winter.",
    "cn": "寒冷的天氣常導致氣喘惡化,所以病人冬天應該注意保暖。"
  },
  {
    "word": "inadequacy",
    "pos": "n.",
    "cn_def": "不足;不充分",
    "en_def": "the state of not being good enough",
    "sentence": "The report pointed out the {{BLANK}} of mental health services in rural areas, because few counsellors work there.",
    "cn": "報告指出鄉村地區心理健康服務的不足,因為那裡很少有輔導人員。"
  }
];

const MCQS = [
  {
    "q": "Habits that start in childhood often continue into _____, so it is important to teach children to exercise.",
    "options": [
      "adulthood",
      "intolerance",
      "myopia",
      "paediatrician"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Back pain is a common _____ among office workers, because they sit at their desks for hours.",
    "options": [
      "capsule",
      "affliction",
      "fulfilment",
      "prescription"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The pharmacist can help with small _____ like colds and headaches, so you do not always need to see a doctor.",
    "options": [
      "equality",
      "fever",
      "commencement",
      "ailment"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Families who look after a disabled relative can get a monthly _____, but the forms are complicated.",
    "options": [
      "recommendation",
      "pill",
      "allowance",
      "marker"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Many patients feel some _____ before surgery, so the nurses explain every step to calm them.",
    "options": [
      "apprehension",
      "behaviour",
      "infection",
      "facility"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "He worked long hours to the _____ of his health, and in the end he became seriously ill.",
    "options": [
      "handwashing",
      "clinic",
      "detriment",
      "replacement"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Buildings should be designed for people with a _____, so ramps and wide doors are now required.",
    "options": [
      "pharmacist",
      "chemotherapy",
      "objection",
      "disability"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "You may feel some _____ after the injection, but it usually disappears within a day.",
    "options": [
      "disruption",
      "discomfort",
      "delivery",
      "hospice"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "There is growing _____ with long waiting times, so the hospital is hiring more doctors.",
    "options": [
      "dissatisfaction",
      "recommendation",
      "infection",
      "insurer"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Life _____ in Taiwan is now over eighty years, but people often spend their last years in poor health.",
    "options": [
      "stitches",
      "centenarian",
      "replacement",
      "expectancy"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The new road safety rules reduced traffic _____ by twenty percent, and fewer families lost loved ones.",
    "options": [
      "cavity",
      "fatality",
      "governance",
      "referral"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The pandemic showed the _____ of the health system, because hospitals quickly ran out of beds.",
    "options": [
      "epidemiology",
      "stitches",
      "fragility",
      "renewal"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Despite the _____ of old age, my great-grandmother still insists on cooking her own meals, and she refuses any help.",
    "options": [
      "infirmity",
      "continuation",
      "epidemiology",
      "measles"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Air pollution increases _____ in big cities, so more people visit doctors for breathing problems.",
    "options": [
      "refusal",
      "increment",
      "readiness",
      "morbidity"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "For older people living alone, a phone that calls for help is a _____, not a luxury, so many families buy one for their grandparents.",
    "options": [
      "suspension",
      "necessity",
      "belief",
      "normality"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The family sued the hospital for _____, because the nurse gave the patient the wrong medicine.",
    "options": [
      "association",
      "intolerance",
      "negligence",
      "complication"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ of diabetes is cheaper than treatment, so the government pays for free health checks.",
    "options": [
      "check-up",
      "prevention",
      "cough",
      "inefficiency"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "After a year of treatment, her cancer is in _____, but she still has regular check-ups.",
    "options": [
      "remission",
      "eyesight",
      "booster",
      "equality"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Experts question the _____ of the health insurance system, because costs are rising every year.",
    "options": [
      "check-up",
      "inspection",
      "stretcher",
      "sustainability"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Doctors try to avoid long-term _____ on sleeping pills, so they suggest other ways to improve sleep.",
    "options": [
      "epidemiology",
      "pandemic",
      "dependency",
      "objection"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The law requires the _____ of side effects, so every medicine box contains a long information sheet.",
    "options": [
      "myopia",
      "disclosure",
      "refusal",
      "frailty"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new exercise programme received an _____ from the health ministry, so many schools adopted it.",
    "options": [
      "licensing",
      "frailty",
      "endorsement",
      "insurer"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "_____ in the free flu vaccine programme begins in October, and seniors can sign up at any clinic.",
    "options": [
      "enrolment",
      "affluence",
      "pharmacy",
      "chemotherapy"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Cold weather often causes an _____ of asthma, so patients should keep warm in winter.",
    "options": [
      "affluence",
      "myopia",
      "enforcement",
      "exacerbation"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The report pointed out the _____ of mental health services in rural areas, because few counsellors work there.",
    "options": [
      "influenza",
      "inadequacy",
      "inspection",
      "frailty"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "adulthood": {
    "pos": "n.",
    "en_def": "the time of life when you are an adult",
    "cn_def": "成年期"
  },
  "affliction": {
    "pos": "n.",
    "en_def": "something that causes pain or suffering",
    "cn_def": "苦難;病痛"
  },
  "ailment": {
    "pos": "n.",
    "en_def": "a minor illness",
    "cn_def": "小病;疾病"
  },
  "allowance": {
    "pos": "n.",
    "en_def": "money given regularly for a special purpose",
    "cn_def": "津貼;補助"
  },
  "apprehension": {
    "pos": "n.",
    "en_def": "worry about something that may happen",
    "cn_def": "憂慮;擔心"
  },
  "detriment": {
    "pos": "n.",
    "en_def": "harm or damage",
    "cn_def": "損害;傷害"
  },
  "disability": {
    "pos": "n.",
    "en_def": "a condition that limits a person's movement or senses",
    "cn_def": "身心障礙;失能"
  },
  "discomfort": {
    "pos": "n.",
    "en_def": "a feeling of mild pain or being uncomfortable",
    "cn_def": "不適"
  },
  "dissatisfaction": {
    "pos": "n.",
    "en_def": "the feeling of not being happy with something",
    "cn_def": "不滿"
  },
  "expectancy": {
    "pos": "n.",
    "en_def": "how long something is expected to last",
    "cn_def": "預期;預期壽命"
  },
  "fatality": {
    "pos": "n.",
    "en_def": "a death caused by an accident or disease",
    "cn_def": "死亡;死亡人數"
  },
  "fragility": {
    "pos": "n.",
    "en_def": "the quality of being weak and easily broken",
    "cn_def": "脆弱"
  },
  "infirmity": {
    "pos": "n.",
    "en_def": "physical or mental weakness, especially from old age",
    "cn_def": "虛弱;病弱"
  },
  "morbidity": {
    "pos": "n.",
    "en_def": "the rate of illness in a population",
    "cn_def": "罹病率"
  },
  "necessity": {
    "pos": "n.",
    "en_def": "something that you need",
    "cn_def": "必需品;必要"
  },
  "negligence": {
    "pos": "n.",
    "en_def": "failure to take proper care",
    "cn_def": "疏失;過失"
  },
  "prevention": {
    "pos": "n.",
    "en_def": "stopping something bad from happening",
    "cn_def": "預防"
  },
  "remission": {
    "pos": "n.",
    "en_def": "a period when a serious illness becomes less severe",
    "cn_def": "緩解期"
  },
  "sustainability": {
    "pos": "n.",
    "en_def": "the ability to continue for a long time",
    "cn_def": "永續性"
  },
  "dependency": {
    "pos": "n.",
    "en_def": "the state of needing something or someone too much",
    "cn_def": "依賴"
  },
  "disclosure": {
    "pos": "n.",
    "en_def": "making information known",
    "cn_def": "揭露;公開"
  },
  "endorsement": {
    "pos": "n.",
    "en_def": "public support or approval",
    "cn_def": "背書;支持"
  },
  "enrolment": {
    "pos": "n.",
    "en_def": "the act of officially joining a programme",
    "cn_def": "登記;報名"
  },
  "exacerbation": {
    "pos": "n.",
    "en_def": "the act of making a problem worse",
    "cn_def": "惡化;加劇"
  },
  "inadequacy": {
    "pos": "n.",
    "en_def": "the state of not being good enough",
    "cn_def": "不足;不充分"
  },
  "intolerance": {
    "pos": "n.",
    "en_def": "the inability of the body to accept certain food or drugs",
    "cn_def": "不耐;不耐症"
  },
  "myopia": {
    "pos": "n.",
    "en_def": "the condition of being unable to see far things clearly",
    "cn_def": "近視"
  },
  "paediatrician": {
    "pos": "n.",
    "en_def": "a doctor who treats children",
    "cn_def": "小兒科醫師"
  },
  "capsule": {
    "pos": "n.",
    "en_def": "a small tube of medicine that you swallow whole",
    "cn_def": "膠囊"
  },
  "fulfilment": {
    "pos": "n.",
    "en_def": "a feeling of happiness from doing something useful",
    "cn_def": "滿足感;成就感"
  },
  "prescription": {
    "pos": "n.",
    "en_def": "a doctor's written order for medicine",
    "cn_def": "處方箋"
  },
  "equality": {
    "pos": "n.",
    "en_def": "the state of being equal",
    "cn_def": "平等"
  },
  "fever": {
    "pos": "n.",
    "en_def": "a body temperature that is higher than normal",
    "cn_def": "發燒"
  },
  "commencement": {
    "pos": "n.",
    "en_def": "the beginning of something",
    "cn_def": "開始"
  },
  "recommendation": {
    "pos": "n.",
    "en_def": "a suggestion about what should be done",
    "cn_def": "建議"
  },
  "pill": {
    "pos": "n.",
    "en_def": "a small round piece of medicine that you swallow",
    "cn_def": "藥丸"
  },
  "marker": {
    "pos": "n.",
    "en_def": "a sign that shows something exists",
    "cn_def": "指標;標記"
  },
  "behaviour": {
    "pos": "n.",
    "en_def": "the way a person acts",
    "cn_def": "行為"
  },
  "infection": {
    "pos": "n.",
    "en_def": "a disease caused by germs entering the body",
    "cn_def": "感染"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building or place for a particular purpose",
    "cn_def": "設施"
  },
  "handwashing": {
    "pos": "n.",
    "en_def": "the act of washing your hands",
    "cn_def": "洗手"
  },
  "clinic": {
    "pos": "n.",
    "en_def": "a small place where people see a doctor",
    "cn_def": "診所"
  },
  "replacement": {
    "pos": "n.",
    "en_def": "a new part that takes the place of an old one",
    "cn_def": "置換;替代品"
  },
  "pharmacist": {
    "pos": "n.",
    "en_def": "a person who prepares and sells medicine",
    "cn_def": "藥劑師"
  },
  "chemotherapy": {
    "pos": "n.",
    "en_def": "treatment of cancer with strong drugs",
    "cn_def": "化學治療;化療"
  },
  "objection": {
    "pos": "n.",
    "en_def": "a reason for not agreeing",
    "cn_def": "反對;異議"
  },
  "disruption": {
    "pos": "n.",
    "en_def": "a problem that stops something from continuing normally",
    "cn_def": "中斷;干擾"
  },
  "delivery": {
    "pos": "n.",
    "en_def": "the act of providing a service",
    "cn_def": "提供;遞送"
  },
  "hospice": {
    "pos": "n.",
    "en_def": "a place that cares for people who are dying",
    "cn_def": "安寧病房;安寧療護機構"
  },
  "insurer": {
    "pos": "n.",
    "en_def": "a company that provides insurance",
    "cn_def": "保險公司"
  },
  "stitches": {
    "pos": "n.",
    "en_def": "short threads used to close a cut in the skin",
    "cn_def": "縫針;縫線"
  },
  "centenarian": {
    "pos": "n.",
    "en_def": "a person who is 100 years old or more",
    "cn_def": "百歲人瑞"
  },
  "cavity": {
    "pos": "n.",
    "en_def": "a hole in a tooth caused by decay",
    "cn_def": "蛀牙;齲齒"
  },
  "governance": {
    "pos": "n.",
    "en_def": "the way an organisation is controlled and managed",
    "cn_def": "治理"
  },
  "referral": {
    "pos": "n.",
    "en_def": "sending a patient to another doctor or service",
    "cn_def": "轉介;轉診"
  },
  "epidemiology": {
    "pos": "n.",
    "en_def": "the study of how diseases spread in populations",
    "cn_def": "流行病學"
  },
  "renewal": {
    "pos": "n.",
    "en_def": "the act of making something valid again",
    "cn_def": "更新;續約"
  },
  "continuation": {
    "pos": "n.",
    "en_def": "the act of carrying on with something",
    "cn_def": "持續;延續"
  },
  "measles": {
    "pos": "n.",
    "en_def": "an infectious disease that causes red spots and fever",
    "cn_def": "麻疹"
  },
  "refusal": {
    "pos": "n.",
    "en_def": "saying no to something",
    "cn_def": "拒絕"
  },
  "increment": {
    "pos": "n.",
    "en_def": "a small increase",
    "cn_def": "增量;增額"
  },
  "readiness": {
    "pos": "n.",
    "en_def": "the state of being prepared",
    "cn_def": "準備就緒"
  },
  "suspension": {
    "pos": "n.",
    "en_def": "stopping something for a period of time",
    "cn_def": "暫停;停職"
  },
  "belief": {
    "pos": "n.",
    "en_def": "a feeling that something is true",
    "cn_def": "信念;看法"
  },
  "normality": {
    "pos": "n.",
    "en_def": "the state of being normal",
    "cn_def": "常態"
  },
  "association": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "關聯"
  },
  "complication": {
    "pos": "n.",
    "en_def": "a new medical problem that makes an illness worse",
    "cn_def": "併發症"
  },
  "check-up": {
    "pos": "n.",
    "en_def": "a general medical examination",
    "cn_def": "健康檢查"
  },
  "cough": {
    "pos": "n.",
    "en_def": "the act or sound of pushing air out of the throat",
    "cn_def": "咳嗽"
  },
  "inefficiency": {
    "pos": "n.",
    "en_def": "the failure to use time or money well",
    "cn_def": "效率不彰"
  },
  "eyesight": {
    "pos": "n.",
    "en_def": "the ability to see",
    "cn_def": "視力"
  },
  "booster": {
    "pos": "n.",
    "en_def": "an extra dose of a vaccine to keep protection strong",
    "cn_def": "追加劑"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "an official check",
    "cn_def": "檢查;稽查"
  },
  "stretcher": {
    "pos": "n.",
    "en_def": "a long frame used to carry a sick or injured person",
    "cn_def": "擔架"
  },
  "pandemic": {
    "pos": "n.",
    "en_def": "a disease that spreads over many countries",
    "cn_def": "全球大流行病"
  },
  "frailty": {
    "pos": "n.",
    "en_def": "the state of being physically weak, often due to age",
    "cn_def": "衰弱"
  },
  "licensing": {
    "pos": "n.",
    "en_def": "giving official permission to do something",
    "cn_def": "核發執照;許可"
  },
  "affluence": {
    "pos": "n.",
    "en_def": "the state of having a lot of money",
    "cn_def": "富裕"
  },
  "pharmacy": {
    "pos": "n.",
    "en_def": "a shop where medicines are sold",
    "cn_def": "藥局"
  },
  "enforcement": {
    "pos": "n.",
    "en_def": "making sure a law is obeyed",
    "cn_def": "執法;執行"
  },
  "influenza": {
    "pos": "n.",
    "en_def": "a common infectious illness with fever and aches; the flu",
    "cn_def": "流行性感冒"
  }
};

const EXTRA_GLOSSES = {};
