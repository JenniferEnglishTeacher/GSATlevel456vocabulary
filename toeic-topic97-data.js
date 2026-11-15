// Topic 97 Quiz Data: Data Table 數據表格
// Source word list: https://www.examword.com/group-topic/data-table — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T97 - Data Table 數據表格",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "data table",
    "pos": "n.phr.",
    "cn_def": "數據表格；資料表",
    "en_def": "a set of information arranged in rows and columns",
    "sentence": "A: How should I show the monthly sales figures from our five branch offices in the report for tomorrow's board meeting? B: Put them in a simple {{BLANK}} with one line for each branch and one for each month, so the directors can compare the numbers quickly without reading long paragraphs.",
    "cn": "A：明天董事會會議的報告中，我應該如何呈現五間分公司的每月銷售數字？ B：把它們放進一個簡單的【數據表格】，每間分公司一行、每個月一欄，這樣董事們不用讀長篇段落就能快速比較數字。"
  },
  {
    "word": "row",
    "pos": "n.",
    "cn_def": "列；橫排",
    "en_def": "a line of things going across from left to right",
    "sentence": "A: I added the new customer's name to the spreadsheet, but where should I type her address and phone number? B: Keep all of her details in the same {{BLANK}} as her name, and then move across to the right, filling in each box until her contact information is complete.",
    "cn": "A：我把新客戶的名字加進試算表了，但她的地址和電話號碼要打在哪裡？ B：把她所有的資料都放在跟她名字同一【列】，然後往右移，逐格填寫，直到她的聯絡資訊完整為止。"
  },
  {
    "word": "column",
    "pos": "n.",
    "cn_def": "欄；直行",
    "en_def": "a line of things going from top to bottom",
    "sentence": "A: The finance manager says the expense sheet is hard to read, so what change do you think we should make first? B: Let's add a separate {{BLANK}} on the far right for the total cost of each trip, so she can look down that side and see every amount at once.",
    "cn": "A：財務經理說費用表很難閱讀，你認為我們應該先做什麼修改？ B：我們在最右邊另外加一個【欄】來放每趟出差的總費用，這樣她往下看那一側就能一次看到所有金額。"
  },
  {
    "word": "cell",
    "pos": "n.",
    "cn_def": "儲存格",
    "en_def": "one small box in a table or spreadsheet",
    "sentence": "A: Why is the total at the bottom of the budget sheet showing an error message instead of a number this morning? B: Someone typed the word 'ten' into one {{BLANK}} instead of the number 10, so the formula can't add it up until we correct that box.",
    "cn": "A：為什麼今天早上預算表底部的總計顯示錯誤訊息而不是數字？ B：有人在一個【儲存格】裡打了英文字「ten」而不是數字10，所以在我們修正那一格之前，公式無法把它加總。"
  },
  {
    "word": "header",
    "pos": "n.",
    "cn_def": "表頭；標題列",
    "en_def": "the title at the top of a column or page",
    "sentence": "A: The new interns keep putting phone numbers in the email column of the client list, so how can we stop this mistake? B: Let's write a clear {{BLANK}} in bold at the top of every column, such as 'Phone' or 'Email', so nobody has to guess what goes where.",
    "cn": "A：新來的實習生一直把電話號碼填到客戶名單的電子郵件欄，我們要怎麼避免這種錯誤？ B：我們在每一欄最上方用粗體寫一個清楚的【表頭】，例如「電話」或「電子郵件」，這樣就沒人需要猜什麼該填在哪裡。"
  },
  {
    "word": "field",
    "pos": "n.",
    "cn_def": "欄位",
    "en_def": "a space in a form or database for one kind of information",
    "sentence": "A: Why did the online booking system refuse my order when I tried to reserve a meeting room for next Tuesday? B: You probably left one required {{BLANK}} empty, such as your department code, and the system won't accept the form until every box with a star is filled in.",
    "cn": "A：我想預訂下週二的會議室時，為什麼線上預訂系統拒絕了我的訂單？ B：你可能把一個必填【欄位】留白了，例如部門代碼，在每個標有星號的格子都填好之前，系統不會接受表單。"
  },
  {
    "word": "record",
    "pos": "n.",
    "cn_def": "紀錄；一筆資料",
    "en_def": "a set of information about one person or thing stored together",
    "sentence": "A: A customer called to say she moved to a new apartment last month, so what should I do? B: Open her {{BLANK}} in the customer database, change the old address to the new one, and save it, so our next delivery goes to the right place.",
    "cn": "A：一位顧客打電話來說她上個月搬到新公寓了，我該怎麼做？ B：在客戶資料庫裡打開她的【資料紀錄】，把舊地址改成新地址並儲存，這樣我們下一次的送貨就會送到正確的地方。"
  },
  {
    "word": "dataset",
    "pos": "n.",
    "cn_def": "資料集",
    "en_def": "a collection of related data used for study or work",
    "sentence": "A: How did the marketing team find out which age group buys the most of our new sports drink? B: They studied a large {{BLANK}} from last year's online orders, which included the age, city, and purchase history of over twenty thousand customers, and found that buyers under thirty led sales.",
    "cn": "A：行銷團隊是怎麼發現哪個年齡層最常買我們的新運動飲料？ B：他們研究了去年網路訂單的一個大型【資料集】，裡面包含超過兩萬名顧客的年齡、城市和購買紀錄，發現三十歲以下的買家是銷售主力。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "數值",
    "en_def": "a number or amount in a box or calculation",
    "sentence": "A: The chart in my presentation shows that our Tokyo office sold almost nothing in March, but is that really correct? B: No, the {{BLANK}} in that box should be 4,500, not 45, so someone left out two zeros when they copied the numbers from the regional report.",
    "cn": "A：我簡報裡的圖表顯示東京辦公室三月幾乎沒賣出東西，但這真的正確嗎？ B：不，那一格的【數值】應該是4,500而不是45，有人從區域報告複製數字時漏掉了兩個零。"
  },
  {
    "word": "entry",
    "pos": "n.",
    "cn_def": "項目；一筆登錄資料",
    "en_def": "one item of information written in a list or record",
    "sentence": "A: Why does the visitor log show the same delivery driver coming in twice at exactly 9:15 this morning? B: The guard at the front desk accidentally saved the same {{BLANK}} two times, so please delete the extra line before the security manager checks the list this afternoon.",
    "cn": "A：為什麼訪客登記表顯示同一位送貨司機今天早上9:15整進來兩次？ B：前台警衛不小心把同一筆【登錄資料】存了兩次，所以請在保全經理今天下午檢查名單之前刪掉多餘的那一行。"
  },
  {
    "word": "format",
    "pos": "n.",
    "cn_def": "格式",
    "en_def": "the way information is arranged or shown",
    "sentence": "A: The dates in the report from our London office look strange, so why does it say 03/04 for the April meeting? B: They use a different {{BLANK}} that puts the day before the month, so we should change all the dates to one style before we combine the two reports.",
    "cn": "A：倫敦辦公室報告裡的日期看起來很奇怪，為什麼四月的會議寫成03/04？ B：他們使用不同的【格式】，把日放在月之前，所以在合併兩份報告之前，我們應該把所有日期改成同一種樣式。"
  },
  {
    "word": "structure",
    "pos": "n.",
    "cn_def": "結構",
    "en_def": "the way the parts of something are organized",
    "sentence": "A: Our new inventory spreadsheet has become very confusing since three different departments started adding their own data to it. B: I agree, so let's plan a clear {{BLANK}} before next week, with one sheet for each warehouse and the same columns in the same order on every page.",
    "cn": "A：自從三個不同部門開始在新的庫存試算表加入自己的資料後，它就變得非常混亂。 B：我同意，所以我們在下週之前規劃一個清楚的【結構】，每個倉庫一張工作表，而且每一頁的欄位都相同、順序也一樣。"
  },
  {
    "word": "sort",
    "pos": "v.",
    "cn_def": "排序；分類",
    "en_def": "to put things in a particular order",
    "sentence": "A: The sales director wants to know which of our two hundred products made the most money this quarter, so how can I find that fast? B: Just {{BLANK}} the list by total sales from highest to lowest, and the top ten products will appear at the top of the screen.",
    "cn": "A：業務總監想知道我們兩百種產品中哪一種這一季最賺錢，我要怎麼快速找到？ B：只要依照總銷售額從高到低把清單【排序】，前十名產品就會出現在螢幕最上方。"
  },
  {
    "word": "filter",
    "pos": "v.",
    "cn_def": "篩選",
    "en_def": "to show only the items that match certain conditions",
    "sentence": "A: I need a list of only the customers who live in Taichung for our new store opening, but the file has thousands of names. B: You can {{BLANK}} the city column so that it shows Taichung only, and then copy those rows into a new sheet for the invitation letters.",
    "cn": "A：為了新店開幕，我需要一份只有住在台中的顧客名單，但檔案裡有好幾千個名字。 B：你可以【篩選】城市那一欄，讓它只顯示台中，然後把那些列複製到新的工作表上寄邀請函。"
  },
  {
    "word": "index",
    "pos": "n.",
    "cn_def": "索引",
    "en_def": "a list that helps you find information quickly",
    "sentence": "A: The new staff handbook has more than two hundred pages, so how will employees find the rules about vacation days? B: We added an {{BLANK}} at the back with key topics in alphabetical order and page numbers, so anyone can find the holiday policy in seconds.",
    "cn": "A：新的員工手冊有超過兩百頁，員工要怎麼找到休假天數的規定？ B：我們在後面加了一份【索引】，依字母順序列出重要主題和頁碼，所以任何人都能在幾秒內找到休假規定。"
  },
  {
    "word": "lookup",
    "pos": "n.",
    "cn_def": "查找；查詢",
    "en_def": "the act of searching a table to find matching information",
    "sentence": "A: How does the new price sheet show the correct cost when I type a product code into the order form? B: It does an automatic {{BLANK}} in the main product table, finds the matching code, and then brings back the latest price so you don't have to search by hand.",
    "cn": "A：當我在訂單表單輸入產品代碼時，新的價格表是怎麼顯示正確價格的？ B：它會在主產品表中自動進行【查找】，找到相符的代碼，然後帶回最新價格，所以你不必手動搜尋。"
  },
  {
    "word": "alignment",
    "pos": "n.",
    "cn_def": "對齊；對齊方式",
    "en_def": "the way text or numbers are lined up on a page",
    "sentence": "A: The numbers in the price column look messy on the printed copy, so what should I fix before the client meeting at two? B: Change the {{BLANK}} so all the numbers line up on the right side of each box, which makes the prices much easier to compare.",
    "cn": "A：價格欄裡的數字在列印版上看起來很亂，兩點的客戶會議前我該修正什麼？ B：把【對齊方式】改成所有數字都靠每一格的右側排列，這樣價格比較起來會容易得多。"
  },
  {
    "word": "summary",
    "pos": "n.",
    "cn_def": "摘要；總結",
    "en_def": "a short statement of the main points",
    "sentence": "A: The CEO doesn't have time to read all twelve pages of the customer survey results before her flight tonight. B: Then let's write a one-page {{BLANK}} with the five most important findings and a small chart, so she can understand the main points while she waits at the airport.",
    "cn": "A：執行長今晚搭機前沒有時間看完十二頁的顧客調查結果。 B：那我們寫一份一頁的【摘要】，列出五個最重要的發現和一張小圖表，讓她在機場等候時就能了解重點。"
  },
  {
    "word": "aggregate",
    "pos": "v.",
    "cn_def": "匯總；合計",
    "en_def": "to put separate numbers together into one total",
    "sentence": "A: Each of our six stores sends its daily sales numbers in a separate file, so how can head office see the whole picture? B: The new software will {{BLANK}} the figures from all six files every evening and create one total report that managers can read the next morning.",
    "cn": "A：我們六家店各自用不同的檔案傳每日銷售數字，總公司要怎麼看到整體情況？ B：新軟體每天晚上會【匯總】六個檔案的數字，並產生一份總報告，讓經理們隔天早上就能閱讀。"
  },
  {
    "word": "accuracy",
    "pos": "n.",
    "cn_def": "準確性",
    "en_def": "the quality of being correct and without mistakes",
    "sentence": "A: Why is the accounting team checking every number in the annual report again when they already finished it last Friday? B: The bank will use these figures to decide on our loan, so the manager wants to be sure of their {{BLANK}} before we send the report on Monday.",
    "cn": "A：會計團隊上週五已經完成年度報告了，為什麼還要再檢查每一個數字？ B：銀行會用這些數字來決定我們的貸款，所以經理想在週一寄出報告前確認它們的【準確性】。"
  },
  {
    "word": "consistency",
    "pos": "n.",
    "cn_def": "一致性",
    "en_def": "the quality of always being the same in style or method",
    "sentence": "A: Why did the manager return our quarterly report and ask us to change so many small details in the tables? B: She wants {{BLANK}} across all the pages, so every table must use the same font, the same date style, and the same currency symbol from beginning to end.",
    "cn": "A：為什麼經理退回我們的季報，要我們修改表格中這麼多小細節？ B：她希望所有頁面保持【一致性】，所以每個表格從頭到尾都必須使用相同的字型、相同的日期樣式和相同的貨幣符號。"
  },
  {
    "word": "update",
    "pos": "v.",
    "cn_def": "更新",
    "en_def": "to add the newest information to something",
    "sentence": "A: The price list on our website still shows last year's prices, and three customers have already called to complain about it today. B: I'll {{BLANK}} the table with the new prices right after lunch and ask the IT team to check that the website shows the correct numbers by this evening.",
    "cn": "A：我們網站上的價目表還顯示著去年的價格，今天已經有三位顧客打電話來抱怨了。 B：我午餐後馬上用新價格【更新】表格，並請資訊團隊確認網站在今晚前顯示正確的數字。"
  },
  {
    "word": "validation",
    "pos": "n.",
    "cn_def": "驗證；確認",
    "en_def": "the process of checking that information is correct or acceptable",
    "sentence": "A: How can we stop people from typing letters instead of numbers in the phone column of the sign-up sheet? B: We can add data {{BLANK}} to that column, so the sheet shows a warning message and refuses any entry that contains anything other than numbers.",
    "cn": "A：我們要怎麼防止大家在報名表的電話欄打字母而不是數字？ B：我們可以在那一欄加入資料【驗證】，這樣試算表就會顯示警告訊息，並拒絕任何包含數字以外內容的輸入。"
  },
  {
    "word": "numeric",
    "pos": "adj.",
    "cn_def": "數字的",
    "en_def": "made up of numbers",
    "sentence": "A: The new employee ID cards are ready, but why did the system reject the codes that Human Resources sent this morning? B: The system only accepts {{BLANK}} codes with eight digits, and some of the codes from Human Resources included letters, so they need to be changed before printing.",
    "cn": "A：新的員工識別證準備好了，但為什麼系統拒絕了人資部今天早上傳來的代碼？ B：系統只接受八位數的【數字】代碼，而人資部有些代碼包含字母，所以在列印前需要修改。"
  },
  {
    "word": "text",
    "pos": "n.",
    "cn_def": "文字",
    "en_def": "written words",
    "sentence": "A: Why can't the spreadsheet add up the prices in column D, even though they all look like normal numbers? B: Someone saved them as {{BLANK}} instead of numbers when they copied them from an email, so the program treats them like words and cannot calculate them.",
    "cn": "A：為什麼試算表無法加總D欄的價格，即使它們看起來都是正常的數字？ B：有人從電子郵件複製時把它們存成【文字】而不是數字，所以程式把它們當成字詞，無法計算。"
  },
  {
    "word": "missing",
    "pos": "adj.",
    "cn_def": "缺少的；遺漏的",
    "en_def": "not there; lost or not included",
    "sentence": "A: Why can't we send the shipping report to the customer yet, when the deadline is at five o'clock today? B: There are still some {{BLANK}} delivery dates in the table, so I'm calling the warehouse to get those details before we send anything to the client.",
    "cn": "A：今天的截止時間是五點，為什麼我們還不能把出貨報告寄給客戶？ B：表格中還有一些【缺少的】送貨日期，所以我正在打電話給倉庫索取那些細節，然後才會寄任何東西給客戶。"
  },
  {
    "word": "normalize",
    "pos": "v.",
    "cn_def": "標準化；正規化",
    "en_def": "to change data so that it all follows the same standard",
    "sentence": "A: Our offices in Japan, Korea, and the United States report sales in different currencies, so how can we compare them fairly? B: Before we build the chart, we should {{BLANK}} all the figures by changing them into US dollars, so every office is measured in the same way.",
    "cn": "A：我們在日本、韓國和美國的辦公室用不同的貨幣回報銷售額，我們要怎麼公平比較？ B：在製作圖表之前，我們應該把所有數字換算成美元，將它們【標準化】，讓每個辦公室都用同樣的方式衡量。"
  },
  {
    "word": "export",
    "pos": "v.",
    "cn_def": "匯出",
    "en_def": "to move data from one program into a file another program can use",
    "sentence": "A: The accountant from the outside firm doesn't use our company's sales program, so how can we send her the figures? B: We can {{BLANK}} the monthly sales table as an Excel file and email it to her, so she can open it easily on her own computer.",
    "cn": "A：外部事務所的會計師不使用我們公司的銷售程式，我們要怎麼把數字寄給她？ B：我們可以把每月銷售表【匯出】成Excel檔，再用電子郵件寄給她，這樣她就能在自己的電腦上輕鬆打開。"
  },
  {
    "word": "import",
    "pos": "v.",
    "cn_def": "匯入",
    "en_def": "to bring data from another file or program into the one you are using",
    "sentence": "A: The supplier sent us a list of five hundred new products, so do I need to type every item into our system by hand? B: No, you can {{BLANK}} the whole file directly into the inventory program, which will take only a few minutes and avoid typing mistakes.",
    "cn": "A：供應商寄給我們一份五百項新產品的清單，我需要把每個品項都手動輸入系統嗎？ B：不用，你可以把整個檔案直接【匯入】庫存程式，只要幾分鐘，還能避免打字錯誤。"
  },
  {
    "word": "readability",
    "pos": "n.",
    "cn_def": "可讀性；易讀性",
    "en_def": "how easy something is to read",
    "sentence": "A: Several board members complained that last month's financial tables were too crowded and hard to follow during the meeting. B: This time, I'll improve the {{BLANK}} by using a larger font, adding more space between lines, and shading every other row in light gray.",
    "cn": "A：幾位董事抱怨上個月的財務表格太擁擠，開會時很難看懂。 B：這次我會使用較大的字型、增加行距，並把每隔一列塗上淺灰色，來提升表格的【可讀性】。"
  },
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "參考；參考資料",
    "en_def": "something you look at to get information",
    "sentence": "A: Should I print the list of product codes for the new sales assistants who start working at the store on Monday? B: Yes, print a copy for each of them to keep near the cash register as a quick {{BLANK}}, because they won't remember all the codes during their first week.",
    "cn": "A：我應該為週一開始在店裡上班的新銷售助理列印產品代碼清單嗎？ B：是的，每人印一份放在收銀機旁當作快速【參考資料】，因為他們在第一週不會記得所有代碼。"
  }
];

const MCQS = [
  {
    "q": "Please put the survey results into a clear _____ before the meeting. The managers want to compare the answers by row and column.",
    "options": [
      "data table",
      "lookup",
      "alignment",
      "readability"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please _____ the customer list by last name from A to Z. That will make it easier to find each person quickly.",
    "options": [
      "export",
      "normalize",
      "sort",
      "aggregate"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Each new employee gets one _____ in the attendance sheet. Their name goes in the first box, and their working days follow across.",
    "options": [
      "index",
      "summary",
      "validation",
      "row"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The spreadsheet needs one more _____ on the right side. We will list each order's total cost there from top to bottom.",
    "options": [
      "summary",
      "column",
      "accuracy",
      "reference"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "You can _____ the sales report to show only orders from Tainan. All the other cities will be hidden for now.",
    "options": [
      "aggregate",
      "import",
      "filter",
      "normalize"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Click on the _____ where the total appears. You will see the formula that adds up all the numbers above it.",
    "options": [
      "format",
      "cell",
      "consistency",
      "readability"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Each column needs a short _____ at the top. Without one, nobody will know what kind of information the numbers below show.",
    "options": [
      "accuracy",
      "dataset",
      "lookup",
      "header"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The online form will not send if a required _____ is empty. Please check that you entered your email address and phone number.",
    "options": [
      "field",
      "summary",
      "alignment",
      "consistency"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The software will _____ the weekly figures from all twelve stores. Managers will then see one total number for the whole company.",
    "options": [
      "filter",
      "aggregate",
      "sort",
      "export"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The clinic keeps a detailed _____ for every patient in its database. It includes the patient's address, appointments, and payment history.",
    "options": [
      "alignment",
      "lookup",
      "accuracy",
      "record"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The research team collected a huge _____ from ten thousand online shoppers. They will study it to understand buying habits in different cities.",
    "options": [
      "dataset",
      "alignment",
      "header",
      "readability"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The formula returned the wrong _____ in the profit box. The correct amount should be 12,000 dollars, not 1,200.",
    "options": [
      "index",
      "header",
      "value",
      "structure"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The price list on our website is three months old. Please _____ it with the new prices before the sale begins on Friday.",
    "options": [
      "sort",
      "filter",
      "normalize",
      "update"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The receptionist made a new _____ in the visitor log for each guest. She wrote the guest's name and arrival time.",
    "options": [
      "alignment",
      "entry",
      "accuracy",
      "readability"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Please save all the dates in the same _____, such as day, month, and year. Mixing styles will cause errors in the report.",
    "options": [
      "format",
      "cell",
      "lookup",
      "dataset"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The new database has a simple _____ with three main sections. Each section holds information about customers, products, or orders.",
    "options": [
      "lookup",
      "accuracy",
      "structure",
      "entry"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Our branches report sales in yen, won, and dollars. We must _____ the figures into one currency before comparing them.",
    "options": [
      "normalize",
      "sort",
      "filter",
      "import"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "If you cannot find a topic in the manual, check the _____ at the back. It lists every subject with its page number.",
    "options": [
      "alignment",
      "validation",
      "index",
      "consistency"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The order form performs a quick _____ in the price table. It finds the product code and shows the latest price automatically.",
    "options": [
      "readability",
      "consistency",
      "header",
      "lookup"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The numbers in the report do not line up properly. Please change the _____ so all the figures sit on the right side.",
    "options": [
      "dataset",
      "alignment",
      "entry",
      "record"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Our accountant uses a different program from ours. Please _____ the sales table as an Excel file and email it to her.",
    "options": [
      "import",
      "sort",
      "aggregate",
      "export"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The director asked for a one-page _____ of the survey results. She only wants the main points, not every detail.",
    "options": [
      "cell",
      "header",
      "summary",
      "field"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Before we send the invoice, please check the _____ of every figure. One wrong number could cost the company a lot of money.",
    "options": [
      "accuracy",
      "alignment",
      "header",
      "index"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "All reports from our branches must follow the same style. This _____ makes it easier for managers to compare them.",
    "options": [
      "lookup",
      "consistency",
      "cell",
      "entry"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The supplier sent a file with five hundred new products. Instead of typing them, we can _____ the file into our system.",
    "options": [
      "export",
      "aggregate",
      "sort",
      "import"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The sign-up sheet uses data _____ to check each phone number. It will reject any entry that contains letters.",
    "options": [
      "validation",
      "alignment",
      "readability",
      "summary"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Some prices were saved as _____ instead of numbers. As a result, the spreadsheet could not add them up correctly.",
    "options": [
      "index",
      "header",
      "text",
      "lookup"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The new report uses larger fonts and more white space. These changes greatly improve its _____ for older readers.",
    "options": [
      "dataset",
      "readability",
      "lookup",
      "cell"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Keep this list of product codes near the cash register. New staff can use it as a quick _____ during their first week.",
    "options": [
      "alignment",
      "validation",
      "reference",
      "accuracy"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The manager wants to see only unpaid invoices. Please _____ the list so that paid invoices do not appear on the screen.",
    "options": [
      "update",
      "filter",
      "normalize",
      "export"
    ],
    "answer": 1,
    "vocabIndex": 13
  }
];

const LOOKUP = {
  "data table": {
    "pos": "n.phr.",
    "en_def": "a set of information arranged in rows and columns",
    "cn_def": "數據表格；資料表"
  },
  "row": {
    "pos": "n.",
    "en_def": "a line of things going across from left to right",
    "cn_def": "列；橫排"
  },
  "column": {
    "pos": "n.",
    "en_def": "a line of things going from top to bottom",
    "cn_def": "欄；直行"
  },
  "cell": {
    "pos": "n.",
    "en_def": "one small box in a table or spreadsheet",
    "cn_def": "儲存格"
  },
  "header": {
    "pos": "n.",
    "en_def": "the title at the top of a column or page",
    "cn_def": "表頭；標題列"
  },
  "field": {
    "pos": "n.",
    "en_def": "a space in a form or database for one kind of information",
    "cn_def": "欄位"
  },
  "record": {
    "pos": "n.",
    "en_def": "a set of information about one person or thing stored together",
    "cn_def": "紀錄；一筆資料"
  },
  "dataset": {
    "pos": "n.",
    "en_def": "a collection of related data used for study or work",
    "cn_def": "資料集"
  },
  "value": {
    "pos": "n.",
    "en_def": "a number or amount in a box or calculation",
    "cn_def": "數值"
  },
  "entry": {
    "pos": "n.",
    "en_def": "one item of information written in a list or record",
    "cn_def": "項目；一筆登錄資料"
  },
  "format": {
    "pos": "n.",
    "en_def": "the way information is arranged or shown",
    "cn_def": "格式"
  },
  "structure": {
    "pos": "n.",
    "en_def": "the way the parts of something are organized",
    "cn_def": "結構"
  },
  "sort": {
    "pos": "v.",
    "en_def": "to put things in a particular order",
    "cn_def": "排序；分類"
  },
  "filter": {
    "pos": "v.",
    "en_def": "to show only the items that match certain conditions",
    "cn_def": "篩選"
  },
  "index": {
    "pos": "n.",
    "en_def": "a list that helps you find information quickly",
    "cn_def": "索引"
  },
  "lookup": {
    "pos": "n.",
    "en_def": "the act of searching a table to find matching information",
    "cn_def": "查找；查詢"
  },
  "alignment": {
    "pos": "n.",
    "en_def": "the way text or numbers are lined up on a page",
    "cn_def": "對齊；對齊方式"
  },
  "summary": {
    "pos": "n.",
    "en_def": "a short statement of the main points",
    "cn_def": "摘要；總結"
  },
  "aggregate": {
    "pos": "v.",
    "en_def": "to put separate numbers together into one total",
    "cn_def": "匯總；合計"
  },
  "accuracy": {
    "pos": "n.",
    "en_def": "the quality of being correct and without mistakes",
    "cn_def": "準確性"
  },
  "consistency": {
    "pos": "n.",
    "en_def": "the quality of always being the same in style or method",
    "cn_def": "一致性"
  },
  "update": {
    "pos": "v.",
    "en_def": "to add the newest information to something",
    "cn_def": "更新"
  },
  "validation": {
    "pos": "n.",
    "en_def": "the process of checking that information is correct or acceptable",
    "cn_def": "驗證；確認"
  },
  "numeric": {
    "pos": "adj.",
    "en_def": "made up of numbers",
    "cn_def": "數字的"
  },
  "text": {
    "pos": "n.",
    "en_def": "written words",
    "cn_def": "文字"
  },
  "missing": {
    "pos": "adj.",
    "en_def": "not there; lost or not included",
    "cn_def": "缺少的；遺漏的"
  },
  "normalize": {
    "pos": "v.",
    "en_def": "to change data so that it all follows the same standard",
    "cn_def": "標準化；正規化"
  },
  "export": {
    "pos": "v.",
    "en_def": "to move data from one program into a file another program can use",
    "cn_def": "匯出"
  },
  "import": {
    "pos": "v.",
    "en_def": "to bring data from another file or program into the one you are using",
    "cn_def": "匯入"
  },
  "readability": {
    "pos": "n.",
    "en_def": "how easy something is to read",
    "cn_def": "可讀性；易讀性"
  },
  "reference": {
    "pos": "n.",
    "en_def": "something you look at to get information",
    "cn_def": "參考；參考資料"
  }
};

const EXTRA_GLOSSES = {};
