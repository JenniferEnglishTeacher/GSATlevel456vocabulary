// Topic 275 Quiz Data: Performance 表演
// Source word list: https://www.examword.com/group-topic/performance — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T275 - Performance 表演",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "the people who watch or listen to a show or talk",
    "sentence": "A: How many people came to the company's annual charity concert at the city hall last Friday, and did the sponsors seem happy with the event? B: The {{BLANK}} was much larger than we expected, with nearly eight hundred guests, so the sponsors already asked us to plan an even bigger concert next year.",
    "cn": "A：上週五在市政廳舉辦的公司年度慈善音樂會來了多少人？贊助商看起來對活動滿意嗎？ B：【觀眾】比我們預期的多很多，將近八百位來賓，所以贊助商已經請我們明年規劃一場更大的音樂會。"
  },
  {
    "word": "stage",
    "pos": "n.",
    "cn_def": "舞台",
    "en_def": "the raised area where people perform",
    "sentence": "A: Why did the hotel staff arrive so early this morning before the awards ceremony for our top salespeople began? B: They needed to set up the {{BLANK}} in the main ballroom, test the microphones, and put flowers along the front so the winners would look great in the photos.",
    "cn": "A：為什麼飯店員工今天早上在我們頂尖業務員頒獎典禮開始前這麼早就到了？ B：他們需要在主宴會廳搭好【舞台】、測試麥克風，並在前方擺放花卉，讓得獎者在照片中看起來很棒。"
  },
  {
    "word": "actor",
    "pos": "n.",
    "cn_def": "演員；男演員",
    "en_def": "a person, especially a man, who acts in plays, films or TV shows",
    "sentence": "A: Who is the famous man in the new television commercial for our coffee brand, and how much did the marketing team pay him? B: He is a well-known {{BLANK}} from a popular drama series, and although his fee was high, our sales went up by twenty percent in the first month.",
    "cn": "A：我們咖啡品牌新電視廣告中的那位名人是誰？行銷團隊付了他多少錢？ B：他是一部熱門連續劇裡的知名【男演員】，雖然他的酬勞很高，但我們的銷售額在第一個月就成長了百分之二十。"
  },
  {
    "word": "actress",
    "pos": "n.",
    "cn_def": "女演員",
    "en_def": "a woman who acts in plays, films or TV shows",
    "sentence": "A: Have you heard who will play the main female role in the musical that our company is sponsoring at the National Theater next spring? B: Yes, the producers hired a young {{BLANK}} who won an award last year, and tickets for the opening weekend have already sold out online.",
    "cn": "A：你有聽說明年春天我們公司在國家劇院贊助的音樂劇中，誰會飾演女主角嗎？ B：有，製作人請了一位去年得過獎的年輕【女演員】，開幕週末的票已經在網路上賣光了。"
  },
  {
    "word": "performer",
    "pos": "n.",
    "cn_def": "表演者",
    "en_def": "a person who entertains people by singing, dancing or acting",
    "sentence": "A: Why is the event planner calling so many music agencies this week instead of finishing the menu for the year-end party? B: The singer we booked became sick yesterday, so she has to find another {{BLANK}} who is free on Saturday night and can entertain about three hundred employees.",
    "cn": "A：活動策劃人這週為什麼一直打電話給這麼多音樂經紀公司，而不是把尾牙的菜單完成？ B：我們預約的歌手昨天生病了，所以她必須找另一位週六晚上有空、能為大約三百名員工表演的【表演者】。"
  },
  {
    "word": "rehearse",
    "pos": "v.",
    "cn_def": "排練；預演",
    "en_def": "to practice a show or speech before the real one",
    "sentence": "A: Are you ready for your speech at the shareholders' meeting tomorrow morning, or do you still feel worried about answering their questions? B: I plan to {{BLANK}} it three more times in the empty meeting room tonight, and my manager will listen and give me some advice on my timing.",
    "cn": "A：你準備好明天早上在股東大會上的演講了嗎？還是你仍然擔心回答他們的問題？ B：我打算今晚在空的會議室再【排練】三次，我的經理會聽並給我一些關於時間掌控的建議。"
  },
  {
    "word": "rehearsal",
    "pos": "n.",
    "cn_def": "彩排；排練",
    "en_def": "a practice of a show before the real performance",
    "sentence": "A: Why can't the sales team use the auditorium on Thursday afternoon for their training session as they usually do every month? B: The dance group from our Taichung branch needs it for a final {{BLANK}}, because they are performing at the company's anniversary celebration the following evening.",
    "cn": "A：為什麼業務團隊週四下午不能像每個月一樣使用禮堂進行訓練課程？ B：我們台中分公司的舞蹈團需要用它來做最後一次【彩排】，因為他們隔天晚上要在公司週年慶上表演。"
  },
  {
    "word": "applause",
    "pos": "n.",
    "cn_def": "掌聲",
    "en_def": "the sound of people clapping to show they liked something",
    "sentence": "A: How did the guests react when the new chief executive finished her speech about the company's plans for the next five years? B: There was loud {{BLANK}} for almost a full minute, and many employees said afterward that they felt excited and hopeful about the future.",
    "cn": "A：新任執行長講完公司未來五年計畫的演說時，來賓有什麼反應？ B：現場響起了將近一整分鐘的熱烈【掌聲】，許多員工事後表示他們對未來感到興奮且充滿希望。"
  },
  {
    "word": "talent",
    "pos": "n.",
    "cn_def": "天分；才能",
    "en_def": "a natural ability to do something well",
    "sentence": "A: Why did the human resources department decide to hold a singing contest for all employees at the end of this year? B: They wanted to discover hidden {{BLANK}} among the staff and help people from different departments get to know each other better in a relaxed and friendly way.",
    "cn": "A：人資部門為什麼決定在今年年底為全體員工舉辦歌唱比賽？ B：他們想發掘員工當中隱藏的【才能】，並以輕鬆友善的方式幫助不同部門的同事更認識彼此。"
  },
  {
    "word": "skill",
    "pos": "n.",
    "cn_def": "技能；技巧",
    "en_def": "an ability to do something well that you learn and practice",
    "sentence": "A: What should I do before I give my first product demonstration to a large group of customers at the trade show next month? B: Join the public speaking workshop on Wednesday evenings, because it will help you build the {{BLANK}} you need to explain complex products clearly and calmly.",
    "cn": "A：下個月在商展上第一次為一大群客戶做產品示範前，我該做些什麼？ B：參加週三晚上的公開演說工作坊，因為它能幫你培養清楚而冷靜地解說複雜產品所需的【技能】。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "自信；信心",
    "en_def": "the feeling that you can do something well",
    "sentence": "A: How has the new sales assistant changed since she started taking acting classes on weekends? B: She speaks with much more {{BLANK}} now, so when clients ask difficult questions during meetings, she looks them in the eye and answers clearly instead of getting quiet and shy.",
    "cn": "A：新來的業務助理開始週末上表演課之後，有什麼改變？ B：她現在說話更有【自信】了，所以客戶在會議中問困難的問題時，她會直視對方並清楚回答，而不是變得安靜害羞。"
  },
  {
    "word": "nervous",
    "pos": "adj.",
    "cn_def": "緊張的",
    "en_def": "worried and a little afraid",
    "sentence": "A: Why did Kevin keep walking around the hallway before his presentation to the board of directors this afternoon? B: He felt very {{BLANK}} because it was his first time speaking in front of senior managers, so he was trying to calm down and remember his main points.",
    "cn": "A：Kevin 今天下午向董事會簡報前，為什麼一直在走廊走來走去？ B：他覺得非常【緊張】，因為這是他第一次在高階主管面前發言，所以他試著冷靜下來並記住他的重點。"
  },
  {
    "word": "expression",
    "pos": "n.",
    "cn_def": "表情；表達",
    "en_def": "the look on someone's face that shows a feeling",
    "sentence": "A: Why does the director of the training video keep asking the actors to repeat the same short part with the angry customer? B: She thinks the facial {{BLANK}} of the salesperson is not friendly enough, and she wants viewers to see how staff should stay calm and polite.",
    "cn": "A：訓練影片的導演為什麼一直要演員重拍與生氣顧客的同一小段？ B：她認為銷售員臉上的【表情】不夠友善，她希望觀眾看到員工應該如何保持冷靜與禮貌。"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "cn_def": "手勢；姿態",
    "en_def": "a movement of the hand or body that shows meaning",
    "sentence": "A: What did the communication coach tell you after she watched the video of your sales presentation last Tuesday? B: She said I should use a simple hand {{BLANK}} when I mention each important number, because it helps listeners follow my points and makes me look more relaxed.",
    "cn": "A：溝通教練看完你上週二業務簡報的影片後跟你說了什麼？ B：她說我提到每個重要數字時應該用一個簡單的【手勢】，因為這能幫助聽眾跟上我的重點，也讓我看起來更放鬆。"
  },
  {
    "word": "voice",
    "pos": "n.",
    "cn_def": "聲音；嗓音",
    "en_def": "the sound you make when you speak or sing",
    "sentence": "A: Why did the radio station choose Linda to read the advertisements for the new shopping mall that opens downtown next month? B: She has a warm and clear {{BLANK}} that listeners trust, and the mall's owners believe it will make more families want to visit on opening day.",
    "cn": "A：電台為什麼選 Linda 來朗讀下個月在市中心開幕的新購物中心的廣告？ B：她有聽眾信賴的溫暖清晰的【嗓音】，購物中心的老闆相信這能讓更多家庭想在開幕當天前來。"
  },
  {
    "word": "volume",
    "pos": "n.",
    "cn_def": "音量",
    "en_def": "how loud a sound is",
    "sentence": "A: Could you ask the technician to check the speakers before the product launch begins, because some guests in the back row complained earlier? B: Sure, I'll tell him to turn up the {{BLANK}} a little and test the microphone again so everyone in the hall can hear the presentation clearly.",
    "cn": "A：你可以請技術人員在產品發表會開始前檢查一下喇叭嗎？因為稍早後排有些來賓抱怨。 B：當然，我會告訴他把【音量】調高一點，再測試一次麥克風，讓大廳裡每個人都能清楚聽到簡報。"
  },
  {
    "word": "spotlight",
    "pos": "n.",
    "cn_def": "聚光燈；焦點",
    "en_def": "a strong light that shines on one person or place on a stage",
    "sentence": "A: Why did the lighting team come back to the theater late last night after everyone else had already gone home? B: The {{BLANK}} above the center of the stage was not working, and they had to replace it before the opening performance of the company's musical this evening.",
    "cn": "A：燈光組為什麼在昨晚大家都回家後又回到劇院？ B：舞台正中央上方的【聚光燈】壞了，他們必須在今晚公司音樂劇首演前把它換好。"
  },
  {
    "word": "costume",
    "pos": "n.",
    "cn_def": "戲服；服裝",
    "en_def": "special clothes worn by actors or for a special event",
    "sentence": "A: Why is the marketing department spending so much money on clothes for the opening event of our new theme restaurant? B: Every server will wear a special {{BLANK}} from the nineteenth century, because the owners want guests to feel as if they have traveled back in time.",
    "cn": "A：行銷部為什麼在我們新主題餐廳的開幕活動上花這麼多錢在服裝上？ B：每位服務生都會穿上十九世紀的特殊【戲服】，因為老闆希望客人感覺彷彿穿越回到過去。"
  },
  {
    "word": "script",
    "pos": "n.",
    "cn_def": "劇本；講稿",
    "en_def": "the written words of a play, film or speech",
    "sentence": "A: Has the writer finished the words for the new training video about customer service that we plan to film next Monday? B: Yes, she sent the final {{BLANK}} this morning, so the actors can read it over the weekend and learn their lines before we start shooting.",
    "cn": "A：編劇完成了我們預計下週一拍攝的新客服訓練影片的台詞了嗎？ B：完成了，她今天早上寄來了最終版【劇本】，所以演員可以在週末閱讀並在開拍前背好台詞。"
  },
  {
    "word": "scene",
    "pos": "n.",
    "cn_def": "場景；一幕",
    "en_def": "one part of a play or film that happens in one place",
    "sentence": "A: Why did the film crew stay at the shopping mall until midnight after the stores had closed yesterday? B: They were shooting a {{BLANK}} for a bank commercial, and the director wanted empty hallways and quiet shops so the actors could walk around without crowds.",
    "cn": "A：拍攝團隊昨天為什麼在商店打烊後還待在購物中心到半夜？ B：他們在為一支銀行廣告拍攝一個【場景】，導演想要空蕩的走廊和安靜的商店，讓演員能在沒有人群的情況下走動。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person in a story, play or film",
    "sentence": "A: Which role did your sister get in the community theater's new comedy that opens at the cultural center next weekend? B: She plays the main {{BLANK}}, a busy hotel manager who keeps making funny mistakes, and she has been practicing her lines every evening after work.",
    "cn": "A：你妹妹在社區劇團下週末於文化中心首演的新喜劇中拿到哪個角色？ B：她演主要【角色】，一位不斷犯下好笑錯誤的忙碌飯店經理，她每天下班後都在練習台詞。"
  },
  {
    "word": "emotion",
    "pos": "n.",
    "cn_def": "情感；情緒",
    "en_def": "a strong feeling such as joy, anger or sadness",
    "sentence": "A: Why did so many people in the audience cry at the end of the play about the old factory workers last night? B: The actors showed real {{BLANK}} when they said goodbye to each other, and many guests said the story reminded them of their own parents and grandparents.",
    "cn": "A：昨晚那齣關於老工廠工人的戲結束時，為什麼那麼多觀眾哭了？ B：演員們互相道別時流露出真實的【情感】，許多來賓說這個故事讓他們想起了自己的父母和祖父母。"
  },
  {
    "word": "rhythm",
    "pos": "n.",
    "cn_def": "節奏；韻律",
    "en_def": "a regular pattern of sounds or beats",
    "sentence": "A: Why did the dance teacher ask the new members of our company's dance club to clap their hands before they started moving? B: She wanted them to feel the {{BLANK}} of the music first, because most beginners move too fast and lose the beat when they are nervous.",
    "cn": "A：舞蹈老師為什麼在開始動作前請公司舞蹈社的新成員拍手？ B：她想讓他們先感受音樂的【節奏】，因為大多數初學者緊張時動作太快而跟不上拍子。"
  },
  {
    "word": "harmony",
    "pos": "n.",
    "cn_def": "和聲；和諧",
    "en_def": "a pleasant mix of different musical notes sung or played together",
    "sentence": "A: What did the judges say about our office choir after the singing competition at the convention center on Saturday? B: They praised our beautiful {{BLANK}}, because the high and low voices blended together perfectly, and they gave us second place out of fifteen teams from different companies.",
    "cn": "A：週六在會議中心的歌唱比賽後，評審對我們公司合唱團說了什麼？ B：他們稱讚我們美妙的【和聲】，因為高音和低音完美融合，並在來自不同公司的十五支隊伍中給了我們第二名。"
  },
  {
    "word": "improvise",
    "pos": "v.",
    "cn_def": "即興發揮；臨時湊合",
    "en_def": "to do or say something without preparing it first",
    "sentence": "A: What happened when the projector stopped working in the middle of your talk at the marketing conference yesterday? B: I had to {{BLANK}} for about ten minutes, so I told a few stories about our customers and asked the listeners questions until the technician fixed the problem.",
    "cn": "A：昨天你在行銷研討會演講到一半時投影機故障，發生了什麼事？ B：我必須【即興發揮】大約十分鐘，所以我講了幾個客戶的故事並問聽眾問題，直到技術人員修好問題。"
  },
  {
    "word": "dramatic",
    "pos": "adj.",
    "cn_def": "戲劇性的；劇烈的",
    "en_def": "sudden and very large; exciting",
    "sentence": "A: Why are the stock prices of the concert ticket company changing so much this week, according to the financial news? B: There was a {{BLANK}} increase in sales after a famous band announced a world tour, so investors suddenly became very interested in buying the company's shares.",
    "cn": "A：根據財經新聞，這家演唱會售票公司的股價這週為什麼變動這麼大？ B：一個知名樂團宣布世界巡演後，銷售額出現了【戲劇性的】成長，所以投資人突然對購買公司股票非常感興趣。"
  },
  {
    "word": "energetic",
    "pos": "adj.",
    "cn_def": "精力充沛的；充滿活力的",
    "en_def": "full of energy and very active",
    "sentence": "A: Why did the event company choose that young host for our product launch instead of the experienced one we used last year? B: She is very {{BLANK}} and funny on stage, and our manager believes she can keep the guests excited and awake during the long afternoon program.",
    "cn": "A：活動公司為什麼為我們的產品發表會選了那位年輕主持人，而不是我們去年用的資深主持人？ B：她在台上非常【充滿活力】又風趣，我們經理相信她能在漫長的下午節目中讓來賓保持興奮和清醒。"
  },
  {
    "word": "outstanding",
    "pos": "adj.",
    "cn_def": "傑出的；出色的",
    "en_def": "extremely good",
    "sentence": "A: Why did the general manager send flowers and a thank-you card to the customer service team this morning? B: They gave {{BLANK}} service during the busy holiday season, answering hundreds of calls each day, and customer satisfaction scores reached the highest level in the company's history.",
    "cn": "A：總經理今天早上為什麼送花和感謝卡給客服團隊？ B：他們在忙碌的假期旺季提供了【傑出的】服務，每天接聽數百通電話，顧客滿意度分數達到公司史上最高。"
  },
  {
    "word": "critic",
    "pos": "n.",
    "cn_def": "評論家",
    "en_def": "a person whose job is to judge and write about films, plays, food, etc.",
    "sentence": "A: Why is the theater manager so happy this morning even though ticket sales were slow during the first week? B: A famous {{BLANK}} from the city's biggest newspaper wrote that the show is the best musical of the year, so many people have started booking seats online.",
    "cn": "A：劇院經理今天早上為什麼這麼開心，即使第一週的票房很慢？ B：本市最大報社的一位知名【評論家】寫說這齣戲是年度最佳音樂劇，所以很多人開始上網訂位了。"
  },
  {
    "word": "review",
    "pos": "n.",
    "cn_def": "評論；評價",
    "en_def": "an article that gives an opinion about a show, book, product, etc.",
    "sentence": "A: Have you read what the newspaper said about the opening night of the new musical at the downtown theater on Friday? B: Yes, it gave the show an excellent {{BLANK}}, praising the singers and the stage design, so I think tickets for next month will sell out quickly.",
    "cn": "A：你看過報紙對週五市中心劇院那齣新音樂劇首演夜的報導了嗎？ B：看過了，它給了這齣戲極佳的【評論】，稱讚歌手和舞台設計，所以我認為下個月的票會很快賣光。"
  },
  {
    "word": "encore",
    "pos": "n.",
    "cn_def": "安可；加演",
    "en_def": "an extra song or act at the end of a show because the audience asks for it",
    "sentence": "A: Why did the jazz concert at the hotel lounge finish so much later than the schedule printed in the program? B: The guests kept clapping and shouting for an {{BLANK}}, so the band came back and played two more songs before the manager finally turned on the lights.",
    "cn": "A：飯店酒廊的爵士音樂會為什麼比節目單上印的時間晚這麼多才結束？ B：來賓一直鼓掌並高喊【安可】，所以樂團回來又多演奏了兩首歌，經理最後才把燈打開。"
  },
  {
    "word": "premiere",
    "pos": "n.",
    "cn_def": "首映；首演",
    "en_def": "the first public showing of a film or play",
    "sentence": "A: Why is our public relations team so busy preparing invitations, red carpets, and photographers this week? B: Our company sponsored a new film, and its {{BLANK}} will take place at the city's largest cinema on Saturday night, with many famous actors and important business partners attending.",
    "cn": "A：我們的公關團隊這週為什麼忙著準備邀請函、紅毯和攝影師？ B：我們公司贊助了一部新電影，它的【首映】將於週六晚上在本市最大的電影院舉行，許多知名演員和重要商業夥伴都會出席。"
  },
  {
    "word": "choreography",
    "pos": "n.",
    "cn_def": "編舞；舞蹈設計",
    "en_def": "the planned steps and movements of a dance",
    "sentence": "A: Who designed the dance moves for the opening show at our company's annual sales conference in Kaohsiung next month? B: We hired a professional dancer to create the {{BLANK}}, and she will teach it to twenty employees during three evening sessions before the big event.",
    "cn": "A：誰設計了下個月我們公司在高雄年度業務大會開場表演的舞步？ B：我們請了一位專業舞者來設計【編舞】，她會在大型活動前用三個晚上的課程教給二十位員工。"
  },
  {
    "word": "presentation",
    "pos": "n.",
    "cn_def": "簡報；發表",
    "en_def": "a talk that gives information to a group of people",
    "sentence": "A: What time will you meet the clients from Singapore tomorrow, and have you prepared everything they asked for? B: I will give a short {{BLANK}} about our new software at ten o'clock in the main meeting room, and after that we will discuss prices over lunch.",
    "cn": "A：你明天幾點和新加坡的客戶見面？他們要求的東西你都準備好了嗎？ B：我十點會在主會議室針對我們的新軟體做一個簡短的【簡報】，之後我們會在午餐時討論價格。"
  },
  {
    "word": "practice",
    "pos": "n.",
    "cn_def": "練習",
    "en_def": "doing something again and again to get better at it",
    "sentence": "A: How did the new pianist at the hotel restaurant become so good after only working here for three months? B: She does at least two hours of {{BLANK}} every morning before her shift starts, and she also takes lessons from a famous teacher on her days off.",
    "cn": "A：飯店餐廳的新鋼琴師只在這裡工作三個月，怎麼就變得這麼厲害？ B：她每天早上上班前至少【練習】兩個小時，休假日也會跟一位知名老師上課。"
  }
];

const MCQS = [
  {
    "q": "The comedian told jokes for an hour at the sales banquet. The whole _____ laughed loudly, even the serious finance director.",
    "options": [
      "audience",
      "script",
      "costume",
      "spotlight"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The speakers waited behind the curtain before the ceremony began. When their names were called, they walked onto the _____ to receive their awards.",
    "options": [
      "audience",
      "stage",
      "rhythm",
      "critic"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The film company is looking for an experienced _____ to play a doctor in its new drama. Auditions will be held next Monday at the studio.",
    "options": [
      "volume",
      "applause",
      "actor",
      "premiere"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Every Friday evening, a different _____ plays the piano in the hotel lobby. Guests often stop to listen and enjoy the music.",
    "options": [
      "script",
      "costume",
      "review",
      "performer"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The cast will _____ the final act twice tomorrow afternoon. The director wants every movement to be perfect before opening night.",
    "options": [
      "rehearse",
      "borrow",
      "apologize",
      "arrive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "All performers must arrive at the theater by six o'clock for the dress _____. Please bring your costumes and makeup with you.",
    "options": [
      "encore",
      "rehearsal",
      "critic",
      "audience"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "When the young violinist finished her solo, the hall filled with warm _____. She smiled and bowed to the audience three times.",
    "options": [
      "script",
      "costume",
      "applause",
      "rehearsal"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Each department will choose one employee with a special _____ for singing or dancing. The winners will perform at the year-end party.",
    "options": [
      "volume",
      "costume",
      "critic",
      "talent"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Negotiation is an important _____ for anyone who works in sales. Our company offers a free two-day workshop on it every spring.",
    "options": [
      "skill",
      "applause",
      "spotlight",
      "premiere"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "After months of practice, the new trainer now speaks with great _____. She no longer reads from her notes during workshops.",
    "options": [
      "costume",
      "confidence",
      "critic",
      "premiere"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Many job applicants feel _____ before an interview with senior managers. Taking a few deep breaths can help them stay calm.",
    "options": [
      "dramatic",
      "outstanding",
      "nervous",
      "annual"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The photographer asked the CEO to relax his serious facial _____. He wanted a friendly picture for the company's annual report.",
    "options": [
      "volume",
      "script",
      "encore",
      "expression"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Shaking hands firmly is a common _____ of welcome in business meetings. In some cultures, however, people bow instead.",
    "options": [
      "gesture",
      "volume",
      "spotlight",
      "critic"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The call center hires staff with a clear and friendly _____. Customers feel more comfortable when the person on the phone sounds kind.",
    "options": [
      "costume",
      "voice",
      "stage",
      "encore"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Please turn down the _____ of your music while working in the open office. Some colleagues need quiet to focus on their reports.",
    "options": [
      "script",
      "critic",
      "volume",
      "stage"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The new manager does not enjoy being in the _____ at company events. She prefers to let her team receive the attention.",
    "options": [
      "script",
      "volume",
      "rhythm",
      "spotlight"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Employees are invited to wear a _____ to the Halloween party next Friday. The best outfit will win a dinner for two.",
    "options": [
      "costume",
      "script",
      "critic",
      "rhythm"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The speechwriter sent the final _____ to the president this morning. He will read it carefully before the press conference tomorrow.",
    "options": [
      "costume",
      "script",
      "applause",
      "spotlight"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "In the training video, each employee plays a different _____. One acts as an angry customer, and another plays a helpful clerk.",
    "options": [
      "volume",
      "script",
      "character",
      "applause"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The aerobics instructor chose songs with a strong, steady _____. It helps everyone in the class move together at the same speed.",
    "options": [
      "script",
      "critic",
      "costume",
      "rhythm"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "When the guest speaker's flight was delayed, the host had to _____ for twenty minutes. Luckily, she is very good at thinking on her feet.",
    "options": [
      "improvise",
      "borrow",
      "retire",
      "invest"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The new advertising campaign led to a _____ increase in online orders. Sales doubled in just two weeks.",
    "options": [
      "nervous",
      "dramatic",
      "energetic",
      "patient"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The fitness center is looking for _____ instructors who can lead early morning classes. Applicants should enjoy working with people of all ages.",
    "options": [
      "nervous",
      "dramatic",
      "energetic",
      "guilty"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The hotel received an award for its _____ customer service this year. Guests praised the staff for being friendly and helpful.",
    "options": [
      "nervous",
      "dramatic",
      "empty",
      "outstanding"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "A well-known restaurant _____ visited our new branch last week. Her article in the Sunday newspaper praised our seafood dishes.",
    "options": [
      "critic",
      "costume",
      "rhythm",
      "spotlight"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The new laptop received a positive _____ in a popular technology magazine. As a result, online orders rose sharply over the weekend.",
    "options": [
      "rehearsal",
      "review",
      "costume",
      "encore"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The fans clapped so loudly after the last song that the singer came back for an _____. She performed her most famous hit once more.",
    "options": [
      "actor",
      "expression",
      "encore",
      "interview"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "Several famous actors will attend the film's _____ in Taipei next Saturday. Reporters and photographers are expected to fill the red carpet.",
    "options": [
      "rhythm",
      "volume",
      "critic",
      "premiere"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Each team leader will give a short _____ about last quarter's results. Please prepare no more than ten slides.",
    "options": [
      "presentation",
      "applause",
      "costume",
      "spotlight"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Becoming a confident public speaker takes a lot of _____. Our trainers recommend speaking in front of a mirror every day.",
    "options": [
      "applause",
      "practice",
      "volume",
      "spotlight"
    ],
    "answer": 1,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to a show or talk",
    "cn_def": "觀眾；聽眾"
  },
  "stage": {
    "pos": "n.",
    "en_def": "the raised area where people perform",
    "cn_def": "舞台"
  },
  "actor": {
    "pos": "n.",
    "en_def": "a person, especially a man, who acts in plays, films or TV shows",
    "cn_def": "演員；男演員"
  },
  "actress": {
    "pos": "n.",
    "en_def": "a woman who acts in plays, films or TV shows",
    "cn_def": "女演員"
  },
  "performer": {
    "pos": "n.",
    "en_def": "a person who entertains people by singing, dancing or acting",
    "cn_def": "表演者"
  },
  "rehearse": {
    "pos": "v.",
    "en_def": "to practice a show or speech before the real one",
    "cn_def": "排練；預演"
  },
  "rehearsal": {
    "pos": "n.",
    "en_def": "a practice of a show before the real performance",
    "cn_def": "彩排；排練"
  },
  "applause": {
    "pos": "n.",
    "en_def": "the sound of people clapping to show they liked something",
    "cn_def": "掌聲"
  },
  "talent": {
    "pos": "n.",
    "en_def": "a natural ability to do something well",
    "cn_def": "天分；才能"
  },
  "skill": {
    "pos": "n.",
    "en_def": "an ability to do something well that you learn and practice",
    "cn_def": "技能；技巧"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can do something well",
    "cn_def": "自信；信心"
  },
  "nervous": {
    "pos": "adj.",
    "en_def": "worried and a little afraid",
    "cn_def": "緊張的"
  },
  "expression": {
    "pos": "n.",
    "en_def": "the look on someone's face that shows a feeling",
    "cn_def": "表情；表達"
  },
  "gesture": {
    "pos": "n.",
    "en_def": "a movement of the hand or body that shows meaning",
    "cn_def": "手勢；姿態"
  },
  "voice": {
    "pos": "n.",
    "en_def": "the sound you make when you speak or sing",
    "cn_def": "聲音；嗓音"
  },
  "volume": {
    "pos": "n.",
    "en_def": "how loud a sound is",
    "cn_def": "音量"
  },
  "spotlight": {
    "pos": "n.",
    "en_def": "a strong light that shines on one person or place on a stage",
    "cn_def": "聚光燈；焦點"
  },
  "costume": {
    "pos": "n.",
    "en_def": "special clothes worn by actors or for a special event",
    "cn_def": "戲服；服裝"
  },
  "script": {
    "pos": "n.",
    "en_def": "the written words of a play, film or speech",
    "cn_def": "劇本；講稿"
  },
  "scene": {
    "pos": "n.",
    "en_def": "one part of a play or film that happens in one place",
    "cn_def": "場景；一幕"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person in a story, play or film",
    "cn_def": "角色；人物"
  },
  "emotion": {
    "pos": "n.",
    "en_def": "a strong feeling such as joy, anger or sadness",
    "cn_def": "情感；情緒"
  },
  "rhythm": {
    "pos": "n.",
    "en_def": "a regular pattern of sounds or beats",
    "cn_def": "節奏；韻律"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "a pleasant mix of different musical notes sung or played together",
    "cn_def": "和聲；和諧"
  },
  "improvise": {
    "pos": "v.",
    "en_def": "to do or say something without preparing it first",
    "cn_def": "即興發揮；臨時湊合"
  },
  "dramatic": {
    "pos": "adj.",
    "en_def": "sudden and very large; exciting",
    "cn_def": "戲劇性的；劇烈的"
  },
  "energetic": {
    "pos": "adj.",
    "en_def": "full of energy and very active",
    "cn_def": "精力充沛的；充滿活力的"
  },
  "outstanding": {
    "pos": "adj.",
    "en_def": "extremely good",
    "cn_def": "傑出的；出色的"
  },
  "critic": {
    "pos": "n.",
    "en_def": "a person whose job is to judge and write about films, plays, food, etc.",
    "cn_def": "評論家"
  },
  "review": {
    "pos": "n.",
    "en_def": "an article that gives an opinion about a show, book, product, etc.",
    "cn_def": "評論；評價"
  },
  "encore": {
    "pos": "n.",
    "en_def": "an extra song or act at the end of a show because the audience asks for it",
    "cn_def": "安可；加演"
  },
  "premiere": {
    "pos": "n.",
    "en_def": "the first public showing of a film or play",
    "cn_def": "首映；首演"
  },
  "choreography": {
    "pos": "n.",
    "en_def": "the planned steps and movements of a dance",
    "cn_def": "編舞；舞蹈設計"
  },
  "presentation": {
    "pos": "n.",
    "en_def": "a talk that gives information to a group of people",
    "cn_def": "簡報；發表"
  },
  "practice": {
    "pos": "n.",
    "en_def": "doing something again and again to get better at it",
    "cn_def": "練習"
  }
};

const EXTRA_GLOSSES = {};
