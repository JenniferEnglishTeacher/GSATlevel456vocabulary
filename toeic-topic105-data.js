// Topic 105 Quiz Data: Difficult 困難
// Source word list: https://www.examword.com/group-topic/difficult — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T105 - Difficult 困難",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "hard",
    "pos": "adj.",
    "cn_def": "困難的；艱難的",
    "en_def": "not easy to do or understand",
    "sentence": "A: Why did so many of the new interns stay late at the office last night instead of going home at six o'clock as usual? B: The manager gave them a very {{BLANK}} test on the new accounting software, and most of them needed extra time to finish all the questions correctly.",
    "cn": "A：為什麼很多新來的實習生昨晚留在辦公室加班，而不是像平常一樣六點回家？ B：經理給了他們一份關於新會計軟體、非常【困難】的測驗，大部分人都需要額外的時間才能把所有題目答對。"
  },
  {
    "word": "challenging",
    "pos": "adj.",
    "cn_def": "具挑戰性的",
    "en_def": "difficult in a way that tests your skills",
    "sentence": "A: Are you enjoying your new position in the marketing department, or do you miss working with the sales team on the second floor? B: I really like it, because the work is {{BLANK}} and I have to learn new skills every week, but I sometimes miss chatting with my old teammates at lunch.",
    "cn": "A：你喜歡行銷部的新職位嗎？還是你會想念和二樓業務團隊一起工作的日子？ B：我真的很喜歡，因為這份工作很【具挑戰性】，我每週都得學新技能，不過我有時候會想念午餐時和老同事聊天。"
  },
  {
    "word": "tough",
    "pos": "adj.",
    "cn_def": "棘手的；艱難的",
    "en_def": "difficult to deal with; needing a lot of effort",
    "sentence": "A: Has the board of directors decided whether to close the small branch in the north of the city, which has been losing money for years? B: Not yet, because it is a {{BLANK}} decision for them, since forty loyal employees work there and many local customers still depend on that branch.",
    "cn": "A：董事會決定是否要關閉市區北邊那家虧損多年的小分店了嗎？ B：還沒有，因為這對他們來說是個【艱難的】決定，那裡有四十名忠誠的員工，而且許多當地顧客仍然依賴那家分店。"
  },
  {
    "word": "demanding",
    "pos": "adj.",
    "cn_def": "要求高的；費力的",
    "en_def": "needing a lot of time, energy or attention",
    "sentence": "A: Why does Rachel look so tired these days, and is she still working on the big hotel project for our client in Singapore? B: Yes, she is, and the client is very {{BLANK}}, so she has to answer emails late at night and change the designs again and again until they are satisfied.",
    "cn": "A：瑞秋最近為什麼看起來這麼累？她還在負責新加坡客戶的那個大型飯店案子嗎？ B：是的，而且那位客戶非常【要求高】，所以她得在深夜回覆電子郵件，還要一再修改設計直到他們滿意為止。"
  },
  {
    "word": "complicated",
    "pos": "adj.",
    "cn_def": "複雜的",
    "en_def": "having many parts, so it is hard to understand",
    "sentence": "A: Could you help me fill out this travel expense form, because I have tried three times and the finance office keeps sending it back to me? B: Of course, the form is quite {{BLANK}} with all those boxes and codes, so let's sit down together after lunch and check each section one by one.",
    "cn": "A：你可以幫我填這張差旅費報銷單嗎？我已經填了三次，財務室一直退回給我。 B：當然可以，這張表格有那麼多欄位和代碼，相當【複雜】，我們午餐後一起坐下來，一個部分一個部分檢查吧。"
  },
  {
    "word": "complex",
    "pos": "adj.",
    "cn_def": "複雜的；錯綜的",
    "en_def": "made of many connected parts",
    "sentence": "A: Why is the new computer system taking so long to install in our head office, when the technicians promised it would be ready last Friday? B: The system is very {{BLANK}}, because it connects our sales, payroll and warehouse records, so the technicians must test every link carefully before we can use it.",
    "cn": "A：新的電腦系統為什麼在總部安裝這麼久？技術人員明明保證上週五就會好。 B：這套系統非常【複雜】，因為它串連了我們的銷售、薪資和倉庫紀錄，所以技術人員必須仔細測試每一個連結，我們才能使用。"
  },
  {
    "word": "tricky",
    "pos": "adj.",
    "cn_def": "棘手的；需要技巧的",
    "en_def": "difficult and needing care or skill",
    "sentence": "A: Do you think I should tell our biggest customer about the delay in person, or would it be better to send a short email this afternoon? B: It's a {{BLANK}} situation, so I think you should call her first and explain the reason politely, and then send an email with the new delivery date.",
    "cn": "A：你覺得我該親自告訴我們最大的客戶延誤的事，還是今天下午寄一封簡短的電子郵件比較好？ B：這是個【棘手的】情況，所以我認為你應該先打電話給她，禮貌地說明原因，然後再寄一封寫明新交貨日期的電子郵件。"
  },
  {
    "word": "problematic",
    "pos": "adj.",
    "cn_def": "有問題的；難處理的",
    "en_def": "causing problems; hard to deal with",
    "sentence": "A: Why did the company stop using the cheap printers that the purchasing team bought from the new supplier last spring? B: They turned out to be {{BLANK}}, because the paper got stuck almost every day, and the repair costs were much higher than the money we saved when we first bought them.",
    "cn": "A：公司為什麼不再使用採購部去年春天向新供應商買的那些便宜印表機？ B：結果那些印表機很【有問題】，幾乎每天都卡紙，而且維修費比我們當初購買時省下的錢高得多。"
  },
  {
    "word": "burdensome",
    "pos": "adj.",
    "cn_def": "繁重的；累贅的",
    "en_def": "causing worry or hard work, like a heavy load",
    "sentence": "A: Why do small shop owners in this area want the city government to make the new tax forms simpler and shorter? B: They say the paperwork is too {{BLANK}}, because it takes them several hours every month, and they would rather spend that time serving customers and running their businesses.",
    "cn": "A：為什麼這一區的小商家希望市政府把新的稅務表格改得更簡單、更簡短？ B：他們說這些文書工作太【繁重】了，每個月要花好幾個小時，他們寧願把那些時間拿來服務顧客、經營生意。"
  },
  {
    "word": "arduous",
    "pos": "adj.",
    "cn_def": "艱鉅的；費力的",
    "en_def": "needing a lot of effort and energy over a long time",
    "sentence": "A: How was the trip to the new factory in the mountains, and did the engineers manage to check all the machines before the weekend? B: It was an {{BLANK}} journey, because the road was narrow and muddy after the heavy rain, but the engineers finally arrived and finished their inspection on Saturday morning.",
    "cn": "A：去山區新工廠的行程如何？工程師們有在週末前檢查完所有機器嗎？ B：那是一段【艱辛的】旅程，因為大雨過後道路又窄又泥濘，不過工程師們最後還是抵達了，並在星期六早上完成了檢查。"
  },
  {
    "word": "laborious",
    "pos": "adj.",
    "cn_def": "費力的；費時的",
    "en_def": "taking a lot of time and slow, careful work",
    "sentence": "A: Why are we buying a scanner for the archive room when the old files have been kept in boxes for more than twenty years? B: Typing every old contract into the computer by hand is a {{BLANK}} task, so the scanner will save the staff many hours and reduce the number of mistakes.",
    "cn": "A：舊檔案已經放在箱子裡二十多年了，為什麼我們還要為檔案室買一台掃描器？ B：把每一份舊合約用手打進電腦是件很【費時費力的】工作，所以掃描器能幫員工省下許多時間，也能減少錯誤。"
  },
  {
    "word": "strenuous",
    "pos": "adj.",
    "cn_def": "費力的；激烈的（體力）",
    "en_def": "needing a lot of physical effort",
    "sentence": "A: Will Mr. Lee join the team-building hike up the mountain next Saturday, or is he still recovering from his knee operation? B: His doctor told him to avoid {{BLANK}} exercise for at least two more months, so he will meet us at the restaurant for dinner after the hike instead.",
    "cn": "A：李先生下週六會參加登山的團隊建立活動嗎？還是他的膝蓋手術還在恢復中？ B：他的醫生要他至少再兩個月避免【激烈的】運動，所以他會改在健行結束後到餐廳和我們一起吃晚餐。"
  },
  {
    "word": "formidable",
    "pos": "adj.",
    "cn_def": "強大的；令人敬畏的",
    "en_def": "powerful and difficult to defeat or deal with",
    "sentence": "A: Why is our sales director so worried about the new electronics store that will open across the street next month? B: That company is a {{BLANK}} competitor, because it has lower prices, a famous brand and a huge advertising budget, so we need a strong plan to keep our regular customers.",
    "cn": "A：為什麼我們的業務總監這麼擔心下個月要在對街開幕的那家新電子商店？ B：那家公司是個【強大的】競爭對手，價格比較低、品牌有名，而且廣告預算龐大，所以我們需要一個有力的計畫來留住老顧客。"
  },
  {
    "word": "daunting",
    "pos": "adj.",
    "cn_def": "令人卻步的；令人畏懼的",
    "en_def": "making you feel nervous or less confident",
    "sentence": "A: How do you feel about leading the training session for two hundred new employees at the annual conference next month? B: To be honest, it seems a bit {{BLANK}}, because I have never spoken in front of such a large crowd, but my manager will help me practice my presentation every afternoon this week.",
    "cn": "A：下個月要在年度大會上帶領兩百名新進員工的訓練課程，你感覺如何？ B：老實說，這看起來有點【令人卻步】，因為我從來沒有在這麼多人面前說過話，不過我的經理這週每天下午都會幫我練習簡報。"
  },
  {
    "word": "gruelling",
    "pos": "adj.",
    "cn_def": "累垮人的；極度辛苦的",
    "en_def": "very tiring and difficult for a long time",
    "sentence": "A: Why are the nurses at the city hospital asking the managers to hire more staff and change the work schedule this winter? B: They often work {{BLANK}} twelve-hour shifts without a proper break, and many of them feel too exhausted to take good care of their patients by the end of the night.",
    "cn": "A：今年冬天，市立醫院的護理師為什麼要求主管多聘人手並調整班表？ B：她們常常得上【累垮人的】十二小時班，中間沒有像樣的休息，很多人到了深夜都累到無法好好照顧病人。"
  },
  {
    "word": "cumbersome",
    "pos": "adj.",
    "cn_def": "笨重的；麻煩的",
    "en_def": "large, heavy and difficult to carry or use",
    "sentence": "A: Why did the sales team ask for lighter laptops when the old ones still work perfectly well for writing reports? B: The old laptops are big and {{BLANK}}, so carrying them to meetings with clients all over the city every day makes everyone's shoulders sore and tired.",
    "cn": "A：舊筆電寫報告明明還很好用，業務團隊為什麼要求換比較輕的筆電？ B：舊筆電又大又【笨重】，每天帶著它們到城市各處和客戶開會，大家的肩膀都又痠又累。"
  },
  {
    "word": "awkward",
    "pos": "adj.",
    "cn_def": "尷尬的；令人不自在的",
    "en_def": "making people feel uncomfortable or embarrassed",
    "sentence": "A: What happened at the meeting this morning, and why did everyone leave the room so quietly when it was over? B: The manager accidentally showed a slide with the wrong sales figures in front of the client, and there was an {{BLANK}} silence for a few seconds before he apologized and corrected it.",
    "cn": "A：今天早上的會議發生了什麼事？為什麼會議結束時大家都那麼安靜地離開房間？ B：經理不小心在客戶面前放了一張銷售數字錯誤的投影片，在他道歉並更正之前，現場出現了幾秒鐘【尷尬的】沉默。"
  },
  {
    "word": "thorny",
    "pos": "adj.",
    "cn_def": "棘手的；麻煩的",
    "en_def": "difficult and likely to cause arguments",
    "sentence": "A: Are the managers going to talk about pay raises at the staff meeting on Friday, or will they discuss it later in private? B: Salary is a {{BLANK}} issue in this company, so they plan to meet each employee in private next month, because they don't want an argument during the general meeting.",
    "cn": "A：經理們會在星期五的員工會議上談加薪的事嗎？還是之後私下再討論？ B：薪資在這家公司是個【棘手的】問題，所以他們打算下個月私下和每位員工面談，因為他們不希望在全體會議上起爭執。"
  },
  {
    "word": "onerous",
    "pos": "adj.",
    "cn_def": "繁重的；費力的",
    "en_def": "involving a lot of work or responsibility that is hard to bear",
    "sentence": "A: Why did the assistant manager decide to step down from the safety committee after only three months in the role? B: The extra duties became too {{BLANK}} for her, because she had to write weekly reports and inspect every floor while still managing her own team of fifteen people.",
    "cn": "A：副理為什麼才在安全委員會待了三個月就決定卸下職務？ B：額外的職責對她來說變得太【繁重】了，因為她得寫每週報告、檢查每一層樓，同時還要管理自己十五個人的團隊。"
  },
  {
    "word": "inconvenient",
    "pos": "adj.",
    "cn_def": "不方便的",
    "en_def": "causing problems or extra effort, especially about time or place",
    "sentence": "A: Could we move the video call with the suppliers in Germany to eight o'clock tomorrow morning, since I have a dentist appointment at nine? B: I'm afraid that would be an {{BLANK}} time for them, because it would be one o'clock in the morning there, so let's ask about the afternoon instead.",
    "cn": "A：因為我九點要看牙醫，可以把和德國供應商的視訊會議改到明天早上八點嗎？ B：恐怕那對他們來說是個【不方便的】時間，因為那邊是凌晨一點，所以我們改問看看下午可不可以吧。"
  },
  {
    "word": "exacting",
    "pos": "adj.",
    "cn_def": "嚴格的；要求極高的",
    "en_def": "expecting a very high level of care and accuracy",
    "sentence": "A: Why does every watch from this factory pass through five separate checks before it is packed and sent to the stores? B: The company has very {{BLANK}} standards, so even a tiny scratch on the glass means the watch must be repaired before any customer can buy it.",
    "cn": "A：為什麼這家工廠的每支手錶在包裝送到店面前，都要經過五道不同的檢查？ B：這家公司的標準非常【嚴格】，所以即使玻璃上只有一道小刮痕，那支手錶也必須先修好，才能賣給任何顧客。"
  },
  {
    "word": "intimidating",
    "pos": "adj.",
    "cn_def": "令人膽怯的；嚇人的",
    "en_def": "making you feel nervous or a little afraid",
    "sentence": "A: How was your job interview at the law firm downtown, and do you think you will get a second interview next week? B: The three partners asked very serious questions and hardly smiled, so the atmosphere was quite {{BLANK}}, but I stayed calm and answered everything as clearly as I could.",
    "cn": "A：你在市中心那家律師事務所的面試如何？你覺得下週會有第二次面試嗎？ B：三位合夥人問的問題都很嚴肅，幾乎沒有笑容，所以氣氛相當【令人緊張害怕】，不過我保持冷靜，盡可能清楚地回答了每一個問題。"
  },
  {
    "word": "obstacle",
    "pos": "n.",
    "cn_def": "障礙；阻礙",
    "en_def": "something that stops you or makes progress difficult",
    "sentence": "A: Why hasn't the company opened its new branch in Tokyo yet, when the plan was announced at the shareholders' meeting two years ago? B: The biggest {{BLANK}} has been finding enough staff who speak both English and Japanese, so the human resources team is now running language classes for current employees.",
    "cn": "A：公司兩年前就在股東大會上宣布了計畫，為什麼到現在還沒在東京開設新分公司？ B：最大的【障礙】一直是找不到足夠會說英語和日語的員工，所以人資團隊現在正為現有員工開設語言課程。"
  },
  {
    "word": "barrier",
    "pos": "n.",
    "cn_def": "障礙；隔閡",
    "en_def": "a problem that stops people from doing something or communicating",
    "sentence": "A: Why did the hotel hire two new receptionists who can speak Korean and Thai, even though most of our guests understand some English? B: The manager noticed that the language {{BLANK}} was causing many problems at the front desk, so guests were often confused about check-out times and room charges.",
    "cn": "A：雖然大部分客人都懂一點英文，為什麼飯店還是聘了兩位會說韓語和泰語的新櫃檯人員？ B：經理注意到語言【隔閡】在櫃檯造成了很多問題，客人常常搞不清楚退房時間和房間費用。"
  },
  {
    "word": "hurdle",
    "pos": "n.",
    "cn_def": "難關；障礙",
    "en_def": "a problem you must deal with before you can make progress",
    "sentence": "A: Has the government approved the plan for our new shopping mall near the train station, or are we still waiting for more documents? B: We passed the safety inspection last week, which was the final {{BLANK}}, so the builders can start working on the site as soon as the weather improves next month.",
    "cn": "A：政府核准我們在火車站附近蓋新購物中心的計畫了嗎？還是我們還在等更多文件？ B：我們上週通過了安全檢查，那是最後一道【難關】，所以下個月天氣一好轉，營造商就能開始在工地施工。"
  },
  {
    "word": "complication",
    "pos": "n.",
    "cn_def": "併發症；使情況更複雜的因素",
    "en_def": "a new problem that makes a situation more difficult",
    "sentence": "A: How is your father doing after his heart operation, and when do you think you can come back to the office full-time? B: The doctors say the operation went well, but they want to keep him in the hospital for a few more days in case there is any {{BLANK}}, so I will return next Monday.",
    "cn": "A：你父親心臟手術後還好嗎？你覺得你什麼時候能回辦公室全職上班？ B：醫生說手術很順利，不過他們想讓他再住院幾天，以防出現任何【併發症】，所以我下星期一會回去上班。"
  },
  {
    "word": "predicament",
    "pos": "n.",
    "cn_def": "困境；窘境",
    "en_def": "a difficult or unpleasant situation that is hard to get out of",
    "sentence": "A: Why was Mark so late for the sales conference in Osaka, and did he miss his own presentation in the afternoon? B: He was in a real {{BLANK}} after he lost his passport at the airport, but the embassy helped him quickly, and he arrived just ten minutes before his presentation started.",
    "cn": "A：馬克為什麼參加大阪的業務研討會遲到這麼久？他有錯過自己下午的簡報嗎？ B：他在機場弄丟護照後陷入了真正的【困境】，不過大使館很快就幫了他，他在簡報開始前十分鐘才趕到。"
  },
  {
    "word": "dilemma",
    "pos": "n.",
    "cn_def": "兩難；進退兩難",
    "en_def": "a situation in which you must choose between two difficult options",
    "sentence": "A: Has the owner of the restaurant decided what to do now that the price of meat and vegetables has gone up so much? B: She faces a {{BLANK}}, because she can either raise the menu prices and lose some customers, or keep the prices the same and earn almost no profit this year.",
    "cn": "A：肉類和蔬菜價格漲了這麼多，餐廳老闆決定好該怎麼做了嗎？ B：她面臨【兩難】，因為她可以調高菜單價格但會流失一些顧客，或者維持原價但今年幾乎賺不到利潤。"
  },
  {
    "word": "adversity",
    "pos": "n.",
    "cn_def": "逆境；困境",
    "en_def": "a very difficult or unlucky situation",
    "sentence": "A: Why do so many employees respect the founder of our company, even though she is very strict about deadlines? B: She kept the business running during the economic crisis without firing anyone, and she always stayed calm and positive in the face of {{BLANK}}, which encouraged everyone to work harder.",
    "cn": "A：雖然我們公司的創辦人對截止期限非常嚴格，為什麼還是有這麼多員工尊敬她？ B：她在經濟危機期間沒有解雇任何人，讓公司持續運作，而且面對【逆境】時她總是保持冷靜和積極，這鼓勵了大家更努力工作。"
  },
  {
    "word": "hardship",
    "pos": "n.",
    "cn_def": "艱難；困苦",
    "en_def": "a situation in which life is very difficult, often because of a lack of money",
    "sentence": "A: Why did the factory owners decide to give every worker a small bonus this month, even though sales have been slow all year? B: They knew that many families were suffering financial {{BLANK}} after the typhoon damaged their homes, so they wanted to help them pay for repairs and food.",
    "cn": "A：雖然今年整年銷售都很慢，為什麼工廠老闆還是決定這個月給每位工人一小筆獎金？ B：他們知道很多家庭在颱風損壞房屋後面臨經濟上的【困苦】，所以想幫他們支付修繕和食物的費用。"
  },
  {
    "word": "trial",
    "pos": "n.",
    "cn_def": "考驗；磨難",
    "en_def": "a difficult experience that tests your patience or strength",
    "sentence": "A: How was your first year running the small coffee shop near the university, and are you planning to open a second one soon? B: It was a real {{BLANK}} of my patience, because I had money problems and staff kept quitting, but now business is steady and I'm thinking about a second shop.",
    "cn": "A：你在大學附近經營小咖啡店的第一年過得如何？你打算很快開第二家店嗎？ B：那真的是對我耐心的一大【考驗】，因為我遇到資金問題，員工又一直離職，不過現在生意穩定了，我正在考慮開第二家店。"
  },
  {
    "word": "ordeal",
    "pos": "n.",
    "cn_def": "痛苦的經歷；折磨",
    "en_def": "a very unpleasant and painful experience",
    "sentence": "A: Did the passengers on the flight from London finally arrive, after the plane was stuck on the runway in the snowstorm? B: Yes, they landed this morning after a twelve-hour {{BLANK}} without proper food or sleep, so the airline gave each of them a free hotel room and a meal voucher.",
    "cn": "A：從倫敦起飛的那班飛機在暴風雪中困在跑道上之後，乘客們終於抵達了嗎？ B：是的，他們今天早上降落，經歷了沒有像樣食物和睡眠的十二小時【折磨】，所以航空公司給每個人一間免費飯店房間和一張餐券。"
  },
  {
    "word": "frustrating",
    "pos": "adj.",
    "cn_def": "令人沮喪的；令人氣惱的",
    "en_def": "making you feel annoyed because you cannot do what you want",
    "sentence": "A: Why are you still at your desk at seven o'clock, when you told me you would leave early to watch the baseball game tonight? B: My computer froze three times while I was saving the monthly report, and I had to type everything again, which was really {{BLANK}}, so now I'm hurrying to finish it.",
    "cn": "A：你不是跟我說今晚要提早走去看棒球比賽嗎？為什麼七點了還坐在位子上？ B：我在存月報時電腦當機了三次，我得全部重打，真的很【令人沮喪】，所以我現在正趕著把它完成。"
  },
  {
    "word": "taxing",
    "pos": "adj.",
    "cn_def": "費力的；累人的",
    "en_def": "needing a lot of mental or physical effort",
    "sentence": "A: Why do you look so tired today, when you usually have so much energy after a normal day of work in the office? B: I spent the whole day checking a long contract word by word with our lawyers, and it was mentally {{BLANK}}, so I just want to go home and rest.",
    "cn": "A：你平常在辦公室工作一整天後還很有精神，為什麼今天看起來這麼累？ B：我整天都和律師們逐字檢查一份很長的合約，在腦力上非常【累人】，所以我只想回家休息。"
  },
  {
    "word": "impossible",
    "pos": "adj.",
    "cn_def": "不可能的",
    "en_def": "not able to happen or be done",
    "sentence": "A: Can your team finish translating all two hundred pages of the product manual by tomorrow morning, before the client's meeting? B: I'm sorry, but that is {{BLANK}} with only three translators, so could you ask the client to accept the first fifty pages tomorrow and the rest by Friday?",
    "cn": "A：你的團隊能在明天早上客戶開會前，把整本兩百頁的產品手冊翻譯完嗎？ B：很抱歉，只有三位譯者的話那是【不可能的】，所以你能不能請客戶接受明天先交前五十頁，其餘的星期五前交？"
  }
];

const MCQS = [
  {
    "q": "The bread from that bakery was left out overnight. By morning it was too _____ to cut with a normal knife.",
    "options": [
      "demanding",
      "hard",
      "burdensome",
      "onerous"
    ],
    "answer": 1,
    "vocabIndex": 0
  },
  {
    "q": "Nursing can be a stressful career. However, most nurses describe it as a _____ but rewarding job that they truly love.",
    "options": [
      "challenging",
      "awkward",
      "inconvenient",
      "cumbersome"
    ],
    "answer": 0,
    "vocabIndex": 1
  },
  {
    "q": "Sales fell sharply for the third year in a row. The manager had to make the _____ decision to close two stores.",
    "options": [
      "laborious",
      "cumbersome",
      "strenuous",
      "tough"
    ],
    "answer": 3,
    "vocabIndex": 2
  },
  {
    "q": "Our new boss expects reports to be perfect and on time. He is very _____, but he is also fair to everyone.",
    "options": [
      "laborious",
      "cumbersome",
      "demanding",
      "inconvenient"
    ],
    "answer": 2,
    "vocabIndex": 3
  },
  {
    "q": "The assembly instructions were long and full of technical terms. They were so _____ that nobody could build the desk.",
    "options": [
      "strenuous",
      "gruelling",
      "inconvenient",
      "complicated"
    ],
    "answer": 3,
    "vocabIndex": 4
  },
  {
    "q": "Parking in the narrow lane behind the office is a bit _____. Please drive slowly and use your mirrors carefully.",
    "options": [
      "onerous",
      "arduous",
      "tricky",
      "formidable"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The new booking software has proved _____ for our staff. It crashes almost every afternoon and loses customer orders.",
    "options": [
      "strenuous",
      "problematic",
      "gruelling",
      "arduous"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The climbers reached the mountain hut after an _____ eight-hour journey. They were cold, hungry and completely exhausted.",
    "options": [
      "arduous",
      "exacting",
      "awkward",
      "onerous"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Before the new scanners arrived, staff entered every invoice by hand. It was a slow and _____ process that caused many errors.",
    "options": [
      "formidable",
      "intimidating",
      "awkward",
      "laborious"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Our sales manager is recovering from back surgery. Her doctor has told her to avoid _____ exercise for at least six weeks.",
    "options": [
      "thorny",
      "strenuous",
      "inconvenient",
      "problematic"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The new online bookstore offers free delivery and very low prices. It has become a _____ competitor for local shops.",
    "options": [
      "formidable",
      "laborious",
      "inconvenient",
      "cumbersome"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "The warehouse staff worked _____ fourteen-hour shifts during the holiday season. Many of them needed a week off afterwards.",
    "options": [
      "thorny",
      "complicated",
      "gruelling",
      "problematic"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "The old projector is large and _____. It takes two people to carry it from one meeting room to another.",
    "options": [
      "thorny",
      "exacting",
      "demanding",
      "cumbersome"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Nobody knew what to say after the CEO's surprising announcement. There was an _____ silence in the meeting room.",
    "options": [
      "exacting",
      "onerous",
      "awkward",
      "arduous"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Working from home is a _____ issue in our company. Managers and staff have argued about it for months.",
    "options": [
      "thorny",
      "strenuous",
      "laborious",
      "gruelling"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The new tax rules place an _____ burden on small businesses. Owners now spend many hours each month on paperwork.",
    "options": [
      "intimidating",
      "onerous",
      "awkward",
      "exacting"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "I'm sorry to call you so late in the evening. Is this an _____ time to talk about tomorrow's schedule?",
    "options": [
      "onerous",
      "arduous",
      "inconvenient",
      "exacting"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "The watchmaker trains his staff for three years. His _____ standards mean that every single part must be perfect.",
    "options": [
      "exacting",
      "inconvenient",
      "cumbersome",
      "awkward"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "The interviewer never smiled and asked very sharp questions. Many young applicants found him quite _____ during the interview.",
    "options": [
      "cumbersome",
      "intimidating",
      "laborious",
      "arduous"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Many hotel guests could not explain their problems at the front desk. The language _____ caused a lot of confusion.",
    "options": [
      "dilemma",
      "adversity",
      "ordeal",
      "barrier"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "The city council finally approved the building plan last week. That was the last _____ before construction could begin.",
    "options": [
      "hurdle",
      "adversity",
      "dilemma",
      "predicament"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The patient recovered quickly after the operation. Doctors watched him closely for any _____, but none appeared.",
    "options": [
      "dilemma",
      "complication",
      "hurdle",
      "adversity"
    ],
    "answer": 1,
    "vocabIndex": 25
  },
  {
    "q": "Tom lost his wallet and phone during a business trip abroad. He was in a difficult _____ until a colleague sent help.",
    "options": [
      "barrier",
      "obstacle",
      "predicament",
      "hurdle"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "The company faces a _____ this year. It must either cut staff or raise prices, and both choices are unpopular.",
    "options": [
      "hardship",
      "adversity",
      "ordeal",
      "dilemma"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "Our founder started the business during a deep recession. She showed great courage in the face of _____.",
    "options": [
      "obstacle",
      "hurdle",
      "adversity",
      "dilemma"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The first winter running the hotel tested everyone. It was a real _____ of the owners' patience and energy.",
    "options": [
      "trial",
      "barrier",
      "hurdle",
      "predicament"
    ],
    "answer": 0,
    "vocabIndex": 30
  },
  {
    "q": "The ferry passengers were stuck at sea for two days during the storm. Their _____ finally ended when rescue boats arrived.",
    "options": [
      "dilemma",
      "ordeal",
      "predicament",
      "barrier"
    ],
    "answer": 1,
    "vocabIndex": 31
  },
  {
    "q": "The website kept freezing while I was booking our flights. It was really _____ to start the whole process again.",
    "options": [
      "strenuous",
      "formidable",
      "arduous",
      "frustrating"
    ],
    "answer": 3,
    "vocabIndex": 32
  },
  {
    "q": "Checking long legal contracts all day is mentally _____ work. Our lawyers usually take a short break every hour.",
    "options": [
      "taxing",
      "thorny",
      "inconvenient",
      "awkward"
    ],
    "answer": 0,
    "vocabIndex": 33
  },
  {
    "q": "We have only two workers and five hundred boxes to pack. It is _____ to finish the order by noon today.",
    "options": [
      "cumbersome",
      "thorny",
      "awkward",
      "impossible"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "hard": {
    "pos": "adj.",
    "en_def": "not easy to do or understand",
    "cn_def": "困難的；艱難的"
  },
  "challenging": {
    "pos": "adj.",
    "en_def": "difficult in a way that tests your skills",
    "cn_def": "具挑戰性的"
  },
  "tough": {
    "pos": "adj.",
    "en_def": "difficult to deal with; needing a lot of effort",
    "cn_def": "棘手的；艱難的"
  },
  "demanding": {
    "pos": "adj.",
    "en_def": "needing a lot of time, energy or attention",
    "cn_def": "要求高的；費力的"
  },
  "complicated": {
    "pos": "adj.",
    "en_def": "having many parts, so it is hard to understand",
    "cn_def": "複雜的"
  },
  "complex": {
    "pos": "adj.",
    "en_def": "made of many connected parts",
    "cn_def": "複雜的；錯綜的"
  },
  "tricky": {
    "pos": "adj.",
    "en_def": "difficult and needing care or skill",
    "cn_def": "棘手的；需要技巧的"
  },
  "problematic": {
    "pos": "adj.",
    "en_def": "causing problems; hard to deal with",
    "cn_def": "有問題的；難處理的"
  },
  "burdensome": {
    "pos": "adj.",
    "en_def": "causing worry or hard work, like a heavy load",
    "cn_def": "繁重的；累贅的"
  },
  "arduous": {
    "pos": "adj.",
    "en_def": "needing a lot of effort and energy over a long time",
    "cn_def": "艱鉅的；費力的"
  },
  "laborious": {
    "pos": "adj.",
    "en_def": "taking a lot of time and slow, careful work",
    "cn_def": "費力的；費時的"
  },
  "strenuous": {
    "pos": "adj.",
    "en_def": "needing a lot of physical effort",
    "cn_def": "費力的；激烈的（體力）"
  },
  "formidable": {
    "pos": "adj.",
    "en_def": "powerful and difficult to defeat or deal with",
    "cn_def": "強大的；令人敬畏的"
  },
  "daunting": {
    "pos": "adj.",
    "en_def": "making you feel nervous or less confident",
    "cn_def": "令人卻步的；令人畏懼的"
  },
  "gruelling": {
    "pos": "adj.",
    "en_def": "very tiring and difficult for a long time",
    "cn_def": "累垮人的；極度辛苦的"
  },
  "cumbersome": {
    "pos": "adj.",
    "en_def": "large, heavy and difficult to carry or use",
    "cn_def": "笨重的；麻煩的"
  },
  "awkward": {
    "pos": "adj.",
    "en_def": "making people feel uncomfortable or embarrassed",
    "cn_def": "尷尬的；令人不自在的"
  },
  "thorny": {
    "pos": "adj.",
    "en_def": "difficult and likely to cause arguments",
    "cn_def": "棘手的；麻煩的"
  },
  "onerous": {
    "pos": "adj.",
    "en_def": "involving a lot of work or responsibility that is hard to bear",
    "cn_def": "繁重的；費力的"
  },
  "inconvenient": {
    "pos": "adj.",
    "en_def": "causing problems or extra effort, especially about time or place",
    "cn_def": "不方便的"
  },
  "exacting": {
    "pos": "adj.",
    "en_def": "expecting a very high level of care and accuracy",
    "cn_def": "嚴格的；要求極高的"
  },
  "intimidating": {
    "pos": "adj.",
    "en_def": "making you feel nervous or a little afraid",
    "cn_def": "令人膽怯的；嚇人的"
  },
  "obstacle": {
    "pos": "n.",
    "en_def": "something that stops you or makes progress difficult",
    "cn_def": "障礙；阻礙"
  },
  "barrier": {
    "pos": "n.",
    "en_def": "a problem that stops people from doing something or communicating",
    "cn_def": "障礙；隔閡"
  },
  "hurdle": {
    "pos": "n.",
    "en_def": "a problem you must deal with before you can make progress",
    "cn_def": "難關；障礙"
  },
  "complication": {
    "pos": "n.",
    "en_def": "a new problem that makes a situation more difficult",
    "cn_def": "併發症；使情況更複雜的因素"
  },
  "predicament": {
    "pos": "n.",
    "en_def": "a difficult or unpleasant situation that is hard to get out of",
    "cn_def": "困境；窘境"
  },
  "dilemma": {
    "pos": "n.",
    "en_def": "a situation in which you must choose between two difficult options",
    "cn_def": "兩難；進退兩難"
  },
  "adversity": {
    "pos": "n.",
    "en_def": "a very difficult or unlucky situation",
    "cn_def": "逆境；困境"
  },
  "hardship": {
    "pos": "n.",
    "en_def": "a situation in which life is very difficult, often because of a lack of money",
    "cn_def": "艱難；困苦"
  },
  "trial": {
    "pos": "n.",
    "en_def": "a difficult experience that tests your patience or strength",
    "cn_def": "考驗；磨難"
  },
  "ordeal": {
    "pos": "n.",
    "en_def": "a very unpleasant and painful experience",
    "cn_def": "痛苦的經歷；折磨"
  },
  "frustrating": {
    "pos": "adj.",
    "en_def": "making you feel annoyed because you cannot do what you want",
    "cn_def": "令人沮喪的；令人氣惱的"
  },
  "taxing": {
    "pos": "adj.",
    "en_def": "needing a lot of mental or physical effort",
    "cn_def": "費力的；累人的"
  },
  "impossible": {
    "pos": "adj.",
    "en_def": "not able to happen or be done",
    "cn_def": "不可能的"
  }
};

const EXTRA_GLOSSES = {};
