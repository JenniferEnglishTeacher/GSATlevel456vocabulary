// Topic 153 Quiz Data: Gender 性別
// Source word list: https://www.examword.com/group-topic/gender — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T153 - Gender 性別",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "sex",
    "pos": "n.",
    "cn_def": "性別（生理上）",
    "en_def": "the group, male or female, that a person or animal belongs to by body",
    "sentence": "A: Why does the new hiring form for the hotel in Kaohsiung no longer ask job applicants to fill in so many personal details about themselves? B: The HR director decided that a person's {{BLANK}} has nothing to do with skills, so she removed that box to keep the process fair for everyone.",
    "cn": "A：為什麼高雄那家飯店的新求職表格不再要求應徵者填寫那麼多個人資料？ B：人資總監認為一個人的【性別】和能力無關，所以她刪掉了那一欄，讓流程對每個人都公平。"
  },
  {
    "word": "male",
    "pos": "adj.",
    "cn_def": "男性的；雄性的",
    "en_def": "belonging to the sex that cannot have babies",
    "sentence": "A: Our nursing department has always hired mostly women, so why is the hospital running a new recruitment campaign at local universities this spring? B: The managers want more {{BLANK}} nurses on the night shift, because many patients feel more comfortable when the team includes both men and women.",
    "cn": "A：我們護理部門一向主要聘用女性，那為什麼醫院今年春天要在當地大學舉辦新的招募活動？ B：主管們希望夜班有更多【男性】護理師，因為當團隊裡男女都有時，許多病患會感到比較自在。"
  },
  {
    "word": "female",
    "pos": "adj.",
    "cn_def": "女性的；雌性的",
    "en_def": "belonging to the sex that can have babies",
    "sentence": "A: I read in the company newsletter that the engineering team has changed a lot over the past five years. What exactly happened there? B: The number of {{BLANK}} engineers has doubled since the company started offering flexible hours and a mentoring program for young graduates from technical colleges.",
    "cn": "A：我在公司電子報上看到工程團隊過去五年改變很大，那裡到底發生了什麼事？ B：自從公司開始提供彈性工時並為技術學院的年輕畢業生開辦導師計畫以來，【女性】工程師的人數已經增加了一倍。"
  },
  {
    "word": "identity",
    "pos": "n.",
    "cn_def": "身分；認同",
    "en_def": "who or what a person is; the qualities that make a person or group different",
    "sentence": "A: Why did the marketing agency spend so much time interviewing the owners of the small bakery before designing their new logo and website? B: They wanted to understand the bakery's {{BLANK}}, including its history and values, so customers would immediately recognize what makes the shop special.",
    "cn": "A：為什麼行銷公司在設計小麵包店的新標誌和網站之前，要花那麼多時間訪談店主？ B：他們想了解這家麵包店的【身分特色】，包括它的歷史和價值觀，讓顧客能立刻認出這家店的特別之處。"
  },
  {
    "word": "role",
    "pos": "n.",
    "cn_def": "角色；職責",
    "en_def": "the job or position someone has in a group or activity",
    "sentence": "A: Now that Maria has been promoted to team leader, who is going to handle the weekly reports that she used to prepare for the regional office? B: Kevin will take over that {{BLANK}} next month, and Maria will train him for two weeks so the change goes smoothly for everyone.",
    "cn": "A：既然瑪麗亞已經升任組長，那以前她為區域辦公室準備的每週報告要由誰負責？ B：凱文下個月會接下那個【職責】，而瑪麗亞會訓練他兩週，讓交接對大家來說都很順利。"
  },
  {
    "word": "equality",
    "pos": "n.",
    "cn_def": "平等",
    "en_def": "the state of everyone having the same rights and chances",
    "sentence": "A: Why are so many employees talking about the new salary policy that the board of directors announced at the end of last quarter? B: It promises {{BLANK}} in pay, which means men and women doing the same job at the same level will finally earn exactly the same amount.",
    "cn": "A：為什麼這麼多員工都在談論董事會上一季末宣布的新薪資政策？ B：它承諾薪資【平等】，也就是說，在相同職級做相同工作的男性和女性終於會領到完全一樣的薪水。"
  },
  {
    "word": "equity",
    "pos": "n.",
    "cn_def": "公平；公正",
    "en_def": "fairness, especially giving people what they need so they have equal chances",
    "sentence": "A: Why did the school decide to give extra laptops and free tutoring only to some students instead of giving every student exactly the same support? B: The principal believes {{BLANK}} means helping students based on their needs, so children from low-income families can finally compete on a fair level.",
    "cn": "A：為什麼學校決定只給部分學生額外的筆電和免費家教，而不是給每個學生完全一樣的支援？ B：校長認為【公平】的意思是依照學生的需求來幫助他們，這樣低收入家庭的孩子才終於能在公平的基礎上競爭。"
  },
  {
    "word": "stereotype",
    "pos": "n.",
    "cn_def": "刻板印象",
    "en_def": "a fixed and often unfair idea about what a type of person is like",
    "sentence": "A: Why did the advertising team reject the first draft of the commercial for our new kitchen appliances after the client meeting on Monday? B: It showed only women cooking and cleaning, and the client felt that this old {{BLANK}} would upset many younger customers who share housework equally.",
    "cn": "A：為什麼廣告團隊在星期一的客戶會議後否決了我們新廚房家電廣告的初稿？ B：那支廣告只呈現女性在煮飯和打掃，客戶覺得這種老舊的【刻板印象】會讓許多平均分擔家務的年輕顧客不高興。"
  },
  {
    "word": "bias",
    "pos": "n.",
    "cn_def": "偏見；偏袒",
    "en_def": "an unfair preference for or against someone or something",
    "sentence": "A: Why does the company now remove names and photos from all résumés before the hiring managers are allowed to read them? B: The HR team wants to reduce {{BLANK}}, because studies show that managers sometimes judge applicants unfairly based on their names, ages, or appearance.",
    "cn": "A：為什麼公司現在要在招募主管閱讀履歷之前，先把所有履歷上的姓名和照片移除？ B：人資團隊想減少【偏見】，因為研究顯示主管有時會根據應徵者的姓名、年齡或外表做出不公平的判斷。"
  },
  {
    "word": "discrimination",
    "pos": "n.",
    "cn_def": "歧視",
    "en_def": "treating a person or group unfairly because of who they are",
    "sentence": "A: What should I do if I believe a manager treated me unfairly during the promotion process because I'm a woman with young children? B: You should report the {{BLANK}} to the HR office in writing, and they must investigate it carefully and keep all the details private.",
    "cn": "A：如果我認為主管在升遷過程中因為我是有年幼孩子的女性而不公平地對待我，我該怎麼辦？ B：你應該以書面方式向人資辦公室舉報這起【歧視】事件，他們必須仔細調查，並將所有細節保密。"
  },
  {
    "word": "diversity",
    "pos": "n.",
    "cn_def": "多元性；多樣性",
    "en_def": "the state of including many different types of people or things",
    "sentence": "A: Why does the new design team come from so many different countries, age groups, and professional backgrounds this year? B: The director believes {{BLANK}} brings fresh ideas, so she hired people with various experiences to help the company reach customers all over the world.",
    "cn": "A：為什麼今年新的設計團隊成員來自這麼多不同的國家、年齡層和專業背景？ B：總監認為【多元性】能帶來新的想法，所以她聘用了經歷各異的人，幫助公司接觸世界各地的顧客。"
  },
  {
    "word": "inclusive",
    "pos": "adj.",
    "cn_def": "包容的；包含一切的",
    "en_def": "including everyone and making all people feel welcome",
    "sentence": "A: Why did the organizers change the company picnic from a Saturday afternoon to a weekday lunchtime this year? B: They wanted the event to be more {{BLANK}}, because many staff members with children or weekend jobs could never join the fun before.",
    "cn": "A：為什麼今年主辦人把公司野餐從星期六下午改到平日午餐時間？ B：他們希望活動更【具包容性】，因為許多有孩子或週末要工作的員工以前從來沒辦法參加。"
  },
  {
    "word": "nonbinary",
    "pos": "adj.",
    "cn_def": "非二元性別的",
    "en_def": "describing a person who does not think of themselves as only male or only female",
    "sentence": "A: Why did the HR department add a third choice to the gender question on the online employee registration form last week? B: Some staff members are {{BLANK}}, and the company wanted every worker to feel comfortable when they enter their information into the system.",
    "cn": "A：為什麼人資部門上週在線上員工登記表的性別問題中新增了第三個選項？ B：有些員工是【非二元性別】者，公司希望每位員工在系統中填寫資料時都能感到自在。"
  },
  {
    "word": "transgender",
    "pos": "adj.",
    "cn_def": "跨性別的",
    "en_def": "describing a person whose gender is different from the sex they were given at birth",
    "sentence": "A: Why is the hotel group updating its staff handbook and training all of its front desk workers again this month? B: The managers want employees to welcome {{BLANK}} guests politely and use the names on their reservations, so every customer feels respected during their stay.",
    "cn": "A：為什麼這個飯店集團這個月要更新員工手冊，並再次培訓所有櫃台人員？ B：主管們希望員工能有禮貌地接待【跨性別】客人，並使用訂房資料上的名字，讓每位顧客在住宿期間都感到受尊重。"
  },
  {
    "word": "cisgender",
    "pos": "adj.",
    "cn_def": "順性別的",
    "en_def": "describing a person whose gender is the same as the sex they were given at birth",
    "sentence": "A: In yesterday's diversity workshop, the trainer used a word I had never heard before. Could you explain what it means? B: She said {{BLANK}} describes people whose gender matches the sex they were given at birth, and it is simply the opposite of the word transgender.",
    "cn": "A：在昨天的多元工作坊中，講師用了一個我從沒聽過的詞，你能解釋那是什麼意思嗎？ B：她說【順性別】是用來描述性別認同與出生時被指定的生理性別一致的人，它就是「跨性別」這個詞的相反。"
  },
  {
    "word": "expression",
    "pos": "n.",
    "cn_def": "表達；表現",
    "en_def": "the way a person shows feelings, ideas, or who they are",
    "sentence": "A: Why did the company finally relax its strict dress code for the office staff who don't usually meet clients? B: Management decided that personal {{BLANK}} through clothing and hairstyles makes employees happier, as long as everyone still looks neat and professional at work.",
    "cn": "A：為什麼公司終於放寬了對不常接觸客戶的辦公室員工的嚴格服裝規定？ B：管理階層認為透過服裝和髮型來展現個人【表達】能讓員工更快樂，只要大家在工作時仍然看起來整潔又專業就好。"
  },
  {
    "word": "masculine",
    "pos": "adj.",
    "cn_def": "男性化的；陽剛的",
    "en_def": "having qualities thought to be typical of men",
    "sentence": "A: Why did the cosmetics company hire a new design agency for its skincare products that are made especially for men? B: Sales were low, so they wanted packaging that looks more {{BLANK}}, with dark colors and simple shapes that appeal to male shoppers in department stores.",
    "cn": "A：為什麼這家化妝品公司要為專為男性設計的保養品聘請新的設計公司？ B：銷售量很低，所以他們想要看起來更【陽剛】的包裝，用深色和簡單的造型來吸引百貨公司裡的男性顧客。"
  },
  {
    "word": "feminine",
    "pos": "adj.",
    "cn_def": "女性化的；陰柔的",
    "en_def": "having qualities thought to be typical of women",
    "sentence": "A: Why did the marketing team decide to change the pink packaging of our new running shoes before the product launch next month? B: Customers said the design looked too {{BLANK}}, and the team wants the shoes to appeal to all runners, not just women who like soft colors.",
    "cn": "A：為什麼行銷團隊決定在下個月產品上市前更換我們新跑鞋的粉紅色包裝？ B：顧客說那個設計看起來太【女性化】，而團隊希望這款鞋能吸引所有跑者，而不只是喜歡柔和色系的女性。"
  },
  {
    "word": "neutral",
    "pos": "adj.",
    "cn_def": "中性的；中立的",
    "en_def": "not supporting either side; not showing features of one particular type",
    "sentence": "A: Why did the job advertisement for the warehouse position change the title from \"foreman\" to \"shift supervisor\" this year? B: The company now uses {{BLANK}} job titles, so the ads don't suggest that only men or only women should apply for certain positions.",
    "cn": "A：為什麼今年倉庫職缺的徵才廣告把職稱從「工頭」改成「班組主管」？ B：公司現在使用【中性】的職稱，讓廣告不會暗示某些職位只適合男性或只適合女性應徵。"
  },
  {
    "word": "pronoun",
    "pos": "n.",
    "cn_def": "代名詞",
    "en_def": "a word like he, she, they, or it that is used instead of a noun",
    "sentence": "A: Why do some of our new colleagues add words like \"she/her\" or \"they/them\" under their names in their email signatures? B: They are telling people which {{BLANK}} to use when talking about them, so others can avoid mistakes and show respect in conversations.",
    "cn": "A：為什麼我們有些新同事會在電子郵件簽名的名字下方加上「she/her」或「they/them」這類字？ B：他們是在告訴大家談到他們時要用哪個【代名詞】，這樣別人就能避免出錯，並在對話中表現尊重。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊重；敬重",
    "en_def": "a feeling that someone is important and should be treated well",
    "sentence": "A: What is the most important rule in the customer service training that all new staff must complete during their first week? B: The trainer says we must treat every caller with {{BLANK}}, even when they are angry or rude, because calm and polite answers usually solve problems faster.",
    "cn": "A：所有新進員工在第一週必須完成的客服訓練中，最重要的規則是什麼？ B：講師說我們必須以【尊重】的態度對待每一位來電者，即使他們生氣或無禮也一樣，因為冷靜有禮的回答通常能更快解決問題。"
  },
  {
    "word": "rights",
    "pos": "n.",
    "cn_def": "權利",
    "en_def": "things that people are allowed to have or do by law or by fairness",
    "sentence": "A: Why is the labor union holding a meeting in the factory cafeteria after work on Friday evening? B: They want to explain workers' {{BLANK}} under the new law, such as paid parental leave, safe working conditions, and fair overtime pay for every employee.",
    "cn": "A：為什麼工會星期五下班後要在工廠餐廳開會？ B：他們想說明新法律下勞工的【權利】，例如帶薪育嬰假、安全的工作環境，以及每位員工都能領到的合理加班費。"
  },
  {
    "word": "representation",
    "pos": "n.",
    "cn_def": "代表性；代表",
    "en_def": "the fact of having people from a group present or included",
    "sentence": "A: Why did the company decide to change the way it chooses members for the board of directors starting next year? B: Shareholders complained about poor {{BLANK}}, because the board had no women, so the company promised to include more female leaders soon.",
    "cn": "A：為什麼公司決定從明年起改變選任董事會成員的方式？ B：股東們抱怨【代表性】不足，因為董事會裡沒有任何女性，所以公司承諾很快會納入更多女性領導者。"
  },
  {
    "word": "advocate",
    "pos": "n.",
    "cn_def": "倡議者；擁護者",
    "en_def": "a person who publicly supports an idea or group",
    "sentence": "A: Who is the guest speaker that the HR team invited to talk to all the department managers at Thursday's leadership meeting? B: She is a well-known {{BLANK}} for working mothers, and she will share practical ideas about flexible schedules and childcare support at work.",
    "cn": "A：人資團隊邀請在星期四領導會議上對所有部門主管演講的嘉賓是誰？ B：她是一位知名的職業母親【倡議者】，她會分享有關彈性工時和職場托育支援的實用想法。"
  },
  {
    "word": "awareness",
    "pos": "n.",
    "cn_def": "意識；認識",
    "en_def": "knowledge or understanding of a situation or problem",
    "sentence": "A: Why are all employees required to watch a short online video about fair treatment before the end of this month? B: The company wants to raise {{BLANK}} of unfair behavior at work, so everyone understands what counts as harassment and how to report it safely.",
    "cn": "A：為什麼所有員工都必須在本月底前觀看一段關於公平對待的線上短片？ B：公司想提高大家對職場不公平行為的【意識】，讓每個人都了解什麼算是騷擾，以及如何安全地舉報。"
  },
  {
    "word": "acceptance",
    "pos": "n.",
    "cn_def": "接納；接受",
    "en_def": "the act of agreeing that something is normal, right, or welcome",
    "sentence": "A: How did the older staff members react when the company started hiring many young employees with very different working styles? B: At first there was some tension, but after several team-building activities, there was growing {{BLANK}}, and now both groups cooperate well on projects.",
    "cn": "A：當公司開始聘用許多工作風格非常不同的年輕員工時，資深員工的反應如何？ B：一開始有些緊張，但經過幾次團隊建立活動之後，彼此的【接納】逐漸增加，現在兩群人在專案上合作得很好。"
  },
  {
    "word": "tolerance",
    "pos": "n.",
    "cn_def": "容忍；寬容",
    "en_def": "the willingness to accept opinions or behavior different from your own",
    "sentence": "A: Why does our office now have such a strict policy against rude jokes and comments in the staff break room? B: Management has zero {{BLANK}} for harassment, so anyone who makes others feel uncomfortable will receive a formal warning from the HR department.",
    "cn": "A：為什麼我們辦公室現在對員工休息室裡的粗魯玩笑和言論有這麼嚴格的規定？ B：管理階層對騷擾行為採取零【容忍】，所以任何讓別人感到不舒服的人都會收到人資部門的正式警告。"
  },
  {
    "word": "culture",
    "pos": "n.",
    "cn_def": "文化",
    "en_def": "the shared beliefs, values, and habits of a group or organization",
    "sentence": "A: Why do so many talented young workers want to join that small software company even though the salaries there are not very high? B: It has a friendly {{BLANK}}, where managers listen to new ideas and everyone gets equal chances to lead important projects.",
    "cn": "A：為什麼這麼多有才華的年輕人都想加入那家小軟體公司，即使那裡的薪水不算很高？ B：它有友善的企業【文化】，主管會傾聽新想法，而且每個人都有平等的機會帶領重要專案。"
  },
  {
    "word": "norm",
    "pos": "n.",
    "cn_def": "規範；常態",
    "en_def": "a usual or accepted way of behaving in a group",
    "sentence": "A: Do you think many fathers at our company will actually take the new paternity leave that HR announced last month? B: Yes, because it's becoming the {{BLANK}} for young dads to stay home with their babies, and several team leaders have already used it themselves.",
    "cn": "A：你覺得我們公司會有很多爸爸真的請人資上個月宣布的新陪產假嗎？ B：會的，因為年輕爸爸在家陪伴寶寶正逐漸成為【常態】，而且已經有好幾位組長自己請過了。"
  },
  {
    "word": "social",
    "pos": "adj.",
    "cn_def": "社會的",
    "en_def": "relating to society and the way people live together",
    "sentence": "A: Why did the company start supporting a local program that teaches computer skills to women returning to work after raising children? B: The CEO believes businesses have a {{BLANK}} responsibility to help their communities, and the program also helps us find skilled new employees.",
    "cn": "A：為什麼公司開始贊助一個教導育兒後重返職場女性電腦技能的地方計畫？ B：執行長認為企業有協助社區的【社會】責任，而且這個計畫也幫助我們找到有技能的新員工。"
  },
  {
    "word": "biological",
    "pos": "adj.",
    "cn_def": "生物的；生理的",
    "en_def": "relating to the body and natural processes of living things",
    "sentence": "A: Why did the insurance company change its health plan to include more checkups for both men and women this year? B: Doctors explained that some {{BLANK}} differences between the sexes affect which diseases people get, so they recommend different tests for different patients.",
    "cn": "A：為什麼保險公司今年修改健康方案，為男性和女性都加入更多健康檢查？ B：醫生解釋說兩性之間的某些【生理】差異會影響人們罹患哪些疾病，所以他們建議不同的病人做不同的檢查。"
  },
  {
    "word": "psychological",
    "pos": "adj.",
    "cn_def": "心理的",
    "en_def": "relating to the mind and feelings",
    "sentence": "A: Why did the company hire a counselor to visit the office twice a week after the difficult reorganization last spring? B: Many employees were under great stress, and the managers wanted to offer {{BLANK}} support so people could talk about their worries in private.",
    "cn": "A：為什麼公司在去年春天艱難的組織重整後，聘請了一位諮商師每週到辦公室兩次？ B：許多員工承受很大的壓力，主管們想提供【心理】支持，讓大家可以私下談談自己的煩惱。"
  },
  {
    "word": "personal",
    "pos": "adj.",
    "cn_def": "個人的；私人的",
    "en_def": "relating to one particular person and their private life",
    "sentence": "A: Why did my manager ask me not to share details about my coworker's family situation during yesterday's team meeting? B: Those matters are {{BLANK}}, and the company policy says we should only discuss work topics unless the coworker chooses to tell everyone herself.",
    "cn": "A：為什麼我的主管要我不要在昨天的團隊會議上分享同事家庭狀況的細節？ B：那些事情是【私人的】，而公司政策規定我們只應討論工作話題，除非那位同事自己選擇告訴大家。"
  },
  {
    "word": "legal",
    "pos": "adj.",
    "cn_def": "法律的；合法的",
    "en_def": "relating to the law or allowed by law",
    "sentence": "A: Why did the company hire an outside lawyer before updating its parental leave rules for all of the factory workers? B: The managers wanted {{BLANK}} advice, because they needed to make sure the new rules fully follow the latest labor laws and protect every employee fairly.",
    "cn": "A：為什麼公司在為所有工廠員工更新育嬰假規定之前，要聘請外部律師？ B：主管們需要【法律】建議，因為他們必須確保新規定完全符合最新的勞動法，並公平地保障每位員工。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a conversation in which people talk about a subject",
    "sentence": "A: What will happen at the diversity training session that the HR department has scheduled for next Wednesday afternoon? B: After a short video, there will be a group {{BLANK}} where employees share their experiences and suggest ways to make our workplace fairer for everyone.",
    "cn": "A：人資部門安排在下週三下午的多元訓練課程會進行什麼活動？ B：在一段短片之後，會有小組【討論】，讓員工分享自己的經驗，並提出讓職場對每個人更公平的方法。"
  }
];

const MCQS = [
  {
    "q": "The application form does not ask for an applicant's age or _____. Hiring decisions are based only on skills and experience.",
    "options": [
      "sex",
      "salary",
      "address",
      "hobby"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The airline wants to hire more _____ flight attendants this year. Currently, most of its cabin crew members are women.",
    "options": [
      "female",
      "male",
      "neutral",
      "personal"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The bank appointed its first _____ CEO last month. She had worked at the company for over twenty years.",
    "options": [
      "male",
      "legal",
      "female",
      "social"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The marketing team created a new logo and slogan for the hotel. They hope this fresh brand _____ will attract younger travelers.",
    "options": [
      "equality",
      "tolerance",
      "awareness",
      "identity"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Ms. Park will play a key _____ in the merger negotiations. She has handled similar deals in Japan and Korea.",
    "options": [
      "norm",
      "role",
      "bias",
      "culture"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "The new policy supports gender _____ in the workplace. Men and women in the same position will receive equal pay.",
    "options": [
      "equality",
      "stereotype",
      "discrimination",
      "identity"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The foundation aims to promote _____ in education. It provides extra resources to schools in poorer neighborhoods.",
    "options": [
      "bias",
      "stereotype",
      "pronoun",
      "equity"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The advertisement was criticized for showing only women doing housework. Critics said it repeated an outdated _____.",
    "options": [
      "equity",
      "representation",
      "stereotype",
      "advocate"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "All interviewers must complete training on unconscious _____. The course helps them judge applicants more fairly.",
    "options": [
      "bias",
      "respect",
      "diversity",
      "acceptance"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "The law protects workers from _____ based on age or gender. Employers who break it may face heavy fines.",
    "options": [
      "representation",
      "discrimination",
      "awareness",
      "expression"
    ],
    "answer": 1,
    "vocabIndex": 9
  },
  {
    "q": "The company highly values _____ in its workforce. Its employees come from more than twenty different countries and cultures.",
    "options": [
      "discussion",
      "tolerance",
      "diversity",
      "pronoun"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The new manager wants to create an _____ workplace. Everyone should feel welcome regardless of age or background.",
    "options": [
      "biological",
      "masculine",
      "legal",
      "inclusive"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The firm allows freedom of _____ in its dress code. Staff may wear what they like as long as it is neat.",
    "options": [
      "equity",
      "expression",
      "norm",
      "rights"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The new men's cologne comes in a dark blue bottle. The designers wanted the packaging to look strong and _____.",
    "options": [
      "masculine",
      "feminine",
      "inclusive",
      "psychological"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The store's new spring line includes many soft colors and flowing dresses. Its style is elegant and _____.",
    "options": [
      "masculine",
      "legal",
      "neutral",
      "feminine"
    ],
    "answer": 3,
    "vocabIndex": 17
  },
  {
    "q": "The updated handbook now uses gender-_____ language throughout. For example, the word chairman has been replaced with chairperson in every section.",
    "options": [
      "biological",
      "inclusive",
      "neutral",
      "personal"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Some employees list their preferred _____ in their email signatures. This helps colleagues address them correctly.",
    "options": [
      "pronoun",
      "norm",
      "role",
      "bias"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "All customers should be treated with _____ at our stores. Staff must remain polite even during busy periods.",
    "options": [
      "discussion",
      "respect",
      "stereotype",
      "identity"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The union held a seminar about employees' _____ under the new labor law. Topics included overtime pay and parental leave.",
    "options": [
      "norms",
      "biases",
      "rights",
      "pronouns"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Shareholders demanded better _____ of women on the board. Currently, only one of the twelve directors is female.",
    "options": [
      "tolerance",
      "awareness",
      "equity",
      "representation"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Ms. Lin is a strong _____ for equal pay. She often speaks at business conferences about closing the wage gap.",
    "options": [
      "pronoun",
      "advocate",
      "stereotype",
      "norm"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "The campaign aims to raise public _____ of workplace harassment. Posters will be displayed in every office.",
    "options": [
      "awareness",
      "identity",
      "equity",
      "culture"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The flexible work policy has gained wide _____ among staff. Over ninety percent of employees support the change.",
    "options": [
      "bias",
      "expression",
      "equality",
      "acceptance"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The company has zero _____ for harassment of any kind. Employees who break this rule will be dismissed immediately.",
    "options": [
      "representation",
      "diversity",
      "tolerance",
      "identity"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The startup is known for its relaxed company _____. Employees often share lunch and brainstorm ideas together.",
    "options": [
      "culture",
      "pronoun",
      "equity",
      "awareness"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Working from home two days a week has become the _____ in our industry. Most competitors now offer similar arrangements.",
    "options": [
      "bias",
      "norm",
      "advocate",
      "identity"
    ],
    "answer": 1,
    "vocabIndex": 28
  },
  {
    "q": "The company offers free counseling to all staff. It believes _____ health is just as important as physical health.",
    "options": [
      "legal",
      "neutral",
      "psychological",
      "inclusive"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "Please do not use the office printer for _____ documents. It should be used only for company business.",
    "options": [
      "biological",
      "masculine",
      "social",
      "personal"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "The firm consulted a lawyer before changing its hiring rules. It wanted to be sure the policy met all _____ requirements.",
    "options": [
      "feminine",
      "legal",
      "psychological",
      "biological"
    ],
    "answer": 1,
    "vocabIndex": 33
  },
  {
    "q": "After the presentation, the trainer led a group _____ on fair hiring. Participants shared their own experiences.",
    "options": [
      "discussion",
      "tolerance",
      "stereotype",
      "awareness"
    ],
    "answer": 0,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "sex": {
    "pos": "n.",
    "en_def": "the group, male or female, that a person or animal belongs to by body",
    "cn_def": "性別（生理上）"
  },
  "male": {
    "pos": "adj.",
    "en_def": "belonging to the sex that cannot have babies",
    "cn_def": "男性的；雄性的"
  },
  "female": {
    "pos": "adj.",
    "en_def": "belonging to the sex that can have babies",
    "cn_def": "女性的；雌性的"
  },
  "identity": {
    "pos": "n.",
    "en_def": "who or what a person is; the qualities that make a person or group different",
    "cn_def": "身分；認同"
  },
  "role": {
    "pos": "n.",
    "en_def": "the job or position someone has in a group or activity",
    "cn_def": "角色；職責"
  },
  "equality": {
    "pos": "n.",
    "en_def": "the state of everyone having the same rights and chances",
    "cn_def": "平等"
  },
  "equity": {
    "pos": "n.",
    "en_def": "fairness, especially giving people what they need so they have equal chances",
    "cn_def": "公平；公正"
  },
  "stereotype": {
    "pos": "n.",
    "en_def": "a fixed and often unfair idea about what a type of person is like",
    "cn_def": "刻板印象"
  },
  "bias": {
    "pos": "n.",
    "en_def": "an unfair preference for or against someone or something",
    "cn_def": "偏見；偏袒"
  },
  "discrimination": {
    "pos": "n.",
    "en_def": "treating a person or group unfairly because of who they are",
    "cn_def": "歧視"
  },
  "diversity": {
    "pos": "n.",
    "en_def": "the state of including many different types of people or things",
    "cn_def": "多元性；多樣性"
  },
  "inclusive": {
    "pos": "adj.",
    "en_def": "including everyone and making all people feel welcome",
    "cn_def": "包容的；包含一切的"
  },
  "nonbinary": {
    "pos": "adj.",
    "en_def": "describing a person who does not think of themselves as only male or only female",
    "cn_def": "非二元性別的"
  },
  "transgender": {
    "pos": "adj.",
    "en_def": "describing a person whose gender is different from the sex they were given at birth",
    "cn_def": "跨性別的"
  },
  "cisgender": {
    "pos": "adj.",
    "en_def": "describing a person whose gender is the same as the sex they were given at birth",
    "cn_def": "順性別的"
  },
  "expression": {
    "pos": "n.",
    "en_def": "the way a person shows feelings, ideas, or who they are",
    "cn_def": "表達；表現"
  },
  "masculine": {
    "pos": "adj.",
    "en_def": "having qualities thought to be typical of men",
    "cn_def": "男性化的；陽剛的"
  },
  "feminine": {
    "pos": "adj.",
    "en_def": "having qualities thought to be typical of women",
    "cn_def": "女性化的；陰柔的"
  },
  "neutral": {
    "pos": "adj.",
    "en_def": "not supporting either side; not showing features of one particular type",
    "cn_def": "中性的；中立的"
  },
  "pronoun": {
    "pos": "n.",
    "en_def": "a word like he, she, they, or it that is used instead of a noun",
    "cn_def": "代名詞"
  },
  "respect": {
    "pos": "n.",
    "en_def": "a feeling that someone is important and should be treated well",
    "cn_def": "尊重；敬重"
  },
  "rights": {
    "pos": "n.",
    "en_def": "things that people are allowed to have or do by law or by fairness",
    "cn_def": "權利"
  },
  "representation": {
    "pos": "n.",
    "en_def": "the fact of having people from a group present or included",
    "cn_def": "代表性；代表"
  },
  "advocate": {
    "pos": "n.",
    "en_def": "a person who publicly supports an idea or group",
    "cn_def": "倡議者；擁護者"
  },
  "awareness": {
    "pos": "n.",
    "en_def": "knowledge or understanding of a situation or problem",
    "cn_def": "意識；認識"
  },
  "acceptance": {
    "pos": "n.",
    "en_def": "the act of agreeing that something is normal, right, or welcome",
    "cn_def": "接納；接受"
  },
  "tolerance": {
    "pos": "n.",
    "en_def": "the willingness to accept opinions or behavior different from your own",
    "cn_def": "容忍；寬容"
  },
  "culture": {
    "pos": "n.",
    "en_def": "the shared beliefs, values, and habits of a group or organization",
    "cn_def": "文化"
  },
  "norm": {
    "pos": "n.",
    "en_def": "a usual or accepted way of behaving in a group",
    "cn_def": "規範；常態"
  },
  "social": {
    "pos": "adj.",
    "en_def": "relating to society and the way people live together",
    "cn_def": "社會的"
  },
  "biological": {
    "pos": "adj.",
    "en_def": "relating to the body and natural processes of living things",
    "cn_def": "生物的；生理的"
  },
  "psychological": {
    "pos": "adj.",
    "en_def": "relating to the mind and feelings",
    "cn_def": "心理的"
  },
  "personal": {
    "pos": "adj.",
    "en_def": "relating to one particular person and their private life",
    "cn_def": "個人的；私人的"
  },
  "legal": {
    "pos": "adj.",
    "en_def": "relating to the law or allowed by law",
    "cn_def": "法律的；合法的"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a conversation in which people talk about a subject",
    "cn_def": "討論"
  }
};

const EXTRA_GLOSSES = {};
