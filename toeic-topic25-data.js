// Topic 25 Quiz Data: Barbecue 烤肉
// Source word list: https://www.examword.com/group-topic/barbecue — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T25 - Barbecue 烤肉",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "grill",
    "pos": "v.",
    "cn_def": "燒烤；炙烤",
    "en_def": "to cook food on metal bars over strong heat",
    "sentence": "A: Our company is holding a Moon Festival party on the rooftop this year, and the manager wants everyone to cook together, so what food should we prepare? B: Let's buy plenty of meat, corn, and mushrooms so everyone can {{BLANK}} their own food, and we can also order some mooncakes and fruit for dessert.",
    "cn": "A：公司今年要在頂樓舉辦中秋派對，經理希望大家一起烤肉，我們該準備什麼食物？ B：我們買很多肉、玉米和香菇，讓大家可以自己【燒烤】食物，也可以訂些月餅和水果當甜點。"
  },
  {
    "word": "smoke",
    "pos": "n.",
    "cn_def": "煙",
    "en_def": "the gray cloud that comes from something burning",
    "sentence": "A: The neighbors in the apartment building next to our restaurant have complained to the city about our outdoor grill, so what exactly is the problem? B: Too much {{BLANK}} from the grill is blowing into their windows in the evening, so we need to install a better fan and move the grill to the other side.",
    "cn": "A：我們餐廳隔壁公寓大樓的住戶向市政府投訴我們的戶外烤爐，問題到底是什麼？ B：晚上烤爐冒出太多【煙】吹進他們的窗戶，所以我們需要裝一台更好的抽風機，並把烤爐移到另一邊。"
  },
  {
    "word": "charcoal",
    "pos": "n.",
    "cn_def": "木炭",
    "en_def": "black material made from burnt wood, used as fuel for grilling",
    "sentence": "A: We are planning a barbecue at the beach for our clients next Saturday, but the beach has no electricity, so how are we going to cook all the food? B: We will use {{BLANK}} in three large grills, so please buy about ten bags, some lighters, and a few buckets of water for safety.",
    "cn": "A：我們計畫下週六在海邊為客戶舉辦烤肉，但海灘沒有電，我們要怎麼煮那麼多食物？ B：我們會在三個大烤爐裡用【木炭】，所以請你買大約十袋，再準備一些打火機和幾桶水以策安全。"
  },
  {
    "word": "flame",
    "pos": "n.",
    "cn_def": "火焰",
    "en_def": "the hot, bright light that comes from a fire",
    "sentence": "A: The steaks at the staff barbecue were black on the outside but raw in the middle, and some people did not want to eat them, so what went wrong? B: The {{BLANK}} was too high and touched the meat directly, so next time we should wait until the fire burns down and the coals turn white.",
    "cn": "A：員工烤肉時牛排外面焦黑、裡面卻是生的，有些人都不想吃，出了什麼問題？ B：【火焰】太高，直接碰到了肉，所以下次我們應該等火勢變小、炭變白之後再烤。"
  },
  {
    "word": "marinate",
    "pos": "v.",
    "cn_def": "醃製；浸泡",
    "en_def": "to leave meat or fish in a mix of oil, spices, and sauce before cooking",
    "sentence": "A: The chicken we grilled at last year's company barbecue was dry and did not have much taste, and many people left it on their plates. B: This year we should {{BLANK}} the chicken in soy sauce, garlic, and honey the night before, so it will be soft and full of flavor.",
    "cn": "A：去年公司烤肉時我們烤的雞肉又乾又沒什麼味道，很多人都剩在盤子上。 B：今年我們應該前一晚用醬油、大蒜和蜂蜜【醃】雞肉，這樣它就會柔軟又充滿風味。"
  },
  {
    "word": "seasoning",
    "pos": "n.",
    "cn_def": "調味料",
    "en_def": "salt, pepper, herbs, or spices added to food for flavor",
    "sentence": "A: The new barbecue restaurant wants its meat to taste special, so that customers will remember it and come back again, but it does not want to use heavy sauces. B: The chef created a secret {{BLANK}} of sea salt, black pepper, and dried herbs from Hualien, which he puts on the meat just before grilling.",
    "cn": "A：那家新的燒烤餐廳想讓肉吃起來很特別，讓顧客記住並再次光臨，但又不想用很重的醬汁。 B：主廚調配了一款秘製【調味料】，有海鹽、黑胡椒和花蓮的乾燥香草，他會在燒烤前才撒在肉上。"
  },
  {
    "word": "rub",
    "pos": "n.",
    "cn_def": "乾醃料；香料粉",
    "en_def": "a dry mix of spices pressed onto meat before cooking",
    "sentence": "A: The American customers who visited our restaurant last week said our ribs tasted good, but they missed the strong flavor of barbecue from their home in Texas. B: We could try a spicy {{BLANK}} made of brown sugar, paprika, and garlic powder, which we press into the meat several hours before we cook it.",
    "cn": "A：上週來我們餐廳的美國顧客說我們的肋排好吃，但他們想念家鄉德州烤肉的濃郁風味。 B：我們可以試試用紅糖、紅椒粉和蒜粉做成的辣味【乾醃料】，在烹調前幾小時把它抹進肉裡。"
  },
  {
    "word": "sauce",
    "pos": "n.",
    "cn_def": "醬汁；烤肉醬",
    "en_def": "a thick liquid served with or on food",
    "sentence": "A: We are selling grilled meat at the night market for our company's charity event, and many visitors have asked whether we have anything to add more taste. B: We should put bottles of sweet barbecue {{BLANK}} on every table, because in Taiwan most people like to brush it on grilled meat and corn.",
    "cn": "A：我們在夜市為公司慈善活動賣烤肉，很多遊客問有沒有可以增添風味的東西。 B：我們應該在每張桌子上放幾瓶甜的烤肉【醬】，因為在台灣大多數人喜歡把它刷在烤肉和玉米上。"
  },
  {
    "word": "slow-cook",
    "pos": "v.",
    "cn_def": "慢燉；低溫慢煮",
    "en_def": "to cook food for a long time at a low temperature",
    "sentence": "A: The beef at the new barbecue restaurant is so soft that you can cut it with a spoon, and customers wait over an hour for a table, so how do they do it? B: The chefs {{BLANK}} the beef for twelve hours at a low temperature, so the meat becomes very soft and takes in all the smoky flavor.",
    "cn": "A：那家新烤肉餐廳的牛肉軟到可以用湯匙切開，顧客要等一個多小時才有位子，他們是怎麼做到的？ B：廚師用低溫把牛肉【慢煮】十二個小時，讓肉變得非常軟嫩，並吸收所有煙燻風味。"
  },
  {
    "word": "tender",
    "pos": "adj.",
    "cn_def": "軟嫩的",
    "en_def": "soft and easy to cut and chew",
    "sentence": "A: Several customers wrote online that our steak was too tough and hard to chew, and our restaurant's rating dropped this month, so what should we do? B: We should buy better beef and let it rest for a few minutes after grilling, because that keeps the meat {{BLANK}} and easy to cut.",
    "cn": "A：好幾位顧客在網路上留言說我們的牛排太硬、很難咀嚼，餐廳這個月的評分也下降了，我們該怎麼做？ B：我們應該買品質更好的牛肉，並在烤好後讓它靜置幾分鐘，因為這能讓肉保持【軟嫩】又容易切。"
  },
  {
    "word": "juicy",
    "pos": "adj.",
    "cn_def": "多汁的",
    "en_def": "containing a lot of liquid in a way that tastes good",
    "sentence": "A: Our new burger is selling very well, and a food blogger even wrote that it was the best in Taipei, so what makes it so popular with customers? B: The meat stays {{BLANK}} because we grill it quickly over high heat, and people love the way the flavor fills their mouths with every bite.",
    "cn": "A：我們的新漢堡賣得很好，有位美食部落客甚至寫說那是台北最好吃的，是什麼讓它這麼受顧客歡迎？ B：肉能保持【多汁】是因為我們用大火快速燒烤，大家都很喜歡每一口都滿嘴風味的感覺。"
  },
  {
    "word": "smoky",
    "pos": "adj.",
    "cn_def": "煙燻味的",
    "en_def": "tasting or smelling of smoke",
    "sentence": "A: Our sausages taste fine, but the customers at the food fair said they wanted something that really tastes like a real outdoor barbecue, so how can we do that? B: We can cook them over apple wood for an hour, which gives them a rich, {{BLANK}} flavor that people usually only get from cooking outside.",
    "cn": "A：我們的香腸味道還不錯，但美食展的顧客說想要真正像戶外烤肉那樣的味道，我們要怎麼做？ B：我們可以用蘋果木烤一個小時，讓它們有濃郁的【煙燻】風味，這通常只有在戶外烹調才吃得到。"
  },
  {
    "word": "grill marks",
    "pos": "n.phr.",
    "cn_def": "烤痕；烤紋",
    "en_def": "dark lines left on food by the hot metal bars of a grill",
    "sentence": "A: The photographer for our restaurant's new menu says the grilled chicken in the photos looks pale and not very attractive, so how can we make it look better? B: The chef can press the chicken onto a very hot grill for one minute to make dark {{BLANK}}, because those lines show customers that the meat is freshly grilled.",
    "cn": "A：我們餐廳新菜單的攝影師說照片裡的烤雞看起來很蒼白、不太吸引人，我們要怎麼讓它更好看？ B：主廚可以把雞肉壓在很燙的烤架上一分鐘，烤出深色的【烤痕】，因為這些紋路能讓顧客知道肉是現烤的。"
  },
  {
    "word": "skewer",
    "pos": "n.",
    "cn_def": "烤肉串籤；串燒",
    "en_def": "a long thin stick used to hold pieces of food for cooking",
    "sentence": "A: About two hundred guests are coming to our company's outdoor party, and we do not have enough plates or forks, so what kind of food should we serve? B: Let's serve meat and vegetables on a bamboo {{BLANK}}, because guests can hold the stick and eat while they walk around and talk to each other.",
    "cn": "A：公司的戶外派對大約有兩百位賓客，我們的盤子和叉子不夠，該提供什麼樣的食物？ B：我們把肉和蔬菜串在竹【籤】上吧，因為賓客可以拿著竹籤邊走邊吃，同時和彼此聊天。"
  },
  {
    "word": "patty",
    "pos": "n.",
    "cn_def": "肉餅；漢堡肉",
    "en_def": "a flat round piece of chopped meat, often used in burgers",
    "sentence": "A: Our fast-food restaurant wants to add a vegetarian burger to the menu next month, because more and more young customers are asking for one. B: We can make a {{BLANK}} from beans, mushrooms, and rice, and grill it just like a beef one, so it looks and feels like a normal burger.",
    "cn": "A：我們速食店下個月想在菜單上加一款素食漢堡，因為越來越多年輕顧客在要求。 B：我們可以用豆子、香菇和米做成【肉餅】，然後像牛肉餅一樣燒烤，讓它看起來、吃起來都像一般的漢堡。"
  },
  {
    "word": "sausage",
    "pos": "n.",
    "cn_def": "香腸",
    "en_def": "chopped meat with spices inside a long thin skin",
    "sentence": "A: Many foreign visitors to our night market tour want to try a typical Taiwanese barbecue snack, so what is the best thing for our guides to recommend? B: They should try the sweet grilled pork {{BLANK}} with a piece of raw garlic, because it is cheap, popular, and very different from the ones in Europe.",
    "cn": "A：參加我們夜市導覽的很多外國遊客都想嚐嚐典型的台灣烤肉小吃，導遊最適合推薦什麼？ B：他們應該試試甜甜的烤豬肉【香腸】配一瓣生蒜，因為它便宜、受歡迎，而且和歐洲的很不一樣。"
  },
  {
    "word": "brisket",
    "pos": "n.",
    "cn_def": "牛胸肉",
    "en_def": "meat from the lower chest of a cow, often cooked slowly",
    "sentence": "A: The new Texas-style restaurant only serves one main meat dish, but it sells out by two o'clock every afternoon, so what is so special about it? B: It serves smoked {{BLANK}}, which is a cut of beef from the chest that the cooks smoke for fifteen hours until it becomes very soft.",
    "cn": "A：那家新的德州風味餐廳只賣一道主菜肉類，但每天下午兩點就賣完了，到底有什麼特別？ B：它賣的是煙燻【牛胸肉】，這是來自胸部的牛肉部位，廚師要煙燻十五個小時直到它變得非常軟嫩。"
  },
  {
    "word": "rib",
    "pos": "n.",
    "cn_def": "肋排；肋骨",
    "en_def": "one of the curved bones of the chest; meat cut with this bone",
    "sentence": "A: Our restaurant's barbecue platter is the most expensive item on the menu, so customers sometimes ask what they will get if they order it. B: Tell them it includes chicken wings, sausages, and a large pork {{BLANK}} with honey sauce, which is enough for three or four people to share.",
    "cn": "A：我們餐廳的烤肉拼盤是菜單上最貴的品項，所以顧客有時會問點了會吃到什麼。 B：告訴他們有雞翅、香腸和一大份蜂蜜醬豬【肋排】，夠三、四個人分享。"
  },
  {
    "word": "baste",
    "pos": "v.",
    "cn_def": "（烹調時）塗油；淋汁",
    "en_def": "to pour or brush liquid over meat while it is cooking",
    "sentence": "A: The roast chicken at our company's Christmas dinner was very dry last year, and the hotel chef wants to make sure it does not happen again. B: He plans to {{BLANK}} the chickens with melted butter and their own juices every twenty minutes while they cook, so the meat stays soft.",
    "cn": "A：去年公司聖誕晚宴的烤雞非常乾，飯店主廚想確保這種事不會再發生。 B：他打算在烤雞時每二十分鐘用融化的奶油和雞肉本身的肉汁幫雞【淋汁】，讓肉保持軟嫩。"
  },
  {
    "word": "flip",
    "pos": "v.",
    "cn_def": "翻面；翻動",
    "en_def": "to turn something over quickly",
    "sentence": "A: I am cooking the burgers at our team barbecue this afternoon, but I have never done it before, and I am worried that I will burn them in front of everyone. B: Do not worry, just {{BLANK}} each burger once after about four minutes, and do not press it down, so the juice stays inside the meat.",
    "cn": "A：今天下午團隊烤肉由我負責烤漢堡肉，但我從來沒烤過，擔心會在大家面前烤焦。 B：別擔心，大約四分鐘後把每片漢堡肉【翻面】一次就好，也不要往下壓，這樣肉汁才會留在肉裡。"
  },
  {
    "word": "coal",
    "pos": "n.",
    "cn_def": "煤炭；炭火",
    "en_def": "a hard black material that is burned for heat",
    "sentence": "A: How do the cooks at the barbecue restaurant know when the grill is hot enough to start cooking the meat, because they do not use a thermometer? B: They wait until every piece of {{BLANK}} is covered with white ash and glowing red underneath, which usually takes about twenty minutes after they light it.",
    "cn": "A：燒烤餐廳的廚師不用溫度計，他們怎麼知道烤爐熱到可以開始烤肉了？ B：他們會等到每一塊【炭】都覆蓋白色灰燼、底下發出紅光，點火後通常大約需要二十分鐘。"
  },
  {
    "word": "outdoor",
    "pos": "adj.",
    "cn_def": "戶外的",
    "en_def": "happening or used outside, not in a building",
    "sentence": "A: Our staff have been working hard all year, and the manager wants to plan a fun event in the spring where people can relax and enjoy the fresh air. B: Let's hold an {{BLANK}} barbecue at the riverside park, where there are tables, grills, and plenty of space for games and music.",
    "cn": "A：我們員工一整年都很努力工作，經理想在春天規劃一個有趣的活動，讓大家放鬆並享受新鮮空氣。 B：我們在河濱公園辦一場【戶外】烤肉吧，那裡有桌子、烤爐，還有很多空間可以玩遊戲和放音樂。"
  },
  {
    "word": "picnic",
    "pos": "n.",
    "cn_def": "野餐",
    "en_def": "a meal eaten outside, often in a park",
    "sentence": "A: The weather is going to be warm and sunny this Saturday, and our team has finished the big project early, so how should we celebrate together? B: Let's have a {{BLANK}} in Daan Park, where everyone can bring some food, sit on blankets under the trees, and play games.",
    "cn": "A：這週六天氣會很溫暖晴朗，我們團隊也提早完成了大專案，我們該怎麼一起慶祝？ B：我們去大安森林公園【野餐】吧，大家可以帶些食物，在樹下鋪墊子坐著玩遊戲。"
  },
  {
    "word": "platter",
    "pos": "n.",
    "cn_def": "大淺盤；拼盤",
    "en_def": "a large plate used for serving food",
    "sentence": "A: Our sales team is meeting a group of clients at the barbecue restaurant tonight, and there will be ten people, so should each person order a separate dish? B: It is easier to order a large mixed {{BLANK}} for the table, because it comes with beef, pork, chicken, and vegetables, and everyone can share.",
    "cn": "A：我們業務團隊今晚要在燒烤餐廳和一群客戶見面，總共十個人，每個人應該各點一道菜嗎？ B：幫整桌點一份大的綜合【拼盤】比較簡單，因為裡面有牛肉、豬肉、雞肉和蔬菜，大家都可以分享。"
  },
  {
    "word": "sizzle",
    "pos": "v.",
    "cn_def": "（煎炸時）發出嘶嘶聲",
    "en_def": "to make a hissing sound like food cooking in hot oil",
    "sentence": "A: The advertising agency wants our new TV commercial for the barbecue restaurant to make people feel hungry right away, so what should it show? B: It should show steaks as they {{BLANK}} on a hot grill, because the sound and the smoke make people imagine the smell and taste of the meat.",
    "cn": "A：廣告公司希望我們燒烤餐廳的新電視廣告能讓人立刻覺得餓，廣告應該呈現什麼？ B：應該呈現牛排在熱烤架上【滋滋作響】的畫面，因為那聲音和煙會讓人想像到肉的香味和滋味。"
  },
  {
    "word": "aroma",
    "pos": "n.",
    "cn_def": "香氣；香味",
    "en_def": "a strong pleasant smell, especially of food",
    "sentence": "A: Our barbecue stall is hidden at the back of the night market, and many visitors do not see it, so how can we attract more customers to our stall? B: We can place the grill near the walkway, because the {{BLANK}} of grilled meat and garlic will reach people walking by and make them follow it.",
    "cn": "A：我們的烤肉攤藏在夜市後方，很多遊客看不到，要怎麼吸引更多顧客到我們攤位？ B：我們可以把烤爐放在走道旁，因為烤肉和大蒜的【香氣】會飄到路過的人那裡，讓他們循著香味過來。"
  },
  {
    "word": "glaze",
    "pos": "n.",
    "cn_def": "亮面醬汁；糖漿塗層",
    "en_def": "a shiny coating of sauce brushed on food",
    "sentence": "A: The ribs at our restaurant taste great, but they do not look as attractive as the ones in the photos on the menu, so what is missing? B: The cooks should brush a sweet honey {{BLANK}} on the ribs during the last five minutes, so the meat looks shiny and brown when it reaches the table.",
    "cn": "A：我們餐廳的肋排很好吃，但看起來沒有菜單照片上那麼誘人，少了什麼？ B：廚師應該在最後五分鐘刷上甜甜的蜂蜜【亮面醬汁】，讓肉送上桌時看起來閃亮又金黃。"
  },
  {
    "word": "well-done",
    "pos": "adj.",
    "cn_def": "全熟的",
    "en_def": "(of meat) cooked completely, with no pink inside",
    "sentence": "A: One of our clients from the Middle East is joining the barbecue dinner tonight, and he told me he does not like any pink color in his meat. B: Then please ask the chef to cook his steak {{BLANK}}, and make sure it is grilled on a separate part of the grill from the pork.",
    "cn": "A：今晚有一位來自中東的客戶要參加烤肉晚宴，他跟我說他不喜歡肉裡有任何粉紅色。 B：那就請主廚把他的牛排烤到【全熟】，並確保是在烤架上和豬肉分開的地方烤。"
  },
  {
    "word": "feast",
    "pos": "n.",
    "cn_def": "盛宴；大餐",
    "en_def": "a large special meal for many people",
    "sentence": "A: Our company had a record year, and the president wants to thank all two hundred staff members with something more exciting than a normal dinner. B: Let's plan a barbecue {{BLANK}} at the beach resort, with whole roast pigs, fresh seafood, and live music, so everyone can celebrate together.",
    "cn": "A：公司創下紀錄的一年，總裁想用比一般晚餐更精彩的方式感謝全體兩百名員工。 B：我們在海灘度假村規劃一場燒烤【盛宴】吧，有烤全豬、新鮮海鮮和現場音樂，讓大家一起慶祝。"
  }
];

const MCQS = [
  {
    "q": "The chef will _____ the fish over hot charcoal. It will be served with lemon and a green salad.",
    "options": [
      "sizzle",
      "grill",
      "flip",
      "baste"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Thick _____ from the kitchen set off the fire alarm. All the guests had to leave the building for ten minutes.",
    "options": [
      "glaze",
      "platter",
      "smoke",
      "feast"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Please buy five bags of _____ for the weekend barbecue. The park does not provide any fuel for the grills.",
    "options": [
      "charcoal",
      "glaze",
      "platter",
      "rub"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "Keep the _____ low when cooking chicken. Otherwise, the outside will burn before the inside is cooked.",
    "options": [
      "patty",
      "platter",
      "feast",
      "flame"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Please _____ the pork in garlic and soy sauce for at least four hours. This gives the meat a stronger flavor.",
    "options": [
      "marinate",
      "sizzle",
      "flip",
      "grill"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The chef adds a special _____ of salt and herbs to every steak. Customers often ask him for the recipe.",
    "options": [
      "skewer",
      "seasoning",
      "platter",
      "coal"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Press the spicy _____ into the ribs before cooking. Leave the meat in the fridge for three hours.",
    "options": [
      "picnic",
      "skewer",
      "feast",
      "rub"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Most customers brush sweet barbecue _____ on their corn. Bottles are placed on every table at the stall.",
    "options": [
      "coal",
      "skewer",
      "sauce",
      "picnic"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The cooks _____ the beef for ten hours at a low temperature. This makes the meat very soft.",
    "options": [
      "slow-cook",
      "flip",
      "sizzle",
      "marinate"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Our beef is soft and _____. Most customers say they can cut it with a fork.",
    "options": [
      "outdoor",
      "tender",
      "well-done",
      "smoky"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The burgers were thick and _____. Hot juice ran onto the plate with every bite customers took.",
    "options": [
      "outdoor",
      "well-done",
      "smoky",
      "juicy"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The cheese has a _____ flavor because it is cooked over wood. It goes well with dark bread.",
    "options": [
      "juicy",
      "outdoor",
      "smoky",
      "tender"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The steak was served with dark _____ across the top. They showed it had been cooked on a very hot grill.",
    "options": [
      "seasoning",
      "grill marks",
      "picnic",
      "feast"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Each _____ holds four pieces of chicken and two slices of onion. They are grilled for about ten minutes.",
    "options": [
      "glaze",
      "seasoning",
      "picnic",
      "skewer"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The vegetarian burger has a _____ made from beans and rice. It is grilled just like a beef one.",
    "options": [
      "picnic",
      "feast",
      "patty",
      "coal"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The night market stall sells grilled pork _____ with raw garlic. It is a very popular snack in Taiwan.",
    "options": [
      "sausage",
      "seasoning",
      "glaze",
      "rub"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Smoked beef _____ is the most popular dish at the Texas-style restaurant. It is cooked slowly for many hours.",
    "options": [
      "picnic",
      "brisket",
      "flame",
      "coal"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The restaurant's pork _____ is covered in honey sauce. Each order is large enough for two people to share.",
    "options": [
      "rib",
      "picnic",
      "flame",
      "feast"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Please _____ the chicken with butter every twenty minutes. This keeps the meat soft and stops it from drying out.",
    "options": [
      "sizzle",
      "flip",
      "baste",
      "slow-cook"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Please _____ the burgers after four minutes. Cook the other side for another three minutes before serving.",
    "options": [
      "marinate",
      "baste",
      "sizzle",
      "flip"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Wait until each piece of _____ turns white before you start cooking. It will then give an even heat.",
    "options": [
      "picnic",
      "platter",
      "coal",
      "feast"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The hotel has a large _____ pool and garden. Guests can enjoy barbecue dinners there in the summer.",
    "options": [
      "outdoor",
      "juicy",
      "tender",
      "well-done"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Our team had a _____ by the lake on Saturday. Everyone brought sandwiches, fruit, and cold drinks.",
    "options": [
      "glaze",
      "picnic",
      "rub",
      "flame"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The waiter brought a large _____ of grilled seafood to the table. It was enough for six people to share.",
    "options": [
      "glaze",
      "rub",
      "flame",
      "platter"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The steaks began to _____ as soon as they touched the hot grill. The sound made everyone hungry.",
    "options": [
      "sizzle",
      "marinate",
      "baste",
      "slow-cook"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The _____ of grilled corn filled the night market. Many visitors followed the smell to our stall.",
    "options": [
      "patty",
      "skewer",
      "platter",
      "aroma"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "A sweet honey _____ makes the ribs shiny and brown. Brush it on during the last five minutes of cooking.",
    "options": [
      "picnic",
      "flame",
      "glaze",
      "feast"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Mr. Lee always orders his steak _____. He does not want to see any pink inside the meat.",
    "options": [
      "juicy",
      "well-done",
      "outdoor",
      "smoky"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The village prepared a huge _____ for the harvest festival. There were tables full of meat, fish, and fruit.",
    "options": [
      "rub",
      "glaze",
      "feast",
      "skewer"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Burgers should be cooked over high heat to stay _____. Overcooked meat becomes dry and hard.",
    "options": [
      "outdoor",
      "juicy",
      "smoky",
      "well-done"
    ],
    "answer": 1,
    "vocabIndex": 10
  }
];

const LOOKUP = {
  "grill": {
    "pos": "v.",
    "en_def": "to cook food on metal bars over strong heat",
    "cn_def": "燒烤；炙烤"
  },
  "smoke": {
    "pos": "n.",
    "en_def": "the gray cloud that comes from something burning",
    "cn_def": "煙"
  },
  "charcoal": {
    "pos": "n.",
    "en_def": "black material made from burnt wood, used as fuel for grilling",
    "cn_def": "木炭"
  },
  "flame": {
    "pos": "n.",
    "en_def": "the hot, bright light that comes from a fire",
    "cn_def": "火焰"
  },
  "marinate": {
    "pos": "v.",
    "en_def": "to leave meat or fish in a mix of oil, spices, and sauce before cooking",
    "cn_def": "醃製；浸泡"
  },
  "seasoning": {
    "pos": "n.",
    "en_def": "salt, pepper, herbs, or spices added to food for flavor",
    "cn_def": "調味料"
  },
  "rub": {
    "pos": "n.",
    "en_def": "a dry mix of spices pressed onto meat before cooking",
    "cn_def": "乾醃料；香料粉"
  },
  "sauce": {
    "pos": "n.",
    "en_def": "a thick liquid served with or on food",
    "cn_def": "醬汁；烤肉醬"
  },
  "slow-cook": {
    "pos": "v.",
    "en_def": "to cook food for a long time at a low temperature",
    "cn_def": "慢燉；低溫慢煮"
  },
  "tender": {
    "pos": "adj.",
    "en_def": "soft and easy to cut and chew",
    "cn_def": "軟嫩的"
  },
  "juicy": {
    "pos": "adj.",
    "en_def": "containing a lot of liquid in a way that tastes good",
    "cn_def": "多汁的"
  },
  "smoky": {
    "pos": "adj.",
    "en_def": "tasting or smelling of smoke",
    "cn_def": "煙燻味的"
  },
  "grill marks": {
    "pos": "n.phr.",
    "en_def": "dark lines left on food by the hot metal bars of a grill",
    "cn_def": "烤痕；烤紋"
  },
  "skewer": {
    "pos": "n.",
    "en_def": "a long thin stick used to hold pieces of food for cooking",
    "cn_def": "烤肉串籤；串燒"
  },
  "patty": {
    "pos": "n.",
    "en_def": "a flat round piece of chopped meat, often used in burgers",
    "cn_def": "肉餅；漢堡肉"
  },
  "sausage": {
    "pos": "n.",
    "en_def": "chopped meat with spices inside a long thin skin",
    "cn_def": "香腸"
  },
  "brisket": {
    "pos": "n.",
    "en_def": "meat from the lower chest of a cow, often cooked slowly",
    "cn_def": "牛胸肉"
  },
  "rib": {
    "pos": "n.",
    "en_def": "one of the curved bones of the chest; meat cut with this bone",
    "cn_def": "肋排；肋骨"
  },
  "baste": {
    "pos": "v.",
    "en_def": "to pour or brush liquid over meat while it is cooking",
    "cn_def": "（烹調時）塗油；淋汁"
  },
  "flip": {
    "pos": "v.",
    "en_def": "to turn something over quickly",
    "cn_def": "翻面；翻動"
  },
  "coal": {
    "pos": "n.",
    "en_def": "a hard black material that is burned for heat",
    "cn_def": "煤炭；炭火"
  },
  "outdoor": {
    "pos": "adj.",
    "en_def": "happening or used outside, not in a building",
    "cn_def": "戶外的"
  },
  "picnic": {
    "pos": "n.",
    "en_def": "a meal eaten outside, often in a park",
    "cn_def": "野餐"
  },
  "platter": {
    "pos": "n.",
    "en_def": "a large plate used for serving food",
    "cn_def": "大淺盤；拼盤"
  },
  "sizzle": {
    "pos": "v.",
    "en_def": "to make a hissing sound like food cooking in hot oil",
    "cn_def": "（煎炸時）發出嘶嘶聲"
  },
  "aroma": {
    "pos": "n.",
    "en_def": "a strong pleasant smell, especially of food",
    "cn_def": "香氣；香味"
  },
  "glaze": {
    "pos": "n.",
    "en_def": "a shiny coating of sauce brushed on food",
    "cn_def": "亮面醬汁；糖漿塗層"
  },
  "well-done": {
    "pos": "adj.",
    "en_def": "(of meat) cooked completely, with no pink inside",
    "cn_def": "全熟的"
  },
  "feast": {
    "pos": "n.",
    "en_def": "a large special meal for many people",
    "cn_def": "盛宴；大餐"
  }
};

const EXTRA_GLOSSES = {};
