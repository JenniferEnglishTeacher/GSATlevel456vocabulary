// Topic 298 Quiz Data: Positive 正面積極
// Source word list: https://www.examword.com/group-topic/positive — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T298 - Positive 正面積極",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "optimistic",
    "pos": "adj.",
    "cn_def": "樂觀的",
    "en_def": "expecting good things to happen",
    "sentence": "A: Our sales dropped a lot in the spring, so why does the regional manager still think we can reach this year's target? B: She is {{BLANK}} because three large hotel chains have just signed contracts with us, and our new product will reach the stores before the busy holiday season.",
    "cn": "A：我們的銷售額在春天大幅下滑，為什麼區域經理仍然認為我們能達成今年的目標？ B：她很【樂觀】，因為三家大型連鎖飯店剛和我們簽約，而且我們的新產品會在繁忙的假期旺季前上架。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有信心的；確信的",
    "en_def": "feeling sure about yourself or that something will happen",
    "sentence": "A: You have your job interview at the bank tomorrow morning, so how are you feeling about it after all that practice with your friends? B: I feel quite {{BLANK}} now, because I have prepared answers to the common questions and I know a lot about the bank's history and services.",
    "cn": "A：你明天早上要去銀行面試，和朋友練習了那麼多次之後，你覺得怎麼樣？ B：我現在覺得相當【有信心】，因為我已經準備好常見問題的答案，而且我很了解這家銀行的歷史和服務。"
  },
  {
    "word": "encouraging",
    "pos": "adj.",
    "cn_def": "令人鼓舞的",
    "en_def": "giving you hope or confidence",
    "sentence": "A: The research team tested the new cleaning product in fifty homes last month, so what did the customers say about it in the survey? B: The results were very {{BLANK}}, because most families said it worked better than their old brand, and many of them want to buy it again soon.",
    "cn": "A：研究團隊上個月在五十個家庭測試了新的清潔產品，顧客在調查中怎麼說？ B：結果非常【令人鼓舞】，因為大多數家庭說它比原本的品牌好用，而且很多人想很快再買一次。"
  },
  {
    "word": "hopeful",
    "pos": "adj.",
    "cn_def": "抱持希望的",
    "en_def": "believing that something you want will happen",
    "sentence": "A: The airline cancelled your flight to Singapore because of the storm, so do you think you will still get to the conference on time? B: I am {{BLANK}} that I can take the first flight tomorrow morning, because the agent at the counter said the weather should be much better by then.",
    "cn": "A：航空公司因為暴風雨取消了你飛新加坡的班機，你覺得還能準時趕上研討會嗎？ B：我【抱持希望】能搭明天早上的第一班飛機，因為櫃檯人員說到時候天氣應該會好很多。"
  },
  {
    "word": "cheerful",
    "pos": "adj.",
    "cn_def": "開朗的；愉快的",
    "en_def": "happy and friendly",
    "sentence": "A: Why do so many guests leave good reviews about the small hotel near the train station, even though the rooms are quite old? B: The staff at the front desk are always {{BLANK}} and polite, and they greet every visitor with a big smile and helpful tips about local restaurants.",
    "cn": "A：為什麼這麼多房客替火車站附近那間小旅館留下好評，即使房間相當老舊？ B：櫃檯的員工總是很【開朗】又有禮貌，會用燦爛的笑容迎接每位旅客，並提供當地餐廳的實用建議。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱衷的；熱情的",
    "en_def": "showing a lot of interest and excitement",
    "sentence": "A: How are the new interns doing in the marketing department, and have they started working on the summer campaign yet? B: They are very {{BLANK}} about the project, so they come in early every day, share lots of creative ideas in meetings, and even volunteer for extra tasks on weekends.",
    "cn": "A：新來的實習生在行銷部表現如何？他們開始做夏季活動了嗎？ B：他們對這個專案非常【熱衷】，所以每天都很早到，在會議上分享很多有創意的點子，甚至自願在週末做額外的工作。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "支持的；給予幫助的",
    "en_def": "giving help and encouragement",
    "sentence": "A: You said your first year as an accountant here was really difficult, so what helped you keep going when the work became stressful? B: My manager was very {{BLANK}}, because she always listened to my problems, gave me practical advice, and let me take extra training courses when I needed them.",
    "cn": "A：你說你在這裡當會計的第一年真的很辛苦，工作壓力變大時是什麼幫助你撐下去？ B：我的主管非常【支持我】，因為她總是傾聽我的問題、給我實用的建議，並且在我需要時讓我參加額外的培訓課程。"
  },
  {
    "word": "constructive",
    "pos": "adj.",
    "cn_def": "建設性的",
    "en_def": "helpful and meant to improve something",
    "sentence": "A: I'm nervous about showing my report to the director, because last time she said many things were wrong with it. Should I ask someone else to read it first? B: Ask Tom, because he always gives {{BLANK}} comments that explain exactly how you can fix each problem without making you feel bad.",
    "cn": "A：我很緊張要把報告拿給主任看，因為上次她說有很多地方不對。我應該先請別人看一下嗎？ B：去問湯姆吧，因為他總是給出【建設性】的意見，清楚說明每個問題該怎麼改，又不會讓你覺得難過。"
  },
  {
    "word": "beneficial",
    "pos": "adj.",
    "cn_def": "有益的",
    "en_def": "having a good or helpful effect",
    "sentence": "A: Why did the company decide to build a small gym on the third floor and give everyone a free membership this year? B: Studies show that regular exercise is {{BLANK}} for both health and work performance, and the managers hope that fewer people will take sick days during the winter.",
    "cn": "A：為什麼公司今年決定在三樓蓋一個小健身房，並給每個人免費會員資格？ B：研究顯示規律運動對健康和工作表現都【有益】，而且主管們希望冬天請病假的人能少一點。"
  },
  {
    "word": "favorable",
    "pos": "adj.",
    "cn_def": "有利的；贊同的",
    "en_def": "good for you or showing approval",
    "sentence": "A: The bank finally answered our loan application for the new restaurant, so what did they decide after looking at our business plan? B: They gave us a {{BLANK}} reply, and the interest rate is lower than we expected, so we can start the renovation work next month as planned.",
    "cn": "A：銀行終於回覆了我們新餐廳的貸款申請，看過我們的營運計畫後他們怎麼決定？ B：他們給了我們【有利的】答覆，而且利率比我們預期的低，所以我們可以照計畫下個月開始裝修。"
  },
  {
    "word": "promising",
    "pos": "adj.",
    "cn_def": "有前途的；有希望的",
    "en_def": "likely to be successful in the future",
    "sentence": "A: The design team hired a young engineer from a local university last spring, so how has she been doing in her first few months here? B: She looks very {{BLANK}}, because she has already improved two of our products, and the director thinks she could lead her own team in a few years.",
    "cn": "A：設計團隊去年春天從本地大學聘了一位年輕工程師，她來這裡的頭幾個月表現如何？ B：她看起來非常【有前途】，因為她已經改良了我們兩項產品，主任認為她幾年內就能帶領自己的團隊。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有成效的；多產的",
    "en_def": "doing or achieving a lot",
    "sentence": "A: You were in the meeting room with the clients for almost three hours this afternoon, so did you finally agree on anything important? B: Yes, it was a very {{BLANK}} meeting, because we decided on the budget, the delivery schedule, and who will be responsible for each part of the project.",
    "cn": "A：你今天下午和客戶在會議室待了將近三個小時，你們最後有談定任何重要的事嗎？ B：有，這是一場非常【有成效的】會議，因為我們決定了預算、交貨時程，以及專案每個部分由誰負責。"
  },
  {
    "word": "motivated",
    "pos": "adj.",
    "cn_def": "有動力的；積極的",
    "en_def": "wanting to do something and working hard to do it",
    "sentence": "A: Sales at the downtown branch have doubled since March, so what has the new manager done to make such a big difference there? B: She introduced monthly bonuses and team prizes, so the staff feel much more {{BLANK}} now, and they compete in a friendly way to serve more customers every day.",
    "cn": "A：市中心分店的業績從三月以來翻倍了，新經理做了什麼帶來這麼大的改變？ B：她推出了每月獎金和團隊獎勵，所以員工現在覺得更【有動力】，每天都友善地互相競爭，服務更多顧客。"
  },
  {
    "word": "uplifting",
    "pos": "adj.",
    "cn_def": "令人振奮的；鼓舞人心的",
    "en_def": "making people feel happier and more hopeful",
    "sentence": "A: Everyone looked tired and worried before the company dinner last night, so why was the mood so much better at the end of the evening? B: The founder told an {{BLANK}} story about how the company survived its first difficult years, and it made everyone feel proud and full of energy again.",
    "cn": "A：昨晚公司聚餐前大家看起來都又累又擔心，為什麼到了晚上結束時氣氛好了這麼多？ B：創辦人講了一個【令人振奮的】故事，說公司如何度過剛創業時的艱難歲月，讓每個人再次感到驕傲又充滿活力。"
  },
  {
    "word": "grateful",
    "pos": "adj.",
    "cn_def": "感激的",
    "en_def": "feeling or showing thanks",
    "sentence": "A: Why are you writing so many cards this afternoon instead of finishing the monthly report for the finance department? B: I am really {{BLANK}} to all the volunteers who helped at our charity event on Saturday, so I want to thank each of them personally before the end of the week.",
    "cn": "A：你今天下午為什麼寫這麼多卡片，而不是完成給財務部的月報？ B：我真的很【感激】週六在慈善活動幫忙的所有志工，所以想在週末前親自向每個人道謝。"
  },
  {
    "word": "appreciative",
    "pos": "adj.",
    "cn_def": "表示感謝的；欣賞的",
    "en_def": "showing that you are thankful or enjoy something",
    "sentence": "A: How did the audience react to the new cooking show that our studio recorded in front of a live crowd yesterday? B: They were very {{BLANK}}, because they clapped loudly after every dish, asked the chef many questions, and several people stayed late to thank the whole production team.",
    "cn": "A：昨天我們攝影棚在現場觀眾面前錄製的新料理節目，觀眾反應如何？ B：他們非常【讚賞】，每道菜完成後都大聲鼓掌，問了主廚很多問題，還有好幾個人留到很晚向整個製作團隊道謝。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "光明的；前途好的",
    "en_def": "likely to be successful; full of hope",
    "sentence": "A: Several new hotels opened near the beach this year, so do you think the tourism industry in our town will keep growing? B: The future looks {{BLANK}}, because the city is building a new airport terminal and many international airlines plan to add direct flights here next summer.",
    "cn": "A：今年海灘附近開了好幾家新飯店，你認為我們鎮上的觀光業會持續成長嗎？ B：前景看起來很【光明】，因為市政府正在興建新的機場航廈，而且很多國際航空公司計畫明年夏天增加直飛航班。"
  },
  {
    "word": "resilient",
    "pos": "adj.",
    "cn_def": "有韌性的；能迅速恢復的",
    "en_def": "able to recover quickly after problems",
    "sentence": "A: Many shops on our street closed during the economic crisis, so how did the small bakery on the corner manage to stay open? B: The owners were very {{BLANK}}, because they quickly started online orders and home delivery, and their loyal customers kept buying bread from them every week.",
    "cn": "A：經濟危機期間我們這條街上很多店都關了，轉角那家小麵包店是怎麼撐下來的？ B：老闆們非常【有韌性】，他們很快就開始做網路訂購和送貨到府，忠實顧客每週都繼續向他們買麵包。"
  },
  {
    "word": "determined",
    "pos": "adj.",
    "cn_def": "下定決心的；堅決的",
    "en_def": "having a strong wish to do something and not letting anything stop you",
    "sentence": "A: The software team has been working late every night this week, even though the manager told them to go home earlier. Why? B: They are {{BLANK}} to finish the new app before the deadline on Friday, because the client will cancel the whole contract if it is late.",
    "cn": "A：軟體團隊這週每晚都工作到很晚，即使經理叫他們早點回家。為什麼？ B：他們【下定決心】要在週五截止日前完成新的應用程式，因為如果延誤，客戶會取消整份合約。"
  },
  {
    "word": "inspiring",
    "pos": "adj.",
    "cn_def": "激勵人心的；啟發人的",
    "en_def": "making you want to do or achieve something",
    "sentence": "A: Did you attend the talk by the famous mountain climber at the business conference in the city center yesterday afternoon? B: Yes, and it was really {{BLANK}}, because she explained how careful planning and teamwork helped her reach the top, and now I want to try new challenges at work.",
    "cn": "A：你有參加昨天下午在市中心商務研討會上那位知名登山家的演講嗎？ B：有，真的很【激勵人心】，她說明了周密的計畫和團隊合作如何幫助她登頂，現在我也想在工作上嘗試新的挑戰。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的",
    "en_def": "having a lot of energy and being very active",
    "sentence": "A: We need someone to lead the morning exercise class for the employees before work starts. Who do you think would be the best choice? B: Kevin from the sales team is very {{BLANK}}, because he runs every morning, plays basketball on weekends, and never seems tired, even after long meetings.",
    "cn": "A：我們需要有人在上班前帶員工的晨間運動課。你覺得誰是最好的人選？ B：業務部的凱文非常【精力充沛】，因為他每天早上跑步、週末打籃球，即使開完很長的會也從不顯得疲倦。"
  },
  {
    "word": "successful",
    "pos": "adj.",
    "cn_def": "成功的",
    "en_def": "achieving the result you wanted",
    "sentence": "A: How did the launch of the new coffee machine go in Tokyo last week, and did the stores sell as many units as we expected? B: It was very {{BLANK}}, because all ten thousand machines were sold in three days, and the stores have already ordered another large shipment from our factory.",
    "cn": "A：上週新咖啡機在東京的上市情況如何？店家的銷量有達到我們的預期嗎？ B：非常【成功】，一萬台機器在三天內全部賣完，而且店家已經向我們工廠再訂了一大批貨。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "working well and producing the result you want",
    "sentence": "A: Our company spends a lot of money on television ads every month, so why is the marketing director moving most of the budget online? B: Social media ads are more {{BLANK}} for reaching young customers, and they cost much less, so we can test many different ideas quickly.",
    "cn": "A：我們公司每個月花很多錢在電視廣告上，為什麼行銷總監要把大部分預算轉到網路？ B：社群媒體廣告在接觸年輕顧客方面更【有效】，而且成本低很多，所以我們可以快速測試許多不同的點子。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "寶貴的；有價值的",
    "en_def": "very useful or important",
    "sentence": "A: Why did you invite the retired factory manager to visit our new production line before we start making the product next month? B: He has thirty years of experience, so his advice is very {{BLANK}}, and he can help us avoid costly mistakes that we might not notice ourselves.",
    "cn": "A：為什麼你邀請那位退休的工廠經理在我們下個月開始生產前來參觀新的生產線？ B：他有三十年的經驗，所以他的建議非常【寶貴】，可以幫我們避免一些自己可能沒注意到、代價很高的錯誤。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改善；進步",
    "en_def": "the act of getting better or making something better",
    "sentence": "A: The customer service center installed new software three months ago, so has it made any difference to the number of complaints we receive? B: Yes, there has been a big {{BLANK}}, because customers now wait only two minutes on the phone, and complaints have dropped by almost half.",
    "cn": "A：客服中心三個月前裝了新軟體，這對我們收到的客訴數量有任何影響嗎？ B：有，已經有很大的【改善】，因為顧客現在只需要在電話上等兩分鐘，客訴也減少了將近一半。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就",
    "en_def": "something good that you succeed in doing after hard work",
    "sentence": "A: Why is everyone in the design studio celebrating with cake and flowers this afternoon instead of working on the new project? B: Our small team won a national award for the best office design, which is a great {{BLANK}} for a company that started only three years ago.",
    "cn": "A：為什麼設計工作室的大家今天下午都在吃蛋糕、送花慶祝，而不是在做新專案？ B：我們的小團隊贏得了全國最佳辦公室設計獎，對一家三年前才成立的公司來說，這是很了不起的【成就】。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展；進步",
    "en_def": "movement toward finishing or improving something",
    "sentence": "A: The new office tower next to the train station was supposed to be ready by December, so how is the construction going? B: The builders have made good {{BLANK}} this month, because the weather has been dry, and the first twenty floors are already finished.",
    "cn": "A：火車站旁的新辦公大樓原本應該在十二月完工，工程進行得如何？ B：建商這個月有很好的【進展】，因為天氣一直很乾燥，前二十層樓已經完成了。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone confidence or hope to do something",
    "sentence": "A: Very few employees speak up during our weekly meetings, so how can we get more new ideas from the younger staff members? B: Managers should {{BLANK}} them to share their opinions, maybe by asking each person one question and by thanking them for every suggestion they make.",
    "cn": "A：每週的會議上很少有員工發言，我們要怎麼從年輕員工那裡得到更多新點子？ B：主管應該【鼓勵】他們分享意見，也許可以向每個人問一個問題，並感謝他們提出的每一個建議。"
  },
  {
    "word": "praise",
    "pos": "v.",
    "cn_def": "稱讚；讚揚",
    "en_def": "to say that someone or something is very good",
    "sentence": "A: Why did the general manager put a customer's letter on the notice board next to the staff kitchen this morning? B: A passenger wrote to {{BLANK}} our bus driver for helping an old man with his heavy bags, and the manager wants everyone to see good service.",
    "cn": "A：總經理今天早上為什麼把一封顧客來信貼在員工茶水間旁的布告欄上？ B：一位乘客寫信來【稱讚】我們的公車司機幫一位老先生提重行李，經理希望大家都能看到好的服務。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "長處；優勢",
    "en_def": "a good quality or ability that someone or something has",
    "sentence": "A: The interviewer asked me what I do best at work, and I didn't know what to say. What would you have answered? B: I would say my biggest {{BLANK}} is clear communication, because I always make sure everyone on the project knows exactly what to do and when.",
    "cn": "A：面試官問我工作上最擅長什麼，我不知道該怎麼回答。你會怎麼回答？ B：我會說我最大的【優勢】是清楚的溝通，因為我總是確保專案裡每個人都確實知道該做什麼、什麼時候做。"
  },
  {
    "word": "growth",
    "pos": "n.",
    "cn_def": "成長；增長",
    "en_def": "an increase in size, amount or importance",
    "sentence": "A: The quarterly report came out this morning, so how did our electric bicycle business do in the third quarter compared with last year? B: We saw strong sales {{BLANK}} in every region, mainly because more people now ride to work and the city has built many new bike lanes.",
    "cn": "A：季報今天早上出來了，我們的電動自行車業務第三季和去年相比表現如何？ B：我們在每個地區都看到強勁的銷售【成長】，主要是因為現在更多人騎車上班，而且市政府蓋了很多新的自行車道。"
  },
  {
    "word": "rewarding",
    "pos": "adj.",
    "cn_def": "有收穫的；令人滿足的",
    "en_def": "making you feel happy and satisfied",
    "sentence": "A: You left a high-paying job at a bank to become a nurse at the children's hospital, so do you ever miss your old life? B: Not really, because although the hours are long and tiring, the work is very {{BLANK}}, and I feel happy every time a young patient goes home healthy.",
    "cn": "A：你辭掉銀行的高薪工作去兒童醫院當護理師，你會懷念以前的生活嗎？ B：不太會，雖然工時長又累，但這份工作非常【有成就感】，每次看到年輕病患健康回家我都很開心。"
  },
  {
    "word": "harmonious",
    "pos": "adj.",
    "cn_def": "和諧的；融洽的",
    "en_def": "friendly and peaceful, without disagreement",
    "sentence": "A: The sales and design departments used to argue in every meeting last year, so how did the new director solve that problem? B: She held monthly lunches for both teams and shared clear goals, so now they have a {{BLANK}} relationship and finish projects together much faster.",
    "cn": "A：業務部和設計部去年每次開會都在吵架，新主任是怎麼解決這個問題的？ B：她每月為兩個團隊舉辦午餐聚會並分享明確的目標，所以他們現在關係很【融洽】，一起完成專案的速度也快多了。"
  },
  {
    "word": "kindness",
    "pos": "n.",
    "cn_def": "親切；善意",
    "en_def": "the quality of being friendly, generous and caring",
    "sentence": "A: Why did that guest from Canada leave a box of chocolates and a long note at the front desk when she checked out this morning? B: She wanted to thank the staff for their {{BLANK}}, because they helped her find a doctor late at night when she suddenly felt sick.",
    "cn": "A：那位加拿大房客今天早上退房時，為什麼在櫃檯留下一盒巧克力和一張長長的紙條？ B：她想感謝員工的【親切】，因為她半夜突然身體不適時，員工幫她找了醫生。"
  }
];

const MCQS = [
  {
    "q": "Despite the slow first quarter, the sales director remains _____ about reaching the annual target. She expects strong orders after the holiday season.",
    "options": [
      "optimistic",
      "beneficial",
      "valuable",
      "effective"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our lawyer felt _____ that the contract would be signed by Friday. Both companies had already agreed on the price and the delivery terms.",
    "options": [
      "beneficial",
      "rewarding",
      "confident",
      "harmonious"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The first customer survey produced some very _____ results for the new app. Most users said they would recommend it to a friend.",
    "options": [
      "grateful",
      "encouraging",
      "determined",
      "motivated"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The hotel hired a _____ receptionist who always greets guests with a big smile. Many visitors mention her friendly manner in online reviews.",
    "options": [
      "beneficial",
      "constructive",
      "favorable",
      "cheerful"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The new interns were very _____ about joining the marketing team. They arrived early every day and volunteered for extra projects.",
    "options": [
      "beneficial",
      "favorable",
      "enthusiastic",
      "valuable"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Linda thanked her manager for being so _____ during her first difficult year. He always listened and offered practical advice.",
    "options": [
      "supportive",
      "beneficial",
      "promising",
      "rewarding"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The editor gave the writer some _____ feedback on the first draft. Her comments explained clearly how each chapter could be improved.",
    "options": [
      "grateful",
      "cheerful",
      "determined",
      "constructive"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Regular breaks are _____ to both employee health and productivity. The company now asks staff to walk outside after lunch.",
    "options": [
      "grateful",
      "beneficial",
      "enthusiastic",
      "determined"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The bank offered the startup a loan on very _____ terms. The interest rate was much lower than the market average.",
    "options": [
      "favorable",
      "cheerful",
      "grateful",
      "motivated"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The board believes the young engineer has a _____ career ahead of her. She has already designed two of our best-selling products.",
    "options": [
      "grateful",
      "determined",
      "promising",
      "cheerful"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Yesterday's meeting was short but very _____. We agreed on the budget, the schedule, and the roles of each team member.",
    "options": [
      "grateful",
      "productive",
      "confident",
      "determined"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Monthly bonuses keep the sales staff highly _____ throughout the year. Several employees have doubled their targets since the program began.",
    "options": [
      "beneficial",
      "favorable",
      "rewarding",
      "motivated"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "We are _____ to all the volunteers who helped at the charity event. Without their hard work, we could not have raised so much money.",
    "options": [
      "effective",
      "productive",
      "grateful",
      "promising"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The economic outlook for the tourism industry looks _____ this year. Hotel bookings have risen by twenty percent since January.",
    "options": [
      "bright",
      "grateful",
      "determined",
      "motivated"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Small family businesses proved surprisingly _____ during the economic crisis. Many of them quickly recovered and even hired new workers.",
    "options": [
      "grateful",
      "favorable",
      "beneficial",
      "resilient"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The team was _____ to finish the project before the deadline. They worked late every night for two weeks to complete it.",
    "options": [
      "beneficial",
      "determined",
      "valuable",
      "favorable"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Everyone agreed that the founder's speech at the annual dinner was truly _____. Many employees said it made them proud of their work.",
    "options": [
      "inspiring",
      "grateful",
      "determined",
      "motivated"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The product launch in Tokyo was extremely _____. All ten thousand units were sold within the first three days of business.",
    "options": [
      "grateful",
      "supportive",
      "successful",
      "determined"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Online advertising has become the most _____ way to reach young customers. It costs less than television and produces faster results.",
    "options": [
      "grateful",
      "effective",
      "cheerful",
      "determined"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Thank you for your _____ advice on the new pricing plan. Your suggestions helped us avoid several costly mistakes this quarter.",
    "options": [
      "grateful",
      "cheerful",
      "determined",
      "valuable"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The new software has led to a major _____ in customer service. Complaints have dropped by half since it was installed.",
    "options": [
      "kindness",
      "praise",
      "improvement",
      "reward"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Winning the national design award was a great _____ for our small studio. The whole team celebrated with a dinner downtown.",
    "options": [
      "achievement",
      "kindness",
      "praise",
      "growth"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The builders have made good _____ on the new office tower. The first ten floors are already complete.",
    "options": [
      "kindness",
      "strength",
      "achievement",
      "progress"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Managers should _____ employees to share their ideas at meetings. Fresh suggestions often come from new staff members.",
    "options": [
      "praise",
      "encourage",
      "achieve",
      "improve"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The customer wrote to _____ the driver for his careful and polite service. The manager posted her letter on the office wall.",
    "options": [
      "praise",
      "encourage",
      "achieve",
      "improve"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Her greatest _____ as a team leader is clear communication. Everyone on the project always knows exactly what to do.",
    "options": [
      "progress",
      "praise",
      "strength",
      "growth"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The company reported strong sales _____ in the third quarter. Demand for its electric bikes increased in every region.",
    "options": [
      "kindness",
      "growth",
      "praise",
      "strength"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Many nurses say their job is tiring but very _____. Helping patients recover gives them a deep sense of satisfaction.",
    "options": [
      "confident",
      "motivated",
      "grateful",
      "rewarding"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "The new manager worked hard to build a _____ relationship between the two departments. Arguments in meetings have become much less common.",
    "options": [
      "grateful",
      "motivated",
      "harmonious",
      "determined"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The hotel guest thanked the staff for their _____ during her stay. They had helped her find a doctor late at night.",
    "options": [
      "kindness",
      "progress",
      "growth",
      "achievement"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "optimistic": {
    "pos": "adj.",
    "en_def": "expecting good things to happen",
    "cn_def": "樂觀的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "feeling sure about yourself or that something will happen",
    "cn_def": "有信心的；確信的"
  },
  "encouraging": {
    "pos": "adj.",
    "en_def": "giving you hope or confidence",
    "cn_def": "令人鼓舞的"
  },
  "hopeful": {
    "pos": "adj.",
    "en_def": "believing that something you want will happen",
    "cn_def": "抱持希望的"
  },
  "cheerful": {
    "pos": "adj.",
    "en_def": "happy and friendly",
    "cn_def": "開朗的；愉快的"
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "showing a lot of interest and excitement",
    "cn_def": "熱衷的；熱情的"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement",
    "cn_def": "支持的；給予幫助的"
  },
  "constructive": {
    "pos": "adj.",
    "en_def": "helpful and meant to improve something",
    "cn_def": "建設性的"
  },
  "beneficial": {
    "pos": "adj.",
    "en_def": "having a good or helpful effect",
    "cn_def": "有益的"
  },
  "favorable": {
    "pos": "adj.",
    "en_def": "good for you or showing approval",
    "cn_def": "有利的；贊同的"
  },
  "promising": {
    "pos": "adj.",
    "en_def": "likely to be successful in the future",
    "cn_def": "有前途的；有希望的"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "doing or achieving a lot",
    "cn_def": "有成效的；多產的"
  },
  "motivated": {
    "pos": "adj.",
    "en_def": "wanting to do something and working hard to do it",
    "cn_def": "有動力的；積極的"
  },
  "uplifting": {
    "pos": "adj.",
    "en_def": "making people feel happier and more hopeful",
    "cn_def": "令人振奮的；鼓舞人心的"
  },
  "grateful": {
    "pos": "adj.",
    "en_def": "feeling or showing thanks",
    "cn_def": "感激的"
  },
  "appreciative": {
    "pos": "adj.",
    "en_def": "showing that you are thankful or enjoy something",
    "cn_def": "表示感謝的；欣賞的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "likely to be successful; full of hope",
    "cn_def": "光明的；前途好的"
  },
  "resilient": {
    "pos": "adj.",
    "en_def": "able to recover quickly after problems",
    "cn_def": "有韌性的；能迅速恢復的"
  },
  "determined": {
    "pos": "adj.",
    "en_def": "having a strong wish to do something and not letting anything stop you",
    "cn_def": "下定決心的；堅決的"
  },
  "inspiring": {
    "pos": "adj.",
    "en_def": "making you want to do or achieve something",
    "cn_def": "激勵人心的；啟發人的"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "having a lot of energy and being very active",
    "cn_def": "精力充沛的"
  },
  "successful": {
    "pos": "adj.",
    "en_def": "achieving the result you wanted",
    "cn_def": "成功的"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "working well and producing the result you want",
    "cn_def": "有效的"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "very useful or important",
    "cn_def": "寶貴的；有價值的"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "the act of getting better or making something better",
    "cn_def": "改善；進步"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing after hard work",
    "cn_def": "成就"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward finishing or improving something",
    "cn_def": "進展；進步"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone confidence or hope to do something",
    "cn_def": "鼓勵"
  },
  "praise": {
    "pos": "v.",
    "en_def": "to say that someone or something is very good",
    "cn_def": "稱讚；讚揚"
  },
  "strength": {
    "pos": "n.",
    "en_def": "a good quality or ability that someone or something has",
    "cn_def": "長處；優勢"
  },
  "growth": {
    "pos": "n.",
    "en_def": "an increase in size, amount or importance",
    "cn_def": "成長；增長"
  },
  "rewarding": {
    "pos": "adj.",
    "en_def": "making you feel happy and satisfied",
    "cn_def": "有收穫的；令人滿足的"
  },
  "harmonious": {
    "pos": "adj.",
    "en_def": "friendly and peaceful, without disagreement",
    "cn_def": "和諧的；融洽的"
  },
  "kindness": {
    "pos": "n.",
    "en_def": "the quality of being friendly, generous and caring",
    "cn_def": "親切；善意"
  }
};

const EXTRA_GLOSSES = {};
