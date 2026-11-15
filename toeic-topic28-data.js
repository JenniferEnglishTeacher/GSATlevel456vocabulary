// Topic 28 Quiz Data: Bicycle 自行車
// Source word list: https://www.examword.com/group-topic/bicycle — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T28 - Bicycle 自行車",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pedal",
    "pos": "v.",
    "cn_def": "踩踏板；騎（腳踏車）",
    "en_def": "to push the pedals of a bike with your feet to make it move",
    "sentence": "A: Why are you so tired this morning, and did you have to come to the office by bike again because your car is still at the repair shop? B: Yes, and the route from my apartment goes up a long, steep hill, so I had to {{BLANK}} very hard for twenty minutes before I finally reached the building.",
    "cn": "A：你今天早上為什麼這麼累？是不是因為你的車還在修車廠，所以又得騎腳踏車來辦公室？ B：對，而且從我公寓出發的路線要爬一段又長又陡的坡，所以我得用力【踩踏板】整整二十分鐘才終於到達大樓。"
  },
  {
    "word": "wheel",
    "pos": "n.",
    "cn_def": "輪子；車輪",
    "en_def": "a round object that turns to let a bike or car move",
    "sentence": "A: Can you tell me why the delivery bike didn't arrive at the customer's address on time yesterday afternoon? B: The rider hit a deep hole near the train station, and the front {{BLANK}} got badly bent, so he had to push the bike to the nearest shop and wait an hour for repairs.",
    "cn": "A：你能告訴我為什麼昨天下午送貨腳踏車沒有準時抵達客戶地址嗎？ B：騎士在火車站附近撞到一個很深的坑洞，前【輪】嚴重變形，所以他必須把車推到最近的店，等了一個小時修理。"
  },
  {
    "word": "tire",
    "pos": "n.",
    "cn_def": "輪胎",
    "en_def": "the rubber ring filled with air around a wheel",
    "sentence": "A: Before we lend these company bikes to the visitors for the city tour this weekend, is there anything we should check first? B: Please make sure each {{BLANK}} has enough air in it, because the bikes have been sitting in the storage room for months, and a flat one could ruin the whole trip.",
    "cn": "A：這個週末我們把公司腳踏車借給訪客做城市導覽之前，有什麼需要先檢查的嗎？ B：請確認每個【輪胎】的氣都夠，因為這些腳踏車已經在儲藏室放了好幾個月，一個洩了氣的就可能毀了整趟行程。"
  },
  {
    "word": "handlebar",
    "pos": "n.",
    "cn_def": "（腳踏車的）把手；車把",
    "en_def": "the bar at the front of a bike that you hold to steer",
    "sentence": "A: Do you think this used bike is a good choice for my daily trip to the office, or should I spend more money on a new one? B: It looks fine overall, but the {{BLANK}} is a little loose, so you should tighten it before you ride in heavy traffic, or you might lose control when you turn.",
    "cn": "A：你覺得這台二手腳踏車適合我每天上班騎嗎？還是我應該多花點錢買台新的？ B：整體看起來不錯，但【車把手】有點鬆，所以你在車流量大的地方騎之前應該先鎖緊，否則轉彎時可能會失控。"
  },
  {
    "word": "seat",
    "pos": "n.",
    "cn_def": "座位；座椅",
    "en_def": "the part of a bike or vehicle that you sit on",
    "sentence": "A: My back hurts after riding to work every day this week, so what do you think the problem could be? B: I noticed that your {{BLANK}} is too low for someone as tall as you, so you should raise it a few centimeters, and your knees and back will feel much better after a few days.",
    "cn": "A：這週我每天騎車上班後背都很痛，你覺得可能是什麼問題？ B：我注意到你的【座椅】對像你這麼高的人來說太低了，所以你應該把它調高幾公分，幾天後你的膝蓋和背就會舒服很多。"
  },
  {
    "word": "frame",
    "pos": "n.",
    "cn_def": "車架；框架",
    "en_def": "the main metal or carbon structure of a bike",
    "sentence": "A: Why is this bike in the shop window so much more expensive than the others, even though it looks almost the same? B: Its {{BLANK}} is made of carbon instead of steel, so the whole bike is lighter and stronger, which is why professional racers and serious riders are willing to pay the higher price.",
    "cn": "A：櫥窗裡這台腳踏車看起來和其他的幾乎一樣，為什麼貴這麼多？ B：它的【車架】是用碳纖維而不是鋼做的，所以整台車更輕更堅固，這就是為什麼職業選手和認真的車友願意付較高的價錢。"
  },
  {
    "word": "chain",
    "pos": "n.",
    "cn_def": "（腳踏車）鏈條",
    "en_def": "a line of metal rings that turns the back wheel when you pedal",
    "sentence": "A: I heard a strange noise from my bike all the way to the meeting this morning, so do you know what might be wrong with it? B: It is probably the {{BLANK}}, because it looks dry and a little rusty, so you should clean it and add some oil before you ride home this evening.",
    "cn": "A：今天早上我一路騎去開會，腳踏車都發出奇怪的聲音，你知道可能是哪裡出問題嗎？ B：可能是【鏈條】，因為它看起來很乾又有點生鏽，所以你今晚騎回家前應該先清理並上點油。"
  },
  {
    "word": "gear",
    "pos": "n.",
    "cn_def": "排檔；齒輪",
    "en_def": "a part that controls how hard or easy it is to pedal",
    "sentence": "A: How did you manage to ride all the way up that steep hill to the conference center without stopping even once? B: I changed to a lower {{BLANK}} at the bottom of the hill, so pedaling became much easier, and I could keep a steady pace even though I was carrying a heavy laptop bag.",
    "cn": "A：你是怎麼一路騎上那個陡坡到會議中心，中間一次都沒停下來的？ B：我在坡底就換到較低的【檔位】，所以踩起來輕鬆多了，即使背著很重的筆電包也能保持穩定的速度。"
  },
  {
    "word": "brake",
    "pos": "n.",
    "cn_def": "煞車；制動器",
    "en_def": "the part you use to slow down or stop a bike",
    "sentence": "A: Why did the bike rental shop give you a discount when you returned the bike yesterday afternoon? B: The back {{BLANK}} didn't work well when I was riding down the hill near the river, so I almost hit a car, and the manager apologized and gave me half my money back.",
    "cn": "A：你昨天下午還車時，腳踏車租借店為什麼給你折扣？ B：我在河邊附近騎下坡時，後【煞車】不太靈，所以我差點撞到一台車，經理向我道歉並退還一半的錢。"
  },
  {
    "word": "helmet",
    "pos": "n.",
    "cn_def": "安全帽；頭盔",
    "en_def": "a hard hat that protects your head",
    "sentence": "A: Does the company require us to wear any special safety equipment if we join the charity bike race next month? B: Yes, every rider must wear a {{BLANK}} during the whole race, and the organizers will check each person at the starting line, so please remember to bring yours or rent one.",
    "cn": "A：如果我們參加下個月的慈善單車賽，公司要求我們穿戴特別的安全裝備嗎？ B：要，每位騎士整場比賽都必須戴【安全帽】，主辦單位會在起跑線檢查每個人，所以請記得帶你自己的或租一頂。"
  },
  {
    "word": "saddle",
    "pos": "n.",
    "cn_def": "（腳踏車）坐墊；鞍座",
    "en_def": "the seat on a bicycle or on a horse",
    "sentence": "A: After the long weekend bike tour along the coast, which part of the trip was the most uncomfortable for you? B: Honestly, sitting for six hours was hard because the {{BLANK}} on my rental bike was narrow and very hard, so next time I will bring a soft cover or rent a better model.",
    "cn": "A：沿著海岸騎了漫長的週末單車之旅後，對你來說行程中哪個部分最不舒服？ B：說實話，坐六個小時很辛苦，因為我租的腳踏車【坐墊】又窄又硬，所以下次我會帶個軟墊套或租個比較好的車款。"
  },
  {
    "word": "spoke",
    "pos": "n.",
    "cn_def": "（車輪的）輻條",
    "en_def": "one of the thin metal bars that join the center of a wheel to its edge",
    "sentence": "A: The repair technician said my back wheel is not perfectly round anymore, so what exactly caused that problem? B: One thin metal {{BLANK}} broke when you rode over the curb last week, so the wheel lost its shape, and he will need to replace it and adjust the others before you ride again.",
    "cn": "A：維修技師說我的後輪已經不再是完美的圓形，到底是什麼造成這個問題？ B：上週你騎過路緣石時，一根細細的金屬【輻條】斷了，所以車輪變形，他在你再騎之前需要更換它並調整其他的輻條。"
  },
  {
    "word": "hub",
    "pos": "n.",
    "cn_def": "（車輪的）輪轂；花鼓；中心",
    "en_def": "the center part of a wheel that turns around the axle; also a central place",
    "sentence": "A: Why does my front wheel make a grinding sound and turn so slowly, even after I pumped up the tires this morning? B: The {{BLANK}} in the center of the wheel probably needs new bearings, so take the bike to the shop downtown, and they can usually fix it within one day.",
    "cn": "A：為什麼我的前輪會發出摩擦聲而且轉得那麼慢，即使今天早上已經把輪胎打飽氣了？ B：車輪中心的【花鼓】可能需要換新的軸承，所以把車牽去市中心的店，他們通常一天內就能修好。"
  },
  {
    "word": "ride",
    "pos": "v.",
    "cn_def": "騎（腳踏車、馬等）",
    "en_def": "to sit on and control a bike, motorbike or horse as it moves",
    "sentence": "A: Since the subway is closed for repairs all next week, how are you planning to get to the office downtown every morning? B: I will {{BLANK}} my bike along the river path, because it only takes about twenty-five minutes, and I can avoid the crowded buses and the heavy traffic on the main streets.",
    "cn": "A：既然下週地鐵整週都因維修而關閉，你打算每天早上怎麼去市中心的辦公室？ B：我會沿著河濱步道【騎】腳踏車，因為只要大約二十五分鐘，而且可以避開擁擠的公車和主要街道上的車潮。"
  },
  {
    "word": "cycle",
    "pos": "v.",
    "cn_def": "騎自行車",
    "en_def": "to ride a bicycle",
    "sentence": "A: What did your team decide to do for the company's health month, since many people wanted an outdoor activity this year? B: We decided to {{BLANK}} together around the lake every Saturday morning, and the company will pay for bike rentals and breakfast for everyone who joins at least three times.",
    "cn": "A：既然今年很多人想要戶外活動，你們團隊決定在公司健康月做什麼？ B：我們決定每週六早上一起繞湖【騎單車】，而且公司會替參加至少三次的每個人支付租車費和早餐。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "the ability to stay steady without falling",
    "sentence": "A: Why did the new delivery worker fall off his bike in front of the restaurant this afternoon? Was anyone hurt? B: He was carrying too many boxes on the back, so he lost his {{BLANK}} when he turned the corner too quickly, but luckily he only hurt his arm a little and the food was fine.",
    "cn": "A：新來的外送員今天下午為什麼在餐廳前從腳踏車上摔下來？有人受傷嗎？ B：他後座載了太多箱子，所以轉彎太快時失去了【平衡】，但幸好他只是手臂受了點輕傷，餐點也沒事。"
  },
  {
    "word": "speed",
    "pos": "n.",
    "cn_def": "速度",
    "en_def": "how fast something moves",
    "sentence": "A: Are there any special rules for riding company bikes inside the factory area that new employees should know about? B: Yes, you must keep your {{BLANK}} under ten kilometers per hour near the loading area, because forklifts and workers move around there all day and accidents can happen very easily.",
    "cn": "A：在工廠區內騎公司腳踏車，有沒有什麼新員工應該知道的特別規定？ B：有，在裝卸區附近你必須把【速度】保持在每小時十公里以下，因為堆高機和工人整天都在那裡來來去去，很容易發生意外。"
  },
  {
    "word": "trail",
    "pos": "n.",
    "cn_def": "小徑；步道",
    "en_def": "a path through the countryside, a forest, or mountains",
    "sentence": "A: Do you know a good place where our department could go cycling for the team-building day next month? B: There is a beautiful {{BLANK}} through the forest just outside the city, and it is wide and flat enough for beginners, so even colleagues who rarely ride could enjoy it safely.",
    "cn": "A：你知道下個月團隊建立日我們部門可以去哪裡騎單車嗎？ B：城外有一條穿過森林的美麗【小徑】，夠寬也夠平坦，適合初學者，所以就算是很少騎車的同事也能安全地享受。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between home and work",
    "sentence": "A: Why did you decide to move to an apartment so close to the office, even though the rent there is much higher? B: I used to {{BLANK}} by bus for almost two hours every day, which made me very tired, so now I save time and can simply bike to work in ten minutes.",
    "cn": "A：你為什麼決定搬到離公司這麼近的公寓，即使那裡的房租貴很多？ B：我以前每天搭公車【通勤】將近兩個小時，讓我非常疲累，所以現在我省下時間，只要騎十分鐘腳踏車就能上班。"
  },
  {
    "word": "mountain",
    "pos": "n.",
    "cn_def": "山；山岳",
    "en_def": "a very high hill",
    "sentence": "A: What are your plans for the long holiday weekend, since the weather report says it will be sunny and cool? B: A few friends from the marketing team and I are going to ride our bikes up a {{BLANK}} near the national park, and we plan to camp at the top and watch the sunrise.",
    "cn": "A：氣象預報說天氣會晴朗涼爽，你連假週末有什麼計畫？ B：我和行銷團隊的幾個朋友要騎腳踏車登上國家公園附近的一座【山】，我們打算在山頂露營看日出。"
  },
  {
    "word": "road",
    "pos": "n.",
    "cn_def": "道路；馬路",
    "en_def": "a wide way for cars and bikes to travel on",
    "sentence": "A: Is it safe to ride a bike from the hotel to the convention center, or should our guests take a taxi instead? B: It is fairly safe, but the main {{BLANK}} has no bike lane and lots of trucks, so guests should use the quieter side streets and follow the green signs.",
    "cn": "A：從飯店騎腳踏車到會展中心安全嗎？還是我們的客人應該改搭計程車？ B：還算安全，但主要【道路】沒有自行車道而且卡車很多，所以客人應該走比較安靜的小巷並跟著綠色標誌走。"
  },
  {
    "word": "grip",
    "pos": "n.",
    "cn_def": "緊握；抓握力；抓地力",
    "en_def": "a firm hold on something",
    "sentence": "A: It rained heavily during my ride to work this morning, so why did I feel like my hands kept sliding while I was steering? B: The rubber covers on your handlebars are old and smooth, so you have a poor {{BLANK}}, and you should buy new ones before riding in wet weather again.",
    "cn": "A：今天早上我騎車上班時下大雨，為什麼我在控制方向時一直覺得手在打滑？ B：你把手上的橡膠套又舊又光滑，所以【抓握力】很差，你在下次雨天騎車之前應該買新的。"
  },
  {
    "word": "reflector",
    "pos": "n.",
    "cn_def": "反光片；反光鏡",
    "en_def": "a small piece of plastic or glass that shines when light hits it",
    "sentence": "A: The police stopped me on my way home last night and warned me about my bike, but what did I do wrong? B: Your bike has no light or {{BLANK}} on the back, so drivers can't see you in the dark, and the law requires every bike to have one for riding safely at night.",
    "cn": "A：昨晚我回家路上被警察攔下來，警告我腳踏車的問題，我到底做錯了什麼？ B：你的腳踏車後面沒有車燈或【反光片】，所以駕駛在黑暗中看不到你，法律規定每台腳踏車都要裝一個才能在夜間安全騎乘。"
  },
  {
    "word": "lightweight",
    "pos": "adj.",
    "cn_def": "輕量的；重量輕的",
    "en_def": "not heavy",
    "sentence": "A: Which bike would you recommend for our sales staff, who often need to carry their bikes up the stairs to the train platform? B: I suggest this {{BLANK}} folding model, because it weighs less than ten kilos, and it fits easily under a desk when they arrive at the office.",
    "cn": "A：我們的業務員常常需要把腳踏車扛上樓梯到火車月台，你會推薦哪一款腳踏車？ B：我建議這款【輕量】摺疊車，因為它重量不到十公斤，而且他們抵達辦公室時可以輕鬆地放在桌子底下。"
  },
  {
    "word": "durable",
    "pos": "adj.",
    "cn_def": "耐用的；持久的",
    "en_def": "able to last a long time without breaking",
    "sentence": "A: Why did the delivery company choose these bikes even though they cost more than the cheaper models from other suppliers? B: They are very {{BLANK}}, so they can be used every day in rain and heat for many years, and in the end the company actually saves money on repairs and replacements.",
    "cn": "A：外送公司為什麼選這些腳踏車，即使它們比其他供應商的便宜款式還貴？ B：它們非常【耐用】，可以在雨天和高溫下每天使用好幾年，所以最後公司其實在維修和更換上省了錢。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "保養；維修",
    "en_def": "the work of keeping something in good condition",
    "sentence": "A: How often should the office send the shared bikes to the repair shop to make sure they stay in good condition? B: They should get regular {{BLANK}} every three months, including cleaning, oiling the chains, and checking the brakes, so small problems don't turn into expensive repairs later.",
    "cn": "A：辦公室應該多久把共用腳踏車送去修車店一次，以確保它們維持良好狀態？ B：它們應該每三個月做一次定期【保養】，包括清潔、替鏈條上油和檢查煞車，這樣小問題才不會在之後變成昂貴的維修。"
  },
  {
    "word": "fitness",
    "pos": "n.",
    "cn_def": "健康；體能",
    "en_def": "the condition of being healthy and strong",
    "sentence": "A: Have you noticed that Daniel seems much healthier and more energetic at work since the beginning of this year? B: Yes, he started cycling thirty kilometers every weekend to improve his {{BLANK}}, and he told me he has lost five kilos and sleeps much better than before.",
    "cn": "A：你有沒有注意到，從今年年初開始，丹尼爾在工作時看起來健康許多、也更有活力？ B：有，他開始每個週末騎三十公里來提升【體能】，他告訴我他瘦了五公斤，而且睡得比以前好多了。"
  },
  {
    "word": "eco-friendly",
    "pos": "adj.",
    "cn_def": "環保的；對環境友善的",
    "en_def": "not harmful to the environment",
    "sentence": "A: Why is the city government giving free bike passes to office workers in the downtown area this year? B: It wants people to choose a more {{BLANK}} way to get to work, because fewer cars mean cleaner air, less noise, and lower carbon emissions for everyone living in the city.",
    "cn": "A：市政府今年為什麼要發免費的腳踏車通行證給市中心的上班族？ B：它希望大家選擇更【環保】的方式上班，因為汽車少了，代表城市裡的每個人都能享有更乾淨的空氣、更少的噪音和更低的碳排放。"
  }
];

const MCQS = [
  {
    "q": "The new trainee had never used a bike before. The instructor showed her how to _____ smoothly with both feet while keeping her back straight.",
    "options": [
      "ride",
      "pedal",
      "cycle",
      "commute"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The delivery truck could not move after the accident. One _____ came off and rolled into the street.",
    "options": [
      "fitness",
      "helmet",
      "trail",
      "wheel"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "This laptop bag weighs less than half a kilo. It is so _____ that you can carry it all day without feeling tired.",
    "options": [
      "lightweight",
      "eco-friendly",
      "fitness",
      "durable"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Paul was late for the meeting because his car had a flat _____. He had to wait forty minutes for roadside help.",
    "options": [
      "speed",
      "trail",
      "tire",
      "frame"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "When you turn a corner, hold the _____ firmly with both hands. Never let go of it while the bike is moving.",
    "options": [
      "maintenance",
      "reflector",
      "mountain",
      "handlebar"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Mr. Lin lives in a small town far from the city. He has to _____ for ninety minutes each way by train.",
    "options": [
      "commute",
      "pedal",
      "cycle",
      "ride"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The concert hall was almost full when we arrived. We finally found an empty _____ in the last row near the exit.",
    "options": [
      "gear",
      "spoke",
      "seat",
      "trail"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The painting was beautiful, but its wooden _____ was broken. The gallery sent it to a workshop to be repaired.",
    "options": [
      "chain",
      "frame",
      "tire",
      "speed"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The factory machines will be turned off on Saturday for regular _____. Workers do not need to come in that day.",
    "options": [
      "fitness",
      "balance",
      "maintenance",
      "trail"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The hotel group owns more than fifty properties in Asia. It is the largest hotel _____ in the region.",
    "options": [
      "saddle",
      "chain",
      "grip",
      "hub"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "These work boots are made of thick leather and strong rubber. They are _____ enough to last for at least five years.",
    "options": [
      "durable",
      "lightweight",
      "eco-friendly",
      "maintenance"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The truck driver moved into a lower _____ before going down the steep mountain road. This helped him control the heavy vehicle.",
    "options": [
      "seat",
      "balance",
      "hub",
      "gear"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The bus driver saw a child run into the street. She hit the _____ immediately, and the bus stopped just in time.",
    "options": [
      "brake",
      "fitness",
      "saddle",
      "spoke"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Before she joined the delivery team, Maria had to prove she could _____ a motorbike safely. She passed the test on her first try.",
    "options": [
      "pedal",
      "cycle",
      "commute",
      "ride"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "All visitors to the construction site must wear a hard _____. The safety officer will check everyone at the main gate.",
    "options": [
      "chain",
      "helmet",
      "wheel",
      "reflector"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The riding school bought new equipment last month. Before each lesson, the trainer checks that every _____ is fastened tightly to the horse.",
    "options": [
      "spoke",
      "handlebar",
      "saddle",
      "trail"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The repair shop fixed my back wheel this morning. The mechanic replaced one broken _____ and adjusted the others.",
    "options": [
      "spoke",
      "helmet",
      "fitness",
      "road"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The hotel uses solar power and recycles all of its waste. Guests like staying there because it is very _____.",
    "options": [
      "lightweight",
      "durable",
      "trail",
      "eco-friendly"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The airport in Singapore is a major travel _____ in Asia. Millions of passengers change planes there every year.",
    "options": [
      "gear",
      "grip",
      "hub",
      "saddle"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The triathlon starts at seven in the morning. Athletes must swim, _____, and run a total of fifty kilometers before noon.",
    "options": [
      "commute",
      "cycle",
      "pedal",
      "brake"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Standing on one leg is a good exercise for older people. It helps them improve their _____ and avoid falls at home.",
    "options": [
      "chain",
      "mountain",
      "reflector",
      "balance"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Drivers must reduce their _____ near schools during class hours. The limit in these areas is thirty kilometers per hour.",
    "options": [
      "frame",
      "hub",
      "speed",
      "saddle"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Our hiking group followed a narrow _____ through the forest. After three hours, we reached a beautiful waterfall.",
    "options": [
      "gear",
      "trail",
      "brake",
      "seat"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The ski resort is located high on a snowy _____. Visitors can take a cable car to the top in fifteen minutes.",
    "options": [
      "mountain",
      "chain",
      "grip",
      "tire"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The city will close the main _____ to the airport for repairs this weekend. Travelers should leave home earlier than usual.",
    "options": [
      "saddle",
      "spoke",
      "road",
      "helmet"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The new running shoes have special rubber soles. They give runners a better _____ on wet and slippery surfaces.",
    "options": [
      "grip",
      "speed",
      "frame",
      "hub"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Cyclists should put a _____ on the back of their bikes. It shines when car lights hit it at night.",
    "options": [
      "maintenance",
      "reflector",
      "mountain",
      "gear"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The company opened a small gym on the third floor. Employees can use it to improve their _____ during lunch breaks.",
    "options": [
      "maintenance",
      "trail",
      "reflector",
      "fitness"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Customers often complain that cheap phone cases break easily. Our new case is far more _____ and comes with a two-year guarantee.",
    "options": [
      "speed",
      "lightweight",
      "durable",
      "eco-friendly"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The building's elevator broke down twice last month. The manager has called the _____ team to check it again.",
    "options": [
      "fitness",
      "maintenance",
      "chain",
      "speed"
    ],
    "answer": 1,
    "vocabIndex": 25
  }
];

const LOOKUP = {
  "pedal": {
    "pos": "v.",
    "en_def": "to push the pedals of a bike with your feet to make it move",
    "cn_def": "踩踏板；騎（腳踏車）"
  },
  "wheel": {
    "pos": "n.",
    "en_def": "a round object that turns to let a bike or car move",
    "cn_def": "輪子；車輪"
  },
  "tire": {
    "pos": "n.",
    "en_def": "the rubber ring filled with air around a wheel",
    "cn_def": "輪胎"
  },
  "handlebar": {
    "pos": "n.",
    "en_def": "the bar at the front of a bike that you hold to steer",
    "cn_def": "（腳踏車的）把手；車把"
  },
  "seat": {
    "pos": "n.",
    "en_def": "the part of a bike or vehicle that you sit on",
    "cn_def": "座位；座椅"
  },
  "frame": {
    "pos": "n.",
    "en_def": "the main metal or carbon structure of a bike",
    "cn_def": "車架；框架"
  },
  "chain": {
    "pos": "n.",
    "en_def": "a line of metal rings that turns the back wheel when you pedal",
    "cn_def": "（腳踏車）鏈條"
  },
  "gear": {
    "pos": "n.",
    "en_def": "a part that controls how hard or easy it is to pedal",
    "cn_def": "排檔；齒輪"
  },
  "brake": {
    "pos": "n.",
    "en_def": "the part you use to slow down or stop a bike",
    "cn_def": "煞車；制動器"
  },
  "helmet": {
    "pos": "n.",
    "en_def": "a hard hat that protects your head",
    "cn_def": "安全帽；頭盔"
  },
  "saddle": {
    "pos": "n.",
    "en_def": "the seat on a bicycle or on a horse",
    "cn_def": "（腳踏車）坐墊；鞍座"
  },
  "spoke": {
    "pos": "n.",
    "en_def": "one of the thin metal bars that join the center of a wheel to its edge",
    "cn_def": "（車輪的）輻條"
  },
  "hub": {
    "pos": "n.",
    "en_def": "the center part of a wheel that turns around the axle; also a central place",
    "cn_def": "（車輪的）輪轂；花鼓；中心"
  },
  "ride": {
    "pos": "v.",
    "en_def": "to sit on and control a bike, motorbike or horse as it moves",
    "cn_def": "騎（腳踏車、馬等）"
  },
  "cycle": {
    "pos": "v.",
    "en_def": "to ride a bicycle",
    "cn_def": "騎自行車"
  },
  "balance": {
    "pos": "n.",
    "en_def": "the ability to stay steady without falling",
    "cn_def": "平衡"
  },
  "speed": {
    "pos": "n.",
    "en_def": "how fast something moves",
    "cn_def": "速度"
  },
  "trail": {
    "pos": "n.",
    "en_def": "a path through the countryside, a forest, or mountains",
    "cn_def": "小徑；步道"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between home and work",
    "cn_def": "通勤"
  },
  "mountain": {
    "pos": "n.",
    "en_def": "a very high hill",
    "cn_def": "山；山岳"
  },
  "road": {
    "pos": "n.",
    "en_def": "a wide way for cars and bikes to travel on",
    "cn_def": "道路；馬路"
  },
  "grip": {
    "pos": "n.",
    "en_def": "a firm hold on something",
    "cn_def": "緊握；抓握力；抓地力"
  },
  "reflector": {
    "pos": "n.",
    "en_def": "a small piece of plastic or glass that shines when light hits it",
    "cn_def": "反光片；反光鏡"
  },
  "lightweight": {
    "pos": "adj.",
    "en_def": "not heavy",
    "cn_def": "輕量的；重量輕的"
  },
  "durable": {
    "pos": "adj.",
    "en_def": "able to last a long time without breaking",
    "cn_def": "耐用的；持久的"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "the work of keeping something in good condition",
    "cn_def": "保養；維修"
  },
  "fitness": {
    "pos": "n.",
    "en_def": "the condition of being healthy and strong",
    "cn_def": "健康；體能"
  },
  "eco-friendly": {
    "pos": "adj.",
    "en_def": "not harmful to the environment",
    "cn_def": "環保的；對環境友善的"
  }
};

const EXTRA_GLOSSES = {};
