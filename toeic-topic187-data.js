// Topic 187 Quiz Data: Importance 重要性
// Source word list: https://www.examword.com/group-topic/importance — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T187 - Importance 重要性",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "significance",
    "pos": "n.",
    "cn_def": "重要性；意義",
    "en_def": "the importance or meaning of something",
    "sentence": "A: Why did the manager ask everyone to attend the meeting about the new client this afternoon, even the interns who only joined our team last week? B: She wanted all of us to understand the {{BLANK}} of this contract, because it could bring in more business than any other deal we have signed this year.",
    "cn": "A：為什麼經理要求大家都參加今天下午關於新客戶的會議，連上週才加入團隊的實習生也要去？ B：她希望我們所有人都了解這份合約的【重要性】，因為它可能帶來比今年簽過的任何交易都更多的生意。"
  },
  {
    "word": "significant",
    "pos": "adj.",
    "cn_def": "重大的；顯著的",
    "en_def": "large or important enough to be noticed",
    "sentence": "A: Have the changes to our online ordering system made any difference since the technical team updated the website at the beginning of last month? B: Yes, we have seen a {{BLANK}} increase in sales, especially from young customers who prefer shopping on their phones during their lunch breaks.",
    "cn": "A：自從技術團隊上個月初更新網站後，我們線上訂購系統的改變有帶來任何不同嗎？ B：有，我們看到銷售額【顯著的】成長，特別是來自喜歡在午休時用手機購物的年輕顧客。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值",
    "en_def": "how much something is worth or how useful it is",
    "sentence": "A: Do you think we should still keep the old printer in the storage room, or should we throw it away when the cleaners come on Friday? B: I would sell it online instead, because even though it is old, it still has some {{BLANK}}, and a small company might want to buy it.",
    "cn": "A：你覺得我們還要留著儲藏室裡的舊印表機，還是星期五清潔人員來的時候把它丟掉？ B：我會改成在網路上賣掉，因為它雖然舊，但仍有一些【價值】，可能會有小公司想買。"
  },
  {
    "word": "valuable",
    "pos": "adj.",
    "cn_def": "寶貴的；有價值的",
    "en_def": "very useful or worth a lot of money",
    "sentence": "A: How was the training workshop you attended in Kaohsiung last weekend, and would you recommend it to the new sales staff? B: It was really {{BLANK}}, because the speaker shared practical tips about dealing with difficult customers, and I have already used two of them in my calls this week.",
    "cn": "A：你上週末在高雄參加的培訓工作坊怎麼樣？你會推薦給新的業務人員嗎？ B：真的很【寶貴】，因為講者分享了應對難纏顧客的實用技巧，我這週打電話時已經用了其中兩個。"
  },
  {
    "word": "priority",
    "pos": "n.",
    "cn_def": "優先事項",
    "en_def": "something that is more important than other things and must be done first",
    "sentence": "A: There are so many tasks on my list today that I don't know where to start, so what should I finish before the director arrives this afternoon? B: Make the sales report your top {{BLANK}}, because the director needs it for her meeting with the investors, and the other jobs can wait until tomorrow.",
    "cn": "A：我今天的待辦事項太多，不知道從哪裡開始，主任今天下午到之前我應該先完成什麼？ B：把銷售報告當作你的首要【優先事項】，因為主任和投資人開會時需要它，其他工作可以等到明天。"
  },
  {
    "word": "essential",
    "pos": "adj.",
    "cn_def": "必要的；不可或缺的",
    "en_def": "completely necessary",
    "sentence": "A: I am packing for the business trip to Singapore next week, but my suitcase is already full, so what should I definitely bring with me? B: Your passport and laptop are {{BLANK}}, but you can leave the extra shoes at home because the hotel is close to the office and you will mostly be indoors.",
    "cn": "A：我正在為下週去新加坡出差打包，但行李箱已經滿了，我一定要帶什麼？ B：護照和筆電是【必要的】，但多的鞋子可以留在家，因為飯店離辦公室很近，你大部分時間都會待在室內。"
  },
  {
    "word": "necessity",
    "pos": "n.",
    "cn_def": "必需品；必要",
    "en_def": "something that you need",
    "sentence": "A: Why did the company decide to give every salesperson a new smartphone this year when the old ones still seem to work fine? B: Because these days a good phone is a {{BLANK}} for our sales team, since they need to check emails, send quotes, and join video calls while they are visiting customers.",
    "cn": "A：舊手機看起來還很好用，為什麼公司今年決定給每位業務員一支新智慧型手機？ B：因為現在好手機對我們業務團隊來說是【必需品】，他們拜訪客戶時需要查看電子郵件、寄報價單和參加視訊會議。"
  },
  {
    "word": "crucial",
    "pos": "adj.",
    "cn_def": "關鍵的；至關重要的",
    "en_def": "extremely important because other things depend on it",
    "sentence": "A: Should we postpone the product launch, since the designers still haven't finished testing the new battery that has been causing problems? B: Yes, I think the testing stage is {{BLANK}}, because if the battery fails after customers buy the product, we will lose their trust and our reputation will suffer.",
    "cn": "A：既然設計師還沒測試完一直出問題的新電池，我們應該延後產品發表嗎？ B：是的，我認為測試階段是【至關重要的】，因為如果顧客買了產品後電池故障，我們會失去他們的信任，商譽也會受損。"
  },
  {
    "word": "vital",
    "pos": "adj.",
    "cn_def": "極其重要的；不可或缺的",
    "en_def": "very important and necessary",
    "sentence": "A: Why does the factory manager check the safety equipment every single morning before the workers start operating the heavy machines? B: Because regular checks are {{BLANK}} for preventing accidents, and one broken helmet or loose cable could cause a serious injury that stops production for days.",
    "cn": "A：為什麼廠長每天早上在工人開始操作重型機械前都要檢查安全裝備？ B：因為定期檢查對預防意外【極其重要】，一頂破掉的安全帽或一條鬆脫的電線都可能造成嚴重受傷，讓生產停擺好幾天。"
  },
  {
    "word": "key",
    "pos": "adj.",
    "cn_def": "關鍵的；主要的",
    "en_def": "most important",
    "sentence": "A: What do you think made the new coffee shop near our office so popular with the people who work in this area? B: I believe friendly service was the {{BLANK}} factor, because the staff remember everyone's names and favorite drinks, which makes busy office workers feel welcome every morning.",
    "cn": "A：你覺得是什麼讓我們辦公室附近的新咖啡店這麼受這一帶上班族歡迎？ B：我相信親切的服務是【關鍵】因素，因為店員記得每個人的名字和愛喝的飲料，讓忙碌的上班族每天早上都覺得受到歡迎。"
  },
  {
    "word": "central",
    "pos": "adj.",
    "cn_def": "核心的；主要的",
    "en_def": "most important or main",
    "sentence": "A: Why did the marketing team spend so much time talking about customer reviews during yesterday's long planning meeting? B: Because good reviews are {{BLANK}} to our new advertising plan, and we want to show real comments from happy customers on our website and social media pages.",
    "cn": "A：為什麼行銷團隊在昨天冗長的企劃會議中花那麼多時間討論顧客評論？ B：因為好評是我們新廣告計畫的【核心】，我們想在網站和社群媒體頁面上展示滿意顧客的真實留言。"
  },
  {
    "word": "primary",
    "pos": "adj.",
    "cn_def": "主要的；首要的",
    "en_def": "main; most important",
    "sentence": "A: Why are you moving to a new apartment so far from the city center when your current place is close to the office? B: My {{BLANK}} reason is the cost, since the rent downtown went up again this year, and I would rather spend a little more time on the train and save money.",
    "cn": "A：你現在住的地方離公司很近，為什麼要搬到離市中心那麼遠的新公寓？ B：我的【主要】原因是費用，因為市中心的房租今年又漲了，我寧願多花一點時間搭火車來省錢。"
  },
  {
    "word": "fundamental",
    "pos": "adj.",
    "cn_def": "基本的；根本的",
    "en_def": "basic and very important",
    "sentence": "A: Our new employees keep making mistakes with the accounting software, so should we hire an expert to train them again next month? B: I think the problem is more {{BLANK}}, because many of them don't understand basic bookkeeping, so we should teach them those simple ideas first before using the software.",
    "cn": "A：我們的新員工使用會計軟體一直出錯，我們下個月應該請專家再訓練他們一次嗎？ B：我認為問題更【根本】，因為他們很多人不懂基本的記帳，所以在使用軟體之前應該先教他們這些簡單的概念。"
  },
  {
    "word": "critical",
    "pos": "adj.",
    "cn_def": "關鍵的；危急的",
    "en_def": "extremely important; serious",
    "sentence": "A: Why is everyone in the IT department working late tonight when they usually leave the office right at six o'clock? B: The next few hours are {{BLANK}}, because they must repair the main server before the online store opens tomorrow morning, or the company will lose thousands of orders.",
    "cn": "A：資訊部門的人通常六點準時下班，為什麼今晚大家都在加班？ B：接下來幾個小時很【關鍵】，因為他們必須在明天早上網路商店開張前修好主伺服器，否則公司會損失好幾千筆訂單。"
  },
  {
    "word": "major",
    "pos": "adj.",
    "cn_def": "主要的；重大的",
    "en_def": "very large or important",
    "sentence": "A: Why has the road in front of our office been closed for almost two weeks, making all of us arrive late every morning? B: The city is doing {{BLANK}} repairs to the water pipes under the street, so they had to dig a huge hole, and the work probably won't finish until next month.",
    "cn": "A：為什麼我們辦公室前面的路封了快兩個星期，害我們每天早上都遲到？ B：市政府正在對街道下方的水管進行【重大】維修，所以必須挖一個大洞，工程可能要到下個月才會完成。"
  },
  {
    "word": "minor",
    "pos": "adj.",
    "cn_def": "次要的；輕微的",
    "en_def": "small and not very important",
    "sentence": "A: Did the delivery truck that hit the parking gate this morning cause a lot of damage to the building or hurt anyone? B: No, it was only a {{BLANK}} accident, so the driver just scratched the paint on the gate, and nobody was hurt, but security still wrote a short report about it.",
    "cn": "A：今天早上撞到停車場閘門的送貨卡車有對大樓造成很多損壞或傷到人嗎？ B：沒有，那只是一起【輕微的】事故，司機只刮傷了閘門的油漆，沒有人受傷，但保全還是寫了一份簡短的報告。"
  },
  {
    "word": "weighty",
    "pos": "adj.",
    "cn_def": "重大的；嚴肅的",
    "en_def": "serious and important",
    "sentence": "A: Why did the board members look so tired when they finally came out of the conference room late last night? B: They had to discuss some {{BLANK}} issues, such as closing two factories and cutting jobs, so the meeting lasted almost six hours and nobody had time for dinner.",
    "cn": "A：為什麼董事會成員昨晚很晚終於走出會議室時看起來那麼疲倦？ B：他們必須討論一些【重大的】議題，例如關閉兩間工廠和裁員，所以會議開了將近六小時，沒有人有時間吃晚餐。"
  },
  {
    "word": "prominent",
    "pos": "adj.",
    "cn_def": "顯眼的；著名的",
    "en_def": "important and well known; easy to see",
    "sentence": "A: Where should we put the poster for the summer sale so that every customer who walks into the store will notice it? B: Let's hang it in a {{BLANK}} position near the entrance, right above the shopping baskets, because almost everyone looks there when they first come inside.",
    "cn": "A：我們應該把夏季特賣的海報放在哪裡，才能讓每位走進店裡的顧客都注意到？ B：我們把它掛在入口附近【顯眼的】位置，就在購物籃正上方，因為幾乎每個人一進來都會看那裡。"
  },
  {
    "word": "notable",
    "pos": "adj.",
    "cn_def": "值得注意的；顯著的",
    "en_def": "important or interesting enough to get attention",
    "sentence": "A: Was there anything special about the trade fair in Taipei last week, or was it the same as the one we visited last year? B: The most {{BLANK}} change was the large area for electric cars, which attracted huge crowds, and many visitors stayed there for hours asking the companies questions.",
    "cn": "A：上週台北的商展有什麼特別的嗎？還是跟我們去年參觀的一樣？ B：最【值得注意的】改變是電動車的大型展區，吸引了大批人潮，很多參觀者在那裡待了好幾個小時向廠商發問。"
  },
  {
    "word": "meaningful",
    "pos": "adj.",
    "cn_def": "有意義的",
    "en_def": "serious, useful or important",
    "sentence": "A: Why do you volunteer at the community center every Saturday morning after working such long hours at the bank all week? B: Teaching children to read feels more {{BLANK}} to me than anything I do at work, and seeing them improve each week gives me energy for the busy days ahead.",
    "cn": "A：你整個星期在銀行工作那麼長的時間，為什麼每週六早上還去社區中心當志工？ B：教孩子閱讀對我來說比工作上做的任何事都更【有意義】，看到他們每週進步讓我有精力面對接下來忙碌的日子。"
  },
  {
    "word": "consequence",
    "pos": "n.",
    "cn_def": "後果；結果",
    "en_def": "a result of an action, often a bad one",
    "sentence": "A: What happened after the supplier sent the wrong parts to our factory twice in the same month? B: As a {{BLANK}}, our production line stopped for three days, so the manager decided to find a more reliable supplier and signed a new contract with a company in Taichung.",
    "cn": "A：供應商在同一個月內兩次送錯零件到我們工廠之後發生了什麼事？ B：【結果】我們的生產線停了三天，所以經理決定找更可靠的供應商，並和台中的一家公司簽了新合約。"
  },
  {
    "word": "influential",
    "pos": "adj.",
    "cn_def": "有影響力的",
    "en_def": "having a lot of power to change what people think or do",
    "sentence": "A: Why is our company paying so much money to invite that business writer to speak at our annual conference next spring? B: She is very {{BLANK}} in the retail industry, and when she recommends a new idea in her popular blog, thousands of shop owners usually try it within a few weeks.",
    "cn": "A：為什麼我們公司要花那麼多錢邀請那位商業作家明年春天在年會上演講？ B：她在零售業非常【有影響力】，當她在熱門部落格推薦一個新點子時，通常幾週內就有數千名店主會嘗試。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響；衝擊",
    "en_def": "a strong effect on something",
    "sentence": "A: Has the new rule about working from home on Fridays changed anything in the office since the company started it in March? B: Yes, it has had a positive {{BLANK}} on staff morale, because people feel less tired, and our managers say the team actually finishes more work during the week.",
    "cn": "A：公司從三月開始實施週五在家工作的新規定後，辦公室有什麼改變嗎？ B：有，它對員工士氣產生了正面的【影響】，因為大家覺得比較不累，主管們也說團隊一週內其實完成了更多工作。"
  },
  {
    "word": "impactful",
    "pos": "adj.",
    "cn_def": "有影響力的；效果強大的",
    "en_def": "having a strong effect",
    "sentence": "A: Which part of the presentation did the clients like most when you met them at their headquarters yesterday afternoon? B: The short video was the most {{BLANK}} part, because it showed real customers using our product in their homes, and several clients said it made them want to sign the contract right away.",
    "cn": "A：你昨天下午在客戶總部和他們見面時，他們最喜歡簡報的哪個部分？ B：那段短片是最【有衝擊力的】部分，因為它呈現真實顧客在家中使用我們產品的樣子，好幾位客戶說看了就想馬上簽約。"
  },
  {
    "word": "relevance",
    "pos": "n.",
    "cn_def": "相關性",
    "en_def": "how closely something is connected to the subject",
    "sentence": "A: Why did you remove so many slides from my sales presentation before you sent it to the clients this morning? B: Some of them had little {{BLANK}} to the clients' needs, since they talked about our history instead of the products they want, so I kept only the most useful information.",
    "cn": "A：你今天早上把我的銷售簡報寄給客戶之前，為什麼刪掉那麼多張投影片？ B：有些投影片和客戶的需求沒什麼【相關性】，因為它們講的是我們公司的歷史而不是客戶想要的產品，所以我只保留最有用的資訊。"
  },
  {
    "word": "relevant",
    "pos": "adj.",
    "cn_def": "相關的",
    "en_def": "connected to what is being discussed",
    "sentence": "A: What documents should I bring to the job interview at the trading company on Thursday morning? B: Bring your resume and any {{BLANK}} certificates, such as your English test results and computer skills, because the manager will want to see proof of the skills listed in the job ad.",
    "cn": "A：星期四早上去貿易公司面試，我應該帶哪些文件？ B：帶你的履歷和任何【相關的】證書，例如英文檢定成績和電腦技能證明，因為經理會想看職缺廣告中所列技能的證明。"
  },
  {
    "word": "matter",
    "pos": "n.",
    "cn_def": "事情；問題",
    "en_def": "a subject or situation that you must deal with",
    "sentence": "A: The customer called again to complain that her refund still hasn't arrived after three weeks, so what should I tell her this time? B: Tell her we are treating it as a {{BLANK}} of urgency, and promise that the finance department will send the money and an email to confirm it before Friday.",
    "cn": "A：那位顧客又打電話來抱怨她的退款三週了還沒收到，這次我該怎麼跟她說？ B：告訴她我們把這當作緊急【事情】處理，並承諾財務部會在星期五前把錢匯出並寄電子郵件確認。"
  },
  {
    "word": "urgency",
    "pos": "n.",
    "cn_def": "緊急；急迫",
    "en_def": "the need to deal with something quickly",
    "sentence": "A: Why did the manager call an emergency meeting at seven o'clock this morning before most of us had even had breakfast? B: She wanted to explain the {{BLANK}} of the situation, because our biggest customer threatened to cancel their order unless we fix the shipping problem by the end of today.",
    "cn": "A：為什麼經理今天早上七點、我們大多數人連早餐都還沒吃就召開緊急會議？ B：她想說明情況的【急迫性】，因為我們最大的客戶威脅說，除非我們今天結束前解決出貨問題，否則就要取消訂單。"
  },
  {
    "word": "urgent",
    "pos": "adj.",
    "cn_def": "緊急的",
    "en_def": "needing attention immediately",
    "sentence": "A: Can I talk to you about the holiday schedule now, or are you too busy with the report for the accounting department? B: Sorry, I have an {{BLANK}} call from a client in Tokyo in five minutes, so could we discuss the schedule after lunch when I am less busy?",
    "cn": "A：我現在可以跟你談假期排班嗎？還是你忙著做會計部的報告？ B：抱歉，五分鐘後我有一通東京客戶打來的【緊急】電話，我們可以午餐後等我比較不忙時再討論排班嗎？"
  },
  {
    "word": "substantial",
    "pos": "adj.",
    "cn_def": "大量的；可觀的",
    "en_def": "large in amount or value",
    "sentence": "A: Was it worth moving our warehouse outside the city, even though some workers now have longer journeys every day? B: Yes, we have made {{BLANK}} savings on rent, and we used part of that money to give the workers a transport allowance, so most of them are happy with the change.",
    "cn": "A：把倉庫搬到市區外值得嗎？即使有些工人現在每天通勤時間變長了？ B：值得，我們在租金上省下【可觀的】費用，並用其中一部分錢發給工人交通津貼，所以他們大多數都對這個改變很滿意。"
  },
  {
    "word": "dominant",
    "pos": "adj.",
    "cn_def": "佔優勢的；主導的",
    "en_def": "more powerful or important than others",
    "sentence": "A: Why is it so hard for small companies to sell their smartphones in this country, even when their prices are lower? B: Two big brands hold a {{BLANK}} position in the market, so most stores only display their products, and customers rarely notice the cheaper phones from smaller companies.",
    "cn": "A：為什麼小公司即使價格比較低，在這個國家也很難賣出他們的智慧型手機？ B：兩個大品牌在市場上佔有【主導】地位，所以大部分店家只陳列他們的產品，顧客很少注意到小公司的便宜手機。"
  },
  {
    "word": "pivotal",
    "pos": "adj.",
    "cn_def": "關鍵的；樞紐的",
    "en_def": "extremely important, affecting how something develops",
    "sentence": "A: How did your team manage to win the contract with the hotel chain after losing to another company last year? B: Our new sales director played a {{BLANK}} role, because she personally met the hotel owners several times and showed them how our system could save them money.",
    "cn": "A：你們團隊去年輸給另一家公司後，今年是怎麼拿下連鎖飯店合約的？ B：我們的新業務總監扮演了【關鍵】角色，因為她親自和飯店老闆見了好幾次面，向他們說明我們的系統能如何幫他們省錢。"
  },
  {
    "word": "indispensable",
    "pos": "adj.",
    "cn_def": "不可或缺的",
    "en_def": "too important to be without",
    "sentence": "A: Why did the manager give Kevin such a big bonus this year when he only joined the company eighteen months ago? B: He has become {{BLANK}} to the team, since he is the only person who can fix our computer system quickly, and he also trains the new staff every month.",
    "cn": "A：Kevin 十八個月前才進公司，為什麼經理今年給他這麼大筆獎金？ B：他已經成為團隊【不可或缺的】一員，因為他是唯一能快速修好我們電腦系統的人，而且每個月還負責訓練新員工。"
  },
  {
    "word": "paramount",
    "pos": "adj.",
    "cn_def": "至高無上的；最重要的",
    "en_def": "more important than anything else",
    "sentence": "A: Why do the airline staff check every passenger's bags so carefully, even though it makes the lines at the airport much longer? B: Passenger safety is of {{BLANK}} importance to the airline, so they would rather make people wait a little than risk allowing something dangerous on the plane.",
    "cn": "A：為什麼航空公司人員要那麼仔細地檢查每位乘客的行李，即使這讓機場排隊的隊伍變得更長？ B：乘客安全對航空公司來說是【最為】重要的，所以他們寧願讓大家稍等，也不願冒險讓危險物品上飛機。"
  }
];

const MCQS = [
  {
    "q": "Many visitors do not understand the historical _____ of the old train station. The museum guide explains why it was so important to the city.",
    "options": [
      "significance",
      "urgency",
      "consequence",
      "priority"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new advertising campaign led to a statistically _____ rise in online orders. The marketing team presented the results at Monday's meeting.",
    "options": [
      "indispensable",
      "urgent",
      "significant",
      "relevant"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Customers say the hotel's breakfast buffet offers excellent _____ for money. Many guests return every year because the prices are so reasonable.",
    "options": [
      "urgency",
      "value",
      "priority",
      "consequence"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The internship gave Maria _____ experience in dealing with international clients. She later used these skills to get a full-time job.",
    "options": [
      "dominant",
      "urgent",
      "minor",
      "valuable"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Customer safety is our top _____ at every branch. All staff must complete the fire safety training before the end of March.",
    "options": [
      "relevance",
      "urgency",
      "priority",
      "consequence"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The new training manual is _____ reading for all new staff members. It explains every step of the ordering process in simple language.",
    "options": [
      "essential",
      "minor",
      "dominant",
      "urgent"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Since the office moved to the suburbs, a car has become a _____ for most of our employees. The company now offers free parking.",
    "options": [
      "significance",
      "consequence",
      "relevance",
      "necessity"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Good communication plays a _____ role in the success of any team project. Without it, even skilled workers often fail to meet deadlines.",
    "options": [
      "relevant",
      "crucial",
      "urgent",
      "minor"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Nurses at the company clinic check each worker's _____ signs during the annual health exam. The results are kept private.",
    "options": [
      "vital",
      "urgent",
      "dominant",
      "minor"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Managers review the _____ performance indicators every quarter. These numbers show whether each department is meeting its goals.",
    "options": [
      "influential",
      "urgent",
      "weighty",
      "key"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The company's _____ source of income is online advertising. It makes up about eighty percent of total revenue every year.",
    "options": [
      "urgent",
      "prominent",
      "primary",
      "minor"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Equal pay is a _____ right that every worker deserves. The company reviews salaries each year to make sure it is fair.",
    "options": [
      "prominent",
      "fundamental",
      "urgent",
      "minor"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "After the accident, the driver was taken to the hospital in _____ condition. Doctors say he will need several weeks to recover.",
    "options": [
      "relevant",
      "valuable",
      "significant",
      "critical"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The hotel accepts all _____ credit cards as well as mobile payments. Guests can also pay in cash at the front desk.",
    "options": [
      "pivotal",
      "major",
      "urgent",
      "meaningful"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The delivery van suffered only _____ damage in the accident. The mechanic repaired it in one afternoon.",
    "options": [
      "minor",
      "substantial",
      "paramount",
      "critical"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Our logo was placed in a _____ position at the front of the trade show booth. Visitors could easily see it from the entrance.",
    "options": [
      "relevant",
      "urgent",
      "prominent",
      "fundamental"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The manager had a _____ conversation with each team member about their career goals. Many employees said they felt truly listened to.",
    "options": [
      "prominent",
      "meaningful",
      "paramount",
      "dominant"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Heavy rain fell all night. As a _____, several roads near the factory were closed this morning.",
    "options": [
      "value",
      "relevance",
      "priority",
      "consequence"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Professor Lin is one of the most _____ economists in Asia. Government leaders often ask for her advice on trade policy.",
    "options": [
      "urgent",
      "substantial",
      "influential",
      "fundamental"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The rising price of fuel has had a huge _____ on our shipping costs. We may need to raise prices next quarter.",
    "options": [
      "impact",
      "necessity",
      "relevance",
      "urgency"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Please remove any slides that have no _____ to the main topic. The presentation must not run longer than twenty minutes.",
    "options": [
      "priority",
      "urgency",
      "relevance",
      "necessity"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Applicants must have at least three years of _____ experience in sales. Please send your resume to the human resources office.",
    "options": [
      "dominant",
      "relevant",
      "paramount",
      "urgent"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The customer's complaint will be treated as a _____ of urgency. A manager will call her back within the hour.",
    "options": [
      "value",
      "necessity",
      "relevance",
      "matter"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The manager's email gave the team a sense of _____ about the upcoming deadline. Everyone stayed late to finish the report on time.",
    "options": [
      "urgency",
      "relevance",
      "value",
      "consequence"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Please mark the email as _____ so that the manager reads it first. She checks those messages before any others every morning.",
    "options": [
      "fundamental",
      "urgent",
      "substantial",
      "dominant"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The company invested a _____ amount of money in new equipment last year. As a result, production has doubled.",
    "options": [
      "substantial",
      "urgent",
      "primary",
      "relevant"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "The firm holds a _____ position in the local market with over sixty percent of sales. Smaller competitors find it hard to grow.",
    "options": [
      "meaningful",
      "urgent",
      "dominant",
      "minor"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The new manager played a _____ role in turning the failing store into a profitable business. She was promoted to regional director last month.",
    "options": [
      "minor",
      "relevant",
      "urgent",
      "pivotal"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Linda's experience with overseas suppliers makes her _____ to the purchasing team. No one else knows the contracts as well as she does.",
    "options": [
      "urgent",
      "indispensable",
      "minor",
      "prominent"
    ],
    "answer": 1,
    "vocabIndex": 32
  },
  {
    "q": "Patient privacy is of _____ importance at our clinic. Staff must never discuss patient information outside the office.",
    "options": [
      "relevant",
      "urgent",
      "prominent",
      "paramount"
    ],
    "answer": 3,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "significance": {
    "pos": "n.",
    "en_def": "the importance or meaning of something",
    "cn_def": "重要性；意義"
  },
  "significant": {
    "pos": "adj.",
    "en_def": "large or important enough to be noticed",
    "cn_def": "重大的；顯著的"
  },
  "value": {
    "pos": "n.",
    "en_def": "how much something is worth or how useful it is",
    "cn_def": "價值"
  },
  "valuable": {
    "pos": "adj.",
    "en_def": "very useful or worth a lot of money",
    "cn_def": "寶貴的；有價值的"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something that is more important than other things and must be done first",
    "cn_def": "優先事項"
  },
  "essential": {
    "pos": "adj.",
    "en_def": "completely necessary",
    "cn_def": "必要的；不可或缺的"
  },
  "necessity": {
    "pos": "n.",
    "en_def": "something that you need",
    "cn_def": "必需品；必要"
  },
  "crucial": {
    "pos": "adj.",
    "en_def": "extremely important because other things depend on it",
    "cn_def": "關鍵的；至關重要的"
  },
  "vital": {
    "pos": "adj.",
    "en_def": "very important and necessary",
    "cn_def": "極其重要的；不可或缺的"
  },
  "key": {
    "pos": "adj.",
    "en_def": "most important",
    "cn_def": "關鍵的；主要的"
  },
  "central": {
    "pos": "adj.",
    "en_def": "most important or main",
    "cn_def": "核心的；主要的"
  },
  "primary": {
    "pos": "adj.",
    "en_def": "main; most important",
    "cn_def": "主要的；首要的"
  },
  "fundamental": {
    "pos": "adj.",
    "en_def": "basic and very important",
    "cn_def": "基本的；根本的"
  },
  "critical": {
    "pos": "adj.",
    "en_def": "extremely important; serious",
    "cn_def": "關鍵的；危急的"
  },
  "major": {
    "pos": "adj.",
    "en_def": "very large or important",
    "cn_def": "主要的；重大的"
  },
  "minor": {
    "pos": "adj.",
    "en_def": "small and not very important",
    "cn_def": "次要的；輕微的"
  },
  "weighty": {
    "pos": "adj.",
    "en_def": "serious and important",
    "cn_def": "重大的；嚴肅的"
  },
  "prominent": {
    "pos": "adj.",
    "en_def": "important and well known; easy to see",
    "cn_def": "顯眼的；著名的"
  },
  "notable": {
    "pos": "adj.",
    "en_def": "important or interesting enough to get attention",
    "cn_def": "值得注意的；顯著的"
  },
  "meaningful": {
    "pos": "adj.",
    "en_def": "serious, useful or important",
    "cn_def": "有意義的"
  },
  "consequence": {
    "pos": "n.",
    "en_def": "a result of an action, often a bad one",
    "cn_def": "後果；結果"
  },
  "influential": {
    "pos": "adj.",
    "en_def": "having a lot of power to change what people think or do",
    "cn_def": "有影響力的"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on something",
    "cn_def": "影響；衝擊"
  },
  "impactful": {
    "pos": "adj.",
    "en_def": "having a strong effect",
    "cn_def": "有影響力的；效果強大的"
  },
  "relevance": {
    "pos": "n.",
    "en_def": "how closely something is connected to the subject",
    "cn_def": "相關性"
  },
  "relevant": {
    "pos": "adj.",
    "en_def": "connected to what is being discussed",
    "cn_def": "相關的"
  },
  "matter": {
    "pos": "n.",
    "en_def": "a subject or situation that you must deal with",
    "cn_def": "事情；問題"
  },
  "urgency": {
    "pos": "n.",
    "en_def": "the need to deal with something quickly",
    "cn_def": "緊急；急迫"
  },
  "urgent": {
    "pos": "adj.",
    "en_def": "needing attention immediately",
    "cn_def": "緊急的"
  },
  "substantial": {
    "pos": "adj.",
    "en_def": "large in amount or value",
    "cn_def": "大量的；可觀的"
  },
  "dominant": {
    "pos": "adj.",
    "en_def": "more powerful or important than others",
    "cn_def": "佔優勢的；主導的"
  },
  "pivotal": {
    "pos": "adj.",
    "en_def": "extremely important, affecting how something develops",
    "cn_def": "關鍵的；樞紐的"
  },
  "indispensable": {
    "pos": "adj.",
    "en_def": "too important to be without",
    "cn_def": "不可或缺的"
  },
  "paramount": {
    "pos": "adj.",
    "en_def": "more important than anything else",
    "cn_def": "至高無上的；最重要的"
  }
};

const EXTRA_GLOSSES = {};
