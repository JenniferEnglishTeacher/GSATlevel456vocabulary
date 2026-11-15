// Topic 36 Quiz Data: Break 休息
// Source word list: https://www.examword.com/group-topic/break — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T36 - Break 休息",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "rest",
    "pos": "n.",
    "cn_def": "休息",
    "en_def": "a period of relaxing or sleeping to get back your energy",
    "sentence": "A: You look exhausted after flying back from the trade show in Singapore, so are you planning to come to the sales meeting this afternoon? B: No, my manager told me to go home and get some {{BLANK}} first, because I barely slept on the plane and I need a clear head for tomorrow's client visit.",
    "cn": "A：你從新加坡的商展飛回來看起來累壞了，你打算來參加今天下午的業務會議嗎？ B：不，我的經理叫我先回家好好【休息】，因為我在飛機上幾乎沒睡，而且明天拜訪客戶需要頭腦清醒。"
  },
  {
    "word": "pause",
    "pos": "n.",
    "cn_def": "暫停；停頓",
    "en_def": "a short stop in speaking or doing something",
    "sentence": "A: The speaker at this morning's training session talked very fast, so how did the new employees manage to take notes on all the safety rules? B: She made a short {{BLANK}} after each important point, which gave everyone a few seconds to write things down and ask questions before she moved on to the next slide.",
    "cn": "A：今天早上訓練課程的講者講得很快，新員工是怎麼把所有安全規定都記下來的？ B：她在每個重點之後都會短暫【停頓】一下，讓大家有幾秒鐘可以寫下來並發問，然後才進到下一張投影片。"
  },
  {
    "word": "interval",
    "pos": "n.",
    "cn_def": "間隔；間隔時間",
    "en_def": "the time between two events",
    "sentence": "A: How often does the shuttle bus run between the train station and the convention center during the international technology fair next week? B: The organizers said there will be a fifteen-minute {{BLANK}} between buses from seven in the morning until nine at night, so visitors should never have to wait very long in the cold.",
    "cn": "A：下週國際科技展期間，火車站和會展中心之間的接駁車多久一班？ B：主辦單位說從早上七點到晚上九點，每班車之間【間隔】十五分鐘，所以參觀者不必在寒冷中等太久。"
  },
  {
    "word": "time off",
    "pos": "n.phr.",
    "cn_def": "休假；不上班的時間",
    "en_def": "time when you are not at work",
    "sentence": "A: Have you decided what you're going to do after the big product launch is finished at the end of this month? B: I've asked my supervisor for some {{BLANK}} in early December, because I have been working overtime for weeks and I really want to visit my parents in the countryside.",
    "cn": "A：你決定這個月底大型產品發表會結束後要做什麼了嗎？ B：我已經向主管申請十二月初【休假】幾天，因為我已經連續加班好幾週了，真的很想回鄉下看看我爸媽。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become calm",
    "sentence": "A: The hotel guests in room 512 just complained that the meeting next door was too noisy, so what should we offer them? B: Let's give them free tickets to the spa on the top floor, where they can {{BLANK}} in the hot pool and enjoy a massage while we move the conference to a different room.",
    "cn": "A：512號房的房客剛剛抱怨隔壁的會議太吵，我們應該提供他們什麼？ B：我們送他們頂樓水療中心的免費券吧，他們可以在溫水池裡【放鬆】、享受按摩，同時我們把會議移到別的房間。"
  },
  {
    "word": "unwind",
    "pos": "v.",
    "cn_def": "放鬆心情；紓壓",
    "en_def": "to relax after work or a stressful time",
    "sentence": "A: Most of the accountants have been staying in the office until midnight to finish the annual report, so how can we help them feel better? B: I'm planning a casual dinner at the Italian restaurant across the street on Friday night, so everyone can {{BLANK}} together and forget about numbers for a few hours.",
    "cn": "A：大部分會計師為了完成年度報告都待在辦公室到半夜，我們要怎麼讓他們好過一點？ B：我打算週五晚上在對街的義大利餐廳辦個輕鬆的晚餐，讓大家可以一起【放鬆心情】，暫時忘掉數字幾個小時。"
  },
  {
    "word": "recharge",
    "pos": "v.",
    "cn_def": "恢復精力；充電",
    "en_def": "to get your energy back by resting",
    "sentence": "A: Why did the company decide to give every employee an extra day off after the busy holiday shopping season? B: The managers believe that people need time to rest and {{BLANK}} after working long hours, so they come back to work with more energy and new ideas for the coming year.",
    "cn": "A：公司為什麼決定在忙碌的假期購物季後給每位員工多放一天假？ B：主管們認為大家在長時間工作後需要休息、【恢復精力】，這樣回來上班時才會更有活力，並為新的一年帶來新點子。"
  },
  {
    "word": "recover",
    "pos": "v.",
    "cn_def": "康復；恢復",
    "en_def": "to get well again after being sick, hurt or in trouble",
    "sentence": "A: Is the warehouse manager coming back to work on Monday, or should we ask someone else to check the deliveries next week? B: He called this morning and said he needs a few more days at home to {{BLANK}} from the flu, so please ask Linda to handle the deliveries until he returns.",
    "cn": "A：倉庫經理星期一會回來上班嗎？還是我們下週應該請別人檢查送貨？ B：他今天早上打電話來說還需要在家幾天從流感中【康復】，所以在他回來之前請琳達處理送貨的事。"
  },
  {
    "word": "refresh",
    "pos": "v.",
    "cn_def": "使恢復精神；使清爽",
    "en_def": "to make someone feel less tired and more lively",
    "sentence": "A: The workshop has been going on for three hours, and some of the participants look like they are falling asleep in their chairs. B: Let's stop for fifteen minutes so people can get a cup of coffee and some fresh air outside, which should {{BLANK}} everyone before we start the final group activity.",
    "cn": "A：研習已經進行三個小時了，有些參加者看起來快在椅子上睡著了。 B：我們停十五分鐘，讓大家去喝杯咖啡、到外面呼吸新鮮空氣，這應該能讓大家【恢復精神】，再開始最後的小組活動。"
  },
  {
    "word": "breather",
    "pos": "n.",
    "cn_def": "短暫休息；喘口氣",
    "en_def": "a short rest from work or effort",
    "sentence": "A: We have been answering customer emails nonstop since eight o'clock, and I can't even think clearly anymore. B: Why don't we take a quick {{BLANK}} and walk to the bakery around the corner, because a short walk will help us focus better when we come back to finish the rest of the messages.",
    "cn": "A：我們從八點開始就不停地回覆客戶的電子郵件，我已經沒辦法清楚思考了。 B：我們何不【稍作喘息】，走到轉角的麵包店，因為短暫散步能幫助我們回來處理剩下的訊息時更專心。"
  },
  {
    "word": "respite",
    "pos": "n.",
    "cn_def": "暫緩；喘息",
    "en_def": "a short time of relief from something unpleasant",
    "sentence": "A: The construction work outside our office has been extremely loud every day this month, so has anything changed? B: Yes, the workers are stopping for the national holiday this weekend, so we will finally get a short {{BLANK}} from the noise, although they will start drilling again on Monday morning.",
    "cn": "A：這個月我們辦公室外面的工程每天都非常吵，有什麼改變嗎？ B：有，工人們這個週末因國定假日停工，所以我們終於可以從噪音中得到短暫的【喘息】，不過他們星期一早上又會開始鑽地了。"
  },
  {
    "word": "timeout",
    "pos": "n.",
    "cn_def": "（比賽中的）暫停",
    "en_def": "a short stop in a game so a team can rest or plan",
    "sentence": "A: The basketball team that our company sponsors was losing badly at halftime, so what happened in the second half of the game? B: The coach called a {{BLANK}} in the third quarter and gave the players a new plan, and after that they scored twenty points in a row and won the match.",
    "cn": "A：我們公司贊助的籃球隊上半場輸得很慘，下半場發生了什麼事？ B：教練在第三節喊了【暫停】，給球員們一個新戰術，之後他們連得二十分，贏了比賽。"
  },
  {
    "word": "intermission",
    "pos": "n.",
    "cn_def": "中場休息",
    "en_def": "a short break between the parts of a show or concert",
    "sentence": "A: The clients we invited to the concert tonight might want something to eat, so is there a good time to visit the snack bar? B: Yes, there is a twenty-minute {{BLANK}} between the first and second parts of the show, so we can take them to the lobby for drinks and sandwiches then.",
    "cn": "A：我們今晚邀去聽音樂會的客戶可能會想吃點東西，有沒有適合去點心吧的時間？ B：有，表演上下半場之間有二十分鐘的【中場休息】，我們可以那時帶他們去大廳喝飲料、吃三明治。"
  },
  {
    "word": "downtime",
    "pos": "n.",
    "cn_def": "停機時間；（系統）無法運作的時間",
    "en_def": "time when a machine or system is not working",
    "sentence": "A: Why couldn't our customers place any online orders last night between midnight and three in the morning? B: The IT department planned some {{BLANK}} to update the website's payment system, and they sent an email to all customers last week to explain that the site would be unavailable for a few hours.",
    "cn": "A：為什麼我們的顧客昨晚午夜到凌晨三點之間無法在線上下單？ B：資訊部門安排了一段【停機時間】來更新網站的付款系統，他們上週也寄了電子郵件給所有顧客，說明網站會有幾個小時無法使用。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "閒暇；空閒時間",
    "en_def": "free time when you are not working",
    "sentence": "A: What kinds of facilities will the new apartment building near our head office offer to the people who live there? B: Besides a swimming pool and a gym, there will be a large garden and a reading room, so residents can enjoy their {{BLANK}} without leaving the building on weekends.",
    "cn": "A：我們總公司附近的新公寓大樓會提供住戶哪些設施？ B：除了游泳池和健身房，還會有大花園和閱讀室，所以住戶週末不必離開大樓就能享受【閒暇時光】。"
  },
  {
    "word": "vacation",
    "pos": "n.",
    "cn_def": "假期；度假",
    "en_def": "a period of time away from work or school for rest or travel",
    "sentence": "A: I noticed that Mr. Chen's desk has been empty all week, so is he working from home or visiting a client overseas? B: Neither, he is on a two-week {{BLANK}} with his family in Japan, and he asked me to answer his phone calls and forward any urgent emails until he gets back.",
    "cn": "A：我注意到陳先生的座位整個禮拜都空著，他是在家工作還是去國外拜訪客戶？ B：都不是，他和家人在日本【度假】兩週，他請我在他回來之前幫他接電話並轉寄緊急郵件。"
  },
  {
    "word": "holiday",
    "pos": "n.",
    "cn_def": "假日；節日",
    "en_def": "a day when most people do not have to work",
    "sentence": "A: Will the bank downtown be open on Monday, because I need to deposit the payments we received from our customers? B: No, Monday is a national {{BLANK}}, so all the banks and government offices will be closed, but you can use the machine in the lobby or wait until Tuesday.",
    "cn": "A：市中心的銀行星期一會開嗎？我需要把客戶付的款項存進去。 B：不會，星期一是國定【假日】，所有銀行和政府機關都不上班，不過你可以使用大廳的機器，或等到星期二。"
  },
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡；午睡",
    "en_def": "a short sleep during the day",
    "sentence": "A: You seem much more cheerful this afternoon than you were this morning, so did you drink another cup of strong coffee? B: Actually, I took a short {{BLANK}} in the staff lounge during my lunch hour, and twenty minutes of sleep made me feel much more awake for the rest of the day.",
    "cn": "A：你今天下午看起來比早上開心多了，是又喝了一杯濃咖啡嗎？ B：其實我午休時間在員工休息室【小睡】了一下，睡二十分鐘讓我接下來一整天都清醒多了。"
  },
  {
    "word": "step back",
    "pos": "v.phr.",
    "cn_def": "退一步（思考）",
    "en_def": "to stop and think about a situation from a distance",
    "sentence": "A: Our team has been arguing about the new advertising plan for two hours, and nobody wants to change their opinion. B: I think we should {{BLANK}} and look at the bigger picture, because the main goal is to attract younger customers, not to prove who has the best idea.",
    "cn": "A：我們團隊為了新的廣告企劃已經吵了兩個小時，沒有人想改變意見。 B：我想我們應該【退一步】看看大局，因為主要目標是吸引年輕顧客，而不是證明誰的點子最好。"
  },
  {
    "word": "slow down",
    "pos": "v.phr.",
    "cn_def": "放慢腳步；減速",
    "en_def": "to do things less quickly or work less hard",
    "sentence": "A: The doctor at the company health check said my blood pressure is too high, and I'm worried because I work twelve hours a day. B: Maybe it's time to {{BLANK}} a little and let your assistant handle some of the smaller tasks, because your health is more important than any project deadline.",
    "cn": "A：公司健康檢查的醫生說我的血壓太高，我很擔心，因為我一天工作十二個小時。 B：或許是時候【放慢腳步】，讓你的助理處理一些比較小的工作了，因為你的健康比任何專案截止日都重要。"
  },
  {
    "word": "switch off",
    "pos": "v.phr.",
    "cn_def": "放空；不再想工作",
    "en_def": "to stop thinking about work and relax",
    "sentence": "A: Even when you're at home in the evening, you keep checking your work messages, so don't you ever feel tired? B: You're right, and my wife says I need to {{BLANK}} after dinner, so from now on I will leave my work phone in my bag and spend time with my children instead.",
    "cn": "A：即使晚上在家，你也一直在看工作訊息，你都不會覺得累嗎？ B：你說得對，我太太說我晚餐後需要【放空】，所以從現在起我會把工作手機放在包包裡，改成陪孩子。"
  },
  {
    "word": "take it easy",
    "pos": "v.phr.",
    "cn_def": "放輕鬆；別太勞累",
    "en_def": "to rest and not work too hard",
    "sentence": "A: I just got back from the hospital after my knee operation, but I'm thinking about returning to the office on Wednesday. B: Please {{BLANK}} for at least another week and work from home if you need to, because the doctor said walking too much could make your knee worse.",
    "cn": "A：我膝蓋開完刀剛出院，但我在考慮星期三就回辦公室。 B：請至少再【放輕鬆、別太勞累】一個禮拜，有需要的話就在家工作，因為醫生說走太多路會讓你的膝蓋更糟。"
  },
  {
    "word": "wind down",
    "pos": "v.phr.",
    "cn_def": "（逐漸）放鬆下來",
    "en_def": "to slowly relax after a busy or stressful time",
    "sentence": "A: What do you usually do in the evening after a stressful day of meetings with difficult customers? B: I like to {{BLANK}} by taking a warm bath and listening to soft music, and I try not to look at any screens for an hour before I go to bed.",
    "cn": "A：和難搞的客戶開了一整天壓力很大的會之後，你晚上通常做什麼？ B：我喜歡泡個熱水澡、聽輕柔的音樂來【放鬆下來】，而且睡前一小時我會盡量不看任何螢幕。"
  },
  {
    "word": "retreat",
    "pos": "n.",
    "cn_def": "休養處；靜修（會議）",
    "en_def": "a quiet place or trip where people go to rest, think or plan",
    "sentence": "A: Where is the management team going for their two-day planning meeting next month, since the conference room here is being repainted? B: They booked a quiet mountain {{BLANK}} about two hours from the city, where they can discuss next year's goals, go hiking together, and stay away from daily office problems.",
    "cn": "A：會議室在重新粉刷，管理團隊下個月兩天的規劃會議要去哪裡開？ B：他們預訂了距離市區大約兩小時、一處安靜的山中【休養所】，可以在那裡討論明年的目標、一起健行，並遠離日常辦公室的問題。"
  },
  {
    "word": "escape",
    "pos": "n.",
    "cn_def": "逃離；解脫",
    "en_def": "a way to get away from a stressful situation for a while",
    "sentence": "A: Why are so many office workers from the city booking rooms at that small beach hotel every weekend this summer? B: The hotel advertises itself as the perfect {{BLANK}} from busy city life, and its quiet rooms, fresh seafood, and beautiful sunsets make guests feel calm after a stressful week.",
    "cn": "A：為什麼今年夏天有那麼多城市上班族每週末都去訂那家小海濱飯店？ B：那家飯店宣傳自己是【逃離】忙碌都市生活的完美去處，安靜的房間、新鮮海鮮和美麗的夕陽，讓客人在壓力大的一週後感到平靜。"
  },
  {
    "word": "recreation",
    "pos": "n.",
    "cn_def": "休閒娛樂；消遣",
    "en_def": "activities people do for fun in their free time",
    "sentence": "A: The city government wants to turn the old factory near the river into something useful for local families, so what is the plan? B: They are going to build a park with tennis courts, bicycle paths, and a children's playground, so people will have more space for {{BLANK}} on evenings and weekends.",
    "cn": "A：市政府想把河邊的舊工廠改造成對當地家庭有用的地方，計畫是什麼？ B：他們要蓋一座公園，有網球場、自行車道和兒童遊樂場，讓大家在晚上和週末有更多空間從事【休閒娛樂】。"
  },
  {
    "word": "refreshment",
    "pos": "n.",
    "cn_def": "茶點；點心飲料",
    "en_def": "light food and drinks",
    "sentence": "A: Our seminar for new clients will last from nine in the morning until four in the afternoon, so will the guests get anything to eat or drink? B: Yes, the hotel will set up a {{BLANK}} table with coffee, tea, cookies, and fresh fruit during each break, and a full lunch will be served in the restaurant at noon.",
    "cn": "A：我們的新客戶研討會從早上九點到下午四點，來賓會有東西吃喝嗎？ B：有，飯店會在每次休息時擺設一張放有咖啡、茶、餅乾和新鮮水果的【茶點】桌，中午也會在餐廳供應完整的午餐。"
  },
  {
    "word": "reset",
    "pos": "v.",
    "cn_def": "重新設定；重整",
    "en_def": "to start again in a fresh way; to set again",
    "sentence": "A: I came back from my week at the beach feeling great, but I'm worried that the stress will return as soon as I open my email. B: A good vacation can really help you {{BLANK}} your mind, so try to keep some of those calm habits, like taking a walk at lunch, now that you're back at work.",
    "cn": "A：我在海邊待了一週回來感覺很棒，但我擔心一打開電子郵件壓力就會回來。 B：一個好的假期真的能幫你【重新整理】心情，所以既然回來上班了，試著保留一些平靜的習慣，例如午餐時去散步。"
  },
  {
    "word": "disconnect",
    "pos": "v.",
    "cn_def": "斷開；中斷聯繫",
    "en_def": "to stop being connected to work, people or the internet",
    "sentence": "A: Are you going to bring your laptop on your camping trip next weekend in case the office needs to contact you? B: No, I want to completely {{BLANK}} from work and the internet for three days, so I told my team to call my manager if any serious problems happen while I'm away.",
    "cn": "A：你下週末去露營會帶筆電嗎？以防辦公室需要聯絡你。 B：不會，我想完全【斷開】工作和網路三天，所以我已經告訴團隊，如果我不在時發生任何嚴重問題就打給我的經理。"
  }
];

const MCQS = [
  {
    "q": "After running the marathon for charity, the sales director needed a full day of _____. She returned to the office feeling strong on Wednesday.",
    "options": [
      "rest",
      "interval",
      "intermission",
      "timeout"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "There was a long _____ after the CEO announced the budget cuts. Nobody in the meeting room said anything for almost a minute.",
    "options": [
      "nap",
      "pause",
      "holiday",
      "retreat"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The night nurse checks each patient with a two-hour _____ between checks. The schedule is posted on the wall beside the front desk.",
    "options": [
      "recreation",
      "vacation",
      "leisure",
      "interval"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Employees who work on the national holiday will receive extra _____ later in the month. They can choose any two days they prefer.",
    "options": [
      "timeout",
      "nap",
      "time off",
      "intermission"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Soft music is played in the dentist's waiting room to help nervous patients _____. Many people say it makes them feel calmer before treatment.",
    "options": [
      "relax",
      "recover",
      "reset",
      "disconnect"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "After the busy product launch, the team went to a karaoke bar to _____. They sang songs and laughed together until late in the evening.",
    "options": [
      "reset",
      "refresh",
      "retreat",
      "unwind"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "My phone battery and I both need to _____ after this long trip. I will plug in the phone and then go straight to bed.",
    "options": [
      "step back",
      "disconnect",
      "recharge",
      "slow down"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "It took the factory three months to _____ from the fire last spring. Production finally returned to normal levels in July.",
    "options": [
      "relax",
      "recover",
      "switch off",
      "unwind"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "A cold glass of lemon juice will _____ you after working outside in the summer heat. The café downstairs sells it for two dollars.",
    "options": [
      "recover",
      "disconnect",
      "step back",
      "refresh"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The movers carried heavy boxes up five floors all morning. At noon, they sat on the stairs and took a well-deserved _____.",
    "options": [
      "breather",
      "interval",
      "holiday",
      "downtime"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The rain brought a welcome _____ from the terrible heat that had lasted for two weeks. Office workers finally turned off the air conditioners.",
    "options": [
      "nap",
      "respite",
      "intermission",
      "timeout"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "With only ten seconds left in the game, the coach called a _____ to plan the final play. The team then scored and won.",
    "options": [
      "recreation",
      "leisure",
      "timeout",
      "retreat"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The play at the city theater has two acts and a fifteen-minute _____. Guests may buy drinks in the lobby during that time.",
    "options": [
      "vacation",
      "nap",
      "downtime",
      "intermission"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The new printing machine has reduced _____ at our factory by forty percent. It rarely breaks down and needs few repairs.",
    "options": [
      "leisure",
      "respite",
      "downtime",
      "refreshment"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Many retired employees use their _____ to travel, garden, or volunteer in the community. The company newsletter shares some of their stories every month.",
    "options": [
      "leisure",
      "interval",
      "timeout",
      "pause"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Ms. Park will be on _____ in Thailand from August 3 to August 17. Please contact her assistant if you have any urgent questions.",
    "options": [
      "interval",
      "vacation",
      "recreation",
      "refreshment"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The office will be closed on Thursday because of the national _____. Normal business hours will begin again on Friday morning.",
    "options": [
      "holiday",
      "breather",
      "escape",
      "nap"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The airline offers business-class passengers a quiet lounge where they can take a _____ before their flight. Blankets and pillows are provided free.",
    "options": [
      "recreation",
      "nap",
      "interval",
      "retreat"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "When a project keeps failing, it is wise to _____ and ask why the plan is not working. Fresh thinking often solves the problem.",
    "options": [
      "wind down",
      "recharge",
      "refresh",
      "step back"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Drivers must _____ when they enter the school zone near our office. The speed limit there is only thirty kilometers per hour.",
    "options": [
      "unwind",
      "disconnect",
      "slow down",
      "switch off"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Some people find it hard to _____ after work because they keep thinking about their tasks. Regular exercise can help clear the mind.",
    "options": [
      "switch off",
      "recover",
      "refresh",
      "step back"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The doctor told Mr. Lee to _____ for a week after his back injury. He should avoid lifting anything heavy at the warehouse.",
    "options": [
      "disconnect",
      "step back",
      "take it easy",
      "switch off"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The hotel spa offers a quiet evening program to help guests _____ before bed. It includes herbal tea and gentle stretching.",
    "options": [
      "recover",
      "wind down",
      "step back",
      "reset"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Our marketing department will hold a weekend _____ at a lakeside lodge. The team will plan next year's campaigns away from the office.",
    "options": [
      "timeout",
      "pause",
      "nap",
      "retreat"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "For many busy parents, reading a good novel is a pleasant _____ from daily stress. The library now offers evening hours for working adults.",
    "options": [
      "escape",
      "downtime",
      "timeout",
      "interval"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new office complex includes a _____ area with table tennis and video games. Staff can use it during their lunch breaks.",
    "options": [
      "respite",
      "recreation",
      "pause",
      "holiday"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Please visit the _____ area in the lobby during the morning break. Coffee, juice, and small cakes are available there for all guests.",
    "options": [
      "leisure",
      "respite",
      "refreshment",
      "recreation"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "If the computer freezes, please _____ it by holding the power button for ten seconds. Then wait for the system to start again.",
    "options": [
      "relax",
      "recover",
      "unwind",
      "reset"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "During the weekend workshop, participants are asked to _____ from their phones and email. This helps them focus fully on the training.",
    "options": [
      "recharge",
      "disconnect",
      "wind down",
      "slow down"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The doctor said the injured player needs complete _____ for two weeks. He will not join any team practice until next month.",
    "options": [
      "holiday",
      "retreat",
      "escape",
      "rest"
    ],
    "answer": 3,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "rest": {
    "pos": "n.",
    "en_def": "a period of relaxing or sleeping to get back your energy",
    "cn_def": "休息"
  },
  "pause": {
    "pos": "n.",
    "en_def": "a short stop in speaking or doing something",
    "cn_def": "暫停；停頓"
  },
  "interval": {
    "pos": "n.",
    "en_def": "the time between two events",
    "cn_def": "間隔；間隔時間"
  },
  "time off": {
    "pos": "n.phr.",
    "en_def": "time when you are not at work",
    "cn_def": "休假；不上班的時間"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become calm",
    "cn_def": "放鬆"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to relax after work or a stressful time",
    "cn_def": "放鬆心情；紓壓"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to get your energy back by resting",
    "cn_def": "恢復精力；充電"
  },
  "recover": {
    "pos": "v.",
    "en_def": "to get well again after being sick, hurt or in trouble",
    "cn_def": "康復；恢復"
  },
  "refresh": {
    "pos": "v.",
    "en_def": "to make someone feel less tired and more lively",
    "cn_def": "使恢復精神；使清爽"
  },
  "breather": {
    "pos": "n.",
    "en_def": "a short rest from work or effort",
    "cn_def": "短暫休息；喘口氣"
  },
  "respite": {
    "pos": "n.",
    "en_def": "a short time of relief from something unpleasant",
    "cn_def": "暫緩；喘息"
  },
  "timeout": {
    "pos": "n.",
    "en_def": "a short stop in a game so a team can rest or plan",
    "cn_def": "（比賽中的）暫停"
  },
  "intermission": {
    "pos": "n.",
    "en_def": "a short break between the parts of a show or concert",
    "cn_def": "中場休息"
  },
  "downtime": {
    "pos": "n.",
    "en_def": "time when a machine or system is not working",
    "cn_def": "停機時間；（系統）無法運作的時間"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "free time when you are not working",
    "cn_def": "閒暇；空閒時間"
  },
  "vacation": {
    "pos": "n.",
    "en_def": "a period of time away from work or school for rest or travel",
    "cn_def": "假期；度假"
  },
  "holiday": {
    "pos": "n.",
    "en_def": "a day when most people do not have to work",
    "cn_def": "假日；節日"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡；午睡"
  },
  "step back": {
    "pos": "v.phr.",
    "en_def": "to stop and think about a situation from a distance",
    "cn_def": "退一步（思考）"
  },
  "slow down": {
    "pos": "v.phr.",
    "en_def": "to do things less quickly or work less hard",
    "cn_def": "放慢腳步；減速"
  },
  "switch off": {
    "pos": "v.phr.",
    "en_def": "to stop thinking about work and relax",
    "cn_def": "放空；不再想工作"
  },
  "take it easy": {
    "pos": "v.phr.",
    "en_def": "to rest and not work too hard",
    "cn_def": "放輕鬆；別太勞累"
  },
  "wind down": {
    "pos": "v.phr.",
    "en_def": "to slowly relax after a busy or stressful time",
    "cn_def": "（逐漸）放鬆下來"
  },
  "retreat": {
    "pos": "n.",
    "en_def": "a quiet place or trip where people go to rest, think or plan",
    "cn_def": "休養處；靜修（會議）"
  },
  "escape": {
    "pos": "n.",
    "en_def": "a way to get away from a stressful situation for a while",
    "cn_def": "逃離；解脫"
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activities people do for fun in their free time",
    "cn_def": "休閒娛樂；消遣"
  },
  "refreshment": {
    "pos": "n.",
    "en_def": "light food and drinks",
    "cn_def": "茶點；點心飲料"
  },
  "reset": {
    "pos": "v.",
    "en_def": "to start again in a fresh way; to set again",
    "cn_def": "重新設定；重整"
  },
  "disconnect": {
    "pos": "v.",
    "en_def": "to stop being connected to work, people or the internet",
    "cn_def": "斷開；中斷聯繫"
  }
};

const EXTRA_GLOSSES = {};
