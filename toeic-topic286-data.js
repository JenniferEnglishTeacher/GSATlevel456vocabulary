// Topic 286 Quiz Data: Place 地點
// Source word list: https://www.examword.com/group-topic/place — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T286 - Place 地點",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "location",
    "pos": "n.",
    "cn_def": "位置；地點",
    "en_def": "a place where something is or happens",
    "sentence": "A: Have you decided where we should hold the annual sales conference next spring, since the hotel we used last year has closed for renovation? B: Yes, I found a new {{BLANK}} near the central train station, so most of our guests can arrive easily without renting cars or paying for expensive parking.",
    "cn": "A：既然我們去年使用的飯店因整修而關閉，你決定明年春天的年度業務會議要在哪裡舉辦了嗎？ B：決定了，我在中央火車站附近找到一個新的【地點】，所以大部分的客人都能輕鬆抵達，不必租車或支付昂貴的停車費。"
  },
  {
    "word": "area",
    "pos": "n.",
    "cn_def": "區域；地區",
    "en_def": "a part of a place, city, or building",
    "sentence": "A: Why do you want to move our small design company out of the business district when the rent there is still reasonable? B: Because the {{BLANK}} around our building has become very noisy with construction, and several of our clients have complained that they cannot find a place to park during meetings.",
    "cn": "A：既然商業區的租金仍然合理，為什麼你想把我們的小型設計公司搬出去？ B：因為我們大樓周圍的【區域】因施工變得非常吵雜，而且有好幾位客戶抱怨開會時找不到地方停車。"
  },
  {
    "word": "region",
    "pos": "n.",
    "cn_def": "地區；區域",
    "en_def": "a large part of a country or the world",
    "sentence": "A: Which sales team will be responsible for the new customers in the south now that Mr. Lin has moved to the head office? B: Karen will manage the whole southern {{BLANK}} from next month, and she plans to visit every store there at least once before the busy holiday season begins.",
    "cn": "A：既然林先生已經調到總公司，哪個業務團隊要負責南部的新客戶？ B：從下個月起由凱倫管理整個南部【地區】，她打算在繁忙的假期旺季開始前，至少拜訪那裡的每家店一次。"
  },
  {
    "word": "spot",
    "pos": "n.",
    "cn_def": "地點；場所",
    "en_def": "a particular place",
    "sentence": "A: Do you know a good place where we can take the visiting clients for lunch after the factory tour on Friday afternoon? B: There is a quiet {{BLANK}} by the river that serves fresh local fish, and the owner can prepare a private room for our group if I call him before Thursday.",
    "cn": "A：你知道星期五下午參觀工廠後，有什麼好地方可以帶來訪的客戶去吃午餐嗎？ B：河邊有一個安靜的【地點】供應新鮮的在地魚料理，如果我在星期四前打電話給老闆，他可以為我們這群人準備一間包廂。"
  },
  {
    "word": "site",
    "pos": "n.",
    "cn_def": "地點；工地；場址",
    "en_def": "a place where something is built or happens",
    "sentence": "A: Why are all the engineers wearing helmets and safety boots in the meeting room this morning instead of their usual office clothes? B: They are going to visit the construction {{BLANK}} of our new warehouse right after this meeting, and the safety rules there require everyone to wear protective equipment at all times.",
    "cn": "A：為什麼今天早上所有工程師在會議室裡都戴著安全帽、穿著安全靴，而不是平常的上班服裝？ B：他們開完會後要馬上去參觀我們新倉庫的建築【工地】，那裡的安全規定要求每個人隨時穿戴防護裝備。"
  },
  {
    "word": "destination",
    "pos": "n.",
    "cn_def": "目的地",
    "en_def": "the place where someone is going",
    "sentence": "A: Has the travel agency sent us the final schedule for the company trip, and do we know how long the bus ride will take? B: Yes, the bus will leave the office at seven, and we should reach our {{BLANK}}, a seaside resort in Kenting, by early afternoon if the traffic is not too heavy.",
    "cn": "A：旅行社寄來公司旅遊的最終行程了嗎？我們知道搭巴士要多久嗎？ B：寄來了，巴士七點從公司出發，如果交通不太擁擠，我們應該能在下午早些時候抵達【目的地】——墾丁的一間海邊度假村。"
  },
  {
    "word": "neighborhood",
    "pos": "n.",
    "cn_def": "鄰近地區；社區",
    "en_def": "the area around your home and the people who live there",
    "sentence": "A: Are you happy with the apartment you rented after you were transferred to the Taichung branch last month? B: Very happy, because the {{BLANK}} is safe and friendly, there is a supermarket and a park within walking distance, and my neighbors often invite me to their weekend barbecues.",
    "cn": "A：你上個月調到台中分公司後租的公寓，你還滿意嗎？ B：非常滿意，因為那個【社區】安全又友善，走路就能到超市和公園，而且我的鄰居常常邀請我參加他們的週末烤肉。"
  },
  {
    "word": "downtown",
    "pos": "n.",
    "cn_def": "市中心；商業區",
    "en_def": "the main business center of a city",
    "sentence": "A: Why did the marketing director decide to open the new coffee shop in the heart of {{BLANK}} even though the rent is much higher there? B: She believes that thousands of office workers and shoppers pass through the city center every day, so the extra sales will easily cover the higher monthly rent.",
    "cn": "A：為什麼行銷總監決定把新咖啡店開在【市中心】的核心地段，即使那裡的租金高很多？ B：她相信每天有成千上萬的上班族和購物者經過市中心，所以多出來的營業額很容易就能支付較高的月租。"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區",
    "en_def": "an area where people live outside the center of a city",
    "sentence": "A: How long does it take you to get to work now that your family has moved out of the city into a bigger house? B: We live in a quiet {{BLANK}} about thirty kilometers away, so I spend nearly an hour on the train every morning, but I can read reports or answer emails during the trip.",
    "cn": "A：既然你們家已經搬出市區住進更大的房子，你現在上班要花多久時間？ B：我們住在大約三十公里外一個安靜的【郊區】，所以我每天早上要搭將近一小時的火車，不過我可以在途中看報告或回電子郵件。"
  },
  {
    "word": "countryside",
    "pos": "n.",
    "cn_def": "鄉間；農村",
    "en_def": "land outside towns and cities, with farms and fields",
    "sentence": "A: Where are you planning to take your team for the weekend retreat, now that everyone is tired after finishing the big project? B: I booked a farm stay in the {{BLANK}} outside Hualien, where we can enjoy fresh air, ride bicycles through the rice fields, and relax far away from our busy office.",
    "cn": "A：既然大家完成大案子後都很累，你打算帶團隊去哪裡參加週末的休閒營？ B：我訂了花蓮郊外【鄉間】的農場住宿，我們可以在那裡享受新鮮空氣、騎腳踏車穿越稻田，遠離忙碌的辦公室好好放鬆。"
  },
  {
    "word": "landmark",
    "pos": "n.",
    "cn_def": "地標",
    "en_def": "a famous building or place that is easy to see and recognize",
    "sentence": "A: How can our overseas visitors find the restaurant tonight if they do not speak Chinese and have never been to Taipei before? B: Just tell them to look for Taipei 101, the city's most famous {{BLANK}}, because the restaurant is directly across the street from its main entrance and is very easy to see.",
    "cn": "A：如果我們的海外訪客不會說中文，以前也從沒來過台北，他們今晚要怎麼找到餐廳？ B：只要叫他們找台北101這個城市最有名的【地標】就好，因為餐廳就在它主要入口的正對面，非常容易看到。"
  },
  {
    "word": "attraction",
    "pos": "n.",
    "cn_def": "景點；吸引人的事物",
    "en_def": "a place or thing that many people want to visit or see",
    "sentence": "A: What should we include in the free afternoon tour for the international guests attending our trade fair next week? B: The night market is the biggest {{BLANK}} for most foreign visitors, so we could take them there after the museum and let them try some traditional snacks before dinner.",
    "cn": "A：下週參加我們貿易展的國際賓客，免費的下午導覽應該包含哪些行程？ B：對大多數外國遊客來說，夜市是最大的【吸引人的景點】，所以我們可以在參觀博物館後帶他們去那裡，讓他們在晚餐前嚐嚐一些傳統小吃。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the conditions and surroundings in which people live or work",
    "sentence": "A: Why did so many of our engineers choose to stay with the company even though a competitor offered them higher salaries? B: Most of them said they enjoy the friendly working {{BLANK}} here, where managers listen to their ideas, colleagues help each other, and everyone can leave the office on time.",
    "cn": "A：為什麼即使競爭對手提供更高的薪水，我們許多工程師仍選擇留在公司？ B：他們大多說喜歡這裡友善的工作【環境】，主管會傾聽他們的想法，同事互相幫忙，而且每個人都能準時下班。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "氣氛",
    "en_def": "the feeling or mood of a place",
    "sentence": "A: Why do you always choose that small Italian restaurant when you need to meet important clients for dinner? B: The food is excellent, but more importantly, the {{BLANK}} is warm and relaxing, with soft music and comfortable chairs, so our clients feel comfortable talking about business.",
    "cn": "A：為什麼你需要和重要客戶吃晚餐時，總是選那間小義大利餐廳？ B：那裡的食物很棒，但更重要的是【氣氛】溫暖又放鬆，有輕柔的音樂和舒適的椅子，所以我們的客戶會很自在地談生意。"
  },
  {
    "word": "scenery",
    "pos": "n.",
    "cn_def": "風景；景色",
    "en_def": "the natural things you see in a place, like mountains and lakes",
    "sentence": "A: Why did the hotel decide to raise the price of the rooms on the top floor before the summer holiday? B: Those rooms have large windows that look out over the mountains and the lake, and many guests are happy to pay more to enjoy the beautiful {{BLANK}} while they eat breakfast.",
    "cn": "A：為什麼飯店決定在暑假前調漲頂樓房間的價格？ B：那些房間有大窗戶可以眺望群山和湖泊，許多客人很樂意多付錢，好在吃早餐時欣賞美麗的【風景】。"
  },
  {
    "word": "view",
    "pos": "n.",
    "cn_def": "景觀；視野",
    "en_def": "what you can see from a place",
    "sentence": "A: Which meeting room would you like me to book for the board members who are visiting from Japan on Monday? B: Please reserve the one on the twentieth floor, because it has an amazing {{BLANK}} of the harbor, and I think our guests will enjoy watching the ships during the coffee break.",
    "cn": "A：星期一從日本來訪的董事會成員，你希望我預訂哪一間會議室？ B：請預訂二十樓那間，因為那裡有很棒的港口【景觀】，我想我們的客人會喜歡在咖啡休息時間看船。"
  },
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "城市的；都市的",
    "en_def": "relating to a city or town",
    "sentence": "A: Why is the city government building so many new bicycle lanes and bus routes this year? B: Traffic jams have become a serious problem in {{BLANK}} areas, so officials hope that more people will leave their cars at home and choose cheaper, cleaner ways to travel to work.",
    "cn": "A：為什麼市政府今年要建造這麼多新的自行車道和公車路線？ B：塞車在【城市】地區已經成為嚴重的問題，所以官員希望更多人把車留在家裡，選擇更便宜、更乾淨的方式通勤上班。"
  },
  {
    "word": "rural",
    "pos": "adj.",
    "cn_def": "鄉村的",
    "en_def": "relating to the countryside, not the city",
    "sentence": "A: Why is the telephone company spending so much money on new equipment in the mountains this year? B: Many families in {{BLANK}} villages still cannot get fast internet, so the company is building new towers to help farmers and small business owners sell their products online.",
    "cn": "A：為什麼電信公司今年要在山區花這麼多錢購置新設備？ B：許多【鄉村】的家庭仍然無法使用高速網路，所以公司正在建造新的基地台，協助農民和小商家在網路上販售產品。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of too many people",
    "sentence": "A: Should we take the subway to the exhibition center, or would it be better to call a taxi from the hotel? B: The trains are usually very {{BLANK}} during rush hour, and we will be carrying heavy boxes of samples, so I think a taxi will be faster and much more comfortable.",
    "cn": "A：我們應該搭捷運去展覽中心，還是從飯店叫計程車比較好？ B：尖峰時段列車通常非常【擁擠】，而且我們會帶著幾箱很重的樣品，所以我覺得搭計程車會更快，也舒服得多。"
  },
  {
    "word": "remote",
    "pos": "adj.",
    "cn_def": "偏遠的",
    "en_def": "far away from towns and other people",
    "sentence": "A: Why does it take so long for our deliveries to reach the customers living on the east coast islands? B: Those islands are quite {{BLANK}}, and the ferries only run twice a week, so packages often wait several days at the port before they can be shipped across the sea.",
    "cn": "A：為什麼我們的貨送到住在東岸離島的客戶那裡要花這麼久時間？ B：那些島嶼相當【偏遠】，渡輪一週只開兩班，所以包裹常常要在港口等好幾天才能運過海。"
  },
  {
    "word": "historic",
    "pos": "adj.",
    "cn_def": "有歷史意義的；歷史悠久的",
    "en_def": "important in history or very old and famous",
    "sentence": "A: Why are tourists always taking pictures in front of the old red building next to our office? B: It is a {{BLANK}} train station built more than a hundred years ago, and the city has turned it into a museum where visitors can learn how people traveled in the past.",
    "cn": "A：為什麼觀光客總是在我們辦公室旁邊那棟紅色老建築前拍照？ B：那是一座一百多年前建造、【具有歷史意義的】火車站，市政府已把它改建成博物館，讓遊客可以了解過去人們如何旅行。"
  },
  {
    "word": "modern",
    "pos": "adj.",
    "cn_def": "現代的；現代化的",
    "en_def": "new and using the latest ideas or technology",
    "sentence": "A: What do you think of the new head office that the company moved into last month? B: I really like it, because it is a {{BLANK}} building with smart lighting, fast elevators, and video equipment in every meeting room, so we no longer waste time fixing old machines.",
    "cn": "A：你覺得公司上個月搬進去的新總部怎麼樣？ B：我真的很喜歡，因為那是一棟【現代化的】建築，有智慧照明、快速電梯，每間會議室都有視訊設備，所以我們不再浪費時間修理舊機器。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "having a lot of space inside",
    "sentence": "A: Is the new training room large enough for the forty employees who will attend the safety workshop next week? B: Yes, it is very {{BLANK}}, with enough room for all the tables and chairs, a large screen at the front, and an area at the back for coffee and snacks.",
    "cn": "A：新的訓練教室夠大，能容納下週要參加安全研習的四十名員工嗎？ B：可以，它非常【寬敞】，有足夠的空間擺放所有桌椅，前面有一個大螢幕，後面還有一區放咖啡和點心。"
  },
  {
    "word": "cozy",
    "pos": "adj.",
    "cn_def": "舒適溫馨的",
    "en_def": "small, warm, and comfortable",
    "sentence": "A: Where would you like to hold the small farewell party for Linda, who is retiring after thirty years with the company? B: Let's book the {{BLANK}} little café on the corner, because it has soft sofas and warm lights, and Linda always says it feels just like her own living room.",
    "cn": "A：琳達在公司服務三十年後即將退休，你想在哪裡為她辦小型歡送會？ B：我們預訂轉角那間【舒適溫馨的】小咖啡館吧，因為那裡有柔軟的沙發和溫暖的燈光，琳達總是說那裡感覺就像她自己的客廳。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "可到達的；方便進入的",
    "en_def": "easy to reach, enter, or use",
    "sentence": "A: Why did the conference organizers choose the convention center by the airport instead of the hotel in the mountains? B: The convention center is easily {{BLANK}} by train, bus, and car, and it also has ramps and elevators, so guests who use wheelchairs can move around without any problems.",
    "cn": "A：為什麼會議主辦單位選擇機場旁的會議中心，而不是山上的飯店？ B：搭火車、公車和開車都能輕鬆【到達】會議中心，而且那裡也有坡道和電梯，所以使用輪椅的賓客可以毫無困難地四處移動。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的；便利的",
    "en_def": "easy to use or suitable for your plans",
    "sentence": "A: Why have you started buying your lunch at the new store across the street instead of the cafeteria downstairs? B: The store is open twenty-four hours and accepts mobile payments, so it is much more {{BLANK}} when I have to work late or only have ten minutes between meetings.",
    "cn": "A：為什麼你開始在對面那家新店買午餐，而不是樓下的員工餐廳？ B：那家店二十四小時營業，還接受行動支付，所以當我必須加班或在會議之間只有十分鐘時，那裡【方便】多了。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的",
    "en_def": "liked by many people",
    "sentence": "A: Why do we need to book the restaurant for the year-end party so early, when the event is still three months away? B: That restaurant is extremely {{BLANK}} with local companies in December, and last year many teams who waited until November could not get a table at all.",
    "cn": "A：尾牙還有三個月才舉行，為什麼我們這麼早就要訂餐廳？ B：那家餐廳十二月在當地公司之間非常【受歡迎】，去年許多等到十一月才訂的團隊根本訂不到位子。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "with little or no noise",
    "sentence": "A: Is there a room where I can prepare for my job interview call without being interrupted by the noise in the open office? B: You can use the small {{BLANK}} room on the third floor, because nobody books it on Tuesday mornings and the walls stop most of the sound from the hallway.",
    "cn": "A：有沒有房間可以讓我準備求職面試電話，而不被開放式辦公室的噪音打擾？ B：你可以用三樓那間【安靜的】小房間，因為星期二早上沒有人預約，而且牆壁能擋住走廊大部分的聲音。"
  },
  {
    "word": "lively",
    "pos": "adj.",
    "cn_def": "熱鬧的；充滿活力的",
    "en_def": "full of energy, activity, and fun",
    "sentence": "A: What kind of place should we choose for the welcome dinner for the new interns who start next Monday? B: Let's pick a {{BLANK}} restaurant with music and shared dishes, because the young interns will relax faster and get to know each other in a fun, energetic setting.",
    "cn": "A：下週一開始上班的新實習生迎新晚餐，我們應該選什麼樣的地方？ B：我們挑一間有音樂、可以分享菜餚的【熱鬧】餐廳吧，因為年輕的實習生在有趣、充滿活力的環境中會比較快放鬆並互相認識。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "calm and quiet, without noise or trouble",
    "sentence": "A: Why did the manager of our hotel plant so many trees and build a small pond in the garden last year? B: She wanted to create a {{BLANK}} space where guests could sit, read, and listen to the birds, far away from the noise of the busy road in front of the building.",
    "cn": "A：為什麼我們飯店的經理去年在花園裡種了這麼多樹，還蓋了一個小池塘？ B：她想打造一個【寧靜的】空間，讓客人可以坐著、看書、聽鳥叫，遠離建築物前方繁忙道路的噪音。"
  },
  {
    "word": "beautiful",
    "pos": "adj.",
    "cn_def": "美麗的",
    "en_def": "very nice to look at",
    "sentence": "A: Why did the photographer insist on taking the pictures for our new travel brochure so early in the morning? B: He said the light over the mountains is especially {{BLANK}} at sunrise, and the soft golden colors will make our hotel look warm and attractive to customers.",
    "cn": "A：為什麼攝影師堅持一大早就為我們新的旅遊手冊拍照？ B：他說日出時山上的光線特別【美麗】，柔和的金色會讓我們的飯店看起來溫暖又吸引顧客。"
  },
  {
    "word": "dirty",
    "pos": "adj.",
    "cn_def": "髒的",
    "en_def": "not clean",
    "sentence": "A: Why did the restaurant fail the health inspection last week, even though the food has always been delicious? B: The inspector found that the kitchen floor was very {{BLANK}}, and some of the knives and cutting boards had not been washed properly after they were used for raw meat.",
    "cn": "A：為什麼那家餐廳上週沒通過衛生檢查，雖然它的食物一直都很好吃？ B：檢查員發現廚房地板非常【髒】，而且有些用來處理生肉的刀子和砧板使用後沒有好好清洗。"
  },
  {
    "word": "clean",
    "pos": "adj.",
    "cn_def": "乾淨的",
    "en_def": "free from dirt",
    "sentence": "A: Why did so many guests give the small hotel near the station five stars on the travel website this month? B: Most of them wrote that the rooms were very {{BLANK}} and tidy, the staff was friendly, and the breakfast was fresh, which is more important to them than a big swimming pool.",
    "cn": "A：為什麼這個月有這麼多客人在旅遊網站上給車站附近那家小飯店五顆星？ B：他們大多寫道房間非常【乾淨】整齊、員工很友善、早餐很新鮮，這些對他們來說比大型游泳池更重要。"
  },
  {
    "word": "unique",
    "pos": "adj.",
    "cn_def": "獨特的",
    "en_def": "different from everything else; special",
    "sentence": "A: Why do you think so many visitors choose to stay at that old guesthouse instead of the large international hotels? B: Each room has a {{BLANK}} design created by local artists, so guests feel that they are having a special experience they could never find anywhere else in the city.",
    "cn": "A：你覺得為什麼這麼多遊客選擇住那間老民宿，而不住大型國際飯店？ B：每個房間都有當地藝術家打造的【獨特】設計，所以客人覺得自己正在享受一種在城裡其他地方都找不到的特別體驗。"
  }
];

const MCQS = [
  {
    "q": "The bakery moved to a new _____ next to the train station last month. Since then, its morning sales have nearly doubled.",
    "options": [
      "location",
      "atmosphere",
      "scenery",
      "attraction"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Smoking is not allowed anywhere inside the factory. Workers who wish to smoke must use the designated _____ outside the back door.",
    "options": [
      "scenery",
      "atmosphere",
      "area",
      "view"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our company plans to open five new stores in the Asia-Pacific _____ next year. The sales team there will double in size.",
    "options": [
      "spot",
      "region",
      "view",
      "atmosphere"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please meet the tour group at the usual _____ in front of the hotel lobby. The bus will leave at exactly eight o'clock.",
    "options": [
      "scenery",
      "region",
      "environment",
      "spot"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All visitors to the construction _____ must wear a hard hat. The manager will check everyone's safety equipment at the gate.",
    "options": [
      "scenery",
      "atmosphere",
      "site",
      "suburb"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Bali has become a popular holiday _____ for young Taiwanese travelers. Flights there are often fully booked during the summer.",
    "options": [
      "destination",
      "environment",
      "atmosphere",
      "neighborhood"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The Lin family moved to a safe and friendly _____ with good schools nearby. Their children can now walk to class every morning.",
    "options": [
      "atmosphere",
      "scenery",
      "view",
      "neighborhood"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our main office is located in _____ Taipei, close to several major banks. Clients can easily reach us by subway.",
    "options": [
      "countryside",
      "downtown",
      "scenery",
      "suburb"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Many young families are leaving the busy city for a quieter _____. Houses there are larger and much cheaper than city apartments.",
    "options": [
      "suburb",
      "landmark",
      "view",
      "attraction"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The company retreat will be held on a farm in the _____ outside Hualien. Employees can enjoy fresh air and green rice fields.",
    "options": [
      "landmark",
      "view",
      "countryside",
      "atmosphere"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The old clock tower is the town's most famous _____. Visitors use it to find their way around the city center.",
    "options": [
      "suburb",
      "landmark",
      "environment",
      "region"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new aquarium has quickly become the city's top tourist _____. More than ten thousand people visited it in the first week.",
    "options": [
      "suburb",
      "environment",
      "neighborhood",
      "attraction"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our company tries to create a safe working _____ for every employee. Managers check all the factory equipment every Monday morning.",
    "options": [
      "scenery",
      "landmark",
      "environment",
      "destination"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The restaurant has a relaxed _____ with soft music and candles. It is a perfect place for a quiet business dinner.",
    "options": [
      "atmosphere",
      "region",
      "landmark",
      "site"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The train ride along the east coast offers wonderful mountain _____. Many passengers spend the whole trip taking photographs.",
    "options": [
      "suburb",
      "location",
      "region",
      "scenery"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The manager booked a hotel room with an ocean _____ for the visiting client. The client could watch the sunrise from the bed.",
    "options": [
      "region",
      "view",
      "suburb",
      "site"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The city plans to build more parks to improve _____ life. New green spaces will open in three busy districts next year.",
    "options": [
      "urban",
      "remote",
      "spacious",
      "cozy"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Internet service is still slow in many _____ villages. The government will spend more money on new towers in farming areas.",
    "options": [
      "spacious",
      "urban",
      "rural",
      "convenient"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The subway is always _____ during rush hour. Many office workers prefer to leave home early so they can get a seat.",
    "options": [
      "spacious",
      "crowded",
      "remote",
      "historic"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The research station is located in a _____ mountain area. Supplies are delivered by helicopter only once a month.",
    "options": [
      "crowded",
      "convenient",
      "lively",
      "remote"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The city protects the _____ temple because it was built over three hundred years ago. Visitors can learn about local culture there.",
    "options": [
      "crowded",
      "modern",
      "historic",
      "dirty"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The new office building has _____ equipment such as smart lighting and fast elevators. Employees no longer need to wait for old machines.",
    "options": [
      "modern",
      "rural",
      "historic",
      "remote"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The new meeting room is _____ enough to hold eighty people. It also has a large screen and comfortable chairs.",
    "options": [
      "crowded",
      "remote",
      "rural",
      "spacious"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The small café has soft sofas and warm lights. It feels as _____ as a living room on a cold winter evening.",
    "options": [
      "urban",
      "cozy",
      "crowded",
      "dirty"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The new convention center is easily _____ by public transportation. Guests can take the subway or a bus directly to its entrance.",
    "options": [
      "accessible",
      "peaceful",
      "historic",
      "spacious"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Please let me know what time is _____ for you to meet next week. I am free every afternoon except Thursday.",
    "options": [
      "crowded",
      "historic",
      "convenient",
      "rural"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The night market is very _____ with foreign tourists. Thousands of visitors come every evening to try local snacks.",
    "options": [
      "remote",
      "popular",
      "rural",
      "dirty"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Please keep your voice down in the library. Many people come here because they need a _____ place to study.",
    "options": [
      "crowded",
      "lively",
      "dirty",
      "quiet"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The street festival was loud and _____, with music and dancing everywhere. Thousands of people joined the celebration until midnight.",
    "options": [
      "peaceful",
      "quiet",
      "lively",
      "remote"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The hotel garden is a _____ place where guests can relax and listen to the birds. It is far from the noisy main road.",
    "options": [
      "peaceful",
      "crowded",
      "dirty",
      "urban"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "location": {
    "pos": "n.",
    "en_def": "a place where something is or happens",
    "cn_def": "位置；地點"
  },
  "area": {
    "pos": "n.",
    "en_def": "a part of a place, city, or building",
    "cn_def": "區域；地區"
  },
  "region": {
    "pos": "n.",
    "en_def": "a large part of a country or the world",
    "cn_def": "地區；區域"
  },
  "spot": {
    "pos": "n.",
    "en_def": "a particular place",
    "cn_def": "地點；場所"
  },
  "site": {
    "pos": "n.",
    "en_def": "a place where something is built or happens",
    "cn_def": "地點；工地；場址"
  },
  "destination": {
    "pos": "n.",
    "en_def": "the place where someone is going",
    "cn_def": "目的地"
  },
  "neighborhood": {
    "pos": "n.",
    "en_def": "the area around your home and the people who live there",
    "cn_def": "鄰近地區；社區"
  },
  "downtown": {
    "pos": "n.",
    "en_def": "the main business center of a city",
    "cn_def": "市中心；商業區"
  },
  "suburb": {
    "pos": "n.",
    "en_def": "an area where people live outside the center of a city",
    "cn_def": "郊區"
  },
  "countryside": {
    "pos": "n.",
    "en_def": "land outside towns and cities, with farms and fields",
    "cn_def": "鄉間；農村"
  },
  "landmark": {
    "pos": "n.",
    "en_def": "a famous building or place that is easy to see and recognize",
    "cn_def": "地標"
  },
  "attraction": {
    "pos": "n.",
    "en_def": "a place or thing that many people want to visit or see",
    "cn_def": "景點；吸引人的事物"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the conditions and surroundings in which people live or work",
    "cn_def": "環境"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛"
  },
  "scenery": {
    "pos": "n.",
    "en_def": "the natural things you see in a place, like mountains and lakes",
    "cn_def": "風景；景色"
  },
  "view": {
    "pos": "n.",
    "en_def": "what you can see from a place",
    "cn_def": "景觀；視野"
  },
  "urban": {
    "pos": "adj.",
    "en_def": "relating to a city or town",
    "cn_def": "城市的；都市的"
  },
  "rural": {
    "pos": "adj.",
    "en_def": "relating to the countryside, not the city",
    "cn_def": "鄉村的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of too many people",
    "cn_def": "擁擠的"
  },
  "remote": {
    "pos": "adj.",
    "en_def": "far away from towns and other people",
    "cn_def": "偏遠的"
  },
  "historic": {
    "pos": "adj.",
    "en_def": "important in history or very old and famous",
    "cn_def": "有歷史意義的；歷史悠久的"
  },
  "modern": {
    "pos": "adj.",
    "en_def": "new and using the latest ideas or technology",
    "cn_def": "現代的；現代化的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space inside",
    "cn_def": "寬敞的"
  },
  "cozy": {
    "pos": "adj.",
    "en_def": "small, warm, and comfortable",
    "cn_def": "舒適溫馨的"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, enter, or use",
    "cn_def": "可到達的；方便進入的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or suitable for your plans",
    "cn_def": "方便的；便利的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "with little or no noise",
    "cn_def": "安靜的"
  },
  "lively": {
    "pos": "adj.",
    "en_def": "full of energy, activity, and fun",
    "cn_def": "熱鬧的；充滿活力的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "calm and quiet, without noise or trouble",
    "cn_def": "寧靜的；平靜的"
  },
  "beautiful": {
    "pos": "adj.",
    "en_def": "very nice to look at",
    "cn_def": "美麗的"
  },
  "dirty": {
    "pos": "adj.",
    "en_def": "not clean",
    "cn_def": "髒的"
  },
  "clean": {
    "pos": "adj.",
    "en_def": "free from dirt",
    "cn_def": "乾淨的"
  },
  "unique": {
    "pos": "adj.",
    "en_def": "different from everything else; special",
    "cn_def": "獨特的"
  }
};

const EXTRA_GLOSSES = {};
