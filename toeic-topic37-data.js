// Topic 37 Quiz Data: Building 建築
// Source word list: https://www.examword.com/group-topic/building — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T37 - Building 建築",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "architect",
    "pos": "n.",
    "cn_def": "建築師",
    "en_def": "a person whose job is to design buildings",
    "sentence": "A: The new head office downtown looks amazing with all that glass and natural light, so who was in charge of the design? B: Our company hired a young {{BLANK}} from Taipei who won an award last year, and she spent months meeting staff to understand how we actually work before drawing anything.",
    "cn": "A：市中心的新總部有那麼多玻璃和自然光，看起來太棒了，是誰負責設計的？ B：我們公司聘請了一位來自台北、去年得過獎的年輕【建築師】，她在動手畫圖之前，花了好幾個月和員工見面，了解我們實際上如何工作。"
  },
  {
    "word": "planner",
    "pos": "n.",
    "cn_def": "都市規劃師；規劃者",
    "en_def": "a person who decides how land and buildings in a town should be used",
    "sentence": "A: Why hasn't the shopping mall project started yet, even though the builders were ready to begin work last month? B: The city {{BLANK}} asked us to change the parking area and add more trees along the road, so our team is still updating the drawings before we can get final approval.",
    "cn": "A：為什麼購物中心的工程還沒開始？建商上個月就已經準備好要動工了。 B：市政府的【都市規劃師】要求我們修改停車區，並在道路旁加種更多樹木，所以我們團隊還在更新設計圖，之後才能取得最後核准。"
  },
  {
    "word": "delay",
    "pos": "v.",
    "cn_def": "延誤；延後",
    "en_def": "to make something happen later than planned",
    "sentence": "A: Do you think the new factory will still open in March as the manager promised at the shareholders' meeting? B: Probably not, because the heavy rain this winter has flooded the site twice, and the builders say the bad weather will {{BLANK}} the opening by at least two months.",
    "cn": "A：你認為新工廠還會像經理在股東大會上承諾的那樣在三月開幕嗎？ B：大概不會，因為今年冬天的大雨已經淹了工地兩次，建商說惡劣的天氣會讓開幕【延後】至少兩個月。"
  },
  {
    "word": "detection",
    "pos": "n.",
    "cn_def": "偵測；發現",
    "en_def": "the act of noticing or discovering something, often with a machine",
    "sentence": "A: Why did the hotel spend so much money on new equipment for every guest room and hallway this year? B: After a small kitchen fire last spring, the owners decided to install a modern smoke {{BLANK}} system, so the staff can find any danger quickly and guide guests out safely.",
    "cn": "A：為什麼飯店今年在每間客房和走廊都花那麼多錢買新設備？ B：去年春天廚房發生小火災後，業主決定安裝現代化的煙霧【偵測】系統，讓員工能快速發現任何危險，並安全地引導房客離開。"
  },
  {
    "word": "faulty",
    "pos": "adj.",
    "cn_def": "有缺陷的；故障的",
    "en_def": "not working correctly because something is wrong with it",
    "sentence": "A: The lights on the third floor keep turning off during our afternoon meetings, and it's really annoying everyone in the department. B: The building manager checked it this morning and found some {{BLANK}} wiring behind the ceiling, so an electrician is coming tomorrow to replace it before anyone gets hurt.",
    "cn": "A：三樓的燈在我們下午開會時一直熄掉，讓部門裡每個人都很困擾。 B：大樓管理員今天早上檢查過了，發現天花板後面有一些【有缺陷的】電線，所以明天會有電工來更換，以免有人受傷。"
  },
  {
    "word": "inspection",
    "pos": "n.",
    "cn_def": "檢查；視察",
    "en_def": "a careful check of something to make sure it is safe or correct",
    "sentence": "A: Are we allowed to move our office furniture into the new building on Monday, or do we need to wait longer? B: We have to wait until Thursday, because a safety officer from the city government is coming for a final {{BLANK}} of the fire exits, elevators and electrical systems on Wednesday afternoon.",
    "cn": "A：我們星期一可以把辦公家具搬進新大樓嗎？還是要再等久一點？ B：我們要等到星期四，因為市政府的安全人員星期三下午會來對逃生出口、電梯和電力系統做最後的【檢查】。"
  },
  {
    "word": "hype",
    "pos": "v.",
    "cn_def": "大肆宣傳；炒作",
    "en_def": "to advertise something a lot so that it seems better than it really is",
    "sentence": "A: Everyone in the marketing team seems excited about the new apartment tower by the river, but is it really that special? B: Not really, because the developer paid a lot of famous bloggers to {{BLANK}} it online, but when I visited last weekend, the rooms were small and the views were ordinary.",
    "cn": "A：行銷部的每個人好像都對河邊那棟新公寓大樓很興奮，它真的那麼特別嗎？ B：其實沒有，建商花錢請了很多知名部落客在網路上【大肆宣傳】，但我上週末去參觀時，房間很小，景觀也很普通。"
  },
  {
    "word": "amenity",
    "pos": "n.",
    "cn_def": "便利設施",
    "en_def": "something in a building or area that makes life more comfortable or useful",
    "sentence": "A: The rent at the new business center is higher than our current office, so why are you recommending that we move there? B: The price includes a gym, free parking and a rooftop café, and I think the most useful {{BLANK}} for our team is the twenty-four-hour meeting room that clients can book online.",
    "cn": "A：新商務中心的租金比我們目前的辦公室高，你為什麼還建議我們搬過去？ B：價格包含健身房、免費停車和頂樓咖啡廳，而我認為對我們團隊最有用的【設施】是客戶可以上網預約的二十四小時會議室。"
  },
  {
    "word": "wander",
    "pos": "v.",
    "cn_def": "閒逛；漫步",
    "en_def": "to walk slowly around a place without a clear purpose",
    "sentence": "A: What did you do while you were waiting for the property agent at the old train station building yesterday afternoon? B: She was forty minutes late because of traffic, so I decided to {{BLANK}} around the empty halls and take photos of the beautiful windows and wooden ceilings for our report.",
    "cn": "A：昨天下午你在舊火車站大樓等房仲的時候做了什麼？ B：她因為塞車晚了四十分鐘，所以我決定在空蕩蕩的大廳裡隨意【閒逛】，並替我們的報告拍下美麗的窗戶和木頭天花板。"
  },
  {
    "word": "run-down",
    "pos": "adj.",
    "cn_def": "破舊的；失修的",
    "en_def": "in very poor condition because nobody has taken care of it",
    "sentence": "A: Why did the company choose such an old warehouse near the harbor for its new design studio? B: The building was very {{BLANK}} when we bought it, with broken windows and peeling paint, but the price was low, and we had enough money left to repair everything and make it bright and modern.",
    "cn": "A：公司為什麼為新的設計工作室選了港口附近那麼舊的倉庫？ B：我們買下時那棟建築非常【破舊】，窗戶破了、油漆剝落，但價格很低，我們剩下的錢足夠把一切修好，讓它變得明亮又現代。"
  },
  {
    "word": "donkey's years",
    "pos": "n.phr.",
    "cn_def": "很長一段時間；好多年",
    "en_def": "a very long time (informal)",
    "sentence": "A: Do you know when the convention center across the street was last repainted, because the outside looks really dirty now? B: Nobody in our office remembers exactly, but my manager says it hasn't been painted for {{BLANK}}, probably since before she joined the company over twenty years ago.",
    "cn": "A：你知道對街的會議中心上次重新粉刷是什麼時候嗎？外觀現在看起來真的很髒。 B：我們辦公室沒人記得確切時間，但我的經理說它已經【好多年】沒粉刷了，可能是在她二十多年前進公司之前。"
  },
  {
    "word": "laughing stock",
    "pos": "n.phr.",
    "cn_def": "笑柄",
    "en_def": "a person or thing that everyone laughs at",
    "sentence": "A: Why is the mayor so worried about the design of the new city library that was shown in the newspaper today? B: Many people online say it looks like a giant shoebox, and he's afraid the town will become a {{BLANK}} if the builders finish it without making any changes to the plan.",
    "cn": "A：為什麼市長對今天報上刊登的新市立圖書館設計那麼擔心？ B：網路上很多人說它看起來像一個巨大的鞋盒，他擔心如果建商不修改計畫就完工，整個城鎮會成為大家的【笑柄】。"
  },
  {
    "word": "run-of-the-mill",
    "pos": "adj.",
    "cn_def": "普通的；平凡的",
    "en_def": "ordinary and not special in any way",
    "sentence": "A: The client said our first design for their new hotel lobby was nice, so why do they want us to start again? B: They felt it was too {{BLANK}} and looked like every other hotel in the city, so they're asking for something more creative that guests will remember and share on social media.",
    "cn": "A：客戶說我們為他們新飯店大廳做的第一版設計還不錯，為什麼還要我們重新開始？ B：他們覺得太【普通】了，看起來就跟城裡其他飯店一樣，所以他們想要更有創意、讓房客會記住並分享到社群媒體的設計。"
  },
  {
    "word": "pass the time",
    "pos": "v.phr.",
    "cn_def": "打發時間",
    "en_def": "to do something so that a period of waiting does not feel long",
    "sentence": "A: How did the visitors keep busy while the elevator in the tower was being repaired for nearly two hours yesterday? B: Our receptionist offered them coffee in the lobby, and many of them chose to {{BLANK}} by reading magazines, chatting with each other or looking at the photos of the building's history on the walls.",
    "cn": "A：昨天大樓電梯維修了將近兩個小時，訪客們是怎麼打發時間的？ B：我們的接待員在大廳請他們喝咖啡，許多人選擇看雜誌、彼此聊天或欣賞牆上大樓歷史照片來【打發時間】。"
  },
  {
    "word": "stack up",
    "pos": "v.phr.",
    "cn_def": "比得上；與……相比",
    "en_def": "to compare with something else in quality or value",
    "sentence": "A: Our team must choose between two office buildings by Friday, so how does the new one near the station compare? B: When you look at the rent, the parking and the distance to the metro, it doesn't really {{BLANK}} well against the older building on Main Street, which is cheaper and has much bigger rooms.",
    "cn": "A：我們團隊必須在星期五前從兩棟辦公大樓中選一棟，車站附近那棟新的比起來怎麼樣？ B：從租金、停車和到捷運的距離來看，它跟主街上那棟較舊的大樓相比並不怎麼【比得上】，那棟比較便宜，房間也大得多。"
  },
  {
    "word": "density",
    "pos": "n.",
    "cn_def": "密度",
    "en_def": "how many people or things there are in a certain area",
    "sentence": "A: Why does the government want to build so many tall apartment towers near the new metro line this year? B: The area already has a high population {{BLANK}}, and officials think more homes close to the trains will help reduce traffic, since thousands of people can walk to the station instead of driving.",
    "cn": "A：為什麼政府今年要在新捷運線附近蓋那麼多高樓公寓？ B：這個區域的人口【密度】已經很高，官員認為在車站附近多蓋住宅可以幫助減少交通量，因為成千上萬的人可以走路去車站而不用開車。"
  },
  {
    "word": "skyrocket",
    "pos": "v.",
    "cn_def": "飆漲；急速上升",
    "en_def": "to rise very quickly and suddenly",
    "sentence": "A: Why are so many young families moving out of the city center and into the suburbs this year? B: Since the new high-speed rail station opened downtown, house prices have started to {{BLANK}}, and most couples who work nearby can no longer afford even a small apartment close to their offices.",
    "cn": "A：為什麼今年有那麼多年輕家庭搬離市中心、搬到郊區？ B：自從市中心的新高鐵站啟用後，房價開始【飆漲】，大多數在附近上班的夫妻甚至買不起離辦公室近的小公寓了。"
  },
  {
    "word": "torn",
    "pos": "adj.",
    "cn_def": "左右為難的；猶豫不決的",
    "en_def": "unable to decide between two choices",
    "sentence": "A: Have the managers decided whether to repair the old headquarters or build a completely new one outside the city? B: Not yet, because they're {{BLANK}} between saving the historic building that the founder loved and moving to a modern space that would be much cheaper to heat, cool and maintain.",
    "cn": "A：經理們決定好要修繕舊總部，還是在城外蓋全新的總部了嗎？ B：還沒，因為他們在保留創辦人喜愛的歷史建築和搬到冷暖氣與維護都便宜許多的現代空間之間【左右為難】。"
  },
  {
    "word": "monstrosity",
    "pos": "n.",
    "cn_def": "龐大醜陋的建築；怪物",
    "en_def": "a large building or object that is very ugly",
    "sentence": "A: What do local residents think about the huge parking garage the company built next to the old temple last year? B: Most of them hate it and call it a concrete {{BLANK}}, because it blocks the view of the mountains and looks completely out of place among the small traditional shops.",
    "cn": "A：當地居民對公司去年在老廟旁蓋的那座巨大停車場有什麼看法？ B：大多數人很討厭它，稱它為水泥【怪物】，因為它擋住了山景，而且和周圍的小型傳統商店完全格格不入。"
  },
  {
    "word": "justification",
    "pos": "n.",
    "cn_def": "正當理由",
    "en_def": "a good reason for doing something",
    "sentence": "A: The board wants to spend millions on a new glass entrance for the head office, but do we really need it? B: I asked the same question at the meeting, and nobody could give a clear {{BLANK}} for the cost, especially when our factory roofs are leaking and need urgent repairs before the rainy season.",
    "cn": "A：董事會想花幾百萬元替總部建一個新的玻璃入口，但我們真的需要嗎？ B：我在會議上問了同樣的問題，沒有人能為這筆花費給出明確的【理由】，尤其是我們工廠的屋頂在漏水，需要在雨季前緊急修理。"
  },
  {
    "word": "renovate",
    "pos": "v.",
    "cn_def": "翻修；整修",
    "en_def": "to repair and improve an old building or room",
    "sentence": "A: Why is the restaurant on the ground floor of our building closed for the whole summer this year? B: The owner plans to {{BLANK}} the kitchen and dining area, adding new lights, larger windows and an outdoor terrace, so they can serve more customers when they reopen in September.",
    "cn": "A：為什麼我們大樓一樓的餐廳今年整個夏天都關門？ B：老闆打算【翻修】廚房和用餐區，加裝新燈具、更大的窗戶和戶外露台，好讓九月重新開幕時能服務更多客人。"
  },
  {
    "word": "castle",
    "pos": "n.",
    "cn_def": "城堡",
    "en_def": "a large strong building with thick walls, built long ago to protect people",
    "sentence": "A: Where are we holding the company's anniversary dinner next month, since the usual hotel ballroom is fully booked? B: The event team found a beautiful stone {{BLANK}} on a hill outside the city that was built three hundred years ago, and it now rents out its great hall for weddings and business events.",
    "cn": "A：既然平常用的飯店宴會廳都訂滿了，下個月的公司週年晚宴要在哪裡舉辦？ B：活動團隊在城外的山丘上找到一座三百年前建造的美麗石造【城堡】，它現在把大廳出租給婚禮和商務活動使用。"
  },
  {
    "word": "ruin",
    "pos": "v.",
    "cn_def": "破壞；毀掉",
    "en_def": "to damage or spoil something completely",
    "sentence": "A: Why are the people who live near the beach so angry about the new hotel the developer wants to build there? B: They believe a twenty-floor tower would {{BLANK}} the natural beauty of the coastline, and they worry that tourists will stop coming if the quiet little fishing village disappears.",
    "cn": "A：為什麼住在海灘附近的人對開發商想在那裡蓋新飯店那麼生氣？ B：他們認為一棟二十層樓的大樓會【破壞】海岸線的自然美景，而且擔心如果寧靜的小漁村消失，遊客就不會再來了。"
  },
  {
    "word": "quaint",
    "pos": "adj.",
    "cn_def": "古色古香的；別緻的",
    "en_def": "attractive in an unusual or old-fashioned way",
    "sentence": "A: Where did you stay during the business trip to the countryside last week, since there are no big hotels there? B: The client booked us into a {{BLANK}} little guesthouse with old wooden doors, flower boxes on every window and a garden, and the owner cooked us a delicious breakfast every morning.",
    "cn": "A：上週你去鄉下出差時住在哪裡？那裡沒有大飯店。 B：客戶幫我們訂了一間【古色古香】的小民宿，有老木門、每扇窗都有花箱，還有一座花園，老闆每天早上都替我們煮美味的早餐。"
  },
  {
    "word": "attraction",
    "pos": "n.",
    "cn_def": "景點；吸引人的事物",
    "en_def": "a place or thing that people visit for interest or fun",
    "sentence": "A: Why does the city want to spend so much money restoring the old sugar factory by the river? B: The tourism office hopes it will become a major {{BLANK}} for visitors, with shops, a museum and restaurants inside, which would bring more jobs and money to the local businesses nearby.",
    "cn": "A：為什麼市政府要花那麼多錢修復河邊的舊糖廠？ B：觀光局希望它能成為吸引遊客的主要【景點】，裡面有商店、博物館和餐廳，能為附近的在地商家帶來更多工作機會和收入。"
  },
  {
    "word": "hassle",
    "pos": "n.",
    "cn_def": "麻煩事",
    "en_def": "something annoying that causes trouble or takes a lot of effort",
    "sentence": "A: Why did your team decide to rent a furnished office instead of buying your own desks, chairs and cabinets? B: Buying, delivering and setting up all that furniture would be a real {{BLANK}} for a small company like ours, and we'd rather spend our time and energy finding new clients and growing the business.",
    "cn": "A：為什麼你們團隊決定租附家具的辦公室，而不是自己買桌椅和櫃子？ B：對我們這樣的小公司來說，購買、運送和組裝所有家具真的很【麻煩】，我們寧願把時間和精力花在開發新客戶和拓展業務上。"
  },
  {
    "word": "irrelevant",
    "pos": "adj.",
    "cn_def": "無關的；無關緊要的",
    "en_def": "not connected with or important to the subject",
    "sentence": "A: The buyer keeps asking about the color of the curtains in the empty office, but shouldn't we focus on more important things? B: Yes, those details are completely {{BLANK}} right now, because we still need to agree on the price, the length of the lease and who will pay for the roof repairs.",
    "cn": "A：買方一直問空辦公室窗簾的顏色，但我們不是應該專注在更重要的事情上嗎？ B：對，那些細節現在完全【無關緊要】，因為我們還需要談妥價格、租約期限，以及誰要支付屋頂維修費用。"
  },
  {
    "word": "aesthetically",
    "pos": "adv.",
    "cn_def": "在美學上；外觀上",
    "en_def": "in a way that is connected with beauty and how something looks",
    "sentence": "A: The new art museum downtown cost a lot of money, so are people happy with the final result? B: Most visitors say it is {{BLANK}} pleasing, with its curved white walls and huge windows, but some staff complain that the building is hard to clean and difficult to heat in winter.",
    "cn": "A：市中心的新美術館花了很多錢，大家對最後的成果滿意嗎？ B：大多數參觀者說它在【美學上】令人賞心悅目，有彎曲的白牆和巨大的窗戶，但有些員工抱怨這棟建築很難清潔，冬天也很難保暖。"
  },
  {
    "word": "outskirts",
    "pos": "n.",
    "cn_def": "郊區；市郊",
    "en_def": "the outer areas of a city or town",
    "sentence": "A: Why is the furniture company building its new warehouse so far away from the city center? B: Land on the {{BLANK}} of the city is much cheaper, and the location is close to the highway, so trucks can deliver products quickly without getting stuck in downtown traffic every morning.",
    "cn": "A：家具公司為什麼要把新倉庫蓋在離市中心那麼遠的地方？ B：城市【郊區】的土地便宜得多，而且位置靠近高速公路，所以卡車可以快速送貨，不會每天早上卡在市中心的車陣裡。"
  },
  {
    "word": "handful",
    "pos": "n.",
    "cn_def": "少數；一把",
    "en_def": "a small number of people or things",
    "sentence": "A: How many people actually came to see the model apartments at the open house last Saturday? B: Only a {{BLANK}} of visitors showed up in the morning because of the typhoon warning, but more families arrived after lunch when the rain stopped, and we sold three units by evening.",
    "cn": "A：上週六的開放參觀日到底有多少人來看樣品屋？ B：因為颱風警報，早上只有【少數幾位】訪客到場，但雨停後、午餐過後來了更多家庭，到晚上我們賣出了三戶。"
  },
  {
    "word": "façade",
    "pos": "n.",
    "cn_def": "建築物正面；外牆",
    "en_def": "the front wall of a building",
    "sentence": "A: The old bank building on the corner looks completely different now, so what exactly did the new owners change? B: They kept the inside almost the same, but they cleaned and repaired the stone {{BLANK}} facing the street, so the front of the building looks bright and elegant again.",
    "cn": "A：轉角那棟舊銀行大樓現在看起來完全不一樣，新屋主到底改了什麼？ B：他們內部幾乎沒變，但清洗並修復了面向街道的石造【外牆】，所以建築正面看起來再度明亮又優雅。"
  },
  {
    "word": "blight",
    "pos": "n.",
    "cn_def": "損害景觀的事物；禍害",
    "en_def": "something ugly or harmful that spoils a place",
    "sentence": "A: Why does the city council want to tear down those empty factories near the train station? B: Residents say the buildings have become a {{BLANK}} on the neighborhood, because they're covered in graffiti, attract rats and make visitors think the whole area is unsafe at night.",
    "cn": "A：為什麼市議會想拆掉火車站附近那些空置的工廠？ B：居民說這些建築已成為社區的【禍害】，因為上面滿是塗鴉、會招來老鼠，還讓訪客覺得整個地區晚上不安全。"
  },
  {
    "word": "landscape",
    "pos": "n.",
    "cn_def": "景觀；風景",
    "en_def": "everything you can see when you look across a large area of land",
    "sentence": "A: Why did the designers plan the new hotel with only three floors when the land is big enough for a tower? B: The owners wanted the building to fit naturally into the green hills and rice fields, so they kept it low to protect the beautiful {{BLANK}} that guests come here to enjoy.",
    "cn": "A：既然土地大到可以蓋高樓，為什麼設計師把新飯店只規劃成三層樓？ B：業主希望建築能自然地融入綠色山丘和稻田中，所以把樓層壓低，以保護房客來這裡欣賞的美麗【景觀】。"
  },
  {
    "word": "inclination",
    "pos": "n.",
    "cn_def": "意願；傾向",
    "en_def": "a feeling that you want to do something",
    "sentence": "A: Are you going to apply for the facilities manager position at our new headquarters next year? B: To be honest, I have no {{BLANK}} to deal with builders and repair problems every day, so I'd rather stay in the finance department, where I can focus on numbers, budgets and long-term planning.",
    "cn": "A：你明年會申請我們新總部的設施經理職位嗎？ B：老實說，我沒有每天處理建商和維修問題的【意願】，所以我寧願待在財務部，專心處理數字、預算和長期規劃。"
  },
  {
    "word": "erect",
    "pos": "v.",
    "cn_def": "建造；豎立；搭建",
    "en_def": "to build or put up a structure",
    "sentence": "A: How long will it take to get the temporary stage ready for the outdoor product launch next weekend? B: The event company says their workers can {{BLANK}} the main structure in just one day, but they'll need another afternoon to set up the lights, speakers and the large video screen.",
    "cn": "A：下週末戶外產品發表會的臨時舞台要多久才能準備好？ B：活動公司說他們的工人只要一天就能【搭建】主結構，但還需要再一個下午來架設燈光、喇叭和大型螢幕。"
  }
];

const MCQS = [
  {
    "q": "The firm hired a famous _____ to design its new headquarters. She drew plans for a glass tower with a garden on every floor.",
    "options": [
      "architect",
      "density",
      "hassle",
      "castle"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The city _____ approved the new shopping district last week. Her team spent two years studying traffic and housing needs before deciding.",
    "options": [
      "attraction",
      "façade",
      "planner",
      "density"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Heavy snow is expected to _____ the opening of the new airport terminal. Officials now say it will open in late May.",
    "options": [
      "renovate",
      "delay",
      "wander",
      "erect"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The warehouse installed a new gas leak _____ system after the accident. It sends an alarm to every manager's phone within seconds.",
    "options": [
      "inclination",
      "outskirts",
      "monstrosity",
      "detection"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The elevator stopped between floors because of a _____ switch. Technicians replaced the part and checked every other elevator in the building.",
    "options": [
      "faulty",
      "quaint",
      "torn",
      "irrelevant"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The building cannot open until it passes a fire safety _____. The officer will check all the exits and alarms on Tuesday.",
    "options": [
      "castle",
      "landscape",
      "density",
      "inspection"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The developer paid celebrities to _____ the luxury apartments on social media. However, many buyers were disappointed when they saw the small rooms.",
    "options": [
      "ruin",
      "hype",
      "erect",
      "wander"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The apartment's most popular _____ is the rooftop swimming pool. Residents can use it for free from early morning until ten at night.",
    "options": [
      "blight",
      "monstrosity",
      "amenity",
      "justification"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "During the lunch break, conference guests can _____ through the hotel's historic gardens. Maps are available at the front desk.",
    "options": [
      "delay",
      "skyrocket",
      "erect",
      "wander"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The company bought a _____ hotel near the beach at a low price. It spent a year fixing the roof, walls and old pipes.",
    "options": [
      "run-down",
      "irrelevant",
      "faulty",
      "torn"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "After the new bridge started shaking in light wind, the city became a _____. Engineers were asked to explain the mistake on national television.",
    "options": [
      "castle",
      "handful",
      "laughing stock",
      "density"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Clients complained that the hotel design was _____ and boring. They wanted a lobby that guests would never forget.",
    "options": [
      "faulty",
      "run-of-the-mill",
      "torn",
      "irrelevant"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Because of the high population _____ in the area, the city plans to build more schools. New parks are also part of the plan.",
    "options": [
      "amenity",
      "hassle",
      "density",
      "castle"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Office rents began to _____ after three tech companies moved into the area. Some small shops had to find cheaper locations.",
    "options": [
      "skyrocket",
      "wander",
      "hype",
      "delay"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The manager was _____ between two locations for the new branch. One was cheaper, but the other was closer to customers.",
    "options": [
      "quaint",
      "run-down",
      "faulty",
      "torn"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Local artists called the gray shopping mall an ugly _____. They said it did not match the colorful old houses around it.",
    "options": [
      "attraction",
      "monstrosity",
      "amenity",
      "inclination"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The manager asked for a clear _____ before approving the expensive new lobby design. The team prepared a report on expected customer growth.",
    "options": [
      "justification",
      "density",
      "outskirts",
      "castle"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The hotel will close in January to _____ all its guest rooms. New carpets, beds and bathrooms will be installed.",
    "options": [
      "skyrocket",
      "renovate",
      "wander",
      "hype"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Tourists can now spend the night in a medieval _____ outside the town. The old stone towers have been turned into luxury suites.",
    "options": [
      "outskirts",
      "inclination",
      "castle",
      "density"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Residents fear the new highway will _____ the peaceful view from the lake. They have started a petition to change the route.",
    "options": [
      "erect",
      "wander",
      "skyrocket",
      "ruin"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The tour group stayed in a _____ village with narrow streets and stone cottages. Everyone took photos of the colorful flower boxes.",
    "options": [
      "irrelevant",
      "quaint",
      "faulty",
      "torn"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The renovated lighthouse has become the town's biggest tourist _____. Over ten thousand people visited it last summer.",
    "options": [
      "attraction",
      "hassle",
      "inclination",
      "justification"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Finding parking downtown is such a _____ that many employees now take the bus. The company even gives them free monthly passes.",
    "options": [
      "castle",
      "landscape",
      "attraction",
      "hassle"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The color of the carpet is _____ to the safety check. The inspector only cares about exits, alarms and electrical wiring.",
    "options": [
      "quaint",
      "run-down",
      "irrelevant",
      "torn"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The factory moved to the _____ of the city to save on rent. Most workers now drive there on the new highway.",
    "options": [
      "outskirts",
      "façade",
      "density",
      "blight"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Workers are cleaning the stone _____ of the old bank this week. The front of the building should look new by Friday.",
    "options": [
      "handful",
      "landscape",
      "inclination",
      "façade"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The empty shopping center has become a _____ on the neighborhood. The council plans to turn it into a park.",
    "options": [
      "handful",
      "blight",
      "castle",
      "density"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The resort was designed to blend into the mountain _____. Its roofs are covered with grass and local stone.",
    "options": [
      "justification",
      "handful",
      "landscape",
      "outskirts"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Most staff showed little _____ to move to the new office outside the city. They preferred to stay close to their homes.",
    "options": [
      "façade",
      "castle",
      "blight",
      "inclination"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "The contractor will _____ a temporary fence around the site next Monday. It will keep visitors safe during construction.",
    "options": [
      "erect",
      "hype",
      "ruin",
      "wander"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "architect": {
    "pos": "n.",
    "en_def": "a person whose job is to design buildings",
    "cn_def": "建築師"
  },
  "planner": {
    "pos": "n.",
    "en_def": "a person who decides how land and buildings in a town should be used",
    "cn_def": "都市規劃師；規劃者"
  },
  "delay": {
    "pos": "v.",
    "en_def": "to make something happen later than planned",
    "cn_def": "延誤；延後"
  },
  "detection": {
    "pos": "n.",
    "en_def": "the act of noticing or discovering something, often with a machine",
    "cn_def": "偵測；發現"
  },
  "faulty": {
    "pos": "adj.",
    "en_def": "not working correctly because something is wrong with it",
    "cn_def": "有缺陷的；故障的"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "a careful check of something to make sure it is safe or correct",
    "cn_def": "檢查；視察"
  },
  "hype": {
    "pos": "v.",
    "en_def": "to advertise something a lot so that it seems better than it really is",
    "cn_def": "大肆宣傳；炒作"
  },
  "amenity": {
    "pos": "n.",
    "en_def": "something in a building or area that makes life more comfortable or useful",
    "cn_def": "便利設施"
  },
  "wander": {
    "pos": "v.",
    "en_def": "to walk slowly around a place without a clear purpose",
    "cn_def": "閒逛；漫步"
  },
  "run-down": {
    "pos": "adj.",
    "en_def": "in very poor condition because nobody has taken care of it",
    "cn_def": "破舊的；失修的"
  },
  "donkey's years": {
    "pos": "n.phr.",
    "en_def": "a very long time (informal)",
    "cn_def": "很長一段時間；好多年"
  },
  "laughing stock": {
    "pos": "n.phr.",
    "en_def": "a person or thing that everyone laughs at",
    "cn_def": "笑柄"
  },
  "run-of-the-mill": {
    "pos": "adj.",
    "en_def": "ordinary and not special in any way",
    "cn_def": "普通的；平凡的"
  },
  "pass the time": {
    "pos": "v.phr.",
    "en_def": "to do something so that a period of waiting does not feel long",
    "cn_def": "打發時間"
  },
  "stack up": {
    "pos": "v.phr.",
    "en_def": "to compare with something else in quality or value",
    "cn_def": "比得上；與……相比"
  },
  "density": {
    "pos": "n.",
    "en_def": "how many people or things there are in a certain area",
    "cn_def": "密度"
  },
  "skyrocket": {
    "pos": "v.",
    "en_def": "to rise very quickly and suddenly",
    "cn_def": "飆漲；急速上升"
  },
  "torn": {
    "pos": "adj.",
    "en_def": "unable to decide between two choices",
    "cn_def": "左右為難的；猶豫不決的"
  },
  "monstrosity": {
    "pos": "n.",
    "en_def": "a large building or object that is very ugly",
    "cn_def": "龐大醜陋的建築；怪物"
  },
  "justification": {
    "pos": "n.",
    "en_def": "a good reason for doing something",
    "cn_def": "正當理由"
  },
  "renovate": {
    "pos": "v.",
    "en_def": "to repair and improve an old building or room",
    "cn_def": "翻修；整修"
  },
  "castle": {
    "pos": "n.",
    "en_def": "a large strong building with thick walls, built long ago to protect people",
    "cn_def": "城堡"
  },
  "ruin": {
    "pos": "v.",
    "en_def": "to damage or spoil something completely",
    "cn_def": "破壞；毀掉"
  },
  "quaint": {
    "pos": "adj.",
    "en_def": "attractive in an unusual or old-fashioned way",
    "cn_def": "古色古香的；別緻的"
  },
  "attraction": {
    "pos": "n.",
    "en_def": "a place or thing that people visit for interest or fun",
    "cn_def": "景點；吸引人的事物"
  },
  "hassle": {
    "pos": "n.",
    "en_def": "something annoying that causes trouble or takes a lot of effort",
    "cn_def": "麻煩事"
  },
  "irrelevant": {
    "pos": "adj.",
    "en_def": "not connected with or important to the subject",
    "cn_def": "無關的；無關緊要的"
  },
  "aesthetically": {
    "pos": "adv.",
    "en_def": "in a way that is connected with beauty and how something looks",
    "cn_def": "在美學上；外觀上"
  },
  "outskirts": {
    "pos": "n.",
    "en_def": "the outer areas of a city or town",
    "cn_def": "郊區；市郊"
  },
  "handful": {
    "pos": "n.",
    "en_def": "a small number of people or things",
    "cn_def": "少數；一把"
  },
  "façade": {
    "pos": "n.",
    "en_def": "the front wall of a building",
    "cn_def": "建築物正面；外牆"
  },
  "blight": {
    "pos": "n.",
    "en_def": "something ugly or harmful that spoils a place",
    "cn_def": "損害景觀的事物；禍害"
  },
  "landscape": {
    "pos": "n.",
    "en_def": "everything you can see when you look across a large area of land",
    "cn_def": "景觀；風景"
  },
  "inclination": {
    "pos": "n.",
    "en_def": "a feeling that you want to do something",
    "cn_def": "意願；傾向"
  },
  "erect": {
    "pos": "v.",
    "en_def": "to build or put up a structure",
    "cn_def": "建造；豎立；搭建"
  }
};

const EXTRA_GLOSSES = {};
