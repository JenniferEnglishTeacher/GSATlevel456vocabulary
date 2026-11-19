// Topic 433 Quiz Data: Walking 步行
// Source word list: https://www.examword.com/group-topic/walking — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T433 - Walking 步行",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "purpose",
    "pos": "n.",
    "cn_def": "目的；用途",
    "en_def": "the reason for doing something",
    "sentence": "A: Why did the HR department send everyone a step counter last week, and do we have to wear it during office hours? B: The main {{BLANK}} of the program is to get staff moving more, so the company will give a small prize to anyone who walks ten thousand steps a day this month.",
    "cn": "A：人資部門上週為什麼發給每個人計步器？我們上班時間必須戴著嗎？ B：這個計畫的主要【目的】是讓員工多活動，所以公司這個月會頒發小獎品給每天走一萬步的人。"
  },
  {
    "word": "pulse",
    "pos": "n.",
    "cn_def": "脈搏",
    "en_def": "the regular beat of your heart that you can feel in your wrist or neck",
    "sentence": "A: How do you know if you are walking fast enough to get real health benefits during your lunch break? B: My doctor told me to check the {{BLANK}} on my wrist after ten minutes, and if my heart is beating a little faster than usual, I am walking at the right speed.",
    "cn": "A：你怎麼知道午休時走得夠快，能真正得到健康的好處？ B：我的醫生告訴我走十分鐘後量一下手腕上的【脈搏】，如果心跳比平常快一點，就表示我走的速度剛好。"
  },
  {
    "word": "promote",
    "pos": "v.",
    "cn_def": "促進；提倡",
    "en_def": "to help something happen or develop; to encourage",
    "sentence": "A: What is the city council planning to do with the old parking lot next to the train station downtown? B: They want to turn it into a green walking path with benches and trees, because they hope to {{BLANK}} healthy habits and reduce the number of cars in the city center.",
    "cn": "A：市議會打算怎麼處理市中心火車站旁的舊停車場？ B：他們想把它改成有長椅和樹木的綠色步道，因為他們希望【促進】健康的習慣，並減少市中心的車輛數量。"
  },
  {
    "word": "routine",
    "pos": "n.",
    "cn_def": "例行公事；日常作息",
    "en_def": "the usual things you do at the same time every day",
    "sentence": "A: You always seem so calm and full of energy when you arrive at the office, even on busy Monday mornings. What is your secret? B: My daily {{BLANK}} is simple: I get off the bus two stops early and walk the last kilometer, which gives me time to plan my day.",
    "cn": "A：你每次到辦公室時總是看起來很冷靜又充滿活力，連忙碌的週一早上也一樣，你的祕訣是什麼？ B：我的日常【作息】很簡單：我提早兩站下公車，走完最後一公里，這讓我有時間規劃一天的工作。"
  },
  {
    "word": "stone's throw",
    "pos": "n.phr.",
    "cn_def": "很近的距離；一箭之遙",
    "en_def": "a very short distance",
    "sentence": "A: Is the hotel that the travel agency booked for our sales team far from the convention center where the trade fair is being held? B: Not at all, it is just a {{BLANK}} from the main entrance, so we can leave our heavy bags in the rooms and walk there in about three minutes.",
    "cn": "A：旅行社幫我們業務團隊訂的飯店，離舉辦商展的會議中心遠嗎？ B：一點也不遠，它離正門只有【一箭之遙】，所以我們可以把重的包包留在房間，走路大約三分鐘就到了。"
  },
  {
    "word": "reverse",
    "pos": "v.",
    "cn_def": "扭轉；使逆轉",
    "en_def": "to change something back or to the opposite; to undo",
    "sentence": "A: My manager says that sitting at a desk for nine hours a day has hurt his back and raised his blood pressure. Is it too late for him to change? B: Not at all; studies show that regular walking can help {{BLANK}} some of the damage caused by sitting too long, even for people in their fifties.",
    "cn": "A：我的經理說每天坐在辦公桌前九小時傷了他的背，也讓他血壓升高，他現在改變會不會太晚了？ B：一點也不會；研究顯示，規律地走路可以幫助【扭轉】久坐造成的部分傷害，即使是五十幾歲的人也一樣。"
  },
  {
    "word": "on foot",
    "pos": "phr.",
    "cn_def": "步行；走路",
    "en_def": "walking, not using a car, bus or bike",
    "sentence": "A: How do most of the employees get to the new office building, since the parking spaces there are so expensive? B: Many of them come {{BLANK}} because they live in the apartments nearby, and the company also gives a monthly bonus to anyone who leaves the car at home.",
    "cn": "A：既然新辦公大樓的停車位那麼貴，大多數員工都怎麼去上班？ B：很多人都【步行】來上班，因為他們住在附近的公寓，而且公司也會每月發獎金給不開車的人。"
  },
  {
    "word": "keep-fit",
    "pos": "adj.",
    "cn_def": "健身的",
    "en_def": "relating to exercise that keeps your body healthy",
    "sentence": "A: Is the company still offering those free exercise sessions in the meeting room on the second floor every Wednesday? B: Yes, but this month the {{BLANK}} class has moved outdoors to the riverside park, where a trainer leads a fast walk for forty minutes before lunch.",
    "cn": "A：公司每週三還在二樓會議室提供免費的運動課程嗎？ B：有，不過這個月【健身】課移到河濱公園的戶外，由教練在午餐前帶大家快走四十分鐘。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "閒暇；空閒",
    "en_def": "free time when you are not working",
    "sentence": "A: What do you usually do on weekends now that the busy season at the accounting firm is finally over? B: I spend most of my {{BLANK}} time walking along the coast with my family, and sometimes we stop at a small café to have lunch and enjoy the view.",
    "cn": "A：既然會計事務所的忙季終於結束了，你週末通常都做些什麼？ B：我大部分的【閒暇】時間都和家人沿著海岸散步，有時我們會在一間小咖啡廳停下來吃午餐、欣賞風景。"
  },
  {
    "word": "pretty",
    "pos": "adv.",
    "cn_def": "相當；頗",
    "en_def": "fairly; quite",
    "sentence": "A: Should we take a taxi from the subway station to the client's office, or do you think we can walk there before the meeting starts? B: It is {{BLANK}} close, only about ten minutes away, and the weather is nice today, so let's walk and save the money for lunch afterward.",
    "cn": "A：我們要從捷運站搭計程車去客戶的辦公室，還是你覺得可以在會議開始前走過去？ B：那裡【相當】近，大約只要十分鐘，而且今天天氣很好，所以我們走路去，把錢省下來之後吃午餐吧。"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "cn_def": "郊區",
    "en_def": "an area where people live outside the center of a city",
    "sentence": "A: Why did you decide to move out of the city center after working downtown for so many years? B: We bought a house in a quiet {{BLANK}} with wide sidewalks and parks, so my children can walk to school safely, and I can take the express train to work.",
    "cn": "A：你在市中心工作了這麼多年，為什麼決定搬離市中心？ B：我們在一個安靜的【郊區】買了房子，那裡有寬闊的人行道和公園，所以我的孩子可以安全地走路上學，我也可以搭快車上班。"
  },
  {
    "word": "residents",
    "pos": "n.",
    "cn_def": "居民",
    "en_def": "people who live in a particular place",
    "sentence": "A: Why are there so many people at the community center this evening? Is there some kind of special event? B: The city is holding a meeting for local {{BLANK}} to share ideas about new walking paths, because many families have complained that the streets near the school are too dangerous.",
    "cn": "A：今晚社區中心為什麼有這麼多人？是有什麼特別活動嗎？ B：市政府正在為當地【居民】舉辦會議，分享關於新步道的想法，因為很多家庭抱怨學校附近的街道太危險了。"
  },
  {
    "word": "rely",
    "pos": "v.",
    "cn_def": "依賴；依靠",
    "en_def": "to depend on someone or something",
    "sentence": "A: How do you get around the city since you sold your car last year? Isn't it difficult to go to meetings across town? B: I {{BLANK}} on my own two feet and the subway; most of my clients are near the stations, so walking plus public transport works very well for me.",
    "cn": "A：你去年把車賣掉後，都怎麼在城市裡移動？去城市另一頭開會不會很麻煩嗎？ B：我【依靠】自己的雙腳和捷運；我大部分的客戶都在車站附近，所以走路加上大眾運輸對我來說很方便。"
  },
  {
    "word": "brisk walking",
    "pos": "n.phr.",
    "cn_def": "快走",
    "en_def": "walking quickly, as a form of exercise",
    "sentence": "A: My doctor told me I need more exercise, but I really don't have time to go to the gym after work. What would you suggest? B: Try thirty minutes of {{BLANK}} during your lunch break; it raises your heart rate, costs nothing, and you can do it in the park next to our office.",
    "cn": "A：醫生說我需要多運動，可是我下班後真的沒時間去健身房，你有什麼建議？ B：試試在午休時間做三十分鐘的【快走】；它能提高心跳，不用花錢，而且你可以在我們辦公室旁的公園做。"
  },
  {
    "word": "sedentary lifestyle",
    "pos": "n.phr.",
    "cn_def": "久坐不動的生活方式",
    "en_def": "a way of living with very little physical activity, such as sitting most of the day",
    "sentence": "A: Why is the company buying standing desks for everyone in the design department next month? B: Many designers sit in front of their computers for ten hours a day, and the health report showed that this {{BLANK}} was causing back pain and weight problems among the staff.",
    "cn": "A：公司下個月為什麼要幫設計部門每個人買站立式辦公桌？ B：很多設計師每天坐在電腦前十個小時，健康報告顯示這種【久坐不動的生活方式】正造成員工背痛和體重問題。"
  },
  {
    "word": "turning point",
    "pos": "n.phr.",
    "cn_def": "轉捩點",
    "en_def": "a time when an important change happens",
    "sentence": "A: You look so much healthier than you did last year. What made you start walking to work every day? B: The {{BLANK}} came when I couldn't climb the stairs to the third-floor meeting room without stopping, so I decided right then to change my habits for good.",
    "cn": "A：你看起來比去年健康多了，是什麼讓你開始每天走路上班的？ B：【轉捩點】出現在我爬樓梯到三樓會議室時必須中途停下來，所以我當下就決定徹底改變我的習慣。"
  },
  {
    "word": "unfortunately",
    "pos": "adv.",
    "cn_def": "不幸地；可惜",
    "en_def": "used to say that something is sad or disappointing",
    "sentence": "A: Are we still going on the company walking tour of the old town this Saturday, as the email said last week? B: {{BLANK}}, it has been canceled because heavy rain is expected all weekend, but the organizer said she will choose a new date next month when the weather is better.",
    "cn": "A：我們這週六還會照上週電子郵件說的，去參加公司的老城區徒步導覽嗎？ B：【很可惜】，因為預計整個週末都會下大雨，所以已經取消了，不過主辦人說她會在下個月天氣比較好時選一個新日期。"
  },
  {
    "word": "run errands",
    "pos": "v.phr.",
    "cn_def": "跑腿；辦雜事",
    "en_def": "to go out to do small jobs such as shopping or going to the post office",
    "sentence": "A: What do you usually do during your long lunch break on Fridays when there are no meetings? B: I usually walk around the neighborhood to {{BLANK}}, like mailing packages, picking up dry cleaning and buying groceries, so I have more free time with my family on the weekend.",
    "cn": "A：週五沒有會議的時候，你長長的午休時間通常做什麼？ B：我通常在附近走走去【辦雜事】，像是寄包裹、拿乾洗衣物和買菜，這樣週末我就能有更多時間陪家人。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新；新發明",
    "en_def": "a new idea, method or product",
    "sentence": "A: Have you seen the new app the city launched to help people find safe walking routes around downtown? B: Yes, it is a great {{BLANK}}; it shows which streets have good lighting and wide sidewalks, and it even suggests shady paths for hot summer afternoons.",
    "cn": "A：你看過市政府推出、幫助大家在市中心找到安全步行路線的新應用程式嗎？ B：看過，那是很棒的【創新】；它會顯示哪些街道照明良好、人行道寬敞，甚至會建議炎熱夏日午後適合走的陰涼路線。"
  },
  {
    "word": "reliant",
    "pos": "adj.",
    "cn_def": "依賴的",
    "en_def": "needing someone or something in order to work or live",
    "sentence": "A: Why does the government want to build more sidewalks and bicycle lanes in the new business district? B: Right now, workers there are too {{BLANK}} on cars, which causes terrible traffic jams every morning, so officials hope safer paths will encourage more people to walk.",
    "cn": "A：政府為什麼想在新商業區興建更多人行道和自行車道？ B：目前那裡的上班族太【依賴】汽車了，每天早上都造成嚴重塞車，所以官員希望更安全的道路能鼓勵更多人走路。"
  },
  {
    "word": "decent",
    "pos": "adj.",
    "cn_def": "像樣的；還不錯的",
    "en_def": "good enough; of an acceptable standard",
    "sentence": "A: Do you think I should buy expensive sports shoes before I join the office walking club next week? B: You don't need anything fancy; just get a {{BLANK}} pair of comfortable shoes with good support, because cheap ones might hurt your feet after a few kilometers.",
    "cn": "A：你覺得我下週加入公司健走社之前，應該買昂貴的運動鞋嗎？ B：你不需要買很花俏的，只要買一雙【像樣的】、支撐良好的舒適鞋子就好，因為便宜的鞋走幾公里後可能會讓你腳痛。"
  },
  {
    "word": "strolling around",
    "pos": "v.phr.",
    "cn_def": "閒逛；漫步",
    "en_def": "walking slowly and in a relaxed way",
    "sentence": "A: What did you do in Kyoto after the business conference ended on Friday afternoon? B: I spent the whole evening {{BLANK}} the old streets near the temple, looking at small shops and tasting local snacks, which was the perfect way to unwind after three busy days.",
    "cn": "A：週五下午商務會議結束後，你在京都做了什麼？ B：我整個晚上都在寺廟附近的老街【閒逛】，看看小店、品嚐當地小吃，這是忙碌三天後放鬆的完美方式。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and become calm",
    "sentence": "A: You seem much calmer these days, even though our team has more projects than ever. How do you manage the stress? B: After work, I take a slow walk by the river for half an hour; it helps me {{BLANK}} and forget about emails before I get home to my family.",
    "cn": "A：雖然我們團隊的專案比以往都多，你最近卻好像冷靜多了，你是怎麼處理壓力的？ B：下班後我會在河邊慢慢散步半小時；這幫助我【放鬆】，在回家見家人之前忘掉電子郵件。"
  },
  {
    "word": "jaunty",
    "pos": "adj.",
    "cn_def": "輕快的；得意洋洋的",
    "en_def": "showing that you feel happy and confident",
    "sentence": "A: Did you notice how happy the new sales manager looked when he came back from lunch this afternoon? B: Yes, he walked into the office with a {{BLANK}} step and a big smile, so I guess the meeting with the big client went better than he expected.",
    "cn": "A：你有注意到今天下午新業務經理午餐回來時看起來多開心嗎？ B：有啊，他踩著【輕快的】步伐、帶著大大的笑容走進辦公室，所以我猜他和大客戶的會議比他預期的還順利。"
  },
  {
    "word": "loose-limbed",
    "pos": "adj.",
    "cn_def": "四肢靈活的；動作輕鬆自如的",
    "en_def": "moving in an easy, relaxed way, with arms and legs that are not stiff",
    "sentence": "A: Who is that tall man moving so easily up the hill ahead of everyone on our company hiking trip? B: That's Mark from the IT department; he is a {{BLANK}} runner who trains every morning, so walking up this hill is nothing for him compared to a marathon.",
    "cn": "A：公司健行時，那個走在大家前面、輕鬆上坡的高個子男人是誰？ B：那是資訊部的馬克；他是個【四肢靈活的】跑者，每天早上都會訓練，所以和跑馬拉松比起來，走上這座山對他來說根本不算什麼。"
  },
  {
    "word": "ungainly",
    "pos": "adj.",
    "cn_def": "笨拙的；不優雅的",
    "en_def": "moving in a way that is not graceful; awkward",
    "sentence": "A: Why did the new receptionist look so uncomfortable walking across the hotel lobby this morning? B: She was wearing brand-new high heels for the first time, so her steps were slow and {{BLANK}}, but I'm sure she will get used to them after a few days.",
    "cn": "A：新來的接待員今天早上走過飯店大廳時為什麼看起來那麼不自在？ B：她第一次穿全新的高跟鞋，所以步伐又慢又【笨拙】，不過我相信幾天後她就會習慣了。"
  },
  {
    "word": "stately",
    "pos": "adj.",
    "cn_def": "莊嚴的；堂皇的",
    "en_def": "slow, formal and impressive",
    "sentence": "A: What was the most memorable part of the opening ceremony for the new city museum yesterday? B: I loved watching the mayor and the guests walk at a {{BLANK}} pace down the long red carpet while the orchestra played, because it made the whole event feel very grand.",
    "cn": "A：昨天新市立博物館開幕典禮最令人難忘的部分是什麼？ B：我很喜歡看市長和貴賓們在管弦樂團演奏時，以【莊嚴的】步伐走過長長的紅地毯，這讓整個活動感覺非常盛大。"
  },
  {
    "word": "vigorous",
    "pos": "adj.",
    "cn_def": "強而有力的；劇烈的",
    "en_def": "strong, active and full of energy",
    "sentence": "A: How much exercise does the health website recommend for office workers who sit at their desks all day? B: It says adults should do about seventy-five minutes of {{BLANK}} activity a week, such as fast uphill walking or jogging, to keep their hearts and lungs strong.",
    "cn": "A：健康網站建議整天坐在辦公桌前的上班族做多少運動？ B：網站說成年人每週應該做大約七十五分鐘的【劇烈】運動，像是快速上坡走路或慢跑，讓心肺保持強壯。"
  }
];

const MCQS = [
  {
    "q": "The _____ of today's meeting is to plan the company walking challenge. Please bring ideas for prizes and team names.",
    "options": [
      "purpose",
      "pulse",
      "routine",
      "leisure"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "After the stair-climbing test, the nurse checked each employee's _____. A fast heartbeat can show that someone needs more exercise.",
    "options": [
      "suburb",
      "purpose",
      "pulse",
      "innovation"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The new posters in the lobby are designed to _____ walking meetings. Managers hope staff will discuss projects while moving outdoors.",
    "options": [
      "reverse",
      "promote",
      "rely",
      "relax"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Walking to the office has become part of my morning _____. I leave home at seven thirty and arrive just before eight.",
    "options": [
      "suburb",
      "innovation",
      "pulse",
      "routine"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our new branch office is only a _____ from the central station. Visitors can easily walk there in two or three minutes.",
    "options": [
      "turning point",
      "sedentary lifestyle",
      "stone's throw",
      "brisk walking"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Doctors say daily walking can help _____ the effects of long hours at a desk. Even small changes can improve heart health.",
    "options": [
      "reverse",
      "rely",
      "relax",
      "arrive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Our hotel is close to the museum, so the tour group will travel there _____ instead of by bus. Please wear comfortable shoes.",
    "options": [
      "by mistake",
      "on purpose",
      "in advance",
      "on foot"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The sports center offers a _____ program for office workers every evening. It includes stretching, light weights and group walks.",
    "options": [
      "jaunty",
      "keep-fit",
      "ungainly",
      "stately"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "Many employees spend their _____ time walking in the hills near the city. The weekend trails are especially busy in autumn.",
    "options": [
      "leisure",
      "pulse",
      "innovation",
      "purpose"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The walk from the station to the factory is _____ long, about two kilometers. Most visitors prefer to take the shuttle bus.",
    "options": [
      "unfortunately",
      "nearly",
      "pretty",
      "rarely"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The manager moved to a quiet _____ outside Taipei last year. She now walks to the train station every morning before riding into the city.",
    "options": [
      "innovation",
      "suburb",
      "routine",
      "pulse"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Local _____ asked the city to build a safer sidewalk near the elementary school. Many children walk along that busy road every day.",
    "options": [
      "purposes",
      "routines",
      "suburbs",
      "residents"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Since the company closed its parking lot, most staff _____ on buses and walking to get to work. The change has reduced traffic nearby.",
    "options": [
      "promote",
      "reverse",
      "rely",
      "relax"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The health seminar recommended thirty minutes of _____ five days a week. This simple exercise can lower stress and improve heart health.",
    "options": [
      "brisk walking",
      "sedentary lifestyle",
      "turning point",
      "stone's throw"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Sitting at a computer all day can lead to a _____. The company now encourages short walks every hour to keep staff active.",
    "options": [
      "stone's throw",
      "brisk walking",
      "leisure time",
      "sedentary lifestyle"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "Joining the office walking club was a _____ in his life. He lost ten kilograms and felt more confident at work.",
    "options": [
      "stone's throw",
      "turning point",
      "sedentary lifestyle",
      "brisk walking"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The charity walk was planned for Saturday morning. _____, a typhoon warning forced the organizers to move it to next month.",
    "options": [
      "Unfortunately",
      "Pretty",
      "Rarely",
      "Nearly"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Office assistants often _____ such as delivering documents and buying supplies. Walking between buildings is part of their daily job.",
    "options": [
      "take notes",
      "make calls",
      "run errands",
      "pay attention"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The shoe company's latest _____ is a sole that measures how far you walk. The data is sent directly to your phone.",
    "options": [
      "purpose",
      "innovation",
      "routine",
      "suburb"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The town is heavily _____ on tourists who come to walk its famous mountain trails. Hotels and shops depend on their spending.",
    "options": [
      "decent",
      "stately",
      "vigorous",
      "reliant"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "You don't need expensive gear for the hiking trip. A _____ pair of walking shoes and a light raincoat will be enough.",
    "options": [
      "jaunty",
      "ungainly",
      "decent",
      "stately"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "During the lunch break, several staff members enjoy _____ the lake behind the office. The slow walk helps them clear their minds.",
    "options": [
      "strolling around",
      "giving up",
      "putting off",
      "taking off"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "After the long sales meeting, the team took a short walk to _____. Fresh air and sunshine helped everyone feel calm again.",
    "options": [
      "rely",
      "reverse",
      "promote",
      "relax"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "After hearing about her promotion, she left the office with a _____ step. She was smiling and humming all the way to the station.",
    "options": [
      "ungainly",
      "jaunty",
      "stately",
      "decent"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The coach chose a tall, _____ athlete to lead the walking race. His relaxed, flexible movements made walking fast look easy.",
    "options": [
      "loose-limbed",
      "ungainly",
      "stately",
      "decent"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Carrying three heavy boxes, the new intern moved down the hall with slow, _____ steps. He almost dropped everything twice.",
    "options": [
      "jaunty",
      "decent",
      "ungainly",
      "reliant"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The bride and groom walked down the aisle at a slow, _____ pace. Guests stood quietly as the music played in the grand hall.",
    "options": [
      "jaunty",
      "stately",
      "reliant",
      "vigorous"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Experts suggest at least twenty minutes of _____ exercise, such as fast uphill walking, three times a week. It strengthens the heart and lungs.",
    "options": [
      "ungainly",
      "stately",
      "reliant",
      "vigorous"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The new office is only five minutes from my apartment, so I go to work _____. I haven't driven my car in weeks.",
    "options": [
      "in advance",
      "on purpose",
      "on foot",
      "by mistake"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The city launched a campaign to _____ walking as a healthy way to commute. Free maps of safe routes are available at every station.",
    "options": [
      "promote",
      "reverse",
      "rely",
      "relax"
    ],
    "answer": 0,
    "vocabIndex": 2
  }
];

const LOOKUP = {
  "purpose": {
    "pos": "n.",
    "en_def": "the reason for doing something",
    "cn_def": "目的；用途"
  },
  "pulse": {
    "pos": "n.",
    "en_def": "the regular beat of your heart that you can feel in your wrist or neck",
    "cn_def": "脈搏"
  },
  "promote": {
    "pos": "v.",
    "en_def": "to help something happen or develop; to encourage",
    "cn_def": "促進；提倡"
  },
  "routine": {
    "pos": "n.",
    "en_def": "the usual things you do at the same time every day",
    "cn_def": "例行公事；日常作息"
  },
  "stone's throw": {
    "pos": "n.phr.",
    "en_def": "a very short distance",
    "cn_def": "很近的距離；一箭之遙"
  },
  "reverse": {
    "pos": "v.",
    "en_def": "to change something back or to the opposite; to undo",
    "cn_def": "扭轉；使逆轉"
  },
  "on foot": {
    "pos": "phr.",
    "en_def": "walking, not using a car, bus or bike",
    "cn_def": "步行；走路"
  },
  "keep-fit": {
    "pos": "adj.",
    "en_def": "relating to exercise that keeps your body healthy",
    "cn_def": "健身的"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "free time when you are not working",
    "cn_def": "閒暇；空閒"
  },
  "pretty": {
    "pos": "adv.",
    "en_def": "fairly; quite",
    "cn_def": "相當；頗"
  },
  "suburb": {
    "pos": "n.",
    "en_def": "an area where people live outside the center of a city",
    "cn_def": "郊區"
  },
  "residents": {
    "pos": "n.",
    "en_def": "people who live in a particular place",
    "cn_def": "居民"
  },
  "rely": {
    "pos": "v.",
    "en_def": "to depend on someone or something",
    "cn_def": "依賴；依靠"
  },
  "brisk walking": {
    "pos": "n.phr.",
    "en_def": "walking quickly, as a form of exercise",
    "cn_def": "快走"
  },
  "sedentary lifestyle": {
    "pos": "n.phr.",
    "en_def": "a way of living with very little physical activity, such as sitting most of the day",
    "cn_def": "久坐不動的生活方式"
  },
  "turning point": {
    "pos": "n.phr.",
    "en_def": "a time when an important change happens",
    "cn_def": "轉捩點"
  },
  "unfortunately": {
    "pos": "adv.",
    "en_def": "used to say that something is sad or disappointing",
    "cn_def": "不幸地；可惜"
  },
  "run errands": {
    "pos": "v.phr.",
    "en_def": "to go out to do small jobs such as shopping or going to the post office",
    "cn_def": "跑腿；辦雜事"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method or product",
    "cn_def": "創新；新發明"
  },
  "reliant": {
    "pos": "adj.",
    "en_def": "needing someone or something in order to work or live",
    "cn_def": "依賴的"
  },
  "decent": {
    "pos": "adj.",
    "en_def": "good enough; of an acceptable standard",
    "cn_def": "像樣的；還不錯的"
  },
  "strolling around": {
    "pos": "v.phr.",
    "en_def": "walking slowly and in a relaxed way",
    "cn_def": "閒逛；漫步"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and become calm",
    "cn_def": "放鬆"
  },
  "jaunty": {
    "pos": "adj.",
    "en_def": "showing that you feel happy and confident",
    "cn_def": "輕快的；得意洋洋的"
  },
  "loose-limbed": {
    "pos": "adj.",
    "en_def": "moving in an easy, relaxed way, with arms and legs that are not stiff",
    "cn_def": "四肢靈活的；動作輕鬆自如的"
  },
  "ungainly": {
    "pos": "adj.",
    "en_def": "moving in a way that is not graceful; awkward",
    "cn_def": "笨拙的；不優雅的"
  },
  "stately": {
    "pos": "adj.",
    "en_def": "slow, formal and impressive",
    "cn_def": "莊嚴的；堂皇的"
  },
  "vigorous": {
    "pos": "adj.",
    "en_def": "strong, active and full of energy",
    "cn_def": "強而有力的；劇烈的"
  }
};

const EXTRA_GLOSSES = {};
