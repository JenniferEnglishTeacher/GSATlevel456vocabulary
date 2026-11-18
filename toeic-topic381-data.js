// Topic 381 Quiz Data: Study Place 讀書場所
// Source word list: https://www.examword.com/group-topic/study-place — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T381 - Study Place 讀書場所",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館",
    "en_def": "a building or room where people can read or borrow books",
    "sentence": "A: Where do you usually prepare for your certification exam, since your apartment is so close to the busy train station? B: I go to the public {{BLANK}} downtown after work because it stays open until nine, and I can borrow the reference books I need without paying for them.",
    "cn": "A：既然你的公寓離繁忙的火車站那麼近，你通常在哪裡準備認證考試？ B：我下班後會去市中心的公共【圖書館】，因為它開到九點，而且我可以免費借到我需要的參考書。"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "cn_def": "教室",
    "en_def": "a room in a school or training center where classes are taught",
    "sentence": "A: Has the training department decided where the new employees will attend their safety orientation next Monday morning? B: Yes, they have booked the large {{BLANK}} on the third floor, because it has a projector, enough chairs for thirty people, and a whiteboard that the trainer can use for group activities.",
    "cn": "A：培訓部門決定好新進員工下週一早上要在哪裡參加安全說明會了嗎？ B：是的，他們預訂了三樓的大【教室】，因為那裡有投影機、足夠三十人坐的椅子，還有一塊講師可以用來進行小組活動的白板。"
  },
  {
    "word": "campus",
    "pos": "n.",
    "cn_def": "校園；園區",
    "en_def": "the land and buildings of a university, college, or large company",
    "sentence": "A: Is it difficult to find your way around the new company headquarters, since there are so many separate buildings? B: It was confusing during my first week, but now I know the {{BLANK}} well, and I usually walk from the parking lot to the research center in about ten minutes.",
    "cn": "A：既然新公司總部有那麼多獨立的建築，要在裡面找路會很困難嗎？ B：我第一週的時候很困惑，但現在我對【園區】很熟悉了，我通常大約十分鐘就能從停車場走到研發中心。"
  },
  {
    "word": "dormitory",
    "pos": "n.",
    "cn_def": "宿舍",
    "en_def": "a building where students or workers live and sleep",
    "sentence": "A: Where will the summer interns stay while they are working at our factory, since most of them come from other cities? B: The company has arranged rooms for them in a {{BLANK}} near the main gate, so they can walk to work every morning and save money on rent and transportation.",
    "cn": "A：既然暑期實習生大多來自其他城市，他們在我們工廠工作期間要住在哪裡？ B：公司已在大門附近的【宿舍】為他們安排了房間，所以他們每天早上可以走路上班，並省下房租和交通費。"
  },
  {
    "word": "study room",
    "pos": "n.phr.",
    "cn_def": "自習室；讀書室",
    "en_def": "a small room where people can read or work quietly",
    "sentence": "A: Can I reserve a place at the community center where my team can review the sales report together without being disturbed? B: Sure, you can book the {{BLANK}} on the second floor online; it holds six people, has a large table, and is available free of charge for two hours at a time.",
    "cn": "A：我可以在社區中心預約一個地方，讓我的團隊一起檢討銷售報告而不受打擾嗎？ B：當然，你可以在網路上預訂二樓的【自習室】；它可容納六個人，有一張大桌子，每次可免費使用兩小時。"
  },
  {
    "word": "laboratory",
    "pos": "n.",
    "cn_def": "實驗室",
    "en_def": "a room or building with special equipment for scientific tests and research",
    "sentence": "A: Why does everyone entering that building have to wear a white coat and safety glasses before going inside? B: That is our main {{BLANK}}, where the chemists test new cleaning products, so the rules are strict to protect workers from dangerous liquids and to keep the samples clean.",
    "cn": "A：為什麼每個進入那棟建築的人在進去之前都必須穿白袍、戴護目鏡？ B：那是我們的主要【實驗室】，化學家在那裡測試新的清潔產品，所以規定很嚴格，以保護員工不受危險液體傷害，並保持樣本乾淨。"
  },
  {
    "word": "lecture hall",
    "pos": "n.phr.",
    "cn_def": "演講廳；階梯教室",
    "en_def": "a large room with rows of seats where people listen to talks",
    "sentence": "A: Will the guest speaker from the marketing association give her presentation in the small meeting room as planned? B: No, more than two hundred people signed up, so we moved the event to the {{BLANK}} in the east building, which has better sound equipment and enough seats for everyone.",
    "cn": "A：行銷協會的客座講者會照原計畫在小會議室進行簡報嗎？ B：不會，有超過兩百人報名，所以我們把活動移到東棟的【演講廳】，那裡的音響設備比較好，而且座位足夠讓每個人都坐。"
  },
  {
    "word": "seminar room",
    "pos": "n.phr.",
    "cn_def": "研討室",
    "en_def": "a room used for small group classes or discussions",
    "sentence": "A: Where should we hold Thursday's workshop on writing better customer emails, since only about fifteen staff members are attending? B: Let's use the {{BLANK}} next to the cafeteria, because the tables can be arranged in a circle, which makes it easier for people to share ideas and practice together.",
    "cn": "A：既然只有大約十五位員工參加，我們週四關於撰寫更好的客戶電子郵件的工作坊應該在哪裡舉行？ B：我們用餐廳旁邊的【研討室】吧，因為桌子可以排成一圈，讓大家更容易分享想法和一起練習。"
  },
  {
    "word": "workspace",
    "pos": "n.",
    "cn_def": "工作空間",
    "en_def": "an area where a person does their work",
    "sentence": "A: How do you stay productive when you work from home, especially when your children are back from school in the afternoon? B: I set up a small {{BLANK}} in the guest bedroom with a good chair and a lamp, and I close the door so I can focus on my reports without interruptions.",
    "cn": "A：你在家工作時怎麼保持效率，尤其是下午孩子放學回家的時候？ B：我在客房裡布置了一個小【工作空間】，有一張好椅子和一盞檯燈，我會關上門，這樣就能專心寫報告而不被打擾。"
  },
  {
    "word": "desk",
    "pos": "n.",
    "cn_def": "書桌；辦公桌",
    "en_def": "a table used for reading, writing, or working on a computer",
    "sentence": "A: Why do you look so tired this morning, and did you finish preparing the budget for tomorrow's meeting with the director? B: I stayed at my {{BLANK}} until almost midnight checking every number, so the budget is ready, but I definitely need another cup of coffee before lunch.",
    "cn": "A：你今天早上怎麼看起來這麼累？你明天和主管開會用的預算準備好了嗎？ B：我在【辦公桌】前待到將近午夜檢查每個數字，所以預算已經準備好了，但我午餐前絕對還需要再喝一杯咖啡。"
  },
  {
    "word": "cubicle",
    "pos": "n.",
    "cn_def": "（辦公室）隔間",
    "en_def": "a small, partly enclosed work area in a large office",
    "sentence": "A: Have you found where the new accountant is sitting, because I need to give her these invoices before the end of the day? B: She has the {{BLANK}} right next to the printer on the fourth floor, so look for the one with the green plant and her name card on the wall.",
    "cn": "A：你知道新來的會計坐在哪裡嗎？因為我需要在今天下班前把這些發票交給她。 B：她的【隔間】就在四樓印表機旁邊，所以找那個有綠色盆栽、牆上貼著她名牌的位置就對了。"
  },
  {
    "word": "corner",
    "pos": "n.",
    "cn_def": "角落",
    "en_def": "a place where two walls or sides meet; a quiet part of a room",
    "sentence": "A: Is there a place in this café where I can make a phone call to my client without disturbing the other customers? B: Yes, try the small table in the far {{BLANK}} near the window, because it is away from the counter, and people rarely sit there during the afternoon.",
    "cn": "A：這家咖啡店有沒有地方可以讓我打電話給客戶，又不會打擾到其他客人？ B：有，你可以試試靠窗那個最遠【角落】的小桌子，因為它離櫃檯很遠，而且下午很少有人坐在那裡。"
  },
  {
    "word": "environment",
    "pos": "n.",
    "cn_def": "環境",
    "en_def": "the conditions around you that affect how you work or live",
    "sentence": "A: Why did the company decide to put soft lighting, plants, and comfortable sofas in the new staff lounge on the fifth floor? B: Managers believe that a relaxing {{BLANK}} helps employees reduce stress during breaks, and a recent survey showed that people return to their tasks with more energy afterward.",
    "cn": "A：公司為什麼決定在五樓新的員工休息室放置柔和的燈光、植物和舒適的沙發？ B：主管們相信一個放鬆的【環境】有助於員工在休息時減輕壓力，而且最近的一項調查顯示，大家之後回到工作時更有精力。"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "cn_def": "氣氛",
    "en_def": "the feeling or mood of a place",
    "sentence": "A: What did you think of the coworking center that opened last month across from the bank on Main Street? B: I really liked the friendly {{BLANK}} there, because the staff greeted everyone by name, soft music was playing, and other freelancers were happy to chat during the coffee break.",
    "cn": "A：你覺得上個月在主街銀行對面開幕的共享辦公中心怎麼樣？ B：我真的很喜歡那裡友善的【氣氛】，因為員工會叫出每個人的名字打招呼，播放著輕柔的音樂，其他自由工作者也很樂意在咖啡休息時間聊天。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making little or no noise",
    "sentence": "A: Why do you always choose the reading area on the top floor of the library instead of the tables near the entrance? B: The top floor is much more {{BLANK}} because there are no phones ringing or people talking, so I can concentrate on my accounting textbook for several hours.",
    "cn": "A：你為什麼總是選擇圖書館頂樓的閱讀區，而不是入口附近的桌子？ B：頂樓【安靜】多了，因為沒有電話鈴聲也沒有人講話，所以我可以專心讀我的會計課本好幾個小時。"
  },
  {
    "word": "noisy",
    "pos": "adj.",
    "cn_def": "吵雜的",
    "en_def": "making a lot of loud or unpleasant sound",
    "sentence": "A: Why did you move your laptop from the open office to the small meeting room after lunch today? B: The area near my desk was too {{BLANK}} because workers were drilling holes in the wall to install new shelves, and I could not hear my client clearly during our video call.",
    "cn": "A：你今天午餐後為什麼把筆電從開放式辦公室移到小會議室？ B：我辦公桌附近的區域太【吵】了，因為工人正在牆上鑽孔安裝新的架子，我在跟客戶視訊通話時聽不清楚他說話。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的",
    "en_def": "making you feel relaxed and physically at ease",
    "sentence": "A: Did you hear any feedback from the staff about the new office chairs we bought for the customer service team last week? B: Yes, most people said the chairs are very {{BLANK}}, especially during long shifts, and several employees mentioned that their backs no longer hurt by the end of the day.",
    "cn": "A：你有聽到員工對我們上週為客服團隊購買的新辦公椅有什麼反應嗎？ B：有，大部分人說這些椅子非常【舒適】，尤其是在長時間值班的時候，還有幾位員工提到他們下班時背已經不會痛了。"
  },
  {
    "word": "spacious",
    "pos": "adj.",
    "cn_def": "寬敞的",
    "en_def": "having a lot of space",
    "sentence": "A: How is the new branch office that opened in the business district, and is it bigger than our old one? B: It is much more {{BLANK}}, with enough room for forty desks, a large kitchen, and two meeting rooms, so the team no longer has to share tables or wait for a free space.",
    "cn": "A：在商業區新開的分公司怎麼樣？比我們舊的辦公室大嗎？ B：它【寬敞】多了，有足夠空間放四十張辦公桌、一個大廚房和兩間會議室，所以團隊不用再共用桌子或等待空位了。"
  },
  {
    "word": "crowded",
    "pos": "adj.",
    "cn_def": "擁擠的",
    "en_def": "full of people",
    "sentence": "A: Should we meet at the coffee shop near the train station to go over the contract before our appointment on Friday? B: That place is always {{BLANK}} at lunchtime because office workers from three nearby buildings go there, so let's use the quiet lounge in our hotel instead.",
    "cn": "A：我們要不要在火車站附近的咖啡店碰面，在週五的約會前先看過合約？ B：那裡午餐時間總是很【擁擠】，因為附近三棟大樓的上班族都會去，所以我們改用飯店裡安靜的休息室吧。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "明亮的",
    "en_def": "full of light",
    "sentence": "A: Why do so many employees prefer to work in the new reading area beside the large glass windows? B: It is very {{BLANK}} there during the day because sunlight comes in from both sides, so people can read documents easily without turning on the lamps, and the company also saves on electricity.",
    "cn": "A：為什麼這麼多員工喜歡在大玻璃窗旁的新閱讀區工作？ B：那裡白天非常【明亮】，因為陽光從兩側照進來，所以大家不開檯燈也能輕鬆閱讀文件，公司也因此省下電費。"
  },
  {
    "word": "dim",
    "pos": "adj.",
    "cn_def": "昏暗的",
    "en_def": "not bright; with little light",
    "sentence": "A: Why did you ask the building manager to replace the lights in the storage room yesterday afternoon? B: The light in there was so {{BLANK}} that I could not read the labels on the boxes, and I almost sent the wrong products to an important customer in Kaohsiung.",
    "cn": "A：你昨天下午為什麼要請大樓管理員更換儲藏室的燈？ B：那裡的燈光太【昏暗】了，我看不清楚箱子上的標籤，差點把錯的產品寄給高雄的一位重要客戶。"
  },
  {
    "word": "ventilation",
    "pos": "n.",
    "cn_def": "通風",
    "en_def": "the movement of fresh air into a room or building",
    "sentence": "A: Why do people feel sleepy so quickly in the training room on the basement level, even in the morning? B: The {{BLANK}} there is poor because there are no windows and the air system is old, so the maintenance team plans to install new fans next month to bring in fresh air.",
    "cn": "A：為什麼大家在地下室的培訓教室裡這麼快就想睡，即使是在早上？ B：那裡的【通風】很差，因為沒有窗戶，空調系統也很老舊，所以維修組計畫下個月安裝新的風扇來引進新鮮空氣。"
  },
  {
    "word": "facility",
    "pos": "n.",
    "cn_def": "設施",
    "en_def": "a building or place provided for a particular purpose",
    "sentence": "A: What did the visitors from the Japanese supplier want to see during their tour of our company yesterday? B: They mainly wanted to visit our new training {{BLANK}}, which includes computer labs, a library, and a cafeteria, because they are planning to build something similar for their own staff.",
    "cn": "A：昨天日本供應商的訪客參觀我們公司時，主要想看什麼？ B：他們主要想參觀我們新的培訓【設施】，裡面包括電腦教室、圖書館和餐廳，因為他們打算為自己的員工建造類似的地方。"
  },
  {
    "word": "resource",
    "pos": "n.",
    "cn_def": "資源",
    "en_def": "something useful, such as books, money, or tools, that people can use",
    "sentence": "A: Does the business center offer anything useful for small companies that are trying to enter overseas markets? B: Yes, it has an excellent online {{BLANK}} with market reports, sample contracts, and video lessons, and members can also book free meetings with trade experts every Wednesday.",
    "cn": "A：商業中心有提供什麼對想打入海外市場的小公司有用的東西嗎？ B：有，它有一個很棒的線上【資源】，包含市場報告、合約範本和影音課程，會員每週三也可以免費預約與貿易專家會談。"
  },
  {
    "word": "access",
    "pos": "n.",
    "cn_def": "進入（使用）的權利",
    "en_def": "the right or chance to enter or use something",
    "sentence": "A: Can new employees use the research library on the sixth floor, or is it only for senior staff members? B: Every employee has {{BLANK}} to the library with their ID card, but you need to sign in at the front counter if you want to borrow books or use the private computers.",
    "cn": "A：新進員工可以使用六樓的研究圖書館嗎？還是只限資深員工？ B：每位員工都可以用識別證【進入使用】圖書館，但如果你想借書或使用專用電腦，就需要在前面櫃檯登記。"
  },
  {
    "word": "accessible",
    "pos": "adj.",
    "cn_def": "容易到達的；可使用的",
    "en_def": "easy to reach, enter, or use",
    "sentence": "A: Why did the organizers choose the convention center downtown for next month's job fair instead of the hotel by the lake? B: The convention center is easily {{BLANK}} by subway and bus, and it has ramps and elevators, so visitors who use wheelchairs can move around the halls without any problems.",
    "cn": "A：主辦單位為什麼選擇市中心的會議中心舉辦下個月的就業博覽會，而不是湖邊的飯店？ B：會議中心搭地鐵和公車都很【容易到達】，而且有坡道和電梯，所以使用輪椅的訪客可以毫無問題地在各展廳間移動。"
  },
  {
    "word": "convenient",
    "pos": "adj.",
    "cn_def": "方便的",
    "en_def": "easy to use or reach; suitable for your plans",
    "sentence": "A: Would ten o'clock on Thursday morning work for our meeting with the design team about the new brochure? B: Thursday is not very {{BLANK}} for me because I will be visiting a client in Taichung all morning, so could we move the meeting to Friday afternoon instead?",
    "cn": "A：週四早上十點和設計團隊開會討論新手冊可以嗎？ B：週四對我來說不太【方便】，因為我整個早上都要去台中拜訪客戶，所以我們能把會議改到週五下午嗎？"
  },
  {
    "word": "nearby",
    "pos": "adj.",
    "cn_def": "附近的",
    "en_def": "not far away",
    "sentence": "A: Where can I get some lunch quickly, since I only have thirty minutes before the afternoon training session begins? B: There is a {{BLANK}} convenience store just across the street from our building, and it sells sandwiches, rice balls, and salads that you can eat in the break room.",
    "cn": "A：我可以在哪裡快速吃個午餐？因為下午的培訓課程開始前我只有三十分鐘。 B：【附近】就有一家便利商店，就在我們大樓對街，它有賣三明治、飯糰和沙拉，你可以在休息室吃。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的",
    "en_def": "calm and quiet, without noise or trouble",
    "sentence": "A: Why did your company hold its annual planning retreat in the mountains this year instead of at a hotel in the city? B: The managers wanted a {{BLANK}} place away from traffic and phone calls, so they could think clearly about next year's goals and talk openly without interruptions.",
    "cn": "A：你們公司今年為什麼在山上舉辦年度規劃靜修活動，而不是在市區的飯店？ B：主管們想要一個遠離車流和電話的【寧靜】地方，這樣他們才能清楚思考明年的目標，並在不受打擾的情況下坦誠交談。"
  },
  {
    "word": "organized",
    "pos": "adj.",
    "cn_def": "井然有序的；有條理的",
    "en_def": "arranged neatly and in a clear order",
    "sentence": "A: How do you find important files so quickly, even when your manager asks for them at the last minute? B: I keep my desk and computer folders very {{BLANK}}, with labels for each client and month, so I never waste time searching through piles of paper.",
    "cn": "A：即使你的主管在最後一刻才要文件，你怎麼能這麼快找到重要的檔案？ B：我把辦公桌和電腦資料夾保持得非常【井然有序】，每個客戶和月份都有標籤，所以我從不浪費時間在一堆紙張中翻找。"
  },
  {
    "word": "private",
    "pos": "adj.",
    "cn_def": "私人的；專用的",
    "en_def": "only for one person or group, not for everyone",
    "sentence": "A: Is there somewhere at the hotel where I can discuss salary details with the job candidate without other guests listening? B: Yes, the hotel offers a small {{BLANK}} meeting room on the second floor, and you can reserve it by the hour at the reception desk.",
    "cn": "A：飯店裡有沒有地方可以讓我和應徵者討論薪資細節，而不會被其他客人聽到？ B：有，飯店二樓有一間小型【私人】會議室，你可以在櫃檯按小時預約。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公共的；公開的",
    "en_def": "open to or used by everyone",
    "sentence": "A: Where can visitors to the trade show park their cars, since our company parking lot is only for employees? B: There is a large {{BLANK}} parking garage two blocks away on Fifth Street, and it charges a reasonable rate of forty dollars an hour for anyone who needs a space.",
    "cn": "A：既然我們公司的停車場只供員工使用，參加貿易展的訪客可以把車停在哪裡？ B：兩個街區外的第五街有一座大型【公共】停車場，任何需要車位的人只需支付每小時四十元的合理費用。"
  },
  {
    "word": "zone",
    "pos": "n.",
    "cn_def": "區域",
    "en_def": "an area with a particular use or rule",
    "sentence": "A: Can I take a phone call while I am sitting in the reading area on the third floor of the library? B: No, that whole floor is a silent {{BLANK}}, so you will have to go down to the lobby or step outside if you need to talk to someone on your mobile.",
    "cn": "A：我坐在圖書館三樓的閱讀區時可以接電話嗎？ B：不行，那整層樓都是靜音【區】，所以如果你需要用手機和人講話，就得下樓到大廳或走到外面。"
  },
  {
    "word": "outlet",
    "pos": "n.",
    "cn_def": "插座",
    "en_def": "a place in a wall where you connect electrical equipment",
    "sentence": "A: My laptop battery is almost dead, and I still need to finish these slides before the client arrives at three o'clock. B: There is an {{BLANK}} under the long table near the window, so you can plug in your charger there and keep working while you wait for the client.",
    "cn": "A：我的筆電快沒電了，而且我還得在客戶三點到之前做完這些投影片。 B：靠窗那張長桌下面有一個【插座】，所以你可以在那裡插上充電器，邊等客戶邊繼續工作。"
  },
  {
    "word": "wifi",
    "pos": "n.",
    "cn_def": "無線網路",
    "en_def": "a way of connecting computers or phones to the internet without wires",
    "sentence": "A: Is it possible to answer emails on the train while we travel to the conference in Tainan tomorrow morning? B: Yes, the high-speed train has free {{BLANK}} in every car, although the connection can be slow in tunnels, so download any large files before we leave the station.",
    "cn": "A：我們明天早上搭車去台南參加會議時，可以在火車上回電子郵件嗎？ B：可以，高鐵每節車廂都有免費【無線網路】，不過在隧道裡連線可能會很慢，所以出發前先把大檔案下載好。"
  }
];

const MCQS = [
  {
    "q": "Employees may borrow business magazines from the company _____ on the second floor. Each item must be returned within two weeks.",
    "options": [
      "library",
      "cubicle",
      "outlet",
      "ventilation"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The English instructor asked the trainees to arrange their chairs in a circle. The _____ quickly became a pleasant space for group discussion.",
    "options": [
      "outlet",
      "wifi",
      "classroom",
      "resource"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Visitors are asked to park in Lot B when they arrive. A free shuttle bus runs around the _____ every fifteen minutes.",
    "options": [
      "desk",
      "campus",
      "outlet",
      "cubicle"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "First-year students who live far from the university can apply for a room in the _____. Each room includes a bed and a closet.",
    "options": [
      "outlet",
      "atmosphere",
      "ventilation",
      "dormitory"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "All blood samples must be stored in the refrigerator inside the _____. Researchers must wear gloves whenever they handle them.",
    "options": [
      "wifi",
      "atmosphere",
      "laboratory",
      "cubicle"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "More than three hundred guests attended the professor's talk on global trade. The _____ was full, so some people stood at the back.",
    "options": [
      "lecture hall",
      "outlet",
      "desk",
      "cubicle"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "Our new office design gives every employee a personal _____ with a lockable drawer. Shared tables are also available near the kitchen.",
    "options": [
      "atmosphere",
      "ventilation",
      "wifi",
      "workspace"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Please leave the signed contract on my _____ before you go home. I will review it first thing tomorrow morning.",
    "options": [
      "ventilation",
      "desk",
      "atmosphere",
      "campus"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The sales office is divided into small spaces with low walls. Each staff member has a _____ with a computer and a phone.",
    "options": [
      "cubicle",
      "campus",
      "ventilation",
      "atmosphere"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The company works hard to create a safe and friendly work _____. Staff surveys are conducted twice a year to measure satisfaction.",
    "options": [
      "outlet",
      "wifi",
      "environment",
      "laboratory"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The restaurant's soft music and candles create a romantic _____. It is a popular choice for couples celebrating anniversaries.",
    "options": [
      "outlet",
      "atmosphere",
      "cubicle",
      "dormitory"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Please keep your voices down in the reading area. Visitors are asked to remain _____ so that others can concentrate on their work.",
    "options": [
      "crowded",
      "spacious",
      "nearby",
      "quiet"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The construction work next door has made our office very _____ this week. Several employees have started wearing headphones at their desks.",
    "options": [
      "private",
      "accessible",
      "noisy",
      "spacious"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The new hotel rooms feature soft beds and large armchairs. Guests say the rooms are extremely _____ after a long day of travel.",
    "options": [
      "comfortable",
      "nearby",
      "accessible",
      "crowded"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new conference room is _____ enough to hold eighty people. It also has a large screen and excellent sound equipment.",
    "options": [
      "dim",
      "nearby",
      "private",
      "spacious"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The train was so _____ this morning that I had to stand for the whole trip. I will leave home earlier tomorrow.",
    "options": [
      "private",
      "crowded",
      "dim",
      "accessible"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The new lamps make the reading area very _____ in the evening. Students no longer complain about tired eyes while they read.",
    "options": [
      "bright",
      "crowded",
      "noisy",
      "private"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The lights in the hallway are too _____ for visitors to read the room numbers. Please ask maintenance to replace them today.",
    "options": [
      "spacious",
      "convenient",
      "dim",
      "peaceful"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The kitchen needs better _____ because smoke fills the room whenever we cook. A new fan will be installed next week.",
    "options": [
      "cubicle",
      "ventilation",
      "campus",
      "dormitory"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The company opened a new manufacturing _____ in Taoyuan last year. It now employs more than five hundred local workers.",
    "options": [
      "atmosphere",
      "outlet",
      "desk",
      "facility"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "This website is a useful _____ for job seekers. It offers sample resumes, interview tips, and salary information for many industries.",
    "options": [
      "outlet",
      "cubicle",
      "resource",
      "ventilation"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Only staff members with a security card have _____ to the server room. Visitors must be accompanied by an employee at all times.",
    "options": [
      "access",
      "atmosphere",
      "ventilation",
      "wifi"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new museum is easily _____ by public transportation. Visitors can take the subway and walk just five minutes to the entrance.",
    "options": [
      "crowded",
      "dim",
      "noisy",
      "accessible"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Please let me know a _____ time for our next meeting with the client. I am free on Tuesday and Wednesday afternoons.",
    "options": [
      "crowded",
      "convenient",
      "dim",
      "spacious"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Our office is far from the city center, but there are several _____ cafés within a five-minute walk. Staff often go there at lunch.",
    "options": [
      "nearby",
      "dim",
      "private",
      "organized"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The garden behind the office building is a _____ place to relax during lunch breaks. Many staff members read books there.",
    "options": [
      "dim",
      "noisy",
      "peaceful",
      "organized"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The clinic offers a _____ room where patients can speak with the nurse alone. No one else is allowed inside during these meetings.",
    "options": [
      "crowded",
      "private",
      "noisy",
      "bright"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "My phone battery is almost empty, and I am expecting an important call. Is there an electrical _____ near this table?",
    "options": [
      "atmosphere",
      "environment",
      "dormitory",
      "outlet"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "Smoking is not allowed anywhere inside the airport terminal. Travelers who wish to smoke must use the designated outdoor _____.",
    "options": [
      "desk",
      "cubicle",
      "zone",
      "laboratory"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The café offers free _____ to all customers who buy a drink. Just ask the staff for the password when you order.",
    "options": [
      "wifi",
      "ventilation",
      "cubicle",
      "dormitory"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "library": {
    "pos": "n.",
    "en_def": "a building or room where people can read or borrow books",
    "cn_def": "圖書館"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room in a school or training center where classes are taught",
    "cn_def": "教室"
  },
  "campus": {
    "pos": "n.",
    "en_def": "the land and buildings of a university, college, or large company",
    "cn_def": "校園；園區"
  },
  "dormitory": {
    "pos": "n.",
    "en_def": "a building where students or workers live and sleep",
    "cn_def": "宿舍"
  },
  "study room": {
    "pos": "n.phr.",
    "en_def": "a small room where people can read or work quietly",
    "cn_def": "自習室；讀書室"
  },
  "laboratory": {
    "pos": "n.",
    "en_def": "a room or building with special equipment for scientific tests and research",
    "cn_def": "實驗室"
  },
  "lecture hall": {
    "pos": "n.phr.",
    "en_def": "a large room with rows of seats where people listen to talks",
    "cn_def": "演講廳；階梯教室"
  },
  "seminar room": {
    "pos": "n.phr.",
    "en_def": "a room used for small group classes or discussions",
    "cn_def": "研討室"
  },
  "workspace": {
    "pos": "n.",
    "en_def": "an area where a person does their work",
    "cn_def": "工作空間"
  },
  "desk": {
    "pos": "n.",
    "en_def": "a table used for reading, writing, or working on a computer",
    "cn_def": "書桌；辦公桌"
  },
  "cubicle": {
    "pos": "n.",
    "en_def": "a small, partly enclosed work area in a large office",
    "cn_def": "（辦公室）隔間"
  },
  "corner": {
    "pos": "n.",
    "en_def": "a place where two walls or sides meet; a quiet part of a room",
    "cn_def": "角落"
  },
  "environment": {
    "pos": "n.",
    "en_def": "the conditions around you that affect how you work or live",
    "cn_def": "環境"
  },
  "atmosphere": {
    "pos": "n.",
    "en_def": "the feeling or mood of a place",
    "cn_def": "氣氛"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making little or no noise",
    "cn_def": "安靜的"
  },
  "noisy": {
    "pos": "adj.",
    "en_def": "making a lot of loud or unpleasant sound",
    "cn_def": "吵雜的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "making you feel relaxed and physically at ease",
    "cn_def": "舒適的"
  },
  "spacious": {
    "pos": "adj.",
    "en_def": "having a lot of space",
    "cn_def": "寬敞的"
  },
  "crowded": {
    "pos": "adj.",
    "en_def": "full of people",
    "cn_def": "擁擠的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "full of light",
    "cn_def": "明亮的"
  },
  "dim": {
    "pos": "adj.",
    "en_def": "not bright; with little light",
    "cn_def": "昏暗的"
  },
  "ventilation": {
    "pos": "n.",
    "en_def": "the movement of fresh air into a room or building",
    "cn_def": "通風"
  },
  "facility": {
    "pos": "n.",
    "en_def": "a building or place provided for a particular purpose",
    "cn_def": "設施"
  },
  "resource": {
    "pos": "n.",
    "en_def": "something useful, such as books, money, or tools, that people can use",
    "cn_def": "資源"
  },
  "access": {
    "pos": "n.",
    "en_def": "the right or chance to enter or use something",
    "cn_def": "進入（使用）的權利"
  },
  "accessible": {
    "pos": "adj.",
    "en_def": "easy to reach, enter, or use",
    "cn_def": "容易到達的；可使用的"
  },
  "convenient": {
    "pos": "adj.",
    "en_def": "easy to use or reach; suitable for your plans",
    "cn_def": "方便的"
  },
  "nearby": {
    "pos": "adj.",
    "en_def": "not far away",
    "cn_def": "附近的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "calm and quiet, without noise or trouble",
    "cn_def": "寧靜的"
  },
  "organized": {
    "pos": "adj.",
    "en_def": "arranged neatly and in a clear order",
    "cn_def": "井然有序的；有條理的"
  },
  "private": {
    "pos": "adj.",
    "en_def": "only for one person or group, not for everyone",
    "cn_def": "私人的；專用的"
  },
  "public": {
    "pos": "adj.",
    "en_def": "open to or used by everyone",
    "cn_def": "公共的；公開的"
  },
  "zone": {
    "pos": "n.",
    "en_def": "an area with a particular use or rule",
    "cn_def": "區域"
  },
  "outlet": {
    "pos": "n.",
    "en_def": "a place in a wall where you connect electrical equipment",
    "cn_def": "插座"
  },
  "wifi": {
    "pos": "n.",
    "en_def": "a way of connecting computers or phones to the internet without wires",
    "cn_def": "無線網路"
  }
};

const EXTRA_GLOSSES = {};
