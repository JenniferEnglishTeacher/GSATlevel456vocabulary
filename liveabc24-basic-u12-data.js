// Unit 12 Quiz Data: landmark – be diagnosed with
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Basic U12 - landmark – be diagnosed with",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "landmark",
    "pos": "n.",
    "cn_def": "地標",
    "en_def": "a building or place that is easy to recognize and helps you know where you are",
    "sentence": "As we strolled through the historic city, the towering {{BLANK}} reminded us of its rich cultural heritage.",
    "cn": "當我們漫步在這個歷史悠久的城市時，高聳的地標讓我們想起了它豐富的文化遺產。"
  },
  {
    "word": "average",
    "pos": "n.",
    "cn_def": "平均",
    "en_def": "the result you get by adding amounts together and dividing by the number of amounts",
    "sentence": "According to the latest report, the {{BLANK}} income of households in the region has increased significantly over the past decade.",
    "cn": "根據最新報告，該地區家庭的平均收入在過去十年中顯著增加。"
  },
  {
    "word": "average",
    "pos": "adj.",
    "cn_def": "平均的",
    "en_def": "typical or normal; calculated by adding amounts and dividing by their number",
    "sentence": "Despite his {{BLANK}} performance in the preliminary rounds, he managed to secure a spot in the finals.",
    "cn": "儘管他在初賽中的表現平平，但他還是成功地獲得了決賽的名額。"
  },
  {
    "word": "maximum",
    "pos": "n.",
    "cn_def": "最大限度",
    "en_def": "the largest amount or number that is possible or allowed",
    "sentence": "The concert hall has a strict policy of adhering to the {{BLANK}} capacity of 1000 attendees to ensure safety.",
    "cn": "音樂廳嚴格遵守最大容量1000名參與者的政策，以確保安全。"
  },
  {
    "word": "maximum",
    "pos": "adj.",
    "cn_def": "最大的",
    "en_def": "the largest that is possible or allowed",
    "sentence": "To achieve the {{BLANK}} benefit from this exercise, it's important to maintain the correct posture throughout.",
    "cn": "為了從這項運動中獲得最大的益處，保持正確的姿勢是非常重要的。"
  },
  {
    "word": "minimum",
    "pos": "adj.",
    "cn_def": "最小限度/最小的",
    "en_def": "the smallest that is possible or allowed",
    "sentence": "The job requires a {{BLANK}} level of experience, preferably at least two years in a related field.",
    "cn": "這份工作要求最低程度的經驗，最好是在相關領域至少有兩年的經驗。"
  },
  {
    "word": "per",
    "pos": "n.",
    "cn_def": "每",
    "en_def": "for each",
    "sentence": "The cost of the project is calculated at 50 dollars {{BLANK}} hour of labor, which includes all the necessary materials and tools.",
    "cn": "該項目的成本按每小時50美元的人工計算，包括所有必需的材料和工具。"
  },
  {
    "word": "frequency",
    "pos": "n.",
    "cn_def": "頻率",
    "en_def": "the number of times something happens in a period of time",
    "sentence": "The {{BLANK}} of trains during rush hour is increased to accommodate the large number of commuters.",
    "cn": "為了滿足大量通勤者的需求，在尖峰時段增加了列車的運行頻率。"
  },
  {
    "word": "frequent",
    "pos": "adj.",
    "cn_def": "頻繁的",
    "en_def": "happening often",
    "sentence": "He is known for his {{BLANK}} business trips to Europe, often traveling there several times a month.",
    "cn": "他以經常去歐洲出差而聞名，通常一個月要去那裡好幾次。"
  },
  {
    "word": "assume",
    "pos": "v.",
    "cn_def": "假設",
    "en_def": "to think that something is true without having proof",
    "sentence": "While analyzing the data, we must not {{BLANK}} that all variables are independent, as this could skew the results.",
    "cn": "在分析數據時，我們不能假設所有變量都是獨立的，因為這可能會扭曲結果。"
  },
  {
    "word": "assumed",
    "pos": "adj.",
    "cn_def": "假定的",
    "en_def": "believed to be true or real, though not proved",
    "sentence": "His {{BLANK}} innocence was questioned after new evidence was presented in court.",
    "cn": "在法庭上出示新證據後，他被假定的無辜受到質疑。"
  },
  {
    "word": "assumption",
    "pos": "n.",
    "cn_def": "假設",
    "en_def": "something you accept as true without proof",
    "sentence": "The {{BLANK}} that the economy will recover quickly may not hold true given the current global challenges.",
    "cn": "鑑於當前的全球挑戰，經濟將迅速復甦的假設可能不成立。"
  },
  {
    "word": "infect",
    "pos": "v.",
    "cn_def": "感染",
    "en_def": "to give a disease to a person, animal or plant",
    "sentence": "During the outbreak, many people were afraid to go outside, worrying they might {{BLANK}} others unknowingly.",
    "cn": "在疫情爆發期間，許多人害怕外出，擔心他們可能無意中感染他人。"
  },
  {
    "word": "be infected with",
    "pos": "phr.",
    "cn_def": "被…感染",
    "en_def": "to have caught a disease caused by a virus or bacteria",
    "sentence": "After visiting the affected region, several aid workers were found to {{BLANK}} a rare virus.",
    "cn": "在訪問受影響的地區後，發現幾名救援工作者感染了一種罕見的病毒。"
  },
  {
    "word": "moist",
    "pos": "adj.",
    "cn_def": "潮濕的",
    "en_def": "slightly wet",
    "sentence": "The {{BLANK}} climate of the tropical island is ideal for growing certain fruits.",
    "cn": "這個熱帶島嶼的潮濕氣候非常適合種植某些水果。"
  },
  {
    "word": "moisture",
    "pos": "n.",
    "cn_def": "濕氣",
    "en_def": "very small drops of water in the air or on a surface",
    "sentence": "Plants in this region rely on the early morning {{BLANK}} for their water needs.",
    "cn": "這個地區的植物依靠清晨的濕氣來滿足它們的水分需求。"
  },
  {
    "word": "moisturize",
    "pos": "v.",
    "cn_def": "保濕",
    "en_def": "to put cream on your skin to stop it from getting dry",
    "sentence": "In dry climates, it's important to {{BLANK}} your skin regularly to prevent it from cracking.",
    "cn": "在乾燥的氣候中，定期保濕你的皮膚以防止它開裂是很重要的。"
  },
  {
    "word": "humid",
    "pos": "adj.",
    "cn_def": "潮濕的",
    "en_def": "(of air or weather) warm and containing a lot of water",
    "sentence": "The {{BLANK}} weather during the monsoon season makes outdoor activities less appealing.",
    "cn": "季風季節的潮濕天氣使戶外活動變得不那麼吸引人。"
  },
  {
    "word": "continue",
    "pos": "v.",
    "cn_def": "繼續",
    "en_def": "to keep doing something or to keep happening without stopping",
    "sentence": "Despite the challenges, the team decided to {{BLANK}} with the project, showing great determination.",
    "cn": "儘管面臨挑戰，團隊決定繼續進行這個項目，展現了極大的決心。"
  },
  {
    "word": "continuous",
    "pos": "adj.",
    "cn_def": "連續的",
    "en_def": "happening without stopping",
    "sentence": "The {{BLANK}} rainfall for several days led to flooding in many areas.",
    "cn": "連續幾天的降雨導致許多地區發生洪水。"
  },
  {
    "word": "continuity",
    "pos": "n.",
    "cn_def": "連續性",
    "en_def": "the fact of continuing without stopping or changing suddenly",
    "sentence": "The director was praised for maintaining the {{BLANK}} of the storyline throughout the film.",
    "cn": "導演因在整部電影中維持故事情節的連續性而受到讚揚。"
  },
  {
    "word": "rage",
    "pos": "n.",
    "cn_def": "憤怒",
    "en_def": "a feeling of very strong anger that is hard to control",
    "sentence": "The debate sparked a {{BLANK}} among the community members, leading to heated discussions.",
    "cn": "辯論在社區成員中引發了憤怒，導致熱烈的討論。"
  },
  {
    "word": "rage",
    "pos": "v.",
    "cn_def": "發怒",
    "en_def": "to show that you are very angry",
    "sentence": "He began to {{BLANK}} when he heard about the unfair treatment.",
    "cn": "當他聽說不公平的待遇時，他開始發怒。"
  },
  {
    "word": "rage",
    "pos": "v.",
    "cn_def": "激烈進行",
    "en_def": "(of a storm, fire or battle) to continue with great force",
    "sentence": "The storm continued to {{BLANK}} throughout the night, causing widespread damage.",
    "cn": "風暴持續在整個夜晚激烈進行，造成了廣泛的損害。"
  },
  {
    "word": "raged on",
    "pos": "phr.",
    "cn_def": "繼續激烈進行",
    "en_def": "to continue with great force for a long time",
    "sentence": "Despite efforts to control it, the wildfire {{BLANK}} for weeks.",
    "cn": "儘管努力控制，野火持續燃燒了數週。"
  },
  {
    "word": "outrage",
    "pos": "n.",
    "cn_def": "憤怒",
    "en_def": "a strong feeling of shock and anger",
    "sentence": "The scandal caused public {{BLANK}} and demands for justice.",
    "cn": "這起醜聞引起了公眾的憤怒和對正義的要求。"
  },
  {
    "word": "all the rage",
    "pos": "phr.",
    "cn_def": "非常流行",
    "en_def": "very popular and fashionable at a particular time",
    "sentence": "Slim-fit jeans are {{BLANK}} among teenagers this year.",
    "cn": "今年，緊身牛仔褲在青少年中非常流行。"
  },
  {
    "word": "grief",
    "pos": "n.",
    "cn_def": "悲傷",
    "en_def": "very great sadness, especially when someone dies",
    "sentence": "After the loss of her pet, she was overwhelmed with {{BLANK}}.",
    "cn": "在失去她的寵物後，她感到非常悲傷。"
  },
  {
    "word": "To his grief",
    "pos": "phr.",
    "cn_def": "令某人悲傷",
    "en_def": "used to say that something makes someone very sad",
    "sentence": "{{BLANK}}, he discovered that the old tree in his backyard had been cut down.",
    "cn": "令他悲傷的是，他發現後院的老樹被砍掉了。"
  },
  {
    "word": "grieve",
    "pos": "v.",
    "cn_def": "哀悼",
    "en_def": "to feel very sad, especially because someone has died",
    "sentence": "She continues to {{BLANK}} the loss of her close friend.",
    "cn": "她繼續哀悼她親密朋友的去世。"
  },
  {
    "word": "decrease",
    "pos": "v.",
    "cn_def": "減少",
    "en_def": "to become or make something smaller in amount or number",
    "sentence": "The government's new policies aim to {{BLANK}} air pollution in urban areas.",
    "cn": "政府的新政策旨在減少城市地區的空氣污染。"
  },
  {
    "word": "the decrease in",
    "pos": "n.",
    "cn_def": "減少",
    "en_def": "a fall in the amount or number of something",
    "sentence": "The report highlighted {{BLANK}} consumer spending during the economic downturn.",
    "cn": "報告強調了經濟衰退期間消費支出的減少。"
  },
  {
    "word": "increase",
    "pos": "v.",
    "cn_def": "增加",
    "en_def": "to become or make something larger in amount or number",
    "sentence": "Efforts to {{BLANK}} public awareness about environmental protection have been successful.",
    "cn": "增加公眾對環境保護意識的努力已經取得成功。"
  },
  {
    "word": "increase in",
    "pos": "n.",
    "cn_def": "增加",
    "en_def": "a rise in the amount or number of something",
    "sentence": "The recent {{BLANK}} traffic congestion is mainly due to road construction.",
    "cn": "最近交通擁堵的增加主要是由於道路建設。"
  },
  {
    "word": "harm",
    "pos": "n.",
    "cn_def": "傷害",
    "en_def": "damage or injury caused to a person or thing",
    "sentence": "The chemical spill caused significant {{BLANK}} to the marine ecosystem.",
    "cn": "化學洩漏對海洋生態系統造成了重大傷害。"
  },
  {
    "word": "harm",
    "pos": "v.",
    "cn_def": "傷害",
    "en_def": "to hurt someone or damage something",
    "sentence": "Smoking can seriously {{BLANK}} your health.",
    "cn": "吸煙可以嚴重傷害你的健康。"
  },
  {
    "word": "do harm to",
    "pos": "phr.",
    "cn_def": "對...造成傷害",
    "en_def": "to hurt or damage someone or something",
    "sentence": "Polluting factories {{BLANK}} the environment and human health.",
    "cn": "污染工廠對環境和人類健康造成傷害。"
  },
  {
    "word": "harmful",
    "pos": "adj.",
    "cn_def": "有害的",
    "en_def": "causing damage or injury",
    "sentence": "Consuming too much sugar is {{BLANK}} to one's health.",
    "cn": "過量消耗糖分對一個人的健康有害。"
  },
  {
    "word": "harmless",
    "pos": "adj.",
    "cn_def": "無害的",
    "en_def": "not able or likely to cause damage or injury",
    "sentence": "Most spiders are {{BLANK}} to humans, despite common fears.",
    "cn": "大多數蜘蛛對人類是無害的，儘管人們常常感到害怕。"
  },
  {
    "word": "float",
    "pos": "v.",
    "cn_def": "漂浮",
    "en_def": "to stay on the surface of a liquid or move slowly through the air",
    "sentence": "Leaves {{BLANK}} gently on the surface of the water.",
    "cn": "樹葉在水面上輕輕漂浮。"
  },
  {
    "word": "feel like",
    "pos": "phr.",
    "cn_def": "想要做某事",
    "en_def": "to want to do something",
    "sentence": "After a long week at work, I really {{BLANK}} taking a long walk in the park.",
    "cn": "經過一周繁忙的工作後，我真的想在公園裡散散步。"
  },
  {
    "word": "feels like",
    "pos": "phr.",
    "cn_def": "像是",
    "en_def": "to seem to be something; to give the impression of",
    "sentence": "Sometimes, being a parent {{BLANK}} a never-ending challenge.",
    "cn": "有時候，做父母親就像是一個永無止境的挑戰。"
  },
  {
    "word": "wept",
    "pos": "v.",
    "cn_def": "哭泣",
    "en_def": "to cry, usually because you are sad",
    "sentence": "She {{BLANK}} tears of joy when she heard the good news.",
    "cn": "當她聽到好消息時，她哭泣出了喜悅的眼淚。"
  },
  {
    "word": "sob",
    "pos": "v.",
    "cn_def": "啜泣",
    "en_def": "to cry noisily, taking sudden short breaths",
    "sentence": "Overwhelmed by emotion, he began to {{BLANK}} quietly in the corner.",
    "cn": "在情緒的壓倒下，他開始在角落裡悄悄啜泣。"
  },
  {
    "word": "infection",
    "pos": "n.",
    "cn_def": "感染",
    "en_def": "an illness caused by bacteria or a virus",
    "sentence": "The patient was treated immediately for a severe {{BLANK}}.",
    "cn": "醫生立刻治療了病人嚴重的感染。"
  },
  {
    "word": "infectious",
    "pos": "adj.",
    "cn_def": "傳染的",
    "en_def": "(of a disease) able to be passed from one person to another",
    "sentence": "Chickenpox is highly {{BLANK}} and can spread quickly in crowded places.",
    "cn": "水痘是高度傳染的，並且可以在擁擠的地方迅速傳播。"
  },
  {
    "word": "diagnosed",
    "pos": "v.",
    "cn_def": "診斷",
    "en_def": "to find out and say what illness someone has",
    "sentence": "The doctor {{BLANK}} her condition as an allergic reaction.",
    "cn": "醫生診斷她的狀況是過敏反應。"
  },
  {
    "word": "diagnosed as",
    "pos": "phr.",
    "cn_def": "被診斷為...",
    "en_def": "to be found by a doctor to be in a particular condition",
    "sentence": "He was {{BLANK}} early-stage diabetes, prompting lifestyle changes.",
    "cn": "他被診斷為早期糖尿病，促使他改變生活方式。"
  },
  {
    "word": "diagnosed with",
    "pos": "phr.",
    "cn_def": "被診斷出患有...",
    "en_def": "to be told by a doctor that you have a particular illness",
    "sentence": "Several patients in the hospital were {{BLANK}} pneumonia.",
    "cn": "醫院裡的幾位病人被診斷出患有肺炎。"
  }
];

const MCQS = [
  {
    "q": "As we strolled through the historic city, the towering ______ reminded us of its rich cultural heritage.",
    "options": [
      "infection",
      "landmark",
      "increase in",
      "per"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "According to the latest report, the ______ income of households in the region has increased significantly over the past decade.",
    "options": [
      "continuity",
      "the decrease in",
      "landmark",
      "average"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Despite his ______ performance in the preliminary rounds, he managed to secure a spot in the finals.",
    "options": [
      "average",
      "continuous",
      "assumed",
      "maximum"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The concert hall has a strict policy of adhering to the ______ capacity of 1000 attendees to ensure safety.",
    "options": [
      "grief",
      "the decrease in",
      "maximum",
      "moisture"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "To achieve the ______ benefit from this exercise, it's important to maintain the correct posture throughout.",
    "options": [
      "frequent",
      "maximum",
      "infectious",
      "minimum"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The job requires a ______ level of experience, preferably at least two years in a related field.",
    "options": [
      "infectious",
      "frequent",
      "moist",
      "minimum"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The cost of the project is calculated at 50 dollars ______ hour of labor, which includes all the necessary materials and tools.",
    "options": [
      "maximum",
      "moisture",
      "per",
      "harm"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The ______ of trains during rush hour is increased to accommodate the large number of commuters.",
    "options": [
      "frequency",
      "the decrease in",
      "landmark",
      "moisture"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "He is known for his ______ business trips to Europe, often traveling there several times a month.",
    "options": [
      "minimum",
      "humid",
      "frequent",
      "continuous"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "While analyzing the data, we must not ______ that all variables are independent, as this could skew the results.",
    "options": [
      "diagnosed",
      "infect",
      "rage",
      "assume"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "His ______ innocence was questioned after new evidence was presented in court.",
    "options": [
      "continuous",
      "assumed",
      "maximum",
      "humid"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The ______ that the economy will recover quickly may not hold true given the current global challenges.",
    "options": [
      "assumption",
      "per",
      "continuity",
      "rage"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "During the outbreak, many people were afraid to go outside, worrying they might ______ others unknowingly.",
    "options": [
      "moisturize",
      "infect",
      "sob",
      "harm"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "After visiting the affected region, several aid workers were found to ______ a rare virus.",
    "options": [
      "diagnosed with",
      "To his grief",
      "be infected with",
      "do harm to"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The ______ climate of the tropical island is ideal for growing certain fruits.",
    "options": [
      "average",
      "harmless",
      "humid",
      "moist"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Plants in this region rely on the early morning ______ for their water needs.",
    "options": [
      "moisture",
      "average",
      "rage",
      "increase in"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "In dry climates, it's important to ______ your skin regularly to prevent it from cracking.",
    "options": [
      "continue",
      "moisturize",
      "sob",
      "diagnosed"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The ______ weather during the monsoon season makes outdoor activities less appealing.",
    "options": [
      "humid",
      "assumed",
      "harmful",
      "minimum"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Despite the challenges, the team decided to ______ with the project, showing great determination.",
    "options": [
      "grieve",
      "sob",
      "harm",
      "continue"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The ______ rainfall for several days led to flooding in many areas.",
    "options": [
      "harmless",
      "assumed",
      "continuous",
      "infectious"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The director was praised for maintaining the ______ of the storyline throughout the film.",
    "options": [
      "continuity",
      "maximum",
      "outrage",
      "frequency"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The debate sparked a ______ among the community members, leading to heated discussions.",
    "options": [
      "increase in",
      "grief",
      "outrage",
      "rage"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "He began to ______ when he heard about the unfair treatment.",
    "options": [
      "float",
      "assume",
      "rage",
      "harm"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The storm continued to ______ throughout the night, causing widespread damage.",
    "options": [
      "increase",
      "rage",
      "float",
      "assume"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Despite efforts to control it, the wildfire ______ for weeks.",
    "options": [
      "To his grief",
      "feels like",
      "raged on",
      "diagnosed with"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The scandal caused public ______ and demands for justice.",
    "options": [
      "maximum",
      "outrage",
      "assumption",
      "moisture"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Slim-fit jeans are ______ among teenagers this year.",
    "options": [
      "all the rage",
      "do harm to",
      "raged on",
      "feels like"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "After the loss of her pet, she was overwhelmed with ______.",
    "options": [
      "moisture",
      "increase in",
      "rage",
      "grief"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "______, he discovered that the old tree in his backyard had been cut down.",
    "options": [
      "feel like",
      "To his grief",
      "be infected with",
      "diagnosed with"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "She continues to ______ the loss of her close friend.",
    "options": [
      "harm",
      "sob",
      "grieve",
      "diagnosed"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The government's new policies aim to ______ air pollution in urban areas.",
    "options": [
      "continue",
      "moisturize",
      "harm",
      "decrease"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The report highlighted ______ consumer spending during the economic downturn.",
    "options": [
      "the decrease in",
      "outrage",
      "maximum",
      "harm"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Efforts to ______ public awareness about environmental protection have been successful.",
    "options": [
      "grieve",
      "sob",
      "diagnosed",
      "increase"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The recent ______ traffic congestion is mainly due to road construction.",
    "options": [
      "moisture",
      "increase in",
      "harm",
      "grief"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "The chemical spill caused significant ______ to the marine ecosystem.",
    "options": [
      "harm",
      "frequency",
      "per",
      "moisture"
    ],
    "answer": 0,
    "vocabIndex": 34
  },
  {
    "q": "Smoking can seriously ______ your health.",
    "options": [
      "infect",
      "increase",
      "harm",
      "sob"
    ],
    "answer": 2,
    "vocabIndex": 35
  },
  {
    "q": "Polluting factories ______ the environment and human health.",
    "options": [
      "be infected with",
      "raged on",
      "all the rage",
      "do harm to"
    ],
    "answer": 3,
    "vocabIndex": 36
  },
  {
    "q": "Consuming too much sugar is ______ to one's health.",
    "options": [
      "frequent",
      "harmless",
      "harmful",
      "assumed"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "Most spiders are ______ to humans, despite common fears.",
    "options": [
      "harmless",
      "moist",
      "maximum",
      "harmful"
    ],
    "answer": 0,
    "vocabIndex": 38
  },
  {
    "q": "Leaves ______ gently on the surface of the water.",
    "options": [
      "sob",
      "float",
      "harm",
      "moisturize"
    ],
    "answer": 1,
    "vocabIndex": 39
  },
  {
    "q": "After a long week at work, I really ______ taking a long walk in the park.",
    "options": [
      "feel like",
      "feels like",
      "raged on",
      "be infected with"
    ],
    "answer": 0,
    "vocabIndex": 40
  },
  {
    "q": "Sometimes, being a parent ______ a never-ending challenge.",
    "options": [
      "feel like",
      "raged on",
      "be infected with",
      "feels like"
    ],
    "answer": 3,
    "vocabIndex": 41
  },
  {
    "q": "She ______ tears of joy when she heard the good news.",
    "options": [
      "continue",
      "diagnosed",
      "wept",
      "assume"
    ],
    "answer": 2,
    "vocabIndex": 42
  },
  {
    "q": "Overwhelmed by emotion, he began to ______ quietly in the corner.",
    "options": [
      "decrease",
      "sob",
      "float",
      "harm"
    ],
    "answer": 1,
    "vocabIndex": 43
  },
  {
    "q": "The patient was treated immediately for a severe ______.",
    "options": [
      "infection",
      "moisture",
      "harm",
      "per"
    ],
    "answer": 0,
    "vocabIndex": 44
  },
  {
    "q": "Chickenpox is highly ______ and can spread quickly in crowded places.",
    "options": [
      "harmless",
      "minimum",
      "infectious",
      "average"
    ],
    "answer": 2,
    "vocabIndex": 45
  },
  {
    "q": "The doctor ______ her condition as an allergic reaction.",
    "options": [
      "harm",
      "float",
      "moisturize",
      "diagnosed"
    ],
    "answer": 3,
    "vocabIndex": 46
  },
  {
    "q": "He was ______ early-stage diabetes, prompting lifestyle changes.",
    "options": [
      "raged on",
      "diagnosed as",
      "do harm to",
      "feel like"
    ],
    "answer": 1,
    "vocabIndex": 47
  },
  {
    "q": "Several patients in the hospital were ______ pneumonia.",
    "options": [
      "diagnosed as",
      "do harm to",
      "diagnosed with",
      "feels like"
    ],
    "answer": 2,
    "vocabIndex": 48
  }
];

const LOOKUP = {
  "landmark": {
    "pos": "n.",
    "en_def": "a building or place that is easy to recognize and helps you know where you are",
    "cn_def": "地標",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a building or place that is easy to recognize and helps you know where you are",
        "cn_def": "地標"
      }
    ]
  },
  "average": {
    "pos": "n.",
    "en_def": "the result you get by adding amounts together and dividing by the number of amounts",
    "cn_def": "平均",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the result you get by adding amounts together and dividing by the number of amounts",
        "cn_def": "平均"
      },
      {
        "pos": "adj.",
        "en_def": "typical or normal; calculated by adding amounts and dividing by their number",
        "cn_def": "平均的"
      }
    ]
  },
  "maximum": {
    "pos": "n.",
    "en_def": "the largest amount or number that is possible or allowed",
    "cn_def": "最大限度",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the largest amount or number that is possible or allowed",
        "cn_def": "最大限度"
      },
      {
        "pos": "adj.",
        "en_def": "the largest that is possible or allowed",
        "cn_def": "最大的"
      }
    ]
  },
  "minimum": {
    "pos": "adj.",
    "en_def": "the smallest that is possible or allowed",
    "cn_def": "最小限度/最小的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "the smallest that is possible or allowed",
        "cn_def": "最小限度/最小的"
      }
    ]
  },
  "per": {
    "pos": "n.",
    "en_def": "for each",
    "cn_def": "每",
    "combined": [
      {
        "pos": "n.",
        "en_def": "for each",
        "cn_def": "每"
      }
    ]
  },
  "frequency": {
    "pos": "n.",
    "en_def": "the number of times something happens in a period of time",
    "cn_def": "頻率",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the number of times something happens in a period of time",
        "cn_def": "頻率"
      }
    ]
  },
  "frequent": {
    "pos": "adj.",
    "en_def": "happening often",
    "cn_def": "頻繁的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening often",
        "cn_def": "頻繁的"
      }
    ]
  },
  "assume": {
    "pos": "v.",
    "en_def": "to think that something is true without having proof",
    "cn_def": "假設",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to think that something is true without having proof",
        "cn_def": "假設"
      }
    ]
  },
  "assumed": {
    "pos": "adj.",
    "en_def": "believed to be true or real, though not proved",
    "cn_def": "假定的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "believed to be true or real, though not proved",
        "cn_def": "假定的"
      }
    ]
  },
  "assumption": {
    "pos": "n.",
    "en_def": "something you accept as true without proof",
    "cn_def": "假設",
    "combined": [
      {
        "pos": "n.",
        "en_def": "something you accept as true without proof",
        "cn_def": "假設"
      }
    ]
  },
  "infect": {
    "pos": "v.",
    "en_def": "to give a disease to a person, animal or plant",
    "cn_def": "感染",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to give a disease to a person, animal or plant",
        "cn_def": "感染"
      }
    ]
  },
  "be infected with": {
    "pos": "phr.",
    "en_def": "to have caught a disease caused by a virus or bacteria",
    "cn_def": "被…感染",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to have caught a disease caused by a virus or bacteria",
        "cn_def": "被…感染"
      }
    ]
  },
  "moist": {
    "pos": "adj.",
    "en_def": "slightly wet",
    "cn_def": "潮濕的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "slightly wet",
        "cn_def": "潮濕的"
      }
    ]
  },
  "moisture": {
    "pos": "n.",
    "en_def": "very small drops of water in the air or on a surface",
    "cn_def": "濕氣",
    "combined": [
      {
        "pos": "n.",
        "en_def": "very small drops of water in the air or on a surface",
        "cn_def": "濕氣"
      }
    ]
  },
  "moisturize": {
    "pos": "v.",
    "en_def": "to put cream on your skin to stop it from getting dry",
    "cn_def": "保濕",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to put cream on your skin to stop it from getting dry",
        "cn_def": "保濕"
      }
    ]
  },
  "humid": {
    "pos": "adj.",
    "en_def": "(of air or weather) warm and containing a lot of water",
    "cn_def": "潮濕的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "(of air or weather) warm and containing a lot of water",
        "cn_def": "潮濕的"
      }
    ]
  },
  "continue": {
    "pos": "v.",
    "en_def": "to keep doing something or to keep happening without stopping",
    "cn_def": "繼續",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to keep doing something or to keep happening without stopping",
        "cn_def": "繼續"
      }
    ]
  },
  "continuous": {
    "pos": "adj.",
    "en_def": "happening without stopping",
    "cn_def": "連續的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening without stopping",
        "cn_def": "連續的"
      }
    ]
  },
  "continuity": {
    "pos": "n.",
    "en_def": "the fact of continuing without stopping or changing suddenly",
    "cn_def": "連續性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the fact of continuing without stopping or changing suddenly",
        "cn_def": "連續性"
      }
    ]
  },
  "rage": {
    "pos": "n.",
    "en_def": "a feeling of very strong anger that is hard to control",
    "cn_def": "憤怒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a feeling of very strong anger that is hard to control",
        "cn_def": "憤怒"
      },
      {
        "pos": "v.",
        "en_def": "to show that you are very angry",
        "cn_def": "發怒"
      },
      {
        "pos": "v.",
        "en_def": "(of a storm, fire or battle) to continue with great force",
        "cn_def": "激烈進行"
      }
    ]
  },
  "rage on": {
    "pos": "phr.",
    "en_def": "to continue with great force for a long time",
    "cn_def": "繼續激烈進行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to continue with great force for a long time",
        "cn_def": "繼續激烈進行"
      }
    ]
  },
  "raged on": {
    "pos": "phr.",
    "en_def": "to continue with great force for a long time",
    "cn_def": "繼續激烈進行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to continue with great force for a long time",
        "cn_def": "繼續激烈進行"
      }
    ]
  },
  "outrage": {
    "pos": "n.",
    "en_def": "a strong feeling of shock and anger",
    "cn_def": "憤怒",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a strong feeling of shock and anger",
        "cn_def": "憤怒"
      }
    ]
  },
  "all the rage": {
    "pos": "phr.",
    "en_def": "very popular and fashionable at a particular time",
    "cn_def": "非常流行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "very popular and fashionable at a particular time",
        "cn_def": "非常流行"
      }
    ]
  },
  "grief": {
    "pos": "n.",
    "en_def": "very great sadness, especially when someone dies",
    "cn_def": "悲傷",
    "combined": [
      {
        "pos": "n.",
        "en_def": "very great sadness, especially when someone dies",
        "cn_def": "悲傷"
      }
    ]
  },
  "to one's grief": {
    "pos": "phr.",
    "en_def": "used to say that something makes someone very sad",
    "cn_def": "令某人悲傷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used to say that something makes someone very sad",
        "cn_def": "令某人悲傷"
      }
    ]
  },
  "to his grief": {
    "pos": "phr.",
    "en_def": "used to say that something makes someone very sad",
    "cn_def": "令某人悲傷",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "used to say that something makes someone very sad",
        "cn_def": "令某人悲傷"
      }
    ]
  },
  "grieve": {
    "pos": "v.",
    "en_def": "to feel very sad, especially because someone has died",
    "cn_def": "哀悼",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to feel very sad, especially because someone has died",
        "cn_def": "哀悼"
      }
    ]
  },
  "decrease": {
    "pos": "v.",
    "en_def": "to become or make something smaller in amount or number",
    "cn_def": "減少",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make something smaller in amount or number",
        "cn_def": "減少"
      }
    ]
  },
  "the decrease in": {
    "pos": "n.",
    "en_def": "a fall in the amount or number of something",
    "cn_def": "減少",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a fall in the amount or number of something",
        "cn_def": "減少"
      }
    ]
  },
  "increase": {
    "pos": "v.",
    "en_def": "to become or make something larger in amount or number",
    "cn_def": "增加",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to become or make something larger in amount or number",
        "cn_def": "增加"
      }
    ]
  },
  "increase in": {
    "pos": "n.",
    "en_def": "a rise in the amount or number of something",
    "cn_def": "增加",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a rise in the amount or number of something",
        "cn_def": "增加"
      }
    ]
  },
  "harm": {
    "pos": "n.",
    "en_def": "damage or injury caused to a person or thing",
    "cn_def": "傷害",
    "combined": [
      {
        "pos": "n.",
        "en_def": "damage or injury caused to a person or thing",
        "cn_def": "傷害"
      },
      {
        "pos": "v.",
        "en_def": "to hurt someone or damage something",
        "cn_def": "傷害"
      }
    ]
  },
  "do harm to": {
    "pos": "phr.",
    "en_def": "to hurt or damage someone or something",
    "cn_def": "對...造成傷害",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to hurt or damage someone or something",
        "cn_def": "對...造成傷害"
      }
    ]
  },
  "harmful": {
    "pos": "adj.",
    "en_def": "causing damage or injury",
    "cn_def": "有害的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing damage or injury",
        "cn_def": "有害的"
      }
    ]
  },
  "harmless": {
    "pos": "adj.",
    "en_def": "not able or likely to cause damage or injury",
    "cn_def": "無害的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "not able or likely to cause damage or injury",
        "cn_def": "無害的"
      }
    ]
  },
  "float": {
    "pos": "v.",
    "en_def": "to stay on the surface of a liquid or move slowly through the air",
    "cn_def": "漂浮",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to stay on the surface of a liquid or move slowly through the air",
        "cn_def": "漂浮"
      }
    ]
  },
  "feel like": {
    "pos": "phr.",
    "en_def": "to want to do something",
    "cn_def": "想要做某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to want to do something",
        "cn_def": "想要做某事"
      },
      {
        "pos": "phr.",
        "en_def": "to seem to be something; to give the impression of",
        "cn_def": "像是"
      }
    ]
  },
  "feel like + ving": {
    "pos": "phr.",
    "en_def": "to want to do something",
    "cn_def": "想要做某事",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to want to do something",
        "cn_def": "想要做某事"
      }
    ]
  },
  "feels like": {
    "pos": "phr.",
    "en_def": "to seem to be something; to give the impression of",
    "cn_def": "像是",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to seem to be something; to give the impression of",
        "cn_def": "像是"
      }
    ]
  },
  "weep": {
    "pos": "v.",
    "en_def": "to cry, usually because you are sad",
    "cn_def": "哭泣",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cry, usually because you are sad",
        "cn_def": "哭泣"
      }
    ]
  },
  "wept": {
    "pos": "v.",
    "en_def": "to cry, usually because you are sad",
    "cn_def": "哭泣",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cry, usually because you are sad",
        "cn_def": "哭泣"
      }
    ]
  },
  "sob": {
    "pos": "v.",
    "en_def": "to cry noisily, taking sudden short breaths",
    "cn_def": "啜泣",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to cry noisily, taking sudden short breaths",
        "cn_def": "啜泣"
      }
    ]
  },
  "infection": {
    "pos": "n.",
    "en_def": "an illness caused by bacteria or a virus",
    "cn_def": "感染",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an illness caused by bacteria or a virus",
        "cn_def": "感染"
      }
    ]
  },
  "infectious": {
    "pos": "adj.",
    "en_def": "(of a disease) able to be passed from one person to another",
    "cn_def": "傳染的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "(of a disease) able to be passed from one person to another",
        "cn_def": "傳染的"
      }
    ]
  },
  "diagnosed": {
    "pos": "v.",
    "en_def": "to find out and say what illness someone has",
    "cn_def": "診斷",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to find out and say what illness someone has",
        "cn_def": "診斷"
      }
    ]
  },
  "diagnose": {
    "pos": "v.",
    "en_def": "to find out and say what illness someone has",
    "cn_def": "診斷",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to find out and say what illness someone has",
        "cn_def": "診斷"
      }
    ]
  },
  "diagnosed as": {
    "pos": "phr.",
    "en_def": "to be found by a doctor to be in a particular condition",
    "cn_def": "被診斷為...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be found by a doctor to be in a particular condition",
        "cn_def": "被診斷為..."
      }
    ]
  },
  "be diagnosed as": {
    "pos": "phr.",
    "en_def": "to be found by a doctor to be in a particular condition",
    "cn_def": "被診斷為...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be found by a doctor to be in a particular condition",
        "cn_def": "被診斷為..."
      }
    ]
  },
  "diagnosed with": {
    "pos": "phr.",
    "en_def": "to be told by a doctor that you have a particular illness",
    "cn_def": "被診斷出患有...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be told by a doctor that you have a particular illness",
        "cn_def": "被診斷出患有..."
      }
    ]
  },
  "be diagnosed with": {
    "pos": "phr.",
    "en_def": "to be told by a doctor that you have a particular illness",
    "cn_def": "被診斷出患有...",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "to be told by a doctor that you have a particular illness",
        "cn_def": "被診斷出患有..."
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
