// Topic 346 Quiz Data: Sea 海洋
// Source word list: https://www.examword.com/group-topic/sea — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T346 - Sea 海洋",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ocean",
    "pos": "n.",
    "cn_def": "海洋；大洋",
    "en_def": "a very large area of salt water that covers much of the Earth",
    "sentence": "A: Why did the shipping company decide to send our new machines by plane instead of by boat this time? B: Crossing the Pacific {{BLANK}} by cargo ship would take almost five weeks, and the customer in Los Angeles needs everything installed before the end of next month.",
    "cn": "A：這次運輸公司為什麼決定用飛機而不是用船來運送我們的新機器？ B：用貨輪橫越太平【洋】大約要花五週，而洛杉磯的客戶需要在下個月底前把所有東西安裝好。"
  },
  {
    "word": "wave",
    "pos": "n.",
    "cn_def": "波浪；海浪",
    "en_def": "a line of moving water that rises on the surface of the sea",
    "sentence": "A: Is it safe for the hotel guests to go surfing this afternoon, or should we cancel the beach lesson we booked for them? B: The lifeguard said each {{BLANK}} is almost three meters high today, so it's better to move the lesson to tomorrow morning when the weather improves.",
    "cn": "A：今天下午飯店的客人去衝浪安全嗎？還是我們應該取消幫他們預約的海灘課程？ B：救生員說今天每一道【浪】幾乎都有三公尺高，所以最好把課程改到明天早上天氣好轉的時候。"
  },
  {
    "word": "tide",
    "pos": "n.",
    "cn_def": "潮汐；潮水",
    "en_def": "the regular rise and fall of the sea level",
    "sentence": "A: What time should the tour group start walking across the sand to the little temple on the rocks tomorrow? B: We have to leave before ten o'clock, because the {{BLANK}} comes in quickly around noon and the path completely disappears under the water for several hours.",
    "cn": "A：明天旅行團應該幾點開始走過沙灘到礁石上的小廟？ B：我們必須在十點以前出發，因為中午左右【潮水】漲得很快，那條小路會完全被海水淹沒好幾個小時。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸；沿海地區",
    "en_def": "the land next to the sea",
    "sentence": "A: Where is the company planning to hold its annual staff retreat this year, and how will everyone get there? B: The managers chose a resort on the east {{BLANK}} of Taiwan, and we will take a comfortable chartered train from Taipei so nobody has to drive.",
    "cn": "A：公司今年打算在哪裡舉辦年度員工旅遊？大家要怎麼過去？ B：主管們選了台灣東【海岸】的一間度假村，我們會從台北搭舒適的包租火車過去，所以沒有人需要開車。"
  },
  {
    "word": "shore",
    "pos": "n.",
    "cn_def": "岸；海岸；湖岸",
    "en_def": "the land along the edge of the sea or a lake",
    "sentence": "A: Did you enjoy the boat trip with the clients from Japan, even though the weather became cloudy in the afternoon? B: Yes, but after three hours at sea everyone was happy to get back to the {{BLANK}} and have a hot seafood dinner at the restaurant near the pier.",
    "cn": "A：雖然下午天氣轉陰，你還喜歡跟日本客戶一起的乘船之旅嗎？ B：喜歡，不過在海上待了三個小時之後，大家都很高興回到【岸上】，在碼頭附近的餐廳吃一頓熱騰騰的海鮮晚餐。"
  },
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘；沙灘",
    "en_def": "an area of sand or small stones beside the sea",
    "sentence": "A: Are there any fun activities near the conference hotel where we can relax after the long meetings finish each day? B: There's a quiet sandy {{BLANK}} just five minutes away on foot, and many guests go there in the evening to swim, take photos, and watch the sunset.",
    "cn": "A：會議飯店附近有沒有什麼好玩的活動，讓我們每天開完長時間的會議後可以放鬆一下？ B：步行五分鐘就有一片安靜的【沙灘】，許多住客傍晚會去那裡游泳、拍照和看夕陽。"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "cn_def": "港灣；港口",
    "en_def": "a protected area of water where ships and boats can stay safely",
    "sentence": "A: Why are so many fishing boats still tied up near the market this morning instead of going out to work? B: A typhoon warning was announced last night, so the coast guard ordered every boat to stay inside the {{BLANK}} until the strong winds have passed.",
    "cn": "A：為什麼今天早上還有這麼多漁船停在市場附近，沒有出海作業？ B：昨晚發布了颱風警報，所以海巡署命令所有船隻都要待在【港灣】內，直到強風過去為止。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "港口；港市",
    "en_def": "a town or place where ships load and unload goods",
    "sentence": "A: When will the containers with our new office furniture finally arrive from the factory in Vietnam? B: The ship reaches the {{BLANK}} of Kaohsiung on Thursday, and after the customs check, a truck will deliver everything to our building by Monday afternoon.",
    "cn": "A：裝著我們新辦公家具的貨櫃什麼時候才會從越南的工廠運到？ B：船會在星期四抵達高雄【港】，經過海關檢查後，卡車會在星期一下午之前把所有東西送到我們大樓。"
  },
  {
    "word": "island",
    "pos": "n.",
    "cn_def": "島；島嶼",
    "en_def": "a piece of land completely surrounded by water",
    "sentence": "A: How are the guests getting to the wedding reception, since the hotel is so far from the city? B: The resort is on a small {{BLANK}} about twenty minutes from the mainland, so the couple has booked a private ferry that leaves the pier every hour.",
    "cn": "A：飯店離市區那麼遠，賓客要怎麼去參加婚宴？ B：度假村位於離本島大約二十分鐘的一座小【島】上，所以新人預訂了一艘每小時從碼頭出發的私人渡輪。"
  },
  {
    "word": "reef",
    "pos": "n.",
    "cn_def": "礁；暗礁；珊瑚礁",
    "en_def": "a line of rocks or coral near the surface of the sea",
    "sentence": "A: Why does the diving school ask every new student to stay close to the instructor during the first lesson? B: There is a sharp {{BLANK}} just below the surface near the bay, and beginners can easily cut their legs or damage the sea life if they swim too far.",
    "cn": "A：為什麼潛水學校要求每位新學員在第一堂課時都要待在教練身邊？ B：海灣附近的水面下就有一片尖銳的【礁石】，初學者如果游得太遠，很容易割傷腿或破壞海洋生物。"
  },
  {
    "word": "coral",
    "pos": "n.",
    "cn_def": "珊瑚",
    "en_def": "a hard colorful material formed by small sea animals, often in warm water",
    "sentence": "A: What should we tell tourists before they start snorkeling on the guided tour this weekend? B: Remind them not to touch or stand on the {{BLANK}}, because it grows very slowly, and even a small amount of damage can take many years to recover.",
    "cn": "A：這週末導覽行程中，遊客開始浮潛之前，我們應該告訴他們什麼？ B：提醒他們不要觸摸或踩在【珊瑚】上，因為它生長得非常緩慢，即使是一點點損傷也可能需要好幾年才能恢復。"
  },
  {
    "word": "current",
    "pos": "n.",
    "cn_def": "水流；海流",
    "en_def": "a strong movement of water in one direction",
    "sentence": "A: Why is the swimming area at the north end of the beach closed to the public again this week? B: The lifeguards noticed a dangerous {{BLANK}} there that pulls swimmers away from the beach very quickly, so they put up warning signs for everyone's safety.",
    "cn": "A：為什麼海灘北端的游泳區這週又不開放給民眾了？ B：救生員發現那裡有一股危險的【水流】，會很快地把泳客拉離海灘，所以為了大家的安全，他們立起了警告標誌。"
  },
  {
    "word": "sail",
    "pos": "v.",
    "cn_def": "航行；駕船",
    "en_def": "to travel across water in a boat or ship",
    "sentence": "A: How long will the cruise ship take to reach Okinawa, and will the passengers have time to go shopping there? B: We will {{BLANK}} through the night and arrive early the next morning, so everyone can spend about eight hours visiting the markets before we depart.",
    "cn": "A：郵輪到沖繩要多久？乘客到那裡有時間去購物嗎？ B：我們會連夜【航行】，隔天一大早抵達，所以大家在離開前大約有八個小時可以逛市場。"
  },
  {
    "word": "dive",
    "pos": "v.",
    "cn_def": "潛水；跳水",
    "en_def": "to jump into water head first, or to swim under the water",
    "sentence": "A: Can I join the underwater photography tour on Saturday, even though I have never taken a scuba course before? B: You'll need a beginner's license to {{BLANK}} with the group, but the shop offers a two-day training course that starts on Thursday morning.",
    "cn": "A：雖然我從來沒上過水肺潛水課，星期六可以參加水下攝影團嗎？ B：你需要有初級證照才能跟團【潛水】，不過店家有開一個兩天的訓練課程，星期四早上開始。"
  },
  {
    "word": "float",
    "pos": "v.",
    "cn_def": "漂浮；浮起",
    "en_def": "to stay on the surface of water without sinking",
    "sentence": "A: Why do all the passengers have to wear life jackets before the ferry leaves, even on such a short trip? B: The jackets help you {{BLANK}} on the water if there is an emergency, and the law requires every passenger to wear one during the whole journey.",
    "cn": "A：為什麼渡輪出發前所有乘客都要穿救生衣，即使只是這麼短的航程？ B：發生緊急情況時，救生衣能幫助你【漂浮】在水面上，而且法律規定每位乘客在整趟航程中都必須穿著。"
  },
  {
    "word": "sink",
    "pos": "v.",
    "cn_def": "下沉；沉沒",
    "en_def": "to go down below the surface of water",
    "sentence": "A: Why did the logistics company check every container so carefully before loading the cargo ship this morning? B: If a ship carries too much weight, it can start to {{BLANK}} in bad weather, so the officers must confirm that the load is safe before it leaves.",
    "cn": "A：為什麼物流公司今天早上在裝載貨輪之前，要那麼仔細地檢查每個貨櫃？ B：如果船載重過多，在惡劣天氣中可能會開始【下沉】，所以船員必須在出發前確認載重是安全的。"
  },
  {
    "word": "fish",
    "pos": "n.",
    "cn_def": "魚；魚肉",
    "en_def": "an animal that lives in water and breathes through gills",
    "sentence": "A: What would you recommend for our dinner with the overseas clients at the harbor restaurant tonight? B: The grilled {{BLANK}} is caught fresh by local boats every morning, and the chef serves it with rice and vegetables, so it's the most popular dish on the menu.",
    "cn": "A：今晚在港口餐廳和海外客戶吃晚餐，你推薦點什麼？ B：烤【魚】是當地漁船每天早上新鮮捕撈的，主廚會配上米飯和蔬菜一起上桌，所以是菜單上最受歡迎的菜。"
  },
  {
    "word": "whale",
    "pos": "n.",
    "cn_def": "鯨魚",
    "en_def": "a very large sea animal that breathes air through a hole on top of its head",
    "sentence": "A: Is the morning boat tour along the east coast worth the money, or should we choose the bike tour instead? B: The boat tour is great, because guests often see a huge {{BLANK}} jumping out of the water, and the guide explains how these animals travel thousands of kilometers.",
    "cn": "A：東海岸的早晨賞海遊船值得花這個錢嗎？還是我們應該改選自行車行程？ B：遊船很棒，因為遊客常常會看到巨大的【鯨魚】躍出水面，導覽員也會解說這些動物如何遷徙數千公里。"
  },
  {
    "word": "dolphin",
    "pos": "n.",
    "cn_def": "海豚",
    "en_def": "an intelligent sea animal like a small whale with a long nose",
    "sentence": "A: Why are so many children waiting near the window of the aquarium's main hall this afternoon? B: A young {{BLANK}} is going to show visitors how it plays with a ball, and the trainers will also explain how these friendly animals communicate with each other.",
    "cn": "A：今天下午為什麼有這麼多小朋友在水族館大廳的窗邊等待？ B：一隻年輕的【海豚】要向遊客展示牠怎麼玩球，訓練師也會解說這些友善的動物如何彼此溝通。"
  },
  {
    "word": "seagull",
    "pos": "n.",
    "cn_def": "海鷗",
    "en_def": "a common grey and white bird that lives near the sea",
    "sentence": "A: Why did the café by the pier put up a new sign asking customers not to leave food on the outdoor tables? B: A noisy {{BLANK}} kept flying down and stealing sandwiches from guests, and the manager received several complaints from families with small children last weekend.",
    "cn": "A：為什麼碼頭旁的咖啡館貼出新告示，請客人不要把食物留在戶外桌上？ B：一隻吵鬧的【海鷗】一直飛下來偷客人的三明治，上週末經理接到好幾個帶小孩的家庭投訴。"
  },
  {
    "word": "storm",
    "pos": "n.",
    "cn_def": "暴風雨",
    "en_def": "very bad weather with strong winds and heavy rain",
    "sentence": "A: Why was the ferry to Penghu cancelled this morning when the sky looked so clear over Taipei? B: A strong {{BLANK}} was moving across the Taiwan Strait, and the shipping company decided it was too dangerous to carry passengers until the wind became weaker.",
    "cn": "A：今天早上台北上空看起來這麼晴朗，為什麼開往澎湖的渡輪取消了？ B：一場強烈的【暴風雨】正橫越台灣海峽，船公司認為在風勢減弱之前載客太危險了。"
  },
  {
    "word": "horizon",
    "pos": "n.",
    "cn_def": "地平線；水平線",
    "en_def": "the line where the sky seems to meet the sea or land",
    "sentence": "A: What makes the rooftop bar at our hotel so popular with business travelers in the evening? B: From the top floor, guests can watch the sun slowly go down below the {{BLANK}} while they enjoy a drink and chat with colleagues after a busy day.",
    "cn": "A：我們飯店的頂樓酒吧為什麼晚上這麼受商務旅客歡迎？ B：從頂樓，客人可以看著太陽慢慢沉到【水平線】下，同時在忙碌的一天後喝杯飲料，和同事聊聊天。"
  },
  {
    "word": "deep",
    "pos": "adj.",
    "cn_def": "深的",
    "en_def": "going far down from the top or surface",
    "sentence": "A: Is the swimming pool at the new sports center suitable for my two young children who are just learning to swim? B: The main pool is very {{BLANK}} at one end, about four meters, so the staff suggest that children use the shallow pool next to it instead.",
    "cn": "A：新運動中心的游泳池適合我兩個剛學游泳的小孩嗎？ B：主泳池有一端非常【深】，大約四公尺，所以工作人員建議小朋友改用旁邊的淺水池。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "平靜的；風平浪靜的",
    "en_def": "peaceful and not moving much, without big waves or wind",
    "sentence": "A: Do you think the boat trip to the small islands will still go ahead tomorrow after all this wind today? B: The weather report says the sea will be {{BLANK}} by tomorrow morning, so the tour company expects to leave on time at eight o'clock as planned.",
    "cn": "A：今天風這麼大，你覺得明天去小島的乘船行程還會照常出發嗎？ B：氣象報告說明天早上海面會變得【平靜】，所以旅行社預計會按照計畫在八點準時出發。"
  },
  {
    "word": "rough",
    "pos": "adj.",
    "cn_def": "波濤洶湧的；狂暴的",
    "en_def": "having big waves and strong wind, so not smooth or safe",
    "sentence": "A: How was your ferry trip to the conference on Green Island, and did you manage to prepare your presentation on the way? B: The sea was so {{BLANK}} that half the passengers felt sick, so I couldn't read my notes at all until we finally reached the island.",
    "cn": "A：你搭渡輪去綠島開會的行程怎麼樣？在路上有準備好你的簡報嗎？ B：海面非常【洶湧】，一半的乘客都暈船了，所以一直到我們終於抵達島上之前，我完全沒辦法看筆記。"
  },
  {
    "word": "salty",
    "pos": "adj.",
    "cn_def": "鹹的；含鹽的",
    "en_def": "containing or tasting of salt",
    "sentence": "A: Why does the hotel provide fresh-water showers right next to the swimming area on the beach? B: The seawater is quite {{BLANK}}, and many guests feel that their skin and hair become dry and sticky if they don't wash it off after swimming.",
    "cn": "A：為什麼飯店在海灘游泳區旁邊提供淡水淋浴？ B：海水相當【鹹】，很多客人覺得游完泳如果不沖掉，皮膚和頭髮會變得又乾又黏。"
  },
  {
    "word": "vast",
    "pos": "adj.",
    "cn_def": "遼闊的；巨大的",
    "en_def": "extremely large in area or size",
    "sentence": "A: Why does the shipping company need so many satellites and radar systems to track its cargo ships? B: The Pacific is a {{BLANK}} area of water with very few islands, so the company must know exactly where each ship is at every moment of the journey.",
    "cn": "A：為什麼船運公司需要這麼多衛星和雷達系統來追蹤貨輪？ B：太平洋是一片【遼闊的】水域，島嶼很少，所以公司必須在航程的每一刻都確切知道每艘船的位置。"
  },
  {
    "word": "marine",
    "pos": "adj.",
    "cn_def": "海洋的；海生的",
    "en_def": "connected with the sea and the animals and plants that live in it",
    "sentence": "A: Why is the government giving money to the university's new research center near the harbor? B: The scientists there study {{BLANK}} life such as turtles and sharks, and their reports help the local fishing industry protect the ocean for future generations.",
    "cn": "A：為什麼政府要撥款給大學位於港口附近的新研究中心？ B：那裡的科學家研究海龜和鯊魚等【海洋】生物，他們的報告能幫助當地漁業為後代保護海洋。"
  },
  {
    "word": "coastal",
    "pos": "adj.",
    "cn_def": "沿海的；海岸的",
    "en_def": "on or near the land next to the sea",
    "sentence": "A: Why are hotel prices in Hualien so high this month compared with the cities in central Taiwan? B: Many tourists want to visit the {{BLANK}} towns during the summer holiday, so the hotels near the sea are almost fully booked until the end of August.",
    "cn": "A：為什麼花蓮這個月的飯店價格比台灣中部的城市高這麼多？ B：很多遊客暑假都想去【沿海】小鎮玩，所以海邊附近的飯店到八月底幾乎都客滿了。"
  },
  {
    "word": "underwater",
    "pos": "adj.",
    "cn_def": "水下的；水中的",
    "en_def": "below the surface of water",
    "sentence": "A: What equipment should we bring for the marketing video we are filming at the diving center next week? B: We'll need an {{BLANK}} camera to record the divers near the reef, and the center has agreed to lend us waterproof lights for the darker areas.",
    "cn": "A：下週我們要在潛水中心拍攝行銷影片，應該帶什麼器材？ B：我們需要一台【水下】攝影機來拍攝礁石附近的潛水員，潛水中心也同意借我們防水燈，用在比較暗的區域。"
  },
  {
    "word": "ashore",
    "pos": "adv.",
    "cn_def": "上岸；在岸上",
    "en_def": "onto the land from the sea",
    "sentence": "A: How much free time will the cruise passengers have when the ship stops in Ishigaki on Friday? B: Everyone can go {{BLANK}} at nine in the morning and explore the town, but they must return to the ship by four o'clock because it departs at five.",
    "cn": "A：郵輪星期五停靠石垣島時，乘客會有多少自由時間？ B：大家早上九點可以【上岸】逛小鎮，但必須在四點前回到船上，因為船五點就要開了。"
  },
  {
    "word": "nearby",
    "pos": "adj.",
    "cn_def": "附近的",
    "en_def": "not far away",
    "sentence": "A: Is there anywhere close to the ferry terminal where our team can have lunch before the boat leaves at two? B: There's a {{BLANK}} seafood restaurant just across the street from the ticket office, and they usually serve customers quickly because many travelers eat there.",
    "cn": "A：渡輪碼頭附近有沒有地方能讓我們團隊在兩點開船前吃午餐？ B：售票處對街就有一家【附近的】海鮮餐廳，因為很多旅客在那裡用餐，他們通常上菜很快。"
  },
  {
    "word": "peacefully",
    "pos": "adv.",
    "cn_def": "平靜地；安詳地",
    "en_def": "in a quiet and calm way, without trouble",
    "sentence": "A: How did you spend your free afternoon at the seaside resort after the training workshop ended? B: I sat {{BLANK}} on a chair by the water, listened to the sound of the waves, and finally finished the novel I had been trying to read for months.",
    "cn": "A：訓練工作坊結束後，你在海濱度假村的空閒下午是怎麼度過的？ B：我【安靜地】坐在水邊的椅子上，聽著海浪聲，終於讀完了那本我好幾個月來一直想看完的小說。"
  }
];

const MCQS = [
  {
    "q": "Our shipping costs rose sharply this year. Sending goods across the _____ now takes longer because of new safety checks at sea.",
    "options": [
      "ocean",
      "coral",
      "beach",
      "reef"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The surfing competition was postponed until Sunday. Each _____ was too small for the athletes to perform their best moves.",
    "options": [
      "port",
      "wave",
      "reef",
      "coast"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Visitors can walk out to the rocks only in the early morning. When the _____ comes in, the path is covered by water.",
    "options": [
      "harbor",
      "whale",
      "tide",
      "reef"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The company opened a new hotel along the east _____ last spring. Guests can enjoy ocean views from every room.",
    "options": [
      "current",
      "coral",
      "fish",
      "coast"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After a long day of fishing, the crew finally returned to the _____. They unloaded their catch and cleaned the boat.",
    "options": [
      "wave",
      "shore",
      "horizon",
      "storm"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The resort offers free umbrellas and chairs on the _____. Guests should show their room key to the staff.",
    "options": [
      "beach",
      "tide",
      "current",
      "reef"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Dozens of yachts are anchored in the _____ during the festival. The calm water protects them from strong winds.",
    "options": [
      "horizon",
      "wave",
      "current",
      "harbor"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The cargo ship will unload its containers at the _____ on Friday. Customs officers will then inspect all the goods.",
    "options": [
      "beach",
      "reef",
      "port",
      "tide"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The new resort is located on a small _____ off the coast. Guests must take a ferry to reach it.",
    "options": [
      "island",
      "current",
      "wave",
      "horizon"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Boats must stay away from the northern part of the bay. A dangerous _____ lies just under the surface there.",
    "options": [
      "harbor",
      "port",
      "reef",
      "beach"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Divers are not allowed to touch the _____ in the marine park. It grows slowly and is easily damaged.",
    "options": [
      "storm",
      "coral",
      "tide",
      "port"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Swimmers should stay inside the yellow flags today. A strong _____ is pulling people away from the beach.",
    "options": [
      "shore",
      "island",
      "coast",
      "current"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The yacht club members plan to _____ to the islands this weekend. They will return to the harbor on Sunday evening.",
    "options": [
      "sink",
      "float",
      "sail",
      "dive"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Guests with a scuba license may _____ with an instructor near the reef. Equipment can be rented at the front desk.",
    "options": [
      "dive",
      "float",
      "sink",
      "sail"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Children must wear life jackets on the boat at all times. The jackets help them _____ if they fall into the water.",
    "options": [
      "dive",
      "sail",
      "sink",
      "float"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The old ship began to _____ after it hit the rocks. Fortunately, all passengers were rescued by the coast guard.",
    "options": [
      "sail",
      "sink",
      "float",
      "dive"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The restaurant buys fresh _____ from local boats every morning. Its seafood menu changes depending on the daily catch.",
    "options": [
      "fish",
      "coral",
      "reef",
      "current"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Tourists on the boat tour were excited to see a huge _____ in the distance. It sprayed water high into the air.",
    "options": [
      "tide",
      "horizon",
      "harbor",
      "whale"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The aquarium's star performer is a friendly _____ named Lulu. She can jump through hoops and play with a ball.",
    "options": [
      "reef",
      "coral",
      "dolphin",
      "current"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "A heavy _____ is expected to hit the coast tonight. All fishing boats have been ordered to return to the harbor.",
    "options": [
      "tide",
      "storm",
      "reef",
      "shore"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "From the hotel balcony, guests can see ships sailing along the _____. The view is especially beautiful at sunset.",
    "options": [
      "coral",
      "reef",
      "current",
      "horizon"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The water near the cliffs is very _____ and cold. Only experienced divers should swim in that area.",
    "options": [
      "deep",
      "salty",
      "nearby",
      "coastal"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The sea was _____ this morning, so the ferry left on time. Passengers enjoyed a smooth and pleasant journey to the island.",
    "options": [
      "rough",
      "calm",
      "deep",
      "vast"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The ferry service was cancelled because the sea was too _____. Waves were reaching over three meters high.",
    "options": [
      "calm",
      "marine",
      "rough",
      "nearby"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The research team is studying _____ life in the bay. They have discovered several new types of small sea animals.",
    "options": [
      "marine",
      "rough",
      "deep",
      "nearby"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Many _____ towns depend on tourism and fishing for income. Rising sea levels are a serious concern for local residents.",
    "options": [
      "underwater",
      "rough",
      "calm",
      "coastal"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The diving center sells waterproof cases for _____ photography. Customers can also rent special lights for deep dives.",
    "options": [
      "rough",
      "underwater",
      "salty",
      "vast"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Passengers may go _____ for six hours when the cruise ship stops in Okinawa. They must return by five o'clock.",
    "options": [
      "peacefully",
      "nearby",
      "ashore",
      "underwater"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Conference guests can stay at a _____ hotel within walking distance of the venue. Shuttle buses are also available every hour.",
    "options": [
      "vast",
      "rough",
      "salty",
      "nearby"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The Pacific is a _____ ocean that covers about one third of the Earth. Crossing it by ship takes several weeks.",
    "options": [
      "vast",
      "underwater",
      "coastal",
      "nearby"
    ],
    "answer": 0,
    "vocabIndex": 26
  }
];

const LOOKUP = {
  "ocean": {
    "pos": "n.",
    "en_def": "a very large area of salt water that covers much of the Earth",
    "cn_def": "海洋；大洋"
  },
  "wave": {
    "pos": "n.",
    "en_def": "a line of moving water that rises on the surface of the sea",
    "cn_def": "波浪；海浪"
  },
  "tide": {
    "pos": "n.",
    "en_def": "the regular rise and fall of the sea level",
    "cn_def": "潮汐；潮水"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸；沿海地區"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of the sea or a lake",
    "cn_def": "岸；海岸；湖岸"
  },
  "beach": {
    "pos": "n.",
    "en_def": "an area of sand or small stones beside the sea",
    "cn_def": "海灘；沙灘"
  },
  "harbor": {
    "pos": "n.",
    "en_def": "a protected area of water where ships and boats can stay safely",
    "cn_def": "港灣；港口"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or place where ships load and unload goods",
    "cn_def": "港口；港市"
  },
  "island": {
    "pos": "n.",
    "en_def": "a piece of land completely surrounded by water",
    "cn_def": "島；島嶼"
  },
  "reef": {
    "pos": "n.",
    "en_def": "a line of rocks or coral near the surface of the sea",
    "cn_def": "礁；暗礁；珊瑚礁"
  },
  "coral": {
    "pos": "n.",
    "en_def": "a hard colorful material formed by small sea animals, often in warm water",
    "cn_def": "珊瑚"
  },
  "current": {
    "pos": "n.",
    "en_def": "a strong movement of water in one direction",
    "cn_def": "水流；海流"
  },
  "sail": {
    "pos": "v.",
    "en_def": "to travel across water in a boat or ship",
    "cn_def": "航行；駕船"
  },
  "dive": {
    "pos": "v.",
    "en_def": "to jump into water head first, or to swim under the water",
    "cn_def": "潛水；跳水"
  },
  "float": {
    "pos": "v.",
    "en_def": "to stay on the surface of water without sinking",
    "cn_def": "漂浮；浮起"
  },
  "sink": {
    "pos": "v.",
    "en_def": "to go down below the surface of water",
    "cn_def": "下沉；沉沒"
  },
  "fish": {
    "pos": "n.",
    "en_def": "an animal that lives in water and breathes through gills",
    "cn_def": "魚；魚肉"
  },
  "whale": {
    "pos": "n.",
    "en_def": "a very large sea animal that breathes air through a hole on top of its head",
    "cn_def": "鯨魚"
  },
  "dolphin": {
    "pos": "n.",
    "en_def": "an intelligent sea animal like a small whale with a long nose",
    "cn_def": "海豚"
  },
  "seagull": {
    "pos": "n.",
    "en_def": "a common grey and white bird that lives near the sea",
    "cn_def": "海鷗"
  },
  "storm": {
    "pos": "n.",
    "en_def": "very bad weather with strong winds and heavy rain",
    "cn_def": "暴風雨"
  },
  "horizon": {
    "pos": "n.",
    "en_def": "the line where the sky seems to meet the sea or land",
    "cn_def": "地平線；水平線"
  },
  "deep": {
    "pos": "adj.",
    "en_def": "going far down from the top or surface",
    "cn_def": "深的"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "peaceful and not moving much, without big waves or wind",
    "cn_def": "平靜的；風平浪靜的"
  },
  "rough": {
    "pos": "adj.",
    "en_def": "having big waves and strong wind, so not smooth or safe",
    "cn_def": "波濤洶湧的；狂暴的"
  },
  "salty": {
    "pos": "adj.",
    "en_def": "containing or tasting of salt",
    "cn_def": "鹹的；含鹽的"
  },
  "vast": {
    "pos": "adj.",
    "en_def": "extremely large in area or size",
    "cn_def": "遼闊的；巨大的"
  },
  "marine": {
    "pos": "adj.",
    "en_def": "connected with the sea and the animals and plants that live in it",
    "cn_def": "海洋的；海生的"
  },
  "coastal": {
    "pos": "adj.",
    "en_def": "on or near the land next to the sea",
    "cn_def": "沿海的；海岸的"
  },
  "underwater": {
    "pos": "adj.",
    "en_def": "below the surface of water",
    "cn_def": "水下的；水中的"
  },
  "ashore": {
    "pos": "adv.",
    "en_def": "onto the land from the sea",
    "cn_def": "上岸；在岸上"
  },
  "nearby": {
    "pos": "adj.",
    "en_def": "not far away",
    "cn_def": "附近的"
  },
  "peacefully": {
    "pos": "adv.",
    "en_def": "in a quiet and calm way, without trouble",
    "cn_def": "平靜地；安詳地"
  }
};

const EXTRA_GLOSSES = {};
