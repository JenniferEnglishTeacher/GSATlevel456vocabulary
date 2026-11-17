// Topic 279 Quiz Data: Petition 請願
// Source word list: https://www.examword.com/group-topic/petition — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T279 - Petition 請願",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "signature",
    "pos": "n.",
    "cn_def": "簽名",
    "en_def": "a person's name written by themselves to show agreement",
    "sentence": "A: Why is Mr. Chen standing near the front entrance of the office building with a clipboard and a pen this morning? B: He is asking every employee to add a {{BLANK}} to the petition for a safer crosswalk outside, because two workers were nearly hit by cars last week while walking to the bus stop.",
    "cn": "A：陳先生今天早上為什麼拿著寫字板和筆站在辦公大樓的正門附近？ B：他正在請每位員工在要求外面設置更安全斑馬線的請願書上【簽名】，因為上週有兩位員工走去公車站時差點被車撞到。"
  },
  {
    "word": "support",
    "pos": "n.",
    "cn_def": "支持；支援",
    "en_def": "help or agreement that you give to a person or idea",
    "sentence": "A: Do you think the building manager will agree to install bike racks in the parking garage before the end of the summer? B: I think so, because our petition already has strong {{BLANK}} from more than two hundred tenants, and several companies on the fifth floor have also promised to share the cost.",
    "cn": "A：你認為大樓管理員會同意在夏天結束前於停車場安裝腳踏車架嗎？ B：我想會，因為我們的請願已經獲得超過兩百位租戶的大力【支持】，而且五樓的幾家公司也承諾分攤費用。"
  },
  {
    "word": "cause",
    "pos": "n.",
    "cn_def": "目標；理想；公益事業",
    "en_def": "an aim or idea that people support or work for",
    "sentence": "A: Why did so many staff members from the accounting department sign the petition about the river near the factory? B: They believe that protecting clean water is an important {{BLANK}}, and many of them live in the small town downstream, where families have noticed dead fish along the riverbank this spring.",
    "cn": "A：為什麼會計部有這麼多員工簽署了關於工廠附近那條河的請願書？ B：他們認為保護乾淨的水源是一項重要的【理念】，而且他們之中很多人住在下游的小鎮，那裡的家庭今年春天在河岸邊發現了死魚。"
  },
  {
    "word": "demand",
    "pos": "n.",
    "cn_def": "要求；需求",
    "en_def": "a strong request for something",
    "sentence": "A: What exactly does the petition from the delivery drivers ask the company to change this year? B: Their main {{BLANK}} is longer lunch breaks, because many drivers now work ten-hour shifts in hot weather, and they say they have no time to rest or eat properly between deliveries.",
    "cn": "A：送貨司機的請願書到底要求公司今年改變什麼？ B：他們主要的【要求】是更長的午休時間，因為許多司機現在要在炎熱的天氣裡輪十小時的班，他們說在送貨之間沒有時間好好休息或吃飯。"
  },
  {
    "word": "request",
    "pos": "n.",
    "cn_def": "請求；要求",
    "en_def": "the act of politely asking for something",
    "sentence": "A: Has the city office replied to the petition we sent about adding more streetlights near the train station? B: Yes, they received our {{BLANK}} last Monday, and an official called to say that engineers will visit the area next month to check how dark the sidewalks become after seven o'clock.",
    "cn": "A：市政府辦公室有回覆我們寄去、要求在火車站附近增設路燈的請願書嗎？ B：有，他們上週一收到了我們的【請求】，一位官員打電話來說工程師下個月會到那一帶查看人行道在七點以後有多暗。"
  },
  {
    "word": "protest",
    "pos": "n.",
    "cn_def": "抗議；抗議活動",
    "en_def": "an event where people show they strongly disagree with something",
    "sentence": "A: Why were there so many people holding signs outside the shopping mall when I drove past it at lunchtime? B: Local shop owners organized a peaceful {{BLANK}} against the plan to double the rent, and they were also asking shoppers to sign a petition before the mall's board meets on Friday.",
    "cn": "A：我中午開車經過購物中心時，為什麼外面有那麼多人拿著標語？ B：當地店家發起了一場和平的【抗議】，反對租金加倍的計畫，而且他們也在請購物的人在購物中心董事會週五開會前簽署請願書。"
  },
  {
    "word": "campaign",
    "pos": "n.",
    "cn_def": "活動；運動",
    "en_def": "a planned set of activities to reach a goal",
    "sentence": "A: How did the parents at the international school get so many people to sign their petition in only two weeks? B: They started an online {{BLANK}} with short videos and posters, and local businesses shared the link on social media, so thousands of neighbors learned about the plan to close the school library.",
    "cn": "A：國際學校的家長們怎麼能在短短兩週內讓那麼多人簽署他們的請願書？ B：他們用短片和海報發起了一場網路【活動】，當地商家也在社群媒體上分享連結，所以數千位鄰居都知道了關閉學校圖書館的計畫。"
  },
  {
    "word": "advocate",
    "pos": "v.",
    "cn_def": "提倡；擁護",
    "en_def": "to speak publicly in support of an idea or plan",
    "sentence": "A: Why has the human resources manager been meeting with the employee committee every Thursday afternoon this month? B: She wants to {{BLANK}} for a flexible working schedule, so she is collecting their ideas and survey results to present a strong plan to the directors at the board meeting next month.",
    "cn": "A：人資經理這個月為什麼每週四下午都和員工委員會開會？ B：她想要【倡導】彈性工作時間，所以她正在收集他們的想法和問卷結果，以便下個月在董事會上向董事們提出一個有力的方案。"
  },
  {
    "word": "organize",
    "pos": "v.",
    "cn_def": "組織；籌辦",
    "en_def": "to plan and arrange people or activities",
    "sentence": "A: Who is going to collect signatures for the petition about the broken elevator in our apartment building? B: Mrs. Lin offered to {{BLANK}} a small team of volunteers, and they will knock on every door this weekend, explain the problem, and ask each family to sign before the management meeting.",
    "cn": "A：誰要為我們公寓大樓電梯故障的請願書收集簽名？ B：林太太自願【組織】一個小型志工團隊，他們這個週末會挨家挨戶敲門，說明問題，並請每戶在管委會開會前簽名。"
  },
  {
    "word": "collect",
    "pos": "v.",
    "cn_def": "收集；領取",
    "en_def": "to bring things together from different people or places",
    "sentence": "A: What are you planning to do at the farmers' market on Saturday morning before the weekly meeting? B: I am going to set up a small table near the entrance and {{BLANK}} signatures from shoppers who want the city to keep the market open on Sundays throughout the busy summer season.",
    "cn": "A：你週六早上在每週會議前打算在農夫市集做什麼？ B：我要在入口附近擺一張小桌子，向希望市政府在繁忙的夏季期間讓市集週日也照常營業的購物者【收集】簽名。"
  },
  {
    "word": "submit",
    "pos": "v.",
    "cn_def": "提交；遞交",
    "en_def": "to give a document to someone for a decision",
    "sentence": "A: When will the residents' committee hand in the petition about the noisy construction work at night? B: They plan to {{BLANK}} it to the district office next Tuesday morning, after they count all the signatures and attach photos showing that the workers often continue drilling until eleven o'clock.",
    "cn": "A：住戶委員會什麼時候會遞交有關夜間施工噪音的請願書？ B：他們打算在算完所有簽名、並附上顯示工人常常鑽地到十一點的照片後，於下週二早上把它【提交】給區公所。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "當局；主管機關；權力",
    "en_def": "an official group or the power to make decisions",
    "sentence": "A: Which department should we send our petition to if we want the bus company to add an extra route to the business park? B: You should contact the local transport {{BLANK}}, because it controls all the public bus routes in the city and decides how often the buses run every day.",
    "cn": "A：如果我們希望公車公司增加一條到商業園區的路線，應該把請願書寄給哪個部門？ B：你應該聯絡當地的交通【主管機關】，因為它掌管市內所有的公車路線，並決定每天公車多久開一班。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；方針",
    "en_def": "a set of rules or plans of a company or government",
    "sentence": "A: Why are the employees in the sales department asking everyone in the company to sign a petition this week? B: They want management to change the travel {{BLANK}}, because the current rules force them to take early morning flights and pay for hotel breakfasts with their own money during business trips.",
    "cn": "A：業務部的員工這週為什麼要求公司每個人簽署請願書？ B：他們希望管理階層修改差旅【政策】，因為目前的規定強迫他們出差時搭清晨班機，還要自己付飯店早餐的錢。"
  },
  {
    "word": "reform",
    "pos": "n.",
    "cn_def": "改革；改進",
    "en_def": "a change made to improve a system",
    "sentence": "A: What does the long petition on the staff notice board in the cafeteria say about our pay system? B: It calls for a complete {{BLANK}} of the bonus system, because many workers feel the current rules are unclear and unfair to people who work in the evening and weekend shifts.",
    "cn": "A：員工餐廳公告欄上那份很長的請願書對我們的薪資制度說了什麼？ B：它呼籲徹底【改革】獎金制度，因為許多員工覺得目前的規定不清楚，而且對上晚班和週末班的人不公平。"
  },
  {
    "word": "legal",
    "pos": "adj.",
    "cn_def": "法律的；合法的",
    "en_def": "connected with the law; allowed by law",
    "sentence": "A: Before we post the petition online, should we check whether we are allowed to use the names and photos of our customers? B: Yes, I already asked our {{BLANK}} team to review the documents, and they told me we must get written permission from every customer before we share any personal information.",
    "cn": "A：在我們把請願書放到網路上之前，是否應該確認我們能不能使用顧客的姓名和照片？ B：是的，我已經請我們的【法務】團隊審閱文件，他們告訴我在分享任何個人資料前，必須取得每位顧客的書面同意。"
  },
  {
    "word": "approve",
    "pos": "v.",
    "cn_def": "批准；同意",
    "en_def": "to officially agree to a plan or request",
    "sentence": "A: Do you know if the board of directors made a decision about the petition for a new staff parking area? B: Yes, they voted to {{BLANK}} the plan yesterday afternoon, so construction will begin in March, and employees will finally be able to park close to the office instead of across the busy road.",
    "cn": "A：你知道董事會對新員工停車區的請願書做出決定了嗎？ B：知道，他們昨天下午投票【批准】了這個計畫，所以三月就會開工，員工終於可以把車停在辦公室附近，而不用停在繁忙馬路的另一邊。"
  },
  {
    "word": "reject",
    "pos": "v.",
    "cn_def": "拒絕；駁回",
    "en_def": "to say no to a plan, offer or request",
    "sentence": "A: Why did the residents look so disappointed when they left the town hall meeting last night? B: The council decided to {{BLANK}} their petition for a new playground, because officials said there was not enough money in this year's budget, although they promised to look at the idea again next year.",
    "cn": "A：昨晚居民離開鎮公所會議時為什麼看起來那麼失望？ B：議會決定【駁回】他們興建新遊樂場的請願，因為官員說今年的預算不夠，不過他們承諾明年會再考慮這個想法。"
  },
  {
    "word": "debate",
    "pos": "n.",
    "cn_def": "辯論；討論",
    "en_def": "a discussion in which people give different opinions",
    "sentence": "A: Why did the staff meeting last so long this morning when it was only supposed to take thirty minutes? B: There was a long {{BLANK}} about the petition to allow working from home on Fridays, because some managers worried about customer service while many employees argued that they would be more productive.",
    "cn": "A：今天早上的員工會議本來只要三十分鐘，為什麼開了那麼久？ B：針對允許週五在家工作的請願書有一場冗長的【辯論】，因為有些經理擔心客戶服務，而許多員工則認為他們的工作效率會更高。"
  },
  {
    "word": "issue",
    "pos": "n.",
    "cn_def": "問題；議題",
    "en_def": "a problem or subject that people discuss",
    "sentence": "A: Why are so many tenants in our office tower signing a petition to the building management company? B: The main {{BLANK}} is the air conditioning, which has been breaking down almost every afternoon, so people on the upper floors feel uncomfortable and find it very hard to concentrate on their work.",
    "cn": "A：為什麼我們辦公大樓有那麼多租戶在簽署給大樓管理公司的請願書？ B：主要的【問題】是空調，它幾乎每天下午都會故障，所以高樓層的人覺得很不舒服，也很難專心工作。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；認識",
    "en_def": "knowledge or understanding of a problem",
    "sentence": "A: Besides collecting signatures, what else does the environmental club hope to achieve with its petition this spring? B: They also want to raise {{BLANK}} about plastic waste in the office, so they are putting up posters in the kitchens and giving short talks during lunch breaks to explain how much plastic we throw away.",
    "cn": "A：除了收集簽名之外，環保社今年春天還希望藉由請願達成什麼？ B：他們也想提高大家對辦公室塑膠垃圾的【意識】，所以他們在茶水間張貼海報，並在午休時進行簡短演講，說明我們丟掉了多少塑膠。"
  },
  {
    "word": "volunteer",
    "pos": "n.",
    "cn_def": "志工；義工",
    "en_def": "a person who works without being paid",
    "sentence": "A: How did the small community group manage to visit so many homes in such a short time last weekend? B: Every {{BLANK}} took one street, carried a copy of the petition and a map, and spent about four hours talking to neighbors and answering their questions about the new recycling center.",
    "cn": "A：那個小型社區團體上週末是怎麼在這麼短的時間內拜訪那麼多住家的？ B：每位【志工】負責一條街，帶著一份請願書和一張地圖，花了大約四個小時和鄰居交談，並回答他們關於新資源回收中心的問題。"
  },
  {
    "word": "circulate",
    "pos": "v.",
    "cn_def": "傳閱；散發",
    "en_def": "to pass something to many people",
    "sentence": "A: How can we make sure that employees at all five branches see our petition before the end of the month? B: We can {{BLANK}} it by email to every branch manager and ask them to print copies, place them in the staff rooms, and remind their teams during morning meetings.",
    "cn": "A：我們要怎麼確保五間分公司的員工都能在月底前看到我們的請願書？ B：我們可以透過電子郵件將它【傳閱】給每位分公司經理，並請他們列印副本放在員工休息室，並在晨會時提醒團隊。"
  },
  {
    "word": "endorse",
    "pos": "v.",
    "cn_def": "公開支持；為……背書",
    "en_def": "to say publicly that you support someone or something",
    "sentence": "A: Why did the number of signatures on the petition suddenly increase so quickly over the weekend? B: A famous local chef decided to publicly {{BLANK}} it on his popular cooking show, and many of his viewers went online right after the program to add their names and share the link.",
    "cn": "A：為什麼請願書上的簽名數在週末突然增加得那麼快？ B：一位知名的在地主廚決定在他很受歡迎的烹飪節目中公開【支持】它，很多觀眾在節目結束後馬上上網簽名並分享連結。"
  },
  {
    "word": "opposition",
    "pos": "n.",
    "cn_def": "反對；反對者",
    "en_def": "strong disagreement with a plan or idea",
    "sentence": "A: Do you think the plan to build a large parking garage behind the library will go ahead next year? B: I'm not sure, because there is strong {{BLANK}} from nearby residents, who signed a petition saying the project will increase traffic and remove the only green space in the neighborhood.",
    "cn": "A：你認為在圖書館後面興建大型停車場的計畫明年會實行嗎？ B：我不確定，因為附近居民強烈【反對】，他們簽署了一份請願書，表示這項工程會增加交通流量，並奪走這一帶唯一的綠地。"
  },
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "the people who live in one area",
    "sentence": "A: Why did the bank decide to keep its small branch open in the village instead of closing it as planned? B: The local {{BLANK}} worked together on a petition, and many elderly customers explained that they cannot use online banking and would have to travel an hour to reach the next branch.",
    "cn": "A：銀行為什麼決定保留村裡那間小分行，而沒有照原計畫關閉？ B：當地【社區】的人一起發起請願，許多年長客戶說明他們不會使用網路銀行，而且得花一個小時才能到下一間分行。"
  },
  {
    "word": "citizen",
    "pos": "n.",
    "cn_def": "公民；市民",
    "en_def": "a person who legally belongs to a country or city",
    "sentence": "A: Can anyone sign the online petition about the new bus fares, or do you need to live in the city? B: Any {{BLANK}} over eighteen can sign it, but the organizers especially want signatures from people who take the bus to work every day, because they will be affected the most by the higher prices.",
    "cn": "A：任何人都可以簽署關於公車新票價的線上請願嗎？還是必須住在這個城市？ B：任何年滿十八歲的【公民】都可以簽署，但發起人特別希望每天搭公車上班的人簽名，因為票價調漲對他們的影響最大。"
  },
  {
    "word": "represent",
    "pos": "v.",
    "cn_def": "代表",
    "en_def": "to speak or act for another person or group",
    "sentence": "A: Who will speak to the hotel's general manager about the petition that the kitchen staff wrote last month? B: Two senior chefs were chosen to {{BLANK}} the whole team at the meeting, and they will explain why the staff need better ventilation and more breaks during long and busy holiday shifts.",
    "cn": "A：誰會就廚房員工上個月寫的請願書去跟飯店總經理談？ B：兩位資深主廚被選出來在會議上【代表】整個團隊，他們會解釋為什麼員工在漫長忙碌的假日班需要更好的通風和更多休息時間。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響；衝擊",
    "en_def": "a strong effect on something",
    "sentence": "A: Has the petition from the parents and teachers made any difference to the plans for the new highway near the school? B: Yes, it had a big {{BLANK}}, because the city decided to build a sound wall and a safe bridge for students, and it will also lower the speed limit during school hours.",
    "cn": "A：家長和老師的請願書對學校附近新高速公路的計畫有產生任何改變嗎？ B：有，它產生了很大的【影響】，因為市政府決定為學生興建隔音牆和安全的天橋，而且上學時段也會降低速限。"
  },
  {
    "word": "urgent",
    "pos": "adj.",
    "cn_def": "緊急的；急迫的",
    "en_def": "needing attention or action right away",
    "sentence": "A: Why did the office manager send a message to all staff asking them to sign the petition before tomorrow afternoon? B: It is {{BLANK}} because the landlord will make a final decision about the rent increase at a meeting tomorrow evening, and we need at least three hundred names before then to be heard.",
    "cn": "A：辦公室經理為什麼傳訊息給所有員工，請他們在明天下午前簽署請願書？ B：這件事很【緊急】，因為房東明天晚上開會時會對調漲租金做出最後決定，我們需要在那之前取得至少三百個簽名才能讓他們聽見我們的聲音。"
  },
  {
    "word": "grievance",
    "pos": "n.",
    "cn_def": "申訴；不滿",
    "en_def": "a formal complaint about unfair treatment",
    "sentence": "A: What should a worker do if they feel that a manager has treated them unfairly during the annual review? B: They can file a formal {{BLANK}} with the human resources department, and if many colleagues share the same complaint, they can also write a petition together asking for a fair review process.",
    "cn": "A：如果員工覺得經理在年度考核中對他們不公平，應該怎麼做？ B：他們可以向人資部門正式提出【申訴】，如果很多同事都有同樣的不滿，他們也可以一起寫請願書，要求公平的考核流程。"
  },
  {
    "word": "resolution",
    "pos": "n.",
    "cn_def": "解決；解決方案；決議",
    "en_def": "an answer or solution to a problem or disagreement",
    "sentence": "A: How did the long argument between the tenants and the building owner about the broken heating finally end? B: After the tenants delivered a petition with ninety signatures, both sides met with a lawyer and reached a {{BLANK}}: the owner will repair the system this week and lower the rent for one month.",
    "cn": "A：租戶和屋主之間關於暖氣故障的長期爭執最後是怎麼結束的？ B：在租戶遞交了一份有九十個簽名的請願書後，雙方和一位律師會面並達成了【解決方案】：屋主這週會修理系統，並減少一個月的租金。"
  },
  {
    "word": "democracy",
    "pos": "n.",
    "cn_def": "民主；民主制度",
    "en_def": "a system in which people vote to make decisions",
    "sentence": "A: Why does our company let employees vote on new workplace rules and suggest changes through petitions? B: The founder believes that workplace {{BLANK}} makes people feel respected, so every staff member can share ideas, and the most popular suggestions are discussed at the monthly meeting with the directors.",
    "cn": "A：我們公司為什麼讓員工針對新的職場規定投票，並透過請願提出修改建議？ B：創辦人相信職場【民主】能讓人感到被尊重，所以每位員工都可以分享想法，而最受歡迎的建議會在每月和董事們的會議上討論。"
  },
  {
    "word": "initiative",
    "pos": "n.",
    "cn_def": "倡議；新措施；主動性",
    "en_def": "a new plan to solve a problem; the ability to act without being told",
    "sentence": "A: Who started the petition for healthier food in the company cafeteria that everyone has been talking about? B: It was a new {{BLANK}} from the young engineers on the third floor, who noticed that the cafeteria serves fried food almost every day and wanted more salads and fresh fruit on the menu.",
    "cn": "A：大家都在談論的、要求公司餐廳提供更健康食物的請願是誰發起的？ B：那是三樓年輕工程師們的一項新【倡議】，他們注意到餐廳幾乎每天都供應油炸食物，希望菜單上能有更多沙拉和新鮮水果。"
  },
  {
    "word": "appeal",
    "pos": "n.",
    "cn_def": "上訴；申訴；呼籲",
    "en_def": "a formal request to change a decision; a strong request for help",
    "sentence": "A: The city rejected our petition for a new bike lane last month, so is there anything else we can do now? B: We can make an {{BLANK}} to the city council within thirty days, and this time we should include accident reports and photos to show how dangerous the road is for cyclists.",
    "cn": "A：市政府上個月駁回了我們增設自行車道的請願，那我們現在還能做什麼嗎？ B：我們可以在三十天內向市議會提出【申訴】，這次我們應該附上事故報告和照片，以顯示那條路對騎自行車的人有多危險。"
  }
];

const MCQS = [
  {
    "q": "The contract is not valid until the client adds a _____ at the bottom. Please send it back to our office by Friday.",
    "options": [
      "signature",
      "campaign",
      "policy",
      "awareness"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new recycling plan received strong _____ from employees. More than ninety percent of the staff voted in favor of it.",
    "options": [
      "grievance",
      "support",
      "authority",
      "signature"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The company donates part of its profits to a good _____ every year. This year the money will help local animal shelters.",
    "options": [
      "demand",
      "debate",
      "cause",
      "reform"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Management finally agreed to meet the workers' main _____ for safer equipment. New safety gear will arrive at the factory next week.",
    "options": [
      "awareness",
      "signature",
      "democracy",
      "demand"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Our manager approved my _____ for two days off next week. I will use the time to visit my parents in Tainan.",
    "options": [
      "protest",
      "request",
      "impact",
      "opposition"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Hundreds of drivers joined a peaceful _____ outside the head office. They were unhappy about the sudden cut in delivery fees.",
    "options": [
      "protest",
      "resolution",
      "signature",
      "initiative"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The marketing team will launch an advertising _____ next month. It will include TV commercials and online banners for the new phone.",
    "options": [
      "grievance",
      "authority",
      "citizen",
      "campaign"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Many doctors _____ regular exercise for people who sit at a desk all day. They say a short walk after lunch improves focus.",
    "options": [
      "reject",
      "circulate",
      "advocate",
      "submit"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Our office manager will _____ the annual company picnic this year. She has already booked the park and ordered food for everyone.",
    "options": [
      "organize",
      "endorse",
      "reject",
      "represent"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Please _____ your visitor badge at the front desk when you arrive. Security will not let you enter the building without it.",
    "options": [
      "approve",
      "circulate",
      "collect",
      "advocate"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "All applicants must _____ their forms online before the end of May. Late applications will not be accepted by the hiring team.",
    "options": [
      "endorse",
      "submit",
      "advocate",
      "represent"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Only the general manager has the _____ to sign contracts over one million dollars. Other managers must ask for her approval first.",
    "options": [
      "awareness",
      "opposition",
      "campaign",
      "authority"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "According to company _____, all visitors must wear a name badge. This rule helps the security team know who is in the building.",
    "options": [
      "policy",
      "signature",
      "impact",
      "protest"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The new CEO promised a major _____ of the hiring process. Interviews will now be shorter, and decisions will be made within one week.",
    "options": [
      "grievance",
      "reform",
      "citizen",
      "awareness"
    ],
    "answer": 1,
    "vocabIndex": 13
  },
  {
    "q": "Before signing the agreement, we should get _____ advice from a lawyer. The contract contains several terms that are hard to understand.",
    "options": [
      "sudden",
      "polite",
      "careless",
      "legal"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The finance director must _____ every purchase over five thousand dollars. Please send her the details and a price quote first.",
    "options": [
      "circulate",
      "collect",
      "approve",
      "organize"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "The client may _____ our proposal if the price is too high. Let's offer a small discount to make the deal more attractive.",
    "options": [
      "advocate",
      "reject",
      "organize",
      "circulate"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "After a long _____, the board voted to open a new branch in Kaohsiung. Some directors worried about costs, but most supported the plan.",
    "options": [
      "debate",
      "signature",
      "citizen",
      "awareness"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The health fair aims to raise _____ of heart disease among employees. Nurses will also check everyone's blood pressure for free.",
    "options": [
      "authority",
      "opposition",
      "awareness",
      "resolution"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Please _____ this memo to everyone in your department by noon. It explains the new rules for booking meeting rooms.",
    "options": [
      "reject",
      "advocate",
      "approve",
      "circulate"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Several famous athletes agreed to _____ the new sports drink. Their photos will appear on posters in every convenience store.",
    "options": [
      "endorse",
      "submit",
      "collect",
      "organize"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The plan to close the night shift met strong _____ from factory workers. Many of them depend on the extra pay to support their families.",
    "options": [
      "resolution",
      "initiative",
      "signature",
      "opposition"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Two senior engineers will _____ our company at the trade fair in Berlin. They will meet buyers and show our latest products.",
    "options": [
      "approve",
      "represent",
      "circulate",
      "reject"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The new highway will have a major _____ on local businesses. Shops along the old road may lose many of their regular customers.",
    "options": [
      "request",
      "signature",
      "impact",
      "cause"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "This is an _____ matter, so please call the client back right away. She needs an answer before her flight leaves at noon.",
    "options": [
      "urgent",
      "annual",
      "empty",
      "honest"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Employees who feel they were treated unfairly can file a _____ with human resources. Each complaint will be reviewed within ten working days.",
    "options": [
      "campaign",
      "grievance",
      "citizen",
      "democracy"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "After three hours of talks, both companies finally reached a _____. They agreed to share the cost of the delayed shipment.",
    "options": [
      "protest",
      "policy",
      "signature",
      "resolution"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Linda took the _____ and fixed the printer before anyone asked her. Her manager praised her for being so helpful to the team.",
    "options": [
      "initiative",
      "authority",
      "opposition",
      "awareness"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The charity made an _____ for donations after the flood. Many local companies quickly sent money, food, and clean drinking water.",
    "options": [
      "impact",
      "issue",
      "appeal",
      "opposition"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The new library will be open to the whole _____, not just students. Local residents can borrow books there for free.",
    "options": [
      "authority",
      "community",
      "opposition",
      "campaign"
    ],
    "answer": 1,
    "vocabIndex": 24
  }
];

const LOOKUP = {
  "signature": {
    "pos": "n.",
    "en_def": "a person's name written by themselves to show agreement",
    "cn_def": "簽名"
  },
  "support": {
    "pos": "n.",
    "en_def": "help or agreement that you give to a person or idea",
    "cn_def": "支持；支援"
  },
  "cause": {
    "pos": "n.",
    "en_def": "an aim or idea that people support or work for",
    "cn_def": "目標；理想；公益事業"
  },
  "demand": {
    "pos": "n.",
    "en_def": "a strong request for something",
    "cn_def": "要求；需求"
  },
  "request": {
    "pos": "n.",
    "en_def": "the act of politely asking for something",
    "cn_def": "請求；要求"
  },
  "protest": {
    "pos": "n.",
    "en_def": "an event where people show they strongly disagree with something",
    "cn_def": "抗議；抗議活動"
  },
  "campaign": {
    "pos": "n.",
    "en_def": "a planned set of activities to reach a goal",
    "cn_def": "活動；運動"
  },
  "advocate": {
    "pos": "v.",
    "en_def": "to speak publicly in support of an idea or plan",
    "cn_def": "提倡；擁護"
  },
  "organize": {
    "pos": "v.",
    "en_def": "to plan and arrange people or activities",
    "cn_def": "組織；籌辦"
  },
  "collect": {
    "pos": "v.",
    "en_def": "to bring things together from different people or places",
    "cn_def": "收集；領取"
  },
  "submit": {
    "pos": "v.",
    "en_def": "to give a document to someone for a decision",
    "cn_def": "提交；遞交"
  },
  "authority": {
    "pos": "n.",
    "en_def": "an official group or the power to make decisions",
    "cn_def": "當局；主管機關；權力"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a set of rules or plans of a company or government",
    "cn_def": "政策；方針"
  },
  "reform": {
    "pos": "n.",
    "en_def": "a change made to improve a system",
    "cn_def": "改革；改進"
  },
  "legal": {
    "pos": "adj.",
    "en_def": "connected with the law; allowed by law",
    "cn_def": "法律的；合法的"
  },
  "approve": {
    "pos": "v.",
    "en_def": "to officially agree to a plan or request",
    "cn_def": "批准；同意"
  },
  "reject": {
    "pos": "v.",
    "en_def": "to say no to a plan, offer or request",
    "cn_def": "拒絕；駁回"
  },
  "debate": {
    "pos": "n.",
    "en_def": "a discussion in which people give different opinions",
    "cn_def": "辯論；討論"
  },
  "issue": {
    "pos": "n.",
    "en_def": "a problem or subject that people discuss",
    "cn_def": "問題；議題"
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowledge or understanding of a problem",
    "cn_def": "意識；認識"
  },
  "volunteer": {
    "pos": "n.",
    "en_def": "a person who works without being paid",
    "cn_def": "志工；義工"
  },
  "circulate": {
    "pos": "v.",
    "en_def": "to pass something to many people",
    "cn_def": "傳閱；散發"
  },
  "endorse": {
    "pos": "v.",
    "en_def": "to say publicly that you support someone or something",
    "cn_def": "公開支持；為……背書"
  },
  "opposition": {
    "pos": "n.",
    "en_def": "strong disagreement with a plan or idea",
    "cn_def": "反對；反對者"
  },
  "community": {
    "pos": "n.",
    "en_def": "the people who live in one area",
    "cn_def": "社區；社群"
  },
  "citizen": {
    "pos": "n.",
    "en_def": "a person who legally belongs to a country or city",
    "cn_def": "公民；市民"
  },
  "represent": {
    "pos": "v.",
    "en_def": "to speak or act for another person or group",
    "cn_def": "代表"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect on something",
    "cn_def": "影響；衝擊"
  },
  "urgent": {
    "pos": "adj.",
    "en_def": "needing attention or action right away",
    "cn_def": "緊急的；急迫的"
  },
  "grievance": {
    "pos": "n.",
    "en_def": "a formal complaint about unfair treatment",
    "cn_def": "申訴；不滿"
  },
  "resolution": {
    "pos": "n.",
    "en_def": "an answer or solution to a problem or disagreement",
    "cn_def": "解決；解決方案；決議"
  },
  "democracy": {
    "pos": "n.",
    "en_def": "a system in which people vote to make decisions",
    "cn_def": "民主；民主制度"
  },
  "initiative": {
    "pos": "n.",
    "en_def": "a new plan to solve a problem; the ability to act without being told",
    "cn_def": "倡議；新措施；主動性"
  },
  "appeal": {
    "pos": "n.",
    "en_def": "a formal request to change a decision; a strong request for help",
    "cn_def": "上訴；申訴；呼籲"
  }
};

const EXTRA_GLOSSES = {};
