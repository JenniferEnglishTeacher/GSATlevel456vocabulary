// Topic 104 Quiz Data: Diagram & Chart 圖表
// Source word list: https://www.examword.com/group-topic/diagram-chart — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T104 - Diagram & Chart 圖表",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "illustration",
    "pos": "n.",
    "cn_def": "插圖；圖解",
    "en_def": "a picture or drawing that helps explain something",
    "sentence": "A: Why did the marketing team decide to add a picture to the first page of the new product brochure, even though the printing cost will go up a little? B: They found that customers often skip long paragraphs, so a clear {{BLANK}} of the machine helps readers understand how it works before they read the details.",
    "cn": "A：為什麼行銷團隊決定在新產品手冊的第一頁加上一張圖，即使印刷成本會稍微增加？ B：他們發現顧客常常跳過長段落，所以一張清楚的機器【插圖】能幫助讀者在閱讀細節之前先了解它如何運作。"
  },
  {
    "word": "visual",
    "pos": "adj.",
    "cn_def": "視覺的",
    "en_def": "related to seeing or pictures",
    "sentence": "A: Do you think I should send the sales figures as a long spreadsheet, or is there a better way to share them with the managers before Friday's meeting? B: Most of our managers are very busy and prefer {{BLANK}} information, so I'd turn the numbers into a few simple charts that they can understand in just a few seconds.",
    "cn": "A：你覺得我應該把銷售數字用一份很長的試算表寄出去，還是有更好的方式在星期五開會前分享給經理們？ B：我們大部分的經理都很忙，比較喜歡【視覺的】資訊，所以我會把數字轉換成幾張簡單的圖表，讓他們幾秒鐘就能看懂。"
  },
  {
    "word": "example",
    "pos": "n.",
    "cn_def": "例子；範例",
    "en_def": "something that shows what others of the same kind are like",
    "sentence": "A: The new employees still seem confused about how to fill out the monthly expense report, so what can we do to help them during tomorrow's training session? B: Let's show them a completed form as an {{BLANK}}, and then we can walk through each section together so they can see exactly what information goes where.",
    "cn": "A：新員工對於如何填寫每月費用報告似乎還是很困惑，我們在明天的訓練課程中可以怎麼幫助他們？ B：我們拿一份填好的表格給他們當作【範例】，然後一起逐一說明每個部分，讓他們清楚知道哪些資訊該填在哪裡。"
  },
  {
    "word": "concept",
    "pos": "n.",
    "cn_def": "概念",
    "en_def": "a general idea about something",
    "sentence": "A: How did the designer present her idea for the new office layout when she met the board of directors last week? B: She started with a simple drawing that showed the basic {{BLANK}} of an open workspace, and then she explained how shared tables and quiet rooms would help different teams work together more easily.",
    "cn": "A：上週設計師和董事會開會時，她是如何呈現新辦公室格局的構想？ B：她先用一張簡單的圖畫說明開放式工作空間的基本【概念】，接著解釋共用桌和安靜室如何讓不同團隊更容易合作。"
  },
  {
    "word": "explanation",
    "pos": "n.",
    "cn_def": "解釋；說明",
    "en_def": "words that make something clear or give a reason",
    "sentence": "A: Why did the finance director ask Mark to stay after the meeting, even though his budget report was finished on time? B: Some of the numbers in his chart were much higher than last year, so she wanted a clear {{BLANK}} of why the travel costs had increased before she sends the report to head office.",
    "cn": "A：為什麼財務總監要馬克在會後留下來，即使他的預算報告準時完成了？ B：他圖表中的一些數字比去年高出很多，所以她在把報告送到總公司之前，想要一個清楚的【說明】，了解差旅費為什麼增加。"
  },
  {
    "word": "representation",
    "pos": "n.",
    "cn_def": "表示；呈現",
    "en_def": "a picture or sign that shows or stands for something",
    "sentence": "A: Why does the map in the annual report show our branch offices as small colored circles instead of photos of each building? B: The circles are a simple {{BLANK}} of each office, and their size shows how many employees work there, so readers can compare the locations quickly without reading a long list.",
    "cn": "A：為什麼年度報告中的地圖用彩色小圓圈來標示我們的分公司，而不是放每棟建築的照片？ B：圓圈是每間辦公室的簡單【呈現方式】，圓圈大小顯示那裡有多少員工，讓讀者不必看一長串名單就能快速比較各地點。"
  },
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清晰；明確",
    "en_def": "the quality of being clear and easy to understand",
    "sentence": "A: What did the trainer say about the slides you prepared for the safety workshop, and do you need to change many of them before next Monday? B: She liked the content, but she said some slides had too much text and too many colors, so I need to improve the {{BLANK}} of each page by keeping only the most important points.",
    "cn": "A：訓練師對你為安全研習準備的投影片有什麼意見？你下週一之前需要修改很多張嗎？ B：她喜歡內容，但她說有些投影片文字太多、顏色太雜，所以我需要只保留最重要的重點，來提升每一頁的【清晰度】。"
  },
  {
    "word": "diagram",
    "pos": "n.",
    "cn_def": "圖表；示意圖",
    "en_def": "a simple drawing that shows how something works or is arranged",
    "sentence": "A: The new technicians keep asking me where each cable should go when they set up the meeting room equipment, so is there anything that could help them? B: Why don't you draw a simple {{BLANK}} that shows how the projector, speakers, and computer connect, and then put a copy on the wall next to the equipment cabinet?",
    "cn": "A：新來的技術人員在架設會議室設備時一直問我每條線該接到哪裡，有什麼東西可以幫助他們嗎？ B：你何不畫一張簡單的【示意圖】，顯示投影機、喇叭和電腦如何連接，然後在設備櫃旁的牆上貼一份？"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "cn_def": "符號；象徵",
    "en_def": "a sign or picture that stands for an idea",
    "sentence": "A: Why is there a small green leaf next to some of the products in our online catalog, and do customers really understand what it means? B: That {{BLANK}} shows which items are made from recycled materials, and our survey found that many shoppers look for it because they want to buy products that are better for the environment.",
    "cn": "A：為什麼我們線上型錄裡有些產品旁邊有一片綠色小葉子？顧客真的懂它的意思嗎？ B：那個【符號】表示哪些商品是用回收材料製成的，我們的調查發現很多購物者會特別找它，因為他們想買對環境比較好的產品。"
  },
  {
    "word": "icon",
    "pos": "n.",
    "cn_def": "圖示",
    "en_def": "a small picture on a screen that you click to do something",
    "sentence": "A: I can't find the button to share the monthly report with the rest of the team in this new software, so could you show me where it is? B: Sure, just look at the top right corner of the screen and click the small {{BLANK}} that looks like an arrow, and then you can type the names of the people who need the file.",
    "cn": "A：我在這個新軟體裡找不到把月報分享給團隊其他人的按鈕，你可以告訴我在哪裡嗎？ B：當然，看螢幕右上角，點那個像箭頭的小【圖示】，然後就可以輸入需要這個檔案的人的名字。"
  },
  {
    "word": "annotation",
    "pos": "n.",
    "cn_def": "註解；註釋",
    "en_def": "a short note added to explain a picture or text",
    "sentence": "A: The client said our chart about online sales was hard to understand, so how should we change it before we send the final version tomorrow morning? B: We could add a short {{BLANK}} next to each sudden rise or drop in the line, explaining what happened that month, such as a holiday sale or a problem with the website.",
    "cn": "A：客戶說我們的線上銷售圖表很難懂，在明天早上寄出最終版本之前，我們該怎麼修改？ B：我們可以在線條每次突然上升或下降的地方加上簡短的【註解】，說明那個月發生了什麼事，例如假期特賣或網站出問題。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤；標示",
    "en_def": "a word or short text that names a part of something",
    "sentence": "A: Why did the manager ask us to redo the pie chart for the quarterly report when the colors and numbers were already correct? B: Each slice of the chart needs a clear {{BLANK}} with the name of the region, because without one, readers couldn't tell which color stood for Asia and which stood for Europe.",
    "cn": "A：顏色和數字都已經正確了，為什麼經理還要我們重做季報裡的圓餅圖？ B：圖表的每一塊都需要一個寫著區域名稱的清楚【標示】，因為沒有標示的話，讀者分不出哪個顏色代表亞洲、哪個代表歐洲。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "強調；突顯；標亮",
    "en_def": "to make something easy to notice; to show it is important",
    "sentence": "A: The board members will only have ten minutes to look at our long report before they vote, so how can we make sure they notice the main results? B: Let's use a bright yellow color to {{BLANK}} the three most important numbers in the summary table, so the members can see them immediately even if they don't read every page.",
    "cn": "A：董事們在投票前只有十分鐘看我們這份很長的報告，我們要怎麼確保他們注意到主要結果？ B：我們用亮黃色來【標亮】摘要表中最重要的三個數字，這樣即使他們沒有讀每一頁，也能馬上看到。"
  },
  {
    "word": "simplify",
    "pos": "v.",
    "cn_def": "簡化",
    "en_def": "to make something easier to understand or do",
    "sentence": "A: Our customers keep calling the help desk because they find the setup guide for the new printer too confusing, so what should we do about it? B: I think we should {{BLANK}} the instructions by using fewer technical words and adding a picture for each step, so that people can set up the machine by themselves.",
    "cn": "A：我們的顧客一直打電話到客服中心，因為他們覺得新印表機的安裝指南太難懂了，我們該怎麼辦？ B：我認為我們應該【簡化】說明，少用專業術語，並為每個步驟加上一張圖，讓大家可以自己安裝機器。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "示範；展示",
    "en_def": "to show how something works by doing it",
    "sentence": "A: Will the sales representative bring the new coffee machine to the office, or will she only show us a video about it during the meeting? B: She is bringing a sample machine, because she wants to {{BLANK}} how quickly it can make different drinks and how easy it is to clean after a busy morning in the break room.",
    "cn": "A：業務代表會把新咖啡機帶到辦公室嗎？還是她在會議中只會給我們看影片？ B：她會帶一台樣品機來，因為她想【示範】它能多快做出不同的飲品，以及在休息室忙碌的早上過後清潔起來有多容易。"
  },
  {
    "word": "explain",
    "pos": "v.",
    "cn_def": "解釋；說明",
    "en_def": "to make something clear by giving details or reasons",
    "sentence": "A: Several team members were confused by the new chart about overtime hours that you sent around yesterday afternoon, so what are you planning to do? B: I've booked the small meeting room for tomorrow morning, and I'll {{BLANK}} what each color and line means, and then I'll answer any questions they still have about their working hours.",
    "cn": "A：好幾位團隊成員對你昨天下午發出的加班時數新圖表感到困惑，你打算怎麼做？ B：我已經預約了明天早上的小會議室，我會【解釋】每個顏色和線條代表什麼，然後回答他們對工作時數還有的任何問題。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構；架構",
    "en_def": "the way the parts of something are organized",
    "sentence": "A: The new staff seem to have trouble knowing who they should report to, so how can we make this clearer for them during their first week? B: We could show them a chart of the company's {{BLANK}}, with each department in a box and lines that connect every team leader to the manager above them.",
    "cn": "A：新員工似乎搞不清楚自己該向誰報告，我們在他們第一週要怎麼讓這件事更清楚？ B：我們可以給他們看一張公司【組織架構】圖，每個部門用一個方框表示，並用線條把每位組長連到他們上面的經理。"
  },
  {
    "word": "layout",
    "pos": "n.",
    "cn_def": "版面配置；格局",
    "en_def": "the way things are arranged on a page or in a space",
    "sentence": "A: Did the printing company send us the first draft of the new event poster, and are you happy with the way it looks? B: Yes, they sent it this morning, but I'd like to change the {{BLANK}} a little, because the photo takes up too much space and the date and location are too small to read from far away.",
    "cn": "A：印刷公司寄來新活動海報的初稿了嗎？你滿意它的樣子嗎？ B：有，今天早上寄來了，但我想稍微調整一下【版面配置】，因為照片佔太多空間，而日期和地點太小，遠遠地看不清楚。"
  },
  {
    "word": "context",
    "pos": "n.",
    "cn_def": "背景；來龍去脈",
    "en_def": "the facts or situation around something that help you understand it",
    "sentence": "A: Why did you start your presentation with a short story about the company's history before you showed the new sales chart to the investors? B: I wanted to give them some {{BLANK}}, because the numbers only make sense when people know that we moved into a new market three years ago and needed time to grow.",
    "cn": "A：你在給投資人看新的銷售圖表之前，為什麼先用一段公司歷史的小故事開場？ B：我想先給他們一些【背景】，因為只有當大家知道我們三年前進入新市場、需要時間成長時，這些數字才說得通。"
  },
  {
    "word": "flow",
    "pos": "n.",
    "cn_def": "流程；流動",
    "en_def": "the steady movement of something from one place or step to the next",
    "sentence": "A: Why is the new chart on the factory wall covered with arrows that go from one box to the next? B: It shows the {{BLANK}} of materials through the factory, from the moment they arrive at the loading area until the finished products are packed, so workers can see where delays usually happen and how to avoid them.",
    "cn": "A：為什麼工廠牆上的新圖表佈滿了從一個方框指向下一個方框的箭頭？ B：它顯示原料在工廠內的【流動】過程，從抵達裝卸區那一刻起到成品包裝完成，讓工人看出延誤通常發生在哪裡以及如何避免。"
  },
  {
    "word": "sequence",
    "pos": "n.",
    "cn_def": "順序",
    "en_def": "the order in which things happen or are done",
    "sentence": "A: The new assistants keep making mistakes when they prepare the meeting room for video calls, so what would help them remember the right steps? B: Let's put up a simple chart with numbered pictures that shows the correct {{BLANK}}, starting with turning on the screen and ending with testing the microphone and camera before the guests arrive.",
    "cn": "A：新助理在為視訊會議準備會議室時一直出錯，有什麼能幫助他們記住正確步驟？ B：我們貼一張有編號圖片的簡單圖表，顯示正確的【順序】，從打開螢幕開始，到客人抵達前測試麥克風和攝影機為止。"
  },
  {
    "word": "comparison",
    "pos": "n.",
    "cn_def": "比較",
    "en_def": "the act of looking at two or more things to see how they are alike or different",
    "sentence": "A: Why did you put last year's sales figures next to this year's figures on the same slide instead of on two separate pages? B: A side-by-side {{BLANK}} makes it much easier for the managers to see how much each product has grown, and they won't need to keep going back and forth between the slides.",
    "cn": "A：你為什麼把去年和今年的銷售數字放在同一張投影片上，而不是分成兩頁？ B：並排【比較】讓經理們更容易看出每項產品成長了多少，他們也不需要在投影片之間來回切換。"
  },
  {
    "word": "emphasis",
    "pos": "n.",
    "cn_def": "強調；重點",
    "en_def": "special importance given to something",
    "sentence": "A: The new manager's report on customer service is very long, so what is the main message that she wants all the staff to remember? B: She puts special {{BLANK}} on answering emails within one working day, because the survey showed that slow replies were the biggest reason why customers felt unhappy with our company last year.",
    "cn": "A：新經理的客服報告非常長，她希望全體員工記住的主要訊息是什麼？ B：她特別【強調】要在一個工作天內回覆電子郵件，因為調查顯示，回覆太慢是去年顧客對我們公司不滿的最大原因。"
  },
  {
    "word": "design",
    "pos": "n.",
    "cn_def": "設計",
    "en_def": "the way something is planned and made to look",
    "sentence": "A: Are the customers happy with the new version of our company website, or have we received many complaints since we launched it last month? B: Most people like the clean, modern {{BLANK}} with bigger buttons and fewer menus, but a few older customers said the text is still too small to read on their phones.",
    "cn": "A：顧客對我們公司網站的新版本滿意嗎？還是自從上個月上線以來我們收到了很多抱怨？ B：大部分人喜歡這個簡潔、現代、按鈕更大、選單更少的【設計】，但有幾位年長的顧客說，文字在手機上還是太小看不清楚。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "the people who watch or listen to a talk or show",
    "sentence": "A: Should I use the same slides for the investors' meeting on Tuesday that I used for the training session with our new employees last week? B: No, you should change them, because the {{BLANK}} is very different; investors care about profits and future plans, while the new staff mainly needed to learn about daily tasks and company rules.",
    "cn": "A：星期二的投資人會議，我應該用上週新員工訓練時用的同一份投影片嗎？ B：不，你應該修改，因為【聽眾】很不一樣；投資人在意的是獲利和未來計畫，而新員工主要需要了解日常工作和公司規定。"
  },
  {
    "word": "communication",
    "pos": "n.",
    "cn_def": "溝通；交流",
    "en_def": "the sharing of information between people",
    "sentence": "A: Why did the head office decide to send a short chart every Monday instead of long emails about the progress of each project? B: The managers felt that good {{BLANK}} between departments was getting harder, so a simple weekly chart helps everyone see the status of every project quickly and reduces misunderstandings between the teams.",
    "cn": "A：為什麼總公司決定每週一寄一張簡短的圖表，而不是寄長篇電子郵件說明每個專案的進度？ B：經理們覺得部門之間要有良好的【溝通】越來越難，所以一張簡單的每週圖表能讓大家快速看到每個專案的狀態，並減少團隊之間的誤會。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "解讀；詮釋",
    "en_def": "to decide what something means",
    "sentence": "A: The research team sent us a lot of charts about customer behavior, but I'm not sure what most of them actually mean for our sales plan. B: Don't worry, the team leader is coming to our meeting on Thursday to help us {{BLANK}} the data, and she will explain which trends are the most important for next year.",
    "cn": "A：研究團隊寄給我們很多關於顧客行為的圖表，但我不確定大部分對我們的銷售計畫實際上代表什麼。 B：別擔心，組長星期四會來參加我們的會議，幫我們【解讀】這些數據，她會說明哪些趨勢對明年最重要。"
  },
  {
    "word": "visualization",
    "pos": "n.",
    "cn_def": "視覺化",
    "en_def": "the act of showing information as pictures, charts or maps",
    "sentence": "A: Why did our department buy new software for the analysts when the old spreadsheet program still works fine for most tasks? B: The new program is great for data {{BLANK}}, because it can quickly turn thousands of numbers into colorful maps and charts that managers can understand without reading every row.",
    "cn": "A：舊的試算表程式在大部分工作上都還很好用，為什麼我們部門要幫分析師買新軟體？ B：新程式很適合做資料【視覺化】，因為它能快速把數千個數字轉換成彩色地圖和圖表，經理們不用看每一列就能看懂。"
  },
  {
    "word": "overview",
    "pos": "n.",
    "cn_def": "概要；概觀",
    "en_def": "a short description of the main facts about something",
    "sentence": "A: The new regional manager starts on Monday and has never worked in our industry before, so how should we help her during her first meeting with the team? B: Let's begin with a short {{BLANK}} of our main products, customers, and sales results for the past year, and then we can talk about each project in more detail later in the week.",
    "cn": "A：新的區域經理星期一上任，她以前從沒在我們這個產業工作過，在她和團隊的第一次會議中我們該怎麼幫她？ B：我們先簡短【概述】我們的主要產品、客戶和過去一年的銷售成果，然後這週稍晚再更詳細地討論每個專案。"
  },
  {
    "word": "instructional",
    "pos": "adj.",
    "cn_def": "教學的；說明用的",
    "en_def": "used for teaching people how to do something",
    "sentence": "A: The new factory workers are having trouble using the packing machine correctly, and the paper manual is too long for them to read during their shifts. B: We're making a short {{BLANK}} video with clear pictures and simple steps, so they can watch it on their phones whenever they forget how to start or clean the machine.",
    "cn": "A：新來的工廠工人在正確操作包裝機上有困難，而紙本手冊太長，他們輪班時沒時間看。 B：我們正在製作一支簡短的【教學】影片，有清楚的畫面和簡單的步驟，讓他們忘記如何啟動或清潔機器時，隨時可以用手機觀看。"
  }
];

const MCQS = [
  {
    "q": "The instruction booklet has very little text. Each step comes with a simple _____ that shows exactly what to do.",
    "options": [
      "illustration",
      "audience",
      "emphasis",
      "context"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many people remember pictures better than words. That is why the trainer uses _____ aids such as charts and photos.",
    "options": [
      "polite",
      "visual",
      "annual",
      "nervous"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new staff did not understand the form at first. The manager showed them a finished _____ to make it clear.",
    "options": [
      "audience",
      "emphasis",
      "example",
      "flow"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The architect is still at an early stage of the project. She only has a rough _____ of the new lobby.",
    "options": [
      "audience",
      "communication",
      "emphasis",
      "concept"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The shipment arrived two weeks late. The customer has asked for a full _____ of the delay before paying the bill.",
    "options": [
      "layout",
      "explanation",
      "symbol",
      "audience"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The bar chart is a simple _____ of our sales in each region. Taller bars mean higher sales.",
    "options": [
      "audience",
      "emphasis",
      "icon",
      "representation"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Please read your email again before you send it. Short sentences will improve the _____ of your message to clients.",
    "options": [
      "clarity",
      "icon",
      "label",
      "audience"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The technician drew a quick _____ on the whiteboard. It showed how all the computers in the office are connected.",
    "options": [
      "audience",
      "emphasis",
      "diagram",
      "clarity"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "On the safety map, a red cross is the _____ for the first-aid room. Every employee should learn what it means.",
    "options": [
      "audience",
      "context",
      "flow",
      "symbol"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "To print the report, click the small printer _____ at the top of the screen. The document will print in a few seconds.",
    "options": [
      "icon",
      "audience",
      "emphasis",
      "context"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The editor wrote a short _____ in the margin of the report. It explained which numbers needed to be checked again.",
    "options": [
      "audience",
      "flow",
      "annotation",
      "layout"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Each box in the warehouse has a _____ with the product name and number. This helps workers find items quickly.",
    "options": [
      "audience",
      "label",
      "emphasis",
      "comparison"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The speaker used a red pen to _____ the most important figures. Everyone in the room noticed them right away.",
    "options": [
      "simplify",
      "interpret",
      "highlight",
      "demonstrate"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The registration form has too many questions. We plan to _____ it so that customers can finish it in two minutes.",
    "options": [
      "highlight",
      "simplify",
      "interpret",
      "demonstrate"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The salesperson will visit our office on Friday. She will _____ how the new scanner works with a live test.",
    "options": [
      "simplify",
      "interpret",
      "highlight",
      "demonstrate"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Some employees do not understand the new holiday policy. The HR manager will _____ to them why the rules were changed.",
    "options": [
      "explain",
      "highlight",
      "simplify",
      "interpret"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The company has changed its management _____ this year. Now each team leader reports directly to a regional director.",
    "options": [
      "audience",
      "structure",
      "symbol",
      "icon"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The magazine's new _____ places the photos on the left and the text on the right. Readers say it looks cleaner.",
    "options": [
      "layout",
      "audience",
      "context",
      "emphasis"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The sales drop looks bad on its own. In _____, however, every company in our industry lost customers this year.",
    "options": [
      "audience",
      "icon",
      "context",
      "label"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "A good chart shows the _____ of work from one department to the next. It helps managers find where delays happen.",
    "options": [
      "audience",
      "icon",
      "clarity",
      "flow"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The steps must be done in the correct _____. If you skip one, the machine will not start properly.",
    "options": [
      "sequence",
      "audience",
      "icon",
      "emphasis"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The report includes a _____ of prices from three suppliers. It clearly shows which one offers the best deal.",
    "options": [
      "audience",
      "icon",
      "clarity",
      "comparison"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "In her speech, the director placed strong _____ on customer safety. She repeated the point several times.",
    "options": [
      "audience",
      "emphasis",
      "icon",
      "sequence"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Customers love the simple _____ of our new mobile app. The buttons are large, and the menus are easy to use.",
    "options": [
      "audience",
      "context",
      "design",
      "emphasis"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The presenter changed her slides for a younger _____. She used fewer numbers and more short videos.",
    "options": [
      "icon",
      "sequence",
      "symbol",
      "audience"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "Weekly meetings have improved _____ between the sales team and the warehouse. Fewer orders are now delayed.",
    "options": [
      "icon",
      "symbol",
      "communication",
      "layout"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Our analysts use special software for data _____. It turns huge spreadsheets into easy maps and charts.",
    "options": [
      "visualization",
      "audience",
      "emphasis",
      "icon"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The first slide gives a brief _____ of the whole project. Later slides explain each stage in more detail.",
    "options": [
      "audience",
      "overview",
      "icon",
      "symbol"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The survey results are full of numbers and percentages. We need an expert to help us _____ what they really mean.",
    "options": [
      "interpret",
      "highlight",
      "simplify",
      "demonstrate"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "New staff must watch a short _____ video before using the forklift. It shows each safety step clearly.",
    "options": [
      "polite",
      "annual",
      "instructional",
      "nervous"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "illustration": {
    "pos": "n.",
    "en_def": "a picture or drawing that helps explain something",
    "cn_def": "插圖；圖解"
  },
  "visual": {
    "pos": "adj.",
    "en_def": "related to seeing or pictures",
    "cn_def": "視覺的"
  },
  "example": {
    "pos": "n.",
    "en_def": "something that shows what others of the same kind are like",
    "cn_def": "例子；範例"
  },
  "concept": {
    "pos": "n.",
    "en_def": "a general idea about something",
    "cn_def": "概念"
  },
  "explanation": {
    "pos": "n.",
    "en_def": "words that make something clear or give a reason",
    "cn_def": "解釋；說明"
  },
  "representation": {
    "pos": "n.",
    "en_def": "a picture or sign that shows or stands for something",
    "cn_def": "表示；呈現"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清晰；明確"
  },
  "diagram": {
    "pos": "n.",
    "en_def": "a simple drawing that shows how something works or is arranged",
    "cn_def": "圖表；示意圖"
  },
  "symbol": {
    "pos": "n.",
    "en_def": "a sign or picture that stands for an idea",
    "cn_def": "符號；象徵"
  },
  "icon": {
    "pos": "n.",
    "en_def": "a small picture on a screen that you click to do something",
    "cn_def": "圖示"
  },
  "annotation": {
    "pos": "n.",
    "en_def": "a short note added to explain a picture or text",
    "cn_def": "註解；註釋"
  },
  "label": {
    "pos": "n.",
    "en_def": "a word or short text that names a part of something",
    "cn_def": "標籤；標示"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to make something easy to notice; to show it is important",
    "cn_def": "強調；突顯；標亮"
  },
  "simplify": {
    "pos": "v.",
    "en_def": "to make something easier to understand or do",
    "cn_def": "簡化"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show how something works by doing it",
    "cn_def": "示範；展示"
  },
  "explain": {
    "pos": "v.",
    "en_def": "to make something clear by giving details or reasons",
    "cn_def": "解釋；說明"
  },
  "structure": {
    "pos": "n.",
    "en_def": "the way the parts of something are organized",
    "cn_def": "結構；架構"
  },
  "layout": {
    "pos": "n.",
    "en_def": "the way things are arranged on a page or in a space",
    "cn_def": "版面配置；格局"
  },
  "context": {
    "pos": "n.",
    "en_def": "the facts or situation around something that help you understand it",
    "cn_def": "背景；來龍去脈"
  },
  "flow": {
    "pos": "n.",
    "en_def": "the steady movement of something from one place or step to the next",
    "cn_def": "流程；流動"
  },
  "sequence": {
    "pos": "n.",
    "en_def": "the order in which things happen or are done",
    "cn_def": "順序"
  },
  "comparison": {
    "pos": "n.",
    "en_def": "the act of looking at two or more things to see how they are alike or different",
    "cn_def": "比較"
  },
  "emphasis": {
    "pos": "n.",
    "en_def": "special importance given to something",
    "cn_def": "強調；重點"
  },
  "design": {
    "pos": "n.",
    "en_def": "the way something is planned and made to look",
    "cn_def": "設計"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to a talk or show",
    "cn_def": "觀眾；聽眾"
  },
  "communication": {
    "pos": "n.",
    "en_def": "the sharing of information between people",
    "cn_def": "溝通；交流"
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to decide what something means",
    "cn_def": "解讀；詮釋"
  },
  "visualization": {
    "pos": "n.",
    "en_def": "the act of showing information as pictures, charts or maps",
    "cn_def": "視覺化"
  },
  "overview": {
    "pos": "n.",
    "en_def": "a short description of the main facts about something",
    "cn_def": "概要；概觀"
  },
  "instructional": {
    "pos": "adj.",
    "en_def": "used for teaching people how to do something",
    "cn_def": "教學的；說明用的"
  }
};

const EXTRA_GLOSSES = {};
