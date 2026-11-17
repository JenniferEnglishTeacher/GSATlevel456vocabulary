// Topic 285 Quiz Data: Pie Chart 圓餅圖
// Source word list: https://www.examword.com/group-topic/pie-chart — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T285 - Pie Chart 圓餅圖",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "slice",
    "pos": "n.",
    "cn_def": "（圓餅圖中的）一塊；扇形塊",
    "en_def": "one part of a pie chart, shaped like a piece of pie",
    "sentence": "A: Our sales report for the third quarter looks a bit confusing, so which part of the pie chart shows the online orders from overseas customers? B: The small blue {{BLANK}} near the top represents online orders, and although it looks tiny now, the marketing team expects it to grow quickly next year.",
    "cn": "A：我們第三季的銷售報告看起來有點混亂，圓餅圖中哪一部分顯示的是海外客戶的線上訂單？ B：靠近頂端那個藍色的小【扇形塊】代表線上訂單，雖然現在看起來很小，但行銷團隊預期明年它會快速成長。"
  },
  {
    "word": "sector",
    "pos": "n.",
    "cn_def": "扇形區；（圖表的）區塊",
    "en_def": "one part of a circle or chart between two lines from the center",
    "sentence": "A: When we present the budget at tomorrow's board meeting, how should we show the money spent on staff training compared with equipment? B: I suggest we make a separate {{BLANK}} for training costs in green, because the directors want to see clearly how much of the budget went to employee development this year.",
    "cn": "A：我們明天在董事會上報告預算時，應該如何呈現員工訓練的花費與設備花費的對比？ B：我建議我們把訓練費用做成一個獨立的綠色【扇形區】，因為董事們想清楚看到今年有多少預算用於員工發展。"
  },
  {
    "word": "proportion",
    "pos": "n.",
    "cn_def": "比例；部分",
    "en_def": "a part of a total amount or number",
    "sentence": "A: The manager asked me to find out how many of our customers come back to buy again, but where can I find that information quickly? B: Look at the customer survey chart on page four; it shows that a large {{BLANK}} of shoppers, almost two-thirds, returned to our store within six months.",
    "cn": "A：經理要我查出我們有多少客戶會回來再次購買，但我可以在哪裡快速找到這些資訊？ B：看第四頁的顧客調查圖表，它顯示有很大【比例】的購物者，將近三分之二，在六個月內回到我們的店。"
  },
  {
    "word": "percentage",
    "pos": "n.",
    "cn_def": "百分比",
    "en_def": "an amount shown as a part of 100",
    "sentence": "A: The new pie chart from the accounting department is very colorful, but I can't tell exactly how much money each branch office spent last month. B: That's because they forgot to write the {{BLANK}} on each part, so I'll email them now and ask them to add the numbers before the meeting.",
    "cn": "A：會計部門做的新圓餅圖色彩非常豐富，但我看不出每間分公司上個月到底花了多少錢。 B：那是因為他們忘了在每個部分上標示【百分比】，所以我現在就寄電子郵件請他們在會議前把數字加上去。"
  },
  {
    "word": "whole",
    "pos": "n.",
    "cn_def": "整體；全部",
    "en_def": "all of something; the complete amount",
    "sentence": "A: Why does the pie chart in your presentation only add up to ninety-five percent instead of one hundred? I'm worried the clients will notice the mistake. B: You're right; I left out the small group of customers from Asia, so the chart doesn't show the {{BLANK}}, and I'll fix it before lunch.",
    "cn": "A：為什麼你簡報中的圓餅圖加起來只有百分之九十五，而不是百分之一百？我擔心客戶會注意到這個錯誤。 B：你說得對，我漏掉了來自亞洲的那一小群客戶，所以圖表沒有呈現出【整體】，我會在午餐前修正。"
  },
  {
    "word": "share",
    "pos": "n.",
    "cn_def": "占有率；份額",
    "en_def": "the part of something that belongs to one person or group",
    "sentence": "A: Our company has been selling coffee machines for ten years, but do you know how we're doing against the other brands in the local market now? B: According to the latest industry report, we have the largest market {{BLANK}}, about forty percent, while our biggest competitor has only about a quarter.",
    "cn": "A：我們公司已經賣咖啡機十年了，但你知道我們現在在本地市場中和其他品牌相比表現如何嗎？ B：根據最新的產業報告，我們擁有最大的市場【占有率】，大約百分之四十，而我們最大的競爭對手只有大約四分之一。"
  },
  {
    "word": "distribution",
    "pos": "n.",
    "cn_def": "分布；分配",
    "en_def": "the way something is spread or divided among a group",
    "sentence": "A: The human resources director wants to know how our employees are spread across the different age groups before she plans next year's training programs. B: I've already made a pie chart that shows the age {{BLANK}} of all three hundred workers, and most of them are between twenty-five and forty years old.",
    "cn": "A：人力資源主管想在規劃明年的訓練課程之前，了解我們的員工在不同年齡層中是如何分布的。 B：我已經做了一張圓餅圖，呈現所有三百名員工的年齡【分布】，他們大多數在二十五到四十歲之間。"
  },
  {
    "word": "category",
    "pos": "n.",
    "cn_def": "類別；種類",
    "en_def": "a group of things that are similar in some way",
    "sentence": "A: The chart of our monthly office expenses has too many small parts, and nobody at the meeting could read it clearly last time. B: Let's put printer paper, pens, and other small supplies into one {{BLANK}} called office supplies, so the chart will look much simpler and easier to understand.",
    "cn": "A：我們每月辦公室開支的圖表有太多小部分，上次會議上沒有人能看清楚。 B：我們把影印紙、筆和其他小型用品歸入一個叫「辦公用品」的【類別】，這樣圖表看起來會簡單得多，也更容易理解。"
  },
  {
    "word": "composition",
    "pos": "n.",
    "cn_def": "組成；構成",
    "en_def": "the different parts that make up something",
    "sentence": "A: Before we hire new staff for the sales team, the manager wants to understand who is working in the department right now. B: I prepared a pie chart that shows the {{BLANK}} of the team by experience level, and it shows that more than half of our salespeople joined the company less than two years ago.",
    "cn": "A：在我們為業務團隊招募新員工之前，經理想了解目前部門裡有哪些人在工作。 B：我準備了一張圓餅圖，依經驗程度呈現團隊的【組成】，它顯示超過一半的業務員是在不到兩年前加入公司的。"
  },
  {
    "word": "ratio",
    "pos": "n.",
    "cn_def": "比率；比例",
    "en_def": "the relationship between two numbers, such as 3 to 1",
    "sentence": "A: The customer service department is always busy on weekends, so do we have enough staff to answer all the calls and emails? B: Not really; the {{BLANK}} of customers to staff is about fifty to one on Saturdays, so I think we should hire two more part-time workers before the holiday season starts.",
    "cn": "A：客服部門週末總是很忙，我們有足夠的人手接聽所有電話和回覆電子郵件嗎？ B：其實沒有，週六顧客與員工的【比率】大約是五十比一，所以我認為我們應該在假期旺季開始前再雇用兩名兼職人員。"
  },
  {
    "word": "fraction",
    "pos": "n.",
    "cn_def": "一小部分；分數",
    "en_def": "a small part of something",
    "sentence": "A: I heard the new product line was very successful in Japan, but how much did it actually add to our total income this year? B: To be honest, it was only a small {{BLANK}} of our total sales, less than five percent, but the managers believe it will grow much bigger next year.",
    "cn": "A：我聽說新產品線在日本非常成功，但它今年實際上為我們的總收入增加了多少？ B：老實說，它只占我們總銷售額的一小【部分】，不到百分之五，但經理們相信明年它會成長得更大。"
  },
  {
    "word": "label",
    "pos": "n.",
    "cn_def": "標籤；標示",
    "en_def": "a word or short text that names or explains something",
    "sentence": "A: When I printed the pie chart for the client meeting, all the parts looked almost the same, and I couldn't remember which part was which. B: You should add a clear {{BLANK}} next to each part with the department name and the number, so the clients won't get confused during the presentation.",
    "cn": "A：我把客戶會議要用的圓餅圖印出來時，所有部分看起來幾乎一樣，我記不得哪一部分是哪一個。 B：你應該在每個部分旁邊加上清楚的【標籤】，寫上部門名稱和數字，這樣客戶在簡報時就不會搞混。"
  },
  {
    "word": "legend",
    "pos": "n.",
    "cn_def": "圖例",
    "en_def": "a small box on a chart that explains what the colors or symbols mean",
    "sentence": "A: The new chart uses six different colors, but how will the readers of our annual report know what each color stands for? B: I put a small {{BLANK}} in the bottom right corner of the page that explains every color, so readers can check it quickly while they look at the numbers.",
    "cn": "A：新圖表用了六種不同的顏色，但我們年度報告的讀者要怎麼知道每種顏色代表什麼？ B：我在頁面右下角放了一個小【圖例】，解釋每一種顏色，讓讀者在看數字時可以快速查看。"
  },
  {
    "word": "color",
    "pos": "n.",
    "cn_def": "顏色",
    "en_def": "red, blue, green, etc.",
    "sentence": "A: The pie chart for the marketing presentation looks a little boring, and the parts for social media and television are hard to tell apart. B: Let's give each part a different {{BLANK}}, such as bright red for social media and dark blue for television, so the audience can see the difference immediately.",
    "cn": "A：行銷簡報的圓餅圖看起來有點單調，社群媒體和電視這兩部分很難分辨。 B：我們給每個部分不同的【顏色】，例如社群媒體用亮紅色、電視用深藍色，這樣觀眾就能立刻看出差別。"
  },
  {
    "word": "angle",
    "pos": "n.",
    "cn_def": "角度；角",
    "en_def": "the space between two lines that meet, measured in degrees",
    "sentence": "A: I'm drawing the pie chart by hand for the training workshop, but how do I know how big each part should be? B: Just multiply each percentage by three point six to find the {{BLANK}} of each part in degrees, and then use a protractor to draw it carefully on the poster paper.",
    "cn": "A：我正在為訓練工作坊手繪圓餅圖，但我怎麼知道每個部分應該多大？ B：只要把每個百分比乘以三點六，就能算出每個部分的【角度】是幾度，然後用量角器在海報紙上仔細畫出來。"
  },
  {
    "word": "segment",
    "pos": "n.",
    "cn_def": "區塊；部分；（市場）族群",
    "en_def": "one of the parts that something is divided into",
    "sentence": "A: Our customers come from many different age groups, so which group should the advertising team focus on for the new sports drink? B: The chart shows that the largest {{BLANK}} is people aged eighteen to thirty, so we should spend most of our advertising money on young adults who exercise regularly.",
    "cn": "A：我們的顧客來自許多不同年齡層，廣告團隊應該針對哪一個族群推廣新的運動飲料？ B：圖表顯示最大的【區塊】是十八到三十歲的人，所以我們應該把大部分廣告預算花在經常運動的年輕人身上。"
  },
  {
    "word": "compare",
    "pos": "v.",
    "cn_def": "比較",
    "en_def": "to look at two or more things to see how they are alike or different",
    "sentence": "A: The director wants to see if our new store in the city center is doing better than the old one near the train station. B: I'll make two pie charts so we can {{BLANK}} the sales of both stores side by side, and I'll send them to the director before Friday afternoon.",
    "cn": "A：主管想知道我們在市中心的新店是否比火車站附近的舊店經營得更好。 B：我會做兩張圓餅圖，讓我們可以並排【比較】兩家店的銷售額，我會在週五下午之前寄給主管。"
  },
  {
    "word": "emphasis",
    "pos": "n.",
    "cn_def": "強調；重點",
    "en_def": "special importance or attention given to something",
    "sentence": "A: Our presentation has a lot of information, but what is the most important message we want the investors to remember after the meeting? B: We should put special {{BLANK}} on the growth of online sales, so I made that part of the chart bigger and brighter than all the others.",
    "cn": "A：我們的簡報資訊很多，但我們希望投資人在會後記住的最重要訊息是什麼？ B：我們應該特別【強調】線上銷售的成長，所以我把圖表中那一部分做得比其他部分更大、更醒目。"
  },
  {
    "word": "dominant",
    "pos": "adj.",
    "cn_def": "占主導地位的；最主要的",
    "en_def": "biggest, strongest, or most important",
    "sentence": "A: Looking at this year's sales chart, which product brought in the most money for our company, and should we continue to support it? B: Laptops are clearly the {{BLANK}} product, making up almost seventy percent of total sales, so the managers have decided to keep investing in them next year.",
    "cn": "A：看今年的銷售圖表，哪一項產品為公司帶來最多收入？我們應該繼續支持它嗎？ B：筆記型電腦顯然是【占主導地位的】產品，幾乎占總銷售額的百分之七十，所以經理們已決定明年繼續投資。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "次要的；較小的",
    "en_def": "small and not very important",
    "sentence": "A: The chart shows that customer complaints about delivery went up this month, so should we be worried about it? B: It's only a {{BLANK}} problem because those complaints are just three percent of the total, but we should still talk to the delivery company to make sure it doesn't get worse.",
    "cn": "A：圖表顯示這個月顧客對送貨的抱怨增加了，我們應該擔心嗎？ B：這只是個【次要的】問題，因為那些抱怨只占總數的百分之三，但我們仍應該和貨運公司談談，確保情況不會惡化。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a good state in which different things are equal or in the right amounts",
    "sentence": "A: The new budget chart shows that we spend most of our money on advertising, but very little on training our staff. B: I agree that we need a better {{BLANK}} between the two, so I'll suggest moving some money from advertising into training programs at next week's planning meeting.",
    "cn": "A：新的預算圖表顯示我們把大部分的錢花在廣告上，但用於員工訓練的很少。 B：我同意我們需要在兩者之間取得更好的【平衡】，所以我會在下週的規劃會議中建議把部分廣告經費轉到訓練課程上。"
  },
  {
    "word": "contrast",
    "pos": "n.",
    "cn_def": "對比；差異",
    "en_def": "a clear difference between two things",
    "sentence": "A: In the presentation slide, the parts of the chart for March and April look almost the same, and people in the back of the room can't see them. B: Let's use colors with more {{BLANK}}, like black and yellow, so everyone in the meeting room can tell the parts apart easily.",
    "cn": "A：在簡報投影片中，圖表裡三月和四月的部分看起來幾乎一樣，坐在會議室後面的人看不清楚。 B：我們改用【對比】更強的顏色，例如黑色和黃色，讓會議室裡每個人都能輕鬆分辨各部分。"
  },
  {
    "word": "clarity",
    "pos": "n.",
    "cn_def": "清晰；清楚",
    "en_def": "the quality of being clear and easy to understand",
    "sentence": "A: The client said our report was hard to follow because there were too many numbers and long tables on every page. B: For better {{BLANK}}, let's replace some of the long tables with simple pie charts, so the client can understand the main points in just a few seconds.",
    "cn": "A：客戶說我們的報告很難理解，因為每一頁都有太多數字和冗長的表格。 B：為了更加【清晰】，我們把一些冗長的表格換成簡單的圓餅圖，讓客戶只要幾秒鐘就能理解重點。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "突顯；強調",
    "en_def": "to make something easy to notice",
    "sentence": "A: Our team leader wants the investors to notice how fast our online business is growing, but the chart doesn't make that very clear. B: We can {{BLANK}} the online sales part by pulling it slightly away from the rest of the pie and using a bright orange color.",
    "cn": "A：我們的組長希望投資人注意到我們線上業務成長得有多快，但圖表並沒有把這點表現得很清楚。 B：我們可以把線上銷售那一塊從圓餅中稍微拉出來，並使用亮橘色，來【突顯】這部分。"
  },
  {
    "word": "summary",
    "pos": "n.",
    "cn_def": "摘要；總結",
    "en_def": "a short statement of the main points",
    "sentence": "A: The managers are very busy this week and probably won't have time to read the full thirty-page report about customer feedback. B: I'll write a one-page {{BLANK}} with a pie chart at the top, so they can see the main results quickly before Thursday's meeting.",
    "cn": "A：經理們這週非常忙，可能沒有時間閱讀整份三十頁的顧客意見報告。 B：我會寫一份一頁的【摘要】，最上方放一張圓餅圖，讓他們在週四會議前能快速看到主要結果。"
  },
  {
    "word": "ranking",
    "pos": "n.",
    "cn_def": "排名",
    "en_def": "a list that shows the position of things from best to worst",
    "sentence": "A: The sales director asked which of our ten stores sold the most winter jackets last month, but the pie chart is hard to read. B: I'll make a simple {{BLANK}} list from first to tenth place next to the chart, so she can quickly see which stores did best and which need help.",
    "cn": "A：業務總監問我們十家店中哪一家上個月賣出最多冬季外套，但圓餅圖很難看懂。 B：我會在圖表旁邊做一份從第一名到第十名的簡單【排名】清單，讓她能快速看出哪些店表現最好、哪些需要協助。"
  },
  {
    "word": "visualization",
    "pos": "n.",
    "cn_def": "視覺化；圖像化",
    "en_def": "the use of charts or pictures to show information",
    "sentence": "A: Our boss thinks the new spreadsheet has too many numbers and that nobody at the board meeting will understand it quickly. B: I agree, so I'll use a data {{BLANK}} tool to turn the numbers into colorful charts that make the main trends easy to see at a glance.",
    "cn": "A：我們老闆覺得新的試算表數字太多，董事會上沒有人能很快看懂。 B：我同意，所以我會用一個資料【視覺化】工具，把數字轉成色彩豐富的圖表，讓主要趨勢一目了然。"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "cn_def": "解讀；解釋",
    "en_def": "to explain or understand the meaning of something",
    "sentence": "A: The new interns have never worked with sales reports before, and they look confused when they see all the charts in our weekly meeting. B: I'll spend an hour this afternoon teaching them how to {{BLANK}} pie charts correctly, so they can understand what the numbers really mean for our business.",
    "cn": "A：新來的實習生以前從沒處理過銷售報告，在每週會議上看到那麼多圖表時看起來很困惑。 B：我今天下午會花一個小時教他們如何正確【解讀】圓餅圖，讓他們明白這些數字對我們的業務真正意味著什麼。"
  },
  {
    "word": "comparison",
    "pos": "n.",
    "cn_def": "比較；對照",
    "en_def": "the act of looking at things to see how they are alike or different",
    "sentence": "A: Our customers keep asking whether our new phone plan is cheaper than the plans offered by other companies in town. B: Let's put a clear price {{BLANK}} on our website with a chart showing all three companies, so customers can see right away that our plan offers better value.",
    "cn": "A：我們的顧客一直問我們的新手機方案是否比鎮上其他公司提供的方案便宜。 B：我們在網站上放一個清楚的價格【比較】，搭配一張呈現三家公司的圖表，讓顧客立刻看出我們的方案更划算。"
  }
];

const MCQS = [
  {
    "q": "The marketing budget takes the biggest _____ of the pie chart this year. Almost half of our spending now goes to online advertising.",
    "options": [
      "slice",
      "ranking",
      "legend",
      "clarity"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "In the chart, each colored _____ represents one of our five regional offices. The northern office has the largest one by far.",
    "options": [
      "summary",
      "emphasis",
      "sector",
      "clarity"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "A high _____ of our customers now pay by smartphone. Only a few still use cash when they shop in our stores.",
    "options": [
      "legend",
      "proportion",
      "clarity",
      "label"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please write the exact _____ inside each part of the chart. Readers should not have to guess the numbers from the size alone.",
    "options": [
      "emphasis",
      "ranking",
      "clarity",
      "percentage"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The four parts of a pie chart should always add up to the _____. If they don't, the readers will notice the mistake.",
    "options": [
      "label",
      "angle",
      "whole",
      "contrast"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Our company now holds a 30 percent market _____ in the region. We hope to reach 40 percent within two years.",
    "options": [
      "share",
      "legend",
      "angle",
      "clarity"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The report shows the _____ of sales across our six branch offices. Most of the income comes from the two largest cities.",
    "options": [
      "emphasis",
      "clarity",
      "legend",
      "distribution"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Coffee and tea are placed in the same _____ in our sales chart. Both are listed under hot drinks.",
    "options": [
      "angle",
      "category",
      "clarity",
      "emphasis"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The chart shows the _____ of our workforce by department. Engineers make up about half of all employees.",
    "options": [
      "composition",
      "emphasis",
      "clarity",
      "angle"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The _____ of managers to workers in the factory is one to twenty. The company plans to hire more supervisors next year.",
    "options": [
      "label",
      "legend",
      "ratio",
      "emphasis"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Only a small _____ of the budget was spent on training last year. Most of the money went to new equipment.",
    "options": [
      "legend",
      "fraction",
      "clarity",
      "contrast"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Each part of the chart needs a clear _____ with the product name. Without it, the clients will not know what the colors mean.",
    "options": [
      "ratio",
      "proportion",
      "distribution",
      "label"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The chart's _____ explains what each color stands for. It is printed in small letters below the diagram.",
    "options": [
      "ratio",
      "fraction",
      "legend",
      "proportion"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Please use a different _____ for each department in the chart. Bright shades will make the slides easier to read.",
    "options": [
      "color",
      "ratio",
      "summary",
      "ranking"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "A slice that shows a quarter of the total forms a right _____ at the center. Half of the pie forms a straight line.",
    "options": [
      "ranking",
      "summary",
      "clarity",
      "angle"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Young professionals are the fastest-growing customer _____ for our coffee shops. We plan to open more stores near office buildings.",
    "options": [
      "legend",
      "segment",
      "clarity",
      "angle"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Investors often _____ our results with those of our main competitors. This year our profits were much higher than theirs.",
    "options": [
      "compare",
      "interpret",
      "highlight",
      "decorate"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The speaker placed special _____ on customer satisfaction during her talk. She repeated the survey results three times.",
    "options": [
      "ratio",
      "legend",
      "emphasis",
      "fraction"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Smartphones are the _____ product in our sales chart this year. They make up nearly 70 percent of total revenue.",
    "options": [
      "minor",
      "dominant",
      "careless",
      "absent"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Shipping costs are only a _____ part of our total expenses. They make up less than three percent of the budget.",
    "options": [
      "dominant",
      "massive",
      "complete",
      "minor"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Good managers try to find a healthy _____ between cost and quality. Cutting costs too much can hurt the company's reputation.",
    "options": [
      "legend",
      "label",
      "balance",
      "angle"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The bright yellow slice stands out in sharp _____ to the dark gray background. Everyone in the room noticed it right away.",
    "options": [
      "contrast",
      "ratio",
      "ranking",
      "summary"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The designer improved the _____ of the chart by removing extra lines and text. Now the main message is easy to see.",
    "options": [
      "fraction",
      "ranking",
      "ratio",
      "clarity"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "In the report, please _____ the three most important figures in bold. The directors do not have time to read every number.",
    "options": [
      "interpret",
      "highlight",
      "compare",
      "delay"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Our assistant wrote a short _____ of the survey results for the busy managers. It fits on a single page.",
    "options": [
      "summary",
      "angle",
      "legend",
      "ratio"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The magazine published its annual _____ of the best places to work. Our company was listed in fifth place.",
    "options": [
      "ratio",
      "angle",
      "ranking",
      "legend"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Good data _____ helps busy managers understand complex numbers quickly. Charts and maps are more effective than long tables.",
    "options": [
      "ratio",
      "visualization",
      "fraction",
      "angle"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "New staff often find it difficult to _____ the financial charts in our monthly reports. A short training session will help them.",
    "options": [
      "apologize",
      "recover",
      "retire",
      "interpret"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The website offers a side-by-side _____ of the three phone plans. Customers can easily see which one costs the least.",
    "options": [
      "fraction",
      "legend",
      "comparison",
      "angle"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Each partner will receive an equal _____ of the profits from the new project. The agreement was signed last Friday.",
    "options": [
      "share",
      "angle",
      "legend",
      "clarity"
    ],
    "answer": 0,
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "slice": {
    "pos": "n.",
    "en_def": "one part of a pie chart, shaped like a piece of pie",
    "cn_def": "（圓餅圖中的）一塊；扇形塊"
  },
  "sector": {
    "pos": "n.",
    "en_def": "one part of a circle or chart between two lines from the center",
    "cn_def": "扇形區；（圖表的）區塊"
  },
  "proportion": {
    "pos": "n.",
    "en_def": "a part of a total amount or number",
    "cn_def": "比例；部分"
  },
  "percentage": {
    "pos": "n.",
    "en_def": "an amount shown as a part of 100",
    "cn_def": "百分比"
  },
  "whole": {
    "pos": "n.",
    "en_def": "all of something; the complete amount",
    "cn_def": "整體；全部"
  },
  "share": {
    "pos": "n.",
    "en_def": "the part of something that belongs to one person or group",
    "cn_def": "占有率；份額"
  },
  "distribution": {
    "pos": "n.",
    "en_def": "the way something is spread or divided among a group",
    "cn_def": "分布；分配"
  },
  "category": {
    "pos": "n.",
    "en_def": "a group of things that are similar in some way",
    "cn_def": "類別；種類"
  },
  "composition": {
    "pos": "n.",
    "en_def": "the different parts that make up something",
    "cn_def": "組成；構成"
  },
  "ratio": {
    "pos": "n.",
    "en_def": "the relationship between two numbers, such as 3 to 1",
    "cn_def": "比率；比例"
  },
  "fraction": {
    "pos": "n.",
    "en_def": "a small part of something",
    "cn_def": "一小部分；分數"
  },
  "label": {
    "pos": "n.",
    "en_def": "a word or short text that names or explains something",
    "cn_def": "標籤；標示"
  },
  "legend": {
    "pos": "n.",
    "en_def": "a small box on a chart that explains what the colors or symbols mean",
    "cn_def": "圖例"
  },
  "color": {
    "pos": "n.",
    "en_def": "red, blue, green, etc.",
    "cn_def": "顏色"
  },
  "angle": {
    "pos": "n.",
    "en_def": "the space between two lines that meet, measured in degrees",
    "cn_def": "角度；角"
  },
  "segment": {
    "pos": "n.",
    "en_def": "one of the parts that something is divided into",
    "cn_def": "區塊；部分；（市場）族群"
  },
  "compare": {
    "pos": "v.",
    "en_def": "to look at two or more things to see how they are alike or different",
    "cn_def": "比較"
  },
  "emphasis": {
    "pos": "n.",
    "en_def": "special importance or attention given to something",
    "cn_def": "強調；重點"
  },
  "dominant": {
    "pos": "adj.",
    "en_def": "biggest, strongest, or most important",
    "cn_def": "占主導地位的；最主要的"
  },
  "minor": {
    "pos": "adj.",
    "en_def": "small and not very important",
    "cn_def": "次要的；較小的"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a good state in which different things are equal or in the right amounts",
    "cn_def": "平衡"
  },
  "contrast": {
    "pos": "n.",
    "en_def": "a clear difference between two things",
    "cn_def": "對比；差異"
  },
  "clarity": {
    "pos": "n.",
    "en_def": "the quality of being clear and easy to understand",
    "cn_def": "清晰；清楚"
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
  "ranking": {
    "pos": "n.",
    "en_def": "a list that shows the position of things from best to worst",
    "cn_def": "排名"
  },
  "visualization": {
    "pos": "n.",
    "en_def": "the use of charts or pictures to show information",
    "cn_def": "視覺化；圖像化"
  },
  "interpret": {
    "pos": "v.",
    "en_def": "to explain or understand the meaning of something",
    "cn_def": "解讀；解釋"
  },
  "comparison": {
    "pos": "n.",
    "en_def": "the act of looking at things to see how they are alike or different",
    "cn_def": "比較；對照"
  }
};

const EXTRA_GLOSSES = {};
