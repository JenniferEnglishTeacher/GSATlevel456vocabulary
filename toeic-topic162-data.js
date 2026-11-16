// Topic 162 Quiz Data: Group 團體
// Source word list: https://www.examword.com/group-topic/group — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T162 - Group 團體",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "team",
    "pos": "n.",
    "cn_def": "團隊；小組",
    "en_def": "a group of people who work together",
    "sentence": "A: Why did the manager move Lisa from the accounting department to the marketing floor at the beginning of this month? B: She joined the new {{BLANK}} that is planning the summer product launch, because the director wanted someone who understands budgets to work closely with the designers every day.",
    "cn": "A：為什麼經理在這個月初把Lisa從會計部調到行銷部樓層？ B：她加入了負責規劃夏季產品發表的新【團隊】，因為主管希望有一位了解預算的人每天和設計師密切合作。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "the people who live in the same area",
    "sentence": "A: Why is our company paying for new benches and trees in the park across the street from the factory this year? B: The owners want to give something back to the local {{BLANK}}, since many of our workers live nearby and families often use the park on weekends.",
    "cn": "A：為什麼我們公司今年要出錢在工廠對面的公園設置新長椅和種樹？ B：老闆們想要回饋當地【社區】，因為很多員工住在附近，而且週末常有家庭到公園休閒。"
  },
  {
    "word": "organization",
    "pos": "n.",
    "cn_def": "組織；機構",
    "en_def": "an official group with a shared purpose, such as a company or charity",
    "sentence": "A: Where did you work before you joined our sales department, and what kind of tasks were you responsible for there? B: I worked for a non-profit {{BLANK}} that helped elderly people in rural areas, and I was in charge of raising money and finding volunteers for its yearly events.",
    "cn": "A：你加入我們業務部之前在哪裡工作？在那裡負責哪些工作？ B：我在一個幫助偏鄉長者的非營利【組織】工作，負責募款以及為每年的活動招募志工。"
  },
  {
    "word": "association",
    "pos": "n.",
    "cn_def": "協會；公會",
    "en_def": "a group of people or businesses joined together for a shared interest",
    "sentence": "A: Why are so many restaurant owners meeting at the convention center downtown tomorrow afternoon? B: The local restaurant {{BLANK}} has invited all its members to discuss the new food safety rules, and they also plan to share ideas about how to deal with rising rent and labor costs.",
    "cn": "A：為什麼明天下午有這麼多餐廳老闆要在市中心的會議中心開會？ B：當地餐飲【協會】邀請所有會員討論新的食品安全規定，他們也打算分享如何因應房租和人事成本上漲的想法。"
  },
  {
    "word": "committee",
    "pos": "n.",
    "cn_def": "委員會",
    "en_def": "a small group chosen to make decisions or plans for a larger group",
    "sentence": "A: Who decided that the annual company picnic would be held at the lake instead of the city park this year? B: A small {{BLANK}} of five employees from different departments voted on it last week, after they compared prices, transportation options, and the results of the staff survey.",
    "cn": "A：今年公司年度野餐改在湖邊而不是市立公園舉辦，是誰決定的？ B：由不同部門五位員工組成的小型【委員會】上週投票決定，他們比較了價格、交通方式和員工問卷結果之後才做出決定。"
  },
  {
    "word": "club",
    "pos": "n.",
    "cn_def": "社團；俱樂部",
    "en_def": "a group of people who meet regularly for an activity they enjoy",
    "sentence": "A: Why do you always leave the office so quickly on Wednesday evenings, even when there is a lot of work to finish? B: I joined a running {{BLANK}} near the river last spring, and we meet at six thirty every Wednesday to train together for a half marathon in October.",
    "cn": "A：為什麼你每週三晚上總是那麼快離開辦公室，即使還有很多工作沒做完？ B：我去年春天加入了河邊的一個跑步【社團】，我們每週三六點半見面，一起為十月的半程馬拉松訓練。"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "cn_def": "人群；人潮",
    "en_def": "a large number of people together in one place",
    "sentence": "A: Why did it take you almost an hour to get through the main entrance of the trade show this morning? B: A huge {{BLANK}} was waiting outside because a famous tech company was giving away free samples, and the security guards were checking every visitor's ticket and bag very carefully.",
    "cn": "A：為什麼你今天早上花了將近一小時才通過商展的大門？ B：外面有大批【人潮】在等候，因為一家知名科技公司在發送免費樣品，而且保全仔細檢查每位訪客的門票和包包。"
  },
  {
    "word": "gathering",
    "pos": "n.",
    "cn_def": "聚會；集會",
    "en_def": "a meeting of people, often for a social reason",
    "sentence": "A: Are you planning to come to the small {{BLANK}} at Mark's house on Saturday to celebrate his promotion to sales manager? B: Yes, I'll be there after my daughter's piano lesson, and I'm going to bring some homemade cookies because he said everyone should bring a dish to share.",
    "cn": "A：你打算週六去Mark家參加慶祝他升任業務經理的小型【聚會】嗎？ B：會啊，我女兒的鋼琴課結束後就過去，我會帶一些自製餅乾，因為他說每個人都要帶一道菜來分享。"
  },
  {
    "word": "collective",
    "pos": "adj.",
    "cn_def": "集體的；共同的",
    "en_def": "shared or done by all members of a group",
    "sentence": "A: How did the small design company manage to win the city's biggest building contract against so many larger firms? B: It was really a {{BLANK}} effort, because every employee, from the interns to the owner, worked late for weeks to prepare drawings, cost reports, and a model for the presentation.",
    "cn": "A：那家小型設計公司是如何在眾多大公司競爭下贏得市內最大的建案合約？ B：那真的是【集體】努力的成果，因為從實習生到老闆，每位員工都連續加班好幾週，準備圖稿、成本報告和簡報用的模型。"
  },
  {
    "word": "coalition",
    "pos": "n.",
    "cn_def": "聯盟；聯合團體",
    "en_def": "a group of organizations or people who join together for a shared goal",
    "sentence": "A: Why did the city finally agree to build a new bicycle lane along the main shopping street? B: A {{BLANK}} of local shop owners, schools, and environmental groups worked together for two years, collecting signatures and meeting with officials until the plan was approved.",
    "cn": "A：為什麼市政府終於同意沿著主要購物街興建新的自行車道？ B：由當地店家、學校和環保團體組成的【聯盟】合作了兩年，收集連署並和官員開會，直到計畫獲得批准。"
  },
  {
    "word": "network",
    "pos": "n.",
    "cn_def": "人脈；網絡",
    "en_def": "a group of people or things that are connected to each other",
    "sentence": "A: How did you find so many new clients in your first year as a freelance designer after leaving the agency? B: I built a strong {{BLANK}} of contacts by going to industry events and keeping in touch with former coworkers, and many of them recommended me to their friends and business partners.",
    "cn": "A：你離開廣告公司後，在當自由設計師的第一年是怎麼找到這麼多新客戶的？ B：我參加業界活動、和前同事保持聯絡，建立起強大的人脈【網絡】，其中很多人把我推薦給他們的朋友和事業夥伴。"
  },
  {
    "word": "partnership",
    "pos": "n.",
    "cn_def": "合作關係；合夥",
    "en_def": "a relationship in which two or more people or companies work together",
    "sentence": "A: Why will our coffee be sold in that popular bookstore chain starting next month? B: Our company signed a {{BLANK}} with them last week, so they will serve our coffee in all forty of their stores, and in return we will promote their new reading app on our cups.",
    "cn": "A：為什麼從下個月開始我們的咖啡會在那家熱門連鎖書店販售？ B：我們公司上週和他們簽訂了【合作】協議，所以他們四十家門市都會供應我們的咖啡，而我們則會在杯子上宣傳他們的新閱讀應用程式。"
  },
  {
    "word": "collaboration",
    "pos": "n.",
    "cn_def": "合作；協作",
    "en_def": "the act of working together with others to create or achieve something",
    "sentence": "A: How was the new kitchen product developed so quickly, when most of our projects usually take more than a year? B: It came from close {{BLANK}} between our engineers in Taipei and a design studio in Milan, who held video meetings almost every day to share drawings and test results.",
    "cn": "A：為什麼這款新廚房產品開發得這麼快？我們大部分的專案通常都要超過一年。 B：這來自我們台北工程師和米蘭一家設計工作室之間的密切【合作】，他們幾乎每天開視訊會議分享圖稿和測試結果。"
  },
  {
    "word": "alliance",
    "pos": "n.",
    "cn_def": "聯盟；同盟",
    "en_def": "an agreement between groups or countries to work together for shared benefits",
    "sentence": "A: Why are those three airlines now letting passengers collect points on each other's flights? B: They formed an {{BLANK}} earlier this year so that travelers can book connecting flights more easily, share airport lounges, and earn rewards no matter which of the airlines they choose.",
    "cn": "A：為什麼那三家航空公司現在讓乘客搭乘彼此的航班都能累積點數？ B：他們今年稍早結成【聯盟】，讓旅客更容易預訂轉機航班、共用機場貴賓室，而且不論選擇哪家航空都能累積回饋。"
  },
  {
    "word": "membership",
    "pos": "n.",
    "cn_def": "會員資格；會籍",
    "en_def": "the state of belonging to a group or club",
    "sentence": "A: How much does it cost to use the gym on the second floor of our office building, and can I bring a friend? B: A yearly {{BLANK}} is about twelve thousand dollars, but employees of companies in this building get a twenty percent discount, and you can bring one guest each month for free.",
    "cn": "A：使用我們辦公大樓二樓的健身房要多少錢？我可以帶朋友去嗎？ B：年度【會員】大約一萬二千元，但這棟大樓內公司的員工可以打八折，而且每個月可以免費帶一位來賓。"
  },
  {
    "word": "participant",
    "pos": "n.",
    "cn_def": "參加者；參與者",
    "en_def": "a person who takes part in an activity or event",
    "sentence": "A: How many people have signed up for the online customer service training that starts next Monday morning? B: We already have more than eighty, so each {{BLANK}} will be placed in a smaller class of twenty and will receive a workbook and a certificate after finishing all four sessions.",
    "cn": "A：下週一早上開始的線上客服訓練有多少人報名了？ B：已經超過八十人了，所以每位【參加者】都會被分到二十人的小班，完成四堂課後會收到一本練習手冊和一張證書。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領導者；負責人",
    "en_def": "a person who guides or is in charge of a group",
    "sentence": "A: Why does everyone on the sales floor seem so happy and motivated since Ms. Chen joined the company in March? B: She is a great {{BLANK}} who listens to her staff, explains her plans clearly, and always gives credit to the people who did the work when a big deal is closed.",
    "cn": "A：為什麼自從陳小姐三月加入公司以來，業務部的每個人都顯得那麼開心又有幹勁？ B：她是一位很棒的【領導者】，會傾聽員工意見、清楚說明計畫，而且談成大案子時總是把功勞歸給實際做事的人。"
  },
  {
    "word": "follower",
    "pos": "n.",
    "cn_def": "追隨者；粉絲",
    "en_def": "a person who supports someone or follows their account on social media",
    "sentence": "A: Why did the cosmetics company choose that young blogger to advertise its new skin cream instead of a movie star? B: She has a huge online audience, and almost every {{BLANK}} of her beauty channel trusts her opinions, so the company believes her short videos will sell more products than a costly TV commercial.",
    "cn": "A：為什麼那家化妝品公司選擇那位年輕部落客來宣傳新面霜，而不是找電影明星？ B：她在網路上有大量觀眾，而且她美妝頻道的幾乎每位【粉絲】都信任她的意見，所以公司認為她的短片會比昂貴的電視廣告賣出更多產品。"
  },
  {
    "word": "interaction",
    "pos": "n.",
    "cn_def": "互動；交流",
    "en_def": "communication or activity between people",
    "sentence": "A: Why do you prefer working at the office three days a week instead of staying home every day? B: I enjoy the face-to-face {{BLANK}} with my coworkers, because quick conversations at lunch or in the hallway often help me solve problems faster than long emails or video calls.",
    "cn": "A：為什麼你比較喜歡每週進辦公室三天，而不是每天都在家工作？ B：我喜歡和同事面對面【互動】，因為午餐時或走廊上的簡短交談，往往比冗長的電子郵件或視訊通話更快幫我解決問題。"
  },
  {
    "word": "cooperation",
    "pos": "n.",
    "cn_def": "合作；配合",
    "en_def": "the act of working together and helping each other to reach the same goal",
    "sentence": "A: Why did the building manager send a letter to all the tenants on Friday afternoon? B: The elevators will be repaired next week, so he asked for everyone's {{BLANK}} in using the stairs when possible and in avoiding moving large furniture until the work is finished.",
    "cn": "A：為什麼大樓管理員週五下午寄信給所有租戶？ B：下週要維修電梯，所以他請大家【配合】盡量走樓梯，並在工程完成前避免搬運大型家具。"
  },
  {
    "word": "unity",
    "pos": "n.",
    "cn_def": "團結；統一",
    "en_def": "the state of being together or in agreement",
    "sentence": "A: Why did the CEO invite every department to the same dinner after the difficult merger last year? B: She wanted to build a sense of {{BLANK}} between the two companies' staff, who had different working styles and were still worried about losing their jobs or being moved to other cities.",
    "cn": "A：為什麼去年艱難的合併之後，執行長邀請所有部門參加同一場晚宴？ B：她想在兩家公司的員工之間建立【團結】感，因為他們的工作風格不同，而且仍擔心會失業或被調到其他城市。"
  },
  {
    "word": "solidarity",
    "pos": "n.",
    "cn_def": "團結一致；聲援",
    "en_def": "support and agreement among people who share the same goals or problems",
    "sentence": "A: Why are so many employees wearing yellow ribbons on their jackets at the factory today? B: They are showing {{BLANK}} with the workers at our sister plant, who lost their homes in last week's flood, and the union is also collecting money and clothes to send to them.",
    "cn": "A：為什麼今天工廠裡有這麼多員工在外套上別著黃絲帶？ B：他們在表達對姊妹廠員工的【聲援】，那些員工在上週水災中失去了家園，工會也在募集金錢和衣物寄給他們。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多元性；多樣性",
    "en_def": "the condition of including many different types of people or things",
    "sentence": "A: Why does our human resources department now post job advertisements in several languages and on different websites? B: The company wants more {{BLANK}} in its workforce, because hiring people from different backgrounds, ages, and countries brings fresh ideas and helps us understand customers around the world.",
    "cn": "A：為什麼我們人資部現在用好幾種語言、在不同網站上刊登徵才廣告？ B：公司希望員工更具【多元性】，因為聘用不同背景、年齡和國籍的人能帶來新觀點，並幫助我們了解世界各地的顧客。"
  },
  {
    "word": "inclusion",
    "pos": "n.",
    "cn_def": "包容；納入",
    "en_def": "the act of making sure everyone is accepted and allowed to take part",
    "sentence": "A: Why did the office install a ramp at the entrance and buy desks that can be raised and lowered? B: Our new policy focuses on {{BLANK}}, so the company wants every employee, including those who use wheelchairs, to move around easily and work comfortably without asking for special help.",
    "cn": "A：為什麼辦公室在入口裝了斜坡，還買了可以升降的桌子？ B：我們的新政策重視【包容】，所以公司希望每位員工，包括坐輪椅的人，都能輕鬆行動、舒適工作，而不必特別請求協助。"
  },
  {
    "word": "coordination",
    "pos": "n.",
    "cn_def": "協調；配合",
    "en_def": "the act of organizing different people or parts so they work well together",
    "sentence": "A: How did the hotel manage to serve dinner to five hundred conference guests in less than an hour last night? B: It took careful {{BLANK}} between the kitchen staff, the waiters, and the event planners, who used radios to tell each other exactly when each table was ready for the next dish.",
    "cn": "A：飯店昨晚如何在不到一小時內為五百位會議賓客上完晚餐？ B：這需要廚房員工、服務生和活動企劃之間仔細【協調】，他們用無線電準確告知彼此每一桌何時可以上下一道菜。"
  },
  {
    "word": "consensus",
    "pos": "n.",
    "cn_def": "共識",
    "en_def": "agreement among all or most people in a group",
    "sentence": "A: Did the board of directors finally decide whether to open a new branch in Kaohsiung next year? B: Not yet, because they couldn't reach a {{BLANK}} during the three-hour meeting, as some members worried about the high rent while others believed the southern market would grow quickly.",
    "cn": "A：董事會最後決定明年是否要在高雄開設新分店了嗎？ B：還沒，因為他們在三小時的會議中無法達成【共識】，有些成員擔心租金太高，有些則認為南部市場會快速成長。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a conversation about a subject in which people share ideas",
    "sentence": "A: What happened at the staff meeting this morning, and why did it run more than an hour late? B: There was a long {{BLANK}} about the new work-from-home rules, because many parents wanted more flexible hours while some managers worried that teamwork and communication would suffer.",
    "cn": "A：今天早上的員工會議發生了什麼事？為什麼拖延了一個多小時？ B：大家針對新的居家工作規定進行了冗長的【討論】，因為很多家長希望工時更彈性，而有些主管擔心團隊合作和溝通會受影響。"
  },
  {
    "word": "brainstorm",
    "pos": "v.",
    "cn_def": "腦力激盪；集思廣益",
    "en_def": "to think of many ideas quickly as a group",
    "sentence": "A: What are we going to do in the meeting room this afternoon before the client arrives at four o'clock? B: The manager wants us to {{BLANK}} new names for the energy drink, so please bring any ideas you have, even silly ones, and we'll write all of them on the whiteboard first.",
    "cn": "A：今天下午客戶四點到之前，我們要在會議室做什麼？ B：經理要我們為這款能量飲料【腦力激盪】想新名稱，所以請帶著你的任何點子來，即使很好笑的也沒關係，我們會先把全部寫在白板上。"
  },
  {
    "word": "bonding",
    "pos": "n.",
    "cn_def": "建立感情；凝聚情誼",
    "en_def": "the process of forming a close relationship with others",
    "sentence": "A: Why is the company taking all the new employees on a two-day hiking trip in the mountains next month? B: The trip is designed for team {{BLANK}}, so the new staff can get to know each other outside the office, learn to trust one another, and feel more comfortable asking for help at work.",
    "cn": "A：為什麼公司下個月要帶所有新進員工去山上健行兩天？ B：這趟旅行是為了團隊【凝聚情誼】而設計的，讓新同事能在辦公室外彼此認識、學會互相信任，在工作上也更自在地尋求協助。"
  },
  {
    "word": "subgroup",
    "pos": "n.",
    "cn_def": "小組；子群組",
    "en_def": "a smaller group that is part of a larger group",
    "sentence": "A: How will the fifty volunteers manage to clean the whole beach before the festival starts on Sunday morning? B: The organizer will divide everyone by area, and each {{BLANK}} of ten people will be responsible for one part of the beach, collecting plastic, cans, and broken glass into separate bags.",
    "cn": "A：五十位志工要怎樣在週日早上節慶開始前把整個海灘清乾淨？ B：主辦人會依區域分配大家，每個十人【小組】負責海灘的一個區段，把塑膠、鐵罐和碎玻璃分別裝進不同的袋子。"
  },
  {
    "word": "peer",
    "pos": "n.",
    "cn_def": "同儕；同事",
    "en_def": "a person who is the same age, level, or job as you",
    "sentence": "A: How does the company decide who will receive the best employee award at the end of every year? B: Managers look at sales numbers, but each worker can also nominate a {{BLANK}} who has been especially helpful, because coworkers often notice good work that bosses might miss.",
    "cn": "A：公司每年年底如何決定誰獲得最佳員工獎？ B：主管會看業績，但每位員工也可以提名一位特別樂於助人的【同儕】，因為同事往往會注意到老闆可能忽略的好表現。"
  },
  {
    "word": "audience",
    "pos": "n.",
    "cn_def": "觀眾；聽眾",
    "en_def": "the people who watch or listen to a performance, speech, etc.",
    "sentence": "A: How did your presentation at the marketing conference in Singapore go yesterday afternoon? B: It went really well, because the {{BLANK}} asked lots of good questions after my talk, and three companies wanted to meet me later to discuss using our new advertising software.",
    "cn": "A：你昨天下午在新加坡行銷研討會的簡報進行得怎麼樣？ B：非常順利，因為我演講後【聽眾】問了很多好問題，還有三家公司想之後跟我見面，討論使用我們的新廣告軟體。"
  },
  {
    "word": "delegation",
    "pos": "n.",
    "cn_def": "代表團",
    "en_def": "a group of people sent to represent an organization or country",
    "sentence": "A: Why is the meeting room on the tenth floor being decorated with flags and flowers today? B: A {{BLANK}} of business leaders from Japan is visiting our headquarters tomorrow morning, and the chairman wants to give them a warm welcome before they tour our factory and sign the contract.",
    "cn": "A：為什麼今天十樓的會議室要用旗子和花來佈置？ B：一個來自日本的企業界【代表團】明天早上要參觀我們的總部，董事長希望在他們參觀工廠和簽約前熱烈歡迎他們。"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "cn_def": "集合；聚集",
    "en_def": "to come together or bring people together in one place",
    "sentence": "A: What should all employees do if the fire alarm goes off during next Tuesday's safety drill? B: Everyone should leave the building by the nearest stairs and {{BLANK}} in the parking lot across the street, where the floor managers will count people and check that nobody is missing.",
    "cn": "A：下週二安全演習時，如果火警鈴響，全體員工應該怎麼做？ B：大家應該從最近的樓梯離開大樓，到對街的停車場【集合】，樓層主管會在那裡清點人數，確認沒有人失蹤。"
  }
];

const MCQS = [
  {
    "q": "The sales manager is looking for two more people to join her _____. They will help prepare the new product launch in May.",
    "options": [
      "team",
      "crowd",
      "audience",
      "consensus"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new library will offer free computer classes to the local _____. Residents of all ages are welcome to sign up online.",
    "options": [
      "delegation",
      "community",
      "consensus",
      "interaction"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Park left her bank job to work for a non-profit _____. It provides clean water to small villages in Southeast Asia.",
    "options": [
      "audience",
      "discussion",
      "organization",
      "consensus"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "All members of the dental _____ will receive a newsletter each month. It contains updates on new rules and upcoming training events.",
    "options": [
      "crowd",
      "interaction",
      "consensus",
      "association"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The hiring _____ will interview the final three candidates on Thursday. Its five members will then vote on who gets the job.",
    "options": [
      "committee",
      "audience",
      "diversity",
      "unity"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "Mr. Tanaka joined a golf _____ near his office last year. He now plays with clients there almost every Saturday morning.",
    "options": [
      "consensus",
      "club",
      "delegation",
      "inclusion"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "A large _____ gathered outside the store before it opened. Hundreds of shoppers wanted to buy the new phone on the first day.",
    "options": [
      "consensus",
      "unity",
      "crowd",
      "coordination"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The company holds a small holiday _____ every December to thank its staff. Employees enjoy food, music, and prizes at the event.",
    "options": [
      "consensus",
      "diversity",
      "inclusion",
      "gathering"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "A _____ of environmental groups is asking the city to ban plastic bags. The groups have already collected more than ten thousand signatures.",
    "options": [
      "coalition",
      "membership",
      "interaction",
      "consensus"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Attending industry events is a good way to build a professional _____. Many job openings are filled through personal contacts.",
    "options": [
      "audience",
      "network",
      "unity",
      "consensus"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The hotel chain announced a new _____ with a local airline. Guests who book both will now receive a fifteen percent discount.",
    "options": [
      "crowd",
      "diversity",
      "partnership",
      "audience"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The software was developed in close _____ with several hospitals. Doctors tested each version and suggested many useful changes.",
    "options": [
      "audience",
      "membership",
      "crowd",
      "collaboration"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Four regional airlines formed a strategic _____ last spring. Passengers can now earn points on all four airlines' flights.",
    "options": [
      "alliance",
      "audience",
      "crowd",
      "diversity"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Your gym _____ will expire at the end of this month. Please renew it at the front desk to keep using the pool.",
    "options": [
      "coordination",
      "membership",
      "solidarity",
      "interaction"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Each _____ in the workshop will receive a certificate. Please make sure to sign the attendance sheet before you leave the room.",
    "options": [
      "delegation",
      "community",
      "participant",
      "consensus"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Ms. Lopez was chosen as the project _____ because of her experience. She will assign tasks and report progress to the director weekly.",
    "options": [
      "peer",
      "audience",
      "crowd",
      "leader"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "The training course focuses on improving customer _____. Staff will practice greeting visitors, answering questions, and handling complaints politely.",
    "options": [
      "interaction",
      "delegation",
      "solidarity",
      "consensus"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Thank you for your _____ during the elevator repairs this week. We know using the stairs has been inconvenient for many tenants.",
    "options": [
      "diversity",
      "cooperation",
      "audience",
      "delegation"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The CEO's speech stressed the importance of _____ after the merger. She asked staff from both companies to work as one team.",
    "options": [
      "audience",
      "membership",
      "unity",
      "delegation"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The company values _____ and hires people from many different countries. Its staff speak more than fifteen languages.",
    "options": [
      "delegation",
      "crowd",
      "audience",
      "diversity"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The new policy promotes the _____ of employees with disabilities. Ramps and adjustable desks have been installed in every office.",
    "options": [
      "inclusion",
      "audience",
      "crowd",
      "delegation"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Running a large conference requires careful _____ between many departments. Catering, security, and technical staff must all follow the same schedule.",
    "options": [
      "audience",
      "coordination",
      "crowd",
      "membership"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "After two hours of debate, the board finally reached a _____. All members agreed to delay the store opening until spring.",
    "options": [
      "crowd",
      "membership",
      "consensus",
      "audience"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The managers held a long _____ about the new budget on Monday. Several departments asked for more money for staff training.",
    "options": [
      "unity",
      "diversity",
      "membership",
      "discussion"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Let's meet this afternoon to _____ ideas for the new advertising campaign. Bring any suggestions you have, even unusual ones.",
    "options": [
      "brainstorm",
      "arrive",
      "expire",
      "belong"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "The two-day hiking trip was organized for team _____. New employees got to know each other and learned to trust their coworkers.",
    "options": [
      "audience",
      "bonding",
      "delegation",
      "crowd"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "Students who practice speaking with a _____ often improve faster. Working with someone at the same level makes them feel less nervous.",
    "options": [
      "crowd",
      "delegation",
      "peer",
      "coalition"
    ],
    "answer": 2,
    "vocabIndex": 30
  },
  {
    "q": "The speaker thanked the _____ for listening and invited questions. Many people raised their hands to ask about the new software.",
    "options": [
      "coalition",
      "consensus",
      "inclusion",
      "audience"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "A trade _____ from Vietnam will visit our factory next Tuesday. The group includes government officials and several business owners.",
    "options": [
      "delegation",
      "unity",
      "consensus",
      "inclusion"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "During the fire drill, all staff must _____ in the parking lot across the street. Floor managers will then count everyone carefully.",
    "options": [
      "postpone",
      "assemble",
      "expire",
      "recommend"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "team": {
    "pos": "n.",
    "en_def": "a group of people who work together",
    "cn_def": "團隊；小組"
  },
  "community": {
    "pos": "n.",
    "en_def": "the people who live in the same area",
    "cn_def": "社區；社群"
  },
  "organization": {
    "pos": "n.",
    "en_def": "an official group with a shared purpose, such as a company or charity",
    "cn_def": "組織；機構"
  },
  "association": {
    "pos": "n.",
    "en_def": "a group of people or businesses joined together for a shared interest",
    "cn_def": "協會；公會"
  },
  "committee": {
    "pos": "n.",
    "en_def": "a small group chosen to make decisions or plans for a larger group",
    "cn_def": "委員會"
  },
  "club": {
    "pos": "n.",
    "en_def": "a group of people who meet regularly for an activity they enjoy",
    "cn_def": "社團；俱樂部"
  },
  "crowd": {
    "pos": "n.",
    "en_def": "a large number of people together in one place",
    "cn_def": "人群；人潮"
  },
  "gathering": {
    "pos": "n.",
    "en_def": "a meeting of people, often for a social reason",
    "cn_def": "聚會；集會"
  },
  "collective": {
    "pos": "adj.",
    "en_def": "shared or done by all members of a group",
    "cn_def": "集體的；共同的"
  },
  "coalition": {
    "pos": "n.",
    "en_def": "a group of organizations or people who join together for a shared goal",
    "cn_def": "聯盟；聯合團體"
  },
  "network": {
    "pos": "n.",
    "en_def": "a group of people or things that are connected to each other",
    "cn_def": "人脈；網絡"
  },
  "partnership": {
    "pos": "n.",
    "en_def": "a relationship in which two or more people or companies work together",
    "cn_def": "合作關係；合夥"
  },
  "collaboration": {
    "pos": "n.",
    "en_def": "the act of working together with others to create or achieve something",
    "cn_def": "合作；協作"
  },
  "alliance": {
    "pos": "n.",
    "en_def": "an agreement between groups or countries to work together for shared benefits",
    "cn_def": "聯盟；同盟"
  },
  "membership": {
    "pos": "n.",
    "en_def": "the state of belonging to a group or club",
    "cn_def": "會員資格；會籍"
  },
  "participant": {
    "pos": "n.",
    "en_def": "a person who takes part in an activity or event",
    "cn_def": "參加者；參與者"
  },
  "leader": {
    "pos": "n.",
    "en_def": "a person who guides or is in charge of a group",
    "cn_def": "領導者；負責人"
  },
  "follower": {
    "pos": "n.",
    "en_def": "a person who supports someone or follows their account on social media",
    "cn_def": "追隨者；粉絲"
  },
  "interaction": {
    "pos": "n.",
    "en_def": "communication or activity between people",
    "cn_def": "互動；交流"
  },
  "cooperation": {
    "pos": "n.",
    "en_def": "the act of working together and helping each other to reach the same goal",
    "cn_def": "合作；配合"
  },
  "unity": {
    "pos": "n.",
    "en_def": "the state of being together or in agreement",
    "cn_def": "團結；統一"
  },
  "solidarity": {
    "pos": "n.",
    "en_def": "support and agreement among people who share the same goals or problems",
    "cn_def": "團結一致；聲援"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "the condition of including many different types of people or things",
    "cn_def": "多元性；多樣性"
  },
  "inclusion": {
    "pos": "n.",
    "en_def": "the act of making sure everyone is accepted and allowed to take part",
    "cn_def": "包容；納入"
  },
  "coordination": {
    "pos": "n.",
    "en_def": "the act of organizing different people or parts so they work well together",
    "cn_def": "協調；配合"
  },
  "consensus": {
    "pos": "n.",
    "en_def": "agreement among all or most people in a group",
    "cn_def": "共識"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a conversation about a subject in which people share ideas",
    "cn_def": "討論"
  },
  "brainstorm": {
    "pos": "v.",
    "en_def": "to think of many ideas quickly as a group",
    "cn_def": "腦力激盪；集思廣益"
  },
  "bonding": {
    "pos": "n.",
    "en_def": "the process of forming a close relationship with others",
    "cn_def": "建立感情；凝聚情誼"
  },
  "subgroup": {
    "pos": "n.",
    "en_def": "a smaller group that is part of a larger group",
    "cn_def": "小組；子群組"
  },
  "peer": {
    "pos": "n.",
    "en_def": "a person who is the same age, level, or job as you",
    "cn_def": "同儕；同事"
  },
  "audience": {
    "pos": "n.",
    "en_def": "the people who watch or listen to a performance, speech, etc.",
    "cn_def": "觀眾；聽眾"
  },
  "delegation": {
    "pos": "n.",
    "en_def": "a group of people sent to represent an organization or country",
    "cn_def": "代表團"
  },
  "assemble": {
    "pos": "v.",
    "en_def": "to come together or bring people together in one place",
    "cn_def": "集合；聚集"
  }
};

const EXTRA_GLOSSES = {};
