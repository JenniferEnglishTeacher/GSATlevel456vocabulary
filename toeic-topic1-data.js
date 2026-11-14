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
    "sentence": "A: Why are all the delivery trucks so late this morning, and why hasn't the warehouse manager answered any of my calls yet? B: There was a {{BLANK}} between two buses on the highway near the factory, so traffic is blocked for miles, and the manager is busy calling customers to explain the delay.",
    "cn": "A：為什麼今天早上所有的送貨卡車都這麼晚，而且倉庫經理到現在都還沒接我的電話？ B：工廠附近的高速公路上兩輛公車發生了【碰撞】，所以車流堵塞了好幾英里，經理正忙著打電話向客戶解釋延誤的原因。"
  },
  {
    "word": "crash",
    "pos": "n.",
    "cn_def": "撞車；車禍；墜毀",
    "en_def": "an accident in which a vehicle hits something hard",
    "sentence": "A: Did the sales manager make it to the conference in Chicago on time, or did someone else have to give his presentation to the clients? B: No, he missed the morning session because a car {{BLANK}} closed the main road to the airport, so he had to take a longer route and catch a later flight.",
    "cn": "A：業務經理有準時趕到芝加哥的研討會嗎？還是有別人必須代替他向客戶做簡報？ B：沒有，他錯過了上午的場次，因為一場【車禍】封閉了通往機場的主要道路，所以他只好繞遠路並改搭較晚的班機。"
  },
  {
    "word": "incident",
    "pos": "n.",
    "cn_def": "事件；事故",
    "en_def": "something unusual or bad that happens",
    "sentence": "A: Should I tell the supervisor that a heavy box fell from the top shelf in the warehouse this afternoon, even though it didn't hit anyone? B: Yes, you should, because every {{BLANK}} must be written down in the safety log, and the supervisor uses those notes to decide which shelves need to be repaired or replaced.",
    "cn": "A：今天下午倉庫最上層的架子掉下一個很重的箱子，雖然沒有砸到任何人，我還是應該告訴主管嗎？ B：對，你應該說，因為每一起【事件】都必須記錄在安全日誌裡，主管會根據這些紀錄決定哪些架子需要修理或更換。"
  },
  {
    "word": "mishap",
    "pos": "n.",
    "cn_def": "小意外；小差錯",
    "en_def": "a small accident or piece of bad luck",
    "sentence": "A: How did the product launch go yesterday, and were the new customers happy with the demonstration of our latest software? B: It went well overall, and most guests were impressed, but there was a small {{BLANK}} when the projector suddenly stopped working, so we had to present the last part without any slides.",
    "cn": "A：昨天的產品發表會進行得如何？新客戶對我們最新軟體的展示滿意嗎？ B：整體很順利，大部分來賓都印象深刻，但投影機突然故障時出了個小【意外】，所以最後一部分我們只好在沒有投影片的情況下報告。"
  },
  {
    "word": "injury",
    "pos": "n.",
    "cn_def": "傷害；受傷",
    "en_def": "harm done to a person's body",
    "sentence": "A: Why is Tom working from home this week, and will he still be able to join the client meeting on Thursday afternoon? B: He got a back {{BLANK}} while he was lifting heavy boxes in the storeroom, so his doctor told him to rest for a few days, but he can still join the meeting by video call.",
    "cn": "A：湯姆這週為什麼在家工作？他還能參加星期四下午的客戶會議嗎？ B：他在儲藏室搬重箱子時背部【受傷】了，所以醫生要他休息幾天，不過他還是可以透過視訊參加會議。"
  },
  {
    "word": "damage",
    "pos": "n.",
    "cn_def": "損壞；損害",
    "en_def": "harm done to a thing so it is broken or worth less",
    "sentence": "A: Has the insurance company checked the delivery van yet, and do they know how much the repairs are going to cost us? B: Yes, an agent came this morning to take photos, and he said the {{BLANK}} to the front door and the side mirror will cost about two thousand dollars, which our policy should cover.",
    "cn": "A：保險公司檢查過那輛送貨車了嗎？他們知道修理費用大概要花我們多少錢嗎？ B：檢查過了，今天早上有位專員來拍照，他說前門和側後照鏡的【損壞】大約要花兩千元修理，我們的保單應該會理賠。"
  },
  {
    "word": "wound",
    "pos": "n.",
    "cn_def": "傷口",
    "en_def": "a cut or hurt place on the body",
    "sentence": "A: The new worker on the night shift cut his hand on a sharp metal sheet at the factory. Was it serious, and did anyone help him? B: The company nurse cleaned the {{BLANK}} carefully and covered it with a clean bandage, and then she reminded him to wear protective gloves every time he handles metal parts.",
    "cn": "A：夜班的新員工在工廠被一片鋒利的金屬板割傷了手。嚴重嗎？有人幫他處理嗎？ B：公司護士仔細清潔了【傷口】，並用乾淨的繃帶包紮，然後提醒他每次處理金屬零件時都要戴上防護手套。"
  },
  {
    "word": "emergency",
    "pos": "n.",
    "cn_def": "緊急情況",
    "en_def": "a sudden, dangerous situation that needs fast action",
    "sentence": "A: What should all the visitors and staff do if the fire alarm rings during the board meeting on the twelfth floor this afternoon? B: In an {{BLANK}}, everyone should stay calm, leave the building by the nearest stairway, and meet in the parking lot, but please do not use the elevators under any circumstances.",
    "cn": "A：如果今天下午十二樓開董事會時火災警報響了，所有訪客和員工應該怎麼做？ B：遇到【緊急情況】時，每個人都應該保持冷靜，從最近的樓梯離開大樓，並到停車場集合，但無論如何都請不要搭電梯。"
  },
  {
    "word": "ambulance",
    "pos": "n.",
    "cn_def": "救護車",
    "en_def": "a vehicle that takes sick or hurt people to hospital",
    "sentence": "A: One of the visitors at the front desk suddenly fainted in the lobby, and she still isn't waking up. What should we do right now? B: Call an {{BLANK}} right away, and then ask the security guard to keep the area clear and open the main entrance so the medical team can get in quickly when they arrive.",
    "cn": "A：櫃台有位訪客突然在大廳昏倒了，到現在還沒有醒來。我們現在該怎麼辦？ B：馬上叫【救護車】，然後請警衛淨空該區域並打開正門，這樣醫療團隊抵達時就能快速進來。"
  },
  {
    "word": "rescue",
    "pos": "v.",
    "cn_def": "救援；營救",
    "en_def": "to save someone from danger",
    "sentence": "A: Was anyone trapped inside when the old storage building near the train station caught fire late last night? B: Two security workers were still inside checking the doors, but the firefighters arrived within ten minutes and managed to {{BLANK}} them before the roof fell down, so both of them are safe now.",
    "cn": "A：昨天深夜火車站附近的舊倉庫失火時，有人被困在裡面嗎？ B：有兩名保全人員還在裡面檢查門窗，但消防員在十分鐘內趕到，並在屋頂塌下來之前成功把他們【救出】，所以兩人現在都很安全。"
  },
  {
    "word": "survive",
    "pos": "v.",
    "cn_def": "倖存；存活；撐過",
    "en_def": "to stay alive or keep going after something bad",
    "sentence": "A: I read in the news about the passenger plane that made an emergency landing near the coast during the storm. Was anyone badly hurt? B: It was a frightening experience for everyone on board, but thanks to the pilot's skill, all the passengers managed to {{BLANK}}, and only a few of them needed to stay in the hospital overnight.",
    "cn": "A：我在新聞上看到那架客機在暴風雨中於海岸附近緊急降落。有人受重傷嗎？ B：對機上每個人來說都是很可怕的經歷，但多虧了機長的技術，所有乘客都【倖存】了，只有少數幾人需要在醫院住一晚。"
  },
  {
    "word": "collapse",
    "pos": "v.",
    "cn_def": "倒塌；崩塌",
    "en_def": "to fall down suddenly",
    "sentence": "A: Why is the parking garage behind our office closed to all employees today, and where are we supposed to park our cars? B: Engineers are worried that part of the second floor could {{BLANK}} after the heavy rain last weekend, so they are checking the structure today, and staff can use the public parking lot across the street.",
    "cn": "A：我們辦公室後面的停車場今天為什麼不開放給所有員工？我們應該把車停在哪裡？ B：工程師擔心上週末大雨過後二樓有一部分可能會【倒塌】，所以他們今天正在檢查結構，員工可以使用對街的公共停車場。"
  },
  {
    "word": "slip",
    "pos": "v.",
    "cn_def": "滑倒；滑跤",
    "en_def": "to slide by accident and lose your balance",
    "sentence": "A: Why is there a large yellow warning sign in front of the restroom on the third floor, right next to the meeting rooms? B: The cleaner just mopped the floor, and it is still very wet, so the sign warns people that they might {{BLANK}} and fall if they walk too quickly or carry heavy things past the area.",
    "cn": "A：三樓洗手間前面、就在會議室旁邊，為什麼放了一個大大的黃色警告標誌？ B：清潔人員剛拖完地，地板還很濕，所以這個標誌是提醒大家，如果走太快或搬重物經過這裡，可能會【滑倒】摔跤。"
  },
  {
    "word": "fall",
    "pos": "v.",
    "cn_def": "跌落；掉落；跌倒",
    "en_def": "to drop down to the ground by accident",
    "sentence": "A: Why do all the visitors and workers need to wear hard hats as soon as they enter the construction site, even for a short tour? B: Workers on the upper floors sometimes drop small tools, and these tools can {{BLANK}} from a great height, so a helmet protects your head from serious harm, even if you only stay for a few minutes.",
    "cn": "A：為什麼所有訪客和工人一進入工地就必須戴安全帽，即使只是短暫參觀也一樣？ B：上層樓的工人有時會掉落小工具，這些工具可能從很高的地方【掉落】，所以即使你只待幾分鐘，安全帽也能保護你的頭部免受嚴重傷害。"
  },
  {
    "word": "trip",
    "pos": "v.",
    "cn_def": "絆倒；絆到",
    "en_def": "to hit your foot on something and almost fall",
    "sentence": "A: Could you please move these long computer cables away from the walkway before the visitors from the head office arrive this afternoon? B: Sure, I'll do it right now, because someone could easily {{BLANK}} over them and get hurt, and the safety inspector is also coming at three o'clock to check every department on this floor.",
    "cn": "A：總公司的訪客今天下午抵達之前，能請你把這些長長的電腦線從走道移開嗎？ B：當然，我馬上處理，因為很容易有人被它們【絆倒】而受傷，而且安全檢查員三點也會來檢查這層樓的每個部門。"
  },
  {
    "word": "careless",
    "pos": "adj.",
    "cn_def": "粗心的；不小心的",
    "en_def": "not paying enough attention; not careful",
    "sentence": "A: How did the forklift hit the metal shelf in the warehouse, and were any of the boxes of new phones damaged? B: The driver was {{BLANK}} and kept looking at his phone while he was driving, so he hit the shelf and broke six boxes, and the manager gave him a written warning this morning.",
    "cn": "A：堆高機怎麼會撞上倉庫的金屬貨架？有任何一箱新手機受損嗎？ B：司機很【粗心】，開車時一直看手機，所以撞上了貨架並弄壞了六箱貨，經理今天早上給了他書面警告。"
  },
  {
    "word": "dangerous",
    "pos": "adj.",
    "cn_def": "危險的",
    "en_def": "likely to hurt someone or cause harm",
    "sentence": "A: Is it okay to store these boxes of cleaning chemicals next to the heater in the back room until the supplier picks them up next week? B: No, that is very {{BLANK}} because those chemicals can catch fire easily when they get hot, so please move them to the cool storage room downstairs and keep the door locked.",
    "cn": "A：在供應商下週來取貨之前，可以把這幾箱清潔化學藥品放在後面房間的暖氣旁邊嗎？ B：不行，那非常【危險】，因為那些化學藥品變熱時很容易起火，所以請把它們移到樓下陰涼的儲藏室，並把門鎖好。"
  },
  {
    "word": "serious",
    "pos": "adj.",
    "cn_def": "嚴重的",
    "en_def": "very bad and worrying",
    "sentence": "A: I heard there was an accident at the factory last week. Was it {{BLANK}}, and will production be stopped for a long time? B: Fortunately not, because the two workers only had small cuts on their hands, but the machine was badly damaged, so the production line will be closed until a new one arrives next Monday.",
    "cn": "A：我聽說上週工廠發生了事故。情況【嚴重】嗎？生產線會停工很久嗎？ B：幸好不嚴重，那兩名員工手上只有小割傷，但機器嚴重損壞，所以生產線會關閉，直到下週一新機器送達為止。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "輕微的；次要的",
    "en_def": "small and not very serious",
    "sentence": "A: Do we need to cancel the company trip to the mountains because of the bus accident this morning, or can we still go? B: No, it was only a {{BLANK}} accident in the parking lot and nobody was hurt, and the bus company is sending another vehicle, so we can still leave on time after lunch.",
    "cn": "A：因為今天早上遊覽車發生事故，我們需要取消公司的山區旅遊嗎？還是仍然可以去？ B：不用，那只是停車場裡一起【輕微的】事故，沒有人受傷，而且客運公司會另派一輛車，所以我們午餐後還是可以準時出發。"
  },
  {
    "word": "unexpected",
    "pos": "adj.",
    "cn_def": "意外的；出乎意料的",
    "en_def": "not expected; surprising",
    "sentence": "A: Why did the shipment of electronic parts from Japan arrive three days late, and did our customers complain about the delay? B: There was an {{BLANK}} storm along the coast, so the ship had to wait in the port until the weather improved, and we sent an email to every customer to explain the situation.",
    "cn": "A：從日本來的那批電子零件為什麼晚了三天才到？我們的客戶有抱怨延誤嗎？ B：沿海出現了一場【出乎意料的】暴風雨，所以船只好在港口等到天氣好轉，我們也寄了電子郵件給每位客戶說明情況。"
  },
  {
    "word": "suddenly",
    "pos": "adv.",
    "cn_def": "突然地",
    "en_def": "quickly and without any warning",
    "sentence": "A: What happened during the sales presentation this morning? Some people said the meeting room became very dark. B: The lights {{BLANK}} went out in the whole building because of a power problem, so we had to finish the meeting with only the light from our laptops, and the clients thought it was quite funny.",
    "cn": "A：今天早上的業務簡報發生了什麼事？有些人說會議室變得很暗。 B：因為電力問題，整棟大樓的燈【突然】熄滅了，所以我們只好靠筆電的光把會議開完，客戶們覺得還蠻好笑的。"
  },
  {
    "word": "fortunately",
    "pos": "adv.",
    "cn_def": "幸運地；幸好",
    "en_def": "luckily; used before good news",
    "sentence": "A: I heard that a delivery truck hit the front gate of our office building early this morning. Was anyone hurt in the accident? B: Yes, the gate was badly damaged, but {{BLANK}}, nobody was standing near it at that time, and the driver was not hurt either, so we only need to call a repair company today.",
    "cn": "A：我聽說今天一大早有輛送貨卡車撞上了我們辦公大樓的大門。有人在事故中受傷嗎？ B：有，大門嚴重損壞，但【幸好】當時沒有人站在附近，司機也沒有受傷，所以我們今天只需要打電話找維修公司就好。"
  },
  {
    "word": "unfortunately",
    "pos": "adv.",
    "cn_def": "不幸地；遺憾地",
    "en_def": "sadly; used before bad news",
    "sentence": "A: Will Ms. Lin still be able to give her speech at the marketing conference tomorrow morning, or should we change the schedule? B: {{BLANK}}, she hurt her ankle while she was jogging in the park last night, so her assistant will speak in her place, and we don't need to change the schedule at all.",
    "cn": "A：林小姐明天早上還能在行銷研討會上演講嗎？還是我們應該更改議程？ B：【很遺憾】，她昨晚在公園慢跑時扭傷了腳踝，所以會由她的助理代替她發言，我們完全不需要更改議程。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "小心地；仔細地",
    "en_def": "with close attention so you don't make mistakes or get hurt",
    "sentence": "A: Is there anything important I should know before I start using the new cutting machine in the workshop for the first time? B: Yes, read the instructions {{BLANK}} before you turn it on, and always wear safety glasses and gloves, because small pieces of metal can fly out and hurt your eyes or hands.",
    "cn": "A：我第一次使用工作坊裡那台新的切割機之前，有什麼重要的事情是我應該知道的嗎？ B：有，開機前要【仔細地】閱讀說明書，而且一定要戴上護目鏡和手套，因為小金屬碎片可能會飛出來傷到你的眼睛或手。"
  },
  {
    "word": "witness",
    "pos": "n.",
    "cn_def": "目擊者；證人",
    "en_def": "a person who sees something happen",
    "sentence": "A: Did anyone see the car hit the bicycle outside our store this afternoon? The police officer wants to speak to someone who was there. B: Yes, one of our cashiers was a {{BLANK}} because she was standing by the window, and she has already told the police officer exactly what she saw before the ambulance came.",
    "cn": "A：今天下午有人看到那輛車在我們店外撞上腳踏車嗎？警察想找當時在場的人談一談。 B：有，我們的一位收銀員是【目擊者】，因為她當時站在窗邊，她已經在救護車來之前把看到的情況詳細告訴警察了。"
  },
  {
    "word": "report",
    "pos": "v.",
    "cn_def": "報告；通報",
    "en_def": "to tell a person in charge about something that happened",
    "sentence": "A: What should I do if I see broken equipment in the laboratory, especially if other people are planning to use it later in the day? B: You should {{BLANK}} the problem to the safety officer immediately, and you should also put a \"Do Not Use\" sign on the equipment so that nobody touches it before it is repaired.",
    "cn": "A：如果我在實驗室看到損壞的設備，尤其是其他人當天稍後還打算使用時，我該怎麼做？ B：你應該立刻向安全負責人【通報】這個問題，並在設備上貼上「請勿使用」的標示，這樣在修好之前就不會有人碰它。"
  },
  {
    "word": "investigate",
    "pos": "v.",
    "cn_def": "調查",
    "en_def": "to try to find out the facts about something",
    "sentence": "A: Does anyone know why the machine on Line 3 caught fire yesterday, and is it safe for the workers to go back to that area? B: Not yet, but the safety team will {{BLANK}} the problem this week, and they will share their findings with all staff, so please keep Line 3 closed until they finish their report.",
    "cn": "A：有人知道昨天三號生產線的機器為什麼起火嗎？工人回到那個區域安全嗎？ B：還不知道，但安全小組本週會【調查】這個問題，並將結果告知全體員工，所以在他們完成報告之前，請讓三號生產線保持關閉。"
  },
  {
    "word": "cause",
    "pos": "n.",
    "cn_def": "原因；起因",
    "en_def": "the reason why something happens",
    "sentence": "A: Have the engineers found out why the elevator stopped between the fifth and sixth floors yesterday with six people inside? B: Yes, they said the {{BLANK}} was an electrical problem in the control box, and the elevator will be fixed by Friday, so please use the stairs or the other elevator until then.",
    "cn": "A：工程師查出昨天電梯為什麼載著六個人卡在五樓和六樓之間了嗎？ B：查出來了，他們說【原因】是控制箱的電力問題，電梯會在星期五前修好，所以在那之前請走樓梯或使用另一部電梯。"
  },
  {
    "word": "prevent",
    "pos": "v.",
    "cn_def": "預防；防止",
    "en_def": "to stop something from happening",
    "sentence": "A: Why are we putting new rubber mats at the main entrance and in front of the elevators on the first floor this week? B: The mats will help {{BLANK}} accidents on rainy days, because the floor near the doors gets very wet and slippery, and last month two customers almost fell while they were walking in.",
    "cn": "A：我們這週為什麼要在一樓正門和電梯前面鋪新的橡膠地墊？ B：這些地墊有助於【預防】雨天發生意外，因為門口附近的地板會變得又濕又滑，上個月就有兩位客戶走進來時差點跌倒。"
  },
  {
    "word": "safety",
    "pos": "n.",
    "cn_def": "安全",
    "en_def": "the state of being safe from danger or harm",
    "sentence": "A: Do new employees have to attend any training before they start working on the production floor, or can they begin right away? B: Everyone must attend a {{BLANK}} workshop on the first day, where they learn how to use the fire extinguishers, where the emergency exits are, and what to do if someone gets hurt.",
    "cn": "A：新進員工在生產線開始工作之前必須參加任何訓練嗎？還是可以馬上開始？ B：每個人第一天都必須參加【安全】研習，學習如何使用滅火器、緊急出口在哪裡，以及有人受傷時該怎麼做。"
  },
  {
    "word": "recover",
    "pos": "v.",
    "cn_def": "康復；恢復",
    "en_def": "to get well again after being sick or hurt",
    "sentence": "A: When will Mr. Chen come back to the office after his car accident, and who is taking care of his projects right now? B: His doctor says he needs about two weeks to {{BLANK}}, so the three of us on his team will share his projects until he returns, and he will answer emails from home when he feels better.",
    "cn": "A：陳先生出車禍後什麼時候會回辦公室？現在由誰負責他的專案？ B：他的醫生說他大約需要兩週時間【康復】，所以在他回來之前，我們團隊三個人會分擔他的專案，等他感覺好一點時會在家回覆電子郵件。"
  },
  {
    "word": "shock",
    "pos": "n.",
    "cn_def": "震驚；驚嚇",
    "en_def": "a sudden, strong feeling of surprise or fear after something bad",
    "sentence": "A: How is the delivery driver who was in the accident on Main Street this morning? I heard his truck was badly damaged. B: He was not badly hurt, but he was in {{BLANK}} for a while and could not answer questions clearly, so the paramedics kept him in the ambulance until he felt calm enough to talk.",
    "cn": "A：今天早上在緬因街出車禍的那位送貨司機還好嗎？我聽說他的卡車嚴重損壞。 B：他沒有受重傷，但有一段時間處於【驚嚇】狀態，無法清楚回答問題，所以急救人員讓他待在救護車上，直到他冷靜到可以說話為止。"
  },
  {
    "word": "treatment",
    "pos": "n.",
    "cn_def": "治療",
    "en_def": "medical care for an illness or injury",
    "sentence": "A: Does our company insurance pay for hospital costs if an employee gets hurt in an accident while working at the factory? B: Yes, it covers all medical {{BLANK}} for injuries at work, including doctor visits and medicine, but you must fill out the claim forms and submit them to the HR office within thirty days.",
    "cn": "A：如果員工在工廠工作時發生意外受傷，公司的保險會支付醫療費用嗎？ B：會，它涵蓋所有工作傷害的醫療【治療】費用，包括看診和藥品，但你必須填寫理賠表格，並在三十天內交給人資辦公室。"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "cn_def": "交通；車流",
    "en_def": "the cars and other vehicles on a road",
    "sentence": "A: Should we leave for the airport now to meet the clients from Singapore, or can we finish this report first? B: We should leave right away, because there was an accident on the bridge an hour ago, so the {{BLANK}} will be heavy all the way to the airport, and we don't want the clients to wait for us.",
    "cn": "A：我們現在該出發去機場接新加坡來的客戶了嗎？還是可以先把這份報告完成？ B：我們應該馬上出發，因為一小時前橋上發生了事故，所以到機場一路上【交通】都會很擁擠，我們可不想讓客戶等我們。"
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
