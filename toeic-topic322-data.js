// Topic 322 Quiz Data: Recommendation Letter 推薦信
// Source word list: https://www.examword.com/group-topic/recommendation-letter — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T322 - Recommendation Letter 推薦信",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "reference",
    "pos": "n.",
    "cn_def": "推薦函；介紹信；證明人",
    "en_def": "a statement about someone's character and ability, written by someone who knows them",
    "sentence": "A: The hiring manager at the bank says she cannot finish my file until she hears from someone who has worked with me before. B: Then you should ask your old boss at the travel agency to write a {{BLANK}} for you, because she knows how carefully you handled customer bookings for three years.",
    "cn": "A：銀行的招募經理說，在聽到曾和我共事過的人的意見之前，她無法完成我的資料。 B：那你應該請你在旅行社的前老闆幫你寫一封【推薦函】，因為她知道你三年來處理客戶訂位有多細心。"
  },
  {
    "word": "endorse",
    "pos": "v.",
    "cn_def": "背書；支持；認可",
    "en_def": "to say publicly that you support or approve of someone or something",
    "sentence": "A: Do you think the department head will help me get the scholarship for the evening business program at the university next spring? B: I am sure she will {{BLANK}} your application, because she has seen how much your sales reports improved after you took the online marketing course last year.",
    "cn": "A：你覺得部門主管會幫我爭取明年春天大學夜間商業課程的獎學金嗎？ B：我確定她會【支持】你的申請，因為她看到你去年上完線上行銷課程後，業務報告進步了多少。"
  },
  {
    "word": "endorsement",
    "pos": "n.",
    "cn_def": "認可；支持；背書",
    "en_def": "a statement that you support or approve of someone",
    "sentence": "A: Why did the committee choose Maria for the overseas training program instead of one of the more experienced engineers in our office? B: She received a strong {{BLANK}} from the factory director, who wrote that she had solved several difficult production problems without any help from the senior staff.",
    "cn": "A：為什麼委員會選瑪麗亞參加海外培訓計畫，而不是我們辦公室裡比較有經驗的工程師之一？ B：她得到了廠長強力的【認可】，廠長寫道她在沒有資深員工協助的情況下解決了好幾個困難的生產問題。"
  },
  {
    "word": "qualification",
    "pos": "n.",
    "cn_def": "資格；學歷；資歷",
    "en_def": "a skill, degree, or experience that makes you suitable for a job",
    "sentence": "A: I'm writing a letter for my former assistant, but I'm not sure what I should mention about her training and her background. B: Start with her most important {{BLANK}}, such as her accounting certificate, and then describe how she used that knowledge to organize our monthly budget reports.",
    "cn": "A：我正在幫我以前的助理寫一封信，但我不確定該提到她的訓練和背景的哪些部分。 B：先從她最重要的【資格】開始，例如她的會計證照，然後描述她如何運用那些知識整理我們每月的預算報告。"
  },
  {
    "word": "competent",
    "pos": "adj.",
    "cn_def": "能幹的；稱職的",
    "en_def": "having enough skill or knowledge to do something well",
    "sentence": "A: Our new client is worried that a junior designer will be working on their website, so what should I tell them about Kevin? B: Tell them that he is a very {{BLANK}} designer who has already finished four projects for large companies, and that I will check every page before it goes online.",
    "cn": "A：我們的新客戶擔心由資淺的設計師負責他們的網站，我該怎麼跟他們介紹凱文？ B：告訴他們，他是一位非常【稱職的】設計師，已經為大公司完成了四個案子，而且每個頁面上線之前我都會檢查。"
  },
  {
    "word": "dedicated",
    "pos": "adj.",
    "cn_def": "盡心盡力的；專注的",
    "en_def": "working very hard because you care a lot about something",
    "sentence": "A: Why do you want to write such a long letter for Linda when she only worked at the front desk of our hotel for one year? B: She was the most {{BLANK}} employee I have ever had, often staying late to help guests and even learning some Japanese to serve our tour groups better.",
    "cn": "A：琳達只在我們飯店櫃檯工作了一年，為什麼你要幫她寫這麼長的一封信？ B：她是我遇過最【盡心盡力的】員工，經常留到很晚幫助客人，甚至還學了一些日文，好讓她能更好地服務我們的旅行團。"
  },
  {
    "word": "hardworking",
    "pos": "adj.",
    "cn_def": "勤奮的；努力的",
    "en_def": "putting a lot of effort into your work",
    "sentence": "A: What can you say about Tom in the letter, since the hiring company says they need someone who can handle a heavy workload during the holiday season? B: I will explain that he is extremely {{BLANK}}, because last December he packed hundreds of orders every day and never complained about the long shifts.",
    "cn": "A：既然那家招聘公司說他們需要一個能在假期旺季應付繁重工作量的人，你在信裡能怎麼介紹湯姆？ B：我會說明他非常【勤奮】，因為去年十二月他每天包裝好幾百份訂單，對於長時間的輪班從來沒有抱怨過。"
  },
  {
    "word": "responsible",
    "pos": "adj.",
    "cn_def": "負責任的；可靠的",
    "en_def": "able to be trusted to do the right thing and take care of duties",
    "sentence": "A: The landlord asked me for a letter about my nephew before he signs the lease, but what should I focus on? B: Explain that he is a {{BLANK}} young man who has paid his phone bills on time for years and who looked after our shop while we were away last summer.",
    "cn": "A：房東要我在姪子簽租約前寫一封關於他的信，但我應該著重在哪裡？ B：說明他是一個【負責任的】年輕人，多年來都按時繳電話費，而且去年夏天我們不在時還幫我們照顧店面。"
  },
  {
    "word": "reliable",
    "pos": "adj.",
    "cn_def": "可靠的；可信賴的",
    "en_def": "able to be trusted to do what is expected",
    "sentence": "A: Our delivery company needs a driver who will arrive on time every morning, so why are you suggesting your neighbor for the job? B: He is very {{BLANK}}, because he drove the school bus in our town for six years and the parents never had a single complaint about him being late.",
    "cn": "A：我們的貨運公司需要一位每天早上都準時到的司機，你為什麼推薦你的鄰居來做這份工作？ B：他非常【可靠】，因為他在我們鎮上開了六年校車，家長們從來沒有抱怨過他遲到。"
  },
  {
    "word": "professional",
    "pos": "adj.",
    "cn_def": "專業的",
    "en_def": "showing the skills and behavior expected of someone at work",
    "sentence": "A: The customers in the client meeting yesterday were really angry about the late shipment, so how did Jenny handle the situation? B: She stayed calm and very {{BLANK}}, listened to every complaint carefully, and then offered them a discount on the next order, so I want to mention this in her letter.",
    "cn": "A：昨天客戶會議上的客戶們對延遲出貨非常生氣，珍妮是怎麼處理的？ B：她保持冷靜而且非常【專業】，仔細聽取每一個抱怨，然後提供他們下一筆訂單的折扣，所以我想在她的信中提到這件事。"
  },
  {
    "word": "initiative",
    "pos": "n.",
    "cn_def": "主動性；進取心",
    "en_def": "the ability to act and make decisions without being told what to do",
    "sentence": "A: Is there a good example I can use to show that Daniel does not wait for instructions before he solves a problem? B: Yes, he showed great {{BLANK}} when he noticed our filing system was slow and created a new online database during his free time without anyone asking him to.",
    "cn": "A：有沒有好的例子可以說明丹尼爾不會等別人指示才去解決問題？ B：有，他發現我們的檔案系統很慢時，就展現了很大的【主動性】，在沒有人要求的情況下利用空閒時間建立了新的線上資料庫。"
  },
  {
    "word": "leadership",
    "pos": "n.",
    "cn_def": "領導能力；領導",
    "en_def": "the ability to guide and manage a group of people",
    "sentence": "A: The company that wants to hire Rachel needs someone who can manage a team of ten people in their new branch office. B: Then you should describe her {{BLANK}} during the store opening last year, when she trained all the new staff and organized the schedule for the busy first month.",
    "cn": "A：想雇用瑞秋的公司需要一個能在他們新分公司管理十個人團隊的人。 B：那你應該描述她去年在開店期間的【領導能力】，當時她訓練了所有新員工，並安排了忙碌第一個月的班表。"
  },
  {
    "word": "cooperative",
    "pos": "adj.",
    "cn_def": "合作的；樂於配合的",
    "en_def": "willing to help and work well with other people",
    "sentence": "A: The new manager is worried that Alex might not get along well with the other departments, since he usually works alone on his reports. B: Actually, he is very {{BLANK}}, and when the marketing team needed sales figures last month, he gave them everything they wanted within a few hours.",
    "cn": "A：新經理擔心艾力克斯可能和其他部門處得不好，因為他通常都獨自完成報告。 B：其實他非常【樂於配合】，上個月行銷團隊需要銷售數據時，他在幾個小時內就把他們要的資料全部給了他們。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at thinking of new and original ideas",
    "sentence": "A: The advertising agency wants a letter for Sophie, but what makes her different from all the other people applying for the job? B: She is extremely {{BLANK}}, and last year her idea for a short video about our coffee shop brought hundreds of new customers through the door in just two weeks.",
    "cn": "A：那家廣告公司想要一封關於蘇菲的信，但她和其他所有應徵這份工作的人有什麼不同？ B：她非常【有創意】，去年她為我們咖啡店想出的短片點子，在短短兩週內就帶來了好幾百位新顧客。"
  },
  {
    "word": "efficient",
    "pos": "adj.",
    "cn_def": "有效率的",
    "en_def": "working well without wasting time or money",
    "sentence": "A: How should I describe Peter's work in the warehouse, because the new employer says they want someone who can save time and money? B: Write that he is very {{BLANK}}, since he changed the way we stored boxes and cut our packing time by almost half without hiring any extra workers.",
    "cn": "A：我該怎麼描述彼得在倉庫的工作表現？因為新雇主說他們想要一個能節省時間和金錢的人。 B：寫他非常【有效率】，因為他改變了我們存放箱子的方式，在沒有額外雇用人手的情況下把包裝時間縮短了將近一半。"
  },
  {
    "word": "punctual",
    "pos": "adj.",
    "cn_def": "準時的",
    "en_def": "arriving or doing something at the expected time; not late",
    "sentence": "A: The hotel manager said that her last receptionist was always late for the morning shift, so she asked me about Amy's habits. B: Tell her that Amy was always {{BLANK}}, arriving fifteen minutes before her shift every day, even during the typhoon season when the buses were often delayed.",
    "cn": "A：飯店經理說她上一位接待員早班總是遲到，所以她問我艾米的習慣如何。 B：告訴她艾米總是很【準時】，每天都在上班前十五分鐘到，即使在公車經常誤點的颱風季也是如此。"
  },
  {
    "word": "enthusiastic",
    "pos": "adj.",
    "cn_def": "熱情的；熱衷的",
    "en_def": "showing a lot of interest and excitement",
    "sentence": "A: What did the customers think of Mark when he started leading the walking tours around the old part of the city? B: They loved how {{BLANK}} he was about local history, and many of them wrote online reviews saying his energy made the three-hour tour feel much shorter.",
    "cn": "A：馬克開始帶老城區徒步導覽時，客人們覺得他怎麼樣？ B：他們很喜歡他對當地歷史那麼【熱衷】，很多人在網路上留下評論，說他的活力讓三小時的導覽感覺短了很多。"
  },
  {
    "word": "motivated",
    "pos": "adj.",
    "cn_def": "積極的；有動力的",
    "en_def": "wanting very much to do something or to succeed",
    "sentence": "A: Why do you think Kelly is ready for a management position, even though she has only worked at the bank for two years? B: She is highly {{BLANK}}, and she took evening classes in finance while working full-time because she wanted to understand our clients' needs better.",
    "cn": "A：雖然凱莉只在銀行工作了兩年，你為什麼認為她已經準備好擔任管理職了？ B：她非常【積極】，一邊全職工作一邊上財務夜間課程，因為她想更了解客戶的需求。"
  },
  {
    "word": "capable",
    "pos": "adj.",
    "cn_def": "有能力的；能幹的",
    "en_def": "having the skill or ability to do something",
    "sentence": "A: The new company wants to know whether Brian can handle the accounts for several large clients at the same time. B: I believe he is fully {{BLANK}} of doing that, because he managed five important customers here last year and none of their orders were delayed.",
    "cn": "A：新公司想知道布萊恩是否能同時處理好幾個大客戶的帳務。 B：我相信他完全【有能力】做到，因為他去年在這裡負責了五個重要客戶，沒有任何一筆訂單延誤。"
  },
  {
    "word": "skillful",
    "pos": "adj.",
    "cn_def": "熟練的；有技巧的",
    "en_def": "very good at doing something that needs special ability",
    "sentence": "A: The restaurant owner asked me to describe Lisa's work in our kitchen, especially how she prepares food during busy dinner hours. B: Write that she is a very {{BLANK}} cook who can prepare twenty dishes an hour without making mistakes, and that customers often ask for her special fish soup.",
    "cn": "A：餐廳老闆要我描述麗莎在我們廚房的工作，特別是她在忙碌晚餐時段如何備餐。 B：寫她是一位非常【熟練的】廚師，一小時能做出二十道菜而且不出錯，客人也常常點她的招牌魚湯。"
  },
  {
    "word": "adaptable",
    "pos": "adj.",
    "cn_def": "適應力強的",
    "en_def": "able to change easily to fit new situations",
    "sentence": "A: The overseas office changes its plans very often, so they want someone who will not feel stressed when things suddenly change. B: Then describe how {{BLANK}} Jason was when our company moved to a new computer system, because he learned it in a week and then helped train everyone else.",
    "cn": "A：海外辦公室經常改變計畫，所以他們想找一個在事情突然改變時不會感到壓力的人。 B：那就描述傑森在我們公司換新電腦系統時有多麼【適應力強】，因為他一週內就學會了，然後還幫忙訓練其他所有人。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；幫助",
    "en_def": "to help or encourage someone",
    "sentence": "A: I heard that you are writing a letter for Emily, who wants to study for a master's degree in business in London next year. B: Yes, I am happy to {{BLANK}} her application, because she has worked hard here for three years and I know the program will help her future career.",
    "cn": "A：我聽說你正在幫艾蜜莉寫一封信，她明年想去倫敦攻讀商業碩士。 B：是的，我很樂意【支持】她的申請，因為她在這裡努力工作了三年，我知道這個課程會對她未來的職涯有幫助。"
  },
  {
    "word": "applicant",
    "pos": "n.",
    "cn_def": "申請人；應徵者",
    "en_def": "a person who formally asks for a job, a place at school, etc.",
    "sentence": "A: How many people have sent their résumés for the assistant manager position, and has the personnel office checked their letters yet? B: We have received forms from almost fifty people, but only one {{BLANK}} included three letters from former employers, so the director wants to interview her first on Monday.",
    "cn": "A：有多少人寄了助理經理職位的履歷？人事室已經檢查過他們的信了嗎？ B：我們收到了將近五十個人的表格，但只有一位【應徵者】附上了三封前雇主寫的信，所以主任想在星期一先面試她。"
  },
  {
    "word": "candidate",
    "pos": "n.",
    "cn_def": "候選人；應試者",
    "en_def": "a person who is being considered for a job",
    "sentence": "A: After all the interviews this week, who do you think the team should hire as the new head of customer service? B: I think Grace is the strongest {{BLANK}}, because her former manager wrote that she reduced customer complaints by thirty percent in her first year.",
    "cn": "A：這週面試完之後，你認為團隊應該雇用誰擔任新的客服主管？ B：我認為葛蕾絲是最有力的【候選人】，因為她前任經理寫道她在第一年就把客訴減少了百分之三十。"
  },
  {
    "word": "performance",
    "pos": "n.",
    "cn_def": "表現；績效",
    "en_def": "how well someone does their work",
    "sentence": "A: The university wants to know how well Ryan did his job during his internship at our engineering office last summer. B: I will tell them that his {{BLANK}} was excellent, since he finished every task before the deadline and even found a mistake in the bridge design that saved us a lot of money.",
    "cn": "A：大學想知道萊恩去年夏天在我們工程事務所實習時工作做得怎麼樣。 B：我會告訴他們他的【表現】很優秀，因為他每項任務都在期限前完成，甚至在橋梁設計中找到一個錯誤，幫我們省下了很多錢。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就；成績",
    "en_def": "something good that you succeed in doing after effort",
    "sentence": "A: I want the letter for Helen to sound impressive, so what is the most important thing she did while working in our sales department? B: Her greatest {{BLANK}} was winning a contract with a large hotel chain, which brought our company more than two million dollars in new business last year.",
    "cn": "A：我希望給海倫的信聽起來令人印象深刻，她在我們業務部工作期間做過最重要的事是什麼？ B：她最大的【成就】是拿下一家大型連鎖飯店的合約，去年為我們公司帶來了超過兩百萬美元的新生意。"
  },
  {
    "word": "strength",
    "pos": "n.",
    "cn_def": "優點；長處",
    "en_def": "a good quality or ability that someone has",
    "sentence": "A: The hiring company asked me to list both the good points and the weak points of my former secretary in the letter. B: Start with her biggest {{BLANK}}, which is her excellent communication with customers, and then mention that she sometimes needs more time when using new computer programs.",
    "cn": "A：招聘公司要我在信裡列出我前任秘書的優點和缺點。 B：先從她最大的【長處】開始，也就是她和客戶之間極佳的溝通，然後再提到她在使用新電腦程式時有時需要多一點時間。"
  },
  {
    "word": "character",
    "pos": "n.",
    "cn_def": "品格；性格",
    "en_def": "the qualities that make a person who they are, especially moral ones",
    "sentence": "A: The scholarship committee does not only care about grades, and they asked what kind of person Jack is outside the classroom. B: I can tell them that he has a good {{BLANK}}, because he volunteers at the hospital every weekend and once returned a wallet full of cash to its owner.",
    "cn": "A：獎學金委員會不只在意成績，他們問傑克在課堂外是個什麼樣的人。 B：我可以告訴他們他有良好的【品格】，因為他每個週末都在醫院當志工，還曾經把一個裝滿現金的錢包還給失主。"
  },
  {
    "word": "integrity",
    "pos": "n.",
    "cn_def": "正直；誠信",
    "en_def": "the quality of being honest and having strong moral principles",
    "sentence": "A: The bank is hiring someone to handle large amounts of money, so they want to be sure the person is honest. B: Then mention Nancy's {{BLANK}}, because when a supplier offered her an expensive gift to choose their company, she refused it and reported it to the manager right away.",
    "cn": "A：銀行要雇用一個處理大筆金錢的人，所以他們想確定這個人是誠實的。 B：那就提到南西的【正直】，因為有供應商送她昂貴的禮物要她選擇他們公司時，她拒絕了，並立刻向經理報告。"
  },
  {
    "word": "attitude",
    "pos": "n.",
    "cn_def": "態度",
    "en_def": "the way you think and feel about something, shown in how you act",
    "sentence": "A: What should I write about Ben, since he did not have much experience when he first joined our customer service team? B: Write about his positive {{BLANK}}, because he always smiled at difficult customers, asked questions when he did not understand, and quickly became one of our best workers.",
    "cn": "A：我該寫些什麼關於班的事？因為他剛加入我們客服團隊時經驗不多。 B：寫他積極的【態度】，因為他總是對難搞的客戶微笑，不懂的時候會發問，而且很快就成為我們最好的員工之一。"
  },
  {
    "word": "contribution",
    "pos": "n.",
    "cn_def": "貢獻",
    "en_def": "something you do or give to help make something successful",
    "sentence": "A: Why is the director writing such a strong letter for Olivia, who is leaving the company after only eighteen months? B: She made an important {{BLANK}} to our new product launch by designing the online campaign that attracted thousands of young customers to our website.",
    "cn": "A：奧莉維亞只待了十八個月就要離開公司，主任為什麼要幫她寫這麼有力的一封信？ B：她為我們的新產品上市做出了重要的【貢獻】，設計了吸引數千名年輕客戶到我們網站的線上宣傳活動。"
  },
  {
    "word": "collaboration",
    "pos": "n.",
    "cn_def": "合作；協作",
    "en_def": "the act of working together with others to do something",
    "sentence": "A: What example can I use to show that Tina works well with people from other countries and other departments? B: Describe her {{BLANK}} with our partners in Japan last spring, when she and their engineers met online every week and finished the new software three weeks early.",
    "cn": "A：我可以用什麼例子來說明蒂娜能和其他國家、其他部門的人合作愉快？ B：描述她去年春天和我們日本夥伴的【合作】，當時她和他們的工程師每週線上開會，提早三週完成了新軟體。"
  },
  {
    "word": "supervisor",
    "pos": "n.",
    "cn_def": "主管；上司",
    "en_def": "a person who is in charge of a group of workers",
    "sentence": "A: The company I'm applying to wants a letter from someone who watched my daily work closely and checked my reports. B: Then you should ask your {{BLANK}} at the factory, because she gave you your tasks every morning and reviewed all your safety reports for the past two years.",
    "cn": "A：我應徵的公司想要一封由密切觀察我日常工作、檢查我報告的人所寫的信。 B：那你應該請你在工廠的【主管】寫，因為過去兩年她每天早上分配任務給你，也審核了你所有的安全報告。"
  },
  {
    "word": "mentor",
    "pos": "n.",
    "cn_def": "導師；指導者",
    "en_def": "an experienced person who advises and helps a less experienced person",
    "sentence": "A: Who taught you so much about the hotel business when you first started working at the front desk ten years ago? B: Henry Lee, our old general manager, was my {{BLANK}}, and he spent many evenings giving me advice about managing staff, so I asked him to write the letter for my new job.",
    "cn": "A：十年前你剛開始在櫃檯工作時，是誰教了你這麼多關於飯店業的事？ B：我們以前的總經理李亨利是我的【導師】，他花了很多個晚上給我管理員工方面的建議，所以我請他幫我的新工作寫這封信。"
  },
  {
    "word": "evaluation",
    "pos": "n.",
    "cn_def": "評估；評價",
    "en_def": "a judgment about how good or useful someone or something is",
    "sentence": "A: Before you write the letter for Kevin, do you have any written records about how well he did his job last year? B: Yes, I have his annual {{BLANK}} from December, which shows that he got the highest scores in customer service and teamwork in the whole department.",
    "cn": "A：在你幫凱文寫信之前，你有任何關於他去年工作表現的書面紀錄嗎？ B：有，我有他十二月的年度【評估】，上面顯示他在客戶服務和團隊合作方面得到全部門最高的分數。"
  },
  {
    "word": "recommendation letter",
    "pos": "n.phr.",
    "cn_def": "推薦信",
    "en_def": "a letter in which someone says good things about a person applying for a job or school",
    "sentence": "A: The university in Canada says my application is not complete yet, and I need to send one more document before Friday. B: You probably still need a {{BLANK}} from a professor or manager who knows you well, so call your old boss today and explain the deadline.",
    "cn": "A：加拿大的大學說我的申請還不完整，我需要在星期五前再寄一份文件。 B：你可能還需要一封由很了解你的教授或主管寫的【推薦信】，所以今天就打電話給你以前的老闆，向他說明截止日期。"
  },
  {
    "word": "work ethic",
    "pos": "n.phr.",
    "cn_def": "職業道德；工作態度",
    "en_def": "a belief in the value of hard work and doing your job well",
    "sentence": "A: The employer said they care more about how hard a person works than about how many years of experience they have. B: Then you should highlight Sam's strong {{BLANK}}, because he never missed a day in four years and always finished his tasks before going home.",
    "cn": "A：雇主說比起一個人有多少年的經驗，他們更在乎這個人工作有多努力。 B：那你應該強調山姆良好的【職業道德】，因為他四年來從未缺勤一天，而且總是把任務完成才回家。"
  },
  {
    "word": "problem-solving",
    "pos": "n.",
    "cn_def": "解決問題（的能力）",
    "en_def": "the process of finding ways to deal with difficulties",
    "sentence": "A: The engineering company asked whether Alice can find answers quickly when something goes wrong with a machine on the production line. B: Yes, her {{BLANK}} skills are excellent, and last month she fixed a broken machine in two hours, which kept the factory from losing a whole day of production.",
    "cn": "A：工程公司問愛麗絲在生產線上的機器出問題時，是否能迅速找出解決方法。 B：是的，她【解決問題】的能力非常好，上個月她在兩小時內修好一台故障的機器，讓工廠免於損失一整天的產量。"
  },
  {
    "word": "team player",
    "pos": "n.phr.",
    "cn_def": "有團隊精神的人",
    "en_def": "a person who works well with others in a group",
    "sentence": "A: Our new department works on group projects all the time, so we need someone who shares ideas and helps others. B: Then you will like Jake, because he is a real {{BLANK}} who often stays late to help his coworkers and always gives credit to everyone in the group.",
    "cn": "A：我們新部門一直都在做團體專案，所以需要一個願意分享想法、幫助別人的人。 B：那你會喜歡傑克，因為他是個真正【有團隊精神的人】，常常留下來幫同事，而且總是把功勞歸給小組裡的每個人。"
  }
];

const MCQS = [
  {
    "q": "Please list two former employers on the application form. We may contact them to ask for a _____ before we make a final offer.",
    "options": [
      "reference",
      "attitude",
      "strength",
      "character"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Several well-known chefs agreed to _____ the new kitchen knives. Their names will appear on all the advertisements next month.",
    "options": [
      "apply",
      "attend",
      "endorse",
      "resign"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Fluency in Spanish is the main _____ for this sales position. Applicants without it will not be invited to an interview.",
    "options": [
      "contribution",
      "qualification",
      "collaboration",
      "evaluation"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "The new accountant is highly _____ and rarely needs help with the monthly reports. She learned our system in only two days.",
    "options": [
      "punctual",
      "enthusiastic",
      "cooperative",
      "competent"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Our nurses are _____ to providing the best care for every patient. Many of them work extra hours during the flu season.",
    "options": [
      "punctual",
      "skillful",
      "dedicated",
      "capable"
    ],
    "answer": 2,
    "vocabIndex": 5
  },
  {
    "q": "As the shift leader, Mark is _____ for locking the warehouse every evening. He also checks that all the lights are turned off.",
    "options": [
      "responsible",
      "reliable",
      "efficient",
      "creative"
    ],
    "answer": 0,
    "vocabIndex": 7
  },
  {
    "q": "We need a _____ supplier who can deliver fresh vegetables every morning. Our last supplier was often two or three hours late.",
    "options": [
      "creative",
      "enthusiastic",
      "skillful",
      "reliable"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "Nobody asked Laura to update the customer list. She did it on her own _____, and the sales team was very grateful.",
    "options": [
      "leadership",
      "initiative",
      "attitude",
      "strength"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Under Tom's _____, the small branch became the company's most profitable office. He guided his team through a very difficult year.",
    "options": [
      "leadership",
      "evaluation",
      "qualification",
      "reference"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "The marketing team needs _____ ideas for the spring campaign. The manager wants something original that customers have never seen before.",
    "options": [
      "punctual",
      "responsible",
      "creative",
      "reliable"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "The new printer is fast and _____, so it uses less paper and power. Our office costs have already dropped this month.",
    "options": [
      "punctual",
      "efficient",
      "enthusiastic",
      "cooperative"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Please be _____ for tomorrow's board meeting. The chairman will close the door at exactly nine o'clock.",
    "options": [
      "creative",
      "skillful",
      "adaptable",
      "punctual"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "The staff were _____ about the new flexible working hours. Many of them thanked the manager in person at the meeting.",
    "options": [
      "capable",
      "responsible",
      "enthusiastic",
      "punctual"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Our new software engineer is _____ of handling several projects at once. She managed three websites at her previous job.",
    "options": [
      "capable",
      "efficient",
      "competent",
      "punctual"
    ],
    "answer": 0,
    "vocabIndex": 18
  },
  {
    "q": "Workers at our overseas branches must be _____ to new cultures and ways of working. Some of them move to a new country every year.",
    "options": [
      "punctual",
      "capable",
      "skillful",
      "adaptable"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Each _____ must submit a résumé and two letters by Friday. Late forms will not be accepted by the personnel office.",
    "options": [
      "mentor",
      "applicant",
      "supervisor",
      "strength"
    ],
    "answer": 1,
    "vocabIndex": 22
  },
  {
    "q": "Mark is a strong _____ for promotion this year. His manager has already recommended him to the board.",
    "options": [
      "candidate",
      "mentor",
      "character",
      "evaluation"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "Employees with excellent job _____ will receive a bonus in December. Managers will review each worker's results next week.",
    "options": [
      "character",
      "integrity",
      "performance",
      "mentor"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Winning the national design award was a great _____ for our small company. The whole team celebrated with a dinner.",
    "options": [
      "attitude",
      "achievement",
      "reference",
      "supervisor"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Patience is Amy's greatest _____ as a teacher. She never gets angry, even when students make the same mistake again.",
    "options": [
      "applicant",
      "mentor",
      "evaluation",
      "strength"
    ],
    "answer": 3,
    "vocabIndex": 26
  },
  {
    "q": "The bank values honesty above everything else. All staff must act with _____ when they handle customers' money.",
    "options": [
      "achievement",
      "qualification",
      "integrity",
      "applicant"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Ben has a positive _____ toward criticism. He listens carefully and then works hard to improve his reports.",
    "options": [
      "attitude",
      "reference",
      "candidate",
      "achievement"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Thank you for your generous _____ to the hospital fund. Your donation will help us buy new equipment for children.",
    "options": [
      "collaboration",
      "evaluation",
      "qualification",
      "contribution"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "The new phone was designed in _____ with a famous Italian company. Both teams worked together for over two years.",
    "options": [
      "contribution",
      "collaboration",
      "evaluation",
      "achievement"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "If you need a day off, please tell your _____ at least one week in advance. She will update the work schedule.",
    "options": [
      "supervisor",
      "applicant",
      "candidate",
      "reference"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "Every new employee is given a _____ during the first six months. This experienced coworker answers questions and gives helpful advice.",
    "options": [
      "candidate",
      "applicant",
      "mentor",
      "character"
    ],
    "answer": 2,
    "vocabIndex": 33
  },
  {
    "q": "The consultant will complete an _____ of our training program next month. She will then suggest ways to improve it.",
    "options": [
      "achievement",
      "evaluation",
      "attitude",
      "applicant"
    ],
    "answer": 1,
    "vocabIndex": 34
  },
  {
    "q": "Professor Chen agreed to write a _____ for my graduate school application. She has known me since my first year of college.",
    "options": [
      "team player",
      "work ethic",
      "problem-solving",
      "recommendation letter"
    ],
    "answer": 3,
    "vocabIndex": 35
  },
  {
    "q": "Our employees are known for their strong _____. They rarely take days off and always finish projects before the deadline.",
    "options": [
      "team player",
      "recommendation letter",
      "work ethic",
      "candidate"
    ],
    "answer": 2,
    "vocabIndex": 36
  },
  {
    "q": "Nick is a true _____ who always shares information with his coworkers. Everyone enjoys working with him on group projects.",
    "options": [
      "team player",
      "work ethic",
      "recommendation letter",
      "applicant"
    ],
    "answer": 0,
    "vocabIndex": 38
  }
];

const LOOKUP = {
  "reference": {
    "pos": "n.",
    "en_def": "a statement about someone's character and ability, written by someone who knows them",
    "cn_def": "推薦函；介紹信；證明人"
  },
  "endorse": {
    "pos": "v.",
    "en_def": "to say publicly that you support or approve of someone or something",
    "cn_def": "背書；支持；認可"
  },
  "endorsement": {
    "pos": "n.",
    "en_def": "a statement that you support or approve of someone",
    "cn_def": "認可；支持；背書"
  },
  "qualification": {
    "pos": "n.",
    "en_def": "a skill, degree, or experience that makes you suitable for a job",
    "cn_def": "資格；學歷；資歷"
  },
  "competent": {
    "pos": "adj.",
    "en_def": "having enough skill or knowledge to do something well",
    "cn_def": "能幹的；稱職的"
  },
  "dedicated": {
    "pos": "adj.",
    "en_def": "working very hard because you care a lot about something",
    "cn_def": "盡心盡力的；專注的"
  },
  "hardworking": {
    "pos": "adj.",
    "en_def": "putting a lot of effort into your work",
    "cn_def": "勤奮的；努力的"
  },
  "responsible": {
    "pos": "adj.",
    "en_def": "able to be trusted to do the right thing and take care of duties",
    "cn_def": "負責任的；可靠的"
  },
  "reliable": {
    "pos": "adj.",
    "en_def": "able to be trusted to do what is expected",
    "cn_def": "可靠的；可信賴的"
  },
  "professional": {
    "pos": "adj.",
    "en_def": "showing the skills and behavior expected of someone at work",
    "cn_def": "專業的"
  },
  "initiative": {
    "pos": "n.",
    "en_def": "the ability to act and make decisions without being told what to do",
    "cn_def": "主動性；進取心"
  },
  "leadership": {
    "pos": "n.",
    "en_def": "the ability to guide and manage a group of people",
    "cn_def": "領導能力；領導"
  },
  "cooperative": {
    "pos": "adj.",
    "en_def": "willing to help and work well with other people",
    "cn_def": "合作的；樂於配合的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at thinking of new and original ideas",
    "cn_def": "有創意的"
  },
  "efficient": {
    "pos": "adj.",
    "en_def": "working well without wasting time or money",
    "cn_def": "有效率的"
  },
  "punctual": {
    "pos": "adj.",
    "en_def": "arriving or doing something at the expected time; not late",
    "cn_def": "準時的"
  },
  "enthusiastic": {
    "pos": "adj.",
    "en_def": "showing a lot of interest and excitement",
    "cn_def": "熱情的；熱衷的"
  },
  "motivated": {
    "pos": "adj.",
    "en_def": "wanting very much to do something or to succeed",
    "cn_def": "積極的；有動力的"
  },
  "capable": {
    "pos": "adj.",
    "en_def": "having the skill or ability to do something",
    "cn_def": "有能力的；能幹的"
  },
  "skillful": {
    "pos": "adj.",
    "en_def": "very good at doing something that needs special ability",
    "cn_def": "熟練的；有技巧的"
  },
  "adaptable": {
    "pos": "adj.",
    "en_def": "able to change easily to fit new situations",
    "cn_def": "適應力強的"
  },
  "support": {
    "pos": "v.",
    "en_def": "to help or encourage someone",
    "cn_def": "支持；幫助"
  },
  "applicant": {
    "pos": "n.",
    "en_def": "a person who formally asks for a job, a place at school, etc.",
    "cn_def": "申請人；應徵者"
  },
  "candidate": {
    "pos": "n.",
    "en_def": "a person who is being considered for a job",
    "cn_def": "候選人；應試者"
  },
  "performance": {
    "pos": "n.",
    "en_def": "how well someone does their work",
    "cn_def": "表現；績效"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you succeed in doing after effort",
    "cn_def": "成就；成績"
  },
  "strength": {
    "pos": "n.",
    "en_def": "a good quality or ability that someone has",
    "cn_def": "優點；長處"
  },
  "character": {
    "pos": "n.",
    "en_def": "the qualities that make a person who they are, especially moral ones",
    "cn_def": "品格；性格"
  },
  "integrity": {
    "pos": "n.",
    "en_def": "the quality of being honest and having strong moral principles",
    "cn_def": "正直；誠信"
  },
  "attitude": {
    "pos": "n.",
    "en_def": "the way you think and feel about something, shown in how you act",
    "cn_def": "態度"
  },
  "contribution": {
    "pos": "n.",
    "en_def": "something you do or give to help make something successful",
    "cn_def": "貢獻"
  },
  "collaboration": {
    "pos": "n.",
    "en_def": "the act of working together with others to do something",
    "cn_def": "合作；協作"
  },
  "supervisor": {
    "pos": "n.",
    "en_def": "a person who is in charge of a group of workers",
    "cn_def": "主管；上司"
  },
  "mentor": {
    "pos": "n.",
    "en_def": "an experienced person who advises and helps a less experienced person",
    "cn_def": "導師；指導者"
  },
  "evaluation": {
    "pos": "n.",
    "en_def": "a judgment about how good or useful someone or something is",
    "cn_def": "評估；評價"
  },
  "recommendation letter": {
    "pos": "n.phr.",
    "en_def": "a letter in which someone says good things about a person applying for a job or school",
    "cn_def": "推薦信"
  },
  "work ethic": {
    "pos": "n.phr.",
    "en_def": "a belief in the value of hard work and doing your job well",
    "cn_def": "職業道德；工作態度"
  },
  "problem-solving": {
    "pos": "n.",
    "en_def": "the process of finding ways to deal with difficulties",
    "cn_def": "解決問題（的能力）"
  },
  "team player": {
    "pos": "n.phr.",
    "en_def": "a person who works well with others in a group",
    "cn_def": "有團隊精神的人"
  }
};

const EXTRA_GLOSSES = {};
