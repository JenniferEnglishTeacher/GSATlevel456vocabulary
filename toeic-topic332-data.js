// Topic 332 Quiz Data: Result 結果
// Source word list: https://www.examword.com/group-topic/result — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T332 - Result 結果",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "outcome",
    "pos": "n.",
    "cn_def": "結果；成果",
    "en_def": "the final result of an action, event or discussion",
    "sentence": "A: Have you heard anything from the legal team about the contract dispute with our supplier in Osaka, since the meeting ended so late last night? B: Yes, the lawyers called this morning, and they think the final {{BLANK}} will be good for us because the supplier has agreed to pay most of the extra shipping costs.",
    "cn": "A：你有聽到法務團隊關於我們和大阪供應商合約糾紛的消息嗎？昨晚會議很晚才結束。 B：有，律師們今天早上打電話來，他們認為最後的【結果】會對我們有利，因為供應商已經同意支付大部分額外的運費。"
  },
  {
    "word": "consequence",
    "pos": "n.",
    "cn_def": "後果；結果",
    "en_def": "something that happens because of an earlier action",
    "sentence": "A: Why is the finance director so upset with the new assistant, who usually does such careful work in the accounting office? B: The assistant forgot to send the tax forms before the deadline last Friday, and as a {{BLANK}}, the company now has to pay a large fine to the government.",
    "cn": "A：為什麼財務長對新助理這麼不高興？她在會計室通常工作很仔細。 B：那位助理上週五忘了在截止日前寄出稅務表格，造成的【後果】是公司現在必須繳一大筆罰款給政府。"
  },
  {
    "word": "effect",
    "pos": "n.",
    "cn_def": "影響；效果",
    "en_def": "a change that is caused by something",
    "sentence": "A: Has the new four-day work schedule changed anything in the customer service department since we started it back in March? B: It has had a very good {{BLANK}} on the staff, because people feel less tired, take fewer sick days, and answer customer emails much faster than they did before.",
    "cn": "A：自從我們三月開始實施新的每週四天工作制以來，客服部門有什麼改變嗎？ B：它對員工產生了非常好的【影響】，因為大家比較不累、請病假的天數變少，而且回覆客戶電子郵件的速度也比以前快多了。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "衝擊；影響",
    "en_def": "a strong effect or influence on something",
    "sentence": "A: Why did the board decide to delay the opening of the new store in the shopping mall downtown until next spring? B: They are worried about the {{BLANK}} of the rising rent and higher electricity prices on our profits, so they want to study the costs more carefully before signing anything.",
    "cn": "A：董事會為什麼決定把市中心購物中心新分店的開幕延到明年春天？ B：他們擔心租金上漲和電價提高對我們利潤造成的【衝擊】，所以想在簽任何文件之前更仔細地研究成本。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就；成績",
    "en_def": "something good that you succeed in doing after hard work",
    "sentence": "A: Why is everyone in the marketing office eating cake and taking photos together this afternoon instead of working at their desks? B: The team finally reached one million online customers this month, which is a great {{BLANK}} for such a small company, so the manager ordered cake for everyone to celebrate.",
    "cn": "A：為什麼行銷辦公室的每個人今天下午都在一起吃蛋糕、拍照，而不是坐在位子上工作？ B：團隊這個月終於達到一百萬名線上顧客，對這麼小的公司來說是很了不起的【成就】，所以經理訂了蛋糕請大家慶祝。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功；成就",
    "en_def": "the fact of getting the result that you wanted",
    "sentence": "A: How did the charity concert at the city hall go last weekend, and did the organizers raise enough money for the children's hospital? B: It was a huge {{BLANK}}, because more than two thousand people bought tickets, and the organizers collected twice as much money as they had planned for the new equipment.",
    "cn": "A：上週末在市政廳舉辦的慈善音樂會辦得怎麼樣？主辦單位有為兒童醫院募到足夠的錢嗎？ B：那是一次巨大的【成功】，因為有超過兩千人買票，主辦單位募到的錢是原本為新設備規劃金額的兩倍。"
  },
  {
    "word": "failure",
    "pos": "n.",
    "cn_def": "失敗",
    "en_def": "a lack of success in doing something",
    "sentence": "A: Why did the manager cancel the plan to sell our new coffee machine in Europe after the team spent so much time on it? B: The first test in Germany was a complete {{BLANK}}, because customers thought the machine was too expensive and too loud, so the company decided to improve the design first.",
    "cn": "A：團隊花了那麼多時間，經理為什麼取消在歐洲販售我們新咖啡機的計畫？ B：在德國的第一次測試徹底【失敗】，因為顧客覺得這台機器太貴又太吵，所以公司決定先改良設計。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展；進步",
    "en_def": "movement toward finishing or improving something",
    "sentence": "A: How is the building work on the new office tower going, and will we really be able to move in before the end of the year? B: The builders have made good {{BLANK}} over the last two months, so if the weather stays dry, the offices should be ready for us by early December.",
    "cn": "A：新辦公大樓的工程進行得怎麼樣？我們真的能在年底前搬進去嗎？ B：建築工人過去兩個月有很好的【進展】，所以如果天氣保持乾燥，辦公室應該在十二月初就能準備好給我們使用。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改善；改進",
    "en_def": "a change that makes something better",
    "sentence": "A: Have you noticed any difference in the quality of the reports since the new trainees joined the research team in September? B: Yes, there has been a clear {{BLANK}} in their writing, because the senior staff checked every draft carefully and gave them useful advice during the weekly meetings.",
    "cn": "A：自從新的實習生九月加入研究團隊後，你有注意到報告品質有什麼不同嗎？ B：有，他們的寫作有明顯的【改善】，因為資深員工仔細檢查每一份草稿，並在每週會議中給他們有用的建議。"
  },
  {
    "word": "gain",
    "pos": "n.",
    "cn_def": "增加；收益",
    "en_def": "an increase in amount or value",
    "sentence": "A: Did the company's online shop do better this year than last year, now that we offer free delivery to most of our customers? B: Yes, we saw a twenty percent {{BLANK}} in online sales, mainly because more customers are willing to order large items when they don't have to pay for shipping.",
    "cn": "A：既然我們現在對大部分顧客提供免運，公司的網路商店今年的表現比去年好嗎？ B：是的，我們的網路銷售額【增加】了百分之二十，主要是因為不用付運費時，更多顧客願意訂購大型商品。"
  },
  {
    "word": "loss",
    "pos": "n.",
    "cn_def": "虧損；損失",
    "en_def": "money that a business loses instead of earning",
    "sentence": "A: Why did the owners decide to close the small café next to the train station after only one year of business? B: The café had a big {{BLANK}} every month because the rent was very high and few travelers had time to stop for coffee, so the owners couldn't keep paying the bills.",
    "cn": "A：為什麼老闆們在只營業一年後就決定關掉火車站旁的小咖啡館？ B：那家咖啡館每個月都有很大的【虧損】，因為租金很高，而且很少旅客有時間停下來喝咖啡，所以老闆們沒辦法繼續支付帳單。"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "好處；利益",
    "en_def": "a good or helpful result or advantage",
    "sentence": "A: Why are so many employees signing up for the new language classes that the human resources department started offering after work? B: One big {{BLANK}} is that the classes are free, and staff who pass the final test can also apply for jobs in our overseas offices with a higher salary.",
    "cn": "A：為什麼有那麼多員工報名人資部門開始在下班後開設的新語言課程？ B：一個很大的【好處】是課程免費，而且通過期末測驗的員工還可以申請我們海外辦公室薪水更高的職位。"
  },
  {
    "word": "drawback",
    "pos": "n.",
    "cn_def": "缺點；壞處",
    "en_def": "a problem or disadvantage that makes something less good",
    "sentence": "A: Are you going to rent the apartment near the new office that the real estate agent showed us on Saturday afternoon? B: I like the large kitchen and the view, but the main {{BLANK}} is that there is no parking space nearby, so I would have to take two buses to work every day.",
    "cn": "A：你會租房仲星期六下午帶我們看的那間新辦公室附近的公寓嗎？ B：我喜歡那個大廚房和景觀，但主要的【缺點】是附近沒有停車位，所以我每天得搭兩班公車去上班。"
  },
  {
    "word": "produce",
    "pos": "v.",
    "cn_def": "產生；造成；生產",
    "en_def": "to make something happen or to create something",
    "sentence": "A: Is the new advertising campaign on social media really working, or should we go back to printing posters for the train stations? B: Online ads like these usually {{BLANK}} good results within a few weeks, so let's wait until the end of the month before we make a final decision about the budget.",
    "cn": "A：社群媒體上的新廣告活動真的有效嗎？還是我們應該回頭去印火車站的海報？ B：這類網路廣告通常幾週內就會【產生】不錯的效果，所以我們等到月底再對預算做最後決定吧。"
  },
  {
    "word": "lead to",
    "pos": "v.phr.",
    "cn_def": "導致；造成",
    "en_def": "to cause something to happen",
    "sentence": "A: Why does the factory manager want everyone to attend the safety training session again, even the workers who have been here for years? B: He believes that small mistakes with the machines can {{BLANK}} serious accidents, and the insurance company has also asked us to show that all workers know the rules.",
    "cn": "A：為什麼工廠經理要每個人再參加一次安全訓練課程，連在這裡工作好幾年的員工也要？ B：他認為操作機器時的小錯誤可能會【導致】嚴重的意外，而且保險公司也要求我們證明所有員工都了解規定。"
  },
  {
    "word": "result in",
    "pos": "v.phr.",
    "cn_def": "造成；導致",
    "en_def": "to cause a particular situation or problem",
    "sentence": "A: Should we move the delivery date for the hotel furniture order forward by one week, as the customer asked us yesterday? B: I don't think so, because rushing the work could {{BLANK}} poor quality, and the customer would be even more unhappy if the chairs and tables arrived damaged or badly made.",
    "cn": "A：我們應該照客戶昨天的要求，把飯店家具訂單的交貨日提前一週嗎？ B：我不這麼認為，因為趕工可能會【造成】品質不佳，如果椅子和桌子送到時有損壞或做工粗糙，客戶會更不高興。"
  },
  {
    "word": "bring about",
    "pos": "v.phr.",
    "cn_def": "帶來；促成",
    "en_def": "to make something happen, especially a change",
    "sentence": "A: Why did the company hire a new chief executive from a large technology firm instead of promoting someone from inside? B: The board hopes she will {{BLANK}} real changes in the way we work, because our old computer systems are slow and our competitors are using much better software now.",
    "cn": "A：公司為什麼從一家大型科技公司聘請新的執行長，而不是從內部升遷某人？ B：董事會希望她能為我們的工作方式【帶來】真正的改變，因為我們的舊電腦系統很慢，而競爭對手現在用的軟體好得多。"
  },
  {
    "word": "determine",
    "pos": "v.",
    "cn_def": "決定；確定",
    "en_def": "to decide or strongly control what will happen",
    "sentence": "A: When will we know which branch office will get the extra money for new computers and furniture next year? B: The sales figures from the last quarter will {{BLANK}} which branch receives the money, so the managers are working hard to finish their reports before the meeting on Monday.",
    "cn": "A：我們什麼時候會知道明年哪一間分公司能拿到購買新電腦和家具的額外經費？ B：上一季的銷售數字將【決定】哪間分公司拿到這筆錢，所以經理們正努力在星期一開會前完成報告。"
  },
  {
    "word": "influence",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to have an effect on how someone thinks or acts",
    "sentence": "A: Why does the marketing team spend so much money on reviews from famous bloggers instead of on television ads? B: Research shows that online reviews strongly {{BLANK}} what young customers decide to buy, especially when they are choosing new phones, clothes, or places to eat on the weekend.",
    "cn": "A：為什麼行銷團隊把那麼多錢花在知名部落客的評論上，而不是電視廣告？ B：研究顯示網路評論會強烈【影響】年輕顧客的購買決定，尤其是在他們挑選新手機、衣服或週末用餐地點的時候。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "working well and giving the result you want",
    "sentence": "A: Have the new reminder emails reduced the number of customers who forget to pay their monthly bills on time? B: Yes, they have been very {{BLANK}}, because late payments dropped by almost half in the first month, and the accounting staff now spend much less time calling customers about money.",
    "cn": "A：新的提醒電子郵件有減少忘記準時繳月費的顧客人數嗎？ B：有，它們非常【有效】，因為第一個月逾期付款就減少了將近一半，而且會計人員現在打電話向顧客催款的時間也少多了。"
  },
  {
    "word": "ineffective",
    "pos": "adj.",
    "cn_def": "無效的；效果不佳的",
    "en_def": "not working well or not giving the result you want",
    "sentence": "A: Why did the city council stop the program that gave free bus tickets to office workers in the downtown area? B: The program turned out to be {{BLANK}}, because most workers still drove their own cars to work, and the traffic jams in the city center did not get any better at all.",
    "cn": "A：市議會為什麼停止了提供免費公車票給市中心上班族的計畫？ B：結果那個計畫【沒什麼效果】，因為大部分上班族還是自己開車上班，市中心的塞車情況一點也沒有改善。"
  },
  {
    "word": "successful",
    "pos": "adj.",
    "cn_def": "成功的",
    "en_def": "having got the result that was wanted",
    "sentence": "A: Did your sister's small bakery in the shopping district manage to survive after the big chain store opened across the street? B: Yes, it has become very {{BLANK}}, because she bakes everything fresh every morning, and many office workers now stop there to buy bread and sandwiches before work.",
    "cn": "A：在對街那家大型連鎖店開幕之後，你姊姊在商店街的小麵包店有撐下來嗎？ B：有，生意變得非常【成功】，因為她每天早上把所有東西都現烤，現在很多上班族上班前都會去那裡買麵包和三明治。"
  },
  {
    "word": "unsuccessful",
    "pos": "adj.",
    "cn_def": "不成功的；失敗的",
    "en_def": "not getting the result that was wanted",
    "sentence": "A: Did the company manage to hire a new chief engineer for the factory, or is the position still open? B: Our first attempt was {{BLANK}}, because none of the people we interviewed had enough experience, so we have asked a recruitment agency to help us find more candidates by next month.",
    "cn": "A：公司有成功為工廠聘到新的總工程師嗎？還是那個職位仍然空缺？ B：我們第一次的嘗試【沒有成功】，因為面試的人都沒有足夠的經驗，所以我們已經請一家人力仲介公司在下個月前幫我們找更多人選。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "正面的；積極的",
    "en_def": "good, hopeful or showing approval",
    "sentence": "A: How did the customers react to the new menu at our hotel restaurant during the first week after it was introduced? B: Most of the comments were very {{BLANK}}, because guests liked the fresh local ingredients and the lower prices, although a few people asked us to add more vegetarian dishes.",
    "cn": "A：飯店餐廳推出新菜單後的第一週，顧客的反應如何？ B：大部分的評論都非常【正面】，因為客人喜歡新鮮的在地食材和較低的價格，不過有幾個人請我們多加一些素食料理。"
  },
  {
    "word": "negative",
    "pos": "adj.",
    "cn_def": "負面的；不利的",
    "en_def": "bad, harmful or showing disapproval",
    "sentence": "A: Why does the manager look so worried after reading the newspaper in the break room this morning? B: There was a {{BLANK}} article about the long waiting times at our service center, and she is afraid that many customers will now choose another company for their phone and internet plans.",
    "cn": "A：經理今天早上在休息室看完報紙後，為什麼看起來那麼擔心？ B：報上有一篇關於我們服務中心等候時間很長的【負面】報導，她擔心很多顧客現在會改選別家公司的電話和網路方案。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；了不起的",
    "en_def": "unusual and very impressive",
    "sentence": "A: Is it true that the new sales representative closed more deals in her first month than anyone else on the team? B: Yes, it is a {{BLANK}} record for someone who just finished college, and the manager has already asked her to share her methods with the other staff at next week's meeting.",
    "cn": "A：新來的業務代表第一個月談成的交易比團隊裡任何人都多，這是真的嗎？ B：是的，對一個剛從大學畢業的人來說，這是個【了不起的】紀錄，經理已經請她在下週的會議上和其他同事分享她的方法。"
  },
  {
    "word": "significant",
    "pos": "adj.",
    "cn_def": "顯著的；重大的",
    "en_def": "large or important enough to be noticed",
    "sentence": "A: Has moving the production line to the new factory in the south really helped the company save money this year? B: Yes, we have seen a {{BLANK}} drop in energy costs, because the new building uses solar panels and modern machines that need much less electricity than the old ones.",
    "cn": "A：今年把生產線移到南部的新工廠，真的有幫公司省錢嗎？ B：有，我們的能源成本有【顯著的】下降，因為新大樓使用太陽能板和現代化機器，耗電量比舊機器少得多。"
  },
  {
    "word": "expected",
    "pos": "adj.",
    "cn_def": "預期的；預計的",
    "en_def": "thought likely to happen",
    "sentence": "A: Did the new hotel near the airport get as many guests as the owners hoped for during the busy holiday season? B: Yes, the number of guests was exactly as {{BLANK}}, because the owners had studied the travel data carefully, so they hired enough staff and nobody had to wait long to check in.",
    "cn": "A：機場附近的新飯店在忙碌的假期期間，有像老闆們希望的那樣吸引到那麼多客人嗎？ B：有，客人數量完全如【預期】，因為老闆們仔細研究過旅遊數據，所以僱用了足夠的員工，沒有人需要等很久才辦好入住。"
  },
  {
    "word": "unexpected",
    "pos": "adj.",
    "cn_def": "出乎意料的；意外的",
    "en_def": "surprising because you did not think it would happen",
    "sentence": "A: Why did the project team have to work late every night last week, even though the deadline is still a month away? B: There was an {{BLANK}} problem with the computer system, and some important customer data disappeared, so the team had to fix the error and enter the information again by hand.",
    "cn": "A：雖然截止日期還有一個月，為什麼專案團隊上週每天晚上都得加班？ B：電腦系統出了一個【意料之外的】問題，一些重要的客戶資料不見了，所以團隊必須修正錯誤並用手動重新輸入資料。"
  },
  {
    "word": "eventually",
    "pos": "adv.",
    "cn_def": "最後；終於",
    "en_def": "in the end, after a long time or many problems",
    "sentence": "A: Did you manage to get a refund for the broken laptop that you bought online for your new home office? B: It took almost two months and many phone calls, but the store {{BLANK}} agreed to give me all my money back after their technician checked the computer and found the problem.",
    "cn": "A：你為新的居家辦公室在網路上買的那台壞掉的筆電，有拿到退款嗎？ B：花了將近兩個月、打了很多通電話，但在店家的技術人員檢查電腦並找到問題後，店家【最後】同意把錢全部退給我。"
  },
  {
    "word": "finally",
    "pos": "adv.",
    "cn_def": "終於；最後",
    "en_def": "at last, after waiting for a long time",
    "sentence": "A: Is the new manager's office ready yet, or is she still working at a desk in the meeting room on the third floor? B: The workers {{BLANK}} finished painting the walls and putting in the new furniture yesterday afternoon, so she can move in this morning and start meeting her team in private.",
    "cn": "A：新經理的辦公室準備好了嗎？還是她還在三樓會議室裡的一張桌子辦公？ B：工人們昨天下午【終於】粉刷完牆壁並擺好新家具，所以她今天早上就能搬進去，開始私下和她的團隊會談。"
  },
  {
    "word": "accordingly",
    "pos": "adv.",
    "cn_def": "相應地；照著做",
    "en_def": "in a way that suits what has just been said or what has happened",
    "sentence": "A: Did you hear that the client wants to bring ten more people from their head office in Tokyo to the meeting next Tuesday? B: Yes, so we need to change our plans {{BLANK}}, which means booking a bigger conference room, ordering more lunch boxes, and printing extra copies of the presentation for everyone.",
    "cn": "A：你有聽說客戶下週二開會時要從東京總公司多帶十個人來嗎？ B：有，所以我們需要【相應地】調整計畫，也就是預訂更大的會議室、多訂一些便當，並為每個人多印幾份簡報資料。"
  },
  {
    "word": "therefore",
    "pos": "adv.",
    "cn_def": "因此；所以",
    "en_def": "for that reason; because of that",
    "sentence": "A: Why is the company asking all employees to take their vacation days before the end of December this year? B: Unused vacation days can no longer be carried over to next year under the new policy; {{BLANK}}, the human resources manager wants everyone to plan their time off soon and avoid losing any days.",
    "cn": "A：公司今年為什麼要求所有員工在十二月底前把假休完？ B：根據新規定，沒用完的假不能再延到明年；【因此】，人資經理希望大家儘快安排休假，避免損失任何天數。"
  }
];

const MCQS = [
  {
    "q": "The two companies talked for six hours yesterday. Both sides were pleased with the _____ of the negotiations and signed the deal.",
    "options": [
      "outcome",
      "drawback",
      "gain",
      "loss"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The shipment was sent to the wrong address by mistake. As a _____, the customer received the parts three days late.",
    "options": [
      "benefit",
      "progress",
      "consequence",
      "improvement"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new lighting system has had a positive _____ on employee mood. Staff say the office feels brighter and more comfortable now.",
    "options": [
      "achievement",
      "effect",
      "drawback",
      "failure"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Experts are studying the _____ of higher fuel prices on airline profits. Their full report will be published early next month.",
    "options": [
      "achievement",
      "success",
      "progress",
      "impact"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Winning the national design award was a major _____ for our small studio. The founders thanked every staff member at the party.",
    "options": [
      "drawback",
      "loss",
      "achievement",
      "consequence"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The product launch last week was a great _____. Over ten thousand units were sold during the first weekend alone.",
    "options": [
      "success",
      "failure",
      "drawback",
      "loss"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Without enough funding, the research project ended in _____. The team was disappointed but learned many useful lessons from it.",
    "options": [
      "achievement",
      "benefit",
      "improvement",
      "failure"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The construction crew has made steady _____ on the new bridge. The work should be completed two weeks ahead of schedule.",
    "options": [
      "impact",
      "progress",
      "loss",
      "drawback"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Customers have noticed a big _____ in our delivery speed. Most orders now arrive within two days instead of five.",
    "options": [
      "improvement",
      "consequence",
      "drawback",
      "failure"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The company reported a ten percent _____ in profits this quarter. Investors were very pleased with the strong numbers.",
    "options": [
      "drawback",
      "failure",
      "gain",
      "consequence"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The store suffered a heavy _____ after the storm damaged most of its stock. Insurance will cover only part of the cost.",
    "options": [
      "gain",
      "loss",
      "benefit",
      "success"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Free health checks are one _____ of working for this company. Employees can also join the nearby gym at half price.",
    "options": [
      "drawback",
      "failure",
      "loss",
      "benefit"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The new software is cheap and easy to use. Its only _____ is that it does not work on older computers.",
    "options": [
      "benefit",
      "achievement",
      "drawback",
      "success"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The new marketing strategy did not _____ the desired results. The team will try a different approach in the next quarter.",
    "options": [
      "produce",
      "determine",
      "explain",
      "remove"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Poor communication between departments can _____ costly mistakes. Managers should hold short meetings every week to share updates.",
    "options": [
      "depend on",
      "look after",
      "take over",
      "lead to"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Heavy snow is likely to _____ many flight cancellations tomorrow. Travelers should check the airport website before leaving home.",
    "options": [
      "give up",
      "result in",
      "put off",
      "look into"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The new director hopes to _____ major changes in company culture. She plans to give employees more freedom to work from home.",
    "options": [
      "bring about",
      "turn down",
      "put away",
      "run out"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Several factors _____ the price of a used car. These include its age, its condition, and how far it has been driven.",
    "options": [
      "admit",
      "refuse",
      "determine",
      "earn"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Online reviews strongly _____ which hotels travelers choose. Many people read at least five reviews before making a booking.",
    "options": [
      "produce",
      "influence",
      "refuse",
      "deliver"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "This cleaning spray is very _____ at removing coffee stains. Just spray it on the carpet and wipe it with a cloth.",
    "options": [
      "unexpected",
      "negative",
      "expected",
      "effective"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The old advertising methods have proven _____. Sales have continued to fall even though we doubled our spending on newspaper ads.",
    "options": [
      "successful",
      "positive",
      "ineffective",
      "significant"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "After ten years of hard work, she now runs a _____ chain of bakeries. She has twenty stores across the country.",
    "options": [
      "successful",
      "unsuccessful",
      "negative",
      "ineffective"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The customer survey received mostly _____ feedback this month. Most guests praised the friendly staff and the clean rooms.",
    "options": [
      "negative",
      "ineffective",
      "unsuccessful",
      "positive"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Long working hours can have a _____ effect on employees' health. The company now limits overtime to ten hours a week.",
    "options": [
      "positive",
      "negative",
      "successful",
      "effective"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The young engineer has made _____ progress in just six months. She now leads her own team of five designers.",
    "options": [
      "remarkable",
      "negative",
      "ineffective",
      "unsuccessful"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "There has been a _____ increase in online orders since the holiday sale began. The warehouse has hired twenty extra workers to help.",
    "options": [
      "ineffective",
      "unsuccessful",
      "significant",
      "negative"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The afternoon meeting was canceled because of an _____ power outage. Nobody in the building had been warned about it in advance.",
    "options": [
      "expected",
      "unexpected",
      "effective",
      "positive"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "After months of difficult discussion, the two firms _____ agreed to merge. The new company will begin operating in January.",
    "options": [
      "accordingly",
      "therefore",
      "rarely",
      "eventually"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "The client has reduced the size of the order by half. Please adjust the production schedule _____ before the end of the day.",
    "options": [
      "eventually",
      "therefore",
      "accordingly",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "The shipment arrived two days late, and we are _____ offering you a discount on your next order. We apologize for the trouble.",
    "options": [
      "therefore",
      "eventually",
      "rarely",
      "barely"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "outcome": {
    "pos": "n.",
    "en_def": "the final result of an action, event or discussion",
    "cn_def": "結果；成果"
  },
  "consequence": {
    "pos": "n.",
    "en_def": "something that happens because of an earlier action",
    "cn_def": "後果；結果"
  },
  "effect": {
    "pos": "n.",
    "en_def": "a change that is caused by something",
    "cn_def": "影響；效果"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect or influence on something",
    "cn_def": "衝擊；影響"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing after hard work",
    "cn_def": "成就；成績"
  },
  "success": {
    "pos": "n.",
    "en_def": "the fact of getting the result that you wanted",
    "cn_def": "成功；成就"
  },
  "failure": {
    "pos": "n.",
    "en_def": "a lack of success in doing something",
    "cn_def": "失敗"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward finishing or improving something",
    "cn_def": "進展；進步"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "a change that makes something better",
    "cn_def": "改善；改進"
  },
  "gain": {
    "pos": "n.",
    "en_def": "an increase in amount or value",
    "cn_def": "增加；收益"
  },
  "loss": {
    "pos": "n.",
    "en_def": "money that a business loses instead of earning",
    "cn_def": "虧損；損失"
  },
  "benefit": {
    "pos": "n.",
    "en_def": "a good or helpful result or advantage",
    "cn_def": "好處；利益"
  },
  "drawback": {
    "pos": "n.",
    "en_def": "a problem or disadvantage that makes something less good",
    "cn_def": "缺點；壞處"
  },
  "produce": {
    "pos": "v.",
    "en_def": "to make something happen or to create something",
    "cn_def": "產生；造成；生產"
  },
  "lead to": {
    "pos": "v.phr.",
    "en_def": "to cause something to happen",
    "cn_def": "導致；造成"
  },
  "result in": {
    "pos": "v.phr.",
    "en_def": "to cause a particular situation or problem",
    "cn_def": "造成；導致"
  },
  "bring about": {
    "pos": "v.phr.",
    "en_def": "to make something happen, especially a change",
    "cn_def": "帶來；促成"
  },
  "determine": {
    "pos": "v.",
    "en_def": "to decide or strongly control what will happen",
    "cn_def": "決定；確定"
  },
  "influence": {
    "pos": "v.",
    "en_def": "to have an effect on how someone thinks or acts",
    "cn_def": "影響"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "working well and giving the result you want",
    "cn_def": "有效的"
  },
  "ineffective": {
    "pos": "adj.",
    "en_def": "not working well or not giving the result you want",
    "cn_def": "無效的；效果不佳的"
  },
  "successful": {
    "pos": "adj.",
    "en_def": "having got the result that was wanted",
    "cn_def": "成功的"
  },
  "unsuccessful": {
    "pos": "adj.",
    "en_def": "not getting the result that was wanted",
    "cn_def": "不成功的；失敗的"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "good, hopeful or showing approval",
    "cn_def": "正面的；積極的"
  },
  "negative": {
    "pos": "adj.",
    "en_def": "bad, harmful or showing disapproval",
    "cn_def": "負面的；不利的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual and very impressive",
    "cn_def": "非凡的；了不起的"
  },
  "significant": {
    "pos": "adj.",
    "en_def": "large or important enough to be noticed",
    "cn_def": "顯著的；重大的"
  },
  "expected": {
    "pos": "adj.",
    "en_def": "thought likely to happen",
    "cn_def": "預期的；預計的"
  },
  "unexpected": {
    "pos": "adj.",
    "en_def": "surprising because you did not think it would happen",
    "cn_def": "出乎意料的；意外的"
  },
  "eventually": {
    "pos": "adv.",
    "en_def": "in the end, after a long time or many problems",
    "cn_def": "最後；終於"
  },
  "finally": {
    "pos": "adv.",
    "en_def": "at last, after waiting for a long time",
    "cn_def": "終於；最後"
  },
  "accordingly": {
    "pos": "adv.",
    "en_def": "in a way that suits what has just been said or what has happened",
    "cn_def": "相應地；照著做"
  },
  "therefore": {
    "pos": "adv.",
    "en_def": "for that reason; because of that",
    "cn_def": "因此；所以"
  }
};

const EXTRA_GLOSSES = {};
