// Unit 18 Quiz Data: journey – guided us to
// Converted for this site by the scripts in tools/.
const QUIZ_CONFIG = {
  "groupName": "LiveABC 2-4 Advanced U18 - journey – guided us to",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "journey",
    "pos": "n.",
    "cn_def": "旅程、旅行",
    "en_def": "an act of traveling from one long distance to another.",
    "sentence": "The {{BLANK}} from the capital city to the remote village took over twelve hours by bus along winding mountain roads.",
    "cn": "從首都到偏遠村莊的旅程沿著蜿蜒的山路乘公共汽車需要十二個多小時。"
  },
  {
    "word": "journeyed",
    "pos": "v.",
    "cn_def": "旅行、徒步旅行",
    "en_def": "to travel across a long distance or wide region.",
    "sentence": "The explorers {{BLANK}} for three weeks through dense jungle before finally reaching the ancient ruins they sought.",
    "cn": "探險家們在茂密的叢林中旅行了三週，最終到達了他們尋找的古代遺跡。"
  },
  {
    "word": "journal",
    "pos": "n.",
    "cn_def": "日誌、期刊",
    "en_def": "a daily diary book recording real personal events.",
    "sentence": "She kept a detailed travel {{BLANK}} during her year abroad, recording her observations, feelings, and daily experiences.",
    "cn": "她在海外那一年保留了詳細的旅行日誌，記錄她的觀察、感受和日常經歷。"
  },
  {
    "word": "journey around the world",
    "pos": "phr.",
    "cn_def": "環球旅程",
    "en_def": "a global travel track starting from a base city.",
    "sentence": "His {{BLANK}} took two years and included stops in over thirty countries across five continents.",
    "cn": "他的環球旅程花了兩年時間，途經五大洲三十多個國家。"
  },
  {
    "word": "journeyed up the river",
    "pos": "phr.",
    "cn_def": "沿河逆流而上",
    "en_def": "a group traveling on water paths across three days.",
    "sentence": "The research team {{BLANK}} for four days before reaching the remote wetland habitat they were studying.",
    "cn": "研究團隊沿河逆流而上行駛了四天，才到達他們正在研究的偏遠濕地棲息地。"
  },
  {
    "word": "travel",
    "pos": "v.",
    "cn_def": "旅遊、旅行（總稱）",
    "en_def": "the general activity of moving across distinct towns.",
    "sentence": "She loves to {{BLANK}} and has visited over twenty countries, always choosing to stay with local families rather than hotels.",
    "cn": "她喜歡旅行，已經去過二十多個國家，總是選擇與當地家庭住在一起，而不是住酒店。"
  },
  {
    "word": "trip",
    "pos": "n.",
    "cn_def": "出遊、趟旅行（短程等）",
    "en_def": "a brief explicit journey to a town and back again.",
    "sentence": "The school organised a day {{BLANK}} to the science museum for all students in the seventh grade next Thursday.",
    "cn": "學校為七年級的所有學生組織了下週四前往科學博物館的一日遊。"
  },
  {
    "word": "Wild",
    "pos": "adj.",
    "cn_def": "野生的、未馴化的",
    "en_def": "living or growing in nature; not managed by humans.",
    "sentence": "{{BLANK}} animals in the national park are protected by law, and visitors are strictly forbidden from feeding them.",
    "cn": "國家公園中的野生動物受法律保護，嚴格禁止遊客餵食牠們。"
  },
  {
    "word": "wild",
    "pos": "n.",
    "cn_def": "荒野、自然界",
    "en_def": "a natural state or region untouched by urban growth.",
    "sentence": "The documentary showed the challenges that young elephants face when learning to survive in the {{BLANK}}.",
    "cn": "這部紀錄片展示了年輕象在學習在荒野中生存時所面臨的挑戰。"
  },
  {
    "word": "wildlife",
    "pos": "n.",
    "cn_def": "野生生物",
    "en_def": "wild animals, birds, and insects living in a zone.",
    "sentence": "The region is home to incredibly diverse {{BLANK}}, including rare birds, reptiles, and dozens of mammal species.",
    "cn": "這個地區擁有極其多樣的野生生物，包括稀有鳥類、爬行動物和數十種哺乳動物。"
  },
  {
    "word": "go wild",
    "pos": "phr.",
    "cn_def": "瘋狂、失控、雀躍",
    "en_def": "fans screaming with extreme excitement after a win.",
    "sentence": "The crowd {{BLANK}} when the home team scored the winning goal in the final seconds of the match.",
    "cn": "當主隊在比賽最後幾秒鐘打進致勝球時，人群雀躍狂歡。"
  },
  {
    "word": "in the wild",
    "pos": "phr.",
    "cn_def": "在野外、在自然環境中",
    "en_def": "locating fresh strawberries growing deep inside forests.",
    "sentence": "These wolves were born in captivity but are now being prepared for release back to live {{BLANK}}.",
    "cn": "這些狼出生於人工飼養環境，現在正在為放歸野外做準備。"
  },
  {
    "word": "return to the wild",
    "pos": "phr.",
    "cn_def": "放歸大自然",
    "en_def": "releasing a pet bird back into its natural habitat.",
    "sentence": "After months of rehabilitation, the injured eagle was strong enough to {{BLANK}}.",
    "cn": "經過數月的康復治療，受傷的老鷹已經足夠強壯，可以放歸大自然。"
  },
  {
    "word": "overseas",
    "pos": "adv.",
    "cn_def": "在海外、向海外",
    "en_def": "in or to a foreign country across ocean channels.",
    "sentence": "Her company sent her {{BLANK}} for a two-year assignment in Singapore, which was both exciting and challenging.",
    "cn": "她的公司派她去新加坡海外工作兩年，這既令人興奮又具有挑戰性。"
  },
  {
    "word": "overseas",
    "pos": "adj.",
    "cn_def": "海外的、國外的",
    "en_def": "connected with foreign countries across the sea.",
    "sentence": "The university has strong {{BLANK}} partnerships with institutions in Europe, Asia, and North America.",
    "cn": "這所大學與歐洲、亞洲和北美的機構建立了強大的海外合作關係。"
  },
  {
    "word": "move overseas",
    "pos": "phr.",
    "cn_def": "搬到海外",
    "en_def": "relocating your entire home base to a foreign state.",
    "sentence": "They decided to {{BLANK}} after retirement and chose Portugal for its warm climate and low cost of living.",
    "cn": "他們決定退休後搬到海外，因其溫暖的氣候和較低的生活成本而選擇了葡萄牙。"
  },
  {
    "word": "overseas trips",
    "pos": "phr.",
    "cn_def": "出國旅行、海外行程",
    "en_def": "business travel routes requiring passport checks.",
    "sentence": "Her job requires frequent {{BLANK}}, and she travels to at least six different countries every year for work.",
    "cn": "她的工作需要頻繁的出國旅行，每年至少前往六個不同的國家出差。"
  },
  {
    "word": "occurred",
    "pos": "v.",
    "cn_def": "發生、出現",
    "en_def": "to happen, take place, or exist in a spot.",
    "sentence": "The earthquake {{BLANK}} in the early hours of the morning when most residents were still asleep in their homes.",
    "cn": "地震在大多數居民還在家中熟睡的清晨發生。"
  },
  {
    "word": "occurrence",
    "pos": "n.",
    "cn_def": "發生、發生的事件",
    "en_def": "an event or instance of something happening cleanly.",
    "sentence": "Flooding in this low-lying area is not a rare {{BLANK}} — it happens almost every time there is heavy rainfall.",
    "cn": "這個低窪地區的洪水並非罕見事件——幾乎每次大雨都會發生。"
  },
  {
    "word": "occurred to",
    "pos": "phr.",
    "cn_def": "某人想到…",
    "en_def": "a sudden thought or idea entering an agent's mind.",
    "sentence": "It suddenly {{BLANK}} her that she had left the oven on when she was halfway to the train station.",
    "cn": "當她走到火車站一半路程時，她突然想到她把烤箱忘記開著了。"
  },
  {
    "word": "It occurs to me that",
    "pos": "phr.",
    "cn_def": "我突然想到…",
    "en_def": "suddenly realizing that a peer's talk was serious.",
    "sentence": "{{BLANK}} we have never actually discussed what happens if the project runs over budget.",
    "cn": "我突然想到，我們從來沒有真正討論過如果項目超出預算會怎樣。"
  },
  {
    "word": "painful",
    "pos": "adj.",
    "cn_def": "痛苦的、疼痛的",
    "en_def": "causing physical or emotional suffering and hurt.",
    "sentence": "The end of a close friendship can be just as {{BLANK}} as a physical injury, especially when there is no clear reason.",
    "cn": "親密友誼的結束可能和身體傷害一樣痛苦，尤其是在沒有明確原因的情況下。"
  },
  {
    "word": "pain",
    "pos": "n.",
    "cn_def": "疼痛、痛苦",
    "en_def": "a physical feeling of hurt caused by a severe cut.",
    "sentence": "She gritted her teeth through the {{BLANK}} and finished the final lap of the race before collapsing at the finish line.",
    "cn": "她咬牙忍痛完成了比賽的最後一圈，然後在終點線倒下。"
  },
  {
    "word": "painfully",
    "pos": "adv.",
    "cn_def": "痛苦地、極度地",
    "en_def": "in a very distressing or extremely clear manner.",
    "sentence": "It was {{BLANK}} obvious to everyone in the room that the speaker had not prepared adequately for the presentation.",
    "cn": "對房間裡的每個人來說，演講者沒有充分準備這次演講是極為明顯的。"
  },
  {
    "word": "painful cut",
    "pos": "phr.",
    "cn_def": "會痛的傷口",
    "en_def": "a skin wound that hurts badly despite looking minor.",
    "sentence": "She got a {{BLANK}} on her hand while cooking and had to stop and wash it under cold running water.",
    "cn": "她在做飯時手上受了一道會痛的傷口，不得不停下來在冷水下沖洗。"
  },
  {
    "word": "intensive",
    "pos": "adj.",
    "cn_def": "密集的、精深的",
    "en_def": "involving a lot of effort or work within brief eras.",
    "sentence": "The {{BLANK}} language course ran for eight hours a day for six weeks, and students made remarkable progress.",
    "cn": "這門密集語言課程每天進行八小時，為期六週，學生們取得了顯著的進步。"
  },
  {
    "word": "intensively",
    "pos": "adv.",
    "cn_def": "密集地",
    "en_def": "handling tasks with high focus and rapid speed steps.",
    "sentence": "The athletes trained {{BLANK}} for three months leading up to the international competition to peak at the right time.",
    "cn": "運動員在國際比賽前三個月密集訓練，以便在適當的時候達到最佳狀態。"
  },
  {
    "word": "intensive meetings",
    "pos": "phr.",
    "cn_def": "密集會議",
    "en_def": "back-to-back corporate talks to finalize a trade deal.",
    "sentence": "After three days of {{BLANK}}, the negotiating teams finally reached an agreement on the trade terms.",
    "cn": "經過三天的密集會議後，談判團隊終於就貿易條款達成了協議。"
  },
  {
    "word": "intensive training",
    "pos": "phr.",
    "cn_def": "密集訓練",
    "en_def": "a short, highly packed skill learning master camp.",
    "sentence": "New recruits underwent four weeks of {{BLANK}} before being assigned to their first posts in the field.",
    "cn": "新兵在被分配到野外的第一個崗位之前，接受了四週的密集訓練。"
  },
  {
    "word": "event",
    "pos": "n.",
    "cn_def": "事件、重大活動",
    "en_def": "a highly important social gathering or happening.",
    "sentence": "The charity {{BLANK}} raised over fifty thousand dollars in a single evening, exceeding the organisers' expectations.",
    "cn": "這場慈善活動在一個晚上籌集了超過五萬元，超出了主辦方的預期。"
  },
  {
    "word": "event took place",
    "pos": "phr.",
    "cn_def": "活動舉行",
    "en_def": "a wedding celebration occurring on a specific date.",
    "sentence": "The outdoor festival {{BLANK}} in the city park last weekend and attracted over ten thousand visitors.",
    "cn": "上週末，戶外節日在城市公園舉行，吸引了超過一萬名遊客。"
  },
  {
    "word": "major",
    "pos": "adj.",
    "cn_def": "主要的、重大的",
    "en_def": "highly important, large, or serious in scale.",
    "sentence": "The discovery of clean water sources underground was a {{BLANK}} breakthrough for the drought-affected communities in the region.",
    "cn": "地下清潔水源的發現對該地區受乾旱影響的社區來說是一個重大突破。"
  },
  {
    "word": "major",
    "pos": "v.",
    "cn_def": "主修",
    "en_def": "to specialize in a specific academic field at college.",
    "sentence": "She decided to {{BLANK}} in environmental science because she wanted to pursue a career in conservation and policy.",
    "cn": "她決定主修環境科學，因為她想從事保育和政策方面的職業。"
  },
  {
    "word": "major mistakes",
    "pos": "phr.",
    "cn_def": "重大錯誤",
    "en_def": "severe errors inside an essay that catch eyes.",
    "sentence": "The engineer reviewed the design plans carefully to identify any {{BLANK}} before construction work began.",
    "cn": "工程師在建設工作開始之前仔細審查了設計方案，以識別任何重大錯誤。"
  },
  {
    "word": "major part",
    "pos": "phr.",
    "cn_def": "主要部分",
    "en_def": "listening skills standing as a baseline core of language.",
    "sentence": "Active listening plays a {{BLANK}} in effective communication, yet it is often the most overlooked skill.",
    "cn": "積極傾聽在有效溝通中起著主要部分的作用，然而它往往是最被忽視的技能。"
  },
  {
    "word": "majoring in business",
    "pos": "phr.",
    "cn_def": "主修商業管理",
    "en_def": "a student focusing entirely on management science.",
    "sentence": "She is {{BLANK}} and hopes to start her own company after graduating from university.",
    "cn": "她正在主修商業管理，希望大學畢業後創辦自己的公司。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "次要的、微小的",
    "en_def": "small, low, or non-serious; tracking zero risks.",
    "sentence": "The damage to the car was relatively {{BLANK}}, so she decided to pay for the repairs herself rather than claim insurance.",
    "cn": "汽車的損壞相對次要，所以她決定自己支付維修費用，而不是申請保險。"
  },
  {
    "word": "examination",
    "pos": "n.",
    "cn_def": "考試、檢查、審查",
    "en_def": "an official test checking your knowledge or health.",
    "sentence": "Students must register for the final {{BLANK}} at least two weeks in advance or they will not be permitted to sit it.",
    "cn": "學生必須至少提前兩週報名參加期末考試，否則將不被允許參加。"
  },
  {
    "word": "examined",
    "pos": "v.",
    "cn_def": "檢查、審查、考試",
    "en_def": "to check an object meticulously to find flaws.",
    "sentence": "The doctor {{BLANK}} the patient thoroughly and ordered several tests before making a preliminary diagnosis.",
    "cn": "醫生徹底檢查了病人，並在做出初步診斷之前下令進行幾項測試。"
  },
  {
    "word": "math examination",
    "pos": "phr.",
    "cn_def": "數學考試",
    "en_def": "a two hour academic test tracking arithmetic skills.",
    "sentence": "She stayed up until midnight revising for the {{BLANK}} the next morning and felt well-prepared.",
    "cn": "她為第二天早上的數學考試複習到午夜，感到準備充分。"
  },
  {
    "word": "medical examination",
    "pos": "phr.",
    "cn_def": "醫療檢查、健康檢查",
    "en_def": "a clinical checkup run by doctors to track health.",
    "sentence": "All new employees are required to undergo a full {{BLANK}} before their first day at the company.",
    "cn": "所有新員工在公司第一天工作之前，都需要接受全面的醫療檢查。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試（examination的簡稱）",
    "en_def": "a short casual word for an academic test unit.",
    "sentence": "She felt much more relaxed after the {{BLANK}} than she expected, because the questions matched exactly what she had studied.",
    "cn": "考試後她感到比預期輕鬆得多，因為問題與她所學的內容完全吻合。"
  },
  {
    "word": "frequent",
    "pos": "adj.",
    "cn_def": "頻繁的、經常的",
    "en_def": "happening or done very often across brief intervals.",
    "sentence": "She made {{BLANK}} visits to the doctor throughout the winter because she kept catching colds one after another.",
    "cn": "整個冬天她頻繁地去看醫生，因為她不斷地連續感冒。"
  },
  {
    "word": "frequents",
    "pos": "v.",
    "cn_def": "常去、時常出沒於",
    "en_def": "to visit a specific neighborhood spot regularly.",
    "sentence": "He {{BLANK}} the small café on the corner every morning before work and always orders the same black coffee.",
    "cn": "他每天早上上班前常去街角的小咖啡館，總是點同樣的黑咖啡。"
  },
  {
    "word": "frequently",
    "pos": "adv.",
    "cn_def": "頻繁地、經常地",
    "en_def": "regularly; tracking a high routine repetition rate.",
    "sentence": "She {{BLANK}} misplaces her keys and has started leaving a spare set with her neighbour as a backup solution.",
    "cn": "她頻繁地找不到鑰匙，已經開始把備用鑰匙放在鄰居那裡作為備用解決方案。"
  },
  {
    "word": "frequency",
    "pos": "n.",
    "cn_def": "頻率、次數",
    "en_def": "the count of times an event repeats in a duration.",
    "sentence": "The {{BLANK}} of her headaches increased significantly after she started working longer hours at her new job.",
    "cn": "她開始在新工作中工作更長時間後，頭痛的頻率顯著增加。"
  },
  {
    "word": "frequent absences",
    "pos": "phr.",
    "cn_def": "頻繁缺席",
    "en_def": "a pupil repeatedly missing school days recently.",
    "sentence": "The teacher expressed concern about the student's {{BLANK}} and arranged a meeting with her parents.",
    "cn": "老師對這位學生的頻繁缺席表示擔憂，並安排了與她父母的會面。"
  },
  {
    "word": "frequent the courts",
    "pos": "phr.",
    "cn_def": "常去球場",
    "en_def": "boys regularly hanging around local basketball spots.",
    "sentence": "He used to {{BLANK}} every evening after school and that is where he developed his basketball skills.",
    "cn": "他過去每天放學後常去球場，正是在那裡他培養了自己的籃球技能。"
  },
  {
    "word": "exactly",
    "pos": "adv.",
    "cn_def": "確切地、正是、精準地",
    "en_def": "precisely; tracked with 100% perfect accuracy.",
    "sentence": "The train arrived at {{BLANK}} nine o'clock, which gave them just enough time to grab a coffee before boarding.",
    "cn": "火車確切地在九點到達，給了他們剛好足夠的時間在登車前喝杯咖啡。"
  },
  {
    "word": "exact",
    "pos": "adj.",
    "cn_def": "確切的、精確的",
    "en_def": "completely correct; matching digits with zero gaps.",
    "sentence": "Could you give me the {{BLANK}} measurements of the room so I can order the correct size of carpet?",
    "cn": "你能給我房間的確切尺寸嗎，這樣我就可以訂購正確尺寸的地毯了？"
  },
  {
    "word": "exactly what I need",
    "pos": "phr.",
    "cn_def": "正是我所需要的",
    "en_def": "a full day of rest matching your core desires perfectly.",
    "sentence": "A quiet weekend at home with good food and a good book is {{BLANK}} after such a stressful week.",
    "cn": "在如此緊張的一週之後，在家度過一個安靜的週末，享用美食和好書，正是我所需要的。"
  },
  {
    "word": "react",
    "pos": "v.",
    "cn_def": "做出反應、反應",
    "en_def": "to behave in a specific way due to an external action.",
    "sentence": "She was not sure how he would {{BLANK}} to the surprise news, but he seemed genuinely pleased when she told him.",
    "cn": "她不確定他會如何對這個驚喜消息做出反應，但當她告訴他時，他似乎真的很高興。"
  },
  {
    "word": "reaction",
    "pos": "n.",
    "cn_def": "反應",
    "en_def": "an outward behavior or chemical change from a trigger.",
    "sentence": "His immediate {{BLANK}} to winning the award was to burst into tears and thank his parents for their lifelong support.",
    "cn": "他對獲獎的即時反應是喜極而泣，並感謝父母一生的支持。"
  },
  {
    "word": "overreacted",
    "pos": "v.",
    "cn_def": "反應過度",
    "en_def": "to show an excess, yelling panic stance over minor news.",
    "sentence": "She admitted that she had {{BLANK}} to the situation and apologised for making the problem seem bigger than it was.",
    "cn": "她承認自己對這種情況反應過度，並為使問題看起來比實際更大而道歉。"
  },
  {
    "word": "react to loud noise",
    "pos": "phr.",
    "cn_def": "對大聲響做出反應",
    "en_def": "a pet dog running away instantly due to a bang sound.",
    "sentence": "Babies naturally {{BLANK}} by startling and crying, as it is an instinctive safety response.",
    "cn": "嬰兒自然地對大聲響做出反應，表現為驚跳和哭泣，因為這是一種本能的安全反應。"
  },
  {
    "word": "position",
    "pos": "n.",
    "cn_def": "位置、地方",
    "en_def": "the explicit place where an object sits or stands.",
    "sentence": "She adjusted the mirror into the correct {{BLANK}} so that she could see clearly without turning her head while driving.",
    "cn": "她把鏡子調整到正確的位置，這樣她在開車時就可以清楚地看到，而不必轉動頭部。"
  },
  {
    "word": "position",
    "pos": "n.",
    "cn_def": "職位、地位、處境",
    "en_def": "a high rank or specialized role within a company.",
    "sentence": "She applied for the {{BLANK}} of marketing director and was thrilled when she was invited for a second interview.",
    "cn": "她申請了市場總監的職位，當她被邀請參加第二次面試時，她感到非常興奮。"
  },
  {
    "word": "positioned",
    "pos": "v.",
    "cn_def": "安置、使處於某位置",
    "en_def": "to build or place an asset down in a specific spot.",
    "sentence": "The photographer {{BLANK}} her subjects carefully in front of the waterfall to capture the best possible shot.",
    "cn": "攝影師仔細地將她的拍攝對象安置在瀑布前，以捕捉最好的照片。"
  },
  {
    "word": "comfortable position",
    "pos": "phr.",
    "cn_def": "舒服的姿勢/位置",
    "en_def": "a relaxing posture used while sitting on a couch.",
    "sentence": "She found a {{BLANK}} on the sofa and settled in to watch the film with a warm blanket over her.",
    "cn": "她在沙發上找到了一個舒服的位置，裹著溫暖的毯子，安頓下來觀看電影。"
  },
  {
    "word": "high position",
    "pos": "phr.",
    "cn_def": "高階職位",
    "en_def": "holding an executive director role inside a firm.",
    "sentence": "After twenty years with the company, she finally achieved a {{BLANK}} in senior management.",
    "cn": "在公司工作二十年後，她終於在高層管理中獲得了一個高階職位。"
  },
  {
    "word": "in a position to",
    "pos": "phr.",
    "cn_def": "有能力…、處於可以…的地位",
    "en_def": "tracking enough cash or power to take a vacation.",
    "sentence": "After saving for two years, he was finally {{BLANK}} afford to buy his own apartment in the city.",
    "cn": "存了兩年錢後，他終於有能力在城市裡買下自己的公寓。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "記憶力、記憶",
    "en_def": "the brain's internal ability to store and recall data.",
    "sentence": "She has an excellent {{BLANK}} for names and faces, which makes her very effective at building professional relationships.",
    "cn": "她對名字和面孔有出色的記憶力，這使她在建立職業關係方面非常有效。"
  },
  {
    "word": "memorize",
    "pos": "v.",
    "cn_def": "記住、背誦",
    "en_def": "to commit words to mind systematically via study.",
    "sentence": "She used flashcards to {{BLANK}} the vocabulary list and tested herself every evening before going to sleep.",
    "cn": "她用卡片來背誦詞彙表，每天晚上睡覺前自我測試。"
  },
  {
    "word": "trouble with memory",
    "pos": "phr.",
    "cn_def": "記憶力有問題",
    "en_def": "an old citizen starting to face minor forgetful gaps.",
    "sentence": "As she got older, she began to experience some {{BLANK}} and would occasionally forget recent events.",
    "cn": "隨著年齡增長，她開始出現一些記憶力方面的問題，偶爾會忘記最近發生的事情。"
  },
  {
    "word": "in memory of",
    "pos": "phr.",
    "cn_def": "為了紀念…",
    "en_def": "building a statue to honor a late mayor pioneer.",
    "sentence": "A beautiful garden was planted {{BLANK}} the teacher who had inspired hundreds of students over her career.",
    "cn": "為了紀念這位在職業生涯中激勵了數百名學生的老師，人們種植了一座美麗的花園。"
  },
  {
    "word": "naturally",
    "pos": "adv.",
    "cn_def": "自然地、天生功能上",
    "en_def": "as a normal organic result; without artificial help.",
    "sentence": "She was {{BLANK}} gifted at languages and picked up Spanish without formal lessons after just a few months abroad.",
    "cn": "她天生擅長語言，在海外僅幾個月後，沒有正式課程就學會了西班牙語。"
  },
  {
    "word": "nature",
    "pos": "n.",
    "cn_def": "大自然、天性",
    "en_def": "the physical world of wild plants, trees, and air.",
    "sentence": "Spending time in {{BLANK}} has been shown to reduce stress levels and improve both mental and physical wellbeing.",
    "cn": "在大自然中度過時光已被證明可以降低壓力水平，並改善心理和身體健康。"
  },
  {
    "word": "natural",
    "pos": "adj.",
    "cn_def": "自然的、天生的",
    "en_def": "normal in nature; tracking zero chemical additives.",
    "sentence": "She prefers to use {{BLANK}} skincare products made from plant-based ingredients rather than those with synthetic chemicals.",
    "cn": "她更喜歡使用由植物成分製成的天然護膚產品，而不是含有合成化學品的產品。"
  },
  {
    "word": "come naturally",
    "pos": "phr.",
    "cn_def": "天生具備、信手拈來",
    "en_def": "a skill like piano play flowing easily without hard practice.",
    "sentence": "Public speaking does not {{BLANK}} for everyone, but with practice it becomes much less intimidating.",
    "cn": "公開演講並非人人都能信手拈來，但通過練習，它會變得不那麼令人畏懼。"
  },
  {
    "word": "guided",
    "pos": "v.",
    "cn_def": "引導、帶路、指導",
    "en_def": "to show someone the right path or process to follow.",
    "sentence": "The experienced teacher {{BLANK}} her students through the complex research process step by step with great patience.",
    "cn": "經驗豐富的老師以極大的耐心，一步一步地引導她的學生完成複雜的研究過程。"
  },
  {
    "word": "guide",
    "pos": "n.",
    "cn_def": "導遊、指南",
    "en_def": "a professional agent who shows travelers around town.",
    "sentence": "They hired a local {{BLANK}} who spoke both English and Mandarin to take them around the historic old city district.",
    "cn": "他們聘請了一位會說英語和普通話的當地導遊，帶他們遊覽歷史悠久的老城區。"
  },
  {
    "word": "tour guide",
    "pos": "phr.",
    "cn_def": "導遊",
    "en_def": "a professional translator running regional transits.",
    "sentence": "The {{BLANK}} explained the history of each temple clearly and answered every question the tourists had.",
    "cn": "導遊清晰地解釋了每座寺廟的歷史，並回答了遊客的每個問題。"
  },
  {
    "word": "guidelines",
    "pos": "n.",
    "cn_def": "指南、準則、方針",
    "en_def": "an official baseline rule detailing operational steps.",
    "sentence": "The government issued new health {{BLANK}} advising people to wear masks in crowded indoor public spaces.",
    "cn": "政府發布了新的健康準則，建議人們在擁擠的室內公共場所佩戴口罩。"
  },
  {
    "word": "guided us to",
    "pos": "phr.",
    "cn_def": "引導我們去…",
    "en_def": "a local police officer leading travelers to a post office.",
    "sentence": "The friendly local farmer {{BLANK}} his barn and showed us the newborn lambs sheltering inside.",
    "cn": "友善的當地農夫引導我們去他的穀倉，向我們展示了在裡面避寒的新生羔羊。"
  }
];

const MCQS = [
  {
    "q": "The ______ from the capital city to the remote village took over twelve hours by bus along winding mountain roads.",
    "options": [
      "position",
      "wildlife",
      "journey",
      "frequency"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The explorers ______ for three weeks through dense jungle before finally reaching the ancient ruins they sought.",
    "options": [
      "journeyed",
      "guided",
      "positioned",
      "occurred"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "She kept a detailed travel ______ during her year abroad, recording her observations, feelings, and daily experiences.",
    "options": [
      "trip",
      "journal",
      "examination",
      "position"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "His ______ took two years and included stops in over thirty countries across five continents.",
    "options": [
      "occurred to",
      "It occurs to me that",
      "math examination",
      "journey around the world"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The research team ______ for four days before reaching the remote wetland habitat they were studying.",
    "options": [
      "journeyed up the river",
      "majoring in business",
      "comfortable position",
      "painful cut"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "She loves to ______ and has visited over twenty countries, always choosing to stay with local families rather than hotels.",
    "options": [
      "overreacted",
      "travel",
      "positioned",
      "occurred"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The school organised a day ______ to the science museum for all students in the seventh grade next Thursday.",
    "options": [
      "guide",
      "occurrence",
      "trip",
      "nature"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "______ animals in the national park are protected by law, and visitors are strictly forbidden from feeding them.",
    "options": [
      "natural",
      "exact",
      "frequent",
      "Wild"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The documentary showed the challenges that young elephants face when learning to survive in the ______.",
    "options": [
      "wild",
      "pain",
      "event",
      "wildlife"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The region is home to incredibly diverse ______, including rare birds, reptiles, and dozens of mammal species.",
    "options": [
      "journal",
      "wild",
      "exam",
      "wildlife"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The crowd ______ when the home team scored the winning goal in the final seconds of the match.",
    "options": [
      "medical examination",
      "trouble with memory",
      "go wild",
      "move overseas"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "These wolves were born in captivity but are now being prepared for release back to live ______.",
    "options": [
      "comfortable position",
      "in the wild",
      "frequent the courts",
      "in memory of"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "After months of rehabilitation, the injured eagle was strong enough to ______.",
    "options": [
      "majoring in business",
      "painful cut",
      "return to the wild",
      "math examination"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Her company sent her ______ for a two-year assignment in Singapore, which was both exciting and challenging.",
    "options": [
      "naturally",
      "overseas",
      "painfully",
      "intensively"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The university has strong ______ partnerships with institutions in Europe, Asia, and North America.",
    "options": [
      "overseas",
      "frequent",
      "intensive",
      "major"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "They decided to ______ after retirement and chose Portugal for its warm climate and low cost of living.",
    "options": [
      "tour guide",
      "react to loud noise",
      "in the wild",
      "move overseas"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Her job requires frequent ______, and she travels to at least six different countries every year for work.",
    "options": [
      "occurred to",
      "It occurs to me that",
      "overseas trips",
      "journeyed up the river"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "The earthquake ______ in the early hours of the morning when most residents were still asleep in their homes.",
    "options": [
      "travel",
      "occurred",
      "frequents",
      "memorize"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Flooding in this low-lying area is not a rare ______ — it happens almost every time there is heavy rainfall.",
    "options": [
      "occurrence",
      "nature",
      "wild",
      "trip"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "It suddenly ______ her that she had left the oven on when she was halfway to the train station.",
    "options": [
      "intensive meetings",
      "frequent the courts",
      "majoring in business",
      "occurred to"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "______ we have never actually discussed what happens if the project runs over budget.",
    "options": [
      "It occurs to me that",
      "painful cut",
      "journey around the world",
      "overseas trips"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The end of a close friendship can be just as ______ as a physical injury, especially when there is no clear reason.",
    "options": [
      "intensive",
      "painful",
      "natural",
      "frequent"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "She gritted her teeth through the ______ and finished the final lap of the race before collapsing at the finish line.",
    "options": [
      "event",
      "frequency",
      "pain",
      "guidelines"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "It was ______ obvious to everyone in the room that the speaker had not prepared adequately for the presentation.",
    "options": [
      "intensively",
      "overseas",
      "naturally",
      "painfully"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "She got a ______ on her hand while cooking and had to stop and wash it under cold running water.",
    "options": [
      "move overseas",
      "trouble with memory",
      "painful cut",
      "comfortable position"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The ______ language course ran for eight hours a day for six weeks, and students made remarkable progress.",
    "options": [
      "painful",
      "intensive",
      "overseas",
      "natural"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The athletes trained ______ for three months leading up to the international competition to peak at the right time.",
    "options": [
      "intensively",
      "overseas",
      "frequently",
      "painfully"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "After three days of ______, the negotiating teams finally reached an agreement on the trade terms.",
    "options": [
      "comfortable position",
      "come naturally",
      "frequent absences",
      "intensive meetings"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "New recruits underwent four weeks of ______ before being assigned to their first posts in the field.",
    "options": [
      "come naturally",
      "intensive training",
      "journey around the world",
      "return to the wild"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The charity ______ raised over fifty thousand dollars in a single evening, exceeding the organisers' expectations.",
    "options": [
      "occurrence",
      "wildlife",
      "reaction",
      "event"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The outdoor festival ______ in the city park last weekend and attracted over ten thousand visitors.",
    "options": [
      "react to loud noise",
      "It occurs to me that",
      "event took place",
      "come naturally"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The discovery of clean water sources underground was a ______ breakthrough for the drought-affected communities in the region.",
    "options": [
      "major",
      "painful",
      "frequent",
      "overseas"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "She decided to ______ in environmental science because she wanted to pursue a career in conservation and policy.",
    "options": [
      "examined",
      "travel",
      "memorize",
      "major"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The engineer reviewed the design plans carefully to identify any ______ before construction work began.",
    "options": [
      "event took place",
      "come naturally",
      "major mistakes",
      "react to loud noise"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "Active listening plays a ______ in effective communication, yet it is often the most overlooked skill.",
    "options": [
      "in memory of",
      "major part",
      "major mistakes",
      "come naturally"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "She is ______ and hopes to start her own company after graduating from university.",
    "options": [
      "majoring in business",
      "painful cut",
      "react to loud noise",
      "overseas trips"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "The damage to the car was relatively ______, so she decided to pay for the repairs herself rather than claim insurance.",
    "options": [
      "major",
      "minor",
      "exact",
      "overseas"
    ],
    "answer": 1,
    "vocabIndex": 36
  },
  {
    "q": "Students must register for the final ______ at least two weeks in advance or they will not be permitted to sit it.",
    "options": [
      "nature",
      "journal",
      "examination",
      "position"
    ],
    "answer": 2,
    "vocabIndex": 37
  },
  {
    "q": "The doctor ______ the patient thoroughly and ordered several tests before making a preliminary diagnosis.",
    "options": [
      "positioned",
      "occurred",
      "guided",
      "examined"
    ],
    "answer": 3,
    "vocabIndex": 38
  },
  {
    "q": "She stayed up until midnight revising for the ______ the next morning and felt well-prepared.",
    "options": [
      "math examination",
      "painful cut",
      "overseas trips",
      "in the wild"
    ],
    "answer": 0,
    "vocabIndex": 39
  },
  {
    "q": "All new employees are required to undergo a full ______ before their first day at the company.",
    "options": [
      "intensive meetings",
      "medical examination",
      "painful cut",
      "in the wild"
    ],
    "answer": 1,
    "vocabIndex": 40
  },
  {
    "q": "She felt much more relaxed after the ______ than she expected, because the questions matched exactly what she had studied.",
    "options": [
      "guide",
      "guidelines",
      "exam",
      "nature"
    ],
    "answer": 2,
    "vocabIndex": 41
  },
  {
    "q": "She made ______ visits to the doctor throughout the winter because she kept catching colds one after another.",
    "options": [
      "natural",
      "intensive",
      "major",
      "frequent"
    ],
    "answer": 3,
    "vocabIndex": 42
  },
  {
    "q": "He ______ the small café on the corner every morning before work and always orders the same black coffee.",
    "options": [
      "frequents",
      "examined",
      "react",
      "journeyed"
    ],
    "answer": 0,
    "vocabIndex": 43
  },
  {
    "q": "She ______ misplaces her keys and has started leaving a spare set with her neighbour as a backup solution.",
    "options": [
      "painfully",
      "frequently",
      "overseas",
      "naturally"
    ],
    "answer": 1,
    "vocabIndex": 44
  },
  {
    "q": "The ______ of her headaches increased significantly after she started working longer hours at her new job.",
    "options": [
      "frequency",
      "memory",
      "event",
      "exam"
    ],
    "answer": 0,
    "vocabIndex": 45
  },
  {
    "q": "The teacher expressed concern about the student's ______ and arranged a meeting with her parents.",
    "options": [
      "journeyed up the river",
      "It occurs to me that",
      "frequent absences",
      "tour guide"
    ],
    "answer": 2,
    "vocabIndex": 46
  },
  {
    "q": "He used to ______ every evening after school and that is where he developed his basketball skills.",
    "options": [
      "trouble with memory",
      "come naturally",
      "medical examination",
      "frequent the courts"
    ],
    "answer": 3,
    "vocabIndex": 47
  },
  {
    "q": "The train arrived at ______ nine o'clock, which gave them just enough time to grab a coffee before boarding.",
    "options": [
      "intensively",
      "exactly",
      "naturally",
      "frequently"
    ],
    "answer": 1,
    "vocabIndex": 48
  },
  {
    "q": "Could you give me the ______ measurements of the room so I can order the correct size of carpet?",
    "options": [
      "major",
      "intensive",
      "exact",
      "frequent"
    ],
    "answer": 2,
    "vocabIndex": 49
  },
  {
    "q": "A quiet weekend at home with good food and a good book is ______ after such a stressful week.",
    "options": [
      "exactly what I need",
      "frequent the courts",
      "go wild",
      "major mistakes"
    ],
    "answer": 0,
    "vocabIndex": 50
  },
  {
    "q": "She was not sure how he would ______ to the surprise news, but he seemed genuinely pleased when she told him.",
    "options": [
      "major",
      "guided",
      "examined",
      "react"
    ],
    "answer": 3,
    "vocabIndex": 51
  },
  {
    "q": "His immediate ______ to winning the award was to burst into tears and thank his parents for their lifelong support.",
    "options": [
      "reaction",
      "memory",
      "event",
      "guidelines"
    ],
    "answer": 0,
    "vocabIndex": 52
  },
  {
    "q": "She admitted that she had ______ to the situation and apologised for making the problem seem bigger than it was.",
    "options": [
      "travel",
      "journeyed",
      "examined",
      "overreacted"
    ],
    "answer": 3,
    "vocabIndex": 53
  },
  {
    "q": "Babies naturally ______ by startling and crying, as it is an instinctive safety response.",
    "options": [
      "in a position to",
      "It occurs to me that",
      "react to loud noise",
      "intensive training"
    ],
    "answer": 2,
    "vocabIndex": 54
  },
  {
    "q": "She adjusted the mirror into the correct ______ so that she could see clearly without turning her head while driving.",
    "options": [
      "journal",
      "position",
      "reaction",
      "wild"
    ],
    "answer": 1,
    "vocabIndex": 55
  },
  {
    "q": "She applied for the ______ of marketing director and was thrilled when she was invited for a second interview.",
    "options": [
      "examination",
      "reaction",
      "position",
      "event"
    ],
    "answer": 2,
    "vocabIndex": 56
  },
  {
    "q": "The photographer ______ her subjects carefully in front of the waterfall to capture the best possible shot.",
    "options": [
      "positioned",
      "travel",
      "react",
      "occurred"
    ],
    "answer": 0,
    "vocabIndex": 57
  },
  {
    "q": "She found a ______ on the sofa and settled in to watch the film with a warm blanket over her.",
    "options": [
      "guided us to",
      "in the wild",
      "tour guide",
      "comfortable position"
    ],
    "answer": 3,
    "vocabIndex": 58
  },
  {
    "q": "After twenty years with the company, she finally achieved a ______ in senior management.",
    "options": [
      "intensive meetings",
      "high position",
      "come naturally",
      "move overseas"
    ],
    "answer": 1,
    "vocabIndex": 59
  },
  {
    "q": "After saving for two years, he was finally ______ afford to buy his own apartment in the city.",
    "options": [
      "in a position to",
      "go wild",
      "occurred to",
      "overseas trips"
    ],
    "answer": 0,
    "vocabIndex": 60
  },
  {
    "q": "She has an excellent ______ for names and faces, which makes her very effective at building professional relationships.",
    "options": [
      "journal",
      "examination",
      "memory",
      "wildlife"
    ],
    "answer": 2,
    "vocabIndex": 61
  },
  {
    "q": "She used flashcards to ______ the vocabulary list and tested herself every evening before going to sleep.",
    "options": [
      "examined",
      "memorize",
      "overreacted",
      "travel"
    ],
    "answer": 1,
    "vocabIndex": 62
  },
  {
    "q": "As she got older, she began to experience some ______ and would occasionally forget recent events.",
    "options": [
      "guided us to",
      "frequent absences",
      "go wild",
      "trouble with memory"
    ],
    "answer": 3,
    "vocabIndex": 63
  },
  {
    "q": "A beautiful garden was planted ______ the teacher who had inspired hundreds of students over her career.",
    "options": [
      "come naturally",
      "in memory of",
      "tour guide",
      "It occurs to me that"
    ],
    "answer": 1,
    "vocabIndex": 64
  },
  {
    "q": "She was ______ gifted at languages and picked up Spanish without formal lessons after just a few months abroad.",
    "options": [
      "exactly",
      "intensively",
      "frequently",
      "naturally"
    ],
    "answer": 3,
    "vocabIndex": 65
  },
  {
    "q": "Spending time in ______ has been shown to reduce stress levels and improve both mental and physical wellbeing.",
    "options": [
      "nature",
      "exam",
      "pain",
      "event"
    ],
    "answer": 0,
    "vocabIndex": 66
  },
  {
    "q": "She prefers to use ______ skincare products made from plant-based ingredients rather than those with synthetic chemicals.",
    "options": [
      "painful",
      "Wild",
      "natural",
      "exact"
    ],
    "answer": 2,
    "vocabIndex": 67
  },
  {
    "q": "Public speaking does not ______ for everyone, but with practice it becomes much less intimidating.",
    "options": [
      "come naturally",
      "major part",
      "intensive meetings",
      "react to loud noise"
    ],
    "answer": 0,
    "vocabIndex": 68
  },
  {
    "q": "The experienced teacher ______ her students through the complex research process step by step with great patience.",
    "options": [
      "memorize",
      "guided",
      "examined",
      "major"
    ],
    "answer": 1,
    "vocabIndex": 69
  },
  {
    "q": "They hired a local ______ who spoke both English and Mandarin to take them around the historic old city district.",
    "options": [
      "journey",
      "reaction",
      "guide",
      "memory"
    ],
    "answer": 2,
    "vocabIndex": 70
  },
  {
    "q": "The ______ explained the history of each temple clearly and answered every question the tourists had.",
    "options": [
      "It occurs to me that",
      "intensive meetings",
      "guided us to",
      "tour guide"
    ],
    "answer": 3,
    "vocabIndex": 71
  },
  {
    "q": "The government issued new health ______ advising people to wear masks in crowded indoor public spaces.",
    "options": [
      "position",
      "reaction",
      "guidelines",
      "journal"
    ],
    "answer": 2,
    "vocabIndex": 72
  },
  {
    "q": "The friendly local farmer ______ his barn and showed us the newborn lambs sheltering inside.",
    "options": [
      "guided us to",
      "high position",
      "overseas trips",
      "journeyed up the river"
    ],
    "answer": 0,
    "vocabIndex": 73
  }
];

const LOOKUP = {
  "journey": {
    "pos": "n.",
    "en_def": "an act of traveling from one long distance to another.",
    "cn_def": "旅程、旅行",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an act of traveling from one long distance to another.",
        "cn_def": "旅程、旅行"
      },
      {
        "pos": "v.",
        "en_def": "to travel across a long distance or wide region.",
        "cn_def": "旅行、徒步旅行"
      }
    ]
  },
  "journeyed": {
    "pos": "v.",
    "en_def": "to travel across a long distance or wide region.",
    "cn_def": "旅行、徒步旅行",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to travel across a long distance or wide region.",
        "cn_def": "旅行、徒步旅行"
      }
    ]
  },
  "journal": {
    "pos": "n.",
    "en_def": "a daily diary book recording real personal events.",
    "cn_def": "日誌、期刊",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a daily diary book recording real personal events.",
        "cn_def": "日誌、期刊"
      }
    ]
  },
  "journey around the world": {
    "pos": "phr.",
    "en_def": "a global travel track starting from a base city.",
    "cn_def": "環球旅程",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a global travel track starting from a base city.",
        "cn_def": "環球旅程"
      }
    ]
  },
  "journeyed up the river": {
    "pos": "phr.",
    "en_def": "a group traveling on water paths across three days.",
    "cn_def": "沿河逆流而上",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a group traveling on water paths across three days.",
        "cn_def": "沿河逆流而上"
      }
    ]
  },
  "travel": {
    "pos": "v.",
    "en_def": "the general activity of moving across distinct towns.",
    "cn_def": "旅遊、旅行（總稱）",
    "combined": [
      {
        "pos": "v.",
        "en_def": "the general activity of moving across distinct towns.",
        "cn_def": "旅遊、旅行（總稱）"
      }
    ]
  },
  "trip": {
    "pos": "n.",
    "en_def": "a brief explicit journey to a town and back again.",
    "cn_def": "出遊、趟旅行（短程等）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a brief explicit journey to a town and back again.",
        "cn_def": "出遊、趟旅行（短程等）"
      }
    ]
  },
  "wild": {
    "pos": "adj.",
    "en_def": "living or growing in nature; not managed by humans.",
    "cn_def": "野生的、未馴化的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "living or growing in nature; not managed by humans.",
        "cn_def": "野生的、未馴化的"
      },
      {
        "pos": "n.",
        "en_def": "a natural state or region untouched by urban growth.",
        "cn_def": "荒野、自然界"
      }
    ]
  },
  "wildlife": {
    "pos": "n.",
    "en_def": "wild animals, birds, and insects living in a zone.",
    "cn_def": "野生生物",
    "combined": [
      {
        "pos": "n.",
        "en_def": "wild animals, birds, and insects living in a zone.",
        "cn_def": "野生生物"
      }
    ]
  },
  "go wild": {
    "pos": "phr.",
    "en_def": "fans screaming with extreme excitement after a win.",
    "cn_def": "瘋狂、失控、雀躍",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "fans screaming with extreme excitement after a win.",
        "cn_def": "瘋狂、失控、雀躍"
      }
    ]
  },
  "in the wild": {
    "pos": "phr.",
    "en_def": "locating fresh strawberries growing deep inside forests.",
    "cn_def": "在野外、在自然環境中",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "locating fresh strawberries growing deep inside forests.",
        "cn_def": "在野外、在自然環境中"
      }
    ]
  },
  "return to the wild": {
    "pos": "phr.",
    "en_def": "releasing a pet bird back into its natural habitat.",
    "cn_def": "放歸大自然",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "releasing a pet bird back into its natural habitat.",
        "cn_def": "放歸大自然"
      }
    ]
  },
  "overseas": {
    "pos": "adv.",
    "en_def": "in or to a foreign country across ocean channels.",
    "cn_def": "在海外、向海外",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in or to a foreign country across ocean channels.",
        "cn_def": "在海外、向海外"
      },
      {
        "pos": "adj.",
        "en_def": "connected with foreign countries across the sea.",
        "cn_def": "海外的、國外的"
      }
    ]
  },
  "move overseas": {
    "pos": "phr.",
    "en_def": "relocating your entire home base to a foreign state.",
    "cn_def": "搬到海外",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "relocating your entire home base to a foreign state.",
        "cn_def": "搬到海外"
      }
    ]
  },
  "overseas trips": {
    "pos": "phr.",
    "en_def": "business travel routes requiring passport checks.",
    "cn_def": "出國旅行、海外行程",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "business travel routes requiring passport checks.",
        "cn_def": "出國旅行、海外行程"
      }
    ]
  },
  "occur / occurred / occurred": {
    "pos": "v.",
    "en_def": "to happen, take place, or exist in a spot.",
    "cn_def": "發生、出現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to happen, take place, or exist in a spot.",
        "cn_def": "發生、出現"
      }
    ]
  },
  "occurred": {
    "pos": "v.",
    "en_def": "to happen, take place, or exist in a spot.",
    "cn_def": "發生、出現",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to happen, take place, or exist in a spot.",
        "cn_def": "發生、出現"
      }
    ]
  },
  "occurrence": {
    "pos": "n.",
    "en_def": "an event or instance of something happening cleanly.",
    "cn_def": "發生、發生的事件",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an event or instance of something happening cleanly.",
        "cn_def": "發生、發生的事件"
      }
    ]
  },
  "occur to somebody": {
    "pos": "phr.",
    "en_def": "a sudden thought or idea entering an agent's mind.",
    "cn_def": "某人想到…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a sudden thought or idea entering an agent's mind.",
        "cn_def": "某人想到…"
      }
    ]
  },
  "occurred to": {
    "pos": "phr.",
    "en_def": "a sudden thought or idea entering an agent's mind.",
    "cn_def": "某人想到…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a sudden thought or idea entering an agent's mind.",
        "cn_def": "某人想到…"
      }
    ]
  },
  "it occurs to me that": {
    "pos": "phr.",
    "en_def": "suddenly realizing that a peer's talk was serious.",
    "cn_def": "我突然想到…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "suddenly realizing that a peer's talk was serious.",
        "cn_def": "我突然想到…"
      }
    ]
  },
  "painful": {
    "pos": "adj.",
    "en_def": "causing physical or emotional suffering and hurt.",
    "cn_def": "痛苦的、疼痛的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "causing physical or emotional suffering and hurt.",
        "cn_def": "痛苦的、疼痛的"
      }
    ]
  },
  "pain": {
    "pos": "n.",
    "en_def": "a physical feeling of hurt caused by a severe cut.",
    "cn_def": "疼痛、痛苦",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a physical feeling of hurt caused by a severe cut.",
        "cn_def": "疼痛、痛苦"
      }
    ]
  },
  "painfully": {
    "pos": "adv.",
    "en_def": "in a very distressing or extremely clear manner.",
    "cn_def": "痛苦地、極度地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "in a very distressing or extremely clear manner.",
        "cn_def": "痛苦地、極度地"
      }
    ]
  },
  "painful cut": {
    "pos": "phr.",
    "en_def": "a skin wound that hurts badly despite looking minor.",
    "cn_def": "會痛的傷口",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a skin wound that hurts badly despite looking minor.",
        "cn_def": "會痛的傷口"
      }
    ]
  },
  "intensive": {
    "pos": "adj.",
    "en_def": "involving a lot of effort or work within brief eras.",
    "cn_def": "密集的、精深的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "involving a lot of effort or work within brief eras.",
        "cn_def": "密集的、精深的"
      }
    ]
  },
  "intensively": {
    "pos": "adv.",
    "en_def": "handling tasks with high focus and rapid speed steps.",
    "cn_def": "密集地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "handling tasks with high focus and rapid speed steps.",
        "cn_def": "密集地"
      }
    ]
  },
  "intensive meetings": {
    "pos": "phr.",
    "en_def": "back-to-back corporate talks to finalize a trade deal.",
    "cn_def": "密集會議",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "back-to-back corporate talks to finalize a trade deal.",
        "cn_def": "密集會議"
      }
    ]
  },
  "intensive training": {
    "pos": "phr.",
    "en_def": "a short, highly packed skill learning master camp.",
    "cn_def": "密集訓練",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a short, highly packed skill learning master camp.",
        "cn_def": "密集訓練"
      }
    ]
  },
  "event": {
    "pos": "n.",
    "en_def": "a highly important social gathering or happening.",
    "cn_def": "事件、重大活動",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a highly important social gathering or happening.",
        "cn_def": "事件、重大活動"
      }
    ]
  },
  "event took place": {
    "pos": "phr.",
    "en_def": "a wedding celebration occurring on a specific date.",
    "cn_def": "活動舉行",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a wedding celebration occurring on a specific date.",
        "cn_def": "活動舉行"
      }
    ]
  },
  "major": {
    "pos": "adj.",
    "en_def": "highly important, large, or serious in scale.",
    "cn_def": "主要的、重大的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "highly important, large, or serious in scale.",
        "cn_def": "主要的、重大的"
      },
      {
        "pos": "v.",
        "en_def": "to specialize in a specific academic field at college.",
        "cn_def": "主修"
      }
    ]
  },
  "major mistakes": {
    "pos": "phr.",
    "en_def": "severe errors inside an essay that catch eyes.",
    "cn_def": "重大錯誤",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "severe errors inside an essay that catch eyes.",
        "cn_def": "重大錯誤"
      }
    ]
  },
  "major part": {
    "pos": "phr.",
    "en_def": "listening skills standing as a baseline core of language.",
    "cn_def": "主要部分",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "listening skills standing as a baseline core of language.",
        "cn_def": "主要部分"
      }
    ]
  },
  "majoring in business": {
    "pos": "phr.",
    "en_def": "a student focusing entirely on management science.",
    "cn_def": "主修商業管理",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a student focusing entirely on management science.",
        "cn_def": "主修商業管理"
      }
    ]
  },
  "minor": {
    "pos": "adj.",
    "en_def": "small, low, or non-serious; tracking zero risks.",
    "cn_def": "次要的、微小的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "small, low, or non-serious; tracking zero risks.",
        "cn_def": "次要的、微小的"
      }
    ]
  },
  "examination": {
    "pos": "n.",
    "en_def": "an official test checking your knowledge or health.",
    "cn_def": "考試、檢查、審查",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official test checking your knowledge or health.",
        "cn_def": "考試、檢查、審查"
      }
    ]
  },
  "examine": {
    "pos": "v.",
    "en_def": "to check an object meticulously to find flaws.",
    "cn_def": "檢查、審查、考試",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to check an object meticulously to find flaws.",
        "cn_def": "檢查、審查、考試"
      }
    ]
  },
  "examined": {
    "pos": "v.",
    "en_def": "to check an object meticulously to find flaws.",
    "cn_def": "檢查、審查、考試",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to check an object meticulously to find flaws.",
        "cn_def": "檢查、審查、考試"
      }
    ]
  },
  "math examination": {
    "pos": "phr.",
    "en_def": "a two hour academic test tracking arithmetic skills.",
    "cn_def": "數學考試",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a two hour academic test tracking arithmetic skills.",
        "cn_def": "數學考試"
      }
    ]
  },
  "medical examination": {
    "pos": "phr.",
    "en_def": "a clinical checkup run by doctors to track health.",
    "cn_def": "醫療檢查、健康檢查",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a clinical checkup run by doctors to track health.",
        "cn_def": "醫療檢查、健康檢查"
      }
    ]
  },
  "exam": {
    "pos": "n.",
    "en_def": "a short casual word for an academic test unit.",
    "cn_def": "考試（examination的簡稱）",
    "combined": [
      {
        "pos": "n.",
        "en_def": "a short casual word for an academic test unit.",
        "cn_def": "考試（examination的簡稱）"
      }
    ]
  },
  "frequent": {
    "pos": "adj.",
    "en_def": "happening or done very often across brief intervals.",
    "cn_def": "頻繁的、經常的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "happening or done very often across brief intervals.",
        "cn_def": "頻繁的、經常的"
      },
      {
        "pos": "v.",
        "en_def": "to visit a specific neighborhood spot regularly.",
        "cn_def": "常去、時常出沒於"
      }
    ]
  },
  "frequents": {
    "pos": "v.",
    "en_def": "to visit a specific neighborhood spot regularly.",
    "cn_def": "常去、時常出沒於",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to visit a specific neighborhood spot regularly.",
        "cn_def": "常去、時常出沒於"
      }
    ]
  },
  "frequently": {
    "pos": "adv.",
    "en_def": "regularly; tracking a high routine repetition rate.",
    "cn_def": "頻繁地、經常地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "regularly; tracking a high routine repetition rate.",
        "cn_def": "頻繁地、經常地"
      }
    ]
  },
  "frequency": {
    "pos": "n.",
    "en_def": "the count of times an event repeats in a duration.",
    "cn_def": "頻率、次數",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the count of times an event repeats in a duration.",
        "cn_def": "頻率、次數"
      }
    ]
  },
  "frequent absences": {
    "pos": "phr.",
    "en_def": "a pupil repeatedly missing school days recently.",
    "cn_def": "頻繁缺席",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a pupil repeatedly missing school days recently.",
        "cn_def": "頻繁缺席"
      }
    ]
  },
  "frequent the courts": {
    "pos": "phr.",
    "en_def": "boys regularly hanging around local basketball spots.",
    "cn_def": "常去球場",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "boys regularly hanging around local basketball spots.",
        "cn_def": "常去球場"
      }
    ]
  },
  "exactly": {
    "pos": "adv.",
    "en_def": "precisely; tracked with 100% perfect accuracy.",
    "cn_def": "確切地、正是、精準地",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "precisely; tracked with 100% perfect accuracy.",
        "cn_def": "確切地、正是、精準地"
      }
    ]
  },
  "exact": {
    "pos": "adj.",
    "en_def": "completely correct; matching digits with zero gaps.",
    "cn_def": "確切的、精確的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "completely correct; matching digits with zero gaps.",
        "cn_def": "確切的、精確的"
      }
    ]
  },
  "exactly what i need": {
    "pos": "phr.",
    "en_def": "a full day of rest matching your core desires perfectly.",
    "cn_def": "正是我所需要的",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a full day of rest matching your core desires perfectly.",
        "cn_def": "正是我所需要的"
      }
    ]
  },
  "react": {
    "pos": "v.",
    "en_def": "to behave in a specific way due to an external action.",
    "cn_def": "做出反應、反應",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to behave in a specific way due to an external action.",
        "cn_def": "做出反應、反應"
      }
    ]
  },
  "reaction": {
    "pos": "n.",
    "en_def": "an outward behavior or chemical change from a trigger.",
    "cn_def": "反應",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an outward behavior or chemical change from a trigger.",
        "cn_def": "反應"
      }
    ]
  },
  "overreacted": {
    "pos": "v.",
    "en_def": "to show an excess, yelling panic stance over minor news.",
    "cn_def": "反應過度",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show an excess, yelling panic stance over minor news.",
        "cn_def": "反應過度"
      }
    ]
  },
  "overreact": {
    "pos": "v.",
    "en_def": "to show an excess, yelling panic stance over minor news.",
    "cn_def": "反應過度",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show an excess, yelling panic stance over minor news.",
        "cn_def": "反應過度"
      }
    ]
  },
  "react to loud noise": {
    "pos": "phr.",
    "en_def": "a pet dog running away instantly due to a bang sound.",
    "cn_def": "對大聲響做出反應",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a pet dog running away instantly due to a bang sound.",
        "cn_def": "對大聲響做出反應"
      }
    ]
  },
  "position": {
    "pos": "n.",
    "en_def": "the explicit place where an object sits or stands.",
    "cn_def": "位置、地方",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the explicit place where an object sits or stands.",
        "cn_def": "位置、地方"
      },
      {
        "pos": "n.",
        "en_def": "a high rank or specialized role within a company.",
        "cn_def": "職位、地位、處境"
      },
      {
        "pos": "v.",
        "en_def": "to build or place an asset down in a specific spot.",
        "cn_def": "安置、使處於某位置"
      }
    ]
  },
  "positioned": {
    "pos": "v.",
    "en_def": "to build or place an asset down in a specific spot.",
    "cn_def": "安置、使處於某位置",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to build or place an asset down in a specific spot.",
        "cn_def": "安置、使處於某位置"
      }
    ]
  },
  "comfortable position": {
    "pos": "phr.",
    "en_def": "a relaxing posture used while sitting on a couch.",
    "cn_def": "舒服的姿勢/位置",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a relaxing posture used while sitting on a couch.",
        "cn_def": "舒服的姿勢/位置"
      }
    ]
  },
  "high position": {
    "pos": "phr.",
    "en_def": "holding an executive director role inside a firm.",
    "cn_def": "高階職位",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "holding an executive director role inside a firm.",
        "cn_def": "高階職位"
      }
    ]
  },
  "in a position to": {
    "pos": "phr.",
    "en_def": "tracking enough cash or power to take a vacation.",
    "cn_def": "有能力…、處於可以…的地位",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "tracking enough cash or power to take a vacation.",
        "cn_def": "有能力…、處於可以…的地位"
      }
    ]
  },
  "memory": {
    "pos": "n.",
    "en_def": "the brain's internal ability to store and recall data.",
    "cn_def": "記憶力、記憶",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the brain's internal ability to store and recall data.",
        "cn_def": "記憶力、記憶"
      }
    ]
  },
  "memorize": {
    "pos": "v.",
    "en_def": "to commit words to mind systematically via study.",
    "cn_def": "記住、背誦",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to commit words to mind systematically via study.",
        "cn_def": "記住、背誦"
      }
    ]
  },
  "trouble with memory": {
    "pos": "phr.",
    "en_def": "an old citizen starting to face minor forgetful gaps.",
    "cn_def": "記憶力有問題",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "an old citizen starting to face minor forgetful gaps.",
        "cn_def": "記憶力有問題"
      }
    ]
  },
  "in memory of": {
    "pos": "phr.",
    "en_def": "building a statue to honor a late mayor pioneer.",
    "cn_def": "為了紀念…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "building a statue to honor a late mayor pioneer.",
        "cn_def": "為了紀念…"
      }
    ]
  },
  "naturally": {
    "pos": "adv.",
    "en_def": "as a normal organic result; without artificial help.",
    "cn_def": "自然地、天生功能上",
    "combined": [
      {
        "pos": "adv.",
        "en_def": "as a normal organic result; without artificial help.",
        "cn_def": "自然地、天生功能上"
      }
    ]
  },
  "nature": {
    "pos": "n.",
    "en_def": "the physical world of wild plants, trees, and air.",
    "cn_def": "大自然、天性",
    "combined": [
      {
        "pos": "n.",
        "en_def": "the physical world of wild plants, trees, and air.",
        "cn_def": "大自然、天性"
      }
    ]
  },
  "natural": {
    "pos": "adj.",
    "en_def": "normal in nature; tracking zero chemical additives.",
    "cn_def": "自然的、天生的",
    "combined": [
      {
        "pos": "adj.",
        "en_def": "normal in nature; tracking zero chemical additives.",
        "cn_def": "自然的、天生的"
      }
    ]
  },
  "come naturally": {
    "pos": "phr.",
    "en_def": "a skill like piano play flowing easily without hard practice.",
    "cn_def": "天生具備、信手拈來",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a skill like piano play flowing easily without hard practice.",
        "cn_def": "天生具備、信手拈來"
      }
    ]
  },
  "guide": {
    "pos": "v.",
    "en_def": "to show someone the right path or process to follow.",
    "cn_def": "引導、帶路、指導",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show someone the right path or process to follow.",
        "cn_def": "引導、帶路、指導"
      },
      {
        "pos": "n.",
        "en_def": "a professional agent who shows travelers around town.",
        "cn_def": "導遊、指南"
      }
    ]
  },
  "guided": {
    "pos": "v.",
    "en_def": "to show someone the right path or process to follow.",
    "cn_def": "引導、帶路、指導",
    "combined": [
      {
        "pos": "v.",
        "en_def": "to show someone the right path or process to follow.",
        "cn_def": "引導、帶路、指導"
      }
    ]
  },
  "tour guide": {
    "pos": "phr.",
    "en_def": "a professional translator running regional transits.",
    "cn_def": "導遊",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a professional translator running regional transits.",
        "cn_def": "導遊"
      }
    ]
  },
  "guideline": {
    "pos": "n.",
    "en_def": "an official baseline rule detailing operational steps.",
    "cn_def": "指南、準則、方針",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official baseline rule detailing operational steps.",
        "cn_def": "指南、準則、方針"
      }
    ]
  },
  "guidelines": {
    "pos": "n.",
    "en_def": "an official baseline rule detailing operational steps.",
    "cn_def": "指南、準則、方針",
    "combined": [
      {
        "pos": "n.",
        "en_def": "an official baseline rule detailing operational steps.",
        "cn_def": "指南、準則、方針"
      }
    ]
  },
  "guided us to": {
    "pos": "phr.",
    "en_def": "a local police officer leading travelers to a post office.",
    "cn_def": "引導我們去…",
    "combined": [
      {
        "pos": "phr.",
        "en_def": "a local police officer leading travelers to a post office.",
        "cn_def": "引導我們去…"
      }
    ]
  }
};

const EXTRA_GLOSSES = {};
