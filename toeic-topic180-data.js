// Topic 180 Quiz Data: Housework 家務
// Source word list: https://www.examword.com/group-topic/housework — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T180 - Housework 家務",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "chore",
    "pos": "n.",
    "cn_def": "家務；雜事",
    "en_def": "a regular small job you do at home or work",
    "sentence": "A: Now that you and your roommate both work long hours at the bank downtown, how do you decide who takes care of the apartment during the week? B: We made a simple list on the fridge, and each of us chooses one {{BLANK}} every evening, like taking out the trash or washing the dishes after dinner.",
    "cn": "A：既然你和室友都在市中心的銀行工作很長的時間，你們平日怎麼決定誰負責整理公寓？ B：我們在冰箱上貼了一張簡單的清單，我們每個人每晚選一項【家務】，像是倒垃圾或晚餐後洗碗。"
  },
  {
    "word": "cleaning",
    "pos": "n.",
    "cn_def": "清潔；打掃",
    "en_def": "the work of making a place or thing clean",
    "sentence": "A: The office looked amazing when I arrived this morning, but who came in over the weekend while everyone was away at the sales conference in Kaohsiung? B: The building manager hired a professional company to do a deep {{BLANK}} of the carpets, desks, and kitchen, so the whole floor smells fresh now.",
    "cn": "A：我今天早上到的時候辦公室看起來棒極了，但週末大家都去高雄參加業務會議時，是誰來過？ B：大樓經理請了一家專業公司來對地毯、辦公桌和廚房做徹底的【清潔】，所以整層樓現在聞起來很清新。"
  },
  {
    "word": "tidying",
    "pos": "n.",
    "cn_def": "整理；收拾",
    "en_def": "putting things back in their proper places so an area looks neat",
    "sentence": "A: Why are you staying late at the store tonight when your shift officially ended at six o'clock and the manager already locked the front door? B: A big group of customers left clothes all over the fitting rooms, so I offered to help with the {{BLANK}} before the morning staff arrive tomorrow.",
    "cn": "A：你的班六點就正式結束了，經理也已經鎖上前門，為什麼你今晚還留在店裡這麼晚？ B：一大群顧客把衣服丟得試衣間到處都是，所以我自願在明天早班員工到之前幫忙【整理】。"
  },
  {
    "word": "laundry",
    "pos": "n.",
    "cn_def": "洗衣；待洗的衣物",
    "en_def": "clothes and sheets that need washing, or the job of washing them",
    "sentence": "A: Does the new apartment building near the train station have washing machines, or will I need to carry my clothes to a shop every weekend? B: There is a shared {{BLANK}} room in the basement with six machines and dryers, and residents can use it any time between seven in the morning and ten at night.",
    "cn": "A：火車站附近那棟新公寓大樓有洗衣機嗎？還是我每個週末都得把衣服拿到店裡去？ B：地下室有一間共用的【洗衣】間，有六台洗衣機和烘乾機，住戶從早上七點到晚上十點都可以使用。"
  },
  {
    "word": "vacuuming",
    "pos": "n.",
    "cn_def": "吸塵",
    "en_def": "cleaning floors or carpets with a machine that sucks up dirt",
    "sentence": "A: Should the cleaning staff come into the meeting room during the afternoon, or will the noise bother our clients from Japan during the presentation? B: Please ask them to finish the {{BLANK}} before nine in the morning, because the machine is very loud and our guests need a quiet room to concentrate.",
    "cn": "A：清潔人員應該在下午進會議室嗎？還是噪音會在簡報時打擾我們的日本客戶？ B：請他們在早上九點前完成【吸塵】，因為機器很吵，我們的客人需要安靜的房間來專心。"
  },
  {
    "word": "sweeping",
    "pos": "n.",
    "cn_def": "掃地",
    "en_def": "cleaning a floor with a brush that has a long handle",
    "sentence": "A: What happened to the entrance of the restaurant? There are leaves and sand everywhere, and our first customers will arrive for lunch in about twenty minutes. B: The strong wind last night blew everything in from the street, so I'll grab the broom and start the {{BLANK}} right now while you set the tables.",
    "cn": "A：餐廳入口怎麼了？到處都是樹葉和沙子，我們的第一批客人大約二十分鐘後就會來吃午餐。 B：昨晚的強風把街上的東西都吹了進來，所以我現在就去拿掃把開始【掃地】，你來擺桌子。"
  },
  {
    "word": "mopping",
    "pos": "n.",
    "cn_def": "拖地",
    "en_def": "washing a floor with a wet cloth or sponge on a long stick",
    "sentence": "A: Why is there a yellow warning sign in front of the elevator on the second floor, and should I take the stairs to reach the accounting department? B: The janitor is doing the {{BLANK}} because someone spilled coffee near the doors, so please walk carefully since the tiles are still wet and slippery.",
    "cn": "A：二樓電梯前為什麼有黃色警告標誌？我應該走樓梯去會計部嗎？ B：清潔工正在【拖地】，因為有人在門附近打翻了咖啡，所以請小心走，地磚還是濕的而且很滑。"
  },
  {
    "word": "dusting",
    "pos": "n.",
    "cn_def": "撣灰塵；除塵",
    "en_def": "removing dust from furniture and surfaces with a cloth",
    "sentence": "A: The bookshelves in the hotel library look gray, and a guest complained about sneezing there this afternoon, so what should we do about it? B: I'll ask housekeeping to add {{BLANK}} to their weekly list, and they can also wipe the lamps and picture frames so the room feels fresh again.",
    "cn": "A：飯店圖書室的書架看起來灰灰的，今天下午有位客人抱怨在那裡一直打噴嚏，我們該怎麼處理？ B：我會請房務部把【除塵】加入每週清單，他們也可以擦拭檯燈和相框，讓房間再次感覺清新。"
  },
  {
    "word": "dishwashing",
    "pos": "n.",
    "cn_def": "洗碗",
    "en_def": "washing plates, cups and cooking tools after a meal",
    "sentence": "A: How did the company picnic go on Saturday, and did anyone stay behind to help the kitchen staff after the food was finished? B: It went very well, and three people from marketing volunteered to do the {{BLANK}}, so all the plates and cups were clean and packed away before sunset.",
    "cn": "A：週六的公司野餐進行得如何？食物吃完後有人留下來幫廚房人員嗎？ B：進行得很順利，行銷部有三個人自願負責【洗碗】，所以所有的盤子和杯子在日落前都洗好收起來了。"
  },
  {
    "word": "ironing",
    "pos": "n.",
    "cn_def": "燙衣服",
    "en_def": "making clothes smooth with a hot, flat tool",
    "sentence": "A: Your shirt looks very sharp today, so did you send it to the dry cleaner before the important interview with the bank this afternoon? B: No, I did the {{BLANK}} myself last night because the shop was closed, and I wanted to look professional when I meet the hiring manager.",
    "cn": "A：你今天的襯衫看起來很筆挺，你是在今天下午跟銀行的重要面試前送去乾洗店的嗎？ B：不，因為店關了，所以我昨晚自己【燙衣服】，我想在跟招聘經理見面時看起來專業一點。"
  },
  {
    "word": "cooking",
    "pos": "n.",
    "cn_def": "烹飪；做菜",
    "en_def": "the activity of preparing food",
    "sentence": "A: Do you usually eat at the cafeteria near the office, or do you prepare your own lunch to save money during the busy work week? B: I enjoy {{BLANK}} on Sunday afternoons, so I make large pots of soup and rice, and then I bring a box to work every day.",
    "cn": "A：你通常在辦公室附近的自助餐廳吃飯，還是在忙碌的工作週自己準備午餐來省錢？ B：我喜歡在星期天下午【烹飪】，所以我會煮好幾大鍋湯和飯，然後每天帶一盒去上班。"
  },
  {
    "word": "shopping",
    "pos": "n.",
    "cn_def": "購物；採買",
    "en_def": "the activity of buying things in stores",
    "sentence": "A: Are you free to join us for dinner after work on Friday, or do you already have plans with your family for the long weekend? B: I promised my mother I would do the grocery {{BLANK}} for our holiday meal, but I can meet you at the restaurant after eight.",
    "cn": "A：你週五下班後有空和我們一起吃晚餐嗎？還是你連假已經和家人有計畫了？ B：我答應我媽要為節日大餐去【採買】食品雜貨，不過我可以八點後在餐廳和你們會合。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "整理；安排",
    "en_def": "to arrange things in a neat and useful order",
    "sentence": "A: The storage closet next to the copy room is full of old boxes, and nobody can find the printer paper when they need it, can they? B: You're right, so let's spend an hour on Friday afternoon to {{BLANK}} the shelves by type and add clear labels to every box.",
    "cn": "A：影印室旁邊的儲藏櫃堆滿了舊箱子，需要的時候沒人找得到印表機紙，對吧？ B：你說得對，所以我們週五下午花一個小時按種類【整理】架子，並在每個箱子上貼清楚的標籤。"
  },
  {
    "word": "wipe",
    "pos": "v.",
    "cn_def": "擦拭",
    "en_def": "to clean a surface by rubbing it with a cloth",
    "sentence": "A: What should I do before I leave the break room tonight, since the cleaning team won't come back until Monday morning? B: Please {{BLANK}} the tables with the blue cloth and some spray, because people left coffee rings and crumbs everywhere after the birthday party this afternoon.",
    "cn": "A：既然清潔團隊要到週一早上才會回來，我今晚離開茶水間前應該做什麼？ B：請用藍色抹布和一些清潔噴劑【擦拭】桌子，因為今天下午的生日派對後大家留下了到處都是的咖啡杯印和碎屑。"
  },
  {
    "word": "scrub",
    "pos": "v.",
    "cn_def": "刷洗；擦洗",
    "en_def": "to clean something by rubbing it hard, usually with a brush",
    "sentence": "A: The pots in the restaurant kitchen still have burned sauce on the bottom, so will the dishwasher be able to remove it during the night cycle? B: Probably not, so you'll need to {{BLANK}} them by hand with hot water and a hard brush before you put them into the machine.",
    "cn": "A：餐廳廚房的鍋子底部還有燒焦的醬汁，洗碗機在夜間清洗時能把它去掉嗎？ B：大概不行，所以在放進機器前，你需要用熱水和硬刷子手工【刷洗】它們。"
  },
  {
    "word": "rinse",
    "pos": "v.",
    "cn_def": "沖洗；漂洗",
    "en_def": "to wash something quickly with clean water to remove soap or dirt",
    "sentence": "A: Why do the glasses from the hotel bar sometimes taste like soap when guests order a drink, and have customers complained to the front desk? B: Yes, two guests did, so I've asked the bar staff to {{BLANK}} each glass carefully with hot water after washing and then let it dry completely.",
    "cn": "A：為什麼飯店酒吧的杯子在客人點飲料時有時會有肥皂味？有客人向櫃台抱怨嗎？ B：有，兩位客人抱怨過，所以我已請酒吧員工在洗完後用熱水仔細【沖洗】每個杯子，然後讓它完全晾乾。"
  },
  {
    "word": "sort",
    "pos": "v.",
    "cn_def": "分類；整理",
    "en_def": "to put things into groups by type",
    "sentence": "A: There are so many returned items in the warehouse today, and the delivery trucks are coming at three, so where should I begin? B: First {{BLANK}} the products into three piles, damaged, wrong size, and unopened, and then we can decide which ones go back on the shelves.",
    "cn": "A：今天倉庫裡退回的商品好多，送貨卡車三點就要來了，我該從哪裡開始？ B：先把產品【分類】成三堆：損壞的、尺寸錯的和沒拆封的，然後我們再決定哪些要放回架上。"
  },
  {
    "word": "fold",
    "pos": "v.",
    "cn_def": "摺；摺疊",
    "en_def": "to bend cloth or paper so that one part lies on top of another",
    "sentence": "A: The hotel guests on the tenth floor asked for extra towels, so how should I prepare them before bringing them up from the laundry room? B: Please {{BLANK}} each towel neatly into thirds, place them in a clean basket, and add two small bottles of shampoo as a welcome gift.",
    "cn": "A：十樓的飯店客人要求額外的毛巾，從洗衣房拿上去之前我該怎麼準備？ B：請把每條毛巾整齊地【摺】成三折，放進乾淨的籃子裡，再加兩小瓶洗髮精當作歡迎禮。"
  },
  {
    "word": "hang",
    "pos": "v.",
    "cn_def": "掛；吊",
    "en_def": "to put something up so that it is held from above",
    "sentence": "A: The sun is shining this morning after a week of heavy rain, so should we use the dryer for the uniforms from the restaurant? B: Let's save electricity and {{BLANK}} them on the line behind the kitchen, because the weather report says it will stay dry and warm until evening.",
    "cn": "A：下了一週大雨後今天早上出太陽了，那我們該用烘乾機烘餐廳的制服嗎？ B：我們省點電，把它們【掛】在廚房後面的曬衣繩上吧，因為氣象報告說到傍晚都會保持乾燥溫暖。"
  },
  {
    "word": "repair",
    "pos": "v.",
    "cn_def": "修理",
    "en_def": "to fix something that is broken",
    "sentence": "A: The washing machine in the staff dormitory is making a loud noise again, and water is leaking onto the floor, so who should I call? B: Contact the maintenance office on the first floor, and they will send a technician to {{BLANK}} it this afternoon before more water damages the carpet.",
    "cn": "A：員工宿舍的洗衣機又發出很大的噪音，還有水漏到地板上，我該打給誰？ B：聯絡一樓的維修辦公室，他們今天下午會派技術人員來【修理】，以免更多水損壞地毯。"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "cn_def": "維護；保養",
    "en_def": "to keep something in good condition",
    "sentence": "A: Our new office has a lot of plants and a big glass wall, so how much work will it take to keep everything looking nice? B: We signed a contract with a cleaning company that will {{BLANK}} the windows and water the plants twice a week, so our staff don't need to worry.",
    "cn": "A：我們的新辦公室有很多植物和一大面玻璃牆，要讓一切保持美觀需要多少功夫？ B：我們和一家清潔公司簽了合約，他們每週兩次【維護】窗戶和替植物澆水，所以我們的員工不用擔心。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；慣例",
    "en_def": "the usual order and way in which you regularly do things",
    "sentence": "A: How do you manage to keep your apartment so clean when you work overtime at the hospital almost every week? B: I follow a simple {{BLANK}}: I wash the dishes right after dinner, I do the laundry on Wednesday nights, and I clean the bathroom every Saturday morning.",
    "cn": "A：你幾乎每週都在醫院加班，是怎麼讓公寓保持這麼乾淨的？ B：我遵循一套簡單的【例行程序】：晚餐後馬上洗碗，週三晚上洗衣服，每週六早上打掃浴室。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程表",
    "en_def": "a plan that lists the times when things will be done",
    "sentence": "A: The kitchen in our shared office is always dirty by Thursday, and people keep arguing about whose turn it is to clean the fridge, right? B: Exactly, so I made a cleaning {{BLANK}} with every team member's name and date, and I posted it on the wall next to the coffee machine.",
    "cn": "A：我們共用辦公室的廚房每到週四總是很髒，大家一直爭論輪到誰清冰箱，對吧？ B：沒錯，所以我做了一張列出每位組員名字和日期的清潔【時間表】，貼在咖啡機旁邊的牆上。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time, money or energy",
    "sentence": "A: Why did the hotel replace all of its old washing machines last month, since they were still working well enough for the guest rooms? B: The new ones are much more {{BLANK}}, so they use less water and electricity, and the laundry team can finish twice as many sheets every shift.",
    "cn": "A：飯店上個月為什麼要汰換所有舊洗衣機？它們對客房來說還算堪用。 B：新的機器【有效率】得多，用的水和電都更少，洗衣團隊每班能洗完的床單也多了一倍。"
  },
  {
    "word": "thorough",
    "pos": "adj.",
    "cn_def": "徹底的；仔細的",
    "en_def": "careful and complete, with nothing missed",
    "sentence": "A: The health inspector is visiting our restaurant next Tuesday, so what should the kitchen team do to get ready before she arrives? B: We need a {{BLANK}} cleaning of every shelf, oven, and fridge, and the manager will check each area herself on Monday afternoon to make sure nothing is missed.",
    "cn": "A：衛生稽查員下週二要來我們餐廳，廚房團隊在她來之前應該做什麼準備？ B：我們需要把每個架子、烤箱和冰箱做一次【徹底】的清潔，經理會在週一下午親自檢查每個區域，確保沒有遺漏。"
  },
  {
    "word": "messy",
    "pos": "adj.",
    "cn_def": "凌亂的；髒亂的",
    "en_def": "dirty or not tidy",
    "sentence": "A: What did the landlord say when he visited the apartment you were renting, after your roommate threw that big party last weekend? B: He said the living room was too {{BLANK}}, with bottles and paper plates everywhere, so we must clean it up before Friday or lose part of our deposit.",
    "cn": "A：你室友上週末辦了那場大派對之後，房東來看你租的公寓時說了什麼？ B：他說客廳太【凌亂】了，到處都是瓶子和紙盤，所以我們必須在週五前清理乾淨，否則會被扣部分押金。"
  },
  {
    "word": "neat",
    "pos": "adj.",
    "cn_def": "整齊的；整潔的",
    "en_def": "tidy and in good order",
    "sentence": "A: What do the customers notice first when they walk into your shop, since you said sales have gone up a lot this year? B: They always tell me the store looks very {{BLANK}}, because we keep every shirt folded and arranged by color and size on clean wooden shelves.",
    "cn": "A：既然你說今年業績提升很多，顧客走進你的店時最先注意到什麼？ B：他們總是告訴我店裡看起來很【整齊】，因為我們把每件襯衫都摺好，並按顏色和尺寸排列在乾淨的木架上。"
  },
  {
    "word": "spotless",
    "pos": "adj.",
    "cn_def": "一塵不染的；非常乾淨的",
    "en_def": "completely clean",
    "sentence": "A: How was your stay at the new business hotel near the airport, and would you recommend it to the sales team for next month's trip? B: Absolutely, the room was {{BLANK}}, with fresh sheets, shiny floors, and a bathroom that smelled like lemons, and the staff were very friendly as well.",
    "cn": "A：你在機場附近那家新商務飯店住得如何？你會推薦給業務團隊下個月出差住嗎？ B：當然會，房間【一塵不染】，床單乾淨、地板光亮、浴室有檸檬香，員工也非常友善。"
  },
  {
    "word": "hygienic",
    "pos": "adj.",
    "cn_def": "衛生的；合乎衛生的",
    "en_def": "clean and safe for people's health",
    "sentence": "A: Why does the factory cafeteria require all kitchen workers to wear gloves and hair nets, even when they are just serving rice? B: The company wants the food area to be completely {{BLANK}}, so it protects workers from getting sick and passes the government health inspection every year.",
    "cn": "A：為什麼工廠餐廳要求所有廚房工作人員都戴手套和髮網，即使只是在盛飯？ B：公司希望用餐區完全【合乎衛生】，這樣能保護員工不生病，也能每年通過政府的衛生檢查。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常地",
    "en_def": "often and at the same times",
    "sentence": "A: The air conditioners in the conference rooms smell strange whenever we turn them on, so is there anything wrong with them? B: The filters are dirty, so the building staff will now clean them {{BLANK}}, once every two weeks, to keep the air fresh for everyone working here.",
    "cn": "A：會議室的冷氣每次打開都有奇怪的味道，它們出了什麼問題嗎？ B：濾網髒了，所以大樓人員現在會【定期】清理，每兩週一次，讓在這裡工作的每個人都能呼吸新鮮空氣。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "小心地；仔細地",
    "en_def": "in a way that avoids mistakes or damage",
    "sentence": "A: These wine glasses for the company's anniversary dinner are very expensive, so should I put them in the dishwasher with the other plates? B: No, please wash them {{BLANK}} by hand in warm water, because they break easily, and we only have exactly enough for the guests tonight.",
    "cn": "A：這些公司週年晚宴用的酒杯非常昂貴，我應該把它們和其他盤子一起放進洗碗機嗎？ B：不行，請用溫水【小心地】手洗它們，因為它們很容易破，而且我們的數量剛好只夠今晚的客人用。"
  },
  {
    "word": "quickly",
    "pos": "adv.",
    "cn_def": "快速地",
    "en_def": "fast; in a short time",
    "sentence": "A: The clients from Singapore will arrive at the office in ten minutes, but the meeting room still has cups and papers from this morning, doesn't it? B: Don't worry, I'll clear the table {{BLANK}} and open the windows, and you can bring in fresh water and the product samples.",
    "cn": "A：新加坡的客戶十分鐘後就會到辦公室，但會議室還留著今天早上的杯子和文件，對吧？ B：別擔心，我會【快速地】清理桌子並打開窗戶，你可以把新的水和產品樣品拿進來。"
  },
  {
    "word": "daily",
    "pos": "adv.",
    "cn_def": "每天地",
    "en_def": "every day",
    "sentence": "A: How often does the cleaning crew empty the trash cans in the open office, because the one near my desk was full yesterday? B: They are supposed to empty them {{BLANK}} at six in the evening, but one worker was sick this week, so I'll remind the supervisor right away.",
    "cn": "A：清潔人員多久清一次開放式辦公室的垃圾桶？我桌旁那個昨天滿了。 B：他們應該【每天】傍晚六點清空，但這週有一位員工生病了，所以我會馬上提醒主管。"
  },
  {
    "word": "occasionally",
    "pos": "adv.",
    "cn_def": "偶爾地",
    "en_def": "sometimes, but not often",
    "sentence": "A: Do you hire someone to clean your house every week, or do you and your husband share all of the housework yourselves? B: We do most of it ourselves, but we {{BLANK}} pay a cleaner to wash the windows and clean the oven, maybe three or four times a year.",
    "cn": "A：你們每週請人來打掃房子，還是你和你先生自己分擔所有家務？ B：我們大部分自己做，但【偶爾】會付錢請清潔工來洗窗戶和清烤箱，大概一年三、四次。"
  }
];

const MCQS = [
  {
    "q": "Taking out the recycling every Friday is the least popular _____ in our shared office. Most staff try to avoid it.",
    "options": [
      "chore",
      "laundry",
      "cooking",
      "schedule"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The building manager hired an outside company for a deep _____ of the carpets. The work will be done on Sunday.",
    "options": [
      "ironing",
      "cooking",
      "cleaning",
      "shopping"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Hotel guests can leave their dirty clothes in the bag provided. The _____ service returns them clean within twenty-four hours.",
    "options": [
      "cooking",
      "laundry",
      "sweeping",
      "mopping"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The carpets in the conference room were full of crumbs after the party. The cleaner will do the _____ before the meeting starts.",
    "options": [
      "ironing",
      "cooking",
      "laundry",
      "vacuuming"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Strong winds blew dry leaves across the restaurant's front entrance. A worker grabbed a broom and began _____ before the first customers arrived.",
    "options": [
      "sweeping",
      "ironing",
      "dishwashing",
      "shopping"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Someone spilled orange juice all over the kitchen floor this morning. Please finish the _____ before anyone slips on the sticky tiles.",
    "options": [
      "ironing",
      "shopping",
      "cooking",
      "mopping"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Kevin's shirts came out of the dryer full of wrinkles. He spent an hour on the _____ before his job interview.",
    "options": [
      "sweeping",
      "mopping",
      "ironing",
      "vacuuming"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Anna enjoys _____ for her coworkers on weekends. She often brings homemade soup and dumplings to the office on Monday.",
    "options": [
      "sweeping",
      "cooking",
      "mopping",
      "ironing"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The supply closet is so crowded that nobody can find the printer paper. Let's _____ the shelves and label every box.",
    "options": [
      "rinse",
      "fold",
      "organize",
      "hang"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Please _____ the tables with a damp cloth after lunch. Crumbs and coffee rings attract ants in the break room.",
    "options": [
      "wipe",
      "fold",
      "sort",
      "hang"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The burned sauce will not come off the pot easily. You will need to _____ it hard with a stiff brush.",
    "options": [
      "fold",
      "sort",
      "organize",
      "scrub"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "After washing the glasses with soap, _____ them under clean running water. Otherwise, guests may notice a soapy taste in their drinks.",
    "options": [
      "fold",
      "rinse",
      "sort",
      "hang"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Before washing the uniforms, _____ them into piles of white and dark colors. This keeps the white shirts from turning gray.",
    "options": [
      "wipe",
      "rinse",
      "scrub",
      "sort"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Housekeeping staff must _____ each towel into thirds before placing it on the shelf. This makes the bathroom look neat for guests.",
    "options": [
      "scrub",
      "fold",
      "rinse",
      "repair"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The sun came out after a week of rain. We decided to _____ the wet uniforms on the line behind the kitchen.",
    "options": [
      "hang",
      "fold",
      "scrub",
      "organize"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The washing machine in the staff dormitory is leaking water again. A technician will come this afternoon to _____ it.",
    "options": [
      "rinse",
      "fold",
      "repair",
      "sort"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "A cleaning company was hired to _____ the office plants and windows. Their staff visit twice a week to keep everything in good condition.",
    "options": [
      "sort",
      "maintain",
      "fold",
      "scrub"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Keeping a simple weekly _____ helps busy workers stay on top of housework. For example, laundry can always be done on Wednesday nights.",
    "options": [
      "laundry",
      "cooking",
      "mopping",
      "routine"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The office manager posted a cleaning _____ next to the coffee machine. It lists which team member cleans the fridge each Friday.",
    "options": [
      "schedule",
      "chore",
      "laundry",
      "cooking"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The new washing machines are far more _____ than the old ones. They use half the water and finish each load faster.",
    "options": [
      "messy",
      "neat",
      "efficient",
      "spotless"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Before the health inspection, the kitchen staff gave every oven and fridge a _____ cleaning. Nothing was missed, and the restaurant passed easily.",
    "options": [
      "thorough",
      "messy",
      "neat",
      "hygienic"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "After the weekend party, the living room was very _____. Paper plates and empty bottles covered the floor and the sofa.",
    "options": [
      "spotless",
      "messy",
      "neat",
      "hygienic"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Customers often say the shop looks _____ and well organized. Every shirt is folded and arranged by color on the shelves.",
    "options": [
      "messy",
      "thorough",
      "hygienic",
      "neat"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The hotel room was _____ when we checked in. There was not a single speck of dust anywhere, even under the bed.",
    "options": [
      "messy",
      "efficient",
      "spotless",
      "thorough"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Kitchen workers must wear gloves and hair nets at all times. These rules keep food preparation _____ and protect customers' health.",
    "options": [
      "messy",
      "efficient",
      "thorough",
      "hygienic"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The air conditioner filters should be cleaned _____, about once every two weeks. Dirty filters make the meeting rooms smell bad.",
    "options": [
      "regularly",
      "quickly",
      "carefully",
      "daily"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "These crystal glasses break very easily. Please wash them _____ by hand instead of putting them in the dishwasher.",
    "options": [
      "quickly",
      "occasionally",
      "carefully",
      "regularly"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Our clients will arrive in five minutes, and the meeting room is still a mess. We need to clean it up _____.",
    "options": [
      "occasionally",
      "quickly",
      "regularly",
      "daily"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The cleaning crew empties the trash cans _____ at six in the evening. Not a single day is skipped, even on holidays.",
    "options": [
      "daily",
      "occasionally",
      "carefully",
      "quickly"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "We do most of the housework ourselves. However, we _____ hire a cleaner for big jobs, maybe three times a year.",
    "options": [
      "daily",
      "regularly",
      "carefully",
      "occasionally"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "chore": {
    "pos": "n.",
    "en_def": "a regular small job you do at home or work",
    "cn_def": "家務；雜事"
  },
  "cleaning": {
    "pos": "n.",
    "en_def": "the work of making a place or thing clean",
    "cn_def": "清潔；打掃"
  },
  "tidying": {
    "pos": "n.",
    "en_def": "putting things back in their proper places so an area looks neat",
    "cn_def": "整理；收拾"
  },
  "laundry": {
    "pos": "n.",
    "en_def": "clothes and sheets that need washing, or the job of washing them",
    "cn_def": "洗衣；待洗的衣物"
  },
  "vacuuming": {
    "pos": "n.",
    "en_def": "cleaning floors or carpets with a machine that sucks up dirt",
    "cn_def": "吸塵"
  },
  "sweeping": {
    "pos": "n.",
    "en_def": "cleaning a floor with a brush that has a long handle",
    "cn_def": "掃地"
  },
  "mopping": {
    "pos": "n.",
    "en_def": "washing a floor with a wet cloth or sponge on a long stick",
    "cn_def": "拖地"
  },
  "dusting": {
    "pos": "n.",
    "en_def": "removing dust from furniture and surfaces with a cloth",
    "cn_def": "撣灰塵；除塵"
  },
  "dishwashing": {
    "pos": "n.",
    "en_def": "washing plates, cups and cooking tools after a meal",
    "cn_def": "洗碗"
  },
  "ironing": {
    "pos": "n.",
    "en_def": "making clothes smooth with a hot, flat tool",
    "cn_def": "燙衣服"
  },
  "cooking": {
    "pos": "n.",
    "en_def": "the activity of preparing food",
    "cn_def": "烹飪；做菜"
  },
  "shopping": {
    "pos": "n.",
    "en_def": "the activity of buying things in stores",
    "cn_def": "購物；採買"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things in a neat and useful order",
    "cn_def": "整理；安排"
  },
  "wipe": {
    "pos": "v.",
    "en_def": "to clean a surface by rubbing it with a cloth",
    "cn_def": "擦拭"
  },
  "scrub": {
    "pos": "v.",
    "en_def": "to clean something by rubbing it hard, usually with a brush",
    "cn_def": "刷洗；擦洗"
  },
  "rinse": {
    "pos": "v.",
    "en_def": "to wash something quickly with clean water to remove soap or dirt",
    "cn_def": "沖洗；漂洗"
  },
  "sort": {
    "pos": "v.",
    "en_def": "to put things into groups by type",
    "cn_def": "分類；整理"
  },
  "fold": {
    "pos": "v.",
    "en_def": "to bend cloth or paper so that one part lies on top of another",
    "cn_def": "摺；摺疊"
  },
  "hang": {
    "pos": "v.",
    "en_def": "to put something up so that it is held from above",
    "cn_def": "掛；吊"
  },
  "repair": {
    "pos": "v.",
    "en_def": "to fix something that is broken",
    "cn_def": "修理"
  },
  "maintain": {
    "pos": "v.",
    "en_def": "to keep something in good condition",
    "cn_def": "維護；保養"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual order and way in which you regularly do things",
    "cn_def": "例行公事；慣例"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will be done",
    "cn_def": "時間表；行程表"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time, money or energy",
    "cn_def": "有效率的"
  },
  "thorough": {
    "pos": "adj.",
    "en_def": "careful and complete, with nothing missed",
    "cn_def": "徹底的；仔細的"
  },
  "messy": {
    "pos": "adj.",
    "en_def": "dirty or not tidy",
    "cn_def": "凌亂的；髒亂的"
  },
  "neat": {
    "pos": "adj.",
    "en_def": "tidy and in good order",
    "cn_def": "整齊的；整潔的"
  },
  "spotless": {
    "pos": "adj.",
    "en_def": "completely clean",
    "cn_def": "一塵不染的；非常乾淨的"
  },
  "hygienic": {
    "pos": "adj.",
    "en_def": "clean and safe for people's health",
    "cn_def": "衛生的；合乎衛生的"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often and at the same times",
    "cn_def": "定期地；經常地"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "in a way that avoids mistakes or damage",
    "cn_def": "小心地；仔細地"
  },
  "quickly": {
    "pos": "adv.",
    "en_def": "fast; in a short time",
    "cn_def": "快速地"
  },
  "daily": {
    "pos": "adv.",
    "en_def": "every day",
    "cn_def": "每天地"
  },
  "occasionally": {
    "pos": "adv.",
    "en_def": "sometimes, but not often",
    "cn_def": "偶爾地"
  }
};

const EXTRA_GLOSSES = {};
