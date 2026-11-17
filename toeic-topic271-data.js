// Topic 271 Quiz Data: Party 派對
// Source word list: https://www.examword.com/group-topic/party — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T271 - Party 派對",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "celebration",
    "pos": "n.",
    "cn_def": "慶祝活動；慶典",
    "en_def": "a special event to enjoy an important day or success",
    "sentence": "A: Has the marketing team decided where to hold the dinner for our company's twentieth anniversary next month, since many clients and former staff members will attend? B: Yes, they booked the large hall at the Grand Hotel for the {{BLANK}}, and the manager wants every department to prepare a short video about its history.",
    "cn": "A：行銷團隊決定好下個月公司二十週年晚宴要在哪裡舉辦了嗎？因為許多客戶和前員工都會出席。 B：決定了，他們為這場【慶祝活動】預訂了格蘭飯店的大廳，經理希望每個部門都準備一段介紹部門歷史的短片。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "賓客；客人",
    "en_def": "a person who is invited to an event or someone's home",
    "sentence": "A: How many people have replied to the email about Friday's retirement dinner for Mr. Chen, and do we need to change the restaurant reservation? B: So far forty-two people have said they will come, so I asked the restaurant to add two more tables, and each {{BLANK}} will also receive a small thank-you card at the door.",
    "cn": "A：關於週五陳先生退休晚宴的電子郵件，目前有多少人回覆了？我們需要更改餐廳的訂位嗎？ B：到目前為止有四十二人表示會來，所以我請餐廳再加兩桌，而且每位【賓客】在門口也會收到一張小謝卡。"
  },
  {
    "word": "host",
    "pos": "n.",
    "cn_def": "主人；主持人",
    "en_def": "a person who welcomes guests or leads an event",
    "sentence": "A: Who is going to welcome the visitors and introduce the speakers at the end-of-year party, since our general manager will be on a business trip in Singapore? B: Linda from Human Resources agreed to be the {{BLANK}} this year because she is friendly, speaks clearly, and knows almost everyone in the company.",
    "cn": "A：年終派對上誰要負責迎接來賓並介紹講者？因為我們的總經理會去新加坡出差。 B：人資部的琳達同意擔任今年的【主持人】，因為她很友善、說話清楚，而且幾乎認識公司裡的每個人。"
  },
  {
    "word": "invitation",
    "pos": "n.",
    "cn_def": "邀請；請帖",
    "en_def": "a request asking someone to come to an event",
    "sentence": "A: Did the clients from Osaka say whether they can join us for the product launch party at the hotel on the fifteenth of next month? B: Yes, their director accepted our {{BLANK}} this morning and said that three managers will fly in on Thursday, so we should reserve rooms for them near the venue.",
    "cn": "A：大阪的客戶有說他們能否參加下個月十五日在飯店舉行的產品發表派對嗎？ B：有，他們的主管今天早上接受了我們的【邀請】，並說三位經理會在週四搭機抵達，所以我們應該在會場附近幫他們訂房。"
  },
  {
    "word": "venue",
    "pos": "n.",
    "cn_def": "場地；會場",
    "en_def": "the place where an event is held",
    "sentence": "A: Why did the event planners move the company's summer party from the rooftop garden to the hotel ballroom only two days before the event? B: The weather report warned of heavy rain and strong wind on Saturday evening, so they chose an indoor {{BLANK}} that has enough space, good lighting, and parking for all the guests.",
    "cn": "A：活動策劃人員為什麼在活動前兩天才把公司夏日派對從屋頂花園移到飯店宴會廳？ B：氣象報告警告週六晚上會有大雨和強風，所以他們選了一個室內【場地】，那裡有足夠的空間、良好的照明，也有足夠讓所有賓客停車的車位。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；布置",
    "en_def": "to make a place look nicer by adding pretty things",
    "sentence": "A: What should the new interns do this afternoon after they finish sorting the documents for tomorrow's meeting with the bank? B: Please ask them to {{BLANK}} the staff lounge with flowers, lights, and colorful paper, because we are holding a small birthday party there for our manager at five o'clock.",
    "cn": "A：新實習生今天下午整理完明天與銀行開會的文件後，該做什麼呢？ B：請他們用鮮花、燈飾和彩色紙【裝飾】員工休息室，因為我們五點要在那裡幫經理辦一個小型生日派對。"
  },
  {
    "word": "decoration",
    "pos": "n.",
    "cn_def": "裝飾品；裝飾",
    "en_def": "something pretty used to make a place look special",
    "sentence": "A: The lobby looks completely different today, so did the building manager hire a design company to prepare it for the holiday season? B: No, our own staff volunteered after work last night, and every {{BLANK}} you see, including the paper stars and the small lights on the tree, was made by people from our office.",
    "cn": "A：大廳今天看起來完全不一樣，大樓管理員是請了設計公司來為假期布置的嗎？ B：不是，是我們自己的員工昨晚下班後自願來的，你看到的每一件【裝飾品】，包括紙星星和樹上的小燈，都是我們辦公室的人做的。"
  },
  {
    "word": "balloon",
    "pos": "n.",
    "cn_def": "氣球",
    "en_def": "a small colorful rubber bag filled with air or gas",
    "sentence": "A: Is there anything else we need to buy before the children arrive for the family day that our company is holding at the riverside park on Sunday? B: We still need a small pump to fill each {{BLANK}} with air, because the kids' games all use them and the shop near the park will be closed this weekend.",
    "cn": "A：在孩子們抵達公司週日於河濱公園舉辦的家庭日之前，我們還需要買什麼嗎？ B：我們還需要一個小打氣筒來幫每個【氣球】充氣，因為孩子們的遊戲都會用到，而且公園附近的商店這週末不營業。"
  },
  {
    "word": "music",
    "pos": "n.",
    "cn_def": "音樂",
    "en_def": "sounds made by singing or playing instruments",
    "sentence": "A: The guests at last year's company dinner complained that they could not hear the speeches clearly, so what are we planning to change this time? B: We will ask the band to play soft {{BLANK}} only while people are eating, and they will stop completely whenever the president or a guest speaker is on the stage.",
    "cn": "A：去年公司晚宴的賓客抱怨聽不清楚致詞，那這次我們打算做什麼改變？ B：我們會請樂團只在大家用餐時演奏輕柔的【音樂】，而總裁或客座講者上台時，他們就會完全停下來。"
  },
  {
    "word": "dance",
    "pos": "v.",
    "cn_def": "跳舞",
    "en_def": "to move your body to music",
    "sentence": "A: Why was the hotel ballroom so noisy last night when I walked past it on my way to the parking garage after working late? B: The sales department was holding a party to celebrate their record year, and after dinner almost everyone stayed to {{BLANK}} to the live band until nearly eleven o'clock.",
    "cn": "A：昨晚我加班後走去停車場經過飯店宴會廳時，為什麼那裡這麼吵？ B：業務部正在辦派對慶祝他們創紀錄的一年，晚餐後幾乎每個人都留下來隨著現場樂團【跳舞】，一直到將近十一點。"
  },
  {
    "word": "snack",
    "pos": "n.",
    "cn_def": "點心；零食",
    "en_def": "a small amount of food eaten between meals",
    "sentence": "A: The training workshop will last from nine in the morning until five in the afternoon, so should we provide anything for the participants besides lunch? B: Yes, let's put fruit, cookies, and a light {{BLANK}} on the table outside the room during each break, because people find it hard to concentrate when they are hungry.",
    "cn": "A：培訓工作坊從早上九點持續到下午五點，除了午餐之外，我們還需要為參加者準備什麼嗎？ B：需要，我們在每次休息時間把水果、餅乾和輕食【點心】放在會議室外的桌上吧，因為人肚子餓的時候很難專心。"
  },
  {
    "word": "buffet",
    "pos": "n.",
    "cn_def": "自助餐",
    "en_def": "a meal where guests serve themselves from many dishes",
    "sentence": "A: Should we order individual meals for the welcome party, or is there a better way to serve food to around eighty guests from different countries? B: I think a {{BLANK}} is the best choice, because guests can walk around, choose the dishes they like, and avoid food that they cannot eat for health or religious reasons.",
    "cn": "A：迎新派對我們該訂個人餐點，還是有更好的方式為大約八十位來自不同國家的賓客供應食物？ B：我認為【自助餐】是最好的選擇，因為賓客可以四處走動、選擇他們喜歡的菜，並避開因健康或宗教原因不能吃的食物。"
  },
  {
    "word": "toast",
    "pos": "n.",
    "cn_def": "敬酒；祝酒",
    "en_def": "words said before people drink together to wish someone well",
    "sentence": "A: What happens right after the main course at tomorrow's dinner for the new branch office, since I have never attended this kind of formal event before? B: The president will stand up and propose a {{BLANK}} to the new team, and then everyone raises a glass and wishes the branch success in its first year.",
    "cn": "A：明天新分公司晚宴上主菜之後會發生什麼事？因為我從來沒參加過這種正式活動。 B：總裁會站起來向新團隊【敬酒】，接著大家舉杯，祝福分公司第一年順利成功。"
  },
  {
    "word": "speech",
    "pos": "n.",
    "cn_def": "演講；致詞",
    "en_def": "a formal talk given to a group of people",
    "sentence": "A: You look a little nervous this afternoon, so is something wrong with the report you are preparing for the board meeting next week? B: No, the report is fine, but I have to give a short {{BLANK}} at tonight's farewell party for my manager, and I am worried that I will forget what I planned to say.",
    "cn": "A：你今天下午看起來有點緊張，是你在準備的下週董事會報告出了什麼問題嗎？ B：不是，報告沒問題，但我今晚得在經理的歡送派對上發表一段簡短的【演講】，我擔心會忘記原本打算要說的話。"
  },
  {
    "word": "surprise",
    "pos": "n.",
    "cn_def": "驚喜；意外",
    "en_def": "something that you did not expect",
    "sentence": "A: Why did everyone suddenly stop talking and hide behind the desks when Mr. Lin walked out of the elevator this morning? B: It is his fiftieth birthday, so the team planned a {{BLANK}} party with a cake and flowers, and nobody told him about it because we wanted to see his happy reaction.",
    "cn": "A：今天早上林先生走出電梯時，為什麼大家突然停止說話並躲到桌子後面？ B：今天是他五十歲生日，所以團隊策劃了一場有蛋糕和鮮花的【驚喜】派對，沒有人告訴他，因為我們想看他開心的反應。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main idea or style of an event",
    "sentence": "A: Have the organizers decided what the guests should wear to the annual company party, or can people simply come in their normal work clothes? B: This year the {{BLANK}} is the 1980s, so everyone is encouraged to wear bright colors and old-fashioned clothes, and the best-dressed employee will win a free weekend at a hot spring hotel.",
    "cn": "A：籌辦人員決定賓客參加年度公司派對該穿什麼了嗎？還是大家穿平常的上班服裝來就好？ B：今年的【主題】是1980年代，所以鼓勵大家穿鮮豔的顏色和復古服裝，穿得最好看的員工將贏得溫泉飯店免費週末住宿。"
  },
  {
    "word": "costume",
    "pos": "n.",
    "cn_def": "服裝；化裝服",
    "en_def": "special clothes worn to look like another person or thing",
    "sentence": "A: Where did you find that pirate hat and long coat, because I need something interesting to wear to the Halloween party at the office on Friday evening? B: I rented the whole {{BLANK}} from a small shop near the train station, and it only cost about five hundred dollars for three days, including cleaning.",
    "cn": "A：你那頂海盜帽和長外套是在哪裡找到的？因為我週五晚上辦公室的萬聖節派對需要一些有趣的衣服穿。 B：我是在火車站附近的一家小店租了整套【服裝】，租三天只要大約五百元，還包含清洗費。"
  },
  {
    "word": "confetti",
    "pos": "n.",
    "cn_def": "彩色紙屑",
    "en_def": "small pieces of colored paper thrown at celebrations",
    "sentence": "A: Why are the cleaning staff complaining about the conference room this morning, since the meeting yesterday finished quite early? B: After the meeting, the team celebrated winning the big contract by throwing colorful {{BLANK}} into the air, and tiny pieces of paper are now stuck in the carpet and under every chair.",
    "cn": "A：清潔人員今天早上為什麼在抱怨會議室？昨天的會議不是很早就結束了嗎？ B：會議結束後，團隊把五顏六色的【彩色紙屑】拋向空中來慶祝贏得大合約，現在細小的紙片都卡在地毯裡和每張椅子底下。"
  },
  {
    "word": "refreshment",
    "pos": "n.",
    "cn_def": "茶點；點心飲料",
    "en_def": "light food and drinks served at an event",
    "sentence": "A: Where can visitors get something to drink during the three-hour open house at our new factory, since there are no cafés nearby? B: We will set up a {{BLANK}} area next to the main entrance with coffee, tea, juice, and sandwiches, and two staff members will keep the tables full all afternoon.",
    "cn": "A：在我們新工廠為期三小時的開放參觀日期間，訪客可以在哪裡喝點東西？因為附近沒有咖啡店。 B：我們會在正門旁設一個【茶點】區，提供咖啡、茶、果汁和三明治，並有兩名員工整個下午補充桌上的餐點。"
  },
  {
    "word": "cheer",
    "pos": "v.",
    "cn_def": "歡呼；喝采",
    "en_def": "to shout because you are happy or want to support someone",
    "sentence": "A: Why was there so much noise coming from the cafeteria during lunch, because I could hear it from my office on the third floor? B: The company's basketball team was playing in the final on the big screen, and all the staff started to {{BLANK}} loudly when our team scored the winning point in the last second.",
    "cn": "A：午餐時間餐廳裡為什麼那麼吵？我在三樓辦公室都聽得到。 B：公司籃球隊的決賽正在大螢幕上播放，當我們的隊伍在最後一秒得到致勝分時，全體員工開始大聲【歡呼】。"
  },
  {
    "word": "laughter",
    "pos": "n.",
    "cn_def": "笑聲",
    "en_def": "the sound of people laughing",
    "sentence": "A: How did the new manager's first team dinner go last night, since many people were worried that he might be too strict and serious? B: It went really well, because he told funny stories about his first job, and the whole restaurant was filled with {{BLANK}} until the waiters started closing for the night.",
    "cn": "A：新經理昨晚第一次的團隊聚餐進行得怎麼樣？許多人原本擔心他可能太嚴格、太嚴肅。 B：進行得非常順利，因為他講了自己第一份工作的趣事，整間餐廳都充滿了【笑聲】，直到服務生開始準備打烊。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群；群眾",
    "en_def": "a large group of people in one place",
    "sentence": "A: Do you think we should arrive early for the concert in the city park that the bank is sponsoring on Saturday night, or is it fine to come at eight? B: We should get there before seven, because a huge {{BLANK}} is expected, and the best places near the stage are usually taken an hour before it starts.",
    "cn": "A：你覺得週六晚上銀行贊助的城市公園音樂會，我們該早點到，還是八點來就好？ B：我們應該七點前就到，因為預計會有大批【人群】，而舞台附近最好的位置通常在開始前一小時就被佔走了。"
  },
  {
    "word": "entertain",
    "pos": "v.",
    "cn_def": "招待；娛樂",
    "en_def": "to give guests food, drinks, or fun activities",
    "sentence": "A: The visitors from our partner company in Germany will stay in Taipei for three days, so how are we going to keep them busy in the evenings after the meetings? B: The sales director plans to {{BLANK}} them with a traditional dinner on the first night, a night market tour on the second, and a boat trip on the last evening.",
    "cn": "A：我們德國合作公司的訪客會在台北待三天，會議結束後的晚上我們要怎麼安排他們的活動？ B：業務總監打算第一晚用傳統晚宴【招待】他們，第二晚帶他們逛夜市，最後一晚則安排搭船遊覽。"
  },
  {
    "word": "game",
    "pos": "n.",
    "cn_def": "遊戲",
    "en_def": "a fun activity with rules that people play",
    "sentence": "A: What activities have you planned for the team-building party, since many of the new employees from different departments have not met each other yet? B: We will start with a simple {{BLANK}} where people work in small groups to answer questions about the company, so everyone has a chance to talk and laugh together.",
    "cn": "A：你為團隊建立派對安排了什麼活動？因為許多來自不同部門的新員工彼此還不認識。 B：我們會先從一個簡單的【遊戲】開始，大家分成小組回答關於公司的問題，讓每個人都有機會一起聊天和歡笑。"
  },
  {
    "word": "karaoke",
    "pos": "n.",
    "cn_def": "卡拉OK",
    "en_def": "singing along to recorded music, often with friends",
    "sentence": "A: Where are you all going after the year-end dinner tonight, since the restaurant closes at nine and it is still early? B: Most of the sales team booked a private room at a {{BLANK}} bar near the station, so we can sing our favorite songs together until midnight and relax after a very busy year.",
    "cn": "A：今晚尾牙晚餐後你們要去哪裡？餐廳九點就打烊了，時間還早。 B：業務團隊大部分人在車站附近的【卡拉OK】店訂了包廂，我們可以一起唱最喜歡的歌到午夜，在非常忙碌的一年後放鬆一下。"
  },
  {
    "word": "midnight",
    "pos": "n.",
    "cn_def": "午夜；半夜十二點",
    "en_def": "twelve o'clock at night",
    "sentence": "A: Is the hotel restaurant still open if our guests want to continue the party after the awards ceremony ends at ten o'clock tonight? B: Yes, the manager told me that the bar and restaurant stay open until {{BLANK}} on Fridays, but after that the guests must go back to their rooms because the staff need to clean up.",
    "cn": "A：如果今晚十點頒獎典禮結束後我們的賓客想繼續派對，飯店餐廳還會營業嗎？ B：會，經理告訴我週五酒吧和餐廳營業到【午夜】，但之後賓客必須回房，因為員工需要打掃。"
  },
  {
    "word": "fireworks",
    "pos": "n.",
    "cn_def": "煙火",
    "en_def": "colorful explosions of light in the sky at celebrations",
    "sentence": "A: Why were so many people standing on the roof of the office building after work on New Year's Eve, even though it was very cold and windy? B: They wanted to watch the {{BLANK}} over Taipei 101 at midnight, and the roof has one of the best views in the city, so the manager kept the doors open late.",
    "cn": "A：除夕夜下班後，為什麼那麼多人站在辦公大樓的頂樓，即使天氣又冷又刮風？ B：他們想在午夜看台北101上空的【煙火】，而頂樓是城裡視野最好的地方之一，所以經理很晚才關門。"
  },
  {
    "word": "gift",
    "pos": "n.",
    "cn_def": "禮物",
    "en_def": "something you give to someone, a present",
    "sentence": "A: What should we buy for Sarah, who is leaving the company next week to move to Canada with her family after working here for ten years? B: The team collected some money and bought her a leather travel bag as a farewell {{BLANK}}, and everyone will also sign a big card for her at the party.",
    "cn": "A：莎拉在這裡工作十年後，下週就要離職和家人搬去加拿大，我們該買什麼送她？ B：團隊湊了一些錢，買了一個皮革旅行袋當作送別【禮物】，大家也會在派對上幫她簽一張大卡片。"
  },
  {
    "word": "cake",
    "pos": "n.",
    "cn_def": "蛋糕",
    "en_def": "a sweet baked food, often eaten at birthdays",
    "sentence": "A: Did you remember to order something sweet for the office party celebrating the company's tenth anniversary tomorrow afternoon? B: Yes, I ordered a large chocolate {{BLANK}} from the bakery across the street, and they will write the company name and logo on top and deliver it to the lobby at three o'clock.",
    "cn": "A：你有記得為明天下午慶祝公司十週年的辦公室派對訂甜點嗎？ B：有，我向對街的麵包店訂了一個大巧克力【蛋糕】，他們會在上面寫上公司名稱和標誌，並在三點送到大廳。"
  },
  {
    "word": "invite",
    "pos": "v.",
    "cn_def": "邀請",
    "en_def": "to ask someone to come to an event",
    "sentence": "A: The product launch is only two weeks away, so who are we planning to ask to come besides our regular customers and suppliers? B: We also want to {{BLANK}} several reporters from business magazines and a few popular online reviewers, because their stories could help us reach many more young buyers across Asia.",
    "cn": "A：產品發表會只剩兩週了，除了老客戶和供應商，我們還打算請誰來？ B：我們也想【邀請】幾位商業雜誌的記者和幾位受歡迎的網路評論家，因為他們的報導能幫助我們接觸到亞洲各地更多年輕買家。"
  },
  {
    "word": "gather",
    "pos": "v.",
    "cn_def": "聚集；集合",
    "en_def": "to come together in one place",
    "sentence": "A: Where should all the employees meet before the bus leaves for the company trip to the beach on Saturday morning? B: Please ask everyone to {{BLANK}} in front of the main entrance by seven thirty, because the driver cannot wait long and we want to arrive before the roads become busy.",
    "cn": "A：週六早上公司去海邊旅遊的巴士出發前，所有員工應該在哪裡集合？ B：請大家七點半前在大門口前【集合】，因為司機不能等太久，而且我們想在路上變擁擠之前抵達。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正式的",
    "en_def": "serious and following special rules of dress or behavior",
    "sentence": "A: Should I wear jeans and a sweater to the dinner with the bank's directors tomorrow night, or do I need to buy something new? B: It is a {{BLANK}} event at a five-star hotel, so men are expected to wear a dark suit and tie, and you should arrive on time because the speeches begin exactly at seven.",
    "cn": "A：明晚和銀行董事們的晚宴，我可以穿牛仔褲和毛衣去嗎？還是需要買新衣服？ B：那是在五星級飯店舉行的【正式】活動，男士應該穿深色西裝打領帶，而且你應該準時抵達，因為致詞七點整就開始。"
  },
  {
    "word": "casual",
    "pos": "adj.",
    "cn_def": "輕鬆隨意的；非正式的",
    "en_def": "relaxed and not formal",
    "sentence": "A: Do the new interns need to wear suits to the welcome barbecue that the department is holding in the company garden on Friday afternoon? B: No, it is a {{BLANK}} gathering after work, so T-shirts, shorts, and comfortable shoes are perfectly fine, and people can bring their families if they want to.",
    "cn": "A：部門週五下午在公司花園舉辦的迎新烤肉會，新實習生需要穿西裝嗎？ B：不用，那是下班後的【輕鬆隨性】聚會，穿T恤、短褲和舒適的鞋子就完全沒問題，想帶家人來也可以。"
  },
  {
    "word": "memorable",
    "pos": "adj.",
    "cn_def": "難忘的；值得紀念的",
    "en_def": "so good or special that you remember it",
    "sentence": "A: Everyone is still talking about last month's company trip to Okinawa, so what made it so special compared with the trips we took before? B: The weather was perfect, the hotel was right next to the beach, and the farewell party with live music on the last night made it the most {{BLANK}} trip in years.",
    "cn": "A：大家到現在還在談論上個月公司去沖繩的旅行，跟以前的旅行比起來，是什麼讓它這麼特別？ B：天氣非常好，飯店就在海灘旁邊，加上最後一晚有現場音樂的歡送派對，讓它成為這幾年來最【難忘】的一次旅行。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something fun because of a special day or success",
    "sentence": "A: Why did the manager book a table for twelve people at the Italian restaurant downtown this Friday evening? B: Our team finally finished the new software project two weeks ahead of schedule, so he wants to {{BLANK}} with everyone and thank us for working so many late nights over the past three months.",
    "cn": "A：經理為什麼這週五晚上在市區的義大利餐廳訂了十二人的位子？ B：我們團隊終於提前兩週完成了新軟體專案，所以他想和大家一起【慶祝】，並感謝我們過去三個月加了那麼多夜班。"
  }
];

const MCQS = [
  {
    "q": "The company will hold a small _____ in the lobby on Friday. Staff will enjoy cake and drinks to mark the record sales year.",
    "options": [
      "celebration",
      "complaint",
      "inspection",
      "shortage"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Each _____ must show the invitation card at the reception desk. The hotel will then give them a name badge for the dinner.",
    "options": [
      "venue",
      "guest",
      "theme",
      "crowd"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Linda Park will be the _____ of tonight's awards ceremony. She will welcome the visitors and introduce each speaker on stage.",
    "options": [
      "venue",
      "buffet",
      "host",
      "toast"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The clients from Seoul accepted our _____ to the product launch. They will arrive at the hotel on Thursday afternoon.",
    "options": [
      "costume",
      "laughter",
      "refreshment",
      "invitation"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The rooftop garden was too small for three hundred people. The organizers had to find a larger _____ for the annual dinner.",
    "options": [
      "venue",
      "theme",
      "toast",
      "speech"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Volunteers will _____ the entrance with lights and flowers this evening. The office will look festive when the clients arrive tomorrow.",
    "options": [
      "entertain",
      "decorate",
      "invite",
      "cheer"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "A child let go of a red _____ during the family day event. It floated high above the trees and disappeared into the sky.",
    "options": [
      "buffet",
      "toast",
      "balloon",
      "venue"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The band will play soft _____ while the guests are having dinner. It will stop when the president begins her speech.",
    "options": [
      "theme",
      "laughter",
      "costume",
      "music"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "After the dinner, many employees stayed to _____ to the live band. The party did not end until almost eleven o'clock.",
    "options": [
      "dance",
      "invite",
      "decorate",
      "gather"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The hotel will serve a _____ lunch instead of set meals. Guests can choose from more than forty hot and cold dishes.",
    "options": [
      "venue",
      "buffet",
      "speech",
      "theme"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The chairman raised his glass and proposed a _____ to the new partners. Everyone stood up and wished the joint project success.",
    "options": [
      "costume",
      "venue",
      "toast",
      "crowd"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The retiring director gave a moving _____ at the farewell dinner. Several staff members cried as she thanked her team for their support.",
    "options": [
      "buffet",
      "balloon",
      "venue",
      "speech"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The team planned a _____ party for the manager's birthday. Nobody told him, so he was shocked when he opened the door.",
    "options": [
      "surprise",
      "speech",
      "crowd",
      "refreshment"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The _____ of this year's company party is the nineteen-eighties. Employees are encouraged to wear bright and old-fashioned clothes.",
    "options": [
      "venue",
      "theme",
      "guest",
      "toast"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Every employee wore a funny _____ to the Halloween party. The prize for the most creative one was a free dinner for two.",
    "options": [
      "buffet",
      "speech",
      "costume",
      "crowd"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Coffee, tea and sandwiches will be available in the _____ area. Visitors may take a break there between the factory tours.",
    "options": [
      "theme",
      "laughter",
      "costume",
      "refreshment"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The fans began to _____ loudly when the home team scored. The noise could be heard from several streets away.",
    "options": [
      "cheer",
      "decorate",
      "invite",
      "entertain"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The room was filled with _____ during the comedian's performance. Even the serious accountants could not stop smiling.",
    "options": [
      "invitation",
      "laughter",
      "venue",
      "theme"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "A large _____ gathered outside the store before it opened. Hundreds of shoppers wanted to buy the new phone on its first day.",
    "options": [
      "costume",
      "toast",
      "crowd",
      "buffet"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "The sales director will _____ the visiting clients at a famous seafood restaurant. He hopes the dinner will help close the deal.",
    "options": [
      "decorate",
      "cheer",
      "dance",
      "entertain"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The first activity at the team-building event is a simple word _____. Each group must answer questions about the company's history.",
    "options": [
      "game",
      "speech",
      "toast",
      "venue"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "The hotel bar stays open until _____ on weekends. After that, guests must return to their rooms or leave the building.",
    "options": [
      "celebration",
      "midnight",
      "laughter",
      "refreshment"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Thousands of people watched the New Year _____ over the harbor. The colorful lights filled the sky for about fifteen minutes.",
    "options": [
      "speech",
      "buffet",
      "fireworks",
      "costume"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The bakery will deliver a large chocolate _____ at three o'clock. We will cut it after the manager blows out the candles.",
    "options": [
      "balloon",
      "toast",
      "gift",
      "cake"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "We plan to _____ several journalists to the product launch next month. Their articles could help us reach more young customers.",
    "options": [
      "invite",
      "decorate",
      "cheer",
      "celebrate"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "All participants should _____ in the lobby at seven thirty. The bus to the beach will leave promptly at eight.",
    "options": [
      "decorate",
      "gather",
      "entertain",
      "invite"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The awards dinner is a _____ event, so a dark suit and tie are required. Jeans and sneakers will not be allowed.",
    "options": [
      "casual",
      "memorable",
      "formal",
      "noisy"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Friday's barbecue is a _____ gathering after work. T-shirts, shorts and comfortable shoes are perfectly fine for everyone.",
    "options": [
      "formal",
      "memorable",
      "expensive",
      "casual"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The trip to Okinawa was the most _____ event of the year. Employees still talk happily about the beach party on the last night.",
    "options": [
      "memorable",
      "formal",
      "casual",
      "accidental"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "The team went out to dinner to _____ the completion of the project. They had finished it two weeks ahead of schedule.",
    "options": [
      "entertain",
      "celebrate",
      "decorate",
      "gather"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "celebration": {
    "pos": "n.",
    "en_def": "a special event to enjoy an important day or success",
    "cn_def": "慶祝活動；慶典"
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person who is invited to an event or someone's home",
    "cn_def": "賓客；客人"
  },
  "host": {
    "pos": "n.",
    "en_def": "a person who welcomes guests or leads an event",
    "cn_def": "主人；主持人"
  },
  "invitation": {
    "pos": "n.",
    "en_def": "a request asking someone to come to an event",
    "cn_def": "邀請；請帖"
  },
  "venue": {
    "pos": "n.",
    "en_def": "the place where an event is held",
    "cn_def": "場地；會場"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make a place look nicer by adding pretty things",
    "cn_def": "裝飾；布置"
  },
  "decoration": {
    "pos": "n.",
    "en_def": "something pretty used to make a place look special",
    "cn_def": "裝飾品；裝飾"
  },
  "balloon": {
    "pos": "n.",
    "en_def": "a small colorful rubber bag filled with air or gas",
    "cn_def": "氣球"
  },
  "music": {
    "pos": "n.",
    "en_def": "sounds made by singing or playing instruments",
    "cn_def": "音樂"
  },
  "dance": {
    "pos": "v.",
    "en_def": "to move your body to music",
    "cn_def": "跳舞"
  },
  "snack": {
    "pos": "n.",
    "en_def": "a small amount of food eaten between meals",
    "cn_def": "點心；零食"
  },
  "buffet": {
    "pos": "n.",
    "en_def": "a meal where guests serve themselves from many dishes",
    "cn_def": "自助餐"
  },
  "toast": {
    "pos": "n.",
    "en_def": "words said before people drink together to wish someone well",
    "cn_def": "敬酒；祝酒"
  },
  "speech": {
    "pos": "n.",
    "en_def": "a formal talk given to a group of people",
    "cn_def": "演講；致詞"
  },
  "surprise": {
    "pos": "n.",
    "en_def": "something that you did not expect",
    "cn_def": "驚喜；意外"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main idea or style of an event",
    "cn_def": "主題"
  },
  "costume": {
    "pos": "n.",
    "en_def": "special clothes worn to look like another person or thing",
    "cn_def": "服裝；化裝服"
  },
  "confetti": {
    "pos": "n.",
    "en_def": "small pieces of colored paper thrown at celebrations",
    "cn_def": "彩色紙屑"
  },
  "refreshment": {
    "pos": "n.",
    "en_def": "light food and drinks served at an event",
    "cn_def": "茶點；點心飲料"
  },
  "cheer": {
    "pos": "v.",
    "en_def": "to shout because you are happy or want to support someone",
    "cn_def": "歡呼；喝采"
  },
  "laughter": {
    "pos": "n.",
    "en_def": "the sound of people laughing",
    "cn_def": "笑聲"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large group of people in one place",
    "cn_def": "人群；群眾"
  },
  "entertain": {
    "pos": "v.",
    "en_def": "to give guests food, drinks, or fun activities",
    "cn_def": "招待；娛樂"
  },
  "game": {
    "pos": "n.",
    "en_def": "a fun activity with rules that people play",
    "cn_def": "遊戲"
  },
  "karaoke": {
    "pos": "n.",
    "en_def": "singing along to recorded music, often with friends",
    "cn_def": "卡拉OK"
  },
  "midnight": {
    "pos": "n.",
    "en_def": "twelve o'clock at night",
    "cn_def": "午夜；半夜十二點"
  },
  "fireworks": {
    "pos": "n.",
    "en_def": "colorful explosions of light in the sky at celebrations",
    "cn_def": "煙火"
  },
  "gift": {
    "pos": "n.",
    "en_def": "something you give to someone, a present",
    "cn_def": "禮物"
  },
  "cake": {
    "pos": "n.",
    "en_def": "a sweet baked food, often eaten at birthdays",
    "cn_def": "蛋糕"
  },
  "invite": {
    "pos": "v.",
    "en_def": "to ask someone to come to an event",
    "cn_def": "邀請"
  },
  "gather": {
    "pos": "v.",
    "en_def": "to come together in one place",
    "cn_def": "聚集；集合"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "serious and following special rules of dress or behavior",
    "cn_def": "正式的"
  },
  "casual": {
    "pos": "adj.",
    "en_def": "relaxed and not formal",
    "cn_def": "輕鬆隨意的；非正式的"
  },
  "memorable": {
    "pos": "adj.",
    "en_def": "so good or special that you remember it",
    "cn_def": "難忘的；值得紀念的"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something fun because of a special day or success",
    "cn_def": "慶祝"
  }
};

const EXTRA_GLOSSES = {};
