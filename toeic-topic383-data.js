// Topic 383 Quiz Data: Succeed 成功
// Source word list: https://www.examword.com/group-topic/succeed — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T383 - Succeed 成功",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "successful",
    "pos": "adj.",
    "cn_def": "成功的",
    "en_def": "having the result you wanted",
    "sentence": "A: How did the product launch in Kaohsiung go last weekend, and were the customers interested in the new coffee machines we brought? B: It was very {{BLANK}}, because we sold almost every machine on the first day, and the store manager has already asked us to return with more stock next month.",
    "cn": "A：上週末在高雄的產品發表會進行得怎麼樣？顧客對我們帶去的新咖啡機有興趣嗎？ B：非常【成功】，因為我們第一天就賣掉了幾乎所有的機器，而且店經理已經要求我們下個月帶更多存貨回去。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就；成績",
    "en_def": "something good that you have done after a lot of effort",
    "sentence": "A: Why is everyone in the sales department celebrating with cake and balloons this morning instead of starting their usual weekly meeting? B: Our team finally reached one million dollars in sales this quarter, and the director says it is the greatest {{BLANK}} in the company's twenty-year history, so she ordered the cake herself.",
    "cn": "A：為什麼業務部今天早上大家都在用蛋糕和氣球慶祝，而不是開平常的每週會議？ B：我們團隊這一季終於達到一百萬美元的業績，主管說這是公司二十年歷史中最偉大的【成就】，所以她親自訂了蛋糕。"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "達成；實現",
    "en_def": "to succeed in getting a result by working hard",
    "sentence": "A: Do you think our small team can really increase online orders by thirty percent before the end of the year, even with two people on vacation? B: I believe we can {{BLANK}} that if we upgrade the website, answer customer emails faster, and send a special holiday discount to all our regular buyers.",
    "cn": "A：你認為我們這個小團隊真的能在年底前讓網路訂單增加百分之三十嗎？即使有兩個人在休假？ B：我相信只要我們升級網站、更快回覆顧客的電子郵件，並寄送特別的節日折扣給所有老顧客，我們就能【達成】這個目標。"
  },
  {
    "word": "accomplish",
    "pos": "v.",
    "cn_def": "完成；做成",
    "en_def": "to finish something successfully",
    "sentence": "A: The client wants the whole office redesign finished in only two weeks, so how are we going to manage that with such a small budget? B: We can {{BLANK}} it if the painters work on weekends, the furniture arrives on Monday, and everyone in our department moves their files to the meeting room for a few days.",
    "cn": "A：客戶希望整個辦公室的重新設計在兩週內完成，預算這麼少，我們要怎麼做到？ B：只要油漆工週末也施工、家具星期一送到，而且我們部門每個人把檔案搬到會議室幾天，我們就能【完成】。"
  },
  {
    "word": "accomplishment",
    "pos": "n.",
    "cn_def": "成就；完成的事",
    "en_def": "something successful that you have done",
    "sentence": "A: What should I write in the annual review form when the manager asks about the most important things I did this year? B: You should describe your biggest {{BLANK}}, such as training the five new staff members and reducing customer complaints by half, because those results clearly show your value to the company.",
    "cn": "A：年度考核表上主管問我今年做過最重要的事情時，我應該寫什麼？ B：你應該描述你最大的【成就】，像是訓練五位新進員工以及讓顧客抱怨減少一半，因為這些成果清楚展現你對公司的價值。"
  },
  {
    "word": "attain",
    "pos": "v.",
    "cn_def": "達到；獲得",
    "en_def": "to reach or get something, usually after effort",
    "sentence": "A: Is it difficult for engineers in our factory to get the advanced safety certificate that the government requires for new machines? B: Most workers {{BLANK}} it within one year, but they have to attend evening classes twice a week and pass a long written test as well as a practical exam.",
    "cn": "A：我們工廠的工程師要取得政府對新機器規定的高級安全證照困難嗎？ B：大部分員工在一年內就能【取得】，但他們必須每週上兩次夜間課程，並通過一份很長的筆試和一項實作測驗。"
  },
  {
    "word": "attainment",
    "pos": "n.",
    "cn_def": "達成；（教育）程度",
    "en_def": "the act of reaching a goal or level, especially in education",
    "sentence": "A: Why does the hiring committee ask every applicant for copies of their university certificates and language test results? B: They want to check each person's educational {{BLANK}} before the interview, because the position requires a master's degree and a high level of English for meetings with overseas partners.",
    "cn": "A：為什麼招聘委員會要求每位應徵者提供大學證書和語言測驗成績的影本？ B：他們想在面試前確認每個人的教育【程度】，因為這個職位需要碩士學位，以及能和海外夥伴開會的高程度英文。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展；進步",
    "en_def": "movement toward finishing or improving something",
    "sentence": "A: Could you give me a quick update on the new branch office in Taichung before I meet the board members this afternoon? B: We have made good {{BLANK}} this month, because the builders finished the walls and the internet company installed the network, so we should open on schedule in early March.",
    "cn": "A：我今天下午和董事會成員開會之前，你可以快速告訴我台中新分公司的最新情況嗎？ B：這個月我們有不錯的【進展】，因為工人完成了牆面，網路公司也裝好了網路，所以我們應該能如期在三月初開幕。"
  },
  {
    "word": "improve",
    "pos": "v.",
    "cn_def": "改善；改進",
    "en_def": "to make something better",
    "sentence": "A: Our customers keep complaining that they wait too long on the phone when they call the service center, so what can we do? B: We could {{BLANK}} the situation by hiring two more part-time staff for the busy hours and adding an online chat service on our website for simple questions.",
    "cn": "A：我們的顧客一直抱怨打電話到客服中心要等很久，我們能怎麼辦？ B：我們可以在忙碌時段多雇兩位兼職人員，並在網站上增加線上聊天服務回答簡單問題，來【改善】這個情況。"
  },
  {
    "word": "improvement",
    "pos": "n.",
    "cn_def": "改善；進步",
    "en_def": "a change that makes something better",
    "sentence": "A: Have you noticed any changes in the restaurant since the new chef started working in our kitchen last month? B: Yes, there has been a big {{BLANK}} in the quality of the food, and several regular customers told the waiters that the soups and desserts are much better than before.",
    "cn": "A：自從新主廚上個月開始在我們廚房工作後，你有注意到餐廳有什麼改變嗎？ B：有，食物品質有很大的【改善】，好幾位常客都告訴服務生，湯和甜點比以前好很多。"
  },
  {
    "word": "advance",
    "pos": "v.",
    "cn_def": "晉升；前進",
    "en_def": "to move forward or get a higher position",
    "sentence": "A: I enjoy my job at the bank, but I want to move into a management position in the next few years, so what do you suggest? B: If you want to {{BLANK}} in your career, you should take the leadership course the company offers and volunteer to lead small projects whenever the department needs someone.",
    "cn": "A：我很喜歡在銀行的工作，但我希望未來幾年能升到管理職，你有什麼建議？ B：如果你想在職涯上【晉升】，你應該參加公司提供的領導課程，並在部門需要人時主動帶領小型專案。"
  },
  {
    "word": "advancement",
    "pos": "n.",
    "cn_def": "晉升；發展",
    "en_def": "moving to a higher position at work; development",
    "sentence": "A: Why did Kevin decide to leave his comfortable job at the hotel after working there happily for almost eight years? B: He felt there was no chance of {{BLANK}} there, because the managers never retire, so he accepted an offer from an international chain that promises regular promotions and training.",
    "cn": "A：Kevin在飯店愉快地工作了將近八年，為什麼決定離開那份舒適的工作？ B：他覺得在那裡沒有【升遷】的機會，因為主管們都不退休，所以他接受了一家國際連鎖企業的工作，對方承諾定期升職和培訓。"
  },
  {
    "word": "prosper",
    "pos": "v.",
    "cn_def": "繁榮；興旺",
    "en_def": "to be successful, especially by making money",
    "sentence": "A: Why are so many new cafés and bookstores opening in the old part of town near the train station these days? B: Local businesses there have begun to {{BLANK}} since the city built the new subway line, because thousands of commuters and tourists now walk through the area every day.",
    "cn": "A：為什麼最近火車站附近的老城區開了這麼多新咖啡館和書店？ B：自從市政府蓋了新的捷運線，那裡的在地商家開始【興旺】起來，因為現在每天有數千名通勤族和觀光客經過那一帶。"
  },
  {
    "word": "prosperity",
    "pos": "n.",
    "cn_def": "繁榮；興盛",
    "en_def": "the state of being successful and having money",
    "sentence": "A: What did the mayor talk about in her speech at the business conference yesterday morning? B: She said that the new technology park will bring jobs and {{BLANK}} to the whole region, and she promised to lower taxes for companies that hire young local workers during the next five years.",
    "cn": "A：市長昨天早上在商業會議上的演講談了什麼？ B：她說新的科技園區將為整個地區帶來工作機會和【繁榮】，並承諾未來五年會為雇用當地年輕員工的公司減稅。"
  },
  {
    "word": "thrive",
    "pos": "v.",
    "cn_def": "蓬勃發展；茁壯",
    "en_def": "to grow or develop very well",
    "sentence": "A: Is it true that the small online shop your sister started from her apartment is now hiring full-time employees? B: Yes, her business has continued to {{BLANK}} even during difficult times, because she sells handmade bags at fair prices and answers every customer's message personally within an hour.",
    "cn": "A：你妹妹在公寓裡開的小網店現在要招聘全職員工，是真的嗎？ B：是的，即使在困難時期，她的生意仍持續【蓬勃發展】，因為她以合理的價格販售手工包，而且一小時內親自回覆每位顧客的訊息。"
  },
  {
    "word": "excel",
    "pos": "v.",
    "cn_def": "擅長；表現優異",
    "en_def": "to be very good at something",
    "sentence": "A: Why did the manager choose Linda to give the presentation to our biggest client next Thursday instead of someone more senior? B: She tends to {{BLANK}} at speaking in front of large groups, and last year her clear explanations and friendly style helped us win two important contracts with foreign companies.",
    "cn": "A：為什麼經理選Linda下週四向我們最大的客戶做簡報，而不是選資深一點的人？ B：她向來【擅長】在大型團體面前演說，去年她清楚的說明和親切的風格幫我們贏得了兩份和外國公司的重要合約。"
  },
  {
    "word": "excellence",
    "pos": "n.",
    "cn_def": "卓越；優秀",
    "en_def": "the quality of being extremely good",
    "sentence": "A: What kind of award did our hotel receive at the tourism ceremony in Taipei last Friday night? B: We won a prize for {{BLANK}} in customer service, because travelers gave us very high ratings online and many guests praised our staff for being helpful, polite, and quick to solve problems.",
    "cn": "A：上週五晚上在台北的觀光頒獎典禮上，我們飯店得到什麼獎？ B：我們獲得顧客服務【卓越】獎，因為旅客在網路上給我們很高的評價，許多客人也稱讚我們的員工樂於助人、有禮貌，而且能迅速解決問題。"
  },
  {
    "word": "outstanding",
    "pos": "adj.",
    "cn_def": "傑出的；出色的",
    "en_def": "extremely good; much better than others",
    "sentence": "A: Have you read the comments that visitors wrote about the new museum guide we hired at the beginning of the summer? B: Yes, they all say she did an {{BLANK}} job, because she explained the history clearly, answered every question patiently, and even helped a lost child find his parents.",
    "cn": "A：你看過參觀者對我們夏初聘請的新博物館導覽員所寫的評語嗎？ B：看過，他們都說她表現得很【出色】，因為她把歷史解釋得很清楚、耐心回答每個問題，甚至還幫一個走失的孩子找到父母。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；值得注意的",
    "en_def": "unusual and surprising in a way that deserves attention",
    "sentence": "A: How did the factory manage to finish the huge order from the European client two weeks earlier than planned? B: The workers showed {{BLANK}} teamwork during the busy period, and the new machines were much faster than the old ones, so production almost doubled in a single month.",
    "cn": "A：工廠是怎麼比預定提早兩週完成歐洲客戶的大訂單的？ B：員工在忙碌期間展現了【非凡的】團隊合作，而且新機器比舊機器快很多，所以產量在一個月內幾乎增加了一倍。"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "抱負；雄心",
    "en_def": "a strong wish to achieve something",
    "sentence": "A: What did the young designer say when you asked her about her plans for the future during the interview? B: She said her {{BLANK}} is to open her own fashion studio in Tokyo one day, so she wants to work here for a few years to learn how a large company operates.",
    "cn": "A：面試時你問那位年輕設計師未來的計畫，她怎麼說？ B：她說她的【抱負】是有一天在東京開自己的時裝工作室，所以她想在這裡工作幾年，學習大公司如何運作。"
  },
  {
    "word": "ambitious",
    "pos": "adj.",
    "cn_def": "有雄心的；野心勃勃的",
    "en_def": "having a strong wish to succeed; needing a lot of effort",
    "sentence": "A: Do you think the marketing team's plan to open twenty new stores across Asia in just one year is realistic? B: It is a very {{BLANK}} plan, and I worry that we do not have enough staff or money yet, but the director believes that growing quickly is the best way to beat our competitors.",
    "cn": "A：你認為行銷團隊一年內在亞洲開二十家新店的計畫實際嗎？ B：這是個非常【雄心勃勃的】計畫，我擔心我們目前人手和資金都不夠，但主管認為快速成長是打敗競爭對手最好的方法。"
  },
  {
    "word": "determination",
    "pos": "n.",
    "cn_def": "決心",
    "en_def": "the quality of continuing to try even when it is difficult",
    "sentence": "A: How did Mr. Chen manage to build such a large company after starting with only one small shop and very little money? B: He did it through hard work and strong {{BLANK}}, because he never gave up when banks refused to lend him money and he kept making his products better every year.",
    "cn": "A：陳先生只從一家小店和很少的錢起家，是怎麼建立起這麼大的公司的？ B：他靠的是努力和堅強的【決心】，因為銀行拒絕借錢給他時，他從不放棄，而且每年都持續讓產品變得更好。"
  },
  {
    "word": "determined",
    "pos": "adj.",
    "cn_def": "下定決心的；堅決的",
    "en_def": "having made a firm decision to do something",
    "sentence": "A: Why is Amy staying so late at the office every evening this week when her project is not due until next month? B: She is {{BLANK}} to finish the report early because she wants to take a long vacation in Japan with her family, and she does not want any work to interrupt her trip.",
    "cn": "A：Amy的專案下個月才到期，為什麼她這週每天晚上都待在辦公室到那麼晚？ B：她【下定決心】要提早完成報告，因為她想和家人去日本度個長假，而且不想讓任何工作打擾她的旅行。"
  },
  {
    "word": "persevere",
    "pos": "v.",
    "cn_def": "堅持不懈",
    "en_def": "to keep trying to do something difficult",
    "sentence": "A: I have been studying for the accounting exam for six months, but I failed the practice test again yesterday, so should I just stop? B: You should {{BLANK}} with your studies, because many people fail several practice tests before they pass, and you can join a study group to help you understand the hardest parts.",
    "cn": "A：我準備會計考試已經六個月了，但昨天模擬考又沒過，我是不是乾脆放棄算了？ B：你應該【堅持】讀下去，因為很多人在通過之前都沒過好幾次模擬考，而且你可以參加讀書會，幫助你理解最難的部分。"
  },
  {
    "word": "perseverance",
    "pos": "n.",
    "cn_def": "毅力；堅持不懈",
    "en_def": "the quality of continuing to try despite difficulties",
    "sentence": "A: How did your team finally solve the software problem that had been causing errors in the online payment system for weeks? B: It took a lot of {{BLANK}}, because the engineers checked thousands of lines of code day and night, but they finally found the small mistake and fixed it before the holiday sale began.",
    "cn": "A：你們團隊最後是怎麼解決那個讓線上付款系統出錯好幾週的軟體問題的？ B：這需要很大的【毅力】，因為工程師日夜檢查了數千行程式碼，但他們終於在節日特賣開始前找到那個小錯誤並修好了。"
  },
  {
    "word": "goal",
    "pos": "n.",
    "cn_def": "目標",
    "en_def": "something you hope to achieve",
    "sentence": "A: What does the new manager want our customer service department to focus on during the next six months? B: Her main {{BLANK}} is to answer every customer email within twenty-four hours, so she plans to hire more staff and create a list of standard replies for the most common questions.",
    "cn": "A：新經理希望我們客服部在接下來六個月專注於什麼？ B：她的主要【目標】是在二十四小時內回覆每封顧客郵件，所以她打算多雇一些員工，並為最常見的問題建立一份標準回覆清單。"
  },
  {
    "word": "target",
    "pos": "n.",
    "cn_def": "目標；指標",
    "en_def": "a result or number you try to reach",
    "sentence": "A: Did the sales team sell enough air conditioners in July to receive the special bonus that the company promised? B: Yes, they reached their monthly {{BLANK}} of five hundred units two days early, mainly because the weather was extremely hot and many families wanted to replace their old machines.",
    "cn": "A：業務團隊七月賣出的冷氣夠多，能拿到公司承諾的特別獎金嗎？ B：可以，他們提前兩天達到每月五百台的【目標】，主要是因為天氣非常炎熱，很多家庭想換掉舊機器。"
  },
  {
    "word": "victory",
    "pos": "n.",
    "cn_def": "勝利",
    "en_def": "success in a game, competition, or fight",
    "sentence": "A: Why is the whole office so happy today, and why did the boss order lunch for everyone in the legal department? B: Our lawyers won a long and difficult court case against a large competitor, and the boss called it an important {{BLANK}} that will protect our product designs for many years.",
    "cn": "A：為什麼今天整個辦公室這麼開心？老闆為什麼幫法務部每個人訂午餐？ B：我們的律師贏了一場對抗大型競爭對手的漫長而艱難的官司，老闆稱這是一場重要的【勝利】，將保護我們的產品設計很多年。"
  },
  {
    "word": "triumph",
    "pos": "n.",
    "cn_def": "巨大的成功；勝利",
    "en_def": "a great success",
    "sentence": "A: How did the audience react to the new musical that our theater company presented at the city festival last weekend? B: The show was a complete {{BLANK}}, because every ticket sold out within hours, and the audience stood up and clapped for almost ten minutes at the end of each performance.",
    "cn": "A：上週末我們劇團在城市藝術節上演出的新音樂劇，觀眾反應如何？ B：這場表演大【成功】，因為所有門票在幾小時內就賣光，而且每場演出結束時觀眾都起立鼓掌了將近十分鐘。"
  },
  {
    "word": "reward",
    "pos": "n.",
    "cn_def": "獎勵；回報",
    "en_def": "something given to thank someone for good work",
    "sentence": "A: Is the company planning to do anything special for the employees who worked overtime to finish the new hospital project? B: Yes, as a {{BLANK}} for their hard work, the director will give each of them an extra day off and a gift card for a nice restaurant near the office.",
    "cn": "A：公司有打算為那些加班完成新醫院專案的員工做些特別的事嗎？ B：有，作為他們辛勤工作的【獎勵】，主管會給他們每人多一天假，以及一張辦公室附近一家好餐廳的禮券。"
  },
  {
    "word": "fulfill",
    "pos": "v.",
    "cn_def": "實現；履行",
    "en_def": "to do or achieve what was hoped for or promised",
    "sentence": "A: Why did your cousin quit his stable job at the bank and move to a small village in Hualien last spring? B: He wanted to {{BLANK}} his childhood dream of running a small guesthouse near the sea, and now he welcomes tourists from all over the world and teaches them about local culture.",
    "cn": "A：你表哥去年春天為什麼辭掉銀行的穩定工作，搬到花蓮的一個小村莊？ B：他想【實現】他從小在海邊經營一間小民宿的夢想，現在他接待來自世界各地的觀光客，並向他們介紹當地文化。"
  }
];

const MCQS = [
  {
    "q": "Thanks to strong online advertising, the bakery's grand opening attracted over five hundred customers. The owners were pleased that it was so _____.",
    "options": [
      "determined",
      "ambitious",
      "successful",
      "patient"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Winning the national design award was a major _____ for our small studio. The prize money will help us hire two new designers.",
    "options": [
      "achievement",
      "ambition",
      "determination",
      "target"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "To _____ our goal of reducing paper use by half, every department will switch to digital forms. Printers will be removed from most floors next month.",
    "options": [
      "persevere",
      "prosper",
      "thrive",
      "achieve"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The new software helps staff _____ routine tasks in half the usual time. Managers expect it to save the company many working hours each week.",
    "options": [
      "excel",
      "accomplish",
      "thrive",
      "persevere"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Completing the bridge on time despite heavy rain gave the engineers a great sense of _____. The city held a ceremony to thank them.",
    "options": [
      "ambition",
      "prosperity",
      "target",
      "accomplishment"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Applicants must _____ a TOEIC score of at least 800 for the overseas position. Results must be less than two years old.",
    "options": [
      "thrive",
      "attain",
      "prosper",
      "excel"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "The construction team is making steady _____ on the new shopping mall. The building should be ready for its first tenants by next spring.",
    "options": [
      "progress",
      "prosperity",
      "victory",
      "ambition"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The hotel plans to _____ its breakfast menu after guests complained about the limited choices. Fresh fruit and local dishes will be added soon.",
    "options": [
      "persevere",
      "thrive",
      "improve",
      "prosper"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Sales figures show a clear _____ compared with last quarter. The marketing director believes the new social media campaign caused the increase.",
    "options": [
      "improvement",
      "determination",
      "perseverance",
      "ambition"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Employees who complete the management training program will have more chances to _____ within the company. Applications for the program are due by Friday.",
    "options": [
      "attain",
      "accomplish",
      "advance",
      "fulfill"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Many young workers leave the firm because there are few opportunities for career _____. The HR department is now creating a clear promotion path.",
    "options": [
      "prosperity",
      "advancement",
      "triumph",
      "excellence"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Small farms in the valley began to _____ after the new highway made city markets easier to reach. Many families built larger homes.",
    "options": [
      "accomplish",
      "attain",
      "fulfill",
      "prosper"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The mayor hopes the new international airport will bring economic _____ to the region. Thousands of new jobs are expected to be created there.",
    "options": [
      "perseverance",
      "prosperity",
      "accomplishment",
      "determination"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Tomato plants _____ in warm, sunny conditions with regular watering. Our garden center offers free advice on growing vegetables at home.",
    "options": [
      "achieve",
      "attain",
      "accomplish",
      "thrive"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Students who _____ at mathematics may apply for the company's engineering scholarship. The deadline for all applications is the end of March.",
    "options": [
      "attain",
      "achieve",
      "excel",
      "fulfill"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The restaurant received an award for _____ in service from the city tourism board. Its staff were praised for their warm and helpful attitude.",
    "options": [
      "excellence",
      "ambition",
      "determination",
      "perseverance"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The committee thanked the volunteer for her _____ contribution to the community project. She worked every weekend for three years without pay.",
    "options": [
      "ambitious",
      "determined",
      "outstanding",
      "eager"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The company made a _____ recovery after losing money for two years. Profits this year are the highest they have ever been.",
    "options": [
      "remarkable",
      "determined",
      "ambitious",
      "eager"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Her greatest _____ is to become the first female CEO of the company. She is currently studying for an MBA in the evenings.",
    "options": [
      "progress",
      "victory",
      "prosperity",
      "ambition"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The city has announced a very _____ plan to plant one million trees within five years. Residents are invited to help at weekend planting events.",
    "options": [
      "determined",
      "ambitious",
      "successful",
      "diligent"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "With hard work and _____, the young chef opened her own restaurant at the age of twenty-five. It now has three branches across the city.",
    "options": [
      "prosperity",
      "advancement",
      "victory",
      "determination"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The manager is _____ to finish the project before the holiday break. She has asked the whole team to work extra hours this week.",
    "options": [
      "remarkable",
      "determined",
      "successful",
      "outstanding"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Even when sales were slow, the founders chose to _____ and kept developing their product. Their patience finally paid off last year.",
    "options": [
      "persevere",
      "attain",
      "accomplish",
      "fulfill"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Learning a new language requires patience and _____. Our evening classes help adult learners practice speaking a little bit every day.",
    "options": [
      "prosperity",
      "victory",
      "perseverance",
      "advancement"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The team set a _____ of signing fifty new clients before the end of the year. So far, they have signed thirty-two of them.",
    "options": [
      "goal",
      "triumph",
      "reward",
      "victory"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "The factory failed to meet its production _____ because of a shortage of parts. Managers expect output to return to normal next month.",
    "options": [
      "triumph",
      "reward",
      "target",
      "victory"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The local basketball team celebrated a narrow _____ over their rivals last night. The final score of the exciting game was 78 to 77.",
    "options": [
      "reward",
      "victory",
      "ambition",
      "progress"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The new smartphone was a complete _____ for the electronics company. It sold two million units in its very first month.",
    "options": [
      "ambition",
      "target",
      "perseverance",
      "triumph"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "As a _____ for their excellent work, all staff will receive a bonus in December. The director announced the news at the year-end party.",
    "options": [
      "target",
      "reward",
      "goal",
      "ambition"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The company was unable to _____ the large order because its warehouse was damaged in the storm. The client has agreed to wait two weeks.",
    "options": [
      "thrive",
      "prosper",
      "excel",
      "fulfill"
    ],
    "answer": 3,
    "vocabIndex": 30
  }
];

const LOOKUP = {
  "successful": {
    "pos": "adj.",
    "en_def": "having the result you wanted",
    "cn_def": "成功的"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you have done after a lot of effort",
    "cn_def": "成就；成績"
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to succeed in getting a result by working hard",
    "cn_def": "達成；實現"
  },
  "accomplish": {
    "pos": "v.",
    "en_def": "to finish something successfully",
    "cn_def": "完成；做成"
  },
  "accomplishment": {
    "pos": "n.",
    "en_def": "something successful that you have done",
    "cn_def": "成就；完成的事"
  },
  "attain": {
    "pos": "v.",
    "en_def": "to reach or get something, usually after effort",
    "cn_def": "達到；獲得"
  },
  "attainment": {
    "pos": "n.",
    "en_def": "the act of reaching a goal or level, especially in education",
    "cn_def": "達成；（教育）程度"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward finishing or improving something",
    "cn_def": "進展；進步"
  },
  "improve": {
    "pos": "v.",
    "en_def": "to make something better",
    "cn_def": "改善；改進"
  },
  "improvement": {
    "pos": "n.",
    "en_def": "a change that makes something better",
    "cn_def": "改善；進步"
  },
  "advance": {
    "pos": "v.",
    "en_def": "to move forward or get a higher position",
    "cn_def": "晉升；前進"
  },
  "advancement": {
    "pos": "n.",
    "en_def": "moving to a higher position at work; development",
    "cn_def": "晉升；發展"
  },
  "prosper": {
    "pos": "v.",
    "en_def": "to be successful, especially by making money",
    "cn_def": "繁榮；興旺"
  },
  "prosperity": {
    "pos": "n.",
    "en_def": "the state of being successful and having money",
    "cn_def": "繁榮；興盛"
  },
  "thrive": {
    "pos": "v.",
    "en_def": "to grow or develop very well",
    "cn_def": "蓬勃發展；茁壯"
  },
  "excel": {
    "pos": "v.",
    "en_def": "to be very good at something",
    "cn_def": "擅長；表現優異"
  },
  "excellence": {
    "pos": "n.",
    "en_def": "the quality of being extremely good",
    "cn_def": "卓越；優秀"
  },
  "outstanding": {
    "pos": "adj.",
    "en_def": "extremely good; much better than others",
    "cn_def": "傑出的；出色的"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual and surprising in a way that deserves attention",
    "cn_def": "非凡的；值得注意的"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to achieve something",
    "cn_def": "抱負；雄心"
  },
  "ambitious": {
    "pos": "adj.",
    "en_def": "having a strong wish to succeed; needing a lot of effort",
    "cn_def": "有雄心的；野心勃勃的"
  },
  "determination": {
    "pos": "n.",
    "en_def": "the quality of continuing to try even when it is difficult",
    "cn_def": "決心"
  },
  "determined": {
    "pos": "adj.",
    "en_def": "having made a firm decision to do something",
    "cn_def": "下定決心的；堅決的"
  },
  "persevere": {
    "pos": "v.",
    "en_def": "to keep trying to do something difficult",
    "cn_def": "堅持不懈"
  },
  "perseverance": {
    "pos": "n.",
    "en_def": "the quality of continuing to try despite difficulties",
    "cn_def": "毅力；堅持不懈"
  },
  "goal": {
    "pos": "n.",
    "en_def": "something you hope to achieve",
    "cn_def": "目標"
  },
  "target": {
    "pos": "n.",
    "en_def": "a result or number you try to reach",
    "cn_def": "目標；指標"
  },
  "victory": {
    "pos": "n.",
    "en_def": "success in a game, competition, or fight",
    "cn_def": "勝利"
  },
  "triumph": {
    "pos": "n.",
    "en_def": "a great success",
    "cn_def": "巨大的成功；勝利"
  },
  "reward": {
    "pos": "n.",
    "en_def": "something given to thank someone for good work",
    "cn_def": "獎勵；回報"
  },
  "fulfill": {
    "pos": "v.",
    "en_def": "to do or achieve what was hoped for or promised",
    "cn_def": "實現；履行"
  }
};

const EXTRA_GLOSSES = {};
