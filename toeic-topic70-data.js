// Topic 70 Quiz Data: Competition 競爭；比賽
// Source word list: https://www.examword.com/group-topic/competition — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T70 - Competition 競爭；比賽",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "contest",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "a competition in which people try to win something",
    "sentence": "A: Why is everyone in the marketing department staying late and taking so many photos of the new products this week? B: The company is holding a photo {{BLANK}} for staff, and the person who takes the best picture for our next catalog will receive two free plane tickets to Tokyo.",
    "cn": "A：為什麼行銷部門的每個人這週都留到很晚，還拍了那麼多新產品的照片？ B：公司正在為員工舉辦攝影【比賽】，替我們下一期型錄拍出最佳照片的人將獲得兩張飛往東京的免費機票。"
  },
  {
    "word": "tournament",
    "pos": "n.",
    "cn_def": "錦標賽；聯賽",
    "en_def": "a series of games between many players or teams to find one winner",
    "sentence": "A: Why did the sales team leave the office so early on Friday afternoon, and who is answering their phones today? B: They are playing in the annual company golf {{BLANK}} at the country club, so the receptionist is taking messages until they come back on Monday morning.",
    "cn": "A：業務團隊為什麼星期五下午那麼早就離開辦公室？今天誰幫他們接電話？ B：他們去鄉村俱樂部參加公司年度高爾夫【錦標賽】了，所以在他們星期一早上回來之前，由櫃檯人員幫忙留言。"
  },
  {
    "word": "race",
    "pos": "n.",
    "cn_def": "賽跑；競速比賽",
    "en_def": "a competition to see who is the fastest",
    "sentence": "A: Why are the streets around the city hall closed this Sunday, and how will our delivery drivers reach the shops downtown? B: A charity {{BLANK}} is taking place there in the morning, with thousands of runners, so the drivers should use the highway and wait until the roads open again after noon.",
    "cn": "A：為什麼市政府附近的街道這個星期天要封閉？我們的送貨司機要怎麼到市中心的商店？ B：那天早上那裡有一場慈善【賽跑】，有數千名跑者參加，所以司機們應該走高速公路，等到中午過後道路重新開放再進去。"
  },
  {
    "word": "match",
    "pos": "n.",
    "cn_def": "比賽；競賽",
    "en_def": "a game in which two people or teams play against each other",
    "sentence": "A: Do you want to join us at the sports bar after work tonight, or do you have to finish the budget report first? B: I would love to come, because the national football {{BLANK}} starts at eight, but I need to send this report to my manager before I leave the office.",
    "cn": "A：今晚下班後你要和我們一起去運動酒吧嗎？還是你得先完成預算報告？ B：我很想去，因為國家隊的足球【比賽】八點開始，但我離開辦公室前必須先把這份報告寄給經理。"
  },
  {
    "word": "rivalry",
    "pos": "n.",
    "cn_def": "競爭；敵對",
    "en_def": "a situation in which two people or groups compete with each other for a long time",
    "sentence": "A: Why do the two coffee chains on Main Street keep lowering their prices and giving away free cakes every month? B: There has been a strong {{BLANK}} between them for years, and each company wants to attract more office workers in the area, so customers enjoy cheaper drinks.",
    "cn": "A：為什麼大街上的兩家連鎖咖啡店每個月都一直降價又送免費蛋糕？ B：它們之間多年來一直存在激烈的【競爭】，兩家公司都想吸引這一帶更多上班族，所以顧客就享受到比較便宜的飲料。"
  },
  {
    "word": "opponent",
    "pos": "n.",
    "cn_def": "對手；敵手",
    "en_def": "a person or team you play or compete against",
    "sentence": "A: How did your presentation go at the debate competition for young managers in Singapore last weekend? B: I was nervous at first because my {{BLANK}} had more experience and spoke very confidently, but the judges liked my clear examples, so I made it to the final round.",
    "cn": "A：上週末你在新加坡年輕經理人辯論賽的表現怎麼樣？ B：一開始我很緊張，因為我的【對手】經驗比較豐富，說話也非常有自信，但評審喜歡我清楚的例子，所以我晉級到最後一輪了。"
  },
  {
    "word": "challenger",
    "pos": "n.",
    "cn_def": "挑戰者",
    "en_def": "a person or company that tries to win against the leader or champion",
    "sentence": "A: Should we still worry about that small online shop that started selling office furniture last year? B: Yes, because it has become a serious {{BLANK}} to our business, offering lower prices and faster delivery, and several of our regular customers have already placed orders with them.",
    "cn": "A：我們還需要擔心去年開始販售辦公家具的那家小型網路商店嗎？ B：需要，因為它已經成為我們生意的強勁【挑戰者】，價格更低、送貨更快，我們有幾個老客戶已經向他們下單了。"
  },
  {
    "word": "competitor",
    "pos": "n.",
    "cn_def": "競爭對手；參賽者",
    "en_def": "a company or person trying to be more successful than others",
    "sentence": "A: Why did the manager call an emergency meeting this morning instead of having the usual coffee break with the team? B: Our biggest {{BLANK}} has just released a cheaper smartphone with a better camera, so we need to discuss how to protect our sales before the holiday season begins.",
    "cn": "A：為什麼經理今天早上召開緊急會議，而不是像平常一樣和團隊喝咖啡休息？ B：我們最大的【競爭對手】剛推出一款更便宜、相機更好的智慧型手機，所以我們需要在假期旺季開始前討論如何保住我們的銷售量。"
  },
  {
    "word": "participant",
    "pos": "n.",
    "cn_def": "參加者；參與者",
    "en_def": "a person who takes part in an activity or event",
    "sentence": "A: How many people have signed up for the leadership workshop that the training department is organizing next month? B: So far we have forty, and each {{BLANK}} will receive a workbook, lunch on both days, and a certificate at the end, so we still need to order more materials.",
    "cn": "A：訓練部門下個月舉辦的領導力工作坊目前有多少人報名了？ B：目前有四十人，每位【參加者】都會拿到一本練習手冊、兩天的午餐，並在結束時獲得一張證書，所以我們還需要訂購更多資料。"
  },
  {
    "word": "victory",
    "pos": "n.",
    "cn_def": "勝利",
    "en_def": "the success of winning a game, fight or competition",
    "sentence": "A: Why is the whole IT department wearing the same blue shirts and eating pizza in the meeting room today? B: They are celebrating their {{BLANK}} in the city's software design competition, where their team beat twenty other companies and won a prize of ten thousand dollars.",
    "cn": "A：為什麼整個資訊部門今天都穿著一樣的藍色上衣，還在會議室吃披薩？ B：他們在慶祝在全市軟體設計比賽中獲得【勝利】，他們的團隊打敗了其他二十家公司，贏得了一萬美元的獎金。"
  },
  {
    "word": "defeat",
    "pos": "n.",
    "cn_def": "失敗；挫敗",
    "en_def": "the fact of losing a game, fight or competition",
    "sentence": "A: Is the sales director still upset about losing the hospital contract to that company from Osaka last month? B: She was disappointed at first, but she says the {{BLANK}} taught us an important lesson about our prices, so now we are preparing a much stronger offer for the next project.",
    "cn": "A：業務總監還在為上個月輸給那家大阪公司、失去醫院合約的事情難過嗎？ B：她一開始很失望，但她說這次【失敗】讓我們學到了關於價格的重要一課，所以我們現在正在為下一個案子準備更有競爭力的提案。"
  },
  {
    "word": "prize",
    "pos": "n.",
    "cn_def": "獎品；獎項",
    "en_def": "something valuable given to the winner",
    "sentence": "A: What do the staff members get if they come up with the best idea for saving energy in the factory this year? B: The winner will receive a {{BLANK}} of a new laptop and an extra day off, and the manager will also share the idea in the company newsletter.",
    "cn": "A：如果員工今年想出工廠最佳的節能點子，可以得到什麼？ B：獲勝者將得到一台新筆電作為【獎品】，外加一天額外休假，經理也會在公司電子報中分享這個點子。"
  },
  {
    "word": "trophy",
    "pos": "n.",
    "cn_def": "獎盃",
    "en_def": "a cup or other object given to the winner of a competition",
    "sentence": "A: What is that large gold cup on the shelf next to the reception desk, and when did the company get it? B: That is the {{BLANK}} we received last year for the best customer service in the region, and the CEO likes visitors to see it as soon as they walk in.",
    "cn": "A：櫃檯旁邊架子上那個大金杯是什麼？公司是什麼時候得到的？ B：那是我們去年因地區最佳客戶服務而獲得的【獎盃】，執行長喜歡讓訪客一走進來就看到它。"
  },
  {
    "word": "medal",
    "pos": "n.",
    "cn_def": "獎牌",
    "en_def": "a round flat piece of metal given as a prize",
    "sentence": "A: Why is your neighbor's daughter on the front page of the local newspaper this morning? B: She won a gold {{BLANK}} in swimming at the national games last weekend, and now a sports company has asked her to appear in its new advertisement for summer swimwear.",
    "cn": "A：為什麼你鄰居的女兒今天早上登上了地方報紙的頭版？ B：她上週末在全國運動會的游泳項目中贏得了一面金色【獎牌】，現在有一家運動用品公司請她拍攝新的夏季泳裝廣告。"
  },
  {
    "word": "rank",
    "pos": "v.",
    "cn_def": "排名；位居",
    "en_def": "to give or have a position in a list based on quality or success",
    "sentence": "A: Why does the hotel manager look so pleased while she reads the travel magazine at the front desk? B: The magazine has decided to {{BLANK}} our hotel third among all the business hotels in the city, so she expects many more bookings from companies sending staff here next year.",
    "cn": "A：為什麼飯店經理在櫃檯看旅遊雜誌時看起來那麼高興？ B：那本雜誌把我們飯店【排名】為全市所有商務飯店中的第三名，所以她預期明年會有更多派員工來這裡的公司向我們訂房。"
  },
  {
    "word": "score",
    "pos": "n.",
    "cn_def": "分數；得分",
    "en_def": "the number of points a person or team gets",
    "sentence": "A: Did you pass the English test that the company requires before you can move to the overseas office? B: Yes, I got a {{BLANK}} of 850, which is much higher than the minimum, so the human resources department says I can start working in London next spring.",
    "cn": "A：你通過公司規定調到海外辦公室之前必須考的英文測驗了嗎？ B：通過了，我拿到850的【分數】，比最低標準高出許多，所以人資部門說我明年春天就可以開始在倫敦工作。"
  },
  {
    "word": "compete",
    "pos": "v.",
    "cn_def": "競爭；參賽",
    "en_def": "to try to be more successful than others",
    "sentence": "A: Why is the small bakery on our street offering free coffee with every sandwich this month? B: A large supermarket opened nearby in October, and the owner says it is hard to {{BLANK}} with its low prices, so he hopes the free drinks will keep his regular customers coming back.",
    "cn": "A：為什麼我們街上那家小麵包店這個月每份三明治都送免費咖啡？ B：十月時附近開了一家大型超市，老闆說很難和它的低價【競爭】，所以他希望免費飲料能讓老顧客繼續回來光顧。"
  },
  {
    "word": "challenge",
    "pos": "v.",
    "cn_def": "向…挑戰",
    "en_def": "to invite someone to compete or fight against you",
    "sentence": "A: Why are the engineers practicing table tennis in the break room every lunchtime this week? B: The design team decided to {{BLANK}} them to a friendly match on Friday, and the losing team has to buy coffee for the whole floor, so everyone is taking it very seriously.",
    "cn": "A：為什麼工程師們這週每天午休都在休息室練習桌球？ B：設計團隊決定【挑戰】他們，星期五來一場友誼賽，輸的隊伍要請整層樓的人喝咖啡，所以大家都非常認真。"
  },
  {
    "word": "strive",
    "pos": "v.",
    "cn_def": "努力；奮鬥",
    "en_def": "to try very hard to achieve something",
    "sentence": "A: What makes your restaurant different from the many other Italian places in this busy shopping area? B: Our staff always {{BLANK}} to give every guest friendly service and fresh food made with local ingredients, and that is why so many office workers come back for lunch every week.",
    "cn": "A：你們的餐廳和這個熱鬧購物區裡其他許多義大利餐廳有什麼不同？ B：我們的員工總是【努力】為每位客人提供親切的服務，以及用在地食材製作的新鮮料理，這就是為什麼有那麼多上班族每週都回來吃午餐。"
  },
  {
    "word": "win",
    "pos": "v.",
    "cn_def": "贏；獲勝",
    "en_def": "to be the best or first in a competition",
    "sentence": "A: Do you think our team has a real chance in the national sales competition next month in Taipei? B: I think we can {{BLANK}} if we prepare carefully, because our numbers this year are better than last year, and the judges usually care most about customer feedback and teamwork.",
    "cn": "A：你覺得我們團隊在下個月於台北舉行的全國業務競賽中真的有機會嗎？ B：我認為只要我們仔細準備就能【贏】，因為我們今年的業績比去年好，而且評審通常最重視顧客回饋和團隊合作。"
  },
  {
    "word": "lose",
    "pos": "v.",
    "cn_def": "輸；失去",
    "en_def": "to not win; to stop having something you had",
    "sentence": "A: Why does the manager want us to answer every customer email within two hours from now on? B: She is worried that we will {{BLANK}} our biggest clients to the new company across the street, because they reply very quickly and offer free delivery on all orders.",
    "cn": "A：為什麼經理要我們從現在起在兩小時內回覆每封顧客電子郵件？ B：她擔心我們會【失去】最大的客戶，被對街那家新公司搶走，因為他們回信很快，所有訂單還免運費。"
  },
  {
    "word": "dominate",
    "pos": "v.",
    "cn_def": "主導；稱霸",
    "en_def": "to be the most powerful or important in a place or market",
    "sentence": "A: Why is our company so interested in buying that small tech firm in Seoul for such a high price? B: The board believes that with its new battery technology, we could {{BLANK}} the electric scooter market in Asia within five years and leave our competitors far behind.",
    "cn": "A：為什麼我們公司那麼想用這麼高的價格收購首爾那家小型科技公司？ B：董事會認為有了它的新電池技術，我們可以在五年內【稱霸】亞洲電動機車市場，把競爭對手遠遠拋在後面。"
  },
  {
    "word": "competitive",
    "pos": "adj.",
    "cn_def": "競爭激烈的；有競爭力的",
    "en_def": "trying hard to be better than others; (of prices) low enough to attract buyers",
    "sentence": "A: Why did the hotel decide to lower its room rates for business travelers this autumn? B: The market here has become very {{BLANK}} since three new hotels opened near the convention center, so we need lower prices and a better breakfast to keep our corporate guests.",
    "cn": "A：為什麼飯店決定今年秋天降低商務旅客的房價？ B：自從會展中心附近開了三家新飯店以後，這裡的市場變得非常【競爭激烈】，所以我們需要更低的價格和更好的早餐來留住企業客戶。"
  },
  {
    "word": "intense",
    "pos": "adj.",
    "cn_def": "強烈的；激烈的",
    "en_def": "very strong or extreme",
    "sentence": "A: How was your first month as a salesperson at the car dealership near the airport? B: It was harder than I expected, because the pressure to reach our monthly targets is {{BLANK}}, and everyone works long hours, but I have learned a lot from my experienced colleagues.",
    "cn": "A：你在機場附近汽車經銷商當業務員的第一個月怎麼樣？ B：比我預期的辛苦，因為達成每月目標的壓力非常【強烈】，大家都工作很長時間，不過我從經驗豐富的同事身上學到很多。"
  },
  {
    "word": "fierce",
    "pos": "adj.",
    "cn_def": "激烈的；猛烈的",
    "en_def": "very strong and determined, sometimes in an angry way",
    "sentence": "A: Why did the online bookstore shut down its office in Hong Kong after only two years? B: There was {{BLANK}} competition from bigger shopping websites that sold the same books for less money, and the company could not make enough profit to pay the high rent there.",
    "cn": "A：為什麼那家網路書店只營運兩年就關閉了香港的辦公室？ B：較大的購物網站用更低的價格賣同樣的書，帶來【激烈的】競爭，公司賺不到足夠的利潤來支付那裡高昂的租金。"
  },
  {
    "word": "close",
    "pos": "adj.",
    "cn_def": "勢均力敵的；差距很小的",
    "en_def": "(of a competition) won or lost by only a small amount",
    "sentence": "A: Who won the vote for the new company logo at the staff meeting yesterday afternoon? B: It was very {{BLANK}}, because the blue design got forty-one votes and the green one got thirty-nine, so the director asked the designers to combine the best parts of both.",
    "cn": "A：昨天下午員工會議上新公司標誌的投票是誰贏了？ B：票數非常【接近】，藍色設計得到四十一票，綠色設計得到三十九票，所以主管請設計師結合兩者最好的部分。"
  },
  {
    "word": "fair",
    "pos": "adj.",
    "cn_def": "公平的",
    "en_def": "treating everyone in the same way and following the rules",
    "sentence": "A: Why did the manager ask someone from another department to choose the winner of our sales contest? B: She wanted the results to be completely {{BLANK}}, because some people complained last year that she gave the prize to her own team members, so now an outside judge decides.",
    "cn": "A：為什麼經理請其他部門的人來選出我們業務競賽的贏家？ B：她希望結果完全【公平】，因為去年有些人抱怨她把獎項給了自己組裡的人，所以現在由外部評審來決定。"
  },
  {
    "word": "equal",
    "pos": "adj.",
    "cn_def": "相等的；平等的",
    "en_def": "the same in size, number, value or level",
    "sentence": "A: How will the two branches share the money from the new government contract they won together this month? B: The directors agreed that each branch will get an {{BLANK}} share of the profits, because both teams worked just as hard on the proposal and the final presentation.",
    "cn": "A：這兩間分公司要怎麼分配這個月共同贏得的新政府合約的錢？ B：主管們同意每間分公司都會得到【相等的】利潤，因為兩個團隊在提案和最後簡報上都一樣努力。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "職業的；專業的",
    "en_def": "doing something as a paid job, not as a hobby",
    "sentence": "A: Why did the company hire a coach to train our basketball team before the charity game next month? B: The manager wants us to look good in front of our clients, so she invited a former {{BLANK}} player who played in the national league for ten years to help us practice twice a week.",
    "cn": "A：為什麼公司在下個月的慈善比賽之前請了一位教練來訓練我們的籃球隊？ B：經理希望我們在客戶面前表現得好一點，所以她請來一位曾在全國聯賽打了十年的前【職業】球員，每週幫我們練習兩次。"
  },
  {
    "word": "amateur",
    "pos": "adj.",
    "cn_def": "業餘的",
    "en_def": "doing something for fun, not as a paid job",
    "sentence": "A: Are the singers performing at the company's year-end party this Friday famous musicians from a record company? B: No, they are an {{BLANK}} band made up of three accountants and an engineer from our office, and they practice every Wednesday evening after work in a small studio downtown.",
    "cn": "A：這個星期五在公司尾牙表演的歌手是唱片公司的知名音樂人嗎？ B：不是，他們是由我們辦公室三位會計師和一位工程師組成的【業餘】樂團，每週三晚上下班後在市中心的一間小錄音室練習。"
  },
  {
    "word": "actively",
    "pos": "adv.",
    "cn_def": "積極地；主動地",
    "en_def": "in a way that involves doing things and taking part",
    "sentence": "A: What qualities is the hiring team looking for in the new marketing assistant who will join us in January? B: We need someone who will {{BLANK}} share ideas in meetings and look for new customers online, instead of just waiting for the manager to give instructions every day.",
    "cn": "A：招募小組在找即將於一月加入的新行銷助理時，看重哪些特質？ B：我們需要一個會在會議中【積極地】分享想法、並在網路上尋找新客戶的人，而不是每天只等經理下指示。"
  },
  {
    "word": "successfully",
    "pos": "adv.",
    "cn_def": "成功地",
    "en_def": "in a way that achieves the result you wanted",
    "sentence": "A: How did the small company manage to get its new tea drinks into so many convenience stores across the country? B: The marketing team {{BLANK}} competed against several larger brands in a national taste test, and after their drinks took first place, the stores were eager to sell them.",
    "cn": "A：那家小公司是怎麼讓它的新茶飲進入全國這麼多便利商店的？ B：行銷團隊在全國試飲評比中【成功地】擊敗了幾個較大的品牌，他們的飲料拿下第一名後，商店都很想販售。"
  },
  {
    "word": "closely",
    "pos": "adv.",
    "cn_def": "密切地；仔細地",
    "en_def": "carefully and with attention",
    "sentence": "A: Why does the sales director check the websites of the other phone companies every morning before work? B: She likes to watch their prices and special offers {{BLANK}}, so that our team can react quickly and change our own deals before customers decide to buy from someone else.",
    "cn": "A：為什麼業務總監每天上班前都要查看其他電信公司的網站？ B：她喜歡【密切地】觀察他們的價格和優惠方案，這樣我們團隊就能快速反應，在顧客決定向別人購買之前調整我們自己的方案。"
  }
];

const MCQS = [
  {
    "q": "The bank is holding a writing _____ for local high school students. The best essay about saving money will receive a cash award.",
    "options": [
      "defeat",
      "trophy",
      "contest",
      "opponent"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Twelve teams from different branches will play in the company basketball _____ next month. The final game will take place on Saturday, June 5.",
    "options": [
      "victory",
      "participant",
      "prize",
      "tournament"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "Our tennis _____ against the accounting team was canceled because of the heavy rain. We will play again next Tuesday after work.",
    "options": [
      "medal",
      "match",
      "score",
      "competitor"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The long _____ between the two airlines has led to cheaper tickets. Both companies keep adding new routes to attract more travelers.",
    "options": [
      "rivalry",
      "trophy",
      "participant",
      "medal"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Ms. Lin studied her _____'s past speeches carefully before the debate. She wanted to know which arguments he would probably use.",
    "options": [
      "prize",
      "victory",
      "trophy",
      "opponent"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "A new _____ has opened a store across the street from ours. We need to review our prices before the busy season starts.",
    "options": [
      "competitor",
      "victory",
      "defeat",
      "score"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "Every _____ in the seminar must wear a name badge. Badges can be picked up at the registration desk in the lobby.",
    "options": [
      "trophy",
      "participant",
      "defeat",
      "rivalry"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The team celebrated its _____ with a dinner at an expensive restaurant. They had beaten the champions for the first time in years.",
    "options": [
      "opponent",
      "participant",
      "victory",
      "competitor"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "After a painful _____ in the final round, the players felt very disappointed. However, the coach told them to be proud of their effort.",
    "options": [
      "trophy",
      "defeat",
      "participant",
      "prize"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The first _____ in the lucky draw is a weekend at a beach resort. Winners will be announced at the end of the party.",
    "options": [
      "opponent",
      "rivalry",
      "prize",
      "defeat"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The silver _____ is displayed in a glass case near the main entrance. It was awarded to our factory for its excellent safety record.",
    "options": [
      "trophy",
      "rivalry",
      "opponent",
      "defeat"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Applicants need a _____ of at least 700 on the TOEIC test. Please attach a copy of your certificate to the application form.",
    "options": [
      "victory",
      "rivalry",
      "tournament",
      "score"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "More than two thousand runners joined the charity _____ on Sunday morning. The money raised will help build a new children's hospital.",
    "options": [
      "race",
      "trophy",
      "rivalry",
      "defeat"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "The young chess player is seen as the strongest _____ to the current champion. Their final game will be shown live on television.",
    "options": [
      "trophy",
      "defeat",
      "challenger",
      "score"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "She received a gold _____ for finishing first in the swimming competition. It now hangs on the wall of her office.",
    "options": [
      "rivalry",
      "medal",
      "opponent",
      "defeat"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Experts _____ our university among the top ten in Asia for engineering. Many international students now apply to study here.",
    "options": [
      "strive",
      "lose",
      "compete",
      "rank"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Small shops find it difficult to _____ with large online stores. Many of them now offer home delivery to keep their customers.",
    "options": [
      "rank",
      "compete",
      "dominate",
      "challenge"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The new champion plans to _____ the world record holder to a race next year. Tickets for the event are already selling fast.",
    "options": [
      "strive",
      "compete",
      "lose",
      "challenge"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "All of our employees _____ to provide the best possible service. Customer satisfaction is the most important goal of our company.",
    "options": [
      "dominate",
      "rank",
      "strive",
      "lose"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "If we _____ this contract, we will need to hire ten more workers. The client will announce its decision next Monday.",
    "options": [
      "win",
      "strive",
      "compete",
      "rank"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The company may _____ several important clients if delivery problems continue. The manager has asked the warehouse to work faster.",
    "options": [
      "win",
      "rank",
      "strive",
      "lose"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Two large companies _____ the smartphone market in this country. Together, they sell more than eighty percent of all phones.",
    "options": [
      "strive",
      "lose",
      "dominate",
      "compete"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Our prices are very _____ compared with those of other suppliers. That is why many restaurants buy their vegetables from us.",
    "options": [
      "competitive",
      "amateur",
      "equal",
      "fierce"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The training program is short but very _____. Participants study for ten hours a day for two weeks without a break.",
    "options": [
      "fair",
      "intense",
      "close",
      "amateur"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Competition among delivery companies has become so _____ that several small firms have closed. Only the strongest ones have survived.",
    "options": [
      "fierce",
      "amateur",
      "equal",
      "professional"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The election for union leader was very _____. The winner received only three more votes than the other candidate.",
    "options": [
      "amateur",
      "close",
      "professional",
      "equal"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Every candidate will answer the same questions during the interview. We want the hiring process to be _____ for everyone.",
    "options": [
      "intense",
      "amateur",
      "fair",
      "close"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Men and women in our company receive _____ pay for the same work. This policy has been in place for over twenty years.",
    "options": [
      "fierce",
      "amateur",
      "close",
      "equal"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "After winning many local races, she decided to become a _____ cyclist. Now a sports company pays her to compete around the world.",
    "options": [
      "fair",
      "professional",
      "close",
      "equal"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The photo contest is open only to _____ photographers. People who earn money from photography are not allowed to enter.",
    "options": [
      "fierce",
      "intense",
      "competitive",
      "amateur"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "contest": {
    "pos": "n.",
    "en_def": "a competition in which people try to win something",
    "cn_def": "比賽；競賽"
  },
  "tournament": {
    "pos": "n.",
    "en_def": "a series of games between many players or teams to find one winner",
    "cn_def": "錦標賽；聯賽"
  },
  "race": {
    "pos": "n.",
    "en_def": "a competition to see who is the fastest",
    "cn_def": "賽跑；競速比賽"
  },
  "match": {
    "pos": "n.",
    "en_def": "a game in which two people or teams play against each other",
    "cn_def": "比賽；競賽"
  },
  "rivalry": {
    "pos": "n.",
    "en_def": "a situation in which two people or groups compete with each other for a long time",
    "cn_def": "競爭；敵對"
  },
  "opponent": {
    "pos": "n.",
    "en_def": "a person or team you play or compete against",
    "cn_def": "對手；敵手"
  },
  "challenger": {
    "pos": "n.",
    "en_def": "a person or company that tries to win against the leader or champion",
    "cn_def": "挑戰者"
  },
  "competitor": {
    "pos": "n.",
    "en_def": "a company or person trying to be more successful than others",
    "cn_def": "競爭對手；參賽者"
  },
  "participant": {
    "pos": "n.",
    "en_def": "a person who takes part in an activity or event",
    "cn_def": "參加者；參與者"
  },
  "victory": {
    "pos": "n.",
    "en_def": "the success of winning a game, fight or competition",
    "cn_def": "勝利"
  },
  "defeat": {
    "pos": "n.",
    "en_def": "the fact of losing a game, fight or competition",
    "cn_def": "失敗；挫敗"
  },
  "prize": {
    "pos": "n.",
    "en_def": "something valuable given to the winner",
    "cn_def": "獎品；獎項"
  },
  "trophy": {
    "pos": "n.",
    "en_def": "a cup or other object given to the winner of a competition",
    "cn_def": "獎盃"
  },
  "medal": {
    "pos": "n.",
    "en_def": "a round flat piece of metal given as a prize",
    "cn_def": "獎牌"
  },
  "rank": {
    "pos": "v.",
    "en_def": "to give or have a position in a list based on quality or success",
    "cn_def": "排名；位居"
  },
  "score": {
    "pos": "n.",
    "en_def": "the number of points a person or team gets",
    "cn_def": "分數；得分"
  },
  "compete": {
    "pos": "v.",
    "en_def": "to try to be more successful than others",
    "cn_def": "競爭；參賽"
  },
  "challenge": {
    "pos": "v.",
    "en_def": "to invite someone to compete or fight against you",
    "cn_def": "向…挑戰"
  },
  "strive": {
    "pos": "v.",
    "en_def": "to try very hard to achieve something",
    "cn_def": "努力；奮鬥"
  },
  "win": {
    "pos": "v.",
    "en_def": "to be the best or first in a competition",
    "cn_def": "贏；獲勝"
  },
  "lose": {
    "pos": "v.",
    "en_def": "to not win; to stop having something you had",
    "cn_def": "輸；失去"
  },
  "dominate": {
    "pos": "v.",
    "en_def": "to be the most powerful or important in a place or market",
    "cn_def": "主導；稱霸"
  },
  "competitive": {
    "pos": "adj.",
    "en_def": "trying hard to be better than others; (of prices) low enough to attract buyers",
    "cn_def": "競爭激烈的；有競爭力的"
  },
  "intense": {
    "pos": "adj.",
    "en_def": "very strong or extreme",
    "cn_def": "強烈的；激烈的"
  },
  "fierce": {
    "pos": "adj.",
    "en_def": "very strong and determined, sometimes in an angry way",
    "cn_def": "激烈的；猛烈的"
  },
  "close": {
    "pos": "adj.",
    "en_def": "(of a competition) won or lost by only a small amount",
    "cn_def": "勢均力敵的；差距很小的"
  },
  "fair": {
    "pos": "adj.",
    "en_def": "treating everyone in the same way and following the rules",
    "cn_def": "公平的"
  },
  "equal": {
    "pos": "adj.",
    "en_def": "the same in size, number, value or level",
    "cn_def": "相等的；平等的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "doing something as a paid job, not as a hobby",
    "cn_def": "職業的；專業的"
  },
  "amateur": {
    "pos": "adj.",
    "en_def": "doing something for fun, not as a paid job",
    "cn_def": "業餘的"
  },
  "actively": {
    "pos": "adv.",
    "en_def": "in a way that involves doing things and taking part",
    "cn_def": "積極地；主動地"
  },
  "successfully": {
    "pos": "adv.",
    "en_def": "in a way that achieves the result you wanted",
    "cn_def": "成功地"
  },
  "closely": {
    "pos": "adv.",
    "en_def": "carefully and with attention",
    "cn_def": "密切地；仔細地"
  }
};

const EXTRA_GLOSSES = {};
