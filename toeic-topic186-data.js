// Topic 186 Quiz Data: Immigration 移民
// Source word list: https://www.examword.com/group-topic/immigration — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T186 - Immigration 移民",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "immigrant",
    "pos": "n.",
    "cn_def": "移民（移入者）",
    "en_def": "a person who comes to live permanently in a new country",
    "sentence": "A: Who is the new engineer sitting next to Linda in the design department, and how long has he been working with our team? B: He is an {{BLANK}} from Brazil who moved here with his family last spring, and he already speaks our language well enough to lead the weekly project meetings.",
    "cn": "A：坐在設計部琳達旁邊的新工程師是誰？他和我們團隊合作多久了？ B：他是一位來自巴西的【移民】，去年春天和家人搬到這裡，他的語言已經說得夠好，可以主持每週的專案會議了。"
  },
  {
    "word": "migrant",
    "pos": "n.",
    "cn_def": "移工；流動人口",
    "en_def": "a person who moves from place to place, often to find work",
    "sentence": "A: Why does the farm hire so many extra workers every autumn, and where do they usually stay during the harvest season? B: Each {{BLANK}} worker travels from a nearby country for about three months, and the company provides shared housing, meals, and a bus that takes them to the fields every morning.",
    "cn": "A：為什麼農場每年秋天都要僱用這麼多額外的工人？收成季節他們通常住在哪裡？ B：每位【移工】都從鄰近國家來工作大約三個月，公司提供共用宿舍、餐點，還有每天早上載他們到田裡的巴士。"
  },
  {
    "word": "migration",
    "pos": "n.",
    "cn_def": "遷移；移居",
    "en_def": "the movement of people from one place to another",
    "sentence": "A: Why are so many young people leaving the small towns in the north, and how is it affecting the local businesses there? B: The {{BLANK}} of workers to the big cities has been growing for ten years because salaries are higher, so many shops in those towns cannot find enough staff anymore.",
    "cn": "A：為什麼這麼多年輕人離開北部的小鎮？這對當地的商家有什麼影響？ B：工作者往大城市的【遷移】已經持續增加了十年，因為那裡薪水比較高，所以那些小鎮的許多商店再也找不到足夠的員工。"
  },
  {
    "word": "emigrate",
    "pos": "v.",
    "cn_def": "移居國外",
    "en_def": "to leave your own country to live in another one",
    "sentence": "A: I heard that Kevin from the accounting team handed in his resignation letter yesterday, so do you know why he decided to leave? B: He and his wife plan to {{BLANK}} to Canada next summer because her parents live there, and he has already received a job offer from a bank in Toronto.",
    "cn": "A：我聽說會計部的凱文昨天遞了辭呈，你知道他為什麼決定離職嗎？ B：他和太太打算明年夏天【移居】加拿大，因為她的父母住在那裡，而他已經收到多倫多一家銀行的工作錄取通知了。"
  },
  {
    "word": "emigration",
    "pos": "n.",
    "cn_def": "移出；移居國外",
    "en_def": "the act of leaving your country to live in another one",
    "sentence": "A: Why is the hospital in my hometown having so much trouble finding experienced nurses these days? B: The high rate of {{BLANK}} among medical workers is a big problem, because many nurses leave the country for better pay abroad, so the government is now offering bonuses to make them stay.",
    "cn": "A：為什麼我家鄉的醫院最近很難找到有經驗的護理師？ B：醫療人員的高【移出】率是個大問題，因為許多護理師為了更好的薪水出國工作，所以政府現在提供獎金讓他們留下來。"
  },
  {
    "word": "settle",
    "pos": "v.",
    "cn_def": "定居",
    "en_def": "to start living in a place permanently",
    "sentence": "A: After working in three different countries for the company, where do you and your family finally want to live? B: We would like to {{BLANK}} in a quiet town near the coast, because our children need a stable school and I can work from home most days of the week.",
    "cn": "A：在公司派駐過三個不同的國家之後，你和家人最後想住在哪裡？ B：我們想在海邊附近一個安靜的小鎮【定居】，因為孩子需要穩定的學校，而且我一週大部分的日子都可以在家工作。"
  },
  {
    "word": "residency",
    "pos": "n.",
    "cn_def": "居留權；居留",
    "en_def": "the legal right to live in a country",
    "sentence": "A: The new manager from Japan has started working here, but why does she still need to visit the government office every week? B: She is applying for permanent {{BLANK}}, so she must submit her work contract, bank records, and health check results before her current status expires next month.",
    "cn": "A：從日本來的新經理已經開始在這裡工作了，但她為什麼還需要每週跑政府機關？ B：她正在申請永久【居留權】，所以必須在目前的身分下個月到期前，繳交工作合約、銀行紀錄和健康檢查結果。"
  },
  {
    "word": "citizenship",
    "pos": "n.",
    "cn_def": "公民身分；國籍",
    "en_def": "the legal status of being a member of a country",
    "sentence": "A: You have lived and worked in this city for over twelve years, so are you planning to become a full member of the country? B: Yes, I finally applied for {{BLANK}} last month, and if everything goes well, I will be able to vote in the next election and travel with a new passport.",
    "cn": "A：你已經在這個城市生活和工作超過十二年了，你打算成為這個國家的正式一員嗎？ B：是的，我上個月終於申請了【公民身分】，如果一切順利，我就能在下次選舉投票，並且用新護照出國旅行。"
  },
  {
    "word": "visa",
    "pos": "n.",
    "cn_def": "簽證",
    "en_def": "an official document that lets you enter or stay in a country",
    "sentence": "A: Our sales director wants to attend the trade fair in India next month, so what should she prepare before booking the flight? B: She needs a business {{BLANK}} first, so please ask her to send her passport photo and invitation letter to the travel department by Friday, since processing takes about ten days.",
    "cn": "A：我們的業務總監下個月想去參加印度的貿易展，訂機票前她該準備什麼？ B：她得先辦商務【簽證】，所以請她在星期五前把護照照片和邀請函寄給差旅部門，因為辦理大約需要十天。"
  },
  {
    "word": "permit",
    "pos": "n.",
    "cn_def": "許可證",
    "en_def": "an official document that allows you to do something",
    "sentence": "A: The new chef from Italy is ready to start in our hotel kitchen, so why can't he begin working on Monday as planned? B: His work {{BLANK}} has not been approved yet, and our HR team says it is illegal for him to start until the labor office sends the official paperwork.",
    "cn": "A：從義大利來的新主廚已經準備好在我們飯店廚房上工了，為什麼他不能照計畫星期一開始工作？ B：他的工作【許可證】還沒核准，人資團隊說在勞動部門寄來正式文件之前，他開始工作是違法的。"
  },
  {
    "word": "border",
    "pos": "n.",
    "cn_def": "邊境；國界",
    "en_def": "the line that separates two countries",
    "sentence": "A: Why did the delivery of machine parts from Germany arrive two days later than the supplier promised? B: The trucks had to wait at the {{BLANK}} for many hours because customs officers were checking every container carefully, so the driver could not continue the trip until Wednesday afternoon.",
    "cn": "A：為什麼從德國來的機械零件比供應商承諾的晚了兩天才送到？ B：卡車必須在【邊境】等好幾個小時，因為海關人員正仔細檢查每個貨櫃，所以司機直到星期三下午才能繼續上路。"
  },
  {
    "word": "refugee",
    "pos": "n.",
    "cn_def": "難民",
    "en_def": "a person forced to leave their country because of war or danger",
    "sentence": "A: Why is the community center collecting winter coats, blankets, and children's books this month? B: Many {{BLANK}} families arrived in our city after the war started in their country, and they left home so quickly that most of them could only bring one small bag each.",
    "cn": "A：為什麼社區中心這個月在募集冬季外套、毛毯和童書？ B：在他們的國家爆發戰爭後，許多【難民】家庭來到我們的城市，他們離家時非常匆忙，大多數人每人只能帶一個小包包。"
  },
  {
    "word": "asylum",
    "pos": "n.",
    "cn_def": "庇護",
    "en_def": "protection given by a country to people escaping danger at home",
    "sentence": "A: Why is the young journalist from that country staying in our city, and is it safe for him to go back home? B: He asked for political {{BLANK}} after writing articles that criticized his government, because he believes he might be arrested if he returns, so a lawyer is helping him with the application.",
    "cn": "A：為什麼那位來自那個國家的年輕記者待在我們的城市？他回國安全嗎？ B：他在寫了批評政府的文章之後申請了政治【庇護】，因為他認為如果回去可能會被逮捕，所以有一位律師正在協助他辦理申請。"
  },
  {
    "word": "deport",
    "pos": "v.",
    "cn_def": "驅逐出境",
    "en_def": "to force a foreign person to leave a country",
    "sentence": "A: Why is our restaurant owner so careful about checking every new worker's documents before hiring them? B: Last year the authorities decided to {{BLANK}} two cooks at a nearby restaurant who had no legal papers, and the owner there also had to pay a very large fine.",
    "cn": "A：為什麼我們餐廳老闆在僱用新員工前，對檢查每個人的文件這麼小心？ B：去年當局決定把附近一家餐廳兩名沒有合法文件的廚師【驅逐出境】，那裡的老闆也被罰了一大筆錢。"
  },
  {
    "word": "deportation",
    "pos": "n.",
    "cn_def": "驅逐出境；遣返",
    "en_def": "the act of forcing someone to leave a country",
    "sentence": "A: What happened to the tourist who stayed in the country for two years after his travel papers expired? B: He was caught working at a factory without permission, and now he is waiting for {{BLANK}} at a government center, which means he will be sent back home on a flight next week.",
    "cn": "A：那個旅遊證件到期後還在這個國家待了兩年的觀光客後來怎麼了？ B：他被發現未經許可在工廠工作，現在正在政府收容中心等待【遣返】，也就是說他下週會被送上飛機回國。"
  },
  {
    "word": "naturalize",
    "pos": "v.",
    "cn_def": "使歸化（入籍）",
    "en_def": "to make a foreign person a citizen of a country",
    "sentence": "A: My colleague from Vietnam says she will finally receive her new passport next month, so what has she been doing to get it? B: The government agreed to {{BLANK}} her after she lived here for eight years, passed the language test, and showed that she had a stable job with our company.",
    "cn": "A：我那位來自越南的同事說她下個月終於會拿到新護照了，她這段時間都在做什麼才拿到的？ B：她在這裡住了八年、通過語言測驗，並證明在我們公司有穩定的工作之後，政府同意讓她【歸化入籍】。"
  },
  {
    "word": "naturalization",
    "pos": "n.",
    "cn_def": "歸化；入籍",
    "en_def": "the process of becoming a citizen of a new country",
    "sentence": "A: Why does Mr. Chen look so happy today, and why is he taking the afternoon off from the office? B: His {{BLANK}} ceremony is at city hall this afternoon, where he will officially become a citizen after living and working here for more than ten years with his family.",
    "cn": "A：陳先生今天為什麼看起來那麼開心？他為什麼下午要請假不進辦公室？ B：他的【入籍】典禮今天下午在市政廳舉行，在這裡和家人生活、工作超過十年後，他將正式成為公民。"
  },
  {
    "word": "integration",
    "pos": "n.",
    "cn_def": "融入；融合",
    "en_def": "the process of becoming part of a new group or society",
    "sentence": "A: How does the company help foreign employees feel comfortable after they move here with their families? B: We offer free language classes, local cooking events, and a buddy program, because successful {{BLANK}} into the community makes new staff happier and more likely to stay with us for many years.",
    "cn": "A：公司如何幫助外籍員工和家人搬來這裡後感到自在？ B：我們提供免費語言課程、在地烹飪活動和夥伴計畫，因為成功【融入】社區能讓新員工更快樂，也更可能在我們公司待很多年。"
  },
  {
    "word": "assimilation",
    "pos": "n.",
    "cn_def": "同化",
    "en_def": "the process of fully taking on the culture of a new place",
    "sentence": "A: Some of our older overseas staff seem to have completely changed their habits, food, and even their accent, haven't they? B: That kind of {{BLANK}} often happens after many years abroad, but our training program encourages people to keep their own traditions while they learn the local culture at the same time.",
    "cn": "A：我們有些年資較久的外籍員工，好像已經完全改變了他們的習慣、飲食，甚至口音，對吧？ B：在國外生活很多年後，常常會發生那種【同化】，但我們的訓練計畫鼓勵大家在學習當地文化的同時，也保留自己的傳統。"
  },
  {
    "word": "multicultural",
    "pos": "adj.",
    "cn_def": "多元文化的",
    "en_def": "including people of many different cultures",
    "sentence": "A: What do you like most about working in the Singapore office compared with your last job back home? B: It is a very {{BLANK}} workplace, so at lunch I can eat dishes from five different countries, and I have learned a lot from colleagues who celebrate different holidays throughout the year.",
    "cn": "A：和你之前在家鄉的工作比起來，你最喜歡在新加坡辦公室工作的哪一點？ B：這是一個非常【多元文化的】工作環境，所以午餐時我可以吃到五個不同國家的料理，也從一年中慶祝不同節日的同事身上學到很多。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多樣性；多元",
    "en_def": "a range of different people or things",
    "sentence": "A: Why did the HR department change the way we advertise job openings this year? B: The company wants more {{BLANK}} in its teams, so we now post jobs in several languages and invite people of different ages, backgrounds, and nationalities to apply for every position.",
    "cn": "A：為什麼人資部門今年改變了刊登職缺的方式？ B：公司希望團隊更加【多元】，所以我們現在用好幾種語言刊登職缺，並邀請不同年齡、背景和國籍的人應徵每一個職位。"
  },
  {
    "word": "ethnic",
    "pos": "adj.",
    "cn_def": "種族的；民族的",
    "en_def": "relating to a group of people with a shared culture or origin",
    "sentence": "A: Where should we take the visiting clients for dinner tonight if they want to try something different from hotel food? B: There is a famous street downtown full of {{BLANK}} restaurants run by families from Thailand, Lebanon, and Mexico, and the prices are reasonable even for a large group like ours.",
    "cn": "A：如果來訪的客戶今晚想吃點和飯店餐點不一樣的東西，我們該帶他們去哪裡吃晚餐？ B：市中心有一條有名的街，滿是來自泰國、黎巴嫩和墨西哥的家庭經營的【異國民族】餐廳，即使像我們這樣的大團體，價格也很合理。"
  },
  {
    "word": "diaspora",
    "pos": "n.",
    "cn_def": "海外僑民（群體）",
    "en_def": "people who have spread from their home country to live in other countries",
    "sentence": "A: Why is our marketing team translating the new advertisement into Korean for the stores in Los Angeles and New York? B: The Korean {{BLANK}} in those cities is very large, and our research shows that many families there still prefer shopping websites and messages written in their first language.",
    "cn": "A：為什麼我們的行銷團隊要把新廣告翻譯成韓文，給洛杉磯和紐約的分店使用？ B：那些城市的韓國【海外僑民】人數非常多，我們的研究顯示，那裡有許多家庭仍然比較喜歡用母語寫的購物網站和訊息。"
  },
  {
    "word": "workforce",
    "pos": "n.",
    "cn_def": "勞動力；全體員工",
    "en_def": "all the workers in a company, industry, or country",
    "sentence": "A: How many of the people working at our factory in Mexico actually come from other countries? B: About a third of our {{BLANK}} there is from abroad, so we hire interpreters for safety training and print every notice in three languages to make sure that nobody misses important information.",
    "cn": "A：在我們墨西哥工廠工作的人當中，實際上有多少來自其他國家？ B：那裡約三分之一的【員工】來自國外，所以我們聘請口譯員進行安全訓練，並把每則公告印成三種語言，確保沒有人錯過重要資訊。"
  },
  {
    "word": "labor",
    "pos": "n.",
    "cn_def": "勞力；勞工",
    "en_def": "work, especially physical work; workers as a group",
    "sentence": "A: Why are construction companies in the area asking the government to accept more workers from overseas? B: There is a serious shortage of {{BLANK}} on building sites, because young local people prefer office jobs, so many projects are falling behind schedule and costing developers a lot more money.",
    "cn": "A：為什麼這一帶的營造公司要求政府接受更多海外工人？ B：工地嚴重缺乏【勞力】，因為當地年輕人比較喜歡辦公室工作，所以許多工程進度落後，讓開發商多花了很多錢。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策",
    "en_def": "a set of official rules or plans made by a government or company",
    "sentence": "A: Has the government changed the rules for hiring nurses and caregivers from other countries this year? B: Yes, the new immigration {{BLANK}} allows hospitals to hire foreign caregivers more quickly, but every worker must now pass a language test before they can start taking care of patients.",
    "cn": "A：政府今年有沒有改變僱用其他國家護理師和看護的規定？ B：有，新的移民【政策】讓醫院能更快聘用外籍看護，但現在每位工作者都必須先通過語言測驗，才能開始照顧病人。"
  },
  {
    "word": "quota",
    "pos": "n.",
    "cn_def": "配額；名額",
    "en_def": "a fixed number or amount that is officially allowed",
    "sentence": "A: Why can't our tech company bring in all ten engineers we interviewed in India last month? B: The government sets a yearly {{BLANK}} for skilled-worker visas, and this year's limit has almost been reached, so we can probably hire only four of them before December.",
    "cn": "A：為什麼我們科技公司不能把上個月在印度面試的十位工程師全部請來？ B：政府對技術人員簽證設定了年度【配額】，今年的上限幾乎已經用完，所以在十二月前我們大概只能聘用其中四位。"
  },
  {
    "word": "screening",
    "pos": "n.",
    "cn_def": "審查；篩檢",
    "en_def": "a careful check of people to find problems or risks",
    "sentence": "A: Why do passengers arriving on international flights have to wait so long at the airport these days? B: Every traveler now goes through a security {{BLANK}} that includes a passport scan, a short interview, and a health check, so the lines are much longer than they were last year.",
    "cn": "A：為什麼最近搭國際航班抵達的旅客在機場要等那麼久？ B：現在每位旅客都要經過一道安全【審查】，包括掃描護照、簡短面談和健康檢查，所以排隊人潮比去年長很多。"
  },
  {
    "word": "sponsor",
    "pos": "v.",
    "cn_def": "擔保；資助",
    "en_def": "to officially support someone's application, for example for a visa",
    "sentence": "A: The young designer we interviewed from Spain is excellent, but she does not have the right to work here yet, does she? B: That's right, so our company has agreed to {{BLANK}} her application, which means we will pay the fees and promise the government that she has a real job with us.",
    "cn": "A：我們面試的那位西班牙年輕設計師非常優秀，但她還沒有在這裡工作的權利，對吧？ B：沒錯，所以我們公司已經同意為她的申請【擔保】，也就是說我們會支付費用，並向政府保證她在我們這裡有一份真正的工作。"
  },
  {
    "word": "undocumented",
    "pos": "adj.",
    "cn_def": "無合法證件的",
    "en_def": "not having official papers that allow you to live or work in a country",
    "sentence": "A: Why did the inspectors visit the clothing factory near the harbor yesterday afternoon? B: They received a report that the owner was hiring {{BLANK}} workers and paying them very little, so they checked everyone's papers and found that six people had no legal right to work.",
    "cn": "A：為什麼檢查人員昨天下午去了港口附近的成衣工廠？ B：他們接獲檢舉，說老闆僱用【無合法證件的】工人而且薪水給得很少，所以他們檢查了每個人的文件，發現有六個人沒有合法工作權。"
  },
  {
    "word": "borderless",
    "pos": "adj.",
    "cn_def": "無國界的",
    "en_def": "without borders or limits between countries",
    "sentence": "A: How can our small design studio work with clients in Europe, Asia, and South America at the same time? B: The internet has created a {{BLANK}} market for creative services, so we hold video meetings across time zones and receive payments online without ever leaving our office here in Taipei.",
    "cn": "A：我們這間小型設計工作室怎麼能同時和歐洲、亞洲和南美洲的客戶合作？ B：網路為創意服務創造了一個【無國界的】市場，所以我們跨時區開視訊會議、在線上收款，完全不用離開我們台北的辦公室。"
  },
  {
    "word": "relocate",
    "pos": "v.",
    "cn_def": "搬遷；調派",
    "en_def": "to move to a new place to live or work",
    "sentence": "A: Why is the whole marketing department packing boxes and cleaning their desks this week? B: The company has decided to {{BLANK}} our regional headquarters to Singapore next month, so most of the team will move there, and HR is helping families find apartments and international schools.",
    "cn": "A：為什麼整個行銷部這週都在打包箱子、整理辦公桌？ B：公司決定下個月把我們的區域總部【搬遷】到新加坡，所以大部分的團隊成員都會搬過去，人資部正在幫各個家庭找公寓和國際學校。"
  },
  {
    "word": "resettle",
    "pos": "v.",
    "cn_def": "重新安置",
    "en_def": "to help people move to a new place to live, especially after leaving their country",
    "sentence": "A: What is the charity in our building doing with all those donated beds, tables, and kitchen supplies? B: They are working with the city to {{BLANK}} forty families who escaped the floods in their home country, and each family will receive a furnished apartment and help finding a job.",
    "cn": "A：我們大樓裡的那個慈善機構拿那些捐贈的床、桌子和廚房用品要做什麼？ B：他們正和市政府合作，【重新安置】四十個逃離母國水災的家庭，每個家庭都會得到一間附家具的公寓，以及找工作的協助。"
  },
  {
    "word": "influx",
    "pos": "n.",
    "cn_def": "湧入",
    "en_def": "a large number of people or things arriving at the same time",
    "sentence": "A: Why are apartment prices near the new science park rising so quickly this year? B: There has been a huge {{BLANK}} of engineers from overseas since the chip factory opened, so landlords are raising rents, and many local families are now looking for cheaper homes farther away.",
    "cn": "A：為什麼新科學園區附近的公寓價格今年漲得這麼快？ B：自從晶片工廠開幕後，大量海外工程師【湧入】，所以房東紛紛調漲租金，許多當地家庭現在都在找更遠、更便宜的房子。"
  },
  {
    "word": "displacement",
    "pos": "n.",
    "cn_def": "流離失所；被迫遷移",
    "en_def": "the situation when people are forced to leave their homes",
    "sentence": "A: Why did the international aid group ask our company to donate tents, clean water, and emergency food this month? B: The earthquake caused the {{BLANK}} of thousands of people from their villages, and many of them are now living in temporary camps with very few supplies.",
    "cn": "A：為什麼國際援助組織這個月請我們公司捐贈帳篷、乾淨的水和緊急糧食？ B：地震造成數千人從村莊【流離失所】，其中許多人現在住在物資非常缺乏的臨時營地。"
  }
];

const MCQS = [
  {
    "q": "Maria moved from Peru to our city five years ago. As a recent _____, she understands the challenges our foreign employees face.",
    "options": [
      "immigrant",
      "border",
      "quota",
      "permit"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "During the harvest season, the farm hires many _____ workers from neighboring countries. They live in shared housing near the fields for three months.",
    "options": [
      "asylum",
      "screening",
      "migrant",
      "citizenship"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The steady _____ of young people to large cities has left many rural shops without staff. Local owners are now offering higher wages.",
    "options": [
      "quota",
      "migration",
      "permit",
      "asylum"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Kevin resigned because he and his wife plan to _____ to Australia next year. Her parents live there and need more help.",
    "options": [
      "deport",
      "sponsor",
      "naturalize",
      "emigrate"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After years of overseas assignments, the Wongs want to _____ in a quiet coastal town. They hope to buy a house there soon.",
    "options": [
      "deport",
      "sponsor",
      "settle",
      "naturalize"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "She has applied for permanent _____ so that she can stay in the country after her contract ends. The process usually takes six months.",
    "options": [
      "residency",
      "border",
      "influx",
      "workforce"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "After living here for twelve years, Hiro Ito finally received his _____. He can now vote in national elections and hold a passport.",
    "options": [
      "quota",
      "influx",
      "diaspora",
      "citizenship"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "Before flying to the trade fair in Mumbai, our director must apply for a business _____. The embassy needs her passport and an invitation letter.",
    "options": [
      "quota",
      "visa",
      "border",
      "labor"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "The new chef cannot start working until his work _____ is approved. Our HR team expects the document to arrive next week.",
    "options": [
      "permit",
      "border",
      "asylum",
      "diaspora"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "The trucks were delayed for six hours at the _____ because customs officers inspected every container. The parts arrived two days late.",
    "options": [
      "diversity",
      "policy",
      "border",
      "quota"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The charity is collecting warm coats for _____ families who escaped the war. Most of them arrived with only one small bag.",
    "options": [
      "workforce",
      "refugee",
      "quota",
      "screening"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The journalist requested political _____ because he feared arrest in his home country. A lawyer is helping him prepare the application.",
    "options": [
      "diversity",
      "workforce",
      "influx",
      "asylum"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "The authorities may _____ workers who stay in the country without legal papers. Employers who hire them can also face large fines.",
    "options": [
      "settle",
      "emigrate",
      "deport",
      "naturalize"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The tourist overstayed his visa by two years and now faces _____. He will be sent back home next week.",
    "options": [
      "deportation",
      "integration",
      "diversity",
      "diaspora"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Twenty new citizens took an oath at the _____ ceremony in city hall. Each of them had lived here for at least eight years.",
    "options": [
      "screening",
      "labor",
      "quota",
      "naturalization"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Free language classes help foreign staff with their _____ into the local community. Employees who feel at home are more likely to stay.",
    "options": [
      "border",
      "integration",
      "quota",
      "deportation"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Our Singapore office is truly _____, with staff from fifteen countries. Lunch breaks often feature dishes from several different cuisines.",
    "options": [
      "multicultural",
      "undocumented",
      "expensive",
      "temporary"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The company wants more _____ in its teams, so it now advertises jobs in several languages. It welcomes applicants of all backgrounds.",
    "options": [
      "deportation",
      "displacement",
      "diversity",
      "quota"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The street downtown is lined with _____ restaurants run by families from Thailand and Lebanon. Visiting clients always enjoy dining there.",
    "options": [
      "undocumented",
      "ethnic",
      "borderless",
      "legal"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "The Korean _____ in Los Angeles is very large. Our marketing team is translating the advertisement for customers there.",
    "options": [
      "quota",
      "permit",
      "asylum",
      "diaspora"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Nearly a third of the factory's _____ comes from abroad. All safety notices are therefore printed in three languages.",
    "options": [
      "asylum",
      "citizenship",
      "workforce",
      "border"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "Construction firms report a serious shortage of skilled _____ on building sites. Several projects are now behind schedule.",
    "options": [
      "labor",
      "diaspora",
      "asylum",
      "citizenship"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The government's new immigration _____ allows hospitals to hire foreign caregivers faster. However, every applicant must pass a language test.",
    "options": [
      "diaspora",
      "influx",
      "border",
      "policy"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The annual _____ for skilled-worker visas has almost been reached. Our company may hire only four engineers this year.",
    "options": [
      "diaspora",
      "quota",
      "asylum",
      "displacement"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "All arriving passengers must go through a security _____ that includes a passport scan. The lines at the airport are long today.",
    "options": [
      "screening",
      "diaspora",
      "labor",
      "citizenship"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Our firm has agreed to _____ the designer's work visa application. We will pay the fees and confirm her job offer.",
    "options": [
      "deport",
      "emigrate",
      "sponsor",
      "settle"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Inspectors found six _____ workers at the factory who had no legal right to work. The owner now faces a heavy fine.",
    "options": [
      "multicultural",
      "undocumented",
      "borderless",
      "ethnic"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The company will _____ its regional headquarters to Singapore next month. HR is helping families find apartments and schools.",
    "options": [
      "deport",
      "emigrate",
      "naturalize",
      "relocate"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Since the chip factory opened, there has been a huge _____ of engineers from overseas. Rents near the science park have risen sharply.",
    "options": [
      "border",
      "permit",
      "influx",
      "asylum"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The earthquake caused the _____ of thousands of villagers. Many of them are now living in temporary camps with few supplies.",
    "options": [
      "displacement",
      "diversity",
      "citizenship",
      "quota"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "immigrant": {
    "pos": "n.",
    "en_def": "a person who comes to live permanently in a new country",
    "cn_def": "移民（移入者）"
  },
  "migrant": {
    "pos": "n.",
    "en_def": "a person who moves from place to place, often to find work",
    "cn_def": "移工；流動人口"
  },
  "migration": {
    "pos": "n.",
    "en_def": "the movement of people from one place to another",
    "cn_def": "遷移；移居"
  },
  "emigrate": {
    "pos": "v.",
    "en_def": "to leave your own country to live in another one",
    "cn_def": "移居國外"
  },
  "emigration": {
    "pos": "n.",
    "en_def": "the act of leaving your country to live in another one",
    "cn_def": "移出；移居國外"
  },
  "settle": {
    "pos": "v.",
    "en_def": "to start living in a place permanently",
    "cn_def": "定居"
  },
  "residency": {
    "pos": "n.",
    "en_def": "the legal right to live in a country",
    "cn_def": "居留權；居留"
  },
  "citizenship": {
    "pos": "n.",
    "en_def": "the legal status of being a member of a country",
    "cn_def": "公民身分；國籍"
  },
  "visa": {
    "pos": "n.",
    "en_def": "an official document that lets you enter or stay in a country",
    "cn_def": "簽證"
  },
  "permit": {
    "pos": "n.",
    "en_def": "an official document that allows you to do something",
    "cn_def": "許可證"
  },
  "border": {
    "pos": "n.",
    "en_def": "the line that separates two countries",
    "cn_def": "邊境；國界"
  },
  "refugee": {
    "pos": "n.",
    "en_def": "a person forced to leave their country because of war or danger",
    "cn_def": "難民"
  },
  "asylum": {
    "pos": "n.",
    "en_def": "protection given by a country to people escaping danger at home",
    "cn_def": "庇護"
  },
  "deport": {
    "pos": "v.",
    "en_def": "to force a foreign person to leave a country",
    "cn_def": "驅逐出境"
  },
  "deportation": {
    "pos": "n.",
    "en_def": "the act of forcing someone to leave a country",
    "cn_def": "驅逐出境；遣返"
  },
  "naturalize": {
    "pos": "v.",
    "en_def": "to make a foreign person a citizen of a country",
    "cn_def": "使歸化（入籍）"
  },
  "naturalization": {
    "pos": "n.",
    "en_def": "the process of becoming a citizen of a new country",
    "cn_def": "歸化；入籍"
  },
  "integration": {
    "pos": "n.",
    "en_def": "the process of becoming part of a new group or society",
    "cn_def": "融入；融合"
  },
  "assimilation": {
    "pos": "n.",
    "en_def": "the process of fully taking on the culture of a new place",
    "cn_def": "同化"
  },
  "multicultural": {
    "pos": "adj.",
    "en_def": "including people of many different cultures",
    "cn_def": "多元文化的"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "a range of different people or things",
    "cn_def": "多樣性；多元"
  },
  "ethnic": {
    "pos": "adj.",
    "en_def": "relating to a group of people with a shared culture or origin",
    "cn_def": "種族的；民族的"
  },
  "diaspora": {
    "pos": "n.",
    "en_def": "people who have spread from their home country to live in other countries",
    "cn_def": "海外僑民（群體）"
  },
  "workforce": {
    "pos": "n.",
    "en_def": "all the workers in a company, industry, or country",
    "cn_def": "勞動力；全體員工"
  },
  "labor": {
    "pos": "n.",
    "en_def": "work, especially physical work; workers as a group",
    "cn_def": "勞力；勞工"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a set of official rules or plans made by a government or company",
    "cn_def": "政策"
  },
  "quota": {
    "pos": "n.",
    "en_def": "a fixed number or amount that is officially allowed",
    "cn_def": "配額；名額"
  },
  "screening": {
    "pos": "n.",
    "en_def": "a careful check of people to find problems or risks",
    "cn_def": "審查；篩檢"
  },
  "sponsor": {
    "pos": "v.",
    "en_def": "to officially support someone's application, for example for a visa",
    "cn_def": "擔保；資助"
  },
  "undocumented": {
    "pos": "adj.",
    "en_def": "not having official papers that allow you to live or work in a country",
    "cn_def": "無合法證件的"
  },
  "borderless": {
    "pos": "adj.",
    "en_def": "without borders or limits between countries",
    "cn_def": "無國界的"
  },
  "relocate": {
    "pos": "v.",
    "en_def": "to move to a new place to live or work",
    "cn_def": "搬遷；調派"
  },
  "resettle": {
    "pos": "v.",
    "en_def": "to help people move to a new place to live, especially after leaving their country",
    "cn_def": "重新安置"
  },
  "influx": {
    "pos": "n.",
    "en_def": "a large number of people or things arriving at the same time",
    "cn_def": "湧入"
  },
  "displacement": {
    "pos": "n.",
    "en_def": "the situation when people are forced to leave their homes",
    "cn_def": "流離失所；被迫遷移"
  }
};

const EXTRA_GLOSSES = {};
