// Topic 56 Quiz Data: Children's Education 兒童教育
// Source word list: https://www.examword.com/group-topic/children-education — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T56 - Children's Education 兒童教育",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "education",
    "pos": "n.",
    "cn_def": "教育",
    "en_def": "the process of teaching and learning, especially at school",
    "sentence": "A: Our company is thinking about opening a training center for the children of our factory workers, so what do you think parents care about most? B: Most of them want their kids to get a good {{BLANK}}, because they believe that strong schooling will help their children find better jobs than they had.",
    "cn": "A：我們公司正考慮為工廠員工的孩子開設一個培訓中心，你覺得家長最在乎的是什麼？ B：他們大多數希望孩子能受到良好的【教育】，因為他們相信紮實的學校教育能幫助孩子找到比自己更好的工作。"
  },
  {
    "word": "schooling",
    "pos": "n.",
    "cn_def": "學校教育",
    "en_def": "the education a child receives at school",
    "sentence": "A: The new manager from Singapore said she moved here with her two sons last month, so where are the boys studying now? B: They are attending an international school near the station, and she told me that their {{BLANK}} costs a lot but the small classes are worth the money.",
    "cn": "A：新來的新加坡經理說她上個月帶著兩個兒子搬來這裡，那兩個男孩現在在哪裡讀書？ B：他們在車站附近的一所國際學校上學，她告訴我他們的【學校教育】花費很高，但小班制是值得的。"
  },
  {
    "word": "learning",
    "pos": "n.",
    "cn_def": "學習",
    "en_def": "the process of gaining knowledge or skills",
    "sentence": "A: Why did the library decide to buy so many tablets and educational games for the children's corner this year? B: The director believes that {{BLANK}} should be fun, so she wants young visitors to explore science and language through games instead of just sitting quietly with heavy books.",
    "cn": "A：圖書館今年為什麼決定為兒童區購買這麼多平板電腦和教育遊戲？ B：館長認為【學習】應該是有趣的，所以她希望年幼的訪客能透過遊戲探索科學和語言，而不只是安靜地坐著看厚重的書。"
  },
  {
    "word": "teach",
    "pos": "v.",
    "cn_def": "教；教導",
    "en_def": "to show or explain to someone how to do something",
    "sentence": "A: I heard you are volunteering at the community center on Saturday mornings, so what exactly do you do there with the kids? B: I {{BLANK}} a group of ten-year-olds how to use simple computer programs, and afterward we usually play board games together until their parents arrive.",
    "cn": "A：我聽說你週六早上在社區中心當志工，你在那裡和孩子們具體做些什麼？ B：我【教】一群十歲的孩子如何使用簡單的電腦程式，之後我們通常會一起玩桌遊，直到他們的父母來接。"
  },
  {
    "word": "teacher",
    "pos": "n.",
    "cn_def": "老師",
    "en_def": "a person whose job is to help students learn",
    "sentence": "A: Your daughter seems much more confident about speaking English than she was last year, so what made the biggest difference for her? B: Her new {{BLANK}} at the language school is very patient, and she always gives every child a chance to speak in front of the class without feeling nervous.",
    "cn": "A：你女兒說英文似乎比去年有自信多了，對她來說最大的改變是什麼？ B：她在語言學校的新【老師】非常有耐心，總是給每個孩子在全班面前說話的機會，而不會讓他們感到緊張。"
  },
  {
    "word": "student",
    "pos": "n.",
    "cn_def": "學生",
    "en_def": "a person who is studying at a school or university",
    "sentence": "A: The science museum is offering free tickets next month, but does the offer include everyone or only certain groups of visitors? B: Any {{BLANK}} under eighteen can get in for free if they show a school ID card at the front desk, so it is a great chance for families.",
    "cn": "A：科學博物館下個月提供免費門票，但這個優惠是適用所有人還是只限特定族群的訪客？ B：任何未滿十八歲的【學生】只要在櫃台出示學生證就能免費入場，所以這對家庭來說是個很好的機會。"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "all the subjects that are taught in a school",
    "sentence": "A: The board of education announced some major changes for elementary schools starting next September, so what will be different for the kids? B: The new {{BLANK}} will include coding classes and more outdoor science projects, and schools will reduce the number of tests that students take each term.",
    "cn": "A：教育局宣布從明年九月起國小將有一些重大改變，對孩子來說會有什麼不同？ B：新的【課程】將包含程式設計課和更多戶外科學專題，而且學校會減少學生每學期的考試次數。"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "cn_def": "一堂課；課程",
    "en_def": "a period of time in which someone is taught something",
    "sentence": "A: Is your son still taking swimming classes at the sports center near your apartment, or did he stop after the summer vacation? B: He still goes every Wednesday, and each {{BLANK}} lasts about forty-five minutes, so I can finish my shopping at the supermarket before I pick him up.",
    "cn": "A：你兒子還在你公寓附近的運動中心上游泳課嗎？還是暑假後就停了？ B：他還是每週三去，每一【堂課】大約四十五分鐘，所以我可以在接他之前先在超市買完東西。"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "cn_def": "教室",
    "en_def": "a room where students have lessons",
    "sentence": "A: The parents' association raised a lot of money at the spring fair, so how is the school planning to spend it? B: They will repaint every {{BLANK}} on the second floor and buy new desks and chairs, because the old furniture is broken and too small for the older children.",
    "cn": "A：家長會在春季園遊會上募得了不少錢，學校打算怎麼使用這筆錢？ B：他們會重新粉刷二樓的每一間【教室】，並購買新的桌椅，因為舊家具已經壞了，對年紀較大的孩子來說也太小了。"
  },
  {
    "word": "homework",
    "pos": "n.",
    "cn_def": "回家作業",
    "en_def": "school work that students do at home",
    "sentence": "A: You usually leave the office right at five o'clock these days, so do you have a new class or appointment in the evening? B: Not really, but my twins have a lot of {{BLANK}} now that they are in third grade, and I like to sit with them while they do it after dinner.",
    "cn": "A：你最近通常五點一到就下班，晚上是有新的課程還是約會嗎？ B：其實沒有，只是我的雙胞胎升上三年級後有很多【回家作業】，我喜歡晚餐後坐在旁邊陪他們寫。"
  },
  {
    "word": "literacy",
    "pos": "n.",
    "cn_def": "讀寫能力",
    "en_def": "the ability to read and write",
    "sentence": "A: Why is the publishing company donating thousands of picture books to schools in the mountain areas this year? B: The company wants to improve {{BLANK}} among young children there, because many of them do not have libraries nearby and some still cannot read simple sentences by the age of eight.",
    "cn": "A：出版社今年為什麼要捐贈數千本繪本給山區的學校？ B：公司希望提升當地幼童的【讀寫能力】，因為許多孩子附近沒有圖書館，有些到了八歲還看不懂簡單的句子。"
  },
  {
    "word": "numeracy",
    "pos": "n.",
    "cn_def": "算術能力",
    "en_def": "the ability to understand and work with numbers",
    "sentence": "A: The after-school program uses a lot of cooking activities, but how does making cookies actually help the kids with their studies? B: Measuring flour, counting eggs, and dividing the cookies equally all build {{BLANK}}, so children practice basic math skills without even noticing that they are learning something.",
    "cn": "A：課後輔導班使用很多烹飪活動，但做餅乾到底對孩子的課業有什麼幫助？ B：量麵粉、數雞蛋和平均分配餅乾都能培養【算術能力】，所以孩子們在不知不覺中就練習了基本的數學技巧。"
  },
  {
    "word": "reading",
    "pos": "n.",
    "cn_def": "閱讀",
    "en_def": "the activity of looking at and understanding written words",
    "sentence": "A: My nephew spends almost every evening playing games on his phone, so how can his parents get him interested in books? B: They could make {{BLANK}} part of the family routine, for example by spending twenty minutes together with stories before bed and visiting the library every weekend.",
    "cn": "A：我姪子幾乎每天晚上都在手機上玩遊戲，他父母要怎麼讓他對書產生興趣？ B：他們可以把【閱讀】變成家庭作息的一部分，例如睡前一起花二十分鐘看故事，並且每個週末去圖書館。"
  },
  {
    "word": "writing",
    "pos": "n.",
    "cn_def": "寫作",
    "en_def": "the activity or skill of putting words on paper or a screen",
    "sentence": "A: The judges for the children's story competition have finished reading all the entries, so did any of them stand out? B: One girl's {{BLANK}} was especially impressive, because she described her grandmother's farm with such clear details that we could almost smell the fresh rice fields.",
    "cn": "A：兒童故事比賽的評審已經看完所有參賽作品了，有沒有哪一篇特別突出？ B：有一個女孩的【寫作】特別令人印象深刻，因為她把祖母的農場描寫得非常細膩，我們幾乎能聞到新鮮稻田的味道。"
  },
  {
    "word": "assessment",
    "pos": "n.",
    "cn_def": "評量；評估",
    "en_def": "a way of judging how much someone has learned",
    "sentence": "A: Before the kids join the advanced English class, does the school check their level, or can parents just sign them up? B: Every child takes a short {{BLANK}} with a teacher first, which includes a few listening questions and a simple conversation, so the school can place them in the right group.",
    "cn": "A：孩子加入英文進階班之前，學校會檢查他們的程度嗎？還是家長直接報名就可以？ B：每個孩子都會先和老師進行一個簡短的【評量】，包括幾題聽力和簡單的對話，這樣學校才能把他們分到合適的組別。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "an official test of knowledge or skill",
    "sentence": "A: Your son looked really tired when I saw him at the bus stop this morning, so is something wrong at school? B: He has been studying late every night because he has an important {{BLANK}} next Monday, and the results will decide whether he can enter the senior high school he wants.",
    "cn": "A：我今天早上在公車站看到你兒子，他看起來真的很累，學校發生什麼事了嗎？ B：他每天晚上都讀書到很晚，因為下週一有一場重要的【考試】，結果將決定他能不能進入想讀的高中。"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "cn_def": "紀律",
    "en_def": "training people to obey rules and control their behavior",
    "sentence": "A: The new kindergarten seems very popular with parents in our neighborhood, so what makes it different from the others? B: The teachers there believe that gentle but firm {{BLANK}} is important, so they set clear rules about sharing toys and cleaning up, and the children learn to follow them happily.",
    "cn": "A：新開的幼兒園似乎很受我們社區家長歡迎，它和其他幼兒園有什麼不同？ B：那裡的老師認為溫和但堅定的【紀律】很重要，所以他們訂下分享玩具和收拾整理的明確規則，孩子們也學會開心地遵守。"
  },
  {
    "word": "guidance",
    "pos": "n.",
    "cn_def": "指導；輔導",
    "en_def": "help and advice about how to do something",
    "sentence": "A: My daughter cannot decide whether she should study art or engineering in college, and she is getting really stressed about it. B: Maybe she should ask the school counselor for some {{BLANK}}, because counselors know a lot about different careers and can help students think about their strengths and interests.",
    "cn": "A：我女兒無法決定大學要讀藝術還是工程，她為此感到壓力很大。 B：也許她應該向學校的輔導老師尋求一些【指導】，因為輔導老師很了解各種職業，也能幫助學生思考自己的長處和興趣。"
  },
  {
    "word": "support",
    "pos": "v.",
    "cn_def": "支持；幫助",
    "en_def": "to help someone or something, especially when help is needed",
    "sentence": "A: Our firm wants to do something useful for the local community this year, so do you have any ideas for a project? B: We could {{BLANK}} the reading program at the public library by giving books and sending volunteers twice a month to help children who are falling behind at school.",
    "cn": "A：我們公司今年想為當地社區做些有意義的事，你對專案有什麼想法嗎？ B：我們可以透過捐書和每個月派兩次志工，幫助課業落後的孩子，來【支持】公立圖書館的閱讀計畫。"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "cn_def": "鼓勵",
    "en_def": "to give someone confidence or hope to do something",
    "sentence": "A: Your son used to be so shy, but yesterday he sang a song in front of the whole school at the concert, didn't he? B: Yes, his music teacher worked hard to {{BLANK}} him, and she kept telling him that his voice was beautiful until he finally believed it himself.",
    "cn": "A：你兒子以前很害羞，但他昨天在音樂會上當著全校的面唱了一首歌，對吧？ B：是啊，他的音樂老師很努力地【鼓勵】他，一直告訴他他的聲音很好聽，直到他自己終於相信了。"
  },
  {
    "word": "motivate",
    "pos": "v.",
    "cn_def": "激勵；激發動機",
    "en_def": "to make someone want to do something",
    "sentence": "A: The kids in the after-school club used to complain about doing math, but now they seem excited about it, so what changed? B: The coordinator found a smart way to {{BLANK}} them by giving small prizes and points for every finished worksheet, and the class with the most points wins a pizza party.",
    "cn": "A：課後社團的孩子們以前抱怨做數學，現在卻似乎很興奮，是什麼改變了？ B：協調員找到一個聰明的方法來【激勵】他們，每完成一張學習單就給小獎品和積分，積分最多的班級可以贏得披薩派對。"
  },
  {
    "word": "educate",
    "pos": "v.",
    "cn_def": "教育",
    "en_def": "to teach someone, especially over a period of time",
    "sentence": "A: Why is the city hospital sending nurses to visit elementary schools all through the month of October? B: They want to {{BLANK}} children about healthy eating and washing their hands properly, because doctors have seen more kids getting sick from poor habits during the cold season.",
    "cn": "A：市立醫院為什麼整個十月都派護理師去拜訪國小？ B：他們想【教育】孩子有關健康飲食和正確洗手的知識，因為醫生發現在寒冷的季節有越來越多孩子因為不良習慣而生病。"
  },
  {
    "word": "develop",
    "pos": "v.",
    "cn_def": "培養；發展",
    "en_def": "to grow or make something grow stronger or better",
    "sentence": "A: Do you really think the weekend robot club is worth the high fee that the center charges for each term? B: I think so, because it helps kids {{BLANK}} problem-solving skills and teamwork, and my daughter now plans her projects carefully and explains her ideas clearly to her teammates.",
    "cn": "A：你真的認為週末機器人社團值得中心每學期收的高額費用嗎？ B：我認為值得，因為它能幫助孩子【培養】解決問題的能力和團隊合作，我女兒現在會仔細規劃她的專案，並清楚地向隊友解釋自己的想法。"
  },
  {
    "word": "practice",
    "pos": "v.",
    "cn_def": "練習",
    "en_def": "to do something again and again to get better at it",
    "sentence": "A: Your daughter played the violin so beautifully at the company's year-end party, so how long has she been learning? B: Only about two years, but she has to {{BLANK}} for at least an hour every day after school, even on weekends when her friends invite her to go out and play.",
    "cn": "A：你女兒在公司尾牙上小提琴拉得真好聽，她學多久了？ B：只有大約兩年，但她每天放學後至少要【練習】一個小時，即使週末朋友找她出去玩也一樣。"
  },
  {
    "word": "focus",
    "pos": "v.",
    "cn_def": "專注",
    "en_def": "to give all your attention to something",
    "sentence": "A: The noise from the construction site next to the school has been terrible this month, so how are the students managing in class? B: Many of them find it hard to {{BLANK}} on their lessons, so the principal has asked the builders to do the loudest work only after three o'clock.",
    "cn": "A：學校隔壁工地的噪音這個月非常嚴重，學生們上課時怎麼應付？ B：很多學生覺得很難【專注】在課業上，所以校長已經要求建商只在三點以後才進行最吵的工程。"
  },
  {
    "word": "inclusive",
    "pos": "adj.",
    "cn_def": "包容的；融合的",
    "en_def": "welcoming and including all kinds of people",
    "sentence": "A: The father of a boy who uses a wheelchair asked whether the new private school would accept his son, so what did the school say? B: The principal told him that they run an {{BLANK}} program, so the building has ramps and elevators, and every class welcomes children with different needs.",
    "cn": "A：一位坐輪椅男孩的父親詢問新的私立學校是否會接受他的兒子，學校怎麼說？ B：校長告訴他學校實施【融合】課程，所以建築物有斜坡和電梯，每個班級都歡迎有不同需求的孩子。"
  },
  {
    "word": "effective",
    "pos": "adj.",
    "cn_def": "有效的",
    "en_def": "working well and producing the result you want",
    "sentence": "A: We tried several ways to help the new staff's children with their summer homework, so which one worked the best? B: Small study groups were the most {{BLANK}}, because older kids helped younger ones and everyone finished their tasks faster than when they studied alone at home.",
    "cn": "A：我們試了幾種方法幫助新進員工的孩子完成暑假作業，哪一種效果最好？ B：小型讀書會最【有效】，因為大孩子會幫助小孩子，每個人都比獨自在家讀書時更快完成任務。"
  },
  {
    "word": "creative",
    "pos": "adj.",
    "cn_def": "有創意的",
    "en_def": "good at making new and interesting things or ideas",
    "sentence": "A: The marketing team was really impressed by the drawings the employees' kids made for our calendar, weren't they? B: Yes, the children were so {{BLANK}} that one boy turned our company logo into a flying dragon, and the design team now wants to use his idea in our next advertisement.",
    "cn": "A：行銷團隊對員工的孩子為我們月曆畫的圖真的印象深刻，對吧？ B：是啊，孩子們非常【有創意】，有一個男孩把我們公司的標誌變成了一條飛龍，設計團隊現在想在下一支廣告中使用他的點子。"
  },
  {
    "word": "academic",
    "pos": "adj.",
    "cn_def": "學業的；學術的",
    "en_def": "related to school, study, and learning",
    "sentence": "A: Why did the private high school offer that girl from the countryside a full scholarship for all three years? B: Her {{BLANK}} results were excellent in every subject, especially science and mathematics, and she also volunteered at the local clinic every weekend to help elderly patients.",
    "cn": "A：那所私立高中為什麼提供那位鄉下女孩三年的全額獎學金？ B：她每一科的【學業】成績都很優秀，尤其是自然科學和數學，而且她每個週末還在當地診所當志工幫助年長的病患。"
  },
  {
    "word": "basic",
    "pos": "adj.",
    "cn_def": "基本的",
    "en_def": "simple and necessary as a first step",
    "sentence": "A: The summer camp is only two weeks long, so can the kids really learn anything useful about computers in such a short time? B: They will not become experts, of course, but they will learn {{BLANK}} skills like typing, saving files, and searching online safely, which will help them a lot at school.",
    "cn": "A：夏令營只有兩週，孩子們真的能在這麼短的時間內學到有用的電腦知識嗎？ B：當然他們不會成為專家，但他們會學到【基本】技能，像是打字、儲存檔案和安全地上網搜尋，這對他們在學校會有很大的幫助。"
  },
  {
    "word": "formal",
    "pos": "adj.",
    "cn_def": "正規的；正式的",
    "en_def": "official, and following the usual system of schools or training",
    "sentence": "A: The new receptionist speaks four languages very well, so did she study them at a university abroad? B: Actually, she had very little {{BLANK}} schooling as a child because her family traveled a lot, but she picked up languages by talking with people in every country they lived in.",
    "cn": "A：新來的接待員能說流利的四種語言，她是在國外大學學的嗎？ B：其實她小時候因為家人經常旅行，很少接受【正規】學校教育，但她在他們住過的每個國家透過和當地人交談學會了語言。"
  },
  {
    "word": "early",
    "pos": "adj.",
    "cn_def": "早期的；幼年的",
    "en_def": "happening near the beginning of a period of time",
    "sentence": "A: Why is the government spending so much money on preschools and training for kindergarten teachers this year? B: Studies show that the {{BLANK}} years of a child's life are very important for the brain, so good care before age six can help children do better later at school.",
    "cn": "A：政府今年為什麼要花這麼多錢在幼兒園和幼教老師的培訓上？ B：研究顯示孩子生命中的【早期】幾年對大腦非常重要，所以六歲前的良好照顧能幫助孩子日後在學校表現更好。"
  },
  {
    "word": "lifelong",
    "pos": "adj.",
    "cn_def": "終身的",
    "en_def": "lasting for the whole of a person's life",
    "sentence": "A: Your father retired from the bank last year, but I heard he is taking Japanese and painting classes now, isn't he? B: Yes, he believes in {{BLANK}} learning, and he says that studying new things keeps his mind sharp and gives him a reason to meet new friends every week.",
    "cn": "A：你父親去年從銀行退休了，但我聽說他現在在上日文課和繪畫課，對嗎？ B：是的，他相信【終身】學習，他說學習新事物能讓頭腦保持敏銳，也讓他每週都有理由認識新朋友。"
  },
  {
    "word": "quality",
    "pos": "adj.",
    "cn_def": "優質的",
    "en_def": "of a high standard; very good",
    "sentence": "A: Many young families are moving to the new town near the science park, so what is attracting them there? B: Besides the cheaper apartments, the town offers {{BLANK}} education, with modern schools, well-trained teachers, and free after-school activities for every child who lives in the area.",
    "cn": "A：很多年輕家庭搬到科學園區附近的新市鎮，是什麼吸引他們去那裡？ B：除了比較便宜的公寓之外，那個市鎮還提供【優質】教育，有現代化的學校、訓練有素的老師，以及給區內每個孩子的免費課後活動。"
  },
  {
    "word": "well-rounded",
    "pos": "adj.",
    "cn_def": "全面發展的",
    "en_def": "having many different skills and interests",
    "sentence": "A: Why do so many parents in this neighborhood send their children to music, sports, and art classes on weekends? B: They want their kids to become {{BLANK}} people who are good at many things, not just test scores, because companies today look for people with a wide range of skills.",
    "cn": "A：為什麼這個社區有這麼多家長在週末送孩子去上音樂、運動和美術課？ B：他們希望孩子成為【全面發展】的人，擅長很多事情，而不只是考試成績，因為現在的公司都在尋找具備多種技能的人。"
  }
];

const MCQS = [
  {
    "q": "The company offers a scholarship fund for its employees' children. It pays for their university _____ if they keep good grades.",
    "options": [
      "education",
      "classroom",
      "lesson",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Ms. Lin will _____ a weekend art class for children at the community center. She has been a painter for twenty years.",
    "options": [
      "focus",
      "teach",
      "motivate",
      "practice"
    ],
    "answer": 1,
    "vocabIndex": 3
  },
  {
    "q": "Every _____ at the school attended a workshop on using tablets in class. The principal hopes lessons will become more interactive.",
    "options": [
      "homework",
      "curriculum",
      "teacher",
      "numeracy"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Each _____ must wear the school uniform during the field trip. The bus will leave the main gate at exactly 8 a.m.",
    "options": [
      "assessment",
      "literacy",
      "guidance",
      "student"
    ],
    "answer": 3,
    "vocabIndex": 5
  },
  {
    "q": "The school added cooking and gardening to its _____ this year. Parents say their children now eat more vegetables at home.",
    "options": [
      "exam",
      "curriculum",
      "discipline",
      "teacher"
    ],
    "answer": 1,
    "vocabIndex": 6
  },
  {
    "q": "My son's piano _____ was canceled because his teacher had a cold. They will meet again next Thursday instead.",
    "options": [
      "literacy",
      "guidance",
      "numeracy",
      "lesson"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "The _____ on the third floor has new air conditioners and a large screen. Teachers often book it for special presentations.",
    "options": [
      "classroom",
      "numeracy",
      "assessment",
      "discipline"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Mr. Chen never gives _____ on Fridays. He wants his students to spend the weekend relaxing with their families.",
    "options": [
      "curriculum",
      "literacy",
      "homework",
      "classroom"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "The charity runs evening classes to improve adult _____. Many learners are finally able to read newspapers and fill out forms.",
    "options": [
      "discipline",
      "classroom",
      "exam",
      "literacy"
    ],
    "answer": 3,
    "vocabIndex": 10
  },
  {
    "q": "Shopping games help young children build _____. They learn to add prices and count change while having fun.",
    "options": [
      "numeracy",
      "guidance",
      "homework",
      "lesson"
    ],
    "answer": 0,
    "vocabIndex": 11
  },
  {
    "q": "Teachers will complete a written _____ of each child's progress in December. Parents can discuss the report at the January meeting.",
    "options": [
      "classroom",
      "curriculum",
      "assessment",
      "literacy"
    ],
    "answer": 2,
    "vocabIndex": 14
  },
  {
    "q": "Students who fail the final _____ can take it again in August. The school will offer review classes in July.",
    "options": [
      "teacher",
      "exam",
      "discipline",
      "numeracy"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "The coach believes that _____ is the key to success in sports. His players arrive on time and follow every rule.",
    "options": [
      "homework",
      "classroom",
      "discipline",
      "literacy"
    ],
    "answer": 2,
    "vocabIndex": 16
  },
  {
    "q": "New parents often need _____ on choosing the right preschool. The city website now offers free advice and a list of options.",
    "options": [
      "lesson",
      "guidance",
      "exam",
      "curriculum"
    ],
    "answer": 1,
    "vocabIndex": 17
  },
  {
    "q": "The bank promised to _____ the local reading club for three more years. Its donations pay for books and snacks.",
    "options": [
      "focus",
      "practice",
      "teach",
      "support"
    ],
    "answer": 3,
    "vocabIndex": 18
  },
  {
    "q": "Good teachers _____ shy students to share their ideas. They praise every answer and never laugh at mistakes.",
    "options": [
      "encourage",
      "develop",
      "educate",
      "focus"
    ],
    "answer": 0,
    "vocabIndex": 19
  },
  {
    "q": "Prizes and praise can _____ children to read more books. The library gives a sticker for every book a child finishes.",
    "options": [
      "practice",
      "motivate",
      "focus",
      "develop"
    ],
    "answer": 1,
    "vocabIndex": 20
  },
  {
    "q": "The zoo runs programs to _____ young visitors about protecting wild animals. Guides explain why some species are in danger.",
    "options": [
      "practice",
      "focus",
      "educate",
      "develop"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Team sports help children _____ leadership and communication skills. They learn how to plan together and solve problems.",
    "options": [
      "develop",
      "focus",
      "support",
      "educate"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "If you want to speak English fluently, you should _____ every day. Even ten minutes of conversation helps a lot.",
    "options": [
      "develop",
      "educate",
      "motivate",
      "practice"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Please turn off your phones so that the students can _____ on the test. The exam will begin in five minutes.",
    "options": [
      "focus",
      "encourage",
      "support",
      "teach"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "The school's _____ policy welcomes children of all abilities. Classrooms are designed for students with different physical and learning needs.",
    "options": [
      "early",
      "lifelong",
      "creative",
      "inclusive"
    ],
    "answer": 3,
    "vocabIndex": 25
  },
  {
    "q": "Short daily reviews are an _____ way to remember new vocabulary. Most students forget words quickly if they study them only once.",
    "options": [
      "academic",
      "effective",
      "early",
      "inclusive"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "The design firm hired three _____ young artists for its new campaign. Their colorful ideas impressed the client immediately.",
    "options": [
      "formal",
      "basic",
      "creative",
      "lifelong"
    ],
    "answer": 2,
    "vocabIndex": 27
  },
  {
    "q": "The university checks each applicant's _____ record before the interview. Students with high grades are invited first.",
    "options": [
      "creative",
      "early",
      "basic",
      "academic"
    ],
    "answer": 3,
    "vocabIndex": 28
  },
  {
    "q": "The training covers only _____ first aid, such as cleaning small cuts. Serious injuries must be handled by the school nurse.",
    "options": [
      "basic",
      "lifelong",
      "well-rounded",
      "inclusive"
    ],
    "answer": 0,
    "vocabIndex": 29
  },
  {
    "q": "Although he left school at fifteen, he later received _____ training as an electrician. He now runs his own successful company.",
    "options": [
      "creative",
      "formal",
      "early",
      "inclusive"
    ],
    "answer": 1,
    "vocabIndex": 30
  },
  {
    "q": "Doctors say that _____ reading with parents helps babies learn language. Families should start sharing picture books before age one.",
    "options": [
      "formal",
      "academic",
      "early",
      "lifelong"
    ],
    "answer": 2,
    "vocabIndex": 31
  },
  {
    "q": "My grandmother and her best friend met in first grade. They have kept their _____ friendship for over seventy years.",
    "options": [
      "lifelong",
      "basic",
      "formal",
      "academic"
    ],
    "answer": 0,
    "vocabIndex": 32
  },
  {
    "q": "The scholarship is for _____ students who do well in class and also take part in sports or music. Grades alone are not enough.",
    "options": [
      "basic",
      "formal",
      "early",
      "well-rounded"
    ],
    "answer": 3,
    "vocabIndex": 34
  }
];

const LOOKUP = {
  "education": {
    "pos": "n.",
    "en_def": "the process of teaching and learning, especially at school",
    "cn_def": "教育"
  },
  "schooling": {
    "pos": "n.",
    "en_def": "the education a child receives at school",
    "cn_def": "學校教育"
  },
  "learning": {
    "pos": "n.",
    "en_def": "the process of gaining knowledge or skills",
    "cn_def": "學習"
  },
  "teach": {
    "pos": "v.",
    "en_def": "to show or explain to someone how to do something",
    "cn_def": "教；教導"
  },
  "teacher": {
    "pos": "n.",
    "en_def": "a person whose job is to help students learn",
    "cn_def": "老師"
  },
  "student": {
    "pos": "n.",
    "en_def": "a person who is studying at a school or university",
    "cn_def": "學生"
  },
  "curriculum": {
    "pos": "n.",
    "en_def": "all the subjects that are taught in a school",
    "cn_def": "課程"
  },
  "lesson": {
    "pos": "n.",
    "en_def": "a period of time in which someone is taught something",
    "cn_def": "一堂課；課程"
  },
  "classroom": {
    "pos": "n.",
    "en_def": "a room where students have lessons",
    "cn_def": "教室"
  },
  "homework": {
    "pos": "n.",
    "en_def": "school work that students do at home",
    "cn_def": "回家作業"
  },
  "literacy": {
    "pos": "n.",
    "en_def": "the ability to read and write",
    "cn_def": "讀寫能力"
  },
  "numeracy": {
    "pos": "n.",
    "en_def": "the ability to understand and work with numbers",
    "cn_def": "算術能力"
  },
  "reading": {
    "pos": "n.",
    "en_def": "the activity of looking at and understanding written words",
    "cn_def": "閱讀"
  },
  "writing": {
    "pos": "n.",
    "en_def": "the activity or skill of putting words on paper or a screen",
    "cn_def": "寫作"
  },
  "assessment": {
    "pos": "n.",
    "en_def": "a way of judging how much someone has learned",
    "cn_def": "評量；評估"
  },
  "exam": {
    "pos": "n.",
    "en_def": "an official test of knowledge or skill",
    "cn_def": "考試"
  },
  "discipline": {
    "pos": "n.",
    "en_def": "training people to obey rules and control their behavior",
    "cn_def": "紀律"
  },
  "guidance": {
    "pos": "n.",
    "en_def": "help and advice about how to do something",
    "cn_def": "指導；輔導"
  },
  "support": {
    "pos": "v.",
    "en_def": "to help someone or something, especially when help is needed",
    "cn_def": "支持；幫助"
  },
  "encourage": {
    "pos": "v.",
    "en_def": "to give someone confidence or hope to do something",
    "cn_def": "鼓勵"
  },
  "motivate": {
    "pos": "v.",
    "en_def": "to make someone want to do something",
    "cn_def": "激勵；激發動機"
  },
  "educate": {
    "pos": "v.",
    "en_def": "to teach someone, especially over a period of time",
    "cn_def": "教育"
  },
  "develop": {
    "pos": "v.",
    "en_def": "to grow or make something grow stronger or better",
    "cn_def": "培養；發展"
  },
  "practice": {
    "pos": "v.",
    "en_def": "to do something again and again to get better at it",
    "cn_def": "練習"
  },
  "focus": {
    "pos": "v.",
    "en_def": "to give all your attention to something",
    "cn_def": "專注"
  },
  "inclusive": {
    "pos": "adj.",
    "en_def": "welcoming and including all kinds of people",
    "cn_def": "包容的；融合的"
  },
  "effective": {
    "pos": "adj.",
    "en_def": "working well and producing the result you want",
    "cn_def": "有效的"
  },
  "creative": {
    "pos": "adj.",
    "en_def": "good at making new and interesting things or ideas",
    "cn_def": "有創意的"
  },
  "academic": {
    "pos": "adj.",
    "en_def": "related to school, study, and learning",
    "cn_def": "學業的；學術的"
  },
  "basic": {
    "pos": "adj.",
    "en_def": "simple and necessary as a first step",
    "cn_def": "基本的"
  },
  "formal": {
    "pos": "adj.",
    "en_def": "official, and following the usual system of schools or training",
    "cn_def": "正規的；正式的"
  },
  "early": {
    "pos": "adj.",
    "en_def": "happening near the beginning of a period of time",
    "cn_def": "早期的；幼年的"
  },
  "lifelong": {
    "pos": "adj.",
    "en_def": "lasting for the whole of a person's life",
    "cn_def": "終身的"
  },
  "quality": {
    "pos": "adj.",
    "en_def": "of a high standard; very good",
    "cn_def": "優質的"
  },
  "well-rounded": {
    "pos": "adj.",
    "en_def": "having many different skills and interests",
    "cn_def": "全面發展的"
  }
};

const EXTRA_GLOSSES = {};
