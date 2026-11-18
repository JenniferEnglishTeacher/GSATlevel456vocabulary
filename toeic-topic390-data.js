// Topic 390 Quiz Data: Swimming 游泳
// Source word list: https://www.examword.com/group-topic/swimming — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T390 - Swimming 游泳",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "swimmer",
    "pos": "n.",
    "cn_def": "游泳者",
    "en_def": "a person who swims",
    "sentence": "A: I heard the hotel is hiring new staff for its fitness center this summer, so what kind of person are they hoping to find? B: They want a confident {{BLANK}} who can also teach beginners, because many guests bring their children and ask for private lessons in the morning.",
    "cn": "A：我聽說飯店這個夏天要為健身中心招募新員工，他們希望找什麼樣的人？ B：他們想找一位有自信的【游泳者】，同時也能教初學者，因為很多房客會帶孩子來，並在早上要求私人課程。"
  },
  {
    "word": "pool",
    "pos": "n.",
    "cn_def": "游泳池",
    "en_def": "a large area of water built for people to swim in",
    "sentence": "A: Is there anywhere at the conference hotel where we can relax after the long sessions finish each evening? B: Yes, the hotel has a heated indoor {{BLANK}} on the fifth floor, and it stays open until ten o'clock, so we can swim a few laps before dinner.",
    "cn": "A：會議飯店裡有沒有地方可以讓我們在每天晚上冗長的會議結束後放鬆一下？ B：有，飯店五樓有一座室內溫水【游泳池】，開放到晚上十點，所以我們可以在晚餐前游幾圈。"
  },
  {
    "word": "lifeguard",
    "pos": "n.",
    "cn_def": "救生員",
    "en_def": "a person whose job is to watch swimmers and save people in danger",
    "sentence": "A: Why did the city decide to close the public beach early yesterday afternoon when the weather was still so nice? B: The only {{BLANK}} on duty suddenly felt sick, and the rules say nobody may swim without trained staff watching the water, so they had to send everyone home.",
    "cn": "A：昨天下午天氣還那麼好，市政府為什麼決定提早關閉公共海灘？ B：唯一值班的【救生員】突然身體不舒服，而規定指出沒有受過訓練的人員看守水域時任何人都不能游泳，所以他們只好請大家回家。"
  },
  {
    "word": "goggles",
    "pos": "n.",
    "cn_def": "泳鏡；護目鏡",
    "en_def": "special glasses that protect your eyes in water",
    "sentence": "A: My eyes always turn red and itchy after I swim at the sports center near our office, so what should I do? B: The water there contains a lot of chlorine, so you should buy a good pair of {{BLANK}} at the shop by the entrance before your next session.",
    "cn": "A：我在辦公室附近的運動中心游泳後眼睛總是又紅又癢，我該怎麼辦？ B：那裡的水含有很多氯，所以你下次去游泳之前應該在入口旁的商店買一副好的【泳鏡】。"
  },
  {
    "word": "cap",
    "pos": "n.",
    "cn_def": "帽子；泳帽",
    "en_def": "a soft, close-fitting hat, such as one worn for swimming",
    "sentence": "A: The receptionist at the new fitness club stopped me at the pool entrance this morning, and I am not sure why she did that. B: The club requires every guest with long hair to wear a swimming {{BLANK}}, because loose hair can block the filters and make the water dirty.",
    "cn": "A：今天早上新健身俱樂部的櫃檯人員在泳池入口攔住我，我不確定她為什麼這麼做。 B：俱樂部規定每位長髮的客人都必須戴游泳【帽】，因為散落的頭髮會堵塞過濾器並讓水變髒。"
  },
  {
    "word": "stroke",
    "pos": "n.",
    "cn_def": "泳式；划水動作",
    "en_def": "a style of swimming using repeated arm and leg movements",
    "sentence": "A: Our team-building swim class starts next week, but I can only move slowly in the water, so will I be able to keep up? B: Don't worry, because the instructor will teach each {{BLANK}} step by step, starting with the easiest one, and she will give beginners extra time to practice.",
    "cn": "A：我們的團隊建立游泳課下週開始，但我在水中只能慢慢移動，我跟得上嗎？ B：別擔心，教練會一步一步教每一種【泳式】，從最簡單的開始，而且她會給初學者額外的時間練習。"
  },
  {
    "word": "freestyle",
    "pos": "n.",
    "cn_def": "自由式",
    "en_def": "a swimming race in which any style may be used, usually the front crawl",
    "sentence": "A: Which event did Jason from the accounting department enter at the company sports day last Saturday afternoon? B: He signed up for the fifty-meter {{BLANK}} race, because it allows any style, and he finished second even though he had not trained for several months.",
    "cn": "A：會計部的傑森上週六下午在公司運動會上參加了哪個項目？ B：他報名了五十公尺【自由式】比賽，因為那可以用任何泳姿，而且儘管他好幾個月沒有訓練，他還是得了第二名。"
  },
  {
    "word": "breaststroke",
    "pos": "n.",
    "cn_def": "蛙式",
    "en_def": "a swimming style where you move your arms and legs out to the sides like a frog",
    "sentence": "A: My doctor told me to exercise more, but I want a swimming style that is gentle and lets me keep my head above water. B: Then you should try the {{BLANK}}, since it is slow and steady, and you can see where you are going while you breathe easily.",
    "cn": "A：醫生告訴我要多運動，但我想要一種溫和、而且可以讓頭保持在水面上的游泳方式。 B：那你應該試試【蛙式】，因為它緩慢又穩定，而且你可以一邊輕鬆呼吸一邊看清楚前進的方向。"
  },
  {
    "word": "backstroke",
    "pos": "n.",
    "cn_def": "仰式",
    "en_def": "a swimming style done while lying on your back",
    "sentence": "A: Why does the coach at the community pool always tell new students to look up at the ceiling during their lessons? B: She is teaching them the {{BLANK}}, which is done lying face up, so they need to watch the flags above the water to know when the wall is close.",
    "cn": "A：社區泳池的教練為什麼總是在課堂上叫新學生抬頭看天花板？ B：她正在教他們【仰式】，這種泳式是臉朝上躺著游的，所以他們需要注意水面上方的旗子，才知道什麼時候快到池壁。"
  },
  {
    "word": "butterfly",
    "pos": "n.",
    "cn_def": "蝶式",
    "en_def": "a swimming style where both arms move over the water together",
    "sentence": "A: I saw the new marketing manager swimming at the hotel this morning, and she was moving both arms together over the water like wings. B: That was the {{BLANK}}, which is one of the hardest styles because it needs strong shoulders, and she used to compete in it at university.",
    "cn": "A：今天早上我看到新的行銷經理在飯店游泳，她的雙臂像翅膀一樣同時在水面上擺動。 B：那是【蝶式】，它是最困難的泳式之一，因為需要強壯的肩膀，而她大學時曾經參加過這個項目的比賽。"
  },
  {
    "word": "dive",
    "pos": "v.",
    "cn_def": "跳水；潛水",
    "en_def": "to jump into water with your head and arms first",
    "sentence": "A: Are guests allowed to jump into the water from the side of the rooftop pool at the resort where we are holding the retreat? B: No, the water is only one meter there, so the manager has put up signs warning guests never to {{BLANK}} in, because they could hit their heads.",
    "cn": "A：我們舉辦員工旅遊的度假村裡，客人可以從屋頂泳池邊跳進水裡嗎？ B：不行，那裡水深只有一公尺，所以經理豎立了告示牌，警告客人絕對不要【跳水】進去，因為他們可能會撞到頭。"
  },
  {
    "word": "float",
    "pos": "v.",
    "cn_def": "漂浮",
    "en_def": "to stay on the surface of water without sinking",
    "sentence": "A: My daughter is afraid of the water, so how does the swimming school help young children feel safe during their first lesson? B: The teachers first show them how to lie on their backs and {{BLANK}} quietly on the surface, so they learn that the water can hold them up.",
    "cn": "A：我女兒很怕水，那所游泳學校在第一堂課時是如何幫助幼童感到安全的？ B：老師們會先教他們如何仰躺並安靜地【漂浮】在水面上，讓他們了解水可以把他們托起來。"
  },
  {
    "word": "kick",
    "pos": "v.",
    "cn_def": "踢；踢水",
    "en_def": "to move your legs up and down or hit something with your foot",
    "sentence": "A: I move my arms very hard when I swim, but I still go slowly, so what do you think I am doing wrong? B: Most of your power should also come from your legs, so try to {{BLANK}} quickly from the hips with straight knees, and you will notice a big difference.",
    "cn": "A：我游泳時手臂很用力地划，但還是游得很慢，你覺得我哪裡做錯了？ B：你的力量大部分也應該來自雙腿，所以試著從臀部開始、膝蓋伸直地快速【踢水】，你會發現很大的差別。"
  },
  {
    "word": "paddle",
    "pos": "v.",
    "cn_def": "划（船）",
    "en_def": "to move a small boat through water using a short oar",
    "sentence": "A: What activities can the visitors from our Tokyo office enjoy at the lake on Saturday after the business meeting ends? B: They can rent small boats and {{BLANK}} along the quiet shore for an hour, or they can simply relax on the beach and enjoy the fresh mountain air.",
    "cn": "A：週六商務會議結束後，東京辦公室來的訪客可以在湖邊享受什麼活動？ B：他們可以租小船沿著安靜的湖岸【划船】一個小時，或者乾脆在湖灘上放鬆，享受清新的山間空氣。"
  },
  {
    "word": "lane",
    "pos": "n.",
    "cn_def": "水道；泳道",
    "en_def": "a long, narrow section of a pool for one line of swimmers",
    "sentence": "A: The sports center near our office is always crowded at lunchtime, so how can fast and slow swimmers share the water safely? B: The staff divide the pool with ropes, and each {{BLANK}} has a sign showing its speed, so you simply choose the one that matches your level.",
    "cn": "A：我們辦公室附近的運動中心午餐時間總是很擁擠，游得快和游得慢的人要怎麼安全地共用泳池？ B：工作人員用繩子把泳池分開，每一條【水道】都有標示速度的牌子，所以你只要選擇符合自己程度的那條就行了。"
  },
  {
    "word": "lap",
    "pos": "n.",
    "cn_def": "（泳池的）一趟；一圈",
    "en_def": "one complete length or trip across a swimming pool",
    "sentence": "A: How do you manage to stay so fit when you work such long hours at the bank every day? B: I go to the gym before work three times a week, and I usually swim one {{BLANK}} after another for thirty minutes, which keeps my heart healthy and my mind clear.",
    "cn": "A：你每天在銀行工作那麼長的時間，是怎麼保持這麼好的身材的？ B：我每週三次在上班前去健身房，通常會一【趟】接著一趟地游三十分鐘，這讓我的心臟保持健康、頭腦保持清醒。"
  },
  {
    "word": "coach",
    "pos": "n.",
    "cn_def": "教練",
    "en_def": "a person who trains athletes or a sports team",
    "sentence": "A: Our company swim team has improved so much this year, so what changed after last season's disappointing results? B: We hired a professional {{BLANK}} who used to train national athletes, and she plans every practice carefully and gives each member advice on how to get faster.",
    "cn": "A：我們公司的游泳隊今年進步了好多，在上一季令人失望的成績之後有什麼改變？ B：我們聘請了一位曾經訓練國家代表隊選手的專業【教練】，她仔細規劃每一次練習，並給每位隊員如何游得更快的建議。"
  },
  {
    "word": "training",
    "pos": "n.",
    "cn_def": "訓練",
    "en_def": "regular practice to prepare for a sport or event",
    "sentence": "A: Why does Maria leave the office so early every Tuesday and Thursday, even when we have a busy week? B: She is preparing for a charity swim across the bay next month, so her {{BLANK}} schedule includes two long evening sessions at the club, and the manager has approved it.",
    "cn": "A：瑪莉亞為什麼每週二和週四都那麼早離開辦公室，即使我們那週很忙也一樣？ B：她正在準備下個月橫渡海灣的慈善泳渡活動，所以她的【訓練】計畫包括每週在俱樂部進行兩次長時間的晚間課程，而經理已經批准了。"
  },
  {
    "word": "competition",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "an event in which people try to win",
    "sentence": "A: Have you heard that the hotel chain is sponsoring a swimming event for its employees across Asia this autumn? B: Yes, the {{BLANK}} will take place in Singapore in October, and the winners of each event will receive cash prizes and a free weekend at one of the resorts.",
    "cn": "A：你有沒有聽說那家連鎖飯店今年秋天要為亞洲各地的員工贊助一場游泳活動？ B：有，這場【比賽】將於十月在新加坡舉行，各項目的優勝者將獲得獎金，以及在其中一家度假村免費住宿一個週末。"
  },
  {
    "word": "race",
    "pos": "n.",
    "cn_def": "競賽；賽跑",
    "en_def": "a contest to see who is the fastest",
    "sentence": "A: Why are so many people from the sales department gathering around the pool at the sports center this evening? B: Our manager is taking part in a charity {{BLANK}}, and whoever touches the wall first will win a donation for the children's hospital, so we came to cheer for her.",
    "cn": "A：今晚業務部為什麼有那麼多人聚集在運動中心的泳池旁？ B：我們經理正在參加一場慈善【競賽】，最先碰到池壁的人將為兒童醫院贏得一筆捐款，所以我們來替她加油。"
  },
  {
    "word": "endurance",
    "pos": "n.",
    "cn_def": "耐力",
    "en_def": "the ability to keep doing something hard for a long time",
    "sentence": "A: Why does the instructor make us swim slowly for a full hour instead of practicing short, fast sprints during our evening lessons? B: She wants us to build {{BLANK}} first, because the open-water event next spring is three kilometers long, and many people get tired halfway and cannot finish.",
    "cn": "A：教練為什麼在晚上的課程裡讓我們慢慢游滿一個小時，而不是練習短程快速衝刺？ B：她希望我們先培養【耐力】，因為明年春天的公開水域活動長達三公里，很多人游到一半就累了而無法完成。"
  },
  {
    "word": "technique",
    "pos": "n.",
    "cn_def": "技巧；技術",
    "en_def": "a special way of doing something that needs skill",
    "sentence": "A: I have been swimming for years, but I always feel tired after only a few minutes, even though I am quite strong. B: Strength is not everything, so maybe you should ask an instructor to film you and check your {{BLANK}}, because small mistakes in your arm movements can waste a lot of energy.",
    "cn": "A：我已經游泳很多年了，但即使我相當強壯，只游幾分鐘就總是覺得很累。 B：力氣不是一切，所以也許你應該請教練替你錄影並檢查你的【技巧】，因為手臂動作上的小錯誤可能會浪費很多體力。"
  },
  {
    "word": "rhythm",
    "pos": "n.",
    "cn_def": "節奏",
    "en_def": "a regular, repeated pattern of movement or sound",
    "sentence": "A: How can I stop feeling out of breath when I swim longer distances at the pool after work? B: Try to find a steady {{BLANK}} by breathing every three arm movements and counting in your head, because once your body gets used to the pattern, swimming feels much easier.",
    "cn": "A：下班後在泳池游長距離時，我要怎樣才能不再喘不過氣？ B：試著找到穩定的【節奏】，每划三次手臂就換一次氣，並在心裡數數，因為一旦你的身體習慣了這個模式，游泳就會感覺輕鬆許多。"
  },
  {
    "word": "splash",
    "pos": "v.",
    "cn_def": "潑（水）；濺",
    "en_def": "to make water fly up and land on someone or something",
    "sentence": "A: Why did the hotel manager ask the families at the pool to move their children to the shallow area this afternoon? B: Some business guests were reading by the water, and the kids kept jumping in and trying to {{BLANK}} them, so their computers and papers were getting wet.",
    "cn": "A：今天下午飯店經理為什麼請泳池邊的家庭把孩子帶到淺水區？ B：有些商務旅客在水邊看書，而孩子們一直跳進水裡並試著【潑水】到他們身上，所以他們的電腦和文件都被弄濕了。"
  },
  {
    "word": "underwater",
    "pos": "adv.",
    "cn_def": "在水下",
    "en_def": "below the surface of the water",
    "sentence": "A: What did you enjoy most about the diving trip that the company organized for top employees last month? B: We swam {{BLANK}} for almost an hour near the coral reef, and I took amazing photos of colorful fish with the special camera that the tour guide lent me.",
    "cn": "A：上個月公司為優秀員工舉辦的潛水之旅，你最喜歡的是什麼？ B：我們在珊瑚礁附近的【水下】游了將近一個小時，我還用導遊借我的特殊相機拍到色彩繽紛的魚的驚人照片。"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "cn_def": "呼吸",
    "en_def": "to take air into your body and let it out",
    "sentence": "A: I always swallow water and start coughing whenever I try to swim more than a few meters, so what should I change? B: You need to turn your head to the side and {{BLANK}} in through your mouth, then let the air out slowly under the water before your next turn.",
    "cn": "A：每次我想游超過幾公尺，總是會嗆到水並開始咳嗽，我應該改變什麼？ B：你需要把頭轉向一側並用嘴巴【吸氣】，然後在下一次轉頭前在水下慢慢吐氣。"
  },
  {
    "word": "exhausted",
    "pos": "adj.",
    "cn_def": "筋疲力盡的",
    "en_def": "extremely tired",
    "sentence": "A: You look very tired this morning, so did something happen at the company swimming relay yesterday evening? B: I swam four long legs because two teammates were sick, and I felt completely {{BLANK}} afterward, so I went straight to bed without even eating dinner.",
    "cn": "A：你今天早上看起來很累，昨天傍晚的公司游泳接力賽發生什麼事了嗎？ B：因為兩位隊友生病，我游了四段長距離，結束後我感到完全【筋疲力盡】，所以連晚餐都沒吃就直接上床睡覺了。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "令人神清氣爽的；提神的",
    "en_def": "making you feel cool, fresh, and full of energy again",
    "sentence": "A: It has been so hot and humid in Taipei this week, so how do you stay cool after spending all day in meetings? B: I stop at the outdoor pool near the MRT station on my way home, and a quick swim in the cool water is really {{BLANK}} after a long day.",
    "cn": "A：這週台北又熱又潮濕，你整天開會後要怎麼保持涼爽？ B：我回家途中會在捷運站附近的戶外泳池停一下，在漫長的一天之後，在清涼的水中快速游個泳真的很【提神】。"
  },
  {
    "word": "relaxing",
    "pos": "adj.",
    "cn_def": "令人放鬆的",
    "en_def": "helping you feel calm and less worried",
    "sentence": "A: What would you recommend for our staff who have been under a lot of stress since the new project started? B: The spa hotel downtown offers a {{BLANK}} package with a warm pool, a sauna, and a massage, so we could give everyone a voucher as a thank-you gift.",
    "cn": "A：自從新專案開始以來，我們的員工一直承受很大的壓力，你會推薦什麼給他們？ B：市中心的溫泉飯店提供一個【令人放鬆的】套裝行程，包括溫水泳池、三溫暖和按摩，所以我們可以送每個人一張禮券作為謝禮。"
  },
  {
    "word": "buoyant",
    "pos": "adj.",
    "cn_def": "有浮力的；易漂浮的",
    "en_def": "able to float easily in water",
    "sentence": "A: Why is it so much easier for beginners to stay on top of the water when they swim in the sea than in a pool? B: Salt water is heavier than fresh water, so your body becomes more {{BLANK}} in the ocean, and you do not have to work as hard to keep from sinking.",
    "cn": "A：為什麼初學者在海裡游泳比在泳池裡更容易浮在水面上？ B：鹹水比淡水重，所以你的身體在海裡會變得更有【浮力】，你也不必那麼費力就不會沉下去。"
  },
  {
    "word": "deep",
    "pos": "adj.",
    "cn_def": "深的",
    "en_def": "going a long way down from the surface",
    "sentence": "A: Can my son, who is only six, join the swimming lesson at the sports center with the older children on Saturday? B: I am afraid not, because that class takes place at the far end, where the water is three meters {{BLANK}}, so he should join the beginners' group instead.",
    "cn": "A：我兒子才六歲，他可以在週六和年紀大一點的孩子一起參加運動中心的游泳課嗎？ B：恐怕不行，因為那堂課在泳池的另一端上課，那裡的水有三公尺【深】，所以他應該改參加初學者班。"
  },
  {
    "word": "shallow",
    "pos": "adj.",
    "cn_def": "淺的",
    "en_def": "not deep; with only a short distance to the bottom",
    "sentence": "A: Is the resort pool safe for the young children who are coming with their parents to our company family day? B: Yes, there is a separate area where the water is very {{BLANK}}, only about forty centimeters, and a staff member will watch the kids there all afternoon.",
    "cn": "A：度假村的泳池對於跟著父母來參加我們公司家庭日的幼童來說安全嗎？ B：安全，那裡有一個獨立區域，水非常【淺】，只有大約四十公分，而且整個下午都會有一位工作人員在那裡看顧孩子們。"
  },
  {
    "word": "waterproof",
    "pos": "adj.",
    "cn_def": "防水的",
    "en_def": "not letting water get in",
    "sentence": "A: I want to track how far I swim each morning, but my old fitness watch stopped working after one week at the pool. B: You should buy a fully {{BLANK}} model this time, because the cheaper ones are only safe in light rain and cannot handle long periods under the water.",
    "cn": "A：我想記錄自己每天早上游了多遠，但我的舊運動手錶在泳池用了一週就壞了。 B：這次你應該買一支完全【防水】的款式，因為比較便宜的那些只能防小雨，無法承受長時間泡在水下。"
  }
];

const MCQS = [
  {
    "q": "Our hotel is looking for a strong _____ to teach children's classes this summer. Applicants must also hold a valid first-aid certificate.",
    "options": [
      "swimmer",
      "lane",
      "rhythm",
      "competition"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The conference center has a heated indoor _____ on the third floor. Guests may use it free of charge until nine every evening.",
    "options": [
      "lane",
      "pool",
      "lap",
      "coach"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "By law, a trained _____ must be on duty whenever the public beach is open. The city hired six more staff for the summer.",
    "options": [
      "freestyle",
      "endurance",
      "lifeguard",
      "rhythm"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Swimmers with sensitive eyes should wear _____ to protect them from the chlorine. The shop at the entrance sells several sizes.",
    "options": [
      "strokes",
      "laps",
      "lanes",
      "goggles"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The instructor demonstrated each swimming _____ slowly before the group tried it. Most beginners found the first one easy to copy.",
    "options": [
      "stroke",
      "pool",
      "lifeguard",
      "competition"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Tom won the 100-meter _____ at the company sports day. Because swimmers may use any style, he chose the fastest one.",
    "options": [
      "lifeguard",
      "freestyle",
      "endurance",
      "coach"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The _____ is a good choice for older beginners. Swimmers can keep their heads above the water and see where they are going.",
    "options": [
      "endurance",
      "competition",
      "breaststroke",
      "cap"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "In the _____, swimmers lie on their backs and look up at the sky. Flags above the pool warn them that the wall is near.",
    "options": [
      "lifeguard",
      "endurance",
      "rhythm",
      "backstroke"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The _____ requires very strong shoulders because both arms move over the water together. Few office workers can swim it for long.",
    "options": [
      "butterfly",
      "lifeguard",
      "cap",
      "lane"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Signs around the rooftop pool warn guests not to _____ in head first. The water is only one meter deep there.",
    "options": [
      "breathe",
      "dive",
      "kick",
      "float"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Beginners first learn to lie still and _____ on their backs. This shows them that the water can hold their weight.",
    "options": [
      "dive",
      "paddle",
      "float",
      "splash"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "To swim faster, you should _____ your legs quickly from the hips. Keeping your knees straight also saves energy.",
    "options": [
      "breathe",
      "float",
      "dive",
      "kick"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "During lunch hours, each _____ in the pool is marked for slow, medium, or fast swimmers. Please choose the one that matches your speed.",
    "options": [
      "lane",
      "lap",
      "stroke",
      "coach"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Linda completes one _____ of the pool in about forty seconds. She hopes to be even faster before the company race.",
    "options": [
      "coach",
      "lap",
      "technique",
      "cap"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Our swim team hired a professional _____ who once trained national athletes. She plans every practice and gives each member advice.",
    "options": [
      "pool",
      "stroke",
      "coach",
      "lane"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Maria follows a strict _____ schedule to prepare for the charity swim. She practices at the club four evenings a week.",
    "options": [
      "lifeguard",
      "rhythm",
      "butterfly",
      "training"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "More than two hundred employees entered the swimming _____ held in Singapore last month. The winners each received cash prizes.",
    "options": [
      "competition",
      "technique",
      "endurance",
      "rhythm"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Our manager won the 50-meter charity _____ by touching the wall first. Her prize was a donation to the children's hospital.",
    "options": [
      "lane",
      "race",
      "stroke",
      "cap"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Long-distance swimmers need great _____ to keep going for several hours. Slow, steady practice is the best way to build it.",
    "options": [
      "lane",
      "cap",
      "endurance",
      "butterfly"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "A coach filmed Peter to check his swimming _____ in detail. Small mistakes in his arm movements were wasting a lot of energy.",
    "options": [
      "pool",
      "lifeguard",
      "competition",
      "technique"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Breathing every three arm movements helps swimmers keep a steady _____. Once the body learns this pattern, long distances feel easier.",
    "options": [
      "rhythm",
      "lane",
      "cap",
      "lifeguard"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The tour group swam _____ near the coral reef for almost an hour. Their guide lent them special cameras to take photos of the fish.",
    "options": [
      "upstairs",
      "underwater",
      "indoors",
      "overnight"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "When swimming freestyle, turn your head to the side to _____ in through your mouth. Then let the air out slowly under the water.",
    "options": [
      "kick",
      "dive",
      "breathe",
      "float"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "After swimming four long legs in the relay, Kevin felt completely _____. He went straight to bed without eating dinner.",
    "options": [
      "refreshing",
      "buoyant",
      "waterproof",
      "exhausted"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "On hot summer days, a quick swim in the cool outdoor pool is very _____. Many office workers stop there on their way home.",
    "options": [
      "refreshing",
      "exhausted",
      "buoyant",
      "waterproof"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The spa offers a _____ package with a warm pool, a sauna, and a massage. It is popular with stressed office workers.",
    "options": [
      "exhausted",
      "relaxing",
      "buoyant",
      "shallow"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Salt water makes the human body more _____, so floating in the sea is easy. Beginners often feel safer at the beach.",
    "options": [
      "exhausted",
      "shallow",
      "buoyant",
      "waterproof"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Children under ten may not enter the far end of the pool. The water there is three meters _____.",
    "options": [
      "buoyant",
      "exhausted",
      "relaxing",
      "deep"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Young children should stay in the _____ area, where the water is only forty centimeters. A staff member watches them there all afternoon.",
    "options": [
      "shallow",
      "buoyant",
      "exhausted",
      "waterproof"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "This fitness watch is fully _____, so you can wear it while swimming in the pool. Cheaper models only handle light rain.",
    "options": [
      "exhausted",
      "waterproof",
      "relaxing",
      "shallow"
    ],
    "answer": 1,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "swimmer": {
    "pos": "n.",
    "en_def": "a person who swims",
    "cn_def": "游泳者"
  },
  "pool": {
    "pos": "n.",
    "en_def": "a large area of water built for people to swim in",
    "cn_def": "游泳池"
  },
  "lifeguard": {
    "pos": "n.",
    "en_def": "a person whose job is to watch swimmers and save people in danger",
    "cn_def": "救生員"
  },
  "goggles": {
    "pos": "n.",
    "en_def": "special glasses that protect your eyes in water",
    "cn_def": "泳鏡；護目鏡"
  },
  "cap": {
    "pos": "n.",
    "en_def": "a soft, close-fitting hat, such as one worn for swimming",
    "cn_def": "帽子；泳帽"
  },
  "stroke": {
    "pos": "n.",
    "en_def": "a style of swimming using repeated arm and leg movements",
    "cn_def": "泳式；划水動作"
  },
  "freestyle": {
    "pos": "n.",
    "en_def": "a swimming race in which any style may be used, usually the front crawl",
    "cn_def": "自由式"
  },
  "breaststroke": {
    "pos": "n.",
    "en_def": "a swimming style where you move your arms and legs out to the sides like a frog",
    "cn_def": "蛙式"
  },
  "backstroke": {
    "pos": "n.",
    "en_def": "a swimming style done while lying on your back",
    "cn_def": "仰式"
  },
  "butterfly": {
    "pos": "n.",
    "en_def": "a swimming style where both arms move over the water together",
    "cn_def": "蝶式"
  },
  "dive": {
    "pos": "v.",
    "en_def": "to jump into water with your head and arms first",
    "cn_def": "跳水；潛水"
  },
  "float": {
    "pos": "v.",
    "en_def": "to stay on the surface of water without sinking",
    "cn_def": "漂浮"
  },
  "kick": {
    "pos": "v.",
    "en_def": "to move your legs up and down or hit something with your foot",
    "cn_def": "踢；踢水"
  },
  "paddle": {
    "pos": "v.",
    "en_def": "to move a small boat through water using a short oar",
    "cn_def": "划（船）"
  },
  "lane": {
    "pos": "n.",
    "en_def": "a long, narrow section of a pool for one line of swimmers",
    "cn_def": "水道；泳道"
  },
  "lap": {
    "pos": "n.",
    "en_def": "one complete length or trip across a swimming pool",
    "cn_def": "（泳池的）一趟；一圈"
  },
  "coach": {
    "pos": "n.",
    "en_def": "a person who trains athletes or a sports team",
    "cn_def": "教練"
  },
  "training": {
    "pos": "n.",
    "en_def": "regular practice to prepare for a sport or event",
    "cn_def": "訓練"
  },
  "competition": {
    "pos": "n.",
    "en_def": "an event in which people try to win",
    "cn_def": "比賽；競賽"
  },
  "race": {
    "pos": "n.",
    "en_def": "a contest to see who is the fastest",
    "cn_def": "競賽；賽跑"
  },
  "endurance": {
    "pos": "n.",
    "en_def": "the ability to keep doing something hard for a long time",
    "cn_def": "耐力"
  },
  "technique": {
    "pos": "n.",
    "en_def": "a special way of doing something that needs skill",
    "cn_def": "技巧；技術"
  },
  "rhythm": {
    "pos": "n.",
    "en_def": "a regular, repeated pattern of movement or sound",
    "cn_def": "節奏"
  },
  "splash": {
    "pos": "v.",
    "en_def": "to make water fly up and land on someone or something",
    "cn_def": "潑（水）；濺"
  },
  "underwater": {
    "pos": "adv.",
    "en_def": "below the surface of the water",
    "cn_def": "在水下"
  },
  "breathe": {
    "pos": "v.",
    "en_def": "to take air into your body and let it out",
    "cn_def": "呼吸"
  },
  "exhausted": {
    "pos": "adj.",
    "en_def": "extremely tired",
    "cn_def": "筋疲力盡的"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "making you feel cool, fresh, and full of energy again",
    "cn_def": "令人神清氣爽的；提神的"
  },
  "relaxing": {
    "pos": "adj.",
    "en_def": "helping you feel calm and less worried",
    "cn_def": "令人放鬆的"
  },
  "buoyant": {
    "pos": "adj.",
    "en_def": "able to float easily in water",
    "cn_def": "有浮力的；易漂浮的"
  },
  "deep": {
    "pos": "adj.",
    "en_def": "going a long way down from the surface",
    "cn_def": "深的"
  },
  "shallow": {
    "pos": "adj.",
    "en_def": "not deep; with only a short distance to the bottom",
    "cn_def": "淺的"
  },
  "waterproof": {
    "pos": "adj.",
    "en_def": "not letting water get in",
    "cn_def": "防水的"
  }
};

const EXTRA_GLOSSES = {};
