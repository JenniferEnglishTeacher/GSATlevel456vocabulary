// Topic 337 Quiz Data: Room 房間
// Source word list: https://www.examword.com/group-topic/room — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T337 - Room 房間",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "bedroom",
    "pos": "n.",
    "cn_def": "臥室",
    "en_def": "a room used for sleeping",
    "sentence": "A: Our new sales manager is moving here from Tokyo next month, so what kind of apartment has the company found for her near the office? B: The company has rented a two-{{BLANK}} apartment about ten minutes from the station, so she will have enough space for her husband and a small home office.",
    "cn": "A：我們的新業務經理下個月要從東京搬來這裡，公司在辦公室附近幫她找了什麼樣的公寓？ B：公司在離車站大約十分鐘的地方租了一間有兩間【臥室】的公寓，所以她和先生會有足夠的空間，還能弄一間小小的家庭辦公室。"
  },
  {
    "word": "living room",
    "pos": "n.phr.",
    "cn_def": "客廳",
    "en_def": "the main room in a home where people sit and relax together",
    "sentence": "A: Where should we hold the small team dinner on Friday, since the restaurant downtown is fully booked for the holiday weekend? B: Why don't you come to my place instead, because my {{BLANK}} is large enough for ten people, and we can order food and watch the game on the big TV after dinner.",
    "cn": "A：既然市中心的餐廳在連假週末都已經訂滿了，我們星期五的小型團隊聚餐該辦在哪裡？ B：不如來我家吧，因為我的【客廳】夠大，可以容納十個人，我們可以叫外送，晚餐後再一起用大電視看比賽。"
  },
  {
    "word": "kitchen",
    "pos": "n.",
    "cn_def": "廚房",
    "en_def": "a room where food is prepared and cooked",
    "sentence": "A: Why did the restaurant close early last night when it was full of customers who had booked tables weeks ago? B: A small fire started in the {{BLANK}} near the main stove, so the manager asked everyone to leave, and the cooks could not prepare any more meals until the fire department checked the building.",
    "cn": "A：昨晚餐廳客滿，很多客人幾週前就訂了位，為什麼還提早打烊？ B：【廚房】的主爐灶附近起了小火，所以經理請大家離開，在消防隊檢查完建築物之前，廚師們都無法再準備任何餐點。"
  },
  {
    "word": "bathroom",
    "pos": "n.",
    "cn_def": "浴室；洗手間",
    "en_def": "a room with a toilet, a sink, and often a shower",
    "sentence": "A: The hotel guest in room 512 just called the front desk again, so what exactly is she complaining about this time? B: She says the water in her {{BLANK}} is still cold after twenty minutes, so I have already sent a technician upstairs to check the heater and offered her a free breakfast for the trouble.",
    "cn": "A：512號房的房客剛剛又打電話到櫃檯，她這次到底在抱怨什麼？ B：她說她【浴室】的水放了二十分鐘還是冷的，所以我已經派技術人員上樓檢查熱水器，並且提供她免費早餐作為補償。"
  },
  {
    "word": "study",
    "pos": "n.",
    "cn_def": "書房",
    "en_def": "a room in a house used for reading, writing, or working",
    "sentence": "A: Since you started working from home three days a week, where do you usually join the video meetings with the overseas clients? B: I turned the small {{BLANK}} next to the guest room into a home office, so I can close the door, keep the noise of my kids out, and keep all my files in one place.",
    "cn": "A：自從你開始每週三天在家工作，你通常在哪裡參加和海外客戶的視訊會議？ B：我把客房旁邊的小【書房】改成了家庭辦公室，這樣我就可以關上門，隔絕孩子們的吵鬧聲，並把所有文件放在同一個地方。"
  },
  {
    "word": "office",
    "pos": "n.",
    "cn_def": "辦公室",
    "en_def": "a room or building where people work at desks",
    "sentence": "A: Have you decided where the new accountant will sit when she starts on Monday, since every desk on the third floor is already taken? B: Yes, we cleared out the small {{BLANK}} at the end of the hallway, and the IT team will set up her computer, phone, and printer there before she arrives.",
    "cn": "A：新會計星期一開始上班，三樓每張桌子都有人坐了，你決定好她要坐哪裡了嗎？ B：決定了，我們清空了走廊盡頭的小【辦公室】，資訊團隊會在她到職前把電腦、電話和印表機都裝好。"
  },
  {
    "word": "hall",
    "pos": "n.",
    "cn_def": "大廳；會堂",
    "en_def": "a large room used for meetings, concerts, or other events",
    "sentence": "A: How many guests are you expecting at the company's annual awards dinner, and have you found a place big enough for everyone? B: We are expecting about three hundred people, so we booked the main {{BLANK}} at the convention center, which has a stage, good lighting, and enough tables for every department.",
    "cn": "A：公司年度頒獎晚宴預計有多少賓客？你找到可以容納所有人的場地了嗎？ B：我們預計大約三百人，所以訂了會議中心的主【大廳】，那裡有舞台、良好的燈光，還有足夠讓每個部門入座的桌子。"
  },
  {
    "word": "space",
    "pos": "n.",
    "cn_def": "空間",
    "en_def": "an empty area that can be used for something",
    "sentence": "A: Why is the warehouse team asking for a bigger building when we only moved into this one two years ago? B: Our online orders have doubled since last spring, so there is no more {{BLANK}} for new stock, and boxes are now piled up in the hallways, which is not safe for the workers.",
    "cn": "A：我們兩年前才搬進這棟建築，為什麼倉儲團隊又要求更大的建築？ B：從去年春天起我們的網路訂單翻了一倍，所以已經沒有【空間】放新庫存了，箱子現在都堆在走廊上，這對員工來說並不安全。"
  },
  {
    "word": "corner",
    "pos": "n.",
    "cn_def": "角落",
    "en_def": "the place where two walls meet",
    "sentence": "A: Where would you like the delivery workers to put the new photocopier, since it is quite large and needs to be close to a power outlet? B: Please ask them to put it in the {{BLANK}} near the window, because there is an outlet there and it will not block the way to the meeting room.",
    "cn": "A：新影印機相當大，又需要靠近插座，你想讓送貨人員把它放在哪裡？ B：請他們放在靠窗的【角落】，因為那裡有插座，而且不會擋住通往會議室的路。"
  },
  {
    "word": "ceiling",
    "pos": "n.",
    "cn_def": "天花板",
    "en_def": "the top inside surface of a room",
    "sentence": "A: Why is there a bucket in the middle of the meeting room, and why did the manager move our presentation to the other floor? B: Water started dripping from the {{BLANK}} during the heavy rain last night, so the building manager has called a repair company to check the roof this afternoon.",
    "cn": "A：為什麼會議室中間放了一個水桶，經理又為什麼把我們的簡報移到另一層樓？ B：昨晚下大雨時【天花板】開始滴水，所以大樓管理員已經叫了修繕公司今天下午來檢查屋頂。"
  },
  {
    "word": "floor",
    "pos": "n.",
    "cn_def": "地板",
    "en_def": "the flat surface you walk on inside a room",
    "sentence": "A: Why did the cleaning staff put yellow warning signs all over the lobby before the morning shift started? B: They have just washed the {{BLANK}} with soap and water, so it is still very wet and slippery, and they do not want any employees or visitors to fall and get hurt.",
    "cn": "A：清潔人員為什麼在早班開始前在大廳到處放黃色警告牌？ B：他們剛用肥皂和水清洗過【地板】，所以還很濕很滑，他們不希望任何員工或訪客跌倒受傷。"
  },
  {
    "word": "wall",
    "pos": "n.",
    "cn_def": "牆壁",
    "en_def": "a flat, upright side of a room or building",
    "sentence": "A: The new office looks great, but don't you think it feels a little empty without any pictures or decorations? B: You are right, so I have ordered some large photos of our best projects, and we will hang them on the {{BLANK}} behind the reception desk so visitors can see them when they arrive.",
    "cn": "A：新辦公室看起來很棒，但你不覺得沒有任何照片或裝飾，感覺有點空嗎？ B：你說得對，所以我訂了幾張我們最佳專案的大照片，我們會把它們掛在接待櫃台後面的【牆】上，讓訪客一到就能看到。"
  },
  {
    "word": "window",
    "pos": "n.",
    "cn_def": "窗戶",
    "en_def": "an opening in a wall with glass that lets in light and air",
    "sentence": "A: It is so hot and stuffy in this training room, so could we turn on the air conditioner before the afternoon session begins? B: Unfortunately the air conditioner is being repaired today, but I can open the large {{BLANK}} next to the projector to let some fresh air in while we wait.",
    "cn": "A：這間訓練教室好悶熱，下午的課程開始前我們可以開冷氣嗎？ B：很不巧冷氣今天在維修，但我可以打開投影機旁邊的大【窗戶】，讓新鮮空氣在等待時透進來。"
  },
  {
    "word": "door",
    "pos": "n.",
    "cn_def": "門",
    "en_def": "the thing you open and close to enter or leave a room",
    "sentence": "A: Why are the staff in the meeting room speaking so quietly this morning, and why did they put a sign outside? B: They are interviewing candidates for the marketing position, so please keep the {{BLANK}} closed and do not knock unless there is an emergency, because each interview lasts about forty minutes.",
    "cn": "A：今天早上會議室裡的員工為什麼講話那麼小聲，外面還掛了牌子？ B：他們正在面試行銷職位的應徵者，所以請保持【門】關著，除非有緊急狀況否則不要敲門，因為每場面試大約四十分鐘。"
  },
  {
    "word": "furniture",
    "pos": "n.",
    "cn_def": "家具",
    "en_def": "objects such as chairs, tables, and beds in a room",
    "sentence": "A: Are we going to buy everything new for the branch office that opens in December, or will we use some old things from here? B: The budget is tight this year, so we will move most of the {{BLANK}} from our storage room, including desks, cabinets, and bookshelves, and only buy new chairs for the meeting room.",
    "cn": "A：十二月開幕的分公司，我們要全部買新的，還是會用這裡的一些舊東西？ B：今年預算吃緊，所以我們會把儲藏室大部分的【家具】搬過去，包括桌子、櫃子和書架，只為會議室買新椅子。"
  },
  {
    "word": "chair",
    "pos": "n.",
    "cn_def": "椅子",
    "en_def": "a seat for one person, usually with a back and four legs",
    "sentence": "A: Why have so many employees been complaining about back pain since we moved to the new building in the summer? B: The cheap seats we bought are too hard and cannot be adjusted, so the manager has agreed to order a comfortable office {{BLANK}} for everyone who sits at a desk for more than six hours a day.",
    "cn": "A：自從夏天搬進新大樓後，為什麼有那麼多員工抱怨背痛？ B：我們買的便宜座椅太硬又不能調整，所以經理已經同意替每位一天坐在桌前超過六小時的員工訂一張舒適的辦公【椅】。"
  },
  {
    "word": "table",
    "pos": "n.",
    "cn_def": "桌子",
    "en_def": "a piece of furniture with a flat top and legs",
    "sentence": "A: How should we arrange the meeting room for tomorrow's discussion with the clients from Singapore, since they are bringing six people? B: Let's put the long {{BLANK}} in the center so everyone can sit together and see the screen, and please place water, notepads, and pens in front of each seat.",
    "cn": "A：明天要和新加坡客戶討論，他們會帶六個人來，我們該怎麼布置會議室？ B：我們把長【桌】放在中間，讓大家能坐在一起並看到螢幕，也請在每個座位前放好水、便條紙和筆。"
  },
  {
    "word": "sofa",
    "pos": "n.",
    "cn_def": "沙發",
    "en_def": "a long soft seat for two or more people",
    "sentence": "A: What did the hotel do to make the waiting area in the lobby more comfortable for guests who arrive before check-in time? B: They removed the old metal benches and put in a large leather {{BLANK}} with soft cushions, so tired travelers can sit, relax, and charge their phones while they wait for their rooms.",
    "cn": "A：飯店做了什麼讓提早抵達的旅客在大廳等候區更舒適？ B：他們拆掉了舊的金屬長椅，放了一張有柔軟靠墊的大型皮【沙發】，讓疲累的旅客在等房間時可以坐下、放鬆並幫手機充電。"
  },
  {
    "word": "bed",
    "pos": "n.",
    "cn_def": "床",
    "en_def": "a piece of furniture for sleeping on",
    "sentence": "A: The team from headquarters will stay at the hotel near the factory for three nights, so did you book the rooms they asked for? B: Yes, I reserved four rooms, and each one has a large {{BLANK}}, a desk, and free Wi-Fi, so they can rest well and still finish their reports in the evening.",
    "cn": "A：總部的團隊會在工廠附近的飯店住三晚，你訂了他們要的房間嗎？ B：訂了，我預訂了四間房，每間都有一張大【床】、一張書桌和免費Wi-Fi，讓他們能好好休息，晚上也能完成報告。"
  },
  {
    "word": "lamp",
    "pos": "n.",
    "cn_def": "燈；檯燈",
    "en_def": "a small device that gives light, often placed on a desk",
    "sentence": "A: Why do you always stay at your desk so late in the evening, and isn't it too dark in here after the main lights go off at seven? B: I need to finish the monthly sales report, so I bought a small desk {{BLANK}} that gives me enough light to read the numbers without hurting my eyes.",
    "cn": "A：你為什麼晚上總是在座位上待到那麼晚？主燈七點關掉後這裡不會太暗嗎？ B：我需要完成每月銷售報告，所以買了一盞小【檯燈】，給我足夠的光線看數字又不傷眼睛。"
  },
  {
    "word": "curtain",
    "pos": "n.",
    "cn_def": "窗簾",
    "en_def": "a piece of cloth that hangs over a window",
    "sentence": "A: The afternoon sun is shining directly onto the projector screen, so how can the audience see the charts in my presentation? B: Don't worry, I will close the heavy {{BLANK}} on the west side of the room before you start, so the screen will be much clearer for everyone in the back rows.",
    "cn": "A：下午的陽光直接照在投影幕上，觀眾要怎麼看清我簡報裡的圖表？ B：別擔心，在你開始前我會拉上房間西側厚重的【窗簾】，這樣坐在後排的每個人都能看得更清楚。"
  },
  {
    "word": "carpet",
    "pos": "n.",
    "cn_def": "地毯",
    "en_def": "a thick floor covering made of soft material",
    "sentence": "A: Why are the cleaners coming to the office on Saturday, when they usually only work on weekday evenings? B: Someone spilled coffee all over the {{BLANK}} in the reception area, and the stains are so dark that they need a special machine and a whole day to wash it properly.",
    "cn": "A：清潔人員通常只在平日晚上工作，為什麼星期六要來辦公室？ B：有人把咖啡灑在接待區的【地毯】上，污漬很深，所以需要特別的機器和一整天的時間才能好好清洗。"
  },
  {
    "word": "shelf",
    "pos": "n.",
    "cn_def": "架子；層架",
    "en_def": "a flat board fixed to a wall or cabinet for holding things",
    "sentence": "A: I cannot find the new printer paper anywhere in the supply room, so did the delivery from the stationery company arrive this morning? B: Yes, it came at nine, and I put all the boxes on the top {{BLANK}} behind the door, so you may need the small ladder to reach them.",
    "cn": "A：我在補給室到處都找不到新的影印紙，文具公司今天早上的貨到了嗎？ B：到了，九點送來的，我把所有箱子放在門後最上層的【架子】上，所以你可能需要用小梯子才拿得到。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；布置",
    "en_def": "to make a place look more attractive by adding things to it",
    "sentence": "A: The company is celebrating its twentieth anniversary next Friday, so who is responsible for making the lobby look special for the guests? B: The marketing team will {{BLANK}} the lobby with balloons, flowers, and old photos of the company, and they plan to start on Thursday evening after everyone goes home.",
    "cn": "A：公司下週五要慶祝二十週年，誰負責讓大廳為賓客看起來特別一點？ B：行銷團隊會用氣球、花和公司的老照片來【布置】大廳，他們打算星期四晚上大家下班後開始。"
  },
  {
    "word": "clean",
    "pos": "v.",
    "cn_def": "清潔；打掃",
    "en_def": "to remove dirt from something",
    "sentence": "A: The clients from Japan are visiting our factory tomorrow morning, so is there anything we need to do before they arrive? B: Please ask the staff to {{BLANK}} the meeting room and the break area this afternoon, and make sure there is fresh coffee and some snacks ready on the side table.",
    "cn": "A：日本客戶明天早上要參觀我們的工廠，在他們抵達前我們需要做什麼嗎？ B：請員工今天下午【打掃】會議室和休息區，並確保旁邊桌上準備好新鮮咖啡和一些點心。"
  },
  {
    "word": "messy",
    "pos": "adj.",
    "cn_def": "凌亂的；雜亂的",
    "en_def": "dirty or not in good order",
    "sentence": "A: Why did the manager ask everyone to stay for fifteen minutes after work on Friday, even though most people wanted to leave early? B: The storage room had become so {{BLANK}} that nobody could find anything, so she wanted the whole team to sort the boxes, throw away old papers, and label every shelf.",
    "cn": "A：經理為什麼要大家星期五下班後多留十五分鐘，雖然大部分人都想早點走？ B：儲藏室變得太【凌亂】，沒有人找得到任何東西，所以她希望整個團隊一起整理箱子、丟掉舊文件，並幫每個架子貼上標籤。"
  },
  {
    "word": "tidy",
    "pos": "adj.",
    "cn_def": "整齊的；整潔的",
    "en_def": "neat and in good order",
    "sentence": "A: Our office will be photographed for the company's new website next week, so what should everyone do to prepare? B: Please keep your desks {{BLANK}} by putting away personal items and extra papers, because the photographer wants the space to look clean, modern, and professional in every picture.",
    "cn": "A：我們的辦公室下週要為公司新網站拍照，大家該做些什麼準備？ B：請把個人物品和多餘的文件收好，保持桌面【整齊】，因為攝影師希望每張照片裡的空間看起來乾淨、現代又專業。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "large, with a lot of room",
    "sentence": "A: Why did you choose that hotel for the training workshop, when the one near the station is cheaper and easier to reach? B: The cheaper hotel only has small meeting rooms, but this one has a {{BLANK}} conference room where forty people can work in groups and move around comfortably.",
    "cn": "A：車站附近那家飯店比較便宜又比較好到，你為什麼選那家飯店辦訓練工作坊？ B：便宜的那家只有小會議室，但這家有一間【寬敞的】會議室，四十個人可以分組工作又能舒適地走動。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "舒適溫馨的",
    "en_def": "warm, comfortable, and pleasant",
    "sentence": "A: Where do you usually take new clients for lunch when you want them to relax and talk openly about their needs? B: I usually go to a small {{BLANK}} café near the river, because it has soft chairs, warm lighting, and quiet music, so people feel comfortable and the conversation is easy.",
    "cn": "A：當你想讓新客戶放鬆並坦白談他們的需求時，你通常帶他們去哪裡吃午餐？ B：我通常去河邊一家小而【溫馨舒適】的咖啡館，因為那裡有柔軟的椅子、溫暖的燈光和輕柔的音樂，讓人覺得自在，談話也很順利。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "明亮的",
    "en_def": "full of light",
    "sentence": "A: Why did so many staff ask to move to the new office on the tenth floor, even though it is farther from the elevator? B: The rooms there have large windows facing south, so they are {{BLANK}} and warm all day, and people say they feel happier and more productive with natural light.",
    "cn": "A：為什麼那麼多員工要求搬到十樓的新辦公室，即使那裡離電梯比較遠？ B：那裡的房間有朝南的大窗戶，所以整天都很【明亮】又溫暖，大家說有自然光讓他們覺得更快樂、更有效率。"
  },
  {
    "word": "dark",
    "pos": "adj.",
    "cn_def": "黑暗的；昏暗的",
    "en_def": "with little or no light",
    "sentence": "A: Why did the security guard ask the facilities team to replace the lights in the underground parking area so quickly? B: Several of the lights were broken, so the area was very {{BLANK}} at night, and some employees said they felt unsafe walking to their cars after working late.",
    "cn": "A：保全為什麼要求設施團隊趕快更換地下停車場的燈？ B：有好幾盞燈壞了，所以那一區晚上非常【昏暗】，有些員工說他們加班後走去開車時覺得不安全。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "without much noise",
    "sentence": "A: Is there anywhere in the building where I can make an important phone call to a client without all the noise from the open office? B: Yes, you can book one of the small {{BLANK}} rooms on the second floor, because they are soundproof and have a desk, a phone, and a good internet connection.",
    "cn": "A：大樓裡有沒有地方可以讓我打一通重要的客戶電話，不受開放式辦公室的噪音干擾？ B：有，你可以預訂二樓的一間小型【安靜】室，因為那些房間隔音，還有桌子、電話和良好的網路連線。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的；私密的",
    "en_def": "only for one person or group, not for everyone",
    "sentence": "A: The director wants to discuss the new salary plan with the department heads tomorrow, so which meeting room should I book? B: Please book the {{BLANK}} room on the top floor, because the topic is confidential, and the director does not want other employees to hear the details before the official announcement.",
    "cn": "A：主管明天想和各部門主管討論新的薪資方案，我該預訂哪一間會議室？ B：請預訂頂樓的【私人】會議室，因為這個議題是機密，主管不希望其他員工在正式公布前聽到細節。"
  },
  {
    "word": "rent",
    "pos": "v.",
    "cn_def": "租用；租",
    "en_def": "to pay money to use a place or thing for a period of time",
    "sentence": "A: Since our team is growing so fast, are we going to buy a bigger building or stay in this one for a few more years? B: Buying property is too expensive right now, so the board has decided to {{BLANK}} two extra rooms on the fifth floor for the next three years while we save money.",
    "cn": "A：既然我們的團隊成長得這麼快，我們要買更大的大樓，還是在這裡多待幾年？ B：現在買房地產太貴了，所以董事會決定在接下來三年【租用】五樓另外兩個房間，同時存錢。"
  }
];

const MCQS = [
  {
    "q": "The hotel offers family suites for larger groups. Each suite has a _____ with two beds and a separate area for working.",
    "options": [
      "bedroom",
      "kitchen",
      "ceiling",
      "carpet"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Employees may heat their lunches in the staff _____ on the second floor. Please wash your cups and plates before you leave.",
    "options": [
      "bathroom",
      "kitchen",
      "ceiling",
      "curtain"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The guest complained that the shower in her _____ was leaking. The front desk sent a plumber to fix it right away.",
    "options": [
      "office",
      "hall",
      "bathroom",
      "corner"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The apartment has a large _____ where the family watches TV in the evening. It also has two bedrooms and a small balcony.",
    "options": [
      "ceiling",
      "shelf",
      "curtain",
      "living room"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Our new accountant will work in the small _____ next to the manager's room. Her computer will be ready by Monday morning.",
    "options": [
      "office",
      "ceiling",
      "carpet",
      "curtain"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "About five hundred people attended the concert last night. The _____ was so full that some guests had to stand at the back.",
    "options": [
      "shelf",
      "hall",
      "lamp",
      "curtain"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Water was dripping from the _____ after the heavy storm. The building manager called a company to repair the roof immediately.",
    "options": [
      "carpet",
      "sofa",
      "ceiling",
      "furniture"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Please be careful when you walk through the lobby. The cleaners have just mopped the _____, and it is still slippery.",
    "options": [
      "ceiling",
      "curtain",
      "window",
      "floor"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The manager wants to hang the company's awards on the _____ behind the reception desk. Visitors will see them as soon as they arrive.",
    "options": [
      "wall",
      "floor",
      "carpet",
      "sofa"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "It is very hot in the training room today. Could you please open the _____ to let in some fresh air?",
    "options": [
      "shelf",
      "window",
      "carpet",
      "lamp"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please keep the _____ closed during the whole interview. The candidates need a quiet place to answer the questions.",
    "options": [
      "ceiling",
      "carpet",
      "door",
      "sofa"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "We will move most of the old _____ to the new branch. This includes desks, cabinets, and several bookshelves.",
    "options": [
      "ceiling",
      "window",
      "corner",
      "furniture"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Many employees have back pain from sitting all day. The company will give each worker a new office _____ that can be adjusted.",
    "options": [
      "chair",
      "curtain",
      "carpet",
      "window"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The six clients will sit around the long _____ in the meeting room. Please put water and notepads in front of each seat.",
    "options": [
      "lamp",
      "table",
      "ceiling",
      "curtain"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Each hotel room has a large _____, a desk, and free Wi-Fi. Guests can sleep well and still finish their work.",
    "options": [
      "ceiling",
      "corner",
      "bed",
      "hall"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The main lights are turned off at seven every evening. If you work late, please use the desk _____ next to your computer.",
    "options": [
      "carpet",
      "curtain",
      "sofa",
      "lamp"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The sun is shining directly onto the projector screen. Please close the _____ so that everyone can see the slides clearly.",
    "options": [
      "curtain",
      "carpet",
      "shelf",
      "floor"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Someone spilled coffee on the _____ in the reception area. The cleaners will use a special machine to remove the stain.",
    "options": [
      "ceiling",
      "carpet",
      "window",
      "hall"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "I put the boxes of printer paper on the top _____ in the supply room. You may need a ladder to reach them.",
    "options": [
      "ceiling",
      "carpet",
      "shelf",
      "sofa"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The marketing team will _____ the lobby with balloons and flowers. The company is celebrating its twentieth anniversary next Friday.",
    "options": [
      "clean",
      "rent",
      "repair",
      "decorate"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The meeting room is very dirty after yesterday's party. Please _____ it before the visitors from Japan arrive tomorrow morning.",
    "options": [
      "clean",
      "rent",
      "study",
      "borrow"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Nobody could find anything in the storage room because it was so _____. The team spent Friday afternoon sorting boxes and labeling shelves.",
    "options": [
      "bright",
      "messy",
      "quiet",
      "private"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Please keep your desks _____ during the photo shoot next week. Put away all personal items and extra papers before the photographer arrives.",
    "options": [
      "messy",
      "dark",
      "tidy",
      "private"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "We chose this hotel because it has a _____ conference room. Forty people can work in groups and move around comfortably.",
    "options": [
      "messy",
      "dark",
      "private",
      "spacious"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The small café near the river feels warm and _____. It has soft chairs, gentle lighting, and relaxing music.",
    "options": [
      "cozy",
      "messy",
      "spacious",
      "dark"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The new office has large windows facing south. It is _____ all day, so we rarely need to turn on the lights.",
    "options": [
      "dark",
      "bright",
      "messy",
      "private"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Several lights in the parking garage are broken. The area is very _____ at night, so employees feel unsafe walking to their cars.",
    "options": [
      "bright",
      "tidy",
      "dark",
      "spacious"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The open office is too noisy for important phone calls. Please book one of the small _____ rooms on the second floor instead.",
    "options": [
      "messy",
      "dark",
      "spacious",
      "quiet"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The director will discuss confidential salary plans with the department heads. Please book a _____ room where other staff cannot hear them.",
    "options": [
      "private",
      "messy",
      "bright",
      "spacious"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Buying a new building is too expensive this year. The company will _____ two extra rooms on the fifth floor for three years.",
    "options": [
      "clean",
      "rent",
      "study",
      "decorate"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "bedroom": {
    "pos": "n.",
    "en_def": "a room used for sleeping",
    "cn_def": "臥室"
  },
  "living room": {
    "pos": "n.phr.",
    "en_def": "the main room in a home where people sit and relax together",
    "cn_def": "客廳"
  },
  "kitchen": {
    "pos": "n.",
    "en_def": "a room where food is prepared and cooked",
    "cn_def": "廚房"
  },
  "bathroom": {
    "pos": "n.",
    "en_def": "a room with a toilet, a sink, and often a shower",
    "cn_def": "浴室；洗手間"
  },
  "study": {
    "pos": "n.",
    "en_def": "a room in a house used for reading, writing, or working",
    "cn_def": "書房"
  },
  "office": {
    "pos": "n.",
    "en_def": "a room or building where people work at desks",
    "cn_def": "辦公室"
  },
  "hall": {
    "pos": "n.",
    "en_def": "a large room used for meetings, concerts, or other events",
    "cn_def": "大廳；會堂"
  },
  "space": {
    "pos": "n.",
    "en_def": "an empty area that can be used for something",
    "cn_def": "空間"
  },
  "corner": {
    "pos": "n.",
    "en_def": "the place where two walls meet",
    "cn_def": "角落"
  },
  "ceiling": {
    "pos": "n.",
    "en_def": "the top inside surface of a room",
    "cn_def": "天花板"
  },
  "floor": {
    "pos": "n.",
    "en_def": "the flat surface you walk on inside a room",
    "cn_def": "地板"
  },
  "wall": {
    "pos": "n.",
    "en_def": "a flat, upright side of a room or building",
    "cn_def": "牆壁"
  },
  "window": {
    "pos": "n.",
    "en_def": "an opening in a wall with glass that lets in light and air",
    "cn_def": "窗戶"
  },
  "door": {
    "pos": "n.",
    "en_def": "the thing you open and close to enter or leave a room",
    "cn_def": "門"
  },
  "furniture": {
    "pos": "n.",
    "en_def": "objects such as chairs, tables, and beds in a room",
    "cn_def": "家具"
  },
  "chair": {
    "pos": "n.",
    "en_def": "a seat for one person, usually with a back and four legs",
    "cn_def": "椅子"
  },
  "table": {
    "pos": "n.",
    "en_def": "a piece of furniture with a flat top and legs",
    "cn_def": "桌子"
  },
  "sofa": {
    "pos": "n.",
    "en_def": "a long soft seat for two or more people",
    "cn_def": "沙發"
  },
  "bed": {
    "pos": "n.",
    "en_def": "a piece of furniture for sleeping on",
    "cn_def": "床"
  },
  "lamp": {
    "pos": "n.",
    "en_def": "a small device that gives light, often placed on a desk",
    "cn_def": "燈；檯燈"
  },
  "curtain": {
    "pos": "n.",
    "en_def": "a piece of cloth that hangs over a window",
    "cn_def": "窗簾"
  },
  "carpet": {
    "pos": "n.",
    "en_def": "a thick floor covering made of soft material",
    "cn_def": "地毯"
  },
  "shelf": {
    "pos": "n.",
    "en_def": "a flat board fixed to a wall or cabinet for holding things",
    "cn_def": "架子；層架"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make a place look more attractive by adding things to it",
    "cn_def": "裝飾；布置"
  },
  "clean": {
    "pos": "v.",
    "en_def": "to remove dirt from something",
    "cn_def": "清潔；打掃"
  },
  "messy": {
    "pos": "adj.",
    "en_def": "dirty or not in good order",
    "cn_def": "凌亂的；雜亂的"
  },
  "tidy": {
    "pos": "adj.",
    "en_def": "neat and in good order",
    "cn_def": "整齊的；整潔的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "large, with a lot of room",
    "cn_def": "寬敞的"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable, and pleasant",
    "cn_def": "舒適溫馨的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "full of light",
    "cn_def": "明亮的"
  },
  "dark": {
    "pos": "adj.",
    "en_def": "with little or no light",
    "cn_def": "黑暗的；昏暗的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "without much noise",
    "cn_def": "安靜的"
  },
  "private": {
    "pos": "adj.",
    "en_def": "only for one person or group, not for everyone",
    "cn_def": "私人的；私密的"
  },
  "rent": {
    "pos": "v.",
    "en_def": "to pay money to use a place or thing for a period of time",
    "cn_def": "租用；租"
  }
};

const EXTRA_GLOSSES = {};
