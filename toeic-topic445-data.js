// Topic 445 Quiz Data: Woman 女性
// Source word list: https://www.examword.com/group-topic/woman — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T445 - Woman 女性",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "female",
    "pos": "adj.",
    "cn_def": "女性的；女的",
    "en_def": "relating to women or girls",
    "sentence": "A: Why did the hotel group decide to hire more managers this year, and how will the new hiring plan change the team at our Taipei branch? B: Our survey showed that most guests prefer {{BLANK}} staff at the spa reception, so the company is training several new managers who will start working there next month.",
    "cn": "A：為什麼飯店集團今年決定聘請更多經理，新的招聘計畫又會如何改變我們台北分店的團隊？ B：我們的調查顯示，大多數客人在水療中心櫃檯比較喜歡【女性】員工，所以公司正在培訓幾位下個月開始在那裡上班的新經理。"
  },
  {
    "word": "lady",
    "pos": "n.",
    "cn_def": "女士；小姐",
    "en_def": "a polite word for a woman",
    "sentence": "A: Excuse me, do you know who left this black umbrella and a small shopping bag on the chair beside the front desk this morning? B: I think it belongs to the {{BLANK}} in the gray coat who came to meet our sales director, so I will call her before she leaves the building.",
    "cn": "A：不好意思，你知道今天早上是誰把這把黑色雨傘和一個小購物袋留在櫃檯旁邊的椅子上嗎？ B：我想那是穿灰色外套、來和我們業務總監見面的那位【女士】的，所以我會在她離開大樓前打電話給她。"
  },
  {
    "word": "girl",
    "pos": "n.",
    "cn_def": "女孩",
    "en_def": "a female child or young woman",
    "sentence": "A: Who is that young person helping the children choose books in the library corner of the shopping mall every Saturday afternoon? B: She is a high school {{BLANK}} who volunteers with our reading program, and the parents say their kids enjoy the stories she reads to them very much.",
    "cn": "A：每個星期六下午在購物中心圖書角幫小朋友挑書的那個年輕人是誰？ B：她是一位在我們閱讀計畫擔任志工的高中【女孩】，家長們說孩子們非常喜歡她念給他們聽的故事。"
  },
  {
    "word": "mother",
    "pos": "n.",
    "cn_def": "母親；媽媽",
    "en_def": "a female parent",
    "sentence": "A: Why are you leaving the office early today when we still have to finish the budget report for the finance department before Friday? B: My {{BLANK}} has a doctor's appointment at three o'clock, and since my father is away on business, I promised to drive her to the hospital and stay with her.",
    "cn": "A：我們還得在星期五前替財務部完成預算報告，為什麼你今天要提早下班？ B：我【母親】三點有醫生的預約，因為我父親出差不在，我答應開車送她去醫院並陪著她。"
  },
  {
    "word": "wife",
    "pos": "n.",
    "cn_def": "妻子；太太",
    "en_def": "the woman someone is married to",
    "sentence": "A: Is Mr. Chen bringing anyone to the company's annual dinner at the riverside restaurant next Saturday evening, or will he come by himself? B: He said his {{BLANK}} will join him, because she used to work in our marketing department and still wants to see her old colleagues.",
    "cn": "A：陳先生下週六晚上會帶人來參加在河濱餐廳舉辦的公司年度晚宴嗎？還是他會自己來？ B：他說他的【妻子】會跟他一起來，因為她以前在我們行銷部工作，還想見見她的老同事。"
  },
  {
    "word": "daughter",
    "pos": "n.",
    "cn_def": "女兒",
    "en_def": "a person's female child",
    "sentence": "A: Why does Ms. Lin want to take two weeks of vacation in July, which is usually the busiest season for our travel agency? B: Her {{BLANK}} is graduating from a university in London, so the whole family is flying to England to attend the ceremony and travel around together.",
    "cn": "A：林小姐為什麼要在七月請兩週的假？那通常是我們旅行社最忙的季節。 B：她的【女兒】要從倫敦的一所大學畢業，所以全家要飛去英國參加典禮，並一起到處旅行。"
  },
  {
    "word": "sister",
    "pos": "n.",
    "cn_def": "姊妹；姊姊；妹妹",
    "en_def": "a girl or woman who has the same parents as you",
    "sentence": "A: How did you find such a reliable accountant for our small bakery so quickly after the last one moved to another city? B: My older {{BLANK}} works at an accounting firm downtown, and she recommended one of her colleagues who has helped many local shops with their taxes.",
    "cn": "A：上一位會計師搬到別的城市之後，你怎麼這麼快就幫我們的小麵包店找到這麼可靠的會計師？ B：我【姊姊】在市中心一家會計事務所上班，她推薦了一位幫許多在地商店處理過稅務的同事。"
  },
  {
    "word": "grandmother",
    "pos": "n.",
    "cn_def": "祖母；外婆",
    "en_def": "the mother of your father or mother",
    "sentence": "A: Where did you learn to make these delicious pineapple cakes that everyone in the office keeps asking you to bring again? B: My {{BLANK}} taught me her old family recipe when I was a child, and I still bake them with her every Lunar New Year at her house in Tainan.",
    "cn": "A：你在哪裡學會做這些美味的鳳梨酥？辦公室裡每個人都一直請你再帶來。 B：我小時候【外婆】教了我她的家傳老食譜，現在每年農曆新年我還是會在她台南的家裡和她一起烤。"
  },
  {
    "word": "aunt",
    "pos": "n.",
    "cn_def": "阿姨；姑姑；嬸嬸",
    "en_def": "the sister of your father or mother, or your uncle's wife",
    "sentence": "A: Are you staying at a hotel when you attend the trade fair in Kaohsiung next week, or have you found somewhere cheaper to sleep? B: My {{BLANK}} lives only ten minutes from the exhibition center, so she invited me to stay in her guest room for the whole three days.",
    "cn": "A：你下週去高雄參加商展時要住飯店嗎？還是找到了更便宜的住處？ B：我【阿姨】住在離展覽中心只有十分鐘的地方，所以她邀請我在她的客房住滿三天。"
  },
  {
    "word": "leader",
    "pos": "n.",
    "cn_def": "領導者；領袖",
    "en_def": "a person who guides or is in charge of a group",
    "sentence": "A: Why did the board choose Ms. Huang to manage the new office in Singapore instead of hiring someone from outside the company? B: She has been an excellent {{BLANK}} of the design team for five years, and her staff trust her because she listens carefully and makes fair decisions.",
    "cn": "A：董事會為什麼選黃小姐管理新加坡的新辦公室，而不是從公司外面找人？ B：她五年來一直是設計團隊的優秀【領導者】，員工們信任她，因為她會仔細傾聽並做出公平的決定。"
  },
  {
    "word": "professional",
    "pos": "n.",
    "cn_def": "專業人士",
    "en_def": "a person who has special training and skill in a job",
    "sentence": "A: Should we ask one of our interns to take the photos for the new product catalog, or is it worth paying more for someone experienced? B: I think we should hire a {{BLANK}}, because the catalog will be sent to our biggest customers and the pictures must look clear and attractive.",
    "cn": "A：我們該請一位實習生幫新產品目錄拍照，還是值得多花錢找有經驗的人？ B：我覺得我們應該聘請一位【專業人士】，因為這份目錄會寄給我們最大的客戶，照片一定要清楚又吸引人。"
  },
  {
    "word": "career",
    "pos": "n.",
    "cn_def": "職業生涯；事業",
    "en_def": "the series of jobs a person does over a long time",
    "sentence": "A: Why did Grace leave her well-paid job at the bank last year to study graphic design at a college in the evening? B: She wanted to start a new {{BLANK}} in advertising, and she says the long hours of study were worth it now that she works for a famous agency.",
    "cn": "A：葛蕾絲去年為什麼辭掉銀行的高薪工作，晚上去大學學平面設計？ B：她想在廣告業開創新的【職業生涯】，她說現在她在一家知名廣告公司上班，那些長時間的學習都值得了。"
  },
  {
    "word": "independent",
    "pos": "adj.",
    "cn_def": "獨立的；自主的",
    "en_def": "able to do things without help from other people",
    "sentence": "A: Isn't your new assistant nervous about handling the client meetings alone while you are away at the conference in Tokyo next week? B: Not at all, because she is very {{BLANK}} and has already solved several difficult problems without asking me, so I am sure she will be fine.",
    "cn": "A：你下週去東京開會時，你的新助理單獨處理客戶會議不會緊張嗎？ B：一點也不會，因為她非常【獨立】，已經在沒有問我的情況下解決了好幾個棘手的問題，所以我確定她會沒事的。"
  },
  {
    "word": "strong",
    "pos": "adj.",
    "cn_def": "堅強的；強壯的",
    "en_def": "having power, or not easily broken or upset",
    "sentence": "A: How did the store manager stay so calm last week when the cash register broke and hundreds of customers were waiting in line? B: She is a {{BLANK}} person who never panics under pressure, so she opened two extra counters and kept everyone patient until the repairman arrived.",
    "cn": "A：上週收銀機壞掉、好幾百位顧客在排隊時，店長怎麼能那麼冷靜？ B：她是個在壓力下從不驚慌的【堅強】的人，所以她多開了兩個櫃檯，讓大家耐心等到修理人員到達。"
  },
  {
    "word": "confident",
    "pos": "adj.",
    "cn_def": "有自信的；確信的",
    "en_def": "sure about your own abilities",
    "sentence": "A: Are you worried about giving the presentation to the investors tomorrow morning, since it is your first time speaking to such an important group? B: I was nervous at first, but after practicing with my manager three times this week, I now feel {{BLANK}} that I can answer their questions well.",
    "cn": "A：明天早上要向投資人做簡報，這是你第一次對這麼重要的團體演講，你會擔心嗎？ B：一開始我很緊張，但這週和經理練習了三次之後，我現在【有信心】能好好回答他們的問題。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的；有天分的",
    "en_def": "having a natural ability to do something well",
    "sentence": "A: Who designed the beautiful new logo for our coffee shop chain that customers keep praising on social media this month? B: A young {{BLANK}} artist from our marketing team created it in just two days, and the company has already asked her to design the new cups too.",
    "cn": "A：這個月顧客在社群媒體上一直稱讚的那個漂亮的咖啡連鎖店新標誌是誰設計的？ B：是我們行銷團隊一位年輕【有才華的】藝術家只花兩天就做出來的，公司已經請她也設計新的杯子了。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；有創造力的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: Sales at our gift shop have dropped since the new mall opened, so what can we do to bring customers back before the holidays? B: We need some {{BLANK}} ideas, such as free gift wrapping or small workshops for children, so people have a special reason to visit us again.",
    "cn": "A：自從新的購物中心開幕後，我們禮品店的業績就下滑了，我們在假期前能做什麼讓顧客回來？ B：我們需要一些【有創意的】點子，例如免費包裝禮物或兒童小型工作坊，讓大家有特別的理由再來光顧。"
  },
  {
    "word": "hardworking",
    "pos": "adj.",
    "cn_def": "勤奮的；努力工作的",
    "en_def": "putting a lot of effort into your job",
    "sentence": "A: Why did the restaurant owner give Amy a bonus and a raise after she had worked there for only six months? B: She is the most {{BLANK}} server on the team, often arriving early to prepare the tables and staying late to help clean the kitchen.",
    "cn": "A：為什麼餐廳老闆在艾咪只工作六個月後就給她獎金和加薪？ B：她是團隊裡最【勤奮的】服務生，常常提早到來布置餐桌，還留到很晚幫忙清理廚房。"
  },
  {
    "word": "intelligent",
    "pos": "adj.",
    "cn_def": "聰明的；有才智的",
    "en_def": "able to learn and understand things quickly",
    "sentence": "A: How did the new engineer understand our complicated computer system so quickly when most people need several months of training? B: She is very {{BLANK}} and asks good questions, so after reading the manuals for one weekend, she was already fixing problems that confused the rest of us.",
    "cn": "A：大多數人都需要好幾個月的訓練，這位新工程師怎麼能那麼快就搞懂我們複雜的電腦系統？ B：她非常【聰明】又會問好問題，所以花一個週末讀完手冊後，她就已經在修理讓我們其他人都搞不懂的問題了。"
  },
  {
    "word": "kind",
    "pos": "adj.",
    "cn_def": "親切的；仁慈的",
    "en_def": "friendly, helpful and caring toward other people",
    "sentence": "A: Did anyone help you find the right office when you got lost in that huge building on your first day of work last Monday? B: Yes, a {{BLANK}} woman from the accounting department noticed I looked confused, so she walked me to the elevator and introduced me to my new supervisor.",
    "cn": "A：上週一你第一天上班在那棟大樓裡迷路時，有人幫你找到正確的辦公室嗎？ B：有，會計部一位【親切的】女士注意到我看起來很困惑，就陪我走到電梯，還把我介紹給我的新主管。"
  },
  {
    "word": "brave",
    "pos": "adj.",
    "cn_def": "勇敢的",
    "en_def": "willing to do dangerous or difficult things without fear",
    "sentence": "A: Is it true that one of the flight attendants helped an old passenger who suddenly fell ill during the storm last night? B: Yes, she was very {{BLANK}}, because the plane was shaking badly, but she still left her seat to give him oxygen and stayed beside him until landing.",
    "cn": "A：聽說昨晚暴風雨時，有位空服員幫助了一位突然生病的老乘客，是真的嗎？ B：是的，她非常【勇敢】，因為飛機搖晃得很厲害，但她還是離開座位去給他氧氣，並一直陪在他身邊直到降落。"
  },
  {
    "word": "elegant",
    "pos": "adj.",
    "cn_def": "優雅的；高雅的",
    "en_def": "beautiful and graceful in style",
    "sentence": "A: What kind of dress should I wear to the awards dinner at the five-star hotel, since the invitation says the event is formal? B: Something simple but {{BLANK}} would be perfect, such as a long dark dress with small earrings, because most guests will be business leaders and important clients.",
    "cn": "A：既然邀請函說是正式場合，我去五星級飯店參加頒獎晚宴應該穿什麼樣的洋裝？ B：簡單但【優雅】的衣服就很完美，例如一件深色長洋裝配小耳環，因為大部分賓客都是企業領袖和重要客戶。"
  },
  {
    "word": "stylish",
    "pos": "adj.",
    "cn_def": "時髦的；有型的",
    "en_def": "fashionable and attractive",
    "sentence": "A: Why are so many young office workers buying their bags from that small shop near the station instead of the big department stores? B: The owner sells {{BLANK}} bags at reasonable prices, and she changes the designs every month, so customers always find something new and fashionable to carry to work.",
    "cn": "A：為什麼這麼多年輕上班族在車站附近那家小店買包包，而不是去大型百貨公司？ B：老闆以合理的價格賣【時髦的】包包，而且每個月都會換新設計，所以顧客總能找到新穎又流行的款式帶去上班。"
  },
  {
    "word": "care",
    "pos": "v.",
    "cn_def": "照顧（常用 care for）",
    "en_def": "to look after someone who needs help",
    "sentence": "A: Why did Linda ask to work from home three days a week starting next month, even though she loves meeting clients in person? B: Her father had an operation last week, and she needs to {{BLANK}} for him at home until he can walk again without help.",
    "cn": "A：琳達雖然很喜歡親自跟客戶見面，為什麼要求從下個月開始每週在家工作三天？ B：她父親上週動了手術，她需要在家【照顧】他，直到他能不靠別人幫忙再走路為止。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；資助",
    "en_def": "to help someone, often with money, time or encouragement",
    "sentence": "A: How is our company celebrating International Women's Day this year, since many employees asked for something more than flowers? B: We will {{BLANK}} a local charity that trains mothers to start small businesses, and each department will also donate part of its party budget to them.",
    "cn": "A：今年我們公司要如何慶祝國際婦女節？因為很多員工希望不只是送花而已。 B：我們將【支持】一個訓練母親們創立小型企業的在地慈善機構，每個部門也會把部分派對預算捐給他們。"
  },
  {
    "word": "lead",
    "pos": "v.",
    "cn_def": "帶領；領導",
    "en_def": "to be in charge of a group or activity",
    "sentence": "A: Who will be in charge of the new project to open three stores in Japan, now that Mr. Wang has moved to the head office? B: Ms. Tsai will {{BLANK}} the team, because she speaks fluent Japanese and has already opened two successful branches in Osaka.",
    "cn": "A：既然王先生已經調到總公司，誰會負責在日本開三家店的新專案？ B：蔡小姐將【帶領】這個團隊，因為她日語流利，而且已經在大阪成功開了兩家分店。"
  },
  {
    "word": "teach",
    "pos": "v.",
    "cn_def": "教；教導",
    "en_def": "to give lessons or show someone how to do something",
    "sentence": "A: Have you found someone to help the new cashiers learn how to use the updated payment system before the store reopens on Monday? B: Yes, our senior manager offered to {{BLANK}} them on Saturday morning, and she will also give everyone a short guide to read at home.",
    "cn": "A：在店鋪星期一重新開幕前，你找到人幫新收銀員學會使用更新後的付款系統了嗎？ B：找到了，我們的資深經理主動提出星期六早上【教】他們，她也會給每個人一份簡短的指南帶回家看。"
  },
  {
    "word": "work",
    "pos": "v.",
    "cn_def": "工作；上班",
    "en_def": "to do a job, especially to earn money",
    "sentence": "A: Is your sister still a nurse at the hospital, or did she change jobs after she had her second baby last spring? B: She decided to {{BLANK}} part-time at a small clinic near her home, so she can earn money and still spend afternoons with her children.",
    "cn": "A：你姊姊還在醫院當護理師嗎？還是她去年春天生了第二個寶寶後換了工作？ B：她決定在家附近的一間小診所兼職【工作】，這樣她既能賺錢，下午也還能陪孩子。"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "cn_def": "達成；實現",
    "en_def": "to succeed in doing something after trying hard",
    "sentence": "A: Why is everyone in the sales department so excited this morning, and why is there a big cake in the meeting room? B: Our team managed to {{BLANK}} its yearly sales goal two months early, so the director ordered a cake and promised everyone a bonus in December.",
    "cn": "A：為什麼業務部今天早上每個人都這麼興奮？會議室裡為什麼還有一個大蛋糕？ B：我們團隊提早兩個月【達成】了年度業績目標，所以總監訂了蛋糕，並承諾十二月給大家發獎金。"
  },
  {
    "word": "gracefully",
    "pos": "adv.",
    "cn_def": "優雅地；得體地",
    "en_def": "in a calm, polite and attractive way",
    "sentence": "A: How did the hotel manager respond when the angry guest started shouting about his room in front of everyone in the lobby? B: She handled the situation {{BLANK}}, speaking softly, apologizing for the problem, and offering him a better room with a free breakfast, so he calmed down quickly.",
    "cn": "A：那位生氣的客人在大廳所有人面前開始大聲抱怨他的房間時，飯店經理是怎麼回應的？ B：她【得體地】處理了這個狀況，輕聲說話、為問題道歉，還提供他一間更好的房間和免費早餐，所以他很快就冷靜下來了。"
  },
  {
    "word": "confidently",
    "pos": "adv.",
    "cn_def": "有自信地",
    "en_def": "in a way that shows you are sure of yourself",
    "sentence": "A: How did the new sales representative do at her first meeting with the hospital buyers yesterday afternoon in Taichung? B: She spoke {{BLANK}} about our medical products and answered every question clearly, so the buyers agreed to place a trial order before the meeting even ended.",
    "cn": "A：新的業務代表昨天下午在台中第一次和醫院採購人員開會，表現得怎麼樣？ B：她【自信地】介紹我們的醫療產品，並清楚回答每個問題，所以會議還沒結束，採購人員就同意下試用訂單了。"
  },
  {
    "word": "proudly",
    "pos": "adv.",
    "cn_def": "自豪地；驕傲地",
    "en_def": "in a way that shows you feel pleased about something you did",
    "sentence": "A: Did you see the photo of Ms. Kao at the awards ceremony that was posted on the company website this morning? B: Yes, she was {{BLANK}} holding the Best Manager trophy, and she thanked her whole team for working so hard during the difficult year.",
    "cn": "A：你看到今天早上公司網站上刊登的高小姐在頒獎典禮上的照片了嗎？ B：看到了，她【自豪地】拿著最佳經理獎盃，並感謝她的整個團隊在艱難的一年中如此努力。"
  },
  {
    "word": "wisely",
    "pos": "adv.",
    "cn_def": "明智地",
    "en_def": "in a way that shows good judgment",
    "sentence": "A: How did your aunt manage to open her own flower shop when she had only a small salary as a secretary? B: She spent her money {{BLANK}} for many years, saving a little every month and taking a business course, so she was ready when a good shop became available.",
    "cn": "A：你阿姨只有秘書的微薄薪水，她怎麼能開自己的花店呢？ B：她多年來都【明智地】花錢，每個月存一點，還去上了商業課程，所以當有好店面空出來時，她已經準備好了。"
  }
];

const MCQS = [
  {
    "q": "The company wants more women in senior roles. It has started a mentoring program to help _____ employees move into management positions.",
    "options": [
      "female",
      "elderly",
      "entire",
      "annual"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "A _____ in a red jacket left her phone at the reception desk. Please return it to her if she comes back this afternoon.",
    "options": [
      "aunt",
      "wife",
      "lady",
      "daughter"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Liu became a _____ for the first time last spring. She returned to work after six months of parental leave.",
    "options": [
      "daughter",
      "mother",
      "grandmother",
      "wife"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Mr. Lee will bring his _____ to the company dinner on Friday. They have been married for almost twenty years.",
    "options": [
      "aunt",
      "sister",
      "daughter",
      "wife"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Our CEO's _____ has just finished medical school. She plans to work as a doctor at a hospital in Tainan.",
    "options": [
      "mother",
      "daughter",
      "grandmother",
      "aunt"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Kevin and his younger _____ run the family bakery together. She manages the shop, and he handles the baking.",
    "options": [
      "sister",
      "wife",
      "mother",
      "grandmother"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "My _____ is eighty years old but still very active. She walks in the park every morning before breakfast.",
    "options": [
      "daughter",
      "sister",
      "wife",
      "grandmother"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Ms. Chang has been named the new team _____. She will guide twelve engineers through the software project next year.",
    "options": [
      "visitor",
      "customer",
      "leader",
      "beginner"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "We should hire a trained _____ to repair the air conditioning system. Our own staff do not have the right tools.",
    "options": [
      "professional",
      "amateur",
      "beginner",
      "stranger"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "Helen started her _____ in banking twenty years ago. She is now the vice president of a large investment firm.",
    "options": [
      "salary",
      "holiday",
      "career",
      "hobby"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Our new intern is very _____ and rarely needs help. She finished the market research report without asking any questions.",
    "options": [
      "dependent",
      "independent",
      "careless",
      "nervous"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The manager has a _____ sense of responsibility. She always makes sure every order is shipped on time.",
    "options": [
      "weak",
      "shy",
      "lazy",
      "strong"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "After weeks of practice, Joyce felt _____ about her job interview. She answered every question clearly and calmly.",
    "options": [
      "doubtful",
      "confident",
      "jealous",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The hotel hired a _____ young chef from Paris. Her new menu has already attracted many food critics.",
    "options": [
      "talented",
      "boring",
      "lazy",
      "careless"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "The marketing team needs _____ ideas for the new advertisement. Customers are tired of seeing the same old commercials.",
    "options": [
      "ordinary",
      "boring",
      "careless",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Peter is a _____ employee who often stays late. His manager recommended him for a promotion last month.",
    "options": [
      "lazy",
      "careless",
      "hardworking",
      "rude"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The new software engineer is extremely _____ and learns quickly. She solved a problem that confused the team for weeks.",
    "options": [
      "intelligent",
      "foolish",
      "careless",
      "lazy"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "It was very _____ of you to help me carry these heavy boxes. I could not have moved them by myself.",
    "options": [
      "rude",
      "selfish",
      "kind",
      "impolite"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The _____ firefighter entered the burning warehouse to rescue a worker. She was given an award by the city mayor.",
    "options": [
      "shy",
      "brave",
      "nervous",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The bride wore an _____ white dress at the wedding reception. Every guest said she looked beautiful and graceful.",
    "options": [
      "messy",
      "noisy",
      "casual",
      "elegant"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Many employees must _____ for their elderly parents after work. The company now offers flexible hours to help them.",
    "options": [
      "look",
      "care",
      "take",
      "mind"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The government will _____ women who want to start their own businesses. It is offering low-interest loans and free training.",
    "options": [
      "support",
      "refuse",
      "ignore",
      "oppose"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Ms. Wu was chosen to _____ the new sales team in Asia. She has ten years of experience in the region.",
    "options": [
      "follow",
      "obey",
      "attend",
      "lead"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Mrs. Ho will _____ a workshop on public speaking next Tuesday. All new staff members are encouraged to attend.",
    "options": [
      "learn",
      "study",
      "teach",
      "borrow"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "After her children started school, Anna decided to _____ again. She found a job at a nearby accounting firm.",
    "options": [
      "work",
      "retire",
      "resign",
      "rest"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Our team worked overtime to _____ its sales target this quarter. The director thanked everyone at Monday's meeting.",
    "options": [
      "lose",
      "miss",
      "achieve",
      "forget"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The speaker accepted the criticism _____ and thanked the audience. Her calm reply impressed everyone in the conference room.",
    "options": [
      "rudely",
      "gracefully",
      "angrily",
      "carelessly"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "Sarah walked onto the stage and spoke _____ to the investors. She did not look at her notes even once.",
    "options": [
      "nervously",
      "rudely",
      "slowly",
      "confidently"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The new manager _____ showed us the award her store had won. It was the best-performing branch in the country.",
    "options": [
      "sadly",
      "proudly",
      "angrily",
      "nervously"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "Ms. Yang invested her savings _____ over the past decade. She now owns two apartments and a small café.",
    "options": [
      "wisely",
      "foolishly",
      "carelessly",
      "sadly"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "female": {
    "pos": "adj.",
    "en_def": "relating to women or girls",
    "cn_def": "女性的；女的"
  },
  "lady": {
    "pos": "n.",
    "en_def": "a polite word for a woman",
    "cn_def": "女士；小姐"
  },
  "girl": {
    "pos": "n.",
    "en_def": "a female child or young woman",
    "cn_def": "女孩"
  },
  "mother": {
    "pos": "n.",
    "en_def": "a female parent",
    "cn_def": "母親；媽媽"
  },
  "wife": {
    "pos": "n.",
    "en_def": "the woman someone is married to",
    "cn_def": "妻子；太太"
  },
  "daughter": {
    "pos": "n.",
    "en_def": "a person's female child",
    "cn_def": "女兒"
  },
  "sister": {
    "pos": "n.",
    "en_def": "a girl or woman who has the same parents as you",
    "cn_def": "姊妹；姊姊；妹妹"
  },
  "grandmother": {
    "pos": "n.",
    "en_def": "the mother of your father or mother",
    "cn_def": "祖母；外婆"
  },
  "aunt": {
    "pos": "n.",
    "en_def": "the sister of your father or mother, or your uncle's wife",
    "cn_def": "阿姨；姑姑；嬸嬸"
  },
  "leader": {
    "pos": "n.",
    "en_def": "a person who guides or is in charge of a group",
    "cn_def": "領導者；領袖"
  },
  "professional": {
    "pos": "n.",
    "en_def": "a person who has special training and skill in a job",
    "cn_def": "專業人士"
  },
  "career": {
    "pos": "n.",
    "en_def": "the series of jobs a person does over a long time",
    "cn_def": "職業生涯；事業"
  },
  "independent": {
    "pos": "adj.",
    "en_def": "able to do things without help from other people",
    "cn_def": "獨立的；自主的"
  },
  "strong": {
    "pos": "adj.",
    "en_def": "having power, or not easily broken or upset",
    "cn_def": "堅強的；強壯的"
  },
  "confident": {
    "pos": "adj.",
    "en_def": "sure about your own abilities",
    "cn_def": "有自信的；確信的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的；有天分的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的；有創造力的"
  },
  "hardworking": {
    "pos": "adj.",
    "en_def": "putting a lot of effort into your job",
    "cn_def": "勤奮的；努力工作的"
  },
  "intelligent": {
    "pos": "adj.",
    "en_def": "able to learn and understand things quickly",
    "cn_def": "聰明的；有才智的"
  },
  "kind": {
    "pos": "adj.",
    "en_def": "friendly, helpful and caring toward other people",
    "cn_def": "親切的；仁慈的"
  },
  "brave": {
    "pos": "adj.",
    "en_def": "willing to do dangerous or difficult things without fear",
    "cn_def": "勇敢的"
  },
  "elegant": {
    "pos": "adj.",
    "en_def": "beautiful and graceful in style",
    "cn_def": "優雅的；高雅的"
  },
  "stylish": {
    "pos": "adj.",
    "en_def": "fashionable and attractive",
    "cn_def": "時髦的；有型的"
  },
  "care": {
    "pos": "v.",
    "en_def": "to look after someone who needs help",
    "cn_def": "照顧（常用 care for）"
  },
  "support": {
    "pos": "v.",
    "en_def": "to help someone, often with money, time or encouragement",
    "cn_def": "支持；資助"
  },
  "lead": {
    "pos": "v.",
    "en_def": "to be in charge of a group or activity",
    "cn_def": "帶領；領導"
  },
  "teach": {
    "pos": "v.",
    "en_def": "to give lessons or show someone how to do something",
    "cn_def": "教；教導"
  },
  "work": {
    "pos": "v.",
    "en_def": "to do a job, especially to earn money",
    "cn_def": "工作；上班"
  },
  "achieve": {
    "pos": "v.",
    "en_def": "to succeed in doing something after trying hard",
    "cn_def": "達成；實現"
  },
  "gracefully": {
    "pos": "adv.",
    "en_def": "in a calm, polite and attractive way",
    "cn_def": "優雅地；得體地"
  },
  "confidently": {
    "pos": "adv.",
    "en_def": "in a way that shows you are sure of yourself",
    "cn_def": "有自信地"
  },
  "proudly": {
    "pos": "adv.",
    "en_def": "in a way that shows you feel pleased about something you did",
    "cn_def": "自豪地；驕傲地"
  },
  "wisely": {
    "pos": "adv.",
    "en_def": "in a way that shows good judgment",
    "cn_def": "明智地"
  }
};

const EXTRA_GLOSSES = {};
