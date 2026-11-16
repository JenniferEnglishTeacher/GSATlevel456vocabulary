// Topic 247 Quiz Data: Move 移動
// Source word list: https://www.examword.com/group-topic/move — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T247 - Move 移動",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "motion",
    "pos": "n.",
    "cn_def": "移動；運動；動作",
    "en_def": "the act or process of moving",
    "sentence": "A: Why did the security team install new cameras at the back entrance of the warehouse last week, and who is going to check the recordings? B: The new cameras turn on automatically when they detect any {{BLANK}} after closing time, so the night guard only needs to review the clips that the system sends to his phone.",
    "cn": "A：保全團隊上週為什麼在倉庫後門裝了新的攝影機，誰要負責檢查錄影？ B：新攝影機在下班時間後只要偵測到任何【動作】就會自動開啟，所以夜班警衛只需要檢查系統傳到他手機的影片片段。"
  },
  {
    "word": "movement",
    "pos": "n.",
    "cn_def": "移動；活動；動作",
    "en_def": "the act of changing position or place",
    "sentence": "A: Why does the factory manager want everyone to wear the new badges starting next Monday, even the visitors who only stay for an hour? B: The badges help the safety team follow the {{BLANK}} of people around the building, so they can find everyone quickly if there is a fire or another emergency.",
    "cn": "A：為什麼工廠經理要每個人從下週一開始都配戴新的識別證，連只待一個小時的訪客也一樣？ B：識別證能幫助安全團隊追蹤人員在大樓內的【移動】，如此一來若發生火災或其他緊急情況，他們就能迅速找到每個人。"
  },
  {
    "word": "shift",
    "pos": "v.",
    "cn_def": "移動；轉移；改變",
    "en_def": "to move or change from one position or direction to another",
    "sentence": "A: The sunlight is shining directly on my computer screen every afternoon, and I can hardly read the sales figures in our weekly report. What should I do? B: Why don't you ask the office manager if you can {{BLANK}} your desk a little closer to the wall, away from the large window near the printer?",
    "cn": "A：每天下午陽光都直射在我的電腦螢幕上，我幾乎看不清楚週報裡的銷售數字。我該怎麼辦？ B：你何不問問辦公室經理，看能不能把你的桌子【挪】得離牆近一點，遠離印表機旁邊那扇大窗戶？"
  },
  {
    "word": "relocate",
    "pos": "v.",
    "cn_def": "搬遷；遷移",
    "en_def": "to move to a new place to live or work",
    "sentence": "A: I heard the company is planning some big changes to the head office next year. Do you know what is going to happen to our team? B: Yes, management has decided to {{BLANK}} the whole marketing department to the new building downtown, because the rent there is cheaper and it is closer to the train station.",
    "cn": "A：我聽說公司明年打算對總部做一些重大的改變。你知道我們團隊會怎麼樣嗎？ B：知道，管理層已經決定把整個行銷部門【搬遷】到市中心的新大樓，因為那裡的租金比較便宜，而且離火車站比較近。"
  },
  {
    "word": "transfer",
    "pos": "v.",
    "cn_def": "轉移；調職；轉帳",
    "en_def": "to move someone or something from one place to another",
    "sentence": "A: Will Mr. Lin still be working with us at the Taipei branch after the summer, or has he accepted the offer from the Singapore office? B: The company has agreed to {{BLANK}} him to Singapore in August, so he will spend the next few weeks training the new assistant who will take over his customers.",
    "cn": "A：林先生暑假過後還會在台北分公司跟我們一起工作嗎？還是他已經接受了新加坡辦公室的工作機會？ B：公司已經同意在八月把他【調】到新加坡，所以接下來幾週他會訓練將接手他客戶的新助理。"
  },
  {
    "word": "travel",
    "pos": "v.",
    "cn_def": "旅行；出差；行進",
    "en_def": "to go from one place to another, usually over a long distance",
    "sentence": "A: How often do the regional sales managers need to visit their customers in other countries, and does the company pay for their hotels? B: Most of them {{BLANK}} abroad about twice a month, and the company covers their flights, hotels, and meals as long as they keep all their receipts for the accounting department.",
    "cn": "A：區域業務經理需要多常去拜訪其他國家的客戶？公司會支付他們的飯店費用嗎？ B：他們大多數人每個月大約【出差】到國外兩次，只要他們把所有收據留給會計部，公司就會支付他們的機票、飯店和餐費。"
  },
  {
    "word": "transport",
    "pos": "v.",
    "cn_def": "運輸；運送",
    "en_def": "to take goods or people from one place to another in a vehicle",
    "sentence": "A: The customer in Kaohsiung needs two hundred boxes of printer paper by Friday morning. Can our own delivery vans handle such a large order? B: No, our vans are too small, so we will hire a shipping company with bigger trucks to {{BLANK}} the boxes from the warehouse directly to the customer's office.",
    "cn": "A：高雄的客戶星期五早上前需要兩百箱影印紙。我們自己的送貨車能處理這麼大的訂單嗎？ B：不行，我們的貨車太小了，所以我們會雇用一家有較大卡車的貨運公司，把箱子直接從倉庫【運送】到客戶的辦公室。"
  },
  {
    "word": "carry",
    "pos": "v.",
    "cn_def": "攜帶；搬運",
    "en_def": "to hold something and take it with you",
    "sentence": "A: The conference room is on the fifth floor, and the elevator is being repaired today. How are we going to get the projector and the chairs upstairs? B: I asked two staff members from the warehouse to help us {{BLANK}} the heavy equipment up the stairs before the clients arrive at ten o'clock.",
    "cn": "A：會議室在五樓，而電梯今天正在維修。我們要怎麼把投影機和椅子弄上樓？ B：我請了兩位倉庫的員工在客戶十點抵達前，幫我們把重的設備【搬】上樓梯。"
  },
  {
    "word": "lift",
    "pos": "v.",
    "cn_def": "舉起；抬起",
    "en_def": "to raise something to a higher position",
    "sentence": "A: Why did Kevin hurt his back at the warehouse yesterday afternoon, and will he be able to come to work for the rest of the week? B: He tried to {{BLANK}} a very heavy box of machine parts by himself instead of using the forklift, so the doctor told him to rest at home for three days.",
    "cn": "A：凱文昨天下午為什麼在倉庫傷到背？他這週剩下的時間還能來上班嗎？ B：他沒有使用堆高機，而是試著自己【抬起】一箱非常重的機器零件，所以醫生要他在家休息三天。"
  },
  {
    "word": "push",
    "pos": "v.",
    "cn_def": "推",
    "en_def": "to use force to move something away from you",
    "sentence": "A: The shopping cart at the entrance of the supermarket seems to be stuck. Do you know why customers keep complaining about it to the staff? B: One of the front wheels is broken, so you have to {{BLANK}} it very hard to make it move, and the manager has already asked for new carts from the supplier.",
    "cn": "A：超市入口的購物車好像卡住了。你知道為什麼顧客一直向店員抱怨嗎？ B：其中一個前輪壞了，所以你得非常用力地【推】它才會動，經理已經向供應商要求新的推車了。"
  },
  {
    "word": "pull",
    "pos": "v.",
    "cn_def": "拉",
    "en_def": "to use force to move something toward you",
    "sentence": "A: I can't open the door to the storage room at the end of the hallway, and I need some paper for the copy machine right away. Is it locked? B: No, it isn't locked, but the sign on the door is confusing; you need to {{BLANK}} the handle toward you instead of pushing it.",
    "cn": "A：我打不開走廊盡頭儲藏室的門，而我馬上需要一些影印機用的紙。門鎖住了嗎？ B：沒有，門沒鎖，只是門上的標示讓人搞混；你需要把把手往你的方向【拉】，而不是推它。"
  },
  {
    "word": "drag",
    "pos": "v.",
    "cn_def": "拖；拉",
    "en_def": "to pull something heavy along the ground",
    "sentence": "A: Why are there long scratches all over the new wooden floor in the meeting room, and who is going to pay for the repairs? B: The moving workers decided to {{BLANK}} the heavy cabinets across the room instead of lifting them, so the building manager is asking their company to cover the cost.",
    "cn": "A：會議室新的木地板上為什麼到處都是長長的刮痕？誰要負責付修理費？ B：搬家工人決定把沉重的櫃子在房間裡【拖】過去而不是抬起來，所以大樓管理員正在要求他們的公司負擔費用。"
  },
  {
    "word": "slide",
    "pos": "v.",
    "cn_def": "滑動；滑行",
    "en_def": "to move smoothly over a surface",
    "sentence": "A: The new glass doors at the hotel entrance look very modern, but how do guests with heavy luggage open them without any help from the staff? B: The doors {{BLANK}} open automatically when someone walks toward them, so guests can easily go in and out even when their hands are full.",
    "cn": "A：飯店入口新的玻璃門看起來很現代，但帶著沉重行李的客人在沒有員工幫忙的情況下要怎麼開門？ B：有人朝門走過去時，門會自動【滑】開，所以即使客人雙手拿滿東西也能輕鬆進出。"
  },
  {
    "word": "glide",
    "pos": "v.",
    "cn_def": "滑行；滑翔",
    "en_def": "to move smoothly and quietly without effort",
    "sentence": "A: Why did the airline decide to buy those new passenger planes for its long flights, even though they cost much more than the old ones? B: The new planes {{BLANK}} smoothly through the air with very little noise, so passengers can sleep better, and they also use about twenty percent less fuel.",
    "cn": "A：為什麼航空公司決定為長程航班購買那些新客機，即使它們比舊飛機貴很多？ B：新飛機能幾乎無聲地在空中平穩【滑行】，讓乘客睡得更好，而且還能節省大約百分之二十的燃料。"
  },
  {
    "word": "run",
    "pos": "v.",
    "cn_def": "跑；奔跑",
    "en_def": "to move quickly on foot",
    "sentence": "A: The airport shuttle bus leaves in five minutes, and we still have to get our bags from the hotel front desk. What should we do? B: You go and get the bags from the front desk, and I'll {{BLANK}} to the bus stop and ask the driver to wait for us a little longer.",
    "cn": "A：機場接駁車五分鐘後就要開了，我們還得去飯店櫃台拿行李。我們該怎麼辦？ B：你去櫃台拿行李，我先【跑】到公車站請司機再多等我們一下。"
  },
  {
    "word": "walk",
    "pos": "v.",
    "cn_def": "走路；步行",
    "en_def": "to move on foot at a normal speed",
    "sentence": "A: Is the conference hotel far from the convention center, or do we need to take a taxi every morning during the trade show next week? B: It's only about ten minutes away, so we can {{BLANK}} there after breakfast, and it will save us money and time because the traffic is terrible in that area.",
    "cn": "A：會議飯店離會展中心遠嗎？還是下週商展期間我們每天早上都得搭計程車？ B：只有大約十分鐘的距離，所以我們吃完早餐可以【走路】過去，而且因為那一帶交通很糟，這樣能省錢又省時間。"
  },
  {
    "word": "crawl",
    "pos": "v.",
    "cn_def": "爬行；緩慢行進",
    "en_def": "to move very slowly, often on hands and knees",
    "sentence": "A: Why were you almost an hour late for the client meeting this morning? Did you take a different route from the one you usually use? B: There was a big accident on the highway, so the cars could only {{BLANK}} along at about ten kilometers an hour, and I couldn't find a place to exit.",
    "cn": "A：你今天早上為什麼和客戶開會遲到了將近一小時？你走的路線跟平常不一樣嗎？ B：高速公路上發生了重大車禍，所以車子只能以每小時約十公里的速度【緩慢前進】，我又找不到地方下交流道。"
  },
  {
    "word": "advance",
    "pos": "v.",
    "cn_def": "前進；推進；晉級",
    "en_def": "to move forward",
    "sentence": "A: What did the manager say about the long line of customers outside the store on the first morning of the holiday sale? B: She told the security guards to let people {{BLANK}} slowly into the store in small groups, so nobody would get hurt and the staff could help everyone properly.",
    "cn": "A：經理對假日特賣第一天早上店外排的長長人龍說了什麼？ B：她要警衛讓大家分成小組，慢慢地【前進】進入店裡，這樣才不會有人受傷，員工也能好好地協助每個人。"
  },
  {
    "word": "retreat",
    "pos": "v.",
    "cn_def": "撤退；後退",
    "en_def": "to move back or away from something",
    "sentence": "A: How did the tour guide keep the tourists safe when the storm suddenly hit the beach during the island tour last weekend? B: She told everyone to {{BLANK}} from the water and go back to the hotel immediately, and then she arranged indoor activities for the rest of the afternoon.",
    "cn": "A：上週末的海島旅遊中，暴風雨突然襲擊海灘時，導遊是如何確保遊客安全的？ B：她要大家立刻從水邊【撤離】並回到飯店，然後為下午剩下的時間安排了室內活動。"
  },
  {
    "word": "rotate",
    "pos": "v.",
    "cn_def": "旋轉；輪流；輪調",
    "en_def": "to turn around a center point; to take turns doing a job",
    "sentence": "A: The night shift is really tiring, and some of the factory workers have been complaining to the supervisor. Is the company going to change the schedule? B: Yes, starting next month, the supervisor will {{BLANK}} the workers between the day and night shifts every two weeks, so nobody has to work at night all the time.",
    "cn": "A：夜班真的很累人，有些工廠員工一直在向主管抱怨。公司會調整班表嗎？ B：會，從下個月開始，主管會每兩週讓員工在日班和夜班之間【輪調】，這樣就沒有人得一直上夜班。"
  },
  {
    "word": "spin",
    "pos": "v.",
    "cn_def": "旋轉",
    "en_def": "to turn around and around quickly",
    "sentence": "A: Why did the laundry service return my hotel shirts so wet this morning, and can they dry them again before my meeting at noon? B: The washing machine stopped working before it could {{BLANK}} the clothes fast enough to remove the water, but the staff will dry your shirts within an hour.",
    "cn": "A：洗衣服務今天早上為什麼把我的飯店襯衫送回來時那麼濕？他們能在我中午開會前再把衣服烘乾嗎？ B：洗衣機在把衣服【轉】得夠快以甩乾水分之前就故障了，不過員工會在一小時內把你的襯衫烘乾。"
  },
  {
    "word": "bounce",
    "pos": "v.",
    "cn_def": "彈起；反彈",
    "en_def": "to move up or away after hitting a surface",
    "sentence": "A: Why did the sports store put a large mat on the floor beside the display of basketballs near the front door? B: Customers like to test how high the new balls {{BLANK}} before they buy them, and the mat protects the floor and reduces the noise for the other shoppers in the store.",
    "cn": "A：運動用品店為什麼在前門附近籃球展示區旁的地上放了一大塊墊子？ B：顧客喜歡在購買前測試新球能【彈】多高，墊子能保護地板，也能為店裡其他購物者減少噪音。"
  },
  {
    "word": "flow",
    "pos": "n.",
    "cn_def": "流動；流量",
    "en_def": "a steady, continuous movement of something",
    "sentence": "A: Why did the city put new traffic lights at the busy corner outside our office building last month? I thought the old ones worked fine. B: The new lights change based on the number of cars, so they keep the {{BLANK}} of traffic smooth during rush hour and help people get to work on time.",
    "cn": "A：市政府上個月為什麼在我們辦公大樓外那個繁忙的路口裝了新的紅綠燈？我以為舊的還能用。 B：新的燈號會根據車輛數量變換，所以能在尖峰時段維持交通【流量】順暢，幫助大家準時上班。"
  },
  {
    "word": "drift",
    "pos": "v.",
    "cn_def": "漂流；漂移",
    "en_def": "to move slowly, carried by water or air",
    "sentence": "A: Why did the harbor manager close the small boat area to visitors this morning, even though the weather looks sunny and calm? B: A strong wind last night made several boats {{BLANK}} away from the dock, so the workers need time to bring them back and check them for damage.",
    "cn": "A：港務經理為什麼今天早上關閉小船區，不讓遊客進入，即使天氣看起來晴朗又平靜？ B：昨晚的強風讓幾艘船從碼頭【漂】走了，所以工人需要時間把它們拖回來並檢查是否有損壞。"
  },
  {
    "word": "migrate",
    "pos": "v.",
    "cn_def": "遷徙；移居",
    "en_def": "to move from one place to another, especially to find work or better conditions",
    "sentence": "A: Why are so many young engineers leaving the small towns in the south and looking for jobs in the north these days? B: Most of them {{BLANK}} to big cities like Taipei and Hsinchu because the technology companies there offer higher salaries and better chances for promotion.",
    "cn": "A：為什麼最近有這麼多年輕工程師離開南部的小鎮，到北部找工作？ B：他們大多數【移居】到台北和新竹這樣的大城市，因為那裡的科技公司提供較高的薪水和較好的升遷機會。"
  },
  {
    "word": "commute",
    "pos": "v.",
    "cn_def": "通勤",
    "en_def": "to travel regularly between home and work",
    "sentence": "A: Your new apartment is in Taoyuan, but our office is in central Taipei. How long does it take you to get to work every morning? B: I {{BLANK}} by high-speed rail and then the MRT, so it takes about fifty minutes, and I usually read emails on the train to save time.",
    "cn": "A：你的新公寓在桃園，可是我們的辦公室在台北市中心。你每天早上上班要花多久時間？ B：我搭高鐵再轉捷運【通勤】，大約需要五十分鐘，而且我通常會在車上讀電子郵件以節省時間。"
  },
  {
    "word": "journey",
    "pos": "n.",
    "cn_def": "旅程；行程",
    "en_def": "an act of traveling from one place to another, especially a long one",
    "sentence": "A: How was your business trip to the factory in Vietnam last week? You look really tired this morning. B: The meetings went well, but the {{BLANK}} back home took almost fourteen hours because my connecting flight in Hong Kong was delayed by bad weather.",
    "cn": "A：你上週到越南工廠的出差如何？你今天早上看起來很累。 B：會議進行得很順利，但回家的【旅程】花了將近十四個小時，因為我在香港的轉機航班因天候不佳而延誤。"
  },
  {
    "word": "trip",
    "pos": "n.",
    "cn_def": "旅行；出差；短途旅程",
    "en_def": "a short journey to a place and back, for work or pleasure",
    "sentence": "A: Is the sales team going anywhere special this year after reaching all of its targets, or will the company just give everyone a bonus? B: The manager is planning a three-day {{BLANK}} to Hualien in October, and the company will pay for the hotel, the meals, and a boat tour.",
    "cn": "A：業務團隊今年達成所有目標後，會去什麼特別的地方嗎？還是公司只會發給大家獎金？ B：經理正在規劃十月去花蓮的三天【旅行】，公司會支付飯店、餐點和乘船遊覽的費用。"
  },
  {
    "word": "relocation",
    "pos": "n.",
    "cn_def": "搬遷；遷移",
    "en_def": "the act of moving to a new place",
    "sentence": "A: Our company will move the research center to Kaohsiung next spring. Will the employees get any help with finding new apartments there? B: Yes, the human resources department will offer a {{BLANK}} package that covers moving costs and two months of rent for every employee who transfers.",
    "cn": "A：我們公司明年春天會把研發中心搬到高雄。員工在那裡找新公寓會得到任何幫助嗎？ B：會，人資部門會提供一套【搬遷】補助方案，為每位調職的員工負擔搬家費用以及兩個月的房租。"
  },
  {
    "word": "mobile",
    "pos": "adj.",
    "cn_def": "可移動的；行動的",
    "en_def": "able to move or be moved easily",
    "sentence": "A: The company wants to offer free health checks to workers at all of its factories this year. How will the nurses visit so many different places? B: The hospital will send a {{BLANK}} clinic, which is a large bus with medical equipment inside, so it can drive to each factory on a different day.",
    "cn": "A：公司今年想為所有工廠的員工提供免費健康檢查。護理師要怎麼去這麼多不同的地方？ B：醫院會派出一輛【行動】診所，那是一輛裡面有醫療設備的大巴士，所以它可以在不同日子開到每間工廠。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "充滿活力的；動態的",
    "en_def": "always moving, changing, and full of energy",
    "sentence": "A: What kind of person is the marketing department looking for to lead the new advertising project for young customers? B: They want a {{BLANK}} team leader who has a lot of fresh ideas, enjoys working under pressure, and can quickly change plans when the market changes.",
    "cn": "A：行銷部門在找什麼樣的人來帶領針對年輕顧客的新廣告專案？ B：他們想要一位【充滿活力的】團隊領導者，要有很多新鮮點子、喜歡在壓力下工作，並能在市場變化時迅速調整計畫。"
  },
  {
    "word": "active",
    "pos": "adj.",
    "cn_def": "活躍的；積極的",
    "en_def": "moving around a lot; busy and full of energy",
    "sentence": "A: Why did the company decide to give every employee a free gym membership this year, even though it costs a lot of money? B: The managers believe that staff who stay {{BLANK}} and exercise regularly take fewer sick days, feel happier at work, and get more done every week.",
    "cn": "A：公司今年為什麼決定給每位員工免費的健身房會員資格，即使那要花很多錢？ B：主管們相信，保持【活躍】並規律運動的員工請病假的天數比較少，工作時比較快樂，每週也能完成更多事情。"
  },
  {
    "word": "steadily",
    "pos": "adv.",
    "cn_def": "穩定地；平穩地",
    "en_def": "at a regular and even speed or rate",
    "sentence": "A: How have sales of our electric scooters been doing since we opened the new store near the university last year? B: They have grown {{BLANK}} every month, without any big jumps or drops, so the manager plans to hire two more salespeople and keep the store open later on weekends.",
    "cn": "A：自從我們去年在大學附近開了新店之後，我們的電動機車銷售狀況如何？ B：每個月都【穩定地】成長，沒有大起大落，所以經理打算再雇用兩名銷售人員，並在週末延長營業時間。"
  },
  {
    "word": "rapidly",
    "pos": "adv.",
    "cn_def": "迅速地；快速地",
    "en_def": "very quickly",
    "sentence": "A: Why is the company hiring so many new delivery drivers this winter, and where will it find enough vans for all of them? B: Online orders have increased {{BLANK}} since the holiday season started, so the manager is renting twenty extra vans and offering higher pay for weekend shifts.",
    "cn": "A：公司今年冬天為什麼要雇用這麼多新的送貨司機？又要去哪裡找足夠的貨車給他們？ B：自從假期購物季開始以來，網路訂單【迅速地】增加，所以經理正在租二十輛額外的貨車，並為週末班提供較高的薪資。"
  }
];

const MCQS = [
  {
    "q": "The lights in the hallway turn on by themselves. A sensor detects any _____ and switches them off after ten minutes without activity.",
    "options": [
      "motion",
      "journey",
      "relocation",
      "trip"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Workers must wear badges inside the factory. The security team tracks their _____ around the building to find everyone quickly in an emergency.",
    "options": [
      "relocation",
      "movement",
      "budget",
      "salary"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The marketing team decided to _____ its focus from newspapers to social media. Younger customers rarely read printed advertisements anymore.",
    "options": [
      "drift",
      "crawl",
      "shift",
      "bounce"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Rent in the city center has become too expensive for our company. Management plans to _____ the head office to a cheaper suburb next year.",
    "options": [
      "rotate",
      "glide",
      "bounce",
      "relocate"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The bank charges a small fee when customers _____ money to an account overseas. The fee is lower if you use the app.",
    "options": [
      "lift",
      "drag",
      "transfer",
      "crawl"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Our sales managers often _____ abroad to meet important clients. The company pays for their flights, hotels, and meals.",
    "options": [
      "travel",
      "crawl",
      "bounce",
      "rotate"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new trucks will _____ fresh vegetables from the farms to our supermarkets every morning. They have special cooling systems inside.",
    "options": [
      "retreat",
      "spin",
      "migrate",
      "transport"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Passengers may _____ one small bag onto the plane. Larger suitcases must be checked in at the counter before boarding.",
    "options": [
      "rotate",
      "carry",
      "migrate",
      "retreat"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Workers should never try to _____ heavy boxes by themselves. They should use a forklift or ask a coworker for help.",
    "options": [
      "lift",
      "commute",
      "migrate",
      "drift"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The supermarket bought new shopping carts this month. They are lighter and easier to _____ around the store, even when they are full.",
    "options": [
      "migrate",
      "push",
      "commute",
      "retreat"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "This door does not open outward. Please _____ the handle toward you to enter the storage room on the left.",
    "options": [
      "migrate",
      "commute",
      "pull",
      "glide"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The movers did not lift the heavy cabinet. Instead, they decided to _____ it across the floor and left long scratches.",
    "options": [
      "migrate",
      "commute",
      "advance",
      "drag"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The new glass doors at the hotel entrance _____ open automatically. Guests with heavy luggage can enter without any help.",
    "options": [
      "migrate",
      "commute",
      "slide",
      "retreat"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The new express train seems to _____ smoothly along the tracks. Passengers can hardly feel any movement during the ride.",
    "options": [
      "glide",
      "migrate",
      "commute",
      "retreat"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The airport shuttle leaves in two minutes. If we _____ to the bus stop now, we can still catch it.",
    "options": [
      "crawl",
      "migrate",
      "rotate",
      "run"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Our team won the first round of the sales competition. We will _____ to the final round next month in Taichung.",
    "options": [
      "retreat",
      "advance",
      "drift",
      "rotate"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "When the storm reached the beach, the guide told all tourists to _____ from the water. They waited safely inside the hotel.",
    "options": [
      "retreat",
      "commute",
      "rotate",
      "bounce"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "To keep everyone fresh, the supervisor will _____ workers between the day and night shifts. Each team changes every two weeks.",
    "options": [
      "drift",
      "rotate",
      "crawl",
      "glide"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The city installed smart traffic lights at the busy corner. They help keep the _____ of cars smooth during rush hour.",
    "options": [
      "relocation",
      "journey",
      "flow",
      "salary"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Strong winds last night made several small boats _____ away from the dock. Workers spent the morning bringing them back.",
    "options": [
      "commute",
      "rotate",
      "lift",
      "drift"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Many young engineers _____ to big cities in the north every year. They hope to find higher salaries and better chances for promotion.",
    "options": [
      "rotate",
      "lift",
      "migrate",
      "bounce"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Many employees _____ to the office by MRT because parking downtown is expensive. The company gives them a monthly travel allowance.",
    "options": [
      "commute",
      "lift",
      "rotate",
      "bounce"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The flight from Taipei to New York was delayed twice. The whole _____ took almost twenty hours, and everyone was exhausted.",
    "options": [
      "motion",
      "relocation",
      "flow",
      "journey"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The sales team reached all of its targets this year. As a reward, the company will pay for a three-day _____ to Hualien.",
    "options": [
      "motion",
      "trip",
      "flow",
      "movement"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The company will move its factory to Vietnam next year. Employees who agree to go will receive a generous _____ package.",
    "options": [
      "relocation",
      "motion",
      "flow",
      "movement"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The hospital sends a _____ clinic to small villages every week. The bus carries doctors, nurses, and basic medical equipment.",
    "options": [
      "nervous",
      "mobile",
      "dynamic",
      "polite"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "We are looking for a _____ team leader with fresh ideas. The right person enjoys fast changes and can work well under pressure.",
    "options": [
      "mobile",
      "empty",
      "dynamic",
      "fragile"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Doctors say that office workers should stay _____ during the day. Taking a short walk every hour is good for your health.",
    "options": [
      "empty",
      "fragile",
      "expensive",
      "active"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Sales of electric scooters have grown _____ every month this year. There were no sudden jumps or drops in the numbers.",
    "options": [
      "loudly",
      "nervously",
      "steadily",
      "politely"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Online orders increased _____ during the holiday season. The company had to hire forty new drivers in just one week.",
    "options": [
      "rapidly",
      "quietly",
      "politely",
      "loudly"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "motion": {
    "pos": "n.",
    "en_def": "the act or process of moving",
    "cn_def": "移動；運動；動作"
  },
  "movement": {
    "pos": "n.",
    "en_def": "the act of changing position or place",
    "cn_def": "移動；活動；動作"
  },
  "shift": {
    "pos": "v.",
    "en_def": "to move or change from one position or direction to another",
    "cn_def": "移動；轉移；改變"
  },
  "relocate": {
    "pos": "v.",
    "en_def": "to move to a new place to live or work",
    "cn_def": "搬遷；遷移"
  },
  "transfer": {
    "pos": "v.",
    "en_def": "to move someone or something from one place to another",
    "cn_def": "轉移；調職；轉帳"
  },
  "travel": {
    "pos": "v.",
    "en_def": "to go from one place to another, usually over a long distance",
    "cn_def": "旅行；出差；行進"
  },
  "transport": {
    "pos": "v.",
    "en_def": "to take goods or people from one place to another in a vehicle",
    "cn_def": "運輸；運送"
  },
  "carry": {
    "pos": "v.",
    "en_def": "to hold something and take it with you",
    "cn_def": "攜帶；搬運"
  },
  "lift": {
    "pos": "v.",
    "en_def": "to raise something to a higher position",
    "cn_def": "舉起；抬起"
  },
  "push": {
    "pos": "v.",
    "en_def": "to use force to move something away from you",
    "cn_def": "推"
  },
  "pull": {
    "pos": "v.",
    "en_def": "to use force to move something toward you",
    "cn_def": "拉"
  },
  "drag": {
    "pos": "v.",
    "en_def": "to pull something heavy along the ground",
    "cn_def": "拖；拉"
  },
  "slide": {
    "pos": "v.",
    "en_def": "to move smoothly over a surface",
    "cn_def": "滑動；滑行"
  },
  "glide": {
    "pos": "v.",
    "en_def": "to move smoothly and quietly without effort",
    "cn_def": "滑行；滑翔"
  },
  "run": {
    "pos": "v.",
    "en_def": "to move quickly on foot",
    "cn_def": "跑；奔跑"
  },
  "walk": {
    "pos": "v.",
    "en_def": "to move on foot at a normal speed",
    "cn_def": "走路；步行"
  },
  "crawl": {
    "pos": "v.",
    "en_def": "to move very slowly, often on hands and knees",
    "cn_def": "爬行；緩慢行進"
  },
  "advance": {
    "pos": "v.",
    "en_def": "to move forward",
    "cn_def": "前進；推進；晉級"
  },
  "retreat": {
    "pos": "v.",
    "en_def": "to move back or away from something",
    "cn_def": "撤退；後退"
  },
  "rotate": {
    "pos": "v.",
    "en_def": "to turn around a center point; to take turns doing a job",
    "cn_def": "旋轉；輪流；輪調"
  },
  "spin": {
    "pos": "v.",
    "en_def": "to turn around and around quickly",
    "cn_def": "旋轉"
  },
  "bounce": {
    "pos": "v.",
    "en_def": "to move up or away after hitting a surface",
    "cn_def": "彈起；反彈"
  },
  "flow": {
    "pos": "n.",
    "en_def": "a steady, continuous movement of something",
    "cn_def": "流動；流量"
  },
  "drift": {
    "pos": "v.",
    "en_def": "to move slowly, carried by water or air",
    "cn_def": "漂流；漂移"
  },
  "migrate": {
    "pos": "v.",
    "en_def": "to move from one place to another, especially to find work or better conditions",
    "cn_def": "遷徙；移居"
  },
  "commute": {
    "pos": "v.",
    "en_def": "to travel regularly between home and work",
    "cn_def": "通勤"
  },
  "journey": {
    "pos": "n.",
    "en_def": "an act of traveling from one place to another, especially a long one",
    "cn_def": "旅程；行程"
  },
  "trip": {
    "pos": "n.",
    "en_def": "a short journey to a place and back, for work or pleasure",
    "cn_def": "旅行；出差；短途旅程"
  },
  "relocation": {
    "pos": "n.",
    "en_def": "the act of moving to a new place",
    "cn_def": "搬遷；遷移"
  },
  "mobile": {
    "pos": "adj.",
    "en_def": "able to move or be moved easily",
    "cn_def": "可移動的；行動的"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "always moving, changing, and full of energy",
    "cn_def": "充滿活力的；動態的"
  },
  "active": {
    "pos": "adj.",
    "en_def": "moving around a lot; busy and full of energy",
    "cn_def": "活躍的；積極的"
  },
  "steadily": {
    "pos": "adv.",
    "en_def": "at a regular and even speed or rate",
    "cn_def": "穩定地；平穩地"
  },
  "rapidly": {
    "pos": "adv.",
    "en_def": "very quickly",
    "cn_def": "迅速地；快速地"
  }
};

const EXTRA_GLOSSES = {};
