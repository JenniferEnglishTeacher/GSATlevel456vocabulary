// Topic 224 Quiz Data: Lost 遺失；迷路
// Source word list: https://www.examword.com/group-topic/lost — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T224 - Lost 遺失；迷路",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "missing",
    "pos": "adj.",
    "cn_def": "遺失的；失蹤的",
    "en_def": "not in the expected place and cannot be found",
    "sentence": "A: The courier delivered twelve boxes of printer paper this morning, but the invoice says fifteen, so what should we do before we sign the form? B: Please count everything again carefully, and if three boxes are still {{BLANK}}, call the supplier right away and ask them to send the rest tomorrow.",
    "cn": "A：快遞員今天早上送來十二箱影印紙，但發票上寫十五箱，我們在簽單前該怎麼做？ B：請再仔細清點一次，如果還是有三箱【不見了】，就馬上打電話給供應商，請他們明天把剩下的送來。"
  },
  {
    "word": "gone",
    "pos": "adj.",
    "cn_def": "不見了的；用完的",
    "en_def": "no longer present; used up or taken away",
    "sentence": "A: I left my umbrella next to the reception desk before the client meeting started, but when I came back an hour later, it was completely {{BLANK}}, so where should I look? B: Ask the security guard downstairs, because the cleaners usually take anything left in the lobby to the lost-and-found office.",
    "cn": "A：客戶會議開始前我把雨傘放在接待櫃檯旁，但一小時後回來，它完全【不見了】，我該去哪裡找？ B：去問樓下的警衛，因為清潔人員通常會把留在大廳的東西拿到失物招領處。"
  },
  {
    "word": "misplaced",
    "pos": "adj.",
    "cn_def": "放錯地方的",
    "en_def": "put in the wrong place so that it is hard to find",
    "sentence": "A: Have you seen the signed contract from the Tokyo office, because the manager needs it for the board meeting at three this afternoon? B: I think it is only {{BLANK}}, not lost, since I saw someone file it with last month's reports when we were cleaning the shelves yesterday.",
    "cn": "A：你有看到東京辦公室簽好的合約嗎？經理今天下午三點的董事會需要用。 B：我想它只是【放錯地方】，不是遺失，因為昨天我們整理架子時，我看到有人把它和上個月的報告歸檔在一起。"
  },
  {
    "word": "vanished",
    "pos": "adj.",
    "cn_def": "消失的；不見蹤影的",
    "en_def": "disappeared suddenly and completely",
    "sentence": "A: Why did the sales team look so worried during the morning meeting when they talked about the new shopping center project? B: The main investor's money has {{BLANK}} from the account without any explanation, so the whole project might stop until the bank finishes checking what happened.",
    "cn": "A：早上開會談到新購物中心專案時，業務團隊為什麼看起來那麼擔心？ B：主要投資人的資金毫無解釋地從帳戶中【消失了】，所以在銀行查清楚之前，整個專案可能會暫停。"
  },
  {
    "word": "absent",
    "pos": "adj.",
    "cn_def": "缺席的；不在場的",
    "en_def": "not present at a place, meeting or event",
    "sentence": "A: Several people were not at the safety training session yesterday afternoon, so do we need to schedule another one for them next week? B: Yes, anyone who was {{BLANK}} must attend the Friday session, because the factory manager will not let workers use the new machines without the training certificate.",
    "cn": "A：昨天下午的安全訓練好幾個人沒來，我們需要下週再幫他們安排一場嗎？ B：需要，凡是【缺席】的人都必須參加週五的課程，因為廠長不會讓沒有訓練證書的工人使用新機器。"
  },
  {
    "word": "disoriented",
    "pos": "adj.",
    "cn_def": "迷失方向的；混亂的",
    "en_def": "confused about where you are or which direction to go",
    "sentence": "A: How was your first business trip to Bangkok last week, and did you find the hotel easily after your late flight landed? B: Not really, I felt quite {{BLANK}} after the long flight and the busy streets, so I finally asked a taxi driver to take me there instead of walking.",
    "cn": "A：你上週第一次去曼谷出差怎麼樣？晚班飛機降落後有順利找到飯店嗎？ B：不太順利，長途飛行加上繁忙的街道讓我覺得很【暈頭轉向】，所以最後我請計程車司機載我去，而不是走路。"
  },
  {
    "word": "confused",
    "pos": "adj.",
    "cn_def": "困惑的；搞不清楚的",
    "en_def": "unable to understand something clearly",
    "sentence": "A: Did the new employees understand the online system for booking meeting rooms after you showed them how it works this morning? B: Most of them were still {{BLANK}} about the different colors on the calendar, so I am going to write a simple guide and email it to everyone today.",
    "cn": "A：你今天早上示範之後，新員工了解線上預約會議室的系統了嗎？ B：他們大多數對行事曆上不同的顏色還是很【困惑】，所以我打算寫一份簡單的說明，今天寄給大家。"
  },
  {
    "word": "bewildered",
    "pos": "adj.",
    "cn_def": "不知所措的；困惑的",
    "en_def": "very confused and not sure what to do",
    "sentence": "A: How did the passengers react when the airline suddenly changed the departure gate three times within one hour at the busy airport? B: Many of them looked {{BLANK}} and kept asking the staff for help, so the airline finally sent two extra workers to guide people to the right gate.",
    "cn": "A：航空公司在繁忙的機場一小時內突然更換三次登機門，乘客們有什麼反應？ B：很多人看起來【不知所措】，一直向工作人員求助，所以航空公司最後多派了兩名人員引導大家到正確的登機門。"
  },
  {
    "word": "astray",
    "pos": "adv.",
    "cn_def": "迷路地；誤入歧途地",
    "en_def": "away from the correct path or direction",
    "sentence": "A: The customer says she never received the samples we posted to her office in Kaohsiung two weeks ago, so what do you think happened? B: The package probably went {{BLANK}} because the address label was wet, so let's send another set by courier today and give her the tracking number.",
    "cn": "A：客戶說她從沒收到我們兩週前寄到她高雄辦公室的樣品，你覺得發生了什麼事？ B：包裹大概是因為地址標籤弄濕而【寄丟了】，所以我們今天用快遞再寄一組，並把追蹤號碼給她。"
  },
  {
    "word": "drift",
    "pos": "v.",
    "cn_def": "漂流；漫無目的地移動",
    "en_def": "to move slowly without a clear direction or plan",
    "sentence": "A: Why did the planning meeting last almost three hours yesterday when the agenda only had four short items on it? B: People kept letting the discussion {{BLANK}} to other topics like holiday plans and office parking, so next time I will ask someone to keep track of the time.",
    "cn": "A：昨天的規劃會議議程只有四個簡短項目，為什麼開了將近三小時？ B：大家一直讓討論【偏離】到其他話題，像是假期計畫和辦公室停車，所以下次我會請人負責控制時間。"
  },
  {
    "word": "wander",
    "pos": "v.",
    "cn_def": "閒逛；漫步",
    "en_def": "to walk around slowly without a particular purpose",
    "sentence": "A: We have two free hours before the conference dinner tonight, so do you have any ideas about how to spend the time in this new city? B: Let's {{BLANK}} around the old market near the hotel, because my colleague said there are many small shops selling local tea and handmade gifts.",
    "cn": "A：今晚會議晚宴前我們有兩小時空檔，你對於在這個陌生城市怎麼打發時間有什麼想法嗎？ B：我們去飯店附近的老市場【逛逛】吧，因為我同事說那裡有很多賣當地茶葉和手工禮品的小店。"
  },
  {
    "word": "stray",
    "pos": "v.",
    "cn_def": "偏離；走失",
    "en_def": "to move away from the place or subject where you should be",
    "sentence": "A: The tour group is going to visit the large factory tomorrow, so is there anything important that visitors should remember during the tour? B: Please remind everyone not to {{BLANK}} from the marked walking path, because forklifts move quickly around the warehouse and the area behind the yellow line is dangerous.",
    "cn": "A：參訪團明天要去參觀大型工廠，參觀者有什麼重要事項需要記住嗎？ B：請提醒大家不要【偏離】標示的步道，因為堆高機在倉庫裡移動很快，黃線後方的區域很危險。"
  },
  {
    "word": "mislay",
    "pos": "v.",
    "cn_def": "隨手放丟；一時找不到",
    "en_def": "to put something somewhere and then forget where it is",
    "sentence": "A: The new office keys cost a lot to replace, so how can we make sure staff members take good care of them this year? B: Let's put a key box near the front door, because people often {{BLANK}} their keys on their desks or in meeting rooms when they are busy.",
    "cn": "A：新的辦公室鑰匙換一把要花很多錢，我們今年要怎麼確保員工好好保管？ B：我們在前門附近放一個鑰匙箱吧，因為大家忙碌時常會把鑰匙【隨手亂放】在桌上或會議室裡。"
  },
  {
    "word": "forfeit",
    "pos": "v.",
    "cn_def": "喪失；被沒收",
    "en_def": "to lose something because you broke a rule or did not do something",
    "sentence": "A: I booked the hotel conference room for next Monday, but our client may cancel the meeting, so can we still change the plan easily? B: You need to cancel by Thursday, or we will {{BLANK}} the deposit we paid, which is almost ten thousand dollars according to the booking agreement.",
    "cn": "A：我訂了下週一飯店的會議室，但客戶可能會取消會議，我們還能輕易更改計畫嗎？ B：你必須在週四前取消，否則我們會【被沒收】已付的訂金，根據預約合約那將近一萬元。"
  },
  {
    "word": "surrender",
    "pos": "v.",
    "cn_def": "交出；放棄",
    "en_def": "to give something to someone because you have to",
    "sentence": "A: What should I do with my company laptop and office pass on my last working day before I move to the new branch? B: You must {{BLANK}} both items to the IT department before you leave, and they will give you a form showing that everything was returned in good condition.",
    "cn": "A：我調到新分公司前的最後一個工作天，公司筆電和辦公室通行證該怎麼處理？ B：你離開前必須把這兩樣東西【交給】資訊部，他們會給你一張表格，證明所有物品都完好歸還。"
  },
  {
    "word": "abandon",
    "pos": "v.",
    "cn_def": "放棄；拋棄",
    "en_def": "to stop doing or supporting a plan completely",
    "sentence": "A: I heard the company was planning to open a new café inside the train station, so when will it start serving customers? B: Sadly, management decided to {{BLANK}} the plan after the rent went up twice, so they will look for a cheaper location near the university instead.",
    "cn": "A：我聽說公司打算在火車站裡開一家新咖啡館，什麼時候開始營業？ B：很遺憾，租金漲了兩次之後，管理階層決定【放棄】這個計畫，所以他們會改在大學附近找更便宜的地點。"
  },
  {
    "word": "deprive",
    "pos": "v.",
    "cn_def": "剝奪；使喪失",
    "en_def": "to take something important away from someone",
    "sentence": "A: Why are some employees unhappy about the new rule that moves all meetings to seven o'clock in the morning starting next month? B: They feel the early schedule will {{BLANK}} them of enough sleep, especially workers who live far away and already spend two hours commuting every day.",
    "cn": "A：為什麼有些員工對下個月起所有會議都改到早上七點的新規定不滿？ B：他們覺得這麼早的時間會【剝奪】他們足夠的睡眠，尤其是住得遠、每天已經要通勤兩小時的員工。"
  },
  {
    "word": "loss",
    "pos": "n.",
    "cn_def": "損失；虧損",
    "en_def": "the fact of losing money, a thing or a person",
    "sentence": "A: How did the restaurant chain do last year after it opened five new branches in different cities around the country? B: It reported a large {{BLANK}} of about two million dollars, mainly because the new branches had high rent and not enough customers in the first six months.",
    "cn": "A：那家連鎖餐廳去年在全國不同城市開了五家新分店後，經營得如何？ B：它公布了約兩百萬元的巨額【虧損】，主要是因為新分店租金高，而且前六個月客人不夠多。"
  },
  {
    "word": "casualty",
    "pos": "n.",
    "cn_def": "傷亡者；受害者",
    "en_def": "a person hurt or killed in an accident; something damaged by an event",
    "sentence": "A: Did anyone get hurt when the storage shelves fell over in the warehouse yesterday afternoon during the delivery? B: Luckily there was only one {{BLANK}}, a driver with a small cut on his arm, and the nurse at the clinic said he could go back to work today.",
    "cn": "A：昨天下午送貨時倉庫的儲物架倒下來，有人受傷嗎？ B：幸好只有一位【傷者】，是一名手臂有小割傷的司機，診所的護士說他今天就可以回去上班。"
  },
  {
    "word": "defeat",
    "pos": "n.",
    "cn_def": "失敗；戰敗",
    "en_def": "the fact of losing a game, election or competition",
    "sentence": "A: How did our company basketball team feel after the final game against the bank team in the city tournament on Saturday? B: The players were sad about the {{BLANK}}, but the coach told them they played well and should be proud because it was their first time in the final.",
    "cn": "A：週六市聯賽決賽對上銀行隊之後，我們公司籃球隊的感受如何？ B：球員們對這場【敗仗】很難過，但教練告訴他們打得很好，應該感到驕傲，因為這是他們第一次打進決賽。"
  },
  {
    "word": "failure",
    "pos": "n.",
    "cn_def": "失敗；故障",
    "en_def": "a lack of success; something that does not work",
    "sentence": "A: Why were all the trains on the east line delayed for more than an hour this morning while everyone was trying to get to work? B: There was a power {{BLANK}} at the main station, so the trains could not move until the engineers fixed the electrical problem.",
    "cn": "A：今天早上大家趕著上班時，東線所有列車為什麼延誤超過一小時？ B：總站發生電力【故障】，所以在工程師修好電力問題之前，列車都無法行駛。"
  },
  {
    "word": "shortage",
    "pos": "n.",
    "cn_def": "短缺；不足",
    "en_def": "a situation in which there is not enough of something",
    "sentence": "A: Why has the delivery of our new office chairs been delayed until the end of next month when the supplier promised them this week? B: The factory is facing a {{BLANK}} of skilled workers after many people left during the busy season, so it cannot finish large orders on time.",
    "cn": "A：供應商承諾這週交貨，為什麼我們的新辦公椅延到下個月底才送？ B：旺季期間很多人離職，工廠面臨技術工人【短缺】，所以無法準時完成大筆訂單。"
  },
  {
    "word": "scarcity",
    "pos": "n.",
    "cn_def": "稀少；匱乏",
    "en_def": "the state of being difficult to find or get",
    "sentence": "A: Why did the price of coffee beans go up so much this year that our café had to change its menu prices twice? B: Bad weather in South America caused a {{BLANK}} of good beans, so suppliers raised their prices and many small cafés around the city did the same.",
    "cn": "A：今年咖啡豆為什麼漲那麼多，讓我們咖啡館的菜單價格改了兩次？ B：南美洲的惡劣天氣導致優質咖啡豆【稀缺】，所以供應商漲價，市內許多小咖啡館也跟著漲。"
  },
  {
    "word": "void",
    "pos": "n.",
    "cn_def": "空缺；空虛",
    "en_def": "an empty space or feeling caused by something missing",
    "sentence": "A: How is the marketing team managing since Mr. Chen retired last month after working at the company for almost thirty years? B: His leaving created a {{BLANK}} that is hard to fill, because he knew every client personally, so the manager is training two younger staff members to share his work.",
    "cn": "A：陳先生上個月在公司工作將近三十年後退休，行銷團隊現在運作得如何？ B：他的離開造成了難以填補的【空缺】，因為他認識每一位客戶，所以經理正在訓練兩位年輕員工分擔他的工作。"
  },
  {
    "word": "disappearance",
    "pos": "n.",
    "cn_def": "消失；失蹤",
    "en_def": "the act of no longer being seen or found",
    "sentence": "A: Why did the store manager call a meeting with all the staff after closing time last night instead of letting everyone go home? B: She wanted to discuss the {{BLANK}} of several expensive watches from the display case, and she asked us to check the security cameras before we report it.",
    "cn": "A：店長昨晚打烊後為什麼召集全體員工開會，而不是讓大家回家？ B：她想討論展示櫃裡好幾支名貴手錶【不見】的事，並要我們在報案前先查看監視器。"
  },
  {
    "word": "untraceable",
    "pos": "adj.",
    "cn_def": "無法追查的",
    "en_def": "impossible to find or follow",
    "sentence": "A: Can the bank help me get back the money I sent to that online seller who never shipped the laptop I paid for last week? B: They will try, but the seller used a fake account, so the payment may be {{BLANK}}, and you should also report it to the police as soon as possible.",
    "cn": "A：我上週付錢給那位網路賣家，他一直沒寄筆電，銀行能幫我把錢拿回來嗎？ B：他們會試試看，但賣家用的是假帳戶，所以這筆款項可能【無法追查】，你也應該盡快向警方報案。"
  },
  {
    "word": "irretrievable",
    "pos": "adj.",
    "cn_def": "無法挽回的；無法找回的",
    "en_def": "impossible to get back or make right again",
    "sentence": "A: The computer crashed while I was saving the annual report, so is there any way the IT team can recover the file before the deadline? B: They checked the hard drive this morning, but most of the data is {{BLANK}}, so you will need to rebuild the report from your notes and earlier emails.",
    "cn": "A：我在存年度報告時電腦當機了，資訊團隊有沒有辦法在截止日前救回檔案？ B：他們今天早上檢查過硬碟，但大部分資料都【無法找回】，所以你得根據筆記和之前的電子郵件重做報告。"
  },
  {
    "word": "hopeless",
    "pos": "adj.",
    "cn_def": "無望的；沒希望的",
    "en_def": "having no chance of success or improvement",
    "sentence": "A: Our team has tried three different ways to win back the large customer we lost, so should we keep trying or move on? B: The situation is not {{BLANK}} yet, because their new manager has agreed to meet us next week and listen to our improved offer.",
    "cn": "A：我們團隊已經試了三種方法想挽回流失的大客戶，我們該繼續努力還是放下？ B：情況還不算【沒希望】，因為他們的新經理已同意下週和我們見面，聽聽我們改善後的方案。"
  },
  {
    "word": "helpless",
    "pos": "adj.",
    "cn_def": "無助的；無能為力的",
    "en_def": "unable to do anything to protect or help yourself",
    "sentence": "A: How did you feel when your flight to the trade fair was cancelled and the airline counter had already closed for the night? B: I felt completely {{BLANK}} at first, but a kind hotel worker helped me find another flight early the next morning, so I still arrived on time.",
    "cn": "A：你飛往商展的班機被取消，航空公司櫃檯晚上又已經關了，當時你有什麼感受？ B：一開始我覺得完全【無助】，但一位好心的飯店員工幫我找到隔天一早的另一班飛機，所以我還是準時到了。"
  },
  {
    "word": "directionless",
    "pos": "adj.",
    "cn_def": "沒有方向的；漫無目標的",
    "en_def": "without a clear aim or plan",
    "sentence": "A: Why did the new manager change the way the design team works after only two weeks in the job at our office? B: She felt the team was {{BLANK}} because nobody had set clear goals, so she now holds a short meeting every Monday to decide the week's main tasks.",
    "cn": "A：新經理上任才兩週，為什麼就改變了我們辦公室設計團隊的工作方式？ B：她覺得團隊【缺乏方向】，因為沒有人訂下明確目標，所以她現在每週一開個短會，決定當週的主要任務。"
  },
  {
    "word": "aimless",
    "pos": "adj.",
    "cn_def": "無目的的；漫無目標的",
    "en_def": "without a purpose or goal",
    "sentence": "A: You seem much happier at work these days, so what changed after you finished the training program last month? B: Before the training, my job search felt {{BLANK}} and I applied for everything, but now I know which skills I have and which companies really need them.",
    "cn": "A：你最近工作上看起來快樂多了，上個月結束培訓課程後有什麼改變？ B：培訓前，我找工作感覺【漫無目標】，什麼都去應徵，但現在我知道自己有哪些技能，以及哪些公司真正需要這些技能。"
  },
  {
    "word": "forgotten",
    "pos": "adj.",
    "cn_def": "被遺忘的",
    "en_def": "no longer remembered or given attention",
    "sentence": "A: While we were cleaning the storage room yesterday, did you find anything interesting in those old boxes behind the printer? B: I found a {{BLANK}} box of company photos from the 1990s, so I am going to show them at the anniversary party and let older staff tell their stories.",
    "cn": "A：我們昨天清理儲藏室時，你在印表機後面那些舊箱子裡有找到什麼有趣的東西嗎？ B：我找到一箱【被遺忘】的公司一九九○年代照片，所以我打算在週年派對上展示，讓資深員工說說他們的故事。"
  },
  {
    "word": "neglected",
    "pos": "adj.",
    "cn_def": "被忽視的；疏於照顧的",
    "en_def": "not given enough care or attention",
    "sentence": "A: The city wants to turn the old warehouse near the river into a new office and shopping area, so what condition is the building in now? B: It has been {{BLANK}} for over ten years, so the roof leaks and the walls need repair before any business can move in safely.",
    "cn": "A：市政府想把河邊的舊倉庫改建成新的辦公和購物區，那棟建築現在狀況如何？ B：它已經【荒廢】十多年了，所以屋頂漏水，牆壁也需要修理，企業才能安全進駐。"
  },
  {
    "word": "unnoticed",
    "pos": "adj.",
    "cn_def": "未被注意到的",
    "en_def": "not seen or paid attention to",
    "sentence": "A: How did the small mistake in the price list reach so many customers before anyone in the sales department saw it? B: The error went {{BLANK}} because three people checked the file in a hurry on Friday afternoon, so we will now ask one person to proofread every list slowly.",
    "cn": "A：價目表上的小錯誤怎麼會在業務部任何人發現之前就送到那麼多客戶手上？ B：這個錯誤沒有【被注意到】，因為週五下午三個人都匆忙檢查了檔案，所以現在我們會請一個人慢慢校對每份價目表。"
  }
];

const MCQS = [
  {
    "q": "Two laptops have been _____ from the training room since Friday. Security staff are reviewing the camera footage now.",
    "options": [
      "missing",
      "confused",
      "hopeless",
      "aimless"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "By the time the delivery van arrived at noon, the free samples were already _____. The marketing team had handed them all out.",
    "options": [
      "confused",
      "neglected",
      "gone",
      "helpless"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Lin found her _____ badge inside a folder on her desk. She had looked for it all morning before the audit.",
    "options": [
      "bewildered",
      "misplaced",
      "directionless",
      "hopeless"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The _____ painting was finally found in a hotel storage room. Staff had searched the lobby for it for two whole weeks.",
    "options": [
      "hopeless",
      "aimless",
      "helpless",
      "vanished"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Three board members were _____ from the annual meeting. As a result, the vote on the merger was postponed.",
    "options": [
      "absent",
      "untraceable",
      "irretrievable",
      "forgotten"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Visitors often feel _____ in the large convention center. Clear signs and maps have been added to every hallway.",
    "options": [
      "missing",
      "absent",
      "disoriented",
      "forgotten"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Customers were _____ by the new billing statement. The company has promised to send a simpler version next month.",
    "options": [
      "untraceable",
      "irretrievable",
      "gone",
      "confused"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The new interns looked _____ on their first day at the busy trading floor. Their supervisor quickly explained the basic procedures.",
    "options": [
      "absent",
      "bewildered",
      "missing",
      "untraceable"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Several important letters went _____ during the office move. The manager asked the post office to check its records.",
    "options": [
      "hopeless",
      "helpless",
      "astray",
      "aimless"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "Without a clear agenda, team meetings tend to _____ off topic. Please send a list of discussion points in advance.",
    "options": [
      "drift",
      "deprive",
      "surrender",
      "forfeit"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Guests are welcome to _____ through the hotel gardens after breakfast. The paths are open from seven until sunset.",
    "options": [
      "deprive",
      "forfeit",
      "surrender",
      "wander"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Please do not _____ from the approved budget for the marketing event. Any extra spending must be approved by the director.",
    "options": [
      "deprive",
      "stray",
      "mislay",
      "surrender"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "Employees who _____ their access cards must report it immediately. A replacement card costs five hundred dollars.",
    "options": [
      "mislay",
      "drift",
      "wander",
      "stray"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Teams that miss the registration deadline will _____ their place in the competition. Late forms cannot be accepted this year.",
    "options": [
      "wander",
      "drift",
      "stray",
      "forfeit"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Visitors must _____ their passports at the front desk while inside the building. They will be returned at the exit.",
    "options": [
      "drift",
      "deprive",
      "surrender",
      "wander"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Bad weather forced the crew to _____ the outdoor product launch. The event will now take place in the hotel ballroom.",
    "options": [
      "wander",
      "abandon",
      "stray",
      "drift"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The new policy will not _____ employees of their annual bonus. Payments will simply be made in two parts.",
    "options": [
      "abandon",
      "surrender",
      "forfeit",
      "deprive"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The airline will pay for the _____ of any checked baggage. Passengers must fill out a claim form within seven days.",
    "options": [
      "loss",
      "defeat",
      "void",
      "scarcity"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The first _____ of the price war was a small local bookstore. It closed after losing most of its regular customers.",
    "options": [
      "shortage",
      "scarcity",
      "casualty",
      "void"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The candidate accepted her _____ in the election with grace. She thanked her supporters at a short press conference.",
    "options": [
      "shortage",
      "defeat",
      "scarcity",
      "disappearance"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The engine _____ caused the flight to return to Taipei. All passengers were given meal vouchers and new tickets.",
    "options": [
      "failure",
      "scarcity",
      "void",
      "casualty"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "A _____ of parking spaces near the office has become a serious problem. Management is considering a shuttle bus service.",
    "options": [
      "defeat",
      "casualty",
      "disappearance",
      "shortage"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The _____ of clean water in the region has raised costs for local factories. Many are now installing recycling systems.",
    "options": [
      "defeat",
      "scarcity",
      "casualty",
      "failure"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The sudden _____ of the company's founder shocked the employees. Police have asked anyone with information to contact them.",
    "options": [
      "shortage",
      "scarcity",
      "disappearance",
      "void"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The stolen funds were moved through many foreign accounts. Investigators fear the money is now _____.",
    "options": [
      "confused",
      "bewildered",
      "disoriented",
      "untraceable"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The damage to the company's reputation is not _____. A careful public apology could win back customer trust.",
    "options": [
      "irretrievable",
      "absent",
      "disoriented",
      "bewildered"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Without updated equipment, the plan to double production seemed _____. The board finally approved a new budget in May.",
    "options": [
      "absent",
      "misplaced",
      "hopeless",
      "missing"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "Many small shop owners felt _____ when the storm flooded the street. The city quickly offered emergency loans to help them.",
    "options": [
      "misplaced",
      "helpless",
      "missing",
      "absent"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The staff complained that the old website was _____ and confusing. The new design guides users straight to the products.",
    "options": [
      "absent",
      "misplaced",
      "untraceable",
      "directionless"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "Several _____ boxes of old files were found in the basement. The office manager will decide which ones to shred.",
    "options": [
      "forgotten",
      "bewildered",
      "disoriented",
      "confused"
    ],
    "answer": 0,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "missing": {
    "pos": "adj.",
    "en_def": "not in the expected place and cannot be found",
    "cn_def": "遺失的；失蹤的"
  },
  "gone": {
    "pos": "adj.",
    "en_def": "no longer present; used up or taken away",
    "cn_def": "不見了的；用完的"
  },
  "misplaced": {
    "pos": "adj.",
    "en_def": "put in the wrong place so that it is hard to find",
    "cn_def": "放錯地方的"
  },
  "vanished": {
    "pos": "adj.",
    "en_def": "disappeared suddenly and completely",
    "cn_def": "消失的；不見蹤影的"
  },
  "absent": {
    "pos": "adj.",
    "en_def": "not present at a place, meeting or event",
    "cn_def": "缺席的；不在場的"
  },
  "disoriented": {
    "pos": "adj.",
    "en_def": "confused about where you are or which direction to go",
    "cn_def": "迷失方向的；混亂的"
  },
  "confused": {
    "pos": "adj.",
    "en_def": "unable to understand something clearly",
    "cn_def": "困惑的；搞不清楚的"
  },
  "bewildered": {
    "pos": "adj.",
    "en_def": "very confused and not sure what to do",
    "cn_def": "不知所措的；困惑的"
  },
  "astray": {
    "pos": "adv.",
    "en_def": "away from the correct path or direction",
    "cn_def": "迷路地；誤入歧途地"
  },
  "drift": {
    "pos": "v.",
    "en_def": "to move slowly without a clear direction or plan",
    "cn_def": "漂流；漫無目的地移動"
  },
  "wander": {
    "pos": "v.",
    "en_def": "to walk around slowly without a particular purpose",
    "cn_def": "閒逛；漫步"
  },
  "stray": {
    "pos": "v.",
    "en_def": "to move away from the place or subject where you should be",
    "cn_def": "偏離；走失"
  },
  "mislay": {
    "pos": "v.",
    "en_def": "to put something somewhere and then forget where it is",
    "cn_def": "隨手放丟；一時找不到"
  },
  "forfeit": {
    "pos": "v.",
    "en_def": "to lose something because you broke a rule or did not do something",
    "cn_def": "喪失；被沒收"
  },
  "surrender": {
    "pos": "v.",
    "en_def": "to give something to someone because you have to",
    "cn_def": "交出；放棄"
  },
  "abandon": {
    "pos": "v.",
    "en_def": "to stop doing or supporting a plan completely",
    "cn_def": "放棄；拋棄"
  },
  "deprive": {
    "pos": "v.",
    "en_def": "to take something important away from someone",
    "cn_def": "剝奪；使喪失"
  },
  "loss": {
    "pos": "n.",
    "en_def": "the fact of losing money, a thing or a person",
    "cn_def": "損失；虧損"
  },
  "casualty": {
    "pos": "n.",
    "en_def": "a person hurt or killed in an accident; something damaged by an event",
    "cn_def": "傷亡者；受害者"
  },
  "defeat": {
    "pos": "n.",
    "en_def": "the fact of losing a game, election or competition",
    "cn_def": "失敗；戰敗"
  },
  "failure": {
    "pos": "n.",
    "en_def": "a lack of success; something that does not work",
    "cn_def": "失敗；故障"
  },
  "shortage": {
    "pos": "n.",
    "en_def": "a situation in which there is not enough of something",
    "cn_def": "短缺；不足"
  },
  "scarcity": {
    "pos": "n.",
    "en_def": "the state of being difficult to find or get",
    "cn_def": "稀少；匱乏"
  },
  "void": {
    "pos": "n.",
    "en_def": "an empty space or feeling caused by something missing",
    "cn_def": "空缺；空虛"
  },
  "disappearance": {
    "pos": "n.",
    "en_def": "the act of no longer being seen or found",
    "cn_def": "消失；失蹤"
  },
  "untraceable": {
    "pos": "adj.",
    "en_def": "impossible to find or follow",
    "cn_def": "無法追查的"
  },
  "irretrievable": {
    "pos": "adj.",
    "en_def": "impossible to get back or make right again",
    "cn_def": "無法挽回的；無法找回的"
  },
  "hopeless": {
    "pos": "adj.",
    "en_def": "having no chance of success or improvement",
    "cn_def": "無望的；沒希望的"
  },
  "helpless": {
    "pos": "adj.",
    "en_def": "unable to do anything to protect or help yourself",
    "cn_def": "無助的；無能為力的"
  },
  "directionless": {
    "pos": "adj.",
    "en_def": "without a clear aim or plan",
    "cn_def": "沒有方向的；漫無目標的"
  },
  "aimless": {
    "pos": "adj.",
    "en_def": "without a purpose or goal",
    "cn_def": "無目的的；漫無目標的"
  },
  "forgotten": {
    "pos": "adj.",
    "en_def": "no longer remembered or given attention",
    "cn_def": "被遺忘的"
  },
  "neglected": {
    "pos": "adj.",
    "en_def": "not given enough care or attention",
    "cn_def": "被忽視的；疏於照顧的"
  },
  "unnoticed": {
    "pos": "adj.",
    "en_def": "not seen or paid attention to",
    "cn_def": "未被注意到的"
  }
};

const EXTRA_GLOSSES = {};
