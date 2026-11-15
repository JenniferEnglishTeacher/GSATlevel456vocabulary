// Topic 30 Quiz Data: Birthday 生日
// Source word list: https://www.examword.com/group-topic/birthday — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T30 - Birthday 生日",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable for a special day or success",
    "sentence": "A: Our department finally reached its sales target for the year, so what are we planning to do for the team before the holiday break starts next week? B: The director wants to {{BLANK}} the success with a dinner at the Italian restaurant downtown on Friday evening, and she has already booked a private room for everyone.",
    "cn": "A：我們部門終於達成了今年的業績目標，那在下週假期開始前，我們打算為團隊做些什麼？ B：主任想在週五晚上到市中心的義大利餐廳【慶祝】這次的成功，而且她已經為大家訂好了包廂。"
  },
  {
    "word": "party",
    "pos": "n.",
    "cn_def": "派對；聚會",
    "en_def": "a social event where people meet to eat, drink and have fun",
    "sentence": "A: Do you know why the conference room on the third floor is closed this afternoon, because I wanted to use it for a quick meeting with a supplier? B: The human resources team is holding a birthday {{BLANK}} there for Mr. Chen at three o'clock, so you could book the small meeting room near the elevator instead.",
    "cn": "A：你知道為什麼三樓的會議室今天下午不開放嗎？因為我想用它和供應商開個簡短的會議。 B：人資團隊三點要在那裡為陳先生舉辦生日【派對】，所以你可以改訂電梯旁邊的小會議室。"
  },
  {
    "word": "cake",
    "pos": "n.",
    "cn_def": "蛋糕",
    "en_def": "a sweet baked food, often eaten at birthdays",
    "sentence": "A: I'm going to the bakery on Main Street during my lunch break, so is there anything special you would like me to order for Linda's birthday tomorrow? B: Could you please order a chocolate {{BLANK}} large enough for twenty people, and ask them to write her name on top, because the whole office will be celebrating together after the morning meeting?",
    "cn": "A：我午休時要去大街上的麵包店，明天琳達生日，你有什麼特別想要我訂的嗎？ B：可以請你訂一個夠二十個人吃的巧克力【蛋糕】，並請他們在上面寫她的名字嗎？因為早上開完會後全辦公室要一起慶祝。"
  },
  {
    "word": "candle",
    "pos": "n.",
    "cn_def": "蠟燭",
    "en_def": "a stick of wax that gives light when it burns",
    "sentence": "A: The hotel manager said we have to follow strict safety rules at the banquet hall, so are we still allowed to have a real fire on the birthday cake tonight? B: Yes, but only one small {{BLANK}} is permitted, and a staff member must stand nearby with a fire extinguisher until the guest of honor blows it out.",
    "cn": "A：飯店經理說我們在宴會廳必須遵守嚴格的安全規定，那今晚生日蛋糕上還可以點真的火嗎？ B：可以，但只允許一根小【蠟燭】，而且在壽星吹熄之前，必須有一位工作人員拿著滅火器站在旁邊。"
  },
  {
    "word": "gift",
    "pos": "n.",
    "cn_def": "禮物；贈品",
    "en_def": "something you give to someone without asking for payment",
    "sentence": "A: Our most important client from Japan is turning sixty next month, so what should our company send him to show our appreciation for his long business relationship with us? B: I think a high-quality tea set would be a thoughtful {{BLANK}}, and we should include a handwritten note from the president thanking him for twenty years of cooperation.",
    "cn": "A：我們最重要的日本客戶下個月滿六十歲，我們公司應該送他什麼來感謝他與我們長久的業務往來？ B：我覺得一套高品質的茶具會是很貼心的【禮物】，而且我們應該附上一張總裁的親筆短箋，感謝他二十年來的合作。"
  },
  {
    "word": "present",
    "pos": "n.",
    "cn_def": "禮物",
    "en_def": "something you give to someone on a special day",
    "sentence": "A: Everyone in the accounting department is giving fifty dollars for Peter's birthday this Friday, but have we decided what to buy him with the money yet? B: Sarah suggested a new pair of wireless headphones as a {{BLANK}}, since he often complains about the noise in the office while he is working on the monthly reports.",
    "cn": "A：會計部的每個人都為彼得這週五的生日出了五十美元，但我們決定好要用這筆錢買什麼給他了嗎？ B：莎拉建議買一副新的無線耳機當作【禮物】，因為他在做每月報表時常常抱怨辦公室很吵。"
  },
  {
    "word": "wish",
    "pos": "v.",
    "cn_def": "祝；祝福",
    "en_def": "to say that you hope someone will have something good",
    "sentence": "A: I heard that the vice president is leaving for a business trip to London on the same day as his birthday, so how can the team show that we remember it? B: We could all sign a card and give it to him at the airport, so we can {{BLANK}} him a happy birthday and a safe flight before he boards the plane.",
    "cn": "A：我聽說副總裁生日當天要出發去倫敦出差，那團隊要怎麼表示我們記得他的生日？ B：我們可以大家一起在卡片上簽名，然後在機場交給他，這樣就能在他登機前【祝】他生日快樂、一路平安。"
  },
  {
    "word": "balloon",
    "pos": "n.",
    "cn_def": "氣球",
    "en_def": "a small colorful rubber bag filled with air or gas",
    "sentence": "A: The children's birthday event at the shopping mall starts at ten o'clock on Saturday morning, so what still needs to be done to get the stage ready? B: We still need to tie a big red {{BLANK}} to every chair in the front row, and then the sound technician has to test the microphones before the families begin to arrive.",
    "cn": "A：購物中心的兒童生日活動星期六早上十點開始，那要把舞台準備好還有什麼事要做？ B：我們還需要在第一排的每張椅子上綁一顆大紅【氣球】，然後音響技師要在各個家庭開始抵達前測試麥克風。"
  },
  {
    "word": "card",
    "pos": "n.",
    "cn_def": "卡片",
    "en_def": "a folded piece of thick paper with a picture and a message",
    "sentence": "A: Ms. Wang from the marketing team is celebrating her fortieth birthday on Monday, but she is working at our branch office in Kaohsiung all week, so what can we do? B: Let's buy a large birthday {{BLANK}}, ask everyone here to write a short message in it, and send it by express mail so it arrives before the weekend.",
    "cn": "A：行銷部的王小姐星期一要過四十歲生日，但她整週都在我們高雄的分公司工作，那我們能做些什麼？ B：我們去買一張大的生日【卡片】，請這裡的每個人在上面寫一段簡短的話，然後用快遞寄出，這樣週末前就能送到。"
  },
  {
    "word": "surprise",
    "pos": "n.",
    "cn_def": "驚喜；意外",
    "en_def": "something that happens that you did not expect",
    "sentence": "A: Why did the manager ask all of us to hide in the meeting room and turn off the lights at exactly five o'clock this afternoon? B: It's Kevin's birthday today, and she wants it to be a complete {{BLANK}}, so please stay quiet and don't send him any messages until he walks through the door.",
    "cn": "A：為什麼經理要我們全部的人在今天下午五點整躲進會議室並把燈關掉？ B：今天是凱文的生日，她希望這是一個完全的【驚喜】，所以請保持安靜，而且在他走進門之前不要傳任何訊息給他。"
  },
  {
    "word": "invite",
    "pos": "v.",
    "cn_def": "邀請",
    "en_def": "to ask someone to come to an event",
    "sentence": "A: The restaurant can only hold thirty people for the company's tenth birthday dinner next month, so how are we going to choose who can attend? B: The general manager has decided to {{BLANK}} our top ten clients and their partners first, and then the remaining seats will be offered to employees who have worked here the longest.",
    "cn": "A：下個月公司十週年的晚宴，餐廳只能容納三十人，那我們要怎麼決定誰可以參加？ B：總經理決定先【邀請】我們前十大客戶及其伴侶，然後剩下的座位會提供給在這裡服務最久的員工。"
  },
  {
    "word": "guest",
    "pos": "n.",
    "cn_def": "賓客；客人",
    "en_def": "a person who is invited to an event or a home",
    "sentence": "A: Have you finished the seating plan for Mr. Lin's birthday banquet at the Grand Hotel, because the event coordinator needs it by tomorrow morning? B: Almost, but one more {{BLANK}} confirmed this afternoon that she is coming from Singapore, so I need to add another chair at the table near the stage.",
    "cn": "A：你完成林先生在格蘭大飯店生日晚宴的座位安排了嗎？因為活動協調人明天早上就要。 B：快好了，但今天下午又有一位【賓客】確認她會從新加坡過來，所以我需要在靠近舞台的那桌再加一張椅子。"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "cn_def": "裝飾；佈置",
    "en_def": "to make a place look nicer by adding pretty things",
    "sentence": "A: The office looks really plain for tomorrow's birthday lunch, and the guests from head office will arrive at noon, so what should we do tonight? B: A few of us will stay after work to {{BLANK}} the break room with paper flowers, colorful lights, and a banner, so it will look cheerful when everyone walks in.",
    "cn": "A：明天的生日午餐，辦公室看起來真的很單調，而且總公司的客人中午就會到，那我們今晚該做什麼？ B：我們幾個人下班後會留下來，用紙花、彩色燈串和一條布條【裝飾】休息室，這樣大家走進來時就會覺得很歡樂。"
  },
  {
    "word": "decoration",
    "pos": "n.",
    "cn_def": "裝飾；裝飾品",
    "en_def": "a thing used to make a place look attractive",
    "sentence": "A: The event company sent us a bill for the hotel birthday celebration, but why is the total so much higher than the price we agreed on last month? B: They charged us extra for the {{BLANK}} on every table, including the flowers and gold ribbons, which the client asked for at the last minute without telling our department.",
    "cn": "A：活動公司寄來了飯店生日慶祝會的帳單，但為什麼總金額比我們上個月談好的價格高出這麼多？ B：他們為每張桌子上的【裝飾】額外收費，包括花和金色緞帶，那是客戶在最後一刻要求的，卻沒有告訴我們部門。"
  },
  {
    "word": "celebration",
    "pos": "n.",
    "cn_def": "慶祝活動；慶典",
    "en_def": "a special event to enjoy an important day or success",
    "sentence": "A: Our company is turning fifty years old this spring, so is the board planning any special events for the employees and their families? B: Yes, there will be a big {{BLANK}} at the city park on the last Saturday of April, with live music, food stands, and games for children, and every worker can bring three guests.",
    "cn": "A：我們公司今年春天滿五十週年，董事會有計劃為員工和家屬舉辦什麼特別活動嗎？ B：有，四月最後一個星期六會在市立公園舉辦盛大的【慶祝活動】，有現場音樂、食物攤位和兒童遊戲，每位員工可以帶三位賓客。"
  },
  {
    "word": "song",
    "pos": "n.",
    "cn_def": "歌；歌曲",
    "en_def": "a short piece of music with words that you sing",
    "sentence": "A: When the waiters bring out the cake for Mr. Huang's birthday at the end of dinner tonight, what should the rest of us at the table do? B: We'll all stand up and sing the birthday {{BLANK}} together, and then the president will give a short speech to thank him for his hard work this year.",
    "cn": "A：今晚晚餐結束時，服務生端出黃先生的生日蛋糕，我們桌上其他人該做什麼？ B：我們會全部站起來一起唱生日【歌】，然後總裁會發表簡短的致詞，感謝他今年的辛勞。"
  },
  {
    "word": "age",
    "pos": "n.",
    "cn_def": "年齡",
    "en_def": "the number of years a person has lived",
    "sentence": "A: The new gym near our office is offering a free birthday membership this month, but can anyone in the company sign up for it? B: No, there is a minimum {{BLANK}} of eighteen, so the summer interns cannot join, but all full-time staff can register at the front desk with their employee cards.",
    "cn": "A：我們辦公室附近新開的健身房這個月提供免費的生日會員資格，但公司裡的任何人都可以報名嗎？ B：不行，最低【年齡】是十八歲，所以暑期實習生不能加入，但所有全職員工都可以拿員工證到櫃台登記。"
  },
  {
    "word": "special",
    "pos": "adj.",
    "cn_def": "特別的",
    "en_def": "better or more important than usual",
    "sentence": "A: Our sales director is celebrating his birthday during the trade show in Berlin, so is there anything we can arrange for him after the busy exhibition day? B: I've booked a {{BLANK}} dinner at a famous German restaurant near the hotel, and the chef will prepare a dessert with his name written on the plate.",
    "cn": "A：我們的業務總監在柏林商展期間過生日，那在忙碌的展覽日結束後，我們有什麼可以為他安排的嗎？ B：我在飯店附近一家有名的德國餐廳訂了一頓【特別的】晚餐，主廚會準備一道在盤子上寫著他名字的甜點。"
  },
  {
    "word": "happy",
    "pos": "adj.",
    "cn_def": "快樂的；高興的",
    "en_def": "feeling pleased and glad",
    "sentence": "A: How did Ms. Lee react when she saw that the whole department had stayed late to prepare a birthday surprise for her yesterday evening? B: She was so {{BLANK}} that she almost cried, and she told us it was the best birthday she has had since she joined the company five years ago.",
    "cn": "A：昨天傍晚李小姐看到整個部門留下來為她準備生日驚喜時，她有什麼反應？ B：她【高興】到差點哭出來，還告訴我們這是她五年前進公司以來最棒的一次生日。"
  },
  {
    "word": "treat",
    "pos": "n.",
    "cn_def": "請客；招待（的東西）",
    "en_def": "something nice that you buy or do for someone",
    "sentence": "A: Why is there a big box of chocolates and fresh fruit on the reception desk this morning, and who brought it into the office? B: It's Daniel's birthday, so he bought it as a {{BLANK}} for everyone, and he said we can take as much as we like during our coffee break.",
    "cn": "A：為什麼今天早上接待櫃台上有一大盒巧克力和新鮮水果，是誰帶進辦公室的？ B：今天是丹尼爾的生日，所以他買來當作給大家的【招待點心】，他說我們在喝咖啡休息時間想拿多少都可以。"
  },
  {
    "word": "family",
    "pos": "n.",
    "cn_def": "家人；家庭",
    "en_def": "a group of people who are related, such as parents and children",
    "sentence": "A: Are you going to join the team at the karaoke bar after work on Friday to celebrate Tom's promotion and his birthday at the same time? B: I'm sorry, but I can't come, because my whole {{BLANK}} is coming up from Tainan by high-speed train that evening for my grandmother's eightieth birthday dinner, and I promised to pick them up.",
    "cn": "A：你週五下班後要和團隊一起去KTV同時慶祝湯姆升職和生日嗎？ B：很抱歉我不能去，因為那天晚上我全【家】人要坐高鐵從台南上來參加我奶奶的八十歲生日晚餐，而我答應要去接他們。"
  },
  {
    "word": "friend",
    "pos": "n.",
    "cn_def": "朋友",
    "en_def": "a person you know well and like",
    "sentence": "A: Who is the woman talking with the CEO near the window, because I don't think she works in our building or for any of our partners? B: She is an old {{BLANK}} of his from university, and she flew in from Canada to surprise him at his birthday reception, so they haven't stopped talking all evening.",
    "cn": "A：在窗邊和執行長說話的那位女士是誰？因為我不覺得她在我們大樓工作，也不像是我們合作夥伴的人。 B：她是他大學時代的老【朋友】，特地從加拿大飛過來在他的生日酒會上給他驚喜，所以他們整晚都聊個不停。"
  },
  {
    "word": "photo",
    "pos": "n.",
    "cn_def": "照片",
    "en_def": "a picture taken with a camera",
    "sentence": "A: The marketing department wants to post something on the company website about yesterday's birthday celebration for our founder, so do we have any good pictures? B: Yes, the photographer took a great group {{BLANK}} of all the employees standing in front of the building, and I'll email it to you before lunch.",
    "cn": "A：行銷部想在公司網站上發布關於昨天創辦人生日慶祝會的內容，那我們有好的照片嗎？ B：有，攝影師拍了一張很棒的全體員工站在大樓前的團體【照】，我會在午餐前用電子郵件寄給你。"
  },
  {
    "word": "memory",
    "pos": "n.",
    "cn_def": "回憶；記憶",
    "en_def": "something from the past that you remember",
    "sentence": "A: You have worked at this company for over thirty years, so what is your favorite moment from all the events and parties you have attended here? B: My best {{BLANK}} is the surprise birthday dinner my team organized during my first year, when everyone secretly saved money for weeks to buy me a watch.",
    "cn": "A：你在這家公司工作超過三十年了，在這裡參加過的所有活動和派對中，你最喜歡的時刻是什麼？ B：我最美好的【回憶】是我第一年時團隊為我籌辦的驚喜生日晚餐，那時大家偷偷存了好幾週的錢買了一支手錶給我。"
  },
  {
    "word": "greeting",
    "pos": "n.",
    "cn_def": "問候；祝賀",
    "en_def": "words or actions used to say hello or send good wishes",
    "sentence": "A: Our online store wants to keep loyal customers coming back, so what new idea did the marketing team suggest at this morning's meeting? B: They plan to send every member a personal birthday {{BLANK}} by email, together with a coupon for fifteen percent off any item purchased during their birthday month.",
    "cn": "A：我們的網路商店想讓忠實顧客持續回購，那行銷團隊在今天早上的會議中提出了什麼新點子？ B：他們打算透過電子郵件寄給每位會員一封個人化的生日【祝福】，並附上一張在生日當月購買任何商品都可享八五折的優惠券。"
  },
  {
    "word": "fun",
    "pos": "adj.",
    "cn_def": "好玩的；有趣的",
    "en_def": "enjoyable and pleasant",
    "sentence": "A: How was the team-building trip to the beach that the company organized for the manager's fiftieth birthday last weekend? B: It was really {{BLANK}}, because we played volleyball, had a barbecue by the sea, and sang songs around a campfire, and even the quiet engineers from the research department joined in.",
    "cn": "A：上週末公司為經理五十歲生日舉辦的海灘團隊建立旅行怎麼樣？ B：真的很【好玩】，因為我們打了排球、在海邊烤肉，還圍著營火唱歌，連研發部那些安靜的工程師也都加入了。"
  },
  {
    "word": "party hat",
    "pos": "n.phr.",
    "cn_def": "派對帽",
    "en_def": "a colorful paper hat worn at a party",
    "sentence": "A: The photographer for the children's birthday event at the toy store wants a cute picture for the advertisement, so what should each kid wear? B: Please give every child a colorful paper {{BLANK}} and a small flag with our store logo, and ask them to stand together in front of the big window display.",
    "cn": "A：玩具店兒童生日活動的攝影師想要一張可愛的照片用在廣告上，那每個小孩應該戴什麼？ B：請給每個小孩一頂彩色紙製【派對帽】和一面印有我們商店標誌的小旗子，並請他們一起站在大型櫥窗展示前面。"
  },
  {
    "word": "celebratory",
    "pos": "adj.",
    "cn_def": "慶祝的",
    "en_def": "done to celebrate a happy event",
    "sentence": "A: The CEO just announced that we won the government contract, and it's also her birthday today, so what has the office manager arranged for this evening? B: She has ordered a {{BLANK}} dinner with champagne at the rooftop restaurant, and everyone in the project team is invited to join after work.",
    "cn": "A：執行長剛宣布我們拿到了政府合約，而今天剛好也是她的生日，那辦公室經理為今晚安排了什麼？ B：她在頂樓餐廳訂了一頓有香檳的【慶祝】晚餐，專案團隊的每個人下班後都受邀參加。"
  }
];

const MCQS = [
  {
    "q": "The hotel offers a free dessert to guests on their birthday. Many couples choose to _____ the occasion in our rooftop restaurant.",
    "options": [
      "invite",
      "wish",
      "celebrate",
      "decorate"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Our team is planning a small _____ for Ms. Kao's retirement next Friday. Everyone is asked to bring one dish to share.",
    "options": [
      "age",
      "party",
      "song",
      "candle"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The bakery near our office makes excellent desserts. We ordered a strawberry _____ with cream for the director's birthday.",
    "options": [
      "memory",
      "card",
      "guest",
      "cake"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Please be careful when lighting the birthday cake in the meeting room. One _____ fell over and almost burned the tablecloth.",
    "options": [
      "candle",
      "greeting",
      "family",
      "age"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Every new customer will receive a free _____ when they open an account this month. It includes a pen and a notebook.",
    "options": [
      "memory",
      "age",
      "gift",
      "family"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The staff collected money to buy a birthday _____ for their manager. They chose an expensive leather wallet from a famous brand.",
    "options": [
      "present",
      "greeting",
      "age",
      "balloon"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Before the meeting began, the president stood up to speak to the team. He wanted to _____ Mr. Lin a happy sixtieth birthday.",
    "options": [
      "decorate",
      "wish",
      "celebrate",
      "invite"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The store manager tied a large _____ to the entrance for the grand opening. Children loved its bright colors and asked to take one home.",
    "options": [
      "age",
      "memory",
      "greeting",
      "balloon"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The whole department signed a birthday _____ for Susan before she arrived. It was placed on her desk with a box of chocolates.",
    "options": [
      "friend",
      "card",
      "age",
      "song"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Nobody told Mark about the dinner his coworkers had planned. It was a complete _____ when he walked into the restaurant.",
    "options": [
      "photo",
      "decoration",
      "candle",
      "surprise"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The company will hold its annual dinner at the Grand Hotel in December. We would like to _____ all of our business partners to attend.",
    "options": [
      "invite",
      "wish",
      "celebrate",
      "decorate"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Each _____ at the banquet received a name card and a small box of cookies. The hotel staff also showed them to their tables.",
    "options": [
      "cake",
      "memory",
      "guest",
      "balloon"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The volunteers arrived early on Saturday morning. They used ribbons and flowers to _____ the hall before the ceremony started.",
    "options": [
      "invite",
      "celebrate",
      "wish",
      "decorate"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The hotel charges extra for flowers and table _____ at private events. Please check the price list before you confirm your booking.",
    "options": [
      "memory",
      "age",
      "decoration",
      "family"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The factory held a big _____ after it produced its one millionth car. Workers enjoyed free food, music, and a short fireworks show.",
    "options": [
      "greeting",
      "celebration",
      "candle",
      "card"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The band will play a special _____ for the couple at the anniversary dinner. Guests are welcome to sing along with the music.",
    "options": [
      "song",
      "photo",
      "cake",
      "age"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Applicants for the driver position must be at least twenty-one years old. Please write your _____ and address clearly on the form.",
    "options": [
      "candle",
      "song",
      "gift",
      "age"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Please take _____ care when you carry the glass cake stand. It is very expensive and breaks easily.",
    "options": [
      "celebratory",
      "special",
      "happy",
      "fun"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The customer service team works hard to keep our clients _____. They answer every complaint within twenty-four hours.",
    "options": [
      "celebratory",
      "fun",
      "happy",
      "special"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "To thank the staff for working overtime, the manager bought pizza for everyone. It was a nice _____ after a long and busy week.",
    "options": [
      "treat",
      "guest",
      "age",
      "card"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The company picnic is open to all employees and their _____ members. Children under ten can join the games for free.",
    "options": [
      "guest",
      "song",
      "family",
      "gift"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Mr. Wu met his business partner through a _____ from college. They have now worked together on several projects in Asia.",
    "options": [
      "friend",
      "cake",
      "candle",
      "age"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Please upload a recent _____ of yourself to the company website. It will appear next to your name in the staff directory.",
    "options": [
      "treat",
      "celebration",
      "song",
      "photo"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Visiting the factory in Germany was a wonderful _____ for the new interns. Many of them still talk about the trip today.",
    "options": [
      "candle",
      "memory",
      "card",
      "age"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The receptionist always gives visitors a warm _____ when they enter the lobby. She also offers them a cup of tea while they wait.",
    "options": [
      "cake",
      "age",
      "balloon",
      "greeting"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The new puzzle game was _____ to play, so the staff enjoyed it during lunch. The company later bought ten more copies.",
    "options": [
      "celebratory",
      "fun",
      "happy",
      "special"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "At the children's event, each kid wore a paper _____ on their head. The staff also handed out balloons and small toys.",
    "options": [
      "age",
      "greeting",
      "party hat",
      "memory"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The team raised their glasses for a _____ toast after winning the big contract. Everyone cheered loudly for the sales manager.",
    "options": [
      "celebratory",
      "special",
      "happy",
      "fun"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The two companies signed the contract last night after months of talks. They will _____ the agreement with a dinner for both teams.",
    "options": [
      "invite",
      "decorate",
      "wish",
      "celebrate"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "The airline gave each passenger a small _____ to apologize for the long delay. It included a coupon for a free meal.",
    "options": [
      "age",
      "gift",
      "family",
      "song"
    ],
    "answer": 1,
    "vocabIndex": 4
  }
];

const LOOKUP = {
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable for a special day or success",
    "cn_def": "慶祝"
  },
  "party": {
    "pos": "n.",
    "en_def": "a social event where people meet to eat, drink and have fun",
    "cn_def": "派對；聚會"
  },
  "cake": {
    "pos": "n.",
    "en_def": "a sweet baked food, often eaten at birthdays",
    "cn_def": "蛋糕"
  },
  "candle": {
    "pos": "n.",
    "en_def": "a stick of wax that gives light when it burns",
    "cn_def": "蠟燭"
  },
  "gift": {
    "pos": "n.",
    "en_def": "something you give to someone without asking for payment",
    "cn_def": "禮物；贈品"
  },
  "present": {
    "pos": "n.",
    "en_def": "something you give to someone on a special day",
    "cn_def": "禮物"
  },
  "wish": {
    "pos": "v.",
    "en_def": "to say that you hope someone will have something good",
    "cn_def": "祝；祝福"
  },
  "balloon": {
    "pos": "n.",
    "en_def": "a small colorful rubber bag filled with air or gas",
    "cn_def": "氣球"
  },
  "card": {
    "pos": "n.",
    "en_def": "a folded piece of thick paper with a picture and a message",
    "cn_def": "卡片"
  },
  "surprise": {
    "pos": "n.",
    "en_def": "something that happens that you did not expect",
    "cn_def": "驚喜；意外"
  },
  "invite": {
    "pos": "v.",
    "en_def": "to ask someone to come to an event",
    "cn_def": "邀請"
  },
  "guest": {
    "pos": "n.",
    "en_def": "a person who is invited to an event or a home",
    "cn_def": "賓客；客人"
  },
  "decorate": {
    "pos": "v.",
    "en_def": "to make a place look nicer by adding pretty things",
    "cn_def": "裝飾；佈置"
  },
  "decoration": {
    "pos": "n.",
    "en_def": "a thing used to make a place look attractive",
    "cn_def": "裝飾；裝飾品"
  },
  "celebration": {
    "pos": "n.",
    "en_def": "a special event to enjoy an important day or success",
    "cn_def": "慶祝活動；慶典"
  },
  "song": {
    "pos": "n.",
    "en_def": "a short piece of music with words that you sing",
    "cn_def": "歌；歌曲"
  },
  "age": {
    "pos": "n.",
    "en_def": "the number of years a person has lived",
    "cn_def": "年齡"
  },
  "special": {
    "pos": "adj.",
    "en_def": "better or more important than usual",
    "cn_def": "特別的"
  },
  "happy": {
    "pos": "adj.",
    "en_def": "feeling pleased and glad",
    "cn_def": "快樂的；高興的"
  },
  "treat": {
    "pos": "n.",
    "en_def": "something nice that you buy or do for someone",
    "cn_def": "請客；招待（的東西）"
  },
  "family": {
    "pos": "n.",
    "en_def": "a group of people who are related, such as parents and children",
    "cn_def": "家人；家庭"
  },
  "friend": {
    "pos": "n.",
    "en_def": "a person you know well and like",
    "cn_def": "朋友"
  },
  "photo": {
    "pos": "n.",
    "en_def": "a picture taken with a camera",
    "cn_def": "照片"
  },
  "memory": {
    "pos": "n.",
    "en_def": "something from the past that you remember",
    "cn_def": "回憶；記憶"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "words or actions used to say hello or send good wishes",
    "cn_def": "問候；祝賀"
  },
  "fun": {
    "pos": "adj.",
    "en_def": "enjoyable and pleasant",
    "cn_def": "好玩的；有趣的"
  },
  "party hat": {
    "pos": "n.phr.",
    "en_def": "a colorful paper hat worn at a party",
    "cn_def": "派對帽"
  },
  "celebratory": {
    "pos": "adj.",
    "en_def": "done to celebrate a happy event",
    "cn_def": "慶祝的"
  }
};

const EXTRA_GLOSSES = {};
