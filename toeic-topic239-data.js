// Topic 239 Quiz Data: Middle School 中學
// Source word list: https://www.examword.com/group-topic/middle-school — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T239 - Middle School 中學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "transition",
    "pos": "n.",
    "cn_def": "過渡；轉變",
    "en_def": "the change from one stage or situation to another",
    "sentence": "A: My daughter is moving from elementary school to a much bigger middle school this fall, and she seems worried about it, so what can parents do to help? B: Many schools hold a welcome day in August, which makes the {{BLANK}} easier because children can meet their new teachers and walk around the building first.",
    "cn": "A：我女兒今年秋天要從小學升上規模大很多的中學，她似乎很擔心，家長能做些什麼來幫忙？ B：很多學校會在八月舉辦迎新日，這會讓【過渡】變得比較容易，因為孩子們可以先認識新老師並在校園裡走一走。"
  },
  {
    "word": "adolescent",
    "pos": "n.",
    "cn_def": "青少年",
    "en_def": "a young person who is developing from a child into an adult",
    "sentence": "A: Our company is designing a new reading app for students between twelve and fifteen, so who should we ask for feedback before we launch it next spring? B: We should invite a group of local parents and at least one {{BLANK}} from each grade to test it, because young users will tell us honestly what feels boring.",
    "cn": "A：我們公司正在為十二到十五歲的學生設計一款新的閱讀應用程式，那我們明年春天推出前應該找誰提供意見？ B：我們應該邀請一群當地家長，以及每個年級至少一位【青少年】來測試，因為年輕使用者會誠實告訴我們哪裡很無聊。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程；全部課程",
    "en_def": "all the subjects and courses that a school teaches",
    "sentence": "A: The school board has asked us to add more coding and financial skills to the lessons for seventh graders, but when will the changes actually start? B: The committee plans to update the {{BLANK}} over the summer, so teachers will receive new materials and training before classes begin in September.",
    "cn": "A：學校董事會要求我們在七年級的課程中加入更多程式設計和理財技能，但這些改變實際上什麼時候開始？ B：委員會計畫在暑假期間更新【課程】，所以老師們會在九月開學前拿到新教材並接受培訓。"
  },
  {
    "word": "locker",
    "pos": "n.",
    "cn_def": "置物櫃",
    "en_def": "a small metal cupboard with a lock where students keep their things",
    "sentence": "A: My son keeps carrying all of his heavy textbooks to every class, and his back hurts by the afternoon, so is there anywhere safe to leave them at school? B: Every student gets a {{BLANK}} near the main hallway on the first day, so he can store his books there and only take what he needs.",
    "cn": "A：我兒子每堂課都背著所有沉重的課本，到了下午背就很痛，學校裡有沒有安全的地方可以放書？ B：每位學生第一天都會在主要走廊附近分到一個【置物櫃】，所以他可以把書放在那裡，只帶需要的東西。"
  },
  {
    "word": "peer",
    "pos": "n.",
    "cn_def": "同儕；同齡人",
    "en_def": "a person who is the same age or has the same position as you",
    "sentence": "A: Some of our younger students are struggling with math homework, but they feel shy about asking teachers for help after class, so what should we try next term? B: Let's start a tutoring program where each student works with a {{BLANK}} from a higher grade, because kids often relax more with someone closer to their age.",
    "cn": "A：我們有些年紀較小的學生在數學作業上很吃力，但他們不好意思下課後向老師求助，下學期我們應該嘗試什麼？ B：我們來開辦一個輔導計畫，讓每位學生和一位高年級的【同儕】一起學習，因為孩子們跟年紀相近的人在一起通常比較放鬆。"
  },
  {
    "word": "responsibility",
    "pos": "n.",
    "cn_def": "責任",
    "en_def": "a duty to take care of something or someone",
    "sentence": "A: Our class is going to keep two rabbits in the science room this year, but who will feed them and clean their cage during the school week? B: Each pair of students will take {{BLANK}} for the animals for one week at a time, which teaches them to be reliable and to plan ahead.",
    "cn": "A：我們班今年要在自然教室養兩隻兔子，但上課期間誰來餵牠們、清理籠子？ B：每組兩位學生會輪流負起照顧動物一週的【責任】，這能教他們做事可靠並提前規劃。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "家庭作業",
    "en_def": "schoolwork that students must do at home",
    "sentence": "A: Several parents have complained that their children are staying up past midnight to finish their assignments, so what is the school doing about the problem? B: The principal has asked all teachers to limit {{BLANK}} to about ninety minutes per night, so students can still rest, exercise, and spend time with their families.",
    "cn": "A：好幾位家長抱怨孩子為了完成作業熬夜到半夜，學校對這個問題採取了什麼措施？ B：校長已要求所有老師把每晚的【家庭作業】限制在大約九十分鐘，讓學生仍然能休息、運動並陪伴家人。"
  },
  {
    "word": "schedule",
    "pos": "n.",
    "cn_def": "時間表；課表",
    "en_def": "a plan that lists the times when things will happen",
    "sentence": "A: I've just started working at the middle school office, and parents keep calling to ask when the science fair and sports day will take place, so where can I find that information? B: The full {{BLANK}} for the semester is posted on the school website, and you can also print a copy from the shared folder on your computer.",
    "cn": "A：我剛開始在中學辦公室工作，家長一直打電話來問科展和運動會什麼時候舉行，我可以在哪裡找到這些資訊？ B：整學期完整的【時間表】都公布在學校網站上，你也可以從電腦裡的共用資料夾列印一份。"
  },
  {
    "word": "elective",
    "pos": "n.",
    "cn_def": "選修課",
    "en_def": "a course that a student chooses to take, not one that is required",
    "sentence": "A: My daughter has finished all her required classes for eighth grade, and now she has one free period each afternoon, so what can she do with that time? B: She can sign up for an {{BLANK}} such as photography, cooking, or robotics, because the school wants students to explore their own interests outside the main subjects.",
    "cn": "A：我女兒已經修完八年級所有必修課，現在每天下午有一節空堂，她可以利用那段時間做什麼？ B：她可以報名一門【選修課】，例如攝影、烹飪或機器人，因為學校希望學生在主科以外探索自己的興趣。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "輔導；指導",
    "en_def": "help and advice about what to do",
    "sentence": "A: My son can't decide which high school he should apply to next year, and we don't know much about the different programs, so who can we talk to? B: The school counselor offers free {{BLANK}} every Tuesday afternoon, and she can explain the options and help him choose a school that matches his strengths.",
    "cn": "A：我兒子無法決定明年該申請哪所高中，我們對各種學程也不太了解，可以找誰談談？ B：學校輔導老師每週二下午提供免費的【輔導】，她可以說明各種選擇，並幫助他選一所適合他長處的學校。"
  },
  {
    "word": "independence",
    "pos": "n.",
    "cn_def": "獨立；自主",
    "en_def": "the ability to do things for yourself without help from others",
    "sentence": "A: Why does the school ask seventh graders to plan their own study time and pack their own bags for the class camping trip in October? B: The teachers believe it helps them build {{BLANK}}, because children who learn to manage small tasks alone become more confident when they face bigger challenges later.",
    "cn": "A：為什麼學校要七年級學生自己規劃讀書時間，並為十月的班級露營自己打包行李？ B：老師們相信這能幫助他們培養【獨立】，因為學會自己處理小事的孩子，日後面對更大挑戰時會更有自信。"
  },
  {
    "word": "assessment",
    "pos": "n.",
    "cn_def": "評量；評估",
    "en_def": "the process of judging how well someone has learned or performed",
    "sentence": "A: At the parent meeting last night, several people asked how the school decides whether students are ready to join the advanced English class, so what should I tell them? B: Explain that every student takes a short written and spoken {{BLANK}} in May, and the teachers use the results together with classroom work to make the decision.",
    "cn": "A：昨晚家長會上，好幾位家長問學校如何決定學生是否能加入英文進階班，我該怎麼回答他們？ B：向他們說明每位學生五月都會參加一次簡短的筆試和口說【評量】，老師會把結果和平時課堂表現一起考量來做決定。"
  },
  {
    "word": "bullying",
    "pos": "n.",
    "cn_def": "霸凌",
    "en_def": "behavior that hurts or frightens someone weaker, often again and again",
    "sentence": "A: A parent called this morning because her son has been receiving unkind messages from classmates on a group chat, so how should our office respond? B: Please report it to the counselor right away, since the school has a strict policy against {{BLANK}}, and she will meet both families to stop the problem quickly.",
    "cn": "A：今天早上有位家長打電話來，因為她兒子一直在群組聊天裡收到同學的惡意訊息，我們辦公室應該如何處理？ B：請立刻通報輔導老師，因為學校對【霸凌】有嚴格的規定，她會和雙方家庭見面，盡快制止這個問題。"
  },
  {
    "word": "extracurricular",
    "pos": "adj.",
    "cn_def": "課外的",
    "en_def": "done outside the usual school lessons, like clubs and sports",
    "sentence": "A: When universities look at my daughter's application in a few years, will they only care about her grades, or do other experiences matter too? B: Many admissions officers also look at {{BLANK}} activities such as the debate club, volunteer work, or the school band, because those show leadership and real interests.",
    "cn": "A：幾年後大學在審查我女兒的申請時，他們只會在乎成績，還是其他經歷也很重要？ B：很多招生人員也會看【課外】活動，例如辯論社、志工服務或學校樂團，因為這些能展現領導力和真正的興趣。"
  },
  {
    "word": "motivation",
    "pos": "n.",
    "cn_def": "動機；動力",
    "en_def": "the desire or reason to do something or to work hard",
    "sentence": "A: Our science teacher noticed that students seemed bored with the textbook chapters on energy last semester, so what did she change to keep them interested? B: She started giving small team challenges, like building solar ovens outside, and the students' {{BLANK}} improved because they could see how the lessons worked in real life.",
    "cn": "A：我們的自然老師注意到上學期學生對課本中能源的章節似乎感到無聊，她做了什麼改變來讓他們保持興趣？ B：她開始給小組一些小挑戰，例如在戶外製作太陽能烤箱，學生的【動力】就提升了，因為他們能看到課程在真實生活中如何運用。"
  },
  {
    "word": "organization",
    "pos": "n.",
    "cn_def": "條理；組織能力",
    "en_def": "the ability to plan and arrange things in a neat, sensible way",
    "sentence": "A: My son often forgets his assignments and loses worksheets somewhere in his messy backpack, so is there any program at school that could help him? B: The study center runs a weekly workshop on {{BLANK}}, where students learn to use planners, color-coded folders, and simple checklists to keep track of their work.",
    "cn": "A：我兒子常常忘記作業，學習單也弄丟在他亂七八糟的背包裡，學校有沒有什麼課程能幫助他？ B：學習中心每週都會舉辦一場關於【條理】的工作坊，學生可以學習使用計畫本、顏色分類資料夾和簡單的檢查清單來管理自己的功課。"
  },
  {
    "word": "confidence",
    "pos": "n.",
    "cn_def": "自信",
    "en_def": "the feeling that you can do something well",
    "sentence": "A: My daughter used to be very quiet in class and never raised her hand, but her teacher says she has changed a lot this term, so what happened? B: Joining the drama club gave her more {{BLANK}}, and after performing on stage in front of two hundred people, speaking up in class no longer feels scary to her.",
    "cn": "A：我女兒以前上課很安靜，從不舉手，但她的老師說她這學期改變很多，發生了什麼事？ B：加入戲劇社讓她更有【自信】，在兩百人面前上台表演之後，在課堂上發言對她來說已經不再可怕了。"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "cn_def": "教室",
    "en_def": "a room in a school where lessons are taught",
    "sentence": "A: The furniture company is delivering the new desks and chairs to the middle school on Friday, so where exactly should the workers put everything? B: Please ask them to set up the furniture in the third-floor {{BLANK}} next to the library, since the old tables there are broken and the students need them by Monday.",
    "cn": "A：家具公司週五要把新的桌椅送到中學，工人們究竟該把東西放在哪裡？ B：請他們把家具擺放在三樓圖書館旁邊的【教室】，因為那裡舊的桌子壞了，學生週一前就需要用。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律；管教",
    "en_def": "the practice of making people obey rules and behave well",
    "sentence": "A: The new teacher says her eighth-grade class talks loudly during lessons and ignores her instructions, so what advice did the head teacher give her? B: He told her to set clear rules on the first day and apply them fairly every time, because good {{BLANK}} depends more on being consistent than on being strict.",
    "cn": "A：新老師說她的八年級班上課時大聲講話，也不理會她的指示，主任給了她什麼建議？ B：他告訴她第一天就訂出清楚的規則，並每次都公平地執行，因為良好的【紀律】靠的是一致性，而不是嚴厲。"
  },
  {
    "word": "participation",
    "pos": "n.",
    "cn_def": "參與",
    "en_def": "the act of taking part in an activity",
    "sentence": "A: Only a few students joined the school's recycling project last year, so how can we get more of them involved when it starts again in March? B: We could give points toward the class prize for {{BLANK}}, and ask student leaders to promote the project in morning announcements and on posters around the building.",
    "cn": "A：去年只有少數學生加入學校的資源回收計畫，那三月重新開始時，我們要怎麼讓更多學生參與？ B：我們可以為【參與】提供班級獎項的積分，並請學生幹部在早上的廣播和校園各處的海報上宣傳這個計畫。"
  },
  {
    "word": "friendship",
    "pos": "n.",
    "cn_def": "友誼",
    "en_def": "a relationship between people who like and trust each other",
    "sentence": "A: My son was very lonely after we moved to Taichung for my new job last year, but now he seems much happier at school, so what changed? B: He joined the basketball team in the spring, and a close {{BLANK}} with two of his teammates grew quickly because they practice together almost every afternoon.",
    "cn": "A：去年我們因為我的新工作搬到台中後，我兒子非常孤單，但現在他在學校似乎快樂多了，是什麼改變了？ B：他春天加入了籃球隊，因為幾乎每天下午都一起練習，他和兩位隊友很快就建立了深厚的【友誼】。"
  },
  {
    "word": "growth",
    "pos": "n.",
    "cn_def": "成長",
    "en_def": "the process of developing or becoming bigger or better",
    "sentence": "A: Why does the school send parents a detailed report twice a year instead of only giving a list of test scores at the end of each semester? B: The report describes each child's {{BLANK}} in areas like reading, social skills, and problem solving, so families can see progress that grades alone cannot show.",
    "cn": "A：為什麼學校一年寄兩次詳細的報告給家長，而不是只在每學期末給一份考試成績單？ B：這份報告描述每個孩子在閱讀、社交能力和解決問題等方面的【成長】，讓家庭能看到光靠成績無法呈現的進步。"
  },
  {
    "word": "stress",
    "pos": "n.",
    "cn_def": "壓力",
    "en_def": "a feeling of worry caused by difficult situations or too much work",
    "sentence": "A: Many ninth graders look tired and anxious these days because the high school entrance exam is only two months away, so is the school offering any support? B: The counselors are running short lunchtime sessions on breathing and time management, which help students reduce {{BLANK}} and sleep better before the big test.",
    "cn": "A：最近很多九年級學生看起來疲倦又焦慮，因為高中入學考試只剩兩個月，學校有提供任何支援嗎？ B：輔導老師們在午休時間開設簡短的呼吸和時間管理課程，幫助學生減輕【壓力】，在大考前睡得更好。"
  },
  {
    "word": "teamwork",
    "pos": "n.",
    "cn_def": "團隊合作",
    "en_def": "working well together with other people to reach a goal",
    "sentence": "A: Why did the science teacher divide the class into groups of four for the bridge-building project instead of letting each student work alone this time? B: She wanted them to practice {{BLANK}}, because in most future jobs they will need to share ideas, divide tasks, and solve problems with coworkers.",
    "cn": "A：為什麼自然老師這次在造橋專題中把全班分成四人一組，而不是讓每個學生各自做？ B：她希望他們練習【團隊合作】，因為在未來大多數的工作中，他們都需要和同事分享想法、分工並一起解決問題。"
  },
  {
    "word": "rule",
    "pos": "n.",
    "cn_def": "規定；規則",
    "en_def": "an official statement about what people must or must not do",
    "sentence": "A: I noticed that the students put their phones in a box when they arrive in the morning, so is that the teacher's idea or a policy for the whole school? B: It's a new {{BLANK}} for every grade this year, because the principal wants students to focus during lessons and talk to each other more at lunch.",
    "cn": "A：我注意到學生早上到校時會把手機放進一個箱子裡，這是老師的想法，還是全校的政策？ B：這是今年各年級的新【規定】，因為校長希望學生上課時專心，午餐時多和彼此交談。"
  },
  {
    "word": "teacher",
    "pos": "n.",
    "cn_def": "老師；教師",
    "en_def": "a person whose job is to help students learn",
    "sentence": "A: Our company wants to offer free English workshops for local middle school students on Saturday mornings, but none of our staff have classroom experience, so who should lead them? B: Let's hire an experienced {{BLANK}} from the nearby school, because someone who works with children every day will know how to keep the lessons fun and clear.",
    "cn": "A：我們公司想在週六早上為當地中學生提供免費英文工作坊，但我們的員工都沒有教學經驗，應該由誰來帶領？ B：我們從附近學校聘請一位有經驗的【老師】吧，因為每天和孩子相處的人會知道如何讓課程既有趣又清楚。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "作業；功課",
    "en_def": "a piece of work that a student is given to do",
    "sentence": "A: My daughter missed three days of school last week because of a family trip to Japan, so how can she catch up with what her class did while she was away? B: She should check the online class page, where each teacher posts every {{BLANK}} with clear instructions and a due date, and she can email them if she has questions.",
    "cn": "A：我女兒上週因為家庭旅遊去日本，缺課了三天，她要怎麼趕上班上在她不在時的進度？ B：她應該查看線上班級網頁，每位老師都會把每份【作業】連同清楚的說明和繳交期限放在上面，有問題的話她可以寄電子郵件給老師。"
  },
  {
    "word": "behavior",
    "pos": "n.",
    "cn_def": "行為；舉止",
    "en_def": "the way that someone acts",
    "sentence": "A: The bus driver says some students have been standing on their seats and shouting on the way home, so what is the school going to do about it? B: The vice principal will speak to those students and their parents this week, and anyone whose {{BLANK}} does not improve may lose bus service for a few days.",
    "cn": "A：校車司機說有些學生在回家路上站在座位上大叫，學校打算怎麼處理？ B：副校長這週會和那些學生及家長談話，【行為】沒有改善的人可能會被暫停搭乘校車幾天。"
  },
  {
    "word": "adjustment",
    "pos": "n.",
    "cn_def": "適應；調整",
    "en_def": "a change you make to get used to a new situation",
    "sentence": "A: Our family relocated from Canada to Taipei last month for my husband's job, and my son is starting at a local middle school, so how long do children usually need to settle in? B: Most students need a few months for the {{BLANK}}, especially with a new language, so be patient and keep in close contact with his homeroom teacher.",
    "cn": "A：上個月我們家因為我先生的工作從加拿大搬到台北，我兒子要開始上當地的中學，孩子通常需要多久才能安頓下來？ B：大多數學生需要幾個月來【適應】，尤其是面對新的語言，所以要有耐心，並和他的班導師保持密切聯繫。"
  },
  {
    "word": "achievement",
    "pos": "n.",
    "cn_def": "成就；成績",
    "en_def": "something good that you have done through effort or skill",
    "sentence": "A: The school is holding a ceremony in the main hall on Friday afternoon, so what kinds of awards will students receive in front of their parents? B: Teachers will celebrate every important {{BLANK}} of the year, including top grades, science fair prizes, community service, and great improvement in difficult subjects.",
    "cn": "A：學校週五下午要在大禮堂舉行典禮，學生會在家長面前獲得哪些獎項？ B：老師們會表揚這一年每一項重要的【成就】，包括優異成績、科展得獎、社區服務，以及在困難科目上的大幅進步。"
  }
];

const MCQS = [
  {
    "q": "The _____ from elementary to middle school can be hard for some children. Teachers try to make the first week relaxing and friendly.",
    "options": [
      "transition",
      "discipline",
      "assessment",
      "locker"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "The clinic offers free health checks for any _____ between twelve and seventeen. Parents must sign a form before the visit.",
    "options": [
      "teacher",
      "adolescent",
      "classroom",
      "peer"
    ],
    "answer": 1,
    "vocabIndex": 1
  },
  {
    "q": "The new _____ includes two hours of coding each week for all eighth graders. It will be introduced next September.",
    "options": [
      "locker",
      "friendship",
      "curriculum",
      "behavior"
    ],
    "answer": 2,
    "vocabIndex": 2
  },
  {
    "q": "Please put your gym clothes in your _____ before the first class. The hallways must be kept clear for safety.",
    "options": [
      "curriculum",
      "schedule",
      "growth",
      "locker"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "Students often learn faster when they explain ideas to a _____ in their own class. This method also builds strong friendships.",
    "options": [
      "rule",
      "peer",
      "locker",
      "curriculum"
    ],
    "answer": 1,
    "vocabIndex": 4
  },
  {
    "q": "Parents should give children small tasks at home to teach them _____. Feeding a pet or washing dishes are good examples.",
    "options": [
      "stress",
      "bullying",
      "transition",
      "responsibility"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The teacher reminded the class to finish their math _____ before Friday. Late work will lose ten percent of the score.",
    "options": [
      "homework",
      "friendship",
      "independence",
      "adolescent"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "The school bus _____ has changed because of road repairs downtown. Buses will now leave fifteen minutes earlier each morning.",
    "options": [
      "confidence",
      "guidance",
      "schedule",
      "peer"
    ],
    "answer": 2,
    "vocabIndex": 7
  },
  {
    "q": "Every ninth grader must choose one _____ from the list, such as music or art. The forms are due next Monday.",
    "options": [
      "assessment",
      "stress",
      "teacher",
      "elective"
    ],
    "answer": 3,
    "vocabIndex": 8
  },
  {
    "q": "With the counselor's _____, my son finally decided to apply to a technical high school. He is now excited about his future.",
    "options": [
      "guidance",
      "locker",
      "behavior",
      "rule"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Living in the school dormitory during the week helped her gain _____. She learned to cook simple meals and manage her money.",
    "options": [
      "homework",
      "classroom",
      "independence",
      "assignment"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "The math department designed a new online _____ for all seventh graders. The results will help teachers group students by level.",
    "options": [
      "friendship",
      "assessment",
      "locker",
      "motivation"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The school started a phone hotline so students can report _____ without giving their names. Every call is handled by a counselor.",
    "options": [
      "bullying",
      "achievement",
      "elective",
      "growth"
    ],
    "answer": 0,
    "vocabIndex": 12
  },
  {
    "q": "Students may join one _____ club after school, such as chess or tennis. Most clubs meet on Wednesday afternoons from three to five.",
    "options": [
      "adolescent",
      "independent",
      "responsible",
      "extracurricular"
    ],
    "answer": 3,
    "vocabIndex": 13
  },
  {
    "q": "Small rewards like stickers can increase students' _____ to read more books. The library gives prizes every month to top readers.",
    "options": [
      "discipline",
      "motivation",
      "transition",
      "locker"
    ],
    "answer": 1,
    "vocabIndex": 14
  },
  {
    "q": "Good _____ is important when students have many projects at once. Keeping a weekly planner can prevent missed deadlines.",
    "options": [
      "bullying",
      "adolescent",
      "organization",
      "friendship"
    ],
    "answer": 2,
    "vocabIndex": 15
  },
  {
    "q": "Giving a speech at the school assembly greatly improved his _____. He now volunteers to present in every English class.",
    "options": [
      "schedule",
      "confidence",
      "curriculum",
      "rule"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Each _____ is equipped with a projector and air conditioning. Teachers must turn off the power before leaving at night.",
    "options": [
      "classroom",
      "assessment",
      "growth",
      "motivation"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "The principal believes that _____ should be firm but fair. Students who break rules must help clean the campus after school.",
    "options": [
      "friendship",
      "elective",
      "locker",
      "discipline"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Student _____ in the charity run reached a record high this year. More than five hundred children joined the event on Sunday.",
    "options": [
      "discipline",
      "curriculum",
      "participation",
      "adjustment"
    ],
    "answer": 2,
    "vocabIndex": 19
  },
  {
    "q": "Their _____ began on the first day of seventh grade when they shared a desk. Ten years later, they started a business together.",
    "options": [
      "friendship",
      "assessment",
      "locker",
      "schedule"
    ],
    "answer": 0,
    "vocabIndex": 20
  },
  {
    "q": "Regular exercise and healthy meals support children's physical _____. The school cafeteria now serves more fresh vegetables.",
    "options": [
      "bullying",
      "growth",
      "rule",
      "assignment"
    ],
    "answer": 1,
    "vocabIndex": 21
  },
  {
    "q": "Too much _____ before exams can make it hard for students to sleep. Short breaks and light exercise can help a lot.",
    "options": [
      "achievement",
      "peer",
      "elective",
      "stress"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "The soccer coach said that strong _____ won the final match. Every player passed the ball and supported each other.",
    "options": [
      "teamwork",
      "homework",
      "locker",
      "assessment"
    ],
    "answer": 0,
    "vocabIndex": 23
  },
  {
    "q": "According to the school _____, students must wear their uniforms on Mondays. Sports clothes are allowed only on gym days.",
    "options": [
      "growth",
      "peer",
      "rule",
      "motivation"
    ],
    "answer": 2,
    "vocabIndex": 24
  },
  {
    "q": "Our homeroom _____ sends parents a short email every Friday. It lists upcoming tests and important school events.",
    "options": [
      "locker",
      "curriculum",
      "elective",
      "teacher"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "The history _____ asks students to interview an older family member. The final report must be at least two pages long.",
    "options": [
      "confidence",
      "assignment",
      "discipline",
      "stress"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The teacher praised the class for their excellent _____ during the museum trip. They listened carefully and stayed with the group.",
    "options": [
      "behavior",
      "curriculum",
      "locker",
      "schedule"
    ],
    "answer": 0,
    "vocabIndex": 27
  },
  {
    "q": "Moving to a new country requires a big _____ for young students. The school provides extra language support for newcomers.",
    "options": [
      "locker",
      "homework",
      "adjustment",
      "rule"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "Winning first prize at the national science fair was a great _____ for our school. The team will travel to Tokyo next spring.",
    "options": [
      "locker",
      "achievement",
      "peer",
      "schedule"
    ],
    "answer": 1,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "transition": {
    "pos": "n.",
    "en_def": "the change from one stage or situation to another",
    "cn_def": "過渡；轉變"
  },
  "adolescent": {
    "pos": "n.",
    "en_def": "a young person who is developing from a child into an adult",
    "cn_def": "青少年"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects and courses that a school teaches",
    "cn_def": "課程；全部課程"
  },
  "locker": {
    "pos": "n.",
    "en_def": "a small metal cupboard with a lock where students keep their things",
    "cn_def": "置物櫃"
  },
  "peer": {
    "pos": "n.",
    "en_def": "a person who is the same age or has the same position as you",
    "cn_def": "同儕；同齡人"
  },
  "responsibility": {
    "pos": "n.",
    "en_def": "a duty to take care of something or someone",
    "cn_def": "責任"
  },
  "homework": {
    "pos": "n.",
    "en_def": "schoolwork that students must do at home",
    "cn_def": "家庭作業"
  },
  "schedule": {
    "pos": "n.",
    "en_def": "a plan that lists the times when things will happen",
    "cn_def": "時間表；課表"
  },
  "elective": {
    "pos": "n.",
    "en_def": "a course that a student chooses to take, not one that is required",
    "cn_def": "選修課"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about what to do",
    "cn_def": "輔導；指導"
  },
  "independence": {
    "pos": "n.",
    "en_def": "the ability to do things for yourself without help from others",
    "cn_def": "獨立；自主"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "the process of judging how well someone has learned or performed",
    "cn_def": "評量；評估"
  },
  "bullying": {
    "pos": "n.",
    "en_def": "behavior that hurts or frightens someone weaker, often again and again",
    "cn_def": "霸凌"
  },
  "extracurricular": {
    "pos": "adj.",
    "en_def": "done outside the usual school lessons, like clubs and sports",
    "cn_def": "課外的"
  },
  "motivation": {
    "pos": "n.",
    "en_def": "the desire or reason to do something or to work hard",
    "cn_def": "動機；動力"
  },
  "organization": {
    "pos": "n.",
    "en_def": "the ability to plan and arrange things in a neat, sensible way",
    "cn_def": "條理；組織能力"
  },
  "confidence": {
    "pos": "n.",
    "en_def": "the feeling that you can do something well",
    "cn_def": "自信"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room in a school where lessons are taught",
    "cn_def": "教室"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "the practice of making people obey rules and behave well",
    "cn_def": "紀律；管教"
  },
  "participation": {
    "pos": "n.",
    "en_def": "the act of taking part in an activity",
    "cn_def": "參與"
  },
  "friendship": {
    "pos": "n.",
    "en_def": "a relationship between people who like and trust each other",
    "cn_def": "友誼"
  },
  "growth": {
    "pos": "n.",
    "en_def": "the process of developing or becoming bigger or better",
    "cn_def": "成長"
  },
  "stress": {
    "pos": "n.",
    "en_def": "a feeling of worry caused by difficult situations or too much work",
    "cn_def": "壓力"
  },
  "teamwork": {
    "pos": "n.",
    "en_def": "working well together with other people to reach a goal",
    "cn_def": "團隊合作"
  },
  "rule": {
    "pos": "n.",
    "en_def": "an official statement about what people must or must not do",
    "cn_def": "規定；規則"
  },
  "teacher": {
    "pos": "n.",
    "en_def": "a person whose job is to help students learn",
    "cn_def": "老師；教師"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work that a student is given to do",
    "cn_def": "作業；功課"
  },
  "behavior": {
    "pos": "n.",
    "en_def": "the way that someone acts",
    "cn_def": "行為；舉止"
  },
  "adjustment": {
    "pos": "n.",
    "en_def": "a change you make to get used to a new situation",
    "cn_def": "適應；調整"
  },
  "achievement": {
    "pos": "n.",
    "en_def": "something good that you have done through effort or skill",
    "cn_def": "成就；成績"
  }
};

const EXTRA_GLOSSES = {};
