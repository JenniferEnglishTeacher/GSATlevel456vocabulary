// Topic 327 Quiz Data: Repair 修理
// Source word list: https://www.examword.com/group-topic/repair — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T327 - Repair 修理",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fix",
    "pos": "v.",
    "cn_def": "修理；解決",
    "en_def": "to make something that is broken work again",
    "sentence": "A: The printer on the third floor keeps jamming every time I try to print the sales report, and the meeting with our clients starts in twenty minutes. B: Don't worry, I'll call the IT department right now and ask someone to come up and {{BLANK}} it before the meeting begins.",
    "cn": "A：三樓的印表機每次我要印銷售報告時就一直卡紙，而且我們和客戶的會議再二十分鐘就開始了。 B：別擔心，我現在就打電話給資訊部，請人上來在會議開始前把它【修好】。"
  },
  {
    "word": "mend",
    "pos": "v.",
    "cn_def": "修補；縫補",
    "en_def": "to repair something that is torn or broken",
    "sentence": "A: My jacket got torn on the door handle when I was carrying boxes into the storage room this morning, and I have an important lunch with a client today. B: There's a small tailor shop next to the train station that can {{BLANK}} it in about an hour, so you can pick it up before lunch.",
    "cn": "A：我今天早上把箱子搬進儲藏室時，外套被門把勾破了，而我今天還要和客戶吃一頓重要的午餐。 B：火車站旁邊有一家小裁縫店，大約一小時就能把它【縫補好】，所以你可以在午餐前去拿。"
  },
  {
    "word": "restore",
    "pos": "v.",
    "cn_def": "恢復；修復",
    "en_def": "to bring something back to how it was before",
    "sentence": "A: How long will it take the power company to bring electricity back to our office building after last night's storm knocked down several lines? B: They told the building manager that their crews are working all day and expect to {{BLANK}} power by six o'clock this evening, so we should save our files often.",
    "cn": "A：昨晚的暴風雨吹倒了好幾條電線，電力公司要多久才能讓我們辦公大樓恢復供電？ B：他們告訴大樓管理員，工作人員整天都在搶修，預計今晚六點前能【恢復】供電，所以我們應該經常儲存檔案。"
  },
  {
    "word": "restoration",
    "pos": "n.",
    "cn_def": "修復；整修",
    "en_def": "the work of making something old look or work like new again",
    "sentence": "A: Why is the old theater downtown covered with scaffolding, and when will it be open to the public again for concerts and plays? B: The city started a two-year {{BLANK}} project last spring to repaint the walls and fix the historic ceiling, and the mayor hopes to reopen it next December.",
    "cn": "A：市中心那座老劇院為什麼搭滿了鷹架？什麼時候會再對大眾開放舉辦音樂會和戲劇表演？ B：市政府去年春天開始了一項為期兩年的【修復】工程，要重新粉刷牆面並修理具有歷史意義的天花板，市長希望明年十二月能重新開放。"
  },
  {
    "word": "maintenance",
    "pos": "n.",
    "cn_def": "維修；保養",
    "en_def": "regular work to keep something in good condition",
    "sentence": "A: Why can't we use the elevators in the east wing today, even though they were working perfectly fine when I left the office yesterday afternoon? B: The building manager scheduled routine {{BLANK}} for this morning, so the technicians are checking the cables and motors, and the elevators should be running again after lunch.",
    "cn": "A：為什麼我們今天不能使用東翼的電梯？我昨天下午離開辦公室時它們都還運作得好好的。 B：大樓管理員把例行【維護保養】排在今天早上，所以技術人員正在檢查纜線和馬達，電梯應該午餐後就能恢復運行。"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "cn_def": "維持；保養",
    "en_def": "to keep something in good condition",
    "sentence": "A: Our company cars seem to break down much less often this year than they did last year, so what did the operations team change? B: They hired a full-time mechanic who checks the oil, brakes, and tires every month, which helps us {{BLANK}} the vehicles in good condition and save money.",
    "cn": "A：我們公司的車今年好像比去年少故障很多，營運團隊改變了什麼？ B：他們聘請了一位全職技工，每個月檢查機油、煞車和輪胎，這幫助我們把車輛【維持】在良好狀況並節省開支。"
  },
  {
    "word": "damage",
    "pos": "n.",
    "cn_def": "損害；損壞",
    "en_def": "physical harm that makes something broken or less useful",
    "sentence": "A: Did the heavy rain last weekend cause any problems at the warehouse, or were all of the products on the shelves safe and dry? B: Unfortunately, water came in through the roof and caused serious {{BLANK}} to about fifty boxes of paper, so we have already contacted the insurance company about it.",
    "cn": "A：上週末的大雨有沒有對倉庫造成任何問題？還是架上的產品都安全又乾燥？ B：很遺憾，雨水從屋頂滲入，對大約五十箱紙張造成嚴重【損害】，所以我們已經聯絡保險公司處理這件事。"
  },
  {
    "word": "broken",
    "pos": "adj.",
    "cn_def": "壞掉的；故障的",
    "en_def": "not working because it is damaged",
    "sentence": "A: Why are so many people waiting in the lobby instead of going straight up to the meeting room on the tenth floor this morning? B: One of the elevators is {{BLANK}} and the other is very slow, so the receptionist suggested that anyone who doesn't want to wait should take the stairs.",
    "cn": "A：為什麼今天早上這麼多人在大廳等，而不是直接上十樓的會議室？ B：其中一部電梯【壞掉了】，另一部又很慢，所以接待員建議不想等的人走樓梯。"
  },
  {
    "word": "fault",
    "pos": "n.",
    "cn_def": "故障；毛病",
    "en_def": "a problem in a machine or system that stops it working well",
    "sentence": "A: The new coffee machines we bought for the break room stopped working after only two days, so should we just buy a different brand? B: The supplier says it is an electrical {{BLANK}} in that model, not something we did wrong, so they will send new machines free of charge next week.",
    "cn": "A：我們為休息室買的新咖啡機才兩天就停止運作了，我們是不是乾脆買別的牌子？ B：供應商說那是該型號的電路【故障】，不是我們操作錯誤，所以他們下週會免費寄新機器來。"
  },
  {
    "word": "defect",
    "pos": "n.",
    "cn_def": "瑕疵；缺陷",
    "en_def": "a mistake or weakness in how something is made",
    "sentence": "A: Why did the factory stop shipping the new laptops to the stores this week when customers have already placed so many orders? B: The quality team found a {{BLANK}} in the screens that causes small lines to appear, so they want to check every unit carefully before anything leaves the building.",
    "cn": "A：顧客已經下了這麼多訂單，為什麼工廠這週停止把新筆電出貨到門市？ B：品管團隊發現螢幕有一個【瑕疵】，會出現細小的線條，所以他們想在任何產品出廠前仔細檢查每一台。"
  },
  {
    "word": "technician",
    "pos": "n.",
    "cn_def": "技術人員；技師",
    "en_def": "a worker trained to check and repair machines or systems",
    "sentence": "A: The internet connection in the conference room has been very slow all week, and it keeps cutting off during our video calls with the overseas team. B: I already called the service provider, and they are sending a {{BLANK}} tomorrow morning to check the wires and replace the old router if necessary.",
    "cn": "A：會議室的網路整個星期都很慢，而且我們和海外團隊視訊通話時一直斷線。 B：我已經打電話給網路業者了，他們明天早上會派一位【技術人員】來檢查線路，必要時更換舊的路由器。"
  },
  {
    "word": "mechanic",
    "pos": "n.",
    "cn_def": "技工；修車師傅",
    "en_def": "a person whose job is repairing cars and engines",
    "sentence": "A: My car made a strange noise all the way to the office this morning, and I'm worried it won't start when I drive home tonight. B: There's a reliable {{BLANK}} at the garage two blocks from here who usually checks cars the same day, so you could drop it off during your lunch break.",
    "cn": "A：我今天早上開車來公司的一路上車子都發出奇怪的聲音，我擔心今晚開回家時它會發不動。 B：離這裡兩個街口的修車廠有一位可靠的【技工】，通常當天就能檢查車子，所以你可以在午休時把車送過去。"
  },
  {
    "word": "tool",
    "pos": "n.",
    "cn_def": "工具",
    "en_def": "a thing you hold in your hand to make or repair something",
    "sentence": "A: Do we have anything in the office that I can use to open the back of this projector, because one of the screws seems to be loose? B: There's a small {{BLANK}} kit in the bottom drawer of the supply cabinet, and it should have a screwdriver that fits that kind of screw.",
    "cn": "A：辦公室裡有沒有東西可以讓我打開這台投影機的背蓋？其中一顆螺絲好像鬆了。 B：用品櫃最下層的抽屜裡有一個小【工具】組，裡面應該有適合那種螺絲的螺絲起子。"
  },
  {
    "word": "equipment",
    "pos": "n.",
    "cn_def": "設備；器材",
    "en_def": "the machines and things needed for a job or activity",
    "sentence": "A: Why does the gym on the second floor have a sign on the door saying it will be closed for the whole week? B: The management is replacing the old treadmills and checking all of the other exercise {{BLANK}} to make sure everything is safe before employees start using it again.",
    "cn": "A：為什麼二樓健身房門口貼著告示說整個星期都會關閉？ B：管理部門正在更換舊的跑步機，並檢查所有其他運動【設備】，確保一切安全後才讓員工重新使用。"
  },
  {
    "word": "replace",
    "pos": "v.",
    "cn_def": "更換；取代",
    "en_def": "to put a new thing in the place of an old or broken one",
    "sentence": "A: The battery in my company phone only lasts about three hours now, and I'm traveling to visit clients in three different cities next week. B: Take it to the IT desk this afternoon, and they will {{BLANK}} the battery for free because the phone is still under the company's service plan.",
    "cn": "A：我的公務手機電池現在只能撐大約三小時，而我下週要出差到三個不同城市拜訪客戶。 B：今天下午拿去資訊服務台，他們會免費幫你【更換】電池，因為這支手機還在公司的服務方案內。"
  },
  {
    "word": "replacement",
    "pos": "n.",
    "cn_def": "替換品；更換",
    "en_def": "a new thing that takes the place of an old or broken one",
    "sentence": "A: The customer called again about the coffee maker that stopped heating water after one week, and she sounds really upset about it. B: Please apologize and tell her we will send a {{BLANK}} by express delivery today, and she can return the old one using the free shipping label inside the box.",
    "cn": "A：那位顧客又打電話來說咖啡機用一週就無法加熱，她聽起來非常不高興。 B：請向她道歉，並告訴她我們今天會用快遞寄一台【替換品】過去，她可以用盒子裡的免運費標籤把舊的寄回來。"
  },
  {
    "word": "adjust",
    "pos": "v.",
    "cn_def": "調整；調節",
    "en_def": "to change something a little so it works better",
    "sentence": "A: The air conditioning in the meeting room is so cold that several people at yesterday's training session had to wear their coats the whole time. B: I'll ask the building manager to {{BLANK}} the temperature before tomorrow's session so that everyone feels comfortable while they are listening to the speakers.",
    "cn": "A：會議室的冷氣太冷了，昨天的訓練課程有好幾個人整堂課都得穿著外套。 B：我會請大樓管理員在明天的課程前【調整】溫度，讓大家在聽講時都覺得舒適。"
  },
  {
    "word": "adjustment",
    "pos": "n.",
    "cn_def": "調整；調節",
    "en_def": "a small change that makes something work better",
    "sentence": "A: The new printer is working again, but the colors on the brochures still look a little darker than they did on the computer screen. B: The technician said it only needs a small {{BLANK}} to the color settings, so he will come back tomorrow afternoon before we print the final copies.",
    "cn": "A：新印表機又能運作了，但手冊上的顏色看起來還是比電腦螢幕上暗一點。 B：技術人員說只需要對色彩設定做一個小小的【調整】，所以他明天下午會在我們印最終版本前再過來。"
  },
  {
    "word": "tighten",
    "pos": "v.",
    "cn_def": "鎖緊；使變緊",
    "en_def": "to make something fixed more firmly",
    "sentence": "A: The chair at my desk keeps moving from side to side when I lean back, and I'm afraid it might break while I'm sitting in it. B: The screws under the seat are probably loose, so I'll bring a screwdriver from the supply room and {{BLANK}} them for you after lunch.",
    "cn": "A：我座位的椅子在我往後靠時會左右晃動，我擔心坐著坐著它就會壞掉。 B：座椅下面的螺絲大概鬆了，我午餐後會從儲藏室拿螺絲起子來幫你把它們【鎖緊】。"
  },
  {
    "word": "loosen",
    "pos": "v.",
    "cn_def": "鬆開；使變鬆",
    "en_def": "to make something less tight",
    "sentence": "A: I can't open the cover of the water pipe under the kitchen sink in the break room, because it has been closed for years and is very tight. B: Try spraying a little oil on it first and then use the large wrench to {{BLANK}} it slowly, so that you don't damage the old pipe.",
    "cn": "A：我打不開休息室廚房水槽下方水管的蓋子，因為它已經好幾年沒打開過，非常緊。 B：先在上面噴一點油，再用大扳手慢慢把它【轉鬆】，這樣才不會弄壞舊水管。"
  },
  {
    "word": "patch",
    "pos": "v.",
    "cn_def": "修補；補綴",
    "en_def": "to cover a hole with a piece of material to repair it",
    "sentence": "A: There's a small hole in the roof above the storage room, and water dripped onto several boxes of documents during last night's rain. B: The maintenance team can {{BLANK}} the hole this afternoon as a quick solution, but we'll need a roofing company to repair the whole area properly next month.",
    "cn": "A：儲藏室上方的屋頂有個小洞，昨晚下雨時水滴到了好幾箱文件上。 B：維修小組今天下午可以先把洞【修補】起來當作臨時解決辦法，但下個月我們需要請屋頂公司把整個區域好好修理一次。"
  },
  {
    "word": "overhaul",
    "pos": "n.",
    "cn_def": "大修；全面檢修",
    "en_def": "a complete check and repair of a machine or system",
    "sentence": "A: Why are the delivery trucks parked in the garage instead of being out on their usual routes around the city this week? B: The company decided to give the whole fleet a complete {{BLANK}}, including new engines and brakes, because several trucks broke down on the highway last month.",
    "cn": "A：為什麼這週送貨卡車都停在車庫裡，而不是在城裡跑平常的路線？ B：公司決定對整個車隊做一次全面【大修】，包括更換新引擎和煞車，因為上個月有好幾輛卡車在高速公路上拋錨。"
  },
  {
    "word": "inspect",
    "pos": "v.",
    "cn_def": "檢查；視察",
    "en_def": "to look at something carefully to check its condition",
    "sentence": "A: Why is the factory closing early on Friday afternoon when we still have so many orders to finish before the end of the month? B: Government safety officers are coming to {{BLANK}} the machines and fire exits, and the manager wants the floor to be clean and quiet while they work.",
    "cn": "A：月底前我們還有這麼多訂單要完成，為什麼工廠星期五下午要提早關門？ B：政府的安全稽查員要來【檢查】機器和逃生出口，經理希望他們工作時廠區保持乾淨安靜。"
  },
  {
    "word": "inspection",
    "pos": "n.",
    "cn_def": "檢查；檢驗",
    "en_def": "an official careful check of something",
    "sentence": "A: Can we move into the new office space on Monday as planned, or do we still need to wait for the building owner's approval? B: We have to wait until the fire department finishes its {{BLANK}} on Thursday, and if everything passes, the movers can bring our furniture over on the weekend.",
    "cn": "A：我們可以照計畫在星期一搬進新辦公室嗎？還是仍需等大樓業主核准？ B：我們得等消防局星期四完成【檢查】，如果一切都合格，搬家公司週末就能把我們的家具搬過去。"
  },
  {
    "word": "service",
    "pos": "v.",
    "cn_def": "保養；檢修",
    "en_def": "to check and repair a machine or car regularly",
    "sentence": "A: How often should we have the air conditioners in the office checked, because the one in the sales department is making a loud noise again? B: The supplier recommends that we {{BLANK}} them twice a year, once before summer and once before winter, so I'll book an appointment for next week.",
    "cn": "A：辦公室的冷氣多久應該檢查一次？業務部那台又在發出很大的噪音了。 B：供應商建議我們一年【保養】兩次，一次在夏天前、一次在冬天前，所以我會預約下週的時間。"
  },
  {
    "word": "renovate",
    "pos": "v.",
    "cn_def": "整修；翻新",
    "en_def": "to repair and improve an old building or room",
    "sentence": "A: Why is our team moving to the temporary office on the fifth floor for the next three months, when our current space seems fine? B: The company plans to {{BLANK}} the whole third floor, adding new meeting rooms, better lighting, and a larger kitchen, so we need to clear out by Friday.",
    "cn": "A：為什麼我們團隊接下來三個月要搬到五樓的臨時辦公室？我們目前的空間看起來還不錯啊。 B：公司打算【整修】整個三樓，增設新的會議室、更好的照明和更大的廚房，所以我們得在星期五前清空。"
  },
  {
    "word": "renovation",
    "pos": "n.",
    "cn_def": "翻修；整修",
    "en_def": "the work of repairing and improving a building",
    "sentence": "A: The hotel where we booked rooms for the sales conference just called, and they said the swimming pool and gym will be closed next month. B: That's because of a major {{BLANK}} of the fitness area, but they offered our guests free passes to a nearby gym, so I think we should keep the booking.",
    "cn": "A：我們為業務研討會訂房的那家飯店剛剛打電話來，說下個月游泳池和健身房會關閉。 B：那是因為健身區要進行大規模【翻修】，不過他們提供我們的客人附近健身房的免費通行證，所以我覺得我們應該保留訂房。"
  },
  {
    "word": "rebuild",
    "pos": "v.",
    "cn_def": "重建",
    "en_def": "to build something again after it was damaged or destroyed",
    "sentence": "A: What happened to the small bridge near our warehouse that the trucks used to cross every morning on their way to the highway? B: The flood last summer destroyed it, and the city plans to {{BLANK}} it with stronger materials, but until then the drivers have to take a longer road.",
    "cn": "A：我們倉庫附近那座卡車以前每天早上前往高速公路都會經過的小橋怎麼了？ B：去年夏天的洪水把它沖毀了，市政府打算用更堅固的材料【重建】，但在那之前司機們得走比較遠的路。"
  },
  {
    "word": "handyman",
    "pos": "n.",
    "cn_def": "修繕雜工；水電師傅",
    "en_def": "a person who is good at doing small repairs in buildings",
    "sentence": "A: The kitchen cabinet doors in the break room are loose, and one of the light bulbs in the hallway has been flickering for days. B: Those are small jobs, so instead of calling a big company, let's hire a local {{BLANK}} who can take care of everything in one visit for a lower price.",
    "cn": "A：休息室的廚櫃門鬆了，走廊上有一顆燈泡也已經閃爍好幾天了。 B：那些都是小工作，所以與其找大公司，不如請一位當地的【修繕師傅】，他一次來就能以較低的價格把所有事情處理好。"
  },
  {
    "word": "warranty",
    "pos": "n.",
    "cn_def": "保固；保證書",
    "en_def": "a written promise to repair a product for free for a period of time",
    "sentence": "A: The screen on the laptop I bought for work eight months ago suddenly stopped working, and I'm worried that fixing it will be very expensive. B: Check your receipt, because most laptops come with a one-year {{BLANK}}, which means the manufacturer should repair it for free if the problem isn't your fault.",
    "cn": "A：我八個月前買來工作用的筆電螢幕突然壞了，我擔心修理會非常貴。 B：查看一下你的收據，因為大部分筆電都附有一年【保固】，也就是說如果問題不是你造成的，製造商應該會免費修理。"
  }
];

const MCQS = [
  {
    "q": "The sales team cannot send any emails this morning. Could someone from IT please _____ the network problem before noon?",
    "options": [
      "fix",
      "loosen",
      "rebuild",
      "tighten"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "David tore the sleeve of his suit on a nail in the warehouse. His wife offered to _____ it before his job interview.",
    "options": [
      "inspect",
      "renovate",
      "mend",
      "rebuild"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The bakery lost power for six hours after the storm. The electric company worked overnight to _____ power to the whole street.",
    "options": [
      "mend",
      "restore",
      "tighten",
      "loosen"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The museum's old paintings are slowly being returned to their original colors. The _____ work will take two more years to finish.",
    "options": [
      "fault",
      "defect",
      "equipment",
      "restoration"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The elevators will stop running from nine until midnight on Friday. This is for regular _____ required by the building owner.",
    "options": [
      "fault",
      "maintenance",
      "mechanic",
      "warranty"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Drivers must check their delivery vans every week. This helps the company _____ its vehicles in safe working condition.",
    "options": [
      "maintain",
      "replace",
      "renovate",
      "loosen"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Strong winds knocked a tree onto the parking garage last night. Luckily, the _____ to the cars inside was very small.",
    "options": [
      "inspection",
      "adjustment",
      "restoration",
      "damage"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Please do not use the copy machine near the entrance. It is _____, and a technician will not arrive until tomorrow.",
    "options": [
      "affordable",
      "spacious",
      "broken",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The fire alarm went off three times yesterday without any smoke. An electrician found an electrical _____ in the main control box.",
    "options": [
      "fault",
      "warranty",
      "handyman",
      "restoration"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "All of the new phones were returned to the factory last week. A small _____ in the battery made them shut down suddenly.",
    "options": [
      "mechanic",
      "renovation",
      "maintenance",
      "defect"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "Our internet has been down since this morning. The company is sending a _____ to check the cables and the router.",
    "options": [
      "warranty",
      "technician",
      "defect",
      "overhaul"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Martin's car started making a loud noise on the highway. He took it to a _____ at the garage near his office.",
    "options": [
      "warranty",
      "inspection",
      "mechanic",
      "fault"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "You will need a special _____ to open the back of the printer. Please ask the office manager for the screwdriver set.",
    "options": [
      "fault",
      "renovation",
      "warranty",
      "tool"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The gym is closed this week for safety checks. All of the exercise _____ will be tested before members can use it again.",
    "options": [
      "equipment",
      "mechanic",
      "defect",
      "adjustment"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The light bulbs in the meeting room are very old and dim. The maintenance team will _____ them with brighter LED bulbs.",
    "options": [
      "mend",
      "tighten",
      "replace",
      "inspect"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The blender I ordered arrived with a cracked lid. The online store promised to send a free _____ within three days.",
    "options": [
      "mechanic",
      "replacement",
      "adjustment",
      "fault"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Some employees said the meeting room was too dark for the video call. Please _____ the lights before the clients arrive.",
    "options": [
      "adjust",
      "rebuild",
      "patch",
      "mend"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new software works well for most users. However, it needs a small _____ to show prices in Taiwan dollars.",
    "options": [
      "handyman",
      "mechanic",
      "adjustment",
      "warranty"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The legs of the conference table are shaking a little. Please _____ the screws so that the table feels steady again.",
    "options": [
      "loosen",
      "renovate",
      "restore",
      "tighten"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The lid on the water tank is stuck and nobody can open it. Use a wrench to _____ it carefully before you check the water.",
    "options": [
      "tighten",
      "loosen",
      "renovate",
      "maintain"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Rain is coming through a small hole in the warehouse roof. The workers will _____ it quickly with a piece of metal today.",
    "options": [
      "loosen",
      "inspect",
      "patch",
      "tighten"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The airline's oldest planes are out of service this month. Each one is getting a complete _____ of its engines and wiring.",
    "options": [
      "overhaul",
      "handyman",
      "fault",
      "tool"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Government officers will visit the factory on Monday. They will _____ every machine to make sure it meets safety rules.",
    "options": [
      "loosen",
      "inspect",
      "mend",
      "patch"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The new restaurant cannot open until next week. It must first pass a health and safety _____ by city officials.",
    "options": [
      "renovation",
      "technician",
      "replacement",
      "inspection"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Our company cars should be taken to the garage every six months. The dealer will _____ them and change the oil.",
    "options": [
      "service",
      "renovate",
      "mend",
      "loosen"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The hotel lobby looks old and tired. The owners plan to _____ it next year with new floors, lights, and furniture.",
    "options": [
      "tighten",
      "loosen",
      "renovate",
      "mend"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The bank's main branch is closed for a full _____. Customers can use the branch on Park Street until it reopens in May.",
    "options": [
      "mechanic",
      "tool",
      "defect",
      "renovation"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The earthquake destroyed the old train station last year. The city will _____ it with stronger materials and a larger waiting area.",
    "options": [
      "tighten",
      "rebuild",
      "loosen",
      "adjust"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The cabinet doors in our office kitchen keep falling open. Let's hire a _____ to fix them and change the broken light.",
    "options": [
      "warranty",
      "defect",
      "restoration",
      "handyman"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "This coffee machine comes with a two-year _____. If it stops working before then, the company will repair it for free.",
    "options": [
      "technician",
      "renovation",
      "warranty",
      "adjustment"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "fix": {
    "pos": "v.",
    "en_def": "to make something that is broken work again",
    "cn_def": "修理；解決"
  },
  "mend": {
    "pos": "v.",
    "en_def": "to repair something that is torn or broken",
    "cn_def": "修補；縫補"
  },
  "restore": {
    "pos": "v.",
    "en_def": "to bring something back to how it was before",
    "cn_def": "恢復；修復"
  },
  "restoration": {
    "pos": "n.",
    "en_def": "the work of making something old look or work like new again",
    "cn_def": "修復；整修"
  },
  "maintenance": {
    "pos": "n.",
    "en_def": "regular work to keep something in good condition",
    "cn_def": "維修；保養"
  },
  "maintain": {
    "pos": "v.",
    "en_def": "to keep something in good condition",
    "cn_def": "維持；保養"
  },
  "damage": {
    "pos": "n.",
    "en_def": "physical harm that makes something broken or less useful",
    "cn_def": "損害；損壞"
  },
  "broken": {
    "pos": "adj.",
    "en_def": "not working because it is damaged",
    "cn_def": "壞掉的；故障的"
  },
  "fault": {
    "pos": "n.",
    "en_def": "a problem in a machine or system that stops it working well",
    "cn_def": "故障；毛病"
  },
  "defect": {
    "pos": "n.",
    "en_def": "a mistake or weakness in how something is made",
    "cn_def": "瑕疵；缺陷"
  },
  "technician": {
    "pos": "n.",
    "en_def": "a worker trained to check and repair machines or systems",
    "cn_def": "技術人員；技師"
  },
  "mechanic": {
    "pos": "n.",
    "en_def": "a person whose job is repairing cars and engines",
    "cn_def": "技工；修車師傅"
  },
  "tool": {
    "pos": "n.",
    "en_def": "a thing you hold in your hand to make or repair something",
    "cn_def": "工具"
  },
  "equipment": {
    "pos": "n.",
    "en_def": "the machines and things needed for a job or activity",
    "cn_def": "設備；器材"
  },
  "replace": {
    "pos": "v.",
    "en_def": "to put a new thing in the place of an old or broken one",
    "cn_def": "更換；取代"
  },
  "replacement": {
    "pos": "n.",
    "en_def": "a new thing that takes the place of an old or broken one",
    "cn_def": "替換品；更換"
  },
  "adjust": {
    "pos": "v.",
    "en_def": "to change something a little so it works better",
    "cn_def": "調整；調節"
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a small change that makes something work better",
    "cn_def": "調整；調節"
  },
  "tighten": {
    "pos": "v.",
    "en_def": "to make something fixed more firmly",
    "cn_def": "鎖緊；使變緊"
  },
  "loosen": {
    "pos": "v.",
    "en_def": "to make something less tight",
    "cn_def": "鬆開；使變鬆"
  },
  "patch": {
    "pos": "v.",
    "en_def": "to cover a hole with a piece of material to repair it",
    "cn_def": "修補；補綴"
  },
  "overhaul": {
    "pos": "n.",
    "en_def": "a complete check and repair of a machine or system",
    "cn_def": "大修；全面檢修"
  },
  "inspect": {
    "pos": "v.",
    "en_def": "to look at something carefully to check its condition",
    "cn_def": "檢查；視察"
  },
  "inspection": {
    "pos": "n.",
    "en_def": "an official careful check of something",
    "cn_def": "檢查；檢驗"
  },
  "service": {
    "pos": "v.",
    "en_def": "to check and repair a machine or car regularly",
    "cn_def": "保養；檢修"
  },
  "renovate": {
    "pos": "v.",
    "en_def": "to repair and improve an old building or room",
    "cn_def": "整修；翻新"
  },
  "renovation": {
    "pos": "n.",
    "en_def": "the work of repairing and improving a building",
    "cn_def": "翻修；整修"
  },
  "rebuild": {
    "pos": "v.",
    "en_def": "to build something again after it was damaged or destroyed",
    "cn_def": "重建"
  },
  "handyman": {
    "pos": "n.",
    "en_def": "a person who is good at doing small repairs in buildings",
    "cn_def": "修繕雜工；水電師傅"
  },
  "warranty": {
    "pos": "n.",
    "en_def": "a written promise to repair a product for free for a period of time",
    "cn_def": "保固；保證書"
  }
};

const EXTRA_GLOSSES = {};
