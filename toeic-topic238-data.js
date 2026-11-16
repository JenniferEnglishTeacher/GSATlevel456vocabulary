// Topic 238 Quiz Data: Memory 記憶
// Source word list: https://www.examword.com/group-topic/memory — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T238 - Memory 記憶",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "recall",
    "pos": "v.",
    "cn_def": "回想起；記起",
    "en_def": "to bring a past event or fact back into your mind",
    "sentence": "A: The client called to ask about the price we offered during last month's trade show, but I wasn't there, so do you know what we told him? B: I can't {{BLANK}} the exact figure right now, but I wrote it in my notebook, so let me check my desk after lunch and email you.",
    "cn": "A：那位客戶打電話來詢問我們上個月商展時報的價格，但我當時不在，你知道我們跟他說了什麼嗎？ B：我現在【想不起來】確切的數字，但我有記在筆記本裡，午餐後讓我查一下桌上的資料再寄電子郵件給你。"
  },
  {
    "word": "remember",
    "pos": "v.",
    "cn_def": "記得",
    "en_def": "to keep something in your mind and not forget it",
    "sentence": "A: Before you leave for the airport this afternoon, is there anything important you need me to handle while you are visiting our supplier in Osaka? B: Please {{BLANK}} to water the plants in my office and lock the cabinet, because the cleaning staff will come in early on Thursday morning.",
    "cn": "A：你今天下午去機場之前，在你拜訪大阪的供應商期間，有沒有什麼重要的事需要我處理？ B：請【記得】幫我辦公室的植物澆水並把櫃子鎖好，因為清潔人員星期四早上會很早進來。"
  },
  {
    "word": "forget",
    "pos": "v.",
    "cn_def": "忘記",
    "en_def": "to not remember something",
    "sentence": "A: Why did the sales team arrive so late to the meeting with the bank manager this morning, even though they left the office on time? B: They didn't {{BLANK}} the address, but they left the printed contract on the train and had to go back to the station to find it.",
    "cn": "A：為什麼業務團隊今天早上和銀行經理開會遲到這麼久，他們明明準時離開辦公室？ B：他們沒有【忘記】地址，而是把印好的合約留在火車上，只好回車站去找。"
  },
  {
    "word": "reminder",
    "pos": "n.",
    "cn_def": "提醒；提醒通知",
    "en_def": "a message that helps you remember to do something",
    "sentence": "A: Several customers still have not paid their invoices from October, and our accountant is worried about cash flow before the end of the year. What should we do? B: Let's send each of them a polite {{BLANK}} by email today, and if they still don't pay by Friday, I will call them myself.",
    "cn": "A：有幾位客戶還沒付十月的帳單，我們的會計很擔心年底前的現金流。我們該怎麼辦？ B：我們今天先用電子郵件寄給每位客戶一封禮貌的【提醒通知】，如果他們星期五前還沒付款，我會親自打電話給他們。"
  },
  {
    "word": "recollection",
    "pos": "n.",
    "cn_def": "回憶；記憶",
    "en_def": "a memory of something that happened in the past",
    "sentence": "A: The lawyer wants to know exactly what was said when you signed the agreement with the building owner three years ago. Can you help? B: My {{BLANK}} of that day is not perfect, but I believe he promised to repair the roof before we moved our office equipment in.",
    "cn": "A：律師想確切知道三年前你和大樓房東簽約時說了些什麼。你能幫忙嗎？ B：我對那天的【記憶】並不完整，但我相信他答應過在我們搬入辦公設備前會修好屋頂。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "認出；認得",
    "en_def": "knowing someone or something because you have seen it before",
    "sentence": "A: You met the new regional director only once at a conference years ago, so did he know who you were at the reception last night? B: Yes, his face lit up with {{BLANK}} as soon as I walked in, and he even asked about the presentation I gave about our recycling program in Singapore.",
    "cn": "A：你多年前只在一場研討會上見過新任區域主管一次，那他昨晚在招待會上認得你嗎？ B：認得，我一走進去他就露出【認出我】的神情，他甚至還問起我在新加坡做的那場回收計畫簡報。"
  },
  {
    "word": "impression",
    "pos": "n.",
    "cn_def": "印象",
    "en_def": "an idea or feeling about someone or something",
    "sentence": "A: How did the job candidate do in her interview yesterday, and do you think we should invite her back for a second meeting with the manager? B: She made a very good {{BLANK}} on the whole team because she answered every question clearly and brought useful ideas about improving our customer service.",
    "cn": "A：那位應徵者昨天的面試表現如何？你覺得我們該邀請她回來和經理進行第二次面談嗎？ B：她給整個團隊留下非常好的【印象】，因為她清楚回答了每個問題，還提出改善客戶服務的實用想法。"
  },
  {
    "word": "experience",
    "pos": "n.",
    "cn_def": "經驗",
    "en_def": "knowledge or skill you get from doing something",
    "sentence": "A: We need someone to organize the company's annual sales conference in Kaohsiung next spring, and the budget is quite large this year. Who should we choose? B: I think Kevin is the best choice, because he has a lot of {{BLANK}} planning big events and he already knows several hotel managers in the city.",
    "cn": "A：我們需要有人籌辦明年春天在高雄舉行的公司年度業務大會，今年的預算相當多。我們該選誰？ B：我覺得凱文是最佳人選，因為他籌辦大型活動的【經驗】很豐富，而且他已經認識市內好幾位飯店經理。"
  },
  {
    "word": "knowledge",
    "pos": "n.",
    "cn_def": "知識；了解",
    "en_def": "information and understanding that you have",
    "sentence": "A: Our customers keep asking technical questions about the new printer that the sales staff can't answer, and some of them are getting upset. What can we do? B: We should hold a training session next week so that every salesperson has enough {{BLANK}} of the product to explain its main features with confidence.",
    "cn": "A：客戶一直問新印表機的技術問題，業務人員都答不出來，有些客戶開始不高興了。我們能怎麼做？ B：我們下週應該辦一場訓練課程，讓每位業務人員對產品有足夠的【了解】，能有自信地說明它的主要功能。"
  },
  {
    "word": "learning",
    "pos": "n.",
    "cn_def": "學習",
    "en_def": "the process of getting new knowledge or skills",
    "sentence": "A: The new employees seem nervous about using our complicated accounting software, and some of them keep making the same mistakes. Is that normal? B: Yes, {{BLANK}} a new system always takes time, so let's give them a simple guide and pair each of them with an experienced colleague for the first month.",
    "cn": "A：新進員工似乎對使用我們複雜的會計軟體感到緊張，有些人一直犯同樣的錯。這正常嗎？ B：正常，【學習】新系統總是需要時間，我們就給他們一份簡單的指南，並在第一個月讓每個人和一位資深同事搭檔。"
  },
  {
    "word": "brain",
    "pos": "n.",
    "cn_def": "大腦",
    "en_def": "the organ in your head that you think and remember with",
    "sentence": "A: I've been working on this sales report since eight o'clock this morning, and now I keep reading the same numbers again and again without understanding them. B: Your {{BLANK}} probably needs a rest, so why don't you take a short walk outside and get a coffee before you finish the last section?",
    "cn": "A：我從早上八點就一直在做這份銷售報告，現在我一直反覆看同樣的數字卻看不懂。 B：你的【大腦】大概需要休息了，何不在完成最後一部分之前先到外面走走、買杯咖啡？"
  },
  {
    "word": "mind",
    "pos": "n.",
    "cn_def": "心思；頭腦",
    "en_def": "the part of a person that thinks, feels and remembers",
    "sentence": "A: I was supposed to call the hotel today to confirm the room for our visiting clients from Seoul, but did anyone actually do it? B: Oh no, it completely slipped my {{BLANK}} because I was busy with the budget meeting, so I will call the front desk right now before they close.",
    "cn": "A：我今天應該打電話給飯店，確認來訪的首爾客戶的房間，但到底有人打了嗎？ B：糟了，我忙著開預算會議，完全【忘了】這件事，我現在馬上打給櫃台，趁他們還沒下班。"
  },
  {
    "word": "storage",
    "pos": "n.",
    "cn_def": "儲存；存放",
    "en_def": "keeping things in a place until they are needed",
    "sentence": "A: Our office is getting crowded with boxes of old files from previous years, and there is hardly any space left for the new staff members. B: Let's rent a small {{BLANK}} room near the train station for the paper records and scan the most important documents so we can find them on the computer.",
    "cn": "A：我們辦公室堆滿了往年的舊檔案箱，幾乎沒有空間留給新進員工了。 B：我們在火車站附近租一間小型【儲藏】室來放紙本紀錄，並把最重要的文件掃描起來，這樣就能在電腦上找到。"
  },
  {
    "word": "retention",
    "pos": "n.",
    "cn_def": "保留；記住",
    "en_def": "the ability to keep or remember something",
    "sentence": "A: Many of our trainees forget the safety rules only a few weeks after the workshop, which is a serious problem in the warehouse. What do you suggest? B: Short weekly quizzes and practice sessions can really improve {{BLANK}} of the information, so let's add them to the training schedule starting next month.",
    "cn": "A：很多受訓學員在研習後短短幾週就忘了安全規則，這在倉庫裡是很嚴重的問題。你有什麼建議？ B：每週的小測驗和練習課程能真正提升對資訊的【記憶保留】，所以我們從下個月開始把它們加進訓練課表吧。"
  },
  {
    "word": "flashback",
    "pos": "n.",
    "cn_def": "回想；倒敘",
    "en_def": "a sudden clear memory of something from the past",
    "sentence": "A: You looked a little surprised when you walked into the new branch office during the tour this morning. Was something wrong with the building? B: Not at all, I just had a sudden {{BLANK}} to my very first job, because that office used exactly the same old wooden desks and green carpet.",
    "cn": "A：你今天早上參觀時走進新分公司，看起來有點驚訝。那棟建築有什麼問題嗎？ B：完全沒有，我只是突然【回想】起我的第一份工作，因為那間辦公室用的正是一模一樣的舊木桌和綠色地毯。"
  },
  {
    "word": "nostalgia",
    "pos": "n.",
    "cn_def": "懷舊；思舊之情",
    "en_def": "a happy but slightly sad feeling when you think about the past",
    "sentence": "A: Why did the coffee company decide to bring back its original logo and packaging from the 1980s for this year's holiday season? B: Their research showed that many middle-aged customers feel strong {{BLANK}} for the past, so the old design should attract buyers who remember it from their childhood.",
    "cn": "A：那家咖啡公司為什麼決定在今年節慶季推出 1980 年代的原始標誌和包裝？ B：他們的研究顯示，很多中年顧客對過去有強烈的【懷舊之情】，所以舊設計應該能吸引那些從小就記得它的買家。"
  },
  {
    "word": "archive",
    "pos": "n.",
    "cn_def": "檔案庫；檔案室",
    "en_def": "a place where old records and documents are kept",
    "sentence": "A: A customer wants a copy of the contract he signed with us back in 2015, but I can't find it anywhere in the current folders on our server. B: Older documents were moved to the online {{BLANK}} last year, so ask the IT department for a password and you should be able to download it quickly.",
    "cn": "A：有位客戶想要一份他在 2015 年和我們簽的合約副本，但我在伺服器現有的資料夾裡都找不到。 B：較舊的文件去年已移到線上【檔案庫】，你向資訊部門要密碼，應該很快就能下載。"
  },
  {
    "word": "memorize",
    "pos": "v.",
    "cn_def": "背誦；記住",
    "en_def": "to learn something so that you can remember it exactly",
    "sentence": "A: I'm going to give the welcome speech at tomorrow's conference in front of more than three hundred guests, and I'm really nervous about it. Any advice? B: You don't need to {{BLANK}} every single word, but practice the opening lines several times so you can look at the audience instead of your notes.",
    "cn": "A：明天的研討會上我要在三百多位來賓面前致歡迎詞，我真的很緊張。有什麼建議嗎？ B：你不需要【背下】每一個字，但開場的幾句要多練習幾次，這樣你就能看著觀眾而不是看筆記。"
  },
  {
    "word": "retain",
    "pos": "v.",
    "cn_def": "保留；記住",
    "en_def": "to keep something, or to continue to remember it",
    "sentence": "A: Our best engineers keep leaving for competitors that offer higher salaries, and hiring new people is expensive and slow. What should management do? B: To {{BLANK}} skilled workers, we should offer flexible working hours, better training opportunities, and a yearly bonus that rewards people who stay with the company.",
    "cn": "A：我們最好的工程師一直跳槽到薪水更高的競爭對手，而招聘新人既昂貴又緩慢。管理層該怎麼做？ B：為了【留住】有技術的員工，我們應該提供彈性工時、更好的培訓機會，以及獎勵留任員工的年度獎金。"
  },
  {
    "word": "retrieve",
    "pos": "v.",
    "cn_def": "取回；找回",
    "en_def": "to get back information or something that was lost or stored",
    "sentence": "A: The computer crashed while I was writing the monthly report, and I hadn't saved my work for nearly two hours. Is everything gone? B: Don't panic yet, because our technician can usually {{BLANK}} lost files from the backup system, so let's call him and explain exactly what happened before you start again.",
    "cn": "A：我在寫月報時電腦當機了，而且我將近兩個小時沒存檔。全部都沒了嗎？ B：先別慌，我們的技術人員通常可以從備份系統【找回】遺失的檔案，在你重新開始之前，我們先打給他說明到底發生了什麼事。"
  },
  {
    "word": "review",
    "pos": "v.",
    "cn_def": "複習；審查",
    "en_def": "to look at or study something again",
    "sentence": "A: The final exam for the company's English certification course is next Monday, and I'm worried because there's so much vocabulary to learn. B: Try to {{BLANK}} your notes for twenty minutes every evening this week instead of studying all night on Sunday, because short regular practice works much better.",
    "cn": "A：公司英文認證課程的期末考是下星期一，我很擔心，因為要學的單字好多。 B：這週每天晚上試著【複習】筆記二十分鐘，不要星期天熬夜唸書，因為短時間、規律的練習效果好得多。"
  },
  {
    "word": "reminisce",
    "pos": "v.",
    "cn_def": "緬懷；追憶往事",
    "en_def": "to talk or think about pleasant past experiences",
    "sentence": "A: What did you and your former colleagues talk about at the retirement party for Mr. Lin last Friday evening at the hotel restaurant? B: We sat together for hours to {{BLANK}} about the early days, when the company had only five employees and one tiny office above a noodle shop downtown.",
    "cn": "A：上週五晚上在飯店餐廳舉行的林先生退休派對上，你和以前的同事聊了些什麼？ B：我們一起坐了好幾個小時【追憶】創業初期，那時公司只有五名員工，還有一間位於市中心麵店樓上的小辦公室。"
  },
  {
    "word": "remind",
    "pos": "v.",
    "cn_def": "提醒",
    "en_def": "to make someone remember something",
    "sentence": "A: The quarterly safety inspection is scheduled for next Wednesday, and I'm afraid some workers might not wear their helmets on that day. B: Please {{BLANK}} everyone about the rules at Monday's morning meeting, and put a notice on the board near the factory entrance so nobody has an excuse.",
    "cn": "A：季度安全檢查排在下週三，我擔心有些工人那天可能不戴安全帽。 B：請在星期一的晨會上【提醒】大家這些規定，並在工廠入口附近的布告欄貼一張公告，這樣就沒有人有藉口了。"
  },
  {
    "word": "forgetful",
    "pos": "adj.",
    "cn_def": "健忘的",
    "en_def": "often forgetting things",
    "sentence": "A: My manager keeps missing important deadlines and asking me the same questions about the project again and again. Should I be worried? B: He has been a little {{BLANK}} since he started handling two departments at once, so maybe you could send him a short summary of key dates every Monday.",
    "cn": "A：我的經理一直錯過重要的截止日期，還一再問我專案的同樣問題。我該擔心嗎？ B：自從他開始同時管理兩個部門後就有點【健忘】，也許你可以每週一寄給他一份重要日期的簡短摘要。"
  },
  {
    "word": "vivid",
    "pos": "adj.",
    "cn_def": "鮮明的；生動的",
    "en_def": "very bright, clear and strong",
    "sentence": "A: The advertising agency showed us three new poster designs for the summer campaign this morning. Which one did the director like most? B: She chose the one with {{BLANK}} colors and a bright beach scene, because she believes it will catch people's attention quickly in busy train stations and shopping malls.",
    "cn": "A：廣告公司今天早上給我們看了三款夏季活動的新海報設計。總監最喜歡哪一款？ B：她選了色彩【鮮明】、有明亮海灘場景的那款，因為她相信那款能在繁忙的火車站和購物中心迅速吸引人們的注意。"
  },
  {
    "word": "long-term",
    "pos": "adj.",
    "cn_def": "長期的",
    "en_def": "continuing for a long time into the future",
    "sentence": "A: Our company has been growing quickly this year, but the board is asking what our plans are for the next ten years. What should we tell them? B: We should present a clear {{BLANK}} strategy that focuses on opening new stores in Southeast Asia and training local managers to run them successfully.",
    "cn": "A：我們公司今年成長得很快，但董事會在問我們未來十年的計畫是什麼。我們該怎麼回答？ B：我們應該提出一個明確的【長期】策略，重點放在東南亞開設新門市，並培訓當地經理把店經營成功。"
  },
  {
    "word": "short-term",
    "pos": "adj.",
    "cn_def": "短期的",
    "en_def": "lasting only for a short time",
    "sentence": "A: Sales are expected to drop during the rainy season, and we may not have enough cash to pay suppliers in July. How can we handle it? B: The bank has offered us a {{BLANK}} loan for three months, which should cover our costs until business improves again in the autumn.",
    "cn": "A：雨季期間銷售預計會下滑，我們七月可能沒有足夠現金付給供應商。我們該怎麼處理？ B：銀行提供我們一筆為期三個月的【短期】貸款，應該能支應我們的開銷，直到秋天生意再度好轉。"
  },
  {
    "word": "mental",
    "pos": "adj.",
    "cn_def": "心理的；精神的",
    "en_def": "relating to the mind",
    "sentence": "A: Several employees have complained about stress and feeling tired because of the long overtime hours during the busy season. What can the company do? B: We could offer free counseling sessions and a quiet relaxation room, because good {{BLANK}} health is just as important as physical health for staying productive at work.",
    "cn": "A：有幾位員工抱怨旺季期間長時間加班讓他們壓力大又疲累。公司能做些什麼？ B：我們可以提供免費的諮商服務和一間安靜的休息室，因為良好的【心理】健康對維持工作效率來說和身體健康一樣重要。"
  },
  {
    "word": "clear",
    "pos": "adj.",
    "cn_def": "清楚的；清晰的",
    "en_def": "easy to understand, see or remember",
    "sentence": "A: Do you still know how the old filing system worked before we moved everything to the new software three years ago? B: Yes, I have a {{BLANK}} memory of it because I was the one who organized all the folders, so I can show you where the missing reports might be.",
    "cn": "A：你還知道三年前我們把所有東西移到新軟體之前，舊的歸檔系統是怎麼運作的嗎？ B：知道，我對它的記憶很【清楚】，因為所有資料夾都是我整理的，所以我可以告訴你遺失的報告可能在哪裡。"
  },
  {
    "word": "easily",
    "pos": "adv.",
    "cn_def": "容易地；輕易地",
    "en_def": "without difficulty",
    "sentence": "A: The new receptionist has to learn the names of more than fifty employees and our regular clients by the end of this week. Will she manage? B: I think she can {{BLANK}} remember them all, because she worked at a busy hotel before and is very good with names and faces.",
    "cn": "A：新來的櫃台人員這週結束前要記住五十多位員工和我們老客戶的名字。她做得到嗎？ B：我想她可以【輕易地】全部記住，因為她以前在一家忙碌的飯店工作過，很會記名字和長相。"
  },
  {
    "word": "clearly",
    "pos": "adv.",
    "cn_def": "清楚地",
    "en_def": "in a way that is easy to see, hear or understand",
    "sentence": "A: The instructions for the new coffee machine in the break room are confusing, and people keep pressing the wrong buttons. What should we do? B: Let's print a simple sign that explains each step {{BLANK}} with large letters and pictures, and put it right above the machine where everyone can see it.",
    "cn": "A：茶水間新咖啡機的說明讓人看不懂，大家一直按錯按鈕。我們該怎麼辦？ B：我們印一張簡單的告示，用大字和圖片【清楚地】說明每個步驟，貼在機器正上方讓大家都看得到。"
  },
  {
    "word": "vividly",
    "pos": "adv.",
    "cn_def": "鮮明地；生動地",
    "en_def": "in a very clear and detailed way",
    "sentence": "A: Do you remember your first day working at this company more than twenty years ago, when the office was still in the old building? B: I {{BLANK}} recall that morning, because the elevator broke down and I had to climb ten floors carrying a heavy box of files in the summer heat.",
    "cn": "A：你還記得二十多年前、辦公室還在舊大樓時，你在這家公司上班的第一天嗎？ B：我【清晰地】記得那天早上，因為電梯故障，我得在夏天的酷熱中抱著一大箱沉重的文件爬十層樓。"
  },
  {
    "word": "often",
    "pos": "adv.",
    "cn_def": "經常；常常",
    "en_def": "many times; frequently",
    "sentence": "A: How regularly should we back up the customer database, considering how many new orders we receive every day during the holiday season? B: We should do it as {{BLANK}} as possible, ideally every night after the store closes, so we never lose more than one day of information if something goes wrong.",
    "cn": "A：考慮到節慶期間我們每天收到這麼多新訂單，客戶資料庫應該多久備份一次？ B：我們應該盡可能【經常】備份，最好每晚在店面打烊後進行，這樣萬一出問題，我們最多只會損失一天的資料。"
  },
  {
    "word": "recently",
    "pos": "adv.",
    "cn_def": "最近；近來",
    "en_def": "not long ago",
    "sentence": "A: Have you heard any news about the new manager who is joining our Taichung branch next month, or is it still a secret? B: Yes, she was {{BLANK}} promoted after leading a very successful project in Tainan, and everyone there says she is friendly, organized, and good at remembering details.",
    "cn": "A：你有聽說下個月要加入我們台中分公司的新經理的消息嗎？還是還在保密？ B：有，她【最近】在台南帶領一個非常成功的專案後獲得升職，那裡的每個人都說她友善、有條理，而且很會記細節。"
  }
];

const MCQS = [
  {
    "q": "The secretary could not _____ the name of the client she met at the trade fair. Fortunately, she had kept his business card in her wallet.",
    "options": [
      "recall",
      "review",
      "reminisce",
      "remind"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Please _____ to switch off the lights and printers before leaving the office. The building manager has asked everyone to save electricity this winter.",
    "options": [
      "remind",
      "remember",
      "recall",
      "review"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Do not _____ to bring your employee ID card to the training center tomorrow. Security guards will not allow anyone to enter without one.",
    "options": [
      "retain",
      "retrieve",
      "forget",
      "memorize"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "The dental clinic sends each patient a text message _____ one day before an appointment. This simple service has greatly reduced missed visits.",
    "options": [
      "recollection",
      "nostalgia",
      "retention",
      "reminder"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The witness had only a vague _____ of the events at the warehouse that night. She admitted that she had been very tired after her shift.",
    "options": [
      "recollection",
      "reminder",
      "archive",
      "storage"
    ],
    "answer": 0,
    "vocabIndex": 4
  },
  {
    "q": "The new logo quickly gained wide brand _____ among young shoppers across Asia. Sales of the company's sports shoes doubled within a year.",
    "options": [
      "retention",
      "recognition",
      "nostalgia",
      "storage"
    ],
    "answer": 1,
    "vocabIndex": 5
  },
  {
    "q": "Arriving late to an interview usually makes a bad first _____ on employers. Candidates should plan their route and leave home early.",
    "options": [
      "recognition",
      "reminder",
      "impression",
      "flashback"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "Applicants for the sales position should have a basic _____ of accounting software. Training will be provided for the more advanced programs.",
    "options": [
      "storage",
      "nostalgia",
      "brain",
      "knowledge"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The company encourages lifelong _____ by paying for employees' evening classes. Staff who complete a course also receive a small bonus.",
    "options": [
      "learning",
      "storage",
      "retention",
      "archive"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Eating a healthy breakfast helps your _____ work better during long morning meetings. Many offices now provide fruit and yogurt for their staff.",
    "options": [
      "archive",
      "brain",
      "reminder",
      "impression"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "If you change your _____ about attending the conference, please tell the organizers by Friday. Otherwise, the registration fee cannot be returned.",
    "options": [
      "brain",
      "impression",
      "mind",
      "flashback"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The new laptops come with plenty of _____ space for large video files. They are also lighter than the models we bought last year.",
    "options": [
      "retention",
      "knowledge",
      "recognition",
      "storage"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Higher salaries and flexible schedules have improved staff _____ at the Taichung factory. Far fewer workers have left the company this year.",
    "options": [
      "retention",
      "storage",
      "recollection",
      "nostalgia"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The film opens with a _____ to the main character's childhood in a small fishing village. Later scenes return to her busy life in Taipei.",
    "options": [
      "reminder",
      "flashback",
      "archive",
      "recognition"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "The café's old-fashioned furniture creates a feeling of _____ for many older customers. Some of them visit every weekend to relax and chat.",
    "options": [
      "retention",
      "storage",
      "nostalgia",
      "knowledge"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "All emails older than two years are automatically moved to the company _____. Employees can still search them if they need old information.",
    "options": [
      "brain",
      "impression",
      "flashback",
      "archive"
    ],
    "answer": 3,
    "vocabIndex": 16
  },
  {
    "q": "Actors in the company's training video had to _____ their lines before filming began. The director did not want anyone reading from a script.",
    "options": [
      "memorize",
      "reminisce",
      "remind",
      "retrieve"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "Customers are more likely to _____ information when it is shown in a simple chart. Long paragraphs of text are often ignored completely.",
    "options": [
      "reminisce",
      "retain",
      "remind",
      "forget"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The technician was able to _____ the deleted files from the damaged hard drive. The sales team was relieved to get its data back.",
    "options": [
      "reminisce",
      "remind",
      "retrieve",
      "memorize"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The manager will _____ all expense reports before sending them to the accounting department. Please attach every receipt to your form.",
    "options": [
      "reminisce",
      "recall",
      "forget",
      "review"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "At the reunion dinner, former coworkers began to _____ about their first years at the company. They laughed about the tiny office they once shared.",
    "options": [
      "reminisce",
      "retrieve",
      "memorize",
      "remind"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Could you please _____ me to call the supplier before lunch? I need to confirm the delivery date for next week's order.",
    "options": [
      "remember",
      "remind",
      "recall",
      "retain"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Our _____ sales manager often leaves his umbrella on the train. His assistant now keeps a spare one in the office closet for him.",
    "options": [
      "vivid",
      "mental",
      "forgetful",
      "long-term"
    ],
    "answer": 2,
    "vocabIndex": 23
  },
  {
    "q": "The travel brochure uses _____ photographs of beaches and mountains to attract tourists. Bookings increased soon after it was sent to customers.",
    "options": [
      "forgetful",
      "mental",
      "short-term",
      "vivid"
    ],
    "answer": 3,
    "vocabIndex": 24
  },
  {
    "q": "The bank offers a _____ loan that can be repaid over twenty years. It is popular with young couples buying their first apartment.",
    "options": [
      "long-term",
      "short-term",
      "forgetful",
      "mental"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Regular breaks during the workday are good for both physical and _____ health. Employees who rest properly make fewer mistakes.",
    "options": [
      "vivid",
      "mental",
      "forgetful",
      "long-term"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The new manual gives _____ instructions on how to set up the office printer. Even staff with no technical experience can follow it.",
    "options": [
      "forgetful",
      "mental",
      "clear",
      "long-term"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Please write your name and address _____ on the delivery form. Our drivers often have trouble reading messy handwriting.",
    "options": [
      "recently",
      "vividly",
      "easily",
      "clearly"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The guide described the history of the old temple so _____ that the tourists felt they were there centuries ago. Everyone enjoyed the tour.",
    "options": [
      "vividly",
      "recently",
      "easily",
      "often"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "The company has _____ opened a new branch in Kaohsiung. It plans to hire twenty more sales staff before the end of the year.",
    "options": [
      "vividly",
      "recently",
      "clearly",
      "easily"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "recall": {
    "pos": "v.",
    "en_def": "to bring a past event or fact back into your mind",
    "cn_def": "回想起；記起"
  },
  "remember": {
    "pos": "v.",
    "en_def": "to keep something in your mind and not forget it",
    "cn_def": "記得"
  },
  "forget": {
    "pos": "v.",
    "en_def": "to not remember something",
    "cn_def": "忘記"
  },
  "reminder": {
    "pos": "n.",
    "en_def": "a message that helps you remember to do something",
    "cn_def": "提醒；提醒通知"
  },
  "recollection": {
    "pos": "n.",
    "en_def": "a memory of something that happened in the past",
    "cn_def": "回憶；記憶"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "knowing someone or something because you have seen it before",
    "cn_def": "認出；認得"
  },
  "impression": {
    "pos": "n.",
    "en_def": "an idea or feeling about someone or something",
    "cn_def": "印象"
  },
  "experience": {
    "pos": "n.",
    "en_def": "knowledge or skill you get from doing something",
    "cn_def": "經驗"
  },
  "knowledge": {
    "pos": "n.",
    "en_def": "information and understanding that you have",
    "cn_def": "知識；了解"
  },
  "learning": {
    "pos": "n.",
    "en_def": "the process of getting new knowledge or skills",
    "cn_def": "學習"
  },
  "brain": {
    "pos": "n.",
    "en_def": "the organ in your head that you think and remember with",
    "cn_def": "大腦"
  },
  "mind": {
    "pos": "n.",
    "en_def": "the part of a person that thinks, feels and remembers",
    "cn_def": "心思；頭腦"
  },
  "storage": {
    "pos": "n.",
    "en_def": "keeping things in a place until they are needed",
    "cn_def": "儲存；存放"
  },
  "retention": {
    "pos": "n.",
    "en_def": "the ability to keep or remember something",
    "cn_def": "保留；記住"
  },
  "flashback": {
    "pos": "n.",
    "en_def": "a sudden clear memory of something from the past",
    "cn_def": "回想；倒敘"
  },
  "nostalgia": {
    "pos": "n.",
    "en_def": "a happy but slightly sad feeling when you think about the past",
    "cn_def": "懷舊；思舊之情"
  },
  "archive": {
    "pos": "n.",
    "en_def": "a place where old records and documents are kept",
    "cn_def": "檔案庫；檔案室"
  },
  "memorize": {
    "pos": "v.",
    "en_def": "to learn something so that you can remember it exactly",
    "cn_def": "背誦；記住"
  },
  "retain": {
    "pos": "v.",
    "en_def": "to keep something, or to continue to remember it",
    "cn_def": "保留；記住"
  },
  "retrieve": {
    "pos": "v.",
    "en_def": "to get back information or something that was lost or stored",
    "cn_def": "取回；找回"
  },
  "review": {
    "pos": "v.",
    "en_def": "to look at or study something again",
    "cn_def": "複習；審查"
  },
  "reminisce": {
    "pos": "v.",
    "en_def": "to talk or think about pleasant past experiences",
    "cn_def": "緬懷；追憶往事"
  },
  "remind": {
    "pos": "v.",
    "en_def": "to make someone remember something",
    "cn_def": "提醒"
  },
  "forgetful": {
    "pos": "adj.",
    "en_def": "often forgetting things",
    "cn_def": "健忘的"
  },
  "vivid": {
    "pos": "adj.",
    "en_def": "very bright, clear and strong",
    "cn_def": "鮮明的；生動的"
  },
  "long-term": {
    "pos": "adj.",
    "en_def": "continuing for a long time into the future",
    "cn_def": "長期的"
  },
  "short-term": {
    "pos": "adj.",
    "en_def": "lasting only for a short time",
    "cn_def": "短期的"
  },
  "mental": {
    "pos": "adj.",
    "en_def": "relating to the mind",
    "cn_def": "心理的；精神的"
  },
  "clear": {
    "pos": "adj.",
    "en_def": "easy to understand, see or remember",
    "cn_def": "清楚的；清晰的"
  },
  "easily": {
    "pos": "adv.",
    "en_def": "without difficulty",
    "cn_def": "容易地；輕易地"
  },
  "clearly": {
    "pos": "adv.",
    "en_def": "in a way that is easy to see, hear or understand",
    "cn_def": "清楚地"
  },
  "vividly": {
    "pos": "adv.",
    "en_def": "in a very clear and detailed way",
    "cn_def": "鮮明地；生動地"
  },
  "often": {
    "pos": "adv.",
    "en_def": "many times; frequently",
    "cn_def": "經常；常常"
  },
  "recently": {
    "pos": "adv.",
    "en_def": "not long ago",
    "cn_def": "最近；近來"
  }
};

const EXTRA_GLOSSES = {};
