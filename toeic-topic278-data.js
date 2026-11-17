// Topic 278 Quiz Data: Persuade 說服
// Source word list: https://www.examword.com/group-topic/persuade — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T278 - Persuade 說服",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "convince",
    "pos": "v.",
    "cn_def": "說服；使相信",
    "en_def": "to make someone believe that something is true or right",
    "sentence": "A: Why did the marketing director finally agree to move the product launch from March to May after saying no for weeks? B: Our sales team showed her the latest customer survey results, and the data helped {{BLANK}} her that we needed more time to fix the battery problems before shipping.",
    "cn": "A：為什麼行銷總監在拒絕了好幾週之後，終於同意把產品上市時間從三月延到五月？ B：我們的業務團隊給她看了最新的顧客調查結果，這些數據幫助【說服】她，我們需要更多時間在出貨前修好電池的問題。"
  },
  {
    "word": "influence",
    "pos": "n.",
    "cn_def": "影響；影響力",
    "en_def": "the power to change how someone thinks or acts",
    "sentence": "A: Do you think the new store manager has made a real difference since she arrived from the Kaohsiung branch last spring? B: Yes, she has had a strong positive {{BLANK}} on the younger staff, who now arrive early, greet customers warmly, and share ideas at our weekly meetings.",
    "cn": "A：你覺得新店長去年春天從高雄分店調來之後，真的帶來改變了嗎？ B：是的，她對年輕員工有很強的正面【影響】，他們現在都提早到、熱情地招呼顧客，並在每週會議上分享想法。"
  },
  {
    "word": "argument",
    "pos": "n.",
    "cn_def": "論點；理由",
    "en_def": "a reason or set of reasons given to show that an idea is right",
    "sentence": "A: How did Ms. Chen get the finance committee to approve money for new laptops when the company is trying to cut costs this year? B: She presented a clear {{BLANK}} for the purchase, explaining that the old computers break down so often that repairs and lost working hours actually cost us more every month.",
    "cn": "A：今年公司正在努力削減成本，陳小姐是怎麼讓財務委員會批准購買新筆電的經費？ B：她針對這筆採購提出了清楚的【論點】，說明舊電腦常常故障，修理費和損失的工時其實每個月讓我們花更多錢。"
  },
  {
    "word": "reason",
    "pos": "n.",
    "cn_def": "原因；理由",
    "en_def": "a fact or explanation of why something happens",
    "sentence": "A: Did the hotel manager explain why our conference room was changed from the third floor to the basement at the last minute? B: Yes, she said the main {{BLANK}} was a water leak in the ceiling upstairs, and she offered us free coffee and snacks for the whole afternoon to make up for the trouble.",
    "cn": "A：飯店經理有解釋為什麼我們的會議室在最後一刻從三樓換到地下室嗎？ B：有，她說主要的【原因】是樓上天花板漏水，而且她提供我們整個下午免費的咖啡和點心作為補償。"
  },
  {
    "word": "evidence",
    "pos": "n.",
    "cn_def": "證據",
    "en_def": "facts or things that show something is true",
    "sentence": "A: Why does the insurance company still refuse to pay for the damage to the delivery van after the accident last Friday night? B: They say we have not sent enough {{BLANK}} yet, so I am collecting photos of the scene, the police report, and statements from two drivers who saw everything.",
    "cn": "A：為什麼保險公司到現在還拒絕支付上週五晚上事故中送貨車的損壞費用？ B：他們說我們還沒有提供足夠的【證據】，所以我正在蒐集現場照片、警方報告，以及兩位目擊一切的駕駛的證詞。"
  },
  {
    "word": "appeal",
    "pos": "n.",
    "cn_def": "吸引力；呼籲",
    "en_def": "a quality that makes people like or want something",
    "sentence": "A: Why are so many young customers buying our new energy drink even though it costs more than the other brands in the supermarket? B: The colorful design and the fun online videos give it a strong {{BLANK}} to students and office workers who want something exciting and different.",
    "cn": "A：雖然我們的新能量飲料比超市裡其他品牌貴，為什麼還有這麼多年輕顧客購買？ B：繽紛的包裝設計和有趣的網路影片，讓它對想要刺激又與眾不同東西的學生和上班族具有強烈的【吸引力】。"
  },
  {
    "word": "persuasive",
    "pos": "adj.",
    "cn_def": "有說服力的",
    "en_def": "able to make people agree or believe something",
    "sentence": "A: What did you think of the young sales representative who gave the presentation to our biggest client in Taichung yesterday afternoon? B: She was very {{BLANK}}, because she used real numbers, answered every difficult question calmly, and explained exactly how our software could save the client money each month.",
    "cn": "A：你覺得昨天下午在台中向我們最大客戶做簡報的那位年輕業務代表怎麼樣？ B：她非常【有說服力】，因為她用了真實的數字、冷靜地回答每個困難問題，並且清楚解釋我們的軟體每個月能如何幫客戶省錢。"
  },
  {
    "word": "logic",
    "pos": "n.",
    "cn_def": "邏輯",
    "en_def": "a sensible way of thinking and connecting ideas",
    "sentence": "A: Why did the manager reject your plan to open the new branch in the city center, even though the location is so busy? B: She said the {{BLANK}} of my proposal was weak, because I promised the rent would be cheap, but my own numbers showed that monthly costs there would be much higher than in the suburbs.",
    "cn": "A：雖然市中心地點很熱鬧，為什麼經理還是否決了你在那裡開新分店的計畫？ B：她說我提案的【邏輯】很薄弱，因為我保證那裡的租金會很便宜，但我自己的數字卻顯示那裡每月的成本會比郊區高很多。"
  },
  {
    "word": "emotional",
    "pos": "adj.",
    "cn_def": "情感的；感人的",
    "en_def": "making people have strong feelings; showing strong feelings",
    "sentence": "A: Why did so many employees cry during the farewell party for Mr. Lin, who is retiring after thirty years at the factory? B: It was a very {{BLANK}} moment, because he thanked every worker by name, told funny stories about the early days, and promised to visit the team often.",
    "cn": "A：為什麼林先生在工廠工作三十年後退休，他的歡送會上有這麼多員工哭了？ B：那是非常【感人】的一刻，因為他叫出每位員工的名字向他們道謝、講了早期的趣事，還承諾會常常回來看大家。"
  },
  {
    "word": "claim",
    "pos": "n.",
    "cn_def": "宣稱；說法",
    "en_def": "a statement that something is true, often without proof",
    "sentence": "A: Why are customers so angry about the new face cream that our company started selling online last month? B: The advertisement made a {{BLANK}} that it removes wrinkles in three days, but many buyers saw no change at all, so they are writing bad reviews and asking for refunds.",
    "cn": "A：為什麼顧客對公司上個月開始在網路上販售的新面霜這麼生氣？ B：廣告提出了它能在三天內去除皺紋的【說法】，但很多買家完全看不到改變，所以他們紛紛留下負評並要求退款。"
  },
  {
    "word": "assert",
    "pos": "v.",
    "cn_def": "堅稱；斷言",
    "en_def": "to say firmly that something is true",
    "sentence": "A: How did the CEO respond when reporters asked about rumors that the company would close its factory in Tainan next year? B: She was quick to {{BLANK}} that no jobs would be lost, and she explained that the factory would actually hire fifty new workers when the new production line opens in the fall.",
    "cn": "A：當記者問到公司明年將關閉台南工廠的傳聞時，執行長怎麼回應？ B：她很快就【堅稱】不會有人失業，並解釋說當新生產線秋天啟用時，工廠其實還會再雇用五十名新員工。"
  },
  {
    "word": "suggest",
    "pos": "v.",
    "cn_def": "建議",
    "en_def": "to give an idea for someone to think about",
    "sentence": "A: Our team has missed three deadlines this month, and the client from Singapore is getting very impatient with us, so what should we do now? B: I would {{BLANK}} that we hold a short meeting every morning to check progress, and maybe we could also ask the design department to lend us two extra people for a week.",
    "cn": "A：我們團隊這個月已經錯過三次截止期限，新加坡的客戶對我們越來越不耐煩了，我們現在該怎麼辦？ B：我會【建議】我們每天早上開個簡短會議檢查進度，也許還可以請設計部借我們兩個人手一週。"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "cn_def": "推薦；建議",
    "en_def": "to say that someone or something is good and suitable",
    "sentence": "A: I need to book a hotel near the convention center for next month's trade show, so which one do you think is best? B: I strongly {{BLANK}} the Grand Harbor Hotel, because it is only five minutes away on foot, the rooms are quiet, and they offer a free breakfast and fast Wi-Fi for business guests.",
    "cn": "A：我需要為下個月的商展在會展中心附近訂飯店，你覺得哪一家最好？ B：我強力【推薦】大港飯店，因為走路只要五分鐘、房間很安靜，而且為商務旅客提供免費早餐和快速的無線網路。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone confidence or support to do something",
    "sentence": "A: How did you get so many staff members to join the company's new health program, which starts at seven o'clock every Monday morning? B: We offered small prizes and free breakfast to {{BLANK}} people to sign up, and the managers joined the first class themselves so everyone could see it was fun and useful.",
    "cn": "A：公司新的健康計畫每週一早上七點開始，你們是怎麼讓這麼多員工參加的？ B：我們提供小獎品和免費早餐來【鼓勵】大家報名，而且主管們親自參加第一堂課，讓大家看到這既有趣又實用。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；激發",
    "en_def": "to make someone want to do something",
    "sentence": "A: Sales have been very slow since January, and the team seems tired and unhappy, so what is the new regional manager planning to do about it? B: She wants to {{BLANK}} the staff by offering a bonus for every new client, and she will also give the top seller an extra day off and a dinner voucher each month.",
    "cn": "A：自一月以來業績一直很差，團隊看起來又累又不開心，新任區域經理打算怎麼處理？ B：她想透過每簽一個新客戶就發獎金來【激勵】員工，而且每個月還會給業績最好的人多一天假和一張晚餐券。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "an attempt to make someone do something by using force or influence",
    "sentence": "A: Why did the supplier finally agree to lower its prices for the plastic bottles we order every month from its factory? B: We put {{BLANK}} on them by getting cheaper offers from two other companies, so they reduced the price by ten percent rather than lose a big customer like us.",
    "cn": "A：為什麼供應商最後同意調降我們每月向他們工廠訂購的塑膠瓶價格？ B：我們向另外兩家公司取得更便宜的報價來對他們施加【壓力】，所以他們寧願降價百分之十也不想失去像我們這樣的大客戶。"
  },
  {
    "word": "debate",
    "pos": "n.",
    "cn_def": "辯論；討論",
    "en_def": "a discussion in which people give different opinions",
    "sentence": "A: Has the city council decided yet whether it will build a new parking garage next to the old market downtown? B: Not yet, there was a long {{BLANK}} at last night's meeting, where shop owners wanted more parking but many residents said the city should spend the money on buses instead.",
    "cn": "A：市議會決定是否要在市中心老市場旁蓋新的停車場了嗎？ B：還沒，昨晚的會議上有一場漫長的【辯論】，店家想要更多停車位，但許多居民說市政府應該把錢花在公車上。"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "cn_def": "協商；談判",
    "en_def": "to discuss something with others to reach an agreement",
    "sentence": "A: Our office lease ends in December, and the landlord wants to raise the rent by fifteen percent, so what are we going to do? B: The finance manager will meet him next week to {{BLANK}} a better deal, and she plans to offer a three-year contract if he agrees to keep the rent at the current level.",
    "cn": "A：我們辦公室的租約十二月到期，房東想漲租百分之十五，我們要怎麼辦？ B：財務經理下週會和他見面【協商】更好的條件，她打算如果房東同意維持目前租金，就簽三年的合約。"
  },
  {
    "word": "compromise",
    "pos": "n.",
    "cn_def": "妥協；折衷",
    "en_def": "an agreement in which each side gives up part of what it wants",
    "sentence": "A: The design team wanted a blue logo while the sales team preferred red, so how did you finally solve the problem before the printing deadline? B: We reached a {{BLANK}} by using a dark purple color that both teams liked, and the new brochures will be printed on Thursday and sent to all our stores next week.",
    "cn": "A：設計團隊想要藍色標誌，業務團隊偏好紅色，你們最後是怎麼在印刷截止前解決問題的？ B：我們達成了【折衷】，採用兩個團隊都喜歡的深紫色，新的手冊週四會印好，下週寄到所有門市。"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "cn_def": "意見；看法",
    "en_def": "what a person thinks about something",
    "sentence": "A: Before we choose a new caterer for the annual dinner, should we just decide ourselves or ask the rest of the staff first? B: I think we should ask for everyone's {{BLANK}} by sending a short online survey, because people will enjoy the party more if they feel their ideas about the food were heard.",
    "cn": "A：在我們為年度晚宴選擇新的外燴廠商前，應該自己決定還是先問問其他員工？ B：我覺得我們應該寄一份簡短的線上問卷來徵詢大家的【意見】，因為如果大家覺得自己對餐點的想法有被聽見，就會更享受這場派對。"
  },
  {
    "word": "belief",
    "pos": "n.",
    "cn_def": "信念；相信",
    "en_def": "a feeling that something is true or right",
    "sentence": "A: Why does the owner of that small bakery refuse to open a second shop, even though her bread is so popular in the neighborhood? B: She has a strong {{BLANK}} that quality matters more than size, and she worries that she could not check every loaf herself if she had two busy stores to run.",
    "cn": "A：為什麼那家小麵包店的老闆娘拒絕開第二家店，即使她的麵包在附近這麼受歡迎？ B：她有一個堅定的【信念】：品質比規模更重要，而且她擔心如果要經營兩家忙碌的店，就沒辦法親自檢查每一條麵包。"
  },
  {
    "word": "credible",
    "pos": "adj.",
    "cn_def": "可信的；可靠的",
    "en_def": "easy to believe; able to be trusted",
    "sentence": "A: Why did the editor refuse to publish the article about the bank's financial problems that the new reporter wrote last week? B: She said the story was not {{BLANK}} enough, because the reporter used only one source, an angry former employee, and had no documents to back up any of the serious accusations.",
    "cn": "A：為什麼總編輯拒絕刊登新記者上週寫的那篇關於銀行財務問題的報導？ B：她說那則報導不夠【可信】，因為記者只用了一個消息來源，一位憤怒的前員工，而且沒有任何文件能佐證那些嚴重的指控。"
  },
  {
    "word": "trustworthy",
    "pos": "adj.",
    "cn_def": "值得信賴的",
    "en_def": "able to be trusted and depended on",
    "sentence": "A: We need someone to manage the cash register and lock the store at night while the owner is traveling in Japan next month, so who should we choose? B: Ms. Huang would be perfect, because she is very {{BLANK}}, she has worked here for eight years, and she has never made a single mistake when counting the money at the end of the day.",
    "cn": "A：老闆下個月去日本旅行期間，我們需要有人管理收銀機並在晚上鎖店，該選誰呢？ B：黃小姐會是完美人選，因為她非常【值得信賴】，她已經在這裡工作八年，而且每天打烊算錢時從來沒有出過一次錯。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持",
    "en_def": "help and approval for a person or idea",
    "sentence": "A: Do you think the board will approve your plan to let employees work from home two days a week starting in January? B: I think so, because I already have the {{BLANK}} of three department managers, and a staff survey showed that most people would be happier and more productive with a flexible schedule.",
    "cn": "A：你覺得董事會會批准你從一月起讓員工每週在家工作兩天的計畫嗎？ B：我想會，因為我已經得到三位部門經理的【支持】，而且員工調查顯示，大多數人有彈性的工作時間會更開心、更有效率。"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "cn_def": "挑戰",
    "en_def": "something difficult that tests your ability",
    "sentence": "A: How is the new manager handling the staff at the Taipei branch, where many workers did not want any changes to the old system? B: Getting them to accept the new software has been a real {{BLANK}}, but she is holding small training sessions and showing them how much time it saves every day.",
    "cn": "A：新經理在台北分店處理得怎麼樣？那裡很多員工不想改變舊制度。 B：讓他們接受新軟體真的是一大【挑戰】，但她正在舉辦小型訓練課程，讓大家看到這套軟體每天能省下多少時間。"
  },
  {
    "word": "counterargument",
    "pos": "n.",
    "cn_def": "反駁論點；反論",
    "en_def": "a reason given against another argument or idea",
    "sentence": "A: How did you prepare for the meeting with the investors, who might not like our idea of moving production overseas next year? B: I wrote down every {{BLANK}} they might raise, such as higher shipping costs and quality problems, and I prepared clear answers with numbers for each one before I walked into the room.",
    "cn": "A：投資人可能不喜歡我們明年把生產移到海外的想法，你是怎麼準備和他們開會的？ B：我把他們可能提出的每一個【反駁論點】都寫下來，像是運費較高和品質問題，並在走進會議室前為每一點準備好有數據支持的清楚回答。"
  },
  {
    "word": "highlight",
    "pos": "v.",
    "cn_def": "突顯；強調",
    "en_def": "to make something easy to notice",
    "sentence": "A: Our new phone costs more than most of the other brands, so what should the sales staff say when customers ask why they should buy it? B: They should {{BLANK}} the long battery life and the excellent camera, and they can also mention the free two-year warranty that none of our competitors offers right now.",
    "cn": "A：我們的新手機比大多數其他品牌貴，當顧客問為什麼要買時，銷售人員該怎麼說？ B：他們應該【突顯】電池續航力長和相機很優秀，也可以提到目前沒有任何競爭對手提供的兩年免費保固。"
  },
  {
    "word": "emphasize",
    "pos": "v.",
    "cn_def": "強調",
    "en_def": "to show that something is especially important",
    "sentence": "A: What was the most important message from the safety officer during this morning's training session for the new warehouse workers? B: He wanted to {{BLANK}} that everyone must wear a helmet and gloves at all times, because two workers were hurt last year when boxes fell from the top shelves.",
    "cn": "A：今天早上安全主管在新倉庫員工的訓練課程中，最重要的訊息是什麼？ B：他想【強調】每個人都必須隨時戴安全帽和手套，因為去年有兩位員工被從最上層貨架掉下來的箱子砸傷。"
  },
  {
    "word": "promise",
    "pos": "n.",
    "cn_def": "承諾；保證",
    "en_def": "a statement that you will surely do something",
    "sentence": "A: How did the furniture store get you to buy that expensive sofa instead of the cheaper one you saw online last weekend? B: The salesperson made a {{BLANK}} that they would deliver it for free within three days and take away my old sofa, which saved me a lot of time and trouble.",
    "cn": "A：家具店是怎麼讓你買那張昂貴的沙發，而不是你上週末在網路上看到的那張便宜的？ B：店員做出【承諾】，說會在三天內免費送貨並把我的舊沙發搬走，替我省了很多時間和麻煩。"
  },
  {
    "word": "threaten",
    "pos": "v.",
    "cn_def": "威脅",
    "en_def": "to say you will do something bad if someone does not do what you want",
    "sentence": "A: Why did the cleaning company suddenly offer us a discount on next year's contract after raising its prices twice this year? B: Our office manager decided to {{BLANK}} to cancel the contract and hire another company, so they quickly lowered the price because they did not want to lose our business.",
    "cn": "A：清潔公司今年漲價兩次後，為什麼突然在明年的合約上給我們折扣？ B：我們的辦公室經理決定【威脅】要取消合約並改請別家公司，所以他們因為不想失去我們這個客戶，很快就降價了。"
  },
  {
    "word": "convincing",
    "pos": "adj.",
    "cn_def": "令人信服的",
    "en_def": "making you believe that something is true",
    "sentence": "A: Did the job candidate do well in her interview for the marketing position this morning, or should we keep looking for someone else? B: She gave a very {{BLANK}} answer when we asked why she wanted to work here, and she showed us examples of three successful campaigns she managed for her last company.",
    "cn": "A：今天早上那位應徵行銷職位的求職者面試表現好嗎？還是我們應該繼續找別人？ B：當我們問她為什麼想在這裡工作時，她給了非常【令人信服】的回答，而且還給我們看她在前一家公司負責的三個成功行銷活動範例。"
  },
  {
    "word": "rational",
    "pos": "adj.",
    "cn_def": "理性的；合理的",
    "en_def": "based on clear thinking and facts, not feelings",
    "sentence": "A: Everyone in the meeting was angry about the sudden budget cuts, so how did the director manage to calm the discussion down? B: She asked us to make a {{BLANK}} decision based on facts, not feelings, so we listed every project, compared the costs, and agreed together which ones could wait until next year.",
    "cn": "A：會議上大家都對突然的預算刪減很生氣，主管是怎麼讓討論平靜下來的？ B：她要我們根據事實而非情緒做出【理性的】決定，所以我們列出每個專案、比較成本，並一起決定哪些可以等到明年。"
  },
  {
    "word": "hesitate",
    "pos": "v.",
    "cn_def": "猶豫",
    "en_def": "to stop or wait before doing something because you are unsure",
    "sentence": "A: I am new here and I am not sure how to use the printing system, so is it all right to ask you questions when I get stuck? B: Of course, please don't {{BLANK}} to call me or send a message anytime, because everyone needed help during their first week, and I would rather answer questions than fix mistakes later.",
    "cn": "A：我是新來的，不太確定怎麼使用列印系統，遇到困難時可以問你問題嗎？ B：當然可以，請不要【猶豫】，隨時打電話或傳訊息給我，因為每個人第一週都需要幫忙，而且我寧願回答問題，也不要之後再修正錯誤。"
  },
  {
    "word": "compel",
    "pos": "v.",
    "cn_def": "強迫；迫使",
    "en_def": "to force someone to do something",
    "sentence": "A: Why did the restaurant chain suddenly change all of its menus and add calorie information next to every dish this month? B: A new government rule will {{BLANK}} all large restaurants to show this information starting in January, so they decided to update their menus early and avoid any fines.",
    "cn": "A：為什麼這家連鎖餐廳這個月突然更換所有菜單，並在每道菜旁加上熱量資訊？ B：一項新的政府規定將【強制】所有大型餐廳從一月起標示這項資訊，所以他們決定提早更新菜單，以免被罰款。"
  }
];

const MCQS = [
  {
    "q": "The sales team needs better data before the meeting. Without clear numbers, it will be hard to _____ the client to sign the contract.",
    "options": [
      "convince",
      "hesitate",
      "highlight",
      "negotiate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Online reviews have a strong _____ on what young shoppers buy. Many customers read at least five reviews before ordering anything.",
    "options": [
      "evidence",
      "compromise",
      "influence",
      "debate"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Mr. Park presented a strong _____ for moving the office closer to the train station. Most managers agreed it would save commuting time.",
    "options": [
      "pressure",
      "argument",
      "influence",
      "compromise"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "The manager asked for clear _____ that the new machine really saves energy. The supplier sent test results from three other factories.",
    "options": [
      "appeal",
      "debate",
      "pressure",
      "evidence"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "The new snack has wide _____ to busy office workers. It is healthy, cheap, and easy to eat at a desk during lunch.",
    "options": [
      "logic",
      "claim",
      "appeal",
      "pressure"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "Ms. Lin gave a very _____ speech at the shareholders' meeting. By the end, nearly every investor voted for her expansion plan.",
    "options": [
      "persuasive",
      "trustworthy",
      "hesitant",
      "absent"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The retiring director became quite _____ during her farewell speech. She thanked the staff with tears in her eyes.",
    "options": [
      "credible",
      "rational",
      "persuasive",
      "emotional"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The company was fined for making a false _____ about its product. The advertisement said the cream removed wrinkles in two days.",
    "options": [
      "support",
      "claim",
      "compromise",
      "challenge"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The spokesperson continued to _____ that the factory was completely safe. However, reporters asked to see the latest inspection reports.",
    "options": [
      "assert",
      "hesitate",
      "motivate",
      "compel"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "If sales remain slow next month, I _____ that we lower the price. A small discount may attract more first-time buyers.",
    "options": [
      "encourage",
      "threaten",
      "suggest",
      "compel"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The hotel staff can _____ several good restaurants near the convention center. Just ask at the front desk for a free map.",
    "options": [
      "assert",
      "recommend",
      "negotiate",
      "hesitate"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The company offers free gym memberships to _____ employees to exercise regularly. Many staff members now work out during lunch.",
    "options": [
      "emphasize",
      "assert",
      "highlight",
      "encourage"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Bonuses are not the only way to _____ a sales team. Many workers also want praise and chances to learn new skills.",
    "options": [
      "assert",
      "hesitate",
      "motivate",
      "negotiate"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Customers are putting _____ on the airline to lower its baggage fees. Thousands have signed an online complaint this month.",
    "options": [
      "pressure",
      "logic",
      "evidence",
      "opinion"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "There was a heated _____ at the meeting about closing the Kaohsiung branch. Several managers strongly disagreed with the CEO.",
    "options": [
      "promise",
      "evidence",
      "appeal",
      "debate"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Our purchasing manager will _____ a lower price with the paper supplier next week. She hopes to save about ten percent.",
    "options": [
      "hesitate",
      "negotiate",
      "assert",
      "threaten"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Neither side got everything it wanted in the end. After two days of talks, the union and the company reached a _____.",
    "options": [
      "compromise",
      "claim",
      "logic",
      "pressure"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Before making the final decision, the director asked for every team member's _____. She wanted to know what everyone honestly thought.",
    "options": [
      "evidence",
      "pressure",
      "opinion",
      "appeal"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The reporter checked the story with three independent experts. She wanted to be sure her sources were _____ before publishing it.",
    "options": [
      "emotional",
      "credible",
      "nervous",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "We need a _____ person to handle the cash and lock the store at night. Mr. Chen has worked here honestly for ten years.",
    "options": [
      "emotional",
      "persuasive",
      "hesitant",
      "trustworthy"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The project will only succeed with the full _____ of senior management. Without their approval, we cannot get any funding.",
    "options": [
      "argument",
      "challenge",
      "support",
      "logic"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Finding enough skilled workers is the biggest _____ for the factory this year. The company is now offering higher pay to attract them.",
    "options": [
      "challenge",
      "promise",
      "support",
      "compromise"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The brochure should _____ the hotel's best features, such as the rooftop pool. Guests often decide quickly based on the photos.",
    "options": [
      "hesitate",
      "compel",
      "threaten",
      "highlight"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The trainer wanted to _____ the importance of washing hands in the kitchen. She repeated the rule several times during the session.",
    "options": [
      "hesitate",
      "emphasize",
      "negotiate",
      "convince"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The airline made a _____ to refund all passengers whose flights were canceled. The money should arrive within two weeks.",
    "options": [
      "promise",
      "debate",
      "logic",
      "pressure"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Several angry customers may _____ to post bad reviews online if the problem continues. The manager wants to solve it quickly.",
    "options": [
      "assert",
      "highlight",
      "threaten",
      "emphasize"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The lawyer's evidence was so _____ that the judge accepted it immediately. Nobody in the courtroom doubted the facts after that.",
    "options": [
      "emotional",
      "convincing",
      "hesitant",
      "careless"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "When you are very angry, it is hard to make _____ decisions. It is better to wait a day and think calmly.",
    "options": [
      "emotional",
      "persuasive",
      "trustworthy",
      "rational"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "If you have any questions about your order, please do not _____ to contact our customer service team. We are available every day.",
    "options": [
      "assert",
      "compel",
      "hesitate",
      "highlight"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The new law will _____ all employers to give workers at least two weeks of paid vacation. Many small businesses worry about the cost.",
    "options": [
      "compel",
      "hesitate",
      "assert",
      "emphasize"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "convince": {
    "pos": "v.",
    "en_def": "to make someone believe that something is true or right",
    "cn_def": "說服；使相信"
  },
  "influence": {
    "pos": "n.",
    "en_def": "the power to change how someone thinks or acts",
    "cn_def": "影響；影響力"
  },
  "argument": {
    "pos": "n.",
    "en_def": "a reason or set of reasons given to show that an idea is right",
    "cn_def": "論點；理由"
  },
  "reason": {
    "pos": "n.",
    "en_def": "a fact or explanation of why something happens",
    "cn_def": "原因；理由"
  },
  "evidence": {
    "pos": "n.",
    "en_def": "facts or things that show something is true",
    "cn_def": "證據"
  },
  "appeal": {
    "pos": "n.",
    "en_def": "a quality that makes people like or want something",
    "cn_def": "吸引力；呼籲"
  },
  "persuasive": {
    "pos": "adj.",
    "en_def": "able to make people agree or believe something",
    "cn_def": "有說服力的"
  },
  "logic": {
    "pos": "n.",
    "en_def": "a sensible way of thinking and connecting ideas",
    "cn_def": "邏輯"
  },
  "emotional": {
    "pos": "adj.",
    "en_def": "making people have strong feelings; showing strong feelings",
    "cn_def": "情感的；感人的"
  },
  "claim": {
    "pos": "n.",
    "en_def": "a statement that something is true, often without proof",
    "cn_def": "宣稱；說法"
  },
  "assert": {
    "pos": "v.",
    "en_def": "to say firmly that something is true",
    "cn_def": "堅稱；斷言"
  },
  "suggest": {
    "pos": "v.",
    "en_def": "to give an idea for someone to think about",
    "cn_def": "建議"
  },
  "recommend": {
    "pos": "v.",
    "en_def": "to say that someone or something is good and suitable",
    "cn_def": "推薦；建議"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone confidence or support to do something",
    "cn_def": "鼓勵"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to do something",
    "cn_def": "激勵；激發"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "an attempt to make someone do something by using force or influence",
    "cn_def": "壓力"
  },
  "debate": {
    "pos": "n.",
    "en_def": "a discussion in which people give different opinions",
    "cn_def": "辯論；討論"
  },
  "negotiate": {
    "pos": "v.",
    "en_def": "to discuss something with others to reach an agreement",
    "cn_def": "協商；談判"
  },
  "compromise": {
    "pos": "n.",
    "en_def": "an agreement in which each side gives up part of what it wants",
    "cn_def": "妥協；折衷"
  },
  "opinion": {
    "pos": "n.",
    "en_def": "what a person thinks about something",
    "cn_def": "意見；看法"
  },
  "belief": {
    "pos": "n.",
    "en_def": "a feeling that something is true or right",
    "cn_def": "信念；相信"
  },
  "credible": {
    "pos": "adj.",
    "en_def": "easy to believe; able to be trusted",
    "cn_def": "可信的；可靠的"
  },
  "trustworthy": {
    "pos": "adj.",
    "en_def": "able to be trusted and depended on",
    "cn_def": "值得信賴的"
  },
  "support": {
    "pos": "n.",
    "en_def": "help and approval for a person or idea",
    "cn_def": "支持"
  },
  "challenge": {
    "pos": "n.",
    "en_def": "something difficult that tests your ability",
    "cn_def": "挑戰"
  },
  "counterargument": {
    "pos": "n.",
    "en_def": "a reason given against another argument or idea",
    "cn_def": "反駁論點；反論"
  },
  "highlight": {
    "pos": "v.",
    "en_def": "to make something easy to notice",
    "cn_def": "突顯；強調"
  },
  "emphasize": {
    "pos": "v.",
    "en_def": "to show that something is especially important",
    "cn_def": "強調"
  },
  "promise": {
    "pos": "n.",
    "en_def": "a statement that you will surely do something",
    "cn_def": "承諾；保證"
  },
  "threaten": {
    "pos": "v.",
    "en_def": "to say you will do something bad if someone does not do what you want",
    "cn_def": "威脅"
  },
  "convincing": {
    "pos": "adj.",
    "en_def": "making you believe that something is true",
    "cn_def": "令人信服的"
  },
  "rational": {
    "pos": "adj.",
    "en_def": "based on clear thinking and facts, not feelings",
    "cn_def": "理性的；合理的"
  },
  "hesitate": {
    "pos": "v.",
    "en_def": "to stop or wait before doing something because you are unsure",
    "cn_def": "猶豫"
  },
  "compel": {
    "pos": "v.",
    "en_def": "to force someone to do something",
    "cn_def": "強迫；迫使"
  }
};

const EXTRA_GLOSSES = {};
