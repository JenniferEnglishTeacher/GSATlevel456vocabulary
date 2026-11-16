// Topic 192 Quiz Data: Intelligent Person 聰明的人
// Source word list: https://www.examword.com/group-topic/intelligent-person — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T192 - Intelligent Person 聰明的人",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "smart",
    "pos": "adj.",
    "cn_def": "聰明的；精明的",
    "en_def": "able to learn and understand things quickly",
    "sentence": "A: Why did the manager decide to give the new marketing project to Kevin instead of one of the senior staff members last week? B: She thinks he is a very {{BLANK}} young man, because he solved the customer database problem in two days and also found a way to cut our printing costs.",
    "cn": "A：為什麼經理上週決定把新的行銷專案交給凱文，而不是交給資深員工？ B：她認為他是個非常【聰明】的年輕人，因為他兩天內就解決了客戶資料庫的問題，還找到了減少印刷成本的方法。"
  },
  {
    "word": "bright",
    "pos": "adj.",
    "cn_def": "聰明的；機靈的",
    "en_def": "intelligent and quick to learn",
    "sentence": "A: How are the summer interns doing in the accounting department so far, and are any of them ready to help with the monthly reports? B: Most of them are still learning, but Amy is especially {{BLANK}}, so she understood our software after one training session and is already checking invoices on her own.",
    "cn": "A：會計部的暑期實習生目前表現如何？有沒有人已經可以幫忙做月報了？ B：大部分還在學習中，但艾咪特別【聰明】，她上過一次訓練課就懂了我們的軟體，現在已經能自己核對發票了。"
  },
  {
    "word": "clever",
    "pos": "adj.",
    "cn_def": "聰明的；巧妙的",
    "en_def": "quick at learning and good at finding new ideas",
    "sentence": "A: How did your team manage to finish the trade show booth so cheaply when the budget was cut by almost half this year? B: Our designer came up with a {{BLANK}} idea, so we reused the old display boards, painted them with the new company colors, and borrowed lights from the training room.",
    "cn": "A：今年預算被砍了將近一半，你們團隊是怎麼用這麼少的錢完成展覽攤位的？ B：我們的設計師想出了一個【巧妙的】點子，我們重複利用舊的展示板，漆上公司的新顏色，還向訓練教室借了燈。"
  },
  {
    "word": "wise",
    "pos": "adj.",
    "cn_def": "有智慧的；明智的",
    "en_def": "able to make good decisions because of experience and knowledge",
    "sentence": "A: Should I accept the job offer from the startup right away, or should I wait until my current company announces this year's promotions next month? B: I think it would be {{BLANK}} to wait a few weeks, because you can compare both offers carefully and you won't lose the bonus you have already earned here.",
    "cn": "A：我應該馬上接受新創公司的工作邀約，還是等到現在的公司下個月宣布今年的升遷名單？ B：我覺得等幾個星期是【明智的】，因為你可以仔細比較兩邊的條件，也不會失去你在這裡已經賺到的獎金。"
  },
  {
    "word": "knowledgeable",
    "pos": "adj.",
    "cn_def": "知識豐富的；很懂的",
    "en_def": "knowing a lot about a subject",
    "sentence": "A: Who should we ask to lead the workshop on international shipping rules for the new sales staff next Thursday afternoon? B: Mr. Chen is very {{BLANK}} about customs and import taxes, since he worked at a logistics company in Singapore for ten years before he joined our firm.",
    "cn": "A：下週四下午給新業務人員上的國際運輸規定工作坊，我們應該請誰來帶？ B：陳先生對海關和進口稅非常【了解】，因為他加入我們公司之前，在新加坡的一家物流公司工作了十年。"
  },
  {
    "word": "learned",
    "pos": "adj.",
    "cn_def": "有學問的；博學的",
    "en_def": "having a lot of knowledge from many years of study",
    "sentence": "A: Why is the university library inviting that elderly professor to give the opening speech at the history conference this weekend? B: She is a {{BLANK}} woman who has studied ancient trade routes for over forty years, so many researchers and students are traveling from other cities just to hear her talk.",
    "cn": "A：為什麼大學圖書館邀請那位年長的教授在這個週末的歷史研討會上致開幕詞？ B：她是一位【博學的】女士，研究古代貿易路線超過四十年，所以很多研究人員和學生特地從其他城市來聽她演講。"
  },
  {
    "word": "educated",
    "pos": "adj.",
    "cn_def": "受過教育的",
    "en_def": "having received a good education",
    "sentence": "A: What kind of customers usually buy the expensive business magazines that we sell in the airport bookstore near the departure gates? B: Most of them are highly {{BLANK}} professionals who travel for work often, so they want detailed articles about finance and technology to read during their long flights.",
    "cn": "A：通常是哪一類顧客會買我們在登機門附近機場書店賣的那些昂貴商業雜誌？ B：大多是經常出差、受過高等【教育】的專業人士，所以他們想在長途飛行中閱讀關於金融和科技的深入文章。"
  },
  {
    "word": "intellectual",
    "pos": "adj.",
    "cn_def": "智力的；知性的",
    "en_def": "relating to the ability to think and understand serious ideas",
    "sentence": "A: Why do so many employees enjoy the monthly book club that the human resources department started in the staff lounge last spring? B: It gives them an {{BLANK}} challenge outside their daily tasks, because they discuss difficult ideas, share different opinions, and practice explaining their thoughts clearly in English.",
    "cn": "A：為什麼這麼多員工喜歡人資部去年春天在員工休息室開辦的每月讀書會？ B：它在日常工作之外給了他們【智力上的】挑戰，因為他們可以討論困難的觀念、分享不同的意見，並練習用英文清楚表達想法。"
  },
  {
    "word": "genius",
    "pos": "n.",
    "cn_def": "天才",
    "en_def": "a person who is extremely intelligent or skilled",
    "sentence": "A: Have you heard that the young engineer in our design team fixed the factory's broken robot arm in just one afternoon yesterday? B: Yes, everyone is calling him a {{BLANK}}, because the outside repair company said it would take two weeks and cost us thousands of dollars in lost production.",
    "cn": "A：你聽說了嗎？我們設計團隊那位年輕工程師昨天只花一個下午就修好了工廠壞掉的機械手臂。 B：聽說了，大家都叫他【天才】，因為外面的維修公司說要花兩個星期，還會讓我們損失好幾千元的產量。"
  },
  {
    "word": "prodigy",
    "pos": "n.",
    "cn_def": "神童；奇才",
    "en_def": "a young person who has a very great natural ability",
    "sentence": "A: Is it true that the pianist performing at our company's anniversary dinner on Friday night is only twelve years old? B: Yes, she is a real child {{BLANK}} who started playing at three, and she has already won several international competitions in Vienna and Tokyo, so the tickets sold out quickly.",
    "cn": "A：在我們公司週五晚上週年晚宴表演的鋼琴家真的只有十二歲嗎？ B：是的，她是真正的【神童】，三歲就開始彈琴，已經在維也納和東京贏得好幾項國際比賽，所以票很快就賣完了。"
  },
  {
    "word": "expert",
    "pos": "n.",
    "cn_def": "專家",
    "en_def": "a person with special skill or knowledge in a certain area",
    "sentence": "A: Our online store was attacked by hackers again last night, so what should we do before the big holiday sale begins next Monday? B: We should hire a security {{BLANK}} to check our whole system, because one more attack could close the website and make customers lose trust in us.",
    "cn": "A：我們的網路商店昨晚又被駭客攻擊了，在下週一大型假期特賣開始前我們該怎麼辦？ B：我們應該請一位資安【專家】檢查整個系統，因為再被攻擊一次，網站可能就得關閉，顧客也會對我們失去信任。"
  },
  {
    "word": "scholar",
    "pos": "n.",
    "cn_def": "學者",
    "en_def": "a person who studies a subject very deeply, often at a university",
    "sentence": "A: Who wrote the introduction to the new guidebook about the old temples and markets that our travel agency is selling this year? B: A well-known {{BLANK}} from National Taiwan University wrote it, since she has spent many years researching local history and reading old government records about the city.",
    "cn": "A：我們旅行社今年在賣的那本介紹老廟宇和市場的新旅遊書，序言是誰寫的？ B：是一位台灣大學的知名【學者】寫的，因為她花了很多年研究地方歷史，閱讀這座城市的舊政府紀錄。"
  },
  {
    "word": "thinker",
    "pos": "n.",
    "cn_def": "思想家；思考者",
    "en_def": "a person who thinks deeply or in a special way",
    "sentence": "A: Why did the board invite that famous author to speak at our annual leadership meeting at the hotel conference center next month? B: He is an original {{BLANK}} whose books about teamwork changed how many companies train managers, so the directors hope he will give us fresh ideas for the future.",
    "cn": "A：為什麼董事會邀請那位知名作家在下個月飯店會議中心舉行的年度領導會議上演講？ B：他是一位有原創性的【思想家】，他關於團隊合作的書改變了許多公司培訓主管的方式，所以董事們希望他能為我們的未來帶來新想法。"
  },
  {
    "word": "analytical",
    "pos": "adj.",
    "cn_def": "分析的；善於分析的",
    "en_def": "using careful and logical study of information",
    "sentence": "A: What skills are you looking for in the person who will replace Linda in the finance department after she retires in December? B: We need someone with strong {{BLANK}} skills, because the job involves studying sales figures every week, finding problems in the budget, and writing clear reports for the directors.",
    "cn": "A：琳達十二月退休後，你們要找什麼樣技能的人來接替她在財務部的工作？ B：我們需要有很強【分析】能力的人，因為這份工作要每週研究銷售數字、找出預算中的問題，並為董事們寫清楚的報告。"
  },
  {
    "word": "logical",
    "pos": "adj.",
    "cn_def": "合邏輯的；合理的",
    "en_def": "reasonable and based on clear thinking",
    "sentence": "A: Why did the committee choose to move the training center to the building next to the train station instead of the cheaper one outside the city? B: It was the most {{BLANK}} choice, because most of our trainees come by train, and they would waste a lot of time and money traveling to the countryside.",
    "cn": "A：為什麼委員會選擇把訓練中心搬到火車站旁邊的大樓，而不是城外比較便宜的那棟？ B：那是最【合理的】選擇，因為大部分學員都搭火車來，如果要去郊區會浪費很多時間和金錢。"
  },
  {
    "word": "perceptive",
    "pos": "adj.",
    "cn_def": "有洞察力的；敏銳的",
    "en_def": "good at noticing and understanding things that others miss",
    "sentence": "A: How did the new sales manager know that the client was unhappy with our proposal even though he smiled during the whole meeting? B: She is very {{BLANK}}, so she noticed that he kept checking his watch and asking about prices, and she quickly offered him a better payment plan.",
    "cn": "A：客戶整場會議都在微笑，新業務經理怎麼知道他對我們的提案不滿意？ B：她非常【敏銳】，注意到他一直看手錶又一直問價格，所以她很快就提供他更好的付款方案。"
  },
  {
    "word": "observant",
    "pos": "adj.",
    "cn_def": "觀察力敏銳的",
    "en_def": "good at noticing small details",
    "sentence": "A: How was the missing package finally found at the warehouse after the delivery company had searched for it for three days? B: One {{BLANK}} worker noticed that a box with the wrong label was sitting behind the loading door, so he checked the tracking number and found that it was ours.",
    "cn": "A：貨運公司找了三天，那個遺失的包裹最後是怎麼在倉庫找到的？ B：一位【觀察力敏銳的】員工注意到裝卸門後面有個貼錯標籤的箱子，他查了追蹤號碼，發現就是我們的。"
  },
  {
    "word": "insightful",
    "pos": "adj.",
    "cn_def": "有深刻見解的",
    "en_def": "showing a clear and deep understanding of something",
    "sentence": "A: Did you find the speaker's presentation about online shopping trends useful for planning our marketing campaign for next year? B: Yes, it was very {{BLANK}}, because she explained why young customers prefer mobile payments and showed us how small shops can compete with large websites by offering faster delivery.",
    "cn": "A：你覺得那位講者關於網購趨勢的簡報，對規劃我們明年的行銷活動有幫助嗎？ B：有，內容非常【有見地】，她解釋了年輕顧客為什麼偏好行動支付，也告訴我們小商店如何靠更快的配送和大型網站競爭。"
  },
  {
    "word": "astute",
    "pos": "adj.",
    "cn_def": "精明的；機敏的",
    "en_def": "clever at understanding situations and using them to get an advantage",
    "sentence": "A: How did your uncle's small coffee company grow so quickly when so many other cafés in the neighborhood closed during the economic slowdown? B: He is an {{BLANK}} businessman, so he bought coffee beans cheaply before prices went up and started selling packaged drinks to office buildings nearby.",
    "cn": "A：經濟不景氣時附近很多咖啡店都倒了，你叔叔的小咖啡公司怎麼還能成長得這麼快？ B：他是個【精明的】生意人，在價格上漲前就便宜買進咖啡豆，還開始賣包裝飲料給附近的辦公大樓。"
  },
  {
    "word": "sharp",
    "pos": "adj.",
    "cn_def": "敏銳的；機靈的",
    "en_def": "quick to notice and understand things",
    "sentence": "A: Is your grandfather still helping at the family's hardware store even though he is almost eighty years old this year? B: Yes, his mind is still very {{BLANK}}, so he remembers the price of every item, catches mistakes on the receipts, and gives customers excellent advice about tools.",
    "cn": "A：你爺爺今年都快八十歲了，還在家裡的五金行幫忙嗎？ B：是啊，他的頭腦還是很【敏銳】，記得每樣商品的價格，能抓出收據上的錯誤，還會給顧客很棒的工具建議。"
  },
  {
    "word": "brilliant",
    "pos": "adj.",
    "cn_def": "傑出的；絕妙的",
    "en_def": "extremely clever or skillful",
    "sentence": "A: What did the clients say after they watched the video advertisement that our team made for their new line of sports shoes? B: They said it was {{BLANK}}, because the story was exciting, the music fit perfectly, and they believe it will attract many young runners to their stores this summer.",
    "cn": "A：客戶看完我們團隊為他們新系列運動鞋製作的影片廣告後怎麼說？ B：他們說拍得【太出色了】，因為故事很精彩、音樂很搭，他們相信今年夏天會吸引很多年輕跑者到店裡。"
  },
  {
    "word": "gifted",
    "pos": "adj.",
    "cn_def": "有天賦的",
    "en_def": "having a natural ability or talent",
    "sentence": "A: Why does the company always ask Mark to give the speeches when we meet important investors at the annual business conference? B: He is a {{BLANK}} speaker who can explain complicated numbers in simple words, and his friendly jokes help the audience relax and listen more carefully.",
    "cn": "A：為什麼公司在年度商務會議上見重要投資人時，總是請馬克來演講？ B：他是個【有天分的】演講者，能用簡單的話解釋複雜的數字，他親切的笑話也讓聽眾放鬆，更專心聆聽。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的",
    "en_def": "having a special natural skill or ability",
    "sentence": "A: Who designed the beautiful new logo and posters for the coffee shop that just opened on the first floor of our office building? B: A {{BLANK}} graphic designer from our marketing department did them in her free time, and now several other shop owners want to hire her as well.",
    "cn": "A：我們辦公大樓一樓剛開的那家咖啡店，漂亮的新標誌和海報是誰設計的？ B：是我們行銷部一位【有才華的】平面設計師利用空閒時間做的，現在還有好幾位店家老闆也想請她設計。"
  },
  {
    "word": "innovative",
    "pos": "adj.",
    "cn_def": "創新的",
    "en_def": "using new methods or ideas",
    "sentence": "A: Why are so many investors interested in that small technology company that only started three years ago in Hsinchu? B: It has developed an {{BLANK}} battery that charges phones in five minutes, and several large electronics brands are already discussing contracts to use it in their new products.",
    "cn": "A：為什麼這麼多投資人對那家三年前才在新竹成立的小科技公司感興趣？ B：它開發出一種【創新的】電池，五分鐘就能把手機充飽電，好幾個大型電子品牌已經在洽談合約，要用在他們的新產品上。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創造力的；有創意的",
    "en_def": "good at making new and original things or ideas",
    "sentence": "A: What kind of person are you hoping to hire for the open position in the advertising department after the interviews next week? B: We want someone {{BLANK}} who can come up with fresh ideas for social media campaigns, design attractive images, and write short messages that customers will remember.",
    "cn": "A：下週面試之後，你們希望為廣告部的空缺錄用什麼樣的人？ B：我們想要【有創意的】人，能為社群媒體活動想出新點子、設計吸引人的圖片，並寫出讓顧客記得住的簡短文案。"
  },
  {
    "word": "rational",
    "pos": "adj.",
    "cn_def": "理性的",
    "en_def": "based on reason and facts, not on feelings",
    "sentence": "A: Why didn't the manager get angry when the client canceled the big order at the last minute on Friday afternoon? B: He always tries to make {{BLANK}} decisions instead of emotional ones, so he calmly checked the contract, calculated our losses, and called other customers to sell the extra goods.",
    "cn": "A：週五下午客戶在最後一刻取消大訂單時，經理為什麼沒有生氣？ B：他總是盡量做【理性的】決定而不是情緒化的決定，所以他冷靜地檢查合約、計算損失，並打電話給其他客戶把多出來的貨賣掉。"
  },
  {
    "word": "thoughtful",
    "pos": "adj.",
    "cn_def": "深思熟慮的；體貼的",
    "en_def": "thinking carefully, or showing care for other people's needs",
    "sentence": "A: Did you read the report that Jenny wrote about improving customer service at our branch offices before the meeting this morning? B: Yes, it was a very {{BLANK}} report, because she clearly considered the problems from both the staff's and the customers' points of view before she offered any suggestions.",
    "cn": "A：今天早上開會前，你有讀珍妮寫的那份改善分公司客戶服務的報告嗎？ B：有，那是一份非常【深思熟慮的】報告，因為她在提出任何建議之前，顯然都從員工和顧客兩方的角度考慮過問題。"
  },
  {
    "word": "resourceful",
    "pos": "adj.",
    "cn_def": "足智多謀的；機智的",
    "en_def": "good at finding quick and clever ways to solve problems",
    "sentence": "A: How did the tour guide handle the situation when the bus broke down on the mountain road during the company trip last weekend? B: She was very {{BLANK}}, because she called a local taxi company, arranged lunch at a nearby farm, and kept everyone happy until a new bus arrived.",
    "cn": "A：上週末公司旅遊時，巴士在山路上拋錨，導遊是怎麼處理的？ B：她非常【機智】，打電話叫當地的計程車行，安排大家在附近農場吃午餐，讓每個人都開開心心地等到新巴士來。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的；能夠的",
    "en_def": "having the ability to do something well",
    "sentence": "A: Do you think the new assistant can manage the visitor schedule by herself while I am away at the conference in Seoul next week? B: Don't worry, she is fully {{BLANK}} of handling it, because she organized all the meetings for the sales team last month without a single mistake.",
    "cn": "A：下週我去首爾開會時，你覺得新助理能自己處理訪客行程嗎？ B：別擔心，她完全【有能力】處理，因為她上個月幫業務團隊安排所有會議，一個錯誤都沒有。"
  },
  {
    "word": "competent",
    "pos": "adj.",
    "cn_def": "能勝任的；稱職的",
    "en_def": "having enough skill or knowledge to do a job well",
    "sentence": "A: Are you satisfied with the new accountant whom the agency sent to help us during the busy tax season this spring? B: Yes, he is very {{BLANK}}, because he finished checking all the receipts on time, answered our questions clearly, and found two errors that saved us money.",
    "cn": "A：今年春天報稅旺季時仲介派來幫忙的新會計，你們滿意嗎？ B：滿意，他非常【稱職】，準時核對完所有收據，清楚回答我們的問題，還找出兩個錯誤幫我們省了錢。"
  },
  {
    "word": "erudite",
    "pos": "adj.",
    "cn_def": "博學的；學識淵博的",
    "en_def": "having or showing great knowledge from a lot of reading",
    "sentence": "A: Why did the publishing company choose that retired professor to write the introduction for the new collection of classic novels? B: She is an {{BLANK}} writer who has read thousands of books in several languages, so readers trust her to explain the history and meaning of each story.",
    "cn": "A：出版社為什麼選那位退休教授為新的經典小說選集寫導讀？ B：她是一位【學識淵博的】作家，讀過好幾種語言的數千本書，所以讀者相信她能解說每個故事的歷史和意義。"
  },
  {
    "word": "brainy",
    "pos": "adj.",
    "cn_def": "頭腦好的；聰明的（口語）",
    "en_def": "very clever (informal)",
    "sentence": "A: Who helped you fix the complicated formulas in the sales spreadsheet before the deadline yesterday afternoon? B: My {{BLANK}} cousin who studies math at the university came over after class, and she found the errors in ten minutes and showed me a faster way to calculate the totals.",
    "cn": "A：昨天下午截止前，是誰幫你修好銷售試算表裡那些複雜公式的？ B：我那個在大學讀數學、【頭腦很好的】表妹下課後過來，她十分鐘就找出錯誤，還教我更快算總數的方法。"
  },
  {
    "word": "savvy",
    "pos": "adj.",
    "cn_def": "精明的；在行的",
    "en_def": "having practical knowledge and good judgment about something",
    "sentence": "A: Why does the company want young employees to manage its new online store and social media pages this year? B: Many of them are very tech-{{BLANK}}, so they understand how customers shop on their phones and can quickly answer questions and post attractive videos about our products.",
    "cn": "A：為什麼公司今年想讓年輕員工管理新的網路商店和社群媒體專頁？ B：他們很多人都很【精通】科技，了解顧客如何用手機購物，也能很快回覆問題並發布吸引人的產品影片。"
  },
  {
    "word": "sensible",
    "pos": "adj.",
    "cn_def": "明智的；合理的",
    "en_def": "reasonable and showing good judgment",
    "sentence": "A: The weather report says a typhoon may hit the city on Thursday, so should we still hold the outdoor product launch in the park? B: I think the {{BLANK}} thing is to move the event indoors to the hotel ballroom, because we cannot risk the guests' safety or damage to the expensive equipment.",
    "cn": "A：氣象報告說週四颱風可能會侵襲本市，我們還要在公園舉辦戶外產品發表會嗎？ B：我認為【明智的】做法是把活動移到飯店宴會廳室內舉行，因為我們不能拿賓客的安全或昂貴設備的損壞冒險。"
  }
];

const MCQS = [
  {
    "q": "The new forklift is _____ of lifting two tons at once. Warehouse staff can now move heavy goods much faster.",
    "options": [
      "capable",
      "honest",
      "empty",
      "cheerful"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Our tour guide is very _____ about the city's history. She answered every question the visiting clients asked during the walk.",
    "options": [
      "noisy",
      "empty",
      "knowledgeable",
      "expensive"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Applicants must be _____ in both English and Japanese. The position requires daily communication with clients in Tokyo and London.",
    "options": [
      "hungry",
      "competent",
      "crowded",
      "tired"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The violinist was a child _____ who performed with an orchestra at age eight. She will play at the company's gala dinner.",
    "options": [
      "customer",
      "receipt",
      "tenant",
      "prodigy"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "The new phone is designed for tech-_____ customers who want advanced features. It will be released in stores next month.",
    "options": [
      "angry",
      "empty",
      "savvy",
      "hungry"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "Mr. Lin is _____ with an excellent memory for names. He greets every regular customer at the hotel personally.",
    "options": [
      "gifted",
      "crowded",
      "broken",
      "expensive"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Everyone called the engineer a _____ after she redesigned the engine in one week. Her idea cut fuel costs by half.",
    "options": [
      "tenant",
      "receipt",
      "passenger",
      "genius"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The bank hired a leading _____ in cybersecurity to protect its online accounts. He will review the whole system next week.",
    "options": [
      "customer",
      "expert",
      "visitor",
      "tourist"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Professor Wu is a respected _____ of Asian economic history. She has published twelve books on trade in the region.",
    "options": [
      "scholar",
      "cashier",
      "plumber",
      "receptionist"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The author is known as a deep _____ on leadership and teamwork. His latest book has become popular with managers.",
    "options": [
      "sleeper",
      "driver",
      "thinker",
      "swimmer"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The candidate showed strong _____ skills during the data test. She quickly found patterns in the complicated sales figures.",
    "options": [
      "sleepy",
      "analytical",
      "hungry",
      "empty"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "There is a simple, _____ explanation for the drop in sales. Our biggest store was closed for repairs in March.",
    "options": [
      "hungry",
      "sleepy",
      "noisy",
      "logical"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The consultant made a very _____ comment about our pricing problems. Her observation helped the team see the real issue.",
    "options": [
      "sleepy",
      "wet",
      "perceptive",
      "hungry"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The _____ cashier noticed that the banknote looked fake. She called the manager before the customer left the store.",
    "options": [
      "observant",
      "wooden",
      "invisible",
      "empty"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The keynote speaker's analysis of online shopping trends was very _____. Many attendees took notes and asked questions afterward.",
    "options": [
      "hungry",
      "broken",
      "sleepy",
      "insightful"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "Ms. Park is a very _____ investor who bought the land before prices rose. She sold it last year for triple the cost.",
    "options": [
      "foolish",
      "astute",
      "sleepy",
      "clumsy"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Using recycled boxes for the display was a _____ idea. It saved money and impressed the environmentally friendly clients.",
    "options": [
      "brilliant",
      "terrible",
      "boring",
      "useless"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The hotel hired a _____ young chef from Paris for its new restaurant. Her dishes have already received excellent reviews.",
    "options": [
      "lazy",
      "rude",
      "talented",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 22
  },
  {
    "q": "The company won an award for its _____ design of a folding electric scooter. No other product on the market works this way.",
    "options": [
      "ordinary",
      "innovative",
      "old-fashioned",
      "common"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The advertising agency is looking for _____ writers with fresh ideas. Applicants should send three samples of original work.",
    "options": [
      "dull",
      "lazy",
      "absent",
      "creative"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The manager stayed calm and made a _____ decision based on the facts. He did not let his anger affect the outcome.",
    "options": [
      "emotional",
      "angry",
      "rational",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "It was _____ of Ms. Chen to send flowers to the injured worker. Everyone in the office appreciated her kindness.",
    "options": [
      "thoughtful",
      "rude",
      "careless",
      "selfish"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "When the projector broke, the _____ trainer used a whiteboard and printed handouts instead. The workshop continued without any delay.",
    "options": [
      "helpless",
      "lazy",
      "confused",
      "resourceful"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Wearing comfortable shoes is _____ advice for visitors touring the large factory. The walk through the building takes nearly two hours.",
    "options": [
      "foolish",
      "sensible",
      "silly",
      "useless"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "Buying the office building instead of renting it was a _____ investment. Its value has doubled in just five years.",
    "options": [
      "smart",
      "foolish",
      "terrible",
      "useless"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "It would be _____ to back up all files before the system update tonight. Some data could be lost during the process.",
    "options": [
      "foolish",
      "pointless",
      "wise",
      "harmful"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "Several _____ students from the local university will join our summer internship program. They were chosen from over three hundred applicants.",
    "options": [
      "lazy",
      "bright",
      "careless",
      "slow"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The shop owner found a _____ way to attract customers on rainy days. She offered free umbrellas with every purchase.",
    "options": [
      "boring",
      "useless",
      "foolish",
      "clever"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "The company protects its _____ property by registering patents in every country. This prevents competitors from copying its designs.",
    "options": [
      "emotional",
      "empty",
      "intellectual",
      "careless"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "The city attracts highly _____ workers because of its many universities. Technology firms find it easy to hire skilled staff there.",
    "options": [
      "educated",
      "crowded",
      "broken",
      "hungry"
    ],
    "answer": 0,
    "vocabIndex": 6
  }
];

const LOOKUP = {
  "smart": {
    "pos": "adj.",
    "en_def": "able to learn and understand things quickly",
    "cn_def": "聰明的；精明的"
  },
  "bright": {
    "pos": "adj.",
    "en_def": "intelligent and quick to learn",
    "cn_def": "聰明的；機靈的"
  },
  "clever": {
    "pos": "adj.",
    "en_def": "quick at learning and good at finding new ideas",
    "cn_def": "聰明的；巧妙的"
  },
  "wise": {
    "pos": "adj.",
    "en_def": "able to make good decisions because of experience and knowledge",
    "cn_def": "有智慧的；明智的"
  },
  "knowledgeable": {
    "pos": "adj.",
    "en_def": "knowing a lot about a subject",
    "cn_def": "知識豐富的；很懂的"
  },
  "learned": {
    "pos": "adj.",
    "en_def": "having a lot of knowledge from many years of study",
    "cn_def": "有學問的；博學的"
  },
  "educated": {
    "pos": "adj.",
    "en_def": "having received a good education",
    "cn_def": "受過教育的"
  },
  "intellectual": {
    "pos": "adj.",
    "en_def": "relating to the ability to think and understand serious ideas",
    "cn_def": "智力的；知性的"
  },
  "genius": {
    "pos": "n.",
    "en_def": "a person who is extremely intelligent or skilled",
    "cn_def": "天才"
  },
  "prodigy": {
    "pos": "n.",
    "en_def": "a young person who has a very great natural ability",
    "cn_def": "神童；奇才"
  },
  "expert": {
    "pos": "n.",
    "en_def": "a person with special skill or knowledge in a certain area",
    "cn_def": "專家"
  },
  "scholar": {
    "pos": "n.",
    "en_def": "a person who studies a subject very deeply, often at a university",
    "cn_def": "學者"
  },
  "thinker": {
    "pos": "n.",
    "en_def": "a person who thinks deeply or in a special way",
    "cn_def": "思想家；思考者"
  },
  "analytical": {
    "pos": "adj.",
    "en_def": "using careful and logical study of information",
    "cn_def": "分析的；善於分析的"
  },
  "logical": {
    "pos": "adj.",
    "en_def": "reasonable and based on clear thinking",
    "cn_def": "合邏輯的；合理的"
  },
  "perceptive": {
    "pos": "adj.",
    "en_def": "good at noticing and understanding things that others miss",
    "cn_def": "有洞察力的；敏銳的"
  },
  "observant": {
    "pos": "adj.",
    "en_def": "good at noticing small details",
    "cn_def": "觀察力敏銳的"
  },
  "insightful": {
    "pos": "adj.",
    "en_def": "showing a clear and deep understanding of something",
    "cn_def": "有深刻見解的"
  },
  "astute": {
    "pos": "adj.",
    "en_def": "clever at understanding situations and using them to get an advantage",
    "cn_def": "精明的；機敏的"
  },
  "sharp": {
    "pos": "adj.",
    "en_def": "quick to notice and understand things",
    "cn_def": "敏銳的；機靈的"
  },
  "brilliant": {
    "pos": "adj.",
    "en_def": "extremely clever or skillful",
    "cn_def": "傑出的；絕妙的"
  },
  "gifted": {
    "pos": "adj.",
    "en_def": "having a natural ability or talent",
    "cn_def": "有天賦的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a special natural skill or ability",
    "cn_def": "有才華的"
  },
  "innovative": {
    "pos": "adj.",
    "en_def": "using new methods or ideas",
    "cn_def": "創新的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at making new and original things or ideas",
    "cn_def": "有創造力的；有創意的"
  },
  "rational": {
    "pos": "adj.",
    "en_def": "based on reason and facts, not on feelings",
    "cn_def": "理性的"
  },
  "thoughtful": {
    "pos": "adj.",
    "en_def": "thinking carefully, or showing care for other people's needs",
    "cn_def": "深思熟慮的；體貼的"
  },
  "resourceful": {
    "pos": "adj.",
    "en_def": "good at finding quick and clever ways to solve problems",
    "cn_def": "足智多謀的；機智的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the ability to do something well",
    "cn_def": "有能力的；能夠的"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill or knowledge to do a job well",
    "cn_def": "能勝任的；稱職的"
  },
  "erudite": {
    "pos": "adj.",
    "en_def": "having or showing great knowledge from a lot of reading",
    "cn_def": "博學的；學識淵博的"
  },
  "brainy": {
    "pos": "adj.",
    "en_def": "very clever (informal)",
    "cn_def": "頭腦好的；聰明的（口語）"
  },
  "savvy": {
    "pos": "adj.",
    "en_def": "having practical knowledge and good judgment about something",
    "cn_def": "精明的；在行的"
  },
  "sensible": {
    "pos": "adj.",
    "en_def": "reasonable and showing good judgment",
    "cn_def": "明智的；合理的"
  }
};

const EXTRA_GLOSSES = {};
