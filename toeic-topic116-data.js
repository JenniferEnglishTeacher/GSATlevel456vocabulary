// Topic 116 Quiz Data: Economy 經濟
// Source word list: https://www.examword.com/group-topic/economy — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T116 - Economy 經濟",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "inflation",
    "pos": "n.",
    "cn_def": "通貨膨脹",
    "en_def": "a general rise in prices over time",
    "sentence": "A: Why did the company cafeteria raise the price of lunch boxes again this month, even though the portions look exactly the same as before? B: Rising {{BLANK}} has pushed up the cost of rice, meat, and cooking oil, so the supplier increased its prices and the cafeteria had no choice but to follow.",
    "cn": "A：為什麼公司餐廳這個月又調漲了便當的價格，即使份量看起來和以前完全一樣？ B：不斷上升的【通貨膨脹】推高了米、肉和食用油的成本，所以供應商調漲了價格，餐廳也只好跟著調整。"
  },
  {
    "word": "deflation",
    "pos": "n.",
    "cn_def": "通貨緊縮",
    "en_def": "a general fall in prices over time",
    "sentence": "A: Prices at the shopping mall have been falling for months, so why does the economist on the news seem so worried about it instead of happy? B: She explained that long periods of {{BLANK}} make people delay their purchases, which lowers company sales, cuts wages, and can slowly weaken the whole economy.",
    "cn": "A：購物中心的價格已經下跌好幾個月了，為什麼新聞上的經濟學家看起來那麼擔心，而不是高興？ B：她解釋說，長期的【通貨緊縮】會讓人們延後購買，這會降低公司的銷售額、減少薪資，並可能慢慢削弱整體經濟。"
  },
  {
    "word": "recession",
    "pos": "n.",
    "cn_def": "經濟衰退",
    "en_def": "a period when the economy shrinks and business slows down",
    "sentence": "A: Do you think the company will still open the new branch office in Kaohsiung next spring as the director promised at the annual meeting? B: Probably not, because many of our clients have cut their spending during the {{BLANK}}, so management wants to wait until sales recover before taking such a big risk.",
    "cn": "A：你覺得公司明年春天還會像董事在年會上承諾的那樣，在高雄開設新的分公司嗎？ B：大概不會，因為在【經濟衰退】期間我們許多客戶都削減了開支，所以管理階層想等到銷售回升後再冒這麼大的風險。"
  },
  {
    "word": "boom",
    "pos": "n.",
    "cn_def": "繁榮；景氣大好",
    "en_def": "a period of fast economic growth",
    "sentence": "A: Why is it suddenly so hard to find an apartment near the science park, and why have the rents gone up so quickly this year? B: The local technology {{BLANK}} has brought thousands of new engineers to the area, so landlords know they can easily find tenants even at higher prices.",
    "cn": "A：為什麼突然很難在科學園區附近找到公寓，而且今年租金漲得這麼快？ B：當地的科技業【繁榮】為這個地區帶來了數千名新工程師，所以房東知道即使價格較高也很容易找到房客。"
  },
  {
    "word": "GDP",
    "pos": "n.",
    "cn_def": "國內生產毛額",
    "en_def": "gross domestic product; the total value of goods and services a country produces in a year",
    "sentence": "A: Why is everyone in the finance department talking about the new government report that came out this morning before the market opened? B: It shows that the country's {{BLANK}} grew by almost four percent last year, which means consumers are spending more and our sales targets for next year may be raised.",
    "cn": "A：為什麼財務部的每個人都在討論今天早上開盤前公布的新政府報告？ B：報告顯示，國家的【國內生產毛額】去年成長了將近百分之四，這表示消費者花費更多，我們明年的銷售目標可能會被調高。"
  },
  {
    "word": "market",
    "pos": "n.",
    "cn_def": "市場",
    "en_def": "an area or group of people where a product is bought and sold",
    "sentence": "A: Why did the marketing team decide to translate all of our product brochures and website pages into Japanese and Korean this quarter? B: The board wants to enter the Asian {{BLANK}} next year, and our research shows there is strong demand for affordable smart home devices in those countries.",
    "cn": "A：為什麼行銷團隊決定這一季把我們所有的產品手冊和網頁都翻譯成日文和韓文？ B：董事會想在明年進入亞洲【市場】，而我們的研究顯示這些國家對平價智慧家庭裝置有強烈的需求。"
  },
  {
    "word": "trade",
    "pos": "n.",
    "cn_def": "貿易",
    "en_def": "the buying and selling of goods between countries",
    "sentence": "A: Why are the shipping costs for our imported coffee beans so much higher than they were at the beginning of the year? B: New rules on {{BLANK}} between the two countries have added extra taxes and paperwork, so our supplier now needs more time and money to send every container to Taiwan.",
    "cn": "A：為什麼我們進口咖啡豆的運費比年初高出這麼多？ B：兩國之間新的【貿易】規定增加了額外的稅和文件作業，所以我們的供應商現在需要更多時間和金錢才能把每個貨櫃運到台灣。"
  },
  {
    "word": "export",
    "pos": "v.",
    "cn_def": "出口",
    "en_def": "to sell and send goods to another country",
    "sentence": "A: How is the small tea farm in Nantou able to grow so quickly when most farms in the area are struggling to survive? B: The owner started to {{BLANK}} high-quality oolong tea to Japan and Canada three years ago, and those overseas buyers pay much better prices than local shops do.",
    "cn": "A：南投那座小茶園為什麼能成長得這麼快，而該地區大多數農場都在努力求生存？ B：老闆三年前開始把高品質的烏龍茶【出口】到日本和加拿大，而那些海外買家付的價格比當地商店好得多。"
  },
  {
    "word": "import",
    "pos": "v.",
    "cn_def": "進口",
    "en_def": "to buy and bring in goods from another country",
    "sentence": "A: Why does the new restaurant downtown charge so much more for steak than the other places on the same street? B: The chef insists that they {{BLANK}} all their beef directly from Australia, and the shipping, storage, and customs fees make every dish quite costly, although customers say the quality is excellent.",
    "cn": "A：為什麼市中心那家新餐廳的牛排比同一條街上其他餐廳貴這麼多？ B：主廚堅持所有牛肉都直接從澳洲【進口】，而運費、倉儲費和關稅讓每道菜都相當昂貴，不過顧客說品質非常好。"
  },
  {
    "word": "investment",
    "pos": "n.",
    "cn_def": "投資",
    "en_def": "money put into something in order to earn more later",
    "sentence": "A: Why did the factory manager buy those expensive robots when the old machines were still working well enough for the production line? B: He sees it as a long-term {{BLANK}}, because the robots work faster, make fewer mistakes, and should save the company a lot of money within about five years.",
    "cn": "A：為什麼舊機器還能應付生產線，工廠經理卻買了那些昂貴的機器人？ B：他把這視為一項長期【投資】，因為機器人工作更快、錯誤更少，大約五年內應該能替公司省下很多錢。"
  },
  {
    "word": "capital",
    "pos": "n.",
    "cn_def": "資本；資金",
    "en_def": "money used to start or grow a business",
    "sentence": "A: Your bakery has been so popular since it opened, so why haven't you opened a second shop in the busy train station yet? B: I don't have enough {{BLANK}} right now, because renting a space there and buying new ovens would cost about three million dollars, so I'm still talking with the bank about a loan.",
    "cn": "A：你的麵包店開幕以來一直很受歡迎，為什麼還沒在熱鬧的火車站開第二家店呢？ B：我現在沒有足夠的【資金】，因為在那裡租店面和購買新烤箱大約要花三百萬元，所以我還在和銀行商量貸款的事。"
  },
  {
    "word": "revenue",
    "pos": "n.",
    "cn_def": "營收；收入",
    "en_def": "the money a company receives from selling goods or services",
    "sentence": "A: Why does the sales director look so pleased this morning after the quarterly meeting with the board of directors? B: Our online store's {{BLANK}} rose by thirty percent compared with last year, mainly because the new mobile app made shopping easier, and the board has agreed to give the team a bonus.",
    "cn": "A：為什麼業務總監今天早上和董事會開完季度會議後看起來那麼高興？ B：我們網路商店的【營收】比去年成長了百分之三十，主要是因為新的手機應用程式讓購物更方便，而董事會也同意發獎金給團隊。"
  },
  {
    "word": "profit",
    "pos": "n.",
    "cn_def": "利潤",
    "en_def": "money earned after all costs are paid",
    "sentence": "A: The shop sold thousands of umbrellas during the rainy season, so why is the owner still complaining about money? B: Rent, staff wages, and shipping costs went up so much that he made only a small {{BLANK}} on each umbrella, even though sales were the best they have ever been.",
    "cn": "A：這家店在雨季賣出了數千把雨傘，為什麼老闆還在抱怨錢的問題？ B：房租、員工薪資和運費漲了很多，所以即使銷售量是有史以來最好的，他每把雨傘也只賺到一點點【利潤】。"
  },
  {
    "word": "loss",
    "pos": "n.",
    "cn_def": "虧損",
    "en_def": "money lost when costs are higher than income",
    "sentence": "A: Why did the company suddenly decide to close three of its convenience stores in the suburbs last month? B: Those stores had been running at a {{BLANK}} for over two years, because fewer people shopped there after the new supermarket opened, and the rent kept going up every year.",
    "cn": "A：為什麼公司上個月突然決定關閉郊區的三家便利商店？ B：那些店已經【虧損】經營超過兩年了，因為新超市開幕後去那裡購物的人變少，而房租每年還一直上漲。"
  },
  {
    "word": "budget",
    "pos": "n.",
    "cn_def": "預算",
    "en_def": "a plan of how much money can be spent",
    "sentence": "A: Can we hire a famous singer to perform at the company's year-end party, since everyone worked so hard this year? B: I'm afraid not, because the {{BLANK}} for the party is only two hundred thousand dollars, and most of that money is already being used for the food, the hotel ballroom, and the prizes.",
    "cn": "A：既然今年大家都這麼努力，我們可以請一位知名歌手在公司尾牙表演嗎？ B：恐怕不行，因為尾牙的【預算】只有二十萬元，而且大部分的錢已經用在餐點、飯店宴會廳和獎品上了。"
  },
  {
    "word": "tax",
    "pos": "n.",
    "cn_def": "稅；稅金",
    "en_def": "money that people and companies must pay to the government",
    "sentence": "A: Why are so many people waiting in line at the accounting office this week, and why does everyone look so stressed? B: The deadline for paying income {{BLANK}} is this Friday, so many small business owners have come to get help filling out the forms before they have to pay a fine.",
    "cn": "A：為什麼這週有這麼多人在會計事務所排隊，而且大家看起來都壓力很大？ B：繳納所得【稅】的截止日期是這個星期五，所以很多小企業老闆都來請人幫忙填表，以免被罰款。"
  },
  {
    "word": "subsidy",
    "pos": "n.",
    "cn_def": "補助金；補貼",
    "en_def": "money the government gives to help a group or lower costs",
    "sentence": "A: How did the small farm near the river afford to install so many solar panels on the roofs of its storage buildings? B: The government offered a {{BLANK}} that covered half of the cost, because officials want more farms to produce clean energy and reduce their electricity bills.",
    "cn": "A：河邊那座小農場怎麼負擔得起在倉庫屋頂上安裝這麼多太陽能板？ B：政府提供了一筆【補助金】，負擔了一半的費用，因為官員希望更多農場生產乾淨能源並降低電費。"
  },
  {
    "word": "unemployment",
    "pos": "n.",
    "cn_def": "失業",
    "en_def": "the state of not having a job; the number of people without jobs",
    "sentence": "A: Why is the city government holding so many free job fairs and computer training classes at the community center this year? B: Local {{BLANK}} rose sharply after two large factories closed, so officials want to help those workers learn new skills and find positions in other companies quickly.",
    "cn": "A：為什麼市政府今年在社區中心舉辦這麼多免費的就業博覽會和電腦訓練課程？ B：兩家大工廠關閉後，當地的【失業】人數急劇上升，所以官員想幫助那些工人學習新技能，並盡快在其他公司找到職位。"
  },
  {
    "word": "employment",
    "pos": "n.",
    "cn_def": "就業；僱用",
    "en_def": "paid work; jobs for people",
    "sentence": "A: Why is the mayor so excited about the new electric car factory that will be built just outside the city next year? B: The factory will create {{BLANK}} for nearly two thousand local people, which means many young graduates won't have to move to Taipei to find good jobs.",
    "cn": "A：為什麼市長對明年將在市郊興建的新電動車工廠這麼興奮？ B：這座工廠將為近兩千名當地居民創造【就業】機會，這表示許多年輕畢業生不必搬到台北找好工作。"
  },
  {
    "word": "productivity",
    "pos": "n.",
    "cn_def": "生產力",
    "en_def": "how much work is done in a certain amount of time",
    "sentence": "A: Why did the office manager give everyone two new computer screens and replace the old chairs in the design department? B: She noticed that the team's {{BLANK}} was dropping because staff wasted time switching between windows and felt tired from sitting badly, so she hoped the changes would help them work faster.",
    "cn": "A：為什麼辦公室經理給每個人兩台新螢幕，還更換了設計部門的舊椅子？ B：她注意到團隊的【生產力】在下降，因為員工浪費時間切換視窗，又因坐姿不良而感到疲累，所以她希望這些改變能幫助他們工作得更快。"
  },
  {
    "word": "consumption",
    "pos": "n.",
    "cn_def": "消費；消耗量",
    "en_def": "the amount of goods or energy that people use",
    "sentence": "A: Why has the building manager asked every department to turn off the lights and computers before leaving the office each evening? B: Our electricity {{BLANK}} rose by twenty percent last summer, and the company wants to lower its bills and show customers that it cares about protecting the environment.",
    "cn": "A：為什麼大樓經理要求每個部門每天傍晚離開辦公室前都要關燈和關電腦？ B：我們的用電【消耗量】去年夏天增加了百分之二十，公司想降低電費，並向客戶表明我們重視環境保護。"
  },
  {
    "word": "supply",
    "pos": "n.",
    "cn_def": "供給；供應",
    "en_def": "an amount of something that is available to use or sell",
    "sentence": "A: Why can't we get the new laptops for the sales team until the end of next month, even though we ordered them weeks ago? B: The manufacturer has a limited {{BLANK}} of computer chips because of problems at a factory overseas, so all orders are being delayed until production returns to normal.",
    "cn": "A：為什麼我們幾週前就訂了業務團隊的新筆電，卻要到下個月底才能拿到？ B：因為海外一家工廠出了問題，製造商的電腦晶片【供應】有限，所以所有訂單都被延後，直到生產恢復正常為止。"
  },
  {
    "word": "demand",
    "pos": "n.",
    "cn_def": "需求",
    "en_def": "the need or wish of customers to buy something",
    "sentence": "A: Why is the factory asking workers to stay late and work on Saturdays for the next two months? B: There is huge {{BLANK}} for our electric fans because of the record heat wave this summer, and the stores keep calling us to send more boxes as soon as possible.",
    "cn": "A：為什麼工廠要求工人在接下來兩個月加班並在星期六上班？ B：因為今年夏天創紀錄的熱浪，我們的電風扇【需求】非常大，商店一直打電話要我們盡快送更多貨過去。"
  },
  {
    "word": "finance",
    "pos": "n.",
    "cn_def": "財務；金融",
    "en_def": "the management of money, especially by a company or government",
    "sentence": "A: Who should I talk to about getting paid back for the hotel and taxi costs from my business trip to Singapore last week? B: You need to send your receipts to the {{BLANK}} department on the third floor, and they usually transfer the money to your bank account within ten working days.",
    "cn": "A：上週我去新加坡出差的飯店和計程車費用，應該找誰申請報銷？ B：你需要把收據交給三樓的【財務】部門，他們通常會在十個工作天內把錢轉入你的銀行帳戶。"
  },
  {
    "word": "bankruptcy",
    "pos": "n.",
    "cn_def": "破產",
    "en_def": "the state of being unable to pay your debts",
    "sentence": "A: Why did the popular furniture store on Main Street suddenly close its doors and stop answering phone calls from customers? B: The owner declared {{BLANK}} last week because the business owed the bank millions of dollars and could no longer pay its suppliers or employees.",
    "cn": "A：為什麼大街上那家受歡迎的家具店突然關門，也不再接聽顧客的電話？ B：老闆上週宣告【破產】，因為公司欠銀行數百萬元，再也付不出供應商和員工的錢了。"
  },
  {
    "word": "interest",
    "pos": "n.",
    "cn_def": "利息",
    "en_def": "extra money paid for borrowing money",
    "sentence": "A: Why did you decide to pay off your car loan early instead of keeping that money in your savings account for emergencies? B: The bank was charging me a high rate of {{BLANK}} on the loan every month, so paying it all back now will save me a lot of money over the next three years.",
    "cn": "A：你為什麼決定提早還清車貸，而不是把那筆錢留在儲蓄帳戶裡應急？ B：銀行每個月對這筆貸款收取很高的【利息】，所以現在全部還清能在接下來三年替我省下很多錢。"
  },
  {
    "word": "debt",
    "pos": "n.",
    "cn_def": "債務",
    "en_def": "money that is owed to someone",
    "sentence": "A: Why has the new manager cancelled all the business trips and stopped buying new office furniture this year? B: The company is trying to reduce its {{BLANK}}, because it borrowed a lot from the bank to build the new warehouse, and the monthly payments are now very heavy.",
    "cn": "A：為什麼新經理今年取消了所有出差，也不再購買新的辦公家具？ B：公司正在努力減少【債務】，因為為了建造新倉庫向銀行借了很多錢，現在每月的還款負擔非常沉重。"
  },
  {
    "word": "currency",
    "pos": "n.",
    "cn_def": "貨幣",
    "en_def": "the money used in a country",
    "sentence": "A: Should I change my Taiwan dollars at the airport before my business trip to Tokyo, or wait until I arrive in Japan? B: It's usually better to buy the local {{BLANK}} at your own bank before you leave, because the airport counters often give a worse rate and charge an extra service fee.",
    "cn": "A：我去東京出差前應該在機場換台幣，還是等到了日本再換？ B：通常最好出發前在你自己的銀行購買當地【貨幣】，因為機場櫃檯的匯率往往比較差，還會多收手續費。"
  },
  {
    "word": "exchange",
    "pos": "n.",
    "cn_def": "兌換；匯兌",
    "en_def": "the act of changing one country's money into another's",
    "sentence": "A: Why did our Japanese supplier suddenly raise the price of the machine parts we have been buying from them for years? B: The {{BLANK}} rate between the yen and the US dollar changed a lot this spring, so their costs went up and they had to adjust the prices in our new contract.",
    "cn": "A：為什麼我們的日本供應商突然調漲了我們多年來一直向他們購買的機械零件價格？ B：今年春天日圓和美元之間的【匯兌】比率變動很大，所以他們的成本上升，只好在新合約中調整價格。"
  },
  {
    "word": "industry",
    "pos": "n.",
    "cn_def": "產業；工業",
    "en_def": "a type of business or trade",
    "sentence": "A: Why did you leave your job at the bank to work for a small company that makes video games for mobile phones? B: I believe the gaming {{BLANK}} will keep growing quickly over the next ten years, and I wanted to build my career in a creative field with many chances for promotion.",
    "cn": "A：你為什麼辭去銀行的工作，去一家製作手機遊戲的小公司上班？ B：我相信遊戲【產業】在未來十年會持續快速成長，而我想在一個充滿升遷機會的創意領域發展事業。"
  },
  {
    "word": "manufacturing",
    "pos": "n.",
    "cn_def": "製造業；製造",
    "en_def": "the business of making goods in factories",
    "sentence": "A: Why did the company move most of its production from Taoyuan to a new plant in Vietnam last year? B: Costs for {{BLANK}} are much lower there, because land and labor are cheaper, so the company can make shoes at a lower price and stay competitive with other brands.",
    "cn": "A：為什麼公司去年把大部分生產從桃園移到越南的新工廠？ B：那裡的【製造】成本低得多，因為土地和勞工比較便宜，所以公司能以較低的價格生產鞋子，並和其他品牌保持競爭力。"
  },
  {
    "word": "service",
    "pos": "n.",
    "cn_def": "服務",
    "en_def": "work done to help customers rather than goods made",
    "sentence": "A: Why do so many guests leave five-star reviews for that small hotel near the train station, even though the rooms are quite old? B: The staff provide excellent customer {{BLANK}}, such as carrying bags, recommending local restaurants, and arranging taxis at any time, so visitors feel very welcome during their stay.",
    "cn": "A：為什麼那麼多房客給火車站附近那家小飯店五星評價，即使房間相當老舊？ B：員工提供極佳的顧客【服務】，例如幫忙提行李、推薦當地餐廳，以及隨時安排計程車，讓旅客在住宿期間感到非常受歡迎。"
  },
  {
    "word": "enterprise",
    "pos": "n.",
    "cn_def": "企業",
    "en_def": "a business or company",
    "sentence": "A: Why does the government offer free business classes and cheap loans to young people who want to start their own companies? B: Officials believe every new small {{BLANK}} can create jobs for local people, so they want to help more young owners open shops, cafés, and online businesses across the country.",
    "cn": "A：為什麼政府要提供免費的商業課程和低利貸款給想自己創業的年輕人？ B：官員相信每一家新的小型【企業】都能為當地居民創造工作機會，所以他們想幫助更多年輕老闆在全國各地開設商店、咖啡館和網路商店。"
  },
  {
    "word": "entrepreneur",
    "pos": "n.",
    "cn_def": "企業家；創業家",
    "en_def": "a person who starts and runs a business",
    "sentence": "A: Who is the woman giving the speech at the business conference this afternoon, and why is everyone so excited to hear her? B: She is a young {{BLANK}} who started an online clothing company in her apartment five years ago, and now her business has more than two hundred employees around Asia.",
    "cn": "A：今天下午在商業研討會上演講的女士是誰？為什麼大家都那麼期待聽她演講？ B：她是一位年輕的【創業家】，五年前在自己的公寓裡創立了一家網路服飾公司，現在她的事業在亞洲有超過兩百名員工。"
  },
  {
    "word": "globalization",
    "pos": "n.",
    "cn_def": "全球化",
    "en_def": "the process by which businesses and economies around the world become connected",
    "sentence": "A: Why can we buy fresh fruit from Chile, phones from Korea, and clothes from Vietnam in the same shopping mall in Taipei? B: Because of {{BLANK}}, companies now sell their products all over the world, and faster shipping and the internet make it easy for goods to travel between countries.",
    "cn": "A：為什麼我們能在台北的同一間購物中心買到智利的新鮮水果、韓國的手機和越南的衣服？ B：由於【全球化】，現在公司把產品銷售到世界各地，而更快速的運輸和網路讓商品很容易在國家之間流通。"
  }
];

const MCQS = [
  {
    "q": "Prices for food and fuel have risen sharply this year. The central bank raised interest rates to bring _____ under control.",
    "options": [
      "revenue",
      "employment",
      "capital",
      "inflation"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Shop prices have fallen for twelve months in a row. Economists warn that _____ may cause shoppers to delay buying cars and homes.",
    "options": [
      "investment",
      "deflation",
      "budget",
      "subsidy"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Many companies stopped hiring during the two-year _____. Sales only began to recover when consumer spending increased again last spring.",
    "options": [
      "boom",
      "profit",
      "recession",
      "revenue"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our sales in Taiwan have stopped growing. The board now plans to expand into the Southeast Asian _____ next year.",
    "options": [
      "budget",
      "tax",
      "debt",
      "market"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The two countries signed a new agreement last week. It will remove taxes on _____ in electronics and farm products.",
    "options": [
      "inflation",
      "recession",
      "trade",
      "bankruptcy"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The farm grows more mangoes than local markets can buy. It plans to _____ the extra fruit to Japan and Korea.",
    "options": [
      "import",
      "borrow",
      "invest",
      "export"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Taiwan has very little oil of its own. As a result, the country must _____ most of its fuel from other nations.",
    "options": [
      "export",
      "import",
      "lend",
      "save"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Buying new software was expensive for our small office. However, the _____ has already saved us many hours of work each week.",
    "options": [
      "investment",
      "recession",
      "inflation",
      "deflation"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The two founders needed more money to open their second café. They met several investors to raise _____ for the project.",
    "options": [
      "loss",
      "unemployment",
      "capital",
      "recession"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The theme park sold a record number of tickets this summer. Its total _____ reached forty million dollars, the highest in its history.",
    "options": [
      "deflation",
      "revenue",
      "unemployment",
      "recession"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "After paying for rent, wages, and materials, the bakery still made a good _____. The owner plans to share it with her staff.",
    "options": [
      "profit",
      "loss",
      "debt",
      "deflation"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The airline's costs were much higher than its income this year. It reported a _____ of three hundred million dollars in its annual report.",
    "options": [
      "profit",
      "loss",
      "subsidy",
      "boom"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The marketing team spent too much on television ads last quarter. This quarter, they must stay within their _____ of fifty thousand dollars.",
    "options": [
      "profit",
      "inflation",
      "budget",
      "currency"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "All companies must pay their income _____ before the end of May. Late payments will result in a fine from the government.",
    "options": [
      "trade",
      "tax",
      "capital",
      "supply"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Electric scooters are popular in Taipei partly because of a government _____. Buyers can get up to ten thousand dollars back.",
    "options": [
      "subsidy",
      "recession",
      "inflation",
      "bankruptcy"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Two large factories in the town closed last year. As a result, _____ rose to its highest level in a decade.",
    "options": [
      "productivity",
      "unemployment",
      "capital",
      "revenue"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The new shopping center will create _____ for about five hundred local residents. Most of the positions will be in retail and cleaning.",
    "options": [
      "employment",
      "unemployment",
      "inflation",
      "deflation"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Since the office began allowing short breaks every two hours, staff seem less tired. Their _____ has increased by nearly fifteen percent.",
    "options": [
      "unemployment",
      "debt",
      "deflation",
      "productivity"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Our factory installed new energy-saving lights last spring. Since then, our electricity _____ has dropped by about one third.",
    "options": [
      "consumption",
      "investment",
      "recession",
      "enterprise"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Heavy rain damaged many vegetable farms in the south. The limited _____ of cabbage has pushed prices up in supermarkets.",
    "options": [
      "demand",
      "exchange",
      "supply",
      "interest"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Because of the hot summer, customer _____ for air conditioners is very high. Many stores have already sold out of popular models.",
    "options": [
      "supply",
      "demand",
      "debt",
      "currency"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The travel agency could not pay back its large bank loans. Last month, the owner was forced to declare _____.",
    "options": [
      "revenue",
      "productivity",
      "bankruptcy",
      "globalization"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The bank is offering a special home loan this month. Customers pay only two percent _____ for the first three years.",
    "options": [
      "tax",
      "profit",
      "capital",
      "interest"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The company borrowed heavily to build its new headquarters. It now plans to sell an old warehouse to reduce its _____.",
    "options": [
      "revenue",
      "productivity",
      "debt",
      "demand"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Before your trip to Europe, you should change some money into euros. The euro is the official _____ of many European countries.",
    "options": [
      "currency",
      "finance",
      "market",
      "industry"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Our company pays its Japanese suppliers in yen. A change in the _____ rate can raise our costs very quickly.",
    "options": [
      "boom",
      "exchange",
      "debt",
      "enterprise"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Taiwan is famous around the world for its computer chip _____. Many global technology companies depend on its factories.",
    "options": [
      "industry",
      "currency",
      "inflation",
      "recession"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The company does its design work in Taipei. However, all of its _____ takes place in a large factory in Vietnam.",
    "options": [
      "unemployment",
      "inflation",
      "bankruptcy",
      "manufacturing"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Kevin Lin started his first online business at the age of twenty. Today, he is a successful _____ who owns three companies.",
    "options": [
      "entrepreneur",
      "enterprise",
      "industry",
      "currency"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Thanks to _____, a small company in Tainan can now sell its products to customers in fifty countries. Online shopping has made this much easier.",
    "options": [
      "deflation",
      "recession",
      "unemployment",
      "globalization"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "inflation": {
    "pos": "n.",
    "en_def": "a general rise in prices over time",
    "cn_def": "通貨膨脹"
  },
  "deflation": {
    "pos": "n.",
    "en_def": "a general fall in prices over time",
    "cn_def": "通貨緊縮"
  },
  "recession": {
    "pos": "n.",
    "en_def": "a period when the economy shrinks and business slows down",
    "cn_def": "經濟衰退"
  },
  "boom": {
    "pos": "n.",
    "en_def": "a period of fast economic growth",
    "cn_def": "繁榮；景氣大好"
  },
  "gdp": {
    "pos": "n.",
    "en_def": "gross domestic product; the total value of goods and services a country produces in a year",
    "cn_def": "國內生產毛額"
  },
  "market": {
    "pos": "n.",
    "en_def": "an area or group of people where a product is bought and sold",
    "cn_def": "市場"
  },
  "trade": {
    "pos": "n.",
    "en_def": "the buying and selling of goods between countries",
    "cn_def": "貿易"
  },
  "export": {
    "pos": "v.",
    "en_def": "to sell and send goods to another country",
    "cn_def": "出口"
  },
  "import": {
    "pos": "v.",
    "en_def": "to buy and bring in goods from another country",
    "cn_def": "進口"
  },
  "investment": {
    "pos": "n.",
    "en_def": "money put into something in order to earn more later",
    "cn_def": "投資"
  },
  "capital": {
    "pos": "n.",
    "en_def": "money used to start or grow a business",
    "cn_def": "資本；資金"
  },
  "revenue": {
    "pos": "n.",
    "en_def": "the money a company receives from selling goods or services",
    "cn_def": "營收；收入"
  },
  "profit": {
    "pos": "n.",
    "en_def": "money earned after all costs are paid",
    "cn_def": "利潤"
  },
  "loss": {
    "pos": "n.",
    "en_def": "money lost when costs are higher than income",
    "cn_def": "虧損"
  },
  "budget": {
    "pos": "n.",
    "en_def": "a plan of how much money can be spent",
    "cn_def": "預算"
  },
  "tax": {
    "pos": "n.",
    "en_def": "money that people and companies must pay to the government",
    "cn_def": "稅；稅金"
  },
  "subsidy": {
    "pos": "n.",
    "en_def": "money the government gives to help a group or lower costs",
    "cn_def": "補助金；補貼"
  },
  "unemployment": {
    "pos": "n.",
    "en_def": "the state of not having a job; the number of people without jobs",
    "cn_def": "失業"
  },
  "employment": {
    "pos": "n.",
    "en_def": "paid work; jobs for people",
    "cn_def": "就業；僱用"
  },
  "productivity": {
    "pos": "n.",
    "en_def": "how much work is done in a certain amount of time",
    "cn_def": "生產力"
  },
  "consumption": {
    "pos": "n.",
    "en_def": "the amount of goods or energy that people use",
    "cn_def": "消費；消耗量"
  },
  "supply": {
    "pos": "n.",
    "en_def": "an amount of something that is available to use or sell",
    "cn_def": "供給；供應"
  },
  "demand": {
    "pos": "n.",
    "en_def": "the need or wish of customers to buy something",
    "cn_def": "需求"
  },
  "finance": {
    "pos": "n.",
    "en_def": "the management of money, especially by a company or government",
    "cn_def": "財務；金融"
  },
  "bankruptcy": {
    "pos": "n.",
    "en_def": "the state of being unable to pay your debts",
    "cn_def": "破產"
  },
  "interest": {
    "pos": "n.",
    "en_def": "extra money paid for borrowing money",
    "cn_def": "利息"
  },
  "debt": {
    "pos": "n.",
    "en_def": "money that is owed to someone",
    "cn_def": "債務"
  },
  "currency": {
    "pos": "n.",
    "en_def": "the money used in a country",
    "cn_def": "貨幣"
  },
  "exchange": {
    "pos": "n.",
    "en_def": "the act of changing one country's money into another's",
    "cn_def": "兌換；匯兌"
  },
  "industry": {
    "pos": "n.",
    "en_def": "a type of business or trade",
    "cn_def": "產業；工業"
  },
  "manufacturing": {
    "pos": "n.",
    "en_def": "the business of making goods in factories",
    "cn_def": "製造業；製造"
  },
  "service": {
    "pos": "n.",
    "en_def": "work done to help customers rather than goods made",
    "cn_def": "服務"
  },
  "enterprise": {
    "pos": "n.",
    "en_def": "a business or company",
    "cn_def": "企業"
  },
  "entrepreneur": {
    "pos": "n.",
    "en_def": "a person who starts and runs a business",
    "cn_def": "企業家；創業家"
  },
  "globalization": {
    "pos": "n.",
    "en_def": "the process by which businesses and economies around the world become connected",
    "cn_def": "全球化"
  }
};

const EXTRA_GLOSSES = {};
