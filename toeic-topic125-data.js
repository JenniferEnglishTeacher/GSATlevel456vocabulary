// Topic 125 Quiz Data: Equipment 設備
// Source word list: https://www.examword.com/group-topic/equipment — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T125 - Equipment 設備",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "device",
    "pos": "n.",
    "cn_def": "裝置；設備",
    "en_def": "a small machine or tool made for a special job",
    "sentence": "A: Why is the security guard asking every visitor to leave their phones at the front desk before entering the research lab this afternoon? B: The lab director worries that any electronic {{BLANK}} with a camera could record the new product designs, so nobody may bring one inside until the testing is finished next week.",
    "cn": "A：為什麼保全今天下午要求每位訪客進入研究實驗室前把手機留在前台？ B：實驗室主任擔心任何有相機的電子【裝置】可能會拍下新產品設計，所以在下週測試結束前，任何人都不得帶進去。"
  },
  {
    "word": "machine",
    "pos": "n.",
    "cn_def": "機器",
    "en_def": "a piece of equipment with moving parts that does work",
    "sentence": "A: Why are there so many people waiting in line outside the break room on the third floor this morning? B: The coffee {{BLANK}} broke down yesterday afternoon, and the technician only fixed it an hour ago, so everyone is rushing to get a hot drink before the weekly sales meeting starts.",
    "cn": "A：為什麼今天早上三樓茶水間外面有這麼多人在排隊？ B：咖啡【機】昨天下午故障了，技術人員一小時前才修好，所以大家都趕在每週業務會議開始前去拿杯熱飲。"
  },
  {
    "word": "tool",
    "pos": "n.",
    "cn_def": "工具",
    "en_def": "something you hold and use to do a job",
    "sentence": "A: Do you know who borrowed the small screwdriver from the storeroom, because I need it to fix the broken shelf in the storage area? B: I think Kevin took it last Friday, but if you can't find it, the shop across the street sells every basic {{BLANK}} you might need at a fair price.",
    "cn": "A：你知道誰從儲藏室借走了小螺絲起子嗎？我需要用它來修理倉庫區那個壞掉的架子。 B：我想是凱文上週五拿走的，但如果你找不到，對街的店以合理價格販售你可能需要的各種基本【工具】。"
  },
  {
    "word": "apparatus",
    "pos": "n.",
    "cn_def": "器具；裝置",
    "en_def": "a set of equipment used for a special purpose",
    "sentence": "A: Why did the safety inspector stop the training session at the fire station so suddenly yesterday afternoon? B: He noticed that the breathing {{BLANK}} one trainee was wearing had a cracked mask, so he asked the team to check every set carefully before any firefighter used them during the exercise.",
    "cn": "A：為什麼安全檢查員昨天下午突然中止了消防局的訓練課程？ B：他注意到一名學員配戴的呼吸【器具】面罩有裂痕，所以要求團隊在任何消防員於演練中使用前仔細檢查每一套。"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "cn_def": "儀器；器械",
    "en_def": "a tool for exact work, such as measuring or medical work",
    "sentence": "A: Why does the hospital need to buy so many new things for the operating rooms before the end of this year? B: Almost every surgical {{BLANK}} in the main room is more than ten years old, and the doctors say that modern ones are sharper, easier to clean, and much safer for patients during long operations.",
    "cn": "A：為什麼醫院要在今年年底前為手術室購買這麼多新東西？ B：主手術室裡幾乎每一件手術【器械】都超過十年了，醫生們說新式的器械更鋒利、更容易清潔，在長時間手術中對病人也安全得多。"
  },
  {
    "word": "gear",
    "pos": "n.",
    "cn_def": "裝備；用具",
    "en_def": "the equipment and clothes you need for an activity",
    "sentence": "A: Is there anything special I should bring for the company hiking trip to the mountains this weekend? B: Yes, the weather may turn cold and rainy in the afternoon, so please pack warm clothes, a waterproof jacket, and good walking boots, and the organizer will provide all the camping {{BLANK}} we need for the night.",
    "cn": "A：這個週末公司去山上健行，我需要帶什麼特別的東西嗎？ B：需要，下午天氣可能會變冷又下雨，所以請準備保暖衣物、防水外套和好走的登山靴，主辦人會提供我們過夜所需的所有露營【裝備】。"
  },
  {
    "word": "kit",
    "pos": "n.",
    "cn_def": "成套用品；工具組",
    "en_def": "a set of tools or things kept together for one purpose",
    "sentence": "A: What should I do if one of the workers on the production line cuts his finger while the nurse is out to lunch? B: There is a first-aid {{BLANK}} hanging on the wall next to the emergency exit, so clean the wound, cover it with a bandage, and then report the accident to your supervisor.",
    "cn": "A：如果護士外出吃午餐時，生產線上有工人割傷手指，我該怎麼辦？ B：緊急出口旁邊的牆上掛著一個急救【箱】，所以先清潔傷口、用繃帶包好，然後向你的主管報告這起意外。"
  },
  {
    "word": "hardware",
    "pos": "n.",
    "cn_def": "硬體",
    "en_def": "the physical parts of a computer system",
    "sentence": "A: Why is the IT department replacing all the old computers in the accounting office this month instead of next year? B: The programs are fine, but the {{BLANK}} is too old to run the new accounting system quickly, so the staff keep losing time waiting for their reports to load.",
    "cn": "A：為什麼資訊部門這個月就要汰換會計辦公室所有的舊電腦，而不是明年？ B：程式沒問題，但【硬體】太舊，無法快速執行新的會計系統，所以員工一直浪費時間等報表載入。"
  },
  {
    "word": "software",
    "pos": "n.",
    "cn_def": "軟體",
    "en_def": "programs that run on a computer",
    "sentence": "A: How long will it take for the new staff to learn the booking system that our travel agency started using last month? B: The {{BLANK}} is quite simple to use, so after a two-hour training session on Monday morning, most of them should be able to make reservations for customers on their own.",
    "cn": "A：新進員工要多久才能學會我們旅行社上個月開始使用的訂位系統？ B：這套【軟體】相當容易使用，所以週一上午兩小時的培訓課程後，他們大多數應該就能獨立幫客戶訂位了。"
  },
  {
    "word": "material",
    "pos": "n.",
    "cn_def": "材料；原料",
    "en_def": "a substance used for making or building things",
    "sentence": "A: Why did the builders stop working on the new office building for almost two weeks last month? B: The supplier delivered the wrong building {{BLANK}} for the walls, and the project manager refused to accept it, so everyone had to wait until the correct order arrived from the factory.",
    "cn": "A：為什麼上個月建商停工新辦公大樓將近兩週？ B：供應商送錯了牆面用的建築【材料】，專案經理拒收，所以大家只好等工廠送來正確的訂貨。"
  },
  {
    "word": "component",
    "pos": "n.",
    "cn_def": "零件；組成部分",
    "en_def": "one of the parts that make up a machine or system",
    "sentence": "A: Why are the new laptops arriving three weeks later than the supplier promised in the contract? B: The factory in Malaysia ran out of one important electronic {{BLANK}} that goes inside the screen, so production stopped until a new shipment arrived from another company last Thursday.",
    "cn": "A：為什麼新筆電比供應商在合約中承諾的晚了三週到貨？ B：馬來西亞的工廠缺少一個裝在螢幕裡的重要電子【零件】，所以生產停擺，直到上週四另一家公司的新貨送到為止。"
  },
  {
    "word": "accessory",
    "pos": "n.",
    "cn_def": "配件",
    "en_def": "an extra item that you add to a main product",
    "sentence": "A: Did the customer who bought the expensive camera yesterday also buy anything else from our store? B: Yes, she asked for advice about which {{BLANK}} would help her take better photos at night, so I sold her a strong tripod and an extra battery as well.",
    "cn": "A：昨天買那台昂貴相機的顧客還有在我們店裡買其他東西嗎？ B：有，她詢問哪種【配件】能幫助她在晚上拍出更好的照片，所以我還賣給她一個堅固的三腳架和一顆備用電池。"
  },
  {
    "word": "attachment",
    "pos": "n.",
    "cn_def": "附件；附加裝置",
    "en_def": "an extra part you fix onto a machine for a special job",
    "sentence": "A: Can we use the same vacuum cleaner for both the carpets in the offices and the narrow corners behind the desks? B: Yes, but you need to change the {{BLANK}} first, because the long thin one reaches into small spaces much better than the wide brush that comes on the machine.",
    "cn": "A：我們可以用同一台吸塵器清潔辦公室的地毯和辦公桌後面的狹窄角落嗎？ B：可以，但你得先換【附件】，因為細長的那個比機器原本附的寬刷頭更容易伸進小空間。"
  },
  {
    "word": "facility",
    "pos": "n.",
    "cn_def": "設施；場所",
    "en_def": "a building or place used for a particular activity",
    "sentence": "A: Why did the company decide to build its new warehouse outside the city instead of near the main office downtown? B: Land is much cheaper there, and the new {{BLANK}} will be close to the highway, so our trucks can deliver products to customers in the south more quickly and save money on fuel.",
    "cn": "A：為什麼公司決定把新倉庫蓋在市郊，而不是市中心總公司附近？ B：那裡的土地便宜很多，而且新【設施】靠近高速公路，所以我們的卡車能更快把產品送到南部客戶手中，也能省下油錢。"
  },
  {
    "word": "installation",
    "pos": "n.",
    "cn_def": "安裝",
    "en_def": "the act of putting equipment in place so it is ready to use",
    "sentence": "A: When will we be able to use the new air conditioners in the meeting rooms on the fifth floor? B: The workers will start the {{BLANK}} early on Saturday morning while the office is empty, and the manager expects everything to be working properly before the staff return on Monday.",
    "cn": "A：我們什麼時候可以使用五樓會議室裡的新冷氣機？ B：工人會在週六一早趁辦公室沒人時開始【安裝】，經理預計員工週一回來之前一切都能正常運作。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "保養；維修",
    "en_def": "regular work to keep something in good condition",
    "sentence": "A: Why is the elevator in our building closed every first Monday of the month from nine to eleven in the morning? B: The building manager arranges regular {{BLANK}} with a service company, so technicians can check the cables and doors and prevent serious problems before they happen.",
    "cn": "A：為什麼我們大樓的電梯每個月第一個星期一上午九點到十一點都會停用？ B：大樓管理員和一家服務公司安排了定期【保養】，讓技術人員檢查纜線和門，在嚴重問題發生前加以預防。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修理",
    "en_def": "to fix something that is broken",
    "sentence": "A: The printer in the sales department is making strange noises again, so should we just order a new one? B: Let's ask the technician to {{BLANK}} it first, because a new printer costs a lot of money, and he said last time that changing one small part would solve the problem.",
    "cn": "A：業務部的印表機又發出奇怪的聲音了，我們乾脆訂一台新的吧？ B：我們先請技術人員【修理】看看，因為新印表機很貴，而且他上次說換一個小零件就能解決問題。"
  },
  {
    "word": "upgrade",
    "pos": "v.",
    "cn_def": "升級",
    "en_def": "to make something newer, better, or more powerful",
    "sentence": "A: Our online store keeps crashing when many customers visit at the same time during the holiday sale, so what can we do? B: We should {{BLANK}} our server to a faster plan before next month's promotion, even though it will cost more, because losing customers is much more expensive.",
    "cn": "A：假日特賣期間大量顧客同時造訪時，我們的網路商店一直當機，我們能怎麼辦？ B：我們應該在下個月的促銷前把伺服器【升級】到更快的方案，雖然會多花錢，但流失顧客的代價大得多。"
  },
  {
    "word": "replace",
    "pos": "v.",
    "cn_def": "更換；取代",
    "en_def": "to put a new thing in the place of an old one",
    "sentence": "A: The light bulbs in the hallway near the reception area keep flickering, and visitors have started to complain about it. B: I'll call the maintenance team and ask them to {{BLANK}} all of them with new energy-saving bulbs this afternoon, which should also lower our monthly electricity bill.",
    "cn": "A：接待區附近走廊的燈泡一直閃爍，訪客已經開始抱怨了。 B：我會打電話給維修團隊，請他們今天下午把燈泡全部【更換】成新的節能燈泡，這應該也能降低我們每月的電費。"
  },
  {
    "word": "operate",
    "pos": "v.",
    "cn_def": "操作",
    "en_def": "to use and control a machine",
    "sentence": "A: Can the new part-time workers start using the forklift in the warehouse on their first day? B: No, they are not allowed to {{BLANK}} it until they finish a safety course and pass a short test, because driving it carelessly could injure someone or damage the products on the shelves.",
    "cn": "A：新來的兼職員工上班第一天就可以使用倉庫裡的堆高機嗎？ B：不行，他們必須完成安全課程並通過簡短測驗後才能【操作】，因為駕駛時不小心可能會傷到人或損壞架上的產品。"
  },
  {
    "word": "handle",
    "pos": "v.",
    "cn_def": "搬運；處理",
    "en_def": "to touch, hold, or move something with your hands",
    "sentence": "A: Should I ask the delivery company to bring the glass display cases directly to the showroom tomorrow? B: Yes, but please remind them to {{BLANK}} the boxes with great care, because the cases are very fragile, and we cannot open the new store next week if any of them arrive broken.",
    "cn": "A：我應該請貨運公司明天把玻璃展示櫃直接送到展示廳嗎？ B：是的，但請提醒他們【搬運】箱子時要非常小心，因為展示櫃非常易碎，若有任何一個送到時破了，我們下週就無法開新店。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "組裝",
    "en_def": "to put the parts of something together",
    "sentence": "A: The new desks for the marketing team arrived this morning in large flat boxes, so who is going to put them together? B: The furniture store will send two workers to {{BLANK}} them tomorrow morning, so please clear the space near the windows and move the old chairs into the storage room before they come.",
    "cn": "A：行銷團隊的新辦公桌今天早上用大型扁平箱送到了，誰要來把它們組合起來？ B：家具行明天早上會派兩名工人來【組裝】，所以請在他們來之前清出窗邊的空間，並把舊椅子搬到儲藏室。"
  },
  {
    "word": "dismantle",
    "pos": "v.",
    "cn_def": "拆解；拆卸",
    "en_def": "to take a machine or structure apart into pieces",
    "sentence": "A: How are we going to move the huge printing press from the old factory to the new one across town? B: The engineers will {{BLANK}} it into smaller pieces next week, put each piece on a separate truck, and then rebuild it carefully at the new site before production starts again.",
    "cn": "A：我們要怎麼把那台巨大的印刷機從舊工廠搬到城另一頭的新工廠？ B：工程師們下週會把它【拆解】成較小的部分，每一部分分別放上一輛卡車，然後在生產重新開始前，於新廠址仔細重新組裝。"
  },
  {
    "word": "calibrate",
    "pos": "v.",
    "cn_def": "校準",
    "en_def": "to adjust a measuring tool so it gives correct results",
    "sentence": "A: Why are the scales in the shipping department showing different weights for the same package this morning? B: Nobody has checked them for months, so I've asked the technician to {{BLANK}} them today, because wrong weights mean we charge our customers the wrong shipping fees every day.",
    "cn": "A：為什麼今天早上出貨部門的磅秤對同一個包裹顯示不同的重量？ B：好幾個月都沒人檢查過了，所以我已經請技術人員今天【校準】，因為重量錯誤代表我們每天向顧客收取的運費也會出錯。"
  },
  {
    "word": "portable",
    "pos": "adj.",
    "cn_def": "可攜式的；便於攜帶的",
    "en_def": "easy to carry or move",
    "sentence": "A: I need to give a presentation to a client at their office tomorrow, but they told me their meeting room has no screen. B: You can borrow the small {{BLANK}} projector from the IT department, since it fits easily in your bag and only needs a laptop and a white wall to work well.",
    "cn": "A：我明天要到客戶的辦公室做簡報，但他們說會議室沒有螢幕。 B：你可以向資訊部借那台小型的【可攜式】投影機，它很容易放進你的包包，只需要一台筆電和一面白牆就能正常使用。"
  },
  {
    "word": "durable",
    "pos": "adj.",
    "cn_def": "耐用的",
    "en_def": "strong and able to last a long time",
    "sentence": "A: Why did the restaurant owner choose these plastic chairs for the outdoor area instead of the wooden ones we saw? B: She said plastic is more {{BLANK}} in rain and strong sunshine, so the chairs will last for many years without breaking, and they are also easier to clean after busy weekends.",
    "cn": "A：為什麼餐廳老闆為戶外區選了這些塑膠椅，而不是我們看到的木椅？ B：她說塑膠在雨天和強烈陽光下更【耐用】，所以椅子可以用很多年都不會壞，而且忙碌的週末過後也更容易清潔。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的",
    "en_def": "able to be trusted to work well every time",
    "sentence": "A: Which delivery company should we choose for sending important documents to our branch office in Kaohsiung every week? B: I recommend the one we used last year, because they were very {{BLANK}} and never lost a package, even during the typhoon season when many other companies had serious delays.",
    "cn": "A：每週寄重要文件到高雄分公司，我們應該選哪家快遞公司？ B：我推薦我們去年用的那家，因為他們非常【可靠】，從來沒有遺失過包裹，即使在颱風季許多其他公司嚴重延誤時也一樣。"
  },
  {
    "word": "advanced",
    "pos": "adj.",
    "cn_def": "先進的",
    "en_def": "modern and using the newest ideas or technology",
    "sentence": "A: Why are so many hospitals from other countries sending their doctors to visit our medical center this month? B: We recently bought very {{BLANK}} scanning equipment that can find small health problems much earlier, so doctors want to see how it works and learn how to use it in their own hospitals.",
    "cn": "A：為什麼這個月有這麼多其他國家的醫院派醫生來參訪我們的醫學中心？ B：我們最近購買了非常【先進】的掃描設備，可以更早發現小的健康問題，所以醫生們想來看看它如何運作，並學習在自己的醫院使用。"
  },
  {
    "word": "automatic",
    "pos": "adj.",
    "cn_def": "自動的",
    "en_def": "working by itself without a person controlling it",
    "sentence": "A: Do I have to remember to turn off all the lights in the office when I leave late in the evening? B: No, the building has an {{BLANK}} system that switches off the lights when nobody has moved in a room for fifteen minutes, which helps the company save quite a lot of electricity.",
    "cn": "A：我晚上很晚離開時，必須記得關掉辦公室所有的燈嗎？ B：不用，大樓有一套【自動】系統，當房間內十五分鐘沒有人走動時就會關燈，這幫公司省下不少電。"
  },
  {
    "word": "manual",
    "pos": "n.",
    "cn_def": "使用手冊；說明書",
    "en_def": "a book that explains how to use a machine",
    "sentence": "A: I just set up the new coffee machine in the staff kitchen, but I can't figure out how to change the cup size. B: Check the user {{BLANK}} that came in the box, because it explains every button step by step, and there are also pictures showing how to clean the machine every week.",
    "cn": "A：我剛在員工廚房裝好新咖啡機，但我搞不清楚怎麼改變杯量。 B：看看盒子裡附的使用【手冊】，它一步一步說明每個按鈕，還有圖片示範每週如何清潔機器。"
  },
  {
    "word": "heavy-duty",
    "pos": "adj.",
    "cn_def": "重型的；耐用的",
    "en_def": "very strong and made for hard work or heavy use",
    "sentence": "A: The cleaning company keeps complaining that their normal bags break when they collect rubbish from our factory floor. B: Then we should order {{BLANK}} bags that can carry sharp metal pieces and wet waste without tearing, even if they cost a little more than the ones we usually buy from the supermarket.",
    "cn": "A：清潔公司一直抱怨，他們從我們工廠地面收垃圾時，一般的垃圾袋都會破。 B：那我們應該訂購【重型耐用】的垃圾袋，可以裝尖銳的金屬碎片和濕垃圾而不破，即使比我們平常在超市買的貴一點也值得。"
  },
  {
    "word": "lightweight",
    "pos": "adj.",
    "cn_def": "輕量的；輕便的",
    "en_def": "not heavy; easy to lift and carry",
    "sentence": "A: Our sales staff travel to visit customers almost every week, so which laptop should the company buy for them? B: We should choose a {{BLANK}} model that weighs about one kilogram, because they carry their bags all day through airports and train stations, and a heavy computer would make their trips much more tiring.",
    "cn": "A：我們的業務人員幾乎每週都要出差拜訪客戶，公司應該幫他們買哪款筆電？ B：我們應該選一台約一公斤重的【輕量】機型，因為他們整天背著包包穿梭在機場和車站，笨重的電腦會讓出差更累。"
  },
  {
    "word": "safely",
    "pos": "adv.",
    "cn_def": "安全地",
    "en_def": "in a way that does not cause danger or harm",
    "sentence": "A: What is the most important thing the new factory workers must learn during their first week of training here? B: They must learn how to use the cutting machines {{BLANK}}, which means always wearing gloves and glasses, keeping their hands away from the blades, and turning the power off before cleaning.",
    "cn": "A：新進工廠員工在第一週培訓中最重要要學的是什麼？ B：他們必須學會如何【安全地】使用切割機，也就是一定要戴手套和護目鏡、雙手遠離刀片，並在清潔前關掉電源。"
  },
  {
    "word": "efficiently",
    "pos": "adv.",
    "cn_def": "有效率地",
    "en_def": "in a quick and well-organized way without wasting time",
    "sentence": "A: How did the warehouse team manage to pack and send so many more orders this month than last month? B: The manager bought new scanners and changed the layout of the shelves, so the workers can now find products and finish their tasks much more {{BLANK}} without walking back and forth.",
    "cn": "A：倉庫團隊這個月怎麼能比上個月多包裝並寄出這麼多訂單？ B：經理買了新的掃描器並改變了貨架的配置，所以工人現在能更【有效率地】找到商品並完成工作，不用來回走動。"
  }
];

const MCQS = [
  {
    "q": "Please switch off every electronic _____ before the meeting begins. Phones ringing during the client presentation would look unprofessional.",
    "options": [
      "device",
      "facility",
      "material",
      "installation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The vending _____ on the second floor is out of order again. A technician will come to fix it on Friday morning.",
    "options": [
      "tool",
      "kit",
      "machine",
      "gear"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "A good project app is a useful _____ for busy teams. It helps everyone see deadlines and share files in one place.",
    "options": [
      "facility",
      "tool",
      "maintenance",
      "installation"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The lab technician cleaned every measuring _____ carefully after the test. Even a small amount of dirt can produce wrong results.",
    "options": [
      "gear",
      "facility",
      "maintenance",
      "instrument"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Workers at the construction site must wear safety _____ at all times. This includes helmets, gloves, and strong boots.",
    "options": [
      "software",
      "facility",
      "gear",
      "installation"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Every company car should carry a first-aid _____ in the trunk. Drivers should check it monthly and replace anything that is missing.",
    "options": [
      "kit",
      "hardware",
      "facility",
      "component"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Our printers, monitors, and keyboards are more than eight years old. The IT team plans to replace all of this _____ next spring.",
    "options": [
      "software",
      "maintenance",
      "installation",
      "hardware"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Please do not install any new _____ on your work computer without permission. Some free programs contain viruses that can damage our network.",
    "options": [
      "material",
      "software",
      "gear",
      "facility"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The factory buys most of its raw _____ from local suppliers. This keeps shipping costs low and supports businesses in the area.",
    "options": [
      "material",
      "device",
      "tool",
      "gear"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The car maker could not finish the vehicles on time. A key electronic _____ was missing because of a shortage at the supplier.",
    "options": [
      "facility",
      "maintenance",
      "component",
      "installation"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The store gives a free phone _____ such as a case or screen protector. This offer is for customers who buy a new smartphone.",
    "options": [
      "facility",
      "accessory",
      "machine",
      "apparatus"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The company opened a new research _____ near the science park last year. More than two hundred engineers now work there.",
    "options": [
      "device",
      "tool",
      "accessory",
      "facility"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The cable company offers free _____ with any two-year contract. A technician will set up everything in your home within a week.",
    "options": [
      "apparatus",
      "material",
      "installation",
      "instrument"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Regular _____ keeps the elevators running smoothly. The building manager has the cables and doors checked by experts every month.",
    "options": [
      "maintenance",
      "installation",
      "component",
      "accessory"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The air conditioner in the meeting room stopped working yesterday. A technician will come this afternoon to _____ it.",
    "options": [
      "assemble",
      "operate",
      "handle",
      "repair"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Our current website cannot handle the growing number of online orders. We plan to _____ to a faster version next month.",
    "options": [
      "repair",
      "upgrade",
      "assemble",
      "dismantle"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The old copier breaks down almost every week. The manager has finally decided to _____ it with a newer model.",
    "options": [
      "replace",
      "repair",
      "operate",
      "calibrate"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Only trained staff are allowed to _____ the forklift in the warehouse. Others must ask a supervisor for help when moving heavy boxes.",
    "options": [
      "assemble",
      "upgrade",
      "operate",
      "calibrate"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The boxes contain glass vases, so please _____ them with care. Any broken items will be charged to the delivery company.",
    "options": [
      "operate",
      "handle",
      "calibrate",
      "upgrade"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The new office desks arrived in flat boxes this morning. Two workers will _____ them before the staff move in on Monday.",
    "options": [
      "calibrate",
      "operate",
      "upgrade",
      "assemble"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The sales team prefers a small _____ projector for client visits. It fits easily into a laptop bag and weighs less than one kilogram.",
    "options": [
      "heavy-duty",
      "manual",
      "portable",
      "automatic"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "These work boots are made from strong leather and thick rubber. They are very _____ and usually last for several years of daily use.",
    "options": [
      "durable",
      "portable",
      "automatic",
      "lightweight"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "We chose this delivery company because it is very _____. It has never lost a package or missed a deadline in five years.",
    "options": [
      "portable",
      "heavy-duty",
      "lightweight",
      "reliable"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The hospital has bought some very _____ scanning equipment. It can find health problems much earlier than the older machines could.",
    "options": [
      "manual",
      "advanced",
      "durable",
      "heavy-duty"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The new building has _____ doors at the main entrance. They open by themselves whenever someone walks toward them.",
    "options": [
      "automatic",
      "manual",
      "portable",
      "durable"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "If you cannot set up the new printer, read the user _____ first. It explains each step clearly with pictures.",
    "options": [
      "component",
      "facility",
      "manual",
      "installation"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Workers in the metal shop need _____ gloves to protect their hands. Thin gloves tear easily when they touch sharp edges.",
    "options": [
      "lightweight",
      "heavy-duty",
      "portable",
      "automatic"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Our sales staff need a _____ laptop because they travel often. This model weighs only one kilogram and is easy to carry.",
    "options": [
      "heavy-duty",
      "automatic",
      "manual",
      "lightweight"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "All visitors must wear helmets so they can walk through the factory _____. The tour guide will explain the rules at the entrance.",
    "options": [
      "efficiently",
      "loudly",
      "safely",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The new software helps our accountants work more _____. They now finish monthly reports in two days instead of five.",
    "options": [
      "efficiently",
      "safely",
      "lately",
      "hardly"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "device": {
    "pos": "n.",
    "en_def": "a small machine or tool made for a special job",
    "cn_def": "裝置；設備"
  },
  "machine": {
    "pos": "n.",
    "en_def": "a piece of equipment with moving parts that does work",
    "cn_def": "機器"
  },
  "tool": {
    "pos": "n.",
    "en_def": "something you hold and use to do a job",
    "cn_def": "工具"
  },
  "apparatus": {
    "pos": "n.",
    "en_def": "a set of equipment used for a special purpose",
    "cn_def": "器具；裝置"
  },
  "instrument": {
    "pos": "n.",
    "en_def": "a tool for exact work, such as measuring or medical work",
    "cn_def": "儀器；器械"
  },
  "gear": {
    "pos": "n.",
    "en_def": "the equipment and clothes you need for an activity",
    "cn_def": "裝備；用具"
  },
  "kit": {
    "pos": "n.",
    "en_def": "a set of tools or things kept together for one purpose",
    "cn_def": "成套用品；工具組"
  },
  "hardware": {
    "pos": "n.",
    "en_def": "the physical parts of a computer system",
    "cn_def": "硬體"
  },
  "software": {
    "pos": "n.",
    "en_def": "programs that run on a computer",
    "cn_def": "軟體"
  },
  "material": {
    "pos": "n.",
    "en_def": "a substance used for making or building things",
    "cn_def": "材料；原料"
  },
  "component": {
    "pos": "n.",
    "en_def": "one of the parts that make up a machine or system",
    "cn_def": "零件；組成部分"
  },
  "accessory": {
    "pos": "n.",
    "en_def": "an extra item that you add to a main product",
    "cn_def": "配件"
  },
  "attachment": {
    "pos": "n.",
    "en_def": "an extra part you fix onto a machine for a special job",
    "cn_def": "附件；附加裝置"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building or place used for a particular activity",
    "cn_def": "設施；場所"
  },
  "installation": {
    "pos": "n.",
    "en_def": "the act of putting equipment in place so it is ready to use",
    "cn_def": "安裝"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "regular work to keep something in good condition",
    "cn_def": "保養；維修"
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix something that is broken",
    "cn_def": "修理"
  },
  "upgrade": {
    "pos": "v.",
    "en_def": "to make something newer, better, or more powerful",
    "cn_def": "升級"
  },
  "replace": {
    "pos": "v.",
    "en_def": "to put a new thing in the place of an old one",
    "cn_def": "更換；取代"
  },
  "operate": {
    "pos": "v.",
    "en_def": "to use and control a machine",
    "cn_def": "操作"
  },
  "handle": {
    "pos": "v.",
    "en_def": "to touch, hold, or move something with your hands",
    "cn_def": "搬運；處理"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to put the parts of something together",
    "cn_def": "組裝"
  },
  "dismantle": {
    "pos": "v.",
    "en_def": "to take a machine or structure apart into pieces",
    "cn_def": "拆解；拆卸"
  },
  "calibrate": {
    "pos": "v.",
    "en_def": "to adjust a measuring tool so it gives correct results",
    "cn_def": "校準"
  },
  "portable": {
    "pos": "adj.",
    "en_def": "easy to carry or move",
    "cn_def": "可攜式的；便於攜帶的"
  },
  "durable": {
    "pos": "adj.",
    "en_def": "strong and able to last a long time",
    "cn_def": "耐用的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to work well every time",
    "cn_def": "可靠的"
  },
  "advanced": {
    "pos": "adj.",
    "en_def": "modern and using the newest ideas or technology",
    "cn_def": "先進的"
  },
  "automatic": {
    "pos": "adj.",
    "en_def": "working by itself without a person controlling it",
    "cn_def": "自動的"
  },
  "manual": {
    "pos": "n.",
    "en_def": "a book that explains how to use a machine",
    "cn_def": "使用手冊；說明書"
  },
  "heavy-duty": {
    "pos": "adj.",
    "en_def": "very strong and made for hard work or heavy use",
    "cn_def": "重型的；耐用的"
  },
  "lightweight": {
    "pos": "adj.",
    "en_def": "not heavy; easy to lift and carry",
    "cn_def": "輕量的；輕便的"
  },
  "safely": {
    "pos": "adv.",
    "en_def": "in a way that does not cause danger or harm",
    "cn_def": "安全地"
  },
  "efficiently": {
    "pos": "adv.",
    "en_def": "in a quick and well-organized way without wasting time",
    "cn_def": "有效率地"
  }
};

const EXTRA_GLOSSES = {};
