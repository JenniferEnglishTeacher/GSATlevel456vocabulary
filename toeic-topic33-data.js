// Topic 33 Quiz Data: Bored 感到無聊
// Source word list: https://www.examword.com/group-topic/bored — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T33 - Bored 感到無聊",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "boredom",
    "pos": "n.",
    "cn_def": "無聊；厭倦",
    "en_def": "the feeling of being tired and unhappy because nothing is interesting",
    "sentence": "A: Why did so many workers in the packing department ask to change jobs last month, even though the pay there is quite good? B: The HR survey showed that doing the same simple task for eight hours every day caused great {{BLANK}}, so the manager is now planning to rotate staff between different stations each week.",
    "cn": "A：雖然包裝部門的薪水相當不錯，為什麼上個月有那麼多員工要求調職？ B：人資的調查顯示，每天八小時重複同樣簡單的工作讓人感到非常【無聊】，所以經理現在打算每週讓員工在不同的工作站之間輪調。"
  },
  {
    "word": "weary",
    "pos": "adj.",
    "cn_def": "疲倦的；厭倦的",
    "en_def": "very tired, especially after working hard for a long time",
    "sentence": "A: How did the sales team look when they finally came back from the trade show in Singapore after five long days? B: They all looked {{BLANK}} because they had been standing at the booth from early morning until late evening, so the director told them to take Monday off and rest at home.",
    "cn": "A：業務團隊在新加坡參加了漫長的五天商展終於回來時，看起來怎麼樣？ B：他們看起來都很【疲憊】，因為他們從清晨到深夜一直站在攤位前，所以主管要他們星期一休假，在家好好休息。"
  },
  {
    "word": "restless",
    "pos": "adj.",
    "cn_def": "坐立不安的；焦躁的",
    "en_def": "unable to stay still or relaxed, often because you are bored or worried",
    "sentence": "A: Why did the trainer suddenly stop her presentation and give everyone a fifteen-minute coffee break in the middle of the afternoon? B: She noticed that the new employees were becoming {{BLANK}}, moving in their chairs and checking their phones, after sitting and listening to her for nearly three hours without a pause.",
    "cn": "A：為什麼訓練講師在下午中途突然停止簡報，讓大家休息十五分鐘喝咖啡？ B：她注意到新進員工在沒有休息的情況下坐著聽她講了將近三個小時後，變得【坐立不安】，在椅子上動來動去，還一直看手機。"
  },
  {
    "word": "listless",
    "pos": "adj.",
    "cn_def": "無精打采的",
    "en_def": "having no energy or interest in doing anything",
    "sentence": "A: Is something wrong with Kevin from the accounting department, because he hardly said a word during the budget meeting this morning? B: He has seemed {{BLANK}} ever since his big project was cancelled last week, so his supervisor is going to talk with him and maybe give him a new task that he will enjoy more.",
    "cn": "A：會計部的凱文是不是怎麼了？他今天早上的預算會議中幾乎一句話也沒說。 B：自從他的大專案上週被取消後，他看起來一直【無精打采】，所以他的主管打算跟他談談，或許會給他一個他會更喜歡的新任務。"
  },
  {
    "word": "apathetic",
    "pos": "adj.",
    "cn_def": "冷漠的；漠不關心的",
    "en_def": "showing no interest or concern about something",
    "sentence": "A: Why did only twelve people vote in the election for the new staff committee, when the company has more than three hundred employees? B: Many workers have become {{BLANK}} because they believe the committee never changes anything, so the managers want to show some real results this year to win back their trust.",
    "cn": "A：公司有三百多名員工，為什麼新員工委員會的選舉只有十二個人投票？ B：許多員工變得【漠不關心】，因為他們認為委員會從來沒有改變任何事情，所以經理們希望今年能展現一些實際成果，以贏回大家的信任。"
  },
  {
    "word": "indifferent",
    "pos": "adj.",
    "cn_def": "不在乎的；冷淡的",
    "en_def": "not caring about or interested in something",
    "sentence": "A: Did the customers in the survey care much about the new color of our coffee cups, or were they more interested in something else? B: Most of them were completely {{BLANK}} to the color, but they complained a lot about the high prices and the long lines in the morning, so we should fix those problems first.",
    "cn": "A：調查中的顧客很在意我們咖啡杯的新顏色嗎？還是他們對別的事更感興趣？ B：他們大多對顏色完全【不在乎】，但對高價格和早上大排長龍抱怨很多，所以我們應該先解決那些問題。"
  },
  {
    "word": "disengaged",
    "pos": "adj.",
    "cn_def": "不投入的；疏離的",
    "en_def": "not feeling involved in or interested in your work or activity",
    "sentence": "A: What did the consultant say about the results of the employee satisfaction survey that we did across all our branches in March? B: She said that almost a third of our staff feel {{BLANK}} from their work because they rarely get feedback from managers, so she suggested holding short monthly meetings with every team member.",
    "cn": "A：顧問對我們三月在所有分店進行的員工滿意度調查結果怎麼說？ B：她說我們將近三分之一的員工對工作感到【不投入】，因為他們很少得到主管的回饋，所以她建議每個月和每位團隊成員舉行簡短的面談。"
  },
  {
    "word": "uninvolved",
    "pos": "adj.",
    "cn_def": "未參與的；置身事外的",
    "en_def": "not taking part in something",
    "sentence": "A: Should we ask the designers from the marketing department to join our planning meeting for the new product launch next week? B: No, they have been {{BLANK}} in this project from the start, so it would be better to send them a short summary later instead of asking them to sit through a two-hour discussion.",
    "cn": "A：我們要不要請行銷部的設計師參加下週新產品發表的企劃會議？ B：不用，他們從一開始就【沒有參與】這個專案，所以與其要他們坐著聽兩個小時的討論，不如之後寄一份簡短的摘要給他們。"
  },
  {
    "word": "lethargic",
    "pos": "adj.",
    "cn_def": "昏昏欲睡的；懶洋洋的",
    "en_def": "feeling sleepy and having very little energy",
    "sentence": "A: Why does the office manager want to open the windows and turn up the lights in the meeting room every afternoon now? B: Many staff members said they felt {{BLANK}} after lunch in the warm, dark room, so she hopes that fresh air and brighter lights will help everyone stay awake and focused during the long meetings.",
    "cn": "A：為什麼辦公室經理現在每天下午都要打開會議室的窗戶並把燈開亮一點？ B：很多員工說午餐後在溫暖又昏暗的房間裡會感到【昏昏欲睡、提不起勁】，所以她希望新鮮空氣和明亮的燈光能幫助大家在冗長的會議中保持清醒和專注。"
  },
  {
    "word": "unmotivated",
    "pos": "adj.",
    "cn_def": "缺乏動力的",
    "en_def": "not having any reason or wish to work hard",
    "sentence": "A: Why are the new sales assistants making so few calls to customers, even though the manager has asked them several times to try harder? B: They feel {{BLANK}} because there is no bonus for reaching their targets this year, so the director is thinking about bringing back a small reward for the top three sellers each month.",
    "cn": "A：雖然經理已經多次要求新的業務助理更努力，為什麼他們打給客戶的電話還是那麼少？ B：他們覺得【缺乏動力】，因為今年達成目標沒有獎金，所以主管正在考慮恢復每月給前三名業績最好的人一份小獎勵。"
  },
  {
    "word": "ennui",
    "pos": "n.",
    "cn_def": "倦怠；百無聊賴",
    "en_def": "a feeling of being bored and unhappy because life seems dull",
    "sentence": "A: Why did Laura decide to leave her well-paid office job at the bank and open a small bakery near the train station? B: After ten years of the same reports and the same meetings, she felt a deep {{BLANK}} every morning, so she decided to follow her dream and do something creative that would make her happy.",
    "cn": "A：蘿拉為什麼決定辭掉銀行裡高薪的辦公室工作，在火車站附近開一間小烘焙坊？ B：做了十年同樣的報告、開同樣的會議之後，她每天早上都感到深深的【倦怠】，所以她決定追隨夢想，做些能讓她快樂的創意工作。"
  },
  {
    "word": "fed up",
    "pos": "adj.phr.",
    "cn_def": "受夠了的；厭煩的",
    "en_def": "annoyed and tired of something that has continued for too long",
    "sentence": "A: Why is the receptionist asking the building manager for a new air conditioner for the lobby again this week? B: She is {{BLANK}} with the old machine because it breaks down almost every day in summer, and visitors keep complaining about the heat while they wait for their appointments.",
    "cn": "A：為什麼接待員這週又在向大樓管理員要求為大廳換新冷氣？ B：她已經【受夠了】那台舊機器，因為它夏天幾乎每天都故障，而訪客在等候約會時一直抱怨很熱。"
  },
  {
    "word": "tired",
    "pos": "adj.",
    "cn_def": "疲倦的；累的",
    "en_def": "needing rest or sleep",
    "sentence": "A: Why did the project manager decide to postpone the client presentation from this morning until tomorrow afternoon? B: The whole team worked until two o'clock last night to finish the slides, so they were too {{BLANK}} to explain the plan clearly, and she thought a good night's sleep would help them do much better.",
    "cn": "A：專案經理為什麼決定把客戶簡報從今天早上延到明天下午？ B：整個團隊昨晚工作到凌晨兩點才把投影片做完，所以他們太【累】了，沒辦法把計畫解釋清楚，她認為好好睡一晚會讓他們表現得好很多。"
  },
  {
    "word": "jaded",
    "pos": "adj.",
    "cn_def": "厭倦的；麻木的（因經歷太多）",
    "en_def": "no longer interested or excited because you have seen or done something too often",
    "sentence": "A: Why didn't the senior engineers get excited about the new software system that the IT department showed them yesterday? B: They have become {{BLANK}} after watching so many \"amazing\" systems fail over the past twenty years, so they want to see real test results before they believe this one will work.",
    "cn": "A：昨天資訊部門展示新軟體系統時，資深工程師們為什麼一點都不興奮？ B：過去二十年看過太多「了不起」的系統失敗後，他們已經變得【麻木厭倦】，所以他們要先看到真正的測試結果，才會相信這套系統行得通。"
  },
  {
    "word": "unenthusiastic",
    "pos": "adj.",
    "cn_def": "不熱衷的；冷淡的",
    "en_def": "not showing excitement or interest",
    "sentence": "A: How did the staff react when the manager announced that the annual company trip would be a hiking tour in the mountains this year? B: Most of them were quite {{BLANK}} because they had hoped for a beach resort, so the manager promised to send out a survey and let everyone vote on next year's destination.",
    "cn": "A：經理宣布今年的員工旅遊是山區健行之旅時，員工們有什麼反應？ B：他們大多相當【不熱衷】，因為他們原本希望去海灘度假村，所以經理答應會發問卷，讓大家投票決定明年的目的地。"
  },
  {
    "word": "detached",
    "pos": "adj.",
    "cn_def": "冷漠疏離的；超然的",
    "en_def": "not emotionally involved; showing little interest or feeling",
    "sentence": "A: Why did the customers give the new call center workers such low scores in last month's service survey? B: Many callers said the workers sounded {{BLANK}} and read from a script without really listening to their problems, so the manager is planning extra training on how to show care and understanding on the phone.",
    "cn": "A：上個月的服務調查中，顧客為什麼給新的客服中心人員這麼低的分數？ B：很多來電者說那些人員聽起來很【冷漠疏離】，只照著稿子念，沒有真正傾聽他們的問題，所以經理打算額外培訓他們如何在電話中表現關心和理解。"
  },
  {
    "word": "blank",
    "pos": "adj.",
    "cn_def": "茫然的；無表情的",
    "en_def": "showing no feeling, understanding, or interest",
    "sentence": "A: How did the audience react when the speaker started explaining the complicated tax rules at the end of the long conference yesterday? B: Most people just had {{BLANK}} looks on their faces because they were exhausted and did not understand the details, so the organizer decided to email everyone a simple summary the next day.",
    "cn": "A：昨天漫長的研討會快結束時，講者開始解釋複雜的稅務規定，聽眾有什麼反應？ B：大多數人臉上只是一臉【茫然】，因為他們已經筋疲力盡又聽不懂細節，所以主辦單位決定隔天寄一份簡單的摘要給大家。"
  },
  {
    "word": "passive",
    "pos": "adj.",
    "cn_def": "被動的；消極的",
    "en_def": "accepting what happens without trying to take action or change things",
    "sentence": "A: Why does the training manager want to change the format of the new employee workshops starting next month? B: She thinks that sitting and listening to long lectures makes trainees too {{BLANK}}, so she wants to add group tasks and role-plays that will get everyone talking and working together actively.",
    "cn": "A：訓練經理為什麼想從下個月開始改變新進員工研習的形式？ B：她認為坐著聽冗長的講課會讓學員太過【被動】，所以她想加入小組任務和角色扮演，讓每個人都積極地發言和合作。"
  },
  {
    "word": "uninterested",
    "pos": "adj.",
    "cn_def": "不感興趣的",
    "en_def": "not wanting to learn more about something or take part in it",
    "sentence": "A: Did the visitors from the hotel group want to hear more about our new cleaning service after the short demonstration this morning? B: Sadly, they seemed {{BLANK}} and kept looking at their watches, so I think we should prepare a cheaper package and contact them again when their current contract ends next spring.",
    "cn": "A：今天早上簡短的示範之後，飯店集團的訪客有想進一步了解我們的新清潔服務嗎？ B：可惜他們似乎【不感興趣】，一直看手錶，所以我想我們應該準備一個更便宜的方案，等他們目前的合約明年春天到期時再聯絡他們。"
  },
  {
    "word": "monotony",
    "pos": "n.",
    "cn_def": "單調；千篇一律",
    "en_def": "a boring lack of change in something",
    "sentence": "A: Why does the factory now play music and give workers a short break every two hours on the production line? B: The manager wanted to reduce the {{BLANK}} of checking thousands of identical bottles all day long, because tired, bored workers were missing more mistakes and the number of customer complaints was rising.",
    "cn": "A：為什麼工廠現在在生產線上播放音樂，而且每兩小時讓工人短暫休息？ B：經理想減少整天檢查成千上萬個一模一樣的瓶子所帶來的【單調】，因為疲倦又無聊的工人漏掉更多錯誤，顧客投訴的數量也一直在增加。"
  },
  {
    "word": "drowsy",
    "pos": "adj.",
    "cn_def": "昏昏欲睡的",
    "en_def": "feeling sleepy",
    "sentence": "A: Why did the safety officer tell the delivery drivers not to take that cold medicine before their long trips? B: The medicine can make people feel {{BLANK}}, and falling asleep for even a second on the highway could cause a serious accident, so drivers should ask a doctor for a different kind that is safe to take.",
    "cn": "A：安全主管為什麼告訴送貨司機在長途行車前不要吃那種感冒藥？ B：那種藥會讓人感到【昏昏欲睡】，而在高速公路上即使只睡著一秒鐘也可能造成嚴重事故，所以司機應該請醫生開另一種可以安全服用的藥。"
  },
  {
    "word": "vacant",
    "pos": "adj.",
    "cn_def": "茫然的；空洞的（表情）",
    "en_def": "showing no interest, thought, or feeling",
    "sentence": "A: Did the interns understand the new filing system after Mr. Chen explained it to them for over an hour yesterday afternoon? B: I don't think so, because they just stared at him with {{BLANK}} expressions the whole time, so I am going to make a simple step-by-step guide with pictures for them this morning.",
    "cn": "A：陳先生昨天下午花了一個多小時向實習生解釋新的歸檔系統，他們聽懂了嗎？ B：我覺得沒有，因為他們整個過程都用【茫然空洞】的表情盯著他，所以我今天早上要為他們做一份有圖片的簡單步驟說明。"
  },
  {
    "word": "resigned",
    "pos": "adj.",
    "cn_def": "認命的；無奈接受的",
    "en_def": "accepting something unpleasant because you feel you cannot change it",
    "sentence": "A: Are the staff still angry that the office will move to the industrial park outside the city at the end of this year? B: Not really anymore; they seem {{BLANK}} to the change now because the decision is final, and the company has promised a free shuttle bus from the main train station every morning.",
    "cn": "A：員工們還在為辦公室今年年底要搬到市郊的工業區生氣嗎？ B：其實已經不太會了；他們現在似乎已經【無奈接受】這個改變，因為決定已成定局，而且公司答應每天早上提供從火車總站出發的免費接駁車。"
  },
  {
    "word": "numb",
    "pos": "adj.",
    "cn_def": "麻木的；失去感覺的",
    "en_def": "unable to feel emotions, often after a shock",
    "sentence": "A: How did the employees at the branch office feel when they heard that the company would close it after thirty years? B: At first, many of them just felt {{BLANK}} and could not react at all, but after a few days they started asking HR about job openings at the other branches in the city.",
    "cn": "A：分公司的員工聽到公司要在三十年後關閉分公司時，有什麼感受？ B：一開始他們很多人只是感到【麻木】，完全無法反應，但幾天後他們開始向人資詢問市內其他分店的職缺。"
  },
  {
    "word": "dispirited",
    "pos": "adj.",
    "cn_def": "灰心的；沮喪的",
    "en_def": "having lost hope or enthusiasm",
    "sentence": "A: Why does the sales team look so unhappy this morning, even though they worked very hard on the proposal for the airport project? B: They feel {{BLANK}} because the client chose a cheaper company yesterday, so the director is taking them out for lunch to thank them and talk about the next big opportunity.",
    "cn": "A：雖然業務團隊為機場專案的提案非常努力，為什麼他們今天早上看起來那麼不開心？ B：他們感到【灰心沮喪】，因為客戶昨天選擇了一家較便宜的公司，所以主管要請他們吃午餐表達謝意，並討論下一個大好機會。"
  },
  {
    "word": "unresponsive",
    "pos": "adj.",
    "cn_def": "無回應的；反應遲鈍的",
    "en_def": "not reacting or answering",
    "sentence": "A: Has the supplier in Vietnam replied to our emails about the late shipment of fabric that should have arrived last Friday? B: No, they have been completely {{BLANK}} for over a week, so the purchasing manager plans to call their head office directly this afternoon and look for a backup supplier just in case.",
    "cn": "A：越南的供應商回覆我們關於上週五就該送達的布料延遲出貨的電子郵件了嗎？ B：沒有，他們已經一個多星期完全【沒有回應】，所以採購經理打算今天下午直接打電話到他們總公司，並且找一家備用供應商以防萬一。"
  },
  {
    "word": "drained",
    "pos": "adj.",
    "cn_def": "精疲力竭的",
    "en_def": "very tired, with no energy left",
    "sentence": "A: How do you feel after spending the whole day answering angry customers' calls about yesterday's system problem? B: I feel completely {{BLANK}}, because I talked to more than eighty people and had to stay calm and polite with every single one of them, so I am going straight home to rest tonight.",
    "cn": "A：花了一整天接聽顧客因為昨天系統問題打來的憤怒電話後，你感覺怎麼樣？ B：我覺得完全【精疲力竭】，因為我跟八十多個人通話，每一個都得保持冷靜和禮貌，所以我今晚要直接回家休息。"
  },
  {
    "word": "stagnant",
    "pos": "adj.",
    "cn_def": "停滯的；不景氣的",
    "en_def": "not growing, changing, or developing",
    "sentence": "A: Why is the board of directors so worried about the results of the company's clothing business in Asia this year? B: Sales have been {{BLANK}} for three years in a row while our competitors keep growing, so the board wants a new marketing plan that will attract younger customers and bring fresh energy to the brand.",
    "cn": "A：董事會為什麼對公司今年在亞洲的服飾業務成果這麼擔心？ B：我們的銷售已經連續三年【停滯不前】，而競爭對手卻持續成長，所以董事會想要一個能吸引年輕顧客、為品牌注入新活力的新行銷計畫。"
  },
  {
    "word": "burned out",
    "pos": "adj.phr.",
    "cn_def": "身心俱疲的；職業倦怠的",
    "en_def": "extremely tired and unable to work well because of too much work or stress",
    "sentence": "A: Why did the head nurse ask the hospital director to hire three more nurses for the night shift as soon as possible? B: Her team has been working twelve-hour shifts six days a week for months, and many of them are {{BLANK}}, so she is afraid that some of them will quit or make serious mistakes.",
    "cn": "A：護理長為什麼要求醫院院長盡快為夜班多聘請三名護理師？ B：她的團隊好幾個月來每週工作六天、每班十二小時，很多人都已經【身心俱疲】，所以她擔心有些人會辭職或犯下嚴重錯誤。"
  }
];

const MCQS = [
  {
    "q": "Many passengers complained about _____ during the six-hour flight delay. The airline later added free movies and games in the waiting area.",
    "options": [
      "drowsy",
      "boredom",
      "passive",
      "stagnant"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Rotating tasks every hour helps reduce the _____ of assembly line work. Staff also say the day passes more quickly.",
    "options": [
      "monotony",
      "numb",
      "drained",
      "weary"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "After retiring, the former director fell into a deep _____ with nothing to do all day. Volunteering at the library gave his life purpose again.",
    "options": [
      "restless",
      "jaded",
      "ennui",
      "resigned"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "After a week of travel to four cities, the auditors were _____ and wanted only to sleep. They returned home on Friday night.",
    "options": [
      "unresponsive",
      "uninvolved",
      "stagnant",
      "weary"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "The children grew _____ during the long ceremony and kept moving in their seats. Their parents took them outside for a short walk.",
    "options": [
      "vacant",
      "restless",
      "stagnant",
      "resigned"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Since losing the big contract, Tom has been _____ and shows no energy at work. His manager plans to give him a fresh challenge.",
    "options": [
      "listless",
      "resigned",
      "stagnant",
      "uninvolved"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Young voters were _____ about the local election and few went to the polls. The city now runs online campaigns to raise interest.",
    "options": [
      "drowsy",
      "stagnant",
      "apathetic",
      "drained"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The manager seemed _____ to the staff's complaints and did nothing to solve them. As a result, three workers quit.",
    "options": [
      "stagnant",
      "drained",
      "drowsy",
      "indifferent"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Employees who never receive feedback often become _____ from their work. Regular one-on-one meetings can help them feel involved again.",
    "options": [
      "disengaged",
      "drowsy",
      "fed up",
      "stagnant"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The lawyer advised staff who were _____ in the dispute to stay out of the discussion. Only the two managers attended the hearing.",
    "options": [
      "blank",
      "weary",
      "drowsy",
      "uninvolved"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The hot weather made the warehouse workers feel slow and _____ in the afternoon. The company installed new fans to keep them cool.",
    "options": [
      "stagnant",
      "lethargic",
      "uninvolved",
      "indifferent"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Without clear goals or rewards, sales staff can easily become _____. The new bonus plan aims to encourage them to work harder.",
    "options": [
      "vacant",
      "numb",
      "unmotivated",
      "blank"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Customers are _____ with the constant delays on the Route 5 bus. Many have started driving to work instead.",
    "options": [
      "fed up",
      "blank",
      "burned out",
      "vacant"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "If you feel _____ while driving, stop at a rest area and take a short nap. Safety is more important than arriving on time.",
    "options": [
      "jaded",
      "stagnant",
      "tired",
      "uninvolved"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "After twenty years in advertising, Ms. Park felt _____ and found little excitement in new campaigns. She decided to change careers.",
    "options": [
      "unresponsive",
      "stagnant",
      "drowsy",
      "jaded"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The board was _____ about the proposal and voted against it. The team will present a revised plan next month.",
    "options": [
      "numb",
      "unenthusiastic",
      "vacant",
      "drowsy"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Good doctors explain test results with warmth instead of sounding cold and _____. Patients feel safer when staff show real care.",
    "options": [
      "stagnant",
      "fed up",
      "detached",
      "drowsy"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "When asked about the missing invoice, the new clerk gave a _____ look and said nothing. He clearly did not understand the question.",
    "options": [
      "uninvolved",
      "stagnant",
      "burned out",
      "blank"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Interns who stay _____ in meetings rarely get noticed by managers. Sharing ideas and asking questions is a better strategy.",
    "options": [
      "passive",
      "numb",
      "stagnant",
      "fed up"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The client seemed _____ in our proposal and left the meeting early. We will need a stronger offer next time.",
    "options": [
      "numb",
      "uninterested",
      "drained",
      "stagnant"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "This allergy medicine may make you _____, so do not drive after taking it. Please read the label carefully.",
    "options": [
      "indifferent",
      "stagnant",
      "drowsy",
      "uninvolved"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The guard sat at the front desk with a _____ stare, clearly thinking about something else. He did not notice the visitor walk in.",
    "options": [
      "vacant",
      "unmotivated",
      "stagnant",
      "fed up"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "After the third delay, the passengers were _____ to spending the night at the airport. The airline provided blankets and snacks.",
    "options": [
      "vacant",
      "resigned",
      "stagnant",
      "drowsy"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Staff felt _____ with shock when the factory closure was announced. Many could not speak for several minutes.",
    "options": [
      "passive",
      "stagnant",
      "uninvolved",
      "numb"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The players were _____ after losing the final match by one point. Their coach reminded them how far they had come.",
    "options": [
      "dispirited",
      "stagnant",
      "uninvolved",
      "vacant"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The website became _____ during the holiday sale because too many people visited at once. Engineers fixed the problem within an hour.",
    "options": [
      "jaded",
      "unresponsive",
      "resigned",
      "weary"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "After the twelve-hour negotiation, both lawyers felt completely _____ of energy. They agreed to sign the contract the next morning.",
    "options": [
      "uninvolved",
      "stagnant",
      "drained",
      "apathetic"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Wages have remained _____ for years while rent keeps rising. Many young workers are struggling to save money.",
    "options": [
      "restless",
      "drowsy",
      "dispirited",
      "stagnant"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Working seventy hours a week for months left the designer _____ and unable to focus. She took a month of unpaid leave to recover.",
    "options": [
      "burned out",
      "stagnant",
      "vacant",
      "uninvolved"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "To fight _____ on long night shifts, security guards are allowed to listen to the radio. They must still check the cameras regularly.",
    "options": [
      "resigned",
      "boredom",
      "weary",
      "drained"
    ],
    "answer": 1,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "boredom": {
    "pos": "n.",
    "en_def": "the feeling of being tired and unhappy because nothing is interesting",
    "cn_def": "無聊；厭倦"
  },
  "weary": {
    "pos": "adj.",
    "en_def": "very tired, especially after working hard for a long time",
    "cn_def": "疲倦的；厭倦的"
  },
  "restless": {
    "pos": "adj.",
    "en_def": "unable to stay still or relaxed, often because you are bored or worried",
    "cn_def": "坐立不安的；焦躁的"
  },
  "listless": {
    "pos": "adj.",
    "en_def": "having no energy or interest in doing anything",
    "cn_def": "無精打采的"
  },
  "apathetic": {
    "pos": "adj.",
    "en_def": "showing no interest or concern about something",
    "cn_def": "冷漠的；漠不關心的"
  },
  "indifferent": {
    "pos": "adj.",
    "en_def": "not caring about or interested in something",
    "cn_def": "不在乎的；冷淡的"
  },
  "disengaged": {
    "pos": "adj.",
    "en_def": "not feeling involved in or interested in your work or activity",
    "cn_def": "不投入的；疏離的"
  },
  "uninvolved": {
    "pos": "adj.",
    "en_def": "not taking part in something",
    "cn_def": "未參與的；置身事外的"
  },
  "lethargic": {
    "pos": "adj.",
    "en_def": "feeling sleepy and having very little energy",
    "cn_def": "昏昏欲睡的；懶洋洋的"
  },
  "unmotivated": {
    "pos": "adj.",
    "en_def": "not having any reason or wish to work hard",
    "cn_def": "缺乏動力的"
  },
  "ennui": {
    "pos": "n.",
    "en_def": "a feeling of being bored and unhappy because life seems dull",
    "cn_def": "倦怠；百無聊賴"
  },
  "fed up": {
    "pos": "adj.phr.",
    "en_def": "annoyed and tired of something that has continued for too long",
    "cn_def": "受夠了的；厭煩的"
  },
  "tired": {
    "pos": "adj.",
    "en_def": "needing rest or sleep",
    "cn_def": "疲倦的；累的"
  },
  "jaded": {
    "pos": "adj.",
    "en_def": "no longer interested or excited because you have seen or done something too often",
    "cn_def": "厭倦的；麻木的（因經歷太多）"
  },
  "unenthusiastic": {
    "pos": "adj.",
    "en_def": "not showing excitement or interest",
    "cn_def": "不熱衷的；冷淡的"
  },
  "detached": {
    "pos": "adj.",
    "en_def": "not emotionally involved; showing little interest or feeling",
    "cn_def": "冷漠疏離的；超然的"
  },
  "blank": {
    "pos": "adj.",
    "en_def": "showing no feeling, understanding, or interest",
    "cn_def": "茫然的；無表情的"
  },
  "passive": {
    "pos": "adj.",
    "en_def": "accepting what happens without trying to take action or change things",
    "cn_def": "被動的；消極的"
  },
  "uninterested": {
    "pos": "adj.",
    "en_def": "not wanting to learn more about something or take part in it",
    "cn_def": "不感興趣的"
  },
  "monotony": {
    "pos": "n.",
    "en_def": "a boring lack of change in something",
    "cn_def": "單調；千篇一律"
  },
  "drowsy": {
    "pos": "adj.",
    "en_def": "feeling sleepy",
    "cn_def": "昏昏欲睡的"
  },
  "vacant": {
    "pos": "adj.",
    "en_def": "showing no interest, thought, or feeling",
    "cn_def": "茫然的；空洞的（表情）"
  },
  "resigned": {
    "pos": "adj.",
    "en_def": "accepting something unpleasant because you feel you cannot change it",
    "cn_def": "認命的；無奈接受的"
  },
  "numb": {
    "pos": "adj.",
    "en_def": "unable to feel emotions, often after a shock",
    "cn_def": "麻木的；失去感覺的"
  },
  "dispirited": {
    "pos": "adj.",
    "en_def": "having lost hope or enthusiasm",
    "cn_def": "灰心的；沮喪的"
  },
  "unresponsive": {
    "pos": "adj.",
    "en_def": "not reacting or answering",
    "cn_def": "無回應的；反應遲鈍的"
  },
  "drained": {
    "pos": "adj.",
    "en_def": "very tired, with no energy left",
    "cn_def": "精疲力竭的"
  },
  "stagnant": {
    "pos": "adj.",
    "en_def": "not growing, changing, or developing",
    "cn_def": "停滯的；不景氣的"
  },
  "burned out": {
    "pos": "adj.phr.",
    "en_def": "extremely tired and unable to work well because of too much work or stress",
    "cn_def": "身心俱疲的；職業倦怠的"
  }
};

const EXTRA_GLOSSES = {};
