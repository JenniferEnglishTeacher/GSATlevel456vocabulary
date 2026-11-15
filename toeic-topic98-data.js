// Topic 98 Quiz Data: Day Off 休假日
// Source word list: https://www.examword.com/group-topic/day-off — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T98 - Day Off 休假日",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "holiday",
    "pos": "n.",
    "cn_def": "假日；節日",
    "en_def": "a day when people do not go to work or school",
    "sentence": "A: Is the office going to be open next Monday, or should I tell my clients to call back on Tuesday instead? B: Monday is a national {{BLANK}}, so the whole building will be closed, but our customer service team will still answer emails from home in the afternoon.",
    "cn": "A：辦公室下週一會開嗎？還是我應該請客戶改在週二再打來？ B：週一是國定【假日】，所以整棟大樓都會關閉，不過我們的客服團隊下午仍會在家回覆電子郵件。"
  },
  {
    "word": "vacation",
    "pos": "n.",
    "cn_def": "假期；休假",
    "en_def": "a period of time spent away from work, often traveling",
    "sentence": "A: Why has Mr. Lee asked the receptionist to forward all of his urgent calls to his assistant for the next two weeks? B: He is taking a long {{BLANK}} with his family in Japan, and he wants to enjoy the trip without worrying about work or checking his phone every hour.",
    "cn": "A：李先生為什麼要請接待員在接下來兩週把他所有的緊急電話轉給他的助理？ B：他要和家人去日本度一個長【假】，他想好好享受旅程，不用擔心工作，也不必每小時查看手機。"
  },
  {
    "word": "break",
    "pos": "n.",
    "cn_def": "休息時間",
    "en_def": "a short time when you stop working to rest",
    "sentence": "A: You have been sitting at your desk and typing that sales report since eight o'clock this morning, so aren't you tired? B: Yes, my eyes really hurt, so I'm going to take a short {{BLANK}} and walk to the café downstairs for a coffee before I finish the last section.",
    "cn": "A：你從今天早上八點就坐在桌前打那份銷售報告，不累嗎？ B：累啊，我的眼睛真的很痛，所以我要稍微【休息】一下，走到樓下的咖啡廳買杯咖啡，再完成最後一部分。"
  },
  {
    "word": "leave",
    "pos": "n.",
    "cn_def": "休假；假期",
    "en_def": "time that you are allowed to be away from your job",
    "sentence": "A: Will Jessica be able to lead the training session for the new staff members at the end of this month? B: No, she has asked for two weeks of paid {{BLANK}} to look after her father after his operation, so Tom from the human resources team will run it instead.",
    "cn": "A：潔西卡這個月底能帶領新進員工的訓練課程嗎？ B：不行，她父親手術後她要照顧他，所以申請了兩週的帶薪【休假】，因此改由人資部門的湯姆來主持。"
  },
  {
    "word": "rest",
    "pos": "v.",
    "cn_def": "休息",
    "en_def": "to stop working or moving so that your body can get better",
    "sentence": "A: You look very pale after flying back from the trade fair in Berlin last night, so why did you come to the office today? B: I wanted to finish the report, but you are right, so I will go home early this afternoon and {{BLANK}} until tomorrow morning.",
    "cn": "A：你昨晚從柏林的貿易展飛回來後看起來臉色很蒼白，今天為什麼還來辦公室？ B：我想把報告完成，不過你說得對，所以我今天下午會早點回家，【休息】到明天早上。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to become calm and stop worrying",
    "sentence": "A: What do you usually do after a long week of meetings with difficult customers and late nights at the office? B: On Friday evenings I like to sit on my balcony, listen to soft music, and {{BLANK}} with a cup of tea, because it helps me forget about work for a while.",
    "cn": "A：在和難搞的客戶開了一整週的會、又在辦公室待到很晚之後，你通常會做什麼？ B：週五晚上我喜歡坐在陽台上聽輕柔的音樂，喝杯茶【放鬆】一下，因為這能讓我暫時忘掉工作。"
  },
  {
    "word": "sleep in",
    "pos": "v.phr.",
    "cn_def": "睡懶覺；睡晚一點",
    "en_def": "to sleep later than usual in the morning",
    "sentence": "A: Are you going to join us for the early morning bike ride along the river this Saturday? B: I'm afraid not, because I've worked overtime every night this week, so I really want to {{BLANK}} until ten o'clock and then have a slow breakfast at home with my family.",
    "cn": "A：你這週六要跟我們一起去河邊騎清晨的腳踏車嗎？ B：恐怕不行，因為我這週每天晚上都在加班，所以我真的很想【睡懶覺】到十點，然後在家跟家人悠閒地吃早餐。"
  },
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡；午睡",
    "en_def": "a short sleep during the day",
    "sentence": "A: How do you stay so energetic during the afternoon when everyone else in the department looks tired after lunch? B: I usually take a twenty-minute {{BLANK}} in the quiet room on the fifth floor, and when I wake up, I can focus on my work again until six.",
    "cn": "A：午餐過後部門裡其他人都看起來很累，你下午怎麼還能那麼有精神？ B：我通常會在五樓的安靜室【小睡】二十分鐘，醒來後就能再專心工作到六點。"
  },
  {
    "word": "unwind",
    "pos": "v.",
    "cn_def": "放鬆身心",
    "en_def": "to relax after a period of work or stress",
    "sentence": "A: Why did the company decide to build a small garden with benches on the roof of the office building last year? B: The managers wanted to give employees a pleasant place where they could {{BLANK}} during their lunch hour, because many people were feeling stressed by the heavy workload.",
    "cn": "A：公司去年為什麼決定在辦公大樓頂樓蓋一座有長椅的小花園？ B：主管們想給員工一個舒適的地方，讓他們可以在午休時間【放鬆身心】，因為很多人被繁重的工作量壓得很有壓力。"
  },
  {
    "word": "recharge",
    "pos": "v.",
    "cn_def": "恢復精力；充電",
    "en_def": "to get back your energy by resting",
    "sentence": "A: Why are you taking three days off right after the busy product launch, when there are still so many emails to answer? B: I've been working twelve hours a day for a month, so I need time to {{BLANK}} at the beach before I start planning the next big project with the team.",
    "cn": "A：產品發表會忙完後還有那麼多郵件要回，你為什麼馬上要請三天假？ B：我已經連續一個月每天工作十二小時了，所以在和團隊開始規劃下一個大案子之前，我需要時間在海邊【充電】一下。"
  },
  {
    "word": "refresh",
    "pos": "v.",
    "cn_def": "使恢復精神；使清爽",
    "en_def": "to make someone feel less tired or hot",
    "sentence": "A: The workshop has been going on for three hours, so should we continue with the next topic or stop for a while? B: Let's stop for fifteen minutes so everyone can get some fresh air and {{BLANK}} themselves with cold drinks, and then we'll start the discussion about the new budget.",
    "cn": "A：工作坊已經進行三個小時了，我們要繼續下一個主題還是先停一下？ B：我們休息十五分鐘，讓大家呼吸新鮮空氣、喝杯冷飲【提神】一下，然後再開始討論新預算。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "休閒；空閒",
    "en_def": "time when you are not working and can do what you enjoy",
    "sentence": "A: Why do so many young engineers want to work for that software company even though the salary is not very high? B: The company gives its staff a four-day work week, so they have more {{BLANK}} time to spend with friends, play sports, or learn new skills outside the office.",
    "cn": "A：那家軟體公司薪水不算高，為什麼這麼多年輕工程師想去那裡工作？ B：公司讓員工一週只上四天班，所以他們有更多【休閒】時間可以和朋友相處、運動，或在辦公室以外學習新技能。"
  },
  {
    "word": "free time",
    "pos": "n.phr.",
    "cn_def": "空閒時間",
    "en_def": "time when you do not have to work or study",
    "sentence": "A: Do you have any plans for the long weekend, or are you going to stay in the city and catch up on work? B: I'm going to spend most of my {{BLANK}} at the community center, where I teach English to children, because I really enjoy helping them learn.",
    "cn": "A：連假你有什麼計畫嗎？還是要待在城裡把工作補完？ B：我打算把大部分的【空閒時間】花在社區中心，在那裡教小朋友英文，因為我真的很喜歡幫助他們學習。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好；興趣",
    "en_def": "an activity you do for fun in your free time",
    "sentence": "A: I noticed the beautiful photos of mountains on the wall of your office, so did a professional photographer take them? B: No, I took them myself, because photography has been my favorite {{BLANK}} since college, and I usually go hiking with my camera at least twice a month.",
    "cn": "A：我注意到你辦公室牆上那些漂亮的山景照片，是專業攝影師拍的嗎？ B：不是，是我自己拍的，因為攝影從大學起就是我最喜歡的【嗜好】，我通常每個月至少帶著相機去爬山兩次。"
  },
  {
    "word": "outing",
    "pos": "n.",
    "cn_def": "出遊；遠足",
    "en_def": "a short trip that a group takes for fun",
    "sentence": "A: What did the human resources department organize for the staff after the company reached its sales target this year? B: They planned a one-day {{BLANK}} to a farm in the mountains, where we picked strawberries, had a barbecue lunch, and played team games until the bus took us home.",
    "cn": "A：公司今年達成銷售目標後，人資部門為員工安排了什麼活動？ B：他們規劃了到山上農場的一日【出遊】，我們在那裡採草莓、吃烤肉午餐，還玩團隊遊戲，直到巴士載我們回家。"
  },
  {
    "word": "trip",
    "pos": "n.",
    "cn_def": "旅行；行程",
    "en_def": "a journey to a place and back again",
    "sentence": "A: Where did you go during the holiday last week, and why do you have so many photos of old temples on your phone? B: My wife and I took a short {{BLANK}} to Kyoto, where we visited several famous temples, tried local food, and stayed in a traditional guesthouse near the river.",
    "cn": "A：上週放假你去了哪裡？為什麼你手機裡有那麼多古廟的照片？ B：我和太太去京都做了一趟短期【旅行】，我們參觀了幾座有名的寺廟，品嚐當地美食，還住在河邊一間傳統民宿。"
  },
  {
    "word": "travel",
    "pos": "v.",
    "cn_def": "旅行；行進",
    "en_def": "to go from one place to another, often far away",
    "sentence": "A: Why did you decide to take all of your annual leave at once instead of using a few days each month? B: I want to {{BLANK}} around South America for three weeks, and I need enough time to visit several countries without rushing from one airport to another.",
    "cn": "A：你為什麼決定一次把年假全部休完，而不是每個月用幾天？ B：我想在南美洲【旅行】三週，我需要足夠的時間去好幾個國家，才不用匆匆忙忙從一個機場趕到另一個機場。"
  },
  {
    "word": "picnic",
    "pos": "n.",
    "cn_def": "野餐",
    "en_def": "a meal that you eat outdoors, often in a park",
    "sentence": "A: The weather forecast says it will be sunny and warm on Sunday, so do you have any plans with your family? B: We're going to have a {{BLANK}} in the park near the lake, so my husband is making sandwiches and I'm going to bring fruit, drinks, and a big blanket to sit on.",
    "cn": "A：氣象預報說星期天會晴朗溫暖，你跟家人有什麼計畫嗎？ B：我們要在湖邊的公園【野餐】，所以我先生在做三明治，我會帶水果、飲料和一條可以坐的大毯子。"
  },
  {
    "word": "movie",
    "pos": "n.",
    "cn_def": "電影",
    "en_def": "a story shown in moving pictures at a cinema or on TV",
    "sentence": "A: What did you and your coworkers do after you finished the big project on Friday evening? B: We went to see a new {{BLANK}} at the cinema near the station, and after that we had dinner together at an Italian restaurant and talked about our plans for next year.",
    "cn": "A：週五晚上大案子結束後，你和同事們做了什麼？ B：我們去車站附近的電影院看了一部新【電影】，之後一起在一家義大利餐廳吃晚餐，聊了明年的計畫。"
  },
  {
    "word": "read",
    "pos": "v.",
    "cn_def": "閱讀；讀",
    "en_def": "to look at and understand written words",
    "sentence": "A: How do you usually spend your Sunday mornings when you don't have to go into the office? B: I like to sit in a quiet café near my apartment and {{BLANK}} a good novel for a few hours, because it helps me forget about my busy job and feel calm.",
    "cn": "A：不用進辦公室的星期天早上，你通常怎麼度過？ B：我喜歡坐在我公寓附近一間安靜的咖啡館，【閱讀】一本好小說幾個小時，因為這能讓我忘掉忙碌的工作，感到平靜。"
  },
  {
    "word": "watch",
    "pos": "v.",
    "cn_def": "觀看",
    "en_def": "to look at something for a period of time",
    "sentence": "A: Are you coming to the team dinner on Saturday night, or do you have other plans with your friends? B: Sorry, I can't come, because my friends and I are going to {{BLANK}} the final game of the basketball season at a sports bar downtown, and we booked a table weeks ago.",
    "cn": "A：你週六晚上會來團隊聚餐嗎？還是你跟朋友有別的計畫？ B：抱歉，我不能去，因為我和朋友要去市中心的運動酒吧【看】籃球季的總決賽，我們幾週前就訂好位子了。"
  },
  {
    "word": "cook",
    "pos": "v.",
    "cn_def": "烹煮；做飯",
    "en_def": "to make food ready to eat by heating it",
    "sentence": "A: Why do you bring your own lunch to the office every day instead of eating at the restaurant downstairs with us? B: I enjoy spending Sunday afternoons in my kitchen, where I {{BLANK}} healthy meals for the whole week, and it also saves me a lot of money each month.",
    "cn": "A：你為什麼每天都自己帶午餐到公司，而不跟我們在樓下的餐廳吃？ B：我喜歡星期天下午待在廚房，【煮】好一整週的健康餐點，而且這樣每個月也能幫我省下不少錢。"
  },
  {
    "word": "clean",
    "pos": "v.",
    "cn_def": "打掃；清潔",
    "en_def": "to remove dirt from something",
    "sentence": "A: You told me you were too busy to go out on Saturday, so what did you have to do all day? B: My parents are coming to stay with me next week, so I had to {{BLANK}} the whole apartment, wash the curtains, and buy new towels for the guest room.",
    "cn": "A：你說你週六忙到不能出門，那你一整天要做什麼？ B：我爸媽下週要來住我家，所以我得把整間公寓【打掃】乾淨、洗窗簾，還要幫客房買新毛巾。"
  },
  {
    "word": "exercise",
    "pos": "v.",
    "cn_def": "運動",
    "en_def": "to move your body to stay healthy and strong",
    "sentence": "A: How do you manage to stay so healthy when you work such long hours at the bank every day? B: I try to {{BLANK}} for at least an hour on my days off, usually by swimming at the sports center or jogging in the park, and I also walk to work when the weather is nice.",
    "cn": "A：你每天在銀行工作那麼長的時間，怎麼還能保持這麼健康？ B：我休假時盡量至少【運動】一小時，通常是去運動中心游泳或在公園慢跑，天氣好的時候我也會走路上班。"
  },
  {
    "word": "walk",
    "pos": "v.",
    "cn_def": "走路；遛（狗）",
    "en_def": "to go somewhere on foot; to take an animal out on foot",
    "sentence": "A: Your dog looks very happy and healthy, but how do you find time to take care of it with your busy work schedule? B: I always {{BLANK}} him along the river early in the morning before work, and on weekends we spend a few hours in the big park near my home.",
    "cn": "A：你的狗看起來很開心又健康，但工作那麼忙，你怎麼有時間照顧牠？ B：我總是在上班前一大早沿著河邊【遛】牠，週末我們則會在我家附近的大公園待上幾個小時。"
  },
  {
    "word": "shop",
    "pos": "v.",
    "cn_def": "購物；買東西",
    "en_def": "to go to stores to buy things",
    "sentence": "A: Why are you leaving the office so early on a Friday afternoon when the manager is still in a meeting? B: I took a half day off because I need to {{BLANK}} for a new suit before my sister's wedding next week, and the stores in the mall get very crowded in the evening.",
    "cn": "A：經理還在開會，你為什麼週五下午這麼早就離開辦公室？ B：我請了半天假，因為下週我姊姊結婚前我得去【買】一套新西裝，而購物中心的店晚上會非常擁擠。"
  },
  {
    "word": "visit",
    "pos": "v.",
    "cn_def": "探望；參觀",
    "en_def": "to go to see a person or place",
    "sentence": "A: Do you have any plans for the Lunar New Year holiday, or will you stay in Taipei and relax at home? B: I'm going to take the high-speed train to Tainan to {{BLANK}} my grandparents, who I haven't seen since last summer because I've been so busy with my new job.",
    "cn": "A：農曆新年假期你有什麼計畫嗎？還是會待在台北在家休息？ B：我要搭高鐵去台南【探望】我的祖父母，因為新工作太忙，我從去年夏天就沒見過他們了。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集；團聚",
    "en_def": "to come together in one place as a group",
    "sentence": "A: What does your family usually do on the national holiday in October, when everyone has the day off? B: All of my relatives {{BLANK}} at my uncle's house in the countryside, where we cook a big lunch together, play cards, and share news about our jobs and children.",
    "cn": "A：十月國定假日大家都放假時，你們家通常做什麼？ B：我所有的親戚都會【聚集】在我叔叔鄉下的房子，我們一起煮一頓豐盛的午餐、打牌，並分享彼此工作和孩子的近況。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable for a special day or event",
    "sentence": "A: Why is the restaurant on the top floor of the hotel fully booked for this Friday evening? B: Our company has reserved the whole place to {{BLANK}} its twentieth anniversary, and the president has invited all employees, their families, and some of our most important clients.",
    "cn": "A：飯店頂樓的餐廳這週五晚上為什麼全部被訂滿了？ B：我們公司包下整間餐廳來【慶祝】成立二十週年，總裁邀請了全體員工、他們的家人，以及一些我們最重要的客戶。"
  },
  {
    "word": "lazy",
    "pos": "adj.",
    "cn_def": "懶散的；慵懶的",
    "en_def": "not wanting to work or do anything active",
    "sentence": "A: Did you do anything special on your day off yesterday, like going to the beach or visiting the new museum? B: No, it was a {{BLANK}} day, because I stayed in my pajamas until noon, ordered pizza for lunch, and watched television on the sofa for most of the afternoon.",
    "cn": "A：你昨天休假有做什麼特別的事嗎？像是去海邊或參觀新的博物館？ B：沒有，那是【懶散】的一天，因為我穿著睡衣待到中午，午餐叫了披薩，下午大部分時間都在沙發上看電視。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；和平的",
    "en_def": "quiet and calm, without noise or trouble",
    "sentence": "A: Why did you choose that small hotel in the mountains for your vacation instead of a big resort by the sea? B: I wanted a {{BLANK}} place far away from traffic and crowds, where I could wake up to the sound of birds and walk in the forest without hearing any phones ring.",
    "cn": "A：你為什麼選擇山上那間小旅館度假，而不是海邊的大型度假村？ B：我想要一個遠離車流和人潮的【寧靜】地方，可以在鳥叫聲中醒來，在森林裡散步時也聽不到任何電話響。"
  },
  {
    "word": "quiet",
    "pos": "adj.",
    "cn_def": "安靜的",
    "en_def": "making very little noise",
    "sentence": "A: Where do you go when you want to read or think about a problem without any noise or interruptions? B: I usually go to the public library near my apartment, because the reading room on the third floor is always {{BLANK}}, even on busy Saturday afternoons when many students are studying there.",
    "cn": "A：當你想看書或思考問題、不想被噪音或打擾時，你會去哪裡？ B：我通常去我公寓附近的公立圖書館，因為三樓的閱覽室總是很【安靜】，即使在很多學生念書的忙碌週六下午也是。"
  },
  {
    "word": "restful",
    "pos": "adj.",
    "cn_def": "悠閒的；使人放鬆的",
    "en_def": "making you feel calm and rested",
    "sentence": "A: How was your long weekend at the hot spring hotel that the company gave you as a reward for your hard work? B: It was very {{BLANK}}, because I slept well, enjoyed the warm water every evening, and didn't check my work email once, so I feel full of energy today.",
    "cn": "A：公司為了獎勵你的辛勞送你去溫泉飯店過的那個連假怎麼樣？ B：非常【悠閒放鬆】，因為我睡得很好，每天晚上都享受溫泉，而且一次都沒查看工作郵件，所以我今天覺得精力充沛。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "提神的；清爽的",
    "en_def": "making you feel less tired, hot or bored",
    "sentence": "A: Why do you go swimming in the outdoor pool every Saturday morning, even in the cold winter months? B: The cold water feels really {{BLANK}} after a long week in the office, and it wakes up my body and mind, so I feel ready for the weekend afterwards.",
    "cn": "A：你為什麼每週六早上都去戶外泳池游泳，連寒冷的冬天也一樣？ B：在辦公室忙了一整週後，冷水讓人覺得非常【清爽提神】，它能喚醒我的身體和頭腦，讓我之後覺得準備好迎接週末。"
  }
];

const MCQS = [
  {
    "q": "The bank will be closed on Monday because of the national _____. All online services will continue to work as usual.",
    "options": [
      "holiday",
      "hobby",
      "movie",
      "picnic"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Ms. Chen is on _____ in Bali until next Friday. Please contact her assistant if you need help with your order.",
    "options": [
      "trip",
      "nap",
      "vacation",
      "leisure"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The meeting was very long, so the chairperson gave everyone a ten-minute _____. Most people went outside for some fresh air.",
    "options": [
      "hobby",
      "break",
      "movie",
      "leisure"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Employees must request annual _____ at least two weeks in advance. Forms are available from the human resources office.",
    "options": [
      "picnic",
      "outing",
      "hobby",
      "leave"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After the long flight from New York, the sales team needed to _____ at the hotel. Their first meeting is not until tomorrow afternoon.",
    "options": [
      "celebrate",
      "visit",
      "rest",
      "cook"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The new staff lounge has soft chairs and calm music. It is a perfect place to _____ during your lunch break.",
    "options": [
      "relax",
      "clean",
      "celebrate",
      "cook"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Some technology companies provide sleeping pods for their workers. Staff can take a short _____ there when they feel tired in the afternoon.",
    "options": [
      "hobby",
      "movie",
      "picnic",
      "nap"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Many employees go to the spa on Friday evenings. They say it helps them _____ after a stressful week of deadlines.",
    "options": [
      "gather",
      "unwind",
      "celebrate",
      "visit"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The director spent a quiet week at a mountain cabin. She said she needed to _____ before the busy holiday sales season.",
    "options": [
      "recharge",
      "clean",
      "cook",
      "gather"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The resort offers many _____ activities, including tennis, yoga, and cooking classes. Guests can enjoy them free of charge.",
    "options": [
      "nap",
      "break",
      "leave",
      "leisure"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Mr. Park volunteers at the animal shelter in his _____. He usually goes there on Saturday mornings after breakfast.",
    "options": [
      "vacation",
      "hobby",
      "free time",
      "movie"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Gardening has become a popular _____ among office workers in the city. Many of them grow vegetables on their balconies.",
    "options": [
      "picnic",
      "hobby",
      "trip",
      "holiday"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "The company will hold its annual staff _____ at the beach next month. A bus will leave from the office at 8 a.m.",
    "options": [
      "hobby",
      "nap",
      "leisure",
      "outing"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The marketing team went on a business _____ to Singapore last week. They met three new clients at the trade show.",
    "options": [
      "trip",
      "holiday",
      "picnic",
      "hobby"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Our new credit card is perfect for people who often _____ overseas. It offers free airport lounge access and insurance for flights.",
    "options": [
      "cook",
      "travel",
      "clean",
      "gather"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The weather was perfect on Sunday, so the Lins had a _____ in the park. They brought sandwiches, fruit, and lemonade.",
    "options": [
      "hobby",
      "leave",
      "picnic",
      "movie"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The cinema is showing a new action _____ this weekend. Tickets bought online before Friday are twenty percent cheaper.",
    "options": [
      "movie",
      "outing",
      "trip",
      "nap"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Before the training session, all new employees must _____ the company handbook carefully. It explains our rules about holidays and sick leave.",
    "options": [
      "cook",
      "gather",
      "read",
      "celebrate"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Hundreds of fans gathered in the city square to _____ the final match on a giant screen. The local team won by two goals.",
    "options": [
      "read",
      "cook",
      "clean",
      "watch"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Chef Wang will teach guests how to _____ traditional Taiwanese dishes. The class takes place every Saturday in the hotel kitchen.",
    "options": [
      "watch",
      "cook",
      "visit",
      "gather"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Please _____ the meeting room after you use it. Throw away any paper cups and wipe the whiteboard before you leave.",
    "options": [
      "celebrate",
      "read",
      "clean",
      "visit"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "Doctors recommend that office workers _____ for at least thirty minutes a day. Even a short walk at lunchtime can improve your health.",
    "options": [
      "celebrate",
      "exercise",
      "gather",
      "visit"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Tourists who _____ the old town should try the famous beef noodles. The restaurant near the temple is open until midnight.",
    "options": [
      "visit",
      "cook",
      "gather",
      "exercise"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "On New Year's Eve, thousands of people _____ near Taipei 101 to see the fireworks. The MRT runs all night for the event.",
    "options": [
      "cook",
      "read",
      "clean",
      "gather"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The sales team went to a nice restaurant to _____ their record profits. The manager paid for everyone's dinner and drinks.",
    "options": [
      "clean",
      "celebrate",
      "read",
      "exercise"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "My brother is too _____ to cook on weekends. He just orders fast food and stays in bed until noon.",
    "options": [
      "refreshing",
      "peaceful",
      "restful",
      "lazy"
    ],
    "answer": 3,
    "vocabIndex": 29
  },
  {
    "q": "After months of talks, the two neighbors reached a _____ solution to their argument about the noisy party. Neither side needed lawyers.",
    "options": [
      "peaceful",
      "lazy",
      "refreshing",
      "restful"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Please be _____ in the library study area. Phone calls must be made outside in the hallway.",
    "options": [
      "lazy",
      "refreshing",
      "quiet",
      "restful"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Many employees _____ to the park during their lunch hour. It is only five minutes from the office on foot.",
    "options": [
      "cook",
      "walk",
      "clean",
      "read"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "After hiking for three hours in the heat, the cold mountain stream felt very _____. The hikers splashed water on their faces.",
    "options": [
      "refreshing",
      "lazy",
      "restful",
      "quiet"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "holiday": {
    "pos": "n.",
    "en_def": "a day when people do not go to work or school",
    "cn_def": "假日；節日"
  },
  "vacation": {
    "pos": "n.",
    "en_def": "a period of time spent away from work, often traveling",
    "cn_def": "假期；休假"
  },
  "break": {
    "pos": "n.",
    "en_def": "a short time when you stop working to rest",
    "cn_def": "休息時間"
  },
  "leave": {
    "pos": "n.",
    "en_def": "time that you are allowed to be away from your job",
    "cn_def": "休假；假期"
  },
  "rest": {
    "pos": "v.",
    "en_def": "to stop working or moving so that your body can get better",
    "cn_def": "休息"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to become calm and stop worrying",
    "cn_def": "放鬆"
  },
  "sleep in": {
    "pos": "v.phr.",
    "en_def": "to sleep later than usual in the morning",
    "cn_def": "睡懶覺；睡晚一點"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡；午睡"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to relax after a period of work or stress",
    "cn_def": "放鬆身心"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to get back your energy by resting",
    "cn_def": "恢復精力；充電"
  },
  "refresh": {
    "pos": "v.",
    "en_def": "to make someone feel less tired or hot",
    "cn_def": "使恢復精神；使清爽"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "time when you are not working and can do what you enjoy",
    "cn_def": "休閒；空閒"
  },
  "free time": {
    "pos": "n.phr.",
    "en_def": "time when you do not have to work or study",
    "cn_def": "空閒時間"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you do for fun in your free time",
    "cn_def": "嗜好；興趣"
  },
  "outing": {
    "pos": "n.",
    "en_def": "a short trip that a group takes for fun",
    "cn_def": "出遊；遠足"
  },
  "trip": {
    "pos": "n.",
    "en_def": "a journey to a place and back again",
    "cn_def": "旅行；行程"
  },
  "travel": {
    "pos": "v.",
    "en_def": "to go from one place to another, often far away",
    "cn_def": "旅行；行進"
  },
  "picnic": {
    "pos": "n.",
    "en_def": "a meal that you eat outdoors, often in a park",
    "cn_def": "野餐"
  },
  "movie": {
    "pos": "n.",
    "en_def": "a story shown in moving pictures at a cinema or on TV",
    "cn_def": "電影"
  },
  "read": {
    "pos": "v.",
    "en_def": "to look at and understand written words",
    "cn_def": "閱讀；讀"
  },
  "watch": {
    "pos": "v.",
    "en_def": "to look at something for a period of time",
    "cn_def": "觀看"
  },
  "cook": {
    "pos": "v.",
    "en_def": "to make food ready to eat by heating it",
    "cn_def": "烹煮；做飯"
  },
  "clean": {
    "pos": "v.",
    "en_def": "to remove dirt from something",
    "cn_def": "打掃；清潔"
  },
  "exercise": {
    "pos": "v.",
    "en_def": "to move your body to stay healthy and strong",
    "cn_def": "運動"
  },
  "walk": {
    "pos": "v.",
    "en_def": "to go somewhere on foot; to take an animal out on foot",
    "cn_def": "走路；遛（狗）"
  },
  "shop": {
    "pos": "v.",
    "en_def": "to go to stores to buy things",
    "cn_def": "購物；買東西"
  },
  "visit": {
    "pos": "v.",
    "en_def": "to go to see a person or place",
    "cn_def": "探望；參觀"
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in one place as a group",
    "cn_def": "聚集；團聚"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable for a special day or event",
    "cn_def": "慶祝"
  },
  "lazy": {
    "pos": "adj.",
    "en_def": "not wanting to work or do anything active",
    "cn_def": "懶散的；慵懶的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm, without noise or trouble",
    "cn_def": "寧靜的；和平的"
  },
  "quiet": {
    "pos": "adj.",
    "en_def": "making very little noise",
    "cn_def": "安靜的"
  },
  "restful": {
    "pos": "adj.",
    "en_def": "making you feel calm and rested",
    "cn_def": "悠閒的；使人放鬆的"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "making you feel less tired, hot or bored",
    "cn_def": "提神的；清爽的"
  }
};

const EXTRA_GLOSSES = {};
