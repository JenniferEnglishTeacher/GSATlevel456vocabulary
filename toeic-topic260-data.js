// Topic 260 Quiz Data: Number 數字
// Source word list: https://www.examword.com/group-topic/number — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T260 - Number 數字",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "represent",
    "pos": "v.",
    "cn_def": "代表；象徵",
    "en_def": "to act or speak officially for a person or group",
    "sentence": "A: Who is going to attend the trade fair in Singapore next month, since our regional director will be busy with the annual budget review? B: The board decided that Ms. Lin from the overseas sales team will {{BLANK}} our company there, and she will bring samples of the new product line to show potential buyers.",
    "cn": "A：既然我們的區域總監下個月要忙年度預算審查，誰會去參加新加坡的貿易展？ B：董事會決定由海外業務團隊的林小姐在那裡【代表】我們公司，她會帶新產品系列的樣品給潛在買家看。"
  },
  {
    "word": "superstition",
    "pos": "n.",
    "cn_def": "迷信",
    "en_def": "a belief in luck or magic that is not based on reason or facts",
    "sentence": "A: Why did the hotel manager decide not to have a fourth floor in the new building, even though the architect included it in the original plans? B: Many of our guests from Asia believe in the old {{BLANK}} that the number four brings bad luck, so the manager labeled that level as the fifth floor instead.",
    "cn": "A：為什麼飯店經理決定新大樓不設四樓，即使建築師在原本的設計圖中有規劃？ B：我們許多來自亞洲的客人相信數字四會帶來厄運這個古老的【迷信】，所以經理把那一層標示為五樓。"
  },
  {
    "word": "count",
    "pos": "v.",
    "cn_def": "數；計算；清點",
    "en_def": "to find the total number of things",
    "sentence": "A: Before we close the store tonight, do you want me to clean the shelves or help you prepare the order for tomorrow's delivery? B: Could you please {{BLANK}} the boxes of printer paper in the storeroom first, because the manager needs the exact number before she places the new order with our supplier?",
    "cn": "A：今晚關店前，你要我清理貨架，還是幫你準備明天到貨的訂單？ B：可以請你先【清點】儲藏室裡的影印紙箱數嗎？因為經理向供應商下新訂單前需要確切的數量。"
  },
  {
    "word": "measure",
    "pos": "v.",
    "cn_def": "測量；衡量",
    "en_def": "to find the size, length or amount of something",
    "sentence": "A: Do you know why the delivery company refused to take our large package to the warehouse in Kaohsiung yesterday afternoon? B: The driver had to {{BLANK}} the length of the box before loading it, and it was too long for his small truck, so we have to book a larger vehicle and send it again tomorrow morning.",
    "cn": "A：你知道為什麼貨運公司昨天下午拒絕把我們的大包裹送到高雄的倉庫嗎？ B：司機在裝貨前必須【測量】箱子的長度，結果對他的小貨車來說太長了，所以我們得預約較大的車輛，明天早上再寄一次。"
  },
  {
    "word": "coincidence",
    "pos": "n.",
    "cn_def": "巧合",
    "en_def": "when two things happen at the same time by chance",
    "sentence": "A: I was surprised to see our new client from Osaka at the same restaurant last night; did you invite him to join us for dinner? B: No, it was a pure {{BLANK}}, because he was staying at a hotel nearby and just happened to choose the same place, so we shared a table and talked about the contract.",
    "cn": "A：昨晚在同一間餐廳看到我們來自大阪的新客戶，我很驚訝；是你邀請他來跟我們吃晚餐的嗎？ B：不是，那純粹是【巧合】，因為他住在附近的飯店，剛好選了同一個地方，所以我們就同桌聊了合約的事。"
  },
  {
    "word": "instantly",
    "pos": "adv.",
    "cn_def": "立即；馬上",
    "en_def": "immediately; at once",
    "sentence": "A: Is the new online payment system really faster than the old one that our customers used to complain about every week? B: Yes, much faster; when a customer pays by card, the money now appears in our account almost {{BLANK}}, so the staff no longer need to wait two days before shipping the orders.",
    "cn": "A：新的線上付款系統真的比顧客以前每週都在抱怨的舊系統還快嗎？ B：是的，快多了；顧客刷卡付款時，錢現在幾乎【立即】進到我們的帳戶，所以員工不再需要等兩天才能出貨。"
  },
  {
    "word": "infinity",
    "pos": "n.",
    "cn_def": "無限；無窮",
    "en_def": "a space, time or amount that has no end",
    "sentence": "A: Why does the design team want to use the sideways eight symbol in the logo for our new cloud storage service? B: That symbol means {{BLANK}}, and the marketing manager believes it will show customers that they can keep as many files as they want without ever running out of space on our system.",
    "cn": "A：設計團隊為什麼想在我們新雲端儲存服務的標誌中使用橫躺的八字符號？ B：那個符號代表【無限】，行銷經理相信這能讓顧客知道，他們可以存放任意數量的檔案，永遠不會用完我們系統的空間。"
  },
  {
    "word": "numerology",
    "pos": "n.",
    "cn_def": "數字命理學",
    "en_def": "the belief that numbers have special meanings and affect people's lives",
    "sentence": "A: Why did the owner of the new bakery choose such a strange opening date instead of a weekend when more shoppers are around? B: She is interested in {{BLANK}}, the study of the hidden meaning of numbers, and she believes the date she picked will bring the business good luck and many loyal customers.",
    "cn": "A：新麵包店的老闆為什麼選了這麼奇怪的開幕日期，而不是購物人潮較多的週末？ B：她對【數字命理學】很有興趣，也就是研究數字隱藏意義的學問，她相信自己選的日期會為生意帶來好運和許多忠實顧客。"
  },
  {
    "word": "aspire",
    "pos": "v.",
    "cn_def": "渴望；立志",
    "en_def": "to have a strong wish to achieve something",
    "sentence": "A: Why has Kevin been taking evening classes in finance and management after work three times a week since last spring? B: He has been working in the accounting department for five years, and he would like to {{BLANK}} to become a department manager one day, so he is learning the skills he will need to lead a team.",
    "cn": "A：凱文從去年春天開始，為什麼每週三次下班後去上財務和管理的夜間課程？ B：他在會計部門工作五年了，【渴望】有一天能成為部門經理，所以他正在學習帶領團隊所需的技能。"
  },
  {
    "word": "dominate",
    "pos": "v.",
    "cn_def": "支配；主導",
    "en_def": "to have the most power or importance in something",
    "sentence": "A: Why is our sales team so worried about the new electronics company that opened a factory in the science park last year? B: Their phones are cheap and very popular with young people, and analysts say they could soon {{BLANK}} the local market, which would make it harder for us to sell our products.",
    "cn": "A：我們的業務團隊為什麼這麼擔心去年在科學園區設廠的新電子公司？ B：他們的手機便宜又很受年輕人歡迎，分析師說他們可能很快就會【主導】本地市場，這會讓我們的產品更難賣。"
  },
  {
    "word": "fascinated",
    "pos": "adj.",
    "cn_def": "著迷的；被深深吸引的",
    "en_def": "very interested in something",
    "sentence": "A: How did the visitors from the school enjoy their tour of our factory, and did they ask a lot of questions afterwards? B: The students were completely {{BLANK}} by the robots that pack the boxes on the production line, and many of them stayed after the tour to ask the engineers how the machines work.",
    "cn": "A：學校來的參訪者覺得我們工廠的導覽如何？他們之後有問很多問題嗎？ B：學生們完全被生產線上包裝箱子的機器人【迷住了】，很多人在導覽結束後留下來問工程師機器是怎麼運作的。"
  },
  {
    "word": "obsessed",
    "pos": "adj.",
    "cn_def": "著迷的；執著的",
    "en_def": "thinking about something all the time, often too much",
    "sentence": "A: Why does the new sales assistant check the daily sales numbers on his phone so often, even during lunch and on weekends? B: He is a bit {{BLANK}} with reaching his monthly target, because he wants to win the bonus, but I told him that he also needs to rest and spend time with his family.",
    "cn": "A：新來的業務助理為什麼這麼常用手機查看每日業績，連午餐時間和週末都在看？ B：他有點【執著於】達成每月目標，因為他想拿到獎金，但我告訴他也需要休息、多陪陪家人。"
  },
  {
    "word": "tremendously",
    "pos": "adv.",
    "cn_def": "非常地；極大地",
    "en_def": "very much; to a very great degree",
    "sentence": "A: Has the new training program for customer service staff made any difference since the company started it in January? B: Yes, it has helped {{BLANK}}; the number of complaints has dropped by half, and many customers have written emails to thank our staff for their friendly and patient service.",
    "cn": "A：公司從一月開始實施客服人員的新訓練課程，有帶來任何改變嗎？ B：有，幫助【非常大】；客訴數量減少了一半，很多顧客還寫電子郵件感謝員工友善又耐心的服務。"
  },
  {
    "word": "symbolize",
    "pos": "v.",
    "cn_def": "象徵；代表",
    "en_def": "to be a sign of an idea or quality",
    "sentence": "A: Why did the restaurant owner put a red fish on the menu cover and the big sign above the front door of the shop? B: In Chinese culture, the fish is used to {{BLANK}} wealth and plenty, so she hopes the picture will bring good luck to the business and make the restaurant look friendly to customers.",
    "cn": "A：餐廳老闆為什麼把一條紅色的魚放在菜單封面和店門口上方的大招牌上？ B：在中華文化裡，魚被用來【象徵】財富和富足，所以她希望這張圖能為生意帶來好運，也讓餐廳看起來對顧客很親切。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "有價值的；寶貴的",
    "en_def": "very useful or important; worth a lot of money",
    "sentence": "A: Should we ask the new interns to help us with the customer survey, or would that take too much of their time this week? B: Yes, please ask them, because they will gain {{BLANK}} experience in talking to real customers, and their fresh ideas could help us improve the questions before we send the survey out.",
    "cn": "A：我們應該請新來的實習生幫忙做顧客問卷調查嗎？還是這樣這週會佔用他們太多時間？ B：要，請找他們幫忙，因為他們能獲得跟真實顧客交談的【寶貴】經驗，而且他們的新想法能幫助我們在寄出問卷前改進題目。"
  },
  {
    "word": "unfortunately",
    "pos": "adv.",
    "cn_def": "不幸地；遺憾地",
    "en_def": "used to say that something is sad or disappointing",
    "sentence": "A: Will the new printer for the marketing department arrive before Friday, when we have to print the brochures for the trade show? B: {{BLANK}}, the supplier told me this morning that the printer is out of stock until next month, so we will have to send the brochures to a print shop downtown instead.",
    "cn": "A：行銷部的新印表機會在星期五之前送到嗎？我們那天得印商展用的手冊。 B：【很遺憾】，供應商今天早上告訴我，那台印表機要到下個月才有貨，所以我們只好把手冊送到市區的印刷店去印。"
  },
  {
    "word": "memory gap",
    "pos": "n.phr.",
    "cn_def": "記憶空白；記憶斷層",
    "en_def": "a time when you cannot remember something",
    "sentence": "A: Why did Mr. Chen read from his notes during the whole presentation to the investors this morning instead of speaking freely? B: He was worried that he might have a {{BLANK}} in front of such an important audience and forget the key figures, so he wrote every number down to make sure nothing would go wrong.",
    "cn": "A：陳先生今天早上對投資人簡報時，為什麼整場都在照稿念，而不是自由發揮？ B：他擔心在這麼重要的聽眾面前會出現【記憶空白】而忘記關鍵數據，所以把每個數字都寫下來，確保不會出錯。"
  },
  {
    "word": "forte",
    "pos": "n.",
    "cn_def": "專長；強項",
    "en_def": "something that a person does very well",
    "sentence": "A: Who should we ask to prepare the financial charts for next week's board meeting, since Linda is on vacation until the end of the month? B: Let's ask Tom from accounting, because working with numbers is really his {{BLANK}}, and he can usually turn large amounts of data into clear and simple charts very quickly.",
    "cn": "A：既然琳達休假到月底，我們該請誰準備下週董事會議要用的財務圖表？ B：請會計部的湯姆吧，因為處理數字真的是他的【專長】，他通常能很快把大量資料整理成清楚簡單的圖表。"
  },
  {
    "word": "verification",
    "pos": "n.",
    "cn_def": "驗證；核實",
    "en_def": "the act of checking that something is true or correct",
    "sentence": "A: Why can't I log into the company's new online system from my home computer, even though I typed my password correctly? B: The system now needs a second step of {{BLANK}} for security, so you have to enter the six-digit code that is sent to your phone each time you sign in from outside the office.",
    "cn": "A：我明明輸入了正確的密碼，為什麼在家裡的電腦登不進公司的新線上系統？ B：系統現在為了安全需要第二道【驗證】步驟，所以每次你從辦公室外登入時，都必須輸入傳到手機的六位數密碼。"
  },
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的；用途",
    "en_def": "the reason why something is done",
    "sentence": "A: Could you explain why we need to fill out this long survey before the company's annual planning meeting next Tuesday afternoon? B: The main {{BLANK}} of the survey is to collect ideas from every department, so the managers can understand our needs and decide how to spend next year's budget more wisely.",
    "cn": "A：你可以解釋一下，為什麼我們要在下週二下午的公司年度規劃會議前填這份很長的問卷嗎？ B：這份問卷的主要【目的】是收集各部門的想法，讓主管了解我們的需求，並決定如何更明智地運用明年的預算。"
  },
  {
    "word": "rare",
    "pos": "adj.",
    "cn_def": "稀有的；罕見的",
    "en_def": "not common; not happening or found often",
    "sentence": "A: Why is the antique shop on the corner selling that old silver coin for such a high price, even though it looks very small? B: The owner told me that it is a {{BLANK}} coin from the eighteenth century, and only a few of them still exist today, so collectors from all over the world are interested in buying it.",
    "cn": "A：轉角那家古董店為什麼那枚舊銀幣賣這麼貴？它看起來很小耶。 B：老闆告訴我那是十八世紀的【稀有】硬幣，現在只剩少數幾枚，所以世界各地的收藏家都有興趣購買。"
  },
  {
    "word": "resource person",
    "pos": "n.phr.",
    "cn_def": "諮詢專員；專業資源人員",
    "en_def": "a person with special knowledge whom others can ask for help",
    "sentence": "A: Who can I contact if I have questions about the new tax rules while I am preparing the annual report for our department? B: The finance team has chosen Ms. Huang as the {{BLANK}} for this project, so you can send her an email or visit her office on the third floor whenever you need help.",
    "cn": "A：我在準備部門年度報告時，如果對新稅法有疑問，可以聯絡誰？ B：財務團隊已選定黃小姐擔任這個專案的【諮詢專員】，所以你需要協助時，可以寄電子郵件給她或到三樓她的辦公室找她。"
  },
  {
    "word": "write up something",
    "pos": "v.phr.",
    "cn_def": "寫出（報告、摘要等）",
    "en_def": "to write a report or short piece about something",
    "sentence": "A: The director just called me and said she missed the meeting with the software company this afternoon; what should I do? B: Could you {{BLANK}} about what we discussed, including the prices and the delivery dates, and email it to her before she leaves the office at six this evening?",
    "cn": "A：主管剛打電話給我，說她錯過了今天下午和軟體公司的會議，我該怎麼辦？ B：你可以把我們討論的內容【寫成一份摘要】，包括價格和交貨日期，在她今晚六點離開辦公室前用電子郵件寄給她嗎？"
  },
  {
    "word": "deal with",
    "pos": "v.phr.",
    "cn_def": "處理；應付",
    "en_def": "to take action to solve a problem",
    "sentence": "A: Who is going to answer the angry phone calls from customers whose orders were delayed by the storm last week? B: Our customer service manager will {{BLANK}} the most serious complaints herself, and the rest of the team will call the other customers to explain the delay and offer them a discount on their next order.",
    "cn": "A：上週因為暴風雨延誤訂單的顧客打來的憤怒電話，誰要負責接聽？ B：我們的客服經理會親自【處理】最嚴重的客訴，其他組員則會打電話給其他顧客解釋延誤原因，並提供下次訂購的折扣。"
  },
  {
    "word": "laborious",
    "pos": "adj.",
    "cn_def": "費力的；艱苦的",
    "en_def": "needing a lot of time and hard work",
    "sentence": "A: Why did the accounting team stay so late every night last week, even though the end of the quarter is still a month away? B: They had to enter thousands of old paper receipts into the new computer system by hand, which was a slow and {{BLANK}} job, so they are hoping the company will buy a scanner soon.",
    "cn": "A：會計團隊上週為什麼每晚都待到這麼晚？季末明明還有一個月。 B：他們得把數千張舊的紙本收據手動輸入新的電腦系統，那是一件緩慢又【費力】的工作，所以他們希望公司能盡快買一台掃描器。"
  },
  {
    "word": "tedious",
    "pos": "adj.",
    "cn_def": "冗長乏味的；單調的",
    "en_def": "boring because it is long or the same all the time",
    "sentence": "A: How do you like your new job at the bank, and is it more interesting than your old position at the travel agency? B: To be honest, checking numbers on forms all day can be quite {{BLANK}}, but my coworkers are friendly and the pay is better, so I plan to stay there for a few more years.",
    "cn": "A：你在銀行的新工作怎麼樣？比你以前在旅行社的職位有趣嗎？ B：老實說，整天核對表格上的數字有時候相當【單調乏味】，但我的同事很友善，薪水也比較好，所以我打算在那裡再待幾年。"
  },
  {
    "word": "brag",
    "pos": "v.",
    "cn_def": "吹噓；自誇",
    "en_def": "to talk too proudly about yourself",
    "sentence": "A: Why did the other salespeople look so annoyed during the team lunch at the Italian restaurant yesterday afternoon? B: Jason kept trying to {{BLANK}} about his high sales numbers and his big bonus for the whole hour, and he didn't ask anyone else about their work, so people felt he was being rude.",
    "cn": "A：昨天下午在義大利餐廳的團隊午餐上，其他業務員為什麼看起來這麼不耐煩？ B：傑森整整一個小時一直在【吹噓】自己的高業績和大筆獎金，也沒問其他人的工作狀況，所以大家覺得他很沒禮貌。"
  },
  {
    "word": "muddled",
    "pos": "adj.",
    "cn_def": "混亂的；糊塗的",
    "en_def": "confused and not clear or well organized",
    "sentence": "A: Why did the client call back three times after receiving the invoice that our new assistant sent out on Monday morning? B: The invoice was quite {{BLANK}}, because some prices were in the wrong rows and two items were missing, so the client could not understand how much money he actually needed to pay.",
    "cn": "A：客戶收到我們新助理星期一早上寄出的發票後，為什麼回電了三次？ B：那張發票相當【混亂】，因為有些價格填錯欄位，還少了兩個品項，所以客戶搞不清楚他實際上要付多少錢。"
  },
  {
    "word": "entrenched",
    "pos": "adj.",
    "cn_def": "根深蒂固的；牢固確立的",
    "en_def": "firmly fixed and difficult to change",
    "sentence": "A: Why is it so hard for the new manager to change the way the warehouse workers record the stock every day? B: The old paper system has been {{BLANK}} in the warehouse for more than twenty years, and many senior workers do not trust computers, so the manager must train them slowly and patiently.",
    "cn": "A：新經理為什麼很難改變倉庫員工每天記錄庫存的方式？ B：舊的紙本系統在倉庫裡已經【根深蒂固】超過二十年了，許多資深員工不信任電腦，所以經理必須慢慢地、耐心地訓練他們。"
  },
  {
    "word": "constitute",
    "pos": "v.",
    "cn_def": "構成；組成",
    "en_def": "to form or make up something",
    "sentence": "A: How many of the people who work at our new branch in Taichung are from the local area, and how many moved there from Taipei? B: Local workers {{BLANK}} about eighty percent of the staff at the new branch, because the company wanted to create jobs in the community and hire people who know the customers well.",
    "cn": "A：我們台中新分公司的員工中，有多少是當地人？又有多少是從台北搬過去的？ B：當地員工【構成】新分公司約百分之八十的人力，因為公司希望在當地創造工作機會，並僱用了解顧客的人。"
  },
  {
    "word": "addition",
    "pos": "n.",
    "cn_def": "加法；增加的人或物",
    "en_def": "a person or thing that is added; adding numbers together",
    "sentence": "A: Our team is so busy this month with all the new orders; is the company going to hire anyone to help us soon? B: Yes, the manager just told me that we will get a new {{BLANK}} to the team next week, an experienced designer who used to work for a large advertising agency in Hong Kong.",
    "cn": "A：我們團隊這個月因為新訂單忙翻了，公司會盡快雇人來幫忙嗎？ B：會，經理剛告訴我，下週團隊會有一位【新成員】加入，是一位曾在香港大型廣告公司工作的資深設計師。"
  },
  {
    "word": "multiplication",
    "pos": "n.",
    "cn_def": "乘法",
    "en_def": "the process of adding a number to itself a certain number of times",
    "sentence": "A: How did the store staff work out the total price so quickly when the cash register broke down during the busy holiday sale? B: They used simple {{BLANK}}, such as twelve items times fifty dollars each, and wrote the totals on paper until the technician came to fix the machine later that afternoon.",
    "cn": "A：假日特賣最忙的時候收銀機壞了，店員是怎麼這麼快算出總價的？ B：他們用簡單的【乘法】，像是十二件商品乘以每件五十元，把總額寫在紙上，直到技術人員當天下午稍晚來修好機器。"
  }
];

const MCQS = [
  {
    "q": "Our sales director cannot travel to Berlin next week. Sarah Park will _____ the company at the international trade fair instead.",
    "options": [
      "represent",
      "dominate",
      "measure",
      "brag"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Many hotels in Asia do not have a fourth floor. This is because of a common _____ that the number four is unlucky.",
    "options": [
      "verification",
      "superstition",
      "addition",
      "purpose"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Before the store closes tonight, please _____ the boxes in the storeroom. The manager needs the exact number for tomorrow's order.",
    "options": [
      "symbolize",
      "brag",
      "count",
      "aspire"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The movers will _____ the width of the office door before Friday. They want to make sure the new desks can fit through it.",
    "options": [
      "constitute",
      "dominate",
      "aspire",
      "measure"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "I met our new supplier at the airport by pure _____ yesterday. We were both waiting for the same flight to Tokyo.",
    "options": [
      "superstition",
      "coincidence",
      "purpose",
      "verification"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "With the new banking app, payments from customers appear in our account almost _____. We no longer wait two days to ship orders.",
    "options": [
      "instantly",
      "tremendously",
      "unfortunately",
      "carefully"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Young employees who _____ to leadership roles can join the company's new training program this spring. Applications are due on Friday.",
    "options": [
      "brag",
      "measure",
      "represent",
      "aspire"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Our rival's cheap smartphones are very popular with students. Analysts say these phones could soon _____ the local market.",
    "options": [
      "symbolize",
      "aspire",
      "dominate",
      "count"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The visiting students were _____ by the robots on the production line. Many stayed after the tour to ask the engineers questions.",
    "options": [
      "fascinated",
      "muddled",
      "laborious",
      "rare"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Our new sales assistant checks his numbers every hour, even on weekends. He seems _____ with reaching his monthly target.",
    "options": [
      "valuable",
      "tedious",
      "obsessed",
      "rare"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The new training program has helped our customer service team _____. Complaints have dropped by half since it started in January.",
    "options": [
      "unfortunately",
      "tremendously",
      "quietly",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "In many Asian cultures, red is used to _____ good luck and happiness. That is why our holiday packaging is red this year.",
    "options": [
      "measure",
      "count",
      "brag",
      "symbolize"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The internship gave Amy _____ experience in dealing with real customers. She now feels ready to apply for a full-time sales job.",
    "options": [
      "muddled",
      "entrenched",
      "valuable",
      "obsessed"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "_____, the printer we ordered is out of stock until next month. We will have to send the brochures to a print shop.",
    "options": [
      "unfortunately",
      "instantly",
      "tremendously",
      "carefully"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "During his speech, the CEO suddenly forgot the sales figures. Luckily, his notes helped him recover quickly from the _____.",
    "options": [
      "resource person",
      "trade fair",
      "price list",
      "memory gap"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Tom will prepare the financial charts for the board meeting next week. Working with numbers has always been his _____.",
    "options": [
      "superstition",
      "forte",
      "multiplication",
      "verification"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "For security reasons, the new system requires a second step of _____. Users must enter a code sent to their phones each time.",
    "options": [
      "verification",
      "multiplication",
      "superstition",
      "coincidence"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The main _____ of next week's workshop is to improve communication between departments. All team leaders are expected to attend.",
    "options": [
      "addition",
      "forte",
      "coincidence",
      "purpose"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "This silver coin from the eighteenth century is extremely _____. Only a few of them still exist, so collectors pay high prices.",
    "options": [
      "tedious",
      "rare",
      "muddled",
      "fascinated"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "Please contact Linda Huang if you have questions about the new tax rules. She is the _____ for this project.",
    "options": [
      "memory gap",
      "price list",
      "resource person",
      "trade fair"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The director missed this afternoon's meeting with the client. Could you _____ about what we discussed and email it to her?",
    "options": [
      "deal with",
      "run out",
      "take off",
      "write up something"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Our customer service manager will _____ the most serious complaints herself. The rest of the team will handle the simple questions.",
    "options": [
      "deal with",
      "put on",
      "run out",
      "take off"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Entering thousands of paper receipts into the computer by hand was a slow and _____ job. The team hopes the company will buy a scanner.",
    "options": [
      "rare",
      "valuable",
      "laborious",
      "fascinated"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Many workers find it _____ to check numbers on forms all day. The company plans to use software to make the task easier.",
    "options": [
      "valuable",
      "tedious",
      "rare",
      "entrenched"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Jason kept trying to _____ about his big bonus during lunch. His coworkers were annoyed because he never asked about their work.",
    "options": [
      "brag",
      "count",
      "measure",
      "constitute"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "The instructions for the new copier were so _____ that nobody could understand them. The supplier has promised to send a clearer version.",
    "options": [
      "valuable",
      "muddled",
      "rare",
      "fascinated"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The old paper filing system is deeply _____ in the warehouse. Many senior workers are unwilling to switch to the new computer program.",
    "options": [
      "fascinated",
      "valuable",
      "tedious",
      "entrenched"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Local workers _____ about eighty percent of the staff at our new branch. The company wanted to create jobs in the community.",
    "options": [
      "brag",
      "aspire",
      "constitute",
      "measure"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The experienced designer from Hong Kong will be a valuable _____ to our marketing team. She starts work next Monday morning.",
    "options": [
      "verification",
      "addition",
      "superstition",
      "multiplication"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "When the cash register broke, the staff used simple _____ to work out the totals. For example, they calculated twelve items times fifty dollars.",
    "options": [
      "superstition",
      "verification",
      "coincidence",
      "multiplication"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "represent": {
    "pos": "v.",
    "en_def": "to act or speak officially for a person or group",
    "cn_def": "代表；象徵"
  },
  "superstition": {
    "pos": "n.",
    "en_def": "a belief in luck or magic that is not based on reason or facts",
    "cn_def": "迷信"
  },
  "count": {
    "pos": "v.",
    "en_def": "to find the total number of things",
    "cn_def": "數；計算；清點"
  },
  "measure": {
    "pos": "v.",
    "en_def": "to find the size, length or amount of something",
    "cn_def": "測量；衡量"
  },
  "coincidence": {
    "pos": "n.",
    "en_def": "when two things happen at the same time by chance",
    "cn_def": "巧合"
  },
  "instantly": {
    "pos": "adv.",
    "en_def": "immediately; at once",
    "cn_def": "立即；馬上"
  },
  "infinity": {
    "pos": "n.",
    "en_def": "a space, time or amount that has no end",
    "cn_def": "無限；無窮"
  },
  "numerology": {
    "pos": "n.",
    "en_def": "the belief that numbers have special meanings and affect people's lives",
    "cn_def": "數字命理學"
  },
  "aspire": {
    "pos": "v.",
    "en_def": "to have a strong wish to achieve something",
    "cn_def": "渴望；立志"
  },
  "dominate": {
    "pos": "v.",
    "en_def": "to have the most power or importance in something",
    "cn_def": "支配；主導"
  },
  "fascinated": {
    "pos": "adj.",
    "en_def": "very interested in something",
    "cn_def": "著迷的；被深深吸引的"
  },
  "obsessed": {
    "pos": "adj.",
    "en_def": "thinking about something all the time, often too much",
    "cn_def": "著迷的；執著的"
  },
  "tremendously": {
    "pos": "adv.",
    "en_def": "very much; to a very great degree",
    "cn_def": "非常地；極大地"
  },
  "symbolize": {
    "pos": "v.",
    "en_def": "to be a sign of an idea or quality",
    "cn_def": "象徵；代表"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "very useful or important; worth a lot of money",
    "cn_def": "有價值的；寶貴的"
  },
  "unfortunately": {
    "pos": "adv.",
    "en_def": "used to say that something is sad or disappointing",
    "cn_def": "不幸地；遺憾地"
  },
  "memory gap": {
    "pos": "n.phr.",
    "en_def": "a time when you cannot remember something",
    "cn_def": "記憶空白；記憶斷層"
  },
  "forte": {
    "pos": "n.",
    "en_def": "something that a person does very well",
    "cn_def": "專長；強項"
  },
  "verification": {
    "pos": "n.",
    "en_def": "the act of checking that something is true or correct",
    "cn_def": "驗證；核實"
  },
  "purpose": {
    "pos": "n.",
    "en_def": "the reason why something is done",
    "cn_def": "目的；用途"
  },
  "rare": {
    "pos": "adj.",
    "en_def": "not common; not happening or found often",
    "cn_def": "稀有的；罕見的"
  },
  "resource person": {
    "pos": "n.phr.",
    "en_def": "a person with special knowledge whom others can ask for help",
    "cn_def": "諮詢專員；專業資源人員"
  },
  "write up something": {
    "pos": "v.phr.",
    "en_def": "to write a report or short piece about something",
    "cn_def": "寫出（報告、摘要等）"
  },
  "deal with": {
    "pos": "v.phr.",
    "en_def": "to take action to solve a problem",
    "cn_def": "處理；應付"
  },
  "laborious": {
    "pos": "adj.",
    "en_def": "needing a lot of time and hard work",
    "cn_def": "費力的；艱苦的"
  },
  "tedious": {
    "pos": "adj.",
    "en_def": "boring because it is long or the same all the time",
    "cn_def": "冗長乏味的；單調的"
  },
  "brag": {
    "pos": "v.",
    "en_def": "to talk too proudly about yourself",
    "cn_def": "吹噓；自誇"
  },
  "muddled": {
    "pos": "adj.",
    "en_def": "confused and not clear or well organized",
    "cn_def": "混亂的；糊塗的"
  },
  "entrenched": {
    "pos": "adj.",
    "en_def": "firmly fixed and difficult to change",
    "cn_def": "根深蒂固的；牢固確立的"
  },
  "constitute": {
    "pos": "v.",
    "en_def": "to form or make up something",
    "cn_def": "構成；組成"
  },
  "addition": {
    "pos": "n.",
    "en_def": "a person or thing that is added; adding numbers together",
    "cn_def": "加法；增加的人或物"
  },
  "multiplication": {
    "pos": "n.",
    "en_def": "the process of adding a number to itself a certain number of times",
    "cn_def": "乘法"
  }
};

const EXTRA_GLOSSES = {};
