// Topic 408 Quiz Data: Tourism 觀光
// Source word list: https://www.examword.com/group-topic/tourism — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T408 - Tourism 觀光",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "destination",
    "pos": "n.",
    "cn_def": "目的地",
    "en_def": "the place someone is traveling to",
    "sentence": "A: Our sales team has finished the busy season, and the manager wants to reward everyone with a short trip next month. Have you chosen a place yet? B: Yes, I picked Hualien as our {{BLANK}} because the mountains are beautiful, the train ride is short, and the hotels there offer good group prices.",
    "cn": "A：我們業務團隊已經忙完旺季，經理想在下個月用一趟短程旅行犒賞大家。你選好地點了嗎？ B：選好了，我挑了花蓮作為我們的【目的地】，因為那裡的山很美、火車車程很短，而且那裡的飯店提供不錯的團體價格。"
  },
  {
    "word": "attraction",
    "pos": "n.",
    "cn_def": "景點；吸引人的事物",
    "en_def": "a place or thing that people visit because it is interesting",
    "sentence": "A: The visitors from our Tokyo office will be free on Saturday afternoon after the meeting ends. Where should I take them so they can enjoy Taipei? B: Taipei 101 is the most famous {{BLANK}} in the city, and after you go up to the top, you can walk to the nearby night market for dinner.",
    "cn": "A：東京辦公室來的訪客在週六下午會議結束後有空。我該帶他們去哪裡，好讓他們享受台北呢？ B：台北101是這座城市最有名的【景點】，你們上到頂樓之後，還可以走到附近的夜市吃晚餐。"
  },
  {
    "word": "landmark",
    "pos": "n.",
    "cn_def": "地標",
    "en_def": "a famous building or place that is easy to recognize",
    "sentence": "A: I'm meeting a new client downtown tomorrow, but I've never been to that area, and my phone's map app keeps crashing. How will I find the office? B: Don't worry, the office is right next to the old train station, which is a well-known {{BLANK}}, so any taxi driver will know exactly where to drop you off.",
    "cn": "A：我明天要在市中心和一位新客戶見面，但我從沒去過那一區，而且我手機的地圖程式一直當掉。我要怎麼找到辦公室呢？ B：別擔心，辦公室就在舊火車站旁邊，那是一個著名的【地標】，所以任何計程車司機都會知道要在哪裡讓你下車。"
  },
  {
    "word": "sightseeing",
    "pos": "n.",
    "cn_def": "觀光；遊覽",
    "en_def": "visiting interesting places as a tourist",
    "sentence": "A: The conference in Singapore only lasts three days, but our flight home isn't until Sunday night. What do you plan to do on the extra day? B: I'm going to do some {{BLANK}} with two colleagues, starting with the gardens in the morning and then taking a boat ride along the river before we head to the airport.",
    "cn": "A：新加坡的研討會只有三天，但我們回程的班機要到週日晚上才出發。多出來的那一天你打算做什麼？ B：我要和兩位同事去【觀光】，早上先去逛植物園，接著在前往機場前搭船遊河。"
  },
  {
    "word": "itinerary",
    "pos": "n.",
    "cn_def": "行程表",
    "en_def": "a detailed plan of a trip, with times and places",
    "sentence": "A: The CEO is visiting our three factories in Vietnam next week, and she asked me how much time she will spend at each one. Can you help? B: Sure, I'll send you the full {{BLANK}} this afternoon, which lists every flight, meeting, hotel, and driver, so you can forward it to her assistant before Friday.",
    "cn": "A：執行長下週要參觀我們在越南的三間工廠，她問我她在每一間會待多久。你能幫忙嗎？ B：當然，我今天下午會把完整的【行程表】寄給你，上面列出每一班飛機、會議、飯店和司機，這樣你就能在週五前轉寄給她的助理。"
  },
  {
    "word": "accommodation",
    "pos": "n.",
    "cn_def": "住宿",
    "en_def": "a place to stay, such as a hotel room",
    "sentence": "A: About forty engineers are coming to the trade show in Kaohsiung, and most of the nearby hotels are already full. What should we do? B: The event organizer offers {{BLANK}} at a partner hotel ten minutes away by shuttle bus, so let's book the rooms today before the special rate ends this weekend.",
    "cn": "A：大約有四十位工程師要來參加高雄的貿易展，而附近大部分的飯店都已經客滿了。我們該怎麼辦？ B：活動主辦單位在搭接駁車十分鐘車程的合作飯店提供【住宿】，所以我們今天就訂房吧，趁特價在這個週末結束之前。"
  },
  {
    "word": "hotel",
    "pos": "n.",
    "cn_def": "飯店；旅館",
    "en_def": "a building where people pay to stay and sleep when traveling",
    "sentence": "A: The new trainees from Japan arrive late on Monday night, and the office will already be closed by then. Where will they stay during the training week? B: We reserved rooms at a business {{BLANK}} across the street, which has a free breakfast buffet, a quiet meeting room, and a front desk that is open all night.",
    "cn": "A：從日本來的新進受訓人員週一深夜才抵達，那時辦公室已經關門了。他們在培訓週期間要住在哪裡？ B：我們在對街一家商務【飯店】訂了房間，那裡有免費的自助早餐、一間安靜的會議室，櫃台也整晚營業。"
  },
  {
    "word": "hostel",
    "pos": "n.",
    "cn_def": "青年旅館",
    "en_def": "a cheap place to stay, often with shared rooms, for young travelers",
    "sentence": "A: My nephew is traveling around Europe this summer on a small budget, and he asked me for advice because hotels there are so expensive. What do you think? B: He should stay in a {{BLANK}}, where he can rent a bed in a shared room for very little money and meet other young travelers from around the world.",
    "cn": "A：我姪子今年夏天要用很少的預算環遊歐洲，因為那裡的飯店很貴，他問我的建議。你覺得呢？ B：他應該住【青年旅館】，在那裡他可以花很少的錢在共用房間裡租一張床，還能認識來自世界各地的年輕旅客。"
  },
  {
    "word": "resort",
    "pos": "n.",
    "cn_def": "度假村",
    "en_def": "a place where people go for vacation, with hotels, pools, and activities",
    "sentence": "A: Our company is holding its annual awards dinner in December, and the boss wants somewhere relaxing outside the city this year. Do you have any ideas? B: There's a beach {{BLANK}} in Kenting with a large ballroom, several swimming pools, and a spa, so employees can enjoy the party at night and rest the next day.",
    "cn": "A：我們公司十二月要舉辦年度頒獎晚宴，老闆今年想找個市區外能放鬆的地方。你有什麼想法嗎？ B：墾丁有一間海灘【度假村】，有大型宴會廳、好幾座游泳池和水療中心，所以員工晚上可以享受派對，隔天再好好休息。"
  },
  {
    "word": "guide",
    "pos": "n.",
    "cn_def": "導遊；嚮導",
    "en_def": "a person whose job is to show places to tourists and explain them",
    "sentence": "A: The group of investors from Korea wants to visit the old temples in Tainan, but none of us know much about their history. What should we do? B: I'll hire a professional {{BLANK}} who speaks Korean, so she can lead the group through each temple and explain the stories behind the buildings and statues.",
    "cn": "A：那群從韓國來的投資人想參觀台南的老廟，但我們都不太了解它們的歷史。我們該怎麼辦？ B：我會請一位會說韓語的專業【導遊】，這樣她就能帶團參觀每一座廟，並解說建築和神像背後的故事。"
  },
  {
    "word": "brochure",
    "pos": "n.",
    "cn_def": "小冊子；簡介手冊",
    "en_def": "a small thin book with pictures and information about a product or place",
    "sentence": "A: Many visitors at our hotel's front desk keep asking what they can do in the area during the weekend. How can we answer them more quickly? B: Let's print a colorful {{BLANK}} that shows nearby museums, restaurants, and bus routes, and then place a stack of them next to the elevators and in every room.",
    "cn": "A：飯店櫃台有很多旅客一直問週末在附近可以做什麼。我們要怎樣更快回答他們呢？ B：我們來印一份彩色的【簡介手冊】，列出附近的博物館、餐廳和公車路線，然後在電梯旁和每個房間都放一疊。"
  },
  {
    "word": "souvenir",
    "pos": "n.",
    "cn_def": "紀念品",
    "en_def": "something you buy to remember a place you visited",
    "sentence": "A: I'm flying back from Kyoto tomorrow morning, and I want to bring something small for everyone in the accounting department. What do you suggest? B: You could buy each person a little {{BLANK}}, like green tea candy or a pretty keychain from the shop near the temple, because they are light, cheap, and easy to pack.",
    "cn": "A：我明天早上要從京都飛回去，我想帶點小東西給會計部的每個人。你有什麼建議嗎？ B：你可以給每個人買一個小【紀念品】，像是綠茶糖果或寺廟附近商店的漂亮鑰匙圈，因為它們很輕、便宜，又容易打包。"
  },
  {
    "word": "visa",
    "pos": "n.",
    "cn_def": "簽證",
    "en_def": "an official document or stamp that allows you to enter a country",
    "sentence": "A: I've been asked to attend a three-month training program at our head office in India, but I've never worked there before. What do I need to prepare? B: First you must apply for a work {{BLANK}} at the embassy, and since it can take several weeks, you should send the forms and photos as soon as possible.",
    "cn": "A：我被派去印度總公司參加為期三個月的培訓計畫，但我以前從沒在那裡工作過。我需要準備什麼呢？ B：首先你必須到大使館申請工作【簽證】，因為可能要花好幾週，你應該盡快送出表格和照片。"
  },
  {
    "word": "passport",
    "pos": "n.",
    "cn_def": "護照",
    "en_def": "an official book that shows who you are and lets you travel abroad",
    "sentence": "A: I'm so excited about our business trip to London next month, but my travel documents are in a drawer at home. Is there anything I should check first? B: Yes, make sure your {{BLANK}} is valid for at least six more months, because the airline may not let you board the plane if it expires soon.",
    "cn": "A：我對下個月去倫敦出差很興奮，但我的旅行證件放在家裡的抽屜裡。有什麼是我應該先檢查的嗎？ B：有，確認你的【護照】至少還有六個月的效期，因為如果快要過期，航空公司可能不讓你登機。"
  },
  {
    "word": "departure",
    "pos": "n.",
    "cn_def": "出發；離境",
    "en_def": "the act of leaving a place, especially at the start of a trip",
    "sentence": "A: The tour group has to catch an early flight to Bangkok on Thursday, and the airport is an hour away from the hotel. When should the bus pick them up? B: The {{BLANK}} time is eight o'clock, so the bus should leave the hotel by five-thirty to give everyone enough time to check in and pass security.",
    "cn": "A：旅行團週四要搭早班飛機去曼谷，機場離飯店一個小時車程。巴士應該幾點去接他們？ B：【出發】時間是八點，所以巴士應該在五點半前離開飯店，讓大家有足夠的時間辦理報到和通過安檢。"
  },
  {
    "word": "arrival",
    "pos": "n.",
    "cn_def": "抵達；到達",
    "en_def": "the act of reaching a place",
    "sentence": "A: Our new branch manager is moving here from Canada, and the whole team wants to welcome her properly. When does her plane land? B: Her {{BLANK}} is scheduled for Friday at noon, so I'll meet her at the airport with a sign, and then we can all have lunch together near the office.",
    "cn": "A：我們新的分行經理要從加拿大搬來這裡，整個團隊都想好好歡迎她。她的飛機什麼時候降落？ B：她預定週五中午【抵達】，所以我會拿著牌子去機場接她，然後我們大家可以在辦公室附近一起吃午餐。"
  },
  {
    "word": "flight",
    "pos": "n.",
    "cn_def": "班機；航班",
    "en_def": "a trip on an airplane",
    "sentence": "A: The client meeting in Hong Kong was moved from Wednesday to Tuesday morning, so my plans have completely changed. What should I do now? B: Call the travel agency right away and ask them to change your {{BLANK}} to Monday evening, so you can arrive the night before and get some rest.",
    "cn": "A：香港的客戶會議從週三改到週二早上，所以我的計畫完全改變了。我現在該怎麼辦？ B：馬上打電話給旅行社，請他們把你的【班機】改到週一晚上，這樣你就能前一晚抵達並休息一下。"
  },
  {
    "word": "cruise",
    "pos": "n.",
    "cn_def": "郵輪之旅",
    "en_def": "a vacation on a large ship that stops at different places",
    "sentence": "A: My parents are celebrating their fortieth wedding anniversary next spring, and they want a trip where they don't have to carry their bags around. Any ideas? B: A {{BLANK}} would be perfect for them, because the ship visits several islands, the meals and shows are included, and they only have to unpack once.",
    "cn": "A：我父母明年春天要慶祝結婚四十週年，他們想要一趟不用提著行李到處跑的旅行。有什麼點子嗎？ B：【郵輪之旅】對他們來說最完美了，因為船會停靠好幾座島嶼，餐點和表演都包含在內，而且他們只需要拆一次行李。"
  },
  {
    "word": "adventure",
    "pos": "n.",
    "cn_def": "冒險；奇遇",
    "en_def": "an exciting and unusual experience",
    "sentence": "A: The marketing team wants a team-building trip that is more exciting than just eating at a nice restaurant. What kind of activity would you plan? B: I'd plan a two-day {{BLANK}} in the mountains with river rafting and rock climbing, because challenging activities help coworkers trust each other and work better as a team.",
    "cn": "A：行銷團隊想要一趟比在高級餐廳吃飯更刺激的團隊建立之旅。你會規劃什麼樣的活動？ B：我會規劃在山區兩天的【冒險】，包括泛舟和攀岩，因為具挑戰性的活動能幫助同事彼此信任，並更有團隊合作精神。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；遊覽",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: The training in Seoul ends at three o'clock on Friday, and our flight doesn't leave until Saturday afternoon. How should we spend our free time? B: Let's {{BLANK}} the old neighborhoods near the palace on foot, because there are small cafés, traditional houses, and craft shops that most tourists never see.",
    "cn": "A：首爾的訓練週五三點結束，而我們的班機要到週六下午才起飛。我們該怎麼利用空閒時間？ B：我們走路去【探索】宮殿附近的老社區吧，因為那裡有小咖啡館、傳統房屋和手工藝品店，大部分觀光客都沒看過。"
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the customs, arts, and way of life of a group of people",
    "sentence": "A: I'm going to manage our new office in Thailand, but I'm worried about making mistakes when I meet local business partners. How can I prepare? B: Take a short course about Thai {{BLANK}} before you go, so you learn how people greet each other, what gifts are polite, and which topics to avoid.",
    "cn": "A：我要去管理我們在泰國的新辦公室，但我擔心和當地商業夥伴見面時會犯錯。我要怎麼準備？ B：出發前去上一堂關於泰國【文化】的短期課程，這樣你就能學到人們怎麼互相打招呼、送什麼禮物比較得體，以及哪些話題要避免。"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "cn_def": "遺產；文化資產",
    "en_def": "old buildings, traditions, and things from the past that are important to a place",
    "sentence": "A: The city government wants to tear down the old tea factory to build a shopping mall, but many residents are angry about it. Why are they so upset? B: The factory is part of the town's {{BLANK}} because it is over a hundred years old, and people believe it should be repaired and turned into a museum instead.",
    "cn": "A：市政府想拆掉舊茶廠來蓋購物中心，但許多居民對此很生氣。他們為什麼這麼不高興？ B：那間工廠是這座城鎮【文化遺產】的一部分，因為它已經超過一百年了，大家認為應該把它修復並改建成博物館。"
  },
  {
    "word": "festival",
    "pos": "n.",
    "cn_def": "節慶；藝術節",
    "en_def": "a special event with music, food, or shows, often held every year",
    "sentence": "A: Hotel bookings in our city always jump in early September, and we sometimes don't have enough staff at the front desk. Do you know why? B: That's when the annual music {{BLANK}} takes place in the park, and thousands of visitors come for three days of concerts, food stalls, and fireworks.",
    "cn": "A：我們城市的飯店訂房總是在九月初暴增，我們有時候櫃台人手不夠。你知道為什麼嗎？ B：那是公園舉辦年度音樂【節】的時候，成千上萬的遊客會來參加為期三天的演唱會、美食攤和煙火。"
  },
  {
    "word": "cuisine",
    "pos": "n.",
    "cn_def": "菜餚；料理",
    "en_def": "a style of cooking from a particular country or area",
    "sentence": "A: We're taking the French buyers out to dinner tonight, and I want them to try something they can't get at home. Where should we go? B: Let's take them to that restaurant on the second floor that serves Taiwanese {{BLANK}}, such as braised pork rice, oyster omelets, and three-cup chicken.",
    "cn": "A：我們今晚要帶法國買家去吃晚餐，我想讓他們嚐嚐在家鄉吃不到的東西。我們該去哪裡？ B：我們帶他們去二樓那家供應台灣【料理】的餐廳吧，像是滷肉飯、蚵仔煎和三杯雞。"
  },
  {
    "word": "local",
    "pos": "adj.",
    "cn_def": "當地的；本地的",
    "en_def": "relating to the area where you are or live",
    "sentence": "A: Our hotel wants to improve its breakfast menu because some guests said the food tastes the same as in every other hotel. What could we change? B: We could buy fresh fruit and bread from {{BLANK}} farmers and bakeries in town, so guests can taste real flavors from this area while we support small businesses nearby.",
    "cn": "A：我們飯店想改善早餐菜單，因為有些客人說食物和其他每家飯店吃起來都一樣。我們可以改變什麼？ B：我們可以向鎮上的【當地】農民和麵包店購買新鮮水果和麵包，讓客人嚐到這一帶真正的風味，同時支持附近的小商家。"
  },
  {
    "word": "exotic",
    "pos": "adj.",
    "cn_def": "異國情調的；奇特的",
    "en_def": "unusual and exciting because it comes from a faraway place",
    "sentence": "A: Our travel agency's summer sales have been weak, and customers say our tours to Japan and Korea feel too familiar now. What should we offer instead? B: Let's create tours to more {{BLANK}} places like Morocco and Peru, where travelers can see colorful markets, ancient ruins, and landscapes that are completely different from home.",
    "cn": "A：我們旅行社夏季的業績一直很差，客人說我們去日本和韓國的行程現在感覺太熟悉了。我們該改推什麼？ B：我們來規劃去摩洛哥和秘魯這類更具【異國情調】的地方的行程吧，旅客在那裡可以看到繽紛的市集、古老的遺跡，以及和家鄉完全不同的風景。"
  },
  {
    "word": "scenic",
    "pos": "adj.",
    "cn_def": "風景優美的",
    "en_def": "having beautiful views of nature",
    "sentence": "A: I need to drive from Taipei to Yilan for a client meeting next Thursday, and I have plenty of time in the morning. Which way should I go? B: If you're not in a hurry, take the {{BLANK}} coastal road instead of the tunnel, because you'll pass blue ocean views, small fishing villages, and green hills along the way.",
    "cn": "A：我下週四要從台北開車到宜蘭和客戶開會，早上時間很充裕。我該走哪條路？ B：如果你不趕時間，就走【風景優美的】濱海公路而不是隧道，因為沿途你會經過湛藍海景、小漁村和翠綠山丘。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of too many people",
    "sentence": "A: Our staff trip to the amusement park is planned for the Saturday of the long holiday weekend. Do you think that's a good idea? B: Not really, because the park will be extremely {{BLANK}} on that day, and we might wait over an hour for every ride, so let's choose a weekday instead.",
    "cn": "A：我們員工去遊樂園的旅遊安排在連假週末的星期六。你覺得這是個好主意嗎？ B：不太好，因為那天樂園會非常【擁擠】，我們每項設施可能都要排一個多小時，所以我們改選平日吧。"
  },
  {
    "word": "sustainable",
    "pos": "adj.",
    "cn_def": "永續的；可持續的",
    "en_def": "able to continue without harming the environment",
    "sentence": "A: Many young customers now ask whether our tours damage nature or harm the villages we visit. How can our company respond to these concerns? B: We should offer more {{BLANK}} trips that use electric buses, small groups, and family-run guesthouses, so travel helps local people and protects the environment at the same time.",
    "cn": "A：現在很多年輕客人會問我們的行程是否破壞自然或傷害我們造訪的村莊。我們公司要如何回應這些疑慮？ B：我們應該推出更多【永續的】旅遊行程，使用電動巴士、小團體和家庭經營的民宿，讓旅遊同時幫助當地人並保護環境。"
  },
  {
    "word": "economy",
    "pos": "n.",
    "cn_def": "經濟",
    "en_def": "the system of money, trade, and jobs in a country or area",
    "sentence": "A: The small island near our factory used to depend only on fishing, but now there are new restaurants and hotels everywhere. What happened there? B: Tourism has greatly improved the island's {{BLANK}}, because visitors spend money on food, boat trips, and gifts, which creates many new jobs for young people.",
    "cn": "A：我們工廠附近的小島以前只靠捕魚維生，但現在到處都是新的餐廳和飯店。那裡發生了什麼事？ B：觀光大幅改善了這座島的【經濟】，因為遊客會在食物、搭船遊覽和禮品上花錢，為年輕人創造了許多新工作。"
  },
  {
    "word": "hospitality",
    "pos": "n.",
    "cn_def": "殷勤款待；好客",
    "en_def": "friendly and generous treatment of guests",
    "sentence": "A: The Japanese delegation sent us a thank-you email after their visit last week, and they mentioned our team several times. What did they say? B: They said they were impressed by our warm {{BLANK}}, especially the airport pickup, the welcome dinner, and the way our staff helped them with every small request.",
    "cn": "A：日本代表團上週參訪後寄了一封感謝信給我們，信中好幾次提到我們的團隊。他們說了什麼？ B：他們說對我們熱情的【款待】印象深刻，尤其是機場接機、歡迎晚宴，以及我們員工協助處理他們每一個小要求的方式。"
  },
  {
    "word": "package tour",
    "pos": "n.phr.",
    "cn_def": "套裝旅遊；旅行團",
    "en_def": "a trip where travel, hotels, and meals are arranged and sold together",
    "sentence": "A: My mother wants to visit Italy next autumn, but she doesn't speak Italian and has never planned an overseas trip by herself. What would you recommend? B: She should book a {{BLANK}} through a travel agency, because the flights, hotels, meals, and guided visits are all arranged, and a leader stays with the group the whole time.",
    "cn": "A：我媽媽想在明年秋天去義大利，但她不會說義大利文，也從沒自己規劃過出國旅行。你會推薦什麼？ B：她應該透過旅行社訂一個【套裝旅遊】，因為機票、飯店、餐點和導覽參觀都安排好了，而且領隊全程都會跟團。"
  },
  {
    "word": "backpacker",
    "pos": "n.",
    "cn_def": "背包客",
    "en_def": "a person who travels cheaply, carrying a backpack",
    "sentence": "A: The guesthouse we're managing near the train station has many empty beds, and our prices are already quite low. Who should we try to attract? B: We should advertise to every young {{BLANK}} who travels on a budget, by offering shared rooms, a free laundry machine, and maps of cheap places to eat.",
    "cn": "A：我們在火車站附近經營的民宿有很多空床位，而且價格已經很低了。我們應該試著吸引哪些人？ B：我們應該向每一位預算有限的年輕【背包客】打廣告，提供共用房間、免費洗衣機和便宜餐廳的地圖。"
  },
  {
    "word": "journey",
    "pos": "n.",
    "cn_def": "旅程",
    "en_def": "a trip from one place to another, especially a long one",
    "sentence": "A: You took the overnight train from Beijing to Shanghai for your business trip, didn't you? How was it compared with flying? B: The {{BLANK}} was longer, but it was surprisingly comfortable, because I had my own bed, I finished my sales report on the way, and I arrived in the city center feeling fresh.",
    "cn": "A：你這次出差搭夜車從北京到上海，對吧？跟搭飛機比起來怎麼樣？ B：【旅程】比較長，但出乎意料地舒適，因為我有自己的床，在路上完成了銷售報告，而且抵達市中心時精神很好。"
  },
  {
    "word": "relaxation",
    "pos": "n.",
    "cn_def": "放鬆；休閒",
    "en_def": "rest and enjoyment that makes you feel calm",
    "sentence": "A: After three months of working overtime on the new product launch, I feel completely exhausted. Where should I go for my vacation next week? B: You need some real {{BLANK}}, so book a few nights at a hot spring hotel in Beitou, where you can soak in warm water, sleep late, and turn off your phone.",
    "cn": "A：為了新產品上市連續加班三個月之後，我覺得筋疲力盡。我下週休假該去哪裡？ B：你需要真正的【放鬆】，所以去北投的溫泉飯店訂幾晚，你可以泡溫水、睡晚一點，還能把手機關掉。"
  }
];

const MCQS = [
  {
    "q": "Bali has become a popular _____ for company retreats. Many firms send their staff there for team-building activities every spring.",
    "options": [
      "destination",
      "departure",
      "brochure",
      "passport"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please review the _____ before the trip begins. It shows the times of all meetings, meals, and hotel check-ins for the week.",
    "options": [
      "souvenir",
      "itinerary",
      "heritage",
      "cuisine"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The conference fee includes three nights of _____ at the Grand Hotel. Breakfast is also served free of charge each morning.",
    "options": [
      "adventure",
      "landmark",
      "accommodation",
      "economy"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Before leaving Paris, the sales manager bought a small _____ for her assistant. It was a keychain shaped like the Eiffel Tower.",
    "options": [
      "visa",
      "resort",
      "flight",
      "souvenir"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Employees traveling to Russia must apply for a business _____ at least one month ahead. The embassy usually takes three weeks to process applications.",
    "options": [
      "hostel",
      "visa",
      "festival",
      "culture"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please make sure your _____ is valid for at least six months. Otherwise, the airline may refuse to let you board the plane.",
    "options": [
      "guide",
      "cruise",
      "attraction",
      "passport"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The _____ of Flight 207 has been delayed by two hours because of heavy fog. Passengers may wait in the lounge near Gate 12.",
    "options": [
      "departure",
      "heritage",
      "hospitality",
      "relaxation"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Upon _____ at the hotel, guests will receive a welcome drink and a city map. Shuttle buses to the convention center leave every hour.",
    "options": [
      "journey",
      "economy",
      "arrival",
      "cuisine"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Our direct _____ to Tokyo takes about three hours. We will land at Narita Airport shortly before noon.",
    "options": [
      "resort",
      "brochure",
      "landmark",
      "flight"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The company rewarded its top sellers with a seven-day _____ around the Mediterranean. The ship stopped at five ports in Italy and Greece.",
    "options": [
      "visa",
      "cruise",
      "hostel",
      "culture"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "After the trade fair ended, the visitors went _____ around the old city. They took photos of the castle and the famous bridge.",
    "options": [
      "sightseeing",
      "accommodation",
      "hospitality",
      "economy"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The clock tower is the city's most famous _____. It appears on postcards and can be seen from almost every street downtown.",
    "options": [
      "itinerary",
      "cuisine",
      "landmark",
      "departure"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The _____ has two hundred rooms, a rooftop pool, and a business center. Guests can also order room service twenty-four hours a day.",
    "options": [
      "brochure",
      "hotel",
      "passport",
      "festival"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The students stayed in a youth _____ to save money. They shared a room with six other travelers and cooked in the common kitchen.",
    "options": [
      "hostel",
      "landmark",
      "economy",
      "brochure"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The ski _____ opens in December and closes in early April. It offers lessons, equipment rentals, and cabins near the slopes.",
    "options": [
      "souvenir",
      "visa",
      "cuisine",
      "resort"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our tour _____ spoke excellent English and knew a lot about the town's history. She answered every question the visitors asked during the walk.",
    "options": [
      "flight",
      "heritage",
      "guide",
      "arrival"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The travel agency mailed a free _____ to all its customers. It contains photos, prices, and descriptions of next year's tours.",
    "options": [
      "brochure",
      "journey",
      "adventure",
      "hospitality"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The jungle trek was a real _____ for the office workers. They crossed rivers, climbed hills, and slept in tents for two nights.",
    "options": [
      "accommodation",
      "economy",
      "departure",
      "adventure"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Visitors are encouraged to _____ the old town on foot. Its narrow streets are full of small shops, temples, and cafés.",
    "options": [
      "cancel",
      "explore",
      "refund",
      "deliver"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "New staff at our Tokyo branch attend a workshop on Japanese business _____. They learn how to exchange business cards and greet clients politely.",
    "options": [
      "cruise",
      "flight",
      "culture",
      "landmark"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The old temple was named a World _____ Site last year. Since then, the number of foreign visitors to the area has doubled.",
    "options": [
      "hospitality",
      "departure",
      "itinerary",
      "heritage"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The lantern _____ attracts thousands of visitors to the town every February. Hotels are often fully booked several months in advance.",
    "options": [
      "festival",
      "passport",
      "hostel",
      "economy"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The restaurant on the top floor is famous for its Thai _____. Its spicy soups and fresh seafood dishes are especially popular.",
    "options": [
      "visa",
      "resort",
      "cuisine",
      "arrival"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The hotel buys fruit and vegetables from _____ farms in the area. This supports small farmers and keeps the food fresh.",
    "options": [
      "crowded",
      "local",
      "exotic",
      "punctual"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The train follows a _____ route along the coast. Passengers can enjoy views of cliffs, beaches, and the ocean from their seats.",
    "options": [
      "crowded",
      "temporary",
      "sustainable",
      "scenic"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The museum is very _____ on weekends, so you may wait in line for an hour. We suggest visiting on a weekday morning instead.",
    "options": [
      "crowded",
      "scenic",
      "exotic",
      "sustainable"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The company now offers _____ tours that use electric buses and eco-friendly hotels. These trips cause less damage to the environment.",
    "options": [
      "crowded",
      "sustainable",
      "exotic",
      "scenic"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Tourism plays a major role in the island's _____. More than half of the residents work in hotels, restaurants, or shops.",
    "options": [
      "cuisine",
      "adventure",
      "economy",
      "departure"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The guests praised the hotel staff for their warm _____. Every request was handled quickly and with a friendly smile.",
    "options": [
      "hospitality",
      "departure",
      "itinerary",
      "landmark"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The seven-day _____ includes flights, hotels, meals, and a guide. It is a good choice for travelers who do not want to plan anything.",
    "options": [
      "backpacker",
      "souvenir",
      "brochure",
      "package tour"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "destination": {
    "pos": "n.",
    "en_def": "the place someone is traveling to",
    "cn_def": "目的地"
  },
  "attraction": {
    "pos": "n.",
    "en_def": "a place or thing that people visit because it is interesting",
    "cn_def": "景點；吸引人的事物"
  },
  "landmark": {
    "pos": "n.",
    "en_def": "a famous building or place that is easy to recognize",
    "cn_def": "地標"
  },
  "sightseeing": {
    "pos": "n.",
    "en_def": "visiting interesting places as a tourist",
    "cn_def": "觀光；遊覽"
  },
  "itinerary": {
    "pos": "n.",
    "en_def": "a detailed plan of a trip, with times and places",
    "cn_def": "行程表"
  },
  "accommodation": {
    "pos": "n.",
    "en_def": "a place to stay, such as a hotel room",
    "cn_def": "住宿"
  },
  "hotel": {
    "pos": "n.",
    "en_def": "a building where people pay to stay and sleep when traveling",
    "cn_def": "飯店；旅館"
  },
  "hostel": {
    "pos": "n.",
    "en_def": "a cheap place to stay, often with shared rooms, for young travelers",
    "cn_def": "青年旅館"
  },
  "resort": {
    "pos": "n.",
    "en_def": "a place where people go for vacation, with hotels, pools, and activities",
    "cn_def": "度假村"
  },
  "guide": {
    "pos": "n.",
    "en_def": "a person whose job is to show places to tourists and explain them",
    "cn_def": "導遊；嚮導"
  },
  "brochure": {
    "pos": "n.",
    "en_def": "a small thin book with pictures and information about a product or place",
    "cn_def": "小冊子；簡介手冊"
  },
  "souvenir": {
    "pos": "n.",
    "en_def": "something you buy to remember a place you visited",
    "cn_def": "紀念品"
  },
  "visa": {
    "pos": "n.",
    "en_def": "an official document or stamp that allows you to enter a country",
    "cn_def": "簽證"
  },
  "passport": {
    "pos": "n.",
    "en_def": "an official book that shows who you are and lets you travel abroad",
    "cn_def": "護照"
  },
  "departure": {
    "pos": "n.",
    "en_def": "the act of leaving a place, especially at the start of a trip",
    "cn_def": "出發；離境"
  },
  "arrival": {
    "pos": "n.",
    "en_def": "the act of reaching a place",
    "cn_def": "抵達；到達"
  },
  "flight": {
    "pos": "n.",
    "en_def": "a trip on an airplane",
    "cn_def": "班機；航班"
  },
  "cruise": {
    "pos": "n.",
    "en_def": "a vacation on a large ship that stops at different places",
    "cn_def": "郵輪之旅"
  },
  "adventure": {
    "pos": "n.",
    "en_def": "an exciting and unusual experience",
    "cn_def": "冒險；奇遇"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；遊覽"
  },
  "culture": {
    "pos": "n.",
    "en_def": "the customs, arts, and way of life of a group of people",
    "cn_def": "文化"
  },
  "heritage": {
    "pos": "n.",
    "en_def": "old buildings, traditions, and things from the past that are important to a place",
    "cn_def": "遺產；文化資產"
  },
  "festival": {
    "pos": "n.",
    "en_def": "a special event with music, food, or shows, often held every year",
    "cn_def": "節慶；藝術節"
  },
  "cuisine": {
    "pos": "n.",
    "en_def": "a style of cooking from a particular country or area",
    "cn_def": "菜餚；料理"
  },
  "local": {
    "pos": "adj.",
    "en_def": "relating to the area where you are or live",
    "cn_def": "當地的；本地的"
  },
  "exotic": {
    "pos": "adj.",
    "en_def": "unusual and exciting because it comes from a faraway place",
    "cn_def": "異國情調的；奇特的"
  },
  "scenic": {
    "pos": "adj.",
    "en_def": "having beautiful views of nature",
    "cn_def": "風景優美的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of too many people",
    "cn_def": "擁擠的"
  },
  "sustainable": {
    "pos": "adj.",
    "en_def": "able to continue without harming the environment",
    "cn_def": "永續的；可持續的"
  },
  "economy": {
    "pos": "n.",
    "en_def": "the system of money, trade, and jobs in a country or area",
    "cn_def": "經濟"
  },
  "hospitality": {
    "pos": "n.",
    "en_def": "friendly and generous treatment of guests",
    "cn_def": "殷勤款待；好客"
  },
  "package tour": {
    "pos": "n.phr.",
    "en_def": "a trip where travel, hotels, and meals are arranged and sold together",
    "cn_def": "套裝旅遊；旅行團"
  },
  "backpacker": {
    "pos": "n.",
    "en_def": "a person who travels cheaply, carrying a backpack",
    "cn_def": "背包客"
  },
  "journey": {
    "pos": "n.",
    "en_def": "a trip from one place to another, especially a long one",
    "cn_def": "旅程"
  },
  "relaxation": {
    "pos": "n.",
    "en_def": "rest and enjoyment that makes you feel calm",
    "cn_def": "放鬆；休閒"
  }
};

const EXTRA_GLOSSES = {};
