// Topic 179 Quiz Data: House 房屋
// Source word list: https://www.examword.com/group-topic/house — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T179 - House 房屋",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "home",
    "pos": "n.",
    "cn_def": "家",
    "en_def": "the place where you live",
    "sentence": "A: Why did you leave the office so early yesterday afternoon, and did the client meeting finish without any problems? B: The meeting went well, but my daughter had a fever, so I returned to my {{BLANK}} to look after her and finished the sales report on my laptop later that night.",
    "cn": "A：你昨天下午為什麼那麼早離開辦公室？客戶會議順利結束了嗎？ B：會議很順利，但我女兒發燒了，所以我回【家】照顧她，那天晚上稍晚才用筆電完成銷售報告。"
  },
  {
    "word": "residence",
    "pos": "n.",
    "cn_def": "住所；住宅",
    "en_def": "a house or place where someone lives, often a formal word",
    "sentence": "A: Has the new branch manager from Singapore found a place to live yet, or is she still staying at the hotel near the station? B: The company has rented a private {{BLANK}} for her in a quiet area, and she will move in next Monday after the cleaning team finishes.",
    "cn": "A：從新加坡來的新分行經理找到住的地方了嗎？還是她仍住在車站附近的飯店？ B：公司已在一個安靜的地區為她租了一間私人【住所】，等清潔團隊完成工作後，她下週一就會搬進去。"
  },
  {
    "word": "dwelling",
    "pos": "n.",
    "cn_def": "住處；寓所",
    "en_def": "a house, flat, or other place where people live",
    "sentence": "A: What did the city planning department decide about the empty land next to the old train station downtown? B: They approved a project to build a new {{BLANK}} for about two hundred families, and construction should start in spring once all the contracts are signed.",
    "cn": "A：市府都市計畫部門對市中心舊火車站旁那塊空地做了什麼決定？ B：他們核准了一項為大約兩百戶家庭興建新【住宅】的計畫，等所有合約簽好後，春天就會開工。"
  },
  {
    "word": "apartment",
    "pos": "n.",
    "cn_def": "公寓",
    "en_def": "a set of rooms for living in, usually on one floor of a building",
    "sentence": "A: Are you still driving more than an hour to the office every morning, or have you found somewhere closer? B: I finally rented a small {{BLANK}} on the fifth floor of a building near the subway station, so now my commute takes only fifteen minutes.",
    "cn": "A：你還是每天早上開車一個多小時來上班嗎？還是已經找到比較近的地方了？ B：我終於在捷運站附近一棟大樓的五樓租了一間小【公寓】，所以現在通勤只要十五分鐘。"
  },
  {
    "word": "cottage",
    "pos": "n.",
    "cn_def": "小屋；農舍",
    "en_def": "a small, simple house, usually in the countryside",
    "sentence": "A: Where is the marketing team planning to hold its two-day strategy retreat after the busy holiday season is over? B: We have booked a wooden {{BLANK}} in the mountains with a fireplace and a lake view, because the manager believes a quiet place helps everyone think more creatively.",
    "cn": "A：行銷團隊打算在忙碌的假期旺季結束後，到哪裡舉辦兩天的策略營？ B：我們訂了山上一間有壁爐和湖景的木造【小屋】，因為經理認為安靜的地方能幫助大家更有創意地思考。"
  },
  {
    "word": "villa",
    "pos": "n.",
    "cn_def": "別墅",
    "en_def": "a large house, often with a garden, used for holidays",
    "sentence": "A: How was the company's reward trip to Bali for the top sales staff, and did everyone enjoy the hotel? B: We didn't stay in a hotel; instead, we shared a large {{BLANK}} with a private swimming pool and a garden, and a chef cooked breakfast for us every morning.",
    "cn": "A：公司招待頂尖業務員的峇里島獎勵旅遊如何？大家喜歡那間飯店嗎？ B：我們沒有住飯店，而是一起住在一棟有私人游泳池和花園的大【別墅】，每天早上還有廚師為我們做早餐。"
  },
  {
    "word": "mansion",
    "pos": "n.",
    "cn_def": "大宅；豪宅",
    "en_def": "a very large and expensive house",
    "sentence": "A: Why is the old building on the hill so famous among tourists who visit our town every summer? B: It is a huge {{BLANK}} that a wealthy factory owner built a hundred years ago, and now it has been turned into a museum with guided tours and a small café.",
    "cn": "A：為什麼山丘上那棟老建築在每年夏天來我們鎮上的遊客之間那麼有名？ B：那是一位富有的工廠老闆一百年前蓋的巨大【宅邸】，現在已改建成有導覽和小咖啡館的博物館。"
  },
  {
    "word": "bungalow",
    "pos": "n.",
    "cn_def": "平房",
    "en_def": "a house with only one floor",
    "sentence": "A: Why did your parents decide to sell their three-story house after your father retired from the bank last year? B: Climbing the stairs became difficult for them, so they bought a {{BLANK}} near the beach where all the rooms are on one level and they can walk around easily.",
    "cn": "A：你父親去年從銀行退休後，你父母為什麼決定賣掉他們的三層樓房子？ B：爬樓梯對他們來說變得很吃力，所以他們在海邊附近買了一間【平房】，所有房間都在同一層，走動很方便。"
  },
  {
    "word": "roof",
    "pos": "n.",
    "cn_def": "屋頂",
    "en_def": "the top covering of a building",
    "sentence": "A: Why are the workers putting buckets in the meeting room on the top floor this afternoon? B: Last night's heavy storm damaged the {{BLANK}} of our building, so rainwater is leaking through, and the repair company cannot come until Thursday because they are very busy.",
    "cn": "A：為什麼工人今天下午在頂樓的會議室裡放水桶？ B：昨晚的強烈暴風雨損壞了我們大樓的【屋頂】，所以雨水一直漏進來，而修繕公司因為很忙，要到星期四才能來。"
  },
  {
    "word": "wall",
    "pos": "n.",
    "cn_def": "牆壁",
    "en_def": "one of the sides of a room or building",
    "sentence": "A: Where should we hang the new company calendar and the safety rules that arrived from head office this morning? B: Let's put them on the {{BLANK}} next to the photocopier, because everyone walks past that spot several times a day and will notice any changes quickly.",
    "cn": "A：今天早上總公司寄來的新公司月曆和安全規定要掛在哪裡？ B：我們把它們貼在影印機旁邊的【牆】上吧，因為大家每天都會經過那裡好幾次，很快就會注意到任何變動。"
  },
  {
    "word": "ceiling",
    "pos": "n.",
    "cn_def": "天花板",
    "en_def": "the top inside surface of a room",
    "sentence": "A: Why does the conference room feel so much brighter today than it did during last week's meeting? B: The maintenance team installed new LED lights in the {{BLANK}} over the weekend, so now we can see the presentation slides clearly and save electricity at the same time.",
    "cn": "A：為什麼今天的會議室感覺比上週開會時明亮許多？ B：維修團隊週末在【天花板】裝了新的LED燈，所以現在我們能清楚看到簡報投影片，同時還能節省電力。"
  },
  {
    "word": "floor",
    "pos": "n.",
    "cn_def": "地板",
    "en_def": "the flat surface you walk on inside a building",
    "sentence": "A: Why did the cleaner put a yellow warning sign near the elevator in the main lobby this morning? B: Someone spilled coffee on the {{BLANK}} a few minutes ago, and it is still very slippery, so she wants visitors and staff to walk carefully until it dries.",
    "cn": "A：清潔人員今天早上為什麼在大廳電梯附近放了黃色警告標誌？ B：幾分鐘前有人把咖啡灑在【地板】上，現在還很滑，所以她希望訪客和員工在地板乾之前小心行走。"
  },
  {
    "word": "window",
    "pos": "n.",
    "cn_def": "窗戶",
    "en_def": "an opening in a wall, with glass, that lets in light and air",
    "sentence": "A: It is really hot and stuffy in this training room, and the air conditioner doesn't seem to be working properly. B: Could you open the {{BLANK}} behind you to let some fresh air in while I call the building manager and ask him to send a technician?",
    "cn": "A：這間訓練教室真的又熱又悶，冷氣好像也沒有正常運作。 B：你可以打開你後面的【窗戶】讓新鮮空氣進來嗎？我來打電話給大樓管理員，請他派一位技術人員過來。"
  },
  {
    "word": "door",
    "pos": "n.",
    "cn_def": "門",
    "en_def": "the thing you open and close to enter or leave a room or building",
    "sentence": "A: Why did the security guard stop me at the entrance when I arrived for my job interview this morning? B: Since last month, every visitor must sign in and show identification before entering, so the guard keeps the front {{BLANK}} locked and checks each person carefully.",
    "cn": "A：我今天早上來參加面試時，警衛為什麼在入口攔住我？ B：從上個月開始，每位訪客進入前都必須登記並出示證件，所以警衛把前【門】鎖著，並仔細檢查每個人。"
  },
  {
    "word": "kitchen",
    "pos": "n.",
    "cn_def": "廚房",
    "en_def": "a room where food is prepared and cooked",
    "sentence": "A: Where can I heat up my lunch, and is there a place to store food for the afternoon? B: There is a small staff {{BLANK}} at the end of the hallway with a microwave, a fridge, and a coffee machine, but please clean up after you use it.",
    "cn": "A：我可以在哪裡加熱午餐？有地方可以放下午要吃的食物嗎？ B：走廊盡頭有一間小小的員工【廚房】，裡面有微波爐、冰箱和咖啡機，但使用後請收拾乾淨。"
  },
  {
    "word": "bedroom",
    "pos": "n.",
    "cn_def": "臥室",
    "en_def": "a room used for sleeping",
    "sentence": "A: Did you find a suitable place for your family before you transfer to the Tokyo office next month? B: Yes, we rented a flat with a large {{BLANK}} for us, a smaller one for the kids, and a study where I can work on Fridays.",
    "cn": "A：你下個月調到東京辦公室之前，有替家人找到合適的住處嗎？ B：有，我們租了一間公寓，有一間給我們住的大【臥室】、一間給孩子的小房間，還有一間讓我星期五可以工作的書房。"
  },
  {
    "word": "bathroom",
    "pos": "n.",
    "cn_def": "浴室；洗手間",
    "en_def": "a room with a toilet, a sink, and often a shower or bath",
    "sentence": "A: Excuse me, I am here for the two o'clock interview, but could you tell me where I can wash my hands first? B: Of course, the {{BLANK}} is down the hall on your left, right next to the elevators, and the interview room is just across from it.",
    "cn": "A：不好意思，我是來參加兩點鐘面試的，可以先告訴我哪裡可以洗手嗎？ B：當然，【洗手間】就在走廊左手邊，緊鄰電梯，而面試室就在它正對面。"
  },
  {
    "word": "living room",
    "pos": "n.phr.",
    "cn_def": "客廳",
    "en_def": "the main room in a home where people sit and relax together",
    "sentence": "A: How do you usually spend your evenings now that you work from home three days a week? B: After dinner, my family and I relax together in the {{BLANK}}, watching the news on TV or playing board games, which helps me forget about work stress.",
    "cn": "A：既然你現在一週有三天在家工作，你晚上通常怎麼度過？ B：晚餐後，我和家人會一起在【客廳】放鬆，看電視新聞或玩桌遊，這能幫助我忘掉工作壓力。"
  },
  {
    "word": "garage",
    "pos": "n.",
    "cn_def": "車庫；停車場",
    "en_def": "a building or space where cars are parked",
    "sentence": "A: Is there any parking near your new office, or should I take a taxi to the meeting on Friday? B: You can drive, because the building has an underground {{BLANK}} with plenty of spaces for visitors, and the receptionist will give you a free parking ticket.",
    "cn": "A：你們新辦公室附近有停車的地方嗎？還是我星期五應該搭計程車去開會？ B：你可以開車來，因為大樓有一個地下【停車場】，有很多訪客車位，櫃台人員還會給你免費停車券。"
  },
  {
    "word": "garden",
    "pos": "n.",
    "cn_def": "花園",
    "en_def": "an area of land where flowers, plants, or vegetables are grown",
    "sentence": "A: What did the hotel do to make its outdoor wedding area more attractive for customers this year? B: They planted hundreds of roses and built a small fountain in the {{BLANK}} behind the restaurant, so many couples now choose to take their wedding photos there.",
    "cn": "A：飯店今年做了什麼讓戶外婚禮場地對顧客更有吸引力？ B：他們在餐廳後面的【花園】種了數百株玫瑰，還建了一座小噴泉，所以現在很多新人選擇在那裡拍婚紗照。"
  },
  {
    "word": "yard",
    "pos": "n.",
    "cn_def": "院子",
    "en_def": "an open area of ground next to a building",
    "sentence": "A: Why did the restaurant start serving lunch outside instead of only in the dining room? B: The owner cleaned up the empty {{BLANK}} behind the kitchen and put tables and umbrellas there, so customers can enjoy the sunshine when the weather is nice.",
    "cn": "A：那家餐廳為什麼開始在戶外供應午餐，而不是只在用餐區？ B：老闆把廚房後面空著的【院子】整理乾淨，放上桌子和陽傘，讓顧客在天氣好時可以享受陽光。"
  },
  {
    "word": "furniture",
    "pos": "n.",
    "cn_def": "家具",
    "en_def": "things such as chairs, tables, and beds that you put in a room",
    "sentence": "A: When will the new office be ready for us to move in, and what is still missing? B: The painting is finished, but the {{BLANK}} has not been delivered yet, so we still have no desks, chairs, or cabinets, and the supplier promised to bring everything on Wednesday.",
    "cn": "A：新辦公室什麼時候可以讓我們搬進去？還缺什麼？ B：油漆已經完成了，但【家具】還沒送來，所以我們仍然沒有桌子、椅子或櫃子，供應商答應星期三會把所有東西送來。"
  },
  {
    "word": "decoration",
    "pos": "n.",
    "cn_def": "裝飾；布置",
    "en_def": "things used to make a place look more beautiful or festive",
    "sentence": "A: Who is in charge of preparing the hall for the company's year-end party next Friday evening? B: The HR team is ordering food and drinks, while Lisa's group will handle the {{BLANK}}, including balloons, lights, and flowers on every table to create a festive atmosphere.",
    "cn": "A：誰負責為下週五晚上的公司尾牙布置會場？ B：人資團隊負責訂餐點和飲料，而Lisa那組會負責【裝飾】，包括氣球、燈飾和每張桌上的花，營造出歡樂的節慶氣氛。"
  },
  {
    "word": "renovate",
    "pos": "v.",
    "cn_def": "翻修；整修",
    "en_def": "to repair and improve an old building or room",
    "sentence": "A: Why is the hotel closed for three months even though summer is the busiest season for tourists? B: The owners decided to {{BLANK}} all the guest rooms and the lobby, replacing the old carpets and bathrooms, because many customers had complained in online reviews that everything looked outdated.",
    "cn": "A：為什麼那間飯店要關閉三個月，明明夏天是觀光客最多的季節？ B：業主決定【翻修】所有客房和大廳，更換舊地毯和浴室，因為很多顧客在網路評論中抱怨一切看起來都很過時。"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "cn_def": "維護；保養",
    "en_def": "to keep something in good condition by checking and repairing it",
    "sentence": "A: Why does the building manager want to hire two more technicians before the end of this year? B: Our office tower is getting older, and he needs more people to {{BLANK}} the elevators, heating system, and lights properly so that tenants do not complain about breakdowns.",
    "cn": "A：大樓經理為什麼想在年底前再雇用兩名技術人員？ B：我們的辦公大樓越來越老舊，他需要更多人妥善【維護】電梯、暖氣系統和照明，這樣租戶才不會抱怨設備故障。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；布置",
    "en_def": "to make a place look more attractive by adding things to it",
    "sentence": "A: What are you planning to do with the empty reception area before our important clients visit next week? B: We will {{BLANK}} it with some green plants, modern paintings, and comfortable sofas so that visitors feel welcome and get a good first impression of our company.",
    "cn": "A：在重要客戶下週來訪之前，你們打算怎麼處理空蕩蕩的接待區？ B：我們會用一些綠色植物、現代畫作和舒適的沙發來【布置】它，讓訪客感到賓至如歸，並對我們公司留下良好的第一印象。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "having a lot of space inside",
    "sentence": "A: Why did you choose this restaurant for the team dinner instead of the Italian place we went to last time? B: This one has a {{BLANK}} private dining room that holds thirty people comfortably, so the whole department can sit together and the waiters can move around easily.",
    "cn": "A：你為什麼選這家餐廳辦團隊聚餐，而不是我們上次去的那家義大利餐廳？ B：這家有一間【寬敞的】私人包廂，可以舒適地容納三十人，所以整個部門可以坐在一起，服務生走動也很方便。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "舒適溫馨的",
    "en_def": "warm, comfortable, and relaxing",
    "sentence": "A: Do you prefer working in that big open-plan office or in the small café downstairs? B: I like the café better because it is warm and {{BLANK}}, with soft chairs and quiet music, so I can concentrate on writing reports without people walking past my desk all day.",
    "cn": "A：你比較喜歡在那個開放式的大辦公室工作，還是在樓下的小咖啡館？ B：我比較喜歡咖啡館，因為那裡溫暖又【舒適】，有柔軟的椅子和輕柔的音樂，我可以專心寫報告，不會整天有人從我桌邊走過。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的；新式的",
    "en_def": "new and using the latest ideas, styles, or technology",
    "sentence": "A: What do customers usually say about the new headquarters when they visit for the first time? B: They are often impressed by its {{BLANK}} design, with glass walls, smart lighting, and digital screens in every meeting room, which shows that our company uses the latest technology.",
    "cn": "A：顧客第一次參觀新總部時通常怎麼說？ B：他們常對它的【現代】設計印象深刻，包括玻璃牆、智慧照明和每間會議室的數位螢幕，這顯示我們公司使用最新的科技。"
  },
  {
    "word": "traditional",
    "pos": "adj.",
    "cn_def": "傳統的",
    "en_def": "following old customs or styles that have existed for a long time",
    "sentence": "A: What kind of hotel should we book for the overseas guests who are visiting Kyoto next month? B: I suggest a {{BLANK}} Japanese inn with wooden floors, paper doors, and a hot spring, because our guests told me they want to experience the local culture rather than stay somewhere ordinary.",
    "cn": "A：下個月要去京都的海外貴賓，我們該幫他們訂哪種飯店？ B：我建議訂一間有木頭地板、紙拉門和溫泉的【傳統】日式旅館，因為貴賓告訴我，他們想體驗當地文化，而不是住在普通的地方。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "安全的；牢固的",
    "en_def": "safe and protected from danger or crime",
    "sentence": "A: Is it safe to leave our laptops in the office overnight, since several companies on this street have had break-ins? B: Yes, the building is very {{BLANK}} now because the owner installed cameras, card readers, and an alarm system, and a guard also checks every floor at midnight.",
    "cn": "A：這條街上有好幾家公司遭小偷闖入，把筆電留在辦公室過夜安全嗎？ B：安全，現在這棟大樓非常【安全】，因為業主裝了監視器、刷卡機和警報系統，而且警衛半夜還會巡查每一層樓。"
  },
  {
    "word": "comfortably",
    "pos": "adv.",
    "cn_def": "舒適地；寬裕地",
    "en_def": "in a comfortable way; with enough space or ease",
    "sentence": "A: Is the new conference room big enough for the training workshop with all the new employees next Monday? B: Yes, it can hold about fifty people {{BLANK}}, and each seat has a small desk and a power socket, so trainees can take notes and charge their laptops.",
    "cn": "A：新會議室夠大，可以容納下週一所有新進員工的訓練工作坊嗎？ B：夠，它可以【舒適地】容納大約五十人，而且每個座位都有小桌板和插座，受訓者可以做筆記和幫筆電充電。"
  },
  {
    "word": "permanently",
    "pos": "adv.",
    "cn_def": "永久地",
    "en_def": "for all time in the future; not temporarily",
    "sentence": "A: Is Mr. Chen only visiting the Taipei branch for a few weeks, or is he staying longer this time? B: He is moving here {{BLANK}} as our new regional director, so he has already sold his house in Hong Kong and enrolled his children in a local school.",
    "cn": "A：陳先生只是來台北分公司幾個禮拜，還是這次會待比較久？ B：他要以新任區域總監的身分【永久】搬來這裡，所以他已經賣掉香港的房子，並幫孩子在當地學校註冊了。"
  },
  {
    "word": "indoors",
    "pos": "adv.",
    "cn_def": "在室內",
    "en_def": "inside a building",
    "sentence": "A: Should we still hold the company sports day at the park on Saturday, even though the weather report says heavy rain is coming? B: I think we should move all the activities {{BLANK}} to the school gym we rented last year, so nobody gets wet and the games can continue as planned.",
    "cn": "A：氣象報告說會下大雨，我們星期六還要在公園舉辦公司運動會嗎？ B：我認為應該把所有活動移到【室內】，改到我們去年租過的學校體育館，這樣就沒人會淋濕，比賽也能照計畫進行。"
  },
  {
    "word": "outdoors",
    "pos": "adv.",
    "cn_def": "在戶外",
    "en_def": "outside, not in a building",
    "sentence": "A: Why does your team look so much happier and more relaxed after the training weekend in the mountains? B: We spent most of the time {{BLANK}}, hiking through the forest and cooking dinner together by the river, which helped us build trust and forget about our deadlines.",
    "cn": "A：你們團隊在山上參加完週末訓練後，為什麼看起來快樂又放鬆許多？ B：我們大部分時間都在【戶外】，在森林裡健行，在河邊一起煮晚餐，這幫助我們建立信任，也忘掉了截止期限。"
  }
];

const MCQS = [
  {
    "q": "After a long week of meetings in Seoul, Kevin finally flew back. He was happy to relax at _____ with his family.",
    "options": [
      "home",
      "garage",
      "ceiling",
      "roof"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The ambassador hosted a dinner for local business leaders. The event took place at his official _____ near the city park.",
    "options": [
      "ceiling",
      "residence",
      "furniture",
      "window"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Many young employees cannot afford to buy a house in the city. Instead, they rent a small _____ close to the office.",
    "options": [
      "roof",
      "ceiling",
      "apartment",
      "decoration"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The resort offers several private guest options for wealthy travelers. Each _____ has its own swimming pool and ocean view.",
    "options": [
      "ceiling",
      "roof",
      "wall",
      "villa"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The famous film director lives in a huge _____ with twenty rooms. It also has a tennis court and a large private garden.",
    "options": [
      "mansion",
      "window",
      "kitchen",
      "ceiling"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Heavy snow piled up on top of the old warehouse last night. Engineers worry the _____ might collapse under the weight.",
    "options": [
      "furniture",
      "roof",
      "garden",
      "bedroom"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The designer suggested painting one _____ of the meeting room bright orange. She believes the strong color will increase creativity.",
    "options": [
      "furniture",
      "garage",
      "wall",
      "roof"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The lobby has a very high _____ with a large glass chandelier. Visitors often look up and take photos of it.",
    "options": [
      "garage",
      "kitchen",
      "door",
      "ceiling"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Please do not leave boxes on the _____ of the hallway. Someone could trip over them and get hurt.",
    "options": [
      "floor",
      "ceiling",
      "roof",
      "window"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Room 805 has a wonderful view of the harbor. Guests can watch the ships from the large _____ next to the bed.",
    "options": [
      "roof",
      "window",
      "garage",
      "ceiling"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please knock on the manager's _____ before entering her office. She is often on important phone calls with clients.",
    "options": [
      "ceiling",
      "roof",
      "door",
      "garden"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The restaurant passed its health inspection with excellent results. The inspector said the _____ was one of the cleanest she had seen.",
    "options": [
      "garage",
      "ceiling",
      "bedroom",
      "kitchen"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The hotel suite includes a separate _____ with a king-size bed. Business travelers can also use the small desk by the window.",
    "options": [
      "bedroom",
      "garage",
      "roof",
      "ceiling"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Each guest room has a private _____ with a shower and a bathtub. Fresh towels are provided every morning by housekeeping.",
    "options": [
      "garage",
      "bathroom",
      "garden",
      "roof"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The real estate agent showed us a bright _____ with a large sofa and a TV. The family can relax there together after dinner.",
    "options": [
      "garage",
      "bathroom",
      "living room",
      "roof"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Employees who drive to work can park in the _____ under the building. Parking is free for the first two hours.",
    "options": [
      "kitchen",
      "bedroom",
      "ceiling",
      "garage"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The hotel grows its own vegetables and herbs. Guests can walk through the _____ and pick fresh mint for their tea.",
    "options": [
      "garden",
      "ceiling",
      "garage",
      "bathroom"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The office supplier offers a discount on desks and chairs this month. We plan to replace all our old _____ before the new staff arrive.",
    "options": [
      "roof",
      "furniture",
      "ceiling",
      "garden"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The owners plan to _____ the old hotel next year. They will replace the carpets, repaint the rooms, and update the elevators.",
    "options": [
      "borrow",
      "describe",
      "renovate",
      "invite"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The building manager hires a company to _____ the elevators every month. Regular checks help prevent breakdowns and keep tenants safe.",
    "options": [
      "decorate",
      "borrow",
      "invite",
      "maintain"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Before the holiday party, the staff will _____ the lobby with lights and colorful balloons. Everyone is invited to help on Friday afternoon.",
    "options": [
      "decorate",
      "renovate",
      "maintain",
      "borrow"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The new conference hall is very _____ and can hold three hundred people. It is perfect for our annual shareholders' meeting.",
    "options": [
      "cozy",
      "spacious",
      "secure",
      "traditional"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The small café near our office is warm and _____, with soft sofas and quiet music. Many staff members go there to read during lunch.",
    "options": [
      "spacious",
      "secure",
      "cozy",
      "empty"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The company moved into a _____ office tower with smart elevators and the latest technology. Employees love the new digital meeting rooms.",
    "options": [
      "traditional",
      "ancient",
      "cozy",
      "modern"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The inn serves _____ Japanese food such as miso soup and grilled fish. Guests can also wear kimonos during their stay.",
    "options": [
      "traditional",
      "spacious",
      "secure",
      "cozy"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Please keep customer files in a _____ place such as a locked cabinet. Leaving them on your desk is against company policy.",
    "options": [
      "cozy",
      "secure",
      "spacious",
      "traditional"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The new sofa in the waiting area seats four people _____. Visitors no longer have to stand while they wait for appointments.",
    "options": [
      "permanently",
      "nervously",
      "comfortably",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "After working in London on a short contract, Maria decided to move there _____. She bought a flat and applied for a long-term visa.",
    "options": [
      "comfortably",
      "outdoors",
      "rarely",
      "permanently"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Because of the heavy rain, the company picnic will be held _____ this year. The event has moved to the hotel's ballroom.",
    "options": [
      "indoors",
      "outdoors",
      "comfortably",
      "permanently"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The weather is sunny and warm this weekend. Our team will have lunch _____ in the park behind the office.",
    "options": [
      "indoors",
      "outdoors",
      "permanently",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "home": {
    "pos": "n.",
    "en_def": "the place where you live",
    "cn_def": "家"
  },
  "residence": {
    "pos": "n.",
    "en_def": "a house or place where someone lives, often a formal word",
    "cn_def": "住所；住宅"
  },
  "dwelling": {
    "pos": "n.",
    "en_def": "a house, flat, or other place where people live",
    "cn_def": "住處；寓所"
  },
  "apartment": {
    "pos": "n.",
    "en_def": "a set of rooms for living in, usually on one floor of a building",
    "cn_def": "公寓"
  },
  "cottage": {
    "pos": "n.",
    "en_def": "a small, simple house, usually in the countryside",
    "cn_def": "小屋；農舍"
  },
  "villa": {
    "pos": "n.",
    "en_def": "a large house, often with a garden, used for holidays",
    "cn_def": "別墅"
  },
  "mansion": {
    "pos": "n.",
    "en_def": "a very large and expensive house",
    "cn_def": "大宅；豪宅"
  },
  "bungalow": {
    "pos": "n.",
    "en_def": "a house with only one floor",
    "cn_def": "平房"
  },
  "roof": {
    "pos": "n.",
    "en_def": "the top covering of a building",
    "cn_def": "屋頂"
  },
  "wall": {
    "pos": "n.",
    "en_def": "one of the sides of a room or building",
    "cn_def": "牆壁"
  },
  "ceiling": {
    "pos": "n.",
    "en_def": "the top inside surface of a room",
    "cn_def": "天花板"
  },
  "floor": {
    "pos": "n.",
    "en_def": "the flat surface you walk on inside a building",
    "cn_def": "地板"
  },
  "window": {
    "pos": "n.",
    "en_def": "an opening in a wall, with glass, that lets in light and air",
    "cn_def": "窗戶"
  },
  "door": {
    "pos": "n.",
    "en_def": "the thing you open and close to enter or leave a room or building",
    "cn_def": "門"
  },
  "kitchen": {
    "pos": "n.",
    "en_def": "a room where food is prepared and cooked",
    "cn_def": "廚房"
  },
  "bedroom": {
    "pos": "n.",
    "en_def": "a room used for sleeping",
    "cn_def": "臥室"
  },
  "bathroom": {
    "pos": "n.",
    "en_def": "a room with a toilet, a sink, and often a shower or bath",
    "cn_def": "浴室；洗手間"
  },
  "living room": {
    "pos": "n.phr.",
    "en_def": "the main room in a home where people sit and relax together",
    "cn_def": "客廳"
  },
  "garage": {
    "pos": "n.",
    "en_def": "a building or space where cars are parked",
    "cn_def": "車庫；停車場"
  },
  "garden": {
    "pos": "n.",
    "en_def": "an area of land where flowers, plants, or vegetables are grown",
    "cn_def": "花園"
  },
  "yard": {
    "pos": "n.",
    "en_def": "an open area of ground next to a building",
    "cn_def": "院子"
  },
  "furniture": {
    "pos": "n.",
    "en_def": "things such as chairs, tables, and beds that you put in a room",
    "cn_def": "家具"
  },
  "decoration": {
    "pos": "n.",
    "en_def": "things used to make a place look more beautiful or festive",
    "cn_def": "裝飾；布置"
  },
  "renovate": {
    "pos": "v.",
    "en_def": "to repair and improve an old building or room",
    "cn_def": "翻修；整修"
  },
  "maintain": {
    "pos": "v.",
    "en_def": "to keep something in good condition by checking and repairing it",
    "cn_def": "維護；保養"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make a place look more attractive by adding things to it",
    "cn_def": "裝飾；布置"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space inside",
    "cn_def": "寬敞的"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "warm, comfortable, and relaxing",
    "cn_def": "舒適溫馨的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "new and using the latest ideas, styles, or technology",
    "cn_def": "現代的；新式的"
  },
  "traditional": {
    "pos": "adj.",
    "en_def": "following old customs or styles that have existed for a long time",
    "cn_def": "傳統的"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "safe and protected from danger or crime",
    "cn_def": "安全的；牢固的"
  },
  "comfortably": {
    "pos": "adv.",
    "en_def": "in a comfortable way; with enough space or ease",
    "cn_def": "舒適地；寬裕地"
  },
  "permanently": {
    "pos": "adv.",
    "en_def": "for all time in the future; not temporarily",
    "cn_def": "永久地"
  },
  "indoors": {
    "pos": "adv.",
    "en_def": "inside a building",
    "cn_def": "在室內"
  },
  "outdoors": {
    "pos": "adv.",
    "en_def": "outside, not in a building",
    "cn_def": "在戶外"
  }
};

const EXTRA_GLOSSES = {};
