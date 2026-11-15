// Topic 83 Quiz Data: Cooperation 合作
// Source word list: https://www.examword.com/group-topic/cooperation — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T83 - Cooperation 合作",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作；配合",
    "en_def": "to work together with others to reach the same goal",
    "sentence": "A: How did the two delivery companies manage to finish moving all the hospital equipment before the new building opened on Monday? B: Their managers agreed to {{BLANK}} closely for the whole weekend, so one company packed the machines while the other drove the trucks and set everything up in the new rooms.",
    "cn": "A：這兩家貨運公司是怎麼在新大樓週一啟用前把所有醫院設備搬完的？ B：他們的經理同意整個週末密切【合作】，所以一家公司負責打包機器，另一家負責開卡車並在新房間裡把所有東西裝設好。"
  },
  {
    "word": "collaboration",
    "pos": "n.",
    "cn_def": "合作；協作",
    "en_def": "the act of working together to make or create something",
    "sentence": "A: Who designed the new reusable coffee cups that the café near our office started selling last month? B: They were made in {{BLANK}} with a local art school, and the students created the colorful patterns while the café paid for the materials and gave part of the profits to the school.",
    "cn": "A：我們辦公室附近那家咖啡廳上個月開始販售的新環保咖啡杯是誰設計的？ B：那是與當地一所藝術學校【合作】製作的，學生們設計了繽紛的圖案，咖啡廳則支付材料費並把部分利潤捐給學校。"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "cn_def": "合作；協作",
    "en_def": "to work with another person or group on a project",
    "sentence": "A: Why are the engineers from our Taipei office flying to Munich next week instead of holding another video call? B: They need to {{BLANK}} with the German design team on the new electric bike, and it is much easier to test the parts together in the same workshop.",
    "cn": "A：為什麼我們台北辦公室的工程師下週要飛去慕尼黑，而不是再開一次視訊會議？ B：他們需要和德國設計團隊【合作】開發新的電動自行車，而在同一個工作室裡一起測試零件容易多了。"
  },
  {
    "word": "teamwork",
    "pos": "n.",
    "cn_def": "團隊合作",
    "en_def": "the way people work well together as a group",
    "sentence": "A: How did the restaurant staff serve three hundred guests at the wedding party without any serious problems last Saturday? B: It was excellent {{BLANK}}, because the chefs, waiters and dishwashers all knew their jobs, helped each other when it got busy, and kept talking to each other all night.",
    "cn": "A：上週六餐廳員工是怎麼在婚宴上服務三百位賓客卻沒出任何大問題的？ B：那是絕佳的【團隊合作】，因為廚師、服務生和洗碗工都清楚自己的工作，忙的時候互相幫忙，而且整晚都持續互相溝通。"
  },
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "合夥人；合作夥伴",
    "en_def": "a person or company that works or runs a business with another",
    "sentence": "A: Who is going to run the bakery while you are away visiting your family in Canada for three weeks this summer? B: My business {{BLANK}}, Lisa, will manage the shop, order the flour and pay the staff, because we started the bakery together five years ago and she knows everything about it.",
    "cn": "A：今年夏天你回加拿大探親三週期間，誰來經營麵包店？ B：我的事業【合夥人】麗莎會管理店面、訂購麵粉並支付員工薪水，因為我們五年前一起創立這家麵包店，她對店裡的一切都很清楚。"
  },
  {
    "word": "partnership",
    "pos": "n.",
    "cn_def": "合作關係；合夥",
    "en_def": "a relationship in which people or companies work together",
    "sentence": "A: Why does our hotel now offer free tickets to the science museum for every guest who stays more than two nights? B: We formed a {{BLANK}} with the museum last spring, so they send visitors to us for rooms, and we send our guests to them for tours and special exhibitions.",
    "cn": "A：為什麼我們飯店現在提供科學博物館免費門票給每位住宿超過兩晚的客人？ B：我們去年春天和博物館建立了【合作關係】，所以他們把需要住宿的遊客介紹給我們，我們則把客人介紹給他們參加導覽和特展。"
  },
  {
    "word": "ally",
    "pos": "n.",
    "cn_def": "盟友；支持者",
    "en_def": "a person, group or country that helps and supports another",
    "sentence": "A: How did you get the board to approve your plan for a new staff gym when most directors thought it cost too much? B: The finance director became my strongest {{BLANK}}, because she showed everyone that healthier workers take fewer sick days, and that changed their minds.",
    "cn": "A：大多數董事都認為新員工健身房太花錢，你是怎麼讓董事會通過這個計畫的？ B：財務長成了我最有力的【盟友】，因為她向大家證明，比較健康的員工請病假的天數較少，這改變了他們的想法。"
  },
  {
    "word": "alliance",
    "pos": "n.",
    "cn_def": "聯盟；結盟",
    "en_def": "an agreement between groups or companies to work together",
    "sentence": "A: Why are three small airlines in Asia suddenly selling tickets for each other's flights on their websites? B: They joined an {{BLANK}} earlier this year, so passengers can book one trip across several countries, collect points with any member, and change planes more easily at busy airports.",
    "cn": "A：為什麼亞洲三家小型航空公司突然在各自網站上互售對方航班的機票？ B：他們今年稍早加入了一個【聯盟】，所以乘客可以預訂橫跨數國的單一行程、在任何成員公司累積點數，並在繁忙的機場更方便地轉機。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；資助",
    "en_def": "to help someone by giving encouragement, money or practical help",
    "sentence": "A: Are you sure the manager will agree to let you study part-time for a master's degree while you keep working here? B: Yes, she promised to {{BLANK}} my plan, and the company will even pay half of the fees if I stay with the firm for two more years after I graduate.",
    "cn": "A：你確定經理會同意你一邊在這裡工作一邊兼讀碩士學位嗎？ B：確定，她承諾會【支持】我的計畫，而且如果我畢業後再留在公司兩年，公司甚至會負擔一半的學費。"
  },
  {
    "word": "assist",
    "pos": "v.",
    "cn_def": "協助；幫助",
    "en_def": "to help someone do a job or task",
    "sentence": "A: Who will show the new interns how to use the cash register and the stock system during their first week at the store? B: Our most experienced cashier will {{BLANK}} them at the counter every morning, and in the afternoons they will learn how to check the shelves with the floor manager.",
    "cn": "A：新實習生在店裡的第一週，誰要教他們使用收銀機和庫存系統？ B：我們最資深的收銀員每天早上會在櫃台【協助】他們，下午他們則會跟著樓面經理學習如何檢查貨架。"
  },
  {
    "word": "help",
    "pos": "v.",
    "cn_def": "幫助；幫忙",
    "en_def": "to make it easier for someone to do something",
    "sentence": "A: The printer on the third floor is broken again, and I have to print forty copies of the sales report before the meeting at ten. B: Don't worry, I can {{BLANK}} you carry your files down to the second floor, where the large color printer is working fine this morning.",
    "cn": "A：三樓的印表機又壞了，而我必須在十點開會前印出四十份銷售報告。 B：別擔心，我可以【幫】你把文件搬到二樓，那裡的大型彩色印表機今天早上運作得很正常。"
  },
  {
    "word": "coordinate",
    "pos": "v.",
    "cn_def": "協調；統籌",
    "en_def": "to organize different people or activities so they work well together",
    "sentence": "A: With so many speakers, hotels and buses involved, who is in charge of the international sales conference in Bangkok next month? B: Mr. Chen will {{BLANK}} all the travel plans, so he will book the rooms, arrange the airport buses and make sure every speaker knows the schedule.",
    "cn": "A：下個月在曼谷的國際業務會議牽涉這麼多講者、飯店和巴士，誰負責呢？ B：陳先生會【統籌】所有的行程安排，他會預訂房間、安排機場接駁巴士，並確保每位講者都知道時間表。"
  },
  {
    "word": "coordination",
    "pos": "n.",
    "cn_def": "協調；配合",
    "en_def": "the act of making people or groups work well together",
    "sentence": "A: Why did the shopping mall's fire drill take almost an hour when it was supposed to last only twenty minutes? B: There was poor {{BLANK}} between the security guards and the shop managers, so some stores closed their doors too late and several groups used the wrong exits.",
    "cn": "A：購物中心的消防演習原本預計只要二十分鐘，為什麼花了將近一小時？ B：保全人員和店長之間的【協調】很差，所以有些店太晚關門，好幾組人也走錯了出口。"
  },
  {
    "word": "contribute",
    "pos": "v.",
    "cn_def": "貢獻；捐助；出一份力",
    "en_def": "to give money, time or ideas to help something succeed",
    "sentence": "A: Is everyone in the department giving money for Mr. Lin's retirement gift, or only the people who worked with him for many years? B: Everyone is welcome to {{BLANK}}, even the new staff, and we plan to buy him a good camera because he wants to travel around Japan next year.",
    "cn": "A：部門裡每個人都要出錢買林先生的退休禮物嗎？還是只有跟他共事多年的人？ B：歡迎每個人【出一份力】，連新員工也可以，我們打算買一台好相機給他，因為他明年想去日本各地旅行。"
  },
  {
    "word": "contribution",
    "pos": "n.",
    "cn_def": "貢獻；捐款",
    "en_def": "something you give or do to help make something successful",
    "sentence": "A: Why did the CEO mention the night-shift workers by name during the year-end party last Friday evening? B: She wanted to thank them for their huge {{BLANK}} to the company, because they worked extra hours for three months to finish the big order from our Canadian customer on time.",
    "cn": "A：上週五晚上的尾牙，執行長為什麼點名提到大夜班的員工？ B：她想感謝他們對公司的巨大【貢獻】，因為他們連續三個月加班，準時完成了加拿大客戶的大訂單。"
  },
  {
    "word": "participate",
    "pos": "v.",
    "cn_def": "參加；參與",
    "en_def": "to take part in an activity or event",
    "sentence": "A: Do all the sales staff have to join the two-day training course on customer service at the hotel next weekend? B: Only the new staff must {{BLANK}}, but experienced workers can also sign up if they want to learn the latest ways to handle difficult customers on the phone.",
    "cn": "A：所有業務人員都必須參加下週末在飯店舉辦、為期兩天的客服訓練課程嗎？ B：只有新進人員必須【參加】，不過資深員工如果想學習在電話中應對難纏顧客的最新方法，也可以報名。"
  },
  {
    "word": "participation",
    "pos": "n.",
    "cn_def": "參與；參加",
    "en_def": "the act of taking part in something",
    "sentence": "A: Why did the human resources team decide to give free movie tickets to everyone who filled out the staff survey this year? B: Last year {{BLANK}} was very low, with only a quarter of the workers answering, so the team hoped a small gift would encourage more people to share their opinions.",
    "cn": "A：為什麼人資團隊今年決定送電影票給每位填寫員工問卷的人？ B：去年的【參與】率很低，只有四分之一的員工作答，所以團隊希望一份小禮物能鼓勵更多人分享意見。"
  },
  {
    "word": "engage",
    "pos": "v.",
    "cn_def": "吸引（參與）；使投入",
    "en_def": "to attract someone's interest and get them involved",
    "sentence": "A: What can we do to make the online training videos more interesting for the factory workers, who often stop watching after five minutes? B: We could add short quizzes and real stories from the factory floor to {{BLANK}} the viewers, so they stay interested and remember the safety rules much better.",
    "cn": "A：工廠員工常常看五分鐘就不看了，我們可以怎麼讓線上訓練影片更有趣？ B：我們可以加入簡短測驗和來自工廠現場的真實故事來【吸引】觀眾，讓他們保持興趣，也能把安全規定記得更牢。"
  },
  {
    "word": "involvement",
    "pos": "n.",
    "cn_def": "參與；涉入",
    "en_def": "the act of taking part in something or being connected with it",
    "sentence": "A: Why does the company give an extra day off to employees who join the beach clean-up every spring? B: The managers believe that staff {{BLANK}} in local community projects builds team spirit and improves our image, so they want to reward people who give up their weekend to help.",
    "cn": "A：為什麼公司會多給參加每年春季淨灘活動的員工一天假？ B：主管們相信員工【參與】在地社區活動能凝聚團隊精神並提升公司形象，所以想獎勵那些犧牲週末去幫忙的人。"
  },
  {
    "word": "unite",
    "pos": "v.",
    "cn_def": "團結；聯合",
    "en_def": "to join together as a group for a shared purpose",
    "sentence": "A: The two offices have argued about the budget for months, so how can we make them work together on the new product launch? B: We should give them one clear goal, such as beating our biggest rival in sales, because a common target can {{BLANK}} people who usually disagree.",
    "cn": "A：兩個辦公室為了預算爭吵了好幾個月，我們要怎麼讓他們一起合作推出新產品？ B：我們應該給他們一個明確的目標，例如在銷售上打敗最大的對手，因為共同的目標能讓平常意見不合的人【團結】起來。"
  },
  {
    "word": "unity",
    "pos": "n.",
    "cn_def": "團結；統一",
    "en_def": "the state of being joined together and agreeing",
    "sentence": "A: Why did the sports company ask all its staff to wear the same blue shirts at the trade fair in Singapore? B: The marketing director wanted to show {{BLANK}} and team spirit, so visitors would see that everyone at the booth belonged to one strong company with the same goals.",
    "cn": "A：為什麼那家運動用品公司要全體員工在新加坡商展上穿同樣的藍色襯衫？ B：行銷總監想展現【團結】和團隊精神，讓參觀者看到攤位上的每個人都屬於同一家有共同目標的強大公司。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享；共用",
    "en_def": "to let others use or have part of something",
    "sentence": "A: There aren't enough desks for all the new designers who start on Monday, so what should we do until the extra furniture arrives? B: Two people can {{BLANK}} each large desk by the window for a week, and the others can work in the meeting room, which is free most afternoons.",
    "cn": "A：週一報到的新設計師沒有足夠的辦公桌，在額外家具送來前我們該怎麼辦？ B：靠窗的每張大桌子可以讓兩個人【共用】一週，其他人可以在會議室工作，那裡大部分下午都沒人用。"
  },
  {
    "word": "joint",
    "pos": "adj.",
    "cn_def": "共同的；聯合的",
    "en_def": "done or owned by two or more people together",
    "sentence": "A: Are the two banks planning to merge, or are they just working together on that new mobile payment app? B: They are not merging, but they started a {{BLANK}} project last year, so both banks paid for the app and will split the profits from the service equally.",
    "cn": "A：那兩家銀行打算合併，還是只是一起開發那個新的行動支付應用程式？ B：他們沒有要合併，不過去年啟動了一個【聯合】專案，所以兩家銀行都出資開發這個應用程式，並會平分這項服務的利潤。"
  },
  {
    "word": "collective",
    "pos": "adj.",
    "cn_def": "集體的；共同的",
    "en_def": "shared or done by all members of a group",
    "sentence": "A: Who should get the credit for winning the biggest contract in the company's history after so many months of hard work? B: It was a {{BLANK}} effort, because the sales team found the client, the engineers built the sample and the lawyers checked every line of the long contract.",
    "cn": "A：經過這麼多個月的努力，贏得公司史上最大合約的功勞應該歸誰？ B：這是【集體的】努力，因為業務團隊找到客戶、工程師做出樣品，律師則檢查了冗長合約中的每一行。"
  },
  {
    "word": "mutual",
    "pos": "adj.",
    "cn_def": "相互的；共同的",
    "en_def": "felt or done by two or more people toward each other",
    "sentence": "A: Why did the factory and the trucking company agree to sign a five-year contract instead of a shorter one this time? B: The deal brings {{BLANK}} benefits, because the factory gets lower delivery prices, and the trucking company knows it will have steady work for many years.",
    "cn": "A：為什麼這次工廠和貨運公司同意簽五年合約，而不是較短的合約？ B：這筆交易帶來【互惠的】好處，因為工廠能取得較低的運費，而貨運公司也知道未來多年都會有穩定的工作。"
  },
  {
    "word": "consensus",
    "pos": "n.",
    "cn_def": "共識",
    "en_def": "an agreement that most or all people in a group accept",
    "sentence": "A: Did the managers finally decide where to hold the company trip this year, or are they still arguing about it? B: After a long meeting, they reached a {{BLANK}} to go to Hualien, because most people wanted beaches and mountains, and the hotel there offered a good group price.",
    "cn": "A：經理們終於決定今年員工旅遊的地點了嗎？還是仍在爭論？ B：經過一場冗長的會議，他們達成去花蓮的【共識】，因為大多數人想要海灘和山景，而且那裡的飯店提供了不錯的團體價格。"
  },
  {
    "word": "compromise",
    "pos": "n.",
    "cn_def": "妥協；折衷",
    "en_def": "an agreement in which each side gives up part of what it wants",
    "sentence": "A: The designers wanted a bright red logo, and the sales team wanted a dark blue one, so what did they finally choose? B: They agreed on a {{BLANK}}, using dark blue letters with a small red circle, so both teams got part of what they wanted for the new brand.",
    "cn": "A：設計師想要亮紅色的標誌，業務團隊想要深藍色的，他們最後選了什麼？ B：他們達成了【折衷方案】，採用深藍色字母搭配一個紅色小圓圈，所以兩個團隊都在新品牌上得到了部分想要的東西。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "談判；協商",
    "en_def": "to discuss something in order to reach an agreement",
    "sentence": "A: The supplier wants to raise the price of paper cups by fifteen percent next month, so should we just accept it? B: No, I will meet their sales manager on Thursday to {{BLANK}} a better deal, perhaps a smaller increase if we promise to order more cups every month.",
    "cn": "A：供應商下個月想把紙杯價格調漲百分之十五，我們就直接接受嗎？ B：不，我週四會和他們的業務經理見面，【談判】出更好的條件，如果我們承諾每個月訂購更多紙杯，也許漲幅可以小一點。"
  },
  {
    "word": "negotiation",
    "pos": "n.",
    "cn_def": "談判；協商",
    "en_def": "formal discussion between people trying to reach an agreement",
    "sentence": "A: Has the company signed the new rental agreement for the warehouse near the port yet? B: Not yet, because the {{BLANK}} with the landlord is still going on, and both sides are arguing about who should pay for repairing the old roof before we move in next month.",
    "cn": "A：公司已經簽下港口附近倉庫的新租約了嗎？ B：還沒，因為和房東的【談判】仍在進行中，雙方還在爭論下個月我們搬進去前該由誰支付修理舊屋頂的費用。"
  },
  {
    "word": "facilitate",
    "pos": "v.",
    "cn_def": "促進；使便利",
    "en_def": "to make an action or process easier",
    "sentence": "A: Why did the company buy that expensive new video system for every meeting room in all of its offices? B: The managers hope it will {{BLANK}} communication between our teams in Taipei, Tokyo and Seoul, so people can solve problems quickly without traveling so often.",
    "cn": "A：公司為什麼要幫所有辦公室的每間會議室都買那套昂貴的新視訊系統？ B：主管們希望它能【促進】我們台北、東京和首爾團隊之間的溝通，讓大家不必經常出差就能迅速解決問題。"
  },
  {
    "word": "synchronize",
    "pos": "v.",
    "cn_def": "同步；使一致",
    "en_def": "to make things happen at the same time or show the same information",
    "sentence": "A: Why did my phone show a different meeting time from the calendar on my office computer this morning? B: You probably forgot to {{BLANK}} the two devices after you changed the time yesterday, so open the app, press the update button, and both calendars should match again.",
    "cn": "A：為什麼今天早上我手機上顯示的會議時間和辦公室電腦行事曆上的不一樣？ B：你昨天改時間後可能忘了讓這兩台裝置【同步】，打開應用程式按下更新按鈕，兩個行事曆應該就會再次一致。"
  },
  {
    "word": "harmonious",
    "pos": "adj.",
    "cn_def": "和諧的；融洽的",
    "en_def": "friendly and peaceful, without arguments",
    "sentence": "A: Why do so few people leave the accounting department, even though the pay there is not higher than in other teams? B: The manager has created a very {{BLANK}} working environment, where people respect each other, solve problems calmly and often have lunch together on Fridays.",
    "cn": "A：會計部的薪水並沒有比其他團隊高，為什麼很少有人離職？ B：經理營造了一個非常【和諧的】工作環境，大家互相尊重、冷靜解決問題，而且週五常常一起吃午餐。"
  },
  {
    "word": "together",
    "pos": "adv.",
    "cn_def": "一起；共同",
    "en_def": "with each other; as a group",
    "sentence": "A: Should each department plan its own end-of-year party, or would one big event for the whole company be better this time? B: I think we should celebrate {{BLANK}} in one hall, because staff from different floors rarely meet, and a big party is a good chance to make new friends.",
    "cn": "A：今年每個部門應該各自籌辦年終派對，還是全公司辦一場大型活動比較好？ B：我認為我們應該在同一個大廳【一起】慶祝，因為不同樓層的員工很少見面，大型派對是結交新朋友的好機會。"
  }
];

const MCQS = [
  {
    "q": "The hotel asked all guests to _____ with the fire safety staff during the drill. Everyone left the building calmly within five minutes.",
    "options": [
      "synchronize",
      "negotiate",
      "cooperate",
      "facilitate"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "The new children's book was written in _____ with a famous illustrator. The two artists met every week for a year to plan it.",
    "options": [
      "collaboration",
      "consensus",
      "unity",
      "negotiation"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Our marketing team will _____ with a popular singer on the new advertisement. She will write a short song about our juice.",
    "options": [
      "synchronize",
      "collaborate",
      "unite",
      "assist"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The kitchen staff finished the huge order through great _____. Each cook prepared one dish while the others packed the boxes.",
    "options": [
      "negotiation",
      "alliance",
      "consensus",
      "teamwork"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many employees signed a letter to _____ the plan for a four-day work week. They believe it will reduce stress and improve results.",
    "options": [
      "participate",
      "synchronize",
      "support",
      "cooperate"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "After ten years as a lawyer, Mr. Wu became a _____ in the firm. He now owns part of the business and shares its profits.",
    "options": [
      "partner",
      "consensus",
      "unity",
      "involvement"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The airline hires extra staff in summer to _____ passengers with heavy bags. They also help elderly travelers find their gates.",
    "options": [
      "unite",
      "negotiate",
      "contribute",
      "assist"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The phone company announced a new _____ with a popular music service. Customers will get six months of free music with any new plan.",
    "options": [
      "compromise",
      "partnership",
      "unity",
      "involvement"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The two universities will open a _____ research center next year. Both schools will share the cost and the equipment.",
    "options": [
      "mutual",
      "harmonious",
      "joint",
      "collective"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Ms. Park will _____ the move to the new office next month. She will plan when each team packs and when the trucks arrive.",
    "options": [
      "participate",
      "share",
      "unite",
      "coordinate"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The head of sales has been a strong _____ of the environmental team. She always supports their ideas in management meetings.",
    "options": [
      "ally",
      "consensus",
      "negotiation",
      "coordination"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Each department was asked to _____ a few ideas for reducing paper waste. The best suggestions will be tested next quarter.",
    "options": [
      "synchronize",
      "contribute",
      "negotiate",
      "cooperate"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Five local bookstores formed a business _____ to compete with large online shops. They now share delivery trucks and run joint advertisements.",
    "options": [
      "teamwork",
      "consensus",
      "alliance",
      "involvement"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "More than two hundred runners will _____ in the charity race this Sunday. All the money will go to the children's hospital.",
    "options": [
      "facilitate",
      "participate",
      "negotiate",
      "synchronize"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The survey shows the _____ view of more than five hundred employees. Most of them want healthier food in the cafeteria.",
    "options": [
      "mutual",
      "harmonious",
      "joint",
      "collective"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The concert was a success thanks to careful _____ between the lighting crew and the musicians. Every light changed exactly with the music.",
    "options": [
      "coordination",
      "ally",
      "contribution",
      "consensus"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The terrible flood helped _____ the small town in a way nobody expected. Neighbors who never spoke before worked side by side for weeks.",
    "options": [
      "negotiate",
      "synchronize",
      "unite",
      "participate"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Ms. Lopez received an award for her _____ to the company's growth in Asia. She opened three new offices in just two years.",
    "options": [
      "contribution",
      "negotiation",
      "unity",
      "partnership"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Since parking spaces are limited, staff who live nearby are encouraged to _____ a car. Four people can easily fit in one vehicle.",
    "options": [
      "facilitate",
      "coordinate",
      "unite",
      "share"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "_____ in the weekly safety meeting is required for all factory workers. Anyone who misses it must attend a make-up session.",
    "options": [
      "consensus",
      "participation",
      "alliance",
      "compromise"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The two managers have great _____ respect for each other. They often disagree, but they always listen carefully before deciding.",
    "options": [
      "joint",
      "collective",
      "mutual",
      "harmonious"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Parents' _____ in school activities has increased since the new app was introduced. They can now sign up to volunteer online.",
    "options": [
      "alliance",
      "involvement",
      "compromise",
      "ally"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The union will _____ with management next week about a higher salary. Workers hope to get a five percent raise this year.",
    "options": [
      "synchronize",
      "assist",
      "contribute",
      "negotiate"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The president's speech called for _____ after the long and difficult merger. She asked both teams to work as one company.",
    "options": [
      "unity",
      "involvement",
      "partner",
      "contribution"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The new online booking system will _____ the process of reserving meeting rooms. Staff can now book a room in less than a minute.",
    "options": [
      "participate",
      "unite",
      "cooperate",
      "facilitate"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The committee could not reach a _____ on the new logo. Half of the members liked the green design, and half preferred the blue one.",
    "options": [
      "consensus",
      "partner",
      "teamwork",
      "involvement"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The hotel's new lobby has a calm and _____ design. The soft colors, plants and gentle music all match perfectly.",
    "options": [
      "joint",
      "harmonious",
      "mutual",
      "collective"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The buyer wanted a ten percent discount, but the seller offered only five. In the end, they agreed on a _____ of seven percent.",
    "options": [
      "unity",
      "ally",
      "compromise",
      "coordination"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Please _____ your watches before the product launch begins. Every part of the show must start at exactly the right moment.",
    "options": [
      "synchronize",
      "contribute",
      "negotiate",
      "support"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "After three weeks of _____, the two companies finally signed the contract. Both sides said they were happy with the final price.",
    "options": [
      "unity",
      "ally",
      "partner",
      "negotiation"
    ],
    "answer": 3,
    "vocabIndex": 28
  }
];

const LOOKUP = {
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others to reach the same goal",
    "cn_def": "合作；配合"
  },
  "collaboration": {
    "pos": "n.",
    "en_def": "the act of working together to make or create something",
    "cn_def": "合作；協作"
  },
  "collaborate": {
    "pos": "v.",
    "en_def": "to work with another person or group on a project",
    "cn_def": "合作；協作"
  },
  "teamwork": {
    "pos": "n.",
    "en_def": "the way people work well together as a group",
    "cn_def": "團隊合作"
  },
  "partner": {
    "pos": "n.",
    "en_def": "a person or company that works or runs a business with another",
    "cn_def": "合夥人；合作夥伴"
  },
  "partnership": {
    "pos": "n.",
    "en_def": "a relationship in which people or companies work together",
    "cn_def": "合作關係；合夥"
  },
  "ally": {
    "pos": "n.",
    "en_def": "a person, group or country that helps and supports another",
    "cn_def": "盟友；支持者"
  },
  "alliance": {
    "pos": "n.",
    "en_def": "an agreement between groups or companies to work together",
    "cn_def": "聯盟；結盟"
  },
  "support": {
    "pos": "v.",
    "en_def": "to help someone by giving encouragement, money or practical help",
    "cn_def": "支持；資助"
  },
  "assist": {
    "pos": "v.",
    "en_def": "to help someone do a job or task",
    "cn_def": "協助；幫助"
  },
  "help": {
    "pos": "v.",
    "en_def": "to make it easier for someone to do something",
    "cn_def": "幫助；幫忙"
  },
  "coordinate": {
    "pos": "v.",
    "en_def": "to organize different people or activities so they work well together",
    "cn_def": "協調；統籌"
  },
  "coordination": {
    "pos": "n.",
    "en_def": "the act of making people or groups work well together",
    "cn_def": "協調；配合"
  },
  "contribute": {
    "pos": "v.",
    "en_def": "to give money, time or ideas to help something succeed",
    "cn_def": "貢獻；捐助；出一份力"
  },
  "contribution": {
    "pos": "n.",
    "en_def": "something you give or do to help make something successful",
    "cn_def": "貢獻；捐款"
  },
  "participate": {
    "pos": "v.",
    "en_def": "to take part in an activity or event",
    "cn_def": "參加；參與"
  },
  "participation": {
    "pos": "n.",
    "en_def": "the act of taking part in something",
    "cn_def": "參與；參加"
  },
  "engage": {
    "pos": "v.",
    "en_def": "to attract someone's interest and get them involved",
    "cn_def": "吸引（參與）；使投入"
  },
  "involvement": {
    "pos": "n.",
    "en_def": "the act of taking part in something or being connected with it",
    "cn_def": "參與；涉入"
  },
  "unite": {
    "pos": "v.",
    "en_def": "to join together as a group for a shared purpose",
    "cn_def": "團結；聯合"
  },
  "unity": {
    "pos": "n.",
    "en_def": "the state of being joined together and agreeing",
    "cn_def": "團結；統一"
  },
  "share": {
    "pos": "v.",
    "en_def": "to let others use or have part of something",
    "cn_def": "分享；共用"
  },
  "joint": {
    "pos": "adj.",
    "en_def": "done or owned by two or more people together",
    "cn_def": "共同的；聯合的"
  },
  "collective": {
    "pos": "adj.",
    "en_def": "shared or done by all members of a group",
    "cn_def": "集體的；共同的"
  },
  "mutual": {
    "pos": "adj.",
    "en_def": "felt or done by two or more people toward each other",
    "cn_def": "相互的；共同的"
  },
  "consensus": {
    "pos": "n.",
    "en_def": "an agreement that most or all people in a group accept",
    "cn_def": "共識"
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement in which each side gives up part of what it wants",
    "cn_def": "妥協；折衷"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something in order to reach an agreement",
    "cn_def": "談判；協商"
  },
  "negotiation": {
    "pos": "n.",
    "en_def": "formal discussion between people trying to reach an agreement",
    "cn_def": "談判；協商"
  },
  "facilitate": {
    "pos": "v.",
    "en_def": "to make an action or process easier",
    "cn_def": "促進；使便利"
  },
  "synchronize": {
    "pos": "v.",
    "en_def": "to make things happen at the same time or show the same information",
    "cn_def": "同步；使一致"
  },
  "harmonious": {
    "pos": "adj.",
    "en_def": "friendly and peaceful, without arguments",
    "cn_def": "和諧的；融洽的"
  },
  "together": {
    "pos": "adv.",
    "en_def": "with each other; as a group",
    "cn_def": "一起；共同"
  }
};

const EXTRA_GLOSSES = {};
