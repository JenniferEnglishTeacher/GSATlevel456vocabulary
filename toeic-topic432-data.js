// Topic 432 Quiz Data: Waiting 等待
// Source word list: https://www.examword.com/group-topic/waiting — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T432 - Waiting 等待",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "delay",
    "pos": "n.",
    "cn_def": "延誤；耽擱",
    "en_def": "a time when something happens later than planned",
    "sentence": "A: Why did the sales team miss the first part of the client meeting in Taichung this morning, even though they left the office early? B: There was a long {{BLANK}} on the high-speed rail because of a signal problem, so they arrived forty minutes late and had to apologize to the client.",
    "cn": "A：為什麼業務團隊今天早上錯過了台中客戶會議的前半段，即使他們很早就離開辦公室了？ B：高鐵因為號誌問題發生了長時間的【延誤】，所以他們晚了四十分鐘才到，還必須向客戶道歉。"
  },
  {
    "word": "postpone",
    "pos": "v.",
    "cn_def": "延後；延期",
    "en_def": "to move an event to a later time",
    "sentence": "A: The marketing director is still sick at home, and the presentation for the new product is supposed to happen tomorrow afternoon, so what should we do? B: Let's {{BLANK}} it until next Monday, and I will send an email to everyone so they can change their plans and prepare better slides.",
    "cn": "A：行銷總監還在家養病，而新產品的簡報原定明天下午進行，我們該怎麼辦？ B：我們把它【延後】到下週一吧，我會寄電子郵件給每個人，讓他們可以調整計畫並準備更好的投影片。"
  },
  {
    "word": "queue",
    "pos": "n.",
    "cn_def": "隊伍；排隊的行列",
    "en_def": "a line of people waiting for something",
    "sentence": "A: Why are you coming back from lunch so late today when the restaurant is only across the street from our office building? B: The new noodle shop was so popular that there was a long {{BLANK}} outside the door, and I waited almost thirty minutes before I could even order my food.",
    "cn": "A：餐廳就在我們辦公大樓對面，你今天怎麼這麼晚才吃完午餐回來？ B：那家新開的麵店太受歡迎了，門外排了一條長長的【隊伍】，我等了將近三十分鐘才能點餐。"
  },
  {
    "word": "line",
    "pos": "n.",
    "cn_def": "排隊的隊伍；行列",
    "en_def": "a row of people waiting one behind another",
    "sentence": "A: Excuse me, I need to pick up a package that was sent to our company, but I'm not sure where I should go in this busy post office. B: Please stand in that {{BLANK}} next to the window on the left, and the clerk will check your ID and give you the package when it's your turn.",
    "cn": "A：不好意思，我需要領取寄到我們公司的包裹，但我不確定在這間繁忙的郵局該去哪裡。 B：請站到左邊窗口旁的那個【隊伍】裡，輪到你時，職員會核對你的身分證件並把包裹交給你。"
  },
  {
    "word": "turn",
    "pos": "n.",
    "cn_def": "輪到的機會；順序",
    "en_def": "the time when it is your chance to do something",
    "sentence": "A: How long do you think we will have to sit in this waiting room before the bank manager can talk to us about the business loan? B: There are only two customers ahead of us now, so I think it will be our {{BLANK}} in about ten minutes if nothing goes wrong.",
    "cn": "A：你覺得我們還得在這間等候室坐多久，銀行經理才能跟我們談企業貸款的事？ B：現在我們前面只剩兩位客戶，所以如果沒出什麼問題，大約十分鐘後就【輪到】我們了。"
  },
  {
    "word": "patient",
    "pos": "adj.",
    "cn_def": "有耐心的",
    "en_def": "able to wait calmly without getting angry",
    "sentence": "A: The customer on line three has been waiting for his refund for two weeks, and he sounds really upset, so how should I talk to him? B: Stay polite and {{BLANK}} with him, explain clearly that the finance department needs three more days, and promise to call him back as soon as the money is sent.",
    "cn": "A：三線的那位客戶已經等退款兩個星期了，他聽起來真的很生氣，我該怎麼跟他說？ B：對他保持禮貌和【耐心】，清楚地說明財務部門還需要三天，並承諾錢一匯出就會回電給他。"
  },
  {
    "word": "patiently",
    "pos": "adv.",
    "cn_def": "耐心地",
    "en_def": "in a calm way, without complaining while waiting",
    "sentence": "A: I heard the system crashed during the conference registration this morning, so were the guests angry while the staff fixed the problem? B: Surprisingly, most of them waited {{BLANK}} in the hall and chatted with each other, and the technicians got everything working again in less than twenty minutes.",
    "cn": "A：我聽說今天早上會議報到時系統當機了，工作人員修理問題的時候，來賓們有生氣嗎？ B：出乎意料地，大部分人都在大廳裡【耐心地】等候並互相聊天，技術人員不到二十分鐘就讓一切恢復正常了。"
  },
  {
    "word": "impatient",
    "pos": "adj.",
    "cn_def": "不耐煩的",
    "en_def": "easily annoyed when you have to wait",
    "sentence": "A: Why did the manager keep checking his phone and walking around the room during the slow software training yesterday afternoon? B: He was {{BLANK}} because the trainer spent too much time on basic steps, and he had an important call with a supplier in Japan at four o'clock.",
    "cn": "A：昨天下午進度緩慢的軟體訓練課上，經理為什麼一直看手機又在教室裡走來走去？ B：他很【不耐煩】，因為講師在基本步驟上花了太多時間，而他四點還要和日本的一家供應商通重要的電話。"
  },
  {
    "word": "impatiently",
    "pos": "adv.",
    "cn_def": "不耐煩地",
    "en_def": "in a way that shows you do not want to wait any longer",
    "sentence": "A: Did you notice how the passengers at Gate 12 were acting when the airline announced that the flight to Tokyo was still not ready? B: Yes, many of them were tapping their feet and looking {{BLANK}} at the departure board, and a few businessmen went to the counter to ask for another flight.",
    "cn": "A：航空公司宣布飛往東京的班機還沒準備好時，你有注意到12號登機門的乘客是什麼反應嗎？ B：有啊，很多人一邊用腳打拍子，一邊【不耐煩地】盯著起飛看板，還有幾位商務人士去櫃檯要求改搭其他班機。"
  },
  {
    "word": "expect",
    "pos": "v.",
    "cn_def": "預期；期待",
    "en_def": "to think that something will happen",
    "sentence": "A: When do you think the new printers will be delivered to our branch office, since the old ones keep breaking down every day? B: The supplier said the truck left the warehouse this morning, so we can {{BLANK}} them to arrive before lunch tomorrow, and the technician will set them up right away.",
    "cn": "A：既然舊的印表機每天都一直故障，你覺得新的印表機什麼時候會送到我們分公司？ B：供應商說卡車今天早上已經從倉庫出發了，所以我們可以【預期】它們明天午餐前送達，技術人員會馬上安裝。"
  },
  {
    "word": "anticipate",
    "pos": "v.",
    "cn_def": "預料；預先考慮",
    "en_def": "to expect something and prepare for it",
    "sentence": "A: Why did you order so many extra chairs and bottles of water for the product launch event at the hotel this weekend? B: We {{BLANK}} a much larger crowd than last year because the event was shared widely online, and I don't want any guests to stand or feel thirsty.",
    "cn": "A：這個週末在飯店舉辦的產品發表會，你為什麼訂了這麼多額外的椅子和瓶裝水？ B：因為活動在網路上被廣泛分享，我們【預料】人潮會比去年多很多，我不希望有任何來賓必須站著或覺得口渴。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；行程表",
    "en_def": "a plan that lists the times when things will happen",
    "sentence": "A: Could you tell me when the shuttle bus leaves for the airport, because I have to catch an evening flight to Singapore for a sales meeting? B: According to the {{BLANK}} posted at the front desk, a bus departs every thirty minutes, and the next one leaves at 3:15 from the main entrance.",
    "cn": "A：你可以告訴我機場接駁車什麼時候出發嗎？因為我得搭傍晚的班機去新加坡開業務會議。 B：根據櫃台張貼的【時間表】，每三十分鐘有一班車，下一班三點十五分從正門出發。"
  },
  {
    "word": "appointment",
    "pos": "n.",
    "cn_def": "約會；預約",
    "en_def": "an arranged time to meet someone",
    "sentence": "A: Mr. Chen, can you join the budget meeting at two o'clock this afternoon, or are you busy with something else? B: I'm sorry, but I have an {{BLANK}} with the dentist at 1:30, and the clinic is usually crowded, so I may not return to the office until three.",
    "cn": "A：陳先生，你今天下午兩點能參加預算會議嗎？還是你在忙別的事？ B：很抱歉，我一點半和牙醫有【預約】，診所通常人很多，所以我可能三點才能回到辦公室。"
  },
  {
    "word": "arrival",
    "pos": "n.",
    "cn_def": "抵達；到達",
    "en_def": "the act of reaching a place",
    "sentence": "A: The visitors from our German partner company are landing in Taipei tonight, so who is going to meet them and take them to their hotel? B: I will drive to the airport myself and check the board for their {{BLANK}} time, and then I'll bring them straight to the hotel near our office.",
    "cn": "A：我們德國合作公司的訪客今晚要降落台北，誰要去接他們並送他們去飯店？ B：我會自己開車去機場，查看看板上他們的【抵達】時間，然後直接帶他們到我們公司附近的飯店。"
  },
  {
    "word": "late",
    "pos": "adj.",
    "cn_def": "遲的；晚的",
    "en_def": "after the expected or usual time",
    "sentence": "A: Why does the boss look so unhappy this morning, and why did he cancel the team breakfast he planned last week? B: Three people were {{BLANK}} for the important client meeting yesterday because they stayed out too long at lunch, so he is angry and wants to talk about it today.",
    "cn": "A：老闆今天早上為什麼看起來這麼不高興，而且還取消了他上週安排的團隊早餐？ B：昨天有三個人因為午餐在外面待太久，參加重要的客戶會議【遲到】了，所以他很生氣，今天想談談這件事。"
  },
  {
    "word": "early",
    "pos": "adv.",
    "cn_def": "提早地；早",
    "en_def": "before the usual or planned time",
    "sentence": "A: The training workshop doesn't begin until nine o'clock, so why are you already sitting in the conference room at eight this morning? B: I came {{BLANK}} because I wanted to get a good seat near the screen, and I also needed some quiet time to read the notes before the trainer arrives.",
    "cn": "A：訓練工作坊九點才開始，你為什麼今天早上八點就已經坐在會議室裡了？ B：我【提早】來是因為想坐到靠近螢幕的好位子，而且我也需要一些安靜的時間，在講師到之前先讀一下講義。"
  },
  {
    "word": "moment",
    "pos": "n.",
    "cn_def": "片刻；一會兒",
    "en_def": "a very short period of time",
    "sentence": "A: Hello, this is Lisa from the accounting department, and I'd like to speak with Mr. Lin about the invoice he sent us yesterday. B: Please hold on for a {{BLANK}} while I check whether he has finished his meeting, because he was talking with a client in the next room a few minutes ago.",
    "cn": "A：你好，我是會計部的Lisa，想跟林先生談一下他昨天寄給我們的發票。 B：請稍等【片刻】，我查看一下他的會議是否結束了，因為幾分鐘前他還在隔壁房間跟客戶談話。"
  },
  {
    "word": "minute",
    "pos": "n.",
    "cn_def": "分鐘；片刻",
    "en_def": "a period of sixty seconds; a very short time",
    "sentence": "A: The taxi driver says the traffic on the bridge is very heavy right now, so will we still reach the trade fair before the opening speech? B: Don't worry, the exhibition center is very close now, and I think we will get there in about one more {{BLANK}} if the light turns green soon.",
    "cn": "A：計程車司機說現在橋上的交通非常擁擠，我們還能在開幕致詞前趕到商展嗎？ B：別擔心，展覽中心現在已經很近了，如果紅燈很快轉綠，我想大概再一【分鐘】就能到了。"
  },
  {
    "word": "hour",
    "pos": "n.",
    "cn_def": "小時",
    "en_def": "a period of sixty minutes",
    "sentence": "A: How long did you have to wait at the government office when you went to renew the company's business license last Friday? B: I waited for almost an {{BLANK}} because many people were there before me, so next time I will apply online and save myself a lot of trouble.",
    "cn": "A：你上週五去政府機關更新公司營業執照時，等了多久？ B：因為很多人比我早到，我等了將近一個【小時】，所以下次我會在網路上申請，省去很多麻煩。"
  },
  {
    "word": "pause",
    "pos": "n.",
    "cn_def": "暫停；停頓",
    "en_def": "a short stop in speech or action",
    "sentence": "A: The online meeting with the overseas branch has already lasted two hours, and everyone looks tired, so should we keep going with the last topic? B: Let's take a short {{BLANK}} of ten minutes so people can get coffee and stretch, and then we will finish the final item together.",
    "cn": "A：和海外分公司的線上會議已經進行兩個小時了，大家看起來都很累，我們要繼續討論最後一個議題嗎？ B：我們先短暫【暫停】十分鐘，讓大家去拿咖啡、伸展一下，然後再一起完成最後一個項目。"
  },
  {
    "word": "rest",
    "pos": "n.",
    "cn_def": "休息",
    "en_def": "a period of relaxing or sleeping",
    "sentence": "A: You have been working on the annual report since seven o'clock this morning, and it's already past six in the evening, so aren't you exhausted? B: I am very sleepy, so I'll go home and get some {{BLANK}} tonight, and then I will finish checking the numbers early tomorrow before the director arrives.",
    "cn": "A：你從今天早上七點就開始做年度報告，現在已經過了晚上六點，你不累嗎？ B：我非常睏，所以今晚我會回家好好【休息】，然後明天一早在主任到之前把數字檢查完。"
  },
  {
    "word": "watch",
    "pos": "v.",
    "cn_def": "觀看；注視",
    "en_def": "to look at something for a period of time",
    "sentence": "A: The repair technician told us he would come between one and three this afternoon, so what can we do while we stay in the lobby? B: We can sit on the sofa near the window and {{BLANK}} the news on the big TV, and I'll ask the receptionist to call us when he arrives.",
    "cn": "A：維修技師說他今天下午一點到三點之間會來，我們待在大廳時可以做什麼？ B：我們可以坐在窗邊的沙發上，【看】大電視上的新聞，我會請櫃台人員在他到的時候通知我們。"
  },
  {
    "word": "clock",
    "pos": "n.",
    "cn_def": "時鐘",
    "en_def": "a device that shows the time",
    "sentence": "A: How did you know the train was going to leave soon when your phone battery was dead and you didn't have a watch? B: There was a large {{BLANK}} on the wall above the platform, so I checked it again and again and ran to the train just before the doors closed.",
    "cn": "A：你的手機沒電了，又沒戴手錶，你怎麼知道火車快要開了？ B：月台上方的牆上有一個大【時鐘】，所以我一直看它，並在車門關上前跑上了火車。"
  },
  {
    "word": "signal",
    "pos": "n.",
    "cn_def": "信號；暗號",
    "en_def": "a sound, light, or action that gives a message",
    "sentence": "A: The fire drill at our office building is planned for Thursday morning, so how will we know exactly when to leave our desks? B: The safety manager will sound an alarm as the {{BLANK}}, and then everyone should walk calmly down the stairs and wait in the parking lot until the drill ends.",
    "cn": "A：我們辦公大樓的消防演習安排在星期四早上，我們要怎麼確切知道什麼時候該離開座位？ B：安全經理會響起警報作為【信號】，然後大家應該冷靜地走樓梯下樓，在停車場等到演習結束。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群",
    "en_def": "a large group of people in one place",
    "sentence": "A: Why is it taking so long to get into the electronics store when the sale started only ten minutes ago? B: A huge {{BLANK}} of shoppers is waiting outside because the store is offering half-price laptops today, and the security guards are letting only twenty people enter at one time.",
    "cn": "A：特賣才開始十分鐘，為什麼進電器行要花這麼久的時間？ B：因為店家今天推出半價筆電，大批購物【人潮】在外面等候，保全人員一次只讓二十個人進去。"
  },
  {
    "word": "station",
    "pos": "n.",
    "cn_def": "車站",
    "en_def": "a place where trains or buses stop",
    "sentence": "A: I'm going to visit the factory in Hsinchu tomorrow, but I've never been there before, so how should I get there from Taipei? B: Take the high-speed rail to Hsinchu, and when you get out of the {{BLANK}}, our driver will be waiting for you at Exit 4 with a sign that has your name.",
    "cn": "A：我明天要去新竹的工廠參觀，但我以前從沒去過，從台北要怎麼去？ B：搭高鐵到新竹，等你走出【車站】，我們的司機會拿著寫有你名字的牌子在四號出口等你。"
  },
  {
    "word": "lobby",
    "pos": "n.",
    "cn_def": "大廳",
    "en_def": "the large entrance area of a building",
    "sentence": "A: Where should the job candidates wait when they arrive for their interviews this afternoon, since all our meeting rooms are being used? B: Ask them to sit in the {{BLANK}} on the first floor, offer them some tea, and then I will come down to bring each person up to my office.",
    "cn": "A：今天下午應徵者來面試時要在哪裡等？因為我們所有的會議室都在使用中。 B：請他們坐在一樓的【大廳】，給他們一些茶，然後我會下樓把每個人帶到我的辦公室。"
  },
  {
    "word": "eventually",
    "pos": "adv.",
    "cn_def": "最後；終於",
    "en_def": "in the end, after a long time",
    "sentence": "A: Did the company ever find a good solution to the problem with the slow internet connection that bothered everyone for months? B: Yes, after trying three different service providers and spending a lot of money, they {{BLANK}} installed a new fiber line, and now everything works much faster than before.",
    "cn": "A：那個困擾大家好幾個月的網路連線緩慢問題，公司後來有找到好的解決辦法嗎？ B：有，在試過三家不同的網路業者、花了很多錢之後，他們【最後】安裝了新的光纖線路，現在一切都比以前快多了。"
  },
  {
    "word": "soon",
    "pos": "adv.",
    "cn_def": "很快；不久",
    "en_def": "in a short time from now",
    "sentence": "A: The client has called three times this morning to ask about the shipping documents, so when can I tell her that they will be ready? B: Tell her that the documents will be finished {{BLANK}}, because I'm checking the last page now, and I will email them to her before eleven o'clock.",
    "cn": "A：客戶今天早上已經打了三次電話詢問出貨文件的事，我什麼時候可以告訴她文件會準備好？ B：告訴她文件【很快】就會完成，因為我正在檢查最後一頁，十一點前我會用電子郵件寄給她。"
  },
  {
    "word": "finally",
    "pos": "adv.",
    "cn_def": "終於",
    "en_def": "after a long wait or delay",
    "sentence": "A: You look so relieved today, so did you get any good news about the visa for your business trip to the United States? B: Yes, after waiting for more than six weeks and calling the office many times, I {{BLANK}} received my passport with the visa inside this morning, so I can fly next week.",
    "cn": "A：你今天看起來鬆了一口氣，是收到你去美國出差的簽證好消息了嗎？ B：是的，等了六個多星期、也打了好多次電話到辦事處之後，我今天早上【終於】收到了附有簽證的護照，所以下週就能出發了。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的；平靜的",
    "en_def": "relaxed and not worried or angry",
    "sentence": "A: The power went off in the whole building during the board meeting, and the elevators stopped working, so how did the visitors react? B: Everyone stayed {{BLANK}} while the security staff explained the situation with flashlights, and the electricity came back after about fifteen minutes without any problems.",
    "cn": "A：董事會開會時整棟大樓停電，電梯也停了，訪客們有什麼反應？ B：保全人員拿著手電筒說明狀況時，大家都保持【冷靜】，大約十五分鐘後電力就恢復了，沒有發生任何問題。"
  },
  {
    "word": "tired",
    "pos": "adj.",
    "cn_def": "疲倦的",
    "en_def": "feeling that you need rest or sleep",
    "sentence": "A: How was your trip back from the conference in Singapore, and why did you come to the office so late this morning? B: My flight was delayed for five hours, and I didn't get home until three in the morning, so I was really {{BLANK}} and needed a few more hours of sleep.",
    "cn": "A：你從新加坡的研討會回來的行程怎麼樣？為什麼今天早上這麼晚才進辦公室？ B：我的班機延誤了五個小時，我直到凌晨三點才到家，所以我真的很【累】，需要多睡幾個小時。"
  },
  {
    "word": "hope",
    "pos": "v.",
    "cn_def": "希望",
    "en_def": "to want something to happen and think it is possible",
    "sentence": "A: The interview with the hiring manager went well yesterday, but they said they would contact you within a week, so how are you feeling? B: I'm a little nervous while I wait, but I {{BLANK}} they will offer me the position, because the job is close to my home and the team seems friendly.",
    "cn": "A：昨天和招聘經理的面試很順利，但他們說會在一週內聯絡你，你現在感覺怎麼樣？ B：等待的時候我有點緊張，但我【希望】他們會給我這個職位，因為這份工作離我家很近，團隊看起來也很友善。"
  }
];

const MCQS = [
  {
    "q": "Passengers were told to remain at the gate. The _____ was caused by heavy snow at the destination airport.",
    "options": [
      "delay",
      "arrival",
      "station",
      "lobby"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The keynote speaker missed her flight from Tokyo. The organizers decided to _____ her talk until the following morning.",
    "options": [
      "expect",
      "watch",
      "postpone",
      "hope"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Customers formed a long _____ outside the bakery before it opened. Many of them wanted to buy the new limited-edition cakes.",
    "options": [
      "clock",
      "queue",
      "signal",
      "pause"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Please stand in _____ behind the yellow mark until a cashier is free. Staff will call the next customer when a counter opens.",
    "options": [
      "rest",
      "lobby",
      "schedule",
      "line"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Each team member will present a short update at the meeting. When it is your _____, please keep your report under five minutes.",
    "options": [
      "turn",
      "hour",
      "station",
      "crowd"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Learning new accounting software takes time for everyone. Managers should be _____ with staff who need extra help in the first few weeks.",
    "options": [
      "late",
      "early",
      "patient",
      "tired"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "The guests waited _____ in the lobby while the hotel prepared their rooms. Not one of them complained about the short delay.",
    "options": [
      "impatiently",
      "patiently",
      "eventually",
      "soon"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Some callers become _____ when they are put on hold for too long. That is why the company hired more phone operators this year.",
    "options": [
      "patient",
      "calm",
      "early",
      "impatient"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The driver honked his horn _____ as the traffic stopped again. He was worried about missing his ten o'clock meeting downtown.",
    "options": [
      "impatiently",
      "patiently",
      "finally",
      "early"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "We _____ the new office furniture to arrive by Friday. The supplier confirmed that the order left the warehouse yesterday.",
    "options": [
      "postpone",
      "watch",
      "expect",
      "hope"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Hotel managers _____ high demand during the international trade fair next month. They have already hired twenty extra staff for the front desk.",
    "options": [
      "postpone",
      "anticipate",
      "watch",
      "hope"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The updated train _____ is posted on the company website. Commuters should check it before leaving home because several departure times have changed.",
    "options": [
      "lobby",
      "crowd",
      "pause",
      "schedule"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Our director has an _____ with the bank manager at two o'clock. She will discuss a loan for the new branch office.",
    "options": [
      "appointment",
      "arrival",
      "station",
      "signal"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Please inform the front desk of your expected _____ time. Guests checking in after midnight must call the hotel in advance.",
    "options": [
      "appointment",
      "crowd",
      "arrival",
      "moment"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The project report was submitted two days _____ because of a computer problem. The manager asked the team to plan more carefully next time.",
    "options": [
      "early",
      "late",
      "calm",
      "patient"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Applicants should arrive fifteen minutes _____ for the interview. This gives them time to fill out a short form at reception.",
    "options": [
      "finally",
      "eventually",
      "patiently",
      "early"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Could you please wait a _____ while I find your file? The system is running a little slowly this morning.",
    "options": [
      "moment",
      "queue",
      "station",
      "lobby"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The meeting will start in a _____, so please take your seats now. The speaker is just testing the microphone.",
    "options": [
      "crowd",
      "station",
      "minute",
      "signal"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The museum tour lasts about an _____ and costs ten dollars. Visitors can join a group at the information desk.",
    "options": [
      "queue",
      "hour",
      "lobby",
      "arrival"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The speaker made a short _____ to let the audience think about her question. Then she continued with the second part of the presentation.",
    "options": [
      "queue",
      "station",
      "lobby",
      "pause"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "After the long flight, the sales team needed some _____ before the evening dinner. They went straight to their hotel rooms to sleep.",
    "options": [
      "rest",
      "signal",
      "clock",
      "queue"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Visitors can _____ a short video about the factory while they wait. The film explains how our products are made and tested.",
    "options": [
      "postpone",
      "hope",
      "watch",
      "anticipate"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "There is a large _____ on the wall of the waiting room. Patients can see exactly how long they have been sitting there.",
    "options": [
      "crowd",
      "clock",
      "queue",
      "pause"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "The tour guide raised a red flag as a _____ for the group to gather. Everyone walked toward her and got ready to board the bus.",
    "options": [
      "lobby",
      "clock",
      "schedule",
      "signal"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "A large _____ gathered in front of the stage before the concert began. Security guards were asked to keep the main exit clear.",
    "options": [
      "crowd",
      "clock",
      "schedule",
      "signal"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The company shuttle picks up employees at the train _____ every morning. It arrives at the office about twenty minutes later.",
    "options": [
      "crowd",
      "pause",
      "station",
      "moment"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Please wait for your guide in the hotel _____ near the front desk. She will meet your group there at nine o'clock sharp.",
    "options": [
      "signal",
      "lobby",
      "pause",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The two companies argued over the price for several months. They _____ agreed on a deal that satisfied both sides.",
    "options": [
      "early",
      "impatiently",
      "soon",
      "eventually"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The new branch office will open very _____, probably early next month. Interviews for new staff are already taking place this week.",
    "options": [
      "soon",
      "finally",
      "eventually",
      "patiently"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "After three hours of delay, the plane _____ took off at midnight. The tired passengers clapped when the wheels left the runway.",
    "options": [
      "early",
      "patiently",
      "finally",
      "soon"
    ],
    "answer": 2,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "delay": {
    "pos": "n.",
    "en_def": "a time when something happens later than planned",
    "cn_def": "延誤；耽擱"
  },
  "postpone": {
    "pos": "v.",
    "en_def": "to move an event to a later time",
    "cn_def": "延後；延期"
  },
  "queue": {
    "pos": "n.",
    "en_def": "a line of people waiting for something",
    "cn_def": "隊伍；排隊的行列"
  },
  "line": {
    "pos": "n.",
    "en_def": "a row of people waiting one behind another",
    "cn_def": "排隊的隊伍；行列"
  },
  "turn": {
    "pos": "n.",
    "en_def": "the time when it is your chance to do something",
    "cn_def": "輪到的機會；順序"
  },
  "patient": {
    "pos": "adj.",
    "en_def": "able to wait calmly without getting angry",
    "cn_def": "有耐心的"
  },
  "patiently": {
    "pos": "adv.",
    "en_def": "in a calm way, without complaining while waiting",
    "cn_def": "耐心地"
  },
  "impatient": {
    "pos": "adj.",
    "en_def": "easily annoyed when you have to wait",
    "cn_def": "不耐煩的"
  },
  "impatiently": {
    "pos": "adv.",
    "en_def": "in a way that shows you do not want to wait any longer",
    "cn_def": "不耐煩地"
  },
  "expect": {
    "pos": "v.",
    "en_def": "to think that something will happen",
    "cn_def": "預期；期待"
  },
  "anticipate": {
    "pos": "v.",
    "en_def": "to expect something and prepare for it",
    "cn_def": "預料；預先考慮"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will happen",
    "cn_def": "時間表；行程表"
  },
  "appointment": {
    "pos": "n.",
    "en_def": "an arranged time to meet someone",
    "cn_def": "約會；預約"
  },
  "arrival": {
    "pos": "n.",
    "en_def": "the act of reaching a place",
    "cn_def": "抵達；到達"
  },
  "late": {
    "pos": "adj.",
    "en_def": "after the expected or usual time",
    "cn_def": "遲的；晚的"
  },
  "early": {
    "pos": "adv.",
    "en_def": "before the usual or planned time",
    "cn_def": "提早地；早"
  },
  "moment": {
    "pos": "n.",
    "en_def": "a very short period of time",
    "cn_def": "片刻；一會兒"
  },
  "minute": {
    "pos": "n.",
    "en_def": "a period of sixty seconds; a very short time",
    "cn_def": "分鐘；片刻"
  },
  "hour": {
    "pos": "n.",
    "en_def": "a period of sixty minutes",
    "cn_def": "小時"
  },
  "pause": {
    "pos": "n.",
    "en_def": "a short stop in speech or action",
    "cn_def": "暫停；停頓"
  },
  "rest": {
    "pos": "n.",
    "en_def": "a period of relaxing or sleeping",
    "cn_def": "休息"
  },
  "watch": {
    "pos": "v.",
    "en_def": "to look at something for a period of time",
    "cn_def": "觀看；注視"
  },
  "clock": {
    "pos": "n.",
    "en_def": "a device that shows the time",
    "cn_def": "時鐘"
  },
  "signal": {
    "pos": "n.",
    "en_def": "a sound, light, or action that gives a message",
    "cn_def": "信號；暗號"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large group of people in one place",
    "cn_def": "人群"
  },
  "station": {
    "pos": "n.",
    "en_def": "a place where trains or buses stop",
    "cn_def": "車站"
  },
  "lobby": {
    "pos": "n.",
    "en_def": "the large entrance area of a building",
    "cn_def": "大廳"
  },
  "eventually": {
    "pos": "adv.",
    "en_def": "in the end, after a long time",
    "cn_def": "最後；終於"
  },
  "soon": {
    "pos": "adv.",
    "en_def": "in a short time from now",
    "cn_def": "很快；不久"
  },
  "finally": {
    "pos": "adv.",
    "en_def": "after a long wait or delay",
    "cn_def": "終於"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "relaxed and not worried or angry",
    "cn_def": "冷靜的；平靜的"
  },
  "tired": {
    "pos": "adj.",
    "en_def": "feeling that you need rest or sleep",
    "cn_def": "疲倦的"
  },
  "hope": {
    "pos": "v.",
    "en_def": "to want something to happen and think it is possible",
    "cn_def": "希望"
  }
};

const EXTRA_GLOSSES = {};
