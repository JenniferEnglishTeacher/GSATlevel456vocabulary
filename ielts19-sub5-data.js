// Topic 19 Subunit 5 Quiz Data: Public Health & Prevention 公共衛生與預防
// From the IELTS topic grid (tools/ielts_emit.py).
const QUIZ_CONFIG = {
  "groupName": "IELTS T19 S05 - Public Health & Prevention 公共衛生與預防",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "public health",
    "pos": "n.phr.",
    "cn_def": "公共衛生",
    "en_def": "the health of the whole population and how it is protected",
    "sentence": "Clean water and vaccines are two of the greatest successes in {{BLANK}}, and they have saved millions of lives.",
    "cn": "乾淨的水和疫苗是公共衛生最偉大的兩項成就,它們拯救了數百萬條生命。"
  },
  {
    "word": "epidemiology",
    "pos": "n.",
    "cn_def": "流行病學",
    "en_def": "the study of how diseases spread in populations",
    "sentence": "My cousin studies {{BLANK}} at university, because she wants to help stop the next pandemic.",
    "cn": "我表姊在大學主修流行病學,因為她想幫忙阻止下一場大流行。"
  },
  {
    "word": "epidemiologist",
    "pos": "n.",
    "cn_def": "流行病學家",
    "en_def": "a scientist who studies how diseases spread",
    "sentence": "The {{BLANK}} explained on TV how the virus was spreading, and she asked people to stay calm.",
    "cn": "那位流行病學家在電視上解釋病毒如何傳播,並呼籲民眾保持冷靜。"
  },
  {
    "word": "contact tracing",
    "pos": "n.phr.",
    "cn_def": "疫調;接觸者追蹤",
    "en_def": "finding people who have been near an infected person",
    "sentence": "Taiwan used fast {{BLANK}} during the pandemic, so health workers could find people at risk quickly.",
    "cn": "台灣在疫情期間採用快速的接觸者追蹤,所以衛生人員能迅速找到高風險的人。"
  },
  {
    "word": "face mask",
    "pos": "n.phr.",
    "cn_def": "口罩",
    "en_def": "a covering for the nose and mouth",
    "sentence": "Many people in Taipei wear a {{BLANK}} when they have a cold, because they do not want to infect others.",
    "cn": "台北許多人感冒時會戴口罩,因為他們不想傳染給別人。"
  },
  {
    "word": "hand sanitiser",
    "pos": "n.phr.",
    "cn_def": "乾洗手液",
    "en_def": "a liquid that kills germs on your hands without water",
    "sentence": "There is a bottle of {{BLANK}} at the door of every classroom, so students clean their hands before they enter.",
    "cn": "每間教室門口都有一瓶乾洗手液,所以學生進教室前會先清潔雙手。"
  },
  {
    "word": "social distancing",
    "pos": "n.phr.",
    "cn_def": "社交距離",
    "en_def": "keeping a safe distance from other people to stop disease",
    "sentence": "During the outbreak, cinemas left empty seats between customers to allow {{BLANK}}, and many people watched films at home instead.",
    "cn": "疫情爆發期間,電影院在觀眾之間留下空位,以保持社交距離,許多人則改在家看電影。"
  },
  {
    "word": "lockdown",
    "pos": "n.",
    "cn_def": "封城",
    "en_def": "an official order for people to stay at home",
    "sentence": "During the {{BLANK}} the streets of the city were almost empty, and people could only go out to buy food.",
    "cn": "封城期間城市街道幾乎空無一人,人們只能出門買食物。"
  },
  {
    "word": "border control",
    "pos": "n.phr.",
    "cn_def": "邊境管制",
    "en_def": "checks on people entering a country",
    "sentence": "Taiwan introduced strict {{BLANK}} early in 2020, so the virus spread slowly at first.",
    "cn": "台灣在2020年初實施了嚴格的邊境管制,所以病毒一開始傳播得很慢。"
  },
  {
    "word": "health authority",
    "pos": "n.phr.",
    "cn_def": "衛生主管機關",
    "en_def": "a government body in charge of health",
    "sentence": "The local {{BLANK}} closed the restaurant for a week, because many customers had food poisoning.",
    "cn": "當地衛生主管機關勒令那家餐廳停業一週,因為許多顧客食物中毒。"
  },
  {
    "word": "health campaign",
    "pos": "n.phr.",
    "cn_def": "健康宣導活動",
    "en_def": "an organised effort to improve people's health",
    "sentence": "The city launched a {{BLANK}} about drinking water instead of bubble tea, and posters appeared in every school.",
    "cn": "市政府推出了一項提倡喝水取代珍珠奶茶的健康宣導活動,每所學校都貼出了海報。"
  },
  {
    "word": "health education",
    "pos": "n.phr.",
    "cn_def": "健康教育",
    "en_def": "teaching people how to stay healthy",
    "sentence": "{{BLANK}} classes teach students about sleep and diet, so they can make better choices.",
    "cn": "健康教育課教導學生睡眠和飲食的知識,讓他們能做出更好的選擇。"
  },
  {
    "word": "smoking ban",
    "pos": "n.phr.",
    "cn_def": "禁菸令",
    "en_def": "a law that stops people smoking in certain places",
    "sentence": "After the {{BLANK}} in restaurants, the air inside became much cleaner, and more families came to eat.",
    "cn": "餐廳實施禁菸令後,室內空氣變得乾淨多了,也有更多家庭前來用餐。"
  },
  {
    "word": "second-hand smoke",
    "pos": "n.phr.",
    "cn_def": "二手菸",
    "en_def": "smoke breathed in by people near a smoker",
    "sentence": "{{BLANK}} is dangerous for children, so my uncle now smokes only outside the house.",
    "cn": "二手菸對孩子很危險,所以我舅舅現在只在屋外抽菸。"
  },
  {
    "word": "sugar tax",
    "pos": "n.phr.",
    "cn_def": "糖稅",
    "en_def": "a tax on drinks with a lot of sugar",
    "sentence": "Several countries introduced a {{BLANK}} on soft drinks, and companies reduced the sugar to avoid paying it.",
    "cn": "好幾個國家對汽水課徵糖稅,飲料公司便減少糖分以避免繳稅。"
  },
  {
    "word": "tobacco",
    "pos": "n.",
    "cn_def": "菸草",
    "en_def": "dried leaves that are smoked in cigarettes",
    "sentence": "The government raised the tax on {{BLANK}}, so the price of cigarettes went up and fewer young people started smoking.",
    "cn": "政府提高了菸草稅,所以香菸價格上漲,開始抽菸的年輕人也變少了。"
  },
  {
    "word": "nicotine",
    "pos": "n.",
    "cn_def": "尼古丁",
    "en_def": "the addictive drug in cigarettes",
    "sentence": "{{BLANK}} makes smoking very hard to give up, so many people need help from a doctor to quit.",
    "cn": "尼古丁讓人很難戒菸,所以許多人需要醫生的幫助才能戒掉。"
  },
  {
    "word": "e-cigarette",
    "pos": "n.",
    "cn_def": "電子菸",
    "en_def": "an electronic device that lets people breathe in nicotine",
    "sentence": "Selling {{BLANK}} is now illegal in Taiwan, because health experts worry that they attract teenagers.",
    "cn": "販售電子菸在台灣現在是違法的,因為衛生專家擔心它們會吸引青少年。"
  },
  {
    "word": "health warning",
    "pos": "n.phr.",
    "cn_def": "健康警語",
    "en_def": "a notice that tells people about a danger to health",
    "sentence": "Every cigarette packet has a large {{BLANK}} with a picture, but some smokers still ignore it.",
    "cn": "每包香菸上都印有附圖片的大型健康警語,但有些吸菸者仍然視而不見。"
  },
  {
    "word": "clean water",
    "pos": "n.phr.",
    "cn_def": "乾淨的水",
    "en_def": "water that is safe to drink",
    "sentence": "Millions of people around the world still have no access to {{BLANK}}, so they often suffer from stomach diseases.",
    "cn": "全世界仍有數百萬人無法取得乾淨的水,所以他們常罹患腸胃疾病。"
  },
  {
    "word": "waterborne",
    "pos": "adj.",
    "cn_def": "經由水傳播的",
    "en_def": "spread by water",
    "sentence": "After the flood, doctors warned about {{BLANK}} diseases, so people were told to boil all their drinking water.",
    "cn": "洪水過後醫生警告要注意經由水傳播的疾病,所以民眾被告知要把所有飲用水煮沸。"
  },
  {
    "word": "universal health care",
    "pos": "n.phr.",
    "cn_def": "全民健康照護",
    "en_def": "a system that gives medical care to everyone",
    "sentence": "Taiwan's {{BLANK}} system covers almost every citizen, so even poor families can see a doctor.",
    "cn": "台灣的全民健康照護制度幾乎涵蓋每位國民,所以即使是貧窮家庭也能看醫生。"
  },
  {
    "word": "healthcare worker",
    "pos": "n.phr.",
    "cn_def": "醫事人員;醫療工作者",
    "en_def": "a person who works in medical care, such as a nurse",
    "sentence": "{{BLANK}} received the vaccine first, because they were at the highest risk of infection.",
    "cn": "醫療工作者最先接種疫苗,因為他們感染的風險最高。"
  },
  {
    "word": "frontline",
    "pos": "adj.",
    "cn_def": "第一線的",
    "en_def": "working directly in the most important or dangerous place",
    "sentence": "{{BLANK}} nurses worked twelve-hour shifts during the outbreak, and many of them could not go home for weeks.",
    "cn": "疫情爆發期間第一線護理師輪十二小時的班,其中許多人好幾週無法回家。"
  },
  {
    "word": "disinfectant",
    "pos": "n.",
    "cn_def": "消毒劑",
    "en_def": "a chemical that kills germs on surfaces",
    "sentence": "The cleaners wipe the door handles with {{BLANK}} twice a day, so germs do not spread around the school.",
    "cn": "清潔人員每天用消毒劑擦拭門把兩次,讓病菌不會在校園裡傳播。"
  },
  {
    "word": "handwashing",
    "pos": "n.",
    "cn_def": "洗手",
    "en_def": "the act of washing your hands",
    "sentence": "Regular {{BLANK}} with soap is one of the easiest ways to prevent illness, but many people do it too quickly.",
    "cn": "經常用肥皂洗手是預防疾病最簡單的方法之一,但許多人洗得太快了。"
  },
  {
    "word": "mosquito net",
    "pos": "n.phr.",
    "cn_def": "蚊帳",
    "en_def": "a net hung over a bed to keep mosquitoes away",
    "sentence": "Charities give families in Africa a {{BLANK}} for every bed, because it greatly reduces malaria.",
    "cn": "慈善團體為非洲家庭的每張床提供一頂蚊帳,因為它能大幅減少瘧疾。"
  },
  {
    "word": "health inequality",
    "pos": "n.phr.",
    "cn_def": "健康不平等",
    "en_def": "unfair differences in health between groups of people",
    "sentence": "People in remote mountain villages live shorter lives, and this {{BLANK}} worries the government.",
    "cn": "偏遠山區村莊的居民壽命較短,這種健康不平等讓政府感到憂心。"
  },
  {
    "word": "death rate",
    "pos": "n.phr.",
    "cn_def": "死亡率",
    "en_def": "the number of deaths in a group in a period of time",
    "sentence": "The {{BLANK}} from road accidents fell after the city lowered speed limits, so the plan was seen as a success.",
    "cn": "市政府降低速限後,交通事故的死亡率下降了,所以這項計畫被視為成功。"
  },
  {
    "word": "birth rate",
    "pos": "n.phr.",
    "cn_def": "出生率",
    "en_def": "the number of babies born in a period of time",
    "sentence": "Taiwan has one of the lowest {{BLANK}} in the world, so many primary schools have closed in recent years.",
    "cn": "台灣是全世界出生率最低的地方之一,所以近年來許多小學已經關閉。"
  },
  {
    "word": "infant mortality",
    "pos": "n.phr.",
    "cn_def": "嬰兒死亡率",
    "en_def": "the number of babies who die before age one",
    "sentence": "{{BLANK}} has dropped sharply in the last fifty years, because more mothers give birth in hospitals.",
    "cn": "過去五十年來嬰兒死亡率大幅下降,因為有更多母親在醫院生產。"
  },
  {
    "word": "preventive",
    "pos": "adj.",
    "cn_def": "預防性的",
    "en_def": "intended to stop something bad from happening",
    "sentence": "{{BLANK}} medicine saves money in the long run, because treating serious diseases is very expensive.",
    "cn": "預防醫學長期來看能省錢,因為治療重大疾病非常昂貴。"
  },
  {
    "word": "early detection",
    "pos": "n.phr.",
    "cn_def": "早期發現",
    "en_def": "finding a disease at an early stage",
    "sentence": "{{BLANK}} of breast cancer saves many lives, so women over forty-five are offered free scans.",
    "cn": "乳癌的早期發現能拯救許多生命,所以四十五歲以上的女性可以接受免費檢查。"
  },
  {
    "word": "rapid test",
    "pos": "n.phr.",
    "cn_def": "快篩",
    "en_def": "a quick test that gives results in minutes",
    "sentence": "I took a {{BLANK}} at home before visiting my grandmother, because I did not want to give her the virus.",
    "cn": "去探望奶奶之前我在家做了快篩,因為我不想把病毒傳給她。"
  }
];

const MCQS = [
  {
    "q": "Clean water and vaccines are two of the greatest successes in _____, and they have saved millions of lives.",
    "options": [
      "intensive care unit",
      "medical record",
      "public health",
      "heart disease"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "My cousin studies _____ at university, because she wants to help stop the next pandemic.",
    "options": [
      "epidemiology",
      "insurer",
      "negligence",
      "dependency"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The _____ explained on TV how the virus was spreading, and she asked people to stay calm.",
    "options": [
      "incapacity",
      "infringement",
      "belief",
      "epidemiologist"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Taiwan used fast _____ during the pandemic, so health workers could find people at risk quickly.",
    "options": [
      "day care centre",
      "contact tracing",
      "waiting list",
      "a new lease of life"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Many people in Taipei wear a _____ when they have a cold, because they do not want to infect others.",
    "options": [
      "blood test",
      "filial piety",
      "emergency room",
      "face mask"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "There is a bottle of _____ at the door of every classroom, so students clean their hands before they enter.",
    "options": [
      "sleep deprivation",
      "senior citizen",
      "hand sanitiser",
      "dependency ratio"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "During the outbreak, cinemas left empty seats between customers to allow _____, and many people watched films at home instead.",
    "options": [
      "super-aged society",
      "social distancing",
      "home care",
      "healthy eating"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "During the _____ the streets of the city were almost empty, and people could only go out to buy food.",
    "options": [
      "lockdown",
      "smartwatch",
      "concern",
      "replacement"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Taiwan introduced strict _____ early in 2020, so the virus spread slowly at first.",
    "options": [
      "old age",
      "health app",
      "assisted living",
      "border control"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The local _____ closed the restaurant for a week, because many customers had food poisoning.",
    "options": [
      "organ donation",
      "ageing population",
      "health authority",
      "empty nester"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The city launched a _____ about drinking water instead of bubble tea, and posters appeared in every school.",
    "options": [
      "hearing aid",
      "health campaign",
      "night shift",
      "retirement age"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "_____ classes teach students about sleep and diet, so they can make better choices.",
    "options": [
      "health education",
      "hip fracture",
      "blood test",
      "hearing loss"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "After the _____ in restaurants, the air inside became much cleaner, and more families came to eat.",
    "options": [
      "day care centre",
      "incubation period",
      "smoking ban",
      "retirement age"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "_____ is dangerous for children, so my uncle now smokes only outside the house.",
    "options": [
      "operating theatre",
      "second-hand smoke",
      "herbal medicine",
      "day care centre"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Several countries introduced a _____ on soft drinks, and companies reduced the sugar to avoid paying it.",
    "options": [
      "sugar tax",
      "super-aged society",
      "palliative care",
      "home care"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The government raised the tax on _____, so the price of cigarettes went up and fewer young people started smoking.",
    "options": [
      "physician",
      "reassurance",
      "resistance",
      "tobacco"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "_____ makes smoking very hard to give up, so many people need help from a doctor to quit.",
    "options": [
      "nicotine",
      "increment",
      "needle",
      "toothache"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Selling _____ is now illegal in Taiwan, because health experts worry that they attract teenagers.",
    "options": [
      "agreement",
      "e-cigarette",
      "concern",
      "readiness"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Every cigarette packet has a large _____ with a picture, but some smokers still ignore it.",
    "options": [
      "a new lease of life",
      "senior citizen",
      "medical record",
      "health warning"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Millions of people around the world still have no access to _____, so they often suffer from stomach diseases.",
    "options": [
      "assisted living",
      "heart attack",
      "clean water",
      "general practitioner"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "After the flood, doctors warned about _____ diseases, so people were told to boil all their drinking water.",
    "options": [
      "waterborne",
      "deadly",
      "antiviral",
      "life-threatening"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Taiwan's _____ system covers almost every citizen, so even poor families can see a doctor.",
    "options": [
      "heart disease",
      "universal health care",
      "old age",
      "night shift"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "_____ received the vaccine first, because they were at the highest risk of infection.",
    "options": [
      "day care centre",
      "organ donation",
      "end-of-life care",
      "healthcare worker"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "_____ nurses worked twelve-hour shifts during the outbreak, and many of them could not go home for weeks.",
    "options": [
      "non-invasive",
      "unaffordable",
      "frontline",
      "over-the-counter"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The cleaners wipe the door handles with _____ twice a day, so germs do not spread around the school.",
    "options": [
      "disinfectant",
      "dissatisfaction",
      "inspection",
      "infection"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Regular _____ with soap is one of the easiest ways to prevent illness, but many people do it too quickly.",
    "options": [
      "injection",
      "concern",
      "apprehension",
      "handwashing"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Charities give families in Africa a _____ for every bed, because it greatly reduces malaria.",
    "options": [
      "general practitioner",
      "mosquito net",
      "mental health",
      "reading glasses"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "People in remote mountain villages live shorter lives, and this _____ worries the government.",
    "options": [
      "hip fracture",
      "grey hair",
      "health inequality",
      "operating theatre"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The _____ from road accidents fell after the city lowered speed limits, so the plan was seen as a success.",
    "options": [
      "death rate",
      "general practitioner",
      "blood test",
      "ageing population"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Taiwan has one of the lowest _____ in the world, so many primary schools have closed in recent years.",
    "options": [
      "silver economy",
      "birth rate",
      "day care centre",
      "a bitter pill to swallow"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "_____ has dropped sharply in the last fifty years, because more mothers give birth in hospitals.",
    "options": [
      "grey hair",
      "physical activity",
      "infant mortality",
      "hospital bed"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "_____ medicine saves money in the long run, because treating serious diseases is very expensive.",
    "options": [
      "clinical",
      "intergenerational",
      "escalating",
      "preventive"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "_____ of breast cancer saves many lives, so women over forty-five are offered free scans.",
    "options": [
      "early detection",
      "health insurance",
      "home care",
      "common cold"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "I took a _____ at home before visiting my grandmother, because I did not want to give her the virus.",
    "options": [
      "memory loss",
      "filial piety",
      "healthy eating",
      "rapid test"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "public health": {
    "pos": "n.phr.",
    "en_def": "the health of the whole population and how it is protected",
    "cn_def": "公共衛生"
  },
  "epidemiology": {
    "pos": "n.",
    "en_def": "the study of how diseases spread in populations",
    "cn_def": "流行病學"
  },
  "epidemiologist": {
    "pos": "n.",
    "en_def": "a scientist who studies how diseases spread",
    "cn_def": "流行病學家"
  },
  "contact tracing": {
    "pos": "n.phr.",
    "en_def": "finding people who have been near an infected person",
    "cn_def": "疫調;接觸者追蹤"
  },
  "face mask": {
    "pos": "n.phr.",
    "en_def": "a covering for the nose and mouth",
    "cn_def": "口罩"
  },
  "hand sanitiser": {
    "pos": "n.phr.",
    "en_def": "a liquid that kills germs on your hands without water",
    "cn_def": "乾洗手液"
  },
  "social distancing": {
    "pos": "n.phr.",
    "en_def": "keeping a safe distance from other people to stop disease",
    "cn_def": "社交距離"
  },
  "lockdown": {
    "pos": "n.",
    "en_def": "an official order for people to stay at home",
    "cn_def": "封城"
  },
  "border control": {
    "pos": "n.phr.",
    "en_def": "checks on people entering a country",
    "cn_def": "邊境管制"
  },
  "health authority": {
    "pos": "n.phr.",
    "en_def": "a government body in charge of health",
    "cn_def": "衛生主管機關"
  },
  "health campaign": {
    "pos": "n.phr.",
    "en_def": "an organised effort to improve people's health",
    "cn_def": "健康宣導活動"
  },
  "health education": {
    "pos": "n.phr.",
    "en_def": "teaching people how to stay healthy",
    "cn_def": "健康教育"
  },
  "smoking ban": {
    "pos": "n.phr.",
    "en_def": "a law that stops people smoking in certain places",
    "cn_def": "禁菸令"
  },
  "second-hand smoke": {
    "pos": "n.phr.",
    "en_def": "smoke breathed in by people near a smoker",
    "cn_def": "二手菸"
  },
  "sugar tax": {
    "pos": "n.phr.",
    "en_def": "a tax on drinks with a lot of sugar",
    "cn_def": "糖稅"
  },
  "tobacco": {
    "pos": "n.",
    "en_def": "dried leaves that are smoked in cigarettes",
    "cn_def": "菸草"
  },
  "nicotine": {
    "pos": "n.",
    "en_def": "the addictive drug in cigarettes",
    "cn_def": "尼古丁"
  },
  "e-cigarette": {
    "pos": "n.",
    "en_def": "an electronic device that lets people breathe in nicotine",
    "cn_def": "電子菸"
  },
  "health warning": {
    "pos": "n.phr.",
    "en_def": "a notice that tells people about a danger to health",
    "cn_def": "健康警語"
  },
  "clean water": {
    "pos": "n.phr.",
    "en_def": "water that is safe to drink",
    "cn_def": "乾淨的水"
  },
  "waterborne": {
    "pos": "adj.",
    "en_def": "spread by water",
    "cn_def": "經由水傳播的"
  },
  "universal health care": {
    "pos": "n.phr.",
    "en_def": "a system that gives medical care to everyone",
    "cn_def": "全民健康照護"
  },
  "healthcare worker": {
    "pos": "n.phr.",
    "en_def": "a person who works in medical care, such as a nurse",
    "cn_def": "醫事人員;醫療工作者"
  },
  "frontline": {
    "pos": "adj.",
    "en_def": "working directly in the most important or dangerous place",
    "cn_def": "第一線的"
  },
  "disinfectant": {
    "pos": "n.",
    "en_def": "a chemical that kills germs on surfaces",
    "cn_def": "消毒劑"
  },
  "handwashing": {
    "pos": "n.",
    "en_def": "the act of washing your hands",
    "cn_def": "洗手"
  },
  "mosquito net": {
    "pos": "n.phr.",
    "en_def": "a net hung over a bed to keep mosquitoes away",
    "cn_def": "蚊帳"
  },
  "health inequality": {
    "pos": "n.phr.",
    "en_def": "unfair differences in health between groups of people",
    "cn_def": "健康不平等"
  },
  "death rate": {
    "pos": "n.phr.",
    "en_def": "the number of deaths in a group in a period of time",
    "cn_def": "死亡率"
  },
  "birth rate": {
    "pos": "n.phr.",
    "en_def": "the number of babies born in a period of time",
    "cn_def": "出生率"
  },
  "infant mortality": {
    "pos": "n.phr.",
    "en_def": "the number of babies who die before age one",
    "cn_def": "嬰兒死亡率"
  },
  "preventive": {
    "pos": "adj.",
    "en_def": "intended to stop something bad from happening",
    "cn_def": "預防性的"
  },
  "early detection": {
    "pos": "n.phr.",
    "en_def": "finding a disease at an early stage",
    "cn_def": "早期發現"
  },
  "rapid test": {
    "pos": "n.phr.",
    "en_def": "a quick test that gives results in minutes",
    "cn_def": "快篩"
  },
  "intensive care unit": {
    "pos": "n.phr.",
    "en_def": "a hospital area for very seriously ill patients",
    "cn_def": "加護病房"
  },
  "medical record": {
    "pos": "n.phr.",
    "en_def": "the official history of a person's health and treatment",
    "cn_def": "病歷"
  },
  "heart disease": {
    "pos": "n.phr.",
    "en_def": "any illness that affects the heart",
    "cn_def": "心臟病"
  },
  "insurer": {
    "pos": "n.",
    "en_def": "a company that provides insurance",
    "cn_def": "保險公司"
  },
  "negligence": {
    "pos": "n.",
    "en_def": "failure to take proper care",
    "cn_def": "疏失;過失"
  },
  "dependency": {
    "pos": "n.",
    "en_def": "the state of needing something or someone too much",
    "cn_def": "依賴"
  },
  "incapacity": {
    "pos": "n.",
    "en_def": "the inability to do something",
    "cn_def": "無能力;失能"
  },
  "infringement": {
    "pos": "n.",
    "en_def": "an action that breaks a rule or law",
    "cn_def": "侵犯;違反"
  },
  "belief": {
    "pos": "n.",
    "en_def": "a feeling that something is true",
    "cn_def": "信念;看法"
  },
  "day care centre": {
    "pos": "n.phr.",
    "en_def": "a place that looks after older people during the day",
    "cn_def": "日間照顧中心"
  },
  "waiting list": {
    "pos": "n.phr.",
    "en_def": "a list of people who must wait for a service",
    "cn_def": "候補名單;等候名單"
  },
  "a new lease of life": {
    "pos": "n.phr.",
    "en_def": "a chance to be active and happy again",
    "cn_def": "重獲新生;煥然一新"
  },
  "blood test": {
    "pos": "n.phr.",
    "en_def": "a check of a small amount of blood for health problems",
    "cn_def": "驗血"
  },
  "filial piety": {
    "pos": "n.phr.",
    "en_def": "respect and care for one's parents and older relatives",
    "cn_def": "孝道"
  },
  "emergency room": {
    "pos": "n.phr.",
    "en_def": "the part of a hospital for people who need help immediately",
    "cn_def": "急診室"
  },
  "sleep deprivation": {
    "pos": "n.phr.",
    "en_def": "not getting enough sleep",
    "cn_def": "睡眠不足"
  },
  "senior citizen": {
    "pos": "n.phr.",
    "en_def": "an older person, usually over 65",
    "cn_def": "年長者;老年人"
  },
  "dependency ratio": {
    "pos": "n.phr.",
    "en_def": "the number of non-working people compared with workers",
    "cn_def": "扶養比"
  },
  "super-aged society": {
    "pos": "n.phr.",
    "en_def": "a society where over 20% of people are 65 or older",
    "cn_def": "超高齡社會"
  },
  "home care": {
    "pos": "n.phr.",
    "en_def": "care given to people in their own homes",
    "cn_def": "居家照護"
  },
  "healthy eating": {
    "pos": "n.phr.",
    "en_def": "choosing food that is good for your body",
    "cn_def": "健康飲食"
  },
  "smartwatch": {
    "pos": "n.",
    "en_def": "a watch that works like a small computer",
    "cn_def": "智慧手錶"
  },
  "concern": {
    "pos": "n.",
    "en_def": "a feeling of worry",
    "cn_def": "擔憂;關切"
  },
  "replacement": {
    "pos": "n.",
    "en_def": "a new part that takes the place of an old one",
    "cn_def": "置換;替代品"
  },
  "old age": {
    "pos": "n.phr.",
    "en_def": "the later part of life",
    "cn_def": "老年;晚年"
  },
  "health app": {
    "pos": "n.phr.",
    "en_def": "a phone program that tracks your health",
    "cn_def": "健康應用程式"
  },
  "assisted living": {
    "pos": "n.phr.",
    "en_def": "housing where older people get some help with daily tasks",
    "cn_def": "協助型生活住宅"
  },
  "organ donation": {
    "pos": "n.phr.",
    "en_def": "giving a body part to help someone who is ill",
    "cn_def": "器官捐贈"
  },
  "ageing population": {
    "pos": "n.phr.",
    "en_def": "a population with a growing share of old people",
    "cn_def": "人口老化"
  },
  "empty nester": {
    "pos": "n.",
    "en_def": "a parent whose children have grown up and left home",
    "cn_def": "空巢父母"
  },
  "hearing aid": {
    "pos": "n.phr.",
    "en_def": "a small device that helps people hear better",
    "cn_def": "助聽器"
  },
  "night shift": {
    "pos": "n.phr.",
    "en_def": "a period of work during the night",
    "cn_def": "夜班"
  },
  "retirement age": {
    "pos": "n.phr.",
    "en_def": "the age at which people usually stop working",
    "cn_def": "退休年齡"
  },
  "hip fracture": {
    "pos": "n.phr.",
    "en_def": "a break in the bone at the top of the leg",
    "cn_def": "髖部骨折"
  },
  "hearing loss": {
    "pos": "n.phr.",
    "en_def": "a reduced ability to hear",
    "cn_def": "聽力損失"
  },
  "incubation period": {
    "pos": "n.phr.",
    "en_def": "the time between catching a disease and showing signs",
    "cn_def": "潛伏期"
  },
  "operating theatre": {
    "pos": "n.phr.",
    "en_def": "a room in a hospital where operations are done",
    "cn_def": "手術室"
  },
  "herbal medicine": {
    "pos": "n.phr.",
    "en_def": "medicine made from plants",
    "cn_def": "草藥"
  },
  "palliative care": {
    "pos": "n.phr.",
    "en_def": "care that reduces pain for people who cannot be cured",
    "cn_def": "安寧緩和照護"
  },
  "physician": {
    "pos": "n.",
    "en_def": "a medical doctor",
    "cn_def": "內科醫師;醫師"
  },
  "reassurance": {
    "pos": "n.",
    "en_def": "words that make someone feel less worried",
    "cn_def": "安心;寬慰"
  },
  "resistance": {
    "pos": "n.",
    "en_def": "the ability of germs to survive a drug",
    "cn_def": "抗藥性;抵抗力"
  },
  "increment": {
    "pos": "n.",
    "en_def": "a small increase",
    "cn_def": "增量;增額"
  },
  "needle": {
    "pos": "n.",
    "en_def": "a thin sharp metal tube used for injections",
    "cn_def": "針;針頭"
  },
  "toothache": {
    "pos": "n.",
    "en_def": "a pain in a tooth",
    "cn_def": "牙痛"
  },
  "agreement": {
    "pos": "n.",
    "en_def": "a situation in which people share the same opinion",
    "cn_def": "共識;同意"
  },
  "readiness": {
    "pos": "n.",
    "en_def": "the state of being prepared",
    "cn_def": "準備就緒"
  },
  "heart attack": {
    "pos": "n.phr.",
    "en_def": "a sudden serious problem when blood stops reaching the heart",
    "cn_def": "心臟病發作"
  },
  "general practitioner": {
    "pos": "n.phr.",
    "en_def": "a family doctor who treats common illnesses",
    "cn_def": "家庭醫師;一般科醫師"
  },
  "deadly": {
    "pos": "adj.",
    "en_def": "able to cause death",
    "cn_def": "致命的"
  },
  "antiviral": {
    "pos": "adj.",
    "en_def": "used to fight viruses",
    "cn_def": "抗病毒的"
  },
  "life-threatening": {
    "pos": "adj.",
    "en_def": "able to cause death",
    "cn_def": "危及生命的"
  },
  "end-of-life care": {
    "pos": "n.phr.",
    "en_def": "medical and emotional care for people near death",
    "cn_def": "臨終照護"
  },
  "non-invasive": {
    "pos": "adj.",
    "en_def": "not needing to cut or enter the body",
    "cn_def": "非侵入性的"
  },
  "unaffordable": {
    "pos": "adj.",
    "en_def": "too expensive to pay for",
    "cn_def": "負擔不起的"
  },
  "over-the-counter": {
    "pos": "adj.",
    "en_def": "able to be bought without a doctor's prescription",
    "cn_def": "非處方的;成藥的"
  },
  "dissatisfaction": {
    "pos": "n.",
    "en_def": "the feeling of not being happy with something",
    "cn_def": "不滿"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "an official check",
    "cn_def": "檢查;稽查"
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
  "apprehension": {
    "pos": "n.",
    "en_def": "worry about something that may happen",
    "cn_def": "憂慮;擔心"
  },
  "mental health": {
    "pos": "n.phr.",
    "en_def": "the health of a person's mind and feelings",
    "cn_def": "心理健康"
  },
  "reading glasses": {
    "pos": "n.phr.",
    "en_def": "glasses that help older people see small print",
    "cn_def": "老花眼鏡"
  },
  "grey hair": {
    "pos": "n.phr.",
    "en_def": "hair that has lost its colour with age",
    "cn_def": "白髮"
  },
  "silver economy": {
    "pos": "n.phr.",
    "en_def": "business and services aimed at older people",
    "cn_def": "銀髮經濟"
  },
  "a bitter pill to swallow": {
    "pos": "n.phr.",
    "en_def": "an unpleasant fact that you must accept",
    "cn_def": "難以接受的事實"
  },
  "physical activity": {
    "pos": "n.phr.",
    "en_def": "movement of the body, such as walking or sport",
    "cn_def": "身體活動"
  },
  "hospital bed": {
    "pos": "n.phr.",
    "en_def": "a bed in a hospital for a patient",
    "cn_def": "病床"
  },
  "clinical": {
    "pos": "adj.",
    "en_def": "relating to the treatment of patients",
    "cn_def": "臨床的"
  },
  "intergenerational": {
    "pos": "adj.",
    "en_def": "involving people of different generations",
    "cn_def": "跨世代的"
  },
  "escalating": {
    "pos": "adj.",
    "en_def": "increasing quickly",
    "cn_def": "不斷升高的"
  },
  "health insurance": {
    "pos": "n.phr.",
    "en_def": "a system that pays for medical care",
    "cn_def": "健康保險"
  },
  "common cold": {
    "pos": "n.phr.",
    "en_def": "a mild illness with a runny nose and sore throat",
    "cn_def": "普通感冒"
  },
  "memory loss": {
    "pos": "n.phr.",
    "en_def": "the inability to remember things",
    "cn_def": "失憶;記憶力減退"
  }
};

const EXTRA_GLOSSES = {};
