// Topic 363 Quiz Data: Society 社會
// Source word list: https://www.examword.com/group-topic/society — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T363 - Society 社會",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "community",
    "pos": "n.",
    "cn_def": "社區；社群",
    "en_def": "a group of people living in the same area or sharing interests",
    "sentence": "A: Why is our company sending volunteers to clean the park near the office every Saturday morning this month? B: The CEO believes we should give something back to the local {{BLANK}}, because many of our customers and employees live in this neighborhood and enjoy using the park with their children.",
    "cn": "A：為什麼我們公司這個月每個星期六早上都派志工去清理辦公室附近的公園？ B：執行長認為我們應該回饋當地【社區】，因為我們很多客戶和員工都住在這一帶，也喜歡帶孩子去那座公園。"
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the ideas, customs and way of life of a group of people",
    "sentence": "A: What should I know before I start working at our new branch office in Tokyo next month, and is there anything I should be careful about? B: You should learn a little about the local business {{BLANK}}, such as exchanging business cards politely and arriving early for meetings, because people there really care about these details.",
    "cn": "A：下個月我開始到東京新分公司上班之前應該先了解什麼？有沒有什麼需要特別注意的地方？ B：你應該稍微了解當地的商業【文化】，例如禮貌地交換名片和提早到達會議，因為那裡的人非常重視這些細節。"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "cn_def": "傳統",
    "en_def": "a custom or belief passed down over a long time",
    "sentence": "A: Why does everyone in the sales department eat dinner together at the same restaurant at the end of every December? B: It has been a {{BLANK}} since the company opened thirty years ago, and the manager says it helps new staff feel welcome and gives old friends a chance to share stories.",
    "cn": "A：為什麼業務部的每個人每年十二月底都會在同一家餐廳一起吃晚餐？ B：這是公司三十年前創立以來的【傳統】，經理說這能讓新員工感到受歡迎，也讓老朋友有機會分享故事。"
  },
  {
    "word": "value",
    "pos": "n.",
    "cn_def": "價值觀",
    "en_def": "a belief about what is important or right",
    "sentence": "A: The new hiring guide talks a lot about honesty, teamwork and respect, but why did the human resources team spend so much time writing that part? B: They want every new employee to understand our core {{BLANK}} from the first day, because the company believes shared beliefs help people make good decisions together.",
    "cn": "A：新的招聘手冊花了很多篇幅談誠實、團隊合作和尊重，為什麼人資團隊要花那麼多時間寫那個部分？ B：他們希望每位新員工從第一天起就了解我們的核心【價值觀】，因為公司相信共同的信念能幫助大家一起做出好的決定。"
  },
  {
    "word": "norm",
    "pos": "n.",
    "cn_def": "常態；規範",
    "en_def": "a usual or expected way of behaving",
    "sentence": "A: Is it unusual for employees in this office to work from home two days a week, or did the manager make a special arrangement for you? B: It is actually the {{BLANK}} here now, since most teams changed their schedules after the new policy started last year, so nobody thinks it is strange anymore.",
    "cn": "A：這間辦公室的員工每週在家工作兩天是不尋常的事嗎？還是經理特別為你做了安排？ B：其實這在這裡已經是【常態】了，因為大部分團隊在去年新政策開始後都改了工作時間表，所以已經沒有人覺得奇怪了。"
  },
  {
    "word": "law",
    "pos": "n.",
    "cn_def": "法律",
    "en_def": "a rule made by the government that everyone must obey",
    "sentence": "A: Why do we have to keep all of our customers' payment records for seven years instead of deleting the old files to save space on the server? B: The {{BLANK}} in this country requires every business to store financial records for that long, and we could pay a large fine if the tax office checks us.",
    "cn": "A：為什麼我們必須把所有客戶的付款紀錄保存七年，而不是刪除舊檔案來節省伺服器空間？ B：這個國家的【法律】要求每家企業保存財務紀錄那麼久，如果稅務局來查核，我們可能會被罰一大筆錢。"
  },
  {
    "word": "citizen",
    "pos": "n.",
    "cn_def": "公民；市民",
    "en_def": "a person who legally belongs to a country or city",
    "sentence": "A: Why did the city council invite people from every neighborhood to the meeting about the new train station last Thursday evening? B: The mayor wanted every {{BLANK}} to have a chance to give an opinion before the plan is approved, because the construction will change traffic and businesses in many areas.",
    "cn": "A：上週四晚上市議會為什麼邀請各個社區的人參加新火車站的會議？ B：市長希望每位【市民】在計畫通過前都有機會表達意見，因為工程會改變很多地區的交通和商家狀況。"
  },
  {
    "word": "government",
    "pos": "n.",
    "cn_def": "政府",
    "en_def": "the group of people who officially control a country",
    "sentence": "A: How will small companies like ours pay for the expensive new equipment that we need to reduce pollution from the factory? B: The {{BLANK}} is offering special loans and tax discounts to small businesses this year, so our accountant is preparing the application forms and will send them before the deadline next month.",
    "cn": "A：像我們這樣的小公司要怎麼負擔減少工廠污染所需的昂貴新設備？ B：【政府】今年提供小型企業特別貸款和減稅優惠，所以我們的會計正在準備申請表，會在下個月截止日前送出。"
  },
  {
    "word": "equality",
    "pos": "n.",
    "cn_def": "平等",
    "en_def": "the state of everyone having the same rights and chances",
    "sentence": "A: Why did the company change the way managers decide salaries and promotions for staff in every department this year? B: The directors wanted to make sure there is {{BLANK}} between men and women, so now everyone doing the same job with the same results receives the same pay and opportunities.",
    "cn": "A：今年公司為什麼改變了各部門經理決定員工薪資和升遷的方式？ B：董事們希望確保男女之間的【平等】，所以現在做同樣工作、達到同樣成果的每個人都會得到相同的薪水和機會。"
  },
  {
    "word": "justice",
    "pos": "n.",
    "cn_def": "正義；公平",
    "en_def": "fair treatment of people according to the law",
    "sentence": "A: Why are so many former workers still talking to lawyers about the factory that closed suddenly last spring without paying their final salaries? B: They want {{BLANK}} for what happened to them, and they hope the court will order the owners to pay every worker the money and benefits they were promised.",
    "cn": "A：為什麼這麼多前員工還在找律師處理那家去年春天突然倒閉、沒付最後一筆薪水的工廠？ B：他們想為自己的遭遇討回【公道】，希望法院能判決老闆付給每位工人當初承諾的薪資和福利。"
  },
  {
    "word": "freedom",
    "pos": "n.",
    "cn_def": "自由",
    "en_def": "the right to do or say what you want",
    "sentence": "A: What do you like most about working at the design company where you moved after leaving the bank last year? B: I really enjoy the {{BLANK}} to choose my own working hours and projects, because at the bank I had to follow strict rules and could never try any of my own creative ideas.",
    "cn": "A：你去年離開銀行後換到那家設計公司，你最喜歡那裡的哪一點？ B：我很喜歡能【自由】選擇自己的工作時間和專案，因為在銀行時我必須遵守嚴格的規定，從來沒辦法嘗試任何自己的創意。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任",
    "en_def": "a duty to take care of something or someone",
    "sentence": "A: Who will be in charge of checking the safety equipment in the warehouse while the supervisor is on vacation next week? B: Mr. Lin has agreed to take {{BLANK}} for it, so he will inspect the fire alarms and first-aid boxes every morning and report any problems to the main office.",
    "cn": "A：下週主管休假期間，誰負責檢查倉庫裡的安全設備？ B：林先生已經同意承擔這項【責任】，所以他每天早上會檢查火災警報器和急救箱，並把任何問題回報給總公司。"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "cn_def": "合作",
    "en_def": "to work together with others to reach a goal",
    "sentence": "A: How did the marketing and sales teams finish such a big advertising campaign in only three weeks when they usually argue about everything? B: The director asked them to {{BLANK}} closely this time, so they held short meetings every morning, shared all their customer data and solved problems together instead of blaming each other.",
    "cn": "A：行銷團隊和業務團隊平常什麼事都會吵，這次怎麼只用三週就完成這麼大的廣告活動？ B：這次主管要求他們密切【合作】，所以他們每天早上開簡短會議、分享所有客戶資料，並一起解決問題，而不是互相指責。"
  },
  {
    "word": "respect",
    "pos": "v.",
    "cn_def": "尊重",
    "en_def": "to treat someone or something with care and admiration",
    "sentence": "A: How should I behave when I visit our business partners in their country next week, since I have never been there before? B: Just try to {{BLANK}} their customs, such as taking off your shoes at their homes and greeting older managers first, and they will appreciate your effort and trust you more.",
    "cn": "A：下週我去拜訪我們在國外的商業夥伴時應該注意什麼？我從來沒去過那裡。 B：只要盡量【尊重】他們的習俗，例如到他們家要脫鞋、先向年長的經理打招呼，他們就會欣賞你的用心，也會更信任你。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多元；多樣性",
    "en_def": "the state of including many different types of people or things",
    "sentence": "A: Why did the hiring team choose candidates from so many different countries, ages and backgrounds for the new product design team? B: The company believes that {{BLANK}} brings fresh ideas, because people with different experiences notice different problems and can design products that customers all over the world will want to buy.",
    "cn": "A：為什麼招聘團隊為新的產品設計團隊挑選了來自這麼多不同國家、年齡和背景的應徵者？ B：公司相信【多元性】能帶來新的想法，因為經驗不同的人會注意到不同的問題，能設計出全世界顧客都想買的產品。"
  },
  {
    "word": "inclusive",
    "pos": "adj.",
    "cn_def": "包容的；包含各方的",
    "en_def": "including all kinds of people and treating them fairly",
    "sentence": "A: Why did the manager add wheelchair ramps, bigger signs and a quiet room to the office when we moved to the new building? B: She wants the workplace to be more {{BLANK}}, so that employees and visitors of every age and ability can feel comfortable and do their jobs without any extra difficulty.",
    "cn": "A：我們搬到新大樓時，經理為什麼在辦公室增設了輪椅坡道、更大的標示和一間安靜室？ B：她希望工作環境更具【包容性】，讓各種年齡和能力的員工及訪客都能感到自在，工作時不會遇到額外的困難。"
  },
  {
    "word": "minority",
    "pos": "n.",
    "cn_def": "少數",
    "en_def": "the smaller part of a group",
    "sentence": "A: Did most of the staff agree with the plan to move the company's head office to the new business park outside the city? B: Yes, only a small {{BLANK}} of employees voted against it, mainly people who live downtown and worry that their trip to work will take much longer every day.",
    "cn": "A：大部分員工都贊成把公司總部搬到市郊新商業園區的計畫嗎？ B：對，只有一小部分【少數】的員工投反對票，主要是住在市中心、擔心每天通勤時間會變得更長的人。"
  },
  {
    "word": "majority",
    "pos": "n.",
    "cn_def": "大多數",
    "en_def": "the larger part of a group; more than half",
    "sentence": "A: How did the board finally decide which design to use for the new company logo after weeks of long discussions and arguments? B: They held a vote yesterday afternoon, and the {{BLANK}} of the directors chose the blue design, so the marketing team will start printing it on business cards next week.",
    "cn": "A：經過好幾週冗長的討論和爭論之後，董事會最後是怎麼決定新公司標誌要用哪個設計？ B：他們昨天下午投票，【大多數】董事選了藍色的設計，所以行銷團隊下週會開始把它印在名片上。"
  },
  {
    "word": "economy",
    "pos": "n.",
    "cn_def": "經濟",
    "en_def": "the system of money, trade and business in a country",
    "sentence": "A: Why are so many shops in the shopping mall offering big discounts this season even though it is not a holiday period? B: The local {{BLANK}} has been weak for several months, so people are spending less money, and store owners hope lower prices will bring more customers back.",
    "cn": "A：為什麼購物中心裡這麼多店家這一季都在大打折，即使現在不是節日期間？ B：當地【經濟】已經疲軟好幾個月了，所以大家花的錢變少，店家希望降價能把更多顧客吸引回來。"
  },
  {
    "word": "employment",
    "pos": "n.",
    "cn_def": "就業；雇用",
    "en_def": "the state of having a paid job",
    "sentence": "A: Why is the city so happy about the new car factory that will open near the river next spring? B: The factory will offer {{BLANK}} to more than two thousand local people, and many restaurants and shops nearby also expect more business when the workers start their jobs there.",
    "cn": "A：為什麼市政府對明年春天要在河邊開設的新汽車工廠這麼高興？ B：這家工廠將為兩千多名當地居民提供【就業】機會，附近許多餐廳和商店也預期在工人開始上班後生意會更好。"
  },
  {
    "word": "poverty",
    "pos": "n.",
    "cn_def": "貧窮",
    "en_def": "the state of being very poor",
    "sentence": "A: What is the main goal of the charity project that our company is supporting with donations this year? B: It helps families living in {{BLANK}} by giving parents job training and children free school supplies, so they can earn more money and build a better future step by step.",
    "cn": "A：我們公司今年捐款支持的慈善計畫主要目標是什麼？ B：它幫助生活在【貧窮】中的家庭，提供家長職業訓練和孩子免費的學用品，讓他們能賺更多錢，一步步建立更好的未來。"
  },
  {
    "word": "wealth",
    "pos": "n.",
    "cn_def": "財富",
    "en_def": "a large amount of money or valuable things",
    "sentence": "A: Why did the famous businessman give so much money to build a new library and hospital in his hometown last year? B: He said he wanted to share his {{BLANK}} with the people who helped him when he was young, and he hopes the buildings will serve the town for many years.",
    "cn": "A：那位知名商人去年為什麼捐那麼多錢在他的家鄉蓋新的圖書館和醫院？ B：他說他想和年輕時幫助過他的人分享他的【財富】，也希望這些建築能為小鎮服務很多年。"
  },
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育",
    "en_def": "the process of teaching and learning, usually at a school",
    "sentence": "A: Why does our company pay part of the cost when employees take evening classes at the university near the office? B: The managers believe that further {{BLANK}} makes staff more skilled and confident, and people who keep learning usually stay with the company longer and get promoted faster.",
    "cn": "A：為什麼員工去辦公室附近的大學上夜間課程時，公司會負擔部分費用？ B：經理們相信進修【教育】能讓員工更有技能、更有自信，而持續學習的人通常會在公司待得更久，也升遷得更快。"
  },
  {
    "word": "healthcare",
    "pos": "n.",
    "cn_def": "醫療保健",
    "en_def": "the services that look after people's health",
    "sentence": "A: What benefits does the company offer new employees besides the monthly salary and the annual bonus? B: Full-time staff receive free {{BLANK}}, which covers doctor visits and hospital costs for them and their families, and there is also a yearly checkup at a clinic near the office.",
    "cn": "A：除了月薪和年終獎金之外，公司還提供新員工哪些福利？ B：全職員工享有免費的【醫療保健】，涵蓋本人和家人的看診及住院費用，另外每年還能在辦公室附近的診所做一次健康檢查。"
  },
  {
    "word": "welfare",
    "pos": "n.",
    "cn_def": "福利；福祉",
    "en_def": "the health, safety and happiness of people; help from the government",
    "sentence": "A: Why did the factory hire a new staff member whose only job is to talk with workers about their problems and needs? B: The owners care about the {{BLANK}} of their employees, so they want someone to listen to complaints, improve working conditions and help people who are having trouble at home.",
    "cn": "A：工廠為什麼聘請了一位新員工，他唯一的工作就是和工人談他們的問題與需求？ B：老闆們關心員工的【福祉】，所以他們希望有人傾聽抱怨、改善工作環境，並幫助家裡遇到困難的人。"
  },
  {
    "word": "volunteer",
    "pos": "v.",
    "cn_def": "自願；當志工",
    "en_def": "to offer to do something without being paid or told",
    "sentence": "A: The charity run next Sunday needs people to hand out water and guide the runners, but do you think anyone from our office will help? B: Yes, five people from the accounting team have already offered to {{BLANK}}, and they will meet at the park entrance at seven in the morning to get their instructions.",
    "cn": "A：下週日的慈善路跑需要人發水和引導跑者，你覺得我們辦公室會有人幫忙嗎？ B：會的，會計組已經有五個人主動表示要【當志工】，他們早上七點會在公園入口集合接受指示。"
  },
  {
    "word": "charity",
    "pos": "n.",
    "cn_def": "慈善機構；慈善",
    "en_def": "an organization that helps people in need",
    "sentence": "A: What are we going to do with all the old computers and office chairs that we no longer need after the renovation is finished? B: The manager has decided to give them to a local {{BLANK}} that supports students from poor families, so the equipment will be useful again instead of going to the dump.",
    "cn": "A：裝修完成後，那些我們不再需要的舊電腦和辦公椅要怎麼處理？ B：經理決定把它們送給當地一家幫助清寒家庭學生的【慈善機構】，這樣這些設備就能再派上用場，而不是被丟到垃圾場。"
  },
  {
    "word": "urban",
    "pos": "adj.",
    "cn_def": "都市的",
    "en_def": "relating to a city or town",
    "sentence": "A: Why is the company opening its new coffee shops downtown instead of in the small towns where the rent is much cheaper? B: Our research shows that young {{BLANK}} workers buy coffee almost every day on the way to their offices, so the busy city center should bring us many more customers.",
    "cn": "A：為什麼公司把新的咖啡店開在市中心，而不是租金便宜很多的小鎮？ B：我們的調查顯示，年輕的【都市】上班族幾乎每天上班途中都會買咖啡，所以熱鬧的市中心應該能為我們帶來多很多的顧客。"
  },
  {
    "word": "rural",
    "pos": "adj.",
    "cn_def": "鄉村的；農村的",
    "en_def": "relating to the countryside, not the city",
    "sentence": "A: Why is the internet company spending so much money to put new cables along the mountain roads this year? B: It wants to bring fast service to {{BLANK}} areas, where many farmers and small business owners still cannot sell their products online because the connection is too slow.",
    "cn": "A：網路公司今年為什麼花那麼多錢沿著山路鋪設新纜線？ B：它想把高速網路服務帶到【鄉村】地區，那裡許多農民和小商家因為網路太慢，到現在還無法在網路上賣東西。"
  },
  {
    "word": "public",
    "pos": "adj.",
    "cn_def": "公共的；公眾的",
    "en_def": "for everyone to use; relating to all the people",
    "sentence": "A: Is there a good way to get to the trade fair without driving, since parking near the convention center is so expensive? B: Yes, {{BLANK}} transportation is very convenient there, because the subway stops right in front of the main entrance and buses run every ten minutes from the train station.",
    "cn": "A：不開車有沒有好方法去商展？會展中心附近停車實在太貴了。 B：有，那裡的【大眾】運輸非常方便，捷運就停在正門口，而且公車每十分鐘就從火車站發一班。"
  },
  {
    "word": "policy",
    "pos": "n.",
    "cn_def": "政策；方針",
    "en_def": "a plan or set of rules made by a company or government",
    "sentence": "A: Can I bring my dog to the office on Fridays, or are animals not allowed in the building at all? B: The company {{BLANK}} says that pets are not permitted inside, because some employees have allergies, but you can ask the manager about the small garden behind the building.",
    "cn": "A：我星期五可以帶狗來辦公室嗎？還是大樓裡完全不准帶動物？ B：公司【政策】規定室內不准帶寵物，因為有些員工會過敏，不過你可以問問經理大樓後面那座小花園能不能用。"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "cn_def": "衝突",
    "en_def": "a serious disagreement between people or groups",
    "sentence": "A: Why did the two department managers stop talking to each other during the planning meeting yesterday afternoon? B: There is a {{BLANK}} between them about the budget, because both teams want more money for next year, and the director will have to make the final decision soon.",
    "cn": "A：昨天下午的規劃會議上，那兩位部門經理為什麼不再跟對方說話了？ B：他們之間對預算有【衝突】，因為兩個團隊明年都想要更多經費，主管很快就必須做出最後決定。"
  },
  {
    "word": "harmony",
    "pos": "n.",
    "cn_def": "和諧；融洽",
    "en_def": "a peaceful situation where people agree and get along",
    "sentence": "A: How does your small team stay so friendly and productive even when the deadlines are tight and everyone is very busy? B: We try to work in {{BLANK}} by listening to each other, sharing tasks fairly and having lunch together once a week, so problems are solved before they become serious.",
    "cn": "A：即使期限很緊、每個人都很忙，你們這個小團隊怎麼還能保持這麼友善又有效率？ B：我們努力【和諧】地共事，彼此傾聽、公平分配工作，並且每週一起吃一次午餐，所以問題在變嚴重之前就解決了。"
  },
  {
    "word": "progress",
    "pos": "n.",
    "cn_def": "進展；進步",
    "en_def": "movement toward a better condition or a goal",
    "sentence": "A: Has the construction team finished the new parking garage yet, or will it still take several more months before we can use it? B: They have made good {{BLANK}} this month, and the manager says the building should open in early June if the weather stays dry and the materials arrive on time.",
    "cn": "A：施工團隊已經完成新的停車場了嗎？還是還要好幾個月我們才能使用？ B：他們這個月有不錯的【進展】，經理說如果天氣保持乾燥、材料準時送到，大樓應該能在六月初開放。"
  }
];

const MCQS = [
  {
    "q": "The new park will be used by families from many neighborhoods. Its goal is to bring the whole _____ together on weekends.",
    "options": [
      "community",
      "minority",
      "policy",
      "wealth"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Employees at the firm are encouraged to share ideas openly. The company _____ values creativity more than strict rules.",
    "options": [
      "poverty",
      "culture",
      "conflict",
      "justice"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Every year the staff plant a tree on the company's birthday. This _____ started when the firm opened forty years ago.",
    "options": [
      "welfare",
      "majority",
      "tradition",
      "freedom"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The new team members get along very well. They work in _____ and rarely argue about anything.",
    "options": [
      "conflict",
      "poverty",
      "minority",
      "harmony"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Working from home was rare ten years ago. Today it has become the _____ at many technology companies.",
    "options": [
      "charity",
      "norm",
      "citizen",
      "law"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "All drivers must wear seat belts in this country. Breaking the _____ can result in a heavy fine.",
    "options": [
      "law",
      "tradition",
      "harmony",
      "diversity"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Anyone over sixty-five can ride the city bus for free. Every senior _____ only needs to show an ID card.",
    "options": [
      "government",
      "progress",
      "employment",
      "citizen"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The national _____ announced new tax rules yesterday. Small businesses will pay less tax starting next January.",
    "options": [
      "community",
      "culture",
      "government",
      "poverty"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Men and women at the company now receive the same pay for the same work. The board is proud of this gender _____.",
    "options": [
      "equality",
      "minority",
      "conflict",
      "wealth"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The workers took the factory owner to court over unpaid wages. They hope the judge will finally bring them _____.",
    "options": [
      "majority",
      "harmony",
      "justice",
      "norm"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Our designers enjoy great _____ at work. They can choose their own projects and set their own hours.",
    "options": [
      "poverty",
      "freedom",
      "policy",
      "citizen"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Large companies should protect the environment and help local people. This idea is known as corporate social _____.",
    "options": [
      "diversity",
      "tradition",
      "economy",
      "responsibility"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The two suppliers agreed to share their delivery trucks. They decided to _____ in order to cut shipping costs.",
    "options": [
      "respect",
      "volunteer",
      "cooperate",
      "argue"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The two managers disagree about next year's budget. The director met them to resolve the _____ before it gets worse.",
    "options": [
      "conflict",
      "harmony",
      "progress",
      "norm"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Our team includes people from ten different countries. Managers say this cultural _____ helps us understand global customers.",
    "options": [
      "poverty",
      "justice",
      "welfare",
      "diversity"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The new office has ramps, wide doors and quiet rooms. Managers want an _____ workplace for people of all abilities.",
    "options": [
      "urban",
      "inclusive",
      "rural",
      "public"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Most customers liked the new menu very much. Only a small _____ asked the restaurant to bring back the old dishes.",
    "options": [
      "minority",
      "majority",
      "community",
      "government"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "More than half of the staff voted for a shorter Friday. The _____ preferred to finish work at three o'clock.",
    "options": [
      "minority",
      "norm",
      "charity",
      "majority"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The builders have finished three floors of the new hotel. The manager is happy with their _____ so far.",
    "options": [
      "poverty",
      "conflict",
      "progress",
      "tradition"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The new shopping mall will create hundreds of jobs. City leaders hope it will increase _____ in the area.",
    "options": [
      "poverty",
      "employment",
      "conflict",
      "welfare"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Many families in the region earn very little money. The charity provides food and job training to people living in _____.",
    "options": [
      "wealth",
      "progress",
      "harmony",
      "poverty"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "The businessman built his fortune by selling software. He now uses his _____ to fund schools in poor villages.",
    "options": [
      "wealth",
      "poverty",
      "citizen",
      "norm"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The company pays for staff to take university courses. Managers believe further _____ helps employees develop new skills.",
    "options": [
      "employment",
      "education",
      "justice",
      "conflict"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Full-time staff receive free medical checkups every year. The company also covers most of their _____ costs.",
    "options": [
      "education",
      "tradition",
      "healthcare",
      "culture"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The factory hired a counselor to support its workers. The owners care deeply about employee _____ and safety.",
    "options": [
      "welfare",
      "majority",
      "law",
      "diversity"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The charity run needs people to hand out water bottles. Several engineers have offered to _____ on Sunday morning.",
    "options": [
      "respect",
      "volunteer",
      "cooperate",
      "announce"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Customers may return items within thirty days with a receipt. This return _____ is printed on the back of every bill.",
    "options": [
      "charity",
      "citizen",
      "economy",
      "policy"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "Rents in the city center have risen sharply this year. Many _____ workers now share apartments to save money.",
    "options": [
      "rural",
      "inclusive",
      "urban",
      "public"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The bank opened small branches in farming villages. It wants to serve customers in _____ areas far from the city.",
    "options": [
      "rural",
      "urban",
      "inclusive",
      "public"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "The museum is free for everyone on Sundays. It is one of the most popular _____ buildings in the city.",
    "options": [
      "rural",
      "inclusive",
      "urban",
      "public"
    ],
    "answer": 3,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "community": {
    "pos": "n.",
    "en_def": "a group of people living in the same area or sharing interests",
    "cn_def": "社區；社群"
  },
  "culture": {
    "pos": "n.",
    "en_def": "the ideas, customs and way of life of a group of people",
    "cn_def": "文化"
  },
  "tradition": {
    "pos": "n.",
    "en_def": "a custom or belief passed down over a long time",
    "cn_def": "傳統"
  },
  "value": {
    "pos": "n.",
    "en_def": "a belief about what is important or right",
    "cn_def": "價值觀"
  },
  "norm": {
    "pos": "n.",
    "en_def": "a usual or expected way of behaving",
    "cn_def": "常態；規範"
  },
  "law": {
    "pos": "n.",
    "en_def": "a rule made by the government that everyone must obey",
    "cn_def": "法律"
  },
  "citizen": {
    "pos": "n.",
    "en_def": "a person who legally belongs to a country or city",
    "cn_def": "公民；市民"
  },
  "government": {
    "pos": "n.",
    "en_def": "the group of people who officially control a country",
    "cn_def": "政府"
  },
  "equality": {
    "pos": "n.",
    "en_def": "the state of everyone having the same rights and chances",
    "cn_def": "平等"
  },
  "justice": {
    "pos": "n.",
    "en_def": "fair treatment of people according to the law",
    "cn_def": "正義；公平"
  },
  "freedom": {
    "pos": "n.",
    "en_def": "the right to do or say what you want",
    "cn_def": "自由"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to take care of something or someone",
    "cn_def": "責任"
  },
  "cooperate": {
    "pos": "v.",
    "en_def": "to work together with others to reach a goal",
    "cn_def": "合作"
  },
  "respect": {
    "pos": "v.",
    "en_def": "to treat someone or something with care and admiration",
    "cn_def": "尊重"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "the state of including many different types of people or things",
    "cn_def": "多元；多樣性"
  },
  "inclusive": {
    "pos": "adj.",
    "en_def": "including all kinds of people and treating them fairly",
    "cn_def": "包容的；包含各方的"
  },
  "minority": {
    "pos": "n.",
    "en_def": "the smaller part of a group",
    "cn_def": "少數"
  },
  "majority": {
    "pos": "n.",
    "en_def": "the larger part of a group; more than half",
    "cn_def": "大多數"
  },
  "economy": {
    "pos": "n.",
    "en_def": "the system of money, trade and business in a country",
    "cn_def": "經濟"
  },
  "employment": {
    "pos": "n.",
    "en_def": "the state of having a paid job",
    "cn_def": "就業；雇用"
  },
  "poverty": {
    "pos": "n.",
    "en_def": "the state of being very poor",
    "cn_def": "貧窮"
  },
  "wealth": {
    "pos": "n.",
    "en_def": "a large amount of money or valuable things",
    "cn_def": "財富"
  },
  "education": {
    "pos": "n.",
    "en_def": "the process of teaching and learning, usually at a school",
    "cn_def": "教育"
  },
  "healthcare": {
    "pos": "n.",
    "en_def": "the services that look after people's health",
    "cn_def": "醫療保健"
  },
  "welfare": {
    "pos": "n.",
    "en_def": "the health, safety and happiness of people; help from the government",
    "cn_def": "福利；福祉"
  },
  "volunteer": {
    "pos": "v.",
    "en_def": "to offer to do something without being paid or told",
    "cn_def": "自願；當志工"
  },
  "charity": {
    "pos": "n.",
    "en_def": "an organization that helps people in need",
    "cn_def": "慈善機構；慈善"
  },
  "urban": {
    "pos": "adj.",
    "en_def": "relating to a city or town",
    "cn_def": "都市的"
  },
  "rural": {
    "pos": "adj.",
    "en_def": "relating to the countryside, not the city",
    "cn_def": "鄉村的；農村的"
  },
  "public": {
    "pos": "adj.",
    "en_def": "for everyone to use; relating to all the people",
    "cn_def": "公共的；公眾的"
  },
  "policy": {
    "pos": "n.",
    "en_def": "a plan or set of rules made by a company or government",
    "cn_def": "政策；方針"
  },
  "conflict": {
    "pos": "n.",
    "en_def": "a serious disagreement between people or groups",
    "cn_def": "衝突"
  },
  "harmony": {
    "pos": "n.",
    "en_def": "a peaceful situation where people agree and get along",
    "cn_def": "和諧；融洽"
  },
  "progress": {
    "pos": "n.",
    "en_def": "movement toward a better condition or a goal",
    "cn_def": "進展；進步"
  }
};

const EXTRA_GLOSSES = {};
