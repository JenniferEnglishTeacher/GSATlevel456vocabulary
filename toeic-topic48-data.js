// Topic 48 Quiz Data: Challenge 挑戰
// Source word list: https://www.examword.com/group-topic/challenge — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T48 - Challenge 挑戰",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "difficulty",
    "pos": "n.",
    "cn_def": "困難",
    "en_def": "a problem that makes something hard to do",
    "sentence": "A: Why did the new accounting software take three weeks to install when the vendor promised it would only need a few days? B: Our technicians had real {{BLANK}} connecting it to the old customer database, because the two systems store dates in different formats, so they had to rewrite several files by hand.",
    "cn": "A：廠商保證只要幾天，為什麼新的會計軟體花了三週才安裝好？ B：我們的技術人員在把它連接到舊的客戶資料庫時遇到很大的【困難】，因為兩個系統儲存日期的格式不同，所以他們必須手動改寫好幾個檔案。"
  },
  {
    "word": "obstacle",
    "pos": "n.",
    "cn_def": "障礙",
    "en_def": "something that blocks you or makes progress hard",
    "sentence": "A: The board likes your plan to open a second store in Tainan, but what do you think could stop the project from moving forward this year? B: The biggest {{BLANK}} is the shortage of trained staff in that area, so we will need to start recruiting and training people at least six months before opening.",
    "cn": "A：董事會喜歡你在台南開第二家店的計畫，但你認為今年有什麼可能讓這個專案無法推進？ B：最大的【障礙】是那個地區缺乏受過訓練的員工，所以我們至少要在開幕前六個月開始招募和培訓人員。"
  },
  {
    "word": "problem",
    "pos": "n.",
    "cn_def": "問題",
    "en_def": "a situation that causes trouble and needs to be fixed",
    "sentence": "A: Several customers called this morning to say they could not log in to their online accounts, so do you know what is going on with the website? B: The IT team found a {{BLANK}} with the main server after last night's update, and they expect to fix it and restore full service before lunch.",
    "cn": "A：今天早上有好幾位顧客打電話來說他們無法登入線上帳戶，你知道網站怎麼了嗎？ B：IT團隊發現昨晚更新後主伺服器出了【問題】，他們預計在午餐前修好並恢復全部服務。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a worried feeling caused by too much work or by demands from others",
    "sentence": "A: You have been staying at the office until ten o'clock every night this month, so is the new product launch really that difficult? B: Yes, the managers are under a lot of {{BLANK}} from the head office to finish before the trade show, so everyone on the team is working extra hours.",
    "cn": "A：你這個月每天晚上都待在辦公室到十點，新產品上市真的那麼困難嗎？ B：是的，經理們承受總公司很大的【壓力】，必須在商展前完成，所以團隊裡每個人都在加班。"
  },
  {
    "word": "stressful",
    "pos": "adj.",
    "cn_def": "有壓力的；令人緊張的",
    "en_def": "making you feel worried and tense",
    "sentence": "A: How was your first week as the new customer service supervisor at the airport branch? B: It was very {{BLANK}} because two flights were canceled during a typhoon, hundreds of angry passengers came to our desk at once, and I had to organize hotel rooms for all of them before midnight.",
    "cn": "A：你在機場分店擔任新的客服主管，第一週過得怎麼樣？ B：非常【有壓力】，因為颱風期間有兩班航班取消，數百名憤怒的乘客同時湧到我們的櫃檯，而我必須在午夜前幫他們全部安排好飯店房間。"
  },
  {
    "word": "demanding",
    "pos": "adj.",
    "cn_def": "要求高的；費力的",
    "en_def": "needing a lot of time, energy or skill",
    "sentence": "A: I heard that you turned down the offer from the consulting firm last week, so may I ask why you decided not to take it? B: The salary was attractive, but the job was too {{BLANK}} for me right now, since it required traveling abroad every week and answering clients' emails late at night.",
    "cn": "A：我聽說你上週拒絕了那家顧問公司的工作邀約，可以問你為什麼決定不接受嗎？ B：薪水很吸引人，但那份工作對我現在來說太【費力】了，因為它要求每週出國出差，還要在深夜回覆客戶的電子郵件。"
  },
  {
    "word": "tough",
    "pos": "adj.",
    "cn_def": "艱難的；棘手的",
    "en_def": "difficult to do or deal with",
    "sentence": "A: Our sales dropped by almost twenty percent in the last quarter, so how is the company going to explain this to the shareholders at next month's meeting? B: The CEO will admit it was a {{BLANK}} year for the whole industry, and then she will present her plan to cut costs and reach new markets in Asia.",
    "cn": "A：我們上一季的銷售額下滑了將近百分之二十，公司要怎麼在下個月的會議上向股東解釋？ B：執行長會承認這對整個產業來說是【艱難】的一年，然後她會提出削減成本並開拓亞洲新市場的計畫。"
  },
  {
    "word": "struggle",
    "pos": "v.",
    "cn_def": "努力；吃力應付",
    "en_def": "to try very hard to do something that is difficult",
    "sentence": "A: Why does the new intern stay late every evening and ask so many questions during team meetings? B: She is a hard worker, but she seems to {{BLANK}} with our complicated ordering system, so I have asked one of the senior clerks to sit with her for an hour each afternoon this week.",
    "cn": "A：為什麼新來的實習生每天晚上都留得很晚，而且在團隊會議中問這麼多問題？ B：她很認真，但她似乎在我們複雜的訂購系統上【很吃力】，所以我請了一位資深職員這週每天下午陪她一個小時。"
  },
  {
    "word": "setback",
    "pos": "n.",
    "cn_def": "挫折；阻礙",
    "en_def": "something that delays progress or makes a situation worse",
    "sentence": "A: Is the new shopping center near the train station still going to open in March as the developer announced last year? B: Unfortunately, there has been a serious {{BLANK}}, because heavy rain flooded the underground parking area last month, and the builders now think the opening will be delayed until summer.",
    "cn": "A：火車站附近的新購物中心還會像開發商去年宣布的那樣在三月開幕嗎？ B：很遺憾，出現了嚴重的【挫折】，因為上個月大雨淹沒了地下停車場，建商現在認為開幕會延到夏天。"
  },
  {
    "word": "risk",
    "pos": "n.",
    "cn_def": "風險",
    "en_def": "the chance that something bad may happen",
    "sentence": "A: Our competitor is selling a cheaper version of our printer, so should we lower our prices right away to keep our customers? B: That might help in the short term, but there is a real {{BLANK}} that we will lose money on every unit, so let's study the numbers carefully with the finance team first.",
    "cn": "A：我們的競爭對手在賣我們印表機的較便宜版本，我們該立刻降價來留住顧客嗎？ B：短期內可能有幫助，但真的有每台都虧錢的【風險】，所以我們先和財務團隊仔細研究數字吧。"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "cn_def": "克服",
    "en_def": "to succeed in dealing with a difficulty",
    "sentence": "A: Your presentation to the investors was excellent, but I remember you used to feel very nervous about speaking in front of large groups, didn't you? B: Yes, I joined a public speaking club two years ago, and practicing every week with friendly members really helped me {{BLANK}} my fear of talking to an audience.",
    "cn": "A：你對投資人的簡報非常出色，但我記得你以前在大群人面前說話會很緊張，不是嗎？ B：是的，我兩年前參加了一個演講社，每週和友善的社員一起練習，真的幫助我【克服】了對觀眾說話的恐懼。"
  },
  {
    "word": "cope",
    "pos": "v.",
    "cn_def": "應付；處理",
    "en_def": "to deal successfully with a difficult situation",
    "sentence": "A: Since the factory received that huge order from Germany, how are the workers on the production line handling the extra work? B: They are managing to {{BLANK}} with the heavy workload for now, but the manager plans to hire twenty temporary workers next month so that nobody has to work weekends.",
    "cn": "A：自從工廠接到德國那筆大訂單後，生產線上的工人如何處理額外的工作？ B：他們目前還能【應付】繁重的工作量，但經理打算下個月聘請二十名臨時工，這樣就沒有人必須週末上班。"
  },
  {
    "word": "effort",
    "pos": "n.",
    "cn_def": "努力",
    "en_def": "the energy or hard work used to do something",
    "sentence": "A: The client from Singapore just signed the contract for three more years, so what do you think finally convinced him to stay with us? B: I think he noticed the extra {{BLANK}} our team made to deliver every order on time, even during the busy holiday season when other suppliers were often late.",
    "cn": "A：新加坡的客戶剛簽了再延三年的合約，你認為最後是什麼說服他繼續和我們合作？ B：我想他注意到我們團隊為了準時交付每一筆訂單所付出的額外【努力】，即使在其他供應商常常延遲的忙碌假期季節也是如此。"
  },
  {
    "word": "persistence",
    "pos": "n.",
    "cn_def": "毅力；堅持不懈",
    "en_def": "continuing to try even when something is difficult",
    "sentence": "A: How did you finally get that big hotel chain to become our customer after they rejected our offer twice last year? B: It took a lot of {{BLANK}}, because I kept calling their purchasing manager every few months, sent her samples of our new towels, and finally she agreed to meet me in person.",
    "cn": "A：去年那家大型連鎖飯店兩度拒絕我們的提案，你最後是怎麼讓他們成為我們的客戶的？ B：這需要很大的【毅力】，因為我每隔幾個月就打電話給他們的採購經理，寄給她我們新毛巾的樣品，最後她終於同意和我見面。"
  },
  {
    "word": "resilience",
    "pos": "n.",
    "cn_def": "韌性；恢復力",
    "en_def": "the ability to recover quickly after something bad happens",
    "sentence": "A: Many small restaurants in this neighborhood closed during the economic crisis, so how did your family's noodle shop manage to stay open? B: I think it was our {{BLANK}}, because we quickly started a delivery service, changed the menu to cheaper dishes, and kept our loyal customers coming back every week.",
    "cn": "A：經濟危機期間這附近許多小餐廳都倒閉了，你們家的麵店是怎麼撐下來的？ B：我想是靠我們的【韌性】，因為我們很快就開始提供外送服務，把菜單換成較便宜的菜色，並讓忠實顧客每週持續回來光顧。"
  },
  {
    "word": "adapt",
    "pos": "v.",
    "cn_def": "適應；調整",
    "en_def": "to change in order to suit a new situation",
    "sentence": "A: You moved from the Taipei office to our branch in Toronto six months ago, so how are you finding life and work in Canada? B: At first the cold weather and the different working style were hard, but I am slowly learning to {{BLANK}} to the new environment, and my colleagues have been very helpful.",
    "cn": "A：你六個月前從台北辦公室調到我們多倫多的分公司，你覺得在加拿大的生活和工作如何？ B：一開始寒冷的天氣和不同的工作方式很辛苦，但我正慢慢學著【適應】新環境，而且我的同事們一直很幫忙。"
  },
  {
    "word": "solution",
    "pos": "n.",
    "cn_def": "解決辦法",
    "en_def": "a way to solve a problem",
    "sentence": "A: Our meeting rooms are always fully booked, and teams keep arguing about who can use them, so what should we do about it? B: One possible {{BLANK}} is to install an online booking system, so every team can reserve a room in advance and see clearly which rooms are free each day.",
    "cn": "A：我們的會議室總是被訂滿，各團隊一直為了誰可以使用而爭吵，我們該怎麼辦？ B：一個可行的【解決辦法】是安裝線上預約系統，這樣每個團隊都能事先預約會議室，並清楚看到每天哪些會議室是空的。"
  },
  {
    "word": "failure",
    "pos": "n.",
    "cn_def": "失敗",
    "en_def": "a lack of success",
    "sentence": "A: Last year's online advertising campaign cost a lot of money, so why are we not using the same agency again this year? B: The campaign was a complete {{BLANK}}, because it attracted very few new customers, and the agency never sent us the reports they promised, so the director decided to look for a new partner.",
    "cn": "A：去年的網路廣告活動花了很多錢，為什麼我們今年不再找同一家廣告公司？ B：那次活動完全【失敗】，因為它吸引到的新顧客非常少，而且那家公司從來沒有寄給我們他們承諾的報告，所以主任決定另找新的合作夥伴。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "教訓",
    "en_def": "something useful you learn from an experience",
    "sentence": "A: Last month the shipment to our biggest customer arrived a week late because nobody checked the address, so what did the team decide after that mistake? B: We all learned an important {{BLANK}} from it, and now two people must check every shipping document carefully before any package leaves the warehouse.",
    "cn": "A：上個月寄給我們最大客戶的貨晚了一週才到，因為沒有人檢查地址，那次錯誤之後團隊決定了什麼？ B：我們都從中學到了重要的【教訓】，現在每個包裹離開倉庫前，都必須由兩個人仔細檢查所有運送文件。"
  },
  {
    "word": "growth",
    "pos": "n.",
    "cn_def": "成長",
    "en_def": "an increase in size, amount or importance",
    "sentence": "A: The figures in this report look very good, so which part of the business did best during the past twelve months? B: Our online store showed the strongest {{BLANK}}, with sales rising by thirty-five percent, mainly because more young customers started ordering our skincare products through their phones.",
    "cn": "A：這份報告的數字看起來非常好，過去十二個月哪個部分的業務表現最好？ B：我們的網路商店【成長】最強勁，銷售額上升了百分之三十五，主要是因為更多年輕顧客開始用手機訂購我們的保養品。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "a chance to do something good or useful",
    "sentence": "A: The head office is looking for someone to manage the new branch in Vietnam for two years, so are you going to apply for the position? B: Yes, I think it is a great {{BLANK}} to gain international experience, learn a new language, and show the directors that I am ready for a bigger role.",
    "cn": "A：總公司正在找人管理越南的新分公司兩年，你會申請這個職位嗎？ B：會，我認為這是一個累積國際經驗、學習新語言，並向董事們證明我準備好擔任更重要角色的好【機會】。"
  },
  {
    "word": "brave",
    "pos": "adj.",
    "cn_def": "勇敢的",
    "en_def": "willing to do something difficult or frightening",
    "sentence": "A: I heard that Mr. Lin told the board directly that their plan to close the factory was a mistake, so how did they react? B: Everyone agreed it was a {{BLANK}} thing to do, because he could have lost his job, but in the end the directors listened and found a way to keep most of the workers.",
    "cn": "A：我聽說林先生直接告訴董事會他們關閉工廠的計畫是個錯誤，他們有什麼反應？ B：大家都認為這是很【勇敢】的舉動，因為他可能會因此丟掉工作，但最後董事們聽進去了，並找到辦法保留大部分的工人。"
  },
  {
    "word": "determined",
    "pos": "adj.",
    "cn_def": "有決心的；堅決的",
    "en_def": "having a strong wish to do something and not letting anything stop you",
    "sentence": "A: The new manager has only been here for two months, but the store already looks cleaner and sales are much higher, so how did she do it? B: She is very {{BLANK}} to make this branch the best in the city, so she meets the staff every morning and checks every shelf herself before the doors open.",
    "cn": "A：新經理才來兩個月，店裡就已經看起來更乾淨，銷售額也高了很多，她是怎麼做到的？ B：她非常【有決心】要讓這家分店成為全市最好的，所以她每天早上都和員工開會，並在開門前親自檢查每一個貨架。"
  },
  {
    "word": "positive",
    "pos": "adj.",
    "cn_def": "正面的；積極的",
    "en_def": "hopeful and confident; thinking about the good side",
    "sentence": "A: Our team lost the government contract that we worked on for six months, so how is everyone feeling in the office today? B: People are disappointed, of course, but the director told us to stay {{BLANK}}, because the client praised our proposal and promised to invite us to bid again next year.",
    "cn": "A：我們團隊失去了花了六個月爭取的政府合約，今天辦公室裡大家的心情如何？ B：大家當然很失望，但主任要我們保持【積極】，因為客戶稱讚了我們的提案，並答應明年會再邀請我們投標。"
  },
  {
    "word": "mentally",
    "pos": "adv.",
    "cn_def": "在心理上；精神上",
    "en_def": "in a way that is connected with the mind",
    "sentence": "A: You have a job interview with the airline tomorrow morning, and you said there will be five people asking questions, so how are you getting ready? B: I have practiced my answers many times, and tonight I will go to bed early so that I feel {{BLANK}} prepared and calm when I walk into the room.",
    "cn": "A：你明天早上要去航空公司面試，你說會有五個人問你問題，你怎麼準備？ B：我已經練習回答很多次了，今晚我會早點睡，這樣走進面試室時我就會覺得【心理上】已準備好而且很冷靜。"
  },
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功",
    "en_def": "the achievement of something you planned or wanted",
    "sentence": "A: The charity concert last weekend raised more money than any event we have organized before, so what do you think made it work so well? B: Its {{BLANK}} came from careful planning, a popular local band that performed for free, and dozens of volunteers who sold tickets in shopping malls for a whole month.",
    "cn": "A：上週末的慈善音樂會募到的錢比我們以前辦的任何活動都多，你認為它為什麼這麼順利？ B：它的【成功】來自周詳的規劃、一個免費演出的當地人氣樂團，以及數十位志工整整一個月在購物中心賣票。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "信心；自信",
    "en_def": "the feeling that you can do something well",
    "sentence": "A: The new sales assistant seemed very shy when she started, but yesterday she gave an excellent product demonstration to a large group of buyers, didn't she? B: Yes, after three months of training and good feedback from customers, she has gained a lot of {{BLANK}}, and now she enjoys speaking to people.",
    "cn": "A：新的銷售助理剛開始時看起來很害羞，但昨天她為一大群買家做了很出色的產品示範，不是嗎？ B：是的，經過三個月的訓練和顧客的好評，她增加了很多【自信】，現在她很喜歡和人說話。"
  }
];

const MCQS = [
  {
    "q": "Many new employees have _____ remembering all the safety rules. The trainer gives them a short checklist to carry.",
    "options": [
      "difficulty",
      "growth",
      "lesson",
      "confidence"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "High shipping costs remain the main _____ to selling our furniture overseas. The team is looking for a cheaper delivery partner.",
    "options": [
      "success",
      "lesson",
      "obstacle",
      "confidence"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The air conditioner in the meeting room stopped working again. Please call the repair company and report the _____ today.",
    "options": [
      "growth",
      "problem",
      "persistence",
      "opportunity"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Sales staff often feel strong _____ to reach their targets before the end of the month. The manager tries to keep the mood relaxed.",
    "options": [
      "solution",
      "lesson",
      "success",
      "pressure"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Moving the whole office to a new building in one weekend was very _____. Several workers complained of headaches and stayed until midnight.",
    "options": [
      "brave",
      "determined",
      "stressful",
      "positive"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The overseas project is very _____ and requires long hours every week. Only experienced engineers were chosen to join it.",
    "options": [
      "demanding",
      "brave",
      "positive",
      "determined"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Negotiating with the union was _____ work, and talks lasted three weeks. Both sides finally agreed on a new salary plan.",
    "options": [
      "brave",
      "determined",
      "positive",
      "tough"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Small shops often _____ to compete with large online stores. Many of them now offer free delivery to keep their customers.",
    "options": [
      "cope",
      "struggle",
      "overcome",
      "arrive"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The factory fire was a major _____ for the company's expansion plans. Production will not return to normal until next spring.",
    "options": [
      "setback",
      "confidence",
      "solution",
      "persistence"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Investing all our savings in one new product carries a high _____. The finance director suggests spreading the money across several projects.",
    "options": [
      "lesson",
      "confidence",
      "resilience",
      "risk"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "With support from his colleagues, Mr. Chen managed to _____ his fear of flying. He now visits clients in Japan every month.",
    "options": [
      "cope",
      "adapt",
      "overcome",
      "struggle"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The help desk could not _____ with the large number of calls on Monday. Two extra staff members were sent to answer phones.",
    "options": [
      "overcome",
      "cope",
      "adapt",
      "struggle"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Please make every _____ to arrive on time for the safety training. Late arrivals will have to attend another session.",
    "options": [
      "lesson",
      "growth",
      "failure",
      "effort"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Her _____ finally paid off when the company accepted her proposal after three rejections. She never stopped improving her ideas.",
    "options": [
      "persistence",
      "pressure",
      "obstacle",
      "failure"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The hotel showed great _____ after the earthquake and reopened within two weeks. Guests praised the staff for their quick recovery.",
    "options": [
      "setback",
      "resilience",
      "risk",
      "failure"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Our trainers must _____ their lessons to the needs of each client. Some groups need more practice than others.",
    "options": [
      "cope",
      "struggle",
      "adapt",
      "overcome"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The engineers finally found a _____ to the noise problem in the new printers. They added a small rubber cover inside each machine.",
    "options": [
      "pressure",
      "solution",
      "growth",
      "confidence"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The product launch was a _____ because the advertising started too late. Very few customers knew the item was available.",
    "options": [
      "resilience",
      "persistence",
      "growth",
      "failure"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The training session taught us a valuable _____ about protecting customer data. Every employee must now change passwords every month.",
    "options": [
      "lesson",
      "risk",
      "obstacle",
      "setback"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "The tourism industry in Hualien expects steady _____ over the next five years. Several new hotels are already being built.",
    "options": [
      "setback",
      "lesson",
      "growth",
      "failure"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The trade fair gives small companies an excellent _____ to meet buyers from abroad. Booths must be reserved by the end of March.",
    "options": [
      "obstacle",
      "failure",
      "pressure",
      "opportunity"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "It was _____ of the young engineer to point out the design error to the director. Her honesty saved the company a lot of money.",
    "options": [
      "stressful",
      "brave",
      "demanding",
      "tough"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The sales team is _____ to beat last year's record. They have planned extra visits to customers in every region.",
    "options": [
      "stressful",
      "tough",
      "determined",
      "demanding"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Customers have given very _____ feedback about our new mobile app. Most of them say it is fast and easy to use.",
    "options": [
      "positive",
      "brave",
      "determined",
      "demanding"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Long night shifts can leave nurses physically and _____ tired. The hospital now offers a quiet rest room for its staff.",
    "options": [
      "briefly",
      "mentally",
      "loudly",
      "rarely"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The new coffee flavor was such a _____ that stores sold out in two days. The company plans to produce twice as much next month.",
    "options": [
      "success",
      "setback",
      "obstacle",
      "difficulty"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Customers lost _____ in the airline after several long delays. The company is now offering discounts to win them back.",
    "options": [
      "growth",
      "solution",
      "confidence",
      "persistence"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Our team worked hard to _____ the technical problems before the system launch. The new website went online exactly on schedule.",
    "options": [
      "cope",
      "adapt",
      "struggle",
      "overcome"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Building _____ helps employees recover quickly from difficult projects. The company offers workshops on managing stress and staying healthy.",
    "options": [
      "resilience",
      "obstacle",
      "failure",
      "setback"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Working at the reception desk gave Mia the _____ to practice her English every day. She now speaks with foreign guests confidently.",
    "options": [
      "obstacle",
      "opportunity",
      "failure",
      "lesson"
    ],
    "answer": 1,
    "vocabIndex": 20
  }
];

const LOOKUP = {
  "difficulty": {
    "pos": "n.",
    "en_def": "a problem that makes something hard to do",
    "cn_def": "困難"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that blocks you or makes progress hard",
    "cn_def": "障礙"
  },
  "problem": {
    "pos": "n.",
    "en_def": "a situation that causes trouble and needs to be fixed",
    "cn_def": "問題"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a worried feeling caused by too much work or by demands from others",
    "cn_def": "壓力"
  },
  "stressful": {
    "pos": "adj.",
    "en_def": "making you feel worried and tense",
    "cn_def": "有壓力的；令人緊張的"
  },
  "demanding": {
    "pos": "adj.",
    "en_def": "needing a lot of time, energy or skill",
    "cn_def": "要求高的；費力的"
  },
  "tough": {
    "pos": "adj.",
    "en_def": "difficult to do or deal with",
    "cn_def": "艱難的；棘手的"
  },
  "struggle": {
    "pos": "v.",
    "en_def": "to try very hard to do something that is difficult",
    "cn_def": "努力；吃力應付"
  },
  "setback": {
    "pos": "n.",
    "en_def": "something that delays progress or makes a situation worse",
    "cn_def": "挫折；阻礙"
  },
  "risk": {
    "pos": "n.",
    "en_def": "the chance that something bad may happen",
    "cn_def": "風險"
  },
  "overcome": {
    "pos": "v.",
    "en_def": "to succeed in dealing with a difficulty",
    "cn_def": "克服"
  },
  "cope": {
    "pos": "v.",
    "en_def": "to deal successfully with a difficult situation",
    "cn_def": "應付；處理"
  },
  "effort": {
    "pos": "n.",
    "en_def": "the energy or hard work used to do something",
    "cn_def": "努力"
  },
  "persistence": {
    "pos": "n.",
    "en_def": "continuing to try even when something is difficult",
    "cn_def": "毅力；堅持不懈"
  },
  "resilience": {
    "pos": "n.",
    "en_def": "the ability to recover quickly after something bad happens",
    "cn_def": "韌性；恢復力"
  },
  "adapt": {
    "pos": "v.",
    "en_def": "to change in order to suit a new situation",
    "cn_def": "適應；調整"
  },
  "solution": {
    "pos": "n.",
    "en_def": "a way to solve a problem",
    "cn_def": "解決辦法"
  },
  "failure": {
    "pos": "n.",
    "en_def": "a lack of success",
    "cn_def": "失敗"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "something useful you learn from an experience",
    "cn_def": "教訓"
  },
  "growth": {
    "pos": "n.",
    "en_def": "an increase in size, amount or importance",
    "cn_def": "成長"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something good or useful",
    "cn_def": "機會"
  },
  "brave": {
    "pos": "adj.",
    "en_def": "willing to do something difficult or frightening",
    "cn_def": "勇敢的"
  },
  "determined": {
    "pos": "adj.",
    "en_def": "having a strong wish to do something and not letting anything stop you",
    "cn_def": "有決心的；堅決的"
  },
  "positive": {
    "pos": "adj.",
    "en_def": "hopeful and confident; thinking about the good side",
    "cn_def": "正面的；積極的"
  },
  "mentally": {
    "pos": "adv.",
    "en_def": "in a way that is connected with the mind",
    "cn_def": "在心理上；精神上"
  },
  "success": {
    "pos": "n.",
    "en_def": "the achievement of something you planned or wanted",
    "cn_def": "成功"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can do something well",
    "cn_def": "信心；自信"
  }
};

const EXTRA_GLOSSES = {};
