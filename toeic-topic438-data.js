// Topic 438 Quiz Data: Waters 水域
// Source word list: https://www.examword.com/group-topic/waters — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T438 - Waters 水域",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "ocean",
    "pos": "n.",
    "cn_def": "海洋",
    "en_def": "a very large area of salt water",
    "sentence": "A: Why did the shipping company decide to send the new machines by plane instead of by cargo ship this month? B: Because a big storm is moving across the {{BLANK}} between Asia and America, so ships may be delayed for two weeks, and our customer needs the machines before the factory opens.",
    "cn": "A：為什麼貨運公司這個月決定用飛機而不是貨輪運送新機器？ B：因為一場大風暴正在橫越亞洲和美洲之間的【海洋】，船隻可能會延誤兩週，而我們的客戶需要在工廠開幕前拿到機器。"
  },
  {
    "word": "sea",
    "pos": "n.",
    "cn_def": "海；海洋",
    "en_def": "the salt water that covers much of the earth",
    "sentence": "A: Would you like a room facing the parking lot or one with a view of the {{BLANK}} for your business trip next week? B: I'd prefer the one with the water view, even if it costs a little more, because I want to relax on the balcony after long meetings with our clients.",
    "cn": "A：下週出差，您想要面向停車場的房間，還是可以看見【海】景的房間？ B：即使貴一點，我也比較想要能看到水景的房間，因為我想在和客戶開完長時間的會議後，在陽台上放鬆一下。"
  },
  {
    "word": "river",
    "pos": "n.",
    "cn_def": "河；河流",
    "en_def": "a long, natural flow of water across land",
    "sentence": "A: Where is the company planning to hold the summer staff party this year, and will there be enough space for everyone's families? B: The manager booked a large park next to the {{BLANK}}, so we can have a picnic on the grass, rent small boats, and watch the fireworks over the water at night.",
    "cn": "A：公司今年打算在哪裡舉辦夏季員工派對？有足夠的空間容納大家的家人嗎？ B：經理預訂了【河】邊的一座大公園，所以我們可以在草地上野餐、租小船，晚上還能看水面上的煙火。"
  },
  {
    "word": "lake",
    "pos": "n.",
    "cn_def": "湖；湖泊",
    "en_def": "a large area of water with land all around it",
    "sentence": "A: Have you decided where to take the new employees for the team-building weekend in October? B: Yes, we reserved a quiet hotel beside a mountain {{BLANK}} about two hours from the city, where they can go hiking in the morning and try canoeing together in the afternoon.",
    "cn": "A：你決定十月的團隊建立週末要帶新員工去哪裡了嗎？ B：決定了，我們預訂了一間位於山中【湖泊】旁的安靜飯店，離市區約兩小時，他們早上可以健行，下午可以一起嘗試划獨木舟。"
  },
  {
    "word": "stream",
    "pos": "n.",
    "cn_def": "小溪；溪流",
    "en_def": "a small, narrow river",
    "sentence": "A: Why does the brochure for the new resort say that guests should bring waterproof shoes for the walking tour? B: The tour guide leads visitors through the forest, and at one point everyone has to step across a small {{BLANK}} on wet rocks, so ordinary shoes can get soaked very quickly.",
    "cn": "A：為什麼新度假村的宣傳手冊說，參加步行導覽的客人要帶防水鞋？ B：導遊會帶遊客穿過森林，途中大家必須踩著濕滑的石頭跨過一條小【溪】，所以普通的鞋子很快就會濕透。"
  },
  {
    "word": "pond",
    "pos": "n.",
    "cn_def": "池塘",
    "en_def": "a small area of still water",
    "sentence": "A: What changes is the property manager making to the garden in front of our office building this spring? B: He's adding more benches and building a small {{BLANK}} with fish in the middle, so employees can enjoy a peaceful place to eat lunch when the weather is nice.",
    "cn": "A：物業經理今年春天要對我們辦公大樓前的花園做哪些改變？ B：他要增加更多長椅，並在中間建一個養魚的小【池塘】，讓員工在天氣好時有個安靜的地方吃午餐。"
  },
  {
    "word": "wave",
    "pos": "n.",
    "cn_def": "波浪；海浪",
    "en_def": "a line of raised water moving across the sea",
    "sentence": "A: Why was the ferry to the island canceled this afternoon when the sky looks so bright and sunny? B: The weather is fine here, but strong winds farther out are pushing each {{BLANK}} up to three meters high, so the captain decided it was too dangerous for passengers.",
    "cn": "A：為什麼今天下午往島上的渡輪取消了？天空看起來這麼晴朗。 B：這裡天氣很好，但外海的強風把每道【浪】推高到三公尺，所以船長認為對乘客來說太危險了。"
  },
  {
    "word": "current",
    "pos": "n.",
    "cn_def": "水流；洋流",
    "en_def": "water that moves strongly in one direction",
    "sentence": "A: Is it safe for our tour group to swim at this beach, or should I tell them to stay near the hotel pool? B: Please keep them in the pool, because the {{BLANK}} here is very strong in the afternoon and can pull even good swimmers away from the beach quickly.",
    "cn": "A：我們的旅行團在這片海灘游泳安全嗎？還是我該叫他們待在飯店游泳池附近？ B：請讓他們待在泳池，因為這裡下午的【水流】非常強，即使是游泳好手也可能很快被沖離海灘。"
  },
  {
    "word": "tide",
    "pos": "n.",
    "cn_def": "潮汐；潮水",
    "en_def": "the regular rise and fall of the sea",
    "sentence": "A: What time should we start the photo shoot for the new swimwear catalog on the beach tomorrow? B: Let's begin at seven, because the {{BLANK}} will be low then, so there will be a wide area of smooth sand, and the morning light is softer for the models' photos.",
    "cn": "A：明天在海灘拍攝新泳裝目錄，我們應該幾點開始？ B：七點開始吧，因為那時是低【潮】，會有一大片平滑的沙灘，而且早晨的光線比較柔和，適合拍模特兒的照片。"
  },
  {
    "word": "shore",
    "pos": "n.",
    "cn_def": "岸；岸邊",
    "en_def": "the land along the edge of a sea or lake",
    "sentence": "A: How far will the guests have to walk from the boat to the restaurant after the evening cruise? B: Not far at all, because the boat stops at a small dock on the {{BLANK}}, and the restaurant is only about one hundred meters away along a lighted path.",
    "cn": "A：晚間遊船結束後，客人要從船上走多遠才能到餐廳？ B：一點都不遠，因為船會停在【岸】邊的小碼頭，餐廳沿著有燈光的小路只有大約一百公尺遠。"
  },
  {
    "word": "coast",
    "pos": "n.",
    "cn_def": "海岸；沿海地區",
    "en_def": "the land next to the sea",
    "sentence": "A: Why is our company opening its new distribution center in that small town instead of in the capital? B: The town is right on the {{BLANK}} near a busy port, so goods from overseas can arrive by ship and reach our stores within a single day.",
    "cn": "A：為什麼我們公司要在那個小鎮而不是首都開設新的物流中心？ B：那個小鎮就位於【海岸】邊，靠近一個繁忙的港口，所以海外的貨物可以用船運抵，並在一天之內送到我們的門市。"
  },
  {
    "word": "beach",
    "pos": "n.",
    "cn_def": "海灘；沙灘",
    "en_def": "an area of sand or stones next to the sea",
    "sentence": "A: What activities have you planned for the clients on the second day of the conference in Kenting? B: In the morning they'll visit a local factory, and in the afternoon we'll take them to the {{BLANK}} for volleyball, fresh seafood, and a relaxing walk on the sand at sunset.",
    "cn": "A：在墾丁的會議第二天，你為客戶安排了哪些活動？ B：早上他們會參觀當地的工廠，下午我們會帶他們去【海灘】打排球、吃新鮮海鮮，並在日落時於沙灘上悠閒散步。"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "cn_def": "港口；港灣",
    "en_def": "a safe area of water where ships can stay",
    "sentence": "A: Where should I meet the visiting buyers when their cruise ship arrives on Saturday morning? B: Please wait at the main gate of the {{BLANK}} with a sign showing our company name, and then drive them to the hotel so they can rest before lunch.",
    "cn": "A：參訪的買家週六早上搭郵輪抵達時，我應該在哪裡跟他們會合？ B：請拿著寫有我們公司名稱的牌子在【港口】大門口等，然後開車送他們到飯店，讓他們在午餐前休息一下。"
  },
  {
    "word": "port",
    "pos": "n.",
    "cn_def": "港口；港市",
    "en_def": "a town or place where ships load and unload goods",
    "sentence": "A: Why haven't the containers of furniture from Vietnam reached our warehouse yet? B: The ship arrived on time, but workers at the {{BLANK}} are checking every container carefully because of new customs rules, so we probably won't receive the furniture until Thursday.",
    "cn": "A：為什麼從越南來的那幾貨櫃家具還沒到我們的倉庫？ B：船準時抵達了，但因為新的海關規定，【港口】的工作人員正在仔細檢查每個貨櫃，所以我們可能要到星期四才能收到家具。"
  },
  {
    "word": "boat",
    "pos": "n.",
    "cn_def": "船；小船",
    "en_def": "a small vehicle that travels on water",
    "sentence": "A: How are the hotel guests going to reach the small island where the wedding dinner will take place? B: The hotel has hired a private {{BLANK}} that can carry about twenty people at a time, so it will make three trips across the bay between five and six o'clock.",
    "cn": "A：飯店客人要怎麼前往舉辦婚宴晚餐的小島？ B：飯店租了一艘私人【船】，一次可以載大約二十人，所以五點到六點之間會在海灣來回三趟。"
  },
  {
    "word": "ship",
    "pos": "n.",
    "cn_def": "船；輪船",
    "en_def": "a large boat that carries people or goods",
    "sentence": "A: Should we send the heavy machine parts to our customer in Australia by air or by sea? B: Sending them by {{BLANK}} is much cheaper for such heavy items, and since the customer doesn't need them until next month, we have enough time for the slower delivery.",
    "cn": "A：我們應該用空運還是海運把那些重型機械零件寄給澳洲的客戶？ B：這麼重的貨物用【船】運便宜得多，而且客戶下個月才需要，所以我們有足夠的時間採用較慢的運送方式。"
  },
  {
    "word": "sail",
    "pos": "v.",
    "cn_def": "航行",
    "en_def": "to travel across water in a ship or boat",
    "sentence": "A: Is the cruise company still planning to change the route of its summer trips because of fuel costs? B: Yes, starting in June, the ships will {{BLANK}} from Keelung to Okinawa and back in five days, which is shorter than before but still includes two full days on the island.",
    "cn": "A：郵輪公司還是打算因為燃料成本而改變夏季航線嗎？ B：是的，從六月起，船隻將從基隆【航行】到沖繩再回來，全程五天，比以前短，但仍然包含在島上整整兩天。"
  },
  {
    "word": "swim",
    "pos": "v.",
    "cn_def": "游泳",
    "en_def": "to move through water using your arms and legs",
    "sentence": "A: Does the hotel you booked for the sales conference have a fitness center for the staff? B: It has a small gym and an indoor pool, so anyone who likes to {{BLANK}} before breakfast can exercise there from six in the morning until ten at night.",
    "cn": "A：你為業務會議預訂的飯店有提供員工使用的健身中心嗎？ B：有一間小健身房和一座室內游泳池，所以喜歡在早餐前【游泳】的人，可以從早上六點到晚上十點在那裡運動。"
  },
  {
    "word": "dive",
    "pos": "v.",
    "cn_def": "潛水；跳水",
    "en_def": "to go under water, often with special equipment",
    "sentence": "A: Why did the travel agency ask the tourists to show their training certificates before the trip? B: Because the tour includes a day when guests will {{BLANK}} near a coral reef about fifteen meters below the surface, and only people with proper training are allowed to join.",
    "cn": "A：為什麼旅行社要求遊客在出發前出示訓練證書？ B：因為行程中有一天客人會在水面下約十五公尺的珊瑚礁附近【潛水】，只有受過正規訓練的人才能參加。"
  },
  {
    "word": "float",
    "pos": "v.",
    "cn_def": "漂浮",
    "en_def": "to stay on top of water without sinking",
    "sentence": "A: Why did the event planner order so many small paper lanterns for the festival at the lake? B: After the opening speech, visitors will light the lanterns and let them {{BLANK}} on the water, which creates a beautiful scene for photos and has become a popular local tradition.",
    "cn": "A：為什麼活動企劃要為湖邊的節慶訂這麼多小紙燈籠？ B：開幕致詞之後，遊客會點亮燈籠，讓它們在水面上【漂浮】，這會形成很美的拍照畫面，也已經成為當地很受歡迎的傳統。"
  },
  {
    "word": "sink",
    "pos": "v.",
    "cn_def": "下沉；沉沒",
    "en_def": "to go down below the surface of water",
    "sentence": "A: Why did the dock manager tell the workers not to put any more boxes on that old wooden boat? B: The boat is already carrying too much weight, and if they keep adding heavy cargo, it could take in water and {{BLANK}} before it even leaves the harbor.",
    "cn": "A：為什麼碼頭經理叫工人不要再往那艘舊木船上放箱子了？ B：那艘船已經載了太多重量，如果他們繼續增加重貨，它可能會進水，甚至還沒離港就【沉沒】。"
  },
  {
    "word": "deep",
    "pos": "adj.",
    "cn_def": "深的",
    "en_def": "going a long way down from the top",
    "sentence": "A: Can children use the hotel pool by themselves, or do their parents need to stay with them? B: Children under twelve must be with an adult, because the water at one end is very {{BLANK}}, about three meters, and the lifeguard only works in the afternoon.",
    "cn": "A：小孩可以自己使用飯店的游泳池嗎？還是家長需要陪同？ B：十二歲以下的兒童必須有大人陪同，因為泳池一端的水非常【深】，大約有三公尺，而且救生員只在下午值班。"
  },
  {
    "word": "shallow",
    "pos": "adj.",
    "cn_def": "淺的",
    "en_def": "not deep; with only a little water",
    "sentence": "A: Which part of the beach should we recommend to families with young children on the resort website? B: We should suggest the north side, because the water there is {{BLANK}} for about fifty meters from the sand, so small kids can play safely while their parents watch.",
    "cn": "A：在度假村網站上，我們應該推薦海灘的哪一區給有小孩的家庭？ B：應該推薦北側，因為那裡從沙灘往外約五十公尺的水都很【淺】，小孩子可以安全地玩，家長也能在一旁看著。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "清澈的",
    "en_def": "clean and easy to see through",
    "sentence": "A: Why do so many tourists choose that island for snorkeling trips, even though the hotels there are expensive? B: The water around the island is so {{BLANK}} that you can see colorful fish and rocks on the bottom from the boat, which makes the experience worth the extra cost.",
    "cn": "A：為什麼那麼多遊客選擇去那座島浮潛，即使那裡的飯店很貴？ B：島周圍的海水非常【清澈】，從船上就能看到彩色的魚和海底的岩石，這讓這趟體驗值得多花錢。"
  },
  {
    "word": "dirty",
    "pos": "adj.",
    "cn_def": "髒的；骯髒的",
    "en_def": "not clean",
    "sentence": "A: Why did the city council close the river beach to swimmers last weekend? B: After the heavy rain, a lot of mud and trash flowed into the water from nearby farms, so it became too {{BLANK}} for people to swim safely until tests show it is clean again.",
    "cn": "A：為什麼市議會上週末禁止民眾在河濱沙灘游泳？ B：大雨過後，附近農場的大量泥巴和垃圾流進水裡，所以水變得太【髒】，在檢測顯示恢復乾淨之前，民眾無法安全游泳。"
  },
  {
    "word": "fresh",
    "pos": "adj.",
    "cn_def": "淡的（水）；新鮮的",
    "en_def": "(of water) not salty",
    "sentence": "A: Why does the restaurant on the mountain serve fish from the lake instead of seafood from the coast? B: The chef prefers fish that live in {{BLANK}} water because they taste lighter, and since the local lake is only ten minutes away, he can buy them every morning at a low price.",
    "cn": "A：為什麼山上的餐廳供應湖裡的魚，而不是沿海的海鮮？ B：主廚比較喜歡生活在【淡】水中的魚，因為口味比較清淡，而且當地的湖只要十分鐘路程，他每天早上都能以低價買到。"
  },
  {
    "word": "salt",
    "pos": "n.",
    "cn_def": "鹽",
    "en_def": "a white substance found in sea water",
    "sentence": "A: Why does the factory near the beach need special machines to clean the water before using it? B: Sea water contains a lot of {{BLANK}}, which can damage the metal parts of the machines over time, so the factory has to remove it before the water goes into the cooling system.",
    "cn": "A：為什麼海邊的工廠在使用水之前需要用特殊機器淨化？ B：海水含有大量的【鹽】，時間久了會損壞機器的金屬零件，所以工廠必須在水進入冷卻系統前把它去除。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "平靜的",
    "en_def": "(of water) still, without big waves",
    "sentence": "A: Do you think the boat tour to the island will still leave on time this morning? B: Yes, the strong wind stopped last night, and the water in the bay is very {{BLANK}} now, so the captain says the trip should be smooth and comfortable for everyone.",
    "cn": "A：你覺得今天早上去島上的遊船還會準時出發嗎？ B：會，強風昨晚已經停了，現在海灣的水面非常【平靜】，所以船長說這趟航程對大家來說應該會很平穩舒適。"
  },
  {
    "word": "rough",
    "pos": "adj.",
    "cn_def": "波濤洶湧的",
    "en_def": "(of water) with big waves because of wind",
    "sentence": "A: Why did several passengers feel sick on the ferry back from the island yesterday afternoon? B: A storm was coming, so the sea became very {{BLANK}}, and the ferry moved up and down so much that many people had to sit outside to get some fresh air.",
    "cn": "A：為什麼昨天下午從島上回來的渡輪上，有好幾位乘客覺得不舒服？ B：暴風雨快要來了，所以海面變得非常【洶湧】，渡輪上下搖晃得很厲害，許多人只好坐到外面透透氣。"
  },
  {
    "word": "flow",
    "pos": "v.",
    "cn_def": "流動；流",
    "en_def": "(of water) to move along steadily",
    "sentence": "A: Why is the city building a new wall along the river near the shopping district? B: During heavy summer storms, the water can rise quickly and {{BLANK}} into the streets and shops, so the wall will protect businesses and save the city a lot of repair money.",
    "cn": "A：為什麼市政府要在購物區附近的河邊蓋一道新牆？ B：夏季豪雨期間，河水可能迅速上漲並【流】進街道和商店，所以這道牆可以保護商家，也能替市政府省下大筆修繕費用。"
  },
  {
    "word": "cross",
    "pos": "v.",
    "cn_def": "橫越；渡過",
    "en_def": "to go from one side to the other",
    "sentence": "A: How long does it take the ferry to {{BLANK}} the bay from the airport to the convention center? B: It usually takes about twenty minutes, which is much faster than driving around the bay in heavy traffic, so I'd recommend it to all the visitors attending the trade fair.",
    "cn": "A：渡輪從機場【橫渡】海灣到會議中心要多久？ B：通常大約二十分鐘，比在塞車中開車繞過海灣快多了，所以我會推薦所有參加商展的訪客搭乘。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: What will the guests do on the free afternoon of the company trip to Penghu? B: They can rent bicycles or kayaks and {{BLANK}} the small islands and quiet beaches nearby, and our tour guide will give everyone a map with the best spots for photos.",
    "cn": "A：公司澎湖旅遊的自由活動下午，客人要做什麼？ B：他們可以租腳踏車或獨木舟，去【探索】附近的小島和寧靜的海灘，我們的導遊會發給每個人一張標有最佳拍照地點的地圖。"
  },
  {
    "word": "protect",
    "pos": "v.",
    "cn_def": "保護",
    "en_def": "to keep something safe from harm",
    "sentence": "A: Why has the hotel stopped giving guests plastic water bottles and small plastic bags? B: The owners want to help {{BLANK}} the ocean near the resort, because plastic trash often ends up in the water and harms the fish and birds that attract tourists here.",
    "cn": "A：為什麼飯店不再提供客人塑膠水瓶和小塑膠袋？ B：業主想幫忙【保護】度假村附近的海洋，因為塑膠垃圾經常流入海中，傷害吸引遊客來這裡的魚類和鳥類。"
  }
];

const MCQS = [
  {
    "q": "The new cable connecting Taiwan and Japan runs along the floor of the _____. Engineers needed special ships to lay it.",
    "options": [
      "ocean",
      "pond",
      "stream",
      "harbor"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our hotel rooms on the top floor offer a wonderful _____ view. Guests can watch the sunrise over the water from their beds.",
    "options": [
      "current",
      "tide",
      "sea",
      "salt"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The factory was built on the bank of the _____ many years ago. Barges carried its products downstream to the city port.",
    "options": [
      "beach",
      "river",
      "coast",
      "pond"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Visitors can rent rowboats and paddle around the _____ in the park. The water is calm and surrounded by tall trees.",
    "options": [
      "coast",
      "tide",
      "current",
      "lake"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "A small mountain _____ runs behind the cabin we rented for the retreat. Guests enjoyed listening to the water at night.",
    "options": [
      "ocean",
      "harbor",
      "stream",
      "port"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The gardener added goldfish to the _____ beside the office entrance. Employees often stop to feed them during their breaks.",
    "options": [
      "pond",
      "ocean",
      "coast",
      "tide"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Surfers came to the beach early because each _____ was over two meters high. The competition was scheduled to begin at noon.",
    "options": [
      "pond",
      "harbor",
      "lake",
      "wave"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Swimmers are warned that the _____ near the rocks is extremely strong. It can quickly pull people away from the shore.",
    "options": [
      "pond",
      "current",
      "salt",
      "lake"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The fishing boats can only leave the bay at high _____. At other times, the water is too low for them.",
    "options": [
      "tide",
      "shore",
      "coast",
      "beach"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "After the long boat tour, the passengers were happy to step back onto the _____. Many of them had felt seasick.",
    "options": [
      "ocean",
      "current",
      "shore",
      "wave"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The company is building a new resort along the east _____ of the island. It will open with three hundred rooms next spring.",
    "options": [
      "pond",
      "coast",
      "stream",
      "tide"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The conference ends at noon on Friday. Afterward, attendees can relax on the sandy _____ right behind the hotel.",
    "options": [
      "current",
      "tide",
      "wave",
      "beach"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The cargo ship will arrive at the _____ of Kaohsiung on Monday. Our containers should be unloaded by Tuesday afternoon.",
    "options": [
      "pond",
      "stream",
      "port",
      "lake"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "We rented a small fishing _____ for the afternoon. The captain took our team to a quiet spot far from the crowds.",
    "options": [
      "boat",
      "tide",
      "current",
      "shore"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The cruise _____ has more than two thousand cabins. It also offers restaurants, theaters, and a large swimming pool on the top deck.",
    "options": [
      "pond",
      "wave",
      "current",
      "ship"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Our cruise will _____ from Keelung at eight o'clock tomorrow morning. Passengers must board at least one hour before departure.",
    "options": [
      "sink",
      "sail",
      "float",
      "dive"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The resort offers lessons for guests who cannot _____. Instructors teach small groups in the shallow end of the pool.",
    "options": [
      "swim",
      "explore",
      "flow",
      "protect"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Only trained guests may _____ down to the old wreck at the bottom of the bay. It lies thirty meters below the surface.",
    "options": [
      "sail",
      "float",
      "dive",
      "flow"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Life jackets help passengers _____ on the water if there is an emergency. Every seat on the ferry has one underneath it.",
    "options": [
      "sink",
      "float",
      "dive",
      "explore"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The old cargo ship began to _____ after hitting the rocks. Fortunately, a nearby boat rescued all of the crew.",
    "options": [
      "float",
      "sail",
      "protect",
      "sink"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The diving school uses a special pool that is ten meters _____. Students practice there before their first trip to the ocean.",
    "options": [
      "calm",
      "dirty",
      "deep",
      "rough"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Young children should stay in the _____ part of the pool. The water there only reaches their waists.",
    "options": [
      "shallow",
      "rough",
      "dirty",
      "fresh"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The water around the island is so _____ that divers can see twenty meters down. It is a top snorkeling spot in Asia.",
    "options": [
      "rough",
      "dirty",
      "shallow",
      "clear"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "After the factory leaked chemicals, the river became too _____ for swimming. The city has promised to clean it by summer.",
    "options": [
      "calm",
      "dirty",
      "clear",
      "fresh"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Sea water contains too much _____ for drinking. The new plant will remove it and supply clean water to the town.",
    "options": [
      "salt",
      "tide",
      "wave",
      "current"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The storm passed during the night, and the sea was _____ by morning. The ferry left on schedule with every seat full.",
    "options": [
      "rough",
      "dirty",
      "calm",
      "shallow"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The ferry was canceled because the sea was too _____ for small boats. Strong winds are expected to continue until Thursday.",
    "options": [
      "calm",
      "rough",
      "clear",
      "shallow"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Heavy rain caused the river to _____ over its banks. Several shops near the bridge were damaged by the water.",
    "options": [
      "sail",
      "explore",
      "dive",
      "flow"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Guests with free time can rent kayaks and _____ the caves along the coast. A guide will explain the history of each area.",
    "options": [
      "sink",
      "flow",
      "explore",
      "float"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The new law will _____ the coral reefs from fishing boats. Anyone who damages the reefs will pay a large fine.",
    "options": [
      "protect",
      "explore",
      "sink",
      "cross"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "ocean": {
    "pos": "n.",
    "en_def": "a very large area of salt water",
    "cn_def": "海洋"
  },
  "sea": {
    "pos": "n.",
    "en_def": "the salt water that covers much of the earth",
    "cn_def": "海；海洋"
  },
  "river": {
    "pos": "n.",
    "en_def": "a long, natural flow of water across land",
    "cn_def": "河；河流"
  },
  "lake": {
    "pos": "n.",
    "en_def": "a large area of water with land all around it",
    "cn_def": "湖；湖泊"
  },
  "stream": {
    "pos": "n.",
    "en_def": "a small, narrow river",
    "cn_def": "小溪；溪流"
  },
  "pond": {
    "pos": "n.",
    "en_def": "a small area of still water",
    "cn_def": "池塘"
  },
  "wave": {
    "pos": "n.",
    "en_def": "a line of raised water moving across the sea",
    "cn_def": "波浪；海浪"
  },
  "current": {
    "pos": "n.",
    "en_def": "water that moves strongly in one direction",
    "cn_def": "水流；洋流"
  },
  "tide": {
    "pos": "n.",
    "en_def": "the regular rise and fall of the sea",
    "cn_def": "潮汐；潮水"
  },
  "shore": {
    "pos": "n.",
    "en_def": "the land along the edge of a sea or lake",
    "cn_def": "岸；岸邊"
  },
  "coast": {
    "pos": "n.",
    "en_def": "the land next to the sea",
    "cn_def": "海岸；沿海地區"
  },
  "beach": {
    "pos": "n.",
    "en_def": "an area of sand or stones next to the sea",
    "cn_def": "海灘；沙灘"
  },
  "harbor": {
    "pos": "n.",
    "en_def": "a safe area of water where ships can stay",
    "cn_def": "港口；港灣"
  },
  "port": {
    "pos": "n.",
    "en_def": "a town or place where ships load and unload goods",
    "cn_def": "港口；港市"
  },
  "boat": {
    "pos": "n.",
    "en_def": "a small vehicle that travels on water",
    "cn_def": "船；小船"
  },
  "ship": {
    "pos": "n.",
    "en_def": "a large boat that carries people or goods",
    "cn_def": "船；輪船"
  },
  "sail": {
    "pos": "v.",
    "en_def": "to travel across water in a ship or boat",
    "cn_def": "航行"
  },
  "swim": {
    "pos": "v.",
    "en_def": "to move through water using your arms and legs",
    "cn_def": "游泳"
  },
  "dive": {
    "pos": "v.",
    "en_def": "to go under water, often with special equipment",
    "cn_def": "潛水；跳水"
  },
  "float": {
    "pos": "v.",
    "en_def": "to stay on top of water without sinking",
    "cn_def": "漂浮"
  },
  "sink": {
    "pos": "v.",
    "en_def": "to go down below the surface of water",
    "cn_def": "下沉；沉沒"
  },
  "deep": {
    "pos": "adj.",
    "en_def": "going a long way down from the top",
    "cn_def": "深的"
  },
  "shallow": {
    "pos": "adj.",
    "en_def": "not deep; with only a little water",
    "cn_def": "淺的"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "clean and easy to see through",
    "cn_def": "清澈的"
  },
  "dirty": {
    "pos": "adj.",
    "en_def": "not clean",
    "cn_def": "髒的；骯髒的"
  },
  "fresh": {
    "pos": "adj.",
    "en_def": "(of water) not salty",
    "cn_def": "淡的（水）；新鮮的"
  },
  "salt": {
    "pos": "n.",
    "en_def": "a white substance found in sea water",
    "cn_def": "鹽"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "(of water) still, without big waves",
    "cn_def": "平靜的"
  },
  "rough": {
    "pos": "adj.",
    "en_def": "(of water) with big waves because of wind",
    "cn_def": "波濤洶湧的"
  },
  "flow": {
    "pos": "v.",
    "en_def": "(of water) to move along steadily",
    "cn_def": "流動；流"
  },
  "cross": {
    "pos": "v.",
    "en_def": "to go from one side to the other",
    "cn_def": "橫越；渡過"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探險"
  },
  "protect": {
    "pos": "v.",
    "en_def": "to keep something safe from harm",
    "cn_def": "保護"
  }
};

const EXTRA_GLOSSES = {};
