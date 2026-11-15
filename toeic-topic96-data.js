// Topic 96 Quiz Data: Damage 損壞
// Source word list: https://www.examword.com/group-topic/damage — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T96 - Damage 損壞",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "harm",
    "pos": "n.",
    "cn_def": "傷害；損害",
    "en_def": "damage or hurt caused to someone or something",
    "sentence": "A: Why did the factory stop using the cheaper cleaning chemical that the new supplier sent us last spring? B: The safety team found that it could cause serious {{BLANK}} to workers' skin and eyes, so the manager decided to return all the bottles and go back to the old product.",
    "cn": "A：為什麼工廠停止使用新供應商去年春天送來的那款較便宜的清潔化學品？ B：安全小組發現它可能對工人的皮膚和眼睛造成嚴重的【傷害】，所以經理決定退回所有瓶子，改回使用舊產品。"
  },
  {
    "word": "destruction",
    "pos": "n.",
    "cn_def": "破壞；毀滅",
    "en_def": "the act of damaging something so badly that it no longer exists or works",
    "sentence": "A: Why is the insurance company sending three more inspectors to the coast this week instead of just one? B: The storm last weekend caused the {{BLANK}} of more than two hundred homes and several hotels along the beach, so they need extra staff to check every claim quickly.",
    "cn": "A：為什麼保險公司這週要再派三名檢查員到海岸，而不是只派一名？ B：上週末的暴風雨造成海灘沿線兩百多棟房屋和數間飯店【毀壞】，所以他們需要額外人手快速審核每一件理賠。"
  },
  {
    "word": "ruin",
    "pos": "v.",
    "cn_def": "毀掉；破壞",
    "en_def": "to spoil or damage something completely",
    "sentence": "A: Should we hold the company picnic in the park on Saturday, or would it be safer to book the hotel ballroom instead? B: Let's book the ballroom, because the weather report says heavy rain is coming, and I don't want a storm to {{BLANK}} the whole day for our staff and their families.",
    "cn": "A：我們週六要在公園舉辦公司野餐，還是改訂飯店宴會廳比較保險？ B：訂宴會廳吧，因為氣象報告說會下大雨，我不希望一場暴風雨【毀掉】員工和他們家人的一整天。"
  },
  {
    "word": "loss",
    "pos": "n.",
    "cn_def": "損失；喪失",
    "en_def": "the fact of losing something, or the money or value you lose",
    "sentence": "A: How much did the fire in the storage room last month cost the bookstore, and was everything covered by insurance? B: The owner said the total {{BLANK}} was about fifty thousand dollars, mostly because of burned books and smoke, but the insurance company will pay for nearly all of it.",
    "cn": "A：上個月儲藏室的火災讓書店損失多少？所有東西都有保險理賠嗎？ B：老闆說總【損失】大約五萬美元，主要是燒毀的書和煙害，但保險公司幾乎會全額賠償。"
  },
  {
    "word": "break",
    "pos": "v.",
    "cn_def": "打破；弄壞",
    "en_def": "to damage something so that it separates into pieces or stops working",
    "sentence": "A: Why are the movers wrapping every glass and plate in so much paper before they put them into the boxes? B: The road to our new office is very bumpy, and they don't want anything to {{BLANK}} during the trip, because the company would have to pay for any damage.",
    "cn": "A：搬家工人為什麼在把每個玻璃杯和盤子放進箱子前都用這麼多紙包起來？ B：通往我們新辦公室的路很顛簸，他們不希望任何東西在途中【破掉】，因為任何損壞公司都得賠償。"
  },
  {
    "word": "crack",
    "pos": "n.",
    "cn_def": "裂縫；裂痕",
    "en_def": "a thin line on the surface of something where it has started to break",
    "sentence": "A: Why did the building manager close the north stairway this morning without telling any of the tenants first? B: A cleaner noticed a long {{BLANK}} in the wall next to the third-floor landing, so the manager wants an engineer to check that the stairs are still safe to use.",
    "cn": "A：大樓經理今天早上為什麼沒先通知任何住戶就封閉了北側樓梯？ B：一位清潔人員發現三樓平台旁的牆上有一道長長的【裂縫】，所以經理想請工程師檢查樓梯是否仍能安全使用。"
  },
  {
    "word": "shatter",
    "pos": "v.",
    "cn_def": "粉碎；碎裂",
    "en_def": "to break suddenly into many small pieces",
    "sentence": "A: Why does the new display case in the jewelry store cost so much more than the old one we had before? B: It is made of special safety glass that will not {{BLANK}} even if someone hits it with a hammer, so our expensive rings and watches are much better protected at night.",
    "cn": "A：珠寶店新的展示櫃為什麼比我們以前那個貴這麼多？ B：它是用特殊的安全玻璃做的，即使有人用鐵鎚敲也不會【碎裂】，所以我們昂貴的戒指和手錶在夜間能受到更好的保護。"
  },
  {
    "word": "scratch",
    "pos": "n.",
    "cn_def": "刮痕；擦痕",
    "en_def": "a thin mark or cut on a surface",
    "sentence": "A: Why did the customer return the laptop she bought from our online shop only two days after it arrived? B: She said there was a deep {{BLANK}} across the screen when she opened the box, so we apologized, sent her a new one, and asked the warehouse to pack more carefully.",
    "cn": "A：那位顧客為什麼在筆電送達後才兩天就把在我們網路商店買的電腦退回？ B：她說打開箱子時螢幕上有一道很深的【刮痕】，所以我們向她道歉、寄了一台新的給她，並請倉庫包裝時更小心。"
  },
  {
    "word": "dent",
    "pos": "n.",
    "cn_def": "凹痕",
    "en_def": "a hollow place in a hard surface where something has hit it",
    "sentence": "A: Why is the sales manager so angry about the company car that came back from the repair shop yesterday afternoon? B: Someone hit it in the parking lot while it was there, and now there is a large {{BLANK}} in the back door that the shop refuses to fix for free.",
    "cn": "A：業務經理為什麼對昨天下午從修車廠回來的公司車那麼生氣？ B：車子停在那裡的時候有人在停車場撞到它，現在後車門上有一個很大的【凹痕】，而修車廠拒絕免費修理。"
  },
  {
    "word": "tear",
    "pos": "v.",
    "cn_def": "撕破；扯破",
    "en_def": "to pull something apart so that it splits, or to become split",
    "sentence": "A: Why are we switching to a new company for the shopping bags we give customers at the checkout counter? B: The old paper bags are so thin that they often {{BLANK}} when people put heavy bottles inside, and many shoppers have complained about dropping their groceries in the parking lot.",
    "cn": "A：我們為什麼要換一家公司來提供結帳櫃檯給顧客的購物袋？ B：舊的紙袋太薄了，人們放重的瓶子進去時常常會【破掉】，很多購物者抱怨在停車場把買的東西掉了一地。"
  },
  {
    "word": "rip",
    "pos": "v.",
    "cn_def": "撕裂；扯開",
    "en_def": "to tear something quickly and roughly",
    "sentence": "A: Why do the warehouse workers have to wear thick gloves when they open the boxes from the new supplier? B: The boxes are sealed with very strong plastic straps, and if you try to {{BLANK}} them open with your bare hands, you can easily cut your fingers on the sharp edges.",
    "cn": "A：倉庫工人打開新供應商送來的箱子時為什麼要戴厚手套？ B：箱子是用很堅固的塑膠帶封起來的，如果你想徒手把它們【撕開】，很容易被銳利的邊緣割傷手指。"
  },
  {
    "word": "collapse",
    "pos": "v.",
    "cn_def": "倒塌；崩塌",
    "en_def": "to fall down suddenly because of weakness or damage",
    "sentence": "A: Why has the city council decided to close the old wooden bridge near the train station to all traffic? B: Engineers found that its main supports are badly damaged by water, and they warned that the bridge could {{BLANK}} if heavy trucks keep driving across it every day.",
    "cn": "A：市議會為什麼決定將火車站附近的舊木橋全面禁止通行？ B：工程師發現它的主要支柱被水嚴重損壞，並警告如果重型卡車每天繼續通過，這座橋可能會【倒塌】。"
  },
  {
    "word": "burn",
    "pos": "v.",
    "cn_def": "燒毀；燒傷",
    "en_def": "to damage or destroy something with fire or heat",
    "sentence": "A: Why did the hotel kitchen staff have to attend an extra safety training session this afternoon? B: Last week a cook left a pan of oil on the stove for too long, and the manager wants everyone to know how to stop a small fire before it can {{BLANK}} down the whole kitchen.",
    "cn": "A：飯店廚房員工今天下午為什麼得參加額外的安全訓練課程？ B：上週有位廚師把一鍋油放在爐子上太久，經理希望大家都知道如何在小火【燒毀】整個廚房之前把它撲滅。"
  },
  {
    "word": "flood",
    "pos": "n.",
    "cn_def": "水災；洪水",
    "en_def": "a large amount of water that covers an area that is usually dry",
    "sentence": "A: Why are all the computers and printers in the basement office being moved up to the second floor today? B: Heavy rain is expected all weekend, and the last time there was a {{BLANK}} in this part of the city, the basement filled with water and we lost a lot of equipment.",
    "cn": "A：地下室辦公室所有的電腦和印表機今天為什麼都要搬到二樓？ B：預計整個週末都會下大雨，上次這一區發生【水災】時，地下室整個淹水，我們損失了很多設備。"
  },
  {
    "word": "corrode",
    "pos": "v.",
    "cn_def": "腐蝕；侵蝕",
    "en_def": "to slowly damage metal by a chemical action, such as rust",
    "sentence": "A: Why does the maintenance team check the metal pipes on the roof of the seaside hotel every single month? B: The salty air from the ocean can {{BLANK}} the steel much faster than in the city, so they look for rust early and replace any weak pipes before they start leaking.",
    "cn": "A：維修團隊為什麼每個月都要檢查海邊飯店屋頂上的金屬管線？ B：來自海洋的鹹空氣【腐蝕】鋼材的速度比在城市裡快得多，所以他們會及早檢查有沒有生鏽，並在管線開始漏水前更換脆弱的部分。"
  },
  {
    "word": "wear",
    "pos": "v.",
    "cn_def": "磨損；耗損",
    "en_def": "to become thinner or damaged because of long use",
    "sentence": "A: Why did the office manager choose such an expensive carpet for the main hallway instead of a cheaper one? B: Hundreds of employees and visitors walk through that hallway every day, and a cheap carpet would quickly {{BLANK}} out and look old, so this one will save money in the long run.",
    "cn": "A：辦公室經理為什麼為主要走廊選了這麼貴的地毯，而不是便宜一點的？ B：每天有數百名員工和訪客走過那條走廊，便宜的地毯很快就會【磨損】變舊，所以長期來看這款反而比較省錢。"
  },
  {
    "word": "erode",
    "pos": "v.",
    "cn_def": "侵蝕；逐漸削弱",
    "en_def": "to slowly damage or remove something, especially land, by water or wind",
    "sentence": "A: Why is the beach resort spending so much money on a new stone wall along the shore this year? B: Every winter, strong waves {{BLANK}} more of the sand in front of the hotel, and the owners worry that the swimming pool and the restaurant will be in danger within a few years.",
    "cn": "A：海灘度假村今年為什麼花這麼多錢在海岸沿線蓋新的石牆？ B：每年冬天，強浪都會【侵蝕】飯店前更多的沙灘，業主擔心幾年內游泳池和餐廳就會有危險。"
  },
  {
    "word": "decay",
    "pos": "v.",
    "cn_def": "腐爛；衰敗",
    "en_def": "to become rotten or slowly break down over time",
    "sentence": "A: Why did the restaurant throw away so many boxes of fruit and vegetables after the long holiday weekend? B: The refrigerator stopped working on Saturday while the kitchen was closed, and by Tuesday morning much of the fresh food had started to {{BLANK}}, so the chef said it was not safe to serve.",
    "cn": "A：餐廳在連假週末過後為什麼丟掉了那麼多箱蔬果？ B：週六廚房休息時冰箱故障了，到了週二早上很多新鮮食物已經開始【腐爛】，所以主廚說不能安全地端給客人。"
  },
  {
    "word": "injure",
    "pos": "v.",
    "cn_def": "使受傷；傷害",
    "en_def": "to hurt a person or animal",
    "sentence": "A: Why does the warehouse supervisor insist that everyone wear a hard hat, even when they are only walking through? B: Boxes sometimes fall from the high shelves without warning, and a heavy one could seriously {{BLANK}} someone's head, so the rule protects both the workers and the company.",
    "cn": "A：倉庫主管為什麼堅持每個人都要戴安全帽，即使只是路過也一樣？ B：箱子有時會毫無預警地從高架上掉下來，重的箱子可能會嚴重【傷到】人的頭部，所以這條規定同時保護了員工和公司。"
  },
  {
    "word": "destroy",
    "pos": "v.",
    "cn_def": "摧毀；毀壞",
    "en_def": "to damage something so badly that it cannot be used or repaired",
    "sentence": "A: Why does the law firm keep paper copies of all its important contracts in a bank safe across town? B: If a fire or an earthquake ever hit our office building, it could {{BLANK}} every document we have here, so the partners want a second copy stored somewhere completely safe.",
    "cn": "A：律師事務所為什麼把所有重要合約的紙本存放在城另一頭的銀行保險箱裡？ B：如果我們的辦公大樓遇到火災或地震，可能會【毀掉】我們這裡所有的文件，所以合夥人希望在完全安全的地方保存第二份副本。"
  },
  {
    "word": "impair",
    "pos": "v.",
    "cn_def": "損害；削弱",
    "en_def": "to make something weaker or less good than before",
    "sentence": "A: Why did the airline change its rules so that pilots must rest for at least twelve hours between long flights? B: Studies showed that a lack of sleep can {{BLANK}} a pilot's judgment and reaction time, and the company does not want to take any risks with passenger safety.",
    "cn": "A：航空公司為什麼改變規定，要求機師在長途航班之間至少休息十二小時？ B：研究顯示睡眠不足會【損害】機師的判斷力和反應時間，公司不想在乘客安全上冒任何風險。"
  },
  {
    "word": "defect",
    "pos": "n.",
    "cn_def": "缺陷；瑕疵",
    "en_def": "a fault or problem in something that makes it not work correctly",
    "sentence": "A: Why did the car company ask thousands of customers to bring their new cars back to the dealers this month? B: Engineers discovered a {{BLANK}} in the brake system of one model, so the company decided to fix every car for free before anyone could get hurt on the road.",
    "cn": "A：汽車公司這個月為什麼要求數千名顧客把新車開回經銷商？ B：工程師發現某款車型的煞車系統有【缺陷】，所以公司決定在有人在路上受傷之前免費修理每一輛車。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "故障；毛病",
    "en_def": "a problem in a machine or system that stops it working correctly",
    "sentence": "A: Why were all the elevators in the shopping mall out of service for most of yesterday afternoon? B: The technicians found an electrical {{BLANK}} in the main control panel, so they had to turn off the power to every elevator until they could replace the broken part safely.",
    "cn": "A：購物中心所有的電梯為什麼昨天下午大部分時間都停止運作？ B：技術人員在主控制面板發現電路【故障】，所以他們必須關掉每部電梯的電源，直到能安全更換損壞的零件。"
  },
  {
    "word": "leak",
    "pos": "n.",
    "cn_def": "漏水；洩漏",
    "en_def": "a small hole or crack that lets liquid or gas escape",
    "sentence": "A: Why is there a large plastic bucket in the corner of the meeting room on the fifth floor this week? B: There is a {{BLANK}} in the ceiling above that corner, and whenever it rains, water drips onto the carpet, so the building manager has called a roofer to come on Friday.",
    "cn": "A：五樓會議室角落這週為什麼放了一個大塑膠桶？ B：那個角落上方的天花板有【漏水】處，每次下雨水都會滴到地毯上，所以大樓經理已經找了屋頂工人週五來修。"
  },
  {
    "word": "spill",
    "pos": "v.",
    "cn_def": "灑出；濺出",
    "en_def": "to accidentally let liquid flow out of its container",
    "sentence": "A: Why aren't employees allowed to bring coffee or tea into the new computer training room anymore? B: Last month a trainee was careless enough to {{BLANK}} a whole cup of hot coffee onto one of the keyboards, and the repair cost was so high that the manager decided to ban all drinks.",
    "cn": "A：員工為什麼不能再把咖啡或茶帶進新的電腦訓練教室？ B：上個月有位受訓人員不小心把一整杯熱咖啡【灑】在其中一個鍵盤上，維修費用非常高，所以經理決定禁止所有飲料。"
  },
  {
    "word": "stain",
    "pos": "n.",
    "cn_def": "污漬；污點",
    "en_def": "a dirty mark that is difficult to remove",
    "sentence": "A: Why did the hotel guest in room 512 ask the front desk for a discount when she checked out this morning? B: She found a large brown {{BLANK}} on the bed sheet when she arrived late last night, and the housekeeping staff did not come to change it until almost midnight.",
    "cn": "A：512號房的房客今天早上退房時為什麼要求櫃檯打折？ B：她昨晚很晚抵達時發現床單上有一大塊褐色【污漬】，而房務人員直到快半夜才來更換。"
  },
  {
    "word": "fragile",
    "pos": "adj.",
    "cn_def": "易碎的；脆弱的",
    "en_def": "easily broken or damaged",
    "sentence": "A: Why did the shipping company charge us extra for the boxes we sent to the museum in Paris last week? B: We were sending old glass vases that are very {{BLANK}}, so the boxes needed special foam packing and careful handling all the way from our warehouse to the museum.",
    "cn": "A：貨運公司為什麼對我們上週寄到巴黎博物館的箱子額外收費？ B：我們寄的是非常【易碎】的古老玻璃花瓶，所以從倉庫到博物館一路上箱子都需要特殊的泡棉包裝和小心搬運。"
  },
  {
    "word": "severe",
    "pos": "adj.",
    "cn_def": "嚴重的；劇烈的",
    "en_def": "very serious or bad",
    "sentence": "A: Why did the factory in the south have to stop production for almost three weeks last summer? B: A typhoon caused {{BLANK}} damage to the roof and the machines on the ground floor, and the owners had to wait for new equipment to arrive from Japan before they could reopen.",
    "cn": "A：南部的工廠去年夏天為什麼得停產將近三週？ B：一場颱風對屋頂和一樓的機器造成【嚴重的】損壞，業主必須等新設備從日本運來才能重新開工。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "輕微的；次要的",
    "en_def": "small and not very serious",
    "sentence": "A: Was anyone hurt when the delivery van hit the post outside the bakery early this morning? B: No, the driver was fine, and there was only {{BLANK}} damage to the front light of the van, so he was able to finish the rest of his deliveries before lunch.",
    "cn": "A：今天一早送貨車撞到麵包店外的柱子時，有人受傷嗎？ B：沒有，司機沒事，貨車只有前燈有【輕微的】損壞，所以他還能在午餐前送完剩下的貨。"
  },
  {
    "word": "permanent",
    "pos": "adj.",
    "cn_def": "永久的；長期的",
    "en_def": "lasting for a very long time or forever",
    "sentence": "A: Why does the electronics company give free earplugs to every worker who operates the loud machines in the factory? B: Working near that kind of noise for years can cause {{BLANK}} hearing loss, and the company wants to protect its staff before any damage happens that cannot be fixed.",
    "cn": "A：電子公司為什麼要發免費耳塞給每位在工廠操作吵雜機器的員工？ B：長年在那種噪音附近工作可能導致【永久性】聽力受損，公司希望在造成無法修復的傷害之前保護員工。"
  },
  {
    "word": "temporary",
    "pos": "adj.",
    "cn_def": "暫時的；臨時的",
    "en_def": "lasting for only a short time",
    "sentence": "A: Where will the accounting team work while the workers repair the water damage in their office next month? B: The company has rented a {{BLANK}} space on the third floor of the building across the street, and the team will stay there for about six weeks until the repairs are finished.",
    "cn": "A：下個月工人修理會計團隊辦公室的水損時，他們要在哪裡辦公？ B：公司已經在對街大樓的三樓租了一個【臨時】空間，團隊會在那裡待大約六週，直到修繕完成。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修理；修補",
    "en_def": "to fix something that is broken or damaged",
    "sentence": "A: How long will it take to get the photocopier on the second floor working again after it jammed this morning? B: The technician said he can {{BLANK}} it by Thursday, but he must order a new roller from the supplier first, so we should use the machine downstairs until then.",
    "cn": "A：二樓的影印機今天早上卡紙後，要多久才能恢復運作？ B：技術人員說他週四前可以【修好】，但他得先向供應商訂購新的滾輪，所以在那之前我們應該用樓下的機器。"
  },
  {
    "word": "restore",
    "pos": "v.",
    "cn_def": "修復；恢復",
    "en_def": "to bring something back to its good condition",
    "sentence": "A: Why did the hotel close its famous old ballroom for the whole of last year? B: The owners hired a team of experts to {{BLANK}} the painted ceiling and the wooden floor, which had been damaged by water and time, and now the room looks exactly as it did a hundred years ago.",
    "cn": "A：飯店去年為什麼整年關閉了那間著名的老宴會廳？ B：業主請了一組專家來【修復】被水和歲月損壞的彩繪天花板和木地板，現在那個廳看起來和一百年前一模一樣。"
  },
  {
    "word": "recover",
    "pos": "v.",
    "cn_def": "恢復；取回",
    "en_def": "to get back something lost, or to return to a normal condition",
    "sentence": "A: Did the IT department manage to save any of the sales files after the main server crashed on Monday night? B: Yes, they were able to {{BLANK}} almost all of the data from the backup system, but the reports we wrote on Monday afternoon were lost, so we have to do them again.",
    "cn": "A：週一晚上主伺服器當機後，資訊部有沒有救回任何業務檔案？ B：有，他們從備份系統【復原】了幾乎所有資料，但我們週一下午寫的報告不見了，所以得重做。"
  }
];

const MCQS = [
  {
    "q": "The new cleaning product is safe for office use. It will not cause any _____ to your skin or to the furniture.",
    "options": [
      "harm",
      "leak",
      "dent",
      "flood"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The earthquake led to the _____ of many old buildings downtown. The city now plans to rebuild the area with safer designs.",
    "options": [
      "stain",
      "leak",
      "destruction",
      "scratch"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The airline reported a large _____ last quarter because fuel prices rose sharply. Managers are now looking for ways to cut costs.",
    "options": [
      "crack",
      "loss",
      "defect",
      "flood"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Please handle these coffee mugs carefully when you unpack them. They are made of thin glass and can _____ easily.",
    "options": [
      "recover",
      "restore",
      "injure",
      "break"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The inspector found a small _____ in the concrete wall of the parking garage. Engineers will check whether the structure is still safe.",
    "options": [
      "loss",
      "harm",
      "crack",
      "flood"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The storm was so strong that it made several windows _____ in the hotel lobby. Pieces of glass covered the floor near the entrance.",
    "options": [
      "shatter",
      "recover",
      "decay",
      "erode"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "A shopping cart rolled into my car in the supermarket parking lot. Now there is a small _____ in the passenger door.",
    "options": [
      "flood",
      "leak",
      "loss",
      "dent"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Be careful with that old map when you take it out of the frame. The paper is very thin and may _____ easily.",
    "options": [
      "corrode",
      "tear",
      "injure",
      "restore"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "After days of heavy snow, the roof of the old warehouse began to _____. Luckily, no workers were inside at the time.",
    "options": [
      "recover",
      "spill",
      "repair",
      "collapse"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The fire department warned shop owners not to store boxes near heaters. A small fire could quickly _____ down the whole building.",
    "options": [
      "spill",
      "burn",
      "injure",
      "recover"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The river rose quickly after three days of heavy rain. The _____ closed several roads and damaged many shops near the bank.",
    "options": [
      "flood",
      "stain",
      "dent",
      "scratch"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Salt from the winter roads can _____ the metal under your car. Washing the car often helps prevent rust and keeps it safe.",
    "options": [
      "recover",
      "spill",
      "corrode",
      "restore"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "These work boots are made of very strong leather. They will not _____ out even after years of daily use on the factory floor.",
    "options": [
      "restore",
      "wear",
      "spill",
      "injure"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Strong winds and rain slowly _____ the soil on the hillside farm. The farmer planted trees to hold the ground in place.",
    "options": [
      "injure",
      "repair",
      "spill",
      "erode"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The wooden posts of the old pier have started to _____ in the salty water. The city will replace them with concrete next year.",
    "options": [
      "repair",
      "recover",
      "decay",
      "restore"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Workers must use the proper tools when lifting heavy boxes. Lifting them the wrong way can _____ your back.",
    "options": [
      "injure",
      "restore",
      "recover",
      "spill"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The company uses a special machine to _____ old documents that contain private customer information. Nothing can be read afterward.",
    "options": [
      "restore",
      "repair",
      "destroy",
      "recover"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Some cold medicines can _____ your ability to drive safely. Read the label carefully before you take them.",
    "options": [
      "impair",
      "restore",
      "recover",
      "spill"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Every product is checked before it leaves the factory. Any item with a _____ is removed from the production line immediately.",
    "options": [
      "flood",
      "loss",
      "harm",
      "defect"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The train was delayed for an hour because of a signal _____. Engineers fixed the problem and service returned to normal.",
    "options": [
      "stain",
      "fault",
      "dent",
      "scratch"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Please call the plumber right away. There is a _____ under the kitchen sink, and water is spreading across the floor.",
    "options": [
      "leak",
      "dent",
      "harm",
      "destruction"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Please put a lid on your cup before you walk into the meeting room. It is easy to _____ hot drinks on the carpet.",
    "options": [
      "restore",
      "injure",
      "recover",
      "spill"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The dry cleaner could not remove the red wine _____ from my white shirt. I will have to buy a new one.",
    "options": [
      "crack",
      "stain",
      "flood",
      "defect"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Please write 'Handle with Care' on the box of wine glasses. The items inside are very _____ and could break easily.",
    "options": [
      "permanent",
      "severe",
      "fragile",
      "temporary"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The typhoon caused _____ damage to the port. Most ships cannot load or unload goods there until next month.",
    "options": [
      "minor",
      "severe",
      "fragile",
      "temporary"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Don't worry about the small scratch on the table. It is only a _____ problem, and we can fix it in five minutes.",
    "options": [
      "severe",
      "permanent",
      "fragile",
      "minor"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Once the chemical gets into the river, the damage is _____ and can never be fixed. That is why the factory must be careful.",
    "options": [
      "permanent",
      "minor",
      "temporary",
      "fragile"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Our office is being repaired, so we are working in a _____ office for two months. We will move back in March.",
    "options": [
      "permanent",
      "severe",
      "temporary",
      "fragile"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The air conditioner in the conference room stopped working yesterday. A technician will come this afternoon to _____ it.",
    "options": [
      "injure",
      "spill",
      "shatter",
      "repair"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The police were able to _____ most of the stolen laptops from the office. They returned them to the company the next day.",
    "options": [
      "destroy",
      "recover",
      "injure",
      "spill"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "harm": {
    "pos": "n.",
    "en_def": "damage or hurt caused to someone or something",
    "cn_def": "傷害；損害"
  },
  "destruction": {
    "pos": "n.",
    "en_def": "the act of damaging something so badly that it no longer exists or works",
    "cn_def": "破壞；毀滅"
  },
  "ruin": {
    "pos": "v.",
    "en_def": "to spoil or damage something completely",
    "cn_def": "毀掉；破壞"
  },
  "loss": {
    "pos": "n.",
    "en_def": "the fact of losing something, or the money or value you lose",
    "cn_def": "損失；喪失"
  },
  "break": {
    "pos": "v.",
    "en_def": "to damage something so that it separates into pieces or stops working",
    "cn_def": "打破；弄壞"
  },
  "crack": {
    "pos": "n.",
    "en_def": "a thin line on the surface of something where it has started to break",
    "cn_def": "裂縫；裂痕"
  },
  "shatter": {
    "pos": "v.",
    "en_def": "to break suddenly into many small pieces",
    "cn_def": "粉碎；碎裂"
  },
  "scratch": {
    "pos": "n.",
    "en_def": "a thin mark or cut on a surface",
    "cn_def": "刮痕；擦痕"
  },
  "dent": {
    "pos": "n.",
    "en_def": "a hollow place in a hard surface where something has hit it",
    "cn_def": "凹痕"
  },
  "tear": {
    "pos": "v.",
    "en_def": "to pull something apart so that it splits, or to become split",
    "cn_def": "撕破；扯破"
  },
  "rip": {
    "pos": "v.",
    "en_def": "to tear something quickly and roughly",
    "cn_def": "撕裂；扯開"
  },
  "collapse": {
    "pos": "v.",
    "en_def": "to fall down suddenly because of weakness or damage",
    "cn_def": "倒塌；崩塌"
  },
  "burn": {
    "pos": "v.",
    "en_def": "to damage or destroy something with fire or heat",
    "cn_def": "燒毀；燒傷"
  },
  "flood": {
    "pos": "n.",
    "en_def": "a large amount of water that covers an area that is usually dry",
    "cn_def": "水災；洪水"
  },
  "corrode": {
    "pos": "v.",
    "en_def": "to slowly damage metal by a chemical action, such as rust",
    "cn_def": "腐蝕；侵蝕"
  },
  "wear": {
    "pos": "v.",
    "en_def": "to become thinner or damaged because of long use",
    "cn_def": "磨損；耗損"
  },
  "erode": {
    "pos": "v.",
    "en_def": "to slowly damage or remove something, especially land, by water or wind",
    "cn_def": "侵蝕；逐漸削弱"
  },
  "decay": {
    "pos": "v.",
    "en_def": "to become rotten or slowly break down over time",
    "cn_def": "腐爛；衰敗"
  },
  "injure": {
    "pos": "v.",
    "en_def": "to hurt a person or animal",
    "cn_def": "使受傷；傷害"
  },
  "destroy": {
    "pos": "v.",
    "en_def": "to damage something so badly that it cannot be used or repaired",
    "cn_def": "摧毀；毀壞"
  },
  "impair": {
    "pos": "v.",
    "en_def": "to make something weaker or less good than before",
    "cn_def": "損害；削弱"
  },
  "defect": {
    "pos": "n.",
    "en_def": "a fault or problem in something that makes it not work correctly",
    "cn_def": "缺陷；瑕疵"
  },
  "fault": {
    "pos": "n.",
    "en_def": "a problem in a machine or system that stops it working correctly",
    "cn_def": "故障；毛病"
  },
  "leak": {
    "pos": "n.",
    "en_def": "a small hole or crack that lets liquid or gas escape",
    "cn_def": "漏水；洩漏"
  },
  "spill": {
    "pos": "v.",
    "en_def": "to accidentally let liquid flow out of its container",
    "cn_def": "灑出；濺出"
  },
  "stain": {
    "pos": "n.",
    "en_def": "a dirty mark that is difficult to remove",
    "cn_def": "污漬；污點"
  },
  "fragile": {
    "pos": "adj.",
    "en_def": "easily broken or damaged",
    "cn_def": "易碎的；脆弱的"
  },
  "severe": {
    "pos": "adj.",
    "en_def": "very serious or bad",
    "cn_def": "嚴重的；劇烈的"
  },
  "minor": {
    "pos": "adj.",
    "en_def": "small and not very serious",
    "cn_def": "輕微的；次要的"
  },
  "permanent": {
    "pos": "adj.",
    "en_def": "lasting for a very long time or forever",
    "cn_def": "永久的；長期的"
  },
  "temporary": {
    "pos": "adj.",
    "en_def": "lasting for only a short time",
    "cn_def": "暫時的；臨時的"
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix something that is broken or damaged",
    "cn_def": "修理；修補"
  },
  "restore": {
    "pos": "v.",
    "en_def": "to bring something back to its good condition",
    "cn_def": "修復；恢復"
  },
  "recover": {
    "pos": "v.",
    "en_def": "to get back something lost, or to return to a normal condition",
    "cn_def": "恢復；取回"
  }
};

const EXTRA_GLOSSES = {};
