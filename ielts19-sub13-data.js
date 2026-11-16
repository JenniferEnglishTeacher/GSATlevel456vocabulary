// Topic 19 Subunit 13 Quiz Data: Academic Words 學術單字 7 (noticeably – overuse)
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S13 - Academic Words 學術單字 7 (noticeably – overuse)",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "noticeably",
    "pos": "adv.",
    "cn_def": "明顯地",
    "en_def": "in a way that is easy to see",
    "sentence": "After a month of walking every day, my father looked {{BLANK}} healthier, and he slept better too.",
    "cn": "每天走路一個月後,我爸爸看起來明顯更健康了,睡得也更好。"
  },
  {
    "word": "slightly",
    "pos": "adv.",
    "cn_def": "稍微地",
    "en_def": "a little",
    "sentence": "My temperature was {{BLANK}} high this morning, so I stayed at home and rested all day.",
    "cn": "我今天早上的體溫稍微偏高,所以我待在家休息一整天。"
  },
  {
    "word": "proportionately",
    "pos": "adv.",
    "cn_def": "按比例地",
    "en_def": "in a way that matches the size of something",
    "sentence": "As the number of patients grows, the number of nurses should increase {{BLANK}}, but this rarely happens.",
    "cn": "隨著病人數量增加,護理師的人數應該按比例增加,但這很少發生。"
  },
  {
    "word": "optimally",
    "pos": "adv.",
    "cn_def": "最佳地",
    "en_def": "in the best possible way",
    "sentence": "To work {{BLANK}}, the brain needs both sleep and water, so do not skip either before an exam.",
    "cn": "大腦要最佳地運作,需要睡眠和水分,所以考試前兩者都不要省略。"
  },
  {
    "word": "efficiently",
    "pos": "adv.",
    "cn_def": "有效率地",
    "en_def": "in a way that does not waste time or money",
    "sentence": "The new booking system helps the clinic run more {{BLANK}}, so patients spend less time waiting.",
    "cn": "新的預約系統幫助診所更有效率地運作,所以病人等待的時間減少了。"
  },
  {
    "word": "affordably",
    "pos": "adv.",
    "cn_def": "價格合理地",
    "en_def": "at a price people can pay",
    "sentence": "The charity provides glasses {{BLANK}} to poor families, and some children can read the board for the first time.",
    "cn": "這個慈善團體以合理的價格為貧困家庭提供眼鏡,有些孩子第一次能看清黑板。"
  },
  {
    "word": "persistently",
    "pos": "adv.",
    "cn_def": "持續地",
    "en_def": "continuing for a long time",
    "sentence": "If you feel {{BLANK}} tired for weeks, you should see a doctor, because it may be a sign of illness.",
    "cn": "如果你連續幾週持續感到疲倦,應該去看醫生,因為那可能是疾病的徵兆。"
  },
  {
    "word": "predictably",
    "pos": "adv.",
    "cn_def": "可想而知地",
    "en_def": "in a way that was expected",
    "sentence": "{{BLANK}}, flu cases rose after the long holiday, because many people had travelled and met relatives.",
    "cn": "可想而知,長假過後流感病例增加了,因為許多人去旅行並與親戚相聚。"
  },
  {
    "word": "promptly",
    "pos": "adv.",
    "cn_def": "迅速地;立即地",
    "en_def": "quickly and without delay",
    "sentence": "Burns should be cooled {{BLANK}} under running water, so the skin is not damaged further.",
    "cn": "燙傷應該立即用流動的水沖涼,這樣皮膚才不會進一步受損。"
  },
  {
    "word": "reliably",
    "pos": "adv.",
    "cn_def": "可靠地",
    "en_def": "in a way that can be trusted",
    "sentence": "The test can {{BLANK}} detect the virus within fifteen minutes, so it is used at airports.",
    "cn": "這種檢測能在十五分鐘內可靠地驗出病毒,所以被用於機場。"
  },
  {
    "word": "safely",
    "pos": "adv.",
    "cn_def": "安全地",
    "en_def": "without danger",
    "sentence": "The hospital must dispose of used needles {{BLANK}}, or the cleaners who empty the bins could be badly injured.",
    "cn": "醫院必須安全地處理用過的針頭,否則清倒垃圾桶的清潔人員可能會嚴重受傷。"
  },
  {
    "word": "sustainably",
    "pos": "adv.",
    "cn_def": "永續地",
    "en_def": "in a way that can continue for a long time",
    "sentence": "The health system must be funded {{BLANK}}, or there will not be enough money when we are old.",
    "cn": "醫療體系必須被永續地籌資,否則等我們老了就沒有足夠的錢了。"
  },
  {
    "word": "adequacy",
    "pos": "n.",
    "cn_def": "適足性;充分",
    "en_def": "the state of being good or enough",
    "sentence": "Researchers checked the {{BLANK}} of school lunches, and they found that many lacked enough vegetables.",
    "cn": "研究人員檢查了學校午餐的充分性,發現許多午餐蔬菜不足。"
  },
  {
    "word": "equality",
    "pos": "n.",
    "cn_def": "平等",
    "en_def": "the state of being equal",
    "sentence": "The charity works for {{BLANK}} in health care, so that poor families receive the same treatment as rich ones.",
    "cn": "這個慈善團體致力於醫療平等,讓貧困家庭獲得和富裕家庭相同的治療。"
  },
  {
    "word": "infringement",
    "pos": "n.",
    "cn_def": "侵犯;違反",
    "en_def": "an action that breaks a rule or law",
    "sentence": "Sharing a patient's photo online is an {{BLANK}} of privacy, so the nurse was punished.",
    "cn": "在網路上分享病人的照片是侵犯隱私的行為,所以那名護理師受到了處分。"
  },
  {
    "word": "inspection",
    "pos": "n.",
    "cn_def": "檢查;稽查",
    "en_def": "an official check",
    "sentence": "Health officials carry out a surprise {{BLANK}} of night markets every summer, and stalls with dirty kitchens are fined.",
    "cn": "衛生官員每年夏天都會對夜市進行突擊稽查,廚房骯髒的攤位會被罰款。"
  },
  {
    "word": "investment",
    "pos": "n.",
    "cn_def": "投資",
    "en_def": "money spent to get future benefits",
    "sentence": "More {{BLANK}} in nurses would improve patient care, but the hospital says its budget is too small.",
    "cn": "對護理人員更多的投資能改善病人照護,但醫院說它的預算太少。"
  },
  {
    "word": "spending",
    "pos": "n.",
    "cn_def": "支出",
    "en_def": "the amount of money spent",
    "sentence": "Government {{BLANK}} on health has grown every year, because the population is getting older very quickly.",
    "cn": "政府在醫療上的支出逐年增加,因為人口正快速老化。"
  },
  {
    "word": "progression",
    "pos": "n.",
    "cn_def": "進展;惡化",
    "en_def": "the process of developing or getting worse",
    "sentence": "The new drug slows the {{BLANK}} of the disease, so patients can live normally for longer.",
    "cn": "這種新藥能減緩疾病的進展,所以病人能更長時間正常生活。"
  },
  {
    "word": "marker",
    "pos": "n.",
    "cn_def": "指標;標記",
    "en_def": "a sign that shows something exists",
    "sentence": "High blood sugar is a {{BLANK}} of diabetes risk, so doctors test it during every health check.",
    "cn": "高血糖是糖尿病風險的指標,所以醫生在每次健康檢查時都會檢測。"
  },
  {
    "word": "association",
    "pos": "n.",
    "cn_def": "關聯",
    "en_def": "a connection between two things",
    "sentence": "Studies show a strong {{BLANK}} between loneliness and poor health, so communities organise activities for seniors.",
    "cn": "研究顯示孤獨與健康不佳之間有密切關聯,所以社區為長者舉辦活動。"
  },
  {
    "word": "contain",
    "pos": "v.",
    "cn_def": "控制;遏制",
    "en_def": "to stop something from spreading",
    "sentence": "Health workers moved quickly to {{BLANK}} the outbreak, so it stayed in one small town.",
    "cn": "衛生人員迅速行動以遏制疫情,所以它只停留在一個小鎮。"
  },
  {
    "word": "insure",
    "pos": "v.",
    "cn_def": "為……投保",
    "en_def": "to buy insurance against loss or illness",
    "sentence": "Many parents {{BLANK}} their children against accidents, because hospital costs can be very high in an emergency.",
    "cn": "許多父母為孩子投保意外險,因為緊急情況下的住院費用可能非常高。"
  },
  {
    "word": "ration",
    "pos": "v.",
    "cn_def": "配給;限量供應",
    "en_def": "to limit how much of something each person can have",
    "sentence": "At the start of the pandemic, the government had to {{BLANK}} face masks, so each person could buy only a few a week.",
    "cn": "疫情初期政府必須限量供應口罩,所以每人每週只能買幾個。"
  },
  {
    "word": "overuse",
    "pos": "v.",
    "cn_def": "過度使用",
    "en_def": "to use something too much",
    "sentence": "If people {{BLANK}} antibiotics, germs become stronger, so doctors give them only when they are needed.",
    "cn": "如果人們過度使用抗生素,病菌就會變得更強,所以醫生只在必要時才開藥。"
  }
];

const MCQS = [
  {
    "q": "After a month of walking every day, my father looked _____ healthier, and he slept better too.",
    "options": [
      "moderately",
      "disproportionately",
      "alarmingly",
      "noticeably"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "My temperature was _____ high this morning, so I stayed at home and rested all day.",
    "options": [
      "slightly",
      "independently",
      "dangerously",
      "chronically"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "As the number of patients grows, the number of nurses should increase _____, but this rarely happens.",
    "options": [
      "routinely",
      "adequately",
      "proportionately",
      "medically"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "To work _____, the brain needs both sleep and water, so do not skip either before an exam.",
    "options": [
      "regularly",
      "optimally",
      "overly",
      "prematurely"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The new booking system helps the clinic run more _____, so patients spend less time waiting.",
    "options": [
      "rapidly",
      "unnecessarily",
      "efficiently",
      "permanently"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The charity provides glasses _____ to poor families, and some children can read the board for the first time.",
    "options": [
      "adequately",
      "prematurely",
      "regularly",
      "affordably"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "If you feel _____ tired for weeks, you should see a doctor, because it may be a sign of illness.",
    "options": [
      "generally",
      "persistently",
      "worryingly",
      "rapidly"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "_____, flu cases rose after the long holiday, because many people had travelled and met relatives.",
    "options": [
      "predictably",
      "equitably",
      "generally",
      "severely"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Burns should be cooled _____ under running water, so the skin is not damaged further.",
    "options": [
      "nationally",
      "equitably",
      "severely",
      "promptly"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The test can _____ detect the virus within fifteen minutes, so it is used at airports.",
    "options": [
      "equitably",
      "disproportionately",
      "reliably",
      "physically"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The hospital must dispose of used needles _____, or the cleaners who empty the bins could be badly injured.",
    "options": [
      "occasionally",
      "safely",
      "medically",
      "sufficiently"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The health system must be funded _____, or there will not be enough money when we are old.",
    "options": [
      "sustainably",
      "permanently",
      "rapidly",
      "occasionally"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Researchers checked the _____ of school lunches, and they found that many lacked enough vegetables.",
    "options": [
      "cancer",
      "affliction",
      "allergy",
      "adequacy"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The charity works for _____ in health care, so that poor families receive the same treatment as rich ones.",
    "options": [
      "equality",
      "cataract",
      "widow",
      "fragility"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Sharing a patient's photo online is an _____ of privacy, so the nurse was punished.",
    "options": [
      "pandemic",
      "infringement",
      "centenarian",
      "syringe"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Health officials carry out a surprise _____ of night markets every summer, and stalls with dirty kitchens are fined.",
    "options": [
      "specialist",
      "prevention",
      "inspection",
      "apprehension"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "More _____ in nurses would improve patient care, but the hospital says its budget is too small.",
    "options": [
      "investment",
      "operation",
      "infection",
      "injection"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Government _____ on health has grown every year, because the population is getting older very quickly.",
    "options": [
      "chickenpox",
      "frailty",
      "quality",
      "spending"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The new drug slows the _____ of the disease, so patients can live normally for longer.",
    "options": [
      "injection",
      "progression",
      "sunscreen",
      "arthritis"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "High blood sugar is a _____ of diabetes risk, so doctors test it during every health check.",
    "options": [
      "epidemiology",
      "discomfort",
      "marker",
      "recipient"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Studies show a strong _____ between loneliness and poor health, so communities organise activities for seniors.",
    "options": [
      "pharmacy",
      "association",
      "germ",
      "scar"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Health workers moved quickly to _____ the outbreak, so it stayed in one small town.",
    "options": [
      "reimburse",
      "vaccinate",
      "contain",
      "endanger"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Many parents _____ their children against accidents, because hospital costs can be very high in an emergency.",
    "options": [
      "insure",
      "heal",
      "assist",
      "vaccinate"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "At the start of the pandemic, the government had to _____ face masks, so each person could buy only a few a week.",
    "options": [
      "subsidise",
      "infect",
      "overstretch",
      "ration"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "If people _____ antibiotics, germs become stronger, so doctors give them only when they are needed.",
    "options": [
      "subsidise",
      "afflict",
      "overuse",
      "prolong"
    ],
    "answer": 2,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "noticeably": {
    "pos": "adv.",
    "en_def": "in a way that is easy to see",
    "cn_def": "明顯地"
  },
  "slightly": {
    "pos": "adv.",
    "en_def": "a little",
    "cn_def": "稍微地"
  },
  "proportionately": {
    "pos": "adv.",
    "en_def": "in a way that matches the size of something",
    "cn_def": "按比例地"
  },
  "optimally": {
    "pos": "adv.",
    "en_def": "in the best possible way",
    "cn_def": "最佳地"
  },
  "efficiently": {
    "pos": "adv.",
    "en_def": "in a way that does not waste time or money",
    "cn_def": "有效率地"
  },
  "affordably": {
    "pos": "adv.",
    "en_def": "at a price people can pay",
    "cn_def": "價格合理地"
  },
  "persistently": {
    "pos": "adv.",
    "en_def": "continuing for a long time",
    "cn_def": "持續地"
  },
  "predictably": {
    "pos": "adv.",
    "en_def": "in a way that was expected",
    "cn_def": "可想而知地"
  },
  "promptly": {
    "pos": "adv.",
    "en_def": "quickly and without delay",
    "cn_def": "迅速地;立即地"
  },
  "reliably": {
    "pos": "adv.",
    "en_def": "in a way that can be trusted",
    "cn_def": "可靠地"
  },
  "safely": {
    "pos": "adv.",
    "en_def": "without danger",
    "cn_def": "安全地"
  },
  "sustainably": {
    "pos": "adv.",
    "en_def": "in a way that can continue for a long time",
    "cn_def": "永續地"
  },
  "adequacy": {
    "pos": "n.",
    "en_def": "the state of being good or enough",
    "cn_def": "適足性;充分"
  },
  "equality": {
    "pos": "n.",
    "en_def": "the state of being equal",
    "cn_def": "平等"
  },
  "infringement": {
    "pos": "n.",
    "en_def": "an action that breaks a rule or law",
    "cn_def": "侵犯;違反"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "an official check",
    "cn_def": "檢查;稽查"
  },
  "investment": {
    "pos": "n.",
    "en_def": "money spent to get future benefits",
    "cn_def": "投資"
  },
  "spending": {
    "pos": "n.",
    "en_def": "the amount of money spent",
    "cn_def": "支出"
  },
  "progression": {
    "pos": "n.",
    "en_def": "the process of developing or getting worse",
    "cn_def": "進展;惡化"
  },
  "marker": {
    "pos": "n.",
    "en_def": "a sign that shows something exists",
    "cn_def": "指標;標記"
  },
  "association": {
    "pos": "n.",
    "en_def": "a connection between two things",
    "cn_def": "關聯"
  },
  "contain": {
    "pos": "v.",
    "en_def": "to stop something from spreading",
    "cn_def": "控制;遏制"
  },
  "insure": {
    "pos": "v.",
    "en_def": "to buy insurance against loss or illness",
    "cn_def": "為……投保"
  },
  "ration": {
    "pos": "v.",
    "en_def": "to limit how much of something each person can have",
    "cn_def": "配給;限量供應"
  },
  "overuse": {
    "pos": "v.",
    "en_def": "to use something too much",
    "cn_def": "過度使用"
  },
  "moderately": {
    "pos": "adv.",
    "en_def": "to an average degree; not too much",
    "cn_def": "適度地"
  },
  "disproportionately": {
    "pos": "adv.",
    "en_def": "too much or too little compared with others",
    "cn_def": "不成比例地"
  },
  "alarmingly": {
    "pos": "adv.",
    "en_def": "in a way that causes worry",
    "cn_def": "令人擔憂地"
  },
  "independently": {
    "pos": "adv.",
    "en_def": "without help from others",
    "cn_def": "獨立地"
  },
  "dangerously": {
    "pos": "adv.",
    "en_def": "in a way that may cause harm",
    "cn_def": "危險地"
  },
  "chronically": {
    "pos": "adv.",
    "en_def": "for a long time and not easily cured",
    "cn_def": "長期地"
  },
  "routinely": {
    "pos": "adv.",
    "en_def": "as a normal part of a process",
    "cn_def": "例行地;常規地"
  },
  "adequately": {
    "pos": "adv.",
    "en_def": "well enough",
    "cn_def": "充分地;適當地"
  },
  "medically": {
    "pos": "adv.",
    "en_def": "in a way that relates to medicine",
    "cn_def": "醫學上"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often and at even times",
    "cn_def": "定期地;經常地"
  },
  "overly": {
    "pos": "adv.",
    "en_def": "too; very much",
    "cn_def": "過度地"
  },
  "prematurely": {
    "pos": "adv.",
    "en_def": "too early",
    "cn_def": "過早地"
  },
  "rapidly": {
    "pos": "adv.",
    "en_def": "very quickly",
    "cn_def": "迅速地"
  },
  "unnecessarily": {
    "pos": "adv.",
    "en_def": "in a way that is not needed",
    "cn_def": "不必要地"
  },
  "permanently": {
    "pos": "adv.",
    "en_def": "for all time",
    "cn_def": "永久地"
  },
  "generally": {
    "pos": "adv.",
    "en_def": "usually; in most cases",
    "cn_def": "一般而言;通常"
  },
  "worryingly": {
    "pos": "adv.",
    "en_def": "in a way that makes people worried",
    "cn_def": "令人擔憂地"
  },
  "equitably": {
    "pos": "adv.",
    "en_def": "in a fair way",
    "cn_def": "公平地"
  },
  "severely": {
    "pos": "adv.",
    "en_def": "very badly or seriously",
    "cn_def": "嚴重地"
  },
  "nationally": {
    "pos": "adv.",
    "en_def": "across the whole country",
    "cn_def": "全國地"
  },
  "physically": {
    "pos": "adv.",
    "en_def": "in a way that relates to the body",
    "cn_def": "身體上"
  },
  "occasionally": {
    "pos": "adv.",
    "en_def": "sometimes but not often",
    "cn_def": "偶爾"
  },
  "sufficiently": {
    "pos": "adv.",
    "en_def": "enough",
    "cn_def": "充分地;足夠地"
  },
  "cancer": {
    "pos": "n.",
    "en_def": "a serious disease in which cells grow in an uncontrolled way",
    "cn_def": "癌症"
  },
  "affliction": {
    "pos": "n.",
    "en_def": "something that causes pain or suffering",
    "cn_def": "苦難;病痛"
  },
  "allergy": {
    "pos": "n.",
    "en_def": "a bad reaction of the body to certain food, dust or plants",
    "cn_def": "過敏"
  },
  "cataract": {
    "pos": "n.",
    "en_def": "a cloudy area in the eye that makes it hard to see",
    "cn_def": "白內障"
  },
  "widow": {
    "pos": "n.",
    "en_def": "a woman whose husband has died",
    "cn_def": "寡婦"
  },
  "fragility": {
    "pos": "n.",
    "en_def": "the quality of being weak and easily broken",
    "cn_def": "脆弱"
  },
  "pandemic": {
    "pos": "n.",
    "en_def": "a disease that spreads over many countries",
    "cn_def": "全球大流行病"
  },
  "centenarian": {
    "pos": "n.",
    "en_def": "a person who is 100 years old or more",
    "cn_def": "百歲人瑞"
  },
  "syringe": {
    "pos": "n.",
    "en_def": "a tube with a needle used to give injections",
    "cn_def": "注射器;針筒"
  },
  "specialist": {
    "pos": "n.",
    "en_def": "a doctor who knows a lot about one area of medicine",
    "cn_def": "專科醫師"
  },
  "prevention": {
    "pos": "n.",
    "en_def": "stopping something bad from happening",
    "cn_def": "預防"
  },
  "apprehension": {
    "pos": "n.",
    "en_def": "worry about something that may happen",
    "cn_def": "憂慮;擔心"
  },
  "operation": {
    "pos": "n.",
    "en_def": "cutting the body open to repair or remove something",
    "cn_def": "手術"
  },
  "infection": {
    "pos": "n.",
    "en_def": "a disease caused by germs entering the body",
    "cn_def": "感染"
  },
  "injection": {
    "pos": "n.",
    "en_def": "putting medicine into the body with a needle",
    "cn_def": "注射;打針"
  },
  "chickenpox": {
    "pos": "n.",
    "en_def": "a common children's disease that causes itchy red spots",
    "cn_def": "水痘"
  },
  "frailty": {
    "pos": "n.",
    "en_def": "the state of being physically weak, often due to age",
    "cn_def": "衰弱"
  },
  "quality": {
    "pos": "n.",
    "en_def": "how good something is",
    "cn_def": "品質"
  },
  "sunscreen": {
    "pos": "n.",
    "en_def": "a cream that protects skin from the sun",
    "cn_def": "防曬乳"
  },
  "arthritis": {
    "pos": "n.",
    "en_def": "a disease that makes joints painful and stiff",
    "cn_def": "關節炎"
  },
  "epidemiology": {
    "pos": "n.",
    "en_def": "the study of how diseases spread in populations",
    "cn_def": "流行病學"
  },
  "discomfort": {
    "pos": "n.",
    "en_def": "a feeling of mild pain or being uncomfortable",
    "cn_def": "不適"
  },
  "recipient": {
    "pos": "n.",
    "en_def": "a person who receives something",
    "cn_def": "接受者;受贈者"
  },
  "pharmacy": {
    "pos": "n.",
    "en_def": "a shop where medicines are sold",
    "cn_def": "藥局"
  },
  "germ": {
    "pos": "n.",
    "en_def": "a very small living thing that can cause disease",
    "cn_def": "細菌;病菌"
  },
  "scar": {
    "pos": "n.",
    "en_def": "a mark left on the skin after a wound heals",
    "cn_def": "疤痕"
  },
  "reimburse": {
    "pos": "v.",
    "en_def": "to pay back money someone has spent",
    "cn_def": "償還;給付"
  },
  "vaccinate": {
    "pos": "v.",
    "en_def": "to give someone a vaccine",
    "cn_def": "為……接種疫苗"
  },
  "endanger": {
    "pos": "v.",
    "en_def": "to put someone in danger",
    "cn_def": "危及"
  },
  "heal": {
    "pos": "v.",
    "en_def": "to become healthy again after an injury",
    "cn_def": "癒合;痊癒"
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help",
    "cn_def": "協助"
  },
  "subsidise": {
    "pos": "v.",
    "en_def": "to pay part of the cost of something",
    "cn_def": "補助;補貼"
  },
  "infect": {
    "pos": "v.",
    "en_def": "to give someone a disease",
    "cn_def": "傳染;使感染"
  },
  "overstretch": {
    "pos": "v.",
    "en_def": "to make a system try to do more than it can",
    "cn_def": "使不堪負荷"
  },
  "afflict": {
    "pos": "v.",
    "en_def": "to cause pain or suffering to someone",
    "cn_def": "折磨;使受苦"
  },
  "prolong": {
    "pos": "v.",
    "en_def": "to make something last longer",
    "cn_def": "延長"
  }
};

const EXTRA_GLOSSES = {};
