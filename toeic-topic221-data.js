// Topic 221 Quiz Data: Line Chart 折線圖
// Source word list: https://www.examword.com/group-topic/line-chart — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T221 - Line Chart 折線圖",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "axis",
    "pos": "n.",
    "cn_def": "座標軸",
    "en_def": "a straight reference line on a graph that shows values",
    "sentence": "A: I'm checking the sales graph for tomorrow's board meeting, but the numbers on the left side look strange to me. Can you explain what they mean? B: Sure, the vertical {{BLANK}} shows monthly revenue in thousands of dollars, while the bottom shows each month of the year from January to December.",
    "cn": "A：我正在檢查明天董事會要用的銷售圖表，但左邊的數字我看起來很奇怪。你可以解釋一下它們的意思嗎？ B：當然，垂直【座標軸】顯示的是以千美元為單位的每月營收，而底部則顯示一年中從一月到十二月的每個月份。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "線",
    "en_def": "a long thin mark that connects points on a chart",
    "sentence": "A: The marketing team sent me their new graph this morning, but I can't tell which product is which because everything looks so similar. B: Look at the colors carefully; the blue {{BLANK}} represents our coffee machines, and the red one shows how many water filters we sold each week.",
    "cn": "A：行銷團隊今天早上寄給我他們的新圖表，但我分不出哪個是哪個產品，因為每樣看起來都很相似。 B：仔細看顏色；藍色的【線】代表我們的咖啡機，而紅色那條顯示我們每週賣出多少濾水器。"
  },
  {
    "word": "point",
    "pos": "n.",
    "cn_def": "點；數據點",
    "en_def": "a single dot on a graph that shows one value",
    "sentence": "A: Why did you circle that small dot in the middle of the graph before sending the report to our manager this afternoon? B: That {{BLANK}} shows our customer numbers in July, when the summer promotion started, so I wanted everyone at the meeting to notice it quickly.",
    "cn": "A：你今天下午把報告寄給經理之前，為什麼要把圖表中間那個小點圈起來？ B：那個【數據點】顯示的是我們七月的顧客人數，也就是夏季促銷開始的時候，所以我希望會議上的每個人都能很快注意到它。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢",
    "en_def": "a general direction in which something is changing",
    "sentence": "A: Our online orders went up in some months and down in others last year, so what should I tell the director about the overall situation? B: Tell her that the general {{BLANK}} is clearly upward, because by December we were receiving almost twice as many orders as we did in January.",
    "cn": "A：去年我們的線上訂單有些月份上升，有些月份下降，那我應該怎麼向主任報告整體情況？ B：告訴她整體【趨勢】明顯是向上的，因為到了十二月，我們收到的訂單幾乎是一月的兩倍。"
  },
  {
    "word": "time series",
    "pos": "n.phr.",
    "cn_def": "時間序列",
    "en_def": "a set of data collected at regular times, in order",
    "sentence": "A: The finance department wants to see how our electricity costs have changed since we moved into this building five years ago. What kind of data should I prepare? B: Prepare a {{BLANK}} of the monthly bills, listed in date order, so we can draw a clear chart showing the changes over the years.",
    "cn": "A：財務部想了解自從我們五年前搬進這棟大樓以來，電費有什麼變化。我該準備哪種資料？ B：準備每月帳單的【時間序列】，按日期順序排列，這樣我們就能畫出清楚的圖表，顯示這幾年來的變化。"
  },
  {
    "word": "slope",
    "pos": "n.",
    "cn_def": "斜率；坡度",
    "en_def": "how steeply a line goes up or down on a graph",
    "sentence": "A: Both graphs show that our profits went up this year, so why do you think the second store did much better than the first one? B: Just compare the {{BLANK}} of each line; the second store's line rises much more steeply, which means its profits grew faster every single month.",
    "cn": "A：兩張圖都顯示我們今年的利潤上升了，那你為什麼認為第二家店的表現比第一家好很多？ B：只要比較每條線的【斜率】就知道了；第二家店的線上升得陡很多，這表示它的利潤每個月都成長得更快。"
  },
  {
    "word": "fluctuation",
    "pos": "n.",
    "cn_def": "波動；起伏",
    "en_def": "a change up and down, often irregular",
    "sentence": "A: The hotel's room bookings look very unstable on this chart, going up and down from week to week. Should the owners be worried about it? B: Not really, because this kind of {{BLANK}} is normal in the tourism business, where holidays, weather, and local events affect how many guests arrive each week.",
    "cn": "A：在這張圖表上，飯店的訂房數看起來很不穩定，每週都忽高忽低。業主應該擔心嗎？ B：其實不用，因為這種【波動】在觀光業很正常，假期、天氣和當地活動都會影響每週來的客人數量。"
  },
  {
    "word": "peak",
    "pos": "n.",
    "cn_def": "高峰；最高點",
    "en_def": "the highest point or level",
    "sentence": "A: When exactly did our website get the largest number of visitors this year, and do you know what caused it? B: The {{BLANK}} came in the second week of November, right after we sent the discount email to all our members, and traffic stayed high for about four days.",
    "cn": "A：今年我們網站的訪客人數到底是在什麼時候最多？你知道是什麼原因造成的嗎？ B：【最高點】出現在十一月的第二週，就在我們寄出折扣電子郵件給所有會員之後，而且流量維持在高點大約四天。"
  },
  {
    "word": "dip",
    "pos": "n.",
    "cn_def": "下降；小幅下跌",
    "en_def": "a small, short fall in amount or level",
    "sentence": "A: I noticed that sales at the downtown shop went down a little in March, but then they recovered quickly in April. What happened there? B: That {{BLANK}} was caused by road construction outside the shop, which made it hard for customers to park, but business returned to normal once the work finished.",
    "cn": "A：我注意到市中心那家店的銷售額在三月稍微下降了，但四月又很快回升。那裡發生了什麼事？ B：那次【小幅下跌】是店外的道路施工造成的，讓顧客很難停車，但施工一結束，生意就恢復正常了。"
  },
  {
    "word": "intersect",
    "pos": "v.",
    "cn_def": "相交；交叉",
    "en_def": "to cross each other at a point",
    "sentence": "A: On this chart, the cost of making the product keeps falling while our selling price stays the same. When will we start to make a profit? B: Look where the two lines {{BLANK}} in June; after that month, our income will be higher than our costs, so we should finally start earning money.",
    "cn": "A：在這張圖表上，產品的製作成本持續下降，而我們的售價保持不變。我們什麼時候會開始獲利？ B：看看兩條線在六月【相交】的地方；那個月以後，我們的收入就會高於成本，所以我們應該終於能開始賺錢了。"
  },
  {
    "word": "trajectory",
    "pos": "n.",
    "cn_def": "軌跡；發展方向",
    "en_def": "the path or direction that something follows over time",
    "sentence": "A: The new branch in Kaohsiung has only been open for six months, so how can we know whether it will be successful in the future? B: Its growth {{BLANK}} is very encouraging, since monthly sales have risen steadily since opening day, and if this continues, it will become our best store next year.",
    "cn": "A：高雄的新分店才開了六個月，我們怎麼知道它將來會不會成功？ B：它的成長【軌跡】非常令人鼓舞，因為自開幕以來每月銷售額穩定上升，如果持續下去，它明年就會成為我們最好的分店。"
  },
  {
    "word": "baseline",
    "pos": "n.",
    "cn_def": "基準線；基準",
    "en_def": "a starting level used for comparison",
    "sentence": "A: We started the new staff training program in April, but how will we prove to the managers that it actually improved productivity? B: We'll use the March figures as our {{BLANK}}, and then we'll compare each month after the training with them to show how much faster employees are finishing their tasks.",
    "cn": "A：我們在四月開始了新的員工訓練計畫，但我們要怎麼向經理們證明它真的提高了生產力？ B：我們會把三月的數字當作【基準】，然後把訓練後的每個月與之比較，來顯示員工完成工作快了多少。"
  },
  {
    "word": "continuous",
    "pos": "adj.",
    "cn_def": "連續的；不間斷的",
    "en_def": "going on without stopping or breaks",
    "sentence": "A: Should I show the factory's temperature readings as separate bars, or is there a better way to present them in the safety report? B: Since the sensors record the temperature every minute without stopping, a {{BLANK}} line is better, because it lets readers see every small change during the whole day.",
    "cn": "A：我應該把工廠的溫度讀數用分開的長條來呈現，還是在安全報告中有更好的方式？ B：既然感應器每分鐘都不間斷地記錄溫度，用【連續的】線條比較好，因為這能讓讀者看到一整天中每一個細微的變化。"
  },
  {
    "word": "interval",
    "pos": "n.",
    "cn_def": "間隔",
    "en_def": "a period of time or space between two things",
    "sentence": "A: How often should we collect the customer satisfaction numbers if we want to make a useful chart for the quarterly review? B: Let's collect them at a regular {{BLANK}} of two weeks, because waiting a whole month would hide quick changes, but checking every day would take too much staff time.",
    "cn": "A：如果我們想為季度檢討做一張有用的圖表，應該多久收集一次顧客滿意度的數據？ B：我們以兩週為固定【間隔】來收集吧，因為等一整個月會看不出快速的變化，但每天檢查又會花太多員工時間。"
  },
  {
    "word": "scale",
    "pos": "n.",
    "cn_def": "刻度；比例尺",
    "en_def": "the set of numbers or marks used to measure on a graph",
    "sentence": "A: This chart makes our small increase in costs look huge and very worrying. Did the designer make a mistake somewhere? B: Yes, the {{BLANK}} on the left side starts at ninety instead of zero, so even a tiny change looks dramatic; I'll ask her to fix it before the meeting.",
    "cn": "A：這張圖讓我們成本的小幅增加看起來很大、很令人擔心。設計師是不是哪裡弄錯了？ B：是的，左邊的【刻度】是從九十開始而不是從零開始，所以即使是很小的變化看起來也很誇張；我會請她在開會前修正。"
  },
  {
    "word": "variation",
    "pos": "n.",
    "cn_def": "變化；差異",
    "en_def": "a difference or change in amount or level",
    "sentence": "A: Why are the delivery times on this chart so different from region to region, even though we use the same company everywhere? B: The {{BLANK}} mostly comes from distance and traffic, because trucks going to mountain towns take much longer than those driving around the city.",
    "cn": "A：為什麼這張圖上各地區的送貨時間差這麼多，即使我們每個地方都用同一家公司？ B：這種【差異】主要來自距離和交通，因為開往山區小鎮的卡車比在市區行駛的卡車要花更多時間。"
  },
  {
    "word": "rate",
    "pos": "n.",
    "cn_def": "速率；比率",
    "en_def": "the speed at which something happens or changes",
    "sentence": "A: We hired many new workers this year, but I'm not sure whether we are growing too quickly for our office space. What do the numbers say? B: Our hiring {{BLANK}} is about five people per month, so at this speed we will run out of desks by next summer.",
    "cn": "A：我們今年雇用了很多新員工，但我不確定我們成長的速度對辦公空間來說是否太快。數字怎麼說？ B：我們的招聘【速率】大約是每個月五個人，所以照這個速度，到明年夏天我們就會沒有辦公桌了。"
  },
  {
    "word": "increase",
    "pos": "n.",
    "cn_def": "增加；成長",
    "en_def": "a rise in amount, number, or level",
    "sentence": "A: The chart for our online shop looks much better than last year's. How much did our sales actually grow, and what helped the most? B: We saw a twenty percent {{BLANK}} in sales, mainly because we started offering free shipping and faster delivery for orders over one thousand dollars.",
    "cn": "A：我們網路商店的圖表看起來比去年好很多。我們的銷售實際成長了多少？什麼幫助最大？ B：我們的銷售額有百分之二十的【增加】，主要是因為我們開始對超過一千元的訂單提供免運費和更快的送貨服務。"
  },
  {
    "word": "decrease",
    "pos": "n.",
    "cn_def": "減少；下降",
    "en_def": "a fall in amount, number, or level",
    "sentence": "A: Why does the line for paper use go down so much in the second half of the year on this office report? B: There was a big {{BLANK}} after we asked everyone to share documents online instead of printing them, so we saved a lot of money on paper and ink.",
    "cn": "A：在這份辦公室報告上，為什麼用紙量的線在下半年下降這麼多？ B：在我們要求大家在線上分享文件而不要列印之後，就出現了大幅的【減少】，所以我們在紙張和墨水上省了很多錢。"
  },
  {
    "word": "forecast",
    "pos": "n.",
    "cn_def": "預測",
    "en_def": "a statement about what is expected to happen in the future",
    "sentence": "A: The managers need to decide how many winter coats to order for next year. What information can we give them to help? B: We can give them a sales {{BLANK}} based on the last five winters, which shows that demand will probably be about ten percent higher than this year.",
    "cn": "A：經理們需要決定明年要訂多少件冬季外套。我們可以給他們什麼資訊來幫忙？ B：我們可以給他們一份根據過去五個冬天所做的銷售【預測】，它顯示需求可能會比今年高出大約百分之十。"
  },
  {
    "word": "projection",
    "pos": "n.",
    "cn_def": "推估；預估",
    "en_def": "an estimate of future numbers based on present information",
    "sentence": "A: The dotted part at the end of this line goes all the way to 2030. Is that real data, or just our guess? B: It's a {{BLANK}} that the finance team made from current growth, so it isn't certain, but it helps us plan how many new stores we might need.",
    "cn": "A：這條線末端的虛線部分一直延伸到2030年。那是真實數據，還是只是我們的猜測？ B：那是財務團隊根據目前成長所做的【預估】，所以不是確定的，但它能幫助我們規劃可能需要多少間新店。"
  },
  {
    "word": "smooth",
    "pos": "adj.",
    "cn_def": "平滑的；平穩的",
    "en_def": "even and without sudden changes",
    "sentence": "A: The daily website visitor numbers jump up and down so much that the chart is hard to read. Can we make it easier for the clients to understand? B: Let's use a weekly average instead, which will give us a {{BLANK}} line that clearly shows the general direction without all the small daily jumps.",
    "cn": "A：每日網站訪客人數忽高忽低，讓圖表很難閱讀。我們能讓客戶更容易理解嗎？ B：我們改用每週平均值吧，這樣會得到一條【平滑的】線，能清楚顯示大致方向，而沒有那些每天的小幅跳動。"
  },
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較",
    "en_def": "to look at two or more things to see how they are similar or different",
    "sentence": "A: Our boss wants to know if the new advertising campaign worked better than the old one we used last spring. How should we show this? B: Let's put both years on one chart so the team can {{BLANK}} them easily and see which campaign brought in more customers each month.",
    "cn": "A：老闆想知道新的廣告活動是否比我們去年春天用的舊活動效果更好。我們應該怎麼呈現？ B：我們把兩年放在同一張圖上吧，這樣團隊就能輕鬆地【比較】它們，看看每個月哪個活動帶來更多顧客。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "圖例",
    "en_def": "a small box on a chart that explains what colors or symbols mean",
    "sentence": "A: The client called and said she doesn't understand which colored line stands for which of our three hotels. What did we forget? B: We forgot to add a {{BLANK}} in the corner, so I'll put one there right now to explain that green is Taipei, blue is Taichung, and orange is Tainan.",
    "cn": "A：客戶打電話來說，她看不懂哪條顏色的線代表我們三家飯店中的哪一家。我們忘了什麼？ B：我們忘了在角落加上【圖例】，所以我現在就加一個，說明綠色是台北、藍色是台中、橘色是台南。"
  },
  {
    "word": "series",
    "pos": "n.",
    "cn_def": "數列；系列",
    "en_def": "a group of related numbers shown together as one line",
    "sentence": "A: The chart already has five lines on it, and the director wants us to add another one for the new branch. Won't it become too crowded? B: Adding one more data {{BLANK}} is fine, but we should use a strong color for it and make the older lines lighter.",
    "cn": "A：這張圖表上已經有五條線了，而主任要我們再為新分店加一條。這樣不會太擠嗎？ B：再加一組數據【數列】沒問題，但我們應該用醒目的顏色，並把舊的線條調淡一點。"
  },
  {
    "word": "correlation",
    "pos": "n.",
    "cn_def": "相關性；關聯",
    "en_def": "a connection between two things that change together",
    "sentence": "A: When the weather gets hotter, our ice cream shops seem to sell more. Is that just my feeling, or is it true? B: The chart shows a strong {{BLANK}} between temperature and sales, because on days above thirty degrees, the shops usually sell almost double the normal amount.",
    "cn": "A：天氣變熱的時候，我們的冰淇淋店似乎賣得比較多。那只是我的感覺，還是真的？ B：圖表顯示溫度和銷售之間有很強的【相關性】，因為在超過三十度的日子裡，店裡通常會賣出幾乎平常兩倍的量。"
  },
  {
    "word": "pattern",
    "pos": "n.",
    "cn_def": "模式；規律",
    "en_def": "a regular way in which something happens or is repeated",
    "sentence": "A: Looking at three years of restaurant data, do you notice anything that keeps happening at the same time every year? B: Yes, there's a clear {{BLANK}}: bookings always rise before Lunar New Year and Mother's Day, and then they drop during the rainy season in June.",
    "cn": "A：看了三年的餐廳數據，你有沒有注意到每年同一時間都會發生的事情？ B：有，有一個很明顯的【規律】：訂位總是在農曆新年和母親節前上升，然後在六月的梅雨季下降。"
  },
  {
    "word": "volatility",
    "pos": "n.",
    "cn_def": "波動性；不穩定性",
    "en_def": "the quality of changing suddenly and often",
    "sentence": "A: The investors look nervous about the price chart for raw materials. Why are they so concerned about buying from that supplier? B: They are worried about the high {{BLANK}} of the prices, which jumped and fell sharply several times last year, making it very hard to plan our budget.",
    "cn": "A：投資人看到原物料的價格圖表似乎很緊張。他們為什麼這麼擔心向那家供應商購買？ B：他們擔心價格的高度【波動性】，去年價格好幾次急漲急跌，讓我們很難規劃預算。"
  },
  {
    "word": "annotation",
    "pos": "n.",
    "cn_def": "註解；標註",
    "en_def": "a short note added to a chart to explain something",
    "sentence": "A: The sudden drop in the middle of this chart might confuse the board members. How can we make it clear that it was not our fault? B: Let's add a short {{BLANK}} next to it explaining that the typhoon closed all our stores for three days, so readers understand the reason immediately.",
    "cn": "A：這張圖表中間突然的下跌可能會讓董事們感到困惑。我們要怎麼清楚說明那不是我們的錯？ B：我們在旁邊加一個簡短的【註解】，說明颱風讓我們所有的店關了三天，這樣讀者就能馬上明白原因。"
  },
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清晰度；清楚",
    "en_def": "the quality of being clear and easy to understand",
    "sentence": "A: The designer added shadows, bright colors, and lots of decorations to our sales chart. Do you think it looks more professional now? B: It looks colorful, but it has lost {{BLANK}}, because the extra decorations make it difficult for busy readers to see the main numbers quickly.",
    "cn": "A：設計師在我們的銷售圖表上加了陰影、鮮豔的顏色和很多裝飾。你覺得它現在看起來更專業嗎？ B：它看起來很繽紛，但失去了【清晰度】，因為多餘的裝飾讓忙碌的讀者很難快速看到主要數字。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "強調；標示出",
    "en_def": "to make something easy to notice",
    "sentence": "A: The CEO will only look at this chart for a few seconds during the meeting. How can we make sure she notices our best month? B: We can {{BLANK}} October with a bright yellow box and a short note, so her eyes go straight to the record sales figure.",
    "cn": "A：執行長在會議中只會看這張圖表幾秒鐘。我們要怎麼確保她注意到我們表現最好的月份？ B：我們可以用亮黃色的框和簡短的說明來【標示出】十月，讓她的目光直接落在創紀錄的銷售數字上。"
  }
];

const MCQS = [
  {
    "q": "The months are shown along the horizontal _____ of the graph. Please make sure each label is easy to read.",
    "options": [
      "axis",
      "legend",
      "slope",
      "peak"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Each _____ on the chart shows the sales of one product. The red one belongs to our new phone.",
    "options": [
      "scale",
      "line",
      "axis",
      "interval"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Click on any _____ on the graph to see the exact figure. A small window will open with the details.",
    "options": [
      "slope",
      "legend",
      "point",
      "rate"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The upward _____ in online shopping is expected to continue. Many stores are now hiring more delivery staff.",
    "options": [
      "axis",
      "legend",
      "annotation",
      "trend"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The analyst built a _____ of daily ticket sales since 2020. It shows how travel slowly recovered after the pandemic.",
    "options": [
      "legend",
      "time series",
      "scale",
      "axis"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The steep _____ of the line shows that costs rose very quickly. Managers must find ways to cut spending.",
    "options": [
      "slope",
      "legend",
      "annotation",
      "interval"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Hotels often see a large _____ in bookings during the year. Prices are adjusted to match the busy seasons.",
    "options": [
      "axis",
      "legend",
      "clarity",
      "fluctuation"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Electricity use reaches its _____ in the hot afternoons of August. The power company asks offices to save energy then.",
    "options": [
      "dip",
      "baseline",
      "peak",
      "axis"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "There was a small _____ in visitors during the rainy week. Numbers returned to normal once the weather improved.",
    "options": [
      "dip",
      "peak",
      "legend",
      "scale"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The cost line and the income line _____ in the third quarter. From that point on, the company becomes profitable.",
    "options": [
      "compare",
      "highlight",
      "intersect",
      "decrease"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The company's growth _____ has been impressive since the merger. Revenue has risen every quarter for three years.",
    "options": [
      "legend",
      "trajectory",
      "axis",
      "annotation"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Last year's results will serve as the _____ for this study. All new figures will be compared against them.",
    "options": [
      "peak",
      "legend",
      "slope",
      "baseline"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The sensor provides a _____ record of the room temperature. It never stops collecting data, even at night.",
    "options": [
      "smooth",
      "annual",
      "continuous",
      "separate"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Readings were taken at an _____ of fifteen minutes. This gave the engineers enough data for the report.",
    "options": [
      "interval",
      "axis",
      "annotation",
      "clarity"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The _____ on the left side starts at zero and goes up to one hundred. Each line marks ten units.",
    "options": [
      "trend",
      "legend",
      "dip",
      "scale"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "There is little _____ in prices between the two suppliers. Both charge about the same for paper and ink.",
    "options": [
      "axis",
      "variation",
      "legend",
      "annotation"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The unemployment _____ fell to three percent last month. Economists say the job market is getting stronger.",
    "options": [
      "rate",
      "axis",
      "legend",
      "peak"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The chart shows a sharp _____ in online orders after the sale began. The warehouse had to hire extra workers.",
    "options": [
      "decrease",
      "dip",
      "baseline",
      "increase"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "A steady _____ in paper costs followed the move to digital files. The office now prints very few documents.",
    "options": [
      "increase",
      "decrease",
      "peak",
      "trend"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The weather _____ predicts heavy rain all weekend. Outdoor events in the city may be cancelled.",
    "options": [
      "legend",
      "axis",
      "forecast",
      "slope"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "According to the finance team's _____, profits will double by 2028. The estimate is based on current growth.",
    "options": [
      "annotation",
      "legend",
      "axis",
      "projection"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The weekly averages produce a _____ curve on the graph. The daily ups and downs are no longer visible.",
    "options": [
      "smooth",
      "sharp",
      "steep",
      "sudden"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Please _____ this quarter's results with last year's figures. We need to know whether sales have improved.",
    "options": [
      "intersect",
      "highlight",
      "compare",
      "forecast"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The _____ in the corner explains what each color means. Blue stands for Taipei and green for Tainan.",
    "options": [
      "slope",
      "legend",
      "peak",
      "baseline"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The chart includes a separate data _____ for each region. Readers can easily follow the five colored lines.",
    "options": [
      "series",
      "axis",
      "peak",
      "slope"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Researchers found a strong _____ between exercise and sleep quality. People who walk daily tend to sleep better.",
    "options": [
      "axis",
      "legend",
      "annotation",
      "correlation"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Sales follow a clear seasonal _____ every year. They rise before holidays and fall in early spring.",
    "options": [
      "axis",
      "pattern",
      "legend",
      "scale"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The _____ of fuel prices makes planning difficult for airlines. Ticket prices often change with little warning.",
    "options": [
      "clarity",
      "legend",
      "volatility",
      "baseline"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "An _____ next to the drop explains that the store was closed for repairs. Readers will not be confused by it.",
    "options": [
      "annotation",
      "axis",
      "interval",
      "slope"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Use a bright color to _____ the most important figures. Busy readers should notice them at once.",
    "options": [
      "intersect",
      "compare",
      "decrease",
      "highlight"
    ],
    "answer": 3,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "axis": {
    "pos": "n.",
    "en_def": "a straight reference line on a graph that shows values",
    "cn_def": "座標軸"
  },
  "line": {
    "pos": "n.",
    "en_def": "a long thin mark that connects points on a chart",
    "cn_def": "線"
  },
  "point": {
    "pos": "n.",
    "en_def": "a single dot on a graph that shows one value",
    "cn_def": "點；數據點"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general direction in which something is changing",
    "cn_def": "趨勢"
  },
  "time series": {
    "pos": "n.phr.",
    "en_def": "a set of data collected at regular times, in order",
    "cn_def": "時間序列"
  },
  "slope": {
    "pos": "n.",
    "en_def": "how steeply a line goes up or down on a graph",
    "cn_def": "斜率；坡度"
  },
  "fluctuation": {
    "pos": "n.",
    "en_def": "a change up and down, often irregular",
    "cn_def": "波動；起伏"
  },
  "peak": {
    "pos": "n.",
    "en_def": "the highest point or level",
    "cn_def": "高峰；最高點"
  },
  "dip": {
    "pos": "n.",
    "en_def": "a small, short fall in amount or level",
    "cn_def": "下降；小幅下跌"
  },
  "intersect": {
    "pos": "v.",
    "en_def": "to cross each other at a point",
    "cn_def": "相交；交叉"
  },
  "trajectory": {
    "pos": "n.",
    "en_def": "the path or direction that something follows over time",
    "cn_def": "軌跡；發展方向"
  },
  "baseline": {
    "pos": "n.",
    "en_def": "a starting level used for comparison",
    "cn_def": "基準線；基準"
  },
  "continuous": {
    "pos": "adj.",
    "en_def": "going on without stopping or breaks",
    "cn_def": "連續的；不間斷的"
  },
  "interval": {
    "pos": "n.",
    "en_def": "a period of time or space between two things",
    "cn_def": "間隔"
  },
  "scale": {
    "pos": "n.",
    "en_def": "the set of numbers or marks used to measure on a graph",
    "cn_def": "刻度；比例尺"
  },
  "variation": {
    "pos": "n.",
    "en_def": "a difference or change in amount or level",
    "cn_def": "變化；差異"
  },
  "rate": {
    "pos": "n.",
    "en_def": "the speed at which something happens or changes",
    "cn_def": "速率；比率"
  },
  "increase": {
    "pos": "n.",
    "en_def": "a rise in amount, number, or level",
    "cn_def": "增加；成長"
  },
  "decrease": {
    "pos": "n.",
    "en_def": "a fall in amount, number, or level",
    "cn_def": "減少；下降"
  },
  "forecast": {
    "pos": "n.",
    "en_def": "a statement about what is expected to happen in the future",
    "cn_def": "預測"
  },
  "projection": {
    "pos": "n.",
    "en_def": "an estimate of future numbers based on present information",
    "cn_def": "推估；預估"
  },
  "smooth": {
    "pos": "adj.",
    "en_def": "even and without sudden changes",
    "cn_def": "平滑的；平穩的"
  },
  "compare": {
    "pos": "v.",
    "en_def": "to look at two or more things to see how they are similar or different",
    "cn_def": "比較"
  },
  "legend": {
    "pos": "n.",
    "en_def": "a small box on a chart that explains what colors or symbols mean",
    "cn_def": "圖例"
  },
  "series": {
    "pos": "n.",
    "en_def": "a group of related numbers shown together as one line",
    "cn_def": "數列；系列"
  },
  "correlation": {
    "pos": "n.",
    "en_def": "a connection between two things that change together",
    "cn_def": "相關性；關聯"
  },
  "pattern": {
    "pos": "n.",
    "en_def": "a regular way in which something happens or is repeated",
    "cn_def": "模式；規律"
  },
  "volatility": {
    "pos": "n.",
    "en_def": "the quality of changing suddenly and often",
    "cn_def": "波動性；不穩定性"
  },
  "annotation": {
    "pos": "n.",
    "en_def": "a short note added to a chart to explain something",
    "cn_def": "註解；標註"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清晰度；清楚"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to make something easy to notice",
    "cn_def": "強調；標示出"
  }
};

const EXTRA_GLOSSES = {};
