// Topic 1 Quiz Data: Accident 意外事故
// Source word list: https://www.examword.com/group-topic/accident — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T01 - Accident 意外事故",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "collision",
    "pos": "n.",
    "cn_def": "碰撞；相撞",
    "en_def": "a crash in which two things hit each other",
    "sentence": "A: Why are all the delivery trucks late this morning? B: There was a {{BLANK}} between two buses on the highway, so traffic is blocked for miles.",
    "cn": "A：為什麼今天早上所有的送貨卡車都遲到了？ B：高速公路上兩輛公車發生了【碰撞】，所以車流堵塞了好幾英里。"
  },
  {
    "word": "crash",
    "pos": "n.",
    "cn_def": "撞車；車禍；墜毀",
    "en_def": "an accident in which a vehicle hits something hard",
    "sentence": "A: Did the sales manager make it to the conference in Chicago? B: No, he missed it because a car {{BLANK}} closed the main road to the airport, and he had to take a longer route.",
    "cn": "A：業務經理有趕上芝加哥的研討會嗎？ B：沒有，他錯過了，因為一場【車禍】封閉了通往機場的主要道路，他只好繞遠路。"
  },
  {
    "word": "incident",
    "pos": "n.",
    "cn_def": "事件；事故",
    "en_def": "something unusual or bad that happens",
    "sentence": "A: Should I tell the supervisor that a box fell from the shelf in the warehouse? B: Yes, every {{BLANK}} must be recorded in the safety log, even if no one was injured.",
    "cn": "A：倉庫裡有個箱子從架子上掉下來，我應該告訴主管嗎？ B：要，每一起【事件】都必須記錄在安全日誌裡，即使沒有人受傷。"
  },
  {
    "word": "mishap",
    "pos": "n.",
    "cn_def": "小意外；小差錯",
    "en_def": "a small accident or piece of bad luck",
    "sentence": "A: How did the product launch go yesterday? B: It went well overall, but there was a small {{BLANK}} when the projector stopped working, so we had to present without slides.",
    "cn": "A：昨天的產品發表會進行得如何？ B：整體很順利，但投影機故障時出了個小【意外】，所以我們只好在沒有投影片的情況下報告。"
  },
  {
    "word": "injury",
    "pos": "n.",
    "cn_def": "傷害；受傷",
    "en_def": "harm done to a person's body",
    "sentence": "A: Why is Tom working from home this week? B: He got a back {{BLANK}} while he was lifting heavy boxes in the storeroom, and his doctor told him to rest for a few days.",
    "cn": "A：湯姆這週為什麼在家工作？ B：他在儲藏室搬重箱子時背部【受傷】了，醫生要他休息幾天。"
  },
  {
    "word": "damage",
    "pos": "n.",
    "cn_def": "損壞；損害",
    "en_def": "harm done to a thing so it is broken or worth less",
    "sentence": "A: Has the insurance company checked the delivery van yet? B: Yes, they came this morning, and they said the {{BLANK}} to the front door will cost about two thousand dollars to repair.",
    "cn": "A：保險公司檢查過那輛送貨車了嗎？ B：檢查過了，他們今天早上來過，說前門的【損壞】大約要花兩千元修理。"
  },
  {
    "word": "wound",
    "pos": "n.",
    "cn_def": "傷口",
    "en_def": "a cut or hurt place on the body",
    "sentence": "A: The new worker cut his hand on a sharp metal sheet at the factory. B: The nurse cleaned the {{BLANK}} and covered it with a bandage, and then she told him to wear gloves next time.",
    "cn": "A：新來的員工在工廠被一片鋒利的金屬板割傷了手。 B：護士清潔了【傷口】並用繃帶包紮，然後叮嚀他下次要戴手套。"
  },
  {
    "word": "emergency",
    "pos": "n.",
    "cn_def": "緊急情況",
    "en_def": "a sudden, dangerous situation that needs fast action",
    "sentence": "A: What should we do if the fire alarm rings during the meeting? B: In an {{BLANK}}, please leave the building by the nearest stairway, and don't use the elevators.",
    "cn": "A：如果開會時火災警報響了，我們該怎麼做？ B：遇到【緊急情況】時，請從最近的樓梯離開大樓，不要搭電梯。"
  },
  {
    "word": "ambulance",
    "pos": "n.",
    "cn_def": "救護車",
    "en_def": "a vehicle that takes sick or hurt people to hospital",
    "sentence": "A: One of the visitors fainted in the lobby, and she isn't waking up. B: Call an {{BLANK}} right away, and ask the security guard to keep the area clear until help arrives.",
    "cn": "A：有一位訪客在大廳昏倒了，一直沒有醒來。 B：馬上叫【救護車】，並請警衛在救援到達前淨空該區域。"
  },
  {
    "word": "rescue",
    "pos": "v.",
    "cn_def": "救援；營救",
    "en_def": "to save someone from danger",
    "sentence": "A: Was anyone trapped when the old storage building caught fire last night? B: Two workers were inside, but the firefighters managed to {{BLANK}} them before the roof fell down.",
    "cn": "A：昨晚舊倉庫失火時，有人被困住嗎？ B：有兩名員工在裡面，但消防員在屋頂塌下來之前成功把他們【救出】。"
  },
  {
    "word": "survive",
    "pos": "v.",
    "cn_def": "倖存；存活；撐過",
    "en_def": "to stay alive or keep going after something bad",
    "sentence": "A: I heard about the plane that made an emergency landing near the coast. B: Yes, it was frightening, but all the passengers managed to {{BLANK}}, and only a few of them needed hospital care.",
    "cn": "A：我聽說有架飛機在海岸附近緊急降落。 B：對，真的很嚇人，但所有乘客都【倖存】了，只有少數幾人需要住院治療。"
  },
  {
    "word": "collapse",
    "pos": "v.",
    "cn_def": "倒塌；崩塌",
    "en_def": "to fall down suddenly",
    "sentence": "A: Why is the parking garage closed to all employees today? B: Engineers are worried that part of the second floor could {{BLANK}} after the heavy rain, so they are checking the structure.",
    "cn": "A：為什麼今天停車場不開放給所有員工？ B：工程師擔心大雨過後二樓有一部分可能會【倒塌】，所以他們正在檢查結構。"
  },
  {
    "word": "slip",
    "pos": "v.",
    "cn_def": "滑倒；滑跤",
    "en_def": "to slide by accident and lose your balance",
    "sentence": "A: Why is there a yellow sign in front of the restroom? B: The cleaner just mopped the floor, and the sign warns people that they might {{BLANK}} if they walk too quickly.",
    "cn": "A：洗手間前面為什麼放了一個黃色標誌？ B：清潔人員剛拖完地，這個標誌是提醒大家走太快可能會【滑倒】。"
  },
  {
    "word": "fall",
    "pos": "v.",
    "cn_def": "跌落；掉落；跌倒",
    "en_def": "to drop down to the ground by accident",
    "sentence": "A: Why do we need to wear hard hats on the construction site? B: Tools sometimes {{BLANK}} from the higher floors, and a helmet can protect your head from serious harm.",
    "cn": "A：為什麼我們在工地必須戴安全帽？ B：工具有時會從較高的樓層【掉落】，而安全帽可以保護你的頭部免受嚴重傷害。"
  },
  {
    "word": "trip",
    "pos": "v.",
    "cn_def": "絆倒；絆到",
    "en_def": "to hit your foot on something and almost fall",
    "sentence": "A: Can you move these cables away from the walkway in the office? B: Sure, someone could {{BLANK}} over them and get hurt, and the safety inspector is coming this afternoon.",
    "cn": "A：你能把這些電線從辦公室走道移開嗎？ B：當然，可能會有人被它們【絆倒】而受傷，而且安全檢查員今天下午就要來了。"
  },
  {
    "word": "careless",
    "pos": "adj.",
    "cn_def": "粗心的；不小心的",
    "en_def": "not paying enough attention; not careful",
    "sentence": "A: How did the forklift hit the shelf in the warehouse? B: The driver was {{BLANK}} and looked at his phone while he was driving, so the manager gave him a written warning.",
    "cn": "A：堆高機怎麼會撞上倉庫的貨架？ B：司機很【粗心】，開車時一直看手機，所以經理給了他書面警告。"
  },
  {
    "word": "dangerous",
    "pos": "adj.",
    "cn_def": "危險的",
    "en_def": "likely to hurt someone or cause harm",
    "sentence": "A: Is it okay to store these chemicals next to the heater? B: No, that is very {{BLANK}} because they can catch fire easily, so please move them to the cool storage room.",
    "cn": "A：可以把這些化學藥品放在暖氣旁邊嗎？ B：不行，那非常【危險】，因為它們很容易起火，所以請把它們移到陰涼的儲藏室。"
  },
  {
    "word": "serious",
    "pos": "adj.",
    "cn_def": "嚴重的",
    "en_def": "very bad and worrying",
    "sentence": "A: Was the accident at the factory last week {{BLANK}}? B: Fortunately not, because the two workers only had small cuts, but the machine was badly damaged and needs to be replaced.",
    "cn": "A：上週工廠的事故【嚴重】嗎？ B：幸好不嚴重，兩名員工只受了小割傷，但機器嚴重損壞，需要更換。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "輕微的；次要的",
    "en_def": "small and not very serious",
    "sentence": "A: Do we need to cancel the company trip because of the bus accident? B: No, it was only a {{BLANK}} accident, and the bus company is sending another vehicle, so we can still leave on time.",
    "cn": "A：因為遊覽車的事故，我們需要取消員工旅遊嗎？ B：不用，那只是個【輕微的】事故，而且客運公司會另派一輛車，所以我們還是可以準時出發。"
  },
  {
    "word": "unexpected",
    "pos": "adj.",
    "cn_def": "意外的；出乎意料的",
    "en_def": "not expected; surprising",
    "sentence": "A: Why did the shipment from Japan arrive three days late? B: There was an {{BLANK}} storm along the coast, and the ship had to wait in the port until the weather improved.",
    "cn": "A：從日本來的貨為什麼晚了三天才到？ B：沿海出現了一場【出乎意料的】暴風雨，船只好在港口等到天氣好轉。"
  },
  {
    "word": "suddenly",
    "pos": "adv.",
    "cn_def": "突然地",
    "en_def": "quickly and without any warning",
    "sentence": "A: What happened during the presentation this morning? B: The lights {{BLANK}} went out in the whole building, and we had to finish the meeting in the dark.",
    "cn": "A：今天早上的簡報發生了什麼事？ B：整棟大樓的燈【突然】熄滅了，我們只好在黑暗中把會議開完。"
  },
  {
    "word": "fortunately",
    "pos": "adv.",
    "cn_def": "幸運地；幸好",
    "en_def": "luckily; used before good news",
    "sentence": "A: I heard that a delivery truck hit the front gate of our office this morning. B: Yes, it did, but {{BLANK}}, nobody was standing near the gate, and the driver was not hurt either.",
    "cn": "A：我聽說今天早上有輛送貨卡車撞上了我們辦公室的大門。 B：對，是有這件事，但【幸好】當時沒有人站在大門附近，司機也沒有受傷。"
  },
  {
    "word": "unfortunately",
    "pos": "adv.",
    "cn_def": "不幸地；遺憾地",
    "en_def": "sadly; used before bad news",
    "sentence": "A: Will Ms. Lin be able to give her speech at the conference tomorrow? B: {{BLANK}}, she hurt her ankle while she was jogging, so her assistant will speak in her place.",
    "cn": "A：林小姐明天能在研討會上演講嗎？ B：【很遺憾】，她慢跑時扭傷了腳踝，所以會由她的助理代替她發言。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "小心地；仔細地",
    "en_def": "with close attention so you don't make mistakes or get hurt",
    "sentence": "A: Is there anything I should know before I use the new cutting machine? B: Read the instructions {{BLANK}} and always wear safety glasses, because small pieces of metal can fly out.",
    "cn": "A：在使用新的切割機之前，有什麼我該知道的嗎？ B：要【仔細地】閱讀說明書，並且一定要戴護目鏡，因為小金屬碎片可能會飛出來。"
  },
  {
    "word": "witness",
    "pos": "n.",
    "cn_def": "目擊者；證人",
    "en_def": "a person who sees something happen",
    "sentence": "A: Did anyone see the car hit the bicycle outside our store? B: Yes, one of our cashiers was a {{BLANK}}, and she has already told the police exactly what she saw.",
    "cn": "A：有人看到那輛車在我們店外撞上腳踏車嗎？ B：有，我們的一位收銀員是【目擊者】，她已經把看到的情況詳細告訴警方了。"
  },
  {
    "word": "report",
    "pos": "v.",
    "cn_def": "報告；通報",
    "en_def": "to tell a person in charge about something that happened",
    "sentence": "A: What should I do if I see broken equipment in the lab? B: You should {{BLANK}} it to the safety officer immediately, and you should put a \"Do Not Use\" sign on it.",
    "cn": "A：如果我在實驗室看到損壞的設備，我該怎麼做？ B：你應該立刻向安全負責人【通報】，並且在設備上貼上「請勿使用」的標示。"
  },
  {
    "word": "investigate",
    "pos": "v.",
    "cn_def": "調查",
    "en_def": "to try to find out the facts about something",
    "sentence": "A: Does anyone know why the machine on Line 3 caught fire? B: Not yet, but the safety team will {{BLANK}} the problem this week, and they will share their findings with all staff.",
    "cn": "A：有人知道三號生產線的機器為什麼起火嗎？ B：還不知道，但安全小組本週會【調查】這個問題，並將調查結果告知全體員工。"
  },
  {
    "word": "cause",
    "pos": "n.",
    "cn_def": "原因；起因",
    "en_def": "the reason why something happens",
    "sentence": "A: Have the engineers found out why the elevator stopped between floors? B: Yes, they said the {{BLANK}} was an electrical problem, and the elevator will be fixed by Friday.",
    "cn": "A：工程師查出電梯為什麼卡在樓層之間了嗎？ B：查出來了，他們說【原因】是電力問題，電梯會在星期五前修好。"
  },
  {
    "word": "prevent",
    "pos": "v.",
    "cn_def": "預防；防止",
    "en_def": "to stop something from happening",
    "sentence": "A: Why are we putting new rubber mats at the entrance? B: The mats will help {{BLANK}} accidents on rainy days, because the floor near the door gets very wet.",
    "cn": "A：我們為什麼要在入口放新的橡膠地墊？ B：這些地墊有助於【預防】雨天發生意外，因為門口附近的地板會變得很濕。"
  },
  {
    "word": "safety",
    "pos": "n.",
    "cn_def": "安全",
    "en_def": "the state of being safe from danger or harm",
    "sentence": "A: Do new employees have to attend any training before they start? B: Yes, everyone must attend a {{BLANK}} workshop on the first day, and they learn how to use the fire extinguishers.",
    "cn": "A：新進員工開始工作前必須參加任何訓練嗎？ B：要，每個人第一天都必須參加【安全】研習，學習如何使用滅火器。"
  },
  {
    "word": "recover",
    "pos": "v.",
    "cn_def": "康復；恢復",
    "en_def": "to get well again after being sick or hurt",
    "sentence": "A: When will Mr. Chen come back to the office after his car accident? B: His doctor says he needs about two weeks to {{BLANK}}, so we will share his projects until he returns.",
    "cn": "A：陳先生出車禍後什麼時候會回辦公室？ B：他的醫生說他大約需要兩週時間【康復】，所以在他回來之前我們會分擔他的專案。"
  },
  {
    "word": "shock",
    "pos": "n.",
    "cn_def": "震驚；驚嚇",
    "en_def": "a sudden, strong feeling of surprise or fear after something bad",
    "sentence": "A: How is the driver who was in the accident on Main Street? B: He was not badly hurt, but he was in {{BLANK}} for a while, so the paramedics kept him in the ambulance.",
    "cn": "A：在緬因街出車禍的那位駕駛還好嗎？ B：他沒有受重傷，但有一段時間處於【驚嚇】狀態，所以急救人員讓他待在救護車上。"
  },
  {
    "word": "treatment",
    "pos": "n.",
    "cn_def": "治療",
    "en_def": "medical care for an illness or injury",
    "sentence": "A: Does our company insurance pay for hospital costs after a work accident? B: Yes, it covers all medical {{BLANK}} for injuries at work, but you must submit the forms within thirty days.",
    "cn": "A：公司的保險會支付工作意外後的醫療費用嗎？ B：會，它涵蓋所有工作傷害的醫療【治療】費用，但你必須在三十天內遞交表格。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "the cars and other vehicles on a road",
    "sentence": "A: Should we leave now for the airport to meet the clients? B: Yes, there was an accident on the bridge, so the {{BLANK}} will be heavy, and we don't want to be late.",
    "cn": "A：我們現在該出發去機場接客戶了嗎？ B：對，橋上發生了事故，所以【交通】會很擁擠，我們可不想遲到。"
  }
];

const MCQS = [
  {
    "q": "The two forklifts were moving too fast in the narrow aisle. The _____ damaged both vehicles and several boxes of goods.",
    "options": [
      "collision",
      "treatment",
      "witness",
      "safety"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please fill out this form after any problem at work. The manager reviews every _____ report at the end of the month.",
    "options": [
      "ambulance",
      "incident",
      "shock",
      "traffic"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The company picnic was almost perfect. The only _____ was when a strong wind blew over the drinks table.",
    "options": [
      "cause",
      "safety",
      "mishap",
      "treatment"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Mr. Park hurt his knee while playing soccer with coworkers. The _____ kept him away from the office for a whole week.",
    "options": [
      "witness",
      "traffic",
      "ambulance",
      "injury"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The storm broke several windows at our branch office last night. The insurance company will pay for all the _____.",
    "options": [
      "damage",
      "safety",
      "witness",
      "ambulance"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Please keep this security number on your desk. Call it immediately if there is an _____, such as a fire or gas leak.",
    "options": [
      "witness",
      "emergency",
      "treatment",
      "damage"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "A customer fell down the stairs and could not stand up. The store manager called an _____ and waited with her.",
    "options": [
      "incident",
      "injury",
      "ambulance",
      "witness"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The police are looking for anyone who saw the accident outside the bank. Each _____ will be asked to describe what happened.",
    "options": [
      "cause",
      "damage",
      "treatment",
      "witness"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Engineers spent two days studying the broken machine. They finally found the _____ of the problem: a loose wire.",
    "options": [
      "cause",
      "safety",
      "shock",
      "crash"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "All visitors to the factory must wear helmets and glasses. These _____ rules protect everyone working near the machines.",
    "options": [
      "traffic",
      "safety",
      "damage",
      "wound"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Nobody expected the old warehouse to burn down overnight. The news came as a _____ to the whole team.",
    "options": [
      "cause",
      "collision",
      "shock",
      "treatment"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Ms. Wu hurt her shoulder while moving office furniture. She is now receiving _____ at the hospital twice a week.",
    "options": [
      "traffic",
      "witness",
      "damage",
      "treatment"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "There was a car accident near the train station this morning. Heavy _____ made many employees late for work.",
    "options": [
      "traffic",
      "safety",
      "injury",
      "mishap"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The pilot landed the plane safely in very bad weather. Thanks to her skill, a terrible _____ was avoided.",
    "options": [
      "witness",
      "crash",
      "treatment",
      "safety"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Two hikers got lost on the mountain during the company retreat. A helicopter team flew out to _____ them before dark.",
    "options": [
      "prevent",
      "investigate",
      "rescue",
      "collapse"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Many small shops closed during the difficult year. Our store was able to _____ because loyal customers kept buying from us.",
    "options": [
      "rescue",
      "trip",
      "report",
      "survive"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The old shelves were holding far too many heavy boxes. They were starting to bend and could _____ at any moment.",
    "options": [
      "collapse",
      "recover",
      "investigate",
      "rescue"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The kitchen floor is still wet after cleaning. Please walk slowly, or you might _____ and hurt yourself.",
    "options": [
      "report",
      "slip",
      "prevent",
      "survive"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please keep your bags under your desk, not in the hallway. Someone might _____ over them and fall down.",
    "options": [
      "rescue",
      "investigate",
      "trip",
      "recover"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Some lights in the parking lot are not working tonight. Please _____ the problem to the building office right away.",
    "options": [
      "survive",
      "slip",
      "collapse",
      "report"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Several customers said their packages arrived broken. The shipping company promised to _____ the matter and reply within a week.",
    "options": [
      "investigate",
      "slip",
      "survive",
      "trip"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The company installed new handrails on the stairs last month. The handrails help _____ falls, especially among older visitors.",
    "options": [
      "recover",
      "prevent",
      "rescue",
      "collapse"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Mr. Lee had surgery on his leg last month. He is expected to _____ fully and return to work in June.",
    "options": [
      "investigate",
      "prevent",
      "recover",
      "trip"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The sales report had many wrong numbers and spelling errors. The manager said it was _____ work and asked for a new version.",
    "options": [
      "unexpected",
      "minor",
      "dangerous",
      "careless"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Please do not stand on office chairs to reach the top shelf. It is _____, so use the ladder in the storeroom instead.",
    "options": [
      "dangerous",
      "unexpected",
      "minor",
      "serious"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The car was badly damaged in the accident on the highway. Luckily, the driver had no _____ injuries and went home that day.",
    "options": [
      "careless",
      "serious",
      "unexpected",
      "dangerous"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The meeting was going smoothly until the fire alarm rang. This _____ interruption forced everyone to leave the building.",
    "options": [
      "careless",
      "dangerous",
      "unexpected",
      "carefully"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The printer was working normally all morning. Then it _____ stopped, and gray smoke came out of the back.",
    "options": [
      "carefully",
      "careless",
      "minor",
      "suddenly"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "A heavy box fell from the top shelf in the warehouse. _____, nobody was standing below it at the time.",
    "options": [
      "fortunately",
      "unfortunately",
      "carefully",
      "careless"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "These glass bottles break very easily. Please pack them _____ in the boxes with plenty of paper around each one.",
    "options": [
      "suddenly",
      "carefully",
      "unfortunately",
      "minor"
    ],
    "answer": 1,
    "vocabIndex": 23
  }
];

const LOOKUP = {
  "collision": {
    "pos": "n.",
    "en_def": "a crash in which two things hit each other",
    "cn_def": "碰撞；相撞"
  },
  "crash": {
    "pos": "n.",
    "en_def": "an accident in which a vehicle hits something hard",
    "cn_def": "撞車；車禍；墜毀"
  },
  "incident": {
    "pos": "n.",
    "en_def": "something unusual or bad that happens",
    "cn_def": "事件；事故"
  },
  "mishap": {
    "pos": "n.",
    "en_def": "a small accident or piece of bad luck",
    "cn_def": "小意外；小差錯"
  },
  "injury": {
    "pos": "n.",
    "en_def": "harm done to a person's body",
    "cn_def": "傷害；受傷"
  },
  "damage": {
    "pos": "n.",
    "en_def": "harm done to a thing so it is broken or worth less",
    "cn_def": "損壞；損害"
  },
  "wound": {
    "pos": "n.",
    "en_def": "a cut or hurt place on the body",
    "cn_def": "傷口"
  },
  "emergency": {
    "pos": "n.",
    "en_def": "a sudden, dangerous situation that needs fast action",
    "cn_def": "緊急情況"
  },
  "ambulance": {
    "pos": "n.",
    "en_def": "a vehicle that takes sick or hurt people to hospital",
    "cn_def": "救護車"
  },
  "rescue": {
    "pos": "v.",
    "en_def": "to save someone from danger",
    "cn_def": "救援；營救"
  },
  "survive": {
    "pos": "v.",
    "en_def": "to stay alive or keep going after something bad",
    "cn_def": "倖存；存活；撐過"
  },
  "collapse": {
    "pos": "v.",
    "en_def": "to fall down suddenly",
    "cn_def": "倒塌；崩塌"
  },
  "slip": {
    "pos": "v.",
    "en_def": "to slide by accident and lose your balance",
    "cn_def": "滑倒；滑跤"
  },
  "fall": {
    "pos": "v.",
    "en_def": "to drop down to the ground by accident",
    "cn_def": "跌落；掉落；跌倒"
  },
  "trip": {
    "pos": "v.",
    "en_def": "to hit your foot on something and almost fall",
    "cn_def": "絆倒；絆到"
  },
  "careless": {
    "pos": "adj.",
    "en_def": "not paying enough attention; not careful",
    "cn_def": "粗心的；不小心的"
  },
  "dangerous": {
    "pos": "adj.",
    "en_def": "likely to hurt someone or cause harm",
    "cn_def": "危險的"
  },
  "serious": {
    "pos": "adj.",
    "en_def": "very bad and worrying",
    "cn_def": "嚴重的"
  },
  "minor": {
    "pos": "adj.",
    "en_def": "small and not very serious",
    "cn_def": "輕微的；次要的"
  },
  "unexpected": {
    "pos": "adj.",
    "en_def": "not expected; surprising",
    "cn_def": "意外的；出乎意料的"
  },
  "suddenly": {
    "pos": "adv.",
    "en_def": "quickly and without any warning",
    "cn_def": "突然地"
  },
  "fortunately": {
    "pos": "adv.",
    "en_def": "luckily; used before good news",
    "cn_def": "幸運地；幸好"
  },
  "unfortunately": {
    "pos": "adv.",
    "en_def": "sadly; used before bad news",
    "cn_def": "不幸地；遺憾地"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with close attention so you don't make mistakes or get hurt",
    "cn_def": "小心地；仔細地"
  },
  "witness": {
    "pos": "n.",
    "en_def": "a person who sees something happen",
    "cn_def": "目擊者；證人"
  },
  "report": {
    "pos": "v.",
    "en_def": "to tell a person in charge about something that happened",
    "cn_def": "報告；通報"
  },
  "investigate": {
    "pos": "v.",
    "en_def": "to try to find out the facts about something",
    "cn_def": "調查"
  },
  "cause": {
    "pos": "n.",
    "en_def": "the reason why something happens",
    "cn_def": "原因；起因"
  },
  "prevent": {
    "pos": "v.",
    "en_def": "to stop something from happening",
    "cn_def": "預防；防止"
  },
  "safety": {
    "pos": "n.",
    "en_def": "the state of being safe from danger or harm",
    "cn_def": "安全"
  },
  "recover": {
    "pos": "v.",
    "en_def": "to get well again after being sick or hurt",
    "cn_def": "康復；恢復"
  },
  "shock": {
    "pos": "n.",
    "en_def": "a sudden, strong feeling of surprise or fear after something bad",
    "cn_def": "震驚；驚嚇"
  },
  "treatment": {
    "pos": "n.",
    "en_def": "medical care for an illness or injury",
    "cn_def": "治療"
  },
  "traffic": {
    "pos": "n.",
    "en_def": "the cars and other vehicles on a road",
    "cn_def": "交通；車流"
  }
};

const EXTRA_GLOSSES = {};
