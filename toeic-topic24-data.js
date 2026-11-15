// Topic 24 Quiz Data: Bar Chart 長條圖
// Source word list: https://www.examword.com/group-topic/bar-chart — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T24 - Bar Chart 長條圖",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "axis",
    "pos": "n.",
    "cn_def": "座標軸",
    "en_def": "a line at the side or bottom of a chart used to show values",
    "sentence": "A: I am making a bar chart of our monthly sales for tomorrow's meeting, but I am not sure where to put the names of the months and the sales numbers. B: Put the months along the bottom and the sales amounts on the vertical {{BLANK}}, so everyone can see how high each month's bar goes.",
    "cn": "A：我正在為明天的會議做每月銷售的長條圖，但不確定月份名稱和銷售數字該放在哪裡。 B：把月份放在底部，銷售金額放在垂直【座標軸】上，這樣大家就能看出每個月的長條有多高。"
  },
  {
    "word": "category",
    "pos": "n.",
    "cn_def": "類別；種類",
    "en_def": "a group of things that have similar features",
    "sentence": "A: The store manager wants a chart that shows which kinds of products sold best last quarter, but we sell more than five hundred different items, so how can I make it simple? B: Put the items into groups like drinks, snacks, and frozen food, and then draw one bar for each {{BLANK}} so the chart stays clear and easy to read.",
    "cn": "A：店長想要一張圖表顯示上一季哪些種類的商品賣得最好，但我們賣五百多種商品，要怎麼讓它簡單一點？ B：把商品分成飲料、零食和冷凍食品等組別，然後每個【類別】畫一根長條，這樣圖表就會清楚易讀。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "數值",
    "en_def": "a number or amount shown on a chart",
    "sentence": "A: When I showed my chart to the director, she said she could not tell the exact sales for each region just by looking at the bars, so how can I fix that? B: Write the {{BLANK}} at the top of each bar, such as \"2.5 million,\" so she can read the exact number without guessing from the lines on the side.",
    "cn": "A：我給主任看圖表時，她說光看長條沒辦法知道每個地區確切的銷售額，我要怎麼修正？ B：在每根長條頂端寫上【數值】，例如「250萬」，這樣她不必從旁邊的格線猜，就能讀到確切的數字。"
  },
  {
    "word": "scale",
    "pos": "n.",
    "cn_def": "刻度；比例尺",
    "en_def": "the set of numbers used to measure the size of things on a chart",
    "sentence": "A: In my chart, the small differences between our three stores look huge, and the manager thinks the Tainan store is doing terribly, but that is not true. B: The {{BLANK}} on your chart starts at ninety instead of zero, so you should change it to start at zero, and the differences will look as small as they really are.",
    "cn": "A：在我的圖表裡，我們三家門市之間的小差距看起來很大，經理以為台南店表現很差，但其實不是。 B：你圖表上的【刻度】從九十開始而不是從零，你應該改成從零開始，這樣差距看起來就會和實際一樣小。"
  },
  {
    "word": "frequency",
    "pos": "n.",
    "cn_def": "頻率；次數",
    "en_def": "how often something happens",
    "sentence": "A: The customer service team wants to know which problems customers call about most often, so that they can train new staff better, so what chart should I make? B: Make a bar chart that shows the {{BLANK}} of each type of complaint last month, so the team can see that late delivery calls happen three times more than any other.",
    "cn": "A：客服團隊想知道顧客最常為了哪些問題打電話，好更有效地訓練新員工，我該做什麼圖表？ B：做一張長條圖，顯示上個月每一種客訴的【次數】，讓團隊看到送貨延遲的電話比其他任何問題多三倍。"
  },
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較",
    "en_def": "to look at things to see how they are similar or different",
    "sentence": "A: The board wants to see whether our new advertisement worked, but they only have ten minutes for our report at the meeting, so what should I show them? B: Use one bar chart to {{BLANK}} sales in the three months before and after the advertisement, because the difference will be easy to see in a few seconds.",
    "cn": "A：董事會想知道我們的新廣告有沒有效，但會議上只給我們十分鐘報告，我該給他們看什麼？ B：用一張長條圖來【比較】廣告前後三個月的銷售，因為幾秒鐘內就能輕鬆看出差異。"
  },
  {
    "word": "comparison",
    "pos": "n.",
    "cn_def": "比較；對照",
    "en_def": "the act of looking at things to see how they are similar or different",
    "sentence": "A: Our manager asked me to show how our prices are different from those of our three main competitors, but I only have the numbers in a long table. B: Turn the table into a bar chart, because a visual {{BLANK}} of prices is much easier for people to understand than a page full of numbers.",
    "cn": "A：經理要我呈現我們的價格和三家主要競爭對手有什麼不同，但我只有一張很長的數字表格。 B：把表格轉成長條圖，因為價格的視覺化【比較】比整頁數字更容易讓人理解。"
  },
  {
    "word": "distribution",
    "pos": "n.",
    "cn_def": "分布",
    "en_def": "the way something is spread out among different groups",
    "sentence": "A: Human resources wants to know the ages of our employees, because many senior workers may retire soon, so how should I present this information? B: Make a bar chart showing the age {{BLANK}} of all staff in five-year groups, so managers can quickly see how many people are over fifty-five.",
    "cn": "A：人資部想知道員工的年齡，因為很多資深員工可能快退休了，我該怎麼呈現這些資訊？ B：做一張長條圖，以每五歲為一組顯示全體員工的年齡【分布】，讓主管能很快看出有多少人超過五十五歲。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤；標示",
    "en_def": "a word or short phrase that names part of a chart",
    "sentence": "A: I showed my sales chart to the new interns, and none of them understood what the bars meant, even though the colors looked nice. B: You forgot to add a {{BLANK}} under each bar, so people cannot tell which bar is for which store, and you should also give the chart a title.",
    "cn": "A：我把銷售圖表給新來的實習生看，雖然顏色很好看，但沒人看得懂那些長條代表什麼。 B：你忘了在每根長條下面加上【標籤】，所以大家分不出哪根長條是哪家門市的，你也應該幫圖表加個標題。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "圖例",
    "en_def": "a small box on a chart that explains what each color or symbol means",
    "sentence": "A: My chart uses blue bars for this year and gray bars for last year, but the manager asked me which color was which during the meeting, and I felt embarrassed. B: Add a small {{BLANK}} in the top right corner that explains each color, so people can understand the chart without asking you.",
    "cn": "A：我的圖表用藍色長條代表今年、灰色長條代表去年，但經理在會議中問我哪個顏色是哪個，讓我很難為情。 B：在右上角加一個小【圖例】說明每個顏色，這樣大家不必問你也能看懂圖表。"
  },
  {
    "word": "dataset",
    "pos": "n.",
    "cn_def": "資料集",
    "en_def": "a collection of related information, usually stored on a computer",
    "sentence": "A: The marketing team wants charts about customer spending for the last five years, but our sales numbers are stored in many different files, so where should I start? B: First, combine all the files into one clean {{BLANK}} in a spreadsheet, and check for missing numbers before you make any charts from it.",
    "cn": "A：行銷團隊想要過去五年顧客消費的圖表，但我們的銷售數字存放在很多不同的檔案裡，我該從哪裡開始？ B：先把所有檔案整合成試算表裡一個乾淨的【資料集】，在用它做任何圖表之前，先檢查有沒有缺漏的數字。"
  },
  {
    "word": "variable",
    "pos": "n.",
    "cn_def": "變數；變項",
    "en_def": "a factor or quantity that can change",
    "sentence": "A: Our ice cream sales went up a lot in July, and the manager thinks it was because of our new advertisement, but I am not so sure about that. B: Temperature is another important {{BLANK}}, so you should show the weather data in the chart as well, because hot days usually increase ice cream sales.",
    "cn": "A：我們的冰淇淋銷量在七月大幅上升，經理認為是新廣告的關係，但我不太確定。 B：氣溫是另一個重要的【變數】，所以你也應該在圖表中呈現天氣資料，因為炎熱的天氣通常會讓冰淇淋銷量增加。"
  },
  {
    "word": "horizontal",
    "pos": "adj.",
    "cn_def": "水平的；橫向的",
    "en_def": "going from side to side, flat like the ground",
    "sentence": "A: The names of our product lines are very long, such as \"premium organic green tea,\" and they do not fit under the bars in my chart, so what can I do? B: Turn the chart into a {{BLANK}} bar chart, with the bars going from left to right, so the long names fit easily on the left side.",
    "cn": "A：我們的產品線名稱很長，例如「頂級有機綠茶」，在我的圖表長條下面放不下，我該怎麼辦？ B：把圖表改成【橫向】長條圖，讓長條從左往右延伸，這樣長名稱就能輕鬆放在左側。"
  },
  {
    "word": "vertical",
    "pos": "adj.",
    "cn_def": "垂直的；直立的",
    "en_def": "going straight up and down",
    "sentence": "A: Our designer made the sales chart with bars going up from the bottom of the page, but the director said she prefers bars that go across, so should we change it? B: For monthly sales, {{BLANK}} bars are usually easier to read because time goes from left to right, so I would explain that and keep the original design.",
    "cn": "A：我們的設計師把銷售圖表做成從頁面底部往上的長條，但主任說她比較喜歡橫向的長條，我們該改嗎？ B：對每月銷售來說，【垂直】長條通常比較容易閱讀，因為時間是從左往右排列的，所以我會向她說明並保留原本的設計。"
  },
  {
    "word": "discrete",
    "pos": "adj.",
    "cn_def": "離散的；個別的",
    "en_def": "separate and different from each other",
    "sentence": "A: Why did you use a bar chart instead of a line chart to show sales in our five different stores, when the manager usually likes line charts? B: Because the stores are {{BLANK}} groups that are not connected to each other, a line would suggest a change over time, which is not what the data shows.",
    "cn": "A：經理通常喜歡折線圖，你為什麼用長條圖而不是折線圖來呈現五家不同門市的銷售？ B：因為這些門市是彼此不相連的【個別】群組，用折線會讓人以為是隨時間的變化，但資料呈現的並不是這個。"
  },
  {
    "word": "magnitude",
    "pos": "n.",
    "cn_def": "規模；大小",
    "en_def": "the great size or importance of something",
    "sentence": "A: The bar for online sales is three times taller than the bar for store sales this year, and some managers were very surprised, so what does it mean? B: It shows the {{BLANK}} of the change in how customers shop, because online sales have grown much faster than anyone expected in just two years.",
    "cn": "A：今年網路銷售的長條比門市銷售高了三倍，有些經理非常驚訝，這代表什麼？ B：這顯示了顧客購物方式改變的【規模】，因為網路銷售在短短兩年內的成長速度遠超出任何人的預期。"
  },
  {
    "word": "proportion",
    "pos": "n.",
    "cn_def": "比例",
    "en_def": "a part of a whole, often shown as a percentage",
    "sentence": "A: The director wants to know how much of our total income comes from overseas customers, because she is planning a trip to Japan and Korea next month. B: My chart shows that a large {{BLANK}} of our income, about forty percent, comes from overseas, and most of it is from Japanese customers.",
    "cn": "A：主任想知道我們總收入中有多少來自海外顧客，因為她下個月打算去日本和韓國。 B：我的圖表顯示我們收入中很大的【比例】，大約百分之四十，來自海外，其中大多數是日本顧客。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢",
    "en_def": "a general direction in which something is changing",
    "sentence": "A: Our sales went up in some months and down in others this year, so the board is confused about whether the business is doing well or not. B: If you look at all five years together in one chart, the overall {{BLANK}} is clearly upward, even though a few months were weaker than others.",
    "cn": "A：我們今年的銷售有幾個月上升、有幾個月下降，所以董事會搞不清楚業務到底好不好。 B：如果你把五年的資料放在一張圖表裡一起看，整體【趨勢】顯然是向上的，即使有幾個月比較弱。"
  },
  {
    "word": "gap",
    "pos": "n.",
    "cn_def": "差距",
    "en_def": "a large difference between two things",
    "sentence": "A: The chart shows that the Taipei store sold far more than the Hualien store last year, and the manager wants to understand why the difference is so large. B: Part of the {{BLANK}} comes from the size of the city, but the Hualien store also has fewer staff and much shorter opening hours.",
    "cn": "A：圖表顯示台北店去年的銷量遠高於花蓮店，經理想了解為什麼差異這麼大。 B：部分【差距】來自城市的規模，但花蓮店的員工也比較少，營業時間也短得多。"
  },
  {
    "word": "interval",
    "pos": "n.",
    "cn_def": "間隔；區間",
    "en_def": "the space between two numbers or points on a scale",
    "sentence": "A: My chart has numbers on the side going 0, 7, 14, 21, and 28, and the manager said they are hard to read, so what numbers should I use instead? B: Use an {{BLANK}} of ten, with numbers like 0, 10, 20, and 30, because round numbers make it much easier to estimate the height of each bar.",
    "cn": "A：我的圖表側邊數字是0、7、14、21、28，經理說很難閱讀，我該改用什麼數字？ B：用十為一個【間隔】，像是0、10、20、30，因為整數能讓人更容易估計每根長條的高度。"
  },
  {
    "word": "rank",
    "pos": "v.",
    "cn_def": "排名；排序",
    "en_def": "to put things in order from highest to lowest",
    "sentence": "A: The sales director wants to see which of our twenty salespeople did best this year, but my chart puts them in alphabetical order, so is that a problem? B: Yes, it is, so you should {{BLANK}} them from the highest sales to the lowest, because then the top performers will appear right at the top of the chart.",
    "cn": "A：業務總監想看我們二十位業務員中今年誰表現最好，但我的圖表是按字母順序排列，這樣有問題嗎？ B：有，你應該把他們從銷售最高到最低【排序】，這樣表現最好的人就會出現在圖表最上方。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "突顯；強調",
    "en_def": "to make something easy to notice",
    "sentence": "A: My chart shows sales for all twelve products, but I really want the board to notice that our new green tea drink sold the most, so how can I do that? B: You can {{BLANK}} that bar in bright orange and make all the other bars light gray, so their eyes will go straight to the green tea.",
    "cn": "A：我的圖表呈現了全部十二項產品的銷售，但我真的希望董事會注意到我們新的綠茶飲料賣得最多，要怎麼做？ B：你可以用亮橘色【突顯】那根長條，把其他長條都改成淺灰色，這樣他們的目光就會直接落在綠茶上。"
  },
  {
    "word": "summary",
    "pos": "n.",
    "cn_def": "摘要；總結",
    "en_def": "a short statement of the main points",
    "sentence": "A: The president will only look at my report for a few minutes before her flight to Singapore this afternoon, so what should I put on the first page? B: Put a short {{BLANK}} of the main results with one simple bar chart, so she can understand the key points even if she does not read the rest.",
    "cn": "A：總裁今天下午搭機去新加坡前只會看我的報告幾分鐘，我第一頁該放什麼？ B：放一段主要結果的簡短【摘要】，再搭配一張簡單的長條圖，這樣即使她沒讀其他部分，也能了解重點。"
  },
  {
    "word": "baseline",
    "pos": "n.",
    "cn_def": "基準；基線",
    "en_def": "a starting point used to compare later changes",
    "sentence": "A: We started a new training program for the sales team in March, and the manager wants to know if it really made a difference to their results. B: Use the sales in February as the {{BLANK}}, and then show each month after that in the chart, so everyone can see how much sales grew after the training.",
    "cn": "A：我們三月為業務團隊開辦了新的培訓課程，經理想知道它是否真的對業績有影響。 B：以二月的銷售作為【基準】，然後在圖表中呈現之後的每個月，讓大家看出培訓後銷售成長了多少。"
  },
  {
    "word": "contrast",
    "pos": "n.",
    "cn_def": "對比；差異",
    "en_def": "a clear difference that is easy to see",
    "sentence": "A: The bars for 2025 and 2026 in my chart are light blue and slightly darker blue, and people say they look almost the same on the projector screen. B: Use colors with more {{BLANK}}, such as dark blue and orange, so the two years are easy to tell apart, even in a bright meeting room.",
    "cn": "A：我圖表中2025年和2026年的長條是淺藍色和稍深的藍色，大家說在投影幕上看起來幾乎一樣。 B：用【對比】更強的顏色，例如深藍和橘色，這樣即使在明亮的會議室裡也很容易分辨這兩年。"
  },
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清晰；清楚",
    "en_def": "the quality of being clear and easy to understand",
    "sentence": "A: My chart has a 3D design, shadows, and many different colors, and I think it looks very modern, but the director did not seem to like it. B: She cares more about {{BLANK}} than style, so you should use a simple flat design with only two colors, so the numbers are easy to understand.",
    "cn": "A：我的圖表有立體設計、陰影和很多不同顏色，我覺得看起來很現代，但主任似乎不喜歡。 B：她比較在意【清晰度】而不是風格，所以你應該用只有兩種顏色的簡單平面設計，讓數字容易理解。"
  },
  {
    "word": "color",
    "pos": "n.",
    "cn_def": "顏色",
    "en_def": "red, blue, green, and so on",
    "sentence": "A: The marketing report has five charts, and each one uses different colors for the same three products, so the readers keep getting confused. B: Give each product one {{BLANK}} and use it in every chart, for example green for tea and brown for coffee, so readers recognize them right away.",
    "cn": "A：行銷報告有五張圖表，每張都用不同顏色代表同樣的三項產品，讓讀者一直搞混。 B：每項產品都給一種【顏色】，並在每張圖表中使用，例如綠色代表茶、棕色代表咖啡，讓讀者馬上就能認出來。"
  },
  {
    "word": "measure",
    "pos": "v.",
    "cn_def": "衡量；測量",
    "en_def": "to find out the size or amount of something",
    "sentence": "A: The manager wants a chart to show whether our customers are happier with our service this year, but happiness is not a number, so how can we show it? B: We can {{BLANK}} customer satisfaction with a short online survey that asks people to score our service from one to ten after each visit.",
    "cn": "A：經理想要一張圖表顯示今年顧客是否對我們的服務更滿意，但滿意度不是數字，要怎麼呈現？ B：我們可以用簡短的線上問卷來【衡量】顧客滿意度，請顧客在每次光顧後為我們的服務打一到十分。"
  },
  {
    "word": "insight",
    "pos": "n.",
    "cn_def": "洞察；深入了解",
    "en_def": "a clear, deep understanding of something",
    "sentence": "A: The chart shows that most of our customers shop late at night, which nobody in the company expected, so how can this help our business? B: It gives us a useful {{BLANK}} into our customers' habits, so we can send special offers in the evening and keep our online help desk open later.",
    "cn": "A：圖表顯示我們大多數顧客都在深夜購物，公司裡沒人預料到，這對我們的業務有什麼幫助？ B：它讓我們對顧客的習慣有了有用的【深入了解】，所以我們可以在晚上發送特別優惠，並延長線上客服的服務時間。"
  }
];

const MCQS = [
  {
    "q": "The months are shown along the bottom _____ of the chart. Sales figures appear on the left side.",
    "options": [
      "insight",
      "axis",
      "clarity",
      "summary"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Drinks were the best-selling _____ in the store last month. Snacks came second, followed by frozen food.",
    "options": [
      "category",
      "axis",
      "interval",
      "baseline"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The _____ of each bar is printed above it. Readers can see the exact sales number for every month.",
    "options": [
      "legend",
      "axis",
      "value",
      "gap"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The _____ on the left side of the chart goes from zero to one hundred. Each line marks ten units.",
    "options": [
      "insight",
      "summary",
      "trend",
      "scale"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The chart shows the _____ of customer visits during the week. Most people come on Saturday afternoons.",
    "options": [
      "frequency",
      "clarity",
      "baseline",
      "legend"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The report will _____ the costs of the three shipping companies. The cheapest one will be chosen next month.",
    "options": [
      "rank",
      "highlight",
      "measure",
      "compare"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "A _____ of prices shows that our product is cheaper than most others. This is a strong point for our sales team.",
    "options": [
      "axis",
      "legend",
      "comparison",
      "interval"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The chart shows the _____ of staff across the five branches. Most employees work in the Taipei office.",
    "options": [
      "clarity",
      "distribution",
      "axis",
      "legend"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Each bar has a _____ underneath it with the name of the store. This makes the chart easy to read.",
    "options": [
      "trend",
      "gap",
      "insight",
      "label"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Check the _____ in the corner to see what each color means. Blue is for this year and gray is for last year.",
    "options": [
      "trend",
      "gap",
      "legend",
      "baseline"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The research team collected a large _____ of customer opinions. It includes answers from over ten thousand people.",
    "options": [
      "axis",
      "dataset",
      "legend",
      "clarity"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Price is not the only _____ that affects sales. Weather and holidays also make a big difference.",
    "options": [
      "variable",
      "axis",
      "legend",
      "summary"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Our online store sorts products by _____ to help shoppers. Customers can click on toys, books, or kitchen goods.",
    "options": [
      "baseline",
      "category",
      "clarity",
      "magnitude"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The map uses a _____ of one centimeter to one kilometer. Visitors can easily guess walking distances.",
    "options": [
      "legend",
      "insight",
      "scale",
      "summary"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The _____ on the box says the product was made in Japan. It also lists the date it should be used by.",
    "options": [
      "trend",
      "gap",
      "magnitude",
      "label"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Nobody expected the _____ of the sales drop. Profits fell by almost fifty percent in only three months.",
    "options": [
      "magnitude",
      "legend",
      "label",
      "axis"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "A large _____ of our customers are under thirty. That is why we advertise mainly on social media.",
    "options": [
      "axis",
      "legend",
      "interval",
      "proportion"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "There is a clear upward _____ in online sales. They have increased every year for the past five years.",
    "options": [
      "trend",
      "legend",
      "label",
      "axis"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The _____ between the two stores' sales is getting smaller. The new store is quickly catching up.",
    "options": [
      "legend",
      "gap",
      "axis",
      "label"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The prices were checked at a regular _____ of one hour. The chart shows how they changed during the day.",
    "options": [
      "legend",
      "label",
      "interval",
      "clarity"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The magazine will _____ the top ten hotels in Asia. Readers vote online to choose their favorites.",
    "options": [
      "compare",
      "rank",
      "measure",
      "highlight"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Please _____ the most important numbers in red. The director only has a few minutes to read the report.",
    "options": [
      "highlight",
      "rank",
      "compare",
      "measure"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "A short _____ of the results appears on the first page. It explains the key points in five sentences.",
    "options": [
      "axis",
      "legend",
      "interval",
      "summary"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Last year's sales are used as the _____ for this year's targets. Each store must grow by at least five percent.",
    "options": [
      "legend",
      "label",
      "baseline",
      "clarity"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "There is a sharp _____ between the two bars. One is three times taller than the other.",
    "options": [
      "legend",
      "axis",
      "interval",
      "contrast"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new report design improved the _____ of the data. Readers now understand the charts much more quickly.",
    "options": [
      "clarity",
      "axis",
      "legend",
      "interval"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Each product has its own _____ in the chart. Coffee is brown, tea is green, and juice is orange.",
    "options": [
      "axis",
      "color",
      "gap",
      "trend"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The company will _____ the success of the campaign by counting new customers. Results will be shared next month.",
    "options": [
      "rank",
      "highlight",
      "measure",
      "compare"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The survey gave the team useful _____ into what young customers want. They plan to use it for the next product.",
    "options": [
      "axis",
      "insight",
      "legend",
      "interval"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The chart shows a downward _____ in paper sales. More customers now read news on their phones instead.",
    "options": [
      "trend",
      "legend",
      "axis",
      "label"
    ],
    "answer": 0,
    "vocabIndex": 17
  }
];

const LOOKUP = {
  "axis": {
    "pos": "n.",
    "en_def": "a line at the side or bottom of a chart used to show values",
    "cn_def": "座標軸"
  },
  "category": {
    "pos": "n.",
    "en_def": "a group of things that have similar features",
    "cn_def": "類別；種類"
  },
  "value": {
    "pos": "n.",
    "en_def": "a number or amount shown on a chart",
    "cn_def": "數值"
  },
  "scale": {
    "pos": "n.",
    "en_def": "the set of numbers used to measure the size of things on a chart",
    "cn_def": "刻度；比例尺"
  },
  "frequency": {
    "pos": "n.",
    "en_def": "how often something happens",
    "cn_def": "頻率；次數"
  },
  "compare": {
    "pos": "v.",
    "en_def": "to look at things to see how they are similar or different",
    "cn_def": "比較"
  },
  "comparison": {
    "pos": "n.",
    "en_def": "the act of looking at things to see how they are similar or different",
    "cn_def": "比較；對照"
  },
  "distribution": {
    "pos": "n.",
    "en_def": "the way something is spread out among different groups",
    "cn_def": "分布"
  },
  "label": {
    "pos": "n.",
    "en_def": "a word or short phrase that names part of a chart",
    "cn_def": "標籤；標示"
  },
  "legend": {
    "pos": "n.",
    "en_def": "a small box on a chart that explains what each color or symbol means",
    "cn_def": "圖例"
  },
  "dataset": {
    "pos": "n.",
    "en_def": "a collection of related information, usually stored on a computer",
    "cn_def": "資料集"
  },
  "variable": {
    "pos": "n.",
    "en_def": "a factor or quantity that can change",
    "cn_def": "變數；變項"
  },
  "horizontal": {
    "pos": "adj.",
    "en_def": "going from side to side, flat like the ground",
    "cn_def": "水平的；橫向的"
  },
  "vertical": {
    "pos": "adj.",
    "en_def": "going straight up and down",
    "cn_def": "垂直的；直立的"
  },
  "discrete": {
    "pos": "adj.",
    "en_def": "separate and different from each other",
    "cn_def": "離散的；個別的"
  },
  "magnitude": {
    "pos": "n.",
    "en_def": "the great size or importance of something",
    "cn_def": "規模；大小"
  },
  "proportion": {
    "pos": "n.",
    "en_def": "a part of a whole, often shown as a percentage",
    "cn_def": "比例"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which something is changing",
    "cn_def": "趨勢"
  },
  "gap": {
    "pos": "n.",
    "en_def": "a large difference between two things",
    "cn_def": "差距"
  },
  "interval": {
    "pos": "n.",
    "en_def": "the space between two numbers or points on a scale",
    "cn_def": "間隔；區間"
  },
  "rank": {
    "pos": "v.",
    "en_def": "to put things in order from highest to lowest",
    "cn_def": "排名；排序"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to make something easy to notice",
    "cn_def": "突顯；強調"
  },
  "summary": {
    "pos": "n.",
    "en_def": "a short statement of the main points",
    "cn_def": "摘要；總結"
  },
  "baseline": {
    "pos": "n.",
    "en_def": "a starting point used to compare later changes",
    "cn_def": "基準；基線"
  },
  "contrast": {
    "pos": "n.",
    "en_def": "a clear difference that is easy to see",
    "cn_def": "對比；差異"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清晰；清楚"
  },
  "color": {
    "pos": "n.",
    "en_def": "red, blue, green, and so on",
    "cn_def": "顏色"
  },
  "measure": {
    "pos": "v.",
    "en_def": "to find out the size or amount of something",
    "cn_def": "衡量；測量"
  },
  "insight": {
    "pos": "n.",
    "en_def": "a clear, deep understanding of something",
    "cn_def": "洞察；深入了解"
  }
};

const EXTRA_GLOSSES = {};
