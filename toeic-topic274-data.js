// Topic 274 Quiz Data: Perfect Job 理想工作
// Source word list: https://www.examword.com/group-topic/perfect-job — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T274 - Perfect Job 理想工作",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "fulfilling",
    "pos": "adj.",
    "cn_def": "令人有成就感的；令人滿足的",
    "en_def": "making you feel happy and satisfied because your work is useful",
    "sentence": "A: Why did your sister leave her high-paying job at the bank last year and start working at a small hospital in the countryside? B: She said that counting money all day felt empty, but helping nurses and patients every morning is much more {{BLANK}}, even though she earns less and works longer hours.",
    "cn": "A：你姊姊去年為什麼辭掉銀行的高薪工作，跑去鄉下一家小醫院上班？ B：她說整天數錢讓她覺得很空虛，但每天早上幫助護理師和病人讓她更有【成就感】，即使她賺得比較少、工時也比較長。"
  },
  {
    "word": "rewarding",
    "pos": "adj.",
    "cn_def": "有意義的；值得做的；有收穫的",
    "en_def": "giving you a good feeling because it is useful or important",
    "sentence": "A: You have been teaching new employees in the training center for almost ten years, so don't you ever get tired of explaining the same rules? B: Sometimes I do, but it is very {{BLANK}} to see a nervous beginner become a confident team leader after only a few months of practice and support.",
    "cn": "A：你在訓練中心教新進員工快十年了，難道你不會厭倦一直解釋同樣的規定嗎？ B：有時候會，但看到一個緊張的新手在短短幾個月的練習和支持後成為有自信的組長，是非常【值得】的。"
  },
  {
    "word": "stable",
    "pos": "adj.",
    "cn_def": "穩定的",
    "en_def": "steady and not likely to change suddenly",
    "sentence": "A: Why did your brother turn down the exciting offer from that new technology startup in Singapore last month? B: He has two young children and a large mortgage, so he wanted a {{BLANK}} position at a well-known company where the income is steady and he doesn't have to worry about sudden layoffs.",
    "cn": "A：你哥哥上個月為什麼拒絕新加坡那家新創科技公司誘人的工作機會？ B：他有兩個年幼的孩子和一大筆房貸，所以他想要在知名公司找一個【穩定】的職位，收入固定，也不用擔心突然被裁員。"
  },
  {
    "word": "secure",
    "pos": "adj.",
    "cn_def": "有保障的；穩固的",
    "en_def": "safe; not likely to be lost",
    "sentence": "A: Are you worried about the rumors that the factory might close and move its production lines overseas next year? B: Not really, because the manager told us this morning that our department just signed a five-year contract with a major client, so our jobs are quite {{BLANK}} for now.",
    "cn": "A：你擔心工廠明年可能會關閉、把生產線移到海外的傳言嗎？ B：不太擔心，因為經理今天早上告訴我們，我們部門剛和一位大客戶簽了五年合約，所以我們的工作目前相當【有保障】。"
  },
  {
    "word": "well-paid",
    "pos": "adj.",
    "cn_def": "高薪的；待遇好的",
    "en_def": "earning a lot of money",
    "sentence": "A: Why are so many engineering graduates applying for positions at the new semiconductor plant in Hsinchu this year? B: The jobs there are {{BLANK}}, the company offers free housing near the science park, and new staff can get training overseas, so many young people think it is a great place to start.",
    "cn": "A：為什麼今年有這麼多工程系畢業生應徵新竹那座新半導體廠的職位？ B：那裡的工作【待遇很好】，公司在科學園區附近提供免費宿舍，新進員工還能到海外受訓，所以很多年輕人認為那是個很好的起點。"
  },
  {
    "word": "passionate",
    "pos": "adj.",
    "cn_def": "熱情的；熱愛的",
    "en_def": "having very strong love or interest for something",
    "sentence": "A: What made you choose Linda as the new manager of the cooking school instead of the other candidates with more experience? B: She is truly {{BLANK}} about healthy food, she spent weekends visiting local farms to learn about vegetables, and her energy in the interview made everyone in the room excited about her plans.",
    "cn": "A：你為什麼選琳達擔任烹飪學校的新經理，而不是其他經驗更豐富的應徵者？ B：她真的非常【熱愛】健康飲食，她會利用週末拜訪當地農場學習蔬菜知識，而且她在面試時的活力讓在場每個人都對她的計畫感到興奮。"
  },
  {
    "word": "meaningful",
    "pos": "adj.",
    "cn_def": "有意義的",
    "en_def": "important and useful; having a clear purpose",
    "sentence": "A: Why did you decide to join a charity organization after working in advertising for so many years? B: I earned good money selling products, but I wanted to do {{BLANK}} work that helps poor families get clean water, and now I feel proud when I tell people what my job is.",
    "cn": "A：你在廣告業工作了這麼多年，為什麼決定加入慈善機構？ B：我推銷產品賺了不少錢，但我想做能幫助貧困家庭取得乾淨用水的【有意義】的工作，現在我跟別人說起我的工作時都覺得很驕傲。"
  },
  {
    "word": "flexible",
    "pos": "adj.",
    "cn_def": "有彈性的；靈活的",
    "en_def": "able to change easily to suit different needs",
    "sentence": "A: How do you manage to pick up your kids from school every afternoon when you work full-time at the insurance company? B: My manager allows {{BLANK}} working hours, so I start at seven in the morning, leave at three thirty, and answer a few emails from home after dinner if necessary.",
    "cn": "A：你在保險公司全職上班，怎麼有辦法每天下午去學校接小孩？ B：我的經理允許【彈性】工時，所以我早上七點上班、三點半下班，必要時晚餐後在家回覆幾封電子郵件。"
  },
  {
    "word": "balanced",
    "pos": "adj.",
    "cn_def": "平衡的；均衡的",
    "en_def": "giving the right amount of time or attention to different things",
    "sentence": "A: You used to stay in the office until ten o'clock every night, so why do you look so relaxed and healthy these days? B: After I moved to a new company, I finally have a more {{BLANK}} life, with time for work, exercise at the gym, and dinners with my family on weekdays.",
    "cn": "A：你以前每天晚上都在辦公室待到十點，為什麼最近看起來這麼輕鬆又健康？ B：我換到一家新公司後，終於過著比較【平衡】的生活，有時間工作、去健身房運動，平日也能和家人吃晚餐。"
  },
  {
    "word": "motivating",
    "pos": "adj.",
    "cn_def": "激勵人心的；有激勵作用的",
    "en_def": "making you want to work hard",
    "sentence": "A: Why are the sales figures in the Taichung branch so much higher than ours this quarter, even though they have fewer staff? B: Their manager gives a short {{BLANK}} talk every Monday, sets clear weekly goals, and rewards the top seller with a dinner, so everyone works hard and feels excited about the targets.",
    "cn": "A：為什麼台中分公司這一季的業績比我們高這麼多，即使他們的員工比較少？ B：他們的經理每週一都會做一段簡短又【激勵人心】的談話，設定清楚的每週目標，並招待業績最好的人吃晚餐，所以大家都很努力，也對目標感到興奮。"
  },
  {
    "word": "supportive",
    "pos": "adj.",
    "cn_def": "給予支持的；支持的",
    "en_def": "giving help and encouragement",
    "sentence": "A: How did you feel during your first week at the design company, when you had to learn so many new computer programs at once? B: I was nervous at first, but my coworkers were very {{BLANK}}, they answered all my questions patiently, and my team leader even stayed late to help me finish my first project.",
    "cn": "A：你在設計公司的第一週，一下子要學那麼多新電腦軟體，感覺怎麼樣？ B：我一開始很緊張，但同事們都非常【支持】我，他們耐心回答我所有的問題，我的組長甚至留下來加班幫我完成第一個專案。"
  },
  {
    "word": "collaborative",
    "pos": "adj.",
    "cn_def": "合作的；協作的",
    "en_def": "involving people working together",
    "sentence": "A: Why did the marketing team and the engineers finish the new app so quickly, when last year's project took almost two years? B: This time the company used a more {{BLANK}} approach, so both teams shared one office, held short meetings every morning, and solved problems together instead of sending long emails back and forth.",
    "cn": "A：為什麼行銷團隊和工程師這麼快就完成了新的應用程式，而去年的專案花了將近兩年？ B：這次公司採用了更具【合作性】的方式，兩個團隊共用一間辦公室，每天早上開簡短的會議，一起解決問題，而不是來回寄冗長的電子郵件。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的；有創造力的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: What kind of person are you looking for to fill the open position in the advertising department next month? B: We need someone {{BLANK}} who can come up with fresh ideas for television commercials, design eye-catching posters for our clients, and explain those ideas clearly in meetings with managers from other companies.",
    "cn": "A：你們下個月要找什麼樣的人來填補廣告部的職缺？ B：我們需要一個【有創意】的人，能為電視廣告想出新點子、為客戶設計吸引人的海報，並在和其他公司經理開會時清楚說明這些想法。"
  },
  {
    "word": "challenging",
    "pos": "adj.",
    "cn_def": "具挑戰性的",
    "en_def": "difficult in an interesting way that tests your ability",
    "sentence": "A: Why did you leave your easy office job to become a project manager at a busy construction company downtown? B: I was getting bored doing the same simple tasks every day, so I wanted a more {{BLANK}} role where I must solve difficult problems, lead a large team, and learn new skills quickly.",
    "cn": "A：你為什麼辭去輕鬆的辦公室工作，到市中心一家忙碌的營造公司當專案經理？ B：我每天做同樣簡單的工作開始覺得無聊，所以我想要一個更【具挑戰性】的職位，必須解決困難的問題、帶領大團隊，並快速學習新技能。"
  },
  {
    "word": "growth",
    "pos": "n.",
    "cn_def": "成長；發展",
    "en_def": "the process of developing or improving",
    "sentence": "A: What do you like most about working at this small online marketing company, since the salary is not very high? B: There are many chances for personal {{BLANK}} here, because the manager lets me try new tasks, sends me to useful workshops, and gives me honest advice on how to improve my skills.",
    "cn": "A：既然薪水不算很高，你最喜歡在這家小型網路行銷公司工作的哪一點？ B：這裡有很多個人【成長】的機會，因為經理讓我嘗試新任務、送我去參加實用的研習，還會給我誠實的建議，告訴我如何提升技能。"
  },
  {
    "word": "promotion",
    "pos": "n.",
    "cn_def": "升職；晉升",
    "en_def": "a move to a higher position at work",
    "sentence": "A: Why is Kevin in such a good mood today, and why is everyone in the sales department bringing him cakes and flowers? B: He just received a {{BLANK}} to regional manager after five years of hard work, so starting next month he will lead a team of twenty people and earn a much higher salary.",
    "cn": "A：凱文今天心情為什麼這麼好？為什麼業務部的每個人都帶蛋糕和花給他？ B：他努力了五年，剛【升職】為區域經理，所以從下個月起他將帶領一個二十人的團隊，薪水也會高很多。"
  },
  {
    "word": "recognition",
    "pos": "n.",
    "cn_def": "認可；肯定；表揚",
    "en_def": "praise or thanks for something good that someone has done",
    "sentence": "A: Why did Amy look so happy at the annual company dinner last Friday night at the hotel? B: She finally got {{BLANK}} for her hard work on the new customer service system, because the CEO thanked her in front of everyone and gave her a special award and a bonus.",
    "cn": "A：上週五晚上在飯店舉行的公司年度晚宴上，艾咪為什麼看起來那麼開心？ B：她在新客服系統上的努力終於獲得了【肯定】，因為執行長在大家面前感謝她，並頒給她一個特別獎和一筆獎金。"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "cn_def": "福利；好處",
    "en_def": "something extra a company gives workers besides pay, such as insurance",
    "sentence": "A: The salary at the bank is a little lower than the one at the trading company, so why did you accept their offer? B: The bank offers a better {{BLANK}} package, including health insurance for my whole family, three weeks of paid vacation, and free language classes after work, so it is worth more overall.",
    "cn": "A：銀行的薪水比貿易公司低一點，你為什麼接受他們的錄取？ B：銀行提供更好的【福利】方案，包括我全家的健康保險、三週的帶薪假，以及下班後免費的語言課程，所以整體來說更划算。"
  },
  {
    "word": "salary",
    "pos": "n.",
    "cn_def": "薪水；薪資",
    "en_def": "the fixed money you are paid for your job, usually every month",
    "sentence": "A: What should I say if the interviewer asks how much money I expect to earn at the new company? B: Do some research online before the interview, find out the average {{BLANK}} for similar jobs in Taipei, and then give a reasonable range instead of one exact number.",
    "cn": "A：如果面試官問我期望在新公司賺多少錢，我該怎麼回答？ B：面試前先上網做點研究，查一下台北類似工作的平均【薪資】，然後給一個合理的範圍，而不是一個確切的數字。"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "cn_def": "機會",
    "en_def": "a chance to do something",
    "sentence": "A: Why did you agree to move to the Tokyo office for two years when your whole family lives here in Kaohsiung? B: It is a great {{BLANK}} to learn Japanese, work with international clients, and gain experience that will help me become a manager when I return to Taiwan.",
    "cn": "A：你全家都住在高雄，為什麼你同意調到東京辦公室兩年？ B：這是一個學日文、和國際客戶合作，並累積經驗的大好【機會】，等我回台灣時，這些經驗會幫助我成為經理。"
  },
  {
    "word": "independence",
    "pos": "n.",
    "cn_def": "獨立；自主",
    "en_def": "freedom to make your own decisions without control from others",
    "sentence": "A: Why do you prefer working as a freelance translator instead of joining a large publishing company with a regular office? B: I enjoy the {{BLANK}} of choosing my own projects, setting my own schedule, and working from a café, although I sometimes miss having coworkers to chat with during lunch.",
    "cn": "A：你為什麼比較喜歡當自由譯者，而不是進入一家有固定辦公室的大型出版社？ B：我喜歡能自己選擇案子、安排自己的時間、在咖啡廳工作的【自主性】，雖然有時候我會懷念午餐時有同事可以聊天。"
  },
  {
    "word": "leadership",
    "pos": "n.",
    "cn_def": "領導能力；領導",
    "en_def": "the ability to lead and guide a group of people",
    "sentence": "A: What qualities are the directors looking for in the person who will manage the new branch in Kaohsiung next year? B: They want someone with strong {{BLANK}} skills who can guide a team of thirty employees, make quick decisions during busy seasons, and keep everyone motivated when sales are slow.",
    "cn": "A：董事們在找什麼樣特質的人來管理明年高雄的新分公司？ B：他們要一個具備強大【領導】能力的人，能帶領三十名員工的團隊，在旺季時快速做決定，並在業績不佳時讓大家保持動力。"
  },
  {
    "word": "innovation",
    "pos": "n.",
    "cn_def": "創新；新發明",
    "en_def": "a new idea, method or product; the act of creating new things",
    "sentence": "A: Why do so many young engineers want to work at that electric car company, even though the hours are very long? B: The company is famous for {{BLANK}}, so the engineers get to design new batteries, test cutting-edge technology, and see their ideas become real products sold around the world.",
    "cn": "A：為什麼這麼多年輕工程師想進那家電動車公司工作，即使工時很長？ B：那家公司以【創新】聞名，所以工程師們能設計新電池、測試尖端科技，並看到自己的點子變成銷往世界各地的真實產品。"
  },
  {
    "word": "respectful",
    "pos": "adj.",
    "cn_def": "尊重人的；有禮貌的",
    "en_def": "showing polite care for other people",
    "sentence": "A: What do you like best about the new hotel where you started working as a receptionist last spring? B: The managers are always {{BLANK}} to the staff, they listen carefully to our ideas, never shout at anyone in front of guests, and thank us personally after a busy holiday weekend.",
    "cn": "A：你去年春天開始在那家新飯店當櫃檯人員，你最喜歡那裡的哪一點？ B：主管們對員工總是很【尊重】，他們會仔細聽我們的想法，從不在客人面前對任何人大吼，忙碌的連假週末過後還會親自向我們道謝。"
  },
  {
    "word": "productive",
    "pos": "adj.",
    "cn_def": "有成效的；生產力高的",
    "en_def": "getting a lot of useful work done",
    "sentence": "A: How was your first day working from home now that the company has closed the downtown office for repairs? B: It was surprisingly {{BLANK}}, because there were no noisy phone calls or long meetings, so I finished three reports, replied to all my emails, and still had time for a short walk.",
    "cn": "A：公司市中心的辦公室因整修關閉，你在家工作的第一天怎麼樣？ B：出乎意料地很【有效率】，因為沒有吵雜的電話或冗長的會議，所以我完成了三份報告、回覆了所有電子郵件，還有時間去散個步。"
  },
  {
    "word": "inspiring",
    "pos": "adj.",
    "cn_def": "鼓舞人心的；啟發人的",
    "en_def": "making you feel excited and want to do something",
    "sentence": "A: Did you enjoy the speech by the founder of the coffee chain at the business conference yesterday afternoon? B: Yes, it was very {{BLANK}}, because she explained how she started with one small cart at the train station and now runs two hundred shops, and many young listeners decided to start their own businesses.",
    "cn": "A：你喜歡昨天下午商業研討會上那家咖啡連鎖店創辦人的演講嗎？ B：喜歡，非常【鼓舞人心】，因為她說明了自己如何從火車站的一輛小推車起家，到現在經營兩百家店，許多年輕聽眾都決定要自己創業。"
  },
  {
    "word": "ethical",
    "pos": "adj.",
    "cn_def": "有道德的；合乎倫理的",
    "en_def": "morally right and honest",
    "sentence": "A: Why did you refuse the job at that cosmetics company, even though they offered you a much higher salary than your current one? B: I found out they test their products on animals and pay factory workers very little, and I only want to work for an {{BLANK}} company that treats people and nature fairly.",
    "cn": "A：你為什麼拒絕那家化妝品公司的工作，即使他們開的薪水比你現在高很多？ B：我發現他們拿動物做產品測試，而且付給工廠員工的薪水很低，我只想為一家公平對待人和自然的【有道德】的公司工作。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的；可信賴的",
    "en_def": "able to be trusted to do something well",
    "sentence": "A: Why did the manager ask Tom to handle the important shipment to our biggest customer in Germany this week? B: Tom is very {{BLANK}}, he has never missed a deadline in six years, he checks every document twice, and he always calls the client to confirm that the goods have arrived safely.",
    "cn": "A：經理為什麼這週要湯姆負責寄給我們德國最大客戶的重要貨物？ B：湯姆非常【可靠】，他六年來從未錯過任何期限，每份文件都檢查兩次，而且總會打電話給客戶確認貨物已安全送達。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or money",
    "sentence": "A: How did the new warehouse manager reduce our delivery time from five days to only two days in just three months? B: She introduced a more {{BLANK}} system that uses scanners to track every box, so workers no longer waste time searching for goods and the trucks can leave the warehouse much earlier.",
    "cn": "A：新的倉庫經理如何在短短三個月內把我們的送貨時間從五天縮短到只要兩天？ B：她導入了一套更【有效率】的系統，用掃描器追蹤每一個箱子，所以員工不再浪費時間找貨，卡車也能更早離開倉庫。"
  },
  {
    "word": "comfortable",
    "pos": "adj.",
    "cn_def": "舒適的；自在的",
    "en_def": "pleasant and relaxing; making you feel at ease",
    "sentence": "A: Why do the employees at the new software company seem so happy, even though they often work on very difficult projects? B: The office is bright and {{BLANK}}, with soft sofas, plenty of plants, a free coffee bar, and quiet rooms where people can rest for a few minutes when they feel tired.",
    "cn": "A：新軟體公司的員工雖然常做很困難的專案，為什麼看起來都那麼開心？ B：辦公室明亮又【舒適】，有柔軟的沙發、很多植物、免費的咖啡吧，還有安靜的房間讓大家累的時候可以休息幾分鐘。"
  },
  {
    "word": "dynamic",
    "pos": "adj.",
    "cn_def": "充滿活力的；有幹勁的",
    "en_def": "full of energy and new ideas",
    "sentence": "A: Why did you choose to work for that young travel startup instead of the traditional travel agency your father recommended? B: The startup has a {{BLANK}} team full of energetic people who try new ideas every week, and I wanted to grow quickly in an exciting place rather than follow the same old routines.",
    "cn": "A：你為什麼選擇到那家年輕的旅遊新創公司工作，而不是你爸爸推薦的傳統旅行社？ B：那家新創公司有一個【充滿活力】的團隊，成員都很有幹勁，每週都嘗試新點子，我想在令人興奮的地方快速成長，而不是一成不變。"
  },
  {
    "word": "respect",
    "pos": "n.",
    "cn_def": "尊重；尊敬",
    "en_def": "a feeling of admiration for someone, or polite treatment of others",
    "sentence": "A: How did Mr. Chen become such a popular manager when he was only twenty-eight years old and much younger than his staff? B: He earned the {{BLANK}} of his team by listening to their opinions, working as hard as everyone else, and always admitting his own mistakes honestly in meetings.",
    "cn": "A：陳先生只有二十八歲，比他的員工年輕很多，他是怎麼成為這麼受歡迎的經理的？ B：他藉由聆聽團隊的意見、和大家一樣努力工作，並總是在會議中誠實承認自己的錯誤，贏得了團隊的【尊重】。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就；成績",
    "en_def": "something good that you succeed in doing through hard work",
    "sentence": "A: Why did the whole office go out for a big dinner at the seafood restaurant last night? B: Our small team finally won the government contract after six months of preparation, and the director said it was the greatest {{BLANK}} in the company's history, so she paid for everyone's meal.",
    "cn": "A：為什麼整個辦公室昨晚去海鮮餐廳吃大餐？ B：我們的小團隊經過六個月的準備，終於拿下了政府合約，主管說這是公司史上最大的【成就】，所以她請大家吃飯。"
  },
  {
    "word": "satisfaction",
    "pos": "n.",
    "cn_def": "滿意；滿足感",
    "en_def": "the good feeling you have when you get what you want or do something well",
    "sentence": "A: The survey shows that our employees are staying longer than before, so what changes do you think made the biggest difference? B: I think job {{BLANK}} improved because we added flexible hours, gave clearer feedback during reviews, and allowed staff to choose interesting projects instead of only following orders from managers.",
    "cn": "A：調查顯示我們的員工比以前待得更久，你認為哪些改變影響最大？ B：我認為工作【滿意度】提高了，因為我們增加了彈性工時、在考核時給予更清楚的回饋，並讓員工能選擇有興趣的專案，而不只是聽從主管的命令。"
  }
];

const MCQS = [
  {
    "q": "After ten years in sales, Maria became a nurse to help sick children. She says her new career is far more _____ than her old one.",
    "options": [
      "reliable",
      "efficient",
      "respectful",
      "fulfilling"
    ],
    "answer": 3,
    "vocabIndex": 0
  },
  {
    "q": "Volunteering at the community center is hard work with no pay. However, many retired managers find the experience deeply _____ and come back every week.",
    "options": [
      "well-paid",
      "rewarding",
      "reliable",
      "ethical"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "Government jobs offer a _____ income that rarely changes from year to year. Many parents therefore want their children to take the civil service exam.",
    "options": [
      "creative",
      "passionate",
      "stable",
      "inspiring"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Because the company just won a ten-year contract, the workers no longer fear layoffs. They now feel that their jobs are _____.",
    "options": [
      "creative",
      "inspiring",
      "collaborative",
      "secure"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Software engineers in this city are very _____, earning nearly twice the national average. As a result, many students now choose computer science.",
    "options": [
      "respectful",
      "ethical",
      "well-paid",
      "supportive"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The new chef is truly _____ about Italian cooking and talks about pasta all day. His enthusiasm has made the kitchen staff enjoy their work more.",
    "options": [
      "passionate",
      "efficient",
      "secure",
      "stable"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The charity's staff earn modest salaries, but they enjoy doing _____ work that changes people's lives. Few of them ever leave for higher pay.",
    "options": [
      "well-paid",
      "meaningful",
      "secure",
      "flexible"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "Our company offers _____ working hours, so staff can start anytime between seven and ten. This helps parents take their children to school.",
    "options": [
      "flexible",
      "ethical",
      "creative",
      "reliable"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "The coach gave a short but very _____ talk before the sales competition. Afterward, every team member felt ready to break last year's record.",
    "options": [
      "stable",
      "secure",
      "motivating",
      "reliable"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "When Jenny's father was in the hospital, her coworkers covered her shifts and sent flowers. She was grateful to have such a _____ team.",
    "options": [
      "supportive",
      "well-paid",
      "stable",
      "ethical"
    ],
    "answer": 0,
    "vocabIndex": 10
  },
  {
    "q": "The project was a _____ effort between the design team and the engineers. Both groups met every morning to share ideas and solve problems.",
    "options": [
      "well-paid",
      "secure",
      "collaborative",
      "comfortable"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "We need a _____ designer who can produce fresh, original ideas for our new advertising campaign. Please send us examples of your past artwork.",
    "options": [
      "secure",
      "creative",
      "stable",
      "ethical"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "Leading a team of fifty people in a new country will be a _____ task. However, Mark is excited to test his skills and learn quickly.",
    "options": [
      "comfortable",
      "respectful",
      "stable",
      "challenging"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The company encourages career _____ by paying for training courses and online classes. Many employees have developed new skills this way.",
    "options": [
      "growth",
      "respect",
      "benefit",
      "salary"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "After five years of excellent work, Daniel finally got a _____ to senior manager. He will move into a bigger office next week.",
    "options": [
      "satisfaction",
      "growth",
      "respect",
      "promotion"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The hotel gave Anna an award in _____ of her excellent service to guests. Her photo now hangs in the main lobby.",
    "options": [
      "recognition",
      "opportunity",
      "innovation",
      "independence"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Free health insurance is an important _____ for employees at our firm. Other companies in the area rarely offer it.",
    "options": [
      "leadership",
      "innovation",
      "benefit",
      "salary"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "The starting _____ for this position is NT$40,000 a month. Pay will increase after a successful three-month trial period.",
    "options": [
      "salary",
      "achievement",
      "leadership",
      "recognition"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Working at our London office is a great _____ to improve your English. Interested staff should apply to the HR department by Friday.",
    "options": [
      "satisfaction",
      "leadership",
      "opportunity",
      "respect"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The new director showed strong _____ during the crisis by making quick, clear decisions. Her team trusted her completely.",
    "options": [
      "salary",
      "benefit",
      "opportunity",
      "leadership"
    ],
    "answer": 3,
    "vocabIndex": 21
  },
  {
    "q": "The electronics firm is known for constant _____, creating products never seen before. Its newest phone includes three brand-new features.",
    "options": [
      "salary",
      "innovation",
      "respect",
      "promotion"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Staff should always be polite and _____ toward customers, even when they are angry. Shouting at a guest is never acceptable.",
    "options": [
      "challenging",
      "well-paid",
      "dynamic",
      "respectful"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Short meetings with a clear agenda are usually more _____ than long ones. Participants make decisions faster and return to work sooner.",
    "options": [
      "passionate",
      "productive",
      "respectful",
      "ethical"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "The founder's _____ speech about starting from nothing moved the whole audience. Many young listeners decided to open their own businesses.",
    "options": [
      "stable",
      "secure",
      "inspiring",
      "flexible"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Our company follows strict _____ rules, so staff may not accept gifts from suppliers. This keeps all business decisions honest and fair.",
    "options": [
      "ethical",
      "creative",
      "comfortable",
      "passionate"
    ],
    "answer": 0,
    "vocabIndex": 26
  },
  {
    "q": "We need a _____ delivery service that always arrives on time. Last month our old supplier was late four times.",
    "options": [
      "passionate",
      "reliable",
      "creative",
      "inspiring"
    ],
    "answer": 1,
    "vocabIndex": 27
  },
  {
    "q": "The new scanning system is very _____ and has cut the time needed to check stock in half. It also reduces paper waste.",
    "options": [
      "respectful",
      "passionate",
      "ethical",
      "efficient"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "Good managers treat every employee with _____, whatever their position. In return, staff are more willing to work hard.",
    "options": [
      "respect",
      "promotion",
      "salary",
      "innovation"
    ],
    "answer": 0,
    "vocabIndex": 31
  },
  {
    "q": "Winning the national design award was a great _____ for our small studio. The whole team celebrated with dinner at a fancy restaurant.",
    "options": [
      "salary",
      "benefit",
      "achievement",
      "independence"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "According to the latest survey, job _____ among our employees has risen sharply. Most staff say they are happy with their work.",
    "options": [
      "innovation",
      "satisfaction",
      "leadership",
      "independence"
    ],
    "answer": 1,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "fulfilling": {
    "pos": "adj.",
    "en_def": "making you feel happy and satisfied because your work is useful",
    "cn_def": "令人有成就感的；令人滿足的"
  },
  "rewarding": {
    "pos": "adj.",
    "en_def": "giving you a good feeling because it is useful or important",
    "cn_def": "有意義的；值得做的；有收穫的"
  },
  "stable": {
    "pos": "adj.",
    "en_def": "steady and not likely to change suddenly",
    "cn_def": "穩定的"
  },
  "secure": {
    "pos": "adj.",
    "en_def": "safe; not likely to be lost",
    "cn_def": "有保障的；穩固的"
  },
  "well-paid": {
    "pos": "adj.",
    "en_def": "earning a lot of money",
    "cn_def": "高薪的；待遇好的"
  },
  "passionate": {
    "pos": "adj.",
    "en_def": "having very strong love or interest for something",
    "cn_def": "熱情的；熱愛的"
  },
  "meaningful": {
    "pos": "adj.",
    "en_def": "important and useful; having a clear purpose",
    "cn_def": "有意義的"
  },
  "flexible": {
    "pos": "adj.",
    "en_def": "able to change easily to suit different needs",
    "cn_def": "有彈性的；靈活的"
  },
  "balanced": {
    "pos": "adj.",
    "en_def": "giving the right amount of time or attention to different things",
    "cn_def": "平衡的；均衡的"
  },
  "motivating": {
    "pos": "adj.",
    "en_def": "making you want to work hard",
    "cn_def": "激勵人心的；有激勵作用的"
  },
  "supportive": {
    "pos": "adj.",
    "en_def": "giving help and encouragement",
    "cn_def": "給予支持的；支持的"
  },
  "collaborative": {
    "pos": "adj.",
    "en_def": "involving people working together",
    "cn_def": "合作的；協作的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的；有創造力的"
  },
  "challenging": {
    "pos": "adj.",
    "en_def": "difficult in an interesting way that tests your ability",
    "cn_def": "具挑戰性的"
  },
  "growth": {
    "pos": "n.",
    "en_def": "the process of developing or improving",
    "cn_def": "成長；發展"
  },
  "promotion": {
    "pos": "n.",
    "en_def": "a move to a higher position at work",
    "cn_def": "升職；晉升"
  },
  "recognition": {
    "pos": "n.",
    "en_def": "praise or thanks for something good that someone has done",
    "cn_def": "認可；肯定；表揚"
  },
  "benefit": {
    "pos": "n.",
    "en_def": "something extra a company gives workers besides pay, such as insurance",
    "cn_def": "福利；好處"
  },
  "salary": {
    "pos": "n.",
    "en_def": "the fixed money you are paid for your job, usually every month",
    "cn_def": "薪水；薪資"
  },
  "opportunity": {
    "pos": "n.",
    "en_def": "a chance to do something",
    "cn_def": "機會"
  },
  "independence": {
    "pos": "n.",
    "en_def": "freedom to make your own decisions without control from others",
    "cn_def": "獨立；自主"
  },
  "leadership": {
    "pos": "n.",
    "en_def": "the ability to lead and guide a group of people",
    "cn_def": "領導能力；領導"
  },
  "innovation": {
    "pos": "n.",
    "en_def": "a new idea, method or product; the act of creating new things",
    "cn_def": "創新；新發明"
  },
  "respectful": {
    "pos": "adj.",
    "en_def": "showing polite care for other people",
    "cn_def": "尊重人的；有禮貌的"
  },
  "productive": {
    "pos": "adj.",
    "en_def": "getting a lot of useful work done",
    "cn_def": "有成效的；生產力高的"
  },
  "inspiring": {
    "pos": "adj.",
    "en_def": "making you feel excited and want to do something",
    "cn_def": "鼓舞人心的；啟發人的"
  },
  "ethical": {
    "pos": "adj.",
    "en_def": "morally right and honest",
    "cn_def": "有道德的；合乎倫理的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to do something well",
    "cn_def": "可靠的；可信賴的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or money",
    "cn_def": "有效率的"
  },
  "comfortable": {
    "pos": "adj.",
    "en_def": "pleasant and relaxing; making you feel at ease",
    "cn_def": "舒適的；自在的"
  },
  "dynamic": {
    "pos": "adj.",
    "en_def": "full of energy and new ideas",
    "cn_def": "充滿活力的；有幹勁的"
  },
  "respect": {
    "pos": "n.",
    "en_def": "a feeling of admiration for someone, or polite treatment of others",
    "cn_def": "尊重；尊敬"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing through hard work",
    "cn_def": "成就；成績"
  },
  "satisfaction": {
    "pos": "n.",
    "en_def": "the good feeling you have when you get what you want or do something well",
    "cn_def": "滿意；滿足感"
  }
};

const EXTRA_GLOSSES = {};
