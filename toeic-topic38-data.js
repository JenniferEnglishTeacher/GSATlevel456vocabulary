// Topic 38 Quiz Data: Business 商業
// Source word list: https://www.examword.com/group-topic/business — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T38 - Business 商業",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "company",
    "pos": "n.",
    "cn_def": "公司",
    "en_def": "a business that makes or sells goods or services",
    "sentence": "A: I heard you're leaving the bank after eight years, so where are you going to work from next month? B: I'm joining a small software {{BLANK}} in Neihu that builds booking apps for hotels, and although the salary is a little lower, the team is friendly and I can work from home on Fridays.",
    "cn": "A：聽說你在銀行工作八年後要離職了，下個月你要去哪裡上班？ B：我要加入內湖一家小型軟體【公司】，他們為飯店開發訂房應用程式，雖然薪水低一點，但團隊很友善，而且我週五可以在家工作。"
  },
  {
    "word": "enterprise",
    "pos": "n.",
    "cn_def": "企業；事業",
    "en_def": "a business or company, often one that someone starts and runs",
    "sentence": "A: Our bank is launching a new loan program next quarter, so which business owners are we hoping to reach with it? B: We want to help people who run a small family {{BLANK}}, such as a local bakery or a repair shop, because those owners often struggle to borrow money from large lenders when they need new equipment.",
    "cn": "A：我們銀行下一季要推出新的貸款方案，我們希望接觸到哪些業主？ B：我們想幫助經營小型家族【企業】的人，例如當地的麵包店或修理店，因為這些老闆需要新設備時，常常很難向大型貸方借到錢。"
  },
  {
    "word": "firm",
    "pos": "n.",
    "cn_def": "公司；事務所",
    "en_def": "a business, especially one that gives professional services like law or accounting",
    "sentence": "A: The new office lease looks quite complicated, and I don't understand several of the clauses, so who should we ask to check it before we sign? B: Let's contact the law {{BLANK}} that helped us last year, because their lawyers are careful, they reply quickly, and they already know our business well.",
    "cn": "A：新辦公室的租約看起來相當複雜，有好幾條條款我看不懂，簽約前我們應該請誰檢查？ B：我們聯絡去年幫過我們的那家律師【事務所】吧，因為他們的律師很細心、回覆很快，而且已經很了解我們的業務。"
  },
  {
    "word": "corporation",
    "pos": "n.",
    "cn_def": "大公司；股份有限公司",
    "en_def": "a large company or group of companies that acts as one legal unit",
    "sentence": "A: Why are there so many security guards and reporters in the lobby downstairs this morning? B: A huge international {{BLANK}} from Japan is signing an agreement with our CEO today, and because the deal is worth millions of dollars, everyone wants photos of the meeting before the official press conference at noon.",
    "cn": "A：今天早上樓下大廳為什麼有那麼多警衛和記者？ B：一家來自日本的大型跨國【公司】今天要和我們的執行長簽協議，因為這筆交易價值數百萬美元，大家都想在中午正式記者會前拍到會議的照片。"
  },
  {
    "word": "startup",
    "pos": "n.",
    "cn_def": "新創公司",
    "en_def": "a new, small company, often in technology, that is just beginning",
    "sentence": "A: You used to work at a big bank downtown, so why did you decide to quit such a stable job last spring? B: Two friends and I opened a small {{BLANK}} that makes a phone app for booking dog walkers, and although we work long hours, it is exciting to build something new from nothing.",
    "cn": "A：你以前在市中心的大銀行上班，為什麼去年春天決定辭掉這麼穩定的工作？ B：我和兩個朋友開了一家小型【新創公司】，開發預約遛狗員的手機應用程式，雖然我們工作時間很長，但從無到有打造新東西很令人興奮。"
  },
  {
    "word": "industry",
    "pos": "n.",
    "cn_def": "產業；工業",
    "en_def": "all the businesses that make or sell a particular kind of product or service",
    "sentence": "A: You have worked in hotels for over ten years, so how has your job changed since the pandemic ended? B: The whole tourism {{BLANK}} has changed a lot, because travelers now book everything online at the last minute, so hotels must use new software and train staff to answer guests quickly through chat apps.",
    "cn": "A：你在飯店工作超過十年了，疫情結束後你的工作有什麼改變？ B：整個觀光【產業】改變很多，因為旅客現在都在最後一刻上網預訂一切，所以飯店必須使用新軟體，並訓練員工透過聊天應用程式迅速回覆客人。"
  },
  {
    "word": "commerce",
    "pos": "n.",
    "cn_def": "商業；貿易",
    "en_def": "the activity of buying and selling goods, especially on a large scale",
    "sentence": "A: Why is our team spending so much time improving the website instead of opening another shop at the mall? B: Online {{BLANK}} is growing much faster than store shopping, because busy people prefer ordering from their phones at night, so the director believes a better website will bring us more buyers than a new shop.",
    "cn": "A：為什麼我們團隊花這麼多時間改善網站，而不是在購物中心再開一家店？ B：線上【商務】的成長比實體店購物快得多，因為忙碌的人喜歡晚上用手機下單，所以主管認為更好的網站會比新店帶來更多買家。"
  },
  {
    "word": "market",
    "pos": "n.",
    "cn_def": "市場",
    "en_def": "an area or group of people where a product can be sold",
    "sentence": "A: Our new energy drink sold very well in Taiwan this year, so what is the next step for the product? B: The board wants to enter the Japanese {{BLANK}} next spring, so we are hiring a local research team to learn what young people there like to drink and how much they usually pay.",
    "cn": "A：我們的新能量飲料今年在台灣賣得很好，這項產品下一步是什麼？ B：董事會希望明年春天打入日本【市場】，所以我們正在聘請當地的研究團隊，了解那裡的年輕人喜歡喝什麼，以及他們通常願意付多少錢。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤；盈利",
    "en_def": "money you earn from business after paying all costs",
    "sentence": "A: The café on the corner always seems full, so is the owner making good money from it? B: Not really, because rent in this area is very high and coffee beans have become more expensive, so after paying staff and bills, she only made a small {{BLANK}} last year and is thinking about moving.",
    "cn": "A：轉角那家咖啡店好像總是客滿，老闆賺很多錢嗎？ B：其實沒有，因為這一區的租金很高，咖啡豆也變貴了，所以付完員工薪水和帳單後，她去年只賺到一點【利潤】，正在考慮搬家。"
  },
  {
    "word": "revenue",
    "pos": "n.",
    "cn_def": "營收；收入",
    "en_def": "the total money a business receives from selling goods or services",
    "sentence": "A: The finance team looked very happy at the meeting this morning, so did the quarterly report bring good news? B: Yes, our total {{BLANK}} rose by fifteen percent compared to last year, mostly because the new online store attracted many overseas buyers, so the managers are planning to give everyone a bonus.",
    "cn": "A：財務團隊今天早上開會時看起來很開心，季報帶來好消息了嗎？ B：是的，我們的總【營收】比去年成長了百分之十五，主要是因為新的網路商店吸引了許多海外買家，所以經理們打算發獎金給大家。"
  },
  {
    "word": "investment",
    "pos": "n.",
    "cn_def": "投資",
    "en_def": "money or time you put into something to get a benefit later",
    "sentence": "A: Our old printers break down almost every week, so should we just keep repairing them to save money? B: I think buying new machines would be a smart {{BLANK}}, because although they are expensive at first, they will save us repair fees and many hours of waiting, which helps the whole office work faster.",
    "cn": "A：我們的舊印表機幾乎每週都故障，我們是不是應該繼續修理來省錢？ B：我認為買新機器會是明智的【投資】，因為雖然一開始很貴，但能省下維修費和許多等待的時間，讓整個辦公室工作更快。"
  },
  {
    "word": "capital",
    "pos": "n.",
    "cn_def": "資本；資金",
    "en_def": "money used to start or grow a business",
    "sentence": "A: You have wanted to open your own bakery for years, so what is stopping you from doing it now? B: I still don't have enough {{BLANK}} to rent a shop and buy ovens, so I am saving part of my salary every month and also talking to the bank about a small loan.",
    "cn": "A：你想開自己的麵包店已經很多年了，現在是什麼阻止你去做？ B：我還沒有足夠的【資金】租店面和買烤箱，所以我每個月存一部分薪水，也正在和銀行洽談一筆小額貸款。"
  },
  {
    "word": "expense",
    "pos": "n.",
    "cn_def": "費用；開支",
    "en_def": "money spent on something, especially for work",
    "sentence": "A: The hotel in Osaka was quite expensive, so will the company pay for my room during the trade fair? B: Yes, the hotel is a business {{BLANK}}, so just keep every receipt, fill in the online form when you return, and the accounting department will pay the money back into your account within two weeks.",
    "cn": "A：大阪那家飯店相當貴，商展期間公司會幫我付房費嗎？ B：會的，住宿屬於出差【費用】，所以只要保留每張收據，回來後填寫線上表單，會計部門會在兩週內把錢退到你的帳戶。"
  },
  {
    "word": "cost",
    "pos": "n.",
    "cn_def": "成本；費用",
    "en_def": "the amount of money needed to buy, make, or do something",
    "sentence": "A: Why did management decide to move the factory from the city to a small town in the south? B: The main reason is that the {{BLANK}} of land and labor there is much lower, so the company can save money every year and still deliver products to its customers on time.",
    "cn": "A：管理階層為什麼決定把工廠從城市搬到南部的小鎮？ B：主要原因是那裡的土地和勞工【成本】低很多，所以公司每年都能省錢，還能準時把產品交給顧客。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "a plan of how much money can be spent on something",
    "sentence": "A: The marketing team wants to hire a famous singer for our new advertisement, so can we afford it? B: I'm afraid not, because our {{BLANK}} for this campaign is only two million dollars, and that singer usually asks for more than that, so we should look for a less expensive option.",
    "cn": "A：行銷團隊想請一位知名歌手拍我們的新廣告，我們負擔得起嗎？ B：恐怕不行，因為這次活動的【預算】只有兩百萬元，而那位歌手通常要價更高，所以我們應該找比較便宜的選擇。"
  },
  {
    "word": "management",
    "pos": "n.",
    "cn_def": "管理；管理階層",
    "en_def": "the people who control a company, or the work of controlling it",
    "sentence": "A: The staff seem much happier this year, so what changed in the office after the new director arrived? B: The {{BLANK}} started listening to employees' ideas at monthly meetings and allowed flexible working hours, so people feel more respected, and fewer workers have quit compared to last year.",
    "cn": "A：員工今年似乎開心多了，新主管上任後辦公室有什麼改變？ B：【管理階層】開始在每月會議上聽取員工的想法，並允許彈性工時，所以大家覺得更受尊重，離職的員工也比去年少。"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "cn_def": "策略；戰略",
    "en_def": "a careful plan to reach a goal",
    "sentence": "A: Sales of our phones dropped again this quarter, so what is the director planning to do about it? B: She is working on a new {{BLANK}} that focuses on students, because they buy new phones often, and she wants to offer cheaper models with good cameras and special discounts during the school holidays.",
    "cn": "A：我們手機的銷量這一季又下滑了，主管打算怎麼處理？ B：她正在擬定一個以學生為主的新【策略】，因為學生常常換新手機，她想推出相機不錯的平價機型，並在學校假期提供特別折扣。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "營運；業務",
    "en_def": "the work or activity of a business, or a part of it",
    "sentence": "A: Why are so many engineers flying to Vietnam next month instead of staying at the main office here? B: Our company is moving part of its manufacturing {{BLANK}} to Hanoi, so the engineers need to set up the machines, train the local workers, and make sure everything runs smoothly before production begins.",
    "cn": "A：為什麼下個月有這麼多工程師要飛去越南，而不是留在這裡的總部？ B：我們公司要把部分製造【業務】移到河內，所以工程師需要安裝機器、訓練當地員工，並確保生產開始前一切運作順利。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力",
    "en_def": "how much work a person or company produces in a certain time",
    "sentence": "A: Since we started working from home two days a week, have you noticed any change in how much the team gets done? B: Actually, our {{BLANK}} has gone up, because people spend less time on crowded trains and fewer meetings interrupt them, so they finish reports faster and make fewer mistakes.",
    "cn": "A：自從我們開始每週在家工作兩天，你有注意到團隊完成的工作量有什麼變化嗎？ B：其實我們的【生產力】提升了，因為大家花在擁擠火車上的時間變少，被會議打斷的次數也減少，所以他們更快完成報告，錯誤也更少。"
  },
  {
    "word": "efficiency",
    "pos": "n.",
    "cn_def": "效率",
    "en_def": "the ability to do something well without wasting time, money, or energy",
    "sentence": "A: The new delivery software looks complicated, so why did the manager insist that every driver must use it? B: It plans the shortest routes and shows traffic jams in real time, which improves the {{BLANK}} of our deliveries, so drivers use less fuel and customers get their packages much sooner.",
    "cn": "A：新的配送軟體看起來很複雜，經理為什麼堅持每位司機都要用？ B：它會規劃最短路線並即時顯示塞車狀況，提升我們配送的【效率】，所以司機用油更少，顧客也能更快收到包裹。"
  },
  {
    "word": "competition",
    "pos": "n.",
    "cn_def": "競爭",
    "en_def": "the situation when businesses try to be more successful than others",
    "sentence": "A: Why did our coffee chain suddenly lower prices and start offering free cookies this month? B: Two new cafés opened on the same street last week, so the {{BLANK}} is much stronger now, and we need to give people a good reason to keep coming to us instead of trying the new places.",
    "cn": "A：為什麼我們的連鎖咖啡店這個月突然降價，還開始送免費餅乾？ B：上週同一條街開了兩家新咖啡店，所以現在【競爭】激烈得多，我們需要給大家一個好理由，讓他們繼續光顧我們，而不是去試新的店。"
  },
  {
    "word": "client",
    "pos": "n.",
    "cn_def": "客戶；委託人",
    "en_def": "a person or company that pays for a professional service",
    "sentence": "A: You look nervous, and you've checked your slides three times, so what is happening this afternoon? B: I'm meeting an important {{BLANK}} from a large hotel group who wants to redesign all their websites, and if she likes my presentation, our agency could win a contract worth over a million dollars.",
    "cn": "A：你看起來很緊張，投影片已經檢查三次了，今天下午有什麼事？ B：我要和一家大型飯店集團的重要【客戶】見面，她想重新設計他們所有的網站，如果她喜歡我的簡報，我們公司可能會拿到價值超過一百萬元的合約。"
  },
  {
    "word": "customer",
    "pos": "n.",
    "cn_def": "顧客",
    "en_def": "a person who buys goods or services from a shop or business",
    "sentence": "A: Why is the store manager standing at the counter and talking to that woman for so long? B: A {{BLANK}} bought a coffee machine here last week, but it stopped working after two days, so he is apologizing, checking her receipt, and offering her a new one or a full refund.",
    "cn": "A：為什麼店經理站在櫃檯跟那位女士談了那麼久？ B：一位【顧客】上週在這裡買了咖啡機，但兩天後就壞了，所以他正在道歉、核對她的收據，並提供她換一台新的或全額退款。"
  },
  {
    "word": "supplier",
    "pos": "n.",
    "cn_def": "供應商",
    "en_def": "a person or company that provides goods to other businesses",
    "sentence": "A: Our restaurant ran out of fresh vegetables twice last week, so what went wrong with the deliveries? B: Our usual {{BLANK}} had problems with his trucks because of the typhoon, so I have already contacted another farm near Taoyuan that can deliver every morning before we open.",
    "cn": "A：我們餐廳上週兩次沒有新鮮蔬菜可用，送貨出了什麼問題？ B：我們平常的【供應商】因為颱風，貨車出了問題，所以我已經聯絡桃園附近另一家農場，他們每天早上開店前可以送貨。"
  },
  {
    "word": "contract",
    "pos": "n.",
    "cn_def": "合約；契約",
    "en_def": "a written legal agreement between two or more people or companies",
    "sentence": "A: The design agency agreed to all our requests on the phone yesterday, so can we start the project on Monday? B: Not yet, because both sides still need to sign the {{BLANK}}, and our lawyer wants to check the payment terms and deadlines carefully before anyone puts their name on it.",
    "cn": "A：設計公司昨天在電話中同意了我們所有的要求，我們星期一可以開始這個專案嗎？ B：還不行，因為雙方還需要簽【合約】，而我們的律師想在任何人簽名之前仔細檢查付款條件和截止日期。"
  },
  {
    "word": "negotiation",
    "pos": "n.",
    "cn_def": "協商；談判",
    "en_def": "formal discussion between people who are trying to reach an agreement",
    "sentence": "A: The supplier asked for a ten percent price increase, so did we finally accept their new offer? B: Not completely, because after three hours of {{BLANK}} yesterday, they agreed to raise prices by only five percent if we promise to keep buying from them for two more years.",
    "cn": "A：供應商要求漲價百分之十，我們最後接受他們的新報價了嗎？ B：沒有完全接受，因為昨天經過三個小時的【協商】，他們同意只要我們承諾再向他們採購兩年，就只漲價百分之五。"
  },
  {
    "word": "marketing",
    "pos": "n.",
    "cn_def": "行銷",
    "en_def": "the work of advertising and promoting products so people buy them",
    "sentence": "A: We have a great new product, but hardly anyone has heard of it, so what should we do next? B: We need to spend more on {{BLANK}}, such as short videos on social media and free samples at train stations, because people will not buy something if they don't even know it exists.",
    "cn": "A：我們有很棒的新產品，但幾乎沒人聽過，接下來該怎麼做？ B：我們需要在【行銷】上投入更多，例如社群媒體上的短影片和在火車站發送免費試用品，因為如果大家連它存在都不知道，就不會買。"
  },
  {
    "word": "brand",
    "pos": "n.",
    "cn_def": "品牌",
    "en_def": "a name of a product or company that people know",
    "sentence": "A: These two pairs of running shoes look almost the same, so why does one cost twice as much as the other? B: The expensive pair is from a famous sports {{BLANK}} that many athletes wear, so people are happy to pay more for the name and the feeling that the quality is better.",
    "cn": "A：這兩雙跑鞋看起來幾乎一樣，為什麼其中一雙貴了一倍？ B：比較貴的那雙來自一個許多運動員都穿的知名運動【品牌】，所以大家很樂意為了這個名字，以及品質更好的感覺多付錢。"
  },
  {
    "word": "sales",
    "pos": "n.",
    "cn_def": "銷售額；銷售",
    "en_def": "the number of products sold, or the money received from selling them",
    "sentence": "A: You stayed at the office very late every night last December, so why was that month so busy for you? B: Our {{BLANK}} always increase sharply before Christmas, because many families buy our toys as gifts, so the whole team had to pack and ship hundreds of extra orders every day.",
    "cn": "A：你去年十二月每天晚上都在辦公室待到很晚，為什麼那個月那麼忙？ B：我們的【銷售額】在聖誕節前總是大幅增加，因為許多家庭會買我們的玩具當禮物，所以整個團隊每天都要多包裝和寄送數百筆訂單。"
  },
  {
    "word": "growth",
    "pos": "n.",
    "cn_def": "成長；增長",
    "en_def": "an increase in size, amount, or success",
    "sentence": "A: Your small online shop only had two workers three years ago, so how many people work there now? B: We have thirty employees today, because the fast {{BLANK}} of our business came from selling healthy snacks during the pandemic, and many of those customers still order from us every month.",
    "cn": "A：你的小網店三年前只有兩名員工，現在有多少人在那裡工作？ B：我們現在有三十名員工，我們生意的快速【成長】來自疫情期間販售健康零食，而且許多顧客至今每個月仍向我們訂購。"
  },
  {
    "word": "expansion",
    "pos": "n.",
    "cn_def": "擴張；擴展",
    "en_def": "the act of becoming larger, such as opening new branches",
    "sentence": "A: Why is the company hiring so many new staff and looking at office buildings in Kaohsiung? B: The board approved an {{BLANK}} into southern Taiwan, so we are opening a second office there next year, and they need people who know the local customers and can speak Taiwanese with them.",
    "cn": "A：公司為什麼要招聘這麼多新員工，還在高雄看辦公大樓？ B：董事會批准了向南台灣【擴展】的計畫，所以我們明年要在那裡開設第二個辦公室，他們需要了解當地顧客、能用台語和他們溝通的人。"
  },
  {
    "word": "risk",
    "pos": "n.",
    "cn_def": "風險",
    "en_def": "the chance that something bad, like losing money, may happen",
    "sentence": "A: My brother wants to put all his savings into his friend's new restaurant, so do you think that's a good idea? B: It's a big {{BLANK}}, because many new restaurants close within the first year, so he should only invest money he can afford to lose and ask to see a clear business plan first.",
    "cn": "A：我哥哥想把所有積蓄投入他朋友的新餐廳，你覺得這是好主意嗎？ B：這是很大的【風險】，因為許多新餐廳在第一年內就倒閉，所以他應該只投資輸得起的錢，並先要求看清楚的營運計畫。"
  },
  {
    "word": "sustainability",
    "pos": "n.",
    "cn_def": "永續性；永續發展",
    "en_def": "using resources in a way that does not harm the environment in the future",
    "sentence": "A: Why did our company stop using plastic bags and start buying electricity from solar farms this year? B: The new CEO cares a lot about {{BLANK}}, and many young customers now choose brands that protect the environment, so going green helps the planet and also improves our image.",
    "cn": "A：為什麼我們公司今年停止使用塑膠袋，並開始向太陽能電廠購電？ B：新任執行長非常重視【永續發展】，而且許多年輕顧客現在會選擇保護環境的品牌，所以走向環保既能幫助地球，也能提升我們的形象。"
  }
];

const MCQS = [
  {
    "q": "Mr. Lin has worked for the same _____ since he graduated. He was recently promoted to head of the accounting department.",
    "options": [
      "company",
      "risk",
      "profit",
      "budget"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The government offers low-interest loans to help small and medium-sized _____ owners. Applications must be submitted online before the end of March.",
    "options": [
      "expense",
      "enterprise",
      "contract",
      "growth"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The electronics _____ employs more than fifty thousand workers in twelve countries. Its headquarters is located in Seoul.",
    "options": [
      "negotiation",
      "revenue",
      "corporation",
      "strategy"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The young engineers left their stable jobs to launch a _____ together. Their first app helps people find parking spaces downtown.",
    "options": [
      "expense",
      "efficiency",
      "capital",
      "startup"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Jobs in the film _____ are hard to find without experience. Many graduates first work as unpaid assistants on short projects.",
    "options": [
      "profit",
      "industry",
      "contract",
      "supplier"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Demand for electric scooters in the local _____ has grown quickly. Several foreign makers are planning to open shops here next year.",
    "options": [
      "market",
      "budget",
      "risk",
      "negotiation"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Thanks to lower shipping costs, the store made a record _____ this quarter. The owner shared part of it with staff as a bonus.",
    "options": [
      "risk",
      "contract",
      "client",
      "profit"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Advertising is the website's main source of _____. It earns almost ninety percent of its income from online ads.",
    "options": [
      "competition",
      "supplier",
      "revenue",
      "management"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Buying the new accounting software was a wise _____. It has already saved the finance team dozens of hours each month.",
    "options": [
      "investment",
      "competition",
      "customer",
      "operation"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The owners need more _____ before they can open a second restaurant. They are hoping a bank will lend them the money.",
    "options": [
      "brand",
      "client",
      "capital",
      "negotiation"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Travel is the department's largest _____ every year. Managers are now encouraged to hold video meetings instead of flying overseas.",
    "options": [
      "growth",
      "expense",
      "brand",
      "startup"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The _____ of renting office space in Taipei has risen sharply. Many small firms are moving to cheaper areas outside the city.",
    "options": [
      "client",
      "startup",
      "brand",
      "cost"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The team must stay within its _____ for the trade show. No extra money will be given for decorations or gifts.",
    "options": [
      "industry",
      "customer",
      "budget",
      "startup"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Several employees complained to _____ about the broken air conditioner. The director promised to fix it before the hot summer months.",
    "options": [
      "management",
      "commerce",
      "revenue",
      "supplier"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The company's new pricing _____ is designed to attract younger buyers. Prices will be lower, but customers must order online.",
    "options": [
      "expense",
      "supplier",
      "capital",
      "strategy"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The factory has been in _____ for over forty years. It still produces the same handmade towels it made in 1980.",
    "options": [
      "commerce",
      "operation",
      "expansion",
      "efficiency"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Short breaks during the workday can actually increase _____. Workers who rest regularly often finish their tasks faster and more accurately.",
    "options": [
      "supplier",
      "contract",
      "client",
      "productivity"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The new heating system has improved the energy _____ of the building. Our electricity bills have dropped by twenty percent.",
    "options": [
      "customer",
      "negotiation",
      "efficiency",
      "startup"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "There is strong _____ among delivery apps in this city. Each company offers discounts to win new users.",
    "options": [
      "competition",
      "firm",
      "budget",
      "expense"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The lawyer spent the whole morning preparing documents for her _____. The case will be heard in court next Tuesday.",
    "options": [
      "industry",
      "client",
      "revenue",
      "sustainability"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Every _____ who spends over one thousand dollars will receive a free tote bag. The offer ends this Sunday.",
    "options": [
      "customer",
      "expense",
      "capital",
      "commerce"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The bakery changed its flour _____ after several late deliveries. The new company promises to deliver every morning before seven.",
    "options": [
      "profit",
      "budget",
      "strategy",
      "supplier"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Please read the _____ carefully before you sign it. Once it is signed, you cannot cancel the agreement for one year.",
    "options": [
      "revenue",
      "contract",
      "growth",
      "competition"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "After weeks of _____, the two companies finally agreed on a price. The deal will be announced at a press conference tomorrow.",
    "options": [
      "capital",
      "firm",
      "negotiation",
      "brand"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The _____ department is preparing a social media campaign for the new juice. They will post short videos every day next month.",
    "options": [
      "profit",
      "capital",
      "expense",
      "marketing"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Many shoppers stay loyal to a _____ they trust. That is why the company spends so much on its logo and image.",
    "options": [
      "risk",
      "brand",
      "cost",
      "operation"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The store's _____ of winter jackets fell because the weather stayed warm until January. The manager plans to offer big discounts.",
    "options": [
      "sales",
      "risk",
      "capital",
      "operation"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The city has seen rapid population _____ over the past decade. New schools and hospitals are being built to meet demand.",
    "options": [
      "client",
      "supplier",
      "growth",
      "contract"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The hotel chain announced plans for _____ into Southeast Asia. It will open ten new hotels there within five years.",
    "options": [
      "expansion",
      "customer",
      "supplier",
      "brand"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Investing all your savings in one company carries a high _____. Experts suggest spreading your money across different types of investments.",
    "options": [
      "client",
      "firm",
      "supplier",
      "risk"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "company": {
    "pos": "n.",
    "en_def": "a business that makes or sells goods or services",
    "cn_def": "公司"
  },
  "enterprise": {
    "pos": "n.",
    "en_def": "a business or company, often one that someone starts and runs",
    "cn_def": "企業；事業"
  },
  "firm": {
    "pos": "n.",
    "en_def": "a business, especially one that gives professional services like law or accounting",
    "cn_def": "公司；事務所"
  },
  "corporation": {
    "pos": "n.",
    "en_def": "a large company or group of companies that acts as one legal unit",
    "cn_def": "大公司；股份有限公司"
  },
  "startup": {
    "pos": "n.",
    "en_def": "a new, small company, often in technology, that is just beginning",
    "cn_def": "新創公司"
  },
  "industry": {
    "pos": "n.",
    "en_def": "all the businesses that make or sell a particular kind of product or service",
    "cn_def": "產業；工業"
  },
  "commerce": {
    "pos": "n.",
    "en_def": "the activity of buying and selling goods, especially on a large scale",
    "cn_def": "商業；貿易"
  },
  "market": {
    "pos": "n.",
    "en_def": "an area or group of people where a product can be sold",
    "cn_def": "市場"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money you earn from business after paying all costs",
    "cn_def": "利潤；盈利"
  },
  "revenue": {
    "pos": "n.",
    "en_def": "the total money a business receives from selling goods or services",
    "cn_def": "營收；收入"
  },
  "investment": {
    "pos": "n.",
    "en_def": "money or time you put into something to get a benefit later",
    "cn_def": "投資"
  },
  "capital": {
    "pos": "n.",
    "en_def": "money used to start or grow a business",
    "cn_def": "資本；資金"
  },
  "expense": {
    "pos": "n.",
    "en_def": "money spent on something, especially for work",
    "cn_def": "費用；開支"
  },
  "cost": {
    "pos": "n.",
    "en_def": "the amount of money needed to buy, make, or do something",
    "cn_def": "成本；費用"
  },
  "budget": {
    "pos": "n.",
    "en_def": "a plan of how much money can be spent on something",
    "cn_def": "預算"
  },
  "management": {
    "pos": "n.",
    "en_def": "the people who control a company, or the work of controlling it",
    "cn_def": "管理；管理階層"
  },
  "strategy": {
    "pos": "n.",
    "en_def": "a careful plan to reach a goal",
    "cn_def": "策略；戰略"
  },
  "operation": {
    "pos": "n.",
    "en_def": "the work or activity of a business, or a part of it",
    "cn_def": "營運；業務"
  },
  "productivity": {
    "pos": "n.",
    "en_def": "how much work a person or company produces in a certain time",
    "cn_def": "生產力"
  },
  "efficiency": {
    "pos": "n.",
    "en_def": "the ability to do something well without wasting time, money, or energy",
    "cn_def": "效率"
  },
  "competition": {
    "pos": "n.",
    "en_def": "the situation when businesses try to be more successful than others",
    "cn_def": "競爭"
  },
  "client": {
    "pos": "n.",
    "en_def": "a person or company that pays for a professional service",
    "cn_def": "客戶；委託人"
  },
  "customer": {
    "pos": "n.",
    "en_def": "a person who buys goods or services from a shop or business",
    "cn_def": "顧客"
  },
  "supplier": {
    "pos": "n.",
    "en_def": "a person or company that provides goods to other businesses",
    "cn_def": "供應商"
  },
  "contract": {
    "pos": "n.",
    "en_def": "a written legal agreement between two or more people or companies",
    "cn_def": "合約；契約"
  },
  "negotiation": {
    "pos": "n.",
    "en_def": "formal discussion between people who are trying to reach an agreement",
    "cn_def": "協商；談判"
  },
  "marketing": {
    "pos": "n.",
    "en_def": "the work of advertising and promoting products so people buy them",
    "cn_def": "行銷"
  },
  "brand": {
    "pos": "n.",
    "en_def": "a name of a product or company that people know",
    "cn_def": "品牌"
  },
  "sales": {
    "pos": "n.",
    "en_def": "the number of products sold, or the money received from selling them",
    "cn_def": "銷售額；銷售"
  },
  "growth": {
    "pos": "n.",
    "en_def": "an increase in size, amount, or success",
    "cn_def": "成長；增長"
  },
  "expansion": {
    "pos": "n.",
    "en_def": "the act of becoming larger, such as opening new branches",
    "cn_def": "擴張；擴展"
  },
  "risk": {
    "pos": "n.",
    "en_def": "the chance that something bad, like losing money, may happen",
    "cn_def": "風險"
  },
  "sustainability": {
    "pos": "n.",
    "en_def": "using resources in a way that does not harm the environment in the future",
    "cn_def": "永續性；永續發展"
  }
};

const EXTRA_GLOSSES = {};
