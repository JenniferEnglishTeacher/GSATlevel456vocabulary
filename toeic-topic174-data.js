// Topic 174 Quiz Data: Hobby 嗜好
// Source word list: https://www.examword.com/group-topic/hobby — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T174 - Hobby 嗜好",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "pastime",
    "pos": "n.",
    "cn_def": "消遣；娛樂",
    "en_def": "an activity you do for fun in your free time",
    "sentence": "A: What does your manager usually do on weekends now that the big project for the Singapore client is finally finished? B: Her favorite {{BLANK}} is playing chess online with old friends, because it helps her forget about work and keeps her mind sharp for Monday meetings.",
    "cn": "A：既然新加坡客戶的大案子終於完成了，你們經理週末通常都做些什麼？ B：她最喜歡的【消遣】是和老朋友在線上下西洋棋，因為這能讓她暫時忘掉工作，也讓她的頭腦在週一開會時保持敏銳。"
  },
  {
    "word": "interest",
    "pos": "n.",
    "cn_def": "興趣",
    "en_def": "a feeling of wanting to know about or do something",
    "sentence": "A: Why did the HR department add a question about personal activities to the new staff survey that everyone received this morning? B: They want to start a few after-work groups, so they need to know which employees share an {{BLANK}} in music, sports, or cooking before booking any rooms.",
    "cn": "A：為什麼人資部在今天早上大家收到的新員工問卷裡，加了一題關於個人活動的問題？ B：他們想成立幾個下班後的小組，所以在預訂場地之前，需要知道哪些員工對音樂、運動或烹飪有共同的【興趣】。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "閒暇；空閒",
    "en_def": "time when you are not working and can relax",
    "sentence": "A: Have you noticed that the new office building has a rooftop garden, a small library, and even a table tennis room on the fifth floor? B: Yes, the company believes that staff who enjoy their {{BLANK}} time during long lunch breaks will come back to their desks feeling calmer and more productive.",
    "cn": "A：你有沒有注意到新辦公大樓有屋頂花園、小圖書館，甚至五樓還有一間桌球室？ B：有啊，公司認為員工在較長的午休中好好享受【閒暇】時光，回到座位時會更平靜、更有效率。"
  },
  {
    "word": "recreation",
    "pos": "n.",
    "cn_def": "娛樂；休閒活動",
    "en_def": "activities people do for fun and relaxation",
    "sentence": "A: Where is the city planning to spend the extra money it received from the tourism tax this year, according to this morning's newspaper? B: Most of it will go to a new {{BLANK}} center near the river, which will include a swimming pool, tennis courts, and free classes for local families.",
    "cn": "A：根據今天早上的報紙，市政府打算把今年觀光稅多收到的錢花在哪裡？ B：大部分會用在河邊一座新的【休閒娛樂】中心，裡面會有游泳池、網球場，還有給當地家庭的免費課程。"
  },
  {
    "word": "collection",
    "pos": "n.",
    "cn_def": "收藏；收藏品",
    "en_def": "a group of things that someone has gathered because they like them",
    "sentence": "A: Why is there a line of people waiting outside the small shop across from our office every Saturday morning before it even opens? B: The owner is showing his huge {{BLANK}} of old cameras and vintage postcards, and many visitors come from other cities just to see the rare pieces.",
    "cn": "A：為什麼每個星期六早上，我們辦公室對面那家小店還沒開門，外面就有人在排隊？ B：老闆正在展示他大量的老相機和復古明信片【收藏】，很多遊客專程從其他城市來看這些稀有的物品。"
  },
  {
    "word": "craft",
    "pos": "n.",
    "cn_def": "手工藝",
    "en_def": "an activity of making things by hand",
    "sentence": "A: What kind of activity are you planning for the children's corner at the company's family day next month in the park? B: We'll set up a {{BLANK}} table where kids can make paper animals and simple bracelets with their parents, and every child can take home what they made.",
    "cn": "A：下個月公司在公園舉辦的家庭日，你們打算在兒童區安排什麼活動？ B：我們會設一張【手工藝】桌，讓孩子和爸媽一起做紙動物和簡單的手環，每個孩子都可以把自己做的作品帶回家。"
  },
  {
    "word": "painting",
    "pos": "n.",
    "cn_def": "繪畫；畫畫",
    "en_def": "the activity of making pictures with paint",
    "sentence": "A: Did you know that our receptionist sold three of her pictures at the art fair downtown last weekend for quite a good price? B: Yes, she started {{BLANK}} with watercolors two years ago after work, and now she spends almost every Sunday afternoon in the park creating landscapes of the mountains.",
    "cn": "A：你知道我們的櫃檯人員上週末在市中心的藝術市集，以相當好的價格賣出了三幅畫嗎？ B：知道啊，她兩年前下班後開始用水彩【畫畫】，現在幾乎每個星期天下午都在公園裡畫山景。"
  },
  {
    "word": "drawing",
    "pos": "n.",
    "cn_def": "素描；繪圖",
    "en_def": "a picture made with a pencil or pen",
    "sentence": "A: How does the new designer prepare her ideas before she shows them to the client at the weekly meeting with the marketing team? B: She always begins with a quick pencil {{BLANK}} on paper during her train ride to work, because she says it helps her see the shape of the product more clearly.",
    "cn": "A：新來的設計師在每週和行銷團隊開會、把點子拿給客戶看之前，是怎麼準備的？ B：她總是在搭火車上班時先在紙上快速畫一張鉛筆【素描】，她說這能幫她更清楚地看出產品的外形。"
  },
  {
    "word": "photography",
    "pos": "n.",
    "cn_def": "攝影",
    "en_def": "the activity or job of taking photographs",
    "sentence": "A: Who took those beautiful pictures of the factory and the staff that appear in our new company brochure and on the website? B: Kevin from accounting did, because {{BLANK}} has been his weekend hobby for years, and he even won a local contest last spring with a photo of the harbor at sunset.",
    "cn": "A：公司新簡介和網站上那些工廠和員工的漂亮照片是誰拍的？ B：是會計部的凱文拍的，因為【攝影】多年來一直是他的週末嗜好，他去年春天還以一張港口夕陽的照片贏得了地方比賽。"
  },
  {
    "word": "gardening",
    "pos": "n.",
    "cn_def": "園藝",
    "en_def": "the activity of growing plants and flowers in a garden",
    "sentence": "A: Why does Mrs. Lin from the finance office always bring fresh tomatoes and herbs to share with everyone in the kitchen on Mondays? B: She has been into {{BLANK}} since she moved to a house with a big backyard, and she grows far more vegetables than her family can possibly eat.",
    "cn": "A：為什麼財務部的林太太每週一總是帶新鮮番茄和香草到茶水間跟大家分享？ B：自從她搬到有大後院的房子後就迷上了【園藝】，她種的蔬菜多到家人根本吃不完。"
  },
  {
    "word": "cooking",
    "pos": "n.",
    "cn_def": "烹飪；做菜",
    "en_def": "the activity of preparing food",
    "sentence": "A: What is the team-building event that the department manager has planned for us before the end of the year? B: We are going to take a {{BLANK}} class at a restaurant downtown, where a professional chef will teach us how to prepare three Italian dishes and then we'll eat them together.",
    "cn": "A：部門經理在年底前幫我們安排的團隊建立活動是什麼？ B：我們要去市中心一家餐廳上【烹飪】課，專業主廚會教我們做三道義大利菜，然後大家再一起吃掉。"
  },
  {
    "word": "baking",
    "pos": "n.",
    "cn_def": "烘焙",
    "en_def": "the activity of making bread, cakes, or cookies in an oven",
    "sentence": "A: Where did all these delicious cookies and the chocolate cake in the meeting room come from this afternoon? B: Our new intern brought them, because {{BLANK}} is her favorite way to relax on weekends, and she wanted to thank everyone for helping her during her first busy month here.",
    "cn": "A：今天下午會議室裡這些好吃的餅乾和巧克力蛋糕是從哪裡來的？ B：是我們新來的實習生帶來的，因為【烘焙】是她週末最喜歡的放鬆方式，她想謝謝大家在她來這裡忙碌的第一個月幫了她。"
  },
  {
    "word": "fishing",
    "pos": "n.",
    "cn_def": "釣魚",
    "en_def": "the activity of catching fish",
    "sentence": "A: Why is the sales director taking a long weekend off right after the quarterly report is submitted next Thursday? B: He is going on a {{BLANK}} trip with his brother to a quiet lake in the mountains, where they plan to rent a small boat and stay in a wooden cabin.",
    "cn": "A：為什麼業務總監在下週四交出季報後，馬上要請一個長週末的假？ B：他要和他哥哥去山裡一座安靜的湖進行【釣魚】之旅，他們打算租一艘小船，住在木屋裡。"
  },
  {
    "word": "hiking",
    "pos": "n.",
    "cn_def": "健行；登山",
    "en_def": "the activity of taking long walks in the countryside or mountains",
    "sentence": "A: Do you have any suggestions for something healthy and cheap that our team could do together on a Saturday morning in spring? B: How about {{BLANK}} on the trail behind the national park, since it only takes about three hours and there's a nice tea house at the top where we can rest.",
    "cn": "A：你有沒有什麼建議，是我們團隊春天某個星期六早上可以一起做、既健康又便宜的活動？ B：去國家公園後面的步道【健行】怎麼樣？只要大約三個小時，山頂還有一間不錯的茶館可以休息。"
  },
  {
    "word": "cycling",
    "pos": "n.",
    "cn_def": "騎自行車",
    "en_def": "the activity of riding a bicycle",
    "sentence": "A: How do you manage to stay so fit even though you sit in front of a computer for nearly ten hours every working day? B: I joined a {{BLANK}} group last year, and every Sunday we ride about fifty kilometers along the river path before having breakfast together at a café.",
    "cn": "A：你每個工作天都要在電腦前坐將近十個小時，是怎麼保持這麼好的身材的？ B：我去年加入了一個【騎自行車】的團體，每個星期天我們沿著河濱道騎大約五十公里，然後一起在咖啡館吃早餐。"
  },
  {
    "word": "collect",
    "pos": "v.",
    "cn_def": "收集；收藏",
    "en_def": "to get and keep things of one type because you like them",
    "sentence": "A: Why does Mr. Huang keep asking visitors from overseas offices to bring him coins from their home countries? B: He likes to {{BLANK}} money from different places around the world, and he keeps the coins in special albums that he proudly shows to clients who visit his office.",
    "cn": "A：為什麼黃先生一直請海外辦公室的訪客幫他帶他們國家的硬幣？ B：他喜歡【收集】世界各地的錢幣，並把硬幣放在特製的收藏冊裡，很自豪地拿給來他辦公室的客戶看。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創作；創造",
    "en_def": "to make something new",
    "sentence": "A: What made you decide to sign up for the weekend pottery course at the community center near the train station? B: I spend all week typing reports and answering emails, so I really wanted to {{BLANK}} something beautiful with my own hands that I could actually use at home.",
    "cn": "A：是什麼讓你決定報名火車站附近社區中心的週末陶藝課？ B：我整個星期都在打報告、回電子郵件，所以很想親手【創作】一些漂亮又真的能在家裡用的東西。"
  },
  {
    "word": "practice",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something again and again to get better at it",
    "sentence": "A: How did the new account manager become such a good guitar player while working full-time at a busy company like ours? B: She told me she tries to {{BLANK}} for at least thirty minutes every evening after dinner, even when she feels tired, and she takes lessons twice a month.",
    "cn": "A：新來的客戶經理在我們這種忙碌的公司全職工作，是怎麼把吉他彈得這麼好的？ B：她告訴我她每天晚餐後都盡量【練習】至少三十分鐘，即使累了也一樣，而且她每個月上兩次課。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探險",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: What do you plan to do during your free afternoon in Kyoto after the trade show ends next Wednesday? B: I want to {{BLANK}} the quiet side streets near the old temples with my camera, because I've heard there are many small shops and hidden gardens that most tourists never find.",
    "cn": "A：下週三商展結束後，你在京都空出來的那個下午打算做什麼？ B：我想帶著相機去【探索】老寺廟附近安靜的小巷，因為聽說那裡有很多大部分觀光客都找不到的小店和隱藏的庭園。"
  },
  {
    "word": "relaxing",
    "pos": "adj.",
    "cn_def": "令人放鬆的",
    "en_def": "making you feel calm and comfortable",
    "sentence": "A: Why do so many people in our department spend their lunch break doing jigsaw puzzles in the staff lounge these days? B: They say it is very {{BLANK}} after a stressful morning of phone calls and meetings, and finishing a big puzzle together also makes everyone feel more like a team.",
    "cn": "A：為什麼我們部門最近有那麼多人午休時在員工休息室拼拼圖？ B：他們說在接了一早上電話、開了一早上會之後，拼圖非常【令人放鬆】，而且一起完成一幅大拼圖也讓大家更有團隊的感覺。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；創造性的",
    "en_def": "using imagination to make new things or ideas",
    "sentence": "A: Why did the company decide to let staff use the empty conference room for painting and music on Friday afternoons? B: The managers believe that people who have a {{BLANK}} outlet outside their regular tasks come up with better ideas when they work on new advertising campaigns.",
    "cn": "A：為什麼公司決定讓員工在星期五下午使用空的會議室畫畫和玩音樂？ B：主管們認為，在日常工作以外有【創意】抒發管道的人，在做新的廣告企劃時會想出更好的點子。"
  },
  {
    "word": "enjoyable",
    "pos": "adj.",
    "cn_def": "令人愉快的；有趣的",
    "en_def": "giving pleasure; fun",
    "sentence": "A: How was the board game night that the HR team organized for new employees at the café last Friday evening? B: It was really {{BLANK}}, because the games were easy to learn, the snacks were free, and I finally got to know people from other departments that I rarely talk to.",
    "cn": "A：人資團隊上週五晚上在咖啡館為新員工辦的桌遊之夜怎麼樣？ B：真的很【愉快】，因為遊戲很容易學、點心免費，而且我終於認識了平常很少說話的其他部門同事。"
  },
  {
    "word": "popular",
    "pos": "adj.",
    "cn_def": "受歡迎的；流行的",
    "en_def": "liked by many people",
    "sentence": "A: Why did the sports center near our office extend its yoga classes to seven days a week starting this month? B: The classes have become so {{BLANK}} among office workers in this area that people were often turned away at the door because there weren't enough mats for everyone.",
    "cn": "A：為什麼我們辦公室附近的運動中心從這個月開始把瑜伽課延長到一週七天？ B：這些課在這一帶的上班族之間變得非常【受歡迎】，常常因為瑜伽墊不夠，有人在門口就被拒絕入場。"
  },
  {
    "word": "indoor",
    "pos": "adj.",
    "cn_def": "室內的",
    "en_def": "done or used inside a building",
    "sentence": "A: What should we plan for the staff outing if the weather report says it will rain all weekend in the north? B: Let's book an {{BLANK}} climbing gym downtown instead, since it has instructors, equipment for beginners, and a large café where people can rest and chat afterward.",
    "cn": "A：如果氣象報告說北部整個週末都會下雨，員工出遊我們該怎麼安排？ B：那我們改訂市中心的【室內】攀岩館吧，那裡有教練、適合初學者的裝備，還有一間大咖啡廳，大家結束後可以休息聊天。"
  },
  {
    "word": "outdoor",
    "pos": "adj.",
    "cn_def": "戶外的",
    "en_def": "done or happening outside",
    "sentence": "A: Why are so many young employees asking for Friday afternoons off during the autumn months this year? B: Many of them have taken up {{BLANK}} sports like rock climbing and camping, and they want to drive to the mountains early before the weekend traffic becomes terrible.",
    "cn": "A：為什麼今年秋天有這麼多年輕員工申請星期五下午請假？ B：他們很多人開始從事攀岩、露營之類的【戶外】運動，想在週末交通變得很糟之前提早開車上山。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；規律地",
    "en_def": "often and at the same times",
    "sentence": "A: How has your health changed since you joined the company badminton team at the beginning of this year? B: Because I now play {{BLANK}} every Tuesday and Thursday after work, I sleep much better, I have more energy in the mornings, and my doctor says my blood pressure has improved.",
    "cn": "A：自從你今年初加入公司羽球隊之後，健康有什麼改變？ B：因為我現在每週二和週四下班後都【規律地】打球，我睡得好多了，早上更有精神，醫生也說我的血壓改善了。"
  },
  {
    "word": "occasionally",
    "pos": "adv.",
    "cn_def": "偶爾；有時",
    "en_def": "sometimes but not often",
    "sentence": "A: Do you still go to the art museum near the central station as often as you did when you were a student? B: Only {{BLANK}} now, because my new job keeps me very busy, but I try to visit whenever there's a special exhibition that I really don't want to miss.",
    "cn": "A：你現在還像學生時代那樣常去中央車站附近的美術館嗎？ B：現在只是【偶爾】去，因為新工作讓我非常忙，但只要有我真的不想錯過的特展，我都會盡量去看。"
  },
  {
    "word": "actively",
    "pos": "adv.",
    "cn_def": "積極地；主動地",
    "en_def": "in a way that involves doing things with energy",
    "sentence": "A: Why was Ms. Chen chosen to organize this year's charity run for our company and its business partners? B: She has {{BLANK}} taken part in local running events for many years, so she knows how to plan the route, find sponsors, and keep hundreds of volunteers well organized.",
    "cn": "A：為什麼選陳小姐來籌辦今年我們公司和合作夥伴的慈善路跑？ B：她多年來一直【積極地】參加當地的路跑活動，所以知道怎麼規劃路線、找贊助商，以及把數百名志工安排得井井有條。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well because you have practiced it",
    "sentence": "A: Why did the interviewer ask you about your hobbies at the end of yesterday's job interview for the design position? B: She said that hobbies often show a useful {{BLANK}}, and when I explained that I build model airplanes, she agreed that I must be patient and pay close attention to details.",
    "cn": "A：昨天設計職位的面試最後，面試官為什麼問你嗜好？ B：她說嗜好常常能展現一項有用的【技能】，當我說明我會組裝模型飛機時，她也同意我一定很有耐心、很注重細節。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天分；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Did you hear the receptionist sing at the company's year-end party at the hotel last night? B: Yes, she has an amazing {{BLANK}} for music, and several managers asked her whether she would like to perform again at the opening ceremony of our new branch office next spring.",
    "cn": "A：你昨晚在飯店的公司尾牙有聽到櫃檯人員唱歌嗎？ B：有，她在音樂方面有驚人的【天分】，好幾位主管問她明年春天新分公司開幕典禮時願不願意再表演一次。"
  },
  {
    "word": "enthusiasm",
    "pos": "n.",
    "cn_def": "熱忱；熱情",
    "en_def": "a strong feeling of interest and excitement",
    "sentence": "A: How did the new photography club manage to attract more than forty members in only two weeks after it was announced? B: The organizer's {{BLANK}} was really contagious, because he gave short talks in every department, showed his best photos, and offered free lessons to complete beginners.",
    "cn": "A：新的攝影社是怎麼在宣布後短短兩週內就吸引到四十多名成員的？ B：發起人的【熱忱】很有感染力，他到每個部門做簡短介紹、展示他最好的照片，還提供完全新手免費課程。"
  },
  {
    "word": "dedication",
    "pos": "n.",
    "cn_def": "投入；奉獻",
    "en_def": "the willingness to give a lot of time and effort to something",
    "sentence": "A: How did the warehouse supervisor finish building a full-size wooden boat in his garage in just three years? B: It took real {{BLANK}}, since he worked on it every weekend and many evenings after his shift, and he even studied old books to learn traditional building methods.",
    "cn": "A：倉庫主管是怎麼在短短三年內，在自家車庫裡造好一艘實際大小的木船？ B：那需要真正的【投入】，因為他每個週末和許多下班後的晚上都在做，甚至還研讀舊書來學習傳統的造船方法。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社群；社區",
    "en_def": "a group of people who share the same interests or live in the same area",
    "sentence": "A: Why did you start going to the small board game shop near the subway station every Thursday night after work? B: It has a friendly {{BLANK}} of players of all ages, and the regular members always welcome newcomers, explain the rules patiently, and invite everyone to stay for dinner afterward.",
    "cn": "A：你為什麼開始每週四下班後都去捷運站附近那家小桌遊店？ B：那裡有一個由各年齡層玩家組成的友善【社群】，常客總是歡迎新人、耐心解說規則，還會邀請大家結束後留下來一起吃晚餐。"
  },
  {
    "word": "club",
    "pos": "n.",
    "cn_def": "社團；俱樂部",
    "en_def": "a group of people who meet to do an activity together",
    "sentence": "A: Is there any way for new employees in this building to meet people from other companies outside of work? B: You could join the running {{BLANK}} that meets in the lobby every Wednesday evening, since it has members from almost every office here and they often go for dinner after the run.",
    "cn": "A：這棟大樓的新員工有沒有什麼辦法在工作之外認識其他公司的人？ B：你可以加入每週三晚上在大廳集合的跑步【社團】，因為成員幾乎來自這裡的每間辦公室，跑完步後他們常常一起去吃晚餐。"
  }
];

const MCQS = [
  {
    "q": "Watching old movies with friends is Linda's favorite _____. She does it almost every Saturday evening after a long week at the bank.",
    "options": [
      "pastime",
      "deadline",
      "invoice",
      "shortage"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many employees have shown strong _____ in the new after-work language classes. The HR team will therefore open two more groups next month.",
    "options": [
      "shortage",
      "refund",
      "interest",
      "delay"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Workers in the city now have more _____ time thanks to the shorter work week. Many of them spend it at parks and museums.",
    "options": [
      "payroll",
      "leisure",
      "freight",
      "warranty"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The bank's lobby now displays a rare _____ of antique coins. The coins were donated by a retired director who gathered them for forty years.",
    "options": [
      "merger",
      "receipt",
      "schedule",
      "collection"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Local artists will sell handmade jewelry and pottery at the _____ fair this weekend. The event takes place in the square outside city hall.",
    "options": [
      "tax",
      "budget",
      "craft",
      "freight"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "After retiring from the factory, Tom took up oil _____. His colorful pictures of the harbor are now shown in a local gallery.",
    "options": [
      "painting",
      "fishing",
      "hiking",
      "gardening"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The magazine is looking for someone with experience in wildlife _____. The job involves taking pictures of birds and animals in national parks.",
    "options": [
      "cooking",
      "baking",
      "cycling",
      "photography"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The hotel's _____ staff plant fresh flowers along the entrance every spring. Guests often take photos of the colorful beds near the front door.",
    "options": [
      "fishing",
      "gardening",
      "painting",
      "hiking"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The restaurant offers a _____ class every Sunday morning. Participants learn how to prepare three simple dishes and then eat them for lunch.",
    "options": [
      "cooking",
      "fishing",
      "hiking",
      "gardening"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The new café sells fresh bread made on site every morning. The owner learned _____ from her grandmother, who ran a small bakery in Tainan.",
    "options": [
      "fishing",
      "hiking",
      "baking",
      "photography"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The lakeside resort rents boats and rods to guests who enjoy _____. Staff can also clean and cook the fish that guests catch.",
    "options": [
      "baking",
      "fishing",
      "painting",
      "cycling"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Please wear strong boots for tomorrow's _____ trip up the mountain. The trail is steep and can be muddy after rain.",
    "options": [
      "baking",
      "cooking",
      "painting",
      "hiking"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Visitors to the trade show can _____ free samples at each booth. Many people bring large bags to carry everything home.",
    "options": [
      "explore",
      "practice",
      "collect",
      "delay"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The design team was asked to _____ a new logo for the hobby store. They must present three different ideas to the owner by Friday.",
    "options": [
      "create",
      "collect",
      "explore",
      "practice"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "New sales staff should _____ their product presentations with a partner before meeting real clients. This helps them speak with more confidence.",
    "options": [
      "collect",
      "explore",
      "resign",
      "practice"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "During the conference break, guests are free to _____ the old town near the hotel. Maps of walking routes are available at the front desk.",
    "options": [
      "practice",
      "explore",
      "collect",
      "create"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Our marketing department is looking for a _____ writer who can come up with fresh ideas. Experience with social media is a plus.",
    "options": [
      "creative",
      "indoor",
      "outdoor",
      "relaxing"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Thanks to the friendly guide and good weather, the company boat tour was very _____. Many staff members asked to repeat it next year.",
    "options": [
      "indoor",
      "financial",
      "enjoyable",
      "previous"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The weekend pottery course has become very _____ among office workers. Most classes are now fully booked two months in advance.",
    "options": [
      "indoor",
      "popular",
      "outdoor",
      "eventual"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Because of the heavy rain, the sports day will move to the _____ gym next to the main building. Lunch will be served there as well.",
    "options": [
      "outdoor",
      "creative",
      "annual",
      "indoor"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The resort offers many _____ activities, such as kayaking, horse riding, and mountain biking. Guests should bring sunscreen and comfortable shoes.",
    "options": [
      "indoor",
      "legal",
      "outdoor",
      "digital"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Members who attend the chess club _____ can join the city tournament in June. Those who rarely come must first pass a short test.",
    "options": [
      "regularly",
      "occasionally",
      "barely",
      "previously"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Our manager rarely takes time off, but she _____ leaves early on Fridays to go fishing. Everyone is happy she has a hobby she loves.",
    "options": [
      "actively",
      "loudly",
      "deeply",
      "occasionally"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The company encourages all employees to _____ take part in the volunteer programs. Staff who join receive two extra days of paid leave.",
    "options": [
      "hardly",
      "actively",
      "barely",
      "recently"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Speaking a second language is a useful _____ for anyone working in the hotel industry. Many hotels offer free language classes to their staff.",
    "options": [
      "skill",
      "club",
      "collection",
      "community"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The young chef has a natural _____ for mixing flavors. Her new dessert menu has already received excellent reviews from food critics.",
    "options": [
      "club",
      "community",
      "talent",
      "collection"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The new intern showed great _____ for the project from her first day. She often stayed late to help her teammates finish their tasks.",
    "options": [
      "leisure",
      "enthusiasm",
      "collection",
      "craft"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The award recognizes Ken's _____ to the company over thirty years of service. He rarely missed a day of work in all that time.",
    "options": [
      "leisure",
      "pastime",
      "craft",
      "dedication"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The library hosts free events for the local _____ every month. Residents of all ages can join reading groups and craft workshops.",
    "options": [
      "talent",
      "skill",
      "community",
      "pastime"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Employees who enjoy reading can join the company book _____. Members meet in the cafeteria on the first Monday of every month.",
    "options": [
      "club",
      "talent",
      "skill",
      "leisure"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "pastime": {
    "pos": "n.",
    "en_def": "an activity you do for fun in your free time",
    "cn_def": "消遣；娛樂"
  },
  "interest": {
    "pos": "n.",
    "en_def": "a feeling of wanting to know about or do something",
    "cn_def": "興趣"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "time when you are not working and can relax",
    "cn_def": "閒暇；空閒"
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activities people do for fun and relaxation",
    "cn_def": "娛樂；休閒活動"
  },
  "collection": {
    "pos": "n.",
    "en_def": "a group of things that someone has gathered because they like them",
    "cn_def": "收藏；收藏品"
  },
  "craft": {
    "pos": "n.",
    "en_def": "an activity of making things by hand",
    "cn_def": "手工藝"
  },
  "painting": {
    "pos": "n.",
    "en_def": "the activity of making pictures with paint",
    "cn_def": "繪畫；畫畫"
  },
  "drawing": {
    "pos": "n.",
    "en_def": "a picture made with a pencil or pen",
    "cn_def": "素描；繪圖"
  },
  "photography": {
    "pos": "n.",
    "en_def": "the activity or job of taking photographs",
    "cn_def": "攝影"
  },
  "gardening": {
    "pos": "n.",
    "en_def": "the activity of growing plants and flowers in a garden",
    "cn_def": "園藝"
  },
  "cooking": {
    "pos": "n.",
    "en_def": "the activity of preparing food",
    "cn_def": "烹飪；做菜"
  },
  "baking": {
    "pos": "n.",
    "en_def": "the activity of making bread, cakes, or cookies in an oven",
    "cn_def": "烘焙"
  },
  "fishing": {
    "pos": "n.",
    "en_def": "the activity of catching fish",
    "cn_def": "釣魚"
  },
  "hiking": {
    "pos": "n.",
    "en_def": "the activity of taking long walks in the countryside or mountains",
    "cn_def": "健行；登山"
  },
  "cycling": {
    "pos": "n.",
    "en_def": "the activity of riding a bicycle",
    "cn_def": "騎自行車"
  },
  "collect": {
    "pos": "v.",
    "en_def": "to get and keep things of one type because you like them",
    "cn_def": "收集；收藏"
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創作；創造"
  },
  "practice": {
    "pos": "v.",
    "en_def": "to do something again and again to get better at it",
    "cn_def": "練習"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探險"
  },
  "relaxing": {
    "pos": "adj.",
    "en_def": "making you feel calm and comfortable",
    "cn_def": "令人放鬆的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "using imagination to make new things or ideas",
    "cn_def": "有創意的；創造性的"
  },
  "enjoyable": {
    "pos": "adj.",
    "en_def": "giving pleasure; fun",
    "cn_def": "令人愉快的；有趣的"
  },
  "popular": {
    "pos": "adj.",
    "en_def": "liked by many people",
    "cn_def": "受歡迎的；流行的"
  },
  "indoor": {
    "pos": "adj.",
    "en_def": "done or used inside a building",
    "cn_def": "室內的"
  },
  "outdoor": {
    "pos": "adj.",
    "en_def": "done or happening outside",
    "cn_def": "戶外的"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often and at the same times",
    "cn_def": "定期地；規律地"
  },
  "occasionally": {
    "pos": "adv.",
    "en_def": "sometimes but not often",
    "cn_def": "偶爾；有時"
  },
  "actively": {
    "pos": "adv.",
    "en_def": "in a way that involves doing things with energy",
    "cn_def": "積極地；主動地"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well because you have practiced it",
    "cn_def": "技能；技巧"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天分；才能"
  },
  "enthusiasm": {
    "pos": "n.",
    "en_def": "a strong feeling of interest and excitement",
    "cn_def": "熱忱；熱情"
  },
  "dedication": {
    "pos": "n.",
    "en_def": "the willingness to give a lot of time and effort to something",
    "cn_def": "投入；奉獻"
  },
  "community": {
    "pos": "n.",
    "en_def": "a group of people who share the same interests or live in the same area",
    "cn_def": "社群；社區"
  },
  "club": {
    "pos": "n.",
    "en_def": "a group of people who meet to do an activity together",
    "cn_def": "社團；俱樂部"
  }
};

const EXTRA_GLOSSES = {};
