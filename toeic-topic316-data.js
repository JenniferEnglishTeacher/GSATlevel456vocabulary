// Topic 316 Quiz Data: Puzzle 謎題
// Source word list: https://www.examword.com/group-topic/puzzle — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T316 - Puzzle 謎題",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "riddle",
    "pos": "n.",
    "cn_def": "謎語",
    "en_def": "a question or statement that is hard to understand and has a clever answer",
    "sentence": "A: Why were the new employees laughing so loudly in the meeting room before the training session started this morning? B: The trainer gave them a funny {{BLANK}} about a lost suitcase to solve, and the first team to find the answer won free coffee vouchers for the whole week.",
    "cn": "A：為什麼今天早上訓練課程開始前，新員工在會議室裡笑得那麼大聲？ B：講師給他們一個關於遺失行李箱的有趣【謎語】讓他們解，最先找到答案的小組贏得了一整週的免費咖啡券。"
  },
  {
    "word": "brainteaser",
    "pos": "n.",
    "cn_def": "益智問題；腦筋急轉彎",
    "en_def": "a short puzzle that makes you think hard",
    "sentence": "A: How did you keep the customers patient while they were waiting for the delayed train at the station café yesterday? B: We printed a simple {{BLANK}} on every paper placemat, so people stayed busy trying to answer it, and several families even asked us for extra copies to take home.",
    "cn": "A：昨天在車站咖啡廳，客人等誤點的火車時，你們是怎麼讓他們保持耐心的？ B：我們在每張紙餐墊上都印了一道簡單的【益智題】，所以大家忙著想答案，有好幾個家庭甚至還多要了幾份帶回家。"
  },
  {
    "word": "mystery",
    "pos": "n.",
    "cn_def": "謎；神祕的事",
    "en_def": "something strange that nobody can explain",
    "sentence": "A: Did the technicians ever find out why the office printer kept turning itself off every afternoon last month? B: No, it is still a complete {{BLANK}}, because they replaced the cables and checked the software twice, but the problem only stopped after we moved the machine to another room.",
    "cn": "A：技術人員後來有查出為什麼上個月辦公室的印表機每天下午都會自己關機嗎？ B：沒有，這仍然是個完全的【謎】，因為他們換了線、檢查了兩次軟體，但直到我們把機器搬到另一個房間，問題才停止。"
  },
  {
    "word": "clue",
    "pos": "n.",
    "cn_def": "線索",
    "en_def": "a piece of information that helps you find an answer",
    "sentence": "A: How did the security staff finally discover who had left the warehouse door open over the long holiday weekend? B: The most important {{BLANK}} was a coffee cup with a company logo on it, and the camera footage then showed a delivery driver putting it down near the entrance.",
    "cn": "A：保全人員最後是怎麼查出連假期間是誰沒關倉庫的門？ B：最重要的【線索】是一個印有公司標誌的咖啡杯，接著監視器畫面顯示一位送貨司機把它放在入口附近。"
  },
  {
    "word": "hint",
    "pos": "n.",
    "cn_def": "提示",
    "en_def": "a small piece of help that helps you guess the answer",
    "sentence": "A: I have been trying to guess the password for the shared folder all morning, but nothing works, so can you help me? B: I can't tell you directly because of company rules, but here is a {{BLANK}}: it is the name of our first client followed by the year we opened the Taipei branch.",
    "cn": "A：我整個早上都在猜共用資料夾的密碼，但都不對，你可以幫我嗎？ B：因為公司規定，我不能直接告訴你，但給你一個【提示】：是我們第一位客戶的名字，後面接上我們開設台北分公司的那一年。"
  },
  {
    "word": "solution",
    "pos": "n.",
    "cn_def": "解決辦法；答案",
    "en_def": "a way to solve a problem; the answer",
    "sentence": "A: Our team keeps missing deadlines because everyone is waiting for the manager to approve small changes, so what should we do? B: One simple {{BLANK}} is to let team leaders approve changes under a certain budget, which would save time and allow the manager to focus on bigger decisions.",
    "cn": "A：我們團隊一直趕不上截止日期，因為大家都在等經理批准小變更，我們該怎麼辦？ B：一個簡單的【解決辦法】是讓組長核准某個預算以下的變更，這樣能節省時間，也讓經理能專注於更重大的決定。"
  },
  {
    "word": "solve",
    "pos": "v.",
    "cn_def": "解決；解答",
    "en_def": "to find the answer to a problem",
    "sentence": "A: Why did the IT department send everyone an email asking us to restart our computers before lunch today? B: They are trying to {{BLANK}} the network problem that slowed down our online orders yesterday, and they believe a quick restart will install the update that fixes it.",
    "cn": "A：為什麼資訊部今天寄信要大家在午餐前重新開機？ B：他們正試著【解決】昨天拖慢我們線上訂單的網路問題，他們認為快速重開機就能安裝修復問題的更新。"
  },
  {
    "word": "figure out",
    "pos": "v.phr.",
    "cn_def": "想出；弄清楚",
    "en_def": "to understand or find the answer after thinking",
    "sentence": "A: Have you learned how to use the new booking system yet, or are you still asking the receptionist for help every time? B: I finally managed to {{BLANK}} how it works last night after watching the training video twice, and now I can book meeting rooms for the whole department in minutes.",
    "cn": "A：你學會用新的預約系統了嗎？還是每次都還要請櫃台幫忙？ B：昨晚我把訓練影片看了兩遍後，終於【弄清楚】它怎麼運作了，現在我幾分鐘就能幫整個部門預約會議室。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something difficult that tests your ability",
    "sentence": "A: How do you feel about leading the new project in Japan, since you have never worked with an overseas team before? B: It will be a real {{BLANK}} for me, especially because of the language and the time difference, but I am excited to learn and I have already started taking Japanese lessons.",
    "cn": "A：你對於帶領日本的新專案有什麼感覺？畢竟你以前從沒和海外團隊合作過。 B：對我來說這會是個真正的【挑戰】，尤其是語言和時差，但我很期待學習，而且我已經開始上日文課了。"
  },
  {
    "word": "complex",
    "pos": "adj.",
    "cn_def": "複雜的",
    "en_def": "having many connected parts; hard to understand",
    "sentence": "A: Why is the accounting team working so late every night this week when the end of the month is still far away? B: The new tax rules are very {{BLANK}}, with many different parts for each type of product, so they need extra time to check every invoice before the auditors arrive next Monday.",
    "cn": "A：月底還早，為什麼會計團隊這週每天晚上都工作到那麼晚？ B：新的稅務規定非常【複雜】，每種產品都有許多不同的部分，所以他們需要額外時間在下週一稽核人員到來前檢查每一張發票。"
  },
  {
    "word": "complicated",
    "pos": "adj.",
    "cn_def": "複雜的；難懂的",
    "en_def": "difficult to understand or deal with",
    "sentence": "A: Why didn't you fill out the online application for the business trip refund by yourself as the manager suggested? B: The form was so {{BLANK}} that I couldn't understand which receipts to upload, so I asked my colleague in the finance office to explain each step to me during lunch.",
    "cn": "A：你為什麼沒有照經理建議的自己填寫出差退款的線上申請？ B：那份表格太【複雜】了，我搞不懂要上傳哪些收據，所以我在午餐時請財務部的同事一步一步解釋給我聽。"
  },
  {
    "word": "logic",
    "pos": "n.",
    "cn_def": "邏輯；道理",
    "en_def": "a sensible way of thinking or reasoning",
    "sentence": "A: Why does the manager want us to put the cheaper products on the top shelf instead of at eye level in the store? B: The {{BLANK}} behind it is that customers usually look straight ahead first, so they will see the more expensive items and maybe spend more money before they notice the cheaper ones.",
    "cn": "A：為什麼經理要我們把便宜的商品放在店裡最上層，而不是放在視線高度？ B：背後的【邏輯】是，顧客通常會先看正前方，所以他們會先看到較貴的商品，在注意到便宜的商品前可能會花更多錢。"
  },
  {
    "word": "logical",
    "pos": "adj.",
    "cn_def": "合理的；合邏輯的",
    "en_def": "reasonable and sensible",
    "sentence": "A: Do you think we should hire more staff for the café now, or wait until after the summer holiday ends? B: It seems {{BLANK}} to hire now, because summer is our busiest season, and new workers will need at least two weeks of training before they can work alone during the lunch rush.",
    "cn": "A：你覺得咖啡廳應該現在就多請員工，還是等暑假結束後再說？ B：現在請人似乎比較【合理】，因為夏天是我們最忙的季節，新員工至少需要兩週訓練，才能在午餐尖峰時段獨立工作。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略",
    "en_def": "a plan to reach a goal",
    "sentence": "A: Sales of our new energy drink were very low in the first month, so what does the marketing department plan to do now? B: Their new {{BLANK}} is to give free samples at gyms and universities, because young people who exercise are our main customers, and they also want to work with popular online fitness coaches.",
    "cn": "A：我們的新能量飲料第一個月的銷量很差，行銷部現在打算怎麼做？ B：他們的新【策略】是在健身房和大學發送免費試喝品，因為運動的年輕人是我們的主要客群，他們也想和受歡迎的網路健身教練合作。"
  },
  {
    "word": "pattern",
    "pos": "n.",
    "cn_def": "模式；規律",
    "en_def": "a regular way in which something happens",
    "sentence": "A: Have you noticed anything interesting in the sales report for the restaurant over the past three months? B: Yes, there is a clear {{BLANK}}: we sell many more desserts on rainy days, so I suggest we prepare extra cakes whenever the weather forecast says it is going to rain.",
    "cn": "A：你有注意到過去三個月餐廳的銷售報告中有什麼有趣的地方嗎？ B：有，有一個很明顯的【模式】：下雨天我們的甜點賣得多很多，所以我建議每當天氣預報說會下雨時，我們就多準備一些蛋糕。"
  },
  {
    "word": "analyze",
    "pos": "v.",
    "cn_def": "分析",
    "en_def": "to study something carefully to understand it",
    "sentence": "A: The customer survey results arrived this morning, so when will we be able to discuss them at the team meeting? B: I need about two days to {{BLANK}} all the answers carefully, because there are more than five hundred responses, and I want to find out exactly why some customers were unhappy with our delivery service.",
    "cn": "A：顧客問卷的結果今天早上送來了，我們什麼時候能在團隊會議上討論？ B：我需要大約兩天仔細【分析】所有的回答，因為有超過五百份回覆，我想確切找出為什麼有些顧客不滿意我們的送貨服務。"
  },
  {
    "word": "analysis",
    "pos": "n.",
    "cn_def": "分析",
    "en_def": "a careful study of something",
    "sentence": "A: Why did the board decide to close the small shop near the train station even though it is always busy? B: A detailed {{BLANK}} of the costs showed that the rent there is too high, so the shop loses money every month even though many people visit it each day.",
    "cn": "A：為什麼董事會決定關掉火車站附近那家小店，即使它總是很忙？ B：一份詳細的成本【分析】顯示那裡的租金太高，所以儘管每天有很多人光顧，那家店每個月仍在虧錢。"
  },
  {
    "word": "critical thinking",
    "pos": "n.phr.",
    "cn_def": "批判性思考",
    "en_def": "careful thinking to judge whether something is true or good",
    "sentence": "A: What kind of skills is the company looking for in the new customer service supervisor they plan to hire next month? B: They want someone with strong {{BLANK}}, because the supervisor will often need to check complaints carefully, decide which information is true, and choose the fairest way to help each unhappy customer.",
    "cn": "A：公司下個月要聘請的新客服主管，他們在找具備什麼樣技能的人？ B：他們要一位有很強【批判性思考】能力的人，因為主管經常需要仔細查核投訴、判斷哪些資訊是真的，並選出最公平的方式幫助每位不滿的顧客。"
  },
  {
    "word": "concentration",
    "pos": "n.",
    "cn_def": "專注；專心",
    "en_def": "the ability to give all your attention to something",
    "sentence": "A: Why do you always wear headphones when you are checking the monthly financial reports at your desk? B: The open office is very noisy, with phones ringing and people chatting, and the headphones help me keep my {{BLANK}} so that I don't make any mistakes with the numbers.",
    "cn": "A：你在座位上檢查每月財務報告時，為什麼總是戴著耳機？ B：開放式辦公室很吵，電話一直響，大家也在聊天，耳機能幫助我保持【專注】，這樣我在數字上才不會出錯。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注；集中",
    "en_def": "to give your attention to one thing",
    "sentence": "A: We have so many tasks this week, including the trade fair, the new website, and the training day, so where should we start? B: I think we should {{BLANK}} on the trade fair first, because it happens on Thursday and many important clients will visit our booth to see the new products.",
    "cn": "A：這週我們有好多工作，包括商展、新網站和訓練日，該從哪裡開始？ B：我認為我們應該先【專注】在商展上，因為它在星期四舉行，很多重要客戶會來我們的攤位看新產品。"
  },
  {
    "word": "deduce",
    "pos": "v.",
    "cn_def": "推論；推斷",
    "en_def": "to reach an answer by thinking about the facts",
    "sentence": "A: How did you know that the delivery was going to arrive late before the shipping company even called us? B: I was able to {{BLANK}} it from the tracking information, because the package had stayed at the same airport for two days, and a big storm was closing many flights in that area.",
    "cn": "A：在貨運公司打電話給我們之前，你怎麼就知道貨會晚到？ B：我從追蹤資訊【推斷】出來的，因為包裹在同一個機場停留了兩天，而那個地區的大暴風雨讓很多航班停飛。"
  },
  {
    "word": "infer",
    "pos": "v.",
    "cn_def": "推斷；推論",
    "en_def": "to guess something from the information you have",
    "sentence": "A: The client didn't say anything about the price during the video call, so do you think they will sign the contract? B: I {{BLANK}} from their many questions about delivery dates that they are seriously interested, but we should send a friendly follow-up email tomorrow to make sure the price is acceptable.",
    "cn": "A：客戶在視訊會議中都沒提到價格，你覺得他們會簽約嗎？ B：從他們問了很多交貨日期的問題，我【推斷】他們很有興趣，但我們明天應該寄一封友善的後續郵件，確認價格他們可以接受。"
  },
  {
    "word": "assumption",
    "pos": "n.",
    "cn_def": "假設；臆測",
    "en_def": "something you believe is true without proof",
    "sentence": "A: Why did we order so many umbrellas for the gift shop if hardly anyone bought them last month? B: We made the {{BLANK}} that the rainy season would start in May as usual, but the weather stayed dry for weeks, so now we have boxes of umbrellas sitting in the storeroom.",
    "cn": "A：如果上個月幾乎沒人買雨傘，為什麼禮品店還訂了那麼多？ B：我們【假設】雨季會像往常一樣在五月開始，但天氣連續好幾週都很乾燥，所以現在倉庫裡堆了好幾箱雨傘。"
  },
  {
    "word": "trial and error",
    "pos": "n.phr.",
    "cn_def": "反覆試驗；試誤法",
    "en_def": "trying different ways until one works",
    "sentence": "A: How did your small bakery find the perfect recipe for the green tea cookies that everyone in the neighborhood loves? B: It was mostly {{BLANK}}, because we tested more than twenty versions with different amounts of sugar and tea powder until our regular customers agreed that one tasted the best.",
    "cn": "A：你們的小麵包店是怎麼找到附近大家都喜歡的綠茶餅乾完美配方的？ B：大多是靠【反覆試驗】，我們用不同份量的糖和茶粉測試了二十多種版本，直到常客們都同意其中一種最好吃。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "組裝",
    "en_def": "to put the parts of something together",
    "sentence": "A: The new office desks were delivered this morning in large flat boxes, so who is going to put them together? B: Two workers from the furniture company will come at three o'clock to {{BLANK}} them, and they said the whole job should take about two hours if the room is empty.",
    "cn": "A：新的辦公桌今天早上以大扁箱送來了，誰要來組裝？ B：家具公司的兩位工人三點會來【組裝】，他們說如果房間是空的，整個工作大約需要兩個小時。"
  },
  {
    "word": "jigsaw",
    "pos": "n.",
    "cn_def": "拼圖",
    "en_def": "a picture cut into many pieces that you fit together",
    "sentence": "A: What are we going to do with the children at the company family day if it rains and we can't go outside? B: We have prepared a big {{BLANK}} of our city with five hundred pieces, so the kids can work together in teams at the long tables while their parents enjoy the lunch buffet.",
    "cn": "A：如果公司家庭日下雨不能出去，我們要讓孩子們做什麼？ B：我們準備了一幅有五百片的城市大【拼圖】，孩子們可以在長桌上分組合作，家長則享用午餐自助餐。"
  },
  {
    "word": "crossword",
    "pos": "n.",
    "cn_def": "填字遊戲",
    "en_def": "a word game with squares where you write answers to clues",
    "sentence": "A: What do you usually do during your long train ride to the head office in Taichung every Monday morning? B: I usually do the {{BLANK}} in the English newspaper, because filling in the small squares helps me learn new vocabulary, and it makes the ninety-minute trip feel much shorter.",
    "cn": "A：你每週一早上搭很久的火車去台中總公司時，通常都做什麼？ B：我通常會玩英文報紙上的【填字遊戲】，因為填小格子能幫我學新單字，也讓九十分鐘的車程感覺短很多。"
  },
  {
    "word": "sudoku",
    "pos": "n.",
    "cn_def": "數獨",
    "en_def": "a number puzzle in which you fill a grid with the numbers 1 to 9",
    "sentence": "A: Why are so many passengers buying that small puzzle book at the airport gift shop this week? B: The book is full of {{BLANK}} games, where you fill each row and box with the numbers one to nine, and travelers say it keeps their minds busy during long flights.",
    "cn": "A：為什麼這週有這麼多旅客在機場禮品店買那本小謎題書？ B：那本書裡全是【數獨】遊戲，你要在每一列和每一格填入一到九的數字，旅客說這讓他們在長途飛行中保持頭腦忙碌。"
  },
  {
    "word": "maze",
    "pos": "n.",
    "cn_def": "迷宮",
    "en_def": "a confusing network of paths",
    "sentence": "A: Why did you arrive so late for the job interview at the new office building this afternoon? B: The underground parking area was like a {{BLANK}}, with many turns and no clear signs, so I drove around for fifteen minutes before I finally found the elevator to the reception desk.",
    "cn": "A：你今天下午去新辦公大樓面試為什麼那麼晚到？ B：地下停車場就像一座【迷宮】，轉彎很多又沒有清楚的標示，我開了十五分鐘才終於找到通往櫃台的電梯。"
  },
  {
    "word": "enigmatic",
    "pos": "adj.",
    "cn_def": "神祕的；令人費解的",
    "en_def": "mysterious and hard to understand",
    "sentence": "A: What did the new CEO say when reporters asked him about the company's plans for next year at the press conference? B: He only gave an {{BLANK}} smile and said \"Wait and see,\" so nobody knows whether we will open new stores or sell part of the business.",
    "cn": "A：記者會上記者問新執行長公司明年的計畫時，他說了什麼？ B：他只露出【神祕的】微笑，說「等著瞧」，所以沒有人知道我們是會開新店還是賣掉部分事業。"
  },
  {
    "word": "confusing",
    "pos": "adj.",
    "cn_def": "令人困惑的",
    "en_def": "hard to understand",
    "sentence": "A: Why have so many customers called the help line about their electricity bills this month? B: The company changed the design of the bill, and the new layout is very {{BLANK}}, because the total amount is now printed at the bottom in small letters, so many people think they owe more money.",
    "cn": "A：為什麼這個月有那麼多顧客打客服專線詢問電費帳單？ B：公司改了帳單的設計，新的版面非常【令人困惑】，因為總金額現在用小字印在最下面，所以很多人以為自己欠更多錢。"
  },
  {
    "word": "perplex",
    "pos": "v.",
    "cn_def": "使困惑",
    "en_def": "to make someone confused",
    "sentence": "A: Do the new parking rules at the shopping mall make sense to you, or should we ask the manager to explain them? B: The rules seem to {{BLANK}} almost every driver, because the signs say different things on each floor, so I think we should ask for a simple map that explains where staff can park.",
    "cn": "A：購物中心新的停車規定你看得懂嗎？還是我們應該請經理解釋？ B：這些規定似乎讓幾乎每位駕駛都【困惑】，因為每層樓的標示寫的都不一樣，所以我認為我們應該要一張簡單的地圖，說明員工可以停在哪裡。"
  },
  {
    "word": "perplexed",
    "pos": "adj.",
    "cn_def": "困惑的",
    "en_def": "confused because you do not understand something",
    "sentence": "A: How did the hotel guest react when the receptionist said his reservation could not be found in the system? B: He looked very {{BLANK}} because he had a printed confirmation in his hand, but the manager quickly solved the problem and gave him a free upgrade to a larger room with a sea view.",
    "cn": "A：櫃台人員說系統裡找不到他的訂房紀錄時，那位飯店客人有什麼反應？ B：他看起來很【困惑】，因為他手上拿著列印的確認單，但經理很快解決了問題，還免費幫他升級到有海景的大房間。"
  },
  {
    "word": "insight",
    "pos": "n.",
    "cn_def": "洞察；深刻理解",
    "en_def": "a clear, deep understanding of something",
    "sentence": "A: Was the talk by the guest speaker at the marketing conference in Kaohsiung worth attending last weekend? B: Yes, she gave us real {{BLANK}} into what young customers want, explaining that they care more about honest reviews and fast delivery than about famous brands or big advertisements.",
    "cn": "A：上週末高雄行銷研討會的客座講者演講值得去聽嗎？ B：值得，她讓我們真正【深入了解】年輕顧客想要什麼，她解釋說比起名牌或大型廣告，他們更在乎誠實的評價和快速的送貨。"
  },
  {
    "word": "breakthrough",
    "pos": "n.",
    "cn_def": "突破",
    "en_def": "an important discovery or success after a long time of trying",
    "sentence": "A: Why is everyone in the research lab so happy today, and why did the director order cake for the whole team? B: After two years of hard work, the engineers made a major {{BLANK}}, because they found a way to make our phone batteries last twice as long without making them any bigger.",
    "cn": "A：為什麼今天研究室裡大家都這麼開心？主任為什麼還幫整個團隊訂了蛋糕？ B：經過兩年的努力，工程師們有了重大【突破】，他們找到一種方法，能讓我們的手機電池續航力加倍，而且不會變得更大。"
  },
  {
    "word": "solution-oriented",
    "pos": "adj.",
    "cn_def": "以解決問題為導向的",
    "en_def": "focused on finding answers instead of complaining about problems",
    "sentence": "A: What did your manager write about you in your yearly performance review, and are you happy with it? B: She described me as a {{BLANK}} team member, because whenever something goes wrong with an order, I suggest clear ways to fix it instead of blaming suppliers or complaining to coworkers.",
    "cn": "A：你的經理在年度考核中怎麼寫你？你滿意嗎？ B：她形容我是【以解決問題為導向的】團隊成員，因為每當訂單出問題時，我都會提出明確的解決方法，而不是責怪供應商或向同事抱怨。"
  }
];

const MCQS = [
  {
    "q": "The children's magazine prints a short _____ on its back page every week. Readers send in their answers to win a small prize.",
    "options": [
      "riddle",
      "analysis",
      "strategy",
      "breakthrough"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Nobody knows how the valuable painting disappeared from the locked gallery. The police say the case is still a complete _____.",
    "options": [
      "pattern",
      "strategy",
      "mystery",
      "concentration"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The detective found an important _____ under the desk: a train ticket with yesterday's date. It helped her find the missing employee.",
    "options": [
      "assumption",
      "clue",
      "concentration",
      "insight"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "If you cannot guess the password, click the question mark for a _____. It will show you the first letter of the word.",
    "options": [
      "maze",
      "breakthrough",
      "pattern",
      "hint"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The new parking app is a simple _____ to the traffic problem downtown. Drivers can now find empty spaces before they arrive.",
    "options": [
      "mystery",
      "assumption",
      "solution",
      "concentration"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The engineers worked all weekend to _____ the problem with the online payment system. Customers can now pay without any errors.",
    "options": [
      "solve",
      "perplex",
      "assemble",
      "focus"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "It took the new assistant an hour to _____ how to use the photocopier. Next time, she will ask a colleague for help first.",
    "options": [
      "focus",
      "assemble",
      "perplex",
      "figure out"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Opening a new branch in a foreign country is a big _____ for any small company. It requires careful planning and local partners.",
    "options": [
      "riddle",
      "challenge",
      "clue",
      "crossword"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The new accounting software is very _____ and has hundreds of functions. All staff must attend a two-day training course before using it.",
    "options": [
      "complex",
      "enigmatic",
      "perplexed",
      "solution-oriented"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Since most of our customers live in the south, it is _____ to open the new warehouse there. It will reduce delivery times.",
    "options": [
      "perplexed",
      "enigmatic",
      "logical",
      "confusing"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The company's new marketing _____ focuses on social media instead of television ads. Sales to young customers have already increased.",
    "options": [
      "riddle",
      "strategy",
      "maze",
      "sudoku"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The manager noticed a clear _____ in the sales data: sales always rise on Fridays. She now schedules extra staff at the end of the week.",
    "options": [
      "riddle",
      "crossword",
      "assumption",
      "pattern"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Our team will _____ the survey results carefully before the meeting. We want to understand why customers prefer the competitor's product.",
    "options": [
      "assemble",
      "perplex",
      "analyze",
      "deduce"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "According to the consultant's _____ of last year's costs, the company spends too much on office rent. She suggests moving to a smaller building.",
    "options": [
      "analysis",
      "riddle",
      "maze",
      "sudoku"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Good journalists use _____ to check whether information from social media is true. They never publish a story without reliable sources.",
    "options": [
      "crossword",
      "maze",
      "riddle",
      "critical thinking"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Loud music in the open office can affect workers' _____. Many employees prefer to wear headphones when writing important reports.",
    "options": [
      "breakthrough",
      "concentration",
      "clue",
      "sudoku"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "During the busy holiday season, the store will _____ on online orders and close one of its smaller shops. This will save both time and money.",
    "options": [
      "focus",
      "solve",
      "assemble",
      "perplex"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "From the footprints near the door, the security guard was able to _____ that someone had entered the building after the rain. He reported it.",
    "options": [
      "assemble",
      "focus",
      "deduce",
      "perplex"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The sales team made the _____ that the client wanted the cheapest option. In fact, the client cared more about quality and fast delivery.",
    "options": [
      "crossword",
      "assumption",
      "maze",
      "concentration"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "There was no instruction manual, so the staff learned to use the new coffee machine by _____. After a few tries, they made perfect cappuccinos.",
    "options": [
      "sudoku",
      "maze",
      "insight",
      "trial and error"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The new bookshelves arrived in pieces this morning. Two workers will _____ them in the meeting room this afternoon.",
    "options": [
      "deduce",
      "perplex",
      "assemble",
      "analyze"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "My manager does the _____ in the morning newspaper every day on the train. He says filling in the words keeps his mind sharp.",
    "options": [
      "crossword",
      "breakthrough",
      "assumption",
      "insight"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "In a _____ puzzle, you must place the numbers one to nine in every row and box. Each number can appear only once.",
    "options": [
      "breakthrough",
      "concentration",
      "riddle",
      "sudoku"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The new hospital is a _____ of long hallways, and many visitors get lost. The staff plan to put up colorful signs next month.",
    "options": [
      "clue",
      "maze",
      "hint",
      "strategy"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The famous designer gave a very _____ answer when reporters asked about her next collection. She only said it would surprise everyone.",
    "options": [
      "enigmatic",
      "solution-oriented",
      "perplexed",
      "logical"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The instructions for the new printer were so _____ that nobody could install it. Finally, we called the supplier for help.",
    "options": [
      "solution-oriented",
      "perplexed",
      "confusing",
      "logical"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The tourists looked _____ as they studied the subway map written only in Chinese. A friendly station worker offered to help them.",
    "options": [
      "complex",
      "perplexed",
      "solution-oriented",
      "logical"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "The customer interviews gave the design team valuable _____ into how people actually use the product at home. The team will improve the next model.",
    "options": [
      "maze",
      "sudoku",
      "riddle",
      "insight"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "After years of research, the scientists finally made a _____ in battery technology. Their new battery charges in only five minutes.",
    "options": [
      "riddle",
      "crossword",
      "breakthrough",
      "maze"
    ],
    "answer": 2,
    "vocabIndex": 34
  },
  {
    "q": "Our manager prefers _____ employees who suggest ways to fix problems instead of simply complaining about them. Such workers are often promoted quickly.",
    "options": [
      "solution-oriented",
      "enigmatic",
      "perplexed",
      "complex"
    ],
    "answer": 0,
    "vocabIndex": 35
  }
];

const LOOKUP = {
  "riddle": {
    "pos": "n.",
    "en_def": "a question or statement that is hard to understand and has a clever answer",
    "cn_def": "謎語"
  },
  "brainteaser": {
    "pos": "n.",
    "en_def": "a short puzzle that makes you think hard",
    "cn_def": "益智問題；腦筋急轉彎"
  },
  "mystery": {
    "pos": "n.",
    "en_def": "something strange that nobody can explain",
    "cn_def": "謎；神祕的事"
  },
  "clue": {
    "pos": "n.",
    "en_def": "a piece of information that helps you find an answer",
    "cn_def": "線索"
  },
  "hint": {
    "pos": "n.",
    "en_def": "a small piece of help that helps you guess the answer",
    "cn_def": "提示"
  },
  "solution": {
    "pos": "n.",
    "en_def": "a way to solve a problem; the answer",
    "cn_def": "解決辦法；答案"
  },
  "solve": {
    "pos": "v.",
    "en_def": "to find the answer to a problem",
    "cn_def": "解決；解答"
  },
  "figure out": {
    "pos": "v.phr.",
    "en_def": "to understand or find the answer after thinking",
    "cn_def": "想出；弄清楚"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "complex": {
    "pos": "adj.",
    "en_def": "having many connected parts; hard to understand",
    "cn_def": "複雜的"
  },
  "complicated": {
    "pos": "adj.",
    "en_def": "difficult to understand or deal with",
    "cn_def": "複雜的；難懂的"
  },
  "logic": {
    "pos": "n.",
    "en_def": "a sensible way of thinking or reasoning",
    "cn_def": "邏輯；道理"
  },
  "logical": {
    "pos": "adj.",
    "en_def": "reasonable and sensible",
    "cn_def": "合理的；合邏輯的"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a plan to reach a goal",
    "cn_def": "策略"
  },
  "pattern": {
    "pos": "n.",
    "en_def": "a regular way in which something happens",
    "cn_def": "模式；規律"
  },
  "analyze": {
    "pos": "v.",
    "en_def": "to study something carefully to understand it",
    "cn_def": "分析"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something",
    "cn_def": "分析"
  },
  "critical thinking": {
    "pos": "n.phr.",
    "en_def": "careful thinking to judge whether something is true or good",
    "cn_def": "批判性思考"
  },
  "concentration": {
    "pos": "n.",
    "en_def": "the ability to give all your attention to something",
    "cn_def": "專注；專心"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give your attention to one thing",
    "cn_def": "專注；集中"
  },
  "deduce": {
    "pos": "v.",
    "en_def": "to reach an answer by thinking about the facts",
    "cn_def": "推論；推斷"
  },
  "infer": {
    "pos": "v.",
    "en_def": "to guess something from the information you have",
    "cn_def": "推斷；推論"
  },
  "assumption": {
    "pos": "n.",
    "en_def": "something you believe is true without proof",
    "cn_def": "假設；臆測"
  },
  "trial and error": {
    "pos": "n.phr.",
    "en_def": "trying different ways until one works",
    "cn_def": "反覆試驗；試誤法"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to put the parts of something together",
    "cn_def": "組裝"
  },
  "jigsaw": {
    "pos": "n.",
    "en_def": "a picture cut into many pieces that you fit together",
    "cn_def": "拼圖"
  },
  "crossword": {
    "pos": "n.",
    "en_def": "a word game with squares where you write answers to clues",
    "cn_def": "填字遊戲"
  },
  "sudoku": {
    "pos": "n.",
    "en_def": "a number puzzle in which you fill a grid with the numbers 1 to 9",
    "cn_def": "數獨"
  },
  "maze": {
    "pos": "n.",
    "en_def": "a confusing network of paths",
    "cn_def": "迷宮"
  },
  "enigmatic": {
    "pos": "adj.",
    "en_def": "mysterious and hard to understand",
    "cn_def": "神祕的；令人費解的"
  },
  "confusing": {
    "pos": "adj.",
    "en_def": "hard to understand",
    "cn_def": "令人困惑的"
  },
  "perplex": {
    "pos": "v.",
    "en_def": "to make someone confused",
    "cn_def": "使困惑"
  },
  "perplexed": {
    "pos": "adj.",
    "en_def": "confused because you do not understand something",
    "cn_def": "困惑的"
  },
  "insight": {
    "pos": "n.",
    "en_def": "a clear, deep understanding of something",
    "cn_def": "洞察；深刻理解"
  },
  "breakthrough": {
    "pos": "n.",
    "en_def": "an important discovery or success after a long time of trying",
    "cn_def": "突破"
  },
  "solution-oriented": {
    "pos": "adj.",
    "en_def": "focused on finding answers instead of complaining about problems",
    "cn_def": "以解決問題為導向的"
  }
};

const EXTRA_GLOSSES = {};
