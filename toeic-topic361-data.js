// Topic 361 Quiz Data: Snow 雪
// Source word list: https://www.examword.com/group-topic/snow — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T361 - Snow 雪",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "snowfall",
    "pos": "n.",
    "cn_def": "降雪；降雪量",
    "en_def": "the amount of snow that falls in one place or time",
    "sentence": "A: Why did the regional office decide to close early today, and will the staff still need to finish the monthly sales report before the weekend? B: The heavy {{BLANK}} is expected to continue until midnight, so the director sent everyone home at three, and we can complete the report online from home tomorrow morning.",
    "cn": "A：為什麼地區辦公室今天決定提早下班？員工週末前還需要完成每月銷售報告嗎？ B：這場大【降雪】預計會持續到午夜，所以主任三點就讓大家回家了，我們明天早上可以在家用線上方式完成報告。"
  },
  {
    "word": "snowflake",
    "pos": "n.",
    "cn_def": "雪花",
    "en_def": "a single small piece of snow",
    "sentence": "A: What design did the marketing team finally choose for the holiday gift cards that we will send to our most important clients next month? B: They chose a simple blue card with a single silver {{BLANK}} in the center, because the manager thought it looked elegant and matched the winter theme of our new products.",
    "cn": "A：行銷團隊最後為我們下個月要寄給最重要客戶的節日禮卡選了什麼設計？ B：他們選了一張簡單的藍色卡片，中間有一片銀色的【雪花】，因為經理覺得它看起來很高雅，而且符合我們新產品的冬季主題。"
  },
  {
    "word": "blizzard",
    "pos": "n.",
    "cn_def": "暴風雪",
    "en_def": "a very bad snowstorm with strong winds",
    "sentence": "A: Has the shipment of spare parts from our supplier in Canada arrived yet, or should I tell the factory manager to change the production schedule? B: Unfortunately, a terrible {{BLANK}} with strong winds and heavy snow closed the airport yesterday, so the parts will probably be delayed for at least two more days.",
    "cn": "A：我們加拿大供應商的備用零件到貨了嗎？還是我應該通知工廠經理更改生產排程？ B：很遺憾，昨天一場夾帶強風和大雪的可怕【暴風雪】導致機場關閉，所以零件可能至少還要再延誤兩天。"
  },
  {
    "word": "snowstorm",
    "pos": "n.",
    "cn_def": "暴風雪；雪暴",
    "en_def": "a storm with a lot of snow",
    "sentence": "A: Are you still planning to drive to the client meeting in the mountains on Friday, or would you prefer to hold it as a video call instead? B: I think a video call is safer, because the news says a big {{BLANK}} will reach the area on Thursday night and many roads may be closed by morning.",
    "cn": "A：你還打算週五開車去山區參加客戶會議嗎？還是你比較想改成視訊會議？ B：我覺得視訊會議比較安全，因為新聞說週四晚上會有一場大【暴風雪】抵達那一帶，到早上很多道路可能都會封閉。"
  },
  {
    "word": "sleet",
    "pos": "n.",
    "cn_def": "雨夾雪；凍雨",
    "en_def": "a mix of rain and snow, or rain that is partly frozen",
    "sentence": "A: Why are the delivery drivers moving so slowly this afternoon, and should we warn customers that their packages might arrive later than usual? B: Yes, please send a message, because cold {{BLANK}} has been falling since noon and has made the streets very slippery, so the drivers have been told to drive carefully.",
    "cn": "A：為什麼送貨司機今天下午開得這麼慢？我們應該提醒客戶包裹可能比平常晚到嗎？ B：對，請發個訊息，因為從中午開始就一直下著冰冷的【雨夾雪】，讓街道變得非常濕滑，所以司機們被要求小心駕駛。"
  },
  {
    "word": "hail",
    "pos": "n.",
    "cn_def": "冰雹",
    "en_def": "small balls of ice that fall from the sky like rain",
    "sentence": "A: What happened to the cars in the company parking lot, and why are so many employees calling the insurance office this morning? B: A short but violent storm brought {{BLANK}} the size of golf balls last night, so many windows and roofs were damaged, and people want to know whether repairs will be covered.",
    "cn": "A：公司停車場裡的車子怎麼了？為什麼今天早上有這麼多員工打電話給保險公司？ B：昨晚一場短暫但猛烈的暴風雨帶來高爾夫球大小的【冰雹】，很多車窗和車頂都被砸壞了，大家想知道修理費用是否能得到理賠。"
  },
  {
    "word": "frost",
    "pos": "n.",
    "cn_def": "霜；霜凍",
    "en_def": "a thin white layer of ice that forms when it is very cold",
    "sentence": "A: Why did the farm cooperative raise the price of strawberries this week, and will the restaurant need to change its dessert menu? B: An early {{BLANK}} damaged many of the plants in the fields last weekend, so supply is low now, and the chef plans to use apples instead until prices come down.",
    "cn": "A：為什麼農會這週調漲了草莓的價格？餐廳需要更改甜點菜單嗎？ B：上週末一場提早來臨的【霜凍】損害了田裡很多植株，所以現在供應量很少，主廚打算在價格回落之前改用蘋果。"
  },
  {
    "word": "ice",
    "pos": "n.",
    "cn_def": "冰",
    "en_def": "water that has become hard because it is very cold",
    "sentence": "A: Why is the cleaning staff spreading salt in front of the main entrance of the office building so early this morning? B: The water from last night's rain turned into {{BLANK}} on the steps, and the building manager wants to make sure that no visitors or employees slip and get hurt on the way in.",
    "cn": "A：為什麼清潔人員這麼早就在辦公大樓正門前撒鹽？ B：昨晚的雨水在台階上結成了【冰】，大樓經理想確保訪客和員工進門時不會滑倒受傷。"
  },
  {
    "word": "icicle",
    "pos": "n.",
    "cn_def": "冰柱",
    "en_def": "a long pointed piece of ice that hangs down from something",
    "sentence": "A: Why has the security guard put orange cones along the side of the hotel near the front door this afternoon? B: A long {{BLANK}} is hanging from the edge of the roof, and he is worried that it might fall on guests, so he asked the maintenance team to remove it safely before evening.",
    "cn": "A：為什麼警衛今天下午在飯店大門附近的側邊放了橘色三角錐？ B：屋頂邊緣垂掛著一根長長的【冰柱】，他擔心它會掉下來砸到客人，所以請維修團隊在傍晚前把它安全地移除。"
  },
  {
    "word": "slush",
    "pos": "n.",
    "cn_def": "半融的雪；雪泥",
    "en_def": "snow that is partly melted and wet and dirty",
    "sentence": "A: Should I wear my new leather shoes to the trade fair downtown tomorrow, or is there a better choice for this kind of weather? B: I would wear boots, because the snow on the sidewalks is turning into dirty {{BLANK}}, and your shoes will probably get wet and ruined before you even reach the exhibition hall.",
    "cn": "A：明天去市中心參加商展，我應該穿新皮鞋嗎？還是這種天氣有更好的選擇？ B：我會穿靴子，因為人行道上的雪正變成髒髒的【雪泥】，你的鞋子可能還沒走到展覽館就會濕掉弄壞了。"
  },
  {
    "word": "drift",
    "pos": "n.",
    "cn_def": "雪堆",
    "en_def": "a pile of snow that the wind has blown into one place",
    "sentence": "A: Why couldn't the delivery truck reach our warehouse this morning, even though the main highway was cleared last night? B: The wind blew the snow into a deep {{BLANK}} across the small road behind the building, so the driver had to wait until a worker cleared a path with a machine.",
    "cn": "A：為什麼送貨卡車今天早上到不了我們的倉庫？主要公路昨晚明明已經清理過了。 B：風把雪吹成一個很深的【雪堆】，擋住了大樓後面的小路，所以司機只好等到工人用機器清出一條路。"
  },
  {
    "word": "powder",
    "pos": "n.",
    "cn_def": "粉雪；新雪",
    "en_def": "fresh, light, dry snow that is good for skiing",
    "sentence": "A: Why are so many of our hotel guests booking extra days at the mountain resort this week, and do we have enough rooms for them? B: The fresh {{BLANK}} that fell on the slopes last night is soft and perfect for skiing, so guests want to stay longer, but we only have a few rooms left.",
    "cn": "A：為什麼這週有這麼多飯店客人在山區度假村加訂天數？我們的房間夠嗎？ B：昨晚落在雪道上的新【粉雪】又軟又非常適合滑雪，所以客人想多待幾天，但我們只剩下幾間房了。"
  },
  {
    "word": "flurry",
    "pos": "n.",
    "cn_def": "陣雪；小陣雪",
    "en_def": "a short time when a little snow falls",
    "sentence": "A: Do you think the outdoor company picnic will still go ahead tomorrow, or should we move everything into the conference hall? B: The weather report only mentions a light {{BLANK}} in the early morning, so we can probably stay outside, but let's book the hall just in case the weather gets worse.",
    "cn": "A：你覺得明天公司的戶外野餐還會照常舉行嗎？還是我們應該把東西都搬進會議廳？ B：氣象報告只提到清晨會有一場小【陣雪】，所以我們應該可以待在戶外，但還是先預訂會議廳，以防天氣變差。"
  },
  {
    "word": "chilly",
    "pos": "adj.",
    "cn_def": "寒冷的；涼颼颼的",
    "en_def": "cold in a way that is not comfortable",
    "sentence": "A: Should I turn on the heater in the meeting room before the clients from Singapore arrive at ten o'clock this morning? B: Yes, please do it now, because the room feels quite {{BLANK}} after the weekend, and our guests are used to warm weather, so we want them to feel comfortable during the long presentation.",
    "cn": "A：新加坡的客戶今天早上十點到之前，我應該先打開會議室的暖氣嗎？ B：對，請現在就開，因為過完週末房間感覺相當【寒冷】，而我們的客人習慣溫暖的天氣，我們希望他們在冗長的簡報中感到舒適。"
  },
  {
    "word": "freezing",
    "pos": "adj.",
    "cn_def": "極冷的；冰冷的",
    "en_def": "extremely cold",
    "sentence": "A: Why are so many employees working from home today instead of coming to the office for the monthly planning meeting? B: The temperature dropped below zero last night, and it is still {{BLANK}} outside, so the manager allowed everyone to join the meeting online instead of waiting for buses in the cold.",
    "cn": "A：為什麼今天這麼多員工在家工作，而不是到辦公室參加每月的規劃會議？ B：昨晚氣溫降到零度以下，外面到現在還是【冷得要命】，所以經理讓大家線上參加會議，不用在寒風中等公車。"
  },
  {
    "word": "icy",
    "pos": "adj.",
    "cn_def": "結冰的；覆蓋著冰的",
    "en_def": "covered with ice",
    "sentence": "A: Why did the shipping company cancel all of today's deliveries to the northern towns, and when will customers receive their orders? B: The mountain roads are too {{BLANK}} for heavy trucks after last night's storm, so the company decided to wait until they are cleared, and the orders should arrive by Wednesday.",
    "cn": "A：為什麼貨運公司取消了今天所有送往北部城鎮的貨？客戶什麼時候能收到訂單？ B：昨晚暴風雪過後，山路太【結冰濕滑】，重型卡車無法通行，所以公司決定等道路清理後再送，訂單應該週三前會到。"
  },
  {
    "word": "frozen",
    "pos": "adj.",
    "cn_def": "結冰的；冷凍的",
    "en_def": "turned into ice because of the cold",
    "sentence": "A: Why is the factory closed this morning, and when do you think the workers will be able to start the production line again? B: Some water pipes in the basement became {{BLANK}} during the night, so there is no water for the machines, and a plumber is coming at noon to fix the problem.",
    "cn": "A：為什麼工廠今天早上關閉？你覺得工人什麼時候才能重新啟動生產線？ B：地下室有些水管在夜裡【結凍】了，所以機器沒有水可用，水電工中午會來處理這個問題。"
  },
  {
    "word": "snowy",
    "pos": "adj.",
    "cn_def": "下雪的；積雪的",
    "en_def": "covered with snow, or with a lot of snow",
    "sentence": "A: Which photo should we use on the front page of the hotel's new website to attract more guests during the holiday season? B: Let's use the one of the lodge surrounded by {{BLANK}} hills at sunset, because it looks peaceful and warm, and it shows visitors exactly what they can enjoy here in January.",
    "cn": "A：我們應該用哪張照片放在飯店新網站的首頁，好在假期期間吸引更多客人？ B：就用那張夕陽下山莊被【積雪的】山丘環繞的照片吧，因為它看起來寧靜又溫暖，而且讓遊客清楚知道一月來這裡能享受什麼。"
  },
  {
    "word": "white",
    "pos": "adj.",
    "cn_def": "白色的；被雪覆蓋而變白的",
    "en_def": "having the color of snow",
    "sentence": "A: Did you enjoy your business trip to Sapporo last week, and did you have any free time to see the city after the meetings? B: Yes, I did, and on the last day the whole city was {{BLANK}} with fresh snow, so I took many beautiful photos of the parks and buildings before my flight home.",
    "cn": "A：你上週去札幌出差玩得開心嗎？開完會後有空到市區看看嗎？ B：有啊，最後一天整座城市都被新雪覆蓋得一片【白】，所以我在搭機回家前拍了很多公園和建築物的美麗照片。"
  },
  {
    "word": "shovel",
    "pos": "v.",
    "cn_def": "用鏟子鏟",
    "en_def": "to move snow or earth with a tool that has a long handle",
    "sentence": "A: Why are the maintenance workers outside the shop so early this morning, before any of the customers have arrived? B: They need to {{BLANK}} the snow away from the entrance and the parking area, because the manager is afraid that shoppers will slip or decide not to come in if the path looks dangerous.",
    "cn": "A：為什麼維修人員這麼早就在店外面，連客人都還沒來？ B：他們需要把入口和停車區的雪【鏟】走，因為經理擔心如果走道看起來很危險，顧客會滑倒或乾脆不進來。"
  },
  {
    "word": "snowman",
    "pos": "n.",
    "cn_def": "雪人",
    "en_def": "a figure of a person made of snow",
    "sentence": "A: What activities have you planned for the children at the company's family day at the mountain lodge next Saturday afternoon? B: We will have a contest to build the best {{BLANK}} in the garden, and the winning family will get a gift card, while the parents can drink hot chocolate inside by the fire.",
    "cn": "A：下週六下午公司在山莊舉辦的家庭日，你為孩子們安排了什麼活動？ B：我們會在花園舉辦堆出最棒【雪人】的比賽，獲勝的家庭可以得到禮券，家長們則可以在室內爐火旁喝熱可可。"
  },
  {
    "word": "snowball",
    "pos": "n.",
    "cn_def": "雪球",
    "en_def": "a ball of snow that people throw at each other for fun",
    "sentence": "A: Why were the young interns laughing so loudly in the parking lot during their lunch break this afternoon? B: They were having a friendly {{BLANK}} fight after the first snow of the year, and even the manager joined them for a few minutes before everyone went back inside to work.",
    "cn": "A：為什麼那些年輕實習生今天下午午休時在停車場笑得那麼大聲？ B：今年第一場雪過後，他們在友善地打【雪球】仗，連經理都加入了幾分鐘，之後大家才回到室內工作。"
  },
  {
    "word": "ski",
    "pos": "v.",
    "cn_def": "滑雪",
    "en_def": "to move over snow on long narrow boards",
    "sentence": "A: Are you taking any vacation days after the end of the busy sales season next month, or will you stay in the city? B: I'm going to Hokkaido with my family for a week, because my children want to learn to {{BLANK}}, and the resort there offers lessons for beginners at a very reasonable price.",
    "cn": "A：下個月忙碌的銷售旺季結束後你會請假嗎？還是會留在城裡？ B：我要和家人去北海道一個星期，因為我的孩子們想學【滑雪】，那裡的度假村提供價格非常合理的初學者課程。"
  },
  {
    "word": "sled",
    "pos": "n.",
    "cn_def": "雪橇",
    "en_def": "a small vehicle used for sliding over snow",
    "sentence": "A: How do the tourists get to the small hotel at the top of the hill when the roads are covered with deep snow? B: The hotel staff pull their luggage up on a wooden {{BLANK}}, and guests ride a small shuttle bus that has special tires, so the trip only takes about fifteen minutes.",
    "cn": "A：當道路被厚厚的雪覆蓋時，遊客要怎麼到山頂上那間小飯店？ B：飯店員工會用木製【雪橇】把他們的行李拉上去，客人則搭乘裝有特殊輪胎的小接駁車，所以路程只要大約十五分鐘。"
  },
  {
    "word": "avalanche",
    "pos": "n.",
    "cn_def": "雪崩",
    "en_def": "a large amount of snow that suddenly falls down a mountain",
    "sentence": "A: Why did the mountain resort close the eastern slopes this weekend, even though the weather is clear and sunny? B: Experts said there was a high risk of an {{BLANK}} because so much snow fell this week, so the manager closed those areas to protect visitors and staff from any serious danger.",
    "cn": "A：為什麼山區度假村這個週末關閉了東側雪道，明明天氣晴朗又有陽光？ B：專家說因為這週下了太多雪，發生【雪崩】的風險很高，所以經理關閉了那些區域，以保護遊客和員工免於嚴重危險。"
  },
  {
    "word": "winter",
    "pos": "n.",
    "cn_def": "冬天；冬季",
    "en_def": "the coldest season of the year",
    "sentence": "A: When do you think the company should start selling the new line of warm jackets and wool gloves in our stores? B: We should put them on the shelves in early November, because the {{BLANK}} usually begins a little earlier in the north, and customers like to buy warm clothes before the first cold days.",
    "cn": "A：你覺得公司應該什麼時候開始在店裡販售新系列的保暖外套和羊毛手套？ B：我們應該在十一月初上架，因為北部的【冬天】通常來得早一點，而且顧客喜歡在第一波寒冷天氣來臨前購買保暖衣物。"
  },
  {
    "word": "forecast",
    "pos": "n.",
    "cn_def": "預報；天氣預報",
    "en_def": "a report saying what the weather will probably be like",
    "sentence": "A: Should we cancel the outdoor product launch on Saturday, or is it too early to make a final decision about the event? B: Let's wait until Thursday, because the latest weather {{BLANK}} says heavy snow is possible, but it often changes, and we don't want to cancel if the sky turns out to be clear.",
    "cn": "A：我們應該取消週六的戶外產品發表會嗎？還是現在做最後決定還太早？ B：等到週四再說吧，因為最新的天氣【預報】說可能會下大雪，但預報常常改變，如果到時天氣晴朗，我們可不想白白取消。"
  },
  {
    "word": "melt",
    "pos": "v.",
    "cn_def": "融化",
    "en_def": "to change from solid to liquid because of heat",
    "sentence": "A: When will the workers be able to repair the damaged roof of the warehouse, since the rain is already coming inside? B: They have to wait until the snow on the roof starts to {{BLANK}} in the warmer afternoon sun, because climbing up there now would be too dangerous for anyone on the team.",
    "cn": "A：工人什麼時候才能修理倉庫受損的屋頂？雨水已經滲進來了。 B：他們必須等到屋頂上的雪在午後較溫暖的陽光下開始【融化】，因為現在爬上去對團隊裡任何人來說都太危險了。"
  },
  {
    "word": "thaw",
    "pos": "v.",
    "cn_def": "解凍；融化",
    "en_def": "to become soft or liquid after being frozen",
    "sentence": "A: How long will it take for the frozen fish to be ready for the chef to cook tonight at the restaurant? B: The fish needs about six hours to {{BLANK}} in the refrigerator, so the kitchen staff should take it out of the freezer this morning to make sure it is ready before dinner.",
    "cn": "A：冷凍魚要多久才能準備好，讓主廚今晚在餐廳烹調？ B：魚需要在冰箱冷藏室裡放大約六個小時來【解凍】，所以廚房員工應該今天早上就把它從冷凍庫拿出來，確保晚餐前準備好。"
  },
  {
    "word": "bundle up",
    "pos": "v.phr.",
    "cn_def": "穿得暖暖的；裹得厚厚的",
    "en_def": "to put on a lot of warm clothes",
    "sentence": "A: Is there anything I should prepare before I visit the construction site in the mountains with the engineers next Monday morning? B: You should {{BLANK}} in a thick coat, a hat, and warm gloves, because you'll be standing outside for several hours, and the wind up there can be very strong and cold.",
    "cn": "A：下週一早上我要和工程師去山上的工地，有什麼需要事先準備的嗎？ B：你應該穿上厚外套、戴帽子和保暖手套，把自己【裹得暖暖的】，因為你會在戶外站好幾個小時，而且那裡的風可能又強又冷。"
  },
  {
    "word": "hibernate",
    "pos": "v.",
    "cn_def": "冬眠",
    "en_def": "(of animals) to sleep through the winter",
    "sentence": "A: Why does the zoo's bear area look so empty in the guidebook photos from January, and should we still include it in the tour? B: The bears {{BLANK}} in their caves during the coldest months, so visitors rarely see them then, but we can show the tour group the penguins and the seals instead.",
    "cn": "A：為什麼旅遊指南裡一月拍的動物園熊區照片看起來那麼空？我們還要把它排進行程嗎？ B：熊在最冷的幾個月會躲在洞穴裡【冬眠】，所以那時遊客很少看得到牠們，不過我們可以改帶旅行團去看企鵝和海豹。"
  },
  {
    "word": "blanket",
    "pos": "n.",
    "cn_def": "（覆蓋的）厚層；一片",
    "en_def": "a thick layer of something that covers a surface",
    "sentence": "A: What did the view look like from your hotel window when you woke up during your business trip to Seoul last week? B: The whole city was covered by a thick {{BLANK}} of snow, so the streets looked quiet and beautiful, but our taxi to the meeting took twice as long as usual.",
    "cn": "A：你上週去首爾出差，早上醒來時從飯店窗戶看出去的景色是什麼樣子？ B：整座城市覆蓋著厚厚的【一層】雪，所以街道看起來寧靜又美麗，但我們搭計程車去開會花了平常兩倍的時間。"
  },
  {
    "word": "sparkle",
    "pos": "v.",
    "cn_def": "閃閃發光；閃耀",
    "en_def": "to shine with many small flashes of light",
    "sentence": "A: Why do you think the hotel's photos of the garden at night are so popular with guests on social media this month? B: The lights in the trees make the fresh snow {{BLANK}} like tiny diamonds, so visitors love taking pictures there before dinner, and many of them share the photos online with their friends.",
    "cn": "A：你覺得為什麼飯店花園的夜景照片這個月在社群媒體上這麼受客人歡迎？ B：樹上的燈光讓新雪像小鑽石般【閃閃發光】，所以遊客很喜歡在晚餐前到那裡拍照，很多人還會把照片上傳到網路和朋友分享。"
  },
  {
    "word": "track",
    "pos": "n.",
    "cn_def": "足跡；痕跡",
    "en_def": "a mark left on the ground by a person, animal, or vehicle",
    "sentence": "A: How did the hotel staff find the guest who got lost while walking in the forest behind the resort yesterday afternoon? B: They followed the {{BLANK}} he left in the fresh snow for about two kilometers, and they found him sitting near a small cabin, tired and cold but not injured at all.",
    "cn": "A：飯店員工是怎麼找到昨天下午在度假村後面森林散步時迷路的那位客人？ B：他們沿著他在新雪上留下的【足跡】走了大約兩公里，發現他坐在一間小木屋附近，又累又冷，但完全沒有受傷。"
  }
];

const MCQS = [
  {
    "q": "The ski resort reported the heaviest _____ in ten years last night. Over eighty centimeters of fresh snow now covers all the slopes.",
    "options": [
      "icicle",
      "snowman",
      "snowfall",
      "sled"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Each tiny _____ has its own unique six-sided shape. The new jewelry collection uses this idea for its silver necklaces and earrings.",
    "options": [
      "snowflake",
      "blizzard",
      "slush",
      "drift"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "All flights were canceled because of a severe _____ with strong winds and almost no visibility. Passengers were offered free hotel rooms near the airport.",
    "options": [
      "snowflake",
      "icicle",
      "powder",
      "blizzard"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The city sent out a warning that a major _____ would arrive by Friday evening. Residents were asked to stay home and avoid driving.",
    "options": [
      "snowstorm",
      "snowman",
      "icicle",
      "sled"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Drivers should slow down this evening because the rain is slowly turning into _____. The wet, icy pieces make the roads very slippery.",
    "options": [
      "powder",
      "sleet",
      "snowman",
      "icicle"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The farmers lost much of their apple crop when _____ fell for twenty minutes. The small balls of ice damaged the fruit badly.",
    "options": [
      "slush",
      "drift",
      "snowman",
      "hail"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "There was a light _____ on all the car windows this morning. I had to scrape it off before driving to the office.",
    "options": [
      "avalanche",
      "snowman",
      "frost",
      "sled"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Please be careful on the front steps of the building today. There is a thin layer of _____ after last night's freezing rain.",
    "options": [
      "snowman",
      "avalanche",
      "forecast",
      "ice"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "A sharp _____ fell from the roof of the store and nearly hit a customer. The manager asked staff to remove the others immediately.",
    "options": [
      "flurry",
      "icicle",
      "forecast",
      "winter"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The melting snow turned the company parking lot into gray _____. Several employees arrived at work with wet shoes and socks.",
    "options": [
      "frost",
      "flurry",
      "slush",
      "snowflake"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The strong wind created a two-meter _____ of snow against the warehouse door overnight. Workers needed an hour to clear it this morning.",
    "options": [
      "drift",
      "flurry",
      "forecast",
      "hail"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Skiers are excited about the fresh _____ on the north slope this morning. The light, dry snow makes the runs smooth and fast.",
    "options": [
      "slush",
      "powder",
      "sleet",
      "hail"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Only a brief snow _____ is expected late this afternoon. It should not cause any delays for evening commuters on the highway.",
    "options": [
      "sled",
      "snowman",
      "flurry",
      "icicle"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The conference room is a little _____ this morning because the heater was off all weekend. Please bring a sweater to the meeting.",
    "options": [
      "chilly",
      "snowy",
      "white",
      "frozen"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Weather experts warn that _____ temperatures will continue all week. Water pipes in older buildings may burst if they are not protected.",
    "options": [
      "white",
      "freezing",
      "snowy",
      "frozen"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Drivers are warned about _____ road conditions on the bridge this morning. Several cars have already slid into the side barriers.",
    "options": [
      "white",
      "chilly",
      "quiet",
      "icy"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The lake behind the hotel is completely _____ in January. Guests can walk across it safely with a trained local guide.",
    "options": [
      "chilly",
      "frozen",
      "eager",
      "rapid"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The travel agency is promoting tours to _____ villages in the Alps this December. Photos of the snow-covered rooftops appear in every brochure.",
    "options": [
      "nervous",
      "generous",
      "snowy",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Many families in the city hope for a _____ Christmas every year. This year, the forecast says snow will fall on December 24.",
    "options": [
      "icy",
      "frozen",
      "chilly",
      "white"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "After the storm, workers had to _____ the snow from the sidewalk in front of the bank. Customers could then enter the building safely.",
    "options": [
      "sparkle",
      "hibernate",
      "shovel",
      "ski"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The children in the hotel garden built a large _____ with a carrot nose. Guests took photos of it all afternoon.",
    "options": [
      "blizzard",
      "snowman",
      "forecast",
      "flurry"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "During the staff winter trip, the team had a friendly _____ fight in the hotel garden. Everyone was laughing and covered in snow.",
    "options": [
      "snowball",
      "avalanche",
      "icicle",
      "forecast"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Our travel package includes three lessons for guests who want to learn to _____. Boots and other equipment can be rented at the resort.",
    "options": [
      "thaw",
      "hibernate",
      "shovel",
      "ski"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The resort rents a wooden _____ to families who want to slide down the small hill. Children under six must ride with an adult.",
    "options": [
      "flurry",
      "sled",
      "forecast",
      "frost"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Because of the high _____ risk, the ski patrol closed the eastern slope today. Large amounts of snow could suddenly slide down the mountain.",
    "options": [
      "avalanche",
      "snowman",
      "sled",
      "icicle"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Sales of gloves and wool hats always rise at the start of _____. Our stores should receive the new stock before November.",
    "options": [
      "forecast",
      "blanket",
      "winter",
      "powder"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "According to the weather _____, heavy snow will fall on Saturday afternoon. The outdoor concert in the park may be moved indoors.",
    "options": [
      "blanket",
      "drift",
      "powder",
      "forecast"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The snow on the roof began to _____ when the sun came out at noon. Water then started dripping onto the cars parked below.",
    "options": [
      "melt",
      "shovel",
      "ski",
      "hibernate"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Please let the frozen chicken _____ in the refrigerator overnight before cooking. Cooking it while it is still hard is not safe.",
    "options": [
      "sparkle",
      "thaw",
      "ski",
      "shovel"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Temperatures will fall to minus ten tonight, so you should _____ before leaving the office. Wear a coat, a scarf, and gloves.",
    "options": [
      "show up",
      "give up",
      "bundle up",
      "take off"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "snowfall": {
    "pos": "n.",
    "en_def": "the amount of snow that falls in one place or time",
    "cn_def": "降雪；降雪量"
  },
  "snowflake": {
    "pos": "n.",
    "en_def": "a single small piece of snow",
    "cn_def": "雪花"
  },
  "blizzard": {
    "pos": "n.",
    "en_def": "a very bad snowstorm with strong winds",
    "cn_def": "暴風雪"
  },
  "snowstorm": {
    "pos": "n.",
    "en_def": "a storm with a lot of snow",
    "cn_def": "暴風雪；雪暴"
  },
  "sleet": {
    "pos": "n.",
    "en_def": "a mix of rain and snow, or rain that is partly frozen",
    "cn_def": "雨夾雪；凍雨"
  },
  "hail": {
    "pos": "n.",
    "en_def": "small balls of ice that fall from the sky like rain",
    "cn_def": "冰雹"
  },
  "frost": {
    "pos": "n.",
    "en_def": "a thin white layer of ice that forms when it is very cold",
    "cn_def": "霜；霜凍"
  },
  "ice": {
    "pos": "n.",
    "en_def": "water that has become hard because it is very cold",
    "cn_def": "冰"
  },
  "icicle": {
    "pos": "n.",
    "en_def": "a long pointed piece of ice that hangs down from something",
    "cn_def": "冰柱"
  },
  "slush": {
    "pos": "n.",
    "en_def": "snow that is partly melted and wet and dirty",
    "cn_def": "半融的雪；雪泥"
  },
  "drift": {
    "pos": "n.",
    "en_def": "a pile of snow that the wind has blown into one place",
    "cn_def": "雪堆"
  },
  "powder": {
    "pos": "n.",
    "en_def": "fresh, light, dry snow that is good for skiing",
    "cn_def": "粉雪；新雪"
  },
  "flurry": {
    "pos": "n.",
    "en_def": "a short time when a little snow falls",
    "cn_def": "陣雪；小陣雪"
  },
  "chilly": {
    "pos": "adj.",
    "en_def": "cold in a way that is not comfortable",
    "cn_def": "寒冷的；涼颼颼的"
  },
  "freezing": {
    "pos": "adj.",
    "en_def": "extremely cold",
    "cn_def": "極冷的；冰冷的"
  },
  "icy": {
    "pos": "adj.",
    "en_def": "covered with ice",
    "cn_def": "結冰的；覆蓋著冰的"
  },
  "frozen": {
    "pos": "adj.",
    "en_def": "turned into ice because of the cold",
    "cn_def": "結冰的；冷凍的"
  },
  "snowy": {
    "pos": "adj.",
    "en_def": "covered with snow, or with a lot of snow",
    "cn_def": "下雪的；積雪的"
  },
  "white": {
    "pos": "adj.",
    "en_def": "having the color of snow",
    "cn_def": "白色的；被雪覆蓋而變白的"
  },
  "shovel": {
    "pos": "v.",
    "en_def": "to move snow or earth with a tool that has a long handle",
    "cn_def": "用鏟子鏟"
  },
  "snowman": {
    "pos": "n.",
    "en_def": "a figure of a person made of snow",
    "cn_def": "雪人"
  },
  "snowball": {
    "pos": "n.",
    "en_def": "a ball of snow that people throw at each other for fun",
    "cn_def": "雪球"
  },
  "ski": {
    "pos": "v.",
    "en_def": "to move over snow on long narrow boards",
    "cn_def": "滑雪"
  },
  "sled": {
    "pos": "n.",
    "en_def": "a small vehicle used for sliding over snow",
    "cn_def": "雪橇"
  },
  "avalanche": {
    "pos": "n.",
    "en_def": "a large amount of snow that suddenly falls down a mountain",
    "cn_def": "雪崩"
  },
  "winter": {
    "pos": "n.",
    "en_def": "the coldest season of the year",
    "cn_def": "冬天；冬季"
  },
  "forecast": {
    "pos": "n.",
    "en_def": "a report saying what the weather will probably be like",
    "cn_def": "預報；天氣預報"
  },
  "melt": {
    "pos": "v.",
    "en_def": "to change from solid to liquid because of heat",
    "cn_def": "融化"
  },
  "thaw": {
    "pos": "v.",
    "en_def": "to become soft or liquid after being frozen",
    "cn_def": "解凍；融化"
  },
  "bundle up": {
    "pos": "v.phr.",
    "en_def": "to put on a lot of warm clothes",
    "cn_def": "穿得暖暖的；裹得厚厚的"
  },
  "hibernate": {
    "pos": "v.",
    "en_def": "(of animals) to sleep through the winter",
    "cn_def": "冬眠"
  },
  "blanket": {
    "pos": "n.",
    "en_def": "a thick layer of something that covers a surface",
    "cn_def": "（覆蓋的）厚層；一片"
  },
  "sparkle": {
    "pos": "v.",
    "en_def": "to shine with many small flashes of light",
    "cn_def": "閃閃發光；閃耀"
  },
  "track": {
    "pos": "n.",
    "en_def": "a mark left on the ground by a person, animal, or vehicle",
    "cn_def": "足跡；痕跡"
  }
};

const EXTRA_GLOSSES = {};
