// Topic 52 Quiz Data: Chatting 聊天
// Source word list: https://www.examword.com/group-topic/chatting — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T52 - Chatting 聊天",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "chat",
    "pos": "v.",
    "cn_def": "聊天、閒聊",
    "en_def": "to talk in a friendly, informal way",
    "sentence": "A: I noticed that you spent almost an hour in the break room with the new intern this afternoon, so was there a problem with her first project? B: No, everything is fine, we just wanted to {{BLANK}} about her hometown and her favorite restaurants, because I want her to feel welcome on the team.",
    "cn": "A：我注意到你今天下午和新實習生在休息室待了快一個小時，她的第一個專案有問題嗎？ B：沒有，一切都很好，我們只是想【聊聊】她的家鄉和她最喜歡的餐廳，因為我希望她在團隊裡感到受歡迎。"
  },
  {
    "word": "chatter",
    "pos": "n.",
    "cn_def": "喋喋不休、閒聊聲",
    "en_def": "quick, continuous talk about unimportant things",
    "sentence": "A: Why did you move your desk from the open area to the small room next to the storage closet last Monday? B: The loud {{BLANK}} from the sales team near the coffee machine made it hard for me to concentrate on the monthly budget report, so my manager kindly let me work somewhere quieter.",
    "cn": "A：你上週一為什麼把辦公桌從開放區搬到儲藏室旁邊的小房間？ B：咖啡機附近業務團隊吵雜的【閒聊聲】讓我很難專心做每月預算報告，所以經理好心讓我到比較安靜的地方工作。"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "cn_def": "對話、交談",
    "en_def": "a talk between two or more people",
    "sentence": "A: How did you find out that the client in Singapore was unhappy with our delivery schedule before the official complaint arrived? B: I had a long phone {{BLANK}} with their purchasing manager yesterday evening, and she told me openly that the last two shipments were late and that her boss was worried.",
    "cn": "A：在正式投訴送到之前，你是怎麼發現新加坡的客戶對我們的交貨時程不滿意的？ B：我昨天傍晚和他們的採購經理進行了很長的電話【交談】，她坦白告訴我最近兩批貨都遲到了，而且她的老闆很擔心。"
  },
  {
    "word": "talk",
    "pos": "n.",
    "cn_def": "演講、談話",
    "en_def": "a short speech to a group of people about a subject",
    "sentence": "A: Are you going to the marketing conference in Taichung next month, or are you too busy with the new product launch? B: I'm definitely going, because our director asked me to give a short {{BLANK}} about how we used social media to attract younger customers, and I've already started preparing my slides.",
    "cn": "A：你下個月要去台中的行銷研討會嗎？還是你忙著新產品上市太忙了？ B：我一定會去，因為我們的主管請我做一場簡短的【演講】，談談我們如何利用社群媒體吸引年輕顧客，我已經開始準備投影片了。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a talk in which people share ideas and opinions about something",
    "sentence": "A: Did the managers finally decide whether the company will allow employees to work from home two days a week? B: Not yet, they had a long {{BLANK}} about it during this morning's meeting, but they still disagree about how to measure productivity, so they will meet again next Thursday.",
    "cn": "A：經理們最後決定公司是否允許員工每週在家工作兩天了嗎？ B：還沒，他們在今天早上的會議中對此進行了很長的【討論】，但對於如何衡量生產力仍有分歧，所以下週四會再開會。"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "cn_def": "對話、溝通",
    "en_def": "a serious talk between groups to solve a problem or understand each other",
    "sentence": "A: The two departments have been arguing about the shared budget for weeks, so what is the new manager planning to do about it? B: She wants to start an open {{BLANK}} between the team leaders, so every Friday they will sit down together, explain their needs honestly, and try to find a fair solution.",
    "cn": "A：兩個部門為了共用預算已經爭吵好幾週了，新經理打算怎麼處理？ B：她想在團隊主管之間展開開放的【對話】，所以每週五他們會坐下來一起坦誠說明各自的需求，並試著找出公平的解決辦法。"
  },
  {
    "word": "gossip",
    "pos": "n.",
    "cn_def": "八卦、閒話",
    "en_def": "talk about other people's private lives, often not true",
    "sentence": "A: Is it true that our branch office in Kaohsiung is going to close at the end of the year? B: I don't think so, that is probably just {{BLANK}} from the staff lounge, because the regional manager told me yesterday that sales there have actually increased and they are hiring more people.",
    "cn": "A：我們高雄分公司年底要關閉是真的嗎？ B：我不這麼認為，那大概只是員工休息室流傳的【八卦】，因為區域經理昨天告訴我那裡的業績其實有成長，而且他們正在招募更多人。"
  },
  {
    "word": "small talk",
    "pos": "n.phr.",
    "cn_def": "寒暄、閒聊",
    "en_def": "polite talk about unimportant topics, often with people you don't know well",
    "sentence": "A: I always feel nervous at networking events because I never know what to say to people I have just met. B: Start with some easy {{BLANK}} about the weather, the food, or the traffic on the way there, and after a few minutes the conversation usually becomes more natural and relaxed.",
    "cn": "A：我在交流活動上總是很緊張，因為我從來不知道要對剛認識的人說什麼。 B：先從一些輕鬆的【寒暄】開始，例如天氣、食物或來的路上的交通，幾分鐘後對話通常就會變得比較自然和放鬆。"
  },
  {
    "word": "banter",
    "pos": "n.",
    "cn_def": "打趣、玩笑話",
    "en_def": "friendly joking talk between people",
    "sentence": "A: The new designers seem to get along really well, don't they, even though they only joined the company two weeks ago? B: Yes, there is always friendly {{BLANK}} between them during lunch, and they joke about each other's favorite sports teams, which makes the whole office feel more cheerful.",
    "cn": "A：新來的設計師們似乎相處得很好，對吧？雖然他們兩週前才進公司。 B：是啊，午餐時他們之間總是有友善的【玩笑話】，還會互相開對方最喜歡的運動隊伍的玩笑，讓整個辦公室感覺更愉快。"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "cn_def": "交換",
    "en_def": "to give something to someone and receive something from them",
    "sentence": "A: The conference in Tokyo was very busy, so did you have any chance to meet people from other companies in our industry? B: Yes, during the coffee breaks I was able to {{BLANK}} business cards with several suppliers, and two of them have already emailed me about possible partnerships next year.",
    "cn": "A：東京的研討會很忙，你有機會認識我們產業其他公司的人嗎？ B：有，在咖啡休息時間我和幾家供應商【交換】了名片，其中兩家已經寄電子郵件給我，談明年可能的合作。"
  },
  {
    "word": "message",
    "pos": "n.",
    "cn_def": "訊息、留言",
    "en_def": "a short piece of information you send or leave for someone",
    "sentence": "A: I called the accounting department twice this morning to ask about my travel refund, but nobody answered the phone. B: Most of them are attending a training session until noon, so you should leave a {{BLANK}} with the receptionist, and someone will call you back as soon as the session ends.",
    "cn": "A：我今天早上打了兩次電話給會計部詢問我的差旅退款，但沒有人接電話。 B：他們大部分人在參加訓練課程到中午，所以你應該請櫃檯人員幫你留個【訊息】，課程一結束就會有人回電給你。"
  },
  {
    "word": "text",
    "pos": "v.",
    "cn_def": "傳簡訊",
    "en_def": "to send a written message by mobile phone",
    "sentence": "A: The shuttle bus from the hotel to the exhibition center might be late tomorrow morning because of the road repairs. B: In that case, please {{BLANK}} me as soon as you leave the hotel, and I will tell the organizers to keep a seat for you near the front of the main hall.",
    "cn": "A：因為道路施工，明天早上從飯店到展覽中心的接駁車可能會遲到。 B：這樣的話，你一離開飯店就請【傳簡訊】給我，我會告訴主辦單位幫你在主廳前面保留一個座位。"
  },
  {
    "word": "reply",
    "pos": "v.",
    "cn_def": "回覆、回答",
    "en_def": "to answer someone in speech or writing",
    "sentence": "A: The customer from Melbourne has sent us three emails about the missing package since Monday, and she sounds very upset now. B: I know, I promised to {{BLANK}} to her before lunch today, as soon as the warehouse manager confirms where the package is and when it can be delivered.",
    "cn": "A：墨爾本的那位顧客從週一起已經寄了三封關於遺失包裹的電子郵件給我們，她現在聽起來很不高興。 B：我知道，我答應今天午餐前【回覆】她，只要倉庫經理確認包裹在哪裡以及何時可以送達。"
  },
  {
    "word": "respond",
    "pos": "v.",
    "cn_def": "回應",
    "en_def": "to say or do something as an answer or reaction",
    "sentence": "A: Our online store received a lot of negative reviews after the website crashed during the holiday sale last weekend. B: The marketing team will {{BLANK}} to each review personally this week, apologize for the problem, and offer every unhappy customer a discount code for their next purchase.",
    "cn": "A：上週末假期特賣期間網站當機後，我們的網路商店收到很多負評。 B：行銷團隊這週會親自【回應】每一則評論，為問題道歉，並提供每位不滿意的顧客下次購物的折扣碼。"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "cn_def": "溝通、傳達",
    "en_def": "to share information or ideas with others",
    "sentence": "A: Since half of our project team works in Vietnam and the other half is here in Taipei, how do you keep everyone informed? B: We {{BLANK}} mainly through a shared online platform, and we also hold a video meeting every Tuesday morning so that everyone can ask questions and report problems.",
    "cn": "A：既然我們專案團隊一半在越南、一半在台北，你們怎麼讓大家掌握最新消息？ B：我們主要透過共用的線上平台【溝通】，每週二早上也會開視訊會議，讓大家可以提問並回報問題。"
  },
  {
    "word": "interaction",
    "pos": "n.",
    "cn_def": "互動",
    "en_def": "the act of talking or doing things with other people",
    "sentence": "A: Why does the hotel manager want the front desk staff to take a customer service course next month? B: Because guests said in the survey that their {{BLANK}} with the staff at check-in felt cold and rushed, and she believes a warmer welcome will bring more guests back.",
    "cn": "A：飯店經理為什麼要櫃檯人員下個月上客戶服務課程？ B：因為房客在問卷中表示，他們入住時與員工的【互動】感覺冷淡又匆忙，而她相信更溫暖的接待會讓更多客人回流。"
  },
  {
    "word": "socialize",
    "pos": "v.",
    "cn_def": "交際、社交",
    "en_def": "to spend time with other people in a friendly way",
    "sentence": "A: The company has planned a barbecue by the river on Saturday afternoon, but I'm not sure if I should go because I don't know many people. B: You should come, because it's a great chance to {{BLANK}} with colleagues from other departments outside the office, and the food is always delicious.",
    "cn": "A：公司星期六下午在河邊辦了烤肉活動，但我不確定要不要去，因為我認識的人不多。 B：你應該來，因為那是在辦公室以外和其他部門同事【交際】的好機會，而且食物總是很好吃。"
  },
  {
    "word": "catch up",
    "pos": "v.phr.",
    "cn_def": "敘舊、了解近況",
    "en_def": "to talk with someone you have not seen for a while about recent news",
    "sentence": "A: You and your old university roommate haven't seen each other for almost five years, right? B: That's right, but she is visiting Taipei for a business trip next week, so we are going to have dinner at a night market on Wednesday and {{BLANK}} on everything that has happened in our lives.",
    "cn": "A：你和你大學時的老室友快五年沒見面了，對吧？ B：沒錯，但她下週來台北出差，所以我們週三要去夜市吃晚餐，好好【敘敘舊】，聊聊我們生活中發生的一切。"
  },
  {
    "word": "ramble",
    "pos": "v.",
    "cn_def": "漫談、東拉西扯",
    "en_def": "to talk for a long time in a confused way, without staying on the topic",
    "sentence": "A: The presentation by the new consultant was supposed to last twenty minutes, so why did it take over an hour? B: He started to {{BLANK}} about his own travels and past clients instead of focusing on our sales data, and several people in the audience began checking their phones.",
    "cn": "A：新顧問的簡報應該只有二十分鐘，為什麼花了一個多小時？ B：他開始【東拉西扯】地講自己的旅行和以前的客戶，而不是專注在我們的銷售數據上，台下好幾個人都開始看手機了。"
  },
  {
    "word": "interrupt",
    "pos": "v.",
    "cn_def": "打斷、打擾",
    "en_def": "to stop someone while they are speaking or doing something",
    "sentence": "A: The director is still on a video call with the investors from Hong Kong, but the delivery company is waiting for her signature downstairs. B: Please don't {{BLANK}} her right now, because the meeting is very important, so ask the driver to wait ten more minutes or come back after lunch.",
    "cn": "A：主管還在和香港投資人進行視訊會議，但快遞公司在樓下等她簽名。 B：現在請不要【打斷】她，因為這場會議非常重要，請司機再等十分鐘，或午餐後再來。"
  },
  {
    "word": "listen",
    "pos": "v.",
    "cn_def": "聆聽、傾聽",
    "en_def": "to pay attention to what someone says",
    "sentence": "A: Several employees complained that the new manager makes decisions without asking anyone for their opinions. B: I heard about that too, so the HR director advised him to {{BLANK}} carefully to his team during weekly meetings and to take notes on their ideas before he decides anything important.",
    "cn": "A：好幾位員工抱怨新經理做決定時都不問任何人的意見。 B：我也聽說了，所以人資主管建議他在每週會議中仔細【聆聽】團隊的意見，並在做任何重要決定之前記下大家的想法。"
  },
  {
    "word": "share",
    "pos": "v.",
    "cn_def": "分享",
    "en_def": "to tell others about your ideas, feelings or experiences",
    "sentence": "A: What should we do during the first fifteen minutes of the workshop to help the participants relax? B: Let's ask everyone to {{BLANK}} one interesting story about their first job, because it is a fun way to break the ice and helps people remember each other's names.",
    "cn": "A：工作坊的前十五分鐘我們該做什麼，讓參加者放鬆一點？ B：我們請每個人【分享】一個關於自己第一份工作的有趣故事，因為這是打破僵局的有趣方式，也能幫助大家記住彼此的名字。"
  },
  {
    "word": "debate",
    "pos": "n.",
    "cn_def": "辯論、爭論",
    "en_def": "a discussion in which people give different opinions on a topic",
    "sentence": "A: Did the city council make a final decision about building the new shopping mall near the train station? B: Not yet, there was a heated {{BLANK}} at last night's public meeting, because local shop owners worry about losing customers while residents hope for more jobs and better parking.",
    "cn": "A：市議會對於在火車站附近興建新購物中心做出最後決定了嗎？ B：還沒，昨晚的公聽會上有一場激烈的【辯論】，因為當地店家擔心失去顧客，而居民則希望有更多工作機會和更好的停車空間。"
  },
  {
    "word": "comment",
    "pos": "n.",
    "cn_def": "評論、意見",
    "en_def": "something you say or write that gives an opinion",
    "sentence": "A: Have you read the feedback forms that the trainees filled out after yesterday's safety workshop? B: Yes, and one {{BLANK}} was especially useful, because a trainee suggested adding more real examples from our factory, so I'm going to update the slides before the next session in December.",
    "cn": "A：你看過受訓人員在昨天安全工作坊後填寫的意見回饋表嗎？ B：看過了，其中一則【評論】特別有用，有位受訓人員建議加入更多我們工廠的真實案例，所以我會在十二月的下一堂課之前更新投影片。"
  }
];

const MCQS = [
  {
    "q": "The _____ of guests in the hotel lobby was so loud that I could not hear the phone. I moved to a quiet corner to call.",
    "options": [
      "message",
      "interaction",
      "comment",
      "chatter"
    ],
    "answer": 3,
    "vocabIndex": 1
  },
  {
    "q": "During lunch, employees often _____ about their weekend plans. It is a nice way to relax before the afternoon work.",
    "options": [
      "interrupt",
      "chat",
      "exchange",
      "respond"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "I had a pleasant _____ with the taxi driver on the way to the airport. He told me about his favorite local restaurants.",
    "options": [
      "conversation",
      "debate",
      "message",
      "comment"
    ],
    "answer": 0,
    "vocabIndex": 2
  },
  {
    "q": "At the trade fair, visitors can _____ contact details with exhibitors. This helps companies find new business partners.",
    "options": [
      "ramble",
      "listen",
      "exchange",
      "socialize"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Dr. Lin will give a _____ on healthy eating in the main hall at 3 p.m. All staff members are welcome to attend.",
    "options": [
      "gossip",
      "chatter",
      "banter",
      "talk"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "If the train is delayed, please _____ me the new arrival time. I will meet you at the station exit.",
    "options": [
      "text",
      "ramble",
      "listen",
      "socialize"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "After a long _____, the board agreed to consider opening a new factory in Vietnam. The final vote will take place next month.",
    "options": [
      "banter",
      "discussion",
      "chatter",
      "small talk"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Please _____ to this email by Friday if you plan to attend the dinner. We need to know the number of guests.",
    "options": [
      "interrupt",
      "socialize",
      "reply",
      "exchange"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The two companies have opened a _____ to settle their dispute over the contract. Both sides hope to reach an agreement soon.",
    "options": [
      "dialogue",
      "gossip",
      "chatter",
      "comment"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The company promised to _____ quickly to all customer complaints. Each complaint will receive an answer within 24 hours.",
    "options": [
      "ramble",
      "chat",
      "respond",
      "share"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "Please do not spread _____ about your coworkers' private lives. It can hurt people's feelings and damage team spirit.",
    "options": [
      "interaction",
      "dialogue",
      "debate",
      "gossip"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Good managers _____ their goals clearly to every team member. This helps everyone understand exactly what they need to do.",
    "options": [
      "ramble",
      "communicate",
      "socialize",
      "interrupt"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Sales staff should make some _____ with customers before discussing prices. A few friendly words help build trust.",
    "options": [
      "debate",
      "chatter",
      "small talk",
      "interaction"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "New employees are encouraged to _____ with coworkers at the monthly party. Making friends at work makes the job more enjoyable.",
    "options": [
      "interrupt",
      "socialize",
      "respond",
      "exchange"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "The radio hosts are famous for their funny _____ every morning. Listeners enjoy hearing them joke with each other.",
    "options": [
      "debate",
      "message",
      "interaction",
      "banter"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "I haven't seen my former manager since she retired. We are meeting for coffee next week to _____ on each other's news.",
    "options": [
      "catch up",
      "interrupt",
      "ramble",
      "respond"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Ms. Park is in a meeting right now. Would you like to leave a _____ for her?",
    "options": [
      "debate",
      "message",
      "banter",
      "dialogue"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Keep your speech short and clear. Speakers who _____ for too long often lose the audience's attention.",
    "options": [
      "text",
      "exchange",
      "ramble",
      "reply"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Online shopping reduces face-to-face _____ between sellers and buyers. Some customers really miss talking to friendly shop assistants.",
    "options": [
      "interaction",
      "gossip",
      "message",
      "comment"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Please do not _____ the speaker during the presentation. You can ask questions at the end of the session.",
    "options": [
      "socialize",
      "ramble",
      "catch up",
      "interrupt"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The candidates will hold a public _____ on TV next Friday. They will discuss their plans for the city's economy.",
    "options": [
      "gossip",
      "debate",
      "chatter",
      "small talk"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Customer service agents must _____ carefully to each caller's problem. Then they can offer the right solution.",
    "options": [
      "exchange",
      "text",
      "listen",
      "interrupt"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Thank you for your helpful _____ on my draft report. I have already corrected the errors you pointed out.",
    "options": [
      "chatter",
      "gossip",
      "banter",
      "comment"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Team members are asked to _____ their ideas at the weekly meeting. The best suggestions will be tested next month.",
    "options": [
      "share",
      "ramble",
      "listen",
      "respond"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The _____ between the two managers lasted almost an hour. They talked about the budget for the coming year.",
    "options": [
      "message",
      "comment",
      "conversation",
      "banter"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Our engineers in Germany and Taiwan _____ by video call every week. This keeps the project on schedule.",
    "options": [
      "ramble",
      "communicate",
      "interrupt",
      "listen"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The topic of the panel _____ is the future of electric cars. Four experts will share their opinions.",
    "options": [
      "discussion",
      "gossip",
      "chatter",
      "message"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "I'm sorry to _____ your lunch, but there is an urgent call from the client. She needs to speak with you now.",
    "options": [
      "listen",
      "respond",
      "ramble",
      "interrupt"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The manager made a positive _____ about my presentation. She said my charts were clear and easy to follow.",
    "options": [
      "comment",
      "chatter",
      "gossip",
      "dialogue"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "I sent the supplier three emails last week. They still haven't had time to _____ to any of them.",
    "options": [
      "socialize",
      "ramble",
      "reply",
      "exchange"
    ],
    "answer": 2,
    "vocabIndex": 12
  }
];

const LOOKUP = {
  "chat": {
    "pos": "v.",
    "en_def": "to talk in a friendly, informal way",
    "cn_def": "聊天、閒聊"
  },
  "chatter": {
    "pos": "n.",
    "en_def": "quick, continuous talk about unimportant things",
    "cn_def": "喋喋不休、閒聊聲"
  },
  "conversation": {
    "pos": "n.",
    "en_def": "a talk between two or more people",
    "cn_def": "對話、交談"
  },
  "talk": {
    "pos": "n.",
    "en_def": "a short speech to a group of people about a subject",
    "cn_def": "演講、談話"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk in which people share ideas and opinions about something",
    "cn_def": "討論"
  },
  "dialogue": {
    "pos": "n.",
    "en_def": "a serious talk between groups to solve a problem or understand each other",
    "cn_def": "對話、溝通"
  },
  "gossip": {
    "pos": "n.",
    "en_def": "talk about other people's private lives, often not true",
    "cn_def": "八卦、閒話"
  },
  "small talk": {
    "pos": "n.phr.",
    "en_def": "polite talk about unimportant topics, often with people you don't know well",
    "cn_def": "寒暄、閒聊"
  },
  "banter": {
    "pos": "n.",
    "en_def": "friendly joking talk between people",
    "cn_def": "打趣、玩笑話"
  },
  "exchange": {
    "pos": "v.",
    "en_def": "to give something to someone and receive something from them",
    "cn_def": "交換"
  },
  "message": {
    "pos": "n.",
    "en_def": "a short piece of information you send or leave for someone",
    "cn_def": "訊息、留言"
  },
  "text": {
    "pos": "v.",
    "en_def": "to send a written message by mobile phone",
    "cn_def": "傳簡訊"
  },
  "reply": {
    "pos": "v.",
    "en_def": "to answer someone in speech or writing",
    "cn_def": "回覆、回答"
  },
  "respond": {
    "pos": "v.",
    "en_def": "to say or do something as an answer or reaction",
    "cn_def": "回應"
  },
  "communicate": {
    "pos": "v.",
    "en_def": "to share information or ideas with others",
    "cn_def": "溝通、傳達"
  },
  "interaction": {
    "pos": "n.",
    "en_def": "the act of talking or doing things with other people",
    "cn_def": "互動"
  },
  "socialize": {
    "pos": "v.",
    "en_def": "to spend time with other people in a friendly way",
    "cn_def": "交際、社交"
  },
  "catch up": {
    "pos": "v.phr.",
    "en_def": "to talk with someone you have not seen for a while about recent news",
    "cn_def": "敘舊、了解近況"
  },
  "ramble": {
    "pos": "v.",
    "en_def": "to talk for a long time in a confused way, without staying on the topic",
    "cn_def": "漫談、東拉西扯"
  },
  "interrupt": {
    "pos": "v.",
    "en_def": "to stop someone while they are speaking or doing something",
    "cn_def": "打斷、打擾"
  },
  "listen": {
    "pos": "v.",
    "en_def": "to pay attention to what someone says",
    "cn_def": "聆聽、傾聽"
  },
  "share": {
    "pos": "v.",
    "en_def": "to tell others about your ideas, feelings or experiences",
    "cn_def": "分享"
  },
  "debate": {
    "pos": "n.",
    "en_def": "a discussion in which people give different opinions on a topic",
    "cn_def": "辯論、爭論"
  },
  "comment": {
    "pos": "n.",
    "en_def": "something you say or write that gives an opinion",
    "cn_def": "評論、意見"
  }
};

const EXTRA_GLOSSES = {};
