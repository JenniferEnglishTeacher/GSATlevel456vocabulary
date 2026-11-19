// Topic 448 Quiz Data: Writer 作家
// Source word list: https://www.examword.com/group-topic/writer — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T448 - Writer 作家",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "author",
    "pos": "n.",
    "cn_def": "作者；作家",
    "en_def": "a person who writes a book or article",
    "sentence": "A: Who is the speaker at the bookstore event this Saturday, and do we need to reserve seats for our marketing team? B: The {{BLANK}} of the best-selling business guide will talk about her new book, so I booked twenty seats and asked the store to prepare coffee for everyone.",
    "cn": "A：這週六書店活動的講者是誰？我們需要幫行銷團隊預訂座位嗎？ B：那本暢銷商業指南的【作者】會來介紹她的新書，所以我訂了二十個座位，並請書店為大家準備咖啡。"
  },
  {
    "word": "novelist",
    "pos": "n.",
    "cn_def": "小說家",
    "en_def": "a person who writes long stories (novels)",
    "sentence": "A: Why is the hotel lobby so crowded this afternoon, and are all these people waiting to check in? B: No, a well-known {{BLANK}} is signing copies of her latest mystery book there, and her fans have been standing in line since early this morning to meet her.",
    "cn": "A：今天下午飯店大廳為什麼這麼擁擠？這些人都在等著辦理入住嗎？ B：不是，一位知名的【小說家】正在那裡為她最新的推理小說簽名，她的書迷從今天一大早就開始排隊想見她。"
  },
  {
    "word": "poet",
    "pos": "n.",
    "cn_def": "詩人",
    "en_def": "a person who writes poems",
    "sentence": "A: What kind of entertainment have you planned for the company's anniversary dinner next Friday evening? B: We invited a local {{BLANK}} to read some of his short works about the city, and after that a jazz band will play while the guests enjoy their dessert.",
    "cn": "A：下週五晚上公司週年晚宴你安排了什麼娛樂節目？ B：我們邀請了一位本地【詩人】朗讀幾首他描寫這座城市的短篇作品，之後在賓客享用甜點時會有爵士樂團演奏。"
  },
  {
    "word": "journalist",
    "pos": "n.",
    "cn_def": "記者",
    "en_def": "a person who writes news for newspapers, TV, or websites",
    "sentence": "A: Why did the receptionist call the public relations department in such a hurry this morning? B: A {{BLANK}} from a national newspaper arrived without an appointment and wanted to interview our CEO about the factory closure, so the team had to prepare a short statement right away.",
    "cn": "A：今天早上接待員為什麼那麼匆忙地打電話給公關部？ B：一位全國性報紙的【記者】沒有預約就來了，想就工廠關閉一事採訪我們的執行長，所以團隊必須立刻準備一份簡短聲明。"
  },
  {
    "word": "editor",
    "pos": "n.",
    "cn_def": "編輯",
    "en_def": "a person who checks and corrects writing before it is printed",
    "sentence": "A: Has the new product catalog been sent to the printer yet, or are we still waiting for the final version? B: Not yet, because the {{BLANK}} found several spelling mistakes and wrong prices on the last few pages, so she is checking everything again before Thursday's deadline.",
    "cn": "A：新產品目錄已經送去印刷廠了嗎？還是我們還在等最終版本？ B：還沒有，因為【編輯】在最後幾頁發現了幾個拼字錯誤和錯誤的價格，所以她要在週四截止日前再全部檢查一遍。"
  },
  {
    "word": "reader",
    "pos": "n.",
    "cn_def": "讀者",
    "en_def": "a person who reads something",
    "sentence": "A: Why did the magazine decide to change the layout of its travel section starting next month? B: According to a recent survey, almost every {{BLANK}} said the pages were too crowded and hard to follow, so the design team will add bigger photos and shorter paragraphs.",
    "cn": "A：為什麼雜誌決定從下個月開始改變旅遊版的版面？ B：根據最近的一項調查，幾乎每位【讀者】都說版面太擁擠又難以閱讀，所以設計團隊會加入更大的照片和更短的段落。"
  },
  {
    "word": "story",
    "pos": "n.",
    "cn_def": "故事",
    "en_def": "a description of events, real or imagined",
    "sentence": "A: How did you persuade the investors to support our new coffee shop project during yesterday's meeting? B: I told them the {{BLANK}} of how my grandfather opened a tiny café after the war, and they loved the idea of keeping his family recipes alive.",
    "cn": "A：你在昨天的會議上是怎麼說服投資人支持我們的新咖啡店計畫的？ B：我告訴他們我祖父在戰後開了一間小咖啡館的【故事】，他們很喜歡延續他家傳食譜的這個想法。"
  },
  {
    "word": "novel",
    "pos": "n.",
    "cn_def": "小說",
    "en_def": "a long written story about imaginary people and events",
    "sentence": "A: What are you reading on the train every morning, since you always look so excited about it? B: It's a {{BLANK}} about a young woman who starts her own fashion company in Paris, and each chapter ends with a surprise, so I can't stop reading.",
    "cn": "A：你每天早上在火車上讀什麼？你看起來總是那麼興奮。 B：那是一本關於一位年輕女性在巴黎創立自己時尚公司的【小說】，每一章結尾都有驚喜，所以我停不下來。"
  },
  {
    "word": "poem",
    "pos": "n.",
    "cn_def": "詩",
    "en_def": "a piece of writing with short lines, often with rhythm",
    "sentence": "A: What are we putting inside the farewell card for our manager, who is retiring after thirty years with the company? B: Lisa wrote a short {{BLANK}} about his kindness and humor, and everyone in the department will sign their names under it before the party on Friday.",
    "cn": "A：我們要在經理的歡送卡裡放些什麼？他在公司工作了三十年即將退休。 B：Lisa寫了一首關於他的善良和幽默的短【詩】，部門裡每個人都會在週五派對前在下面簽名。"
  },
  {
    "word": "article",
    "pos": "n.",
    "cn_def": "文章",
    "en_def": "a piece of writing in a newspaper, magazine, or website",
    "sentence": "A: Why has our online store received so many new orders since last Tuesday? B: A popular business magazine published an {{BLANK}} about small companies that use recycled materials, and our handmade bags were mentioned on the first page with a link to our website.",
    "cn": "A：為什麼自從上週二以來我們的網路商店收到這麼多新訂單？ B：一本受歡迎的商業雜誌刊登了一篇關於使用回收材料的小公司的【文章】，我們的手工包包在第一頁被提到，還附上了我們網站的連結。"
  },
  {
    "word": "essay",
    "pos": "n.",
    "cn_def": "短文；論文",
    "en_def": "a short piece of writing about one subject",
    "sentence": "A: What do applicants need to send with their forms for the company's international scholarship program? B: Besides their school records, each applicant must submit a short {{BLANK}} of about five hundred words explaining their career goals and why they want to study abroad next year.",
    "cn": "A：申請公司國際獎學金計畫的人需要隨表格附上什麼？ B：除了學校成績之外，每位申請人都必須提交一篇約五百字的【短文】，說明他們的職涯目標以及明年想出國留學的原因。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "角色；人物",
    "en_def": "a person or animal in a story, film, or play",
    "sentence": "A: Why do you think the new children's TV show became so popular with families in only two months? B: The main {{BLANK}} is a funny little robot who helps people in his town solve problems, and kids love copying his voice and the way he dances.",
    "cn": "A：你覺得那個新的兒童電視節目為什麼短短兩個月就在家庭中這麼受歡迎？ B：主要【角色】是一個有趣的小機器人，他幫助鎮上的人解決問題，孩子們很喜歡模仿他的聲音和跳舞的樣子。"
  },
  {
    "word": "plot",
    "pos": "n.",
    "cn_def": "情節",
    "en_def": "the series of events in a story",
    "sentence": "A: Did you enjoy the movie that the sales team watched together after the training session last night? B: The actors were wonderful, but the {{BLANK}} was too complicated, and halfway through, most of us couldn't remember who the criminal was or why he stole the painting.",
    "cn": "A：你喜歡昨晚訓練課程結束後業務團隊一起看的那部電影嗎？ B：演員們很棒，但【情節】太複雜了，看到一半我們大多數人都記不得罪犯是誰，或他為什麼偷那幅畫。"
  },
  {
    "word": "theme",
    "pos": "n.",
    "cn_def": "主題",
    "en_def": "the main subject or idea of something",
    "sentence": "A: Have the organizers decided what the decorations will look like for this year's company party in December? B: Yes, the {{BLANK}} is \"Around the World,\" so each department will decorate a table with food, flags, and music from a different country.",
    "cn": "A：主辦單位決定今年十二月公司派對的裝飾要是什麼樣子了嗎？ B：決定了，【主題】是「環遊世界」，所以每個部門都會用來自不同國家的食物、國旗和音樂來布置一張桌子。"
  },
  {
    "word": "draft",
    "pos": "n.",
    "cn_def": "草稿",
    "en_def": "an early version of a piece of writing",
    "sentence": "A: Can I see the speech that you are planning to give at the opening ceremony of the new branch? B: Here is the first {{BLANK}}, but please don't share it yet, because the director still wants to add some numbers about sales and thank our local partners.",
    "cn": "A：我可以看看你打算在新分店開幕典禮上發表的演講稿嗎？ B：這是第一版【草稿】，但請先不要分享出去，因為主管還想加入一些銷售數字，並感謝我們的在地合作夥伴。"
  },
  {
    "word": "publish",
    "pos": "v.",
    "cn_def": "出版；發表；公布",
    "en_def": "to print or put writing online for the public to read",
    "sentence": "A: When will our company's annual report be available for shareholders and customers to read online? B: We plan to {{BLANK}} it on our website next Monday, after the accountants check the numbers and the design team finishes adding charts and photos of our new factory.",
    "cn": "A：我們公司的年度報告什麼時候可以讓股東和客戶在線上閱讀？ B：我們計畫在會計師核對完數字、設計團隊加完圖表和新工廠照片之後，於下週一在網站上【發布】。"
  },
  {
    "word": "write",
    "pos": "v.",
    "cn_def": "寫；書寫",
    "en_def": "to put words on paper or a screen",
    "sentence": "A: How should I thank the client who gave us such a large order during the trade show last week? B: You should {{BLANK}} a short, polite letter by hand and send it with a small gift, because personal messages usually make customers feel more valued than emails.",
    "cn": "A：我該怎麼感謝上週在商展上給我們那麼大一筆訂單的客戶？ B：你應該親手【寫】一封簡短有禮貌的信，並附上一份小禮物寄過去，因為個人的訊息通常比電子郵件更讓客戶感到受重視。"
  },
  {
    "word": "describe",
    "pos": "v.",
    "cn_def": "描述",
    "en_def": "to say what someone or something is like",
    "sentence": "A: Could you tell the officer at the front desk what your missing bag looks like so she can search the airport? B: Sure, I'll {{BLANK}} it in detail: it's a small black suitcase with a red name tag, and it disappeared while I was buying coffee near gate twelve.",
    "cn": "A：你可以告訴服務台的警員你遺失的包包長什麼樣子，好讓她在機場裡尋找嗎？ B：當然，我會詳細【描述】：那是一個掛著紅色名牌的黑色小行李箱，它是在我於十二號登機門附近買咖啡時不見的。"
  },
  {
    "word": "create",
    "pos": "v.",
    "cn_def": "創造；創作",
    "en_def": "to make something new",
    "sentence": "A: Why did the manager hire a new designer for the marketing department last month? B: She needs someone to {{BLANK}} eye-catching posters and short videos for our summer campaign, because our old advertisements were not attracting enough young customers to the stores.",
    "cn": "A：經理上個月為什麼替行銷部門聘請了一位新設計師？ B：她需要有人為我們的夏季活動【創作】吸睛的海報和短片，因為我們舊的廣告沒有吸引到足夠的年輕顧客到店裡。"
  },
  {
    "word": "edit",
    "pos": "v.",
    "cn_def": "編輯；剪輯",
    "en_def": "to correct or change writing, film, or video",
    "sentence": "A: The video from the product launch is almost an hour long; can we post it on social media like that? B: No, it's too long, so I'll {{BLANK}} it down to three minutes and keep only the best parts, such as the demonstration and the customers' reactions.",
    "cn": "A：產品發表會的影片將近一小時長，我們可以就這樣貼到社群媒體上嗎？ B：不行，太長了，所以我會把它【剪輯】成三分鐘，只保留最精彩的部分，像是產品示範和顧客的反應。"
  },
  {
    "word": "revise",
    "pos": "v.",
    "cn_def": "修改；修訂",
    "en_def": "to change something to make it better or more correct",
    "sentence": "A: Did the director approve the budget proposal you sent her before the weekend? B: Not completely; she asked me to {{BLANK}} the section about travel costs, because the prices of flights and hotels have gone up since we first made the plan in spring.",
    "cn": "A：主管核准你週末前寄給她的預算提案了嗎？ B：沒有完全核准；她要我【修改】差旅費用的部分，因為自從我們春天第一次擬定計畫以來，機票和飯店的價格都上漲了。"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "cn_def": "想像",
    "en_def": "to form a picture of something in your mind",
    "sentence": "A: Do you think customers will really want to buy furniture online without seeing it in a store first? B: Our new app lets them {{BLANK}} how a sofa or table would look in their own living room, so they can choose colors and sizes with more confidence.",
    "cn": "A：你認為顧客真的會願意在沒先到店裡看過的情況下就在網路上買家具嗎？ B：我們的新應用程式讓他們能【想像】沙發或桌子放在自家客廳的樣子，所以他們能更有信心地選擇顏色和尺寸。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵；啟發",
    "en_def": "to make someone want to do something good",
    "sentence": "A: Why did the school invite a former employee of our company to speak to the graduating students? B: The teachers hope her experience of starting from an entry-level job and becoming a vice president will {{BLANK}} the students to work hard and follow their dreams.",
    "cn": "A：學校為什麼邀請我們公司的一位前員工去對畢業生演講？ B：老師們希望她從基層工作做起、最後成為副總裁的經歷能【激勵】學生努力工作、追求夢想。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and interesting ideas",
    "sentence": "A: What kind of person are we looking for to lead the new advertising team in the Taipei office? B: We need someone who is {{BLANK}} and full of fresh ideas, because our competitors have been launching more interesting campaigns and we are losing young customers to them.",
    "cn": "A：我們在找什麼樣的人來帶領台北辦公室的新廣告團隊？ B：我們需要一個有【創意】又充滿新點子的人，因為我們的競爭對手推出了更有趣的宣傳活動，我們正在把年輕顧客流失給他們。"
  },
  {
    "word": "talented",
    "pos": "adj.",
    "cn_def": "有才華的",
    "en_def": "having a natural ability to do something well",
    "sentence": "A: How did the small design studio manage to win the contract with such a big international hotel chain? B: They have a very {{BLANK}} young architect who designed an amazing lobby with plants and natural light, and the hotel's managers were impressed by her drawings.",
    "cn": "A：那家小型設計工作室是怎麼贏得那麼大的國際連鎖飯店合約的？ B：他們有一位非常【有才華】的年輕建築師，設計了一個充滿植物和自然光的驚人大廳，飯店的經理們都對她的設計圖印象深刻。"
  },
  {
    "word": "famous",
    "pos": "adj.",
    "cn_def": "有名的；著名的",
    "en_def": "known by many people",
    "sentence": "A: Why are there so many tourists taking photos in front of that old restaurant on the corner? B: It's {{BLANK}} for its beef noodle soup, which has been made with the same family recipe for over sixty years, and it was even shown on a travel program.",
    "cn": "A：為什麼有那麼多遊客在轉角那家老餐廳前拍照？ B：它以牛肉麵【聞名】，六十多年來一直用同樣的家傳食譜製作，甚至還上過旅遊節目。"
  },
  {
    "word": "skilled",
    "pos": "adj.",
    "cn_def": "熟練的；有技術的",
    "en_def": "having the training or experience to do something well",
    "sentence": "A: Why is the factory paying for extra training courses for the machine operators this year? B: The new equipment is very complex, and we need {{BLANK}} workers who can repair small problems quickly, so the production line doesn't have to stop for hours.",
    "cn": "A：工廠今年為什麼要出錢讓機器操作員參加額外的訓練課程？ B：新設備非常複雜，我們需要能迅速修理小問題的【熟練】工人，這樣生產線就不必停工好幾個小時。"
  },
  {
    "word": "original",
    "pos": "adj.",
    "cn_def": "有獨創性的；原創的",
    "en_def": "new and different from others",
    "sentence": "A: Did the judges like the logo that our team submitted for the city's design competition last month? B: Yes, they said it was the most {{BLANK}} entry they received, because nobody else thought of combining the shape of a bridge with the city's famous mountains.",
    "cn": "A：評審喜歡我們團隊上個月參加城市設計比賽所提交的標誌嗎？ B：喜歡，他們說那是他們收到最【有獨創性】的作品，因為沒有其他人想到把橋的形狀和這座城市著名的山結合在一起。"
  },
  {
    "word": "carefully",
    "pos": "adv.",
    "cn_def": "仔細地；小心地",
    "en_def": "with attention, to avoid mistakes",
    "sentence": "A: Is there anything I should know before signing the rental contract for our new office space downtown? B: You should read every page {{BLANK}}, especially the part about repairs and extra fees, because some landlords hide important conditions in the small print at the end.",
    "cn": "A：在簽下市中心新辦公空間的租約之前，有什麼我該知道的嗎？ B：你應該【仔細地】閱讀每一頁，尤其是關於維修和額外費用的部分，因為有些房東會把重要條件藏在最後的小字裡。"
  },
  {
    "word": "clearly",
    "pos": "adv.",
    "cn_def": "清楚地",
    "en_def": "in a way that is easy to see, hear, or understand",
    "sentence": "A: Why did the customers keep calling the help desk after we sent the new instructions for the coffee machine? B: The instructions weren't explained {{BLANK}}, and many steps were missing pictures, so people didn't know which button to press first or how to clean the parts.",
    "cn": "A：為什麼我們寄出咖啡機的新說明書後，顧客還一直打電話到服務台？ B：說明書沒有解釋得很【清楚】，很多步驟都缺少圖片，所以大家不知道該先按哪個按鈕，或是要怎麼清潔零件。"
  },
  {
    "word": "creatively",
    "pos": "adv.",
    "cn_def": "有創意地",
    "en_def": "in a way that uses new and clever ideas",
    "sentence": "A: How did the restaurant manage to stay busy even though the prices of vegetables and meat rose so much this year? B: The chef used leftover ingredients {{BLANK}}, turning them into new weekly specials, so the restaurant saved money and customers kept coming back to try something different.",
    "cn": "A：今年蔬菜和肉類價格上漲那麼多，那家餐廳是怎麼維持生意興隆的？ B：主廚很【有創意地】運用剩餘食材，把它們變成每週的新特餐，所以餐廳省了錢，顧客也一直回來嘗試不同的菜色。"
  },
  {
    "word": "passionately",
    "pos": "adv.",
    "cn_def": "熱情地；熱烈地",
    "en_def": "with strong feelings",
    "sentence": "A: Why did the board finally agree to fund the new recycling program after rejecting it twice before? B: Our environmental manager spoke so {{BLANK}} about reducing waste during the meeting, and she showed clear data about savings, so even the most doubtful members changed their minds.",
    "cn": "A：董事會之前拒絕了兩次，為什麼最後同意資助新的回收計畫？ B：我們的環境經理在會議上非常【熱情地】談論減少浪費，還展示了關於節省成本的清楚數據，所以連最懷疑的成員都改變了主意。"
  },
  {
    "word": "regularly",
    "pos": "adv.",
    "cn_def": "定期地；經常",
    "en_def": "often, or at the same time each day, week, etc.",
    "sentence": "A: How does the hotel keep its online reviews so positive when there are so many competitors nearby? B: The staff {{BLANK}} check guest comments every morning, and if someone complains about noise or cleanliness, the manager calls them personally to apologize and offer a discount.",
    "cn": "A：附近有那麼多競爭對手，那家飯店是如何讓網路評價維持得這麼正面的？ B：員工每天早上都會【定期】查看房客的留言，如果有人抱怨噪音或清潔問題，經理會親自打電話道歉並提供折扣。"
  }
];

const MCQS = [
  {
    "q": "The library invited the _____ of a popular cookbook to give a talk. She will also sign copies of her book after the event.",
    "options": [
      "author",
      "plot",
      "theme",
      "draft"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The _____ spent three years researching life in the 1920s before finishing her new book. Critics say the story feels very real.",
    "options": [
      "poem",
      "plot",
      "novelist",
      "article"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The _____ read several short pieces aloud at the art gallery opening. Many guests were moved by his beautiful words about nature.",
    "options": [
      "novel",
      "poet",
      "theme",
      "draft"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "A _____ from the local newspaper called to ask about the new factory. She wants to interview the manager on Friday afternoon.",
    "options": [
      "character",
      "essay",
      "plot",
      "journalist"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Before the magazine goes to print, the _____ checks every page for errors. She also decides which photos will appear on the cover.",
    "options": [
      "novel",
      "poem",
      "editor",
      "plot"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The newsletter now has more than ten thousand online subscribers. Each _____ receives a weekly email with company news and special offers.",
    "options": [
      "reader",
      "plot",
      "theme",
      "draft"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The sales manager opened his presentation with a funny _____ about his first job. Everyone in the room laughed and began to relax.",
    "options": [
      "editor",
      "novelist",
      "reader",
      "story"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Our marketing director wrote an _____ for an industry magazine about online advertising. It will appear in the March issue next year.",
    "options": [
      "author",
      "article",
      "editor",
      "reader"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "Children loved the cartoon's main _____, a brave little dog who helps lost travelers. The company now sells toys based on him.",
    "options": [
      "character",
      "plot",
      "draft",
      "article"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The movie's _____ was so confusing that many viewers left early. Reviewers said it jumped between too many times and places.",
    "options": [
      "author",
      "reader",
      "plot",
      "poet"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The _____ of this year's sales conference is protecting the environment. All the speakers will talk about saving energy and reducing waste.",
    "options": [
      "poet",
      "theme",
      "reader",
      "journalist"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Please send me the first _____ of the report by Wednesday. I will add my comments before we show it to the client.",
    "options": [
      "poet",
      "novelist",
      "journalist",
      "draft"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The research team plans to _____ its findings in a medical journal next spring. Doctors around the world will then be able to read them.",
    "options": [
      "inspire",
      "imagine",
      "publish",
      "create"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Could you _____ a short thank-you note to the client who visited yesterday? Please mention how much we enjoyed the meeting.",
    "options": [
      "write",
      "inspire",
      "imagine",
      "publish"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The witness was asked to _____ the man she saw leaving the building. She said he was tall and wore a gray coat.",
    "options": [
      "publish",
      "revise",
      "inspire",
      "describe"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The design department will _____ a new logo for the company's fiftieth anniversary. The final version will appear on all products next year.",
    "options": [
      "inspire",
      "create",
      "describe",
      "write"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The video is too long for our website. Could you _____ it and remove the parts where the speaker repeats himself?",
    "options": [
      "edit",
      "inspire",
      "imagine",
      "describe"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The client rejected our first proposal because the price was too high. We need to _____ the budget and send it again by Monday.",
    "options": [
      "inspire",
      "imagine",
      "revise",
      "publish"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Try to _____ how our customers feel when their orders arrive late. Then think about how we can serve them better in the future.",
    "options": [
      "publish",
      "imagine",
      "edit",
      "revise"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The CEO hopes her speech will _____ young employees to share new ideas. She believes fresh thinking will help the company grow.",
    "options": [
      "publish",
      "revise",
      "edit",
      "inspire"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Our advertising agency is known for its _____ campaigns. Last year, its unusual video for a shoe company won three international awards.",
    "options": [
      "skilled",
      "talented",
      "creative",
      "patient"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The orchestra hired a very _____ young violinist after her amazing audition. She had been playing the violin since she was four years old.",
    "options": [
      "talented",
      "original",
      "empty",
      "broken"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The city is _____ for its night markets and street food. Millions of tourists visit every year to try the local snacks.",
    "options": [
      "skilled",
      "talented",
      "creative",
      "famous"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The company is looking for _____ workers who can operate the new machines. Applicants must have at least two years of experience.",
    "options": [
      "famous",
      "skilled",
      "original",
      "empty"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The judges praised the _____ design because it looked completely different from the other entries. It won first prize in the competition.",
    "options": [
      "original",
      "skilled",
      "talented",
      "famous"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Please read the safety instructions _____ before using the machine. Mistakes could cause serious injuries to you or your coworkers.",
    "options": [
      "creatively",
      "passionately",
      "carefully",
      "loudly"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The speaker used a microphone and spoke _____ so everyone in the large hall could understand. Nobody had to ask her to repeat anything.",
    "options": [
      "creatively",
      "clearly",
      "regularly",
      "passionately"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The small team solved the problem _____ by using old boxes to build a display stand. The manager praised their clever idea.",
    "options": [
      "passionately",
      "regularly",
      "clearly",
      "creatively"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The volunteer spoke _____ about protecting the river, and her strong feelings moved the audience. Many people signed up to help that day.",
    "options": [
      "regularly",
      "carefully",
      "passionately",
      "creatively"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Employees should back up their computer files _____, at least once a week. This prevents data loss if a system suddenly fails.",
    "options": [
      "regularly",
      "passionately",
      "creatively",
      "clearly"
    ],
    "answer": 0,
    "vocabIndex": 32
  }
];

const LOOKUP = {
  "author": {
    "pos": "n.",
    "en_def": "a person who writes a book or article",
    "cn_def": "作者；作家"
  },
  "novelist": {
    "pos": "n.",
    "en_def": "a person who writes long stories (novels)",
    "cn_def": "小說家"
  },
  "poet": {
    "pos": "n.",
    "en_def": "a person who writes poems",
    "cn_def": "詩人"
  },
  "journalist": {
    "pos": "n.",
    "en_def": "a person who writes news for newspapers, TV, or websites",
    "cn_def": "記者"
  },
  "editor": {
    "pos": "n.",
    "en_def": "a person who checks and corrects writing before it is printed",
    "cn_def": "編輯"
  },
  "reader": {
    "pos": "n.",
    "en_def": "a person who reads something",
    "cn_def": "讀者"
  },
  "story": {
    "pos": "n.",
    "en_def": "a description of events, real or imagined",
    "cn_def": "故事"
  },
  "novel": {
    "pos": "n.",
    "en_def": "a long written story about imaginary people and events",
    "cn_def": "小說"
  },
  "poem": {
    "pos": "n.",
    "en_def": "a piece of writing with short lines, often with rhythm",
    "cn_def": "詩"
  },
  "article": {
    "pos": "n.",
    "en_def": "a piece of writing in a newspaper, magazine, or website",
    "cn_def": "文章"
  },
  "essay": {
    "pos": "n.",
    "en_def": "a short piece of writing about one subject",
    "cn_def": "短文；論文"
  },
  "character": {
    "pos": "n.",
    "en_def": "a person or animal in a story, film, or play",
    "cn_def": "角色；人物"
  },
  "plot": {
    "pos": "n.",
    "en_def": "the series of events in a story",
    "cn_def": "情節"
  },
  "theme": {
    "pos": "n.",
    "en_def": "the main subject or idea of something",
    "cn_def": "主題"
  },
  "draft": {
    "pos": "n.",
    "en_def": "an early version of a piece of writing",
    "cn_def": "草稿"
  },
  "publish": {
    "pos": "v.",
    "en_def": "to print or put writing online for the public to read",
    "cn_def": "出版；發表；公布"
  },
  "write": {
    "pos": "v.",
    "en_def": "to put words on paper or a screen",
    "cn_def": "寫；書寫"
  },
  "describe": {
    "pos": "v.",
    "en_def": "to say what someone or something is like",
    "cn_def": "描述"
  },
  "create": {
    "pos": "v.",
    "en_def": "to make something new",
    "cn_def": "創造；創作"
  },
  "edit": {
    "pos": "v.",
    "en_def": "to correct or change writing, film, or video",
    "cn_def": "編輯；剪輯"
  },
  "revise": {
    "pos": "v.",
    "en_def": "to change something to make it better or more correct",
    "cn_def": "修改；修訂"
  },
  "imagine": {
    "pos": "v.",
    "en_def": "to form a picture of something in your mind",
    "cn_def": "想像"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to make someone want to do something good",
    "cn_def": "激勵；啟發"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and interesting ideas",
    "cn_def": "有創意的"
  },
  "talented": {
    "pos": "adj.",
    "en_def": "having a natural ability to do something well",
    "cn_def": "有才華的"
  },
  "famous": {
    "pos": "adj.",
    "en_def": "known by many people",
    "cn_def": "有名的；著名的"
  },
  "skilled": {
    "pos": "adj.",
    "en_def": "having the training or experience to do something well",
    "cn_def": "熟練的；有技術的"
  },
  "original": {
    "pos": "adj.",
    "en_def": "new and different from others",
    "cn_def": "有獨創性的；原創的"
  },
  "carefully": {
    "pos": "adv.",
    "en_def": "with attention, to avoid mistakes",
    "cn_def": "仔細地；小心地"
  },
  "clearly": {
    "pos": "adv.",
    "en_def": "in a way that is easy to see, hear, or understand",
    "cn_def": "清楚地"
  },
  "creatively": {
    "pos": "adv.",
    "en_def": "in a way that uses new and clever ideas",
    "cn_def": "有創意地"
  },
  "passionately": {
    "pos": "adv.",
    "en_def": "with strong feelings",
    "cn_def": "熱情地；熱烈地"
  },
  "regularly": {
    "pos": "adv.",
    "en_def": "often, or at the same time each day, week, etc.",
    "cn_def": "定期地；經常"
  }
};

const EXTRA_GLOSSES = {};
