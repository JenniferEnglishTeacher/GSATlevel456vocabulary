// Topic 265 Quiz Data: Opinion 意見
// Source word list: https://www.examword.com/group-topic/opinion — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T265 - Opinion 意見",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "viewpoint",
    "pos": "n.",
    "cn_def": "觀點；看法",
    "en_def": "a way of thinking about a subject",
    "sentence": "A: Why did the marketing director invite three college students to our planning meeting last Thursday afternoon? B: She wanted to hear a young customer's {{BLANK}} on our new mobile app, because most of our users are between eighteen and twenty-five, and our designers are much older than that.",
    "cn": "A：行銷總監上週四下午為什麼邀請三位大學生參加我們的企劃會議？ B：她想聽聽年輕顧客對我們新手機應用程式的【觀點】，因為我們大部分的使用者都在十八到二十五歲之間，而我們的設計師年紀都比那大得多。"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "cn_def": "觀點；角度",
    "en_def": "a particular way of seeing or judging something",
    "sentence": "A: How did your trip to the factory in Vietnam change the way you manage the production team back here in Taipei? B: Talking with the workers on the assembly line gave me a whole new {{BLANK}} on their daily problems, so now I ask for their ideas before I make any big changes.",
    "cn": "A：你去越南工廠的那趟出差，如何改變了你在台北這裡管理生產團隊的方式？ B：和裝配線上的工人聊天讓我對他們每天遇到的問題有了全新的【觀點】，所以現在我在做任何重大改變之前都會先詢問他們的想法。"
  },
  {
    "word": "belief",
    "pos": "n.",
    "cn_def": "信念；看法",
    "en_def": "something you think is true or right",
    "sentence": "A: Why does our new CEO spend so much time visiting the branch offices instead of staying at the headquarters in Taipei? B: It is her strong {{BLANK}} that managers should listen to front-line workers in person, so she travels to a different city every week to hear their ideas and complaints.",
    "cn": "A：我們的新執行長為什麼花那麼多時間拜訪各分公司，而不是待在台北總部？ B：她有一個堅定的【信念】，就是主管應該親自聆聽第一線員工的聲音，所以她每週都到不同的城市去聽取他們的想法和抱怨。"
  },
  {
    "word": "argument",
    "pos": "n.",
    "cn_def": "爭論；爭吵",
    "en_def": "an angry talk between people who disagree",
    "sentence": "A: Why were the two sales managers so quiet during lunch today when they are usually laughing and joking together? B: They had a loud {{BLANK}} this morning about who should get the new client from Japan, and neither of them wants to talk about it until the director makes a final decision.",
    "cn": "A：那兩位業務經理平常總是一起說說笑笑，為什麼今天午餐時這麼安靜？ B：他們今天早上為了誰該負責來自日本的新客戶發生了激烈的【爭吵】，在主管做出最後決定之前，他們兩個都不想談這件事。"
  },
  {
    "word": "claim",
    "pos": "v.",
    "cn_def": "聲稱；宣稱",
    "en_def": "to say that something is true, often without proof",
    "sentence": "A: Why is the customer service team checking every order that was shipped from our warehouse last week? B: Several customers {{BLANK}} that they received the wrong items, so we need to find out whether the mistake happened during packing or during delivery before we send any refunds.",
    "cn": "A：客服團隊為什麼在檢查上週從我們倉庫出貨的每一筆訂單？ B：有好幾位顧客【聲稱】他們收到錯誤的商品，所以在退款之前，我們必須查出錯誤是發生在包裝時還是運送時。"
  },
  {
    "word": "assert",
    "pos": "v.",
    "cn_def": "堅稱；斷言",
    "en_def": "to say something firmly and confidently",
    "sentence": "A: How did the new manager handle the meeting when the supplier tried to raise the prices again this year? B: She stayed calm but continued to {{BLANK}} that the old contract was still valid until December, and in the end the supplier agreed to keep the same prices for six more months.",
    "cn": "A：今年供應商又想漲價時，新經理在會議中是怎麼處理的？ B：她保持冷靜，但一直【堅稱】舊合約在十二月之前仍然有效，最後供應商同意再維持原價六個月。"
  },
  {
    "word": "suggest",
    "pos": "v.",
    "cn_def": "建議；提議",
    "en_def": "to give an idea for someone to think about",
    "sentence": "A: Where should we take the visiting clients from Singapore for dinner after the factory tour on Friday evening? B: I would {{BLANK}} the seafood restaurant near the harbor, because it has a quiet private room, the staff speak good English, and it is only ten minutes from their hotel.",
    "cn": "A：週五晚上參觀完工廠後，我們該帶來自新加坡的客戶去哪裡吃晚餐？ B：我會【建議】港口附近的那家海鮮餐廳，因為那裡有安靜的包廂，員工英文很好，而且離他們的飯店只要十分鐘。"
  },
  {
    "word": "propose",
    "pos": "v.",
    "cn_def": "提議；提出",
    "en_def": "to formally offer a plan or idea for others to consider",
    "sentence": "A: What are you going to talk about at the board meeting next Monday, since sales have been falling for three months? B: I plan to {{BLANK}} a new online marketing campaign that targets young customers, and I will also ask the board for a bigger budget to hire two social media specialists.",
    "cn": "A：既然銷售額已經連續三個月下滑，你下週一在董事會上要談什麼？ B：我打算【提出】一個以年輕顧客為目標的新網路行銷活動，也會請董事會提供更多預算來聘請兩位社群媒體專員。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持",
    "en_def": "to agree with an idea or person and help them",
    "sentence": "A: What do the employees think about the company's new plan to let everyone work from home two days a week? B: Almost everyone in my department is happy to {{BLANK}} the idea, because it saves them long hours on crowded trains and gives them more time with their families.",
    "cn": "A：員工們對公司讓大家每週在家工作兩天的新計畫有什麼看法？ B：我們部門幾乎每個人都很樂意【支持】這個想法，因為這可以讓他們省下在擁擠火車上的好幾個小時，也能有更多時間陪伴家人。"
  },
  {
    "word": "oppose",
    "pos": "v.",
    "cn_def": "反對",
    "en_def": "to disagree with a plan and try to stop it",
    "sentence": "A: Why did the city council delay its vote on the new shopping mall near the riverside park last night? B: Hundreds of local residents came to the meeting to {{BLANK}} the project, because they are worried that heavy traffic and noise will ruin the quiet neighborhood where their children play.",
    "cn": "A：市議會昨晚為什麼延後對河濱公園附近新購物中心的投票？ B：數百位當地居民來到會議上【反對】這個計畫，因為他們擔心大量車流和噪音會破壞孩子們玩耍的寧靜社區。"
  },
  {
    "word": "agree",
    "pos": "v.",
    "cn_def": "同意",
    "en_def": "to have the same opinion as someone",
    "sentence": "A: Do you think we should move the annual staff party from December to January, when the restaurants are less busy and cheaper? B: Yes, I completely {{BLANK}} with you, because most people are too busy with year-end reports in December, and we could save almost thirty percent on the dinner.",
    "cn": "A：你覺得我們該把年度員工派對從十二月移到一月嗎？那時餐廳比較不忙，也比較便宜。 B：是的，我完全【同意】你的看法，因為大部分的人在十二月都忙著寫年終報告，而且我們可以在晚餐上省下將近三成的費用。"
  },
  {
    "word": "disagree",
    "pos": "v.",
    "cn_def": "不同意",
    "en_def": "to have a different opinion",
    "sentence": "A: The director wants to cancel all business trips next year to save money, but what do you think about that idea? B: I strongly {{BLANK}} with her, because meeting our overseas clients face to face is the main reason we won three big contracts in Europe this year.",
    "cn": "A：主管想取消明年所有的出差來省錢，你覺得這個想法怎麼樣？ B：我強烈【不同意】她的看法，因為和海外客戶面對面見面，正是我們今年在歐洲贏得三份大合約的主要原因。"
  },
  {
    "word": "convince",
    "pos": "v.",
    "cn_def": "說服；使相信",
    "en_def": "to make someone believe that something is true",
    "sentence": "A: How did you get the bank to approve such a large loan for our small company when other banks had already said no? B: I showed them our sales records for the past five years and a detailed business plan, and that was enough to {{BLANK}} them that we could pay the money back on time.",
    "cn": "A：其他銀行都已經拒絕了，你是怎麼讓銀行核准我們這家小公司這麼大一筆貸款的？ B：我給他們看了過去五年的銷售紀錄和一份詳細的營運計畫，這樣就足以【說服】他們，我們能準時還款。"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "cn_def": "說服；勸說",
    "en_def": "to make someone agree to do something by giving reasons",
    "sentence": "A: Is the famous chef from Paris still coming to open our new restaurant in Kaohsiung next month, even though he is so busy? B: Yes, our manager flew to France last week and managed to {{BLANK}} him to stay for three days, so he will also teach our kitchen staff some of his special recipes.",
    "cn": "A：那位來自巴黎的名廚雖然很忙，下個月還會來為我們在高雄的新餐廳開幕嗎？ B：會的，我們經理上週飛到法國，成功【說服】他停留三天，所以他也會教我們的廚房員工一些他的獨門食譜。"
  },
  {
    "word": "debate",
    "pos": "n.",
    "cn_def": "辯論；討論",
    "en_def": "a discussion where people give different opinions",
    "sentence": "A: Why was the meeting about the new office dress code so long yesterday, when it was only supposed to take thirty minutes? B: There was a long {{BLANK}} between the younger staff, who wanted to wear jeans every day, and the senior managers, who believed suits look more professional to clients.",
    "cn": "A：昨天關於新辦公室服裝規定的會議原本只要三十分鐘，為什麼開了那麼久？ B：想每天穿牛仔褲的年輕員工和認為西裝在客戶面前看起來更專業的資深主管之間，展開了一場漫長的【辯論】。"
  },
  {
    "word": "discussion",
    "pos": "n.",
    "cn_def": "討論",
    "en_def": "a talk between people about a subject",
    "sentence": "A: Have the department heads decided which software company will build our new online booking system for the hotel yet? B: Not yet, they will have a {{BLANK}} about the three offers on Wednesday afternoon, and then they will choose the company that gives us the best price and service.",
    "cn": "A：各部門主管決定好要由哪家軟體公司幫飯店建置新的線上訂房系統了嗎？ B：還沒，他們週三下午會針對這三份報價進行【討論】，然後選出能給我們最好價格和服務的公司。"
  },
  {
    "word": "bias",
    "pos": "n.",
    "cn_def": "偏見；偏袒",
    "en_def": "an unfair feeling for or against someone",
    "sentence": "A: Why does the human resources department remove names and photos from job applications before the managers read them? B: They want to reduce any {{BLANK}} in the hiring process, so that every candidate is judged only on skills and experience, not on age, gender, or the school they went to.",
    "cn": "A：人資部門為什麼要在主管看求職申請之前把姓名和照片拿掉？ B：他們想減少招聘過程中的任何【偏見】，讓每位應徵者只根據技能和經驗被評斷，而不是年齡、性別或畢業學校。"
  },
  {
    "word": "neutral",
    "pos": "adj.",
    "cn_def": "中立的",
    "en_def": "not supporting either side",
    "sentence": "A: When the two department heads started arguing about the budget, why didn't you say anything during the meeting? B: As the project coordinator, I need to stay {{BLANK}} so that both teams trust me, and I can help them find a fair solution after everyone has calmed down.",
    "cn": "A：那兩位部門主管開始為預算爭吵時，你為什麼在會議中一句話都沒說？ B：身為專案協調人，我必須保持【中立】，這樣兩個團隊才會信任我，等大家冷靜下來後，我才能幫他們找到公平的解決辦法。"
  },
  {
    "word": "objective",
    "pos": "adj.",
    "cn_def": "客觀的",
    "en_def": "based on facts, not personal feelings",
    "sentence": "A: Why did the company hire an outside expert to review our safety system instead of asking our own engineers to do it? B: The board wanted an {{BLANK}} report based only on facts, because our engineers designed the system themselves and might not see its weak points clearly.",
    "cn": "A：公司為什麼請外部專家來審查我們的安全系統，而不是讓我們自己的工程師來做？ B：董事會想要一份只根據事實的【客觀】報告，因為系統是我們工程師自己設計的，他們可能看不清楚它的弱點。"
  },
  {
    "word": "subjective",
    "pos": "adj.",
    "cn_def": "主觀的",
    "en_def": "based on personal feelings, not facts",
    "sentence": "A: Why can't we just choose the new company logo by asking the managers which design they like the best? B: Their choices would be too {{BLANK}}, because everyone has different personal taste, so we should test the designs with real customers and look at the survey results instead.",
    "cn": "A：我們為什麼不能直接問主管們最喜歡哪個設計來選定公司新標誌？ B：他們的選擇會太【主觀】，因為每個人的個人品味都不同，所以我們應該拿這些設計給真正的顧客測試，並參考調查結果。"
  },
  {
    "word": "critical",
    "pos": "adj.",
    "cn_def": "批評的；挑剔的",
    "en_def": "saying what is bad or wrong about something",
    "sentence": "A: How did the senior editor react when she read the first draft of the annual report on Monday morning? B: She was very {{BLANK}} of the sales section, because several numbers were wrong and the charts were confusing, so the whole team had to stay late to fix everything.",
    "cn": "A：資深編輯週一早上讀了年度報告初稿後有什麼反應？ B：她對銷售部分多所【批評】，因為好幾個數字有誤而且圖表令人困惑，所以整個團隊必須留下來加班修正所有內容。"
  },
  {
    "word": "approval",
    "pos": "n.",
    "cn_def": "批准；認可",
    "en_def": "official permission or agreement",
    "sentence": "A: Can I order the new laptops for the design team today, since their old computers keep crashing during important projects? B: Not yet, you need written {{BLANK}} from the finance director first, because any purchase over fifty thousand dollars must be checked and signed before we place the order.",
    "cn": "A：既然設計團隊的舊電腦在重要專案進行時一直當機，我今天可以幫他們訂購新的筆記型電腦嗎？ B：還不行，你必須先取得財務長的書面【批准】，因為任何超過五萬元的採購都必須經過審核和簽名後才能下單。"
  },
  {
    "word": "disapproval",
    "pos": "n.",
    "cn_def": "不贊成；反對",
    "en_def": "a feeling that something is bad or wrong",
    "sentence": "A: Did the general manager say anything when the sales team arrived thirty minutes late for the client meeting this morning? B: He didn't say a word, but he shook his head in {{BLANK}}, and later he sent everyone an email reminding us that being on time is very important to our company.",
    "cn": "A：今天早上業務團隊開客戶會議遲到三十分鐘時，總經理有說什麼嗎？ B：他一句話都沒說，只是搖頭表示【不贊成】，後來他寄了一封電子郵件給大家，提醒我們準時對公司來說非常重要。"
  },
  {
    "word": "impression",
    "pos": "n.",
    "cn_def": "印象",
    "en_def": "an idea or feeling you get about someone or something",
    "sentence": "A: Why are you wearing a suit today when you usually come to the office in a T-shirt and jeans? B: I have a job interview with a big bank this afternoon, and I want to make a good first {{BLANK}} on the hiring manager, so I also printed my résumé on nice paper.",
    "cn": "A：你平常都穿T恤和牛仔褲來上班，今天為什麼穿西裝？ B：我今天下午要去一家大銀行面試，我想給招聘經理留下良好的第一【印象】，所以我也把履歷印在質感好的紙上。"
  },
  {
    "word": "stance",
    "pos": "n.",
    "cn_def": "立場；態度",
    "en_def": "a public opinion or position on an issue",
    "sentence": "A: Has our company decided what to do about the new government rules on plastic packaging that start next January? B: Yes, the CEO has taken a strong {{BLANK}} on protecting the environment, so all of our stores will stop using plastic bags and switch to paper ones by the end of this year.",
    "cn": "A：公司決定好要如何因應明年一月開始實施的塑膠包裝新規定了嗎？ B：決定了，執行長在保護環境方面採取了強硬的【立場】，所以我們所有的門市將在今年年底前停止使用塑膠袋，改用紙袋。"
  },
  {
    "word": "insight",
    "pos": "n.",
    "cn_def": "洞察；深入了解",
    "en_def": "a clear, deep understanding of something",
    "sentence": "A: Was the two-day marketing conference in Singapore worth the high cost of the flights and the hotel for our team? B: Definitely, the speakers gave us useful {{BLANK}} into how young people shop online, and we have already used their ideas to improve our website and social media ads.",
    "cn": "A：在新加坡舉辦的兩天行銷研討會，值得我們團隊花那麼高的機票和飯店費用嗎？ B：絕對值得，講者讓我們對年輕人如何網購有了實用的【深入了解】，我們已經用他們的想法改善了網站和社群媒體廣告。"
  },
  {
    "word": "judgment",
    "pos": "n.",
    "cn_def": "判斷力；判斷",
    "en_def": "the ability to make good decisions",
    "sentence": "A: What should I do if a customer asks for a refund but has lost the receipt and the product looks slightly used? B: There is no fixed rule for that situation, so please use your own {{BLANK}}, and if you are not sure, call the store manager before you give the customer any money back.",
    "cn": "A：如果顧客要求退款，但收據弄丟了，商品看起來也有點用過，我該怎麼辦？ B：這種情況沒有固定的規定，所以請運用你自己的【判斷力】，如果不確定，在退錢給顧客之前先打電話給店經理。"
  },
  {
    "word": "commentary",
    "pos": "n.",
    "cn_def": "評論；實況解說",
    "en_def": "spoken or written opinions about an event or subject",
    "sentence": "A: Why does the sales director read the business section of the newspaper every morning before the team meeting starts? B: She likes the expert {{BLANK}} on the stock market and the economy, because it helps her understand which industries might buy more of our products in the next few months.",
    "cn": "A：業務總監為什麼每天早上在團隊會議開始前都要看報紙的商業版？ B：她喜歡專家對股市和經濟的【評論】，因為這能幫助她了解未來幾個月哪些產業可能會購買更多我們的產品。"
  },
  {
    "word": "feedback",
    "pos": "n.",
    "cn_def": "回饋；意見",
    "en_def": "comments about how good or bad something is",
    "sentence": "A: Why did the restaurant manager put small cards and pens on every table in the dining room this week? B: She wants to collect {{BLANK}} from our guests about the new lunch menu, so she can decide which dishes to keep and which ones to remove before the summer season begins.",
    "cn": "A：餐廳經理這週為什麼在用餐區的每張桌子上都放了小卡片和筆？ B：她想收集客人對新午餐菜單的【意見回饋】，這樣她就能在夏季開始前決定要保留哪些菜色、刪除哪些菜色。"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "cn_def": "評估；評價",
    "en_def": "to judge how good or useful something is",
    "sentence": "A: Why are the managers so busy this week, and why do they keep asking us to fill out so many forms about our work? B: They have to {{BLANK}} every team member's performance before the end of the year, and the results will decide who gets a pay raise or a promotion next spring.",
    "cn": "A：主管們這週為什麼這麼忙，還一直要我們填寫那麼多關於工作的表格？ B：他們必須在年底前【評估】每位團隊成員的表現，結果將決定明年春天誰能加薪或升職。"
  },
  {
    "word": "speculate",
    "pos": "v.",
    "cn_def": "推測；猜測",
    "en_def": "to guess about something without knowing all the facts",
    "sentence": "A: Have you heard the rumor that our company might be bought by a larger firm from Japan before the end of next year? B: Yes, but it is too early to {{BLANK}} about what will happen to our jobs, so let's wait for the official announcement from the CEO on Friday.",
    "cn": "A：你有聽說我們公司可能在明年底前被一家日本大企業收購的傳聞嗎？ B：有，但現在【推測】我們的工作會怎樣還太早，所以我們等執行長週五的正式宣布吧。"
  },
  {
    "word": "consensus",
    "pos": "n.",
    "cn_def": "共識",
    "en_def": "general agreement among a group of people",
    "sentence": "A: Did the managers finally choose the location for next year's company trip after their long meeting yesterday afternoon? B: Yes, after three hours of discussion they reached a {{BLANK}} to go to Okinawa, because the flights are short, the hotels are affordable, and most staff voted for the beach.",
    "cn": "A：經理們昨天下午開了很久的會之後，終於選定明年員工旅遊的地點了嗎？ B：是的，經過三個小時的討論，他們達成了去沖繩的【共識】，因為航程短、飯店價格實惠，而且大部分員工都投票選擇海灘。"
  },
  {
    "word": "controversial",
    "pos": "adj.",
    "cn_def": "有爭議的",
    "en_def": "causing a lot of disagreement",
    "sentence": "A: Why are so many customers posting angry comments about our coffee shop on social media this weekend? B: Our new rule that charges people two dollars for using the restroom has become very {{BLANK}}, and some loyal customers say they will not come back unless we change it.",
    "cn": "A：這個週末為什麼有那麼多顧客在社群媒體上發表對我們咖啡店的憤怒留言？ B：我們使用洗手間要收兩美元的新規定變得非常【有爭議】，有些老顧客說除非我們改掉，否則他們不會再來了。"
  },
  {
    "word": "misconception",
    "pos": "n.",
    "cn_def": "誤解；錯誤觀念",
    "en_def": "a wrong idea or belief",
    "sentence": "A: Why does our training video for new employees spend so much time explaining how our recycling system really works? B: Many people have the {{BLANK}} that all plastic can be recycled, so we want to show them clearly which items go in the blue bins and which ones must go in the regular trash.",
    "cn": "A：我們給新員工看的培訓影片為什麼要花那麼多時間解釋回收系統實際上如何運作？ B：很多人有一種【誤解】，以為所有塑膠都可以回收，所以我們想清楚地告訴他們哪些物品要放進藍色回收桶，哪些必須丟進一般垃圾桶。"
  }
];

const MCQS = [
  {
    "q": "The two managers could not agree on the budget. Their _____ lasted for an hour and delayed the meeting.",
    "options": [
      "argument",
      "bias",
      "belief",
      "impression"
    ],
    "answer": 0,
    "vocabIndex": 3
  },
  {
    "q": "Several customers _____ that the product broke after one week. The company is now checking their complaints carefully.",
    "options": [
      "oppose",
      "evaluate",
      "claim",
      "propose"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "In the interview, the CEO will _____ that the company is financially strong. Investors hope his confident words are true.",
    "options": [
      "oppose",
      "assert",
      "persuade",
      "evaluate"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "I _____ that we take a short break before the next session. Everyone looks tired after three hours of training.",
    "options": [
      "oppose",
      "convince",
      "disagree",
      "suggest"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "At Monday's meeting, Linda will _____ a new plan to reduce shipping costs. The board will vote on it next week.",
    "options": [
      "agree",
      "speculate",
      "propose",
      "disagree"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Most employees _____ the new flexible working policy. They believe it will help them balance work and family life.",
    "options": [
      "support",
      "speculate",
      "assert",
      "disagree"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Many local residents strongly _____ the plan to build a factory near the river. They are worried about water pollution.",
    "options": [
      "agree",
      "convince",
      "speculate",
      "oppose"
    ],
    "answer": 3,
    "vocabIndex": 9
  },
  {
    "q": "After a long discussion, both sides finally _____ on the price of the contract. The deal will be signed tomorrow.",
    "options": [
      "persuade",
      "agree",
      "assert",
      "oppose"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "I'm afraid I _____ with your plan to cut the training budget. New staff need more training, not less.",
    "options": [
      "disagree",
      "oppose",
      "convince",
      "evaluate"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The salesperson could not _____ the manager to buy the expensive software. He said the old system still works well.",
    "options": [
      "suggest",
      "agree",
      "speculate",
      "convince"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Our team leader tried to _____ the client to sign a longer contract. She offered a ten percent discount to make the deal attractive.",
    "options": [
      "oppose",
      "assert",
      "persuade",
      "propose"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The city council will hold a public _____ on the new tax next Friday. Citizens can share their views for and against it.",
    "options": [
      "bias",
      "debate",
      "stance",
      "insight"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Let's have a short _____ about the schedule before we start the project. Everyone should share their ideas freely.",
    "options": [
      "bias",
      "approval",
      "misconception",
      "discussion"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The hiring manager must avoid any _____ against older applicants. Every candidate should be judged only on skills and experience.",
    "options": [
      "bias",
      "insight",
      "consensus",
      "feedback"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "As the meeting chair, Tom must stay _____ and not take sides. He lets both teams explain their positions fairly.",
    "options": [
      "critical",
      "neutral",
      "controversial",
      "subjective"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "A good reporter should be _____ and present facts without personal feelings. Readers want to decide for themselves.",
    "options": [
      "controversial",
      "subjective",
      "objective",
      "critical"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "The manager was very _____ of the report because it contained many errors. She asked the writer to check every number again.",
    "options": [
      "critical",
      "neutral",
      "controversial",
      "objective"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "You need your supervisor's _____ before you book any overseas business trip. Please send the request form by Friday.",
    "options": [
      "bias",
      "approval",
      "stance",
      "misconception"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Arriving late to a job interview makes a bad first _____. Always leave home early to avoid traffic.",
    "options": [
      "consensus",
      "judgment",
      "stance",
      "impression"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The company has taken a firm _____ against plastic waste. It no longer gives customers free plastic bags.",
    "options": [
      "insight",
      "feedback",
      "stance",
      "impression"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "The survey gave us valuable _____ into what young customers really want. We will use it to design our next product.",
    "options": [
      "stance",
      "insight",
      "bias",
      "approval"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Choosing a new supplier requires sound _____ and careful research. A wrong decision could cost the company a lot of money.",
    "options": [
      "disapproval",
      "misconception",
      "bias",
      "judgment"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "Thank you for your helpful _____ on our new website. We have already fixed the problems you mentioned.",
    "options": [
      "feedback",
      "bias",
      "stance",
      "disapproval"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Every December, managers _____ each employee's performance for the year. The results affect pay raises and promotions.",
    "options": [
      "persuade",
      "disagree",
      "evaluate",
      "speculate"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "Without official data, it is too early to _____ about the reasons for the drop in sales. We should wait for the full report.",
    "options": [
      "assert",
      "propose",
      "evaluate",
      "speculate"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "After three meetings, the board finally reached a _____ on the new office location. Everyone voted for the downtown building.",
    "options": [
      "bias",
      "consensus",
      "stance",
      "misconception"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The plan to cut holiday bonuses is highly _____ among staff. Some workers accept it, but many are angry.",
    "options": [
      "neutral",
      "objective",
      "controversial",
      "subjective"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "It is a common _____ that working longer hours always increases productivity. Studies show tired workers make more mistakes.",
    "options": [
      "misconception",
      "insight",
      "approval",
      "stance"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "Our company was founded on the _____ that every customer deserves honest service. This idea still guides our staff today.",
    "options": [
      "bias",
      "belief",
      "disapproval",
      "commentary"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Living abroad gave Kevin a new _____ on his own culture. He now sees many things differently.",
    "options": [
      "consensus",
      "approval",
      "bias",
      "perspective"
    ],
    "answer": 3,
    "vocabIndex": 1
  }
];

const LOOKUP = {
  "viewpoint": {
    "pos": "n.",
    "en_def": "a way of thinking about a subject",
    "cn_def": "觀點；看法"
  },
  "perspective": {
    "pos": "n.",
    "en_def": "a particular way of seeing or judging something",
    "cn_def": "觀點；角度"
  },
  "belief": {
    "pos": "n.",
    "en_def": "something you think is true or right",
    "cn_def": "信念；看法"
  },
  "argument": {
    "pos": "n.",
    "en_def": "an angry talk between people who disagree",
    "cn_def": "爭論；爭吵"
  },
  "claim": {
    "pos": "v.",
    "en_def": "to say that something is true, often without proof",
    "cn_def": "聲稱；宣稱"
  },
  "assert": {
    "pos": "v.",
    "en_def": "to say something firmly and confidently",
    "cn_def": "堅稱；斷言"
  },
  "suggest": {
    "pos": "v.",
    "en_def": "to give an idea for someone to think about",
    "cn_def": "建議；提議"
  },
  "propose": {
    "pos": "v.",
    "en_def": "to formally offer a plan or idea for others to consider",
    "cn_def": "提議；提出"
  },
  "support": {
    "pos": "v.",
    "en_def": "to agree with an idea or person and help them",
    "cn_def": "支持"
  },
  "oppose": {
    "pos": "v.",
    "en_def": "to disagree with a plan and try to stop it",
    "cn_def": "反對"
  },
  "agree": {
    "pos": "v.",
    "en_def": "to have the same opinion as someone",
    "cn_def": "同意"
  },
  "disagree": {
    "pos": "v.",
    "en_def": "to have a different opinion",
    "cn_def": "不同意"
  },
  "convince": {
    "pos": "v.",
    "en_def": "to make someone believe that something is true",
    "cn_def": "說服；使相信"
  },
  "persuade": {
    "pos": "v.",
    "en_def": "to make someone agree to do something by giving reasons",
    "cn_def": "說服；勸說"
  },
  "debate": {
    "pos": "n.",
    "en_def": "a discussion where people give different opinions",
    "cn_def": "辯論；討論"
  },
  "discussion": {
    "pos": "n.",
    "en_def": "a talk between people about a subject",
    "cn_def": "討論"
  },
  "bias": {
    "pos": "n.",
    "en_def": "an unfair feeling for or against someone",
    "cn_def": "偏見；偏袒"
  },
  "neutral": {
    "pos": "adj.",
    "en_def": "not supporting either side",
    "cn_def": "中立的"
  },
  "objective": {
    "pos": "adj.",
    "en_def": "based on facts, not personal feelings",
    "cn_def": "客觀的"
  },
  "subjective": {
    "pos": "adj.",
    "en_def": "based on personal feelings, not facts",
    "cn_def": "主觀的"
  },
  "critical": {
    "pos": "adj.",
    "en_def": "saying what is bad or wrong about something",
    "cn_def": "批評的；挑剔的"
  },
  "approval": {
    "pos": "n.",
    "en_def": "official permission or agreement",
    "cn_def": "批准；認可"
  },
  "disapproval": {
    "pos": "n.",
    "en_def": "a feeling that something is bad or wrong",
    "cn_def": "不贊成；反對"
  },
  "impression": {
    "pos": "n.",
    "en_def": "an idea or feeling you get about someone or something",
    "cn_def": "印象"
  },
  "stance": {
    "pos": "n.",
    "en_def": "a public opinion or position on an issue",
    "cn_def": "立場；態度"
  },
  "insight": {
    "pos": "n.",
    "en_def": "a clear, deep understanding of something",
    "cn_def": "洞察；深入了解"
  },
  "judgment": {
    "pos": "n.",
    "en_def": "the ability to make good decisions",
    "cn_def": "判斷力；判斷"
  },
  "commentary": {
    "pos": "n.",
    "en_def": "spoken or written opinions about an event or subject",
    "cn_def": "評論；實況解說"
  },
  "feedback": {
    "pos": "n.",
    "en_def": "comments about how good or bad something is",
    "cn_def": "回饋；意見"
  },
  "evaluate": {
    "pos": "v.",
    "en_def": "to judge how good or useful something is",
    "cn_def": "評估；評價"
  },
  "speculate": {
    "pos": "v.",
    "en_def": "to guess about something without knowing all the facts",
    "cn_def": "推測；猜測"
  },
  "consensus": {
    "pos": "n.",
    "en_def": "general agreement among a group of people",
    "cn_def": "共識"
  },
  "controversial": {
    "pos": "adj.",
    "en_def": "causing a lot of disagreement",
    "cn_def": "有爭議的"
  },
  "misconception": {
    "pos": "n.",
    "en_def": "a wrong idea or belief",
    "cn_def": "誤解；錯誤觀念"
  }
};

const EXTRA_GLOSSES = {};
