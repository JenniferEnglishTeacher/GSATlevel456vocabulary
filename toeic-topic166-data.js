// Topic 166 Quiz Data: Happiness 快樂
// Source word list: https://www.examword.com/group-topic/happiness — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T166 - Happiness 快樂",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "joy",
    "pos": "n.",
    "cn_def": "喜悅；歡樂",
    "en_def": "a feeling of great happiness",
    "sentence": "A: How did the new manager react when she heard that our small design team had won the national advertising award for the coffee campaign we worked on all spring? B: She jumped up from her desk with {{BLANK}} and immediately invited everyone to a celebration dinner at the Italian restaurant across the street.",
    "cn": "A：當新經理聽到我們的小設計團隊以整個春天製作的咖啡廣告贏得全國廣告獎時，她有什麼反應？ B：她【欣喜】地從座位上跳起來，馬上邀請大家到對街的義大利餐廳吃慶功晚餐。"
  },
  {
    "word": "delight",
    "pos": "n.",
    "cn_def": "欣喜；高興",
    "en_def": "great pleasure or happiness",
    "sentence": "A: Did the visitors from our Tokyo office like the tour of the factory and the local night market that you organized for them yesterday? B: Yes, to my {{BLANK}}, they said it was the best part of their trip, and they even asked for the names of the food stalls so they could visit again next year.",
    "cn": "A：東京辦公室的訪客喜歡你昨天為他們安排的工廠參觀和當地夜市行程嗎？ B：是的，令我【高興】的是，他們說那是這趟旅程最棒的部分，甚至還問了那些小吃攤的名字，好讓明年可以再去。"
  },
  {
    "word": "pleasure",
    "pos": "n.",
    "cn_def": "愉快；榮幸",
    "en_def": "a feeling of enjoyment; an honor",
    "sentence": "A: Ms. Lin, could you say a few words to welcome our new partners from Singapore before the dinner starts at seven o'clock this evening? B: Of course, it would be a {{BLANK}} to speak, because I worked with their sales team last year and I know how much effort they put into this agreement.",
    "cn": "A：林小姐，今晚七點晚宴開始前，可以請妳說幾句話歡迎我們來自新加坡的新夥伴嗎？ B：當然，能致詞是我的【榮幸】，因為我去年和他們的業務團隊合作過，知道他們為這份協議付出了多少心力。"
  },
  {
    "word": "contentment",
    "pos": "n.",
    "cn_def": "滿足；知足",
    "en_def": "a calm feeling of being happy with what you have",
    "sentence": "A: Why did your uncle decide to leave his high-paying job at the bank and open a small bookshop in the countryside last year? B: He said that money never gave him real {{BLANK}}, and now he feels calm and happy every morning when he opens the shop and chats with his regular customers.",
    "cn": "A：你叔叔去年為什麼決定辭掉銀行的高薪工作，到鄉下開一家小書店？ B：他說金錢從來沒有帶給他真正的【滿足】，現在他每天早上開店、和常客聊天時，都覺得平靜又快樂。"
  },
  {
    "word": "satisfaction",
    "pos": "n.",
    "cn_def": "滿意；滿足",
    "en_def": "the good feeling when you get what you wanted",
    "sentence": "A: Why does the hotel ask every guest to fill out a short online survey after they check out at the front desk? B: The general manager wants to measure customer {{BLANK}}, so she reads the comments every week and uses them to improve the rooms, the breakfast menu, and the staff training program.",
    "cn": "A：為什麼飯店要請每位房客在櫃檯退房後填寫一份簡短的線上問卷？ B：總經理想要衡量顧客【滿意度】，所以她每週閱讀意見，並用來改善客房、早餐菜單和員工訓練計畫。"
  },
  {
    "word": "bliss",
    "pos": "n.",
    "cn_def": "極樂；無比幸福",
    "en_def": "perfect happiness",
    "sentence": "A: How was your week off at the beach resort after you finished that stressful project for the marketing department last month? B: It was pure {{BLANK}}, because I turned off my work phone, read three novels by the pool, and enjoyed fresh seafood every evening while watching the sun go down over the ocean.",
    "cn": "A：上個月你完成行銷部那個壓力很大的專案後，在海灘度假村休假一週感覺如何？ B：真是無比【幸福】，因為我關掉了工作手機，在泳池邊讀了三本小說，每天傍晚一邊看海上夕陽一邊享用新鮮海鮮。"
  },
  {
    "word": "cheerfulness",
    "pos": "n.",
    "cn_def": "愉快；開朗",
    "en_def": "the quality of being happy and friendly",
    "sentence": "A: Why did the restaurant owner give the young waiter an award at the staff meeting even though he has only worked there for three months? B: The owner said his {{BLANK}} makes customers feel welcome, and many diners have written online reviews mentioning his friendly greetings and warm attitude during busy lunch hours.",
    "cn": "A：為什麼餐廳老闆在員工會議上頒獎給那位年輕服務生，即使他才在那裡工作三個月？ B：老闆說他的【開朗】讓顧客感到賓至如歸，很多用餐客人都在網路評論中提到他在忙碌午餐時段親切的招呼和溫暖的態度。"
  },
  {
    "word": "well-being",
    "pos": "n.",
    "cn_def": "幸福；身心健康",
    "en_def": "the state of being healthy and happy",
    "sentence": "A: Why has the human resources department started offering free yoga classes and quiet rest areas on the fifth floor of our building? B: The company wants to improve employee {{BLANK}}, because a recent survey showed that many workers felt tired and stressed after long hours in front of their computers.",
    "cn": "A：為什麼人資部開始在我們大樓五樓提供免費瑜伽課和安靜的休息區？ B：公司想提升員工的【身心健康】，因為最近一項調查顯示，許多員工長時間坐在電腦前後感到疲倦和壓力。"
  },
  {
    "word": "optimism",
    "pos": "n.",
    "cn_def": "樂觀",
    "en_def": "a feeling that good things will happen",
    "sentence": "A: Do the investors still believe in our new electric scooter even though sales were lower than expected in the first quarter of the year? B: Yes, there is a lot of {{BLANK}} at the head office, because orders from schools and delivery companies have increased steadily since we lowered the price in April.",
    "cn": "A：即使今年第一季銷售低於預期，投資人仍然看好我們的新電動機車嗎？ B：是的，總公司充滿【樂觀】的氣氛，因為自從我們四月降價後，來自學校和快遞公司的訂單穩定增加。"
  },
  {
    "word": "gratitude",
    "pos": "n.",
    "cn_def": "感激；感謝",
    "en_def": "the feeling of being thankful",
    "sentence": "A: What did the hospital director say to the volunteers at the end-of-year party held in the main hall last Friday evening? B: She expressed her deep {{BLANK}} for their hard work, explaining that their help at the information desk had made waiting much easier for patients and their families.",
    "cn": "A：上週五晚上在大廳舉辦的年終派對上，醫院院長對志工們說了什麼？ B：她對他們的辛勞表達深深的【感激】，並說明他們在服務台的協助讓病患和家屬等候時輕鬆許多。"
  },
  {
    "word": "fulfillment",
    "pos": "n.",
    "cn_def": "成就感；滿足感",
    "en_def": "a feeling of satisfaction from doing something important",
    "sentence": "A: Why did you leave your job in advertising to become a nurse at the children's hospital, even though the hours are much longer? B: I wanted more {{BLANK}} in my career, and now I feel truly useful every day when I help young patients and their worried parents through difficult times.",
    "cn": "A：雖然工時長很多，你為什麼還是離開廣告業，到兒童醫院當護理師？ B：我希望在職涯中得到更多【成就感】，現在我每天幫助年幼的病人和擔心的父母度過難關時，都覺得自己真正有用。"
  },
  {
    "word": "enjoy",
    "pos": "v.",
    "cn_def": "享受；喜歡",
    "en_def": "to get pleasure from something",
    "sentence": "A: Did the clients from Germany like the welcome lunch at the seafood restaurant near the harbor before our meeting started? B: They seemed to {{BLANK}} every dish very much, and their manager even asked the chef for the recipe for the grilled fish so that he could try cooking it at home.",
    "cn": "A：德國客戶喜歡會議開始前在港口附近海鮮餐廳的歡迎午餐嗎？ B：他們似乎非常【享受】每一道菜，他們的經理甚至向主廚要了烤魚的食譜，想回家試著做做看。"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "cn_def": "感激；感謝",
    "en_def": "to be thankful for something",
    "sentence": "A: Should I send a thank-you note to the IT staff who stayed late on Saturday to repair the network before our online product launch? B: Yes, I think they would really {{BLANK}} a short message from you, especially because they gave up their weekend plans to make sure everything worked smoothly.",
    "cn": "A：我該寄感謝信給週六留到很晚、在我們線上產品發表前修好網路的資訊人員嗎？ B：是的，我想他們會很【感激】收到你的簡短訊息，尤其他們放棄了週末計畫，確保一切順利運作。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable for a special event or success",
    "sentence": "A: What are we planning to do now that our branch has finally reached its sales target for the whole year two months early? B: The regional manager wants to {{BLANK}} with a buffet dinner at a nice hotel downtown, and she will also give every team member a small bonus and a gift card.",
    "cn": "A：既然我們分公司終於提早兩個月達成全年業績目標，我們打算做什麼？ B：區域經理想在市中心一家不錯的飯店舉辦自助晚餐來【慶祝】，她還會給每位團隊成員一點獎金和一張禮物卡。"
  },
  {
    "word": "smile",
    "pos": "v.",
    "cn_def": "微笑",
    "en_def": "to make a happy expression with your mouth",
    "sentence": "A: What advice did the trainer give the new receptionists during their first week at the front desk of the hotel? B: She told them to {{BLANK}} and make eye contact when guests arrive, because a friendly face helps tired travelers feel welcome after a long flight or a difficult drive.",
    "cn": "A：新接待員在飯店櫃檯的第一週，訓練員給了他們什麼建議？ B：她要他們在客人抵達時【微笑】並保持眼神接觸，因為一張友善的臉能讓長途飛行或辛苦開車後的疲憊旅客感到受歡迎。"
  },
  {
    "word": "laugh",
    "pos": "v.",
    "cn_def": "笑；大笑",
    "en_def": "to make sounds that show you think something is funny",
    "sentence": "A: How did the audience respond to the sales director's speech at the annual conference in the convention center yesterday afternoon? B: Everyone started to {{BLANK}} when she told a funny story about losing her luggage in Paris, and after that the room felt much more relaxed during the serious part of the talk.",
    "cn": "A：昨天下午在會議中心的年會上，聽眾對業務總監的演講有什麼反應？ B：她講到在巴黎弄丟行李的趣事時，大家都【笑】了起來，之後在演講嚴肅的部分，現場氣氛也輕鬆多了。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become calm",
    "sentence": "A: What do you usually do on Sunday afternoons after working long hours at the accounting firm during the busy tax season? B: I like to {{BLANK}} at a quiet café near my apartment, where I drink tea, read a magazine, and forget about the numbers and deadlines for a few hours.",
    "cn": "A：報稅旺季在會計師事務所長時間工作後，你週日下午通常做什麼？ B：我喜歡在公寓附近一家安靜的咖啡館【放鬆】，喝喝茶、看看雜誌，暫時忘掉數字和截止期限幾個小時。"
  },
  {
    "word": "savor",
    "pos": "v.",
    "cn_def": "細細品味；品嚐",
    "en_def": "to enjoy something slowly",
    "sentence": "A: Why did the travel agency add a three-hour lunch stop in the small mountain village to the tour schedule for our clients? B: The guide wanted the guests to {{BLANK}} the local dishes slowly, because the village is famous for its fresh mushrooms, homemade noodles, and a special tea that grows nearby.",
    "cn": "A：為什麼旅行社在我們客戶的行程中，加了在小山村停留三小時的午餐？ B：導遊希望客人能慢慢【品嚐】當地菜餚，因為這個村莊以新鮮蘑菇、手工麵條和附近種植的特色茶聞名。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "正面的；積極的",
    "en_def": "good, hopeful or approving",
    "sentence": "A: How did the customers react to the new mobile app that our company released for ordering food and drinks last week? B: The feedback was mostly {{BLANK}}, because users said the design is simple, payment is fast, and they can easily collect reward points every time they order a coffee.",
    "cn": "A：顧客對我們公司上週推出的點餐飲手機應用程式有什麼反應？ B：回饋大多是【正面的】，因為使用者說設計簡單、付款快速，而且每次點咖啡都能輕鬆累積點數。"
  },
  {
    "word": "cheerful",
    "pos": "adj.",
    "cn_def": "愉快的；開朗的",
    "en_def": "happy and friendly",
    "sentence": "A: Why do so many regular customers prefer to visit the bakery on Main Street even though it is a little more expensive than the supermarket? B: The owner is always {{BLANK}} and remembers everyone's name, and she often gives children a free cookie while their parents choose bread for the week.",
    "cn": "A：為什麼許多常客寧願去大街上的麵包店，即使它比超市貴一點？ B：老闆總是很【開朗】，記得每個人的名字，而且常在家長挑選一週麵包時送孩子一塊免費餅乾。"
  },
  {
    "word": "joyful",
    "pos": "adj.",
    "cn_def": "喜悅的；歡樂的",
    "en_def": "very happy",
    "sentence": "A: What was the mood like at the company party after the CEO announced that every employee would receive an extra week of paid vacation? B: It was a very {{BLANK}} evening, because people were dancing, taking photos together, and already planning trips to the beach or the mountains with their families.",
    "cn": "A：執行長宣布每位員工將多一週帶薪假後，公司派對的氣氛如何？ B：那是個非常【歡樂的】夜晚，大家跳舞、一起拍照，而且已經在計畫和家人去海邊或山上旅行。"
  },
  {
    "word": "content",
    "pos": "adj.",
    "cn_def": "滿足的；知足的",
    "en_def": "happy and satisfied with what you have",
    "sentence": "A: Has your sister applied for the manager position at the department store, since she has worked there for almost ten years now? B: No, she is {{BLANK}} with her current role in the shoe department, because the hours are flexible and she can pick up her children from school every afternoon.",
    "cn": "A：你姊姊已經在百貨公司工作快十年了，她有應徵經理職位嗎？ B：沒有，她對目前在鞋類部門的職務感到很【滿足】，因為工時彈性，她每天下午都能去學校接孩子。"
  },
  {
    "word": "grateful",
    "pos": "adj.",
    "cn_def": "感激的",
    "en_def": "feeling thankful",
    "sentence": "A: How did the new interns feel about the training program that the senior engineers prepared for them during their first month? B: They were very {{BLANK}} for the extra help, because the engineers explained the software step by step and answered every question patiently, even during the busiest weeks.",
    "cn": "A：新實習生對資深工程師在他們第一個月準備的訓練課程有什麼感受？ B：他們非常【感激】這些額外的幫助，因為工程師一步步解說軟體，即使在最忙的幾週也耐心回答每個問題。"
  },
  {
    "word": "satisfied",
    "pos": "adj.",
    "cn_def": "滿意的",
    "en_def": "pleased because you got what you wanted",
    "sentence": "A: Was the client happy with the new website design that our team delivered on Monday after two months of hard work? B: She said she was completely {{BLANK}} with the result, and she has already asked us to create a matching online store and a mobile app for her company next year.",
    "cn": "A：客戶喜歡我們團隊辛苦兩個月後在週一交出的新網站設計嗎？ B：她說她對成果完全【滿意】，而且已經請我們明年為她的公司製作搭配的網路商店和手機應用程式。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "calm and quiet",
    "sentence": "A: Why did you choose the small guesthouse by the lake instead of the big hotel in the city center for the management retreat? B: The location is very {{BLANK}}, so the managers can think clearly without traffic noise, and they can also walk around the lake during breaks between meetings.",
    "cn": "A：管理層的靜修活動，你為什麼選湖邊的小民宿，而不是市中心的大飯店？ B：那裡的環境非常【寧靜】，主管們可以在沒有車聲的情況下清楚思考，會議休息時也能繞著湖散步。"
  },
  {
    "word": "excited",
    "pos": "adj.",
    "cn_def": "興奮的",
    "en_def": "very happy and eager about something",
    "sentence": "A: How does the sales team feel about the trip to the international trade show in Las Vegas next month? B: They are really {{BLANK}} about it, because they will meet hundreds of potential buyers, see the newest products, and stay in a famous hotel with a large swimming pool.",
    "cn": "A：業務團隊對下個月去拉斯維加斯參加國際貿易展有什麼感覺？ B：他們真的很【興奮】，因為他們將見到數百位潛在買家、看到最新產品，還會住在一家有大游泳池的知名飯店。"
  },
  {
    "word": "happily",
    "pos": "adv.",
    "cn_def": "快樂地；欣然地",
    "en_def": "in a happy way; willingly",
    "sentence": "A: Did the children enjoy the company family day at the science museum that the human resources team organized last Saturday? B: Yes, they played {{BLANK}} with the robots and experiments all morning, and many parents said it was the best event the company has held in years.",
    "cn": "A：孩子們喜歡人資團隊上週六在科學博物館舉辦的公司家庭日嗎？ B：喜歡，他們整個早上都【快樂地】玩機器人和做實驗，很多家長說這是公司多年來辦過最棒的活動。"
  },
  {
    "word": "cheerfully",
    "pos": "adv.",
    "cn_def": "愉快地；欣然地",
    "en_def": "in a happy and friendly way",
    "sentence": "A: How did the hotel staff respond when the tour group arrived three hours late because their flight from Bangkok was delayed? B: The receptionists {{BLANK}} welcomed everyone with cold drinks and hot towels, and they quickly handed out room keys so the tired guests could rest before dinner.",
    "cn": "A：旅行團因為曼谷航班延誤晚了三小時抵達，飯店員工如何應對？ B：接待員【愉快地】以冷飲和熱毛巾迎接大家，並迅速發放房卡，讓疲憊的客人能在晚餐前休息。"
  },
  {
    "word": "gratefully",
    "pos": "adv.",
    "cn_def": "感激地",
    "en_def": "in a thankful way",
    "sentence": "A: What happened when the old man dropped his shopping bags at the bus stop outside our office during the heavy rain this morning? B: Two of our security guards ran out to help him pick everything up, and he {{BLANK}} accepted an umbrella from them before he got on the bus home.",
    "cn": "A：今天早上下大雨時，那位老先生在我們辦公室外的公車站掉了購物袋，後來怎麼了？ B：我們兩位保全跑出去幫他把東西撿起來，他上公車回家前【感激地】收下了他們給的雨傘。"
  },
  {
    "word": "warmly",
    "pos": "adv.",
    "cn_def": "熱情地；親切地",
    "en_def": "in a friendly and kind way",
    "sentence": "A: How were you treated when you visited the supplier's factory in Vietnam for the first time last month? B: The owner and his staff welcomed me very {{BLANK}}, showed me every part of the production line, and even invited me to a family dinner with traditional dishes from their region.",
    "cn": "A：上個月你第一次參觀越南供應商的工廠時，受到怎樣的接待？ B：老闆和員工非常【熱情地】歡迎我，帶我看了生產線的每個部分，甚至邀請我參加有當地傳統菜餚的家庭晚餐。"
  },
  {
    "word": "enthusiastically",
    "pos": "adv.",
    "cn_def": "熱情地；熱烈地",
    "en_def": "with great interest and excitement",
    "sentence": "A: How did the staff react when the manager suggested a weekly running club after work in the park next to our office? B: Most of them agreed {{BLANK}}, and more than twenty people signed up on the first day, including several senior managers who had never joined a sports group before.",
    "cn": "A：經理提議下班後在辦公室旁的公園成立每週跑步社時，員工有什麼反應？ B：大多數人都【熱烈地】贊成，第一天就有二十多人報名，其中包括幾位從未參加過運動社團的資深主管。"
  },
  {
    "word": "calmly",
    "pos": "adv.",
    "cn_def": "冷靜地；平靜地",
    "en_def": "in a quiet way, without worry or anger",
    "sentence": "A: What did the flight attendant do when the plane suddenly shook during the storm over the mountains on our business trip? B: She {{BLANK}} explained the situation over the speaker, asked everyone to fasten their seat belts, and then walked down the aisle to check on passengers who looked nervous.",
    "cn": "A：我們出差時，飛機在山區上空遇到暴風雨突然搖晃，空服員做了什麼？ B：她透過廣播【冷靜地】說明狀況，請大家繫好安全帶，然後走過走道查看看起來緊張的乘客。"
  },
  {
    "word": "positively",
    "pos": "adv.",
    "cn_def": "正面地；積極地",
    "en_def": "in a good or approving way",
    "sentence": "A: How did the board of directors respond to your proposal to open a second branch in the new shopping mall downtown next year? B: They reacted very {{BLANK}}, because my report showed strong demand in that area, and they asked me to prepare a detailed budget before their next meeting in March.",
    "cn": "A：董事會對你明年在市中心新購物中心開設第二家分店的提案有什麼回應？ B：他們的反應非常【正面】，因為我的報告顯示該區需求強勁，他們請我在三月的下次會議前準備詳細預算。"
  },
  {
    "word": "brightly",
    "pos": "adv.",
    "cn_def": "燦爛地；明亮地",
    "en_def": "in a happy, lively way; with strong light or color",
    "sentence": "A: How did the new receptionist greet the customers who came to the bank on her very first morning at work? B: She smiled {{BLANK}} at every visitor, asked how she could help them, and quickly guided them to the correct counter, which impressed both her manager and the regular customers.",
    "cn": "A：新接待員上班第一天早上，如何招呼來銀行的顧客？ B：她對每位訪客【燦爛地】微笑，詢問能如何協助，並迅速引導他們到正確的櫃檯，讓主管和常客都留下深刻印象。"
  }
];

const MCQS = [
  {
    "q": "The children's choir sang at the hospital on Christmas Eve. Their songs brought great _____ to the patients who could not go home.",
    "options": [
      "joy",
      "delay",
      "debt",
      "damage"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Much to the manager's _____, the new product sold out within two days. She immediately ordered more stock from the factory.",
    "options": [
      "request",
      "schedule",
      "delight",
      "invoice"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Thank you for choosing our airline today. It has been a _____ to serve you, and we hope to see you again soon.",
    "options": [
      "shortage",
      "pleasure",
      "penalty",
      "receipt"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "After retiring from the bank, my uncle found deep _____ in growing vegetables in his small garden. He says he has never felt calmer.",
    "options": [
      "equipment",
      "shipment",
      "assessment",
      "contentment"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The hotel sends guests a short survey after each stay. Management uses the results to measure customer _____ and improve service.",
    "options": [
      "transportation",
      "satisfaction",
      "construction",
      "registration"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The company now offers free counseling and yoga classes. These programs were created to support employee _____ during stressful periods.",
    "options": [
      "well-being",
      "warehouse",
      "overtime",
      "payroll"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Despite a difficult first quarter, the CEO expressed _____ about future sales. She believes the new product line will attract many customers.",
    "options": [
      "mechanism",
      "journalism",
      "vandalism",
      "optimism"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "At the closing ceremony, the mayor expressed her _____ to all the volunteers. Without their help, the marathon could not have taken place.",
    "options": [
      "altitude",
      "latitude",
      "gratitude",
      "solitude"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Many nurses say they find great _____ in caring for patients. Helping people recover gives their work real meaning.",
    "options": [
      "fulfillment",
      "equipment",
      "retirement",
      "enrollment"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "We hope all participants _____ the conference dinner tonight. The chef has prepared a special menu using local ingredients.",
    "options": [
      "deny",
      "borrow",
      "enjoy",
      "repair"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "We would _____ it if you could reply to this email by Friday. Your answer will help us finalize the schedule.",
    "options": [
      "celebrate",
      "appreciate",
      "relax",
      "savor"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The staff gathered in the lobby to _____ the company's fiftieth anniversary. Balloons, cake, and music filled the room all afternoon.",
    "options": [
      "relax",
      "smile",
      "laugh",
      "celebrate"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Receptionists are trained to _____ at every visitor who enters the building. A friendly face makes a strong first impression.",
    "options": [
      "savor",
      "smile",
      "appreciate",
      "celebrate"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The speaker's funny story about his first job made the whole audience _____ loudly. After that, everyone listened more closely to his advice.",
    "options": [
      "laugh",
      "savor",
      "appreciate",
      "enjoy"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "After the long negotiation, the team went to a spa to _____ for a few hours. They felt refreshed the next morning.",
    "options": [
      "appreciate",
      "savor",
      "enjoy",
      "relax"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The tasting tour gives visitors time to _____ each local dish slowly. Guests also learn how the food is traditionally prepared.",
    "options": [
      "smile",
      "laugh",
      "savor",
      "relax"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The new app received mostly _____ reviews from users. Many praised its simple design and fast payment system.",
    "options": [
      "positive",
      "peaceful",
      "grateful",
      "excited"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The café is famous for its _____ staff who greet every customer by name. Many visitors come back just for the friendly service.",
    "options": [
      "wooden",
      "expired",
      "cheerful",
      "rectangular"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Although she was offered a promotion, Lisa was _____ with her current position. She preferred the flexible hours and friendly coworkers.",
    "options": [
      "eager",
      "content",
      "capable",
      "aware"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The family was deeply _____ for the firefighters' quick response. They sent a thank-you card to the station the next week.",
    "options": [
      "eager",
      "capable",
      "aware",
      "grateful"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Ninety percent of customers said they were _____ with the repair service. The company plans to expand it to three more cities.",
    "options": [
      "fluent",
      "satisfied",
      "absent",
      "eager"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The resort is located in a _____ valley far from busy roads. Guests can enjoy quiet walks and clean mountain air.",
    "options": [
      "peaceful",
      "excited",
      "grateful",
      "satisfied"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The interns are very _____ about their trip to the head office in London. They have been preparing their presentations for weeks.",
    "options": [
      "peaceful",
      "wooden",
      "expired",
      "excited"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Our director _____ accepted the invitation to speak at the trade fair. She said it was a great chance to meet new partners.",
    "options": [
      "barely",
      "nearly",
      "happily",
      "loudly"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Although the flight was delayed for hours, the crew _____ greeted every passenger at the door. Their positive attitude made the wait easier.",
    "options": [
      "cheerfully",
      "heavily",
      "fluently",
      "narrowly"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The visiting engineers were _____ welcomed by the factory staff. They were even invited to a traditional dinner with the owner's family.",
    "options": [
      "heavily",
      "narrowly",
      "warmly",
      "fluently"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Employees responded _____ to the idea of a weekly running club. More than thirty people signed up on the first day.",
    "options": [
      "accidentally",
      "enthusiastically",
      "previously",
      "narrowly"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "When a customer started shouting at the counter, the clerk _____ explained the refund policy. Her manager later praised her patience.",
    "options": [
      "barely",
      "nearly",
      "heavily",
      "calmly"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The board reacted _____ to the plan for a new branch downtown. They approved the budget at the very next meeting.",
    "options": [
      "accidentally",
      "positively",
      "barely",
      "heavily"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The little girl smiled _____ when the clerk handed her a free balloon. Her parents thanked the store for the kind gesture.",
    "options": [
      "brightly",
      "heavily",
      "narrowly",
      "fluently"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "joy": {
    "pos": "n.",
    "en_def": "a feeling of great happiness",
    "cn_def": "喜悅；歡樂"
  },
  "delight": {
    "pos": "n.",
    "en_def": "great pleasure or happiness",
    "cn_def": "欣喜；高興"
  },
  "pleasure": {
    "pos": "n.",
    "en_def": "a feeling of enjoyment; an honor",
    "cn_def": "愉快；榮幸"
  },
  "contentment": {
    "pos": "n.",
    "en_def": "a calm feeling of being happy with what you have",
    "cn_def": "滿足；知足"
  },
  "satisfaction": {
    "pos": "n.",
    "en_def": "the good feeling when you get what you wanted",
    "cn_def": "滿意；滿足"
  },
  "bliss": {
    "pos": "n.",
    "en_def": "perfect happiness",
    "cn_def": "極樂；無比幸福"
  },
  "cheerfulness": {
    "pos": "n.",
    "en_def": "the quality of being happy and friendly",
    "cn_def": "愉快；開朗"
  },
  "well-being": {
    "pos": "n.",
    "en_def": "the state of being healthy and happy",
    "cn_def": "幸福；身心健康"
  },
  "optimism": {
    "pos": "n.",
    "en_def": "a feeling that good things will happen",
    "cn_def": "樂觀"
  },
  "gratitude": {
    "pos": "n.",
    "en_def": "the feeling of being thankful",
    "cn_def": "感激；感謝"
  },
  "fulfillment": {
    "pos": "n.",
    "en_def": "a feeling of satisfaction from doing something important",
    "cn_def": "成就感；滿足感"
  },
  "enjoy": {
    "pos": "v.",
    "en_def": "to get pleasure from something",
    "cn_def": "享受；喜歡"
  },
  "appreciate": {
    "pos": "v.",
    "en_def": "to be thankful for something",
    "cn_def": "感激；感謝"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable for a special event or success",
    "cn_def": "慶祝"
  },
  "smile": {
    "pos": "v.",
    "en_def": "to make a happy expression with your mouth",
    "cn_def": "微笑"
  },
  "laugh": {
    "pos": "v.",
    "en_def": "to make sounds that show you think something is funny",
    "cn_def": "笑；大笑"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become calm",
    "cn_def": "放鬆"
  },
  "savor": {
    "pos": "v.",
    "en_def": "to enjoy something slowly",
    "cn_def": "細細品味；品嚐"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "good, hopeful or approving",
    "cn_def": "正面的；積極的"
  },
  "cheerful": {
    "pos": "adj.",
    "en_def": "happy and friendly",
    "cn_def": "愉快的；開朗的"
  },
  "joyful": {
    "pos": "adj.",
    "en_def": "very happy",
    "cn_def": "喜悅的；歡樂的"
  },
  "content": {
    "pos": "adj.",
    "en_def": "happy and satisfied with what you have",
    "cn_def": "滿足的；知足的"
  },
  "grateful": {
    "pos": "adj.",
    "en_def": "feeling thankful",
    "cn_def": "感激的"
  },
  "satisfied": {
    "pos": "adj.",
    "en_def": "pleased because you got what you wanted",
    "cn_def": "滿意的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "calm and quiet",
    "cn_def": "寧靜的；平靜的"
  },
  "excited": {
    "pos": "adj.",
    "en_def": "very happy and eager about something",
    "cn_def": "興奮的"
  },
  "happily": {
    "pos": "adv.",
    "en_def": "in a happy way; willingly",
    "cn_def": "快樂地；欣然地"
  },
  "cheerfully": {
    "pos": "adv.",
    "en_def": "in a happy and friendly way",
    "cn_def": "愉快地；欣然地"
  },
  "gratefully": {
    "pos": "adv.",
    "en_def": "in a thankful way",
    "cn_def": "感激地"
  },
  "warmly": {
    "pos": "adv.",
    "en_def": "in a friendly and kind way",
    "cn_def": "熱情地；親切地"
  },
  "enthusiastically": {
    "pos": "adv.",
    "en_def": "with great interest and excitement",
    "cn_def": "熱情地；熱烈地"
  },
  "calmly": {
    "pos": "adv.",
    "en_def": "in a quiet way, without worry or anger",
    "cn_def": "冷靜地；平靜地"
  },
  "positively": {
    "pos": "adv.",
    "en_def": "in a good or approving way",
    "cn_def": "正面地；積極地"
  },
  "brightly": {
    "pos": "adv.",
    "en_def": "in a happy, lively way; with strong light or color",
    "cn_def": "燦爛地；明亮地"
  }
};

const EXTRA_GLOSSES = {};
