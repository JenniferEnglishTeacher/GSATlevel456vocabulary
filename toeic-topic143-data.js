// Topic 143 Quiz Data: Flowchart 流程圖
// Source word list: https://www.examword.com/group-topic/flowchart — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T143 - Flowchart 流程圖",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；架構",
    "en_def": "the way the parts of something are arranged or organized",
    "sentence": "A: Why does the new manager want us to redraw the flowchart for the ordering system before Friday's meeting with the finance team? B: She thinks the current {{BLANK}} is too confusing, because the steps jump from one department to another, so she wants a clearer design that new staff can follow easily.",
    "cn": "A：為什麼新經理要我們在週五和財務團隊開會前重新畫訂購系統的流程圖？ B：她認為目前的【結構】太混亂了，因為步驟在不同部門之間跳來跳去，所以她想要一個新進員工能輕鬆遵循的更清楚的設計。"
  },
  {
    "word": "flow",
    "pos": "n.",
    "cn_def": "流動；流程",
    "en_def": "the smooth movement of something from one step to the next",
    "sentence": "A: How can we make sure that customer complaints don't get lost between the call center and the repair department anymore? B: Let's draw a chart that shows the {{BLANK}} of each complaint from the first phone call to the final repair, so everyone can see exactly where the delays happen.",
    "cn": "A：我們要怎麼確保客戶的投訴不會再在客服中心和維修部門之間遺失？ B：我們來畫一張圖，顯示每件投訴從第一通電話到最後維修的【流程】，這樣每個人都能清楚看到延誤發生在哪裡。"
  },
  {
    "word": "process",
    "pos": "n.",
    "cn_def": "過程；程序",
    "en_def": "a series of steps that you follow to get a result",
    "sentence": "A: Why do new employees always take so long to get their laptops and email accounts set up during their first week here? B: The whole {{BLANK}} has twelve steps and needs three different signatures, so the IT manager is making a simple flowchart to show which steps we can remove.",
    "cn": "A：為什麼新進員工在第一週總是要花那麼久才能設定好筆電和電子郵件帳號？ B：整個【程序】有十二個步驟，還需要三個不同的簽名，所以資訊經理正在做一張簡單的流程圖，標出哪些步驟可以刪掉。"
  },
  {
    "word": "relationship",
    "pos": "n.",
    "cn_def": "關係",
    "en_def": "the way two or more things are connected",
    "sentence": "A: What did the consultant mean when she said our sales chart was missing something important during yesterday's meeting? B: She meant that the chart doesn't show the {{BLANK}} between the marketing team and the sales team, so readers can't see how one department's work affects the other's results.",
    "cn": "A：昨天開會時顧問說我們的銷售圖表少了重要的東西，她是什麼意思？ B：她的意思是圖表沒有呈現行銷團隊和業務團隊之間的【關係】，所以讀者看不出一個部門的工作如何影響另一個部門的成果。"
  },
  {
    "word": "component",
    "pos": "n.",
    "cn_def": "組成部分；零件",
    "en_def": "one of the parts that together make a machine or system",
    "sentence": "A: Why is the engineer putting so many small boxes on the diagram of the new coffee machine that we are going to sell next spring? B: Each box stands for one {{BLANK}} of the machine, such as the water tank or the heater, so the repair staff can find problems quickly.",
    "cn": "A：為什麼工程師要在我們明年春天要賣的新咖啡機示意圖上畫那麼多小方框？ B：每個方框代表機器的一個【零件】，例如水箱或加熱器，這樣維修人員就能很快找到問題。"
  },
  {
    "word": "layout",
    "pos": "n.",
    "cn_def": "版面配置；布局",
    "en_def": "the way things are arranged on a page or in a space",
    "sentence": "A: Did the printing company say anything about the poster that shows our new safety steps for the factory workers? B: Yes, they said the {{BLANK}} is too crowded, because the arrows cross each other and the text is very small, so we should move some boxes and leave more white space.",
    "cn": "A：印刷公司對那張顯示工廠工人新安全步驟的海報有說什麼嗎？ B：有，他們說【版面配置】太擁擠了，因為箭頭互相交叉，文字也很小，所以我們應該移動一些方框，留更多空白。"
  },
  {
    "word": "connection",
    "pos": "n.",
    "cn_def": "連結；關聯",
    "en_def": "something that joins two things or shows that they are related",
    "sentence": "A: Why did the new trainee draw a long arrow from the warehouse box to the customer service box on the flowchart this morning? B: He wanted to show the {{BLANK}} between the two teams, because late shipments from the warehouse usually cause angry calls to customer service the next day.",
    "cn": "A：為什麼新來的實習生今天早上在流程圖上從倉庫方框畫了一條長箭頭到客服方框？ B：他想呈現這兩個團隊之間的【關聯】，因為倉庫延遲出貨通常會在隔天引來打給客服的憤怒電話。"
  },
  {
    "word": "sequence",
    "pos": "n.",
    "cn_def": "順序；次序",
    "en_def": "the order in which things happen or are arranged",
    "sentence": "A: Why did several new workers make mistakes when they packed the online orders in the warehouse last week? B: The instructions on the wall listed the steps in the wrong {{BLANK}}, so people sealed the boxes before checking the items, and now the supervisor is fixing the chart.",
    "cn": "A：為什麼上週有好幾個新員工在倉庫包裝網路訂單時出錯？ B：牆上的說明把步驟列成錯誤的【順序】，所以大家在檢查商品之前就把箱子封起來了，現在主管正在修正那張圖表。"
  },
  {
    "word": "hierarchy",
    "pos": "n.",
    "cn_def": "階層；層級制度",
    "en_def": "a system in which people or things are ranked from highest to lowest",
    "sentence": "A: How will the new staff in our Taipei branch know who they should report to when there is a problem with a client? B: The human resources team made a chart that shows the company {{BLANK}}, from the general manager at the top down to the junior assistants at the bottom.",
    "cn": "A：我們台北分公司的新員工和客戶出問題時，要怎麼知道該向誰報告？ B：人資團隊做了一張圖，顯示公司的【層級制度】，從最上面的總經理一直到最下面的初級助理。"
  },
  {
    "word": "node",
    "pos": "n.",
    "cn_def": "節點",
    "en_def": "a point in a diagram where lines meet or connect",
    "sentence": "A: What should I do with this small circle in the middle of the network diagram that the engineers sent us yesterday afternoon? B: That circle is a {{BLANK}}, which is the point where two lines meet, so please write the office name inside it before you print the final copy.",
    "cn": "A：工程師昨天下午寄給我們的網路圖中間這個小圓圈，我該怎麼處理？ B：那個圓圈是一個【節點】，也就是兩條線交會的地方，所以在印出最終版本前，請把辦公室名稱寫在裡面。"
  },
  {
    "word": "path",
    "pos": "n.",
    "cn_def": "路徑；路線",
    "en_def": "the way or route from one point to another",
    "sentence": "A: Why does the flowchart for refund requests have two different arrows coming out of the diamond in the middle? B: Each arrow shows a different {{BLANK}}, so if the customer has a receipt, the request goes left to the cashier, and if not, it goes right to the store manager.",
    "cn": "A：為什麼退款申請的流程圖中間的菱形會延伸出兩個不同的箭頭？ B：每個箭頭顯示不同的【路徑】，所以如果客人有收據，申請就往左交給收銀員；如果沒有，就往右交給店長。"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "符號",
    "en_def": "a sign or shape that stands for an idea or action",
    "sentence": "A: Why did the trainer ask everyone to learn the shapes on the first page of the handbook before the workshop started this morning? B: Each {{BLANK}} has a special meaning in a flowchart, for example, an oval means start or end and a diamond means a decision.",
    "cn": "A：為什麼培訓師在今天早上工作坊開始前要大家先學會手冊第一頁上的圖形？ B：每個【符號】在流程圖中都有特別的意思，例如橢圓形代表開始或結束，菱形代表做決定。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤；標示",
    "en_def": "a short word or name that tells what something is",
    "sentence": "A: The boxes on this chart all look the same, so how will the new cashiers know which step is which during their training next Monday? B: I'll add a clear {{BLANK}} to each box, such as Scan Item or Take Payment, so they can understand every step at a glance.",
    "cn": "A：這張圖上的方框看起來都一樣，新收銀員在下週一的訓練中要怎麼知道哪個是哪個步驟？ B：我會在每個方框加上清楚的【標示】，例如「掃描商品」或「收款」，讓他們一眼就能看懂每個步驟。"
  },
  {
    "word": "annotation",
    "pos": "n.",
    "cn_def": "註解；註釋",
    "en_def": "a short note added to a text or diagram to explain something",
    "sentence": "A: The new process chart looks fine, but how will the night shift workers know what to do when the computer system suddenly stops working? B: I wrote a short {{BLANK}} next to that step in red, which explains that they should call the IT hotline and record the orders by hand.",
    "cn": "A：新的流程圖看起來沒問題，但夜班員工在電腦系統突然當機時要怎麼知道該做什麼？ B：我在那個步驟旁邊用紅字寫了一則簡短的【註解】，說明他們應該打資訊部的熱線，並用手寫記錄訂單。"
  },
  {
    "word": "overview",
    "pos": "n.",
    "cn_def": "概要；概觀",
    "en_def": "a short description that gives the main ideas but not the details",
    "sentence": "A: The directors only have ten minutes for our project at the board meeting tomorrow, so should I explain every step of the new system? B: No, just give them a quick {{BLANK}} with one simple chart, and then email the detailed report to anyone who wants more information afterward.",
    "cn": "A：明天董事會上董事們只有十分鐘聽我們的專案，我應該解釋新系統的每一個步驟嗎？ B：不用，只要用一張簡單的圖表給他們一個快速的【概要】，之後再把詳細報告寄給想知道更多的人。"
  },
  {
    "word": "visual",
    "pos": "n.",
    "cn_def": "視覺輔助（圖表、圖片等）",
    "en_def": "a picture, chart, or video used to help explain something",
    "sentence": "A: My presentation about the new delivery system is full of long sentences, and I'm afraid the clients will get bored halfway through it. B: You should add a {{BLANK}}, such as a colorful chart or a short video, because people remember pictures much better than words on a slide.",
    "cn": "A：我關於新配送系統的簡報充滿了長句子，我怕客戶聽到一半就會覺得無聊。 B：你應該加入【視覺輔助】，例如彩色圖表或短片，因為人們記得圖片的效果遠比投影片上的文字好。"
  },
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清晰；明確",
    "en_def": "the quality of being clear and easy to understand",
    "sentence": "A: Why did the manager ask us to remove half of the arrows and colors from the customer service flowchart last week? B: She said the chart needed more {{BLANK}}, because the staff were confused by too many details and could not quickly see what to do next.",
    "cn": "A：為什麼經理上週要我們刪掉客服流程圖上一半的箭頭和顏色？ B：她說這張圖需要更【清晰】，因為員工被太多細節搞混了，沒辦法快速看出下一步該做什麼。"
  },
  {
    "word": "mapping",
    "pos": "n.",
    "cn_def": "繪製（流程）圖；對應規劃",
    "en_def": "the act of drawing or planning how the parts or steps of something are arranged",
    "sentence": "A: How did the hospital reduce the waiting time for patients at the front desk by almost half this year? B: They started with careful process {{BLANK}}, drawing every step from check-in to payment, and then they removed the steps that were slow or unnecessary.",
    "cn": "A：醫院今年是怎麼把病患在櫃台的等候時間減少將近一半的？ B：他們從仔細的流程【繪製】開始，畫出從報到到付款的每一個步驟，然後刪掉那些緩慢或不必要的步驟。"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "cn_def": "圖解；說明；畫插圖",
    "en_def": "to explain or show something with pictures or examples",
    "sentence": "A: The new interns still don't understand how an order moves from our website to the warehouse, even after reading the manual twice. B: Then let's use a simple flowchart to {{BLANK}} each step, because pictures and arrows usually make complicated ideas much easier for beginners to follow.",
    "cn": "A：新來的實習生即使讀了兩次手冊，還是不懂訂單是怎麼從我們的網站傳到倉庫的。 B：那我們就用一張簡單的流程圖來【圖解】每個步驟，因為圖片和箭頭通常能讓初學者更容易理解複雜的概念。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "組織；整理；籌辦",
    "en_def": "to arrange things in a clear order or system",
    "sentence": "A: I have so many notes from the planning meeting that I don't know where to begin with the project report for the director. B: Try to {{BLANK}} your ideas into a flowchart first, putting the main tasks in boxes and linking them with arrows, and then writing will be much easier.",
    "cn": "A：我從規劃會議記下的筆記太多了，不知道要從哪裡開始寫給主任的專案報告。 B：先試著把你的想法【整理】成一張流程圖，把主要任務放進方框並用箭頭連接起來，這樣寫起來就會容易得多。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear and easy to understand",
    "sentence": "A: Our new customers keep calling the help line because they don't know how to return a broken product they bought online. B: We should put a short chart on our website to {{BLANK}} the return steps, and that will probably reduce the number of calls we get every day.",
    "cn": "A：我們的新客戶一直打客服專線，因為他們不知道怎麼退回在網路上買到的壞掉商品。 B：我們應該在網站上放一張簡短的圖表來【說明】退貨步驟，這樣大概能減少我們每天接到的電話數量。"
  },
  {
    "word": "simplify",
    "pos": "v.",
    "cn_def": "簡化",
    "en_def": "to make something easier to do or understand",
    "sentence": "A: Why are customers complaining that it takes over twenty minutes to open a new account at our bank branch? B: The form has too many steps and repeated questions, so the operations team is drawing a flowchart to {{BLANK}} the whole procedure and cut the waiting time.",
    "cn": "A：為什麼客戶抱怨在我們分行開新帳戶要花超過二十分鐘？ B：表格的步驟太多、問題又重複，所以營運團隊正在畫一張流程圖，要【簡化】整個程序並縮短等候時間。"
  },
  {
    "word": "framework",
    "pos": "n.",
    "cn_def": "架構；框架",
    "en_def": "a basic structure of ideas used to plan or decide something",
    "sentence": "A: How should we start planning the training program for the new sales staff who are joining us in January? B: Let's first build a simple {{BLANK}} with the main topics and goals for each week, and then we can add the details, activities, and trainers' names later.",
    "cn": "A：我們要怎麼開始規劃一月加入的新業務人員的訓練課程？ B：我們先建立一個簡單的【架構】，列出每週的主要主題和目標，之後再加上細節、活動和講師的名字。"
  },
  {
    "word": "model",
    "pos": "n.",
    "cn_def": "模型；模式",
    "en_def": "a simple copy or description of a system, used to explain or test it",
    "sentence": "A: Before we spend money on the new delivery system, how can we know whether it will really save time for our drivers? B: The planning team built a computer {{BLANK}} of the delivery routes, so we can test different ideas and compare the results before making a final decision.",
    "cn": "A：在我們花錢買新的配送系統之前，要怎麼知道它真的能幫司機節省時間？ B：規劃團隊建立了一個配送路線的電腦【模型】，所以我們可以在做最後決定之前測試不同的想法並比較結果。"
  },
  {
    "word": "alignment",
    "pos": "n.",
    "cn_def": "對齊；排列整齊",
    "en_def": "the state of being arranged in a straight or correct line",
    "sentence": "A: I've checked every step and arrow carefully, so why does the flowchart still look a little messy on the slide? B: The {{BLANK}} of the boxes is not right, because some are a bit higher than others, so please line them up neatly before the client meeting this afternoon.",
    "cn": "A：我已經仔細檢查過每個步驟和箭頭了，為什麼投影片上的流程圖看起來還是有點亂？ B：方框的【對齊】不對，因為有些比其他的高一點，所以請在今天下午和客戶開會前把它們排整齊。"
  },
  {
    "word": "interaction",
    "pos": "n.",
    "cn_def": "互動；相互作用",
    "en_def": "the way people or things communicate or work together",
    "sentence": "A: Why does the new customer service chart include the sales team, the warehouse, and the delivery drivers all on one page? B: It shows the {{BLANK}} between all three groups, so managers can see how each team's actions affect the others when a customer places an urgent order.",
    "cn": "A：為什麼新的客服流程圖把業務團隊、倉庫和送貨司機都放在同一頁？ B：它呈現這三個群體之間的【互動】，讓經理能看到當客戶下緊急訂單時，每個團隊的行動如何影響其他團隊。"
  },
  {
    "word": "comparison",
    "pos": "n.",
    "cn_def": "比較",
    "en_def": "the act of looking at two or more things to see how they are similar or different",
    "sentence": "A: Why did the operations manager put the old ordering steps and the new ordering steps side by side on the same slide? B: She wanted to make a clear {{BLANK}}, so the directors could easily see that the new system has fewer steps and takes less time.",
    "cn": "A：為什麼營運經理把舊的訂購步驟和新的訂購步驟並排放在同一張投影片上？ B：她想做一個清楚的【比較】，讓董事們能輕易看出新系統的步驟比較少，也比較省時間。"
  },
  {
    "word": "visualization",
    "pos": "n.",
    "cn_def": "視覺化（呈現）",
    "en_def": "a picture or chart that shows information so that it is easy to see and understand",
    "sentence": "A: The sales report has hundreds of numbers from twelve different stores, so how can the regional manager understand it quickly before the meeting? B: The data team created a {{BLANK}} with colorful charts and a simple flow diagram, so she can see the strongest and weakest stores in seconds.",
    "cn": "A：銷售報告裡有來自十二家分店的幾百個數字，區域經理要怎麼在開會前快速看懂？ B：數據團隊製作了一份有彩色圖表和簡單流程圖的【視覺化呈現】，讓她幾秒鐘內就能看出表現最好和最差的分店。"
  }
];

const MCQS = [
  {
    "q": "The report has a clear _____ with an introduction, three main sections, and a summary. Readers can easily find the information they need.",
    "options": [
      "node",
      "annotation",
      "comparison",
      "structure"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The new office design improves the _____ of people through the building. Visitors no longer get lost between the lobby and the meeting rooms.",
    "options": [
      "flow",
      "label",
      "hierarchy",
      "symbol"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Applying for a business visa is a long _____. It can take up to six weeks to collect the documents and get approval.",
    "options": [
      "node",
      "process",
      "label",
      "visual"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Our survey found a strong _____ between staff training and customer satisfaction. Stores that trained more often received better reviews.",
    "options": [
      "layout",
      "symbol",
      "relationship",
      "overview"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The battery is the most expensive _____ of an electric car. Engineers are working hard to make it cheaper and lighter.",
    "options": [
      "overview",
      "clarity",
      "path",
      "component"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Customers complained that the online shop was hard to use. The designers changed the _____ so the search bar appears at the top of every page.",
    "options": [
      "layout",
      "comparison",
      "interaction",
      "annotation"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The artist was hired to _____ the new children's book. She drew more than forty colorful pictures for its pages.",
    "options": [
      "organize",
      "illustrate",
      "explain",
      "simplify"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The hotel offers a free internet _____ in every room. Guests only need the password printed on their room key card.",
    "options": [
      "hierarchy",
      "overview",
      "connection",
      "symbol"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The dance teacher showed the students a _____ of six simple moves. They practiced the moves in order until they could do them without stopping.",
    "options": [
      "sequence",
      "clarity",
      "label",
      "framework"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "In many traditional companies, there is a strict _____ of managers. Junior staff rarely speak directly to the company president.",
    "options": [
      "visual",
      "annotation",
      "node",
      "hierarchy"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Each office computer is a _____ in the company network. If one stops working, the others can still share files.",
    "options": [
      "overview",
      "clarity",
      "node",
      "comparison"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Our team will _____ the year-end party at a hotel near the office. We need to book the room, order food, and send invitations.",
    "options": [
      "explain",
      "organize",
      "illustrate",
      "simplify"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Please keep to the marked _____ when you walk through the factory. The areas near the machines are dangerous for visitors.",
    "options": [
      "label",
      "model",
      "path",
      "alignment"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "On the map, a small red cross is the _____ for a hospital. Drivers can use it to find medical help quickly.",
    "options": [
      "symbol",
      "framework",
      "interaction",
      "flow"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Please check the _____ on the box before you sign for the delivery. It shows the customer's name and the order number.",
    "options": [
      "alignment",
      "comparison",
      "hierarchy",
      "label"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The editor wrote an _____ in the margin of the report. It explained that two of the sales figures needed to be checked again.",
    "options": [
      "overview",
      "annotation",
      "interaction",
      "alignment"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Could you please _____ why the shipment is three days late? The client wants a clear reason before the end of today.",
    "options": [
      "explain",
      "simplify",
      "organize",
      "illustrate"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The first chapter of the handbook gives a short _____ of the company. Later chapters explain each department's rules in detail.",
    "options": [
      "node",
      "overview",
      "symbol",
      "alignment"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The speaker used a simple _____ to show how sales grew over five years. The audience understood the trend in just a few seconds.",
    "options": [
      "hierarchy",
      "node",
      "visual",
      "path"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The new manual is written with great _____. Even workers who have never used the machine can follow the instructions easily.",
    "options": [
      "node",
      "hierarchy",
      "component",
      "clarity"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Before the move, the team did careful _____ of every shelf in the new warehouse. This helped them find items quickly.",
    "options": [
      "mapping",
      "clarity",
      "label",
      "symbol"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new app will _____ the ordering steps from ten clicks to just three. Customers will find buying online much faster.",
    "options": [
      "organize",
      "illustrate",
      "explain",
      "simplify"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The government created a legal _____ for online businesses. It sets basic rules that every e-commerce company must follow.",
    "options": [
      "node",
      "framework",
      "label",
      "visual"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Before building the new shopping mall, the architects showed the city council a small _____ of it. Council members could see the whole design from above.",
    "options": [
      "clarity",
      "path",
      "model",
      "annotation"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The printer is producing crooked pages again. A technician will come this afternoon to fix the _____ of the paper tray.",
    "options": [
      "alignment",
      "overview",
      "hierarchy",
      "relationship"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new online store allows direct _____ between customers and sales staff through live chat. Shoppers can get answers within seconds.",
    "options": [
      "layout",
      "symbol",
      "interaction",
      "node"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The website offers a quick price _____ of the three phone plans. Customers can easily see which plan is the cheapest.",
    "options": [
      "hierarchy",
      "node",
      "annotation",
      "comparison"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The data team turned the long sales report into a clear _____. Managers could understand the results by looking at one colorful chart.",
    "options": [
      "hierarchy",
      "visualization",
      "alignment",
      "path"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The company is updating its hiring _____ this year. Applicants will now complete an online test before the first interview.",
    "options": [
      "symbol",
      "node",
      "process",
      "clarity"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The numbers on the tickets follow a simple _____ from 001 to 500. Please give them out in order at the entrance.",
    "options": [
      "layout",
      "clarity",
      "component",
      "sequence"
    ],
    "answer": 3,
    "vocabIndex": 7
  }
];

const LOOKUP = {
  "structure": {
    "pos": "n.",
    "en_def": "the way the parts of something are arranged or organized",
    "cn_def": "結構；架構"
  },
  "flow": {
    "pos": "n.",
    "en_def": "the smooth movement of something from one step to the next",
    "cn_def": "流動；流程"
  },
  "process": {
    "pos": "n.",
    "en_def": "a series of steps that you follow to get a result",
    "cn_def": "過程；程序"
  },
  "relationship": {
    "pos": "n.",
    "en_def": "the way two or more things are connected",
    "cn_def": "關係"
  },
  "component": {
    "pos": "n.",
    "en_def": "one of the parts that together make a machine or system",
    "cn_def": "組成部分；零件"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way things are arranged on a page or in a space",
    "cn_def": "版面配置；布局"
  },
  "connection": {
    "pos": "n.",
    "en_def": "something that joins two things or shows that they are related",
    "cn_def": "連結；關聯"
  },
  "sequence": {
    "pos": "n.",
    "en_def": "the order in which things happen or are arranged",
    "cn_def": "順序；次序"
  },
  "hierarchy": {
    "pos": "n.",
    "en_def": "a system in which people or things are ranked from highest to lowest",
    "cn_def": "階層；層級制度"
  },
  "node": {
    "pos": "n.",
    "en_def": "a point in a diagram where lines meet or connect",
    "cn_def": "節點"
  },
  "path": {
    "pos": "n.",
    "en_def": "the way or route from one point to another",
    "cn_def": "路徑；路線"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a sign or shape that stands for an idea or action",
    "cn_def": "符號"
  },
  "label": {
    "pos": "n.",
    "en_def": "a short word or name that tells what something is",
    "cn_def": "標籤；標示"
  },
  "annotation": {
    "pos": "n.",
    "en_def": "a short note added to a text or diagram to explain something",
    "cn_def": "註解；註釋"
  },
  "overview": {
    "pos": "n.",
    "en_def": "a short description that gives the main ideas but not the details",
    "cn_def": "概要；概觀"
  },
  "visual": {
    "pos": "n.",
    "en_def": "a picture, chart, or video used to help explain something",
    "cn_def": "視覺輔助（圖表、圖片等）"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清晰；明確"
  },
  "mapping": {
    "pos": "n.",
    "en_def": "the act of drawing or planning how the parts or steps of something are arranged",
    "cn_def": "繪製（流程）圖；對應規劃"
  },
  "illustrate": {
    "pos": "v.",
    "en_def": "to explain or show something with pictures or examples",
    "cn_def": "圖解；說明；畫插圖"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to arrange things in a clear order or system",
    "cn_def": "組織；整理；籌辦"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear and easy to understand",
    "cn_def": "解釋；說明"
  },
  "simplify": {
    "pos": "v.",
    "en_def": "to make something easier to do or understand",
    "cn_def": "簡化"
  },
  "framework": {
    "pos": "n.",
    "en_def": "a basic structure of ideas used to plan or decide something",
    "cn_def": "架構；框架"
  },
  "model": {
    "pos": "n.",
    "en_def": "a simple copy or description of a system, used to explain or test it",
    "cn_def": "模型；模式"
  },
  "alignment": {
    "pos": "n.",
    "en_def": "the state of being arranged in a straight or correct line",
    "cn_def": "對齊；排列整齊"
  },
  "interaction": {
    "pos": "n.",
    "en_def": "the way people or things communicate or work together",
    "cn_def": "互動；相互作用"
  },
  "comparison": {
    "pos": "n.",
    "en_def": "the act of looking at two or more things to see how they are similar or different",
    "cn_def": "比較"
  },
  "visualization": {
    "pos": "n.",
    "en_def": "a picture or chart that shows information so that it is easy to see and understand",
    "cn_def": "視覺化（呈現）"
  }
};

const EXTRA_GLOSSES = {};
