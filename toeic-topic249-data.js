// Topic 249 Quiz Data: Museum 博物館
// Source word list: https://www.examword.com/group-topic/museum — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T249 - Museum 博物館",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "exhibit",
    "pos": "n.",
    "cn_def": "展覽；展品",
    "en_def": "a collection of objects shown to the public",
    "sentence": "A: Our team has a free afternoon after the sales meeting in Boston on Friday, so do you know any good places nearby where we could relax for a few hours? B: The city museum just opened a new {{BLANK}} about early computers, and many visitors say it is a great place to spend an afternoon together.",
    "cn": "A：我們團隊週五在波士頓的業務會議後有一個空閒的下午，你知道附近有什麼好地方可以讓我們放鬆幾個小時嗎？ B：市立博物館剛推出一個關於早期電腦的新【展覽】，許多參觀者說那是一起度過下午的好去處。"
  },
  {
    "word": "gallery",
    "pos": "n.",
    "cn_def": "美術館；展覽廳",
    "en_def": "a room or building where art is shown",
    "sentence": "A: Where should we hold the welcome dinner for our new clients from Japan next month, since they said they are very interested in modern art and design? B: We could rent the large {{BLANK}} on the third floor of the art museum, because guests can walk around the paintings before the meal is served.",
    "cn": "A：下個月我們該在哪裡為來自日本的新客戶舉辦歡迎晚宴？他們說對現代藝術和設計非常有興趣。 B：我們可以租用美術館三樓的大型【展覽廳】，因為賓客在上菜前可以四處欣賞畫作。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；探究",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: How much time should I plan for the museum visit during the conference trip, since the bus back to the hotel leaves at five o'clock sharp? B: I would plan at least three hours, because there are four large floors to {{BLANK}}, and the science section alone usually takes visitors more than an hour.",
    "cn": "A：研討會行程中參觀博物館我該安排多少時間？因為回飯店的巴士五點整就要出發。 B：我建議至少安排三個小時，因為有四個大樓層可以【探索】，光是科學區通常就要花參觀者一個多小時。"
  },
  {
    "word": "historical",
    "pos": "adj.",
    "cn_def": "歷史的；有關歷史的",
    "en_def": "connected with the past or with history",
    "sentence": "A: Why did the city council decide to spend so much money repairing the old train station instead of building a modern office tower there? B: The building has great {{BLANK}} value because it was built more than a hundred years ago, so the council wants to turn it into a museum for tourists.",
    "cn": "A：為什麼市議會決定花那麼多錢修復舊火車站，而不是在那裡蓋一棟現代化辦公大樓？ B：這棟建築有很高的【歷史】價值，因為它建於一百多年前，所以議會想把它改造成給觀光客參觀的博物館。"
  },
  {
    "word": "ancient",
    "pos": "adj.",
    "cn_def": "古代的；古老的",
    "en_def": "very old; from a time long ago",
    "sentence": "A: What was the most popular part of the museum tour that the company arranged for the overseas visitors last weekend? B: Most of them loved the room full of {{BLANK}} coins and tools from Egypt, because the guide explained how people used them thousands of years ago in their daily lives.",
    "cn": "A：上週末公司為海外訪客安排的博物館導覽中，最受歡迎的部分是什麼？ B：他們大多數人都很喜歡那間擺滿埃及【古代】錢幣和工具的展間，因為導覽員解說了數千年前人們如何在日常生活中使用它們。"
  },
  {
    "word": "biased",
    "pos": "adj.",
    "cn_def": "有偏見的；偏頗的",
    "en_def": "unfairly favoring one side or opinion",
    "sentence": "A: Did you read the visitor comments about the new war history display, and why are some people so upset about the information on the signs? B: Several visitors felt that the descriptions were {{BLANK}} because they only showed one country's side of the story, so the museum director has promised to review all the text.",
    "cn": "A：你看了關於新戰爭歷史展的參觀者意見嗎？為什麼有些人對告示牌上的資訊這麼不滿？ B：好幾位參觀者覺得那些說明【偏頗】，因為只呈現了一個國家的說法，所以館長已承諾會重新審視所有文字。"
  },
  {
    "word": "glimpse",
    "pos": "n.",
    "cn_def": "一瞥；短暫的看見",
    "en_def": "a quick look at something",
    "sentence": "A: Is it worth taking our summer interns to the old factory museum, or do you think they will find it boring after a long day at the office? B: I think they will enjoy it, because the museum offers a rare {{BLANK}} of how workers in our industry lived and worked a century ago.",
    "cn": "A：值得帶我們的暑期實習生去舊工廠博物館嗎？還是你覺得他們在辦公室忙了一整天後會覺得無聊？ B：我想他們會喜歡的，因為這間博物館讓人難得【一窺】一世紀前我們這一行的工人如何生活與工作。"
  },
  {
    "word": "frequently",
    "pos": "adv.",
    "cn_def": "經常；頻繁地",
    "en_def": "often; many times",
    "sentence": "A: Do you think we should ask the museum to change its opening hours so that more office workers can visit after work during the week? B: Yes, because visitors {{BLANK}} complain that it closes at four o'clock, which is too early for anyone with a full-time job in the city center.",
    "cn": "A：你覺得我們應該請博物館調整開放時間，讓更多上班族平日下班後也能參觀嗎？ B：是的，因為參觀者【經常】抱怨博物館四點就關門，對在市中心有全職工作的人來說太早了。"
  },
  {
    "word": "artifact",
    "pos": "n.",
    "cn_def": "文物；手工藝品",
    "en_def": "an old object made by people, often kept in a museum",
    "sentence": "A: Why are the security guards checking every bag so carefully at the entrance of the history museum this month? B: The museum borrowed a very valuable gold {{BLANK}} from a national collection in Greece, so the insurance company requires extra security checks until the special display ends in December.",
    "cn": "A：為什麼這個月歷史博物館入口的警衛要這麼仔細地檢查每個包包？ B：博物館向希臘一個國家級收藏借來了一件非常珍貴的黃金【文物】，所以保險公司要求在特展十二月結束前加強安全檢查。"
  },
  {
    "word": "artwork",
    "pos": "n.",
    "cn_def": "藝術作品；美術品",
    "en_def": "a painting, drawing, or other piece of art",
    "sentence": "A: Have you decided what to hang on the wall in the main reception area before the new office opens next Monday? B: Yes, a local museum agreed to lend us a large piece of {{BLANK}} by a famous painter, so our visitors will see something beautiful as soon as they walk in.",
    "cn": "A：新辦公室下週一開幕前，你決定好要在主接待區的牆上掛什麼了嗎？ B：決定了，一間當地博物館同意借給我們一幅知名畫家的大型【藝術作品】，這樣訪客一走進來就能看到美麗的東西。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "氣氛；氛圍",
    "en_def": "the feeling or mood of a place",
    "sentence": "A: Why did the marketing team choose the science museum for our product launch instead of the hotel ballroom we usually rent? B: They thought the museum would create an exciting {{BLANK}} for the guests, especially with the huge dinosaur skeleton standing in the middle of the main hall.",
    "cn": "A：為什麼行銷團隊選擇科學博物館舉辦我們的產品發表會，而不是我們通常租用的飯店宴會廳？ B：他們認為博物館能為賓客營造令人興奮的【氣氛】，尤其是主廳中央矗立著巨大的恐龍骨骼。"
  },
  {
    "word": "immerse",
    "pos": "v.",
    "cn_def": "使沉浸；使專注於",
    "en_def": "to make someone feel completely involved in something",
    "sentence": "A: What makes the new ocean museum so different from the older one that our family visited near the harbor several years ago? B: It uses large screens and sound effects to {{BLANK}} visitors in an underwater world, so you really feel like you are swimming with the fish and whales.",
    "cn": "A：新的海洋博物館跟我們家幾年前在港口附近參觀的舊館有什麼不同？ B：它利用大型螢幕和音效讓參觀者【沉浸】在海底世界裡，所以你真的會覺得自己在跟魚和鯨魚一起游泳。"
  },
  {
    "word": "integral",
    "pos": "adj.",
    "cn_def": "不可或缺的；構成整體所必需的",
    "en_def": "necessary and important as a part of a whole",
    "sentence": "A: Why does the school board want every student to visit the city museum at least once during the school year? B: The board believes that museum trips are an {{BLANK}} part of a good education, because students can see real objects instead of only reading about them in their textbooks.",
    "cn": "A：為什麼教育委員會希望每位學生在學年中至少參觀市立博物館一次？ B：委員會認為參觀博物館是良好教育中【不可或缺】的一部分，因為學生能看到真實的物品，而不只是在課本上讀到。"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "cn_def": "保存；保護",
    "en_def": "to keep something in good condition",
    "sentence": "A: Why is the temperature in the storage room of the museum kept so low, even during the hot summer months? B: The staff need to {{BLANK}} the old paper documents and paintings carefully, because heat and wet air can damage them quickly and the museum cannot replace them.",
    "cn": "A：為什麼博物館儲藏室的溫度即使在炎熱的夏季也維持得這麼低？ B：工作人員必須小心【保存】那些古老的紙本文件和畫作，因為高溫和潮濕的空氣會很快損壞它們，而博物館無法取代它們。"
  },
  {
    "word": "invaluable",
    "pos": "adj.",
    "cn_def": "非常寶貴的；無價的",
    "en_def": "extremely useful or helpful",
    "sentence": "A: How did the volunteers help the museum during the busy holiday season when thousands of tourists came every day? B: Their help was {{BLANK}}, because they guided large groups, answered visitors' questions, and kept the lines moving, so the regular staff could focus on safety and ticket sales.",
    "cn": "A：在每天有數千名遊客湧入的繁忙假期中，志工們如何協助博物館？ B：他們的幫助【非常寶貴】，因為他們帶領大型團體、回答參觀者的問題並維持排隊動線順暢，讓正式員工能專注於安全和售票工作。"
  },
  {
    "word": "foster",
    "pos": "v.",
    "cn_def": "培養；促進",
    "en_def": "to help something grow or develop",
    "sentence": "A: Why is our company paying for the new children's science program at the city museum this year? B: Our CEO hopes the program will {{BLANK}} an interest in engineering among young students, and some of them may even want to work for companies like ours when they grow up.",
    "cn": "A：為什麼我們公司今年要贊助市立博物館新的兒童科學課程？ B：我們執行長希望這個課程能【培養】年輕學生對工程的興趣，其中有些人長大後甚至可能想到像我們這樣的公司工作。"
  },
  {
    "word": "educational",
    "pos": "adj.",
    "cn_def": "有教育意義的；教育的",
    "en_def": "helping people learn",
    "sentence": "A: What kind of team activity should we plan for the new employees during their first week, since the weather forecast says it will rain? B: Let's take them to the technology museum, because it is both fun and {{BLANK}}, and they can learn a lot about the history of our industry.",
    "cn": "A：既然天氣預報說會下雨，我們該為新進員工在第一週安排什麼樣的團隊活動？ B：我們帶他們去科技博物館吧，因為那裡既有趣又有【教育意義】，他們可以學到很多關於我們產業歷史的知識。"
  },
  {
    "word": "curiosity",
    "pos": "n.",
    "cn_def": "好奇心",
    "en_def": "a strong wish to know or learn about something",
    "sentence": "A: Why are so many children crowding around the glass box near the entrance of the natural history museum this morning? B: The museum put a live snake on display there, and the children's {{BLANK}} is so strong that the staff had to add a guard to keep the line moving.",
    "cn": "A：為什麼今天早上有這麼多孩子擠在自然史博物館入口附近的玻璃箱周圍？ B：博物館在那裡展示了一條活蛇，孩子們的【好奇心】非常強烈，工作人員只好加派一名警衛來維持隊伍前進。"
  },
  {
    "word": "creativity",
    "pos": "n.",
    "cn_def": "創造力；創意",
    "en_def": "the ability to make new things or think of new ideas",
    "sentence": "A: Why did the design department organize a trip to the modern art museum instead of having its usual monthly meeting? B: The manager believes that seeing unusual paintings and sculptures will boost the team's {{BLANK}}, and she hopes they will come back with fresh ideas for the new advertising campaign.",
    "cn": "A：為什麼設計部安排參觀現代美術館，而不是舉行平常的月會？ B：經理認為欣賞不尋常的畫作和雕塑能激發團隊的【創造力】，她希望大家回來後能為新的廣告活動帶來新點子。"
  },
  {
    "word": "interactive",
    "pos": "adj.",
    "cn_def": "互動式的；互動的",
    "en_def": "letting people take part or respond, not just watch",
    "sentence": "A: Our museum's visitor numbers have dropped for two years, so what changes do you think we should make to attract more families? B: We should add more {{BLANK}} displays where children can touch buttons, play games, and try simple experiments, because parents say their kids get bored just looking at objects.",
    "cn": "A：我們博物館的參觀人數已經連續兩年下滑，你覺得我們應該做哪些改變來吸引更多家庭？ B：我們應該增加更多【互動式】展示，讓孩子可以按按鈕、玩遊戲和嘗試簡單的實驗，因為家長說孩子們光看展品會覺得無聊。"
  },
  {
    "word": "strengthen",
    "pos": "v.",
    "cn_def": "加強；強化",
    "en_def": "to make something stronger",
    "sentence": "A: Why did the city museum invite artists from our sister city in Korea to hold a joint exhibition this autumn? B: The mayor wants to {{BLANK}} the friendship between the two cities, and she also hopes the event will bring more Korean tourists and business partners to our area.",
    "cn": "A：為什麼市立博物館今年秋天邀請我們韓國姊妹市的藝術家舉辦聯展？ B：市長想【加強】兩市之間的友誼，她也希望這個活動能為本地帶來更多韓國觀光客和商業夥伴。"
  },
  {
    "word": "critical",
    "pos": "adj.",
    "cn_def": "關鍵的；嚴重的；批判的",
    "en_def": "very important or serious",
    "sentence": "A: Why did the museum close the dinosaur hall for two whole weeks right before the busy summer vacation started? B: The engineers found a {{BLANK}} problem with the ceiling above the largest skeleton, so the director decided the repairs had to be finished before any more visitors could enter safely.",
    "cn": "A：為什麼博物館在繁忙的暑假開始前把恐龍廳關閉整整兩週？ B：工程師發現最大骨骼上方的天花板有一個【嚴重的】問題，所以館長決定必須先完成修繕，才能讓更多參觀者安全進入。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "有活力的；積極的；動態的",
    "en_def": "full of energy and new ideas",
    "sentence": "A: What did the board members think of the new museum director after her first presentation at the meeting yesterday afternoon? B: They were very impressed, because she is a {{BLANK}} leader with lots of energy and new ideas, and she has already made a clear plan to increase visitor numbers next year.",
    "cn": "A：昨天下午會議上新館長第一次簡報之後，董事會成員對她有什麼看法？ B：他們印象非常深刻，因為她是一位【積極有活力的】領導者，充滿幹勁和新點子，而且她已經擬定了明年增加參觀人數的明確計畫。"
  },
  {
    "word": "appreciation",
    "pos": "n.",
    "cn_def": "欣賞；賞識；感激",
    "en_def": "understanding and enjoying the value of something",
    "sentence": "A: Why does our company give every employee a free yearly pass to the art museum as part of the benefits package? B: Our founder believes that a deeper {{BLANK}} of art and design helps workers think more creatively, and many staff members say the visits help them relax after stressful projects.",
    "cn": "A：為什麼我們公司在福利方案中給每位員工一張美術館的免費年票？ B：我們的創辦人認為，對藝術與設計更深入的【欣賞】能幫助員工更有創意地思考，許多員工也說參觀能幫助他們在壓力大的專案後放鬆。"
  },
  {
    "word": "inadequate",
    "pos": "adj.",
    "cn_def": "不足的；不夠好的",
    "en_def": "not enough or not good enough",
    "sentence": "A: Why did so many visitors leave negative reviews about the museum's new science center on travel websites last month? B: Most of them said the parking was {{BLANK}} for such a large building, so they had to drive around for almost an hour before they could find a space.",
    "cn": "A：為什麼上個月有這麼多參觀者在旅遊網站上給博物館的新科學中心負評？ B：他們大多說以這麼大的建築來說停車位【不足】，所以他們得開車繞將近一小時才找到車位。"
  },
  {
    "word": "virtually",
    "pos": "adv.",
    "cn_def": "以虛擬方式；幾乎",
    "en_def": "by using computers or the internet instead of being there; also, almost",
    "sentence": "A: Can our overseas sales staff see the new company history display at the headquarters, even though they cannot fly here this year? B: Yes, the museum team created an online tour, so employees around the world can walk through every room {{BLANK}} using their laptops or smartphones at any time.",
    "cn": "A：雖然我們的海外業務人員今年無法飛來，他們能看到總部新的公司歷史展覽嗎？ B：可以，博物館團隊製作了線上導覽，所以世界各地的員工可以隨時用筆電或智慧型手機【以虛擬方式】走過每個展間。"
  },
  {
    "word": "attraction",
    "pos": "n.",
    "cn_def": "景點；吸引人的事物",
    "en_def": "a place or thing that many people visit or enjoy",
    "sentence": "A: Which places should we include on the city tour for the visiting partners from Germany next Thursday afternoon? B: The national palace museum is the top tourist {{BLANK}} in the city, so we should definitely take them there first and then have dinner at the night market nearby.",
    "cn": "A：下週四下午德國來訪的合作夥伴的市區導覽，我們應該安排哪些地方？ B：國立故宮博物院是市內頭號觀光【景點】，所以我們一定要先帶他們去那裡，然後到附近的夜市吃晚餐。"
  },
  {
    "word": "appealing",
    "pos": "adj.",
    "cn_def": "有吸引力的；吸引人的",
    "en_def": "attractive or interesting",
    "sentence": "A: Why did the museum shop's sales increase so much after the new manager took over in the spring? B: She redesigned the products to make them more {{BLANK}} to young visitors, adding colorful notebooks, phone cases, and T-shirts printed with images from the most popular paintings.",
    "cn": "A：為什麼新經理春天接手後，博物館商店的銷售量增加了這麼多？ B：她重新設計商品，讓它們對年輕參觀者更有【吸引力】，增加了印有最受歡迎畫作圖案的彩色筆記本、手機殼和T恤。"
  },
  {
    "word": "vividly",
    "pos": "adv.",
    "cn_def": "清晰地；生動地",
    "en_def": "in a very clear and detailed way",
    "sentence": "A: Why do you still talk about the museum trip that our team took during the company retreat in Kyoto three years ago? B: I {{BLANK}} remember the beautiful old gardens and the tea ceremony we watched there, and it was the first time our whole team really relaxed together.",
    "cn": "A：為什麼你還在談論三年前公司在京都員工旅遊時我們團隊參觀博物館的事？ B：我仍【清晰地】記得那裡美麗的古老庭園和我們觀賞的茶道，那是我們整個團隊第一次真正一起放鬆。"
  },
  {
    "word": "amazed",
    "pos": "adj.",
    "cn_def": "驚奇的；驚嘆的",
    "en_def": "very surprised",
    "sentence": "A: How did the clients from Brazil react when you took them to the new space museum after the contract signing yesterday? B: They were {{BLANK}} by the huge rocket hanging from the ceiling, and they took so many photos that we almost missed our dinner reservation at the hotel.",
    "cn": "A：昨天簽約後你帶巴西客戶去新的太空博物館時，他們有什麼反應？ B：他們對懸掛在天花板上的巨大火箭感到【驚嘆不已】，拍了好多照片，我們差點錯過飯店的晚餐訂位。"
  },
  {
    "word": "shield",
    "pos": "v.",
    "cn_def": "保護；遮擋",
    "en_def": "to protect someone or something from harm",
    "sentence": "A: Why are the windows in the painting room of the museum covered with special dark glass, even on cloudy days? B: The glass helps {{BLANK}} the old paintings from strong sunlight, because bright light can slowly fade the colors and the museum wants to keep them looking new for many years.",
    "cn": "A：為什麼博物館畫作展間的窗戶即使在陰天也覆蓋著特殊的深色玻璃？ B：這種玻璃有助於【保護】古老畫作免受強烈陽光照射，因為強光會慢慢使顏色褪去，而博物館希望讓它們多年來都保持如新。"
  },
  {
    "word": "irreplaceable",
    "pos": "adj.",
    "cn_def": "無法取代的；不可替代的",
    "en_def": "too special or valuable to be replaced",
    "sentence": "A: Why did the museum spend so much money on a new fire safety system when the old one was still working? B: Many of the documents and paintings in the collection are {{BLANK}}, so the director said that even a small fire could destroy history that we can never get back.",
    "cn": "A：舊的消防系統還能用，為什麼博物館要花這麼多錢裝新的消防安全系統？ B：館藏中許多文件和畫作都是【無法取代的】，所以館長說即使一場小火也可能摧毀我們永遠無法挽回的歷史。"
  },
  {
    "word": "imperative",
    "pos": "adj.",
    "cn_def": "必要的；極重要的",
    "en_def": "extremely important and necessary",
    "sentence": "A: Should we tell the visiting students anything special before they enter the ancient pottery room this afternoon? B: Yes, it is {{BLANK}} that they keep their bags at the front desk and do not touch the display cases, because even a small accident could break objects that are thousands of years old.",
    "cn": "A：今天下午參訪學生進入古代陶器展間前，我們該特別告訴他們什麼嗎？ B：是的，【務必】請他們把包包寄放在服務台，而且不能碰觸展示櫃，因為即使是小意外也可能打破數千年歷史的物品。"
  }
];

const MCQS = [
  {
    "q": "The museum will open a new _____ on space travel next month. It will include photos, models, and a real astronaut suit.",
    "options": [
      "exhibit",
      "glimpse",
      "curiosity",
      "appreciation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our company rented the main _____ of the art museum for the awards dinner. Guests enjoyed the paintings while waiting for the meal.",
    "options": [
      "curiosity",
      "creativity",
      "gallery",
      "glimpse"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Visitors need at least two hours to _____ all four floors of the science center. Many families stay for the whole day.",
    "options": [
      "foster",
      "explore",
      "preserve",
      "strengthen"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The old bank building has great _____ value for the city. The mayor plans to turn it into a small museum next year.",
    "options": [
      "interactive",
      "appealing",
      "inadequate",
      "historical"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The tour guide showed us _____ pots that were made more than three thousand years ago. Some of them still had painted designs.",
    "options": [
      "interactive",
      "dynamic",
      "ancient",
      "biased"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Some readers felt the museum guidebook was _____ because it described only one side of the war. The editors will rewrite several pages.",
    "options": [
      "biased",
      "educational",
      "irreplaceable",
      "amazed"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The old photographs in the lobby give visitors a quick _____ of life in the town a century ago. Many guests stop to look.",
    "options": [
      "gallery",
      "attraction",
      "artifact",
      "glimpse"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Customers _____ ask whether the museum café accepts credit cards. Please put a clear sign next to the cash register.",
    "options": [
      "vividly",
      "frequently",
      "virtually",
      "previously"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The stolen gold _____ was found in a warehouse last week. It will be returned to the national museum in Athens.",
    "options": [
      "artifact",
      "atmosphere",
      "curiosity",
      "appreciation"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The hotel lobby displays a large piece of _____ by a local painter. Many guests take photos of it when they check in.",
    "options": [
      "atmosphere",
      "curiosity",
      "artwork",
      "glimpse"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Soft music and warm lighting create a relaxing _____ in the museum café. Many visitors stay there for hours after their tour.",
    "options": [
      "artifact",
      "atmosphere",
      "glimpse",
      "curiosity"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The new virtual reality room lets visitors _____ themselves in the world of ancient Rome. Tickets for this room sell out quickly.",
    "options": [
      "shield",
      "foster",
      "strengthen",
      "immerse"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Customer feedback is an _____ part of our planning process. We review every comment before we design a new exhibit.",
    "options": [
      "ancient",
      "amazed",
      "integral",
      "biased"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The museum uses special boxes to _____ old letters and maps. Without them, the paper would turn yellow and fall apart.",
    "options": [
      "preserve",
      "immerse",
      "explore",
      "foster"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Her twenty years of experience in museum management will be _____ to our new project. We are lucky she agreed to join us.",
    "options": [
      "inadequate",
      "ancient",
      "biased",
      "invaluable"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The library and museum work together to _____ a love of reading among young children. They hold free story events every Saturday.",
    "options": [
      "shield",
      "foster",
      "immerse",
      "explore"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The factory tour is both fun and _____ for students. They learn how chocolate is made from beans to bars.",
    "options": [
      "educational",
      "inadequate",
      "biased",
      "ancient"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The strange machine in the lobby has caught the _____ of many visitors. Staff members are often asked what it does.",
    "options": [
      "artwork",
      "gallery",
      "curiosity",
      "artifact"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The design team visited a modern art museum to boost their _____. They came back with many fresh ideas for the new ad.",
    "options": [
      "artifact",
      "creativity",
      "gallery",
      "exhibit"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Children love the _____ displays because they can press buttons and try simple experiments. These areas are always the busiest in the museum.",
    "options": [
      "irreplaceable",
      "biased",
      "ancient",
      "interactive"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The joint exhibition will help _____ the business ties between the two cities. Both mayors will attend the opening ceremony.",
    "options": [
      "immerse",
      "explore",
      "strengthen",
      "shield"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Regular cleaning of the air system is _____ to protecting the paintings. Dust and moisture can cause serious damage over time.",
    "options": [
      "critical",
      "appealing",
      "amazed",
      "historical"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The museum hired a young and _____ director to attract new visitors. She has already planned several exciting events for the summer.",
    "options": [
      "ancient",
      "irreplaceable",
      "biased",
      "dynamic"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The art class helped employees develop a deeper _____ of painting and design. Many of them now visit galleries on weekends.",
    "options": [
      "atmosphere",
      "appreciation",
      "attraction",
      "artifact"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Visitors complained that the signs in the museum were _____ and confusing. The staff will add clearer maps at every entrance.",
    "options": [
      "inadequate",
      "invaluable",
      "amazed",
      "ancient"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Because of the storm, the board meeting was held _____ instead of at the museum. Members joined from home using video calls.",
    "options": [
      "frequently",
      "vividly",
      "virtually",
      "previously"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The giant aquarium has become the city's most popular tourist _____. Over two million people visited it last year.",
    "options": [
      "appreciation",
      "attraction",
      "curiosity",
      "glimpse"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The museum shop made its products more _____ to teenagers by adding colorful phone cases. Sales rose by thirty percent.",
    "options": [
      "ancient",
      "inadequate",
      "integral",
      "appealing"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The clients were _____ by the size of the dinosaur skeleton in the main hall. They took dozens of photos during the tour.",
    "options": [
      "integral",
      "biased",
      "amazed",
      "historical"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Many of the old documents in the collection are _____. If they are lost in a fire, no copies exist anywhere.",
    "options": [
      "irreplaceable",
      "interactive",
      "appealing",
      "dynamic"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "exhibit": {
    "pos": "n.",
    "en_def": "a collection of objects shown to the public",
    "cn_def": "展覽；展品"
  },
  "gallery": {
    "pos": "n.",
    "en_def": "a room or building where art is shown",
    "cn_def": "美術館；展覽廳"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；探究"
  },
  "historical": {
    "pos": "adj.",
    "en_def": "connected with the past or with history",
    "cn_def": "歷史的；有關歷史的"
  },
  "ancient": {
    "pos": "adj.",
    "en_def": "very old; from a time long ago",
    "cn_def": "古代的；古老的"
  },
  "biased": {
    "pos": "adj.",
    "en_def": "unfairly favoring one side or opinion",
    "cn_def": "有偏見的；偏頗的"
  },
  "glimpse": {
    "pos": "n.",
    "en_def": "a quick look at something",
    "cn_def": "一瞥；短暫的看見"
  },
  "frequently": {
    "pos": "adv.",
    "en_def": "often; many times",
    "cn_def": "經常；頻繁地"
  },
  "artifact": {
    "pos": "n.",
    "en_def": "an old object made by people, often kept in a museum",
    "cn_def": "文物；手工藝品"
  },
  "artwork": {
    "pos": "n.",
    "en_def": "a painting, drawing, or other piece of art",
    "cn_def": "藝術作品；美術品"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛；氛圍"
  },
  "immerse": {
    "pos": "v.",
    "en_def": "to make someone feel completely involved in something",
    "cn_def": "使沉浸；使專注於"
  },
  "integral": {
    "pos": "adj.",
    "en_def": "necessary and important as a part of a whole",
    "cn_def": "不可或缺的；構成整體所必需的"
  },
  "preserve": {
    "pos": "v.",
    "en_def": "to keep something in good condition",
    "cn_def": "保存；保護"
  },
  "invaluable": {
    "pos": "adj.",
    "en_def": "extremely useful or helpful",
    "cn_def": "非常寶貴的；無價的"
  },
  "foster": {
    "pos": "v.",
    "en_def": "to help something grow or develop",
    "cn_def": "培養；促進"
  },
  "educational": {
    "pos": "adj.",
    "en_def": "helping people learn",
    "cn_def": "有教育意義的；教育的"
  },
  "curiosity": {
    "pos": "n.",
    "en_def": "a strong wish to know or learn about something",
    "cn_def": "好奇心"
  },
  "creativity": {
    "pos": "n.",
    "en_def": "the ability to make new things or think of new ideas",
    "cn_def": "創造力；創意"
  },
  "interactive": {
    "pos": "adj.",
    "en_def": "letting people take part or respond, not just watch",
    "cn_def": "互動式的；互動的"
  },
  "strengthen": {
    "pos": "v.",
    "en_def": "to make something stronger",
    "cn_def": "加強；強化"
  },
  "critical": {
    "pos": "adj.",
    "en_def": "very important or serious",
    "cn_def": "關鍵的；嚴重的；批判的"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "full of energy and new ideas",
    "cn_def": "有活力的；積極的；動態的"
  },
  "appreciation": {
    "pos": "n.",
    "en_def": "understanding and enjoying the value of something",
    "cn_def": "欣賞；賞識；感激"
  },
  "inadequate": {
    "pos": "adj.",
    "en_def": "not enough or not good enough",
    "cn_def": "不足的；不夠好的"
  },
  "virtually": {
    "pos": "adv.",
    "en_def": "by using computers or the internet instead of being there; also, almost",
    "cn_def": "以虛擬方式；幾乎"
  },
  "attraction": {
    "pos": "n.",
    "en_def": "a place or thing that many people visit or enjoy",
    "cn_def": "景點；吸引人的事物"
  },
  "appealing": {
    "pos": "adj.",
    "en_def": "attractive or interesting",
    "cn_def": "有吸引力的；吸引人的"
  },
  "vividly": {
    "pos": "adv.",
    "en_def": "in a very clear and detailed way",
    "cn_def": "清晰地；生動地"
  },
  "amazed": {
    "pos": "adj.",
    "en_def": "very surprised",
    "cn_def": "驚奇的；驚嘆的"
  },
  "shield": {
    "pos": "v.",
    "en_def": "to protect someone or something from harm",
    "cn_def": "保護；遮擋"
  },
  "irreplaceable": {
    "pos": "adj.",
    "en_def": "too special or valuable to be replaced",
    "cn_def": "無法取代的；不可替代的"
  },
  "imperative": {
    "pos": "adj.",
    "en_def": "extremely important and necessary",
    "cn_def": "必要的；極重要的"
  }
};

const EXTRA_GLOSSES = {};
