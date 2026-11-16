// Topic 175 Quiz Data: Holiday 假期
// Source word list: https://www.examword.com/group-topic/holiday — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T175 - Holiday 假期",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "all-in package",
    "pos": "n.phr.",
    "cn_def": "全包式套裝行程",
    "en_def": "a holiday deal whose price includes travel, hotel, meals and drinks",
    "sentence": "A: My parents want a relaxing trip to Bali next spring, but they hate worrying about extra costs for meals, drinks, and activities after they arrive. What would you suggest? B: I would book an {{BLANK}} for them, because the price covers flights, the hotel, all meals, and even airport transfers, so they can simply enjoy themselves.",
    "cn": "A：我爸媽想在明年春天去峇里島輕鬆旅行，但他們很討厭抵達後還要擔心餐點、飲料和活動的額外費用。你有什麼建議？ B：我會幫他們訂一個【全包式套裝行程】，因為價格包含機票、飯店、所有餐點，甚至機場接送，所以他們只要好好享受就行了。"
  },
  {
    "word": "package holiday",
    "pos": "n.phr.",
    "cn_def": "套裝度假行程",
    "en_def": "a holiday where flights and hotel are sold together at one price",
    "sentence": "A: Our sales team finally hit its yearly target, and the manager wants to reward everyone with a trip, but nobody has time to plan flights and hotels separately. What should we do? B: Let's contact a travel agency and choose a {{BLANK}} to Okinawa, since the agency arranges transport and accommodation together at one reasonable price.",
    "cn": "A：我們業務團隊終於達成年度目標，經理想用一趟旅行獎勵大家，但沒有人有時間分別安排機票和飯店。我們該怎麼辦？ B：我們聯絡旅行社，選一個去沖繩的【套裝度假行程】吧，因為旅行社會以一個合理的價格把交通和住宿一起安排好。"
  },
  {
    "word": "brochure",
    "pos": "n.",
    "cn_def": "宣傳手冊；小冊子",
    "en_def": "a small printed book with pictures and information about a product or trip",
    "sentence": "A: I'm helping a customer at the travel counter who can't decide between a beach trip and a mountain trip for her family this summer. Do we have anything she can take home? B: Yes, give her our new {{BLANK}}, which has colorful photos, hotel descriptions, and price lists for both trips, so she can compare them with her husband tonight.",
    "cn": "A：我正在旅遊櫃檯協助一位客人，她無法決定今年夏天要帶家人去海邊還是山上旅行。我們有什麼東西可以讓她帶回家嗎？ B：有，給她我們新的【宣傳手冊】，裡面有兩種行程的彩色照片、飯店介紹和價目表，這樣她今晚就可以和先生一起比較。"
  },
  {
    "word": "holiday destination",
    "pos": "n.phr.",
    "cn_def": "度假地點；度假勝地",
    "en_def": "a place where people go for a holiday",
    "sentence": "A: The marketing department is preparing an online campaign to attract more visitors from Japan and Korea to our island next year. What should the main message be? B: We should present the island as a perfect {{BLANK}} for families, because it has safe beaches, friendly local people, delicious seafood, and many hotels that welcome children.",
    "cn": "A：行銷部正在準備一個線上宣傳活動，希望明年吸引更多日本和韓國遊客來我們的島。主要訊息應該是什麼？ B：我們應該把這座島塑造成適合家庭的完美【度假勝地】，因為這裡有安全的海灘、友善的當地人、美味的海鮮，還有許多歡迎兒童的飯店。"
  },
  {
    "word": "holiday resort",
    "pos": "n.phr.",
    "cn_def": "度假村",
    "en_def": "a large place with hotels, pools and activities where people go on holiday",
    "sentence": "A: I heard that you stayed somewhere special during your company's reward trip to Phuket last month. Was it a normal hotel in the city center? B: No, it was a large {{BLANK}} by the sea with three swimming pools, several restaurants, a spa, and evening shows, so we hardly needed to leave the property at all.",
    "cn": "A：聽說你上個月參加公司去普吉島的獎勵旅遊時住在很特別的地方。是市中心的一般飯店嗎？ B：不是，那是一座海邊的大型【度假村】，有三座游泳池、好幾間餐廳、一間水療中心和晚間表演，所以我們幾乎完全不需要離開園區。"
  },
  {
    "word": "passport control",
    "pos": "n.phr.",
    "cn_def": "護照查驗處；證照查驗",
    "en_def": "the place at an airport or border where officers check passports",
    "sentence": "A: Our flight lands in London at seven in the morning, and the client meeting starts at ten. Do you think we will have enough time to get to the office? B: It should be fine, but the line at {{BLANK}} can be very long in the morning, so we should keep our documents ready and fill in the arrival forms on the plane.",
    "cn": "A：我們的班機早上七點降落倫敦，客戶會議十點開始。你覺得我們有足夠的時間趕到辦公室嗎？ B：應該沒問題，但早上【護照查驗處】的隊伍可能很長，所以我們應該把證件準備好，並在飛機上先填好入境表格。"
  },
  {
    "word": "package tour",
    "pos": "n.phr.",
    "cn_def": "套裝旅遊；跟團旅遊",
    "en_def": "an organized trip with a guide where travel, hotels and meals are arranged",
    "sentence": "A: My grandmother wants to visit several famous cities in Europe, but she doesn't speak English and feels nervous about traveling on her own. What do you recommend? B: A {{BLANK}} would suit her well, because a guide travels with the group, explains the history of each place, and takes care of the bus, the hotels, and the meals.",
    "cn": "A：我奶奶想去歐洲幾個有名的城市，但她不會說英文，而且對自己旅行感到緊張。你推薦什麼？ B：【跟團旅遊】會很適合她，因為導遊會跟團一起行動，講解每個地方的歷史，並負責安排遊覽車、飯店和餐點。"
  },
  {
    "word": "low season",
    "pos": "n.phr.",
    "cn_def": "淡季",
    "en_def": "the time of year when few people travel and prices are lower",
    "sentence": "A: The hotel manager is worried because there are very few guests in November, and many of our rooms stay empty for weeks. How can we bring more people in? B: We could offer special discounts during the {{BLANK}}, such as free breakfast and cheaper room rates, so that budget travelers and retired couples will choose our hotel.",
    "cn": "A：飯店經理很擔心，因為十一月客人很少，我們很多房間好幾個星期都空著。我們要怎麼吸引更多人來？ B：我們可以在【淡季】期間提供特別優惠，例如免費早餐和較便宜的房價，這樣精打細算的旅客和退休夫婦就會選擇我們的飯店。"
  },
  {
    "word": "high season",
    "pos": "n.phr.",
    "cn_def": "旺季",
    "en_def": "the busiest time of year for travel, when prices are highest",
    "sentence": "A: I'm planning to take my family to the beach in July, but my coworker warned me that it might be expensive and very crowded. Is that true? B: Yes, July is the {{BLANK}}, so hotel prices almost double and popular restaurants are full, which means you should book your rooms and tables several months in advance.",
    "cn": "A：我打算七月帶家人去海邊，但我同事警告我那時可能很貴又很擁擠。是真的嗎？ B：是的，七月是【旺季】，所以飯店價格幾乎翻倍，熱門餐廳也都客滿，這表示你應該提前幾個月預訂房間和餐桌。"
  },
  {
    "word": "off-season",
    "pos": "n.",
    "cn_def": "淡季；非旺季",
    "en_def": "the quiet period of the year when a place has few visitors",
    "sentence": "A: Why did you and your husband decide to visit the ski town in late spring instead of during the winter holidays like most people? B: We went in the {{BLANK}} on purpose, because the streets were quiet, the hotel gave us a large room at half price, and we could enjoy the mountain views without any crowds.",
    "cn": "A：為什麼你和你先生決定在晚春去那個滑雪小鎮，而不是像大多數人一樣在冬季假期去？ B：我們是故意在【非旺季】去的，因為街上很安靜，飯店用半價給我們一間大房間，而且我們可以在沒有人潮的情況下欣賞山景。"
  },
  {
    "word": "short break",
    "pos": "n.phr.",
    "cn_def": "短期度假；短暫休假",
    "en_def": "a holiday of only a few days",
    "sentence": "A: You look really tired after finishing that big project, and you haven't taken any days off this year. Are you going to rest at all? B: I'm planning a {{BLANK}} in Hualien this weekend, just two nights at a small guesthouse near the ocean, so I can relax, sleep well, and come back to work full of energy.",
    "cn": "A：你完成那個大專案後看起來真的很累，而且你今年都還沒請過假。你打算休息一下嗎？ B：我計畫這個週末去花蓮【短期度假】，只在海邊一間小民宿住兩晚，這樣我就能放鬆、好好睡一覺，然後精神飽滿地回來上班。"
  }
];

const MCQS = [
  {
    "q": "Guests at the beach hotel never pay extra for food or drinks. Their _____ includes every meal, all snacks, and unlimited soft drinks.",
    "options": [
      "all-in package",
      "passport control",
      "brochure",
      "high season"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The travel agent recommended the most expensive option for our trip to Bali. It is the _____ that covers flights, meals, tours, and airport transfers.",
    "options": [
      "low season",
      "all-in package",
      "holiday destination",
      "short break"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Many office workers prefer to book a cheap _____ online. The price includes return flights and seven nights at a seaside hotel.",
    "options": [
      "passport control",
      "low season",
      "package holiday",
      "brochure"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Sales of the _____ to Spain rose sharply this year. Customers like paying one price for both the flight and the hotel room.",
    "options": [
      "high season",
      "passport control",
      "holiday destination",
      "package holiday"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Our agency advertises a two-week _____ in Greece for families. Flights, hotel rooms, and travel insurance are all arranged by our staff.",
    "options": [
      "package holiday",
      "brochure",
      "off-season",
      "passport control"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Please take a free _____ from the rack near the door. It contains photos and prices for all our summer trips.",
    "options": [
      "high season",
      "brochure",
      "package tour",
      "passport control"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The marketing team printed five thousand copies of the new travel _____. They will be handed out at the tourism fair next month.",
    "options": [
      "short break",
      "holiday resort",
      "brochure",
      "low season"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "According to the glossy _____, every room at the hotel has an ocean view. However, our room actually faced the parking lot.",
    "options": [
      "off-season",
      "passport control",
      "package holiday",
      "brochure"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Thanks to its warm weather and clean beaches, Penang has become a popular _____. Thousands of visitors arrive there every summer.",
    "options": [
      "holiday destination",
      "passport control",
      "brochure",
      "low season"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "The government is spending millions to promote the island as a family-friendly _____. New parks and beach facilities are being built.",
    "options": [
      "passport control",
      "holiday destination",
      "short break",
      "high season"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Kyoto ranks as the top _____ for Taiwanese travelers this autumn. Its temples and red maple leaves attract huge crowds.",
    "options": [
      "brochure",
      "all-in package",
      "holiday destination",
      "passport control"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The new _____ on the east coast has two hundred rooms, four pools, and a golf course. It will open to guests in June.",
    "options": [
      "passport control",
      "low season",
      "brochure",
      "holiday resort"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The staff at the _____ organize beach games and evening shows. Most guests never leave the property during their stay.",
    "options": [
      "holiday resort",
      "high season",
      "package holiday",
      "passport control"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Hotel chain Sunwave plans to build a luxury _____ beside the lake. The project will create about five hundred local jobs.",
    "options": [
      "short break",
      "holiday resort",
      "off-season",
      "brochure"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "After landing in Tokyo, all international passengers must go through _____. Officers there check travel documents and stamp each visitor's entry date.",
    "options": [
      "holiday resort",
      "brochure",
      "passport control",
      "package tour"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Travelers were delayed for over an hour at _____ this morning. Only two officers were on duty to check documents at the airport.",
    "options": [
      "low season",
      "holiday destination",
      "short break",
      "passport control"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Our ten-day _____ of Italy includes an English-speaking guide. The group travels by private bus and visits five cities.",
    "options": [
      "package tour",
      "passport control",
      "brochure",
      "low season"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Elderly travelers often prefer a guided _____ because everything is organized for them. The guide handles tickets, meals, and hotel check-ins.",
    "options": [
      "high season",
      "package tour",
      "holiday resort",
      "passport control"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Forty employees signed up for the company's _____ to Vietnam. They will follow the guide to markets, temples, and a cooking class.",
    "options": [
      "off-season",
      "brochure",
      "package tour",
      "passport control"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Hotel rates on the island drop by half during the _____. Few tourists visit between November and February because of the strong winds.",
    "options": [
      "high season",
      "brochure",
      "passport control",
      "low season"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Many restaurants in the beach town close for the _____. The owners reopen in April when the tourists return.",
    "options": [
      "low season",
      "package tour",
      "holiday resort",
      "passport control"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "To fill empty rooms in the _____, the hotel offers free breakfast and late checkout. Bookings have increased since the offer began.",
    "options": [
      "brochure",
      "low season",
      "all-in package",
      "passport control"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Flights to Hokkaido are fully booked during the _____ in February. Travelers should reserve their seats at least three months early.",
    "options": [
      "low season",
      "brochure",
      "high season",
      "passport control"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The theme park hires extra staff for the _____ every summer. Waiting times for popular rides can exceed two hours then.",
    "options": [
      "passport control",
      "holiday destination",
      "package holiday",
      "high season"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Room prices at seaside hotels can triple in the _____. That is why budget travelers avoid visiting in July and August.",
    "options": [
      "high season",
      "short break",
      "brochure",
      "passport control"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "We visited the ski village in the _____, so the streets were quiet. Our hotel room cost less than half the winter price.",
    "options": [
      "high season",
      "off-season",
      "brochure",
      "passport control"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Some travelers prefer _____ trips to popular cities. They enjoy shorter lines at museums and lower prices at hotels.",
    "options": [
      "passport control",
      "brochure",
      "off-season",
      "holiday destination"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "During the _____, many shops in the mountain town close early. Visitors should check opening hours before planning their meals.",
    "options": [
      "package tour",
      "holiday resort",
      "passport control",
      "off-season"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Busy professionals often take a _____ of two or three nights instead of one long vacation. Weekend trips to hot springs are especially popular.",
    "options": [
      "short break",
      "passport control",
      "low season",
      "brochure"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "After the stressful product launch, the manager suggested a _____ at a mountain lodge. The team returned to work on Monday feeling refreshed.",
    "options": [
      "passport control",
      "short break",
      "brochure",
      "high season"
    ],
    "answer": 1,
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "all-in package": {
    "pos": "n.phr.",
    "en_def": "a holiday deal whose price includes travel, hotel, meals and drinks",
    "cn_def": "全包式套裝行程"
  },
  "package holiday": {
    "pos": "n.phr.",
    "en_def": "a holiday where flights and hotel are sold together at one price",
    "cn_def": "套裝度假行程"
  },
  "brochure": {
    "pos": "n.",
    "en_def": "a small printed book with pictures and information about a product or trip",
    "cn_def": "宣傳手冊；小冊子"
  },
  "holiday destination": {
    "pos": "n.phr.",
    "en_def": "a place where people go for a holiday",
    "cn_def": "度假地點；度假勝地"
  },
  "holiday resort": {
    "pos": "n.phr.",
    "en_def": "a large place with hotels, pools and activities where people go on holiday",
    "cn_def": "度假村"
  },
  "passport control": {
    "pos": "n.phr.",
    "en_def": "the place at an airport or border where officers check passports",
    "cn_def": "護照查驗處；證照查驗"
  },
  "package tour": {
    "pos": "n.phr.",
    "en_def": "an organized trip with a guide where travel, hotels and meals are arranged",
    "cn_def": "套裝旅遊；跟團旅遊"
  },
  "low season": {
    "pos": "n.phr.",
    "en_def": "the time of year when few people travel and prices are lower",
    "cn_def": "淡季"
  },
  "high season": {
    "pos": "n.phr.",
    "en_def": "the busiest time of year for travel, when prices are highest",
    "cn_def": "旺季"
  },
  "off-season": {
    "pos": "n.",
    "en_def": "the quiet period of the year when a place has few visitors",
    "cn_def": "淡季；非旺季"
  },
  "short break": {
    "pos": "n.phr.",
    "en_def": "a holiday of only a few days",
    "cn_def": "短期度假；短暫休假"
  }
};

const EXTRA_GLOSSES = {};
