// Topic 330 Quiz Data: Research 研究
// Source word list: https://www.examword.com/group-topic/research — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T330 - Research 研究",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "investigate",
    "pos": "v.",
    "cn_def": "調查；研究",
    "en_def": "to look at a problem carefully to find out the facts",
    "sentence": "A: Why did the quality team stop the production line at the plant this afternoon, and when do you think we can start shipping orders again? B: Several customers complained about cracked bottles last week, so the team needs to {{BLANK}} the cause carefully before we restart, which will probably take until Thursday.",
    "cn": "A：品質團隊今天下午為什麼讓工廠的生產線停下來？你覺得我們什麼時候可以再開始出貨？ B：上週有幾位客戶抱怨瓶子有裂痕，所以團隊必須在重新開工前仔細【調查】原因，這大概會花到星期四。"
  },
  {
    "word": "analysis",
    "pos": "n.",
    "cn_def": "分析",
    "en_def": "a careful study of something to understand it",
    "sentence": "A: Have you finished looking at last quarter's sales numbers from the Asian stores, or do you still need more time before the board meeting? B: I'm almost done, and my {{BLANK}} shows that sales rose mainly because of our new online ads, so I'll present the details to the directors on Friday morning.",
    "cn": "A：你看完上一季亞洲門市的銷售數字了嗎？還是在董事會議前還需要更多時間？ B：我快完成了，我的【分析】顯示銷售成長主要是因為我們新的網路廣告，所以我會在星期五早上向董事們報告細節。"
  },
  {
    "word": "data",
    "pos": "n.",
    "cn_def": "資料；數據",
    "en_def": "facts and numbers collected to be studied",
    "sentence": "A: Why is the marketing department asking every store manager to send their weekly customer numbers by Monday afternoon this month? B: They want to collect enough {{BLANK}} to understand when shoppers visit most often, so they can plan staff schedules and special sales events more effectively next year.",
    "cn": "A：為什麼行銷部這個月要求每位店長在星期一下午前寄出每週顧客人數？ B：他們想收集足夠的【資料】來了解顧客最常在什麼時候來店，這樣明年就能更有效地安排員工班表和特賣活動。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts or signs that show something is true",
    "sentence": "A: Is the company really going to change suppliers just because of a few complaints from the kitchen staff about the vegetables? B: Not just complaints; the inspectors found clear {{BLANK}} that the deliveries were stored at the wrong temperature, so the manager decided to sign a contract with a new supplier next month.",
    "cn": "A：公司真的只因為廚房員工對蔬菜的幾句抱怨就要更換供應商嗎？ B：不只是抱怨；檢查員發現了明確的【證據】，顯示送來的貨物存放溫度不正確，所以經理決定下個月和新的供應商簽約。"
  },
  {
    "word": "hypothesis",
    "pos": "n.",
    "cn_def": "假設；假說",
    "en_def": "an idea that has not been proved yet and needs testing",
    "sentence": "A: What exactly is the new product team trying to prove with this month-long test in our three downtown coffee shops? B: Their {{BLANK}} is that customers will buy more pastries if we place them next to the cash register, so they are comparing sales with stores that keep the old layout.",
    "cn": "A：新產品團隊在我們市中心三家咖啡店進行為期一個月的測試，到底想證明什麼？ B：他們的【假設】是如果我們把糕點放在收銀台旁邊，顧客就會買更多，所以他們正在和維持舊陳列方式的門市比較銷售量。"
  },
  {
    "word": "theory",
    "pos": "n.",
    "cn_def": "理論；學說",
    "en_def": "a set of ideas that explains why something happens",
    "sentence": "A: Do you know why our manager believes that letting employees work from home two days a week will increase productivity? B: She read about a management {{BLANK}} which says that workers who save time on commuting feel less tired and more motivated, and she wants to see whether it works in our office.",
    "cn": "A：你知道為什麼我們經理認為讓員工每週在家工作兩天會提高生產力嗎？ B：她讀到一個管理【理論】，說節省通勤時間的員工會比較不累、更有動力，她想看看這在我們辦公室是否行得通。"
  },
  {
    "word": "experiment",
    "pos": "n.",
    "cn_def": "實驗",
    "en_def": "a test done to find out what happens or to prove an idea",
    "sentence": "A: Why are some of the hotel rooms on the fifth floor using different lights and curtains from the rest of the building this month? B: The manager is running an {{BLANK}} to find out whether softer lighting helps guests sleep better, and she will ask them to rate their stay before they check out.",
    "cn": "A：為什麼這個月五樓有些飯店房間的燈和窗簾跟大樓其他地方不一樣？ B：經理正在進行一項【實驗】，想知道較柔和的燈光是否能幫助房客睡得更好，她會在房客退房前請他們為這次住宿評分。"
  },
  {
    "word": "observe",
    "pos": "v.",
    "cn_def": "觀察；注意到",
    "en_def": "to watch someone or something carefully",
    "sentence": "A: Why is that consultant standing near the checkout counters with a notebook every afternoon this week instead of meeting with our managers? B: She was hired to {{BLANK}} how customers move through the store and where they wait the longest, so she can suggest a better layout for the busy holiday season.",
    "cn": "A：為什麼那位顧問這週每天下午都拿著筆記本站在結帳櫃台附近，而不是和我們的經理開會？ B：她受雇來【觀察】顧客在店裡如何移動、在哪裡等得最久，這樣她才能為忙碌的假期旺季建議更好的配置。"
  },
  {
    "word": "observation",
    "pos": "n.",
    "cn_def": "觀察；觀察所得的意見",
    "en_def": "something you notice or say after watching carefully",
    "sentence": "A: Did the new trainer give you any useful advice after she watched you deal with the angry customer at the front desk yesterday? B: Yes, her main {{BLANK}} was that I spoke too quickly when I was nervous, so she suggested that I slow down and repeat the customer's request before offering a solution.",
    "cn": "A：新的培訓師昨天看你在櫃台處理那位生氣的客人後，有給你什麼有用的建議嗎？ B：有，她主要的【觀察心得】是我緊張時說話太快，所以她建議我放慢速度，並在提出解決方法前先複述客人的要求。"
  },
  {
    "word": "survey",
    "pos": "n.",
    "cn_def": "調查；民意調查",
    "en_def": "a set of questions asked to many people to learn their opinions",
    "sentence": "A: How did the human resources department decide which new benefits to offer employees starting next January? B: They sent an online {{BLANK}} to all three hundred staff members last month, and most people said they wanted flexible working hours and a better health plan, so those two were chosen.",
    "cn": "A：人資部是怎麼決定從明年一月起要提供員工哪些新福利的？ B：他們上個月寄了一份線上【調查】給全部三百名員工，大多數人表示想要彈性工時和更好的健康保險方案，所以就選了這兩項。"
  },
  {
    "word": "questionnaire",
    "pos": "n.",
    "cn_def": "問卷",
    "en_def": "a written list of questions that people answer",
    "sentence": "A: What should guests do if they want to share their opinions about the conference, the food, and the speakers before they leave? B: They can fill out the short {{BLANK}} at the registration desk or scan the code on their name badge, and everyone who completes it will receive a discount on next year's ticket.",
    "cn": "A：如果與會者想在離開前分享對會議、餐點和講者的意見，該怎麼做？ B：他們可以在報到櫃台填寫簡短的【問卷】，或掃描名牌上的條碼，每位完成的人都會獲得明年門票的折扣。"
  },
  {
    "word": "sample",
    "pos": "n.",
    "cn_def": "樣本；樣品",
    "en_def": "a small group or amount that shows what the whole is like",
    "sentence": "A: How can the team find out what all our customers think about the new website without calling every single one of them? B: They will contact a random {{BLANK}} of about five hundred customers from different cities and age groups, which should give us a fairly accurate picture of everyone's opinion.",
    "cn": "A：團隊要怎麼在不打電話給每一位顧客的情況下，了解所有顧客對新網站的看法？ B：他們會隨機聯絡大約五百位來自不同城市和年齡層的顧客作為【樣本】，這應該能讓我們相當準確地了解大家的意見。"
  },
  {
    "word": "variable",
    "pos": "n.",
    "cn_def": "變數；變因",
    "en_def": "a thing that can change and affect a result",
    "sentence": "A: Why did the sales results from our two test stores look so different, even though we used the same advertising campaign in both places? B: The weather was an important {{BLANK}} we didn't consider, because it rained almost every day near one store, so fewer people went shopping there during the campaign.",
    "cn": "A：為什麼我們兩家測試門市的銷售結果差這麼多，即使兩地用的是同一個廣告活動？ B：天氣是我們沒考慮到的一個重要【變數】，因為其中一家店附近幾乎天天下雨，所以活動期間去那裡購物的人比較少。"
  },
  {
    "word": "method",
    "pos": "n.",
    "cn_def": "方法；方式",
    "en_def": "a way of doing something",
    "sentence": "A: Our team spends hours every week entering customer orders by hand, so is there any faster way to handle this kind of work? B: Yes, the IT department introduced a new {{BLANK}} that reads the order forms automatically, and it has already saved the accounting team about ten hours a week.",
    "cn": "A：我們團隊每週花好幾個小時手動輸入客戶訂單，有沒有更快的方式來處理這類工作？ B：有，資訊部引進了一種能自動讀取訂購單的新【方法】，已經幫會計團隊每週省下大約十個小時。"
  },
  {
    "word": "procedure",
    "pos": "n.",
    "cn_def": "程序；步驟",
    "en_def": "the official or usual steps for doing something",
    "sentence": "A: What should I do if a customer wants to return an expensive laptop without the original receipt from our store? B: Please follow the standard {{BLANK}} in the staff manual, which means checking the serial number in our system and asking the supervisor to approve the refund before you give any money back.",
    "cn": "A：如果顧客想退回一台昂貴的筆電，卻沒有本店的原始收據，我該怎麼做？ B：請依照員工手冊中的標準【程序】，也就是在系統中查詢序號，並在退還任何款項前請主管核准退款。"
  },
  {
    "word": "finding",
    "pos": "n.",
    "cn_def": "研究結果；發現",
    "en_def": "something learned from a study or investigation",
    "sentence": "A: Did the consulting firm discover anything surprising when it studied why so many young employees leave our company after one year? B: The most important {{BLANK}} was that most of them wanted more training opportunities, so the director has decided to start a mentoring program for new staff this spring.",
    "cn": "A：顧問公司在研究為什麼這麼多年輕員工在一年後離職時，有發現什麼令人意外的事嗎？ B：最重要的【研究結果】是他們大多數想要更多培訓機會，所以主管決定今年春天為新進員工開辦導師計畫。"
  },
  {
    "word": "conclusion",
    "pos": "n.",
    "cn_def": "結論",
    "en_def": "a decision or opinion you reach after thinking carefully",
    "sentence": "A: After three long meetings about the old printers in the office, did the managers finally agree on what to do with them? B: Yes, they came to the {{BLANK}} that buying new machines would be cheaper than repairing the old ones again and again, so the order will be placed next week.",
    "cn": "A：關於辦公室的舊印表機開了三次冗長的會議後，經理們終於同意怎麼處理了嗎？ B：是的，他們得出【結論】，買新機器會比一再修理舊機器便宜，所以下週就會下訂單。"
  },
  {
    "word": "publication",
    "pos": "n.",
    "cn_def": "出版；刊登；出版品",
    "en_def": "the act of printing a book, report, etc. for the public",
    "sentence": "A: Why is the communications team working late every night this week instead of going home at the usual time? B: They are preparing the company's annual report for {{BLANK}} next Monday, and they still need to check all the numbers, photos, and charts before the printer receives the final files.",
    "cn": "A：為什麼宣傳團隊這週每晚都工作到很晚，而不是像平常一樣準時回家？ B：他們正在準備公司年報，以便下星期一【出版】，在印刷廠收到最終檔案前，他們還得檢查所有數字、照片和圖表。"
  },
  {
    "word": "journal",
    "pos": "n.",
    "cn_def": "期刊；專業雜誌",
    "en_def": "a magazine with articles about a special subject",
    "sentence": "A: How did our research director become so well known among doctors and hospital managers across the country? B: She published an article in a famous medical {{BLANK}} about reducing waiting times in clinics, and since then many hospitals have invited her to give talks at their conferences.",
    "cn": "A：我們的研究主任是怎麼在全國醫師和醫院管理者之間變得這麼有名的？ B：她在一本知名的醫學【期刊】上發表了一篇關於縮短診所候診時間的文章，從那之後許多醫院都邀請她到他們的研討會演講。"
  },
  {
    "word": "peer review",
    "pos": "n.phr.",
    "cn_def": "同儕審查",
    "en_def": "the checking of a study by other experts before it is published",
    "sentence": "A: Why can't the scientists announce the results of their new battery study to the public right away if they are so excited about it? B: Their paper must first go through {{BLANK}}, which means other experts in the field will check the methods and results carefully before the editors agree to publish it.",
    "cn": "A：如果科學家們對新的電池研究這麼興奮，為什麼不能立刻向大眾公布結果？ B：他們的論文必須先經過【同儕審查】，也就是該領域的其他專家會仔細檢查方法和結果，編輯們才會同意刊登。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的；可信賴的",
    "en_def": "able to be trusted to work well or be correct",
    "sentence": "A: Why did the purchasing manager decide to pay a little more for parts from the company in Germany instead of the cheaper one? B: The German company is much more {{BLANK}}; it always delivers on time and its parts rarely break, so we lose less money from delays and repairs in the long run.",
    "cn": "A：為什麼採購經理決定多付一點錢向德國那家公司買零件，而不是選比較便宜的那家？ B：德國那家公司【可靠】得多；它總是準時交貨，零件也很少壞，所以長期來看我們因延誤和維修損失的錢比較少。"
  },
  {
    "word": "valid",
    "pos": "adj.",
    "cn_def": "有效的；合理的",
    "en_def": "legally or officially acceptable; based on good reasons",
    "sentence": "A: Can I use this discount coupon that I received in the mail last spring to pay for my dinner here tonight? B: I'm sorry, but the coupon is only {{BLANK}} until the end of June, so we can't accept it now, although you can join our membership program to get a new one.",
    "cn": "A：我可以用去年春天郵寄收到的這張折價券來支付今晚在這裡的晚餐嗎？ B：很抱歉，這張折價券只在六月底前【有效】，所以我們現在無法接受，不過您可以加入我們的會員計畫來取得新的折價券。"
  },
  {
    "word": "objective",
    "pos": "adj.",
    "cn_def": "客觀的",
    "en_def": "based on facts, not on personal feelings",
    "sentence": "A: Why did the company hire an outside expert to judge the design contest instead of asking our own managers to choose the winner? B: The directors wanted someone completely {{BLANK}} who doesn't know any of the employees, so that the decision would be fair and nobody could complain about favoritism.",
    "cn": "A：為什麼公司聘請外部專家來評審設計比賽，而不是請我們自己的經理選出優勝者？ B：董事們想要一位完全【客觀】、不認識任何員工的人，這樣決定才會公平，也沒有人能抱怨偏袒。"
  },
  {
    "word": "subjective",
    "pos": "adj.",
    "cn_def": "主觀的",
    "en_def": "based on personal feelings or opinions",
    "sentence": "A: Why do the three judges at the cooking competition often give such different scores to the same dish? B: Taste is quite {{BLANK}}, because each person has different preferences, so the organizers ask the judges to also score clear things like presentation, cooking time, and cleanliness.",
    "cn": "A：為什麼烹飪比賽的三位評審常常給同一道菜差距這麼大的分數？ B：味道是相當【主觀】的，因為每個人的喜好不同，所以主辦單位也請評審針對擺盤、烹調時間和清潔度等明確項目評分。"
  },
  {
    "word": "statistic",
    "pos": "n.",
    "cn_def": "統計數據；統計資料",
    "en_def": "a number that shows a fact about a group of people or things",
    "sentence": "A: Why did the city council suddenly decide to build more bicycle lanes downtown after years of saying they were too expensive? B: A new {{BLANK}} showed that forty percent of office workers would ride to work if the roads were safer, and the council members couldn't ignore such a large number.",
    "cn": "A：為什麼市議會在多年來一直說太貴之後，突然決定在市中心建造更多自行車道？ B：一項新的【統計數據】顯示，如果道路更安全，百分之四十的上班族會騎車上班，議員們無法忽視這麼大的數字。"
  },
  {
    "word": "quantitative",
    "pos": "adj.",
    "cn_def": "量化的；數量的",
    "en_def": "related to numbers and amounts",
    "sentence": "A: What kind of information does the board want to see in our report about the new loyalty program next month? B: They want {{BLANK}} results, such as how many members joined and how much each one spent, rather than just general comments, so we should prepare clear charts with the exact figures.",
    "cn": "A：董事會下個月想在我們關於新會員忠誠計畫的報告中看到什麼樣的資訊？ B：他們想看【量化的】結果，例如有多少會員加入以及每人花了多少錢，而不只是籠統的意見，所以我們應該準備有確切數字的清楚圖表。"
  },
  {
    "word": "qualitative",
    "pos": "adj.",
    "cn_def": "質性的；定性的",
    "en_def": "related to feelings, opinions and quality, not numbers",
    "sentence": "A: The online ratings for our new hotel restaurant are high, so why does the manager still want to interview guests in person? B: She wants {{BLANK}} information about their feelings and experiences, like why they enjoyed the meal or what made them uncomfortable, which numbers alone cannot really explain.",
    "cn": "A：我們飯店新餐廳的線上評分很高，為什麼經理還想親自訪問客人？ B：她想要關於客人感受和經驗的【質性】資訊，例如他們為什麼喜歡這餐、或是什麼讓他們感到不自在，這些光靠數字是無法真正說明的。"
  },
  {
    "word": "framework",
    "pos": "n.",
    "cn_def": "架構；框架",
    "en_def": "a basic structure of ideas or rules for doing something",
    "sentence": "A: How will the new managers decide which projects should receive money first when so many departments are asking for support? B: The finance director created a clear {{BLANK}} that ranks every project by cost, expected profit, and risk, so the managers can make fair decisions quickly and explain them to their teams.",
    "cn": "A：當這麼多部門都在要求支援時，新任經理們要如何決定哪些專案應優先獲得資金？ B：財務長建立了一個清楚的【架構】，依成本、預期利潤和風險為每個專案排序，讓經理們能快速做出公平的決定並向團隊說明。"
  },
  {
    "word": "literature review",
    "pos": "n.phr.",
    "cn_def": "文獻回顧；文獻探討",
    "en_def": "a summary of earlier studies about a subject",
    "sentence": "A: Before the university team starts testing its new teaching software in local schools, what is it working on right now? B: It is writing a {{BLANK}}, which means reading and summarizing earlier studies about online learning, so the team can avoid repeating old mistakes and build on what others have discovered.",
    "cn": "A：大學團隊在當地學校開始測試新的教學軟體之前，現在正在做什麼？ B：他們正在撰寫【文獻回顧】，也就是閱讀並摘要先前關於線上學習的研究，這樣團隊就能避免重複過去的錯誤，並以他人的發現為基礎。"
  },
  {
    "word": "fieldwork",
    "pos": "n.",
    "cn_def": "實地調查；田野調查",
    "en_def": "research done in real places, not in an office or lab",
    "sentence": "A: Why will the marketing assistant be out of the office for most of next week, and who should I contact about the brochure? B: She is doing {{BLANK}} in small towns in the south, interviewing shop owners about local buying habits, so please email Mr. Chen if you need anything about the brochure.",
    "cn": "A：為什麼行銷助理下週大部分時間都不在辦公室？關於手冊的事我該聯絡誰？ B：她要去南部的小鎮做【實地調查】，訪問店家老闆關於當地的購買習慣，所以如果你需要任何關於手冊的事，請寄電子郵件給陳先生。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新；新發明",
    "en_def": "a new idea, method or product; the act of creating new things",
    "sentence": "A: How has that small software company managed to win so many big clients in only three years? B: The founder encourages constant {{BLANK}}, so employees spend every Friday afternoon developing new ideas, and several of those ideas have become popular products that larger companies want to buy.",
    "cn": "A：那家小型軟體公司是如何在短短三年內贏得這麼多大客戶的？ B：創辦人鼓勵持續【創新】，所以員工每週五下午都在發展新點子，其中有幾個點子已經成為大公司想購買的熱門產品。"
  },
  {
    "word": "funding",
    "pos": "n.",
    "cn_def": "資金；經費",
    "en_def": "money given for a special purpose or project",
    "sentence": "A: Is the hospital still planning to open the new children's clinic on the east side of the city next summer? B: Yes, they finally received enough {{BLANK}} from the government and two private donors last week, so the construction company can begin work on the building in early March.",
    "cn": "A：醫院還打算明年夏天在城市東區開設新的兒童診所嗎？ B：是的，他們上週終於從政府和兩位私人捐款者那裡獲得足夠的【資金】，所以營造公司可以在三月初開始動工興建大樓。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作；協作",
    "en_def": "to work together with others on a project",
    "sentence": "A: Why are our engineers flying to Seoul next month, and how long will they need to stay there? B: They will {{BLANK}} with a Korean partner company to design a new electric scooter, so they will probably stay about three weeks to share ideas and test the first models together.",
    "cn": "A：為什麼我們的工程師下個月要飛到首爾？他們需要在那裡待多久？ B：他們將與一家韓國合作夥伴公司【合作】設計新的電動機車，所以大概會待三個星期左右，一起交流想法並測試第一批樣車。"
  },
  {
    "word": "replicate",
    "pos": "v.",
    "cn_def": "複製；重做（以得到相同結果）",
    "en_def": "to do or make something again in exactly the same way",
    "sentence": "A: Our restaurant in Taipei is doing so well, so why doesn't the owner simply open the same kind of place in other cities? B: She is worried that it will be difficult to {{BLANK}} the same quality in a new location, because the head chef can't train new kitchen staff everywhere at the same time.",
    "cn": "A：我們台北的餐廳經營得這麼好，老闆為什麼不乾脆在其他城市開同樣的店？ B：她擔心在新的地點很難【複製】同樣的品質，因為主廚無法同時到各地訓練新的廚房員工。"
  }
];

const MCQS = [
  {
    "q": "Several shipments arrived damaged at the Osaka warehouse last month. The logistics manager has promised to _____ the problem and report back by Friday.",
    "options": [
      "replicate",
      "investigate",
      "collaborate",
      "conclude"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The finance team spent two weeks studying the company's spending patterns. Their _____ showed that travel costs had doubled since last year.",
    "options": [
      "hypothesis",
      "journal",
      "procedure",
      "analysis"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Please do not share customer names or phone numbers with anyone outside the firm. All personal _____ must be stored on the secure server.",
    "options": [
      "data",
      "theory",
      "conclusion",
      "fieldwork"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The lawyer could not prove that the contract had been broken. Without written _____, the judge decided to dismiss the case.",
    "options": [
      "innovation",
      "framework",
      "evidence",
      "variable"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The researchers believed that shorter meetings would improve staff morale. To test this _____, they cut every meeting to thirty minutes for a month.",
    "options": [
      "publication",
      "hypothesis",
      "funding",
      "journal"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The economist's _____ explains why prices rise when supply is limited. However, some business owners doubt that it applies to small shops.",
    "options": [
      "theory",
      "sample",
      "fieldwork",
      "funding"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The chemists will mix the two materials at different temperatures next week. The _____ will show which combination produces the strongest plastic.",
    "options": [
      "journal",
      "conclusion",
      "funding",
      "experiment"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "During the training week, new employees sit beside experienced staff. They _____ how senior agents handle difficult calls before answering any themselves.",
    "options": [
      "replicate",
      "fund",
      "observe",
      "conclude"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The hotel sends a short _____ to every guest after checkout. The responses help managers improve room service and cleaning.",
    "options": [
      "survey",
      "variable",
      "theory",
      "hypothesis"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The factory checks a small _____ from every batch of juice. If any bottle tastes wrong, the whole batch is held back.",
    "options": [
      "framework",
      "sample",
      "method",
      "conclusion"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Sales can change for many reasons, including weather and holidays. Price is only one _____ that the marketing team needs to consider.",
    "options": [
      "publication",
      "journal",
      "fieldwork",
      "variable"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Customers can now pay by credit card, bank transfer, or mobile app. The most popular payment _____ among young shoppers is the app.",
    "options": [
      "method",
      "evidence",
      "finding",
      "hypothesis"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "All visitors must sign in at the front desk and wear a badge. This security _____ protects both staff and equipment.",
    "options": [
      "statistic",
      "journal",
      "procedure",
      "sample"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The study surveyed over two thousand online shoppers in Asia. Its main _____ was that free shipping matters more than low prices.",
    "options": [
      "procedure",
      "finding",
      "framework",
      "variable"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "After comparing three suppliers, the committee reached a clear _____. It will sign a two-year contract with the local company.",
    "options": [
      "sample",
      "method",
      "variable",
      "conclusion"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The editor is checking the final draft of the travel guide. It should be ready for _____ before the tourist season begins in May.",
    "options": [
      "publication",
      "evidence",
      "hypothesis",
      "statistic"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Dr. Lin's article on hospital waiting times appeared in a well-known medical _____. Many clinic managers have since contacted her for advice.",
    "options": [
      "survey",
      "sample",
      "journal",
      "theory"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Before the article can be printed, other experts must check its methods carefully. This process of _____ usually takes about three months.",
    "options": [
      "fieldwork",
      "peer review",
      "literature review",
      "data"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "We need a printer that works every day without breaking down. The cheaper model was not _____ enough for a busy office.",
    "options": [
      "subjective",
      "quantitative",
      "valid",
      "reliable"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Please check your passport before you book the flight to Tokyo. It must be _____ for at least six months after your arrival.",
    "options": [
      "valid",
      "objective",
      "reliable",
      "subjective"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The judges did not know any of the contestants personally. This allowed them to give _____ scores based only on the work itself.",
    "options": [
      "quantitative",
      "subjective",
      "objective",
      "qualitative"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Whether a painting is beautiful is a _____ question. Each visitor to the gallery may have a completely different opinion.",
    "options": [
      "reliable",
      "subjective",
      "quantitative",
      "valid"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "One surprising _____ in the report shows that half of all shoppers compare prices online first. The store managers were shocked by the number.",
    "options": [
      "framework",
      "procedure",
      "method",
      "statistic"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The board asked for _____ information, such as exact sales figures and costs. General opinions from staff were not enough.",
    "options": [
      "quantitative",
      "subjective",
      "qualitative",
      "valid"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The new policy gives managers a clear _____ for making hiring decisions. It lists the steps and rules everyone should follow.",
    "options": [
      "sample",
      "variable",
      "framework",
      "statistic"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The team will spend two weeks visiting farms in rural areas. This _____ will help them understand how farmers really use the new tools.",
    "options": [
      "publication",
      "journal",
      "conclusion",
      "fieldwork"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The company spends a large part of its budget on developing new ideas. Its focus on _____ has made it a leader in smartphone design.",
    "options": [
      "evidence",
      "innovation",
      "conclusion",
      "sample"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The museum cannot open its new wing without more money. The director has applied for government _____ to complete the project.",
    "options": [
      "funding",
      "innovation",
      "evidence",
      "method"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Our design team will _____ with a Japanese company on the new product line. Both firms will share their engineers and research costs.",
    "options": [
      "observe",
      "replicate",
      "collaborate",
      "investigate"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Other laboratories tried to repeat the test with the same materials. However, none of them could _____ the original results.",
    "options": [
      "collaborate",
      "observe",
      "investigate",
      "replicate"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "investigate": {
    "pos": "v.",
    "en_def": "to look at a problem carefully to find out the facts",
    "cn_def": "調查；研究"
  },
  "analysis": {
    "pos": "n.",
    "en_def": "a careful study of something to understand it",
    "cn_def": "分析"
  },
  "data": {
    "pos": "n.",
    "en_def": "facts and numbers collected to be studied",
    "cn_def": "資料；數據"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts or signs that show something is true",
    "cn_def": "證據"
  },
  "hypothesis": {
    "pos": "n.",
    "en_def": "an idea that has not been proved yet and needs testing",
    "cn_def": "假設；假說"
  },
  "theory": {
    "pos": "n.",
    "en_def": "a set of ideas that explains why something happens",
    "cn_def": "理論；學說"
  },
  "experiment": {
    "pos": "n.",
    "en_def": "a test done to find out what happens or to prove an idea",
    "cn_def": "實驗"
  },
  "observe": {
    "pos": "v.",
    "en_def": "to watch someone or something carefully",
    "cn_def": "觀察；注意到"
  },
  "observation": {
    "pos": "n.",
    "en_def": "something you notice or say after watching carefully",
    "cn_def": "觀察；觀察所得的意見"
  },
  "survey": {
    "pos": "n.",
    "en_def": "a set of questions asked to many people to learn their opinions",
    "cn_def": "調查；民意調查"
  },
  "questionnaire": {
    "pos": "n.",
    "en_def": "a written list of questions that people answer",
    "cn_def": "問卷"
  },
  "sample": {
    "pos": "n.",
    "en_def": "a small group or amount that shows what the whole is like",
    "cn_def": "樣本；樣品"
  },
  "variable": {
    "pos": "n.",
    "en_def": "a thing that can change and affect a result",
    "cn_def": "變數；變因"
  },
  "method": {
    "pos": "n.",
    "en_def": "a way of doing something",
    "cn_def": "方法；方式"
  },
  "procedure": {
    "pos": "n.",
    "en_def": "the official or usual steps for doing something",
    "cn_def": "程序；步驟"
  },
  "finding": {
    "pos": "n.",
    "en_def": "something learned from a study or investigation",
    "cn_def": "研究結果；發現"
  },
  "conclusion": {
    "pos": "n.",
    "en_def": "a decision or opinion you reach after thinking carefully",
    "cn_def": "結論"
  },
  "publication": {
    "pos": "n.",
    "en_def": "the act of printing a book, report, etc. for the public",
    "cn_def": "出版；刊登；出版品"
  },
  "journal": {
    "pos": "n.",
    "en_def": "a magazine with articles about a special subject",
    "cn_def": "期刊；專業雜誌"
  },
  "peer review": {
    "pos": "n.phr.",
    "en_def": "the checking of a study by other experts before it is published",
    "cn_def": "同儕審查"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to work well or be correct",
    "cn_def": "可靠的；可信賴的"
  },
  "valid": {
    "pos": "adj.",
    "en_def": "legally or officially acceptable; based on good reasons",
    "cn_def": "有效的；合理的"
  },
  "objective": {
    "pos": "adj.",
    "en_def": "based on facts, not on personal feelings",
    "cn_def": "客觀的"
  },
  "subjective": {
    "pos": "adj.",
    "en_def": "based on personal feelings or opinions",
    "cn_def": "主觀的"
  },
  "statistic": {
    "pos": "n.",
    "en_def": "a number that shows a fact about a group of people or things",
    "cn_def": "統計數據；統計資料"
  },
  "quantitative": {
    "pos": "adj.",
    "en_def": "related to numbers and amounts",
    "cn_def": "量化的；數量的"
  },
  "qualitative": {
    "pos": "adj.",
    "en_def": "related to feelings, opinions and quality, not numbers",
    "cn_def": "質性的；定性的"
  },
  "framework": {
    "pos": "n.",
    "en_def": "a basic structure of ideas or rules for doing something",
    "cn_def": "架構；框架"
  },
  "literature review": {
    "pos": "n.phr.",
    "en_def": "a summary of earlier studies about a subject",
    "cn_def": "文獻回顧；文獻探討"
  },
  "fieldwork": {
    "pos": "n.",
    "en_def": "research done in real places, not in an office or lab",
    "cn_def": "實地調查；田野調查"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method or product; the act of creating new things",
    "cn_def": "創新；新發明"
  },
  "funding": {
    "pos": "n.",
    "en_def": "money given for a special purpose or project",
    "cn_def": "資金；經費"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work together with others on a project",
    "cn_def": "合作；協作"
  },
  "replicate": {
    "pos": "v.",
    "en_def": "to do or make something again in exactly the same way",
    "cn_def": "複製；重做（以得到相同結果）"
  }
};

const EXTRA_GLOSSES = {};
