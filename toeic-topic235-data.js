// Topic 235 Quiz Data: Medical 醫療
// Source word list: https://www.examword.com/group-topic/medical — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T235 - Medical 醫療",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "medicine",
    "pos": "n.",
    "cn_def": "藥",
    "en_def": "a substance you take to cure an illness",
    "sentence": "A: I've had a bad cough since our business trip to Tainan, and it's getting worse at night, so what do you think I should do before tomorrow's client presentation? B: You should go to the pharmacy near the station and ask for some cough {{BLANK}}, then drink lots of warm water and try to get to bed early tonight.",
    "cn": "A：自從我們去台南出差後我就咳得很厲害，而且晚上越來越嚴重，你覺得我在明天的客戶簡報前該怎麼辦？ B：你應該去車站附近的藥局買些咳嗽【藥】，然後多喝溫水，今晚盡量早點睡。"
  },
  {
    "word": "doctor",
    "pos": "n.",
    "cn_def": "醫生",
    "en_def": "a person whose job is to treat sick people",
    "sentence": "A: My son has had a high fever since yesterday afternoon, and I'm worried because the children's clinic near our office is closed on Sundays, so where can we go? B: The hospital on Zhongshan Road has a {{BLANK}} on duty all weekend, so you can take him there right away without making an appointment first.",
    "cn": "A：我兒子從昨天下午就一直發高燒，我很擔心，因為我們公司附近的兒科診所週日休診，我們可以去哪裡？ B：中山路上的那家醫院整個週末都有【醫生】值班，所以你可以馬上帶他過去，不用先預約。"
  },
  {
    "word": "nurse",
    "pos": "n.",
    "cn_def": "護理師；護士",
    "en_def": "a person trained to care for sick people, often in a hospital",
    "sentence": "A: When I arrived at the clinic for my health check this morning, I didn't know where to go or which forms I needed to fill out, so who helped you last time? B: A friendly {{BLANK}} at the front desk explained everything, measured my blood pressure, and then took me to the waiting room until the doctor was ready.",
    "cn": "A：我今天早上到診所做健康檢查時，不知道要去哪裡，也不知道要填哪些表格，上次是誰幫你的？ B：櫃檯一位親切的【護理師】把一切都解釋清楚，幫我量了血壓，然後帶我到候診室等醫生準備好。"
  },
  {
    "word": "patient",
    "pos": "n.",
    "cn_def": "病人；患者",
    "en_def": "a person who is getting medical care",
    "sentence": "A: Why is the waiting room at the dental clinic so crowded today, even though it's only nine o'clock and the clinic opened just thirty minutes ago? B: The dentist was sick yesterday, so every {{BLANK}} who missed an appointment was moved to this morning, and the staff are working hard to see everyone before lunch.",
    "cn": "A：為什麼牙醫診所的候診室今天這麼擁擠，明明現在才九點，診所也才開門三十分鐘？ B：牙醫昨天生病了，所以每一位錯過看診的【病人】都改到今天早上，員工們正努力在午餐前看完所有人。"
  },
  {
    "word": "hospital",
    "pos": "n.",
    "cn_def": "醫院",
    "en_def": "a large building where sick or injured people get care",
    "sentence": "A: Our sales manager slipped on the wet stairs outside the warehouse and hurt his leg badly, so what happened after the security guard called for help? B: An ambulance took him to the nearest {{BLANK}} for X-rays, and the doctors said he needs to stay there for two nights before he can go home.",
    "cn": "A：我們的業務經理在倉庫外濕滑的樓梯上滑倒，腿傷得很重，警衛打電話求救之後發生了什麼事？ B：救護車把他送到最近的【醫院】照X光，醫生說他需要在那裡住兩晚才能回家。"
  },
  {
    "word": "clinic",
    "pos": "n.",
    "cn_def": "診所",
    "en_def": "a small place where people see a doctor",
    "sentence": "A: I need to get a flu shot before I travel to Japan for the trade fair next month, but I don't have much free time during the week, so any suggestions? B: There's a small {{BLANK}} on the first floor of our office building that opens early, so you can get the shot before work without waiting in a long line.",
    "cn": "A：我下個月去日本參加商展前需要打流感疫苗，但平日沒什麼空閒時間，你有什麼建議嗎？ B：我們辦公大樓一樓有一間很早開門的小【診所】，所以你可以在上班前去打針，不用排很長的隊。"
  },
  {
    "word": "treatment",
    "pos": "n.",
    "cn_def": "治療",
    "en_def": "medical care given to make someone better",
    "sentence": "A: How is your father feeling after his knee problem got worse last winter, and is he still having trouble climbing the stairs at home? B: He's much better now, because the doctor gave him a new {{BLANK}} that includes weekly exercises and special medicine, and he can even walk to the park every morning again.",
    "cn": "A：你父親的膝蓋問題去年冬天惡化後，現在感覺怎麼樣？他在家爬樓梯還有困難嗎？ B：他現在好多了，因為醫生給了他一種新的【治療】，包括每週的運動和特別的藥，他甚至又可以每天早上走路去公園了。"
  },
  {
    "word": "diagnosis",
    "pos": "n.",
    "cn_def": "診斷",
    "en_def": "a doctor's decision about what illness someone has",
    "sentence": "A: Did the doctor finally tell you why you've been feeling so tired at work for the past few weeks, even though you sleep eight hours a night? B: Yes, after looking at my blood results, she made a clear {{BLANK}}, and it turns out I simply need more iron in my diet, so I'm relieved it isn't serious.",
    "cn": "A：醫生終於告訴你為什麼過去幾週你上班時一直這麼累了嗎？明明你每晚都睡八小時。 B：有，她看了我的血液檢查結果後做出了明確的【診斷】，原來我只是飲食中需要更多鐵質，所以我很慶幸不嚴重。"
  },
  {
    "word": "symptom",
    "pos": "n.",
    "cn_def": "症狀",
    "en_def": "a sign of an illness, such as a fever or pain",
    "sentence": "A: The company newsletter says we should stay home if we feel sick during flu season, but how do I know whether I have the flu or just a cold? B: A sudden high fever is the main {{BLANK}} to watch for, so if you have that along with body aches, call the office and see a doctor right away.",
    "cn": "A：公司電子報說流感季節如果覺得不舒服就應該待在家，但我要怎麼知道自己得的是流感還是只是感冒？ B：突然發高燒是要注意的主要【症狀】，所以如果你發燒又全身痠痛，就打電話給公司，馬上去看醫生。"
  },
  {
    "word": "disease",
    "pos": "n.",
    "cn_def": "疾病",
    "en_def": "an illness of the body",
    "sentence": "A: Why is the government giving free health checks to all office workers over forty this year, and do I need to register online before I go? B: They want to find heart {{BLANK}} early, because many busy workers don't exercise enough, and yes, you can sign up on the city website in just a few minutes.",
    "cn": "A：為什麼政府今年要為所有四十歲以上的上班族提供免費健康檢查？我去之前需要先上網登記嗎？ B：他們想及早發現心臟【疾病】，因為很多忙碌的上班族運動不足，而且是的，你只要幾分鐘就能在市政府網站上報名。"
  },
  {
    "word": "infection",
    "pos": "n.",
    "cn_def": "感染",
    "en_def": "an illness caused by germs entering the body",
    "sentence": "A: The small cut on my hand from opening that heavy cardboard box yesterday is red and painful today, so should I be worried about it? B: You should clean it carefully and cover it with a bandage, and if it gets worse, see a doctor because an {{BLANK}} can spread quickly if you don't treat it in time.",
    "cn": "A：我昨天開那個很重的紙箱時手上割了一個小傷口，今天又紅又痛，我該擔心嗎？ B：你應該仔細清潔傷口並用繃帶包好，如果情況變糟就去看醫生，因為【感染】如果沒有及時治療會擴散得很快。"
  },
  {
    "word": "surgery",
    "pos": "n.",
    "cn_def": "手術",
    "en_def": "medical treatment in which a doctor cuts open the body",
    "sentence": "A: I heard that Ms. Lin from the finance department will be away from the office for a whole month, so do you know what happened to her? B: She needs {{BLANK}} on her back next Monday, and the doctor told her to rest at home for several weeks afterward, so Kevin will handle her reports until she returns.",
    "cn": "A：我聽說財務部的林小姐要請假整整一個月，你知道她發生什麼事了嗎？ B：她下週一背部需要動【手術】，醫生要她術後在家休息好幾週，所以在她回來之前由Kevin處理她的報告。"
  },
  {
    "word": "operation",
    "pos": "n.",
    "cn_def": "手術",
    "en_def": "a time when a doctor cuts open the body to repair it",
    "sentence": "A: How did your grandmother's eye problem turn out, since you mentioned last month that she could hardly read the newspaper anymore? B: She had a short {{BLANK}} at the eye hospital last Thursday, and it went very well, so now she can see clearly and even enjoys reading magazines again every afternoon.",
    "cn": "A：你奶奶的眼睛問題後來怎麼樣了？你上個月說她幾乎沒辦法看報紙了。 B：她上週四在眼科醫院做了一個短時間的【手術】，非常順利，所以現在她看得很清楚，甚至每天下午又開始享受看雜誌了。"
  },
  {
    "word": "prescription",
    "pos": "n.",
    "cn_def": "處方；處方箋",
    "en_def": "a doctor's written note that lets you get medicine",
    "sentence": "A: The doctor said I need stronger medicine for my allergies, but the pharmacy near our office told me they can't sell it to me directly, so what's the problem? B: You need a {{BLANK}} from the doctor first, so call the clinic, ask them to write one for you, and then bring the paper back to the pharmacy this afternoon.",
    "cn": "A：醫生說我的過敏需要更強的藥，但公司附近的藥局說不能直接賣給我，問題出在哪裡？ B：你需要先拿到醫生開的【處方箋】，所以打電話給診所請他們幫你開一張，然後今天下午把單子拿回藥局。"
  },
  {
    "word": "medication",
    "pos": "n.",
    "cn_def": "藥物",
    "en_def": "medicine that you take for an illness",
    "sentence": "A: I'm flying to a conference in Singapore next week, and I take pills every morning for my blood pressure, so is there anything I should prepare? B: Put your {{BLANK}} in your carry-on bag with the doctor's note, and bring a few extra days' supply in case your flight is delayed or your luggage gets lost.",
    "cn": "A：我下週要搭機去新加坡開會，而我每天早上都要吃降血壓的藥，有什麼需要準備的嗎？ B：把你的【藥物】和醫生證明放在隨身行李裡，並多帶幾天的份量，以防班機延誤或行李遺失。"
  },
  {
    "word": "vaccine",
    "pos": "n.",
    "cn_def": "疫苗",
    "en_def": "a substance given to people to protect them from a disease",
    "sentence": "A: Our company is sending three engineers to a factory in Southeast Asia next month, so do they need any special health preparation before they leave? B: Yes, each of them should get the hepatitis {{BLANK}} at a travel clinic at least two weeks before departure, and the company will pay for all the costs.",
    "cn": "A：我們公司下個月要派三位工程師去東南亞的工廠，他們出發前需要做什麼特別的健康準備嗎？ B：需要，他們每個人都應該在出發前至少兩週到旅遊門診接種肝炎【疫苗】，所有費用由公司負擔。"
  },
  {
    "word": "therapy",
    "pos": "n.",
    "cn_def": "治療；療法",
    "en_def": "treatment that helps someone get better over time",
    "sentence": "A: After your shoulder injury at the gym, how are you managing to type on the computer all day for such long hours at work? B: I go to physical {{BLANK}} twice a week after work, where a specialist shows me gentle exercises, and the pain has become much smaller than it was last month.",
    "cn": "A：你在健身房肩膀受傷後，上班時要整天長時間打電腦，你是怎麼撐過來的？ B：我每週下班後去做兩次物理【治療】，專家會教我一些溫和的運動，現在的疼痛比上個月減輕很多。"
  },
  {
    "word": "recovery",
    "pos": "n.",
    "cn_def": "康復；復原",
    "en_def": "the process of becoming healthy again",
    "sentence": "A: Is Mr. Chen coming back to the office soon, because several clients have been asking about him since he left the hospital last week? B: The doctors say his {{BLANK}} is going faster than expected, so he should return by the end of the month, but he'll work only half days at first.",
    "cn": "A：陳先生快回辦公室了嗎？自從他上週出院後，好幾位客戶一直在問他的情況。 B：醫生說他【康復】得比預期快，所以他應該月底前會回來，不過一開始只會上半天班。"
  },
  {
    "word": "emergency",
    "pos": "n.",
    "cn_def": "緊急情況",
    "en_def": "a sudden dangerous situation that needs quick action",
    "sentence": "A: What should we do if someone suddenly feels very sick during the evening shift, when the office health center is already closed? B: Call 119 immediately, because in a medical {{BLANK}} every minute matters, and then tell the security guard so he can open the front gate for the ambulance.",
    "cn": "A：如果有人在晚班時突然非常不舒服，而公司的保健中心已經關門了，我們該怎麼辦？ B：立刻打119，因為在醫療【緊急情況】中每一分鐘都很重要，然後通知警衛，讓他為救護車打開前門。"
  },
  {
    "word": "ambulance",
    "pos": "n.",
    "cn_def": "救護車",
    "en_def": "a vehicle that takes sick or hurt people to hospital",
    "sentence": "A: A visitor fainted in the lobby while waiting for the meeting with our director, so how did the reception staff handle the situation so quickly? B: They called an {{BLANK}} right away, kept the visitor lying down in a quiet corner, and the paramedics arrived within ten minutes to take her to the hospital.",
    "cn": "A：一位訪客在大廳等候與我們主管開會時昏倒了，接待人員是怎麼這麼快處理好的？ B：他們立刻叫了【救護車】，讓訪客躺在安靜的角落，醫護人員十分鐘內就到了，把她送到醫院。"
  },
  {
    "word": "examination",
    "pos": "n.",
    "cn_def": "檢查",
    "en_def": "a careful check of someone's body by a doctor",
    "sentence": "A: Why do all new employees have to visit the hospital before their first day, since most of them are young and look perfectly healthy? B: Company rules say everyone needs a basic medical {{BLANK}}, including blood work and an eye check, so we know our staff are fit for work in the factory.",
    "cn": "A：為什麼所有新進員工在第一天上班前都要去醫院？他們大多數都很年輕，看起來也非常健康。 B：公司規定每個人都需要做基本的健康【檢查】，包括驗血和視力檢查，這樣我們才知道員工適合在工廠工作。"
  },
  {
    "word": "test",
    "pos": "n.",
    "cn_def": "檢驗；檢查",
    "en_def": "a check of part of the body, such as blood, to find problems",
    "sentence": "A: The clinic called this morning and asked me to come back next week, so does that mean something is wrong with my health check results? B: Not necessarily, because they often ask people to repeat a blood {{BLANK}} if the first sample wasn't clear, so try not to worry too much before you get the final results.",
    "cn": "A：診所今天早上打電話要我下週再回去，這是不是表示我的健康檢查結果有問題？ B：不一定，因為如果第一次的樣本不清楚，他們常會請人重做血液【檢驗】，所以在拿到最後結果前盡量別太擔心。"
  },
  {
    "word": "scan",
    "pos": "n.",
    "cn_def": "掃描檢查",
    "en_def": "a medical picture of the inside of the body made by a machine",
    "sentence": "A: After the car accident on the highway last weekend, did the doctors at the hospital find any serious problems with your head or back? B: They did a full brain {{BLANK}} just to be safe, and luckily the pictures showed nothing wrong, so I only need to rest for a few days.",
    "cn": "A：上週末在高速公路上出車禍後，醫院的醫生有發現你頭部或背部有什麼嚴重的問題嗎？ B：為了安全起見，他們幫我做了完整的腦部【掃描檢查】，幸好影像顯示沒有異常，所以我只需要休息幾天。"
  },
  {
    "word": "treat",
    "pos": "v.",
    "cn_def": "治療",
    "en_def": "to give medical care to make someone better",
    "sentence": "A: The pharmacist recommended a cream for my skin problem, but I'm not sure whether it's strong enough, so what do you think? B: Doctors usually {{BLANK}} a mild skin rash with that kind of cream, so use it twice a day for a week, and if it doesn't improve, make an appointment at the clinic.",
    "cn": "A：藥劑師推薦了一種藥膏給我治皮膚問題，但我不確定它夠不夠強，你覺得呢？ B：醫生通常用那種藥膏【治療】輕微的皮膚疹，所以一天擦兩次、持續一週，如果沒有改善，就去診所掛號。"
  },
  {
    "word": "diagnose",
    "pos": "v.",
    "cn_def": "診斷",
    "en_def": "to find out what illness someone has",
    "sentence": "A: Why did you need to see three different doctors before anyone could explain your stomach pain and the problems you had with eating? B: The problem was quite rare, so it was difficult to {{BLANK}}, but the third specialist ordered a special test and finally found out what was causing it.",
    "cn": "A：為什麼你要看三位不同的醫生，才有人能解釋你的胃痛和進食問題？ B：這個問題相當罕見，所以很難【診斷】，但第三位專科醫生安排了一項特殊檢查，終於找出原因。"
  },
  {
    "word": "heal",
    "pos": "v.",
    "cn_def": "癒合；痊癒",
    "en_def": "to become healthy again, especially after an injury",
    "sentence": "A: How long will it take for your broken arm to get better, because the team wants to know when you can start driving to client meetings again? B: The doctor said the bone needs about six weeks to {{BLANK}} completely, so I'll take the train until then, and my colleague will drive me to the important meetings.",
    "cn": "A：你骨折的手臂要多久才會好？因為團隊想知道你什麼時候可以再開車去跟客戶開會。 B：醫生說骨頭大約需要六週才能完全【癒合】，所以在那之前我會搭火車，重要的會議由同事開車載我去。"
  },
  {
    "word": "prevent",
    "pos": "v.",
    "cn_def": "預防；防止",
    "en_def": "to stop something from happening",
    "sentence": "A: So many people in our department caught colds last month, so what can we do this winter to stop the same thing from happening again? B: We can {{BLANK}} most colds by washing our hands often, opening the windows for fresh air, and asking anyone who feels sick to work from home.",
    "cn": "A：上個月我們部門好多人感冒，今年冬天我們可以做什麼來避免同樣的事情再發生？ B：我們可以經常洗手、開窗讓空氣流通，並請覺得不舒服的人在家工作，來【預防】大部分的感冒。"
  },
  {
    "word": "chronic",
    "pos": "adj.",
    "cn_def": "慢性的；長期的",
    "en_def": "lasting for a long time",
    "sentence": "A: You've been taking painkillers every day for your back, so has the doctor said anything about how long this problem will last? B: She said it's a {{BLANK}} condition that may continue for years, so I'm going to buy a better office chair and do stretching exercises every morning before work.",
    "cn": "A：你每天都在吃止痛藥治背痛，醫生有說這個問題會持續多久嗎？ B：她說這是一種可能持續好幾年的【慢性】病症，所以我打算買一張更好的辦公椅，並且每天上班前做伸展運動。"
  },
  {
    "word": "acute",
    "pos": "adj.",
    "cn_def": "急性的；劇烈的",
    "en_def": "sudden and very strong (about pain or illness)",
    "sentence": "A: Why did Peter leave the sales meeting so suddenly yesterday afternoon, when he looked completely fine during lunch with the clients? B: He felt {{BLANK}} pain in his stomach that came on very quickly, so his manager drove him to the hospital, where doctors found he needed treatment immediately.",
    "cn": "A：Peter昨天下午為什麼突然離開業務會議？他跟客戶吃午餐時看起來完全沒事。 B：他胃部突然感到一陣【急性】疼痛，所以他的經理開車送他去醫院，醫生發現他需要立即治療。"
  },
  {
    "word": "serious",
    "pos": "adj.",
    "cn_def": "嚴重的",
    "en_def": "bad or dangerous",
    "sentence": "A: I heard the delivery driver fell off the loading platform at the warehouse this morning, so is he going to be all right? B: Thankfully his injury isn't {{BLANK}}, just a few bruises on his arm, but the manager still sent him home to rest and will check the platform for safety problems.",
    "cn": "A：我聽說送貨司機今天早上從倉庫的裝卸平台上摔下來，他會沒事嗎？ B：謝天謝地他的傷不【嚴重】，只是手臂上有幾處瘀青，但經理還是讓他回家休息，並會檢查平台有沒有安全問題。"
  },
  {
    "word": "stable",
    "pos": "adj.",
    "cn_def": "穩定的",
    "en_def": "not getting worse; steady",
    "sentence": "A: Have you heard any news about our director, since the whole team was shocked when he was taken to the hospital after the board meeting? B: His wife called this afternoon and said his condition is now {{BLANK}}, so the doctors will keep watching him for two more days before he can go home.",
    "cn": "A：你有聽到我們主管的消息嗎？他在董事會後被送去醫院，整個團隊都很震驚。 B：他太太今天下午打電話來說他的情況現在已經【穩定】，醫生會再觀察他兩天，之後他就可以回家了。"
  },
  {
    "word": "physically",
    "pos": "adv.",
    "cn_def": "身體上",
    "en_def": "in a way that is about the body",
    "sentence": "A: The new warehouse job requires lifting heavy boxes all day long, so what kind of person do you think we should hire for the position? B: We need someone who is {{BLANK}} strong and healthy, and it would also help if they have some experience with safety rules in a busy warehouse.",
    "cn": "A：新的倉庫工作需要整天搬重箱子，你覺得我們應該雇用什麼樣的人來擔任這個職位？ B：我們需要一位【身體上】強壯又健康的人，如果他對繁忙倉庫的安全規定有些經驗也會很有幫助。"
  },
  {
    "word": "medically",
    "pos": "adv.",
    "cn_def": "醫學上；醫療上",
    "en_def": "in a way that is about medicine or health care",
    "sentence": "A: Our employee wants to take three weeks off after her surgery, so does she need to give the human resources department any special documents? B: Yes, she needs a doctor's note saying she is not {{BLANK}} fit to work yet, and then HR can approve the paid sick leave without any problems.",
    "cn": "A：我們有位員工手術後想請三週假，她需要交給人資部門什麼特別的文件嗎？ B：需要，她需要一張醫生證明，說明她在【醫學上】還不適合工作，然後人資就能順利核准她的有薪病假。"
  },
  {
    "word": "properly",
    "pos": "adv.",
    "cn_def": "正確地；適當地",
    "en_def": "in the correct or right way",
    "sentence": "A: The pharmacist gave me these new pills this morning, but the instructions on the box are very small, so can you help me read them? B: Sure, it says you must take them after meals with a full glass of water, because the medicine won't work {{BLANK}} if you take it on an empty stomach.",
    "cn": "A：藥劑師今天早上給了我這些新藥，但盒子上的說明字很小，你可以幫我看一下嗎？ B：當然，上面說你必須在飯後配一整杯水服用，因為空腹吃的話藥效無法【正常地】發揮。"
  }
];

const MCQS = [
  {
    "q": "The pharmacist explained how to take the cough _____ correctly. Patients should swallow one spoonful after each meal with warm water.",
    "options": [
      "medicine",
      "surgery",
      "ambulance",
      "diagnosis"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "If your fever does not go down by tomorrow, please see a _____ at the clinic. Do not come to the office until you recover.",
    "options": [
      "patient",
      "symptom",
      "doctor",
      "recovery"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "The night _____ checked the patient's temperature every two hours. She also made sure he drank enough water before morning.",
    "options": [
      "ambulance",
      "nurse",
      "clinic",
      "prescription"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Each new _____ must fill out a short health form before seeing the dentist. The form asks about allergies and current pills.",
    "options": [
      "surgery",
      "vaccine",
      "hospital",
      "patient"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "After the factory accident, the injured worker stayed in the _____ for three days. His colleagues visited him with flowers and fruit.",
    "options": [
      "symptom",
      "diagnosis",
      "hospital",
      "therapy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "The company opened a small _____ on the third floor for its employees. A doctor is available there every weekday morning.",
    "options": [
      "clinic",
      "infection",
      "symptom",
      "recovery"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new cancer _____ has helped many patients live longer. The hospital plans to offer it to more people next year.",
    "options": [
      "ambulance",
      "nurse",
      "clinic",
      "treatment"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "The specialist was unable to make a clear _____ after the first visit. She asked the patient to return next week for more tests.",
    "options": [
      "vaccine",
      "diagnosis",
      "ambulance",
      "hospital"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "A sudden high fever is a common _____ of the flu. Employees with a fever should stay home and rest until they feel better.",
    "options": [
      "symptom",
      "operation",
      "ambulance",
      "clinic"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Regular exercise can lower the risk of heart _____ among office workers. The company gym is free for all full-time staff.",
    "options": [
      "nurse",
      "prescription",
      "disease",
      "ambulance"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Clean the cut with soap and water to avoid _____. Then cover it with a fresh bandage and change it every day.",
    "options": [
      "diagnosis",
      "infection",
      "prescription",
      "ambulance"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "Mr. Lee will have knee _____ next Tuesday at City Hospital. He expects to return to work in about a month.",
    "options": [
      "symptom",
      "vaccine",
      "prescription",
      "surgery"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The heart _____ lasted four hours, but the surgeons said it was a complete success. The patient is now resting in her room.",
    "options": [
      "symptom",
      "prescription",
      "operation",
      "vaccine"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "The pharmacy cannot sell this strong medicine without a doctor's _____. Please bring the signed paper from your clinic tomorrow.",
    "options": [
      "prescription",
      "ambulance",
      "operation",
      "recovery"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "Please tell the dentist about any _____ you are currently taking. Some pills can cause problems during dental treatment.",
    "options": [
      "surgery",
      "ambulance",
      "symptom",
      "medication"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "All staff traveling overseas must receive the flu _____ before departure. The company will cover the full cost at the clinic.",
    "options": [
      "symptom",
      "vaccine",
      "ambulance",
      "nurse"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "After the sports injury, she attended physical _____ twice a week for three months. Now she can play tennis again on weekends.",
    "options": [
      "therapy",
      "emergency",
      "prescription",
      "infection"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "The doctor said Ms. Chen made a full _____ after her back surgery. She will return to the office next Monday.",
    "options": [
      "symptom",
      "infection",
      "recovery",
      "ambulance"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "In case of a medical _____, call the security office immediately. The phone number is posted next to every elevator.",
    "options": [
      "recovery",
      "emergency",
      "vaccine",
      "prescription"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "The receptionist called an _____ when a visitor fainted in the lobby. Paramedics arrived within ten minutes and took her away.",
    "options": [
      "infection",
      "examination",
      "operation",
      "ambulance"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "New factory employees must pass a medical _____ before they start work. The appointment usually takes about one hour.",
    "options": [
      "ambulance",
      "infection",
      "examination",
      "recovery"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "The lab will email your blood _____ results within three days. Please contact the clinic if you have any questions.",
    "options": [
      "test",
      "nurse",
      "ambulance",
      "therapy"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "The doctor ordered a brain _____ to check for injury after the car accident. The images showed no serious damage at all.",
    "options": [
      "nurse",
      "vaccine",
      "clinic",
      "scan"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Doctors usually _____ minor burns with cool water and a clean bandage. More serious burns need care at a hospital.",
    "options": [
      "diagnose",
      "treat",
      "prevent",
      "cancel"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Some rare illnesses are difficult to _____ because their signs look like a common cold. Doctors often need several tests.",
    "options": [
      "diagnose",
      "heal",
      "attend",
      "deliver"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The deep cut on his finger took two weeks to _____ completely. He wore a bandage at work the whole time.",
    "options": [
      "diagnose",
      "prevent",
      "heal",
      "prescribe"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Washing your hands often is the easiest way to _____ the spread of colds in the office. Soap is provided in every restroom.",
    "options": [
      "heal",
      "prevent",
      "diagnose",
      "treat"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "My uncle has suffered from _____ back pain for over ten years. He does gentle stretching exercises every morning before breakfast.",
    "options": [
      "stable",
      "acute",
      "empty",
      "chronic"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "He was rushed to the hospital with sudden _____ stomach pain late last night. Doctors operated on him within an hour.",
    "options": [
      "chronic",
      "stable",
      "acute",
      "patient"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Fortunately, the driver's injuries were not _____ after the minor accident. He went back to his delivery route the next day.",
    "options": [
      "serious",
      "stable",
      "careful",
      "empty"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "medicine": {
    "pos": "n.",
    "en_def": "a substance you take to cure an illness",
    "cn_def": "藥"
  },
  "doctor": {
    "pos": "n.",
    "en_def": "a person whose job is to treat sick people",
    "cn_def": "醫生"
  },
  "nurse": {
    "pos": "n.",
    "en_def": "a person trained to care for sick people, often in a hospital",
    "cn_def": "護理師；護士"
  },
  "patient": {
    "pos": "n.",
    "en_def": "a person who is getting medical care",
    "cn_def": "病人；患者"
  },
  "hospital": {
    "pos": "n.",
    "en_def": "a large building where sick or injured people get care",
    "cn_def": "醫院"
  },
  "clinic": {
    "pos": "n.",
    "en_def": "a small place where people see a doctor",
    "cn_def": "診所"
  },
  "treatment": {
    "pos": "n.",
    "en_def": "medical care given to make someone better",
    "cn_def": "治療"
  },
  "diagnosis": {
    "pos": "n.",
    "en_def": "a doctor's decision about what illness someone has",
    "cn_def": "診斷"
  },
  "symptom": {
    "pos": "n.",
    "en_def": "a sign of an illness, such as a fever or pain",
    "cn_def": "症狀"
  },
  "disease": {
    "pos": "n.",
    "en_def": "an illness of the body",
    "cn_def": "疾病"
  },
  "infection": {
    "pos": "n.",
    "en_def": "an illness caused by germs entering the body",
    "cn_def": "感染"
  },
  "surgery": {
    "pos": "n.",
    "en_def": "medical treatment in which a doctor cuts open the body",
    "cn_def": "手術"
  },
  "operation": {
    "pos": "n.",
    "en_def": "a time when a doctor cuts open the body to repair it",
    "cn_def": "手術"
  },
  "prescription": {
    "pos": "n.",
    "en_def": "a doctor's written note that lets you get medicine",
    "cn_def": "處方；處方箋"
  },
  "medication": {
    "pos": "n.",
    "en_def": "medicine that you take for an illness",
    "cn_def": "藥物"
  },
  "vaccine": {
    "pos": "n.",
    "en_def": "a substance given to people to protect them from a disease",
    "cn_def": "疫苗"
  },
  "therapy": {
    "pos": "n.",
    "en_def": "treatment that helps someone get better over time",
    "cn_def": "治療；療法"
  },
  "recovery": {
    "pos": "n.",
    "en_def": "the process of becoming healthy again",
    "cn_def": "康復；復原"
  },
  "emergency": {
    "pos": "n.",
    "en_def": "a sudden dangerous situation that needs quick action",
    "cn_def": "緊急情況"
  },
  "ambulance": {
    "pos": "n.",
    "en_def": "a vehicle that takes sick or hurt people to hospital",
    "cn_def": "救護車"
  },
  "examination": {
    "pos": "n.",
    "en_def": "a careful check of someone's body by a doctor",
    "cn_def": "檢查"
  },
  "test": {
    "pos": "n.",
    "en_def": "a check of part of the body, such as blood, to find problems",
    "cn_def": "檢驗；檢查"
  },
  "scan": {
    "pos": "n.",
    "en_def": "a medical picture of the inside of the body made by a machine",
    "cn_def": "掃描檢查"
  },
  "treat": {
    "pos": "v.",
    "en_def": "to give medical care to make someone better",
    "cn_def": "治療"
  },
  "diagnose": {
    "pos": "v.",
    "en_def": "to find out what illness someone has",
    "cn_def": "診斷"
  },
  "heal": {
    "pos": "v.",
    "en_def": "to become healthy again, especially after an injury",
    "cn_def": "癒合；痊癒"
  },
  "prevent": {
    "pos": "v.",
    "en_def": "to stop something from happening",
    "cn_def": "預防；防止"
  },
  "chronic": {
    "pos": "adj.",
    "en_def": "lasting for a long time",
    "cn_def": "慢性的；長期的"
  },
  "acute": {
    "pos": "adj.",
    "en_def": "sudden and very strong (about pain or illness)",
    "cn_def": "急性的；劇烈的"
  },
  "serious": {
    "pos": "adj.",
    "en_def": "bad or dangerous",
    "cn_def": "嚴重的"
  },
  "stable": {
    "pos": "adj.",
    "en_def": "not getting worse; steady",
    "cn_def": "穩定的"
  },
  "physically": {
    "pos": "adv.",
    "en_def": "in a way that is about the body",
    "cn_def": "身體上"
  },
  "medically": {
    "pos": "adv.",
    "en_def": "in a way that is about medicine or health care",
    "cn_def": "醫學上；醫療上"
  },
  "properly": {
    "pos": "adv.",
    "en_def": "in the correct or right way",
    "cn_def": "正確地；適當地"
  }
};

const EXTRA_GLOSSES = {};
