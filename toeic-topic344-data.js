// Topic 344 Quiz Data: School Day 上學日
// Source word list: https://www.examword.com/group-topic/school-day — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T344 - School Day 上學日",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "enroll",
    "pos": "v.",
    "cn_def": "註冊；登記入學",
    "en_def": "to officially put your name on the list for a school or course",
    "sentence": "A: My daughter starts primary school next month, but I still haven't finished the paperwork, so what do I need to do before her first school day? B: You should {{BLANK}} her at the main office by Friday, and bring her birth certificate, two photos, and proof of your home address so the staff can process it quickly.",
    "cn": "A：我女兒下個月開始上小學，但我還沒完成文件手續，她第一天上學前我需要做什麼？ B：你應該在星期五前到主辦公室替她【註冊入學】，並帶著她的出生證明、兩張照片和住址證明，這樣工作人員就能快速處理。"
  },
  {
    "word": "greeting",
    "pos": "n.",
    "cn_def": "問候；招呼",
    "en_def": "words or actions you use when you meet someone",
    "sentence": "A: The new principal wants parents to feel welcome on the first morning, so what are the teachers planning to do at the front gate? B: Each teacher will stand by the gate with a warm {{BLANK}} for every family, and the student volunteers will hand out maps of the building and the class lists.",
    "cn": "A：新校長希望家長在第一天早上感到受歡迎，老師們打算在校門口做什麼？ B：每位老師都會站在門口，給每個家庭一個溫暖的【問候】，學生志工則會發放校舍地圖和班級名單。"
  },
  {
    "word": "remarkable",
    "pos": "adj.",
    "cn_def": "非凡的；顯著的",
    "en_def": "unusual or surprising in a good way",
    "sentence": "A: I heard the school's reading program won an award this year, but what exactly did the students achieve that impressed the judges so much? B: The results were truly {{BLANK}}, because almost every child in the third grade doubled their reading speed in six months, and the teachers did it without any extra budget.",
    "cn": "A：我聽說學校的閱讀計畫今年得獎了，但學生到底達成了什麼讓評審如此印象深刻？ B：成果真的很【非凡】，因為三年級幾乎每個孩子在六個月內閱讀速度都提高了一倍，而老師們沒有用任何額外預算就做到了。"
  },
  {
    "word": "priority",
    "pos": "n.",
    "cn_def": "優先事項",
    "en_def": "something more important than other things that must be done first",
    "sentence": "A: The school has only a small budget left for this year, so should we spend it on new computers or on repairing the old science lab? B: Student safety is our top {{BLANK}}, so we will fix the broken gas pipes in the lab first, and then we can ask the parents' association to help pay for computers next spring.",
    "cn": "A：學校今年只剩下少量預算，我們應該把錢花在新電腦上，還是修理舊的科學實驗室？ B：學生安全是我們的【首要之務】，所以我們會先修好實驗室壞掉的瓦斯管，然後明年春天再請家長會幫忙支付電腦費用。"
  },
  {
    "word": "tenderly",
    "pos": "adv.",
    "cn_def": "溫柔地；親切地",
    "en_def": "in a kind, gentle, and loving way",
    "sentence": "A: The new kindergarten teacher seems very young, so how does she handle the children who cry when their parents leave in the morning? B: She speaks to them {{BLANK}}, holds their hands, and shows them the toys in the reading corner, so most of them stop crying within a few minutes and join the other kids happily.",
    "cn": "A：新來的幼稚園老師看起來很年輕，早上父母離開時，她怎麼處理哭泣的孩子？ B：她會【溫柔地】跟他們說話、牽著他們的手，並帶他們看閱讀角的玩具，所以大多數孩子幾分鐘內就不哭了，開心地加入其他小朋友。"
  },
  {
    "word": "fondly",
    "pos": "adv.",
    "cn_def": "深情地；懷念地",
    "en_def": "in a loving way, with happy memories",
    "sentence": "A: At the alumni dinner last night, why did the retired principal get such a long round of applause from the former students and their families? B: Many of them still remember him {{BLANK}}, because he knew every student's name, stayed late to help with homework, and even paid for school trips when some families could not afford them.",
    "cn": "A：昨晚的校友餐會上，為什麼退休的校長得到了校友和他們家人這麼長時間的掌聲？ B：許多人至今仍【深情地】記得他，因為他知道每個學生的名字、會留到很晚幫忙寫作業，甚至在一些家庭負擔不起時替他們支付校外教學的費用。"
  },
  {
    "word": "timidly",
    "pos": "adv.",
    "cn_def": "膽怯地；羞怯地",
    "en_def": "in a shy, nervous way, without confidence",
    "sentence": "A: How did the new transfer student behave during his first morning in our class, since he has just moved here from another country? B: He walked into the room {{BLANK}} and sat in the back corner without saying a word, so I asked a friendly classmate to show him around the school during the lunch break.",
    "cn": "A：新轉學生剛從另一個國家搬來，他在我們班第一天早上表現如何？ B：他【膽怯地】走進教室，一句話也沒說就坐在後面的角落，所以我請一位友善的同學在午休時間帶他參觀校園。"
  },
  {
    "word": "inexplicable",
    "pos": "adj.",
    "cn_def": "無法解釋的；莫名其妙的",
    "en_def": "impossible to explain or understand",
    "sentence": "A: Did the IT department ever find out why the school's online attendance system stopped working for three hours on Monday morning? B: No, the failure is still {{BLANK}}, because the servers were fine and no updates were installed, so the technicians are now checking every log file to understand what really happened.",
    "cn": "A：資訊部門有沒有查出為什麼學校的線上點名系統星期一早上停擺了三個小時？ B：沒有，這次故障仍然【無法解釋】，因為伺服器正常，也沒有安裝任何更新，所以技術人員正在檢查每一份紀錄檔，以了解到底發生了什麼事。"
  },
  {
    "word": "blooming",
    "pos": "adj.",
    "cn_def": "盛開的；興旺的",
    "en_def": "having flowers that are open; growing well",
    "sentence": "A: The school garden looks so different this week, so did the gardening club plant something new before the parents' open day on Saturday? B: Yes, the students planted roses and sunflowers last month, and now the {{BLANK}} flowers along the main path make the whole campus look bright and welcoming for visitors.",
    "cn": "A：學校花園這週看起來很不一樣，園藝社是不是在星期六家長開放日之前種了新的植物？ B：是的，學生們上個月種了玫瑰和向日葵，現在主要步道旁【盛開的】花朵讓整個校園看起來明亮又歡迎訪客。"
  },
  {
    "word": "imposing",
    "pos": "adj.",
    "cn_def": "壯觀的；雄偉的",
    "en_def": "large and impressive in appearance",
    "sentence": "A: What was your first impression when you arrived at the old boarding school for the job interview yesterday afternoon? B: The main building looked very {{BLANK}}, with tall stone walls and huge wooden doors, so I felt a little nervous, but the staff inside were friendly and showed me around the classrooms.",
    "cn": "A：你昨天下午到那所古老的寄宿學校參加工作面試時，第一印象是什麼？ B：主建築看起來非常【雄偉壯觀】，有高聳的石牆和巨大的木門，所以我有點緊張，但裡面的員工都很友善，還帶我參觀了教室。"
  },
  {
    "word": "merrily",
    "pos": "adv.",
    "cn_def": "愉快地；歡樂地",
    "en_def": "in a happy and cheerful way",
    "sentence": "A: Why was there so much noise coming from the school bus this morning when it stopped outside our office building? B: The children were singing {{BLANK}} on their way to the zoo for the class trip, and the driver told me they had been laughing and clapping since they left the school at eight.",
    "cn": "A：今天早上校車停在我們辦公大樓外面時，為什麼傳出那麼多聲音？ B：孩子們在去動物園校外教學的路上【快樂地】唱歌，司機告訴我，他們從八點離開學校後就一直又笑又拍手。"
  },
  {
    "word": "neat",
    "pos": "adj.",
    "cn_def": "整潔的；整齊的",
    "en_def": "tidy and carefully arranged",
    "sentence": "A: The inspectors from the education office are visiting our school tomorrow morning, so what should the students do with their classrooms before they go home today? B: They should keep their desks {{BLANK}}, put all their books back on the shelves, and throw away any old papers so the rooms look clean and organized for the visit.",
    "cn": "A：教育局的督學明天早上要來我們學校，學生今天回家前應該怎麼整理教室？ B：他們應該保持桌面【整齊】，把所有書放回書架上，丟掉舊紙張，讓教室在訪視時看起來乾淨又有條理。"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "cn_def": "示範；展示",
    "en_def": "to show how something works or how to do it",
    "sentence": "A: The science teacher is absent today, so who will show the students how to use the new microscopes before they start the experiment? B: The lab assistant will {{BLANK}} the correct steps at the front of the room, and then the students can practice in small groups while she walks around to answer questions.",
    "cn": "A：自然老師今天請假，誰會在學生開始做實驗前教他們如何使用新的顯微鏡？ B：實驗室助理會在教室前面【示範】正確的步驟，然後學生可以分組練習，她會在教室裡走動回答問題。"
  },
  {
    "word": "various",
    "pos": "adj.",
    "cn_def": "各種的；各式各樣的",
    "en_def": "several different kinds",
    "sentence": "A: Parents keep asking what kinds of after-school clubs we offer this semester, so what should I tell them at the meeting tonight? B: Tell them we have {{BLANK}} activities, including basketball, robotics, drama, and cooking, and that students can join up to two clubs for free if they sign up before the end of the month.",
    "cn": "A：家長一直問我們這學期提供哪些課後社團，今晚開會時我該怎麼跟他們說？ B：告訴他們我們有【各式各樣的】活動，包括籃球、機器人、戲劇和烹飪，而且學生只要在月底前報名，最多可以免費參加兩個社團。"
  },
  {
    "word": "verandah",
    "pos": "n.",
    "cn_def": "陽台；遊廊",
    "en_def": "a covered area with a roof along the outside of a building",
    "sentence": "A: It is raining heavily this afternoon, so where will the parents wait for their children when classes finish at four o'clock? B: They can stand on the covered {{BLANK}} in front of the main building, where there are benches and a roof, so nobody will get wet while the teachers bring the students out.",
    "cn": "A：今天下午雨下得很大，四點放學時家長要在哪裡等孩子？ B：他們可以站在主建築前面有遮蔽的【遊廊】上，那裡有長椅和屋頂，老師帶學生出來時就不會有人淋濕。"
  },
  {
    "word": "gentle",
    "pos": "adj.",
    "cn_def": "溫和的；溫柔的",
    "en_def": "kind, calm, and careful, not rough",
    "sentence": "A: My son is a bit afraid of the swimming class because he had a bad experience last year, so is the new coach very strict? B: Not at all, she is very {{BLANK}} with beginners, always explains each step slowly, and lets nervous children stay in the shallow end until they feel ready to try more.",
    "cn": "A：我兒子有點害怕游泳課，因為他去年有過不好的經驗，新教練很嚴格嗎？ B：一點也不，她對初學者非常【溫和】，總是慢慢解釋每個步驟，並讓緊張的孩子待在淺水區，直到他們準備好嘗試更多。"
  },
  {
    "word": "associate",
    "pos": "v.",
    "cn_def": "把…聯想在一起；聯繫",
    "en_def": "to connect one thing with another in your mind",
    "sentence": "A: Why do you think so many adults still feel nervous when they walk into a school building, even for a simple parents' meeting? B: Many people {{BLANK}} schools with stressful exams and strict teachers from their childhood, so the principal wants to make the entrance hall more colorful and relaxing for visitors.",
    "cn": "A：你覺得為什麼很多大人走進學校大樓時仍然會緊張，即使只是參加簡單的家長會？ B：許多人會把學校和童年時壓力很大的考試及嚴格的老師【聯想】在一起，所以校長想讓入口大廳對訪客來說更多彩、更放鬆。"
  },
  {
    "word": "temperament",
    "pos": "n.",
    "cn_def": "性情；氣質",
    "en_def": "a person's usual nature and the way they behave",
    "sentence": "A: We need a new teacher for the special education class, so what kind of person are you looking for besides someone with the right qualifications? B: We need someone with a calm and patient {{BLANK}}, because the children sometimes get upset easily, and the teacher must stay relaxed and kind even on very difficult days.",
    "cn": "A：我們需要一位特教班的新老師，除了具備合適資格外，你在找什麼樣的人？ B：我們需要一個冷靜又有耐心【性情】的人，因為孩子們有時很容易不開心，老師即使在非常困難的日子裡也必須保持放鬆和親切。"
  },
  {
    "word": "compound",
    "pos": "n.",
    "cn_def": "有圍牆的建築群；園區",
    "en_def": "an area with buildings surrounded by a fence or wall",
    "sentence": "A: The security company wants to install new cameras at our school, so which areas should they cover first to keep the students safe? B: They should start with the main gate and the fence around the whole {{BLANK}}, because strangers sometimes walk in through the back entrance near the sports field after classes end.",
    "cn": "A：保全公司想在我們學校安裝新的監視器，他們應該先涵蓋哪些區域來保護學生安全？ B：他們應該先從大門和整個【校區】周圍的圍牆開始，因為放學後有時會有陌生人從運動場附近的後門走進來。"
  },
  {
    "word": "distribute",
    "pos": "v.",
    "cn_def": "分發；分配",
    "en_def": "to give things to many people",
    "sentence": "A: The new textbooks finally arrived at the school office this morning, so how will we get them to all twenty classrooms before lunch? B: The class leaders will come down to the office at ten, and the secretary will {{BLANK}} the books to them by grade, so each teacher can hand them out during the next lesson.",
    "cn": "A：新課本今天早上終於送到學校辦公室了，我們要怎麼在午餐前送到全部二十間教室？ B：各班班長十點會下來辦公室，祕書會按年級把書【分發】給他們，這樣每位老師就能在下一堂課發給學生。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone support and confidence to do something",
    "sentence": "A: Some of our students are too shy to speak English in class, so what can teachers do to help them become more confident? B: Teachers should {{BLANK}} them to work in pairs first, give them praise for small successes, and avoid correcting every mistake in front of the whole class.",
    "cn": "A：我們有些學生太害羞，不敢在課堂上說英語，老師能做什麼來幫助他們更有自信？ B：老師應該先【鼓勵】他們兩人一組練習，對小小的成功給予讚美，並避免在全班面前糾正每個錯誤。"
  },
  {
    "word": "calm",
    "pos": "adj.",
    "cn_def": "冷靜的；平靜的",
    "en_def": "not worried, angry, or excited",
    "sentence": "A: The fire alarm rang during the math exam this morning, so how did the students react when they had to leave the building so suddenly? B: Everyone stayed {{BLANK}} and walked out in straight lines, just like they practiced in the drill last month, so the whole school was outside in less than four minutes.",
    "cn": "A：今天早上數學考試時火災警報響了，學生突然必須離開大樓時有什麼反應？ B：每個人都保持【冷靜】，排成直線走出去，就像上個月演習時練習的那樣，所以全校不到四分鐘就都到外面了。"
  },
  {
    "word": "wonder",
    "pos": "v.",
    "cn_def": "想知道；納悶",
    "en_def": "to want to know something; to ask yourself",
    "sentence": "A: The bus company has changed the school bus schedule again without telling the parents, so have you received any message from the transport office? B: No, I haven't, and I {{BLANK}} why they didn't send an email, because many children waited at the bus stop for half an hour in the cold this morning.",
    "cn": "A：公車公司又在沒通知家長的情況下更改了校車時刻表，你有收到交通處的任何訊息嗎？ B：沒有，我也【納悶】他們為什麼不寄電子郵件，因為今天早上很多孩子在寒冷中在公車站等了半小時。"
  },
  {
    "word": "alphabet",
    "pos": "n.",
    "cn_def": "字母表",
    "en_def": "the set of letters used to write a language, in order",
    "sentence": "A: The first graders are learning English for the first time this year, so what does the teacher focus on during the first few weeks of class? B: She starts with the {{BLANK}}, teaching four letters each day with songs and picture cards, so the children can read simple words like cat and dog by October.",
    "cn": "A：一年級學生今年第一次學英語，老師在前幾週的課堂上重點放在哪裡？ B：她從【字母表】開始，每天用歌曲和圖卡教四個字母，這樣孩子們到十月就能讀像cat和dog這樣的簡單單字。"
  },
  {
    "word": "interval",
    "pos": "n.",
    "cn_def": "間隔；中場休息",
    "en_def": "a short break between parts of a show or event; a period of time between two things",
    "sentence": "A: The school concert is quite long this year, so will the parents and students get a chance to rest or buy a drink during the evening? B: Yes, there will be a fifteen-minute {{BLANK}} after the choir performs, and the parents' association will sell coffee, juice, and snacks in the hall to raise money for new instruments.",
    "cn": "A：今年的學校音樂會相當長，家長和學生晚上有機會休息或買飲料嗎？ B：有，合唱團表演完後會有十五分鐘的【中場休息】，家長會將在大廳販賣咖啡、果汁和點心，為購買新樂器募款。"
  },
  {
    "word": "rushed",
    "pos": "adj.",
    "cn_def": "匆忙的；倉促的",
    "en_def": "done too quickly because there is not enough time",
    "sentence": "A: Why did the morning assembly seem so short and confusing today, since the principal usually explains the weekly schedule very clearly? B: It felt {{BLANK}} because the projector broke and the meeting started fifteen minutes late, so the principal had to skip several announcements to let students reach their first class on time.",
    "cn": "A：今天的朝會為什麼感覺那麼短又混亂，校長通常會很清楚地說明每週行程？ B：感覺很【倉促】，因為投影機壞了，會議晚了十五分鐘才開始，所以校長只好略過幾項宣布，讓學生能準時去上第一堂課。"
  },
  {
    "word": "predicament",
    "pos": "n.",
    "cn_def": "困境；窘境",
    "en_def": "a difficult situation that is hard to get out of",
    "sentence": "A: The school trip bus broke down halfway to the museum yesterday, so what did the teachers do with forty children by the side of the road? B: They were in a real {{BLANK}}, but the leader called a local taxi company, and three vans arrived within twenty minutes to take everyone safely to the museum.",
    "cn": "A：昨天校外教學的巴士在去博物館的半路上拋錨了，老師們在路邊帶著四十個孩子怎麼辦？ B：他們真的陷入【困境】，但領隊打電話給當地計程車公司，二十分鐘內就來了三輛廂型車，把大家安全送到博物館。"
  },
  {
    "word": "sympathize",
    "pos": "v.",
    "cn_def": "同情；體諒",
    "en_def": "to understand and care about someone's feelings or problems",
    "sentence": "A: A parent called to complain that her son has too much homework every night, so how should I respond to her when I call back this afternoon? B: You should first {{BLANK}} with her feelings and listen carefully, then explain why the homework matters and offer to talk with the teacher about reducing it a little.",
    "cn": "A：一位家長打電話抱怨她兒子每晚作業太多，我今天下午回電時該怎麼回應她？ B：你應該先【體諒】她的感受並仔細聆聽，然後解釋作業為什麼重要，並表示願意和老師討論稍微減少作業量。"
  },
  {
    "word": "befriend",
    "pos": "v.",
    "cn_def": "與…交朋友；照顧",
    "en_def": "to become a friend to someone, especially someone who needs help",
    "sentence": "A: The new student from Japan still eats lunch alone every day, so is there anything the school can do to help her settle in faster? B: The counselor has asked two kind girls in her class to {{BLANK}} her, so they will invite her to join their table at lunch and show her the art club after school.",
    "cn": "A：那位從日本來的新學生每天還是一個人吃午餐，學校能做些什麼幫助她更快適應嗎？ B：輔導老師已經請她班上兩位善良的女生去【和她做朋友】，所以她們會邀請她午餐時同桌，並在放學後帶她參觀美術社。"
  },
  {
    "word": "introverted",
    "pos": "adj.",
    "cn_def": "內向的",
    "en_def": "quiet and shy, and enjoying time alone",
    "sentence": "A: My daughter's report card says she rarely speaks in group discussions, so should I be worried about her progress at school? B: Not really, many {{BLANK}} children prefer to think quietly before they speak, and her teacher says her written work is excellent, so she just needs more time to share her ideas aloud.",
    "cn": "A：我女兒的成績單說她在小組討論時很少發言，我應該擔心她在學校的表現嗎？ B：不太需要，許多【內向的】孩子喜歡先安靜思考再發言，她的老師說她的書面作業很優秀，所以她只是需要多一點時間大聲分享想法。"
  },
  {
    "word": "snub",
    "pos": "v.",
    "cn_def": "冷落；怠慢",
    "en_def": "to treat someone rudely by ignoring them",
    "sentence": "A: Why did the student council president look so upset after the meeting with the other club leaders yesterday afternoon? B: Some of the older students decided to {{BLANK}} her by leaving the room when she started to speak, so the teacher in charge will talk to them about respect and teamwork this week.",
    "cn": "A：昨天下午和其他社團幹部開完會後，學生會會長為什麼看起來那麼難過？ B：有些高年級學生故意在她開始發言時離開房間來【冷落】她，所以負責的老師這週會跟他們談談尊重和團隊合作。"
  },
  {
    "word": "enforce",
    "pos": "v.",
    "cn_def": "執行；強制實施",
    "en_def": "to make sure people obey a rule or law",
    "sentence": "A: Many students are still using their phones in class even though the school banned them last year, so what will the principal do about it? B: She plans to {{BLANK}} the rule more strictly, so teachers will collect phones at the door each morning and return them only when the final bell rings at four.",
    "cn": "A：雖然學校去年禁止使用手機，但很多學生上課時還在用，校長打算怎麼處理？ B：她打算更嚴格地【執行】這項規定，所以老師每天早上會在門口收手機，直到四點最後一次鐘響才歸還。"
  },
  {
    "word": "consequence",
    "pos": "n.",
    "cn_def": "後果；結果",
    "en_def": "a result of an action, often a bad one",
    "sentence": "A: Some students keep arriving late for the first class, so has the school explained clearly what will happen if they are late again? B: Yes, the letter to parents explains that the {{BLANK}} of being late three times is an after-school detention, and the students must also make up the lessons they missed.",
    "cn": "A：有些學生第一堂課一直遲到，學校有清楚說明如果他們再遲到會怎樣嗎？ B：有，給家長的信中說明遲到三次的【後果】是放學後留校，學生還必須補上錯過的課程。"
  },
  {
    "word": "denial",
    "pos": "n.",
    "cn_def": "否認",
    "en_def": "a statement that something is not true",
    "sentence": "A: The parents believe the bus driver was driving too fast near the school, so what did the transport company say when they called to complain? B: The company issued a firm {{BLANK}} and said the bus was within the speed limit, but they agreed to check the GPS records and share the results with the parents next week.",
    "cn": "A：家長們認為公車司機在學校附近開得太快，他們打電話投訴時，公車公司怎麼說？ B：公司發出了堅決的【否認】，表示公車在速限之內，但他們同意查看GPS紀錄，並在下週和家長分享結果。"
  }
];

const MCQS = [
  {
    "q": "Employees who want to improve their English can _____ in the evening course. The company will pay the full fee for anyone who completes it.",
    "options": [
      "enroll",
      "befriend",
      "distribute",
      "demonstrate"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The receptionist welcomed each visitor with a friendly _____. She then asked them to sign in and wait in the lobby.",
    "options": [
      "denial",
      "priority",
      "greeting",
      "consequence"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Sales of the new laptop showed a _____ increase in the first quarter. Managers were surprised by how quickly customers accepted it.",
    "options": [
      "introverted",
      "remarkable",
      "rushed",
      "timid"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Customer safety is our top _____ at every store. All staff must complete the emergency training before the end of this month.",
    "options": [
      "interval",
      "greeting",
      "temperament",
      "priority"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Many former employees still speak _____ of the company's founder. He was known for remembering everyone's birthday and family.",
    "options": [
      "fondly",
      "timidly",
      "merrily",
      "loudly"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "The new intern knocked _____ on the manager's door. She was nervous because it was her first meeting with a senior executive.",
    "options": [
      "fondly",
      "merrily",
      "timidly",
      "generously"
    ],
    "answer": 2,
    "vocabIndex": 6
  },
  {
    "q": "The printer keeps stopping for _____ reasons. The technician checked every part but still cannot find what is wrong with it.",
    "options": [
      "remarkable",
      "inexplicable",
      "neat",
      "gentle"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The hotel garden is full of _____ roses this spring. Guests often take photos there before the wedding receptions begin.",
    "options": [
      "rushed",
      "introverted",
      "imposing",
      "blooming"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "The bank's headquarters is a very _____ glass tower in the city center. Visitors are often impressed by its size and modern design.",
    "options": [
      "imposing",
      "introverted",
      "rushed",
      "gentle"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Please keep your desk _____ and tidy at the end of each day. The cleaning staff cannot work around piles of paper.",
    "options": [
      "rushed",
      "inexplicable",
      "neat",
      "remarkable"
    ],
    "answer": 2,
    "vocabIndex": 11
  },
  {
    "q": "The sales representative will _____ the new coffee machine at the trade fair. Visitors can watch how it makes ten cups in one minute.",
    "options": [
      "sympathize",
      "demonstrate",
      "befriend",
      "enroll"
    ],
    "answer": 1,
    "vocabIndex": 12
  },
  {
    "q": "The online store sells shoes in _____ colors and sizes. Customers can also return any item within thirty days for free.",
    "options": [
      "introverted",
      "imposing",
      "rushed",
      "various"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "The manager sent the team a _____ reminder about the deadline. She did not want to sound angry, only to help them stay on track.",
    "options": [
      "gentle",
      "imposing",
      "introverted",
      "inexplicable"
    ],
    "answer": 0,
    "vocabIndex": 15
  },
  {
    "q": "Many customers _____ the brand with high quality and good service. That reputation has helped the company grow for over fifty years.",
    "options": [
      "enforce",
      "distribute",
      "associate",
      "snub"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "Nurses need a calm _____ to deal with stressful situations. Patients feel safer when the staff stay relaxed and patient.",
    "options": [
      "denial",
      "temperament",
      "interval",
      "predicament"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "Only staff with ID cards may enter the factory _____ after dark. Security guards check every vehicle at the main gate.",
    "options": [
      "interval",
      "greeting",
      "alphabet",
      "compound"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Volunteers will _____ free water bottles to runners along the route. The event organizers expect more than five thousand participants this year.",
    "options": [
      "distribute",
      "enforce",
      "associate",
      "sympathize"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "The company wants to _____ employees to share their ideas at meetings. Managers will reward the best suggestions with a small bonus.",
    "options": [
      "snub",
      "enforce",
      "encourage",
      "enroll"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Passengers should stay _____ if the train stops suddenly in the tunnel. Staff will give clear instructions over the speakers.",
    "options": [
      "various",
      "calm",
      "inexplicable",
      "introverted"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Many shoppers _____ whether the holiday discount is still available online. The store will answer their questions on its website tomorrow.",
    "options": [
      "enforce",
      "distribute",
      "demonstrate",
      "wonder"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "There will be a short _____ between the two parts of the conference. Guests can enjoy coffee and snacks in the lobby.",
    "options": [
      "interval",
      "compound",
      "priority",
      "denial"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The board made a _____ decision without studying the market report carefully. Now the company must deal with the costly results.",
    "options": [
      "neat",
      "blooming",
      "rushed",
      "introverted"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "The airline's sudden strike left hundreds of travelers in a difficult _____. Many of them had to book expensive hotel rooms overnight.",
    "options": [
      "greeting",
      "predicament",
      "temperament",
      "interval"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Good service staff _____ with customers who have problems. They listen carefully before offering a refund or a replacement.",
    "options": [
      "distribute",
      "encourage",
      "enforce",
      "sympathize"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "The mentor program helps new workers _____ colleagues from other departments. Each newcomer is paired with an experienced employee for three months.",
    "options": [
      "befriend",
      "enforce",
      "demonstrate",
      "distribute"
    ],
    "answer": 0,
    "vocabIndex": 28
  },
  {
    "q": "Although Mark is quite _____ and prefers working alone, he is an excellent programmer. His team relies on his careful and accurate code.",
    "options": [
      "imposing",
      "blooming",
      "introverted",
      "inexplicable"
    ],
    "answer": 2,
    "vocabIndex": 29
  },
  {
    "q": "The famous director chose to _____ the reporters by walking past them without a word. His rude behavior became front-page news the next day.",
    "options": [
      "enroll",
      "snub",
      "associate",
      "sympathize"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "The building manager will strictly _____ the no-smoking policy on every floor. Anyone who breaks the rule will receive a written warning.",
    "options": [
      "befriend",
      "sympathize",
      "wonder",
      "enforce"
    ],
    "answer": 3,
    "vocabIndex": 31
  },
  {
    "q": "Missing the delivery deadline could have a serious _____ for our relationship with the client. We must finish the order by Friday.",
    "options": [
      "consequence",
      "greeting",
      "interval",
      "alphabet"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The company issued an official _____ of the rumors about closing its factory. The spokesperson said all workers would keep their jobs.",
    "options": [
      "priority",
      "greeting",
      "denial",
      "temperament"
    ],
    "answer": 2,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "enroll": {
    "pos": "v.",
    "en_def": "to officially put your name on the list for a school or course",
    "cn_def": "註冊；登記入學"
  },
  "greeting": {
    "pos": "n.",
    "en_def": "words or actions you use when you meet someone",
    "cn_def": "問候；招呼"
  },
  "remarkable": {
    "pos": "adj.",
    "en_def": "unusual or surprising in a good way",
    "cn_def": "非凡的；顯著的"
  },
  "priority": {
    "pos": "n.",
    "en_def": "something more important than other things that must be done first",
    "cn_def": "優先事項"
  },
  "tenderly": {
    "pos": "adv.",
    "en_def": "in a kind, gentle, and loving way",
    "cn_def": "溫柔地；親切地"
  },
  "fondly": {
    "pos": "adv.",
    "en_def": "in a loving way, with happy memories",
    "cn_def": "深情地；懷念地"
  },
  "timidly": {
    "pos": "adv.",
    "en_def": "in a shy, nervous way, without confidence",
    "cn_def": "膽怯地；羞怯地"
  },
  "inexplicable": {
    "pos": "adj.",
    "en_def": "impossible to explain or understand",
    "cn_def": "無法解釋的；莫名其妙的"
  },
  "blooming": {
    "pos": "adj.",
    "en_def": "having flowers that are open; growing well",
    "cn_def": "盛開的；興旺的"
  },
  "imposing": {
    "pos": "adj.",
    "en_def": "large and impressive in appearance",
    "cn_def": "壯觀的；雄偉的"
  },
  "merrily": {
    "pos": "adv.",
    "en_def": "in a happy and cheerful way",
    "cn_def": "愉快地；歡樂地"
  },
  "neat": {
    "pos": "adj.",
    "en_def": "tidy and carefully arranged",
    "cn_def": "整潔的；整齊的"
  },
  "demonstrate": {
    "pos": "v.",
    "en_def": "to show how something works or how to do it",
    "cn_def": "示範；展示"
  },
  "various": {
    "pos": "adj.",
    "en_def": "several different kinds",
    "cn_def": "各種的；各式各樣的"
  },
  "verandah": {
    "pos": "n.",
    "en_def": "a covered area with a roof along the outside of a building",
    "cn_def": "陽台；遊廊"
  },
  "gentle": {
    "pos": "adj.",
    "en_def": "kind, calm, and careful, not rough",
    "cn_def": "溫和的；溫柔的"
  },
  "associate": {
    "pos": "v.",
    "en_def": "to connect one thing with another in your mind",
    "cn_def": "把…聯想在一起；聯繫"
  },
  "temperament": {
    "pos": "n.",
    "en_def": "a person's usual nature and the way they behave",
    "cn_def": "性情；氣質"
  },
  "compound": {
    "pos": "n.",
    "en_def": "an area with buildings surrounded by a fence or wall",
    "cn_def": "有圍牆的建築群；園區"
  },
  "distribute": {
    "pos": "v.",
    "en_def": "to give things to many people",
    "cn_def": "分發；分配"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone support and confidence to do something",
    "cn_def": "鼓勵"
  },
  "calm": {
    "pos": "adj.",
    "en_def": "not worried, angry, or excited",
    "cn_def": "冷靜的；平靜的"
  },
  "wonder": {
    "pos": "v.",
    "en_def": "to want to know something; to ask yourself",
    "cn_def": "想知道；納悶"
  },
  "alphabet": {
    "pos": "n.",
    "en_def": "the set of letters used to write a language, in order",
    "cn_def": "字母表"
  },
  "interval": {
    "pos": "n.",
    "en_def": "a short break between parts of a show or event; a period of time between two things",
    "cn_def": "間隔；中場休息"
  },
  "rushed": {
    "pos": "adj.",
    "en_def": "done too quickly because there is not enough time",
    "cn_def": "匆忙的；倉促的"
  },
  "predicament": {
    "pos": "n.",
    "en_def": "a difficult situation that is hard to get out of",
    "cn_def": "困境；窘境"
  },
  "sympathize": {
    "pos": "v.",
    "en_def": "to understand and care about someone's feelings or problems",
    "cn_def": "同情；體諒"
  },
  "befriend": {
    "pos": "v.",
    "en_def": "to become a friend to someone, especially someone who needs help",
    "cn_def": "與…交朋友；照顧"
  },
  "introverted": {
    "pos": "adj.",
    "en_def": "quiet and shy, and enjoying time alone",
    "cn_def": "內向的"
  },
  "snub": {
    "pos": "v.",
    "en_def": "to treat someone rudely by ignoring them",
    "cn_def": "冷落；怠慢"
  },
  "enforce": {
    "pos": "v.",
    "en_def": "to make sure people obey a rule or law",
    "cn_def": "執行；強制實施"
  },
  "consequence": {
    "pos": "n.",
    "en_def": "a result of an action, often a bad one",
    "cn_def": "後果；結果"
  },
  "denial": {
    "pos": "n.",
    "en_def": "a statement that something is not true",
    "cn_def": "否認"
  }
};

const EXTRA_GLOSSES = {};
