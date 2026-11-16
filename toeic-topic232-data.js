// Topic 232 Quiz Data: Math 數學
// Source word list: https://www.examword.com/group-topic/math — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T232 - Math 數學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "calculate",
    "pos": "v.",
    "cn_def": "計算",
    "en_def": "to find a number or amount by using math",
    "sentence": "A: The client wants to know how much the whole office renovation will cost, including new desks, lights, and carpets, before she signs the contract. B: I'll {{BLANK}} the total price this afternoon with the accounting team and send her a detailed estimate by email before five o'clock.",
    "cn": "A：客戶想在簽約前知道整個辦公室翻修要花多少錢，包括新桌子、燈具和地毯。 B：我今天下午會和會計團隊一起【計算】總價，並在五點前用電子郵件寄給她一份詳細的估價單。"
  },
  {
    "word": "figure",
    "pos": "n.",
    "cn_def": "數字；數據",
    "en_def": "a number, especially an official amount",
    "sentence": "A: Have you checked the sales report for the second quarter, because the manager wants to discuss it at the meeting tomorrow morning? B: Yes, and the final {{BLANK}} looks much higher than last year, mainly because our new online store attracted thousands of young customers in Taipei.",
    "cn": "A：你看過第二季的銷售報告了嗎？因為經理想在明天早上的會議上討論。 B：看過了，最後的【數字】看起來比去年高很多，主要是因為我們的新網路商店吸引了台北數千名年輕顧客。"
  },
  {
    "word": "tough time",
    "pos": "n.phr.",
    "cn_def": "艱難時期；很吃力",
    "en_def": "a difficult period or experience",
    "sentence": "A: How is the new intern doing with the monthly budget spreadsheet that you asked him to prepare for the finance department? B: He's having a {{BLANK}} with all the formulas right now, so I'm going to sit with him after lunch and explain each step slowly.",
    "cn": "A：新來的實習生做財務部要的每月預算試算表做得怎麼樣？ B：他現在處理那些公式【很吃力】，所以午餐後我會坐在他旁邊，慢慢解釋每個步驟。"
  },
  {
    "word": "schoolboy error",
    "pos": "n.phr.",
    "cn_def": "低級錯誤",
    "en_def": "a very simple and silly mistake",
    "sentence": "A: Why did the invoice we sent to the hotel show a total that was ten times bigger than the real amount? B: It was a {{BLANK}}, really, because someone added an extra zero by mistake, and nobody checked the numbers again before mailing it out.",
    "cn": "A：為什麼我們寄給飯店的發票總額比實際金額大了十倍？ B：說真的，那是個【低級錯誤】，因為有人不小心多打了一個零，而且寄出前沒有人再檢查一次數字。"
  },
  {
    "word": "ignorant",
    "pos": "adj.",
    "cn_def": "無知的；不了解的",
    "en_def": "not knowing about something",
    "sentence": "A: Should we ask the new sales staff to read the pricing guide before they start talking to customers next Monday? B: Definitely, because if they remain {{BLANK}} of our discount rules, they might promise prices that are too low and cause serious problems for the company.",
    "cn": "A：我們應該要求新的業務人員在下週一開始接觸客戶前先讀完定價指南嗎？ B：當然要，因為如果他們對我們的折扣規定一直【不了解】，可能會承諾過低的價格，給公司帶來嚴重的問題。"
  },
  {
    "word": "slow-learner",
    "pos": "n.",
    "cn_def": "學得慢的人",
    "en_def": "a person who needs more time to learn things",
    "sentence": "A: I heard you finally passed the accounting certificate exam after studying every evening for almost a whole year. B: Thanks, I was always a {{BLANK}} in math at school, but my supervisor kept encouraging me and lent me her old notes, which helped a lot.",
    "cn": "A：聽說你每天晚上讀書，讀了將近一整年，終於通過會計證照考試了。 B：謝謝，我在學校時數學一直是個【學得慢的人】，但我的主管不斷鼓勵我，還借我她以前的筆記，幫了我很多。"
  },
  {
    "word": "inherit",
    "pos": "v.",
    "cn_def": "繼承；接手",
    "en_def": "to receive something from a parent or from the person who had a job before you",
    "sentence": "A: Why does the new branch manager spend so many hours reviewing old financial records instead of meeting customers this week? B: She is about to {{BLANK}} a large debt from the previous manager, so she needs to understand every number before she can make a realistic plan for next year.",
    "cn": "A：新的分行經理這週為什麼花那麼多時間看舊的財務紀錄，而不是去見客戶？ B：她即將【接手】前任經理留下的一大筆債務，所以在擬定明年實際可行的計畫之前，她需要了解每一個數字。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響",
    "en_def": "a strong effect on something",
    "sentence": "A: Do you think the new delivery fee will change how many customers order from our website during the busy holiday season? B: I think it will have a big {{BLANK}} on our sales, so let's run the numbers with the marketing team before we announce it to the public.",
    "cn": "A：你認為新的運費會改變忙碌的假期期間在我們網站下單的顧客人數嗎？ B：我認為它會對我們的銷售產生很大的【影響】，所以在對外公布之前，我們先和行銷團隊一起算算看數字吧。"
  },
  {
    "word": "stagnate",
    "pos": "v.",
    "cn_def": "停滯",
    "en_def": "to stop growing or developing",
    "sentence": "A: Our profits rose quickly for three years, but the last two quarterly reports show almost no growth at all. B: If we don't find new markets soon, our business will {{BLANK}}, so I suggest we study the numbers from Southeast Asia and prepare a proposal for the board.",
    "cn": "A：我們的利潤連續三年快速成長，但最近兩季的報告幾乎完全沒有成長。 B：如果我們不盡快找到新市場，業務就會【停滯】，所以我建議研究東南亞的數據，並為董事會準備一份提案。"
  },
  {
    "word": "associate",
    "pos": "v.",
    "cn_def": "聯想；把……聯繫在一起",
    "en_def": "to connect one thing with another in your mind",
    "sentence": "A: Why do so many of our new employees feel nervous when they have to prepare the monthly cost report? B: Many people {{BLANK}} numbers with difficult tests from their school days, so we plan to offer a friendly spreadsheet workshop to help them feel more confident.",
    "cn": "A：為什麼我們很多新員工要準備每月成本報告時都會感到緊張？ B：很多人會把數字和學生時代困難的考試【聯想】在一起，所以我們打算開一個輕鬆的試算表工作坊，幫助他們更有自信。"
  },
  {
    "word": "loathe",
    "pos": "v.",
    "cn_def": "厭惡；非常討厭",
    "en_def": "to hate something very much",
    "sentence": "A: You always look unhappy at the end of each month when the expense reports from every department are due. B: I {{BLANK}} checking hundreds of small receipts one by one, so I'm asking our manager whether we can buy software that totals them automatically.",
    "cn": "A：每個月底各部門的費用報告要交的時候，你看起來總是很不開心。 B：我【非常討厭】一張一張檢查數百張小收據，所以我正在問經理我們能不能買一套可以自動加總的軟體。"
  },
  {
    "word": "add up",
    "pos": "v.phr.",
    "cn_def": "加總；合計",
    "en_def": "to put numbers together to find the total",
    "sentence": "A: The restaurant bill for our team dinner last Friday seems too high, and I need to send it to the finance office today. B: Let's {{BLANK}} all the dishes and drinks on the receipt, because I think the waiter might have charged us twice for the dessert.",
    "cn": "A：上週五團隊聚餐的餐廳帳單好像太高了，我今天得把它交給財務部。 B：我們把收據上所有的菜和飲料【加總】一下吧，因為我覺得服務生可能把甜點重複算了兩次。"
  },
  {
    "word": "arithmetic",
    "pos": "n.",
    "cn_def": "算術",
    "en_def": "basic math with numbers, such as adding and subtracting",
    "sentence": "A: Do the cashiers at our new shop really need to count change by hand when the registers stop working during a power cut? B: Yes, so basic {{BLANK}} is still an important skill, and we will give every new cashier a short test during their first week of training.",
    "cn": "A：停電導致收銀機無法運作時，我們新店的收銀員真的需要手算找零嗎？ B：是的，所以基本的【算術】仍然是一項重要的技能，我們會在每位新收銀員受訓的第一週給他們做個小測驗。"
  },
  {
    "word": "addition",
    "pos": "n.",
    "cn_def": "加法",
    "en_def": "the process of adding numbers together",
    "sentence": "A: My son's teacher says he makes too many careless mistakes on his homework, even though he understands the lessons quite well. B: Maybe he could practice simple {{BLANK}} with real shopping receipts at home, because counting prices from the supermarket often makes math feel more useful and fun for kids.",
    "cn": "A：我兒子的老師說他作業上粗心的錯誤太多，雖然他上課內容理解得還不錯。 B：也許他可以在家用真實的購物收據練習簡單的【加法】，因為計算超市的價格常常讓孩子覺得數學更實用、更有趣。"
  },
  {
    "word": "subtraction",
    "pos": "n.",
    "cn_def": "減法",
    "en_def": "the process of taking one number away from another",
    "sentence": "A: How do you check whether the cash in the register is correct at the end of each shift at the café? B: It's just {{BLANK}}: you take the starting amount away from the final amount, and the answer should match the total sales shown on the computer screen.",
    "cn": "A：咖啡店每班結束時，你怎麼檢查收銀機裡的現金是否正確？ B：那只是【減法】：你把最後的金額減掉一開始的金額，答案應該要和電腦螢幕上顯示的總銷售額相符。"
  },
  {
    "word": "taking away",
    "pos": "n.phr.",
    "cn_def": "拿走；減去",
    "en_def": "an informal, simple way of saying subtraction",
    "sentence": "A: My daughter is in first grade, and she gets confused when her teacher talks about subtraction in class. B: Just call it {{BLANK}} and use her toys, for example, five cars minus two cars, because young children usually understand numbers better when they can touch real objects.",
    "cn": "A：我女兒讀一年級，老師在課堂上講減法時她會搞混。 B：就把它叫做【拿走】，並用她的玩具來示範，例如五台車拿走兩台車，因為年幼的孩子能摸到真實物品時，通常比較能理解數字。"
  },
  {
    "word": "multiplication",
    "pos": "n.",
    "cn_def": "乘法",
    "en_def": "adding a number to itself a certain number of times, such as 3 × 4",
    "sentence": "A: How did you work out the cost of printing four hundred brochures so quickly without using a calculator? B: It's simple {{BLANK}}, because each brochure costs twelve dollars, so I just did twelve times four hundred and got four thousand eight hundred dollars.",
    "cn": "A：你怎麼沒用計算機就這麼快算出印四百份小冊子的費用？ B：那是簡單的【乘法】，因為每份小冊子要十二元，所以我只是把十二乘以四百，得到四千八百元。"
  },
  {
    "word": "multiplication table",
    "pos": "n.phr.",
    "cn_def": "乘法表；九九乘法表",
    "en_def": "a list that shows the results of multiplying numbers",
    "sentence": "A: Why is your son sitting in the back seat repeating numbers out loud while we drive to the shopping mall this weekend? B: He has a quiz on Monday, so he is practicing the {{BLANK}} for seven and eight, which he finds much harder than the others.",
    "cn": "A：這個週末我們開車去購物中心的路上，你兒子為什麼坐在後座大聲唸數字？ B：他星期一有小考，所以正在練習七和八的【乘法表】，他覺得這兩個比其他的難多了。"
  },
  {
    "word": "division",
    "pos": "n.",
    "cn_def": "除法",
    "en_def": "finding how many times one number goes into another",
    "sentence": "A: We have a thirty-six-thousand-dollar bonus to share equally among the twelve members of the sales team this year. B: That's easy {{BLANK}}, so each person will get three thousand dollars, and I'll ask payroll to add the money to their December salaries.",
    "cn": "A：今年我們有三萬六千元的獎金，要平均分給業務團隊的十二位成員。 B：那是簡單的【除法】，所以每個人會拿到三千元，我會請薪資部門把這筆錢加到他們十二月的薪水裡。"
  },
  {
    "word": "long division",
    "pos": "n.phr.",
    "cn_def": "長除法",
    "en_def": "a written way of dividing large numbers step by step",
    "sentence": "A: The electricity went off at the warehouse, and my laptop battery is dead, but I need the average cost per box right now. B: Then we'll have to do {{BLANK}} on paper, so grab a pen and let's divide the total shipping cost by the number of boxes carefully.",
    "cn": "A：倉庫停電了，我的筆電也沒電了，但我現在就需要每箱的平均成本。 B：那我們只好在紙上做【長除法】了，拿支筆來，我們仔細地把總運費除以箱子的數量吧。"
  },
  {
    "word": "decimal",
    "pos": "n.",
    "cn_def": "小數",
    "en_def": "a number written with a dot, such as 2.5",
    "sentence": "A: The bank says our interest rate is three point seven five percent, but the contract shows only three point seven. B: Please call them today and ask which {{BLANK}} is correct, because even a small difference will change our monthly payment over the next ten years.",
    "cn": "A：銀行說我們的利率是百分之三點七五，但合約上只寫三點七。 B：請你今天打電話問他們哪個【小數】才正確，因為即使是小小的差異，也會改變我們未來十年的每月付款金額。"
  },
  {
    "word": "fraction",
    "pos": "n.",
    "cn_def": "分數；一小部分",
    "en_def": "a part of a whole number, such as ½; a small part of something",
    "sentence": "A: Is the new printer really worth buying, since it costs more than the old model we have been using for years? B: Yes, because it uses only a {{BLANK}} of the ink, so we will save money on supplies and get our money back in about eight months.",
    "cn": "A：新印表機真的值得買嗎？它比我們用了好幾年的舊機型還貴。 B：值得，因為它只用【一小部分】的墨水，所以我們會省下耗材費用，大約八個月就能回本。"
  },
  {
    "word": "algebra",
    "pos": "n.",
    "cn_def": "代數",
    "en_def": "math that uses letters and symbols to stand for numbers",
    "sentence": "A: Why did the data analyst job ad mention a math test, since most of the work is done with computer software? B: The company wants people who understand basic {{BLANK}}, because you need to set up formulas with unknown values when you build pricing models for new products.",
    "cn": "A：資料分析師的徵才廣告為什麼提到數學測驗？大部分工作不是都用電腦軟體做嗎？ B：公司想找懂得基礎【代數】的人，因為為新產品建立定價模型時，你需要用未知數來設定公式。"
  },
  {
    "word": "geometry",
    "pos": "n.",
    "cn_def": "幾何學",
    "en_def": "math about shapes, lines, angles, and space",
    "sentence": "A: How did the interior designer know exactly how many floor tiles we needed for the strange triangle-shaped lobby? B: She used some simple {{BLANK}} to measure the angles and the area, so we ordered the right number of tiles and didn't waste any money.",
    "cn": "A：室內設計師怎麼知道那個奇特的三角形大廳到底需要多少塊地磚？ B：她用了一些簡單的【幾何學】來測量角度和面積，所以我們訂了剛好數量的地磚，一點錢都沒浪費。"
  },
  {
    "word": "proportion",
    "pos": "n.",
    "cn_def": "比例",
    "en_def": "a part of a total; the relationship in size between two things",
    "sentence": "A: The survey results came back this morning, and I'm curious how many of our customers actually use the mobile app. B: A large {{BLANK}} of them, almost seventy percent, order through the app, so we should spend more of next year's budget on improving it.",
    "cn": "A：調查結果今天早上出來了，我很好奇我們的顧客中實際使用手機應用程式的有多少。 B：有很大【比例】的人，將近百分之七十，透過應用程式下單，所以我們明年應該把更多預算花在改善它上面。"
  },
  {
    "word": "rates of change",
    "pos": "n.phr.",
    "cn_def": "變化率",
    "en_def": "how fast one amount changes compared with another",
    "sentence": "A: The manager wants a chart that shows how fast our online sales and store sales have grown over the last five years. B: I'll compare the {{BLANK}} for both channels in one line graph, so everyone at the meeting can see which one is growing faster.",
    "cn": "A：經理想要一張圖表，顯示過去五年我們的網路銷售和門市銷售成長得有多快。 B：我會在一張折線圖中比較兩個通路的【變化率】，讓會議上的每個人都能看出哪一個成長得比較快。"
  }
];

const MCQS = [
  {
    "q": "Please _____ the total travel expenses for the Tokyo trip before Friday. The finance manager needs the exact amount for the budget.",
    "options": [
      "calculate",
      "inherit",
      "loathe",
      "stagnate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The final sales _____ for October was higher than expected. The director will present it at the shareholders' meeting.",
    "options": [
      "geometry",
      "algebra",
      "figure",
      "arithmetic"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Our small shop had a _____ during the rainy season because few customers came. Business finally improved when summer arrived.",
    "options": [
      "rates of change",
      "tough time",
      "multiplication table",
      "long division"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Forgetting to attach the price list to the quote was a _____. The client noticed it immediately and asked us to resend it.",
    "options": [
      "multiplication table",
      "taking away",
      "rates of change",
      "schoolboy error"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many new employees are _____ of the company's refund policy. Please make sure they read the handbook carefully.",
    "options": [
      "generous",
      "polite",
      "ignorant",
      "honest"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Our new clerk admits she was a _____ with spreadsheets at first. Now she trains new staff in the accounting department.",
    "options": [
      "slow-learner",
      "fraction",
      "decimal",
      "proportion"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "When Ms Lin became director, she had to _____ several unfinished projects from her predecessor. She completed all of them within six months.",
    "options": [
      "calculate",
      "loathe",
      "stagnate",
      "inherit"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new tax rules will have a strong _____ on small businesses. Many owners are attending a free seminar to learn more.",
    "options": [
      "fraction",
      "impact",
      "decimal",
      "geometry"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Without new products, our sales may _____ over the next few years. The board has approved a larger research budget.",
    "options": [
      "stagnate",
      "calculate",
      "inherit",
      "associate"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many customers _____ our brand with high quality and friendly service. We must protect that reputation carefully.",
    "options": [
      "loathe",
      "inherit",
      "associate",
      "calculate"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Most employees _____ long meetings that start late and have no clear agenda. The new manager promised to keep them short.",
    "options": [
      "inherit",
      "loathe",
      "calculate",
      "stagnate"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Please _____ the hours on your timesheet before you submit it. Mistakes can delay your monthly salary payment.",
    "options": [
      "turn down",
      "put on",
      "look after",
      "add up"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Cashiers need good mental _____ to give customers the correct change quickly. We test this skill during every job interview.",
    "options": [
      "geometry",
      "algebra",
      "arithmetic",
      "impact"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The children practiced simple _____ by counting the total cost of two snacks. Then they checked their answers with a calculator.",
    "options": [
      "addition",
      "geometry",
      "algebra",
      "proportion"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "To find the change, the cashier used _____ and took the price away from the amount paid. It only took a few seconds.",
    "options": [
      "multiplication",
      "geometry",
      "algebra",
      "subtraction"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Young children often learn _____ by removing apples from a basket one at a time. Adding is usually taught to them first.",
    "options": [
      "multiplication table",
      "taking away",
      "long division",
      "rates of change"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Since each box holds twelve cups, simple _____ tells us that fifty boxes hold six hundred cups. Please order the boxes today.",
    "options": [
      "multiplication",
      "subtraction",
      "geometry",
      "decimal"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Many primary school students memorize the _____ by singing short songs in class. Parents can also practice it with them at home.",
    "options": [
      "rates of change",
      "long division",
      "multiplication table",
      "schoolboy error"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The prize money was shared using simple _____, so each of the four winners received the same amount. Everyone was happy with the result.",
    "options": [
      "geometry",
      "division",
      "algebra",
      "impact"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The trainee had to do _____ on paper because the office calculator was broken. It took him almost ten minutes to finish.",
    "options": [
      "rates of change",
      "schoolboy error",
      "multiplication table",
      "long division"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Please round each price to one _____ place in the new catalog. Customers find shorter numbers easier to read.",
    "options": [
      "fraction",
      "proportion",
      "decimal",
      "geometry"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The new machine uses only a _____ of the electricity that the old one needed. We expect lower bills next month.",
    "options": [
      "fraction",
      "decimal",
      "geometry",
      "arithmetic"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The engineering course requires basic _____, including equations with unknown values like x and y. A short placement test is given first.",
    "options": [
      "geometry",
      "impact",
      "figure",
      "algebra"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The architect used _____ to calculate the angles of the unusual triangular roof. The design won an award last year.",
    "options": [
      "impact",
      "geometry",
      "proportion",
      "figure"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "A large _____ of our staff now work from home two days a week. The office will therefore become smaller next year.",
    "options": [
      "proportion",
      "impact",
      "decimal",
      "geometry"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The analyst compared the _____ of prices in three cities over five years. Housing costs rose fastest in Taipei.",
    "options": [
      "multiplication table",
      "schoolboy error",
      "rates of change",
      "tough time"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Our software can automatically _____ the shipping cost based on the weight of each package. This saves the warehouse team a lot of time.",
    "options": [
      "associate",
      "calculate",
      "loathe",
      "inherit"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "The government released an official _____ for unemployment this morning. It was lower than most economists had predicted.",
    "options": [
      "geometry",
      "algebra",
      "multiplication",
      "figure"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The recipe works best if you keep the right _____ of flour to water. Too much water makes the bread heavy.",
    "options": [
      "impact",
      "algebra",
      "proportion",
      "arithmetic"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The training program had a positive _____ on customer satisfaction scores. Complaints fell by half within three months.",
    "options": [
      "impact",
      "decimal",
      "fraction",
      "geometry"
    ],
    "answer": 0,
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "calculate": {
    "pos": "v.",
    "en_def": "to find a number or amount by using math",
    "cn_def": "計算"
  },
  "figure": {
    "pos": "n.",
    "en_def": "a number, especially an official amount",
    "cn_def": "數字；數據"
  },
  "tough time": {
    "pos": "n.phr.",
    "en_def": "a difficult period or experience",
    "cn_def": "艱難時期；很吃力"
  },
  "schoolboy error": {
    "pos": "n.phr.",
    "en_def": "a very simple and silly mistake",
    "cn_def": "低級錯誤"
  },
  "ignorant": {
    "pos": "adj.",
    "en_def": "not knowing about something",
    "cn_def": "無知的；不了解的"
  },
  "slow-learner": {
    "pos": "n.",
    "en_def": "a person who needs more time to learn things",
    "cn_def": "學得慢的人"
  },
  "inherit": {
    "pos": "v.",
    "en_def": "to receive something from a parent or from the person who had a job before you",
    "cn_def": "繼承；接手"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on something",
    "cn_def": "影響"
  },
  "stagnate": {
    "pos": "v.",
    "en_def": "to stop growing or developing",
    "cn_def": "停滯"
  },
  "associate": {
    "pos": "v.",
    "en_def": "to connect one thing with another in your mind",
    "cn_def": "聯想；把……聯繫在一起"
  },
  "loathe": {
    "pos": "v.",
    "en_def": "to hate something very much",
    "cn_def": "厭惡；非常討厭"
  },
  "add up": {
    "pos": "v.phr.",
    "en_def": "to put numbers together to find the total",
    "cn_def": "加總；合計"
  },
  "arithmetic": {
    "pos": "n.",
    "en_def": "basic math with numbers, such as adding and subtracting",
    "cn_def": "算術"
  },
  "addition": {
    "pos": "n.",
    "en_def": "the process of adding numbers together",
    "cn_def": "加法"
  },
  "subtraction": {
    "pos": "n.",
    "en_def": "the process of taking one number away from another",
    "cn_def": "減法"
  },
  "taking away": {
    "pos": "n.phr.",
    "en_def": "an informal, simple way of saying subtraction",
    "cn_def": "拿走；減去"
  },
  "multiplication": {
    "pos": "n.",
    "en_def": "adding a number to itself a certain number of times, such as 3 × 4",
    "cn_def": "乘法"
  },
  "multiplication table": {
    "pos": "n.phr.",
    "en_def": "a list that shows the results of multiplying numbers",
    "cn_def": "乘法表；九九乘法表"
  },
  "division": {
    "pos": "n.",
    "en_def": "finding how many times one number goes into another",
    "cn_def": "除法"
  },
  "long division": {
    "pos": "n.phr.",
    "en_def": "a written way of dividing large numbers step by step",
    "cn_def": "長除法"
  },
  "decimal": {
    "pos": "n.",
    "en_def": "a number written with a dot, such as 2.5",
    "cn_def": "小數"
  },
  "fraction": {
    "pos": "n.",
    "en_def": "a part of a whole number, such as ½; a small part of something",
    "cn_def": "分數；一小部分"
  },
  "algebra": {
    "pos": "n.",
    "en_def": "math that uses letters and symbols to stand for numbers",
    "cn_def": "代數"
  },
  "geometry": {
    "pos": "n.",
    "en_def": "math about shapes, lines, angles, and space",
    "cn_def": "幾何學"
  },
  "proportion": {
    "pos": "n.",
    "en_def": "a part of a total; the relationship in size between two things",
    "cn_def": "比例"
  },
  "rates of change": {
    "pos": "n.phr.",
    "en_def": "how fast one amount changes compared with another",
    "cn_def": "變化率"
  }
};

const EXTRA_GLOSSES = {};
