// Topic 188 Quiz Data: Influence 影響
// Source word list: https://www.examword.com/group-topic/influence — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T188 - Influence 影響",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "influential",
    "pos": "adj.",
    "cn_def": "有影響力的",
    "en_def": "having a strong effect on people's ideas or decisions",
    "sentence": "A: Why did the marketing team invite that young blogger to our product launch next Friday instead of a famous actor? B: She is very {{BLANK}} among college students, and her honest reviews often help small companies sell thousands of items within a few days.",
    "cn": "A：為什麼行銷團隊邀請那位年輕部落客來參加我們下週五的產品發表會，而不是找知名演員？ B：她在大學生之間非常【有影響力】，她誠實的評論常常幫助小公司在幾天內賣出數千件商品。"
  },
  {
    "word": "impact",
    "pos": "n.",
    "cn_def": "影響；衝擊",
    "en_def": "a strong effect that something has on a situation or person",
    "sentence": "A: Have you seen the sales report for the last quarter, and do you know why our numbers in Asia went up so quickly? B: Yes, the new online advertising campaign had a huge {{BLANK}} on sales, especially in Taiwan and Japan, where young customers spend a lot of time on their phones.",
    "cn": "A：你看過上一季的銷售報告了嗎？你知道為什麼我們在亞洲的業績成長得這麼快嗎？ B：看過了，新的線上廣告活動對銷售產生了巨大的【影響】，尤其是在台灣和日本，那裡的年輕顧客花很多時間在手機上。"
  },
  {
    "word": "effect",
    "pos": "n.",
    "cn_def": "效果；作用；影響",
    "en_def": "a change or result caused by something",
    "sentence": "A: The doctor in our company clinic gave me some new medicine for my cold, but should I still drive to the meeting with our clients this afternoon? B: I would take a taxi instead, because one side {{BLANK}} of that medicine is that it can make you feel very sleepy for several hours.",
    "cn": "A：公司診所的醫生給了我一些治感冒的新藥，但我今天下午還應該開車去和客戶開會嗎？ B：我會改搭計程車，因為那種藥的一個副【作用】是可能讓你昏昏欲睡好幾個小時。"
  },
  {
    "word": "affect",
    "pos": "v.",
    "cn_def": "影響",
    "en_def": "to cause a change in someone or something",
    "sentence": "A: Will the heavy snow in the northern region delay the shipment of office chairs that we ordered for the new branch last week? B: Unfortunately, the storm will {{BLANK}} several delivery routes, so the supplier says our order may arrive three or four days later than planned.",
    "cn": "A：北部地區的大雪會延誤我們上週為新分公司訂購的辦公椅出貨嗎？ B：很遺憾，這場暴風雪會【影響】好幾條送貨路線，所以供應商說我們的訂單可能會比預定晚三、四天到。"
  },
  {
    "word": "authority",
    "pos": "n.",
    "cn_def": "權力；權限；職權",
    "en_def": "the power or right to make decisions or give orders",
    "sentence": "A: Can the store manager give this customer a full refund for the broken laptop, even though she lost her receipt last month? B: No, only the regional director has the {{BLANK}} to approve refunds without a receipt, so I will email him and ask him to call the customer today.",
    "cn": "A：店經理可以為這位顧客的壞掉筆電全額退款嗎？即使她上個月把收據弄丟了。 B：不行，只有區域總監有【權限】核准沒有收據的退款，所以我會寄電子郵件給他，請他今天打電話給這位顧客。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服；勸說",
    "en_def": "to make someone agree to do something by giving good reasons",
    "sentence": "A: Our biggest client wants to cancel the contract because our prices went up this year, so what should we do before Friday? B: Let's invite their purchasing manager to lunch and try to {{BLANK}} her to stay by offering free delivery and a small discount on large orders.",
    "cn": "A：我們最大的客戶因為今年價格上漲想要取消合約，我們在星期五之前該怎麼做？ B：我們邀請他們的採購經理吃午餐，試著提供免費送貨和大量訂單的小折扣來【說服】她留下來。"
  },
  {
    "word": "persuasion",
    "pos": "n.",
    "cn_def": "說服；勸說",
    "en_def": "the act of making someone agree with you or do something",
    "sentence": "A: How did the young sales assistant manage to sell so many expensive coffee machines at the trade show last weekend? B: She is very good at gentle {{BLANK}}; she lets customers taste the coffee first, listens to their needs, and then explains clearly how the machine can save them money.",
    "cn": "A：那位年輕的銷售助理上週末在商展上是怎麼賣出這麼多台昂貴咖啡機的？ B：她非常擅長溫和的【說服】；她先讓顧客試喝咖啡，聆聽他們的需求，再清楚說明這台機器如何幫他們省錢。"
  },
  {
    "word": "convince",
    "pos": "v.",
    "cn_def": "使相信；說服",
    "en_def": "to make someone believe that something is true",
    "sentence": "A: The finance director still thinks that moving our customer service team to a bigger office is too expensive, doesn't he? B: Yes, so we need clear numbers and a simple chart to {{BLANK}} him that the move will actually reduce costs and improve teamwork within two years.",
    "cn": "A：財務總監仍然認為把客服團隊搬到更大的辦公室太昂貴了，對吧？ B：對，所以我們需要清楚的數字和簡單的圖表來【說服】他，這次搬遷在兩年內其實會降低成本並改善團隊合作。"
  },
  {
    "word": "pressure",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry caused by too much work or responsibility",
    "sentence": "A: You look really tired today; are you still working late every night on the new hotel booking app? B: Yes, the client wants it finished before the holiday season, so the whole team is under a lot of {{BLANK}}, and nobody has taken a day off for three weeks.",
    "cn": "A：你今天看起來真的很累，你還在每晚加班做新的飯店訂房應用程式嗎？ B：是啊，客戶希望在假期旺季前完成，所以整個團隊都承受很大的【壓力】，三個禮拜以來沒有人休過一天假。"
  },
  {
    "word": "manipulate",
    "pos": "v.",
    "cn_def": "操縱；竄改",
    "en_def": "to control or change something in a dishonest way",
    "sentence": "A: Why did the board of directors decide to fire the chief accountant after the annual audit last month? B: The auditors discovered that he had tried to {{BLANK}} the sales figures to make the company look more successful, which is a serious crime and broke the trust of investors.",
    "cn": "A：為什麼董事會在上個月年度稽核後決定開除會計長？ B：稽核人員發現他試圖【操縱】銷售數字，讓公司看起來更成功，這是嚴重的犯罪行為，也破壞了投資人的信任。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導；輔導",
    "en_def": "help and advice about how to do something",
    "sentence": "A: I've just joined the accounting department, and I'm worried about making mistakes with the new tax software next week. B: Don't worry too much, because Mr. Chen will give you step-by-step {{BLANK}} during your first month, and you can always ask him questions when you feel confused.",
    "cn": "A：我剛加入會計部，我擔心下週用新的報稅軟體時會出錯。 B：別太擔心，陳先生在你第一個月會給你一步一步的【指導】，你感到困惑時隨時可以問他問題。"
  },
  {
    "word": "role model",
    "pos": "n.phr.",
    "cn_def": "榜樣；模範",
    "en_def": "a person whose behavior others copy because they admire it",
    "sentence": "A: Why does everyone in the sales department want to work on Ms. Lin's team when the new projects start next month? B: She is a great {{BLANK}} for younger employees, because she stays calm with angry clients, keeps every promise, and always shares her ideas with the team.",
    "cn": "A：為什麼下個月新專案開始時，業務部的每個人都想加入林小姐的團隊？ B：她是年輕員工的絕佳【榜樣】，因為她面對生氣的客戶時保持冷靜，信守每個承諾，而且總是與團隊分享她的想法。"
  },
  {
    "word": "trend",
    "pos": "n.",
    "cn_def": "趨勢；潮流",
    "en_def": "a general change in the way people behave or what they like",
    "sentence": "A: Should our café keep selling the same sandwiches, or should we change the menu before the summer tourists arrive? B: I think we should follow the healthy eating {{BLANK}} and add some salads and plant-based meals, because many young customers have asked for lighter food recently.",
    "cn": "A：我們的咖啡館應該繼續賣同樣的三明治，還是在夏季觀光客到來之前更換菜單？ B：我認為我們應該跟上健康飲食的【趨勢】，增加一些沙拉和植物性餐點，因為最近很多年輕顧客要求較清淡的食物。"
  },
  {
    "word": "shaping",
    "pos": "n.",
    "cn_def": "形塑；塑造",
    "en_def": "the act of forming or influencing how something develops",
    "sentence": "A: How important was the new chief executive in the company's success over the last five years, in your opinion? B: She played a key role in the {{BLANK}} of our business strategy, especially when she decided to focus on online sales and open small offices in Southeast Asia.",
    "cn": "A：依你看，新任執行長在公司過去五年的成功中有多重要？ B：她在【形塑】我們的經營策略上扮演了關鍵角色，尤其是她決定專注於線上銷售並在東南亞開設小型辦事處的時候。"
  },
  {
    "word": "sway",
    "pos": "v.",
    "cn_def": "左右；影響",
    "en_def": "to influence someone so that they change their opinion or choice",
    "sentence": "A: Do you think the famous chef's positive review in the newspaper will help our new restaurant attract more customers this month? B: Definitely, because reviews from respected experts can {{BLANK}} people's choices, and many diners read the food section before they decide where to eat on weekends.",
    "cn": "A：你認為那位知名主廚在報紙上的正面評論會幫我們的新餐廳這個月吸引更多顧客嗎？ B：當然，因為受尊敬專家的評論能【左右】人們的選擇，很多用餐者在決定週末去哪裡吃飯之前都會閱讀美食版。"
  },
  {
    "word": "leverage",
    "pos": "v.",
    "cn_def": "善加利用；發揮",
    "en_def": "to use something you have in order to get the best result",
    "sentence": "A: We are a small company with a limited budget, so how can we compete with the big electronics stores in the city? B: We should {{BLANK}} our excellent customer reviews and friendly service, sharing them on social media to attract shoppers who care more about trust than low prices.",
    "cn": "A：我們是預算有限的小公司，要怎麼和市區的大型電器行競爭？ B：我們應該【善加利用】我們優秀的顧客評價和親切的服務，把它們分享到社群媒體上，吸引那些比起低價更重視信任的購物者。"
  },
  {
    "word": "dominate",
    "pos": "v.",
    "cn_def": "主導；支配",
    "en_def": "to have the most power or the biggest share of something",
    "sentence": "A: Why is it so hard for new companies to sell smartphones in this country, even when their phones are cheaper? B: Two large brands {{BLANK}} the market, and most customers trust them because they have offered good repair services and reliable products for more than ten years.",
    "cn": "A：為什麼新公司在這個國家很難賣智慧型手機，即使他們的手機比較便宜？ B：兩個大品牌【主導】了市場，而且大部分顧客信任它們，因為它們十多年來一直提供良好的維修服務和可靠的產品。"
  },
  {
    "word": "dominant",
    "pos": "adj.",
    "cn_def": "主導的；佔優勢的",
    "en_def": "more powerful, important or common than others",
    "sentence": "A: Which delivery company should we choose for our online shop, since we expect many more orders during the holiday season? B: Let's use FastShip, because it is the {{BLANK}} company in this area, with the most trucks, the longest opening hours, and very few complaints from customers.",
    "cn": "A：既然我們預期假期旺季會有更多訂單，我們的網路商店應該選哪家物流公司？ B：我們用FastShip吧，因為它是這個地區【居主導地位的】公司，擁有最多卡車、最長的營業時間，而且顧客抱怨很少。"
  },
  {
    "word": "control",
    "pos": "n.",
    "cn_def": "控制；掌控",
    "en_def": "the power to make something happen the way you want",
    "sentence": "A: Why did the factory stop the production line for two hours yesterday afternoon, and did we lose many orders? B: A machine was overheating, so the engineers had to take {{BLANK}} of the situation quickly, check every part carefully, and make sure no workers were in danger before restarting.",
    "cn": "A：為什麼工廠昨天下午停了生產線兩個小時？我們有損失很多訂單嗎？ B：有一台機器過熱，所以工程師必須迅速【控制】局面，仔細檢查每個零件，並在重新啟動前確保沒有工人處於危險中。"
  },
  {
    "word": "inspiration",
    "pos": "n.",
    "cn_def": "靈感；鼓舞",
    "en_def": "something that gives you new ideas or makes you want to create",
    "sentence": "A: Where did the design team get the idea for the new hotel lobby, with all those plants and wooden furniture? B: They found {{BLANK}} during a business trip to Japan, where they visited several traditional gardens and noticed how calm and relaxed the guests seemed in natural spaces.",
    "cn": "A：設計團隊是從哪裡得到新飯店大廳的構想，那些植物和木製家具？ B：他們在日本出差時找到了【靈感】，當時他們參觀了幾座傳統庭園，並注意到客人在自然空間中顯得多麼平靜放鬆。"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "cn_def": "激勵；啟發",
    "en_def": "to give someone the wish or confidence to do something",
    "sentence": "A: Why did the company invite a famous mountain climber to speak at our annual staff meeting next Thursday? B: The managers hope her story will {{BLANK}} employees to set bigger goals, work together as a team, and keep trying even when a project becomes difficult.",
    "cn": "A：為什麼公司邀請一位知名登山家在下週四的年度員工大會上演講？ B：主管們希望她的故事能【激勵】員工設定更遠大的目標、團隊合作，並且在專案變得困難時也持續努力。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；促使",
    "en_def": "to make someone want to work hard or do something",
    "sentence": "A: Our sales team has seemed tired and unhappy since the busy season ended, so what can we do to help them? B: We could {{BLANK}} them with a small bonus for every new client, and maybe organize a team dinner at the end of each month to celebrate good results.",
    "cn": "A：旺季結束後，我們的業務團隊似乎又累又不開心，我們可以做些什麼來幫助他們？ B：我們可以用每簽一位新客戶就發一小筆獎金來【激勵】他們，也許每個月底再辦一次團隊聚餐慶祝好成績。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動力；動機",
    "en_def": "the wish or energy to do something well",
    "sentence": "A: Why did so many of our young engineers quit last year, even though their salaries were quite good? B: According to the survey, they lost {{BLANK}} because they did the same boring tasks every day and had no chance to learn new skills or get promoted.",
    "cn": "A：為什麼去年我們有這麼多年輕工程師離職，即使他們的薪水相當不錯？ B：根據調查，他們失去了【動力】，因為他們每天做同樣無聊的工作，而且沒有機會學習新技能或升遷。"
  },
  {
    "word": "stimulate",
    "pos": "v.",
    "cn_def": "刺激；促進",
    "en_def": "to make something become more active or grow",
    "sentence": "A: The city government is planning to build a new train station near the old harbor, isn't it? B: Yes, officials believe the station will {{BLANK}} the local economy by bringing more tourists, new shops, and hundreds of jobs to an area that has been quiet for years.",
    "cn": "A：市政府正計畫在舊港口附近興建一座新火車站，對吧？ B：對，官員們相信這座車站將帶來更多觀光客、新商店和數百個工作機會，【刺激】這個沉寂多年地區的地方經濟。"
  },
  {
    "word": "stimulus",
    "pos": "n.",
    "cn_def": "刺激；促進因素",
    "en_def": "something that helps a process or activity to develop faster",
    "sentence": "A: Why are so many families buying new refrigerators and washing machines at the electronics store this month? B: The government gave every household a small cash payment as an economic {{BLANK}}, and many people are using the money to replace old appliances before prices go up.",
    "cn": "A：為什麼這個月有這麼多家庭在電器行買新冰箱和洗衣機？ B：政府發給每戶一小筆現金作為經濟【刺激】方案，很多人正利用這筆錢在漲價前汰換舊家電。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵；促進",
    "en_def": "to give someone support or reasons to do something",
    "sentence": "A: Our office uses so much paper every week, so is there anything simple we can do to reduce waste? B: We could {{BLANK}} staff to read documents on their screens, put recycling boxes next to every printer, and print only when it is really necessary for meetings.",
    "cn": "A：我們辦公室每週用很多紙，有什麼簡單的方法可以減少浪費嗎？ B：我們可以【鼓勵】員工在螢幕上閱讀文件，在每台印表機旁放回收箱，並且只在開會真正需要時才列印。"
  },
  {
    "word": "discourage",
    "pos": "v.",
    "cn_def": "勸阻；使打消念頭",
    "en_def": "to try to stop someone from doing something",
    "sentence": "A: Why did the shopping mall raise its parking fees so much for cars that stay longer than three hours? B: The managers want to {{BLANK}} office workers from parking there all day, because shoppers often complain that they cannot find empty spaces on busy weekday afternoons.",
    "cn": "A：為什麼購物中心對停超過三小時的車大幅調高停車費？ B：管理階層想要【阻止】上班族整天停在那裡，因為購物者常常抱怨在忙碌的平日下午找不到空車位。"
  },
  {
    "word": "peer",
    "pos": "n.",
    "cn_def": "同儕；同事",
    "en_def": "a person of the same age, level or job as you",
    "sentence": "A: How do you usually check the quality of the reports before they are sent to our clients in Singapore? B: Each report is first reviewed by a {{BLANK}} in the same department, who checks the numbers and grammar, and then the team leader reads it one more time before it goes out.",
    "cn": "A：在報告寄給新加坡客戶之前，你們通常怎麼檢查品質？ B：每份報告先由同部門的一位【同儕】審閱，他會檢查數字和文法，然後組長再讀一遍才寄出。"
  },
  {
    "word": "socialize",
    "pos": "v.",
    "cn_def": "交際；社交往來",
    "en_def": "to spend time with other people in a friendly way",
    "sentence": "A: Are you coming to the welcome party for the new employees in the hotel garden after work on Friday? B: Yes, I think it's important to {{BLANK}} with people from other departments, because we often need their help, and it's easier to work together when you know each other.",
    "cn": "A：你星期五下班後會來飯店花園參加新員工歡迎派對嗎？ B：會啊，我認為和其他部門的人【交際往來】很重要，因為我們常常需要他們幫忙，而彼此認識後合作起來比較容易。"
  },
  {
    "word": "reinforce",
    "pos": "v.",
    "cn_def": "強化；加強",
    "en_def": "to make an idea, feeling or rule stronger",
    "sentence": "A: The new safety rules for the warehouse were introduced last month, but some workers still forget to wear their helmets. B: Let's {{BLANK}} the message by putting large posters near every entrance and reminding everyone at the short meeting before each morning shift starts.",
    "cn": "A：倉庫的新安全規定上個月就實施了，但有些工人還是忘了戴安全帽。 B：我們在每個入口附近張貼大海報，並在每天早班開始前的簡短會議上提醒大家，來【強化】這個訊息吧。"
  },
  {
    "word": "exposure",
    "pos": "n.",
    "cn_def": "曝光；接觸",
    "en_def": "the chance to be seen or noticed by the public",
    "sentence": "A: Why does our small furniture company want to pay for a booth at the international design fair in Taipei next spring? B: The fair will give us great {{BLANK}} to thousands of buyers and journalists from many countries, which we could never reach with our small advertising budget alone.",
    "cn": "A：為什麼我們這家小家具公司想花錢在明年春天台北的國際設計展租攤位？ B：展覽會讓我們在來自許多國家的數千位買家和記者面前獲得極佳的【曝光】，這是光靠我們少量廣告預算永遠接觸不到的。"
  },
  {
    "word": "impression",
    "pos": "n.",
    "cn_def": "印象",
    "en_def": "the opinion or feeling you get about someone or something",
    "sentence": "A: I have a job interview at a large bank tomorrow morning, and I'm really nervous about what to wear and say. B: Arrive ten minutes early, wear a simple dark suit, and smile when you shake hands, because making a good first {{BLANK}} is very important in banking.",
    "cn": "A：我明天早上在一家大銀行有工作面試，我真的很緊張不知道該穿什麼、說什麼。 B：提早十分鐘到，穿簡單的深色西裝，握手時微笑，因為在銀行業留下良好的第一【印象】非常重要。"
  }
];

const MCQS = [
  {
    "q": "The magazine named Grace Park one of the most _____ women in Asian banking. Her decisions often change how other banks set their interest rates.",
    "options": [
      "influential",
      "temporary",
      "fragile",
      "reluctant"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The new highway will have a positive _____ on local businesses. More drivers are expected to stop at shops and restaurants along the route.",
    "options": [
      "receipt",
      "impact",
      "schedule",
      "warranty"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new parking rules will take _____ on the first day of next month. Employees should register their license plates with the front desk before then.",
    "options": [
      "effort",
      "record",
      "effect",
      "access"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Heavy rain in the coffee-growing regions may _____ the price of beans this year. Our café is already looking for other suppliers to keep costs low.",
    "options": [
      "apologize",
      "attend",
      "borrow",
      "affect"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Only the branch manager has the _____ to sign contracts worth more than ten thousand dollars. All other staff must ask for her approval first.",
    "options": [
      "appetite",
      "authority",
      "quantity",
      "ceremony"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The sales team managed to _____ the hotel chain to sign a three-year cleaning contract. The deal is the largest in our company's history.",
    "options": [
      "persuade",
      "recover",
      "deliver",
      "arrive"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "After hours of patient _____, the landlord finally agreed to lower the office rent by ten percent. Our manager was very pleased with the result.",
    "options": [
      "furniture",
      "departure",
      "shortage",
      "persuasion"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The engineer used test results to _____ the director that the new machine was safe. Production with the machine will begin next week.",
    "options": [
      "repair",
      "invite",
      "convince",
      "cancel"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Customer service staff often work under heavy _____ during the holiday season. The company hires extra temporary workers to help them handle the calls.",
    "options": [
      "pressure",
      "luggage",
      "scenery",
      "receipt"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The investigation found that the manager had tried to _____ the survey results. He secretly changed several answers to make the product look more popular.",
    "options": [
      "celebrate",
      "attend",
      "manipulate",
      "borrow"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "New interns will work under the _____ of an experienced mentor for six months. Each mentor will meet them weekly to discuss their progress.",
    "options": [
      "appetite",
      "guidance",
      "invoice",
      "traffic"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Our founder is a _____ for many young entrepreneurs in Taiwan. She started the company with only two employees and a small loan.",
    "options": [
      "price tag",
      "parking lot",
      "time zone",
      "role model"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "Online grocery shopping has become a major _____ in large cities. Many supermarkets now offer same-day delivery to keep up with customer demand.",
    "options": [
      "ladder",
      "warranty",
      "trend",
      "pillow"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Celebrity endorsements can strongly _____ young shoppers' buying decisions. That is why many brands pay famous singers to promote their products.",
    "options": [
      "sway",
      "repair",
      "polish",
      "rent"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "The startup plans to _____ its strong social media following to launch a new line of products. It already has over two million online fans.",
    "options": [
      "resign",
      "hesitate",
      "retire",
      "leverage"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Three large companies _____ the domestic airline market. Smaller airlines find it difficult to compete on popular routes such as Taipei to Tokyo.",
    "options": [
      "hesitate",
      "dominate",
      "apologize",
      "graduate"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Smartphones have become the _____ way people shop online. More than seventy percent of our orders now come from mobile devices.",
    "options": [
      "dominant",
      "fragile",
      "polite",
      "hungry"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The factory has strict quality _____ procedures for every product. Each item is checked twice before it leaves the warehouse.",
    "options": [
      "holiday",
      "journey",
      "salary",
      "control"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "The designer said that the old streets of Tainan were the main source of _____ for her new collection. Her dresses feature traditional patterns.",
    "options": [
      "pollution",
      "inspiration",
      "delay",
      "fee"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "The CEO's speech was meant to _____ employees to suggest new ideas for the company. Several staff members submitted proposals the following week.",
    "options": [
      "repair",
      "deliver",
      "inspire",
      "cancel"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Managers often use bonuses and extra vacation days to _____ their staff. Well-rewarded employees usually work harder and stay with the company longer.",
    "options": [
      "delay",
      "refund",
      "borrow",
      "motivate"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "Many employees lose _____ when they receive no feedback on their work. Regular meetings with supervisors can help them stay focused.",
    "options": [
      "motivation",
      "luggage",
      "furniture",
      "scenery"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The government lowered taxes on new cars to _____ consumer spending. Car dealers reported a sharp rise in sales the following month.",
    "options": [
      "resign",
      "hesitate",
      "stimulate",
      "apologize"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The hotel wants to _____ guests to reuse their towels to save water. A small card in each bathroom explains its green policy.",
    "options": [
      "refund",
      "encourage",
      "deliver",
      "cancel"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "The city raised parking fees downtown to _____ people from driving into the center. It hopes more residents will take buses and trains instead.",
    "options": [
      "discourage",
      "apologize",
      "deliver",
      "attend"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "Each sales report is reviewed by a _____ before it is sent to the regional office. This helps the team catch small mistakes early.",
    "options": [
      "ladder",
      "peer",
      "receipt",
      "cushion"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The company picnic gives staff from different departments a chance to _____ outside the office. Many employees enjoy meeting colleagues they rarely see.",
    "options": [
      "manufacture",
      "renovate",
      "export",
      "socialize"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The training session will _____ the safety rules that workers learned last month. Supervisors will also check that everyone follows them on the floor.",
    "options": [
      "graduate",
      "hesitate",
      "reinforce",
      "arrive"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Appearing on the popular cooking show gave the small bakery national _____. Orders from other cities doubled within a week.",
    "options": [
      "exposure",
      "departure",
      "luggage",
      "refund"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "Candidates should dress neatly to make a good first _____ at job interviews. Arriving a few minutes early also shows respect for the interviewer.",
    "options": [
      "invoice",
      "schedule",
      "cushion",
      "impression"
    ],
    "answer": 3,
    "vocabIndex": 31
  }
];

const LOOKUP = {
  "influential": {
    "pos": "adj.",
    "en_def": "having a strong effect on people's ideas or decisions",
    "cn_def": "有影響力的"
  },
  "impact": {
    "pos": "n.",
    "en_def": "a strong effect that something has on a situation or person",
    "cn_def": "影響；衝擊"
  },
  "effect": {
    "pos": "n.",
    "en_def": "a change or result caused by something",
    "cn_def": "效果；作用；影響"
  },
  "affect": {
    "pos": "v.",
    "en_def": "to cause a change in someone or something",
    "cn_def": "影響"
  },
  "authority": {
    "pos": "n.",
    "en_def": "the power or right to make decisions or give orders",
    "cn_def": "權力；權限；職權"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving good reasons",
    "cn_def": "說服；勸說"
  },
  "persuasion": {
    "pos": "n.",
    "en_def": "the act of making someone agree with you or do something",
    "cn_def": "說服；勸說"
  },
  "convince": {
    "pos": "v.",
    "en_def": "to make someone believe that something is true",
    "cn_def": "使相信；說服"
  },
  "pressure": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by too much work or responsibility",
    "cn_def": "壓力"
  },
  "manipulate": {
    "pos": "v.",
    "en_def": "to control or change something in a dishonest way",
    "cn_def": "操縱；竄改"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about how to do something",
    "cn_def": "指導；輔導"
  },
  "role model": {
    "pos": "n.phr.",
    "en_def": "a person whose behavior others copy because they admire it",
    "cn_def": "榜樣；模範"
  },
  "trend": {
    "pos": "n.",
    "en_def": "a general change in the way people behave or what they like",
    "cn_def": "趨勢；潮流"
  },
  "shaping": {
    "pos": "n.",
    "en_def": "the act of forming or influencing how something develops",
    "cn_def": "形塑；塑造"
  },
  "sway": {
    "pos": "v.",
    "en_def": "to influence someone so that they change their opinion or choice",
    "cn_def": "左右；影響"
  },
  "leverage": {
    "pos": "v.",
    "en_def": "to use something you have in order to get the best result",
    "cn_def": "善加利用；發揮"
  },
  "dominate": {
    "pos": "v.",
    "en_def": "to have the most power or the biggest share of something",
    "cn_def": "主導；支配"
  },
  "dominant": {
    "pos": "adj.",
    "en_def": "more powerful, important or common than others",
    "cn_def": "主導的；佔優勢的"
  },
  "control": {
    "pos": "n.",
    "en_def": "the power to make something happen the way you want",
    "cn_def": "控制；掌控"
  },
  "inspiration": {
    "pos": "n.",
    "en_def": "something that gives you new ideas or makes you want to create",
    "cn_def": "靈感；鼓舞"
  },
  "inspire": {
    "pos": "v.",
    "en_def": "to give someone the wish or confidence to do something",
    "cn_def": "激勵；啟發"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to work hard or do something",
    "cn_def": "激勵；促使"
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the wish or energy to do something well",
    "cn_def": "動力；動機"
  },
  "stimulate": {
    "pos": "v.",
    "en_def": "to make something become more active or grow",
    "cn_def": "刺激；促進"
  },
  "stimulus": {
    "pos": "n.",
    "en_def": "something that helps a process or activity to develop faster",
    "cn_def": "刺激；促進因素"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone support or reasons to do something",
    "cn_def": "鼓勵；促進"
  },
  "discourage": {
    "pos": "v.",
    "en_def": "to try to stop someone from doing something",
    "cn_def": "勸阻；使打消念頭"
  },
  "peer": {
    "pos": "n.",
    "en_def": "a person of the same age, level or job as you",
    "cn_def": "同儕；同事"
  },
  "socialize": {
    "pos": "v.",
    "en_def": "to spend time with other people in a friendly way",
    "cn_def": "交際；社交往來"
  },
  "reinforce": {
    "pos": "v.",
    "en_def": "to make an idea, feeling or rule stronger",
    "cn_def": "強化；加強"
  },
  "exposure": {
    "pos": "n.",
    "en_def": "the chance to be seen or noticed by the public",
    "cn_def": "曝光；接觸"
  },
  "impression": {
    "pos": "n.",
    "en_def": "the opinion or feeling you get about someone or something",
    "cn_def": "印象"
  }
};

const EXTRA_GLOSSES = {};
