// Topic 231 Quiz Data: Marriage 婚姻
// Source word list: https://www.examword.com/group-topic/marriage — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T231 - Marriage 婚姻",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "wedding",
    "pos": "n.",
    "cn_def": "婚禮",
    "en_def": "a ceremony at which two people get married",
    "sentence": "A: Since our manager is taking a few days off next month, do you know why she asked the team to finish the quarterly report early? B: Her younger sister's {{BLANK}} is in Kaohsiung that Saturday, and she has to help the family greet more than two hundred guests at the hotel.",
    "cn": "A：既然我們經理下個月要請幾天假，你知道她為什麼要團隊提早完成季報嗎？ B：她妹妹的【婚禮】那個星期六在高雄舉行，她得幫家人在飯店招呼兩百多位賓客。"
  },
  {
    "word": "spouse",
    "pos": "n.",
    "cn_def": "配偶",
    "en_def": "a husband or wife",
    "sentence": "A: The registration form for the company's annual dinner has a box asking about guests, so can I bring someone with me this year? B: Yes, every employee may bring a {{BLANK}} or one family member, but please write their full name so the hotel can prepare enough seats and name cards.",
    "cn": "A：公司年度晚宴的報名表上有一欄詢問來賓，那我今年可以帶人一起來嗎？ B：可以，每位員工可以帶【配偶】或一位家人，但請寫上對方全名，讓飯店能準備足夠的座位和名牌。"
  },
  {
    "word": "partner",
    "pos": "n.",
    "cn_def": "伴侶",
    "en_def": "the person you are married to or live with in a romantic relationship",
    "sentence": "A: You look tired this morning, so did something happen at home after you left the office so late last night? B: Not really, but my {{BLANK}} and I stayed up talking about whether we should move closer to the city, because our long commute is making both of us exhausted every day.",
    "cn": "A：你今天早上看起來很累，昨晚你那麼晚下班後家裡發生什麼事了嗎？ B：其實沒有，只是我和我的【伴侶】熬夜討論要不要搬到離市區近一點的地方，因為漫長的通勤讓我們兩個每天都筋疲力盡。"
  },
  {
    "word": "husband",
    "pos": "n.",
    "cn_def": "丈夫",
    "en_def": "the man someone is married to",
    "sentence": "A: I heard Ms. Lin is leaving the Taipei branch at the end of the year, so is she joining another company in the same industry? B: No, her {{BLANK}} got a new engineering job in Singapore, so she has decided to move there with him and their two children in January.",
    "cn": "A：我聽說林小姐年底要離開台北分公司，她是要去同業的另一家公司嗎？ B：不是，她【丈夫】在新加坡找到了新的工程師工作，所以她決定一月和他以及兩個孩子一起搬過去。"
  },
  {
    "word": "wife",
    "pos": "n.",
    "cn_def": "妻子",
    "en_def": "the woman someone is married to",
    "sentence": "A: Mr. Chen usually stays late to finish his reports, so why did he leave at five o'clock sharp today without saying anything? B: His {{BLANK}} is giving a piano concert at the city hall tonight, and he promised her weeks ago that he would arrive early and sit in the front row.",
    "cn": "A：陳先生通常會加班把報告做完，為什麼他今天五點一到就什麼都沒說地離開了？ B：他【妻子】今晚在市政廳舉辦鋼琴演奏會，他好幾週前就答應她會提早到場並坐在第一排。"
  },
  {
    "word": "commitment",
    "pos": "n.",
    "cn_def": "承諾；投入",
    "en_def": "a promise to stay loyal to someone or something",
    "sentence": "A: The couple in the new advertisement looks very sweet, but what message does our client actually want customers to remember after watching it? B: They want people to see that a long marriage needs real {{BLANK}}, just like their jewelry brand has served the same loyal families for over fifty years.",
    "cn": "A：新廣告裡的那對夫妻看起來很甜蜜，但我們的客戶到底希望顧客看完後記住什麼訊息？ B：他們希望大家看到長久的婚姻需要真正的【承諾】，就像他們的珠寶品牌五十多年來一直服務著同一批忠實的家庭。"
  },
  {
    "word": "relationship",
    "pos": "n.",
    "cn_def": "關係",
    "en_def": "the way two people are connected or behave toward each other",
    "sentence": "A: Why did the training company include a session about life at home in a course that is supposed to be about managing stress at work? B: Because research shows that a healthy {{BLANK}} with your partner at home can reduce stress, improve sleep, and make people much more productive at the office.",
    "cn": "A：為什麼這家培訓公司在一門講職場壓力管理的課程裡，加入一堂關於家庭生活的課？ B：因為研究顯示，在家中和伴侶維持健康的【關係】能減輕壓力、改善睡眠，並讓人在辦公室更有效率。"
  },
  {
    "word": "ceremony",
    "pos": "n.",
    "cn_def": "典禮；儀式",
    "en_def": "a formal event with special traditions, such as a wedding",
    "sentence": "A: The hotel's event manager called again this morning, so what does she need to know before she can confirm the booking for the Wang family? B: She needs to know whether the {{BLANK}} will be held in the garden or in the main hall, because the weather forecast for that weekend looks rainy.",
    "cn": "A：飯店的活動經理今天早上又打來了，她在確認王家的預訂之前需要知道什麼？ B：她需要知道【典禮】要在花園還是主廳舉行，因為那個週末的天氣預報看起來會下雨。"
  },
  {
    "word": "vows",
    "pos": "n.",
    "cn_def": "誓言；婚誓",
    "en_def": "the serious promises two people make to each other when they get married",
    "sentence": "A: Your cousin's wedding video has already been viewed thousands of times online, so what part of it made so many people want to share it? B: Most people loved the moment when the groom forgot his {{BLANK}}, laughed nervously, and then spoke from his heart about the day they first met.",
    "cn": "A：你表哥的婚禮影片在網路上已經被觀看好幾千次了，是哪個部分讓那麼多人想分享？ B：大多數人喜歡新郎忘了他的【誓言】、緊張地笑出來，然後發自內心地說起他們初次見面那天的那一刻。"
  },
  {
    "word": "engagement",
    "pos": "n.",
    "cn_def": "訂婚",
    "en_def": "an agreement to get married in the future",
    "sentence": "A: Everyone in the marketing department is smiling at Amy's desk this morning, so did she finally get that promotion she was hoping for? B: Not yet, but she just announced her {{BLANK}} to her boyfriend, and she showed us the beautiful ring he gave her during their trip to Japan last weekend.",
    "cn": "A：今天早上行銷部每個人都在艾咪的座位旁微笑，她終於得到她期待的升遷了嗎？ B：還沒，但她剛宣布和男朋友【訂婚】了，還給我們看他上週末在日本旅行時送她的漂亮戒指。"
  },
  {
    "word": "fiancé",
    "pos": "n.",
    "cn_def": "未婚夫",
    "en_def": "the man a woman has promised to marry",
    "sentence": "A: Who was the tall man waiting for Linda in the lobby after work yesterday, and why was he holding so many shopping bags? B: That was her {{BLANK}}, and they had just been to the department store together to choose gifts for the guests at their wedding next month.",
    "cn": "A：昨天下班後在大廳等琳達的那個高個子男人是誰，他為什麼提著那麼多購物袋？ B：那是她的【未婚夫】，他們剛一起去百貨公司挑選下個月婚禮要送賓客的禮物。"
  },
  {
    "word": "fiancée",
    "pos": "n.",
    "cn_def": "未婚妻",
    "en_def": "the woman a man has promised to marry",
    "sentence": "A: Peter asked to change his vacation dates twice this month, so is there a problem with his travel plans to Europe? B: Not at all, his {{BLANK}} works as a nurse, and the hospital changed her schedule, so they had to find new dates for their trip to Paris.",
    "cn": "A：彼得這個月已經兩次要求更改休假日期，他去歐洲的旅行計畫有什麼問題嗎？ B：完全沒有，他的【未婚妻】是護士，醫院調動了她的班表，所以他們得重新找去巴黎旅行的日期。"
  },
  {
    "word": "honeymoon",
    "pos": "n.",
    "cn_def": "蜜月",
    "en_def": "a holiday taken by two people just after their wedding",
    "sentence": "A: The travel agency just sent us a new brochure, so which package do you think young couples will be most interested in this spring? B: I think the five-day {{BLANK}} package to Bali will sell best, because it includes a private villa, a romantic dinner on the beach, and free airport pickup.",
    "cn": "A：旅行社剛寄來新的手冊，你覺得今年春天年輕夫妻會對哪個套裝行程最有興趣？ B：我覺得五天的峇里島【蜜月】行程會賣得最好，因為它包含私人別墅、海灘浪漫晚餐和免費機場接送。"
  },
  {
    "word": "anniversary",
    "pos": "n.",
    "cn_def": "週年紀念日",
    "en_def": "the date each year when something important happened, such as a wedding",
    "sentence": "A: The restaurant is fully booked on Friday night, so why did you insist on reserving a table for two at eight o'clock months ago? B: My parents will celebrate their thirtieth wedding {{BLANK}} that evening, and my sister and I want to surprise them with dinner at the place where they had their first date.",
    "cn": "A：那家餐廳星期五晚上全滿，你為什麼幾個月前就堅持要訂八點的兩人座？ B：我爸媽那天晚上要慶祝結婚三十【週年紀念日】，我和妹妹想在他們第一次約會的地方用晚餐給他們驚喜。"
  },
  {
    "word": "divorce",
    "pos": "n.",
    "cn_def": "離婚",
    "en_def": "the legal end of a marriage",
    "sentence": "A: The law firm on the fifth floor seems much busier than usual, so have they started taking a new type of case this year? B: Yes, they hired two lawyers who focus on family law, and they now help many clients who need advice about a {{BLANK}}, child care, and dividing property.",
    "cn": "A：五樓的律師事務所看起來比平常忙很多，他們今年開始接新類型的案件了嗎？ B：是的，他們聘請了兩位專攻家事法的律師，現在幫助很多需要【離婚】、子女照顧和財產分配方面建議的客戶。"
  },
  {
    "word": "separation",
    "pos": "n.",
    "cn_def": "分居；分開",
    "en_def": "a time when a married couple decide to live apart",
    "sentence": "A: Our new client said she needs a smaller apartment near her office, so did she explain why she is moving out of her house so suddenly? B: She told me that she and her husband have agreed on a trial {{BLANK}} for six months, so she wants a short lease instead of a long one.",
    "cn": "A：我們的新客戶說她需要一間離辦公室近的小公寓，她有解釋為什麼這麼突然要搬出自己的房子嗎？ B：她告訴我，她和她丈夫同意試著【分居】六個月，所以她想要短期租約，而不是長期的。"
  },
  {
    "word": "proposal",
    "pos": "n.",
    "cn_def": "求婚",
    "en_def": "a request to someone to marry you",
    "sentence": "A: The restaurant manager asked us to keep the corner table empty until nine tonight, so is a famous guest coming in for dinner? B: No, a young engineer is planning a surprise {{BLANK}} to his girlfriend, and he wants the waiters to bring out a cake with the ring hidden on top.",
    "cn": "A：餐廳經理要我們今晚九點前把角落那桌空著，是有名人要來吃晚餐嗎？ B：不是，一位年輕工程師正計畫給女朋友一個驚喜的【求婚】，他希望服務生端出一個上面藏著戒指的蛋糕。"
  },
  {
    "word": "romance",
    "pos": "n.",
    "cn_def": "浪漫；戀情",
    "en_def": "a feeling of love and excitement between two people",
    "sentence": "A: Sales of our candles and flowers usually go up in February, but why did they also rise so much in the middle of last summer? B: A popular TV drama about an office {{BLANK}} was on every night, and many viewers started buying gifts to surprise the people they loved.",
    "cn": "A：我們的蠟燭和花的銷售通常在二月上升，但為什麼去年仲夏也大幅增加？ B：一齣關於辦公室【戀情】的熱門電視劇每晚播出，很多觀眾開始買禮物給所愛的人驚喜。"
  },
  {
    "word": "compatibility",
    "pos": "n.",
    "cn_def": "合得來；相容性",
    "en_def": "the ability of two people to get along well together",
    "sentence": "A: The new dating app our company is developing has already attracted many investors, so what makes it different from the others on the market? B: It asks users fifty detailed questions about their habits and values, and then it gives every pair a {{BLANK}} score before they decide to meet in person.",
    "cn": "A：我們公司開發的新交友應用程式已經吸引了很多投資者，它和市面上其他的有什麼不同？ B：它會問使用者五十個關於習慣和價值觀的詳細問題，然後在他們決定見面前給每一對一個【契合度】分數。"
  },
  {
    "word": "trust",
    "pos": "n.",
    "cn_def": "信任",
    "en_def": "the belief that someone is honest and will not hurt you",
    "sentence": "A: The marriage counselor we interviewed for the magazine article gave many useful tips, so which piece of advice did you find the most helpful for readers? B: She said that {{BLANK}} is the base of every happy marriage, so couples should never keep secrets about money, work problems, or their plans for the future.",
    "cn": "A：我們為雜誌文章採訪的婚姻諮商師給了很多實用建議，你覺得哪一條對讀者最有幫助？ B：她說【信任】是每段幸福婚姻的基礎，所以夫妻絕不應該在金錢、工作問題或未來計畫上隱瞞秘密。"
  },
  {
    "word": "communication",
    "pos": "n.",
    "cn_def": "溝通",
    "en_def": "the sharing of thoughts and feelings with another person",
    "sentence": "A: Many young employees have asked about the evening workshop for married couples, so what will the speaker mainly talk about on Thursday? B: She will focus on {{BLANK}}, because she believes most arguments at home start when busy couples stop listening carefully and only talk about bills and housework.",
    "cn": "A：很多年輕員工詢問了為已婚夫妻開的晚間講座，講者星期四主要會談什麼？ B：她會著重在【溝通】，因為她認為大多數家庭爭吵都是從忙碌的夫妻不再仔細傾聽、只談帳單和家務開始的。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持",
    "en_def": "help and encouragement given to someone",
    "sentence": "A: Congratulations on finishing your MBA while working full time, but how did you manage to study every night after such long days at the office? B: Thanks, I really couldn't have done it without my wife's {{BLANK}}, because she cooked dinner, took care of our son, and encouraged me whenever I wanted to quit.",
    "cn": "A：恭喜你在全職工作的同時完成了企管碩士，但你是怎麼在辦公室忙了一整天後每晚還能讀書的？ B：謝謝，如果沒有我太太的【支持】我真的做不到，因為她煮晚餐、照顧我們的兒子，還在我想放棄時鼓勵我。"
  },
  {
    "word": "family",
    "pos": "n.",
    "cn_def": "家庭；家人",
    "en_def": "a group of people who are related, such as parents and children",
    "sentence": "A: Our human resources team is reviewing the benefits package, so which change do you think employees with young children will like the most? B: I think they will love the extra three days of {{BLANK}} leave each year, because parents often need time off when kids are sick or schools are closed.",
    "cn": "A：我們人資團隊正在檢討福利方案，你覺得有年幼孩子的員工最喜歡哪項改變？ B：我想他們會很喜歡每年額外三天的【家庭】照顧假，因為孩子生病或學校停課時，父母常常需要請假。"
  },
  {
    "word": "commit",
    "pos": "v.",
    "cn_def": "承諾；投入",
    "en_def": "to promise to stay with someone or to do something seriously",
    "sentence": "A: Jason has dated his girlfriend for six years, so why hasn't he asked her to marry him even though everyone thinks they are perfect together? B: He told me he wants to {{BLANK}} to her completely, but he would like to pay off his student loans and save money for an apartment first.",
    "cn": "A：傑森和女朋友交往六年了，雖然大家都覺得他們很登對，他為什麼還沒向她求婚？ B：他告訴我他想要完全【承諾】於她，但他想先還清學貸並存錢買公寓。"
  },
  {
    "word": "marry",
    "pos": "v.",
    "cn_def": "和……結婚",
    "en_def": "to become someone's husband or wife",
    "sentence": "A: Our wedding planning business has received more calls from foreign customers recently, so where do most of these couples come from? B: Many are from Japan and Korea, and they want to {{BLANK}} in Taiwan because the venues are beautiful, the food is excellent, and the costs are lower than at home.",
    "cn": "A：我們的婚禮規劃公司最近接到越來越多外國顧客的電話，這些情侶大多來自哪裡？ B：很多來自日本和韓國，他們想在台灣【結婚】，因為場地漂亮、食物美味，而且花費比在本國低。"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "cn_def": "慶祝",
    "en_def": "to do something enjoyable because of a special event",
    "sentence": "A: The sales team has booked the whole rooftop restaurant for Friday evening, so is there a special reason for the party this time? B: Yes, our director just got married last weekend, and the team wants to {{BLANK}} with her and her husband over dinner and live music after work.",
    "cn": "A：業務團隊把星期五晚上整個頂樓餐廳都包下來了，這次派對有什麼特別原因嗎？ B：有，我們的主管上週末剛結婚，團隊想在下班後用晚餐和現場音樂與她和她丈夫一起【慶祝】。"
  },
  {
    "word": "divorced",
    "pos": "adj.",
    "cn_def": "離婚的",
    "en_def": "no longer married because the marriage has legally ended",
    "sentence": "A: The insurance form asks about my marital status, so which box should I check if my marriage ended officially three years ago? B: You should check the box for {{BLANK}}, and you only need to add your former spouse's name if your children are still covered by the policy.",
    "cn": "A：保險表格問到我的婚姻狀態，如果我的婚姻三年前已正式結束，我該勾哪一格？ B：你應該勾【離婚】那一格，只有在你的孩子仍在保單保障範圍內時，才需要加上前配偶的名字。"
  },
  {
    "word": "married",
    "pos": "adj.",
    "cn_def": "已婚的",
    "en_def": "having a husband or wife",
    "sentence": "A: The bank is offering a new home loan for young couples, so who can actually apply for the lower interest rate this year? B: Only couples who have been {{BLANK}} for less than five years can apply, and they must show a certificate and proof that both partners have stable jobs.",
    "cn": "A：銀行為年輕夫妻推出新的房貸，今年到底誰可以申請較低的利率？ B：只有【結婚】未滿五年的夫妻可以申請，而且他們必須出示證明書以及雙方都有穩定工作的證明。"
  },
  {
    "word": "single",
    "pos": "adj.",
    "cn_def": "單身的",
    "en_def": "not married or not in a romantic relationship",
    "sentence": "A: The property agent says studio apartments near the train station are renting very quickly, so who are the main customers looking at them? B: Most of them are {{BLANK}} professionals in their twenties who work long hours downtown and want a small, quiet place close to the station.",
    "cn": "A：房仲說火車站附近的套房出租得很快，主要是哪些顧客在看？ B：大多是二十幾歲的【單身】上班族，他們在市中心長時間工作，想要一個靠近車站、小而安靜的住處。"
  },
  {
    "word": "stable",
    "pos": "adj.",
    "cn_def": "穩定的",
    "en_def": "steady and not likely to change or have problems",
    "sentence": "A: Your cousin just turned thirty, so why did she say she wants to wait a few more years before she and her boyfriend get married? B: She wants to have a {{BLANK}} income and some savings first, because she believes money problems cause many arguments between young couples.",
    "cn": "A：你表姊剛滿三十歲，為什麼她說想再等幾年才和男朋友結婚？ B：她想先有【穩定】的收入和一些積蓄，因為她認為金錢問題會造成年輕夫妻之間很多爭吵。"
  },
  {
    "word": "happy",
    "pos": "adj.",
    "cn_def": "快樂的；幸福的",
    "en_def": "feeling or showing pleasure",
    "sentence": "A: The old couple who own the bakery on our street have worked together for forty years, so what did they say is their secret? B: They said a {{BLANK}} marriage needs patience, humor, and a little time every evening to sit down together and talk about the day.",
    "cn": "A：我們這條街上開麵包店的那對老夫妻一起工作了四十年，他們說他們的秘訣是什麼？ B：他們說【幸福】的婚姻需要耐心、幽默，以及每天晚上一點時間坐下來一起聊聊這一天。"
  },
  {
    "word": "successfully",
    "pos": "adv.",
    "cn_def": "成功地",
    "en_def": "in a way that achieves the result you wanted",
    "sentence": "A: The wedding planning company had a very busy year, so how many events did the team organize without any serious problems? B: They {{BLANK}} organized more than one hundred weddings, and almost every couple left a five-star review on the company's website afterward.",
    "cn": "A：這家婚禮規劃公司今年非常忙碌，團隊在沒有重大問題的情況下籌辦了多少場活動？ B：他們【成功地】籌辦了一百多場婚禮，而且之後幾乎每對新人都在公司網站上留下五星評價。"
  },
  {
    "word": "happily",
    "pos": "adv.",
    "cn_def": "幸福地；快樂地",
    "en_def": "in a happy way",
    "sentence": "A: Didn't Mr. Lee and his wife meet at our company when they were both new employees in the accounting department? B: Yes, they met here twenty years ago, and they have been {{BLANK}} married ever since, so they still come to our company's year-end party together every year.",
    "cn": "A：李先生和他太太不是在他們都還是會計部新進員工時在我們公司認識的嗎？ B：是的，他們二十年前在這裡認識，從那以後一直【幸福地】過著婚姻生活，所以他們每年仍一起來參加公司的尾牙。"
  },
  {
    "word": "mutually",
    "pos": "adv.",
    "cn_def": "互相地；雙方地",
    "en_def": "in a way that is shared or felt by both people",
    "sentence": "A: The couple decided to close their small café after ten years, so was the decision caused by an argument between them? B: Not at all, it was a {{BLANK}} agreed decision, because both of them wanted more time with their children and a quieter life in the countryside.",
    "cn": "A：那對夫妻在十年後決定關掉他們的小咖啡館，這個決定是因為他們之間的爭吵嗎？ B：完全不是，那是【雙方】同意的決定，因為他們兩人都想多陪孩子，並在鄉下過更安靜的生活。"
  }
];

const MCQS = [
  {
    "q": "The hotel offers a special _____ package for couples. It includes the ceremony hall, dinner for one hundred guests, and a cake.",
    "options": [
      "wedding",
      "divorce",
      "separation",
      "vows"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "All employees may bring a _____ to the year-end party. Please list your guest's name on the form by Friday.",
    "options": [
      "ceremony",
      "proposal",
      "spouse",
      "honeymoon"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Ms. Wu and her business _____ have run the flower shop together for years. They also got married last spring.",
    "options": [
      "vows",
      "partner",
      "anniversary",
      "engagement"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Mrs. Huang called to say she would be late. Her _____ is driving her to the office because her car broke down.",
    "options": [
      "ceremony",
      "romance",
      "compatibility",
      "husband"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Mr. Park cannot attend the conference in Tokyo. His _____ is expecting their first baby next week.",
    "options": [
      "proposal",
      "trust",
      "wife",
      "separation"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Raising children together requires a strong _____ from both parents. Neither one can do all the work alone.",
    "options": [
      "commitment",
      "honeymoon",
      "wedding",
      "fiancée"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The two coworkers kept their _____ private for a year. Nobody in the office knew they were dating.",
    "options": [
      "anniversary",
      "vows",
      "ceremony",
      "relationship"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The wedding _____ will begin at ten o'clock in the garden. Lunch will be served in the main hall afterward.",
    "options": [
      "commitment",
      "ceremony",
      "separation",
      "communication"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The bride and groom wrote their own _____ for the wedding. Many guests were moved to tears when they spoke.",
    "options": [
      "vows",
      "fiancé",
      "divorce",
      "family"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "After a two-year _____, Jenny and Tom finally set a date. They will get married in October.",
    "options": [
      "honeymoon",
      "anniversary",
      "engagement",
      "separation"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Lisa's _____ flew in from Canada yesterday. They plan to visit wedding venues around Taipei this week.",
    "options": [
      "spouse",
      "fiancé",
      "proposal",
      "compatibility"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Kevin introduced his _____ to the team at lunch. She is a designer, and they will marry next spring.",
    "options": [
      "husband",
      "fiancé",
      "romance",
      "fiancée"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The newlyweds left for their _____ in Hawaii the day after the wedding. They will return to work in two weeks.",
    "options": [
      "engagement",
      "separation",
      "honeymoon",
      "ceremony"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The company held a party for its tenth _____ last night. The CEO thanked all staff for their hard work.",
    "options": [
      "anniversary",
      "proposal",
      "engagement",
      "honeymoon"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The couple decided to get a _____ after ten years of marriage. Their lawyer is now dividing the property.",
    "options": [
      "wedding",
      "honeymoon",
      "proposal",
      "divorce"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "After a short _____, the couple moved back in together. They said time apart helped them understand each other.",
    "options": [
      "engagement",
      "separation",
      "vows",
      "commitment"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "He hid the ring inside the dessert for his _____. She said yes before the waiter even left the table.",
    "options": [
      "proposal",
      "divorce",
      "spouse",
      "family"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The new novel is a _____ set in a busy bank. Two employees fall in love while working on a merger.",
    "options": [
      "divorce",
      "separation",
      "romance",
      "vows"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The counselor tests each couple's _____ before marriage. Shared values usually matter more than shared hobbies.",
    "options": [
      "proposal",
      "compatibility",
      "engagement",
      "ceremony"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "A good marriage is built on mutual _____. Partners should always be honest about money and plans.",
    "options": [
      "honeymoon",
      "anniversary",
      "wedding",
      "trust"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "Poor _____ is a common cause of arguments at home. Couples should talk openly about their feelings every day.",
    "options": [
      "engagement",
      "honeymoon",
      "communication",
      "proposal"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Thanks to her husband's _____, Amy returned to school. He cooked dinner and drove the kids every night.",
    "options": [
      "support",
      "divorce",
      "proposal",
      "separation"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The company offers extra leave for _____ events such as weddings. Employees should apply two weeks in advance.",
    "options": [
      "engagement",
      "romance",
      "honeymoon",
      "family"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Many young people are not ready to _____ to marriage. They prefer to focus on their careers first.",
    "options": [
      "celebrate",
      "commit",
      "marry",
      "divorce"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Daniel plans to _____ his girlfriend next summer. They have already booked a small hall near the beach.",
    "options": [
      "marry",
      "celebrate",
      "commit",
      "support"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The couple will _____ their silver anniversary in Kyoto. Their children paid for the trip as a surprise.",
    "options": [
      "marry",
      "commit",
      "celebrate",
      "trust"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Ms. Lai got _____ last year after eight years of marriage. She now raises her two children alone in Taichung.",
    "options": [
      "married",
      "divorced",
      "stable",
      "happy"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The two founders are now _____ to each other and run the bakery together. They met at a cooking school ten years ago.",
    "options": [
      "single",
      "divorced",
      "stable",
      "married"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Most _____ employees here live alone in small apartments. Some say they will marry after buying a home.",
    "options": [
      "married",
      "stable",
      "single",
      "happy"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Banks prefer customers with a _____ income when approving home loans. A long work history also helps.",
    "options": [
      "stable",
      "happy",
      "single",
      "divorced"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "wedding": {
    "pos": "n.",
    "en_def": "a ceremony at which two people get married",
    "cn_def": "婚禮"
  },
  "spouse": {
    "pos": "n.",
    "en_def": "a husband or wife",
    "cn_def": "配偶"
  },
  "partner": {
    "pos": "n.",
    "en_def": "the person you are married to or live with in a romantic relationship",
    "cn_def": "伴侶"
  },
  "husband": {
    "pos": "n.",
    "en_def": "the man someone is married to",
    "cn_def": "丈夫"
  },
  "wife": {
    "pos": "n.",
    "en_def": "the woman someone is married to",
    "cn_def": "妻子"
  },
  "commitment": {
    "pos": "n.",
    "en_def": "a promise to stay loyal to someone or something",
    "cn_def": "承諾；投入"
  },
  "relationship": {
    "pos": "n.",
    "en_def": "the way two people are connected or behave toward each other",
    "cn_def": "關係"
  },
  "ceremony": {
    "pos": "n.",
    "en_def": "a formal event with special traditions, such as a wedding",
    "cn_def": "典禮；儀式"
  },
  "vows": {
    "pos": "n.",
    "en_def": "the serious promises two people make to each other when they get married",
    "cn_def": "誓言；婚誓"
  },
  "engagement": {
    "pos": "n.",
    "en_def": "an agreement to get married in the future",
    "cn_def": "訂婚"
  },
  "fiancé": {
    "pos": "n.",
    "en_def": "the man a woman has promised to marry",
    "cn_def": "未婚夫"
  },
  "fiancée": {
    "pos": "n.",
    "en_def": "the woman a man has promised to marry",
    "cn_def": "未婚妻"
  },
  "honeymoon": {
    "pos": "n.",
    "en_def": "a holiday taken by two people just after their wedding",
    "cn_def": "蜜月"
  },
  "anniversary": {
    "pos": "n.",
    "en_def": "the date each year when something important happened, such as a wedding",
    "cn_def": "週年紀念日"
  },
  "divorce": {
    "pos": "n.",
    "en_def": "the legal end of a marriage",
    "cn_def": "離婚"
  },
  "separation": {
    "pos": "n.",
    "en_def": "a time when a married couple decide to live apart",
    "cn_def": "分居；分開"
  },
  "proposal": {
    "pos": "n.",
    "en_def": "a request to someone to marry you",
    "cn_def": "求婚"
  },
  "romance": {
    "pos": "n.",
    "en_def": "a feeling of love and excitement between two people",
    "cn_def": "浪漫；戀情"
  },
  "compatibility": {
    "pos": "n.",
    "en_def": "the ability of two people to get along well together",
    "cn_def": "合得來；相容性"
  },
  "trust": {
    "pos": "n.",
    "en_def": "the belief that someone is honest and will not hurt you",
    "cn_def": "信任"
  },
  "communication": {
    "pos": "n.",
    "en_def": "the sharing of thoughts and feelings with another person",
    "cn_def": "溝通"
  },
  "support": {
    "pos": "n.",
    "en_def": "help and encouragement given to someone",
    "cn_def": "支持"
  },
  "family": {
    "pos": "n.",
    "en_def": "a group of people who are related, such as parents and children",
    "cn_def": "家庭；家人"
  },
  "commit": {
    "pos": "v.",
    "en_def": "to promise to stay with someone or to do something seriously",
    "cn_def": "承諾；投入"
  },
  "marry": {
    "pos": "v.",
    "en_def": "to become someone's husband or wife",
    "cn_def": "和……結婚"
  },
  "celebrate": {
    "pos": "v.",
    "en_def": "to do something enjoyable because of a special event",
    "cn_def": "慶祝"
  },
  "divorced": {
    "pos": "adj.",
    "en_def": "no longer married because the marriage has legally ended",
    "cn_def": "離婚的"
  },
  "married": {
    "pos": "adj.",
    "en_def": "having a husband or wife",
    "cn_def": "已婚的"
  },
  "single": {
    "pos": "adj.",
    "en_def": "not married or not in a romantic relationship",
    "cn_def": "單身的"
  },
  "stable": {
    "pos": "adj.",
    "en_def": "steady and not likely to change or have problems",
    "cn_def": "穩定的"
  },
  "happy": {
    "pos": "adj.",
    "en_def": "feeling or showing pleasure",
    "cn_def": "快樂的；幸福的"
  },
  "successfully": {
    "pos": "adv.",
    "en_def": "in a way that achieves the result you wanted",
    "cn_def": "成功地"
  },
  "happily": {
    "pos": "adv.",
    "en_def": "in a happy way",
    "cn_def": "幸福地；快樂地"
  },
  "mutually": {
    "pos": "adv.",
    "en_def": "in a way that is shared or felt by both people",
    "cn_def": "互相地；雙方地"
  }
};

const EXTRA_GLOSSES = {};
