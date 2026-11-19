// Topic 406 Quiz Data: Time Off 休假
// Source word list: https://www.examword.com/group-topic/time-off — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T406 - Time Off 休假",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "break",
    "pos": "n.",
    "cn_def": "休息時間；暫停",
    "en_def": "a short time when you stop working to rest",
    "sentence": "A: We have been working on this budget report since eight o'clock, and my eyes are getting really tired from the screen. Do you want to stop for a while? B: Yes, let's take a short {{BLANK}} and get some coffee downstairs, and then we can finish the last section before lunch.",
    "cn": "A：我們從八點就開始做這份預算報告，我的眼睛看螢幕看得很累。你想暫停一下嗎？ B：好啊，我們短暫【休息】一下，去樓下喝杯咖啡，然後就能在午餐前完成最後一部分。"
  },
  {
    "word": "vacation",
    "pos": "n.",
    "cn_def": "假期；休假",
    "en_def": "a period of time when you do not work and often travel",
    "sentence": "A: You look so relaxed and tanned today. Where did you go last month while the office was busy with the new product launch? B: I finally took a two-week {{BLANK}} in Thailand with my family, and we spent most days swimming, eating local food, and visiting small islands.",
    "cn": "A：你今天看起來好放鬆，還曬黑了。上個月辦公室忙著新產品上市的時候，你去了哪裡？ B：我終於和家人去泰國享受了兩週的【假期】，我們大部分時間都在游泳、吃當地美食和參觀小島。"
  },
  {
    "word": "holiday",
    "pos": "n.",
    "cn_def": "假日；節日",
    "en_def": "a special day when most people do not work",
    "sentence": "A: Should I schedule the client meeting for next Thursday, or will most of the staff be away from the office that day? B: Please choose another date, because next Thursday is a national {{BLANK}}, so the office will be closed and many people will be traveling to visit their families.",
    "cn": "A：我應該把客戶會議安排在下週四嗎？還是那天大部分員工都不在辦公室？ B：請選別的日期，因為下週四是國定【假日】，辦公室會關閉，而且很多人會出門探望家人。"
  },
  {
    "word": "leave",
    "pos": "n.",
    "cn_def": "休假；假",
    "en_def": "time away from work that your employer allows",
    "sentence": "A: I haven't seen Grace in the marketing department for weeks. Did she move to another branch, or is she working from home now? B: Neither. She is on maternity {{BLANK}} because she had a baby in March, and she will come back to the office at the beginning of September.",
    "cn": "A：我好幾週沒看到行銷部的葛瑞絲了。她是調到別的分公司，還是現在在家工作？ B：都不是。她三月生了寶寶，正在請產【假】，九月初會回到辦公室。"
  },
  {
    "word": "rest",
    "pos": "n.",
    "cn_def": "休息",
    "en_def": "a period of relaxing or sleeping to get back your energy",
    "sentence": "A: The doctor said my back injury isn't serious, but I'm worried about missing the shipment deadline at the warehouse this week. B: Don't worry about the deadline, because the team can handle it. You need to get plenty of {{BLANK}} at home so that you can recover quickly and come back healthy.",
    "cn": "A：醫生說我的背傷不嚴重，但我擔心這週會趕不上倉庫的出貨期限。 B：別擔心期限，團隊可以處理。你需要在家好好【休息】，這樣才能快點康復、健康地回來。"
  },
  {
    "word": "relax",
    "pos": "v.",
    "cn_def": "放鬆",
    "en_def": "to rest and stop feeling worried or tense",
    "sentence": "A: You have been answering emails and phone calls all day, and you still look stressed. What are you going to do tonight after work? B: I'm going to turn off my phone, cook a simple dinner, and {{BLANK}} on the sofa with a good movie, because I really need a quiet evening.",
    "cn": "A：你一整天都在回電子郵件和接電話，看起來還是很有壓力。你今晚下班後打算做什麼？ B：我要關掉手機、煮一頓簡單的晚餐，然後窩在沙發上看部好電影【放鬆】一下，因為我真的需要一個安靜的夜晚。"
  },
  {
    "word": "unwind",
    "pos": "v.",
    "cn_def": "放鬆；紓解壓力",
    "en_def": "to relax after a period of work or stress",
    "sentence": "A: How do you usually spend your Friday evenings after such a stressful week of meetings and sales reports? B: I like to go to a small jazz bar near my apartment with a few friends, because the music helps me {{BLANK}} and forget about the problems at work.",
    "cn": "A：經歷了這麼一週充滿會議和業績報告的壓力後，你週五晚上通常怎麼過？ B：我喜歡和幾個朋友去我公寓附近的一間小爵士酒吧，因為音樂能幫助我【放鬆】，忘掉工作上的煩惱。"
  },
  {
    "word": "refresh",
    "pos": "v.",
    "cn_def": "使恢復精神",
    "en_def": "to make someone feel less tired and more energetic",
    "sentence": "A: I feel sleepy every afternoon around three o'clock, and it's hard to focus on the spreadsheets. Do you have any advice for me? B: Try walking outside for ten minutes and drinking a big glass of cold water, because fresh air can {{BLANK}} your mind better than another cup of coffee.",
    "cn": "A：我每天下午三點左右就覺得很睏，很難專心看試算表。你有什麼建議嗎？ B：試著到外面走個十分鐘，再喝一大杯冰水，因為新鮮空氣比再喝一杯咖啡更能讓你的頭腦【恢復清醒】。"
  },
  {
    "word": "recharge",
    "pos": "v.",
    "cn_def": "恢復精力；充電",
    "en_def": "to get back your energy by resting",
    "sentence": "A: You've worked on three big projects this year without taking a single day away from the office. Aren't you exhausted? B: I am, so next month I'm going to spend a week at my parents' farm in the countryside to {{BLANK}} my batteries before the busy season starts.",
    "cn": "A：你今年做了三個大專案，一天都沒離開過辦公室。你不累嗎？ B：我很累，所以下個月我要去鄉下爸媽的農場待一週，在旺季開始前好好【充電】。"
  },
  {
    "word": "downtime",
    "pos": "n.",
    "cn_def": "休息時間；空閒時間",
    "en_def": "time when you are not working and can relax",
    "sentence": "A: Since the new manager arrived, everyone seems to be working late every night, and nobody takes a proper lunch anymore. B: That's true, and it worries me, because people need some {{BLANK}} during the day to rest their minds, or they will make more mistakes and feel unhappy at work.",
    "cn": "A：自從新經理來了以後，大家似乎每晚都加班，也沒人好好吃午餐了。 B：沒錯，這讓我很擔心，因為人們白天需要一些【休息時間】讓頭腦放鬆，否則會犯更多錯誤，工作也會不開心。"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "cn_def": "休閒；閒暇",
    "en_def": "free time when you can do things you enjoy",
    "sentence": "A: What kind of facilities does the new hotel near the convention center offer for business travelers who stay for several nights? B: It has a large swimming pool, a modern gym, and a rooftop garden, so guests can enjoy their {{BLANK}} time after long days of meetings and presentations.",
    "cn": "A：會議中心附近那家新飯店，為住好幾晚的商務旅客提供哪些設施？ B：它有大型游泳池、現代化健身房和屋頂花園，讓客人在整天開會和簡報後能享受【休閒】時光。"
  },
  {
    "word": "free time",
    "pos": "n.phr.",
    "cn_def": "空閒時間",
    "en_def": "time when you are not working or studying",
    "sentence": "A: Now that the annual report is finally finished, what are you planning to do with all the extra hours you have in the evenings? B: In my {{BLANK}}, I want to take an online cooking class and join a running club, because I've wanted to try both for a long time.",
    "cn": "A：既然年度報告終於完成了，你打算怎麼利用晚上多出來的時間？ B：我想在【空閒時間】上線上烹飪課並加入跑步社團，因為這兩件事我想嘗試很久了。"
  },
  {
    "word": "day off",
    "pos": "n.phr.",
    "cn_def": "休假日；休息日",
    "en_def": "a day when you do not have to go to work",
    "sentence": "A: Could you cover my shift at the front desk on Friday? My sister is getting married, and the ceremony starts at ten in the morning. B: Sure, I can work for you, but you should ask the supervisor for a {{BLANK}} today, because she needs to approve all schedule changes.",
    "cn": "A：你可以幫我代週五櫃台的班嗎？我姊姊要結婚，典禮早上十點開始。 B：當然，我可以幫你上班，但你今天就該向主管申請【休假一天】，因為所有班表更動都需要她核准。"
  },
  {
    "word": "weekend",
    "pos": "n.",
    "cn_def": "週末",
    "en_def": "Saturday and Sunday, when many people do not work",
    "sentence": "A: Is the customer service center open on Saturday? I need to return a broken printer, and I can't leave the office during the week. B: Unfortunately, the center is closed on the {{BLANK}}, but you can arrange a free pickup through our website, and a driver will collect it on Monday.",
    "cn": "A：客服中心週六有開嗎？我需要退回一台壞掉的印表機，但平日我沒辦法離開辦公室。 B：很遺憾，中心【週末】不營業，但你可以透過我們的網站安排免費取件，司機會在週一來收。"
  },
  {
    "word": "getaway",
    "pos": "n.",
    "cn_def": "短期度假；小旅行",
    "en_def": "a short holiday away from home",
    "sentence": "A: My wife and I want to celebrate our anniversary next month, but we only have three days and don't want to fly anywhere far. B: Then you should book a weekend {{BLANK}} at the hot spring hotel in the mountains, because it is only two hours by train and very romantic.",
    "cn": "A：我太太和我想在下個月慶祝結婚紀念日，但我們只有三天，不想飛去太遠的地方。 B：那你們應該預訂山上溫泉飯店的週末【小旅行】行程，因為搭火車只要兩個小時，而且非常浪漫。"
  },
  {
    "word": "retreat",
    "pos": "n.",
    "cn_def": "靜修；外出研習營",
    "en_def": "a trip to a quiet place where a group can relax, think, or plan",
    "sentence": "A: Why is the whole sales team going to leave the office on Thursday afternoon, and when will they be back? B: The company is holding a two-day {{BLANK}} at a quiet lodge by the lake, where managers will plan next year's goals and everyone will join team-building games.",
    "cn": "A：為什麼整個業務團隊週四下午都要離開辦公室？他們什麼時候回來？ B：公司要在湖邊一間安靜的小屋舉辦兩天的【外出研習營】，經理們會規劃明年的目標，大家也會參加團隊建立遊戲。"
  },
  {
    "word": "nap",
    "pos": "n.",
    "cn_def": "小睡；午睡",
    "en_def": "a short sleep during the day",
    "sentence": "A: You look much more awake than you did this morning. Did you drink another strong coffee during the lunch hour? B: No, I went to the quiet room on the fifth floor and took a twenty-minute {{BLANK}} on the sofa, and now I feel ready for the long meeting this afternoon.",
    "cn": "A：你看起來比早上清醒多了。你午餐時間又喝了一杯濃咖啡嗎？ B：沒有，我去五樓的安靜室，在沙發上【小睡】了二十分鐘，現在覺得已經準備好參加今天下午的長會議了。"
  },
  {
    "word": "lazy",
    "pos": "adj.",
    "cn_def": "懶散的；悠閒的",
    "en_def": "relaxed and without much activity",
    "sentence": "A: You worked so hard on the trade fair last week. Do you have any exciting plans for this Sunday, like shopping or a trip? B: Not at all. I want a {{BLANK}} day at home, so I will sleep late, read magazines in bed, and order pizza instead of cooking.",
    "cn": "A：你上週為商展那麼努力工作。這個週日有什麼精彩的計畫嗎，像是購物或出遊？ B：完全沒有。我想在家過【悠閒的】一天，所以我會睡晚一點、在床上看雜誌，然後叫披薩而不自己煮。"
  },
  {
    "word": "peaceful",
    "pos": "adj.",
    "cn_def": "寧靜的；平靜的",
    "en_def": "quiet and calm",
    "sentence": "A: I need a place to write the new training manual without any phone calls or noisy coworkers. Do you know anywhere nearby? B: Try the small library behind the city park. It's very {{BLANK}} in the mornings, the Wi-Fi is fast, and there are large tables where you can spread out your papers.",
    "cn": "A：我需要一個地方撰寫新的訓練手冊，不要有電話或吵鬧的同事打擾。你知道附近有這種地方嗎？ B：試試市立公園後面的小圖書館。那裡早上非常【寧靜】，網路很快，而且有大桌子讓你攤開文件。"
  },
  {
    "word": "refreshing",
    "pos": "adj.",
    "cn_def": "提神的；清爽的",
    "en_def": "making you feel less tired or hot",
    "sentence": "A: It's so hot outside today, and the air conditioner in our meeting room is broken again. What should we serve the visitors? B: Let's order some {{BLANK}} iced lemon tea from the café downstairs, because a cold drink will help everyone feel more comfortable during the long discussion.",
    "cn": "A：今天外面好熱，我們會議室的冷氣又壞了。我們該招待訪客什麼？ B：我們從樓下咖啡廳訂一些【清涼提神的】冰檸檬茶吧，因為冷飲能讓大家在冗長的討論中感覺舒服一點。"
  },
  {
    "word": "travel",
    "pos": "v.",
    "cn_def": "旅行；出差",
    "en_def": "to go from one place to another, often far away",
    "sentence": "A: Your new job as a regional sales manager sounds exciting, but will you have to spend a lot of time away from home? B: Yes, I will need to {{BLANK}} to Japan, Korea, and Vietnam several times a year to visit clients, so I'm learning some basic Japanese right now.",
    "cn": "A：你的新工作是區域業務經理，聽起來很令人興奮，但你會需要常常不在家嗎？ B：是的，我一年需要【出差】去日本、韓國和越南好幾次拜訪客戶，所以我現在正在學一些基礎日語。"
  },
  {
    "word": "explore",
    "pos": "v.",
    "cn_def": "探索；遊覽",
    "en_def": "to travel around a place to learn about it",
    "sentence": "A: The conference in Kyoto ends at noon on Friday, and our flight home isn't until Sunday evening. What should we do? B: Let's rent bicycles and {{BLANK}} the old streets and temples together, because we may never get another chance to see that beautiful city.",
    "cn": "A：京都的會議週五中午結束，而我們的回程班機到週日晚上才起飛。我們該做什麼？ B：我們一起租腳踏車去【探索】那些古老的街道和寺廟吧，因為我們可能再也沒有機會看看那座美麗的城市了。"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "cn_def": "嗜好；興趣",
    "en_def": "an activity you do for fun in your free time",
    "sentence": "A: I saw some amazing photos of birds in the company newsletter this month. Did a professional photographer take them? B: No, our accountant took them. Bird photography is his favorite {{BLANK}}, and he spends almost every Sunday morning waiting quietly in the wetlands with his camera.",
    "cn": "A：我在這個月的公司電子報上看到一些很棒的鳥類照片。是專業攝影師拍的嗎？ B：不是，是我們的會計拍的。鳥類攝影是他最愛的【嗜好】，他幾乎每個週日早上都拿著相機在溼地裡安靜地等待。"
  },
  {
    "word": "recreation",
    "pos": "n.",
    "cn_def": "娛樂；消遣",
    "en_def": "activities people do for enjoyment when they are not working",
    "sentence": "A: What is the city going to build on the empty land next to the train station? I heard it might be another shopping mall. B: Actually, the city council approved a new {{BLANK}} center with tennis courts, a swimming pool, and a playground, and it should open next spring.",
    "cn": "A：市政府要在火車站旁的空地上蓋什麼？我聽說可能又是一座購物中心。 B：其實市議會核准了一座新的【休閒娛樂】中心，有網球場、游泳池和遊樂場，預計明年春天開放。"
  },
  {
    "word": "picnic",
    "pos": "n.",
    "cn_def": "野餐",
    "en_def": "a meal you eat outdoors, often in a park",
    "sentence": "A: The weather forecast says Saturday will be sunny and warm. Is the department still planning an outdoor event for the staff and their families? B: Yes, we're having a {{BLANK}} in Riverside Park at noon, so please bring sandwiches, fruit, or snacks to share, and don't forget a blanket.",
    "cn": "A：氣象預報說週六會晴朗溫暖。部門還打算為員工和家人舉辦戶外活動嗎？ B：是的，我們中午會在河濱公園【野餐】，所以請帶三明治、水果或點心來分享，別忘了帶野餐墊。"
  },
  {
    "word": "camping",
    "pos": "n.",
    "cn_def": "露營",
    "en_def": "staying outdoors in a tent for fun",
    "sentence": "A: You bought a large tent, sleeping bags, and a small gas stove at the sports store yesterday. Are you planning a trip soon? B: Yes, my family is going {{BLANK}} in the national park next weekend, and we will cook our meals outside and sleep under the stars for two nights.",
    "cn": "A：你昨天在運動用品店買了大帳篷、睡袋和小瓦斯爐。你最近打算去旅行嗎？ B：是的，我家人下週末要去國家公園【露營】，我們會在戶外煮飯，在星空下睡兩晚。"
  },
  {
    "word": "hiking",
    "pos": "n.",
    "cn_def": "健行；登山",
    "en_def": "walking long distances in the countryside or mountains",
    "sentence": "A: Why are you wearing such heavy boots to the office today? Are you going somewhere special after work? B: Yes, some colleagues and I are going {{BLANK}} on Elephant Mountain this evening, because the trail is short and the night view of the city from the top is wonderful.",
    "cn": "A：你今天為什麼穿這麼厚重的靴子來上班？下班後要去什麼特別的地方嗎？ B：對，我和幾位同事今晚要去象山【健行】，因為步道很短，從山頂看城市夜景非常美。"
  },
  {
    "word": "sightseeing",
    "pos": "n.",
    "cn_def": "觀光；遊覽",
    "en_def": "visiting famous or interesting places as a tourist",
    "sentence": "A: The overseas clients arrive on Wednesday, but their meetings with us don't start until Thursday afternoon. How should we entertain them? B: Let's arrange a guide to take them {{BLANK}} on Thursday morning, so they can visit the National Palace Museum and enjoy lunch in a famous local restaurant.",
    "cn": "A：海外客戶週三抵達，但他們和我們的會議要到週四下午才開始。我們該怎麼招待他們？ B：我們安排一位導遊週四早上帶他們去【觀光】，讓他們參觀故宮博物院，並在知名的當地餐廳享用午餐。"
  },
  {
    "word": "entertainment",
    "pos": "n.",
    "cn_def": "娛樂；表演",
    "en_def": "shows, music, or activities that people enjoy",
    "sentence": "A: We have booked the hotel ballroom for the year-end party, but I'm worried that guests will get bored after dinner. B: Don't worry, because the hotel will provide live {{BLANK}}, including a jazz band and a magician, and there will also be a lucky draw at the end of the night.",
    "cn": "A：我們已經訂了飯店宴會廳舉辦尾牙，但我擔心客人吃完晚餐後會覺得無聊。 B：別擔心，飯店會提供現場【娛樂表演】，包括爵士樂團和魔術師，晚上最後還會有摸彩活動。"
  },
  {
    "word": "spa",
    "pos": "n.",
    "cn_def": "水療中心",
    "en_def": "a place where people go for massages and beauty treatments",
    "sentence": "A: The conference was exhausting, and my shoulders hurt from carrying my laptop bag all week. Is there anything relaxing to do at this hotel? B: The hotel has a beautiful {{BLANK}} on the top floor that offers massages and hot stone treatments, and guests get a twenty percent discount.",
    "cn": "A：這場會議讓人筋疲力盡，我整週背著筆電包，肩膀好痛。這家飯店有什麼放鬆的活動嗎？ B：飯店頂樓有一間漂亮的【水療中心】，提供按摩和熱石療程，住客還能享有八折優惠。"
  },
  {
    "word": "balance",
    "pos": "n.",
    "cn_def": "平衡",
    "en_def": "a healthy mix of different parts of life, such as work and rest",
    "sentence": "A: Why did you decide to leave your high-paying job at the bank and join this small design company instead? B: At the bank I often worked until midnight and rarely saw my children, but here I have flexible hours and a much better work-life {{BLANK}}, so I feel happier.",
    "cn": "A：你為什麼決定離開銀行的高薪工作，改加入這家小型設計公司？ B：在銀行我常常工作到半夜，很少見到孩子，但在這裡我有彈性工時，工作與生活的【平衡】好得多，所以我覺得更快樂。"
  },
  {
    "word": "escape",
    "pos": "n.",
    "cn_def": "逃離；逃避",
    "en_def": "a way of getting away from a busy or difficult situation",
    "sentence": "A: Why do you drive all the way to the beach every Saturday morning, even when the weather is cloudy and cold? B: Walking along the quiet shore is my favorite {{BLANK}} from the noisy city and my busy job, and it helps me think clearly about the coming week.",
    "cn": "A：你為什麼每個週六早上都大老遠開車去海邊，即使天氣陰冷也一樣？ B：沿著安靜的海岸散步是我最喜歡的【逃離】方式，讓我遠離吵雜的城市和忙碌的工作，也幫助我好好思考下週的事。"
  },
  {
    "word": "pause",
    "pos": "n.",
    "cn_def": "暫停；停頓",
    "en_def": "a short stop before continuing",
    "sentence": "A: The online training session lasted almost three hours, and many people turned off their cameras near the end. What went wrong? B: The trainer spoke without any {{BLANK}}, so nobody had time to ask questions or get a drink, and next time we should add a short stop every hour.",
    "cn": "A：線上訓練課程持續了將近三小時，很多人在快結束時關掉了鏡頭。出了什麼問題？ B：講師講課完全沒有【暫停】，所以沒人有時間發問或喝點東西，下次我們應該每小時安排一次短暫休息。"
  },
  {
    "word": "slow down",
    "pos": "v.phr.",
    "cn_def": "放慢腳步",
    "en_def": "to become less busy or active",
    "sentence": "A: The doctor told me that my high stress level is causing my headaches and that I'm working far too many hours each week. B: Then you really need to {{BLANK}} for a while, so try to leave the office on time, take a proper lunch, and give some tasks to your assistant.",
    "cn": "A：醫生告訴我，我壓力太大導致頭痛，而且我每週工作時數太長了。 B：那你真的需要【放慢腳步】一陣子，試著準時下班、好好吃午餐，並把一些工作交給你的助理。"
  },
  {
    "word": "reconnect",
    "pos": "v.",
    "cn_def": "重新聯繫；重新連結",
    "en_def": "to have a close relationship with someone or something again",
    "sentence": "A: You haven't checked your work email for three days. Did something happen, or were you sick at home? B: I went to my hometown for a long weekend to {{BLANK}} with old friends from high school, and we spent every evening talking about the past and sharing dinner.",
    "cn": "A：你三天沒看工作信箱了。發生什麼事了嗎，還是你生病在家？ B：我利用連假回老家和高中老朋友【重新聯繫】感情，我們每天晚上都一起聊往事、共進晚餐。"
  },
  {
    "word": "carefree",
    "pos": "adj.",
    "cn_def": "無憂無慮的",
    "en_def": "having no worries or problems",
    "sentence": "A: Do you ever miss being a university student, before you had a mortgage, a full-time job, and two young children to take care of? B: Sometimes I do. I remember those {{BLANK}} summers when my friends and I traveled around Europe by train without worrying about money or deadlines.",
    "cn": "A：你會懷念大學時代嗎？那時你還沒有房貸、全職工作和兩個要照顧的小孩。 B：有時候會。我記得那些【無憂無慮的】夏天，我和朋友們搭火車環遊歐洲，不用擔心錢或截止日期。"
  }
];

const MCQS = [
  {
    "q": "The training session lasted three hours without stopping. The manager finally announced a fifteen-minute coffee _____ so everyone could stretch.",
    "options": [
      "break",
      "hobby",
      "retreat",
      "spa"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Karen has saved up two weeks of paid _____. She plans to spend it visiting her family in Malaysia next month.",
    "options": [
      "picnic",
      "vacation",
      "hobby",
      "nap"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The office will be closed on Monday because it is a national public _____. All orders placed that day will ship on Tuesday.",
    "options": [
      "getaway",
      "picnic",
      "holiday",
      "hobby"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "After her baby was born, Lisa took six months of maternity _____. Her team handled all of her clients while she was away.",
    "options": [
      "rest",
      "nap",
      "spa",
      "leave"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The doctor told the warehouse worker to get plenty of _____ after his back injury. He should not lift heavy boxes for two weeks.",
    "options": [
      "rest",
      "hobby",
      "getaway",
      "picnic"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "After a long week of client meetings, Daniel likes to _____ by listening to jazz at home. It helps him forget about work.",
    "options": [
      "explore",
      "unwind",
      "travel",
      "arrange"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Many employees use their annual holidays to _____ their batteries. They usually return to the office with more energy and new ideas.",
    "options": [
      "explore",
      "travel",
      "recharge",
      "unwind"
    ],
    "answer": 2,
    "vocabIndex": 8
  },
  {
    "q": "The new hotel offers a pool, a gym, and other _____ facilities for guests. Business travelers often use them in the evening.",
    "options": [
      "picnic",
      "nap",
      "getaway",
      "leisure"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "The project is almost finished, so the team finally has some _____ this week. Several members are using it to take online courses.",
    "options": [
      "free time",
      "day off",
      "getaway",
      "camping"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Tom asked his supervisor for a _____ on Friday to attend his sister's wedding. His request was approved right away.",
    "options": [
      "free time",
      "day off",
      "leisure",
      "recreation"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The store is open from Monday to Friday, but it closes on the _____. Customers can still place orders through the website on Saturday and Sunday.",
    "options": [
      "picnic",
      "retreat",
      "weekend",
      "spa"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The travel agency is promoting a romantic weekend _____ to a small island. The package includes two nights at a beach hotel.",
    "options": [
      "nap",
      "hobby",
      "balance",
      "getaway"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The company held a two-day team-building _____ at a quiet mountain lodge. Managers discussed next year's goals and played outdoor games.",
    "options": [
      "retreat",
      "nap",
      "hobby",
      "spa"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Some tech companies provide quiet rooms where staff can take a short _____ after lunch. Sleeping for twenty minutes can improve focus.",
    "options": [
      "hobby",
      "nap",
      "picnic",
      "balance"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The resort is located far from the busy city center. Guests love its _____ garden, where they can read quietly for hours.",
    "options": [
      "carefree",
      "lazy",
      "peaceful",
      "noisy"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "On hot afternoons, the café serves a _____ glass of iced lemon tea. Many office workers stop by during their lunch hour.",
    "options": [
      "peaceful",
      "lazy",
      "carefree",
      "refreshing"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "As a sales manager, Henry has to _____ to Japan and Korea several times a year. He usually books his flights a month in advance.",
    "options": [
      "travel",
      "explore",
      "unwind",
      "recharge"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "During the free afternoon, the conference visitors decided to _____ the old town on foot. They found several small museums and traditional restaurants.",
    "options": [
      "unwind",
      "explore",
      "relax",
      "recharge"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Mark's favorite _____ is photography, and he takes pictures in the park most Sunday mornings. He even sells some of his photos online.",
    "options": [
      "holiday",
      "retreat",
      "hobby",
      "nap"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The city plans to build a new _____ center with tennis courts and a swimming pool. It should open to residents next spring.",
    "options": [
      "vacation",
      "leave",
      "nap",
      "recreation"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "If the weather is good on Saturday, the staff will have a _____ in the park. Everyone should bring sandwiches or fruit to share.",
    "options": [
      "picnic",
      "nap",
      "hobby",
      "balance"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The Lee family is going _____ in the national park this summer. They have already bought a large tent and two sleeping bags.",
    "options": [
      "recreation",
      "camping",
      "entertainment",
      "leisure"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Wear comfortable boots for the _____ trip tomorrow morning. The trail up the mountain is about eight kilometers long and quite steep.",
    "options": [
      "entertainment",
      "leisure",
      "hiking",
      "recreation"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The tour bus will take the conference guests _____ around the city's famous landmarks. The trip also includes a visit to an old temple.",
    "options": [
      "entertainment",
      "recreation",
      "leisure",
      "sightseeing"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The hotel provides live music and other _____ for guests every Friday night. A local band plays in the lobby from eight to ten.",
    "options": [
      "entertainment",
      "leave",
      "nap",
      "balance"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The resort's _____ offers relaxing massages and hot stone treatments. Hotel guests receive a twenty percent discount on all of its services.",
    "options": [
      "picnic",
      "spa",
      "hobby",
      "weekend"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Our company encourages a healthy work-life _____ by offering flexible hours. Employees can also work from home twice a week.",
    "options": [
      "leisure",
      "holiday",
      "balance",
      "hobby"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The doctor says Brian is working too hard and needs to _____. He should take more breaks and go home on time.",
    "options": [
      "explore",
      "travel",
      "deliver",
      "slow down"
    ],
    "answer": 3,
    "vocabIndex": 33
  },
  {
    "q": "As children, we spent long, _____ summers at the beach without any worries. Now we are both busy managers with very little free time.",
    "options": [
      "carefree",
      "stressful",
      "anxious",
      "nervous"
    ],
    "answer": 0,
    "vocabIndex": 35
  },
  {
    "q": "After the big presentation, Amy went home to _____ in a warm bath. She was too tired to answer any more emails that night.",
    "options": [
      "explore",
      "relax",
      "travel",
      "deliver"
    ],
    "answer": 1,
    "vocabIndex": 5
  }
];

const LOOKUP = {
  "break": {
    "pos": "n.",
    "en_def": "a short time when you stop working to rest",
    "cn_def": "休息時間；暫停"
  },
  "vacation": {
    "pos": "n.",
    "en_def": "a period of time when you do not work and often travel",
    "cn_def": "假期；休假"
  },
  "holiday": {
    "pos": "n.",
    "en_def": "a special day when most people do not work",
    "cn_def": "假日；節日"
  },
  "leave": {
    "pos": "n.",
    "en_def": "time away from work that your employer allows",
    "cn_def": "休假；假"
  },
  "rest": {
    "pos": "n.",
    "en_def": "a period of relaxing or sleeping to get back your energy",
    "cn_def": "休息"
  },
  "relax": {
    "pos": "v.",
    "en_def": "to rest and stop feeling worried or tense",
    "cn_def": "放鬆"
  },
  "unwind": {
    "pos": "v.",
    "en_def": "to relax after a period of work or stress",
    "cn_def": "放鬆；紓解壓力"
  },
  "refresh": {
    "pos": "v.",
    "en_def": "to make someone feel less tired and more energetic",
    "cn_def": "使恢復精神"
  },
  "recharge": {
    "pos": "v.",
    "en_def": "to get back your energy by resting",
    "cn_def": "恢復精力；充電"
  },
  "downtime": {
    "pos": "n.",
    "en_def": "time when you are not working and can relax",
    "cn_def": "休息時間；空閒時間"
  },
  "leisure": {
    "pos": "n.",
    "en_def": "free time when you can do things you enjoy",
    "cn_def": "休閒；閒暇"
  },
  "free time": {
    "pos": "n.phr.",
    "en_def": "time when you are not working or studying",
    "cn_def": "空閒時間"
  },
  "day off": {
    "pos": "n.phr.",
    "en_def": "a day when you do not have to go to work",
    "cn_def": "休假日；休息日"
  },
  "weekend": {
    "pos": "n.",
    "en_def": "Saturday and Sunday, when many people do not work",
    "cn_def": "週末"
  },
  "getaway": {
    "pos": "n.",
    "en_def": "a short holiday away from home",
    "cn_def": "短期度假；小旅行"
  },
  "retreat": {
    "pos": "n.",
    "en_def": "a trip to a quiet place where a group can relax, think, or plan",
    "cn_def": "靜修；外出研習營"
  },
  "nap": {
    "pos": "n.",
    "en_def": "a short sleep during the day",
    "cn_def": "小睡；午睡"
  },
  "lazy": {
    "pos": "adj.",
    "en_def": "relaxed and without much activity",
    "cn_def": "懶散的；悠閒的"
  },
  "peaceful": {
    "pos": "adj.",
    "en_def": "quiet and calm",
    "cn_def": "寧靜的；平靜的"
  },
  "refreshing": {
    "pos": "adj.",
    "en_def": "making you feel less tired or hot",
    "cn_def": "提神的；清爽的"
  },
  "travel": {
    "pos": "v.",
    "en_def": "to go from one place to another, often far away",
    "cn_def": "旅行；出差"
  },
  "explore": {
    "pos": "v.",
    "en_def": "to travel around a place to learn about it",
    "cn_def": "探索；遊覽"
  },
  "hobby": {
    "pos": "n.",
    "en_def": "an activity you do for fun in your free time",
    "cn_def": "嗜好；興趣"
  },
  "recreation": {
    "pos": "n.",
    "en_def": "activities people do for enjoyment when they are not working",
    "cn_def": "娛樂；消遣"
  },
  "picnic": {
    "pos": "n.",
    "en_def": "a meal you eat outdoors, often in a park",
    "cn_def": "野餐"
  },
  "camping": {
    "pos": "n.",
    "en_def": "staying outdoors in a tent for fun",
    "cn_def": "露營"
  },
  "hiking": {
    "pos": "n.",
    "en_def": "walking long distances in the countryside or mountains",
    "cn_def": "健行；登山"
  },
  "sightseeing": {
    "pos": "n.",
    "en_def": "visiting famous or interesting places as a tourist",
    "cn_def": "觀光；遊覽"
  },
  "entertainment": {
    "pos": "n.",
    "en_def": "shows, music, or activities that people enjoy",
    "cn_def": "娛樂；表演"
  },
  "spa": {
    "pos": "n.",
    "en_def": "a place where people go for massages and beauty treatments",
    "cn_def": "水療中心"
  },
  "balance": {
    "pos": "n.",
    "en_def": "a healthy mix of different parts of life, such as work and rest",
    "cn_def": "平衡"
  },
  "escape": {
    "pos": "n.",
    "en_def": "a way of getting away from a busy or difficult situation",
    "cn_def": "逃離；逃避"
  },
  "pause": {
    "pos": "n.",
    "en_def": "a short stop before continuing",
    "cn_def": "暫停；停頓"
  },
  "slow down": {
    "pos": "v.phr.",
    "en_def": "to become less busy or active",
    "cn_def": "放慢腳步"
  },
  "reconnect": {
    "pos": "v.",
    "en_def": "to have a close relationship with someone or something again",
    "cn_def": "重新聯繫；重新連結"
  },
  "carefree": {
    "pos": "adj.",
    "en_def": "having no worries or problems",
    "cn_def": "無憂無慮的"
  }
};

const EXTRA_GLOSSES = {};
