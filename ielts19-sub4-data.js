// Topic 19 Subunit 4 Quiz Data: Ageing & Elderly Care 老化與長者照護
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S04 - Ageing & Elderly Care 老化與長者照護",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ageing population",
    "pos": "n.phr.",
    "cn_def": "人口老化",
    "en_def": "a population with a growing share of old people",
    "sentence": "Taiwan has a rapidly {{BLANK}}, so the government needs more care workers and nursing homes.",
    "cn": "台灣正面臨快速的人口老化,所以政府需要更多照顧服務員和護理之家。"
  },
  {
    "word": "super-aged society",
    "pos": "n.phr.",
    "cn_def": "超高齡社會",
    "en_def": "a society where over 20% of people are 65 or older",
    "sentence": "Taiwan became a {{BLANK}} in 2025, which means more than one in five people are over sixty-five.",
    "cn": "台灣在2025年成為超高齡社會,這表示每五個人當中就有超過一人年滿六十五歲。"
  },
  {
    "word": "senior citizen",
    "pos": "n.phr.",
    "cn_def": "年長者;老年人",
    "en_def": "an older person, usually over 65",
    "sentence": "{{BLANK}} can ride the bus at a discount in Taipei, so my grandparents often travel around the city.",
    "cn": "台北的年長者搭公車可享優惠,所以我的祖父母常常在城市裡四處走走。"
  },
  {
    "word": "pensioner",
    "pos": "n.",
    "cn_def": "領退休金的人",
    "en_def": "a person who receives a pension after retiring",
    "sentence": "Many {{BLANK}} in Taiwan worry about rising prices, because their monthly income does not increase much.",
    "cn": "台灣許多領退休金的人擔心物價上漲,因為他們每月的收入並沒有增加多少。"
  },
  {
    "word": "retiree",
    "pos": "n.",
    "cn_def": "退休人士",
    "en_def": "a person who has stopped working because of age",
    "sentence": "Many {{BLANK}} volunteer at the local library, and they enjoy reading stories to young children.",
    "cn": "許多退休人士在當地圖書館當志工,他們喜歡為小朋友讀故事。"
  },
  {
    "word": "centenarian",
    "pos": "n.",
    "cn_def": "百歲人瑞",
    "en_def": "a person who is 100 years old or more",
    "sentence": "The number of {{BLANK}} in Taiwan has grown quickly, so scientists are studying their daily habits.",
    "cn": "台灣百歲人瑞的人數快速增加,所以科學家正在研究他們的日常習慣。"
  },
  {
    "word": "old age",
    "pos": "n.phr.",
    "cn_def": "老年;晚年",
    "en_def": "the later part of life",
    "sentence": "My grandfather is still very active in his {{BLANK}}, and he goes swimming three times a week.",
    "cn": "我爺爺在晚年仍然非常活躍,他每週去游泳三次。"
  },
  {
    "word": "wrinkle",
    "pos": "n.",
    "cn_def": "皺紋",
    "en_def": "a line that forms on the skin as you get older",
    "sentence": "My grandmother laughs a lot, so she has many {{BLANK}} around her eyes, but she says each one is a happy memory.",
    "cn": "我奶奶很愛笑,所以眼睛周圍有很多皺紋,但她說每一條都是快樂的回憶。"
  },
  {
    "word": "grey hair",
    "pos": "n.phr.",
    "cn_def": "白髮",
    "en_def": "hair that has lost its colour with age",
    "sentence": "My father found his first {{BLANK}} at forty, and he joked that his teenage children were the reason.",
    "cn": "我爸爸四十歲時發現了第一根白髮,他開玩笑說原因是家裡那幾個青少年孩子。"
  },
  {
    "word": "hearing aid",
    "pos": "n.phr.",
    "cn_def": "助聽器",
    "en_def": "a small device that helps people hear better",
    "sentence": "My grandfather wears a {{BLANK}} now, so he can join our conversations at dinner again.",
    "cn": "我爺爺現在戴著助聽器,所以他又能在晚餐時加入我們的談話了。"
  },
  {
    "word": "walking stick",
    "pos": "n.phr.",
    "cn_def": "手杖;拐杖",
    "en_def": "a stick that helps a person walk",
    "sentence": "My grandmother uses a {{BLANK}} on the hiking trail, because the path is steep and sometimes slippery.",
    "cn": "我奶奶在登山步道上會用手杖,因為那條路很陡,有時又很滑。"
  },
  {
    "word": "reading glasses",
    "pos": "n.phr.",
    "cn_def": "老花眼鏡",
    "en_def": "glasses that help older people see small print",
    "sentence": "My mother needs {{BLANK}} to read the menu, but she keeps forgetting them at home.",
    "cn": "我媽媽需要老花眼鏡才能看菜單,但她老是把眼鏡忘在家裡。"
  },
  {
    "word": "cataract",
    "pos": "n.",
    "cn_def": "白內障",
    "en_def": "a cloudy area in the eye that makes it hard to see",
    "sentence": "My grandfather had {{BLANK}} surgery last year, and now he can see colours clearly again.",
    "cn": "我爺爺去年做了白內障手術,現在他又能清楚看見顏色了。"
  },
  {
    "word": "osteoporosis",
    "pos": "n.",
    "cn_def": "骨質疏鬆症",
    "en_def": "a disease that makes bones weak and easy to break",
    "sentence": "Women over fifty have a higher risk of {{BLANK}}, so doctors advise them to get enough calcium and exercise.",
    "cn": "五十歲以上的女性罹患骨質疏鬆症的風險較高,所以醫生建議她們攝取足夠的鈣並運動。"
  },
  {
    "word": "arthritis",
    "pos": "n.",
    "cn_def": "關節炎",
    "en_def": "a disease that makes joints painful and stiff",
    "sentence": "My grandmother has {{BLANK}} in her fingers, so she finds it hard to open jars and button her clothes.",
    "cn": "我奶奶的手指有關節炎,所以她很難打開罐子和扣衣服的扣子。"
  },
  {
    "word": "hip fracture",
    "pos": "n.phr.",
    "cn_def": "髖部骨折",
    "en_def": "a break in the bone at the top of the leg",
    "sentence": "Falls at home often cause a {{BLANK}} in older people, so families should remove loose rugs and add handrails.",
    "cn": "在家跌倒常導致長者髖部骨折,所以家人應該移除鬆動的地毯並加裝扶手。"
  },
  {
    "word": "frailty",
    "pos": "n.",
    "cn_def": "衰弱",
    "en_def": "the state of being physically weak, often due to age",
    "sentence": "Regular exercise can slow down {{BLANK}} in old age, so the community centre offers free classes for seniors.",
    "cn": "規律運動可以減緩老年的衰弱,所以社區中心為長者開設免費課程。"
  },
  {
    "word": "bedridden",
    "pos": "adj.",
    "cn_def": "臥床不起的",
    "en_def": "unable to get out of bed because of illness or age",
    "sentence": "After the stroke, my great-aunt was {{BLANK}} for months, so a care worker came to help her every day.",
    "cn": "中風後,我姑婆臥床好幾個月,所以每天都有照顧服務員來幫忙她。"
  },
  {
    "word": "memory loss",
    "pos": "n.phr.",
    "cn_def": "失憶;記憶力減退",
    "en_def": "the inability to remember things",
    "sentence": "Some {{BLANK}} is normal with age, but if it affects daily life, you should see a doctor.",
    "cn": "隨著年齡增長出現一些記憶力減退是正常的,但如果影響到日常生活,你就應該去看醫生。"
  },
  {
    "word": "care worker",
    "pos": "n.phr.",
    "cn_def": "照顧服務員",
    "en_def": "a person whose job is to look after old or sick people",
    "sentence": "A {{BLANK}} visits my grandmother three times a week, and she helps her with bathing and cooking.",
    "cn": "一位照顧服務員每週來探視我奶奶三次,幫她洗澡和做飯。"
  },
  {
    "word": "home care",
    "pos": "n.phr.",
    "cn_def": "居家照護",
    "en_def": "care given to people in their own homes",
    "sentence": "Most older people prefer {{BLANK}} to nursing homes, because they want to stay in a familiar place.",
    "cn": "比起護理之家,大多數長者更喜歡居家照護,因為他們想待在熟悉的地方。"
  },
  {
    "word": "day care centre",
    "pos": "n.phr.",
    "cn_def": "日間照顧中心",
    "en_def": "a place that looks after older people during the day",
    "sentence": "My grandfather goes to a {{BLANK}} while my parents are at work, and he enjoys the singing classes there.",
    "cn": "我爸媽上班時,爺爺會去日間照顧中心,他很喜歡那裡的歌唱課。"
  },
  {
    "word": "long-term care",
    "pos": "n.phr.",
    "cn_def": "長期照顧;長照",
    "en_def": "support for people who cannot fully look after themselves for a long time",
    "sentence": "The government expanded its {{BLANK}} plan, so more families can get help with elderly relatives.",
    "cn": "政府擴大了長期照顧計畫,所以更多家庭能在照顧年長親人方面得到協助。"
  },
  {
    "word": "nursing home",
    "pos": "n.phr.",
    "cn_def": "護理之家;養護機構",
    "en_def": "a place where old or ill people live and receive care",
    "sentence": "We visit my great-grandmother at the {{BLANK}} every Sunday, and we often bring her favourite cakes.",
    "cn": "我們每週日去護理之家探望曾祖母,常常帶她最喜歡的蛋糕過去。"
  },
  {
    "word": "retirement home",
    "pos": "n.phr.",
    "cn_def": "養老院;退休住宅",
    "en_def": "a place where retired people live together",
    "sentence": "My grandparents moved into a {{BLANK}} by the sea, and they have made many new friends there.",
    "cn": "我的祖父母搬進了海邊的一間養老院,他們在那裡交了許多新朋友。"
  },
  {
    "word": "assisted living",
    "pos": "n.phr.",
    "cn_def": "協助型生活住宅",
    "en_def": "housing where older people get some help with daily tasks",
    "sentence": "{{BLANK}} lets older people keep their own apartment, but staff are there to help when they need it.",
    "cn": "協助型生活住宅讓長者保有自己的公寓,而當他們需要時,工作人員就在身邊提供協助。"
  },
  {
    "word": "filial piety",
    "pos": "n.phr.",
    "cn_def": "孝道",
    "en_def": "respect and care for one's parents and older relatives",
    "sentence": "{{BLANK}} is an important value in Taiwan, so many adults feel they should take care of their parents at home.",
    "cn": "孝道在台灣是很重要的價值觀,所以許多成年人覺得應該在家照顧父母。"
  },
  {
    "word": "intergenerational",
    "pos": "adj.",
    "cn_def": "跨世代的",
    "en_def": "involving people of different generations",
    "sentence": "The school started an {{BLANK}} project, and students now teach seniors how to use smartphones.",
    "cn": "學校展開了一項跨世代計畫,學生現在教長者如何使用智慧型手機。"
  },
  {
    "word": "empty nester",
    "pos": "n.",
    "cn_def": "空巢父母",
    "en_def": "a parent whose children have grown up and left home",
    "sentence": "After my sister went to university, my parents became {{BLANK}}, so they started travelling more.",
    "cn": "我姊姊上大學後,我爸媽成了空巢父母,所以他們開始更常去旅行。"
  },
  {
    "word": "widow",
    "pos": "n.",
    "cn_def": "寡婦",
    "en_def": "a woman whose husband has died",
    "sentence": "Our neighbour became a {{BLANK}} last year, so we often invite her for dinner so she does not feel alone.",
    "cn": "我們的鄰居去年成了寡婦,所以我們常邀她來吃晚餐,讓她不會感到孤單。"
  },
  {
    "word": "retirement age",
    "pos": "n.phr.",
    "cn_def": "退休年齡",
    "en_def": "the age at which people usually stop working",
    "sentence": "Some countries have raised the {{BLANK}} to sixty-seven, because people are living and working longer.",
    "cn": "有些國家已把退休年齡提高到六十七歲,因為人們活得更久、工作也更久。"
  },
  {
    "word": "dependency ratio",
    "pos": "n.phr.",
    "cn_def": "扶養比",
    "en_def": "the number of non-working people compared with workers",
    "sentence": "As the {{BLANK}} rises, each worker must support more elderly people through taxes, so young people worry about the future.",
    "cn": "隨著扶養比上升,每位勞工必須透過稅收撫養更多長者,所以年輕人擔心未來。"
  },
  {
    "word": "silver economy",
    "pos": "n.phr.",
    "cn_def": "銀髮經濟",
    "en_def": "business and services aimed at older people",
    "sentence": "The {{BLANK}} is growing fast, so many companies now design products for older customers.",
    "cn": "銀髮經濟正快速成長,所以許多公司現在為年長顧客設計產品。"
  },
  {
    "word": "age-friendly",
    "pos": "adj.",
    "cn_def": "高齡友善的",
    "en_def": "designed to be easy for older people to use",
    "sentence": "Our city wants to become more {{BLANK}}, so it is adding benches and lifts to MRT stations.",
    "cn": "我們的城市想變得更加高齡友善,所以正在捷運站增設長椅和電梯。"
  },
  {
    "word": "palliative care",
    "pos": "n.phr.",
    "cn_def": "安寧緩和照護",
    "en_def": "care that reduces pain for people who cannot be cured",
    "sentence": "When the cancer could not be cured, my uncle received {{BLANK}}, so he could spend his last weeks without pain.",
    "cn": "當癌症無法治癒時,我叔叔接受了安寧緩和照護,讓他能沒有痛苦地度過最後幾週。"
  },
  {
    "word": "hospice",
    "pos": "n.",
    "cn_def": "安寧病房;安寧療護機構",
    "en_def": "a place that cares for people who are dying",
    "sentence": "The nurses at the {{BLANK}} were very kind, and they helped our family say goodbye peacefully.",
    "cn": "安寧病房的護理師非常親切,她們幫助我們全家平靜地道別。"
  },
  {
    "word": "end-of-life care",
    "pos": "n.phr.",
    "cn_def": "臨終照護",
    "en_def": "medical and emotional care for people near death",
    "sentence": "Good {{BLANK}} respects the wishes of the patient, so families should talk about it early.",
    "cn": "良好的臨終照護會尊重病人的意願,所以家人應該及早討論。"
  },
  {
    "word": "anti-ageing",
    "pos": "adj.",
    "cn_def": "抗老的",
    "en_def": "intended to stop or slow the signs of getting older",
    "sentence": "Many {{BLANK}} creams are very expensive, but doctors say that cheap sunscreen actually protects your skin much better.",
    "cn": "許多抗老乳霜非常昂貴,但醫生說便宜的防曬乳其實更能保護你的皮膚。"
  }
];

const MCQS = [
  {
    "q": "Taiwan has a rapidly _____, so the government needs more care workers and nursing homes.",
    "options": [
      "health campaign",
      "hearing loss",
      "ageing population",
      "a bitter pill to swallow"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Taiwan became a _____ in 2025, which means more than one in five people are over sixty-five.",
    "options": [
      "health app",
      "healthcare worker",
      "rapid test",
      "super-aged society"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "_____ can ride the bus at a discount in Taipei, so my grandparents often travel around the city.",
    "options": [
      "senior citizen",
      "physical activity",
      "face mask",
      "medical staff"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Many _____ in Taiwan worry about rising prices, because their monthly income does not increase much.",
    "options": [
      "influenza",
      "pensioner",
      "lockdown",
      "chickenpox"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Many _____ volunteer at the local library, and they enjoy reading stories to young children.",
    "options": [
      "dependency",
      "triage",
      "inpatient",
      "retiree"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The number of _____ in Taiwan has grown quickly, so scientists are studying their daily habits.",
    "options": [
      "centenarian",
      "morbidity",
      "behaviour",
      "precondition"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "My grandfather is still very active in his _____, and he goes swimming three times a week.",
    "options": [
      "hearing loss",
      "old age",
      "birth rate",
      "a bitter pill to swallow"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "My grandmother laughs a lot, so she has many _____ around her eyes, but she says each one is a happy memory.",
    "options": [
      "belief",
      "infection",
      "wrinkle",
      "chemotherapy"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "My father found his first _____ at forty, and he joked that his teenage children were the reason.",
    "options": [
      "universal health care",
      "clean water",
      "operating theatre",
      "grey hair"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "My grandfather wears a _____ now, so he can join our conversations at dinner again.",
    "options": [
      "runny nose",
      "intensive care unit",
      "hearing aid",
      "waiting list"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "My grandmother uses a _____ on the hiking trail, because the path is steep and sometimes slippery.",
    "options": [
      "walking stick",
      "a clean bill of health",
      "herbal medicine",
      "portion size"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "My mother needs _____ to read the menu, but she keeps forgetting them at home.",
    "options": [
      "general practitioner",
      "reading glasses",
      "common cold",
      "a new lease of life"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "My grandfather had _____ surgery last year, and now he can see colours clearly again.",
    "options": [
      "cataract",
      "stretcher",
      "inefficiency",
      "appointment"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Women over fifty have a higher risk of _____, so doctors advise them to get enough calcium and exercise.",
    "options": [
      "epidemiologist",
      "priority",
      "disinfectant",
      "osteoporosis"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "My grandmother has _____ in her fingers, so she finds it hard to open jars and button her clothes.",
    "options": [
      "insurer",
      "eyesight",
      "arthritis",
      "booster"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Falls at home often cause a _____ in older people, so families should remove loose rugs and add handrails.",
    "options": [
      "cough syrup",
      "hip fracture",
      "birth rate",
      "hand sanitiser"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Regular exercise can slow down _____ in old age, so the community centre offers free classes for seniors.",
    "options": [
      "wound",
      "consultation",
      "frailty",
      "dentist"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "After the stroke, my great-aunt was _____ for months, so a care worker came to help her every day.",
    "options": [
      "obese",
      "deadly",
      "compassionate",
      "bedridden"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Some _____ is normal with age, but if it affects daily life, you should see a doctor.",
    "options": [
      "tai chi",
      "memory loss",
      "sleep deprivation",
      "sugar tax"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "A _____ visits my grandmother three times a week, and she helps her with bathing and cooking.",
    "options": [
      "care worker",
      "portion size",
      "eye drops",
      "medical staff"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Most older people prefer _____ to nursing homes, because they want to stay in a familiar place.",
    "options": [
      "operating theatre",
      "dengue fever",
      "organ donation",
      "home care"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "My grandfather goes to a _____ while my parents are at work, and he enjoys the singing classes there.",
    "options": [
      "emergency room",
      "mental health",
      "day care centre",
      "health education"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The government expanded its _____ plan, so more families can get help with elderly relatives.",
    "options": [
      "long-term care",
      "health inequality",
      "health warning",
      "dengue fever"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "We visit my great-grandmother at the _____ every Sunday, and we often bring her favourite cakes.",
    "options": [
      "eye drops",
      "nursing home",
      "sleep deprivation",
      "general practitioner"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "My grandparents moved into a _____ by the sea, and they have made many new friends there.",
    "options": [
      "dengue fever",
      "death rate",
      "early detection",
      "retirement home"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "_____ lets older people keep their own apartment, but staff are there to help when they need it.",
    "options": [
      "universal health care",
      "assisted living",
      "medical staff",
      "herd immunity"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "_____ is an important value in Taiwan, so many adults feel they should take care of their parents at home.",
    "options": [
      "filial piety",
      "organ donation",
      "vaccine hesitancy",
      "death rate"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The school started an _____ project, and students now teach seniors how to use smartphones.",
    "options": [
      "asymptomatic",
      "communicable",
      "intergenerational",
      "sanitary"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "After my sister went to university, my parents became _____, so they started travelling more.",
    "options": [
      "empty nester",
      "universal health care",
      "health insurance",
      "runny nose"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Our neighbour became a _____ last year, so we often invite her for dinner so she does not feel alone.",
    "options": [
      "agreement",
      "sunscreen",
      "disruption",
      "widow"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Some countries have raised the _____ to sixty-seven, because people are living and working longer.",
    "options": [
      "early detection",
      "retirement age",
      "a clean bill of health",
      "universal health care"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "As the _____ rises, each worker must support more elderly people through taxes, so young people worry about the future.",
    "options": [
      "heart attack",
      "rapid test",
      "dependency ratio",
      "early detection"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The _____ is growing fast, so many companies now design products for older customers.",
    "options": [
      "runny nose",
      "silver economy",
      "hearing loss",
      "health inequality"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Our city wants to become more _____, so it is adding benches and lifts to MRT stations.",
    "options": [
      "underfunded",
      "hygienic",
      "precautionary",
      "age-friendly"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "When the cancer could not be cured, my uncle received _____, so he could spend his last weeks without pain.",
    "options": [
      "palliative care",
      "emergency room",
      "hand sanitiser",
      "medical staff"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "The nurses at the _____ were very kind, and they helped our family say goodbye peacefully.",
    "options": [
      "adequacy",
      "suspension",
      "hospice",
      "jab"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "Good _____ respects the wishes of the patient, so families should talk about it early.",
    "options": [
      "healthy eating",
      "end-of-life care",
      "organ donation",
      "border control"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "Many _____ creams are very expensive, but doctors say that cheap sunscreen actually protects your skin much better.",
    "options": [
      "worldwide",
      "preventive",
      "anti-ageing",
      "steady"
    ],
    "answer": 2,
    "vocabIndex": 37
  }
];

const LOOKUP = {
  "ageing population": {
    "pos": "n.phr.",
    "en_def": "a population with a growing share of old people",
    "cn_def": "人口老化"
  },
  "super-aged society": {
    "pos": "n.phr.",
    "en_def": "a society where over 20% of people are 65 or older",
    "cn_def": "超高齡社會"
  },
  "senior citizen": {
    "pos": "n.phr.",
    "en_def": "an older person, usually over 65",
    "cn_def": "年長者;老年人"
  },
  "pensioner": {
    "pos": "n.",
    "en_def": "a person who receives a pension after retiring",
    "cn_def": "領退休金的人"
  },
  "retiree": {
    "pos": "n.",
    "en_def": "a person who has stopped working because of age",
    "cn_def": "退休人士"
  },
  "centenarian": {
    "pos": "n.",
    "en_def": "a person who is 100 years old or more",
    "cn_def": "百歲人瑞"
  },
  "old age": {
    "pos": "n.phr.",
    "en_def": "the later part of life",
    "cn_def": "老年;晚年"
  },
  "wrinkle": {
    "pos": "n.",
    "en_def": "a line that forms on the skin as you get older",
    "cn_def": "皺紋"
  },
  "grey hair": {
    "pos": "n.phr.",
    "en_def": "hair that has lost its colour with age",
    "cn_def": "白髮"
  },
  "hearing aid": {
    "pos": "n.phr.",
    "en_def": "a small device that helps people hear better",
    "cn_def": "助聽器"
  },
  "walking stick": {
    "pos": "n.phr.",
    "en_def": "a stick that helps a person walk",
    "cn_def": "手杖;拐杖"
  },
  "reading glasses": {
    "pos": "n.phr.",
    "en_def": "glasses that help older people see small print",
    "cn_def": "老花眼鏡"
  },
  "cataract": {
    "pos": "n.",
    "en_def": "a cloudy area in the eye that makes it hard to see",
    "cn_def": "白內障"
  },
  "osteoporosis": {
    "pos": "n.",
    "en_def": "a disease that makes bones weak and easy to break",
    "cn_def": "骨質疏鬆症"
  },
  "arthritis": {
    "pos": "n.",
    "en_def": "a disease that makes joints painful and stiff",
    "cn_def": "關節炎"
  },
  "hip fracture": {
    "pos": "n.phr.",
    "en_def": "a break in the bone at the top of the leg",
    "cn_def": "髖部骨折"
  },
  "frailty": {
    "pos": "n.",
    "en_def": "the state of being physically weak, often due to age",
    "cn_def": "衰弱"
  },
  "bedridden": {
    "pos": "adj.",
    "en_def": "unable to get out of bed because of illness or age",
    "cn_def": "臥床不起的"
  },
  "memory loss": {
    "pos": "n.phr.",
    "en_def": "the inability to remember things",
    "cn_def": "失憶;記憶力減退"
  },
  "care worker": {
    "pos": "n.phr.",
    "en_def": "a person whose job is to look after old or sick people",
    "cn_def": "照顧服務員"
  },
  "home care": {
    "pos": "n.phr.",
    "en_def": "care given to people in their own homes",
    "cn_def": "居家照護"
  },
  "day care centre": {
    "pos": "n.phr.",
    "en_def": "a place that looks after older people during the day",
    "cn_def": "日間照顧中心"
  },
  "long-term care": {
    "pos": "n.phr.",
    "en_def": "support for people who cannot fully look after themselves for a long time",
    "cn_def": "長期照顧;長照"
  },
  "nursing home": {
    "pos": "n.phr.",
    "en_def": "a place where old or ill people live and receive care",
    "cn_def": "護理之家;養護機構"
  },
  "retirement home": {
    "pos": "n.phr.",
    "en_def": "a place where retired people live together",
    "cn_def": "養老院;退休住宅"
  },
  "assisted living": {
    "pos": "n.phr.",
    "en_def": "housing where older people get some help with daily tasks",
    "cn_def": "協助型生活住宅"
  },
  "filial piety": {
    "pos": "n.phr.",
    "en_def": "respect and care for one's parents and older relatives",
    "cn_def": "孝道"
  },
  "intergenerational": {
    "pos": "adj.",
    "en_def": "involving people of different generations",
    "cn_def": "跨世代的"
  },
  "empty nester": {
    "pos": "n.",
    "en_def": "a parent whose children have grown up and left home",
    "cn_def": "空巢父母"
  },
  "widow": {
    "pos": "n.",
    "en_def": "a woman whose husband has died",
    "cn_def": "寡婦"
  },
  "retirement age": {
    "pos": "n.phr.",
    "en_def": "the age at which people usually stop working",
    "cn_def": "退休年齡"
  },
  "dependency ratio": {
    "pos": "n.phr.",
    "en_def": "the number of non-working people compared with workers",
    "cn_def": "扶養比"
  },
  "silver economy": {
    "pos": "n.phr.",
    "en_def": "business and services aimed at older people",
    "cn_def": "銀髮經濟"
  },
  "age-friendly": {
    "pos": "adj.",
    "en_def": "designed to be easy for older people to use",
    "cn_def": "高齡友善的"
  },
  "palliative care": {
    "pos": "n.phr.",
    "en_def": "care that reduces pain for people who cannot be cured",
    "cn_def": "安寧緩和照護"
  },
  "hospice": {
    "pos": "n.",
    "en_def": "a place that cares for people who are dying",
    "cn_def": "安寧病房;安寧療護機構"
  },
  "end-of-life care": {
    "pos": "n.phr.",
    "en_def": "medical and emotional care for people near death",
    "cn_def": "臨終照護"
  },
  "anti-ageing": {
    "pos": "adj.",
    "en_def": "intended to stop or slow the signs of getting older",
    "cn_def": "抗老的"
  },
  "health campaign": {
    "pos": "n.phr.",
    "en_def": "an organised effort to improve people's health",
    "cn_def": "健康宣導活動"
  },
  "hearing loss": {
    "pos": "n.phr.",
    "en_def": "a reduced ability to hear",
    "cn_def": "聽力損失"
  },
  "a bitter pill to swallow": {
    "pos": "n.phr.",
    "en_def": "an unpleasant fact that you must accept",
    "cn_def": "難以接受的事實"
  },
  "health app": {
    "pos": "n.phr.",
    "en_def": "a phone program that tracks your health",
    "cn_def": "健康應用程式"
  },
  "healthcare worker": {
    "pos": "n.phr.",
    "en_def": "a person who works in medical care, such as a nurse",
    "cn_def": "醫事人員;醫療工作者"
  },
  "rapid test": {
    "pos": "n.phr.",
    "en_def": "a quick test that gives results in minutes",
    "cn_def": "快篩"
  },
  "physical activity": {
    "pos": "n.phr.",
    "en_def": "movement of the body, such as walking or sport",
    "cn_def": "身體活動"
  },
  "face mask": {
    "pos": "n.phr.",
    "en_def": "a covering for the nose and mouth",
    "cn_def": "口罩"
  },
  "medical staff": {
    "pos": "n.phr.",
    "en_def": "the doctors and nurses who work in a hospital",
    "cn_def": "醫護人員"
  },
  "influenza": {
    "pos": "n.",
    "en_def": "a common infectious illness with fever and aches; the flu",
    "cn_def": "流行性感冒"
  },
  "lockdown": {
    "pos": "n.",
    "en_def": "an official order for people to stay at home",
    "cn_def": "封城"
  },
  "chickenpox": {
    "pos": "n.",
    "en_def": "a common children's disease that causes itchy red spots",
    "cn_def": "水痘"
  },
  "dependency": {
    "pos": "n.",
    "en_def": "the state of needing something or someone too much",
    "cn_def": "依賴"
  },
  "triage": {
    "pos": "n.",
    "en_def": "deciding which patients need treatment first",
    "cn_def": "檢傷分類"
  },
  "inpatient": {
    "pos": "n.",
    "en_def": "a patient who stays in a hospital for treatment",
    "cn_def": "住院病人"
  },
  "morbidity": {
    "pos": "n.",
    "en_def": "the rate of illness in a population",
    "cn_def": "罹病率"
  },
  "behaviour": {
    "pos": "n.",
    "en_def": "the way a person acts",
    "cn_def": "行為"
  },
  "precondition": {
    "pos": "n.",
    "en_def": "something that must happen before something else",
    "cn_def": "先決條件"
  },
  "birth rate": {
    "pos": "n.phr.",
    "en_def": "the number of babies born in a period of time",
    "cn_def": "出生率"
  },
  "belief": {
    "pos": "n.",
    "en_def": "a feeling that something is true",
    "cn_def": "信念;看法"
  },
  "infection": {
    "pos": "n.",
    "en_def": "a disease caused by germs entering the body",
    "cn_def": "感染"
  },
  "chemotherapy": {
    "pos": "n.",
    "en_def": "treatment of cancer with strong drugs",
    "cn_def": "化學治療;化療"
  },
  "universal health care": {
    "pos": "n.phr.",
    "en_def": "a system that gives medical care to everyone",
    "cn_def": "全民健康照護"
  },
  "clean water": {
    "pos": "n.phr.",
    "en_def": "water that is safe to drink",
    "cn_def": "乾淨的水"
  },
  "operating theatre": {
    "pos": "n.phr.",
    "en_def": "a room in a hospital where operations are done",
    "cn_def": "手術室"
  },
  "runny nose": {
    "pos": "n.phr.",
    "en_def": "a nose with liquid coming out because of a cold",
    "cn_def": "流鼻水"
  },
  "intensive care unit": {
    "pos": "n.phr.",
    "en_def": "a hospital area for very seriously ill patients",
    "cn_def": "加護病房"
  },
  "waiting list": {
    "pos": "n.phr.",
    "en_def": "a list of people who must wait for a service",
    "cn_def": "候補名單;等候名單"
  },
  "a clean bill of health": {
    "pos": "n.phr.",
    "en_def": "a report saying that someone is healthy",
    "cn_def": "健康證明;一切健康的診斷"
  },
  "herbal medicine": {
    "pos": "n.phr.",
    "en_def": "medicine made from plants",
    "cn_def": "草藥"
  },
  "portion size": {
    "pos": "n.phr.",
    "en_def": "the amount of food served to one person",
    "cn_def": "份量"
  },
  "general practitioner": {
    "pos": "n.phr.",
    "en_def": "a family doctor who treats common illnesses",
    "cn_def": "家庭醫師;一般科醫師"
  },
  "common cold": {
    "pos": "n.phr.",
    "en_def": "a mild illness with a runny nose and sore throat",
    "cn_def": "普通感冒"
  },
  "a new lease of life": {
    "pos": "n.phr.",
    "en_def": "a chance to be active and happy again",
    "cn_def": "重獲新生;煥然一新"
  },
  "stretcher": {
    "pos": "n.",
    "en_def": "a long frame used to carry a sick or injured person",
    "cn_def": "擔架"
  },
  "inefficiency": {
    "pos": "n.",
    "en_def": "the failure to use time or money well",
    "cn_def": "效率不彰"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "an arranged time to meet a doctor or other person",
    "cn_def": "預約;掛號"
  },
  "epidemiologist": {
    "pos": "n.",
    "en_def": "a scientist who studies how diseases spread",
    "cn_def": "流行病學家"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something that is more important than other things",
    "cn_def": "優先事項"
  },
  "disinfectant": {
    "pos": "n.",
    "en_def": "a chemical that kills germs on surfaces",
    "cn_def": "消毒劑"
  },
  "insurer": {
    "pos": "n.",
    "en_def": "a company that provides insurance",
    "cn_def": "保險公司"
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
  "cough syrup": {
    "pos": "n.phr.",
    "en_def": "a sweet liquid medicine for coughs",
    "cn_def": "止咳糖漿"
  },
  "hand sanitiser": {
    "pos": "n.phr.",
    "en_def": "a liquid that kills germs on your hands without water",
    "cn_def": "乾洗手液"
  },
  "wound": {
    "pos": "n.",
    "en_def": "an injury where the skin is cut or broken",
    "cn_def": "傷口"
  },
  "consultation": {
    "pos": "n.",
    "en_def": "a meeting with a doctor to discuss a health problem",
    "cn_def": "看診;諮詢"
  },
  "dentist": {
    "pos": "n.",
    "en_def": "a doctor who looks after teeth",
    "cn_def": "牙醫"
  },
  "obese": {
    "pos": "adj.",
    "en_def": "very overweight in a way that is unhealthy",
    "cn_def": "肥胖的"
  },
  "deadly": {
    "pos": "adj.",
    "en_def": "able to cause death",
    "cn_def": "致命的"
  },
  "compassionate": {
    "pos": "adj.",
    "en_def": "showing kindness and care for people who suffer",
    "cn_def": "有同情心的"
  },
  "tai chi": {
    "pos": "n.",
    "en_def": "a slow Chinese exercise of gentle movements",
    "cn_def": "太極拳"
  },
  "sleep deprivation": {
    "pos": "n.phr.",
    "en_def": "not getting enough sleep",
    "cn_def": "睡眠不足"
  },
  "sugar tax": {
    "pos": "n.phr.",
    "en_def": "a tax on drinks with a lot of sugar",
    "cn_def": "糖稅"
  },
  "eye drops": {
    "pos": "n.phr.",
    "en_def": "liquid medicine that you put into your eyes",
    "cn_def": "眼藥水"
  },
  "dengue fever": {
    "pos": "n.phr.",
    "en_def": "a tropical disease spread by mosquitoes",
    "cn_def": "登革熱"
  },
  "organ donation": {
    "pos": "n.phr.",
    "en_def": "giving a body part to help someone who is ill",
    "cn_def": "器官捐贈"
  },
  "emergency room": {
    "pos": "n.phr.",
    "en_def": "the part of a hospital for people who need help immediately",
    "cn_def": "急診室"
  },
  "mental health": {
    "pos": "n.phr.",
    "en_def": "the health of a person's mind and feelings",
    "cn_def": "心理健康"
  },
  "health education": {
    "pos": "n.phr.",
    "en_def": "teaching people how to stay healthy",
    "cn_def": "健康教育"
  },
  "health inequality": {
    "pos": "n.phr.",
    "en_def": "unfair differences in health between groups of people",
    "cn_def": "健康不平等"
  },
  "health warning": {
    "pos": "n.phr.",
    "en_def": "a notice that tells people about a danger to health",
    "cn_def": "健康警語"
  },
  "death rate": {
    "pos": "n.phr.",
    "en_def": "the number of deaths in a group in a period of time",
    "cn_def": "死亡率"
  },
  "early detection": {
    "pos": "n.phr.",
    "en_def": "finding a disease at an early stage",
    "cn_def": "早期發現"
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
  "asymptomatic": {
    "pos": "adj.",
    "en_def": "having a disease but showing no signs of it",
    "cn_def": "無症狀的"
  },
  "communicable": {
    "pos": "adj.",
    "en_def": "able to be passed from one person to another",
    "cn_def": "傳染性的"
  },
  "sanitary": {
    "pos": "adj.",
    "en_def": "clean and not likely to cause disease",
    "cn_def": "衛生的;衛生設備的"
  },
  "health insurance": {
    "pos": "n.phr.",
    "en_def": "a system that pays for medical care",
    "cn_def": "健康保險"
  },
  "agreement": {
    "pos": "n.",
    "en_def": "a situation in which people share the same opinion",
    "cn_def": "共識;同意"
  },
  "sunscreen": {
    "pos": "n.",
    "en_def": "a cream that protects skin from the sun",
    "cn_def": "防曬乳"
  },
  "disruption": {
    "pos": "n.",
    "en_def": "a problem that stops something from continuing normally",
    "cn_def": "中斷;干擾"
  },
  "heart attack": {
    "pos": "n.phr.",
    "en_def": "a sudden serious problem when blood stops reaching the heart",
    "cn_def": "心臟病發作"
  },
  "underfunded": {
    "pos": "adj.",
    "en_def": "not given enough money",
    "cn_def": "資金不足的"
  },
  "hygienic": {
    "pos": "adj.",
    "en_def": "clean and free of germs",
    "cn_def": "衛生的"
  },
  "precautionary": {
    "pos": "adj.",
    "en_def": "done to avoid possible danger",
    "cn_def": "預防性的;防範的"
  },
  "adequacy": {
    "pos": "n.",
    "en_def": "the state of being good or enough",
    "cn_def": "適足性;充分"
  },
  "suspension": {
    "pos": "n.",
    "en_def": "stopping something for a period of time",
    "cn_def": "暫停;停職"
  },
  "jab": {
    "pos": "n.",
    "en_def": "an injection, especially a vaccine (informal)",
    "cn_def": "打針;疫苗注射"
  },
  "healthy eating": {
    "pos": "n.phr.",
    "en_def": "choosing food that is good for your body",
    "cn_def": "健康飲食"
  },
  "border control": {
    "pos": "n.phr.",
    "en_def": "checks on people entering a country",
    "cn_def": "邊境管制"
  },
  "worldwide": {
    "pos": "adj.",
    "en_def": "happening all over the world",
    "cn_def": "全世界的"
  },
  "preventive": {
    "pos": "adj.",
    "en_def": "intended to stop something bad from happening",
    "cn_def": "預防性的"
  },
  "steady": {
    "pos": "adj.",
    "en_def": "developing gradually and evenly",
    "cn_def": "穩定的;持續的"
  }
};

const EXTRA_GLOSSES = {};
