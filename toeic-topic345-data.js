// Topic 345 Quiz Data: Science 科學
// Source word list: https://www.examword.com/group-topic/science — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T345 - Science 科學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "curriculum",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "the subjects and lessons taught in a school or course",
    "sentence": "A: Why are the science teachers at the training center staying late every evening this week, and when will they finally finish their planning meeting? B: The education office asked them to update the whole {{BLANK}} before next semester, so they are adding new lab projects and removing old topics that students found boring.",
    "cn": "A：為什麼這週訓練中心的科學老師每天晚上都待到很晚，他們的規劃會議什麼時候才會結束？ B：教育局要求他們在下學期之前更新整個【課程】，所以他們正在加入新的實驗專題，並刪除學生覺得無聊的舊主題。"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "cn_def": "獲得；學到",
    "en_def": "to get or learn something, such as a skill",
    "sentence": "A: What do you hope new lab assistants will learn during their first three months working with our research team at the hospital? B: We hope they will {{BLANK}} practical skills, such as preparing samples safely and recording results correctly, so that they can work on their own by the end of the spring.",
    "cn": "A：你希望新的實驗室助理在醫院和我們研究團隊工作的前三個月學到什麼？ B：我們希望他們能【獲得】實用技能，例如安全地準備樣本和正確記錄結果，這樣到春天結束時他們就能獨立工作。"
  },
  {
    "word": "burning desire",
    "pos": "n.phr.",
    "cn_def": "強烈的渴望",
    "en_def": "a very strong wish to do something",
    "sentence": "A: Why did your sister leave her well-paid banking job last year to go back to university and study chemistry full time? B: She has always had a {{BLANK}} to develop new medicines, and she felt that if she did not follow her dream now, she would regret it for the rest of her life.",
    "cn": "A：你姊姊去年為什麼辭掉高薪的銀行工作，回到大學全職念化學？ B：她一直有研發新藥的【強烈渴望】，她覺得如果現在不追求夢想，她會後悔一輩子。"
  },
  {
    "word": "be into",
    "pos": "v.phr.",
    "cn_def": "熱衷於；對……很感興趣",
    "en_def": "to be very interested in something",
    "sentence": "A: My daughter spends every weekend building small machines in the garage, so can you recommend a summer program for her at the science museum? B: If she seems to {{BLANK}} robots and electronics, she should join the engineering camp in July, where kids design their own robots and test them in a friendly competition.",
    "cn": "A：我女兒每個週末都在車庫裡做小機器，你能推薦科學博物館的暑期課程給她嗎？ B：如果她似乎【熱衷於】機器人和電子產品，她應該參加七月的工程營，孩子們會在那裡設計自己的機器人，並在友誼賽中測試。"
  },
  {
    "word": "fascinating",
    "pos": "adj.",
    "cn_def": "極有趣的；迷人的",
    "en_def": "extremely interesting",
    "sentence": "A: How was the guided tour of the new space center that your manager organized for the whole marketing department last Friday afternoon? B: It was absolutely {{BLANK}}, because the guide showed us real rocket engines and explained how astronauts live and work for months on the space station far above the Earth.",
    "cn": "A：上週五下午你經理為整個行銷部門安排的新太空中心導覽怎麼樣？ B：真是【極有趣】，因為導覽員給我們看了真正的火箭引擎，並解釋了太空人如何在遠離地球的太空站上生活和工作好幾個月。"
  },
  {
    "word": "adore",
    "pos": "v.",
    "cn_def": "非常喜愛",
    "en_def": "to love or like something very much",
    "sentence": "A: Why do you always take your nephews to the natural history museum whenever they come to visit you in the city during the holidays? B: They absolutely {{BLANK}} the dinosaur skeletons and the planet models there, and they never get tired of asking the friendly staff questions about how old the bones really are.",
    "cn": "A：為什麼你的姪子們放假來城裡找你時，你總是帶他們去自然史博物館？ B：他們非常【喜愛】那裡的恐龍骨骼和行星模型，而且他們從不厭倦問親切的工作人員那些骨頭到底有多古老。"
  },
  {
    "word": "cup of tea",
    "pos": "n.phr.",
    "cn_def": "喜歡的事物；感興趣的東西",
    "en_def": "something you like or enjoy (often used in the negative)",
    "sentence": "A: Would you like to join the team that is going to the astronomy lecture at the university on Thursday night after work? B: Thanks for asking, but long talks about stars and planets are not really my {{BLANK}}, so I think I will go to the company badminton practice with my friends from accounting instead.",
    "cn": "A：你要不要加入週四下班後去大學聽天文學講座的團隊？ B：謝謝你邀請，但關於星星和行星的長篇演講不太是我【喜歡的事】，所以我想我會和會計部的朋友一起去公司的羽球練習。"
  },
  {
    "word": "challenging",
    "pos": "adj.",
    "cn_def": "有挑戰性的",
    "en_def": "difficult in a way that tests your ability",
    "sentence": "A: How is the new project going now that your team has started testing the water quality in all the rivers around the city? B: It is quite {{BLANK}}, because we have to collect samples in bad weather and finish the reports quickly, but everyone is learning a lot and the manager is very supportive.",
    "cn": "A：既然你的團隊開始檢測市區周圍所有河流的水質，新專案進行得如何？ B：相當【有挑戰性】，因為我們得在惡劣天氣中採集樣本並快速完成報告，但每個人都學到很多，經理也非常支持。"
  },
  {
    "word": "relative",
    "pos": "adj.",
    "cn_def": "相對的",
    "en_def": "measured or judged by comparing with something else",
    "sentence": "A: Why does the weather report for our outdoor product launch mention the humidity so often, and should we really worry about it? B: Yes, the {{BLANK}} humidity will be over ninety percent on Saturday afternoon, so the air will feel very hot and sticky, and our guests may need more cold drinks and fans under the tents.",
    "cn": "A：為什麼我們戶外產品發表會的天氣預報一直提到濕度，我們真的需要擔心嗎？ B：是的，週六下午的【相對】濕度會超過百分之九十，所以空氣會感覺非常悶熱黏膩，我們的客人在帳篷下可能需要更多冷飲和電風扇。"
  },
  {
    "word": "crucial",
    "pos": "adj.",
    "cn_def": "關鍵的；至關重要的",
    "en_def": "extremely important",
    "sentence": "A: Why did the lab director ask everyone to wear safety glasses and gloves at all times, even when we are only reading the instruments? B: Following the safety rules is {{BLANK}} in a chemistry lab, because even a small accident with acid can cause serious injuries and close the whole building for an investigation.",
    "cn": "A：為什麼實驗室主任要求大家隨時都戴護目鏡和手套，即使只是在看儀器？ B：在化學實驗室裡遵守安全規則是【至關重要】的，因為即使是酸液的小意外也可能造成嚴重傷害，並使整棟大樓因調查而關閉。"
  },
  {
    "word": "loathe",
    "pos": "v.",
    "cn_def": "厭惡；極不喜歡",
    "en_def": "to hate something very much",
    "sentence": "A: Why did Mark move from the laboratory to the customer service department when he had studied biology for so many years at university? B: I know he did well, but he began to {{BLANK}} the long, lonely hours of watching cells under a microscope, and he much prefers talking with people and solving their problems every day.",
    "cn": "A：Mark在大學念了那麼多年生物，為什麼從實驗室調到客服部門？ B：我知道他表現很好，但他開始【厭惡】在顯微鏡下觀察細胞那些漫長又孤單的時間，而且他更喜歡每天和人交談、解決他們的問題。"
  },
  {
    "word": "intrinsic",
    "pos": "adj.",
    "cn_def": "內在的；本質的",
    "en_def": "belonging to the basic nature of someone or something",
    "sentence": "A: Why do you think our young engineers keep working on the solar panel design late into the evening, even without any extra pay or bonus? B: They have an {{BLANK}} interest in solving difficult problems, so the work itself makes them happy, and they enjoy the feeling of success when a new design finally works.",
    "cn": "A：你認為為什麼我們的年輕工程師即使沒有加班費或獎金，也一直研究太陽能板設計到深夜？ B：他們對解決難題有【內在的】興趣，所以工作本身就讓他們快樂，而且他們享受新設計終於成功時的成就感。"
  },
  {
    "word": "in-depth",
    "pos": "adj.",
    "cn_def": "深入的；詳盡的",
    "en_def": "very detailed and thorough",
    "sentence": "A: What does the board of directors want before they agree to spend money on the new medical research center in the southern district? B: They want an {{BLANK}} report that explains the costs, the risks, and the expected benefits for local patients, so our team will be busy collecting data for the next two weeks.",
    "cn": "A：董事會在同意出資興建南區新醫學研究中心之前，想要什麼？ B：他們想要一份【深入的】報告，說明成本、風險以及對當地病人的預期效益，所以我們團隊接下來兩週會忙著收集資料。"
  },
  {
    "word": "discover",
    "pos": "v.",
    "cn_def": "發現",
    "en_def": "to find something for the first time",
    "sentence": "A: Why is everyone at the research institute so excited today, and why are reporters waiting outside the main entrance this morning? B: Our team managed to {{BLANK}} a new kind of bacteria in the hot springs near the mountains, and scientists think it might help factories break down plastic waste much faster in the future.",
    "cn": "A：為什麼研究所今天每個人都這麼興奮，為什麼今天早上有記者在大門外等？ B：我們團隊在山區附近的溫泉【發現】了一種新細菌，科學家認為它未來可能幫助工廠更快分解塑膠廢棄物。"
  },
  {
    "word": "huge",
    "pos": "adj.",
    "cn_def": "巨大的；極大的",
    "en_def": "very big",
    "sentence": "A: How was the opening day of the science exhibition that our company sponsored at the convention center downtown last weekend? B: It was a {{BLANK}} success, because more than ten thousand families came to see the robots and the space displays, and several newspapers wrote positive stories about our sponsorship.",
    "cn": "A：上週末我們公司在市中心會展中心贊助的科學展開幕日怎麼樣？ B：非常【巨大的】成功，因為超過一萬個家庭來看機器人和太空展品，而且好幾家報社寫了關於我們贊助的正面報導。"
  },
  {
    "word": "thought-provoking",
    "pos": "adj.",
    "cn_def": "發人深省的",
    "en_def": "making people think seriously about something",
    "sentence": "A: Did you enjoy the documentary about artificial intelligence that the training manager showed us during lunch on Wednesday? B: Yes, I found it really {{BLANK}}, because it made me think about how our jobs might change in the next ten years and what new skills we should start learning now.",
    "cn": "A：你喜歡培訓經理週三午餐時給我們看的人工智慧紀錄片嗎？ B：喜歡，我覺得它真的很【發人深省】，因為它讓我思考我們的工作在未來十年可能如何改變，以及我們現在應該開始學哪些新技能。"
  },
  {
    "word": "ignorant",
    "pos": "adj.",
    "cn_def": "無知的；不了解的",
    "en_def": "not knowing about something",
    "sentence": "A: Why did the new sales representative give the customer the wrong information about how our water filter actually removes chemicals? B: He was simply {{BLANK}} of the basic science behind the product, so the manager has asked him to attend a two-day training course with the engineers before he visits any more clients.",
    "cn": "A：為什麼新來的業務代表給客戶關於我們濾水器如何去除化學物質的錯誤資訊？ B：他根本就【不了解】產品背後的基本科學原理，所以經理要求他在拜訪更多客戶之前，先參加工程師主講的兩天培訓課程。"
  },
  {
    "word": "realise",
    "pos": "v.",
    "cn_def": "意識到；了解到",
    "en_def": "to understand or become aware of something",
    "sentence": "A: Why did the factory suddenly stop using the old cooling system after the engineers checked it on Monday morning? B: They began to {{BLANK}} that it was wasting a large amount of electricity every month, so the company decided to replace it with a modern system that is cheaper and better for the environment.",
    "cn": "A：為什麼工程師週一早上檢查舊冷卻系統後，工廠突然停用它？ B：他們開始【意識到】它每個月浪費大量電力，所以公司決定換成更便宜、更環保的現代系統。"
  },
  {
    "word": "universe",
    "pos": "n.",
    "cn_def": "宇宙",
    "en_def": "all of space and everything in it",
    "sentence": "A: What is the main topic of the new planetarium show that the museum is advertising on all the buses around the city? B: It explains how the {{BLANK}} began billions of years ago and how stars and galaxies formed, and it uses a giant dome screen so visitors feel like they are flying through space.",
    "cn": "A：博物館在全市公車上廣告的新天文館節目主題是什麼？ B：它解釋了【宇宙】如何在數十億年前誕生，以及恆星和星系如何形成，而且使用巨大的圓頂螢幕，讓觀眾感覺像在太空中飛行。"
  },
  {
    "word": "reality",
    "pos": "n.",
    "cn_def": "現實；實際情況",
    "en_def": "what is true or real, not what is imagined",
    "sentence": "A: The marketing team promised customers that our new battery would last a whole week, so why are people complaining online now? B: In {{BLANK}}, the battery lasts only about four days when people use the camera a lot, so we need to correct the advertisement and explain the test results honestly.",
    "cn": "A：行銷團隊向客戶保證我們的新電池可以撐一整週，為什麼現在大家在網路上抱怨？ B：【實際上】，當人們大量使用相機時，電池只能撐大約四天，所以我們需要更正廣告，並誠實說明測試結果。"
  },
  {
    "word": "flora",
    "pos": "n.",
    "cn_def": "植物群",
    "en_def": "all the plants of a particular area",
    "sentence": "A: Why is the environmental team from the university visiting the old forest behind our new factory site this week? B: They are studying the local {{BLANK}}, including rare trees and wild flowers, to make sure that our construction will not destroy any protected plants in the area.",
    "cn": "A：為什麼大學的環境團隊這週要去我們新工廠預定地後面的老森林？ B：他們正在研究當地的【植物群】，包括稀有的樹木和野花，以確保我們的施工不會破壞該地區任何受保護的植物。"
  },
  {
    "word": "fauna",
    "pos": "n.",
    "cn_def": "動物群",
    "en_def": "all the animals of a particular area",
    "sentence": "A: Why does the tour company require all visitors to stay on the wooden paths when they hike through the national park? B: The park protects many kinds of {{BLANK}}, such as rare birds, frogs, and small mammals, and people walking off the paths can scare the animals and damage their homes.",
    "cn": "A：為什麼旅遊公司要求所有遊客在國家公園健行時都要走在木棧道上？ B：公園保護許多種【動物】，例如稀有鳥類、青蛙和小型哺乳類，走出步道的人可能會驚嚇動物並破壞牠們的棲息地。"
  },
  {
    "word": "human anatomy",
    "pos": "n.phr.",
    "cn_def": "人體解剖學",
    "en_def": "the study of the structure of the human body",
    "sentence": "A: Why does the sports equipment company want its designers to take a short course at the medical school this spring? B: The managers believe that understanding {{BLANK}}, especially how muscles and joints move, will help the designers create running shoes that protect athletes from injuries.",
    "cn": "A：為什麼運動器材公司要旗下設計師今年春天去醫學院上短期課程？ B：經理們相信了解【人體解剖學】，特別是肌肉和關節如何活動，能幫助設計師打造保護運動員免於受傷的跑鞋。"
  },
  {
    "word": "physiology",
    "pos": "n.",
    "cn_def": "生理學",
    "en_def": "the study of how living bodies work",
    "sentence": "A: What kind of expert did the fitness center hire to design the new training programs for its older members? B: They hired a specialist in exercise {{BLANK}}, who understands how the heart, lungs, and muscles react to physical activity, so the programs will be both safe and effective for people over sixty.",
    "cn": "A：健身中心聘請了哪種專家為年長會員設計新的訓練課程？ B：他們聘請了一位運動【生理學】專家，他了解心臟、肺部和肌肉對身體活動的反應，所以課程對六十歲以上的人來說會既安全又有效。"
  },
  {
    "word": "osmosis",
    "pos": "n.",
    "cn_def": "滲透作用；潛移默化",
    "en_def": "the movement of water through a thin layer; also, learning something slowly without trying",
    "sentence": "A: How did you learn so much about the company's software systems when you never actually took any of the official training courses? B: I guess I learned mostly by {{BLANK}}, because I sat next to the IT team for two years and heard them solving problems every single day, so the knowledge slowly became part of me.",
    "cn": "A：你從沒上過任何正式的培訓課程，怎麼會對公司的軟體系統這麼了解？ B：我想我主要是透過【潛移默化】學會的，因為我坐在資訊團隊旁邊兩年，每天都聽他們解決問題，所以那些知識慢慢就成了我的一部分。"
  },
  {
    "word": "capture someone's attention",
    "pos": "v.phr.",
    "cn_def": "吸引某人的注意",
    "en_def": "to make someone notice and become interested",
    "sentence": "A: Our booth at the technology fair was almost empty yesterday, so what can we change to bring in more visitors today? B: We need a live demonstration that can {{BLANK}} within a few seconds, so let's set up the flying drone near the entrance and offer free samples to anyone who stops to watch it.",
    "cn": "A：我們在科技展的攤位昨天幾乎沒人，今天可以改變什麼來吸引更多參觀者？ B：我們需要一個能在幾秒內【吸引人們注意】的現場示範，所以我們把飛行無人機架在入口附近，並提供免費樣品給停下來觀看的人。"
  },
  {
    "word": "phenomenon",
    "pos": "n.",
    "cn_def": "現象",
    "en_def": "something that happens or exists, especially something unusual",
    "sentence": "A: Why are so many tourists booking hotel rooms in the small northern town for the last week of February? B: They want to see the northern lights, a natural {{BLANK}} that fills the night sky with green and purple colors, and the local tourism office says this year's display could be the brightest in a decade.",
    "cn": "A：為什麼這麼多觀光客預訂二月最後一週北部小鎮的旅館房間？ B：他們想看北極光，這是一種讓夜空充滿綠色和紫色的自然【現象】，當地觀光局說今年的景象可能是十年來最亮的。"
  },
  {
    "word": "tides",
    "pos": "n.",
    "cn_def": "潮汐",
    "en_def": "the regular rise and fall of the sea level",
    "sentence": "A: Why did the harbor manager change the schedule for the cargo ships arriving at the port next Tuesday and Wednesday? B: The {{BLANK}} will be unusually low on those days because of the position of the moon, so large ships can only enter the harbor safely in the late afternoon.",
    "cn": "A：為什麼港務經理更改了下週二和週三抵達港口的貨船時程？ B：由於月亮位置的關係，那幾天的【潮汐】會異常低，所以大型船隻只能在傍晚時分安全進港。"
  },
  {
    "word": "imperative",
    "pos": "adj.",
    "cn_def": "必要的；緊急的",
    "en_def": "extremely important and necessary to do",
    "sentence": "A: Why did the head of the research department call an emergency meeting late on Friday afternoon? B: She said it is {{BLANK}} that we finish the vaccine safety tests by Monday, because the government will make its final decision next week, and any delay could cost the company the contract.",
    "cn": "A：為什麼研究部主管週五傍晚召開緊急會議？ B：她說我們【必須】在週一前完成疫苗安全測試，因為政府下週會做最後決定，任何延誤都可能讓公司失去合約。"
  },
  {
    "word": "besides",
    "pos": "adv.",
    "cn_def": "此外；而且",
    "en_def": "in addition; also",
    "sentence": "A: Why did you choose the science park office instead of the cheaper one downtown for our new branch next year? B: The rent there is quite reasonable, and {{BLANK}}, many talented engineers already live nearby, so it will be much easier for us to hire experienced staff quickly.",
    "cn": "A：為什麼你為我們明年的新分公司選了科學園區的辦公室，而不是市中心比較便宜的那間？ B：那裡的租金相當合理，【此外】，許多有才華的工程師已經住在附近，所以我們會更容易快速招募有經驗的員工。"
  }
];

const MCQS = [
  {
    "q": "The school has added coding and robotics to its science _____. Students will start the new courses in September.",
    "options": [
      "curriculum",
      "phenomenon",
      "universe",
      "reality"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Interns at the laboratory _____ valuable experience by assisting senior researchers. Many of them later get full-time positions with the company.",
    "options": [
      "adore",
      "loathe",
      "acquire",
      "discover"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Dr. Lin had a _____ to find a cure for the disease. She worked in her laboratory every weekend for ten years.",
    "options": [
      "cup of tea",
      "burning desire",
      "human anatomy",
      "phenomenon"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Many young employees seem to _____ data science these days. The company has decided to offer free weekend courses on the subject.",
    "options": [
      "cup of tea",
      "in-depth",
      "besides",
      "be into"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The speaker gave a _____ talk about life in the deep ocean. Nobody in the audience left the hall before the end.",
    "options": [
      "ignorant",
      "imperative",
      "fascinating",
      "intrinsic"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "Children _____ the hands-on experiments at the science fair. They often return to their favorite booth several times in one day.",
    "options": [
      "adore",
      "acquire",
      "realise",
      "loathe"
    ],
    "answer": 0,
    "vocabIndex": 5
  },
  {
    "q": "Lab work is not really Ben's _____. He much prefers meeting clients and giving sales presentations to large groups.",
    "options": [
      "flora",
      "osmosis",
      "phenomenon",
      "cup of tea"
    ],
    "answer": 3,
    "vocabIndex": 6
  },
  {
    "q": "Designing a solar car is a _____ project for first-year students. However, the professor believes they can complete it with support.",
    "options": [
      "ignorant",
      "challenging",
      "relative",
      "intrinsic"
    ],
    "answer": 1,
    "vocabIndex": 7
  },
  {
    "q": "The scientists measured the _____ size of each planet compared with Earth. Their chart was later printed in a popular textbook.",
    "options": [
      "relative",
      "ignorant",
      "imperative",
      "thought-provoking"
    ],
    "answer": 0,
    "vocabIndex": 8
  },
  {
    "q": "Accurate data is _____ for the success of any research project. Small mistakes can lead to completely wrong conclusions.",
    "options": [
      "ignorant",
      "relative",
      "crucial",
      "fascinating"
    ],
    "answer": 2,
    "vocabIndex": 9
  },
  {
    "q": "Many researchers _____ filling out long grant applications. They would rather spend their time doing actual experiments in the lab.",
    "options": [
      "adore",
      "loathe",
      "acquire",
      "discover"
    ],
    "answer": 1,
    "vocabIndex": 10
  },
  {
    "q": "The diamond's _____ value comes from its rare structure, not from its famous owner. Experts say it would sell for millions anyway.",
    "options": [
      "ignorant",
      "challenging",
      "thought-provoking",
      "intrinsic"
    ],
    "answer": 3,
    "vocabIndex": 11
  },
  {
    "q": "The magazine published an _____ analysis of climate change in the region. It included interviews with twelve leading scientists.",
    "options": [
      "ignorant",
      "imperative",
      "in-depth",
      "intrinsic"
    ],
    "answer": 2,
    "vocabIndex": 12
  },
  {
    "q": "Engineers hope to _____ the cause of the engine failure very soon. Until then, all test flights have been cancelled.",
    "options": [
      "discover",
      "adore",
      "loathe",
      "acquire"
    ],
    "answer": 0,
    "vocabIndex": 13
  },
  {
    "q": "The new telescope is so _____ that it needed a special truck for delivery. It weighs more than forty tons.",
    "options": [
      "ignorant",
      "relative",
      "intrinsic",
      "huge"
    ],
    "answer": 3,
    "vocabIndex": 14
  },
  {
    "q": "The professor's _____ question about gene editing kept the students talking for an hour. Many of them later wrote essays on the topic.",
    "options": [
      "ignorant",
      "thought-provoking",
      "relative",
      "intrinsic"
    ],
    "answer": 1,
    "vocabIndex": 15
  },
  {
    "q": "Many consumers are _____ of the health risks of certain cleaning products. The new labels will explain these dangers clearly.",
    "options": [
      "ignorant",
      "crucial",
      "huge",
      "in-depth"
    ],
    "answer": 0,
    "vocabIndex": 16
  },
  {
    "q": "Few office workers _____ how much energy their computers use at night. Turning them off can reduce electricity bills significantly.",
    "options": [
      "adore",
      "acquire",
      "realise",
      "loathe"
    ],
    "answer": 2,
    "vocabIndex": 17
  },
  {
    "q": "Astronomers estimate that the _____ contains billions of galaxies. Each galaxy may hold billions of stars like our sun.",
    "options": [
      "reality",
      "universe",
      "curriculum",
      "physiology"
    ],
    "answer": 1,
    "vocabIndex": 18
  },
  {
    "q": "Virtual _____ headsets allow medical students to practise surgery safely. The university bought twenty of them last year.",
    "options": [
      "universe",
      "flora",
      "curriculum",
      "reality"
    ],
    "answer": 3,
    "vocabIndex": 19
  },
  {
    "q": "The botanist spent ten years recording the _____ of the island. Her book describes more than three hundred plant species.",
    "options": [
      "fauna",
      "tides",
      "flora",
      "reality"
    ],
    "answer": 2,
    "vocabIndex": 20
  },
  {
    "q": "Researchers counted the birds, insects, and other _____ living near the lake. Their survey will guide the new conservation plan.",
    "options": [
      "fauna",
      "flora",
      "tides",
      "curriculum"
    ],
    "answer": 0,
    "vocabIndex": 21
  },
  {
    "q": "Medical students spend their first year studying _____. They must learn the name and location of every bone in the body.",
    "options": [
      "osmosis",
      "flora",
      "tides",
      "human anatomy"
    ],
    "answer": 3,
    "vocabIndex": 22
  },
  {
    "q": "Dr. Chen teaches plant _____ at the university. Her research explains how trees respond to long periods without rain.",
    "options": [
      "curriculum",
      "physiology",
      "reality",
      "universe"
    ],
    "answer": 1,
    "vocabIndex": 23
  },
  {
    "q": "Water moves into the plant's roots through _____. This natural process works without using any energy from the plant.",
    "options": [
      "osmosis",
      "reality",
      "curriculum",
      "universe"
    ],
    "answer": 0,
    "vocabIndex": 24
  },
  {
    "q": "A good opening story can _____ immediately. Speakers at science conferences often begin with a surprising fact or a short video.",
    "options": [
      "be into",
      "cup of tea",
      "capture someone's attention",
      "burning desire"
    ],
    "answer": 2,
    "vocabIndex": 25
  },
  {
    "q": "Online shopping has become a global _____ over the past twenty years. Many traditional stores have had to change their business models.",
    "options": [
      "curriculum",
      "phenomenon",
      "physiology",
      "osmosis"
    ],
    "answer": 1,
    "vocabIndex": 26
  },
  {
    "q": "Fishermen in the village check the _____ every morning before they go out. Low water can leave their boats stuck on the sand.",
    "options": [
      "flora",
      "fauna",
      "osmosis",
      "tides"
    ],
    "answer": 3,
    "vocabIndex": 27
  },
  {
    "q": "It is _____ that all visitors sign in at the front desk. The laboratory contains chemicals that must be carefully controlled.",
    "options": [
      "ignorant",
      "huge",
      "imperative",
      "fascinating"
    ],
    "answer": 2,
    "vocabIndex": 28
  },
  {
    "q": "The new microscope is very accurate. _____, it is much easier to use than our old one and costs less to maintain.",
    "options": [
      "Besides",
      "Instead",
      "Otherwise",
      "Meanwhile"
    ],
    "answer": 0,
    "vocabIndex": 29
  }
];

const LOOKUP = {
  "curriculum": {
    "pos": "n.",
    "en_def": "the subjects and lessons taught in a school or course",
    "cn_def": "課程"
  },
  "acquire": {
    "pos": "v.",
    "en_def": "to get or learn something, such as a skill",
    "cn_def": "獲得；學到"
  },
  "burning desire": {
    "pos": "n.phr.",
    "en_def": "a very strong wish to do something",
    "cn_def": "強烈的渴望"
  },
  "be into": {
    "pos": "v.phr.",
    "en_def": "to be very interested in something",
    "cn_def": "熱衷於；對……很感興趣"
  },
  "fascinating": {
    "pos": "adj.",
    "en_def": "extremely interesting",
    "cn_def": "極有趣的；迷人的"
  },
  "adore": {
    "pos": "v.",
    "en_def": "to love or like something very much",
    "cn_def": "非常喜愛"
  },
  "cup of tea": {
    "pos": "n.phr.",
    "en_def": "something you like or enjoy (often used in the negative)",
    "cn_def": "喜歡的事物；感興趣的東西"
  },
  "challenging": {
    "pos": "adj.",
    "en_def": "difficult in a way that tests your ability",
    "cn_def": "有挑戰性的"
  },
  "relative": {
    "pos": "adj.",
    "en_def": "measured or judged by comparing with something else",
    "cn_def": "相對的"
  },
  "crucial": {
    "pos": "adj.",
    "en_def": "extremely important",
    "cn_def": "關鍵的；至關重要的"
  },
  "loathe": {
    "pos": "v.",
    "en_def": "to hate something very much",
    "cn_def": "厭惡；極不喜歡"
  },
  "intrinsic": {
    "pos": "adj.",
    "en_def": "belonging to the basic nature of someone or something",
    "cn_def": "內在的；本質的"
  },
  "in-depth": {
    "pos": "adj.",
    "en_def": "very detailed and thorough",
    "cn_def": "深入的；詳盡的"
  },
  "discover": {
    "pos": "v.",
    "en_def": "to find something for the first time",
    "cn_def": "發現"
  },
  "huge": {
    "pos": "adj.",
    "en_def": "very big",
    "cn_def": "巨大的；極大的"
  },
  "thought-provoking": {
    "pos": "adj.",
    "en_def": "making people think seriously about something",
    "cn_def": "發人深省的"
  },
  "ignorant": {
    "pos": "adj.",
    "en_def": "not knowing about something",
    "cn_def": "無知的；不了解的"
  },
  "realise": {
    "pos": "v.",
    "en_def": "to understand or become aware of something",
    "cn_def": "意識到；了解到"
  },
  "universe": {
    "pos": "n.",
    "en_def": "all of space and everything in it",
    "cn_def": "宇宙"
  },
  "reality": {
    "pos": "n.",
    "en_def": "what is true or real, not what is imagined",
    "cn_def": "現實；實際情況"
  },
  "flora": {
    "pos": "n.",
    "en_def": "all the plants of a particular area",
    "cn_def": "植物群"
  },
  "fauna": {
    "pos": "n.",
    "en_def": "all the animals of a particular area",
    "cn_def": "動物群"
  },
  "human anatomy": {
    "pos": "n.phr.",
    "en_def": "the study of the structure of the human body",
    "cn_def": "人體解剖學"
  },
  "physiology": {
    "pos": "n.",
    "en_def": "the study of how living bodies work",
    "cn_def": "生理學"
  },
  "osmosis": {
    "pos": "n.",
    "en_def": "the movement of water through a thin layer; also, learning something slowly without trying",
    "cn_def": "滲透作用；潛移默化"
  },
  "capture someone's attention": {
    "pos": "v.phr.",
    "en_def": "to make someone notice and become interested",
    "cn_def": "吸引某人的注意"
  },
  "phenomenon": {
    "pos": "n.",
    "en_def": "something that happens or exists, especially something unusual",
    "cn_def": "現象"
  },
  "tides": {
    "pos": "n.",
    "en_def": "the regular rise and fall of the sea level",
    "cn_def": "潮汐"
  },
  "imperative": {
    "pos": "adj.",
    "en_def": "extremely important and necessary to do",
    "cn_def": "必要的；緊急的"
  },
  "besides": {
    "pos": "adv.",
    "en_def": "in addition; also",
    "cn_def": "此外；而且"
  }
};

const EXTRA_GLOSSES = {};
