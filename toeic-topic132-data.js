// Topic 132 Quiz Data: Failed 失敗
// Source word list: https://www.examword.com/group-topic/failed — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T132 - Failed 失敗",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fail",
    "pos": "v.",
    "cn_def": "失敗；未能",
    "en_def": "to not succeed in doing something",
    "sentence": "A: Why does the marketing team look so worried this afternoon, and why did the director cancel the lunch meeting with the new clients? B: They think the online advertising campaign may {{BLANK}} because sales have not gone up at all in the last three weeks, so they are working hard on a new plan before Friday.",
    "cn": "A：為什麼行銷團隊今天下午看起來這麼擔心，而且主任為什麼取消了和新客戶的午餐會議？ B：他們認為網路廣告活動可能會【失敗】，因為過去三週銷售量完全沒有增加，所以他們正在努力在星期五之前想出新的計畫。"
  },
  {
    "word": "failure",
    "pos": "n.",
    "cn_def": "失敗；故障",
    "en_def": "a lack of success; a machine or system stopping working",
    "sentence": "A: Did the factory finish the large order for the hotel chain last night, or are the workers still waiting for the missing parts from the supplier? B: Unfortunately, a power {{BLANK}} stopped all the machines for six hours, so the night shift could not finish, and we have asked the hotel to give us two more days.",
    "cn": "A：工廠昨晚有完成連鎖飯店的大訂單嗎？還是工人們還在等供應商缺少的零件？ B：很不幸，一次電力【故障】讓所有機器停擺了六個小時，所以夜班無法完成，我們已經請飯店再給我們兩天。"
  },
  {
    "word": "unsuccessful",
    "pos": "adj.",
    "cn_def": "不成功的；失敗的",
    "en_def": "not getting the result you wanted",
    "sentence": "A: How did your interview for the manager position at the bank go last week, and have you heard anything from the human resources department yet? B: Sadly, my application was {{BLANK}} because they chose someone with more experience, but the interviewer said I should apply again next year when another position opens.",
    "cn": "A：你上週在銀行應徵經理職位的面試結果如何？你有收到人資部門的任何消息嗎？ B：很遺憾，我的申請【沒有成功】，因為他們選了一位經驗更豐富的人，不過面試官說明年有其他職缺時我應該再申請一次。"
  },
  {
    "word": "defeat",
    "pos": "n.",
    "cn_def": "失敗；挫敗",
    "en_def": "the fact of losing a game, fight or competition",
    "sentence": "A: Why is everyone in the sales department so quiet today, and why has the big celebration dinner on Friday night been canceled? B: Our company lost the city contract to a smaller competitor, and the manager took the {{BLANK}} very hard because the whole team spent four months preparing the proposal.",
    "cn": "A：為什麼今天業務部的每個人都這麼安靜，而且星期五晚上的盛大慶功晚宴為什麼取消了？ B：我們公司把市政府的合約輸給了一家規模較小的競爭對手，經理對這次【挫敗】非常難過，因為整個團隊花了四個月準備企劃書。"
  },
  {
    "word": "defeated",
    "pos": "adj.",
    "cn_def": "被擊敗的；感到挫敗的",
    "en_def": "feeling that you have lost and cannot succeed",
    "sentence": "A: How did the young engineers react when the board of directors rejected their design for the new shopping center downtown? B: They felt completely {{BLANK}} at first because they had worked late every night for weeks, but after a short break they started improving the plan with fresh ideas.",
    "cn": "A：董事會否決年輕工程師們為市中心新購物中心設計的方案時，他們有什麼反應？ B：一開始他們覺得完全【被擊垮】了，因為他們連續好幾週每晚都工作到很晚，但短暫休息後，他們就帶著新點子開始改善計畫。"
  },
  {
    "word": "collapse",
    "pos": "v.",
    "cn_def": "倒塌；崩潰；突然失敗",
    "en_def": "to fall down suddenly; to fail suddenly",
    "sentence": "A: Why did the city close the old shopping mall near the train station, and where will all the small shop owners move their businesses? B: Engineers warned that the roof might {{BLANK}} after the heavy snow last winter, so the city is helping the owners find new spaces in the office building across the street.",
    "cn": "A：為什麼市政府關閉了火車站附近的舊購物中心？那些小店老闆會把生意搬到哪裡？ B：工程師警告說，經過去年冬天的大雪後，屋頂可能會【倒塌】，所以市政府正在協助店主們在對街的辦公大樓找新的空間。"
  },
  {
    "word": "flop",
    "pos": "n.",
    "cn_def": "失敗之作；徹底失敗",
    "en_def": "a product, film or plan that is not successful",
    "sentence": "A: Is the new energy drink that our company launched in September selling well in the supermarkets, or should we change the advertising plan? B: To be honest, it has been a complete {{BLANK}} because customers think it is too sweet and too expensive, so the product team wants to stop making it next month.",
    "cn": "A：我們公司九月推出的新能量飲料在超市賣得好嗎？還是我們應該改變廣告計畫？ B：老實說，它完全是個【失敗之作】，因為顧客覺得它太甜又太貴，所以產品團隊想從下個月起停產。"
  },
  {
    "word": "setback",
    "pos": "n.",
    "cn_def": "挫折；阻礙",
    "en_def": "a problem that slows down progress",
    "sentence": "A: Will the new branch office in Kaohsiung still open in March as planned, or do we need to tell our customers about a change? B: We had a small {{BLANK}} when the building company found problems with the electrical system, so the opening will probably be delayed by about three weeks.",
    "cn": "A：高雄的新分公司還會照計畫在三月開幕嗎？還是我們需要通知客戶有變動？ B：建築公司發現電力系統有問題，我們因此遇到了一點小【挫折】，所以開幕可能會延後大約三週。"
  },
  {
    "word": "breakdown",
    "pos": "n.",
    "cn_def": "故障；拋錨；(關係等)破裂",
    "en_def": "a time when a machine or vehicle stops working",
    "sentence": "A: Why did the delivery driver arrive at the restaurant two hours late with the fresh vegetables and meat for tonight's big dinner party? B: His truck had a {{BLANK}} on the highway, and he had to wait a long time for a mechanic, so the chef is now rushing to prepare everything before the guests arrive.",
    "cn": "A：為什麼送貨司機晚了兩個小時才把今晚大型晚宴要用的新鮮蔬菜和肉送到餐廳？ B：他的卡車在高速公路上【拋錨】了，他等了很久才等到技師，所以主廚現在正趕著在客人到達前準備好一切。"
  },
  {
    "word": "misstep",
    "pos": "n.",
    "cn_def": "失誤；失策",
    "en_def": "a wrong action or bad decision",
    "sentence": "A: Why did the new manager apologize to the whole team during the meeting this morning, and what exactly did he do wrong last week? B: He made a {{BLANK}} by sending the confidential salary report to all employees by accident, but he quickly explained the situation and promised to be more careful.",
    "cn": "A：為什麼新經理今天早上在會議中向整個團隊道歉？他上週到底做錯了什麼？ B：他不小心把機密的薪資報告寄給了全體員工，犯了一個【失誤】，但他很快解釋了情況，並承諾以後會更小心。"
  },
  {
    "word": "mistake",
    "pos": "n.",
    "cn_def": "錯誤",
    "en_def": "something that is wrong or not correct",
    "sentence": "A: Why did the customer call the front desk three times this morning, and is she still angry about her hotel bill? B: The receptionist made a {{BLANK}} and charged her for two nights instead of one, but we have already fixed the bill and offered her a free breakfast for the trouble.",
    "cn": "A：為什麼那位顧客今天早上打了三次電話到櫃台？她還在為飯店帳單生氣嗎？ B：接待員犯了一個【錯誤】，向她收了兩晚而不是一晚的費用，不過我們已經更正了帳單，並提供免費早餐作為補償。"
  },
  {
    "word": "error",
    "pos": "n.",
    "cn_def": "錯誤；差錯",
    "en_def": "a mistake, especially in a system, number or calculation",
    "sentence": "A: Why can't the staff in the accounting department log in to the new computer system this morning, and when will it be working again? B: The technician says a software {{BLANK}} happened during last night's update, so he is fixing it now and expects everything to be ready before lunch.",
    "cn": "A：為什麼會計部門的員工今天早上無法登入新的電腦系統？什麼時候才能恢復正常？ B：技術人員說昨晚更新時發生了軟體【錯誤】，所以他現在正在修理，預計午餐前一切都會恢復。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "故障；缺陷；過錯",
    "en_def": "a problem in a machine or system that stops it working well",
    "sentence": "A: Why are the passengers at gate twelve still waiting, and has the airline said when the flight to Tokyo will finally leave? B: The pilots found an electrical {{BLANK}} in the plane during the final safety check, so the engineers are repairing it, and the airline is giving everyone free meal coupons.",
    "cn": "A：為什麼十二號登機門的乘客還在等？航空公司有說飛往東京的班機什麼時候才會起飛嗎？ B：機師在最後的安全檢查時發現飛機有電力【故障】，所以工程師正在修理，航空公司也發給每個人免費餐券。"
  },
  {
    "word": "abort",
    "pos": "v.",
    "cn_def": "中止；放棄(計畫等)",
    "en_def": "to stop something before it is finished, usually because of a problem",
    "sentence": "A: Why did the technology company stop the launch of its new satellite yesterday afternoon when thousands of people were watching online? B: The engineers decided to {{BLANK}} the launch only ten seconds before takeoff because a sensor showed a problem with the fuel system, and they will try again next week.",
    "cn": "A：為什麼那家科技公司昨天下午在數千人線上觀看時停止了新衛星的發射？ B：工程師在起飛前僅十秒決定【中止】發射，因為一個感應器顯示燃料系統有問題，他們下週會再試一次。"
  },
  {
    "word": "fall apart",
    "pos": "v.phr.",
    "cn_def": "瓦解；崩潰；散架",
    "en_def": "to break into pieces; to stop working or existing",
    "sentence": "A: What happened to the business partnership between the two restaurant owners who opened that popular café downtown last year? B: Their partnership started to {{BLANK}} when they argued about money and the menu, so one of them sold his share and moved to another city to start a bakery.",
    "cn": "A：去年在市中心開了那家熱門咖啡館的兩位餐廳老闆，他們的合夥關係後來怎麼了？ B：他們為了錢和菜單爭吵後，合夥關係就開始【瓦解】，所以其中一人賣掉了股份，搬到另一個城市開麵包店。"
  },
  {
    "word": "give up",
    "pos": "v.phr.",
    "cn_def": "放棄",
    "en_def": "to stop trying to do something",
    "sentence": "A: Is your sister still studying for the accounting exam while working full-time at the bank, or has she decided to wait until next year? B: She was very tired and almost wanted to {{BLANK}}, but her manager offered her a flexible schedule, so now she studies every morning before work.",
    "cn": "A：你姊姊還一邊在銀行全職工作、一邊準備會計考試嗎？還是她決定等到明年？ B：她非常累，差點想【放棄】，但她的經理給了她彈性的上班時間，所以現在她每天上班前早上念書。"
  },
  {
    "word": "lose",
    "pos": "v.",
    "cn_def": "失去；輸掉",
    "en_def": "to stop having something; to not win",
    "sentence": "A: Why does the sales director want to meet with the customer service team immediately after lunch today? B: She is worried that we will {{BLANK}} our biggest customer because their orders have arrived late three times this month, so she wants a better delivery plan before she calls them.",
    "cn": "A：為什麼業務總監今天想在午餐後馬上和客服團隊開會？ B：她擔心我們會【失去】最大的客戶，因為他們的訂單這個月已經遲到三次了，所以她想在打電話給他們之前先擬好更好的送貨計畫。"
  },
  {
    "word": "miss",
    "pos": "v.",
    "cn_def": "錯過；未趕上",
    "en_def": "to be too late for something, or to not hit or catch it",
    "sentence": "A: Why are you leaving the office so early today when we still have so many reports to finish before the end of the month? B: I have to catch the five o'clock train to Taichung for a client meeting tomorrow morning, and if I {{BLANK}} it, the next one does not leave until nine tonight.",
    "cn": "A：我們在月底前還有這麼多報告要完成，你今天為什麼這麼早離開辦公室？ B：我必須趕上五點往台中的火車，明天早上要和客戶開會，如果我【錯過】這班，下一班要到今晚九點才開。"
  },
  {
    "word": "botched",
    "pos": "adj.",
    "cn_def": "搞砸的；拙劣的",
    "en_def": "done badly or carelessly",
    "sentence": "A: Why is the restaurant on the corner closed this week, and when will customers be able to eat there again? B: The owner hired a cheap company for the kitchen repairs, but it was a {{BLANK}} job with leaking pipes everywhere, so another team is fixing everything and they hope to reopen next Monday.",
    "cn": "A：轉角那家餐廳為什麼這週停業？顧客什麼時候才能再去用餐？ B：老闆請了一家便宜的公司來修廚房，結果是個【搞砸的】工程，到處都是漏水的管線，所以另一組人正在修理一切，他們希望下週一重新開幕。"
  },
  {
    "word": "fruitless",
    "pos": "adj.",
    "cn_def": "毫無成果的；徒勞的",
    "en_def": "producing no useful result",
    "sentence": "A: Did the purchasing manager find a cheaper supplier for our office paper and printer ink during her business trip to Singapore? B: No, her search was {{BLANK}} because every company she visited asked for higher prices than our current supplier, so we will keep our old contract for another year.",
    "cn": "A：採購經理到新加坡出差時，有找到更便宜的辦公用紙和印表機墨水供應商嗎？ B：沒有，她的尋找【毫無成果】，因為她拜訪的每家公司開價都比我們現在的供應商高，所以我們會再續約舊合約一年。"
  },
  {
    "word": "ineffective",
    "pos": "adj.",
    "cn_def": "無效的；效果不佳的",
    "en_def": "not working well or not producing the result you want",
    "sentence": "A: Why did the city government decide to change the parking rules downtown again after only two months? B: The old rules were {{BLANK}} because many drivers still parked on the sidewalks, and shop owners complained that customers could not walk easily, so officials will now add more parking officers and higher fines.",
    "cn": "A：為什麼市政府才過兩個月就決定再次修改市中心的停車規定？ B：舊規定【沒有效果】，因為很多駕駛還是把車停在人行道上，店家也抱怨顧客無法順利行走，所以官員們現在會增加更多停車稽查員並提高罰款。"
  },
  {
    "word": "futile",
    "pos": "adj.",
    "cn_def": "徒勞的；無用的",
    "en_def": "having no chance of success; useless",
    "sentence": "A: Should we keep calling the airline to ask about our missing luggage, or should we just go to the hotel and wait for news? B: I think more calls are {{BLANK}} because the agent said the bags are still in Hong Kong, so let's check in, rest, and buy a few things we need for tomorrow's meeting.",
    "cn": "A：我們應該繼續打電話給航空公司詢問遺失的行李，還是直接去飯店等消息？ B：我覺得再打電話也是【徒勞無功】，因為客服人員說行李還在香港，所以我們先入住、休息，再買一些明天開會需要的東西吧。"
  },
  {
    "word": "ruin",
    "pos": "v.",
    "cn_def": "毀壞；毀掉",
    "en_def": "to damage something so badly that it is spoiled",
    "sentence": "A: Why does the event manager look so nervous about the outdoor wedding party at the garden hotel this Saturday afternoon? B: The weather report says heavy rain may {{BLANK}} the whole celebration, so she is calling the hotel to ask if they can move the dinner and music into the big ballroom.",
    "cn": "A：為什麼活動經理對這週六下午在花園飯店舉行的戶外婚宴看起來這麼緊張？ B：氣象報告說大雨可能會【毀了】整個慶祝活動，所以她正打電話問飯店能不能把晚宴和音樂移到大宴會廳。"
  },
  {
    "word": "derail",
    "pos": "v.",
    "cn_def": "使脫軌；使(計畫)受挫",
    "en_def": "to stop a plan or process from continuing as planned",
    "sentence": "A: Why is the project manager so worried about the new factory, and does she think it will still be finished by the end of the year? B: She fears that the shortage of steel could {{BLANK}} the whole project, so she is looking for another supplier and asking the workers to focus on other tasks for now.",
    "cn": "A：為什麼專案經理對新工廠這麼擔心？她覺得年底前還能完工嗎？ B：她擔心鋼材短缺可能會讓整個專案【脫軌】，所以她正在找其他供應商，並請工人們暫時專注於其他工作。"
  },
  {
    "word": "disaster",
    "pos": "n.",
    "cn_def": "災難；徹底的失敗",
    "en_def": "something very bad that causes great damage or a complete failure",
    "sentence": "A: How was the company's first outdoor sales event at the city park last Saturday, and did many new customers sign up? B: It was a total {{BLANK}} because a storm knocked down our tents and the sound system stopped working, so we have decided to hold the next event inside the convention center.",
    "cn": "A：公司上週六在市立公園舉辦的第一場戶外促銷活動如何？有很多新客戶登記嗎？ B：那完全是一場【災難】，因為暴風雨吹倒了我們的帳篷，音響系統也壞了，所以我們決定下次活動改在會議中心室內舉行。"
  },
  {
    "word": "downfall",
    "pos": "n.",
    "cn_def": "垮台；沒落",
    "en_def": "the loss of power, money or success",
    "sentence": "A: Why did the famous electronics company close all of its stores last year after being so successful for many decades? B: Many experts say its {{BLANK}} came from ignoring smartphones, because the managers kept selling old products while younger customers moved to newer brands with better technology.",
    "cn": "A：為什麼那家著名的電子公司在成功了幾十年之後，去年關閉了所有門市？ B：許多專家說它的【沒落】是因為忽視了智慧型手機，經理們一直在賣舊產品，而年輕顧客則轉向擁有更好技術的新品牌。"
  },
  {
    "word": "letdown",
    "pos": "n.",
    "cn_def": "令人失望的事",
    "en_def": "something that is not as good as you hoped",
    "sentence": "A: Did you enjoy the expensive dinner at the new French restaurant that the marketing director recommended to everyone in the office? B: To be honest, it was a big {{BLANK}} because the food was cold and the service was very slow, so I don't think I will take any of our clients there.",
    "cn": "A：你喜歡行銷總監推薦給辦公室所有人的那家新法式餐廳的昂貴晚餐嗎？ B：老實說，那真是一大【令人失望的事】，因為食物是冷的，服務又非常慢，所以我想我不會帶任何客戶去那裡。"
  },
  {
    "word": "washout",
    "pos": "n.",
    "cn_def": "(因雨)泡湯的活動；徹底失敗",
    "en_def": "an event that fails, often because of rain",
    "sentence": "A: How was the company's summer barbecue at the beach last Friday, and did the new employees have a chance to meet everyone? B: Unfortunately, it was a complete {{BLANK}} because it rained all afternoon, so most people went home early, and the manager plans to hold another party next month.",
    "cn": "A：公司上週五在海灘舉辦的夏季烤肉活動如何？新員工有機會認識大家嗎？ B：很遺憾，那完全是一場【泡湯的活動】，因為整個下午都在下雨，大部分人提早回家，所以經理打算下個月再辦一次派對。"
  }
];

const MCQS = [
  {
    "q": "Our printers often break down during busy weeks. If the old machine continues to _____, we will buy a new one.",
    "options": [
      "fail",
      "ruin",
      "derail",
      "abort"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The engine _____ caused a long delay at the airport. Passengers waited four hours before another plane arrived.",
    "options": [
      "letdown",
      "downfall",
      "failure",
      "washout"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Unfortunately, your application for the sales position was _____. We have chosen a candidate with more experience in the field.",
    "options": [
      "botched",
      "unsuccessful",
      "futile",
      "defeated"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The team accepted its _____ in the final match with good grace. The players thanked the fans for their support.",
    "options": [
      "flop",
      "misstep",
      "washout",
      "defeat"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The candidate looked tired and _____ after losing the election. However, he promised to keep working for the community.",
    "options": [
      "defeated",
      "botched",
      "futile",
      "fruitless"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Heavy snow caused the roof of the old warehouse to _____. Luckily, no workers were inside the building at the time.",
    "options": [
      "derail",
      "abort",
      "collapse",
      "miss"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The movie cost over 100 million dollars to make. Sadly, it was a box-office _____ and lost a lot of money.",
    "options": [
      "fault",
      "flop",
      "error",
      "breakdown"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The factory fire was a serious _____ for the company. However, production should return to normal within two months.",
    "options": [
      "fault",
      "error",
      "misstep",
      "setback"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Our delivery van had a _____ on the highway this morning. As a result, several customers received their orders late.",
    "options": [
      "breakdown",
      "downfall",
      "letdown",
      "washout"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Launching the product without testing it was a costly _____. The company now plans to check every item more carefully.",
    "options": [
      "breakdown",
      "washout",
      "misstep",
      "downfall"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "I'm sorry, but I think there is a _____ on this bill. We only ordered two coffees, not three.",
    "options": [
      "setback",
      "mistake",
      "flop",
      "defeat"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The bank corrected the _____ in my account after I called them. They had charged me twice for the same purchase.",
    "options": [
      "flop",
      "downfall",
      "washout",
      "error"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The technician found an electrical _____ in the elevator. It will remain closed until the repairs are finished tomorrow.",
    "options": [
      "fault",
      "defeat",
      "letdown",
      "washout"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The pilot had to _____ the landing because of strong winds. The plane circled the airport and landed safely twenty minutes later.",
    "options": [
      "ruin",
      "lose",
      "abort",
      "derail"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The old sofa in the waiting room is starting to _____. We should replace it before the clients visit next week.",
    "options": [
      "give up",
      "fall apart",
      "lose",
      "abort"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Learning a new computer program can be difficult at first. Don't _____ if you make a few mistakes during the first week.",
    "options": [
      "fall apart",
      "collapse",
      "derail",
      "give up"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "If we don't lower our prices, we may _____ customers to our competitors. The manager wants a new plan by Friday.",
    "options": [
      "lose",
      "miss",
      "fail",
      "ruin"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Please leave the office early enough to catch your train. If you _____ the six o'clock train, the next one is at nine.",
    "options": [
      "lose",
      "abort",
      "miss",
      "fail"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The customer complained about the _____ repair job on her car. The mechanic agreed to fix the problem again for free.",
    "options": [
      "futile",
      "botched",
      "fruitless",
      "defeated"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "After weeks of _____ negotiations, the two companies finally ended their talks. Neither side would agree to lower its price.",
    "options": [
      "defeated",
      "botched",
      "careless",
      "fruitless"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "This cough medicine was completely _____ for me. The doctor suggested a stronger one that works much faster.",
    "options": [
      "ineffective",
      "defeated",
      "botched",
      "fruitless"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "It is _____ to argue with the manager once she has made a decision. She never changes her mind about important matters.",
    "options": [
      "botched",
      "defeated",
      "futile",
      "unsuccessful"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Spilling coffee on the contract could _____ the important documents. Please keep all drinks away from the meeting table.",
    "options": [
      "derail",
      "ruin",
      "abort",
      "miss"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The workers' strike could _____ the company's plans to open three new stores this year. Managers are meeting the union today.",
    "options": [
      "collapse",
      "miss",
      "lose",
      "derail"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The earthquake was the worst natural _____ in the country's history. Many companies donated money to help the victims.",
    "options": [
      "disaster",
      "fault",
      "flop",
      "misstep"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Poor management led to the _____ of the once-popular restaurant chain. All of its branches closed within two years.",
    "options": [
      "setback",
      "letdown",
      "downfall",
      "mistake"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Many fans found the singer's short concert a real _____. They had expected her to perform for at least two hours.",
    "options": [
      "fault",
      "letdown",
      "error",
      "breakdown"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Heavy rain turned the company picnic into a complete _____. Most employees went home before lunch was served.",
    "options": [
      "fault",
      "error",
      "misstep",
      "washout"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Many new restaurants _____ within their first year because of high rent. Good planning can help owners avoid this problem.",
    "options": [
      "fail",
      "ruin",
      "miss",
      "abort"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Our manager told us never to _____ on difficult customers. Patience and good service can often change their minds.",
    "options": [
      "fall apart",
      "collapse",
      "give up",
      "lose"
    ],
    "answer": 2,
    "vocabIndex": 15
  }
];

const LOOKUP = {
  "fail": {
    "pos": "v.",
    "en_def": "to not succeed in doing something",
    "cn_def": "失敗；未能"
  },
  "failure": {
    "pos": "n.",
    "en_def": "a lack of success; a machine or system stopping working",
    "cn_def": "失敗；故障"
  },
  "unsuccessful": {
    "pos": "adj.",
    "en_def": "not getting the result you wanted",
    "cn_def": "不成功的；失敗的"
  },
  "defeat": {
    "pos": "n.",
    "en_def": "the fact of losing a game, fight or competition",
    "cn_def": "失敗；挫敗"
  },
  "defeated": {
    "pos": "adj.",
    "en_def": "feeling that you have lost and cannot succeed",
    "cn_def": "被擊敗的；感到挫敗的"
  },
  "collapse": {
    "pos": "v.",
    "en_def": "to fall down suddenly; to fail suddenly",
    "cn_def": "倒塌；崩潰；突然失敗"
  },
  "flop": {
    "pos": "n.",
    "en_def": "a product, film or plan that is not successful",
    "cn_def": "失敗之作；徹底失敗"
  },
  "setback": {
    "pos": "n.",
    "en_def": "a problem that slows down progress",
    "cn_def": "挫折；阻礙"
  },
  "breakdown": {
    "pos": "n.",
    "en_def": "a time when a machine or vehicle stops working",
    "cn_def": "故障；拋錨；(關係等)破裂"
  },
  "misstep": {
    "pos": "n.",
    "en_def": "a wrong action or bad decision",
    "cn_def": "失誤；失策"
  },
  "mistake": {
    "pos": "n.",
    "en_def": "something that is wrong or not correct",
    "cn_def": "錯誤"
  },
  "error": {
    "pos": "n.",
    "en_def": "a mistake, especially in a system, number or calculation",
    "cn_def": "錯誤；差錯"
  },
  "fault": {
    "pos": "n.",
    "en_def": "a problem in a machine or system that stops it working well",
    "cn_def": "故障；缺陷；過錯"
  },
  "abort": {
    "pos": "v.",
    "en_def": "to stop something before it is finished, usually because of a problem",
    "cn_def": "中止；放棄(計畫等)"
  },
  "fall apart": {
    "pos": "v.phr.",
    "en_def": "to break into pieces; to stop working or existing",
    "cn_def": "瓦解；崩潰；散架"
  },
  "give up": {
    "pos": "v.phr.",
    "en_def": "to stop trying to do something",
    "cn_def": "放棄"
  },
  "lose": {
    "pos": "v.",
    "en_def": "to stop having something; to not win",
    "cn_def": "失去；輸掉"
  },
  "miss": {
    "pos": "v.",
    "en_def": "to be too late for something, or to not hit or catch it",
    "cn_def": "錯過；未趕上"
  },
  "botched": {
    "pos": "adj.",
    "en_def": "done badly or carelessly",
    "cn_def": "搞砸的；拙劣的"
  },
  "fruitless": {
    "pos": "adj.",
    "en_def": "producing no useful result",
    "cn_def": "毫無成果的；徒勞的"
  },
  "ineffective": {
    "pos": "adj.",
    "en_def": "not working well or not producing the result you want",
    "cn_def": "無效的；效果不佳的"
  },
  "futile": {
    "pos": "adj.",
    "en_def": "having no chance of success; useless",
    "cn_def": "徒勞的；無用的"
  },
  "ruin": {
    "pos": "v.",
    "en_def": "to damage something so badly that it is spoiled",
    "cn_def": "毀壞；毀掉"
  },
  "derail": {
    "pos": "v.",
    "en_def": "to stop a plan or process from continuing as planned",
    "cn_def": "使脫軌；使(計畫)受挫"
  },
  "disaster": {
    "pos": "n.",
    "en_def": "something very bad that causes great damage or a complete failure",
    "cn_def": "災難；徹底的失敗"
  },
  "downfall": {
    "pos": "n.",
    "en_def": "the loss of power, money or success",
    "cn_def": "垮台；沒落"
  },
  "letdown": {
    "pos": "n.",
    "en_def": "something that is not as good as you hoped",
    "cn_def": "令人失望的事"
  },
  "washout": {
    "pos": "n.",
    "en_def": "an event that fails, often because of rain",
    "cn_def": "(因雨)泡湯的活動；徹底失敗"
  }
};

const EXTRA_GLOSSES = {};
