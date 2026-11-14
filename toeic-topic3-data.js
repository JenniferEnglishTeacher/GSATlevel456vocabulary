// Topic 3 Quiz Data: Achievement 成就
// Source word list: https://www.examword.com/group-topic/achievement — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T03 - Achievement 成就",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "success",
    "pos": "n.",
    "cn_def": "成功",
    "en_def": "the good result of doing what you planned to do",
    "sentence": "A: Why did the director invite the whole sales team to a dinner at the hotel restaurant last Friday evening? B: She wanted to celebrate the {{BLANK}} of our new product launch, because we sold twice as many units as we expected in the first month, and she believed everyone deserved a reward for their hard work.",
    "cn": "A：主管為什麼上週五晚上邀請整個業務團隊到飯店餐廳吃晚餐？ B：她想慶祝我們新產品上市的【成功】，因為第一個月的銷量是我們預期的兩倍，而且她認為每個人的努力都值得獎勵。"
  },
  {
    "word": "accomplish",
    "pos": "v.",
    "cn_def": "完成；達成",
    "en_def": "to finish something successfully",
    "sentence": "A: Do you think our small team can finish the whole website redesign before the client meeting next Thursday afternoon? B: If we divide the work carefully, stay focused, and avoid long meetings this week, I believe we can {{BLANK}} the task on time, even though two designers are still on vacation until Monday.",
    "cn": "A：你覺得我們這個小團隊能在下週四下午的客戶會議前完成整個網站改版嗎？ B：如果我們仔細分工、保持專注，並且這週避免開冗長的會議，我相信我們能準時【完成】這項任務，雖然有兩位設計師休假到星期一。"
  },
  {
    "word": "attain",
    "pos": "v.",
    "cn_def": "達到；獲得",
    "en_def": "to reach a goal or level after a lot of effort",
    "sentence": "A: Why is the factory manager asking every worker to attend extra safety training on Saturday mornings this month? B: The company wants to {{BLANK}} an international quality certificate by the end of the year, and the inspectors will check whether every employee understands the new safety rules before they visit the factory.",
    "cn": "A：為什麼工廠經理這個月要求每位工人星期六早上參加額外的安全訓練？ B：公司想在年底前【取得】一張國際品質認證，而檢查人員來工廠前會確認每位員工是否了解新的安全規定。"
  },
  {
    "word": "milestone",
    "pos": "n.",
    "cn_def": "里程碑；重要階段",
    "en_def": "an important event or stage in the development of something",
    "sentence": "A: Why is everyone in the office wearing party hats and eating cake in the meeting room this afternoon? B: Our online store just reached one million customers, which is an important {{BLANK}} for a company that started in a tiny garage only five years ago, so the boss ordered snacks for everyone.",
    "cn": "A：為什麼今天下午辦公室裡每個人都戴著派對帽、在會議室吃蛋糕？ B：我們的網路商店剛達到一百萬名顧客，對一家五年前才在小車庫創立的公司來說，這是一個重要的【里程碑】，所以老闆幫大家訂了點心。"
  },
  {
    "word": "fulfillment",
    "pos": "n.",
    "cn_def": "成就感；滿足感",
    "en_def": "a happy feeling that comes from doing something useful or important",
    "sentence": "A: Why did you leave your well-paid job at the bank to become a teacher at a small community center last year? B: The salary was great, but I never felt any real {{BLANK}} there, and now I feel happy every day because I can see my students improving and using English confidently at work.",
    "cn": "A：你去年為什麼辭掉銀行的高薪工作，去一間小社區中心當老師？ B：那裡薪水很好，但我從沒感到真正的【成就感】，現在我每天都很快樂，因為我能看到學生進步，並在工作上自信地使用英文。"
  },
  {
    "word": "triumph",
    "pos": "n.",
    "cn_def": "勝利；巨大成功",
    "en_def": "a great success or victory",
    "sentence": "A: How did the new marketing manager react when she heard that the company had signed the contract with the Japanese buyer? B: She called it a real {{BLANK}} for the whole department, because three other companies had also wanted the deal, and our team worked late every night for two months to prepare the proposal.",
    "cn": "A：新任行銷經理聽到公司和日本買家簽約時有什麼反應？ B：她說這是整個部門的一大【勝利】，因為另外三家公司也想拿到這筆生意，而我們團隊連續兩個月每晚加班準備提案。"
  },
  {
    "word": "excel",
    "pos": "v.",
    "cn_def": "擅長；表現出色",
    "en_def": "to be very good at something",
    "sentence": "A: Why did the human resources department choose Kevin to lead the customer service training program for new employees this year? B: He has always been able to {{BLANK}} at solving difficult problems with angry customers, and he explains things in a calm, friendly way that helps new staff feel relaxed and confident.",
    "cn": "A：人資部門今年為什麼選凱文來負責新進員工的客服訓練課程？ B：他一向【擅長】處理憤怒顧客的棘手問題，而且他會用冷靜友善的方式解釋事情，讓新員工感到放鬆又有自信。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展；進步",
    "en_def": "movement toward finishing or improving something",
    "sentence": "A: The construction company promised that the new office building would be ready in March, so why are we still working from the old one? B: Heavy rain stopped the workers for several weeks, so {{BLANK}} has been slower than planned, but the manager says we should be able to move in by early summer.",
    "cn": "A：建設公司承諾新辦公大樓三月就會完工，為什麼我們還在舊大樓上班？ B：大雨讓工人停工好幾週，所以【進度】比計畫慢，不過經理說我們應該能在初夏前搬進去。"
  },
  {
    "word": "mastery",
    "pos": "n.",
    "cn_def": "精通；熟練",
    "en_def": "great skill or knowledge in a subject or activity",
    "sentence": "A: Why did the company hire a young engineer from Germany instead of choosing someone from the local office for the new project? B: Her {{BLANK}} of the latest design software is impressive, and the project needs someone who can solve technical problems quickly and also train our local team to use the same programs.",
    "cn": "A：公司為什麼從德國聘請一位年輕工程師，而不是從本地辦公室挑人負責新專案？ B：她對最新設計軟體的【精通】令人佩服，而這個專案需要一個能快速解決技術問題、又能訓練本地團隊使用同樣程式的人。"
  },
  {
    "word": "distinction",
    "pos": "n.",
    "cn_def": "優異成績；殊榮；卓越",
    "en_def": "a special honor given for excellent work or results",
    "sentence": "A: Have you heard anything about the new accountant who is joining our finance team next Monday morning? B: Yes, she graduated with {{BLANK}} from a famous business school in London, and after that she worked for an international bank for six years, so I think she will bring a lot of useful experience.",
    "cn": "A：你有聽說下週一早上要加入我們財務團隊的新會計嗎？ B：有，她以【優異成績】從倫敦一所知名商學院畢業，之後在一家國際銀行工作了六年，所以我想她會帶來很多有用的經驗。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "認可；表揚",
    "en_def": "public praise or thanks for something good someone has done",
    "sentence": "A: Why does the company hold a special lunch for staff members at the end of every quarter? B: The managers want to give public {{BLANK}} to employees who worked hard or helped customers in special ways, because they believe that thanking people in front of their coworkers makes everyone feel more motivated.",
    "cn": "A：為什麼公司每季末都會為員工舉辦特別午餐？ B：主管們想公開【表揚】那些努力工作或用特別方式幫助顧客的員工，因為他們相信在同事面前感謝別人，會讓大家更有動力。"
  },
  {
    "word": "realize",
    "pos": "v.",
    "cn_def": "實現（夢想、計畫）",
    "en_def": "to make a hope or plan really happen",
    "sentence": "A: Why did your sister quit her office job and open a small bakery near the train station last spring? B: She had always dreamed of running her own business, and after saving money for ten years, she finally decided it was time to {{BLANK}} that dream before she got too busy with other responsibilities.",
    "cn": "A：你姊姊去年春天為什麼辭掉辦公室工作，在火車站附近開了一家小麵包店？ B：她一直夢想經營自己的事業，存了十年的錢之後，她終於決定是時候【實現】這個夢想了，免得之後被其他責任綁住而太忙。"
  },
  {
    "word": "victory",
    "pos": "n.",
    "cn_def": "勝利",
    "en_def": "success in a game, competition, or fight",
    "sentence": "A: Why is the sports shop on Main Street offering a thirty percent discount on all football shirts this weekend? B: The local team won the national championship last night, and the owner wants to celebrate the {{BLANK}} with the fans, so he expects the store to be very crowded until Sunday evening.",
    "cn": "A：為什麼大街上的運動用品店這個週末所有足球衫都打七折？ B：當地球隊昨晚贏得全國冠軍，老闆想和球迷一起慶祝這場【勝利】，所以他預計店裡到星期日晚上都會很擁擠。"
  },
  {
    "word": "breakthrough",
    "pos": "n.",
    "cn_def": "突破；重大進展",
    "en_def": "an important new discovery or development",
    "sentence": "A: Why are the scientists in the research lab so excited, and why did the company cancel this afternoon's regular meeting? B: They finally made a major {{BLANK}} in developing a cheaper battery for electric cars, so the director called an urgent meeting with the investors to discuss how quickly the product can reach the market.",
    "cn": "A：研究實驗室的科學家為什麼這麼興奮？公司又為什麼取消今天下午的例行會議？ B：他們終於在開發更便宜的電動車電池上有了重大【突破】，所以主管召開緊急會議，和投資人討論產品能多快上市。"
  },
  {
    "word": "accolade",
    "pos": "n.",
    "cn_def": "讚揚；榮譽；獎項",
    "en_def": "praise or an award given for excellent work",
    "sentence": "A: Have you seen the article in this morning's newspaper about the small Italian restaurant across the street from our office? B: Yes, a famous food critic gave it the highest {{BLANK}} of the year, so now it is almost impossible to book a table there for our team lunch next Friday.",
    "cn": "A：你看了今天早報上那篇關於我們辦公室對面那家小義大利餐廳的報導嗎？ B：看了，一位知名美食評論家給了它今年最高的【讚譽】，所以現在要訂那裡的位子給我們下週五的團隊午餐幾乎不可能了。"
  },
  {
    "word": "honor",
    "pos": "n.",
    "cn_def": "榮幸；榮譽",
    "en_def": "something that makes you feel proud and respected",
    "sentence": "A: How did you feel when the president of the company asked you to give the opening speech at the annual conference in Singapore? B: It was a great {{BLANK}} for me, because I have only worked here for two years, but I was also very nervous about speaking in front of five hundred people.",
    "cn": "A：公司總裁請你在新加坡年會上致開幕詞時，你有什麼感覺？ B：這對我來說是莫大的【榮幸】，因為我在這裡才工作兩年，但要在五百人面前演講也讓我非常緊張。"
  },
  {
    "word": "advance",
    "pos": "v.",
    "cn_def": "晉升；前進",
    "en_def": "to move forward or get a higher position at work",
    "sentence": "A: Why are so many junior staff members signing up for the evening management courses that the company offers this semester? B: They know that employees who complete the courses usually {{BLANK}} to senior positions more quickly, and the company also pays for the classes, so it is a great opportunity for everyone.",
    "cn": "A：為什麼這學期有這麼多基層員工報名公司開設的晚間管理課程？ B：他們知道完成課程的員工通常能更快【晉升】到高階職位，而且公司也負擔學費，所以對大家來說是很好的機會。"
  },
  {
    "word": "gain",
    "pos": "v.",
    "cn_def": "獲得；增加",
    "en_def": "to get something useful, such as skills or experience",
    "sentence": "A: Why did you accept a summer internship at a small trading company instead of taking a longer vacation with your family? B: I wanted to {{BLANK}} some practical experience before I graduate, and the manager there promised that I could work directly with overseas clients, which will look great on my resume.",
    "cn": "A：你為什麼接受一家小貿易公司的暑期實習，而不是和家人去度個較長的假？ B：我想在畢業前【獲得】一些實務經驗，而且那裡的經理承諾我可以直接和海外客戶合作，這會讓我的履歷很加分。"
  },
  {
    "word": "prosperity",
    "pos": "n.",
    "cn_def": "繁榮；興旺",
    "en_def": "a situation of having money and success",
    "sentence": "A: Why has the city government spent so much money on building a new port and highway near the coast? B: The mayor believes that better transportation will attract foreign companies and bring long-term {{BLANK}} to the region, creating thousands of new jobs for young people who usually move away to find work.",
    "cn": "A：市政府為什麼花那麼多錢在海岸附近興建新港口和高速公路？ B：市長相信更好的交通能吸引外國企業，為這個地區帶來長期的【繁榮】，替那些通常得外移找工作的年輕人創造數千個新工作機會。"
  },
  {
    "word": "completion",
    "pos": "n.",
    "cn_def": "完成；結束",
    "en_def": "the act of finishing something",
    "sentence": "A: When will the contractor receive the final payment for renovating our office on the third floor? B: According to the contract, we will pay the last part of the money after the {{BLANK}} of all the work, including painting the walls, installing the new lights, and cleaning the whole area.",
    "cn": "A：承包商什麼時候會收到我們三樓辦公室翻修的尾款？ B：根據合約，我們會在所有工程【完成】後支付最後一筆款項，包括粉刷牆壁、安裝新燈具以及清潔整個區域。"
  },
  {
    "word": "reward",
    "pos": "n.",
    "cn_def": "獎勵；報酬",
    "en_def": "something given to thank someone for good work or effort",
    "sentence": "A: Why did the store manager give each cashier a gift card and an extra day off at the end of the holiday season? B: It was a {{BLANK}} for their hard work during the busiest weeks of the year, when they served long lines of customers and stayed late almost every night without complaining.",
    "cn": "A：店經理為什麼在假期旺季結束時給每位收銀員一張禮物卡和一天額外的假？ B：那是對他們在一年中最忙碌幾週辛勤工作的【獎勵】，當時他們服務大排長龍的顧客，幾乎每晚都留下來加班卻毫無怨言。"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "cn_def": "抱負；雄心",
    "en_def": "a strong wish to be successful or to do something",
    "sentence": "A: What did the young sales assistant say during her interview when the manager asked about her plans for the future? B: She said her biggest {{BLANK}} is to open her own fashion company one day, and she wants to learn everything about buying, marketing, and managing a store while she works with us.",
    "cn": "A：主管在面試時問那位年輕的銷售助理對未來的規劃，她怎麼回答？ B：她說她最大的【抱負】是有一天開自己的服裝公司，所以她想在跟我們工作時，學習所有關於採購、行銷和管理商店的知識。"
  },
  {
    "word": "merit",
    "pos": "n.",
    "cn_def": "優點；功績；實力",
    "en_def": "good quality or ability that deserves praise or reward",
    "sentence": "A: How does the company decide which employees receive a pay raise at the end of each year? B: Raises are based on {{BLANK}}, not on how long people have worked here, so managers look carefully at each person's results, teamwork, and customer feedback before they make any final decisions.",
    "cn": "A：公司每年年底如何決定哪些員工可以加薪？ B：加薪是根據【實力與表現】，而不是看在這裡工作多久，所以主管在做最後決定前，會仔細檢視每個人的成果、團隊合作和顧客回饋。"
  },
  {
    "word": "earn",
    "pos": "v.",
    "cn_def": "賺取；贏得",
    "en_def": "to get money or respect because of your work",
    "sentence": "A: Why does Daniel work as a tour guide on weekends even though he already has a full-time job at the bank? B: He wants to {{BLANK}} some extra money to pay for his master's degree next year, and he also enjoys meeting tourists from different countries and practicing his foreign languages.",
    "cn": "A：丹尼爾已經在銀行有全職工作，為什麼週末還要當導遊？ B：他想【賺】一些外快來支付明年的碩士學費，而且他也喜歡認識來自不同國家的觀光客並練習外語。"
  },
  {
    "word": "win",
    "pos": "v.",
    "cn_def": "贏得；獲勝",
    "en_def": "to be the best in a competition or to get a prize or contract",
    "sentence": "A: Why is the design team working so late every evening this week, even though their normal projects are almost finished? B: They are preparing a special presentation because they really hope to {{BLANK}} the contract for the new airport terminal, which would be the biggest project in the company's history.",
    "cn": "A：設計團隊這週為什麼每晚都加班到很晚，即使他們的一般專案都快完成了？ B：他們正在準備一份特別簡報，因為他們非常希望【贏得】新機場航廈的合約，那將是公司史上最大的專案。"
  },
  {
    "word": "outcome",
    "pos": "n.",
    "cn_def": "結果；成果",
    "en_def": "the final result of an action or event",
    "sentence": "A: Have the managers decided whether we will move our main office to the new business park outside the city? B: Not yet, they are still discussing the costs with the landlord, and they said they will tell all the staff about the final {{BLANK}} of the negotiations at the meeting next Wednesday.",
    "cn": "A：主管們決定好是否要把總公司搬到市郊新的商業園區了嗎？ B：還沒，他們還在和房東討論費用，並說會在下週三的會議上告訴所有員工談判的最終【結果】。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "習得；取得；收購",
    "en_def": "to get or learn something, such as a skill or a company",
    "sentence": "A: Why does the company send new engineers to work in the Tokyo office for six months during their first year? B: It helps them {{BLANK}} useful skills and learn how our partners in Japan work, so they can communicate better with overseas clients when they return to the head office.",
    "cn": "A：公司為什麼在新工程師的第一年派他們到東京辦公室工作六個月？ B：這能幫助他們【習得】實用的技能，並了解我們日本夥伴的工作方式，讓他們回到總公司後能和海外客戶更順利地溝通。"
  },
  {
    "word": "status",
    "pos": "n.",
    "cn_def": "地位；身分",
    "en_def": "a person's position or importance compared with others",
    "sentence": "A: Why do so many of our clients insist on staying at the expensive five-star hotel downtown when they visit for business meetings? B: For many of them, staying there shows their high {{BLANK}} in the company, and they also like the quiet meeting rooms and the excellent restaurant on the top floor.",
    "cn": "A：為什麼我們很多客戶來開商務會議時，堅持要住市中心那家昂貴的五星級飯店？ B：對他們很多人來說，住在那裡能彰顯他們在公司裡的崇高【地位】，而且他們也喜歡那裡安靜的會議室和頂樓的高級餐廳。"
  },
  {
    "word": "self-made",
    "pos": "adj.",
    "cn_def": "白手起家的",
    "en_def": "successful or rich because of your own hard work, not help from others",
    "sentence": "A: What do you know about the woman who will give the main speech at the small business conference next month? B: She is a {{BLANK}} businesswoman who started selling handmade bags at a night market twenty years ago, and today her company has more than fifty shops across Asia and Europe.",
    "cn": "A：你對下個月在小企業研討會上發表主題演講的那位女士了解多少？ B：她是一位【白手起家的】女企業家，二十年前從夜市賣手工包包起家，如今她的公司在亞洲和歐洲擁有超過五十家店。"
  }
];

const MCQS = [
  {
    "q": "The new coffee shop has been open for only three months. Its quick _____ surprised even the owners, who expected a slow start.",
    "options": [
      "ambition",
      "completion",
      "success",
      "merit"
    ],
    "answer": 2,
    "vocabIndex": 0
  },
  {
    "q": "Our team has only two days left before the deadline. We must work together to _____ everything on the checklist.",
    "options": [
      "accomplish",
      "excel",
      "earn",
      "gain"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "The hotel hopes to _____ a five-star rating next year. It has hired more staff and redesigned all of its rooms.",
    "options": [
      "excel",
      "advance",
      "accomplish",
      "attain"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Reaching ten thousand app downloads was an important _____ for the start-up. The founders celebrated with a small party in the office.",
    "options": [
      "mastery",
      "milestone",
      "merit",
      "accolade"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Many nurses say that helping patients gives them a deep sense of _____. They enjoy their work even on difficult days.",
    "options": [
      "fulfillment",
      "prosperity",
      "status",
      "outcome"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The small company beat several large competitors to sign the deal. The CEO described the contract as a great _____ for everyone.",
    "options": [
      "completion",
      "ambition",
      "status",
      "triumph"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "Maria has always been good with numbers and details. She continues to _____ in her role as the company's chief accountant.",
    "options": [
      "attain",
      "excel",
      "acquire",
      "earn"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "The software project is moving slowly this month. The manager will check our _____ again at Friday's meeting.",
    "options": [
      "honor",
      "prosperity",
      "progress",
      "accolade"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Applicants must show complete _____ of spreadsheet software. The position involves preparing detailed financial reports every week.",
    "options": [
      "victory",
      "reward",
      "outcome",
      "mastery"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Ms. Chen completed her accounting degree with _____. Several large firms offered her a job before she even graduated.",
    "options": [
      "distinction",
      "progress",
      "prosperity",
      "completion"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The volunteers received official _____ from the city for cleaning the riverside park. The mayor thanked them at a public ceremony.",
    "options": [
      "completion",
      "recognition",
      "prosperity",
      "mastery"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "After years of planning, the two chefs finally opened their own restaurant. They were able to _____ their dream at last.",
    "options": [
      "excel",
      "gain",
      "realize",
      "earn"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "Fans cheered loudly after the final whistle. The local team's _____ in the championship match will be celebrated with a parade.",
    "options": [
      "merit",
      "victory",
      "fulfillment",
      "status"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Researchers made an important _____ in battery design last month. The new batteries charge twice as fast as older models.",
    "options": [
      "honor",
      "accolade",
      "ambition",
      "breakthrough"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The film won the highest _____ at the international festival. The director thanked the cast in a short speech.",
    "options": [
      "progress",
      "completion",
      "accolade",
      "ambition"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "It is a great _____ to welcome our keynote speaker tonight. She has written five best-selling books on leadership.",
    "options": [
      "honor",
      "progress",
      "outcome",
      "mastery"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Employees who complete the leadership course often _____ quickly within the company. Many become department heads within five years.",
    "options": [
      "attain",
      "advance",
      "acquire",
      "accomplish"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Volunteering abroad is a good way to _____ international experience. Many employers value workers who have lived in other countries.",
    "options": [
      "gain",
      "excel",
      "advance",
      "realize"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new factory brought jobs and _____ to the small town. Local shops and restaurants are busier than ever before.",
    "options": [
      "mastery",
      "ambition",
      "distinction",
      "prosperity"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The bridge is scheduled for _____ in December. Until then, drivers should use the old road along the river.",
    "options": [
      "accolade",
      "triumph",
      "completion",
      "fulfillment"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The company offers a cash _____ to any employee who suggests a way to save money. Last year, twelve workers received one.",
    "options": [
      "milestone",
      "outcome",
      "status",
      "reward"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Tom's _____ is to become a regional manager before he turns thirty. He studies business English every evening after work.",
    "options": [
      "completion",
      "ambition",
      "prosperity",
      "accolade"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "All scholarship winners are chosen on the basis of _____. Family income and personal connections are not considered.",
    "options": [
      "merit",
      "milestone",
      "triumph",
      "completion"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "Sales staff can _____ a bonus of up to ten percent of their salary. The amount depends on how many products they sell.",
    "options": [
      "excel",
      "advance",
      "earn",
      "realize"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Our agency hopes to _____ the advertising contract with the sports company. The final decision will be announced on Friday.",
    "options": [
      "win",
      "excel",
      "realize",
      "advance"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "Both sides were pleased with the _____ of the negotiations. They agreed to sign a three-year partnership next month.",
    "options": [
      "ambition",
      "mastery",
      "honor",
      "outcome"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The training program helps new staff _____ the skills they need for the job. It lasts two weeks and includes practical exercises.",
    "options": [
      "excel",
      "advance",
      "acquire",
      "accomplish"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Owning a luxury car is a sign of _____ in many countries. However, more young professionals now prefer to use public transportation.",
    "options": [
      "completion",
      "status",
      "breakthrough",
      "fulfillment"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "Mr. Lin is a _____ businessman who started with nothing. He opened his first shop with money he saved from a part-time job.",
    "options": [
      "last-minute",
      "one-way",
      "self-made",
      "low-cost"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The charity event was a great _____. It raised more than two million dollars for the children's hospital.",
    "options": [
      "merit",
      "success",
      "completion",
      "ambition"
    ],
    "answer": 1,
    "vocabIndex": 0
  }
];

const LOOKUP = {
  "success": {
    "pos": "n.",
    "en_def": "the good result of doing what you planned to do",
    "cn_def": "成功"
  },
  "accomplish": {
    "pos": "v.",
    "en_def": "to finish something successfully",
    "cn_def": "完成；達成"
  },
  "attain": {
    "pos": "v.",
    "en_def": "to reach a goal or level after a lot of effort",
    "cn_def": "達到；獲得"
  },
  "milestone": {
    "pos": "n.",
    "en_def": "an important event or stage in the development of something",
    "cn_def": "里程碑；重要階段"
  },
  "fulfillment": {
    "pos": "n.",
    "en_def": "a happy feeling that comes from doing something useful or important",
    "cn_def": "成就感；滿足感"
  },
  "triumph": {
    "pos": "n.",
    "en_def": "a great success or victory",
    "cn_def": "勝利；巨大成功"
  },
  "excel": {
    "pos": "v.",
    "en_def": "to be very good at something",
    "cn_def": "擅長；表現出色"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward finishing or improving something",
    "cn_def": "進展；進步"
  },
  "mastery": {
    "pos": "n.",
    "en_def": "great skill or knowledge in a subject or activity",
    "cn_def": "精通；熟練"
  },
  "distinction": {
    "pos": "n.",
    "en_def": "a special honor given for excellent work or results",
    "cn_def": "優異成績；殊榮；卓越"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "public praise or thanks for something good someone has done",
    "cn_def": "認可；表揚"
  },
  "realize": {
    "pos": "v.",
    "en_def": "to make a hope or plan really happen",
    "cn_def": "實現（夢想、計畫）"
  },
  "victory": {
    "pos": "n.",
    "en_def": "success in a game, competition, or fight",
    "cn_def": "勝利"
  },
  "breakthrough": {
    "pos": "n.",
    "en_def": "an important new discovery or development",
    "cn_def": "突破；重大進展"
  },
  "accolade": {
    "pos": "n.",
    "en_def": "praise or an award given for excellent work",
    "cn_def": "讚揚；榮譽；獎項"
  },
  "honor": {
    "pos": "n.",
    "en_def": "something that makes you feel proud and respected",
    "cn_def": "榮幸；榮譽"
  },
  "advance": {
    "pos": "v.",
    "en_def": "to move forward or get a higher position at work",
    "cn_def": "晉升；前進"
  },
  "gain": {
    "pos": "v.",
    "en_def": "to get something useful, such as skills or experience",
    "cn_def": "獲得；增加"
  },
  "prosperity": {
    "pos": "n.",
    "en_def": "a situation of having money and success",
    "cn_def": "繁榮；興旺"
  },
  "completion": {
    "pos": "n.",
    "en_def": "the act of finishing something",
    "cn_def": "完成；結束"
  },
  "reward": {
    "pos": "n.",
    "en_def": "something given to thank someone for good work or effort",
    "cn_def": "獎勵；報酬"
  },
  "ambition": {
    "pos": "n.",
    "en_def": "a strong wish to be successful or to do something",
    "cn_def": "抱負；雄心"
  },
  "merit": {
    "pos": "n.",
    "en_def": "good quality or ability that deserves praise or reward",
    "cn_def": "優點；功績；實力"
  },
  "earn": {
    "pos": "v.",
    "en_def": "to get money or respect because of your work",
    "cn_def": "賺取；贏得"
  },
  "win": {
    "pos": "v.",
    "en_def": "to be the best in a competition or to get a prize or contract",
    "cn_def": "贏得；獲勝"
  },
  "outcome": {
    "pos": "n.",
    "en_def": "the final result of an action or event",
    "cn_def": "結果；成果"
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to get or learn something, such as a skill or a company",
    "cn_def": "習得；取得；收購"
  },
  "status": {
    "pos": "n.",
    "en_def": "a person's position or importance compared with others",
    "cn_def": "地位；身分"
  },
  "self-made": {
    "pos": "adj.",
    "en_def": "successful or rich because of your own hard work, not help from others",
    "cn_def": "白手起家的"
  }
};

const EXTRA_GLOSSES = {};
