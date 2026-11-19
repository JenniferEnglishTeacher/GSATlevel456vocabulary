// Topic 423 Quiz Data: University 大學
// Source word list: https://www.examword.com/group-topic/university — content written for this site (tools/toeic_emit.py).
const QUIZ_CONFIG = {
  "groupName": "TOEIC Themed Vocabulary T423 - University 大學",
  "gasEndpoint": "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

const VOCAB = [
  {
    "word": "campus",
    "pos": "n.",
    "cn_def": "校園",
    "en_def": "the land and buildings of a university or college",
    "sentence": "A: Our company is hosting a job fair for new graduates next month, so where do you think we should set up our booth to meet the most people? B: I suggest the main {{BLANK}} near the student center, because thousands of young people walk past there every day on their way to classes and lunch.",
    "cn": "A：我們公司下個月要為應屆畢業生舉辦就業博覽會，你覺得我們應該把攤位設在哪裡才能接觸到最多人？ B：我建議設在學生中心附近的主【校園】，因為每天有成千上萬的年輕人在上課和吃午餐的途中經過那裡。"
  },
  {
    "word": "college",
    "pos": "n.",
    "cn_def": "學院；大學",
    "en_def": "a school for study after high school",
    "sentence": "A: Your new assistant seems very organized and confident with the accounting software, so did she work at another firm before she joined our team? B: No, this is her first full-time job, but she studied business at a local {{BLANK}} for four years and also did a summer internship at a bank downtown.",
    "cn": "A：你的新助理看起來非常有條理，而且對會計軟體很有信心，她加入我們團隊之前在別的公司工作過嗎？ B：沒有，這是她第一份全職工作，不過她在本地一所【學院】讀了四年商科，還在市中心的一家銀行做過暑期實習。"
  },
  {
    "word": "student",
    "pos": "n.",
    "cn_def": "學生",
    "en_def": "a person who studies at a school or university",
    "sentence": "A: The bookstore near the station is offering a fifteen percent discount this week, but do you know whether I need to show any special card to get it? B: Yes, you have to show a valid {{BLANK}} ID card from a nearby university, so I'm afraid office workers like us will have to pay the full price.",
    "cn": "A：車站附近的書店這週打八五折，你知道我需要出示什麼特別的卡才能享有折扣嗎？ B：需要，你得出示附近大學有效的【學生】證，所以恐怕像我們這種上班族得付全額了。"
  },
  {
    "word": "professor",
    "pos": "n.",
    "cn_def": "教授",
    "en_def": "a university teacher of the highest rank",
    "sentence": "A: Who is going to give the opening speech at our annual technology conference in the convention center next Friday morning? B: We invited a famous {{BLANK}} of computer science from National Taiwan University, and she agreed to talk for thirty minutes about how artificial intelligence is changing small businesses.",
    "cn": "A：下週五早上在會議中心舉行的年度科技研討會，誰要致開幕詞？ B：我們邀請了台灣大學一位知名的資訊工程【教授】，她答應用三十分鐘談談人工智慧如何改變小型企業。"
  },
  {
    "word": "lecturer",
    "pos": "n.",
    "cn_def": "講師",
    "en_def": "a person who teaches at a college or university",
    "sentence": "A: Since our sales team needs better presentation skills, have you found anyone who could run a training workshop for them in the spring? B: Yes, I contacted a {{BLANK}} from the business school downtown who teaches public speaking, and she is available on two Saturdays in March if the price is acceptable.",
    "cn": "A：既然我們的業務團隊需要更好的簡報技巧，你找到能在春天幫他們開訓練工作坊的人了嗎？ B：找到了，我聯絡了市中心商學院一位教公開演說的【講師】，如果價格可以接受，她三月有兩個星期六有空。"
  },
  {
    "word": "teacher",
    "pos": "n.",
    "cn_def": "老師；教師",
    "en_def": "a person whose job is to teach",
    "sentence": "A: Why did you decide to sign up for the evening Japanese class at the community center instead of using a learning app on your phone? B: I tried several apps, but I really need a patient {{BLANK}} who can correct my pronunciation and explain grammar when I make mistakes before my business trip to Osaka.",
    "cn": "A：你為什麼決定報名社區中心的晚間日文課，而不是用手機上的學習應用程式？ B：我試過好幾個應用程式，但在我去大阪出差之前，我真的需要一位有耐心的【老師】，能在我犯錯時糾正我的發音並解釋文法。"
  },
  {
    "word": "lecture",
    "pos": "n.",
    "cn_def": "講座；演講",
    "en_def": "a long talk on a subject given to a group of people",
    "sentence": "A: Are you going to the free {{BLANK}} on global marketing trends at the city library this Thursday evening, or do you have to work late again? B: I'll be there, because my manager said the speaker used to work for a large advertising company, and she wants me to share my notes with the team on Friday.",
    "cn": "A：你這週四晚上會去市立圖書館參加全球行銷趨勢的免費【講座】嗎，還是你又得加班？ B：我會去，因為我的經理說演講者以前在一家大型廣告公司工作，她希望我週五和團隊分享我的筆記。"
  },
  {
    "word": "seminar",
    "pos": "n.",
    "cn_def": "研討會；專題討論",
    "en_def": "a meeting for training or discussion on a subject",
    "sentence": "A: Why is the large meeting room on the tenth floor booked for the whole day next Wednesday, even though there are no client visits on the schedule? B: Human resources is holding a {{BLANK}} on workplace safety for all new employees, with group discussions in the morning and a short test after lunch.",
    "cn": "A：下週三十樓的大會議室為什麼整天都被預訂了，明明行程上沒有客戶來訪？ B：人資部要為所有新進員工舉辦一場職場安全【研討會】，早上有分組討論，午餐後還有一個小測驗。"
  },
  {
    "word": "tutorial",
    "pos": "n.",
    "cn_def": "教學；個別指導課",
    "en_def": "a lesson that shows you how to do something, often online or in a small group",
    "sentence": "A: I have to prepare the monthly sales report in the new spreadsheet program, but I have no idea how to make the charts, so can you help me? B: I'm busy with a client right now, but there is a short video {{BLANK}} on the company website that explains every step clearly in about ten minutes.",
    "cn": "A：我得用新的試算表程式準備月銷售報告，但我完全不知道怎麼做圖表，你可以幫我嗎？ B：我現在正在忙一位客戶，不過公司網站上有一個簡短的影片【教學】，大約十分鐘就把每個步驟解釋得很清楚。"
  },
  {
    "word": "course",
    "pos": "n.",
    "cn_def": "課程",
    "en_def": "a series of lessons on a subject",
    "sentence": "A: Our company will pay for employees to improve their skills this year, so have you decided what kind of training you want to take? B: I'm planning to take a three-month {{BLANK}} in digital marketing at the university downtown, because our department is going to spend much more money on online advertising next year.",
    "cn": "A：我們公司今年會出錢讓員工提升技能，你決定好要參加哪種訓練了嗎？ B：我打算在市中心的大學上一個為期三個月的數位行銷【課程】，因為我們部門明年要在網路廣告上投入更多經費。"
  },
  {
    "word": "subject",
    "pos": "n.",
    "cn_def": "科目；學科",
    "en_def": "an area of knowledge that you study at school",
    "sentence": "A: When you were at university, which {{BLANK}} did you enjoy the most, and has it actually helped you in your job as a financial analyst here? B: I loved statistics more than anything else, and it helps me every single day when I check sales data and prepare forecasts for the managers.",
    "cn": "A：你讀大學的時候最喜歡哪個【科目】，它對你在這裡擔任財務分析師的工作真的有幫助嗎？ B：我最愛統計學，每天我檢查銷售數據並為經理們準備預測時，它都幫了我很大的忙。"
  },
  {
    "word": "major",
    "pos": "n.",
    "cn_def": "主修科目",
    "en_def": "the main subject a university student studies",
    "sentence": "A: The candidate for the marketing position has an impressive résumé, but what did she study at university before she started working? B: Her {{BLANK}} was psychology, which actually sounds very useful for us, because she understands why customers make certain choices when they shop online.",
    "cn": "A：應徵行銷職位的這位人選履歷很亮眼，但她開始工作前在大學念什麼？ B：她的【主修】是心理學，這對我們其實很有用，因為她了解顧客在網路購物時為什麼會做出某些選擇。"
  },
  {
    "word": "degree",
    "pos": "n.",
    "cn_def": "學位",
    "en_def": "a qualification a university gives you when you finish a program",
    "sentence": "A: The job advertisement for the engineering position looks interesting, but do you know what kind of education they expect from the applicants? B: They want someone with a {{BLANK}} in mechanical engineering and at least three years of experience, but they also say they will train the right person on their own machines.",
    "cn": "A：那份工程職位的徵才廣告看起來很有意思，你知道他們對應徵者的學歷有什麼要求嗎？ B：他們要找擁有機械工程【學位】和至少三年經驗的人，但他們也說會用自己的機器訓練合適的人選。"
  },
  {
    "word": "bachelor",
    "pos": "n.",
    "cn_def": "學士",
    "en_def": "the first university qualification (a bachelor's degree)",
    "sentence": "A: Does the trainee position at the bank require any special qualifications, or can people apply right after they finish high school? B: Applicants need at least a {{BLANK}}'s degree in finance or economics, and the bank also prefers people who have done an internship or part-time job in an office.",
    "cn": "A：銀行的儲備人員職位需要特別的資格嗎，還是高中畢業就可以申請？ B：應徵者至少要有財務或經濟的【學士】學位，而且銀行也比較喜歡在辦公室實習或打工過的人。"
  },
  {
    "word": "master",
    "pos": "n.",
    "cn_def": "碩士",
    "en_def": "an advanced degree you can get after a bachelor's degree (a master's degree)",
    "sentence": "A: I heard that Kevin is leaving the sales department at the end of the month, so is he moving to another company for a better salary? B: No, he is going to study in London for a year to earn a {{BLANK}}'s degree in business administration, and he hopes to come back as a manager.",
    "cn": "A：我聽說凱文月底要離開業務部了，他是為了更好的薪水跳槽到別家公司嗎？ B：不是，他要去倫敦讀一年書，拿企業管理【碩士】學位，他希望回來後能當上經理。"
  },
  {
    "word": "doctorate",
    "pos": "n.",
    "cn_def": "博士學位",
    "en_def": "the highest university degree; a PhD",
    "sentence": "A: The new head of our research department seems to know a lot about chemistry, so where did she work before she joined our company? B: She earned her {{BLANK}} in chemistry in Germany and then spent five years developing safer cleaning products for a large international company in Berlin.",
    "cn": "A：我們研發部門的新主管似乎很懂化學，她加入我們公司之前在哪裡工作？ B：她在德國取得化學【博士學位】，之後在柏林一家大型跨國公司花了五年研發更安全的清潔產品。"
  },
  {
    "word": "research",
    "pos": "n.",
    "cn_def": "研究；調查",
    "en_def": "careful study to find out new facts",
    "sentence": "A: Before we launch the new energy drink in Southeast Asia, should we ask an outside company to find out what local customers actually want? B: Yes, I think we need some proper market {{BLANK}} first, because tastes and prices are very different in Vietnam, Thailand, and Malaysia, and a mistake would be expensive.",
    "cn": "A：在東南亞推出新的能量飲料之前，我們應該請外部公司調查當地顧客真正想要什麼嗎？ B：是的，我認為我們得先做些正式的市場【研究】，因為越南、泰國和馬來西亞的口味和價格差異很大，犯錯的代價會很高。"
  },
  {
    "word": "library",
    "pos": "n.",
    "cn_def": "圖書館",
    "en_def": "a place where books are kept for people to read or borrow",
    "sentence": "A: Where can I find a quiet place to prepare for my accounting exam this weekend, since my apartment is noisy and the coffee shops are always crowded? B: You should try the public {{BLANK}} on Park Road, because it has a silent study room on the third floor and stays open until nine on Saturdays.",
    "cn": "A：這個週末我可以去哪裡找個安靜的地方準備會計考試？我的公寓很吵，咖啡店又總是很擁擠。 B：你應該去公園路上的公立【圖書館】試試，三樓有一間安靜的自習室，星期六開到晚上九點。"
  },
  {
    "word": "laboratory",
    "pos": "n.",
    "cn_def": "實驗室",
    "en_def": "a room or building where scientists do tests and experiments",
    "sentence": "A: Why do all the visitors have to wear white coats and safety glasses before they enter the building behind the main factory? B: That building is our testing {{BLANK}}, where scientists check the quality of every new medicine, so the rules about clothing and cleanliness are very strict.",
    "cn": "A：為什麼所有訪客在進入主工廠後面那棟建築前都得穿上白袍、戴上護目鏡？ B：那棟建築是我們的檢測【實驗室】，科學家在那裡檢查每一種新藥的品質，所以對服裝和清潔的規定非常嚴格。"
  },
  {
    "word": "assignment",
    "pos": "n.",
    "cn_def": "作業；任務",
    "en_def": "a piece of work given to someone as part of their studies or job",
    "sentence": "A: You look really tired this morning, so did you stay up late watching the basketball game with your roommates again last night? B: No, I was finishing a long {{BLANK}} for my evening business class, and the professor wants it uploaded to the school website before noon today.",
    "cn": "A：你今天早上看起來真的很累，昨晚又和室友熬夜看籃球比賽了嗎？ B：不是，我在趕夜間商業課一份很長的【作業】，教授要我們在今天中午前上傳到學校網站。"
  },
  {
    "word": "exam",
    "pos": "n.",
    "cn_def": "考試",
    "en_def": "a formal test of knowledge or skill",
    "sentence": "A: Why are you studying English vocabulary during your lunch break instead of eating with the rest of the team in the cafeteria? B: I'm taking the TOEIC {{BLANK}} next Sunday morning, and I need a score of at least eight hundred to apply for the overseas position in our Singapore office.",
    "cn": "A：你為什麼午休時間在背英文單字，而不是跟其他同事去餐廳吃飯？ B：我下週日早上要參加多益【考試】，我需要至少八百分才能申請我們新加坡辦公室的海外職位。"
  },
  {
    "word": "grade",
    "pos": "n.",
    "cn_def": "成績；分數",
    "en_def": "a mark that shows how good a student's work is",
    "sentence": "A: Do most companies in your industry care about university results when they hire young people, or do they focus on work experience? B: Many large firms still check whether you got a good {{BLANK}} in important classes, but smaller companies usually care more about internships and communication skills.",
    "cn": "A：你們這一行大多數公司在雇用年輕人時，會在意大學成績嗎，還是比較看重工作經驗？ B：很多大公司仍會查看你在重要課程是否拿到好【成績】，但較小的公司通常更在意實習經歷和溝通能力。"
  },
  {
    "word": "scholarship",
    "pos": "n.",
    "cn_def": "獎學金",
    "en_def": "money given to a student to help pay for their studies",
    "sentence": "A: How could your brother afford to study engineering in the United States, since the costs there are so high and your family isn't rich? B: He won a full {{BLANK}} from a large technology company, which pays for all his classes and housing as long as he works for them for two years after graduation.",
    "cn": "A：你哥哥怎麼負擔得起在美國讀工程，那邊的費用那麼高，你家又不是很有錢？ B：他獲得一家大型科技公司提供的全額【獎學金】，只要畢業後替他們工作兩年，所有學費和住宿費都由他們支付。"
  },
  {
    "word": "tuition",
    "pos": "n.",
    "cn_def": "學費",
    "en_def": "money you pay to be taught at a school or university",
    "sentence": "A: Is it true that our company will help employees who want to take part-time classes at a local university in the evenings? B: Yes, the new policy says the company will pay half of your {{BLANK}} if the program is related to your job and you pass all your classes.",
    "cn": "A：我們公司真的會補助想在晚上去本地大學上在職課程的員工嗎？ B：是的，新政策規定，如果課程和你的工作相關，而且你所有科目都及格，公司會支付一半的【學費】。"
  },
  {
    "word": "graduate",
    "pos": "v.",
    "cn_def": "畢業",
    "en_def": "to finish a school or university program successfully",
    "sentence": "A: When is your daughter going to start looking for a full-time job, and is she interested in working in the banking industry like you? B: She will {{BLANK}} from university in June, and she has already sent applications to two banks and an insurance company in Taipei.",
    "cn": "A：你女兒什麼時候要開始找全職工作，她跟你一樣對銀行業有興趣嗎？ B：她六月就要從大學【畢業】了，而且她已經向台北的兩家銀行和一家保險公司投了履歷。"
  },
  {
    "word": "enroll",
    "pos": "v.",
    "cn_def": "註冊；報名",
    "en_def": "to officially join a course or school",
    "sentence": "A: I'd like to improve my spreadsheet skills before the busy season starts, but how do I join the training program that HR advertised last week? B: You can {{BLANK}} online through the employee website, but you should hurry because there are only twenty places and many people have already signed up.",
    "cn": "A：我想在旺季開始前加強試算表技能，但我要怎麼參加人資部上週宣傳的培訓課程？ B：你可以透過員工網站線上【報名】，不過要快一點，因為只有二十個名額，很多人已經報名了。"
  },
  {
    "word": "attend",
    "pos": "v.",
    "cn_def": "參加；出席",
    "en_def": "to go to an event, meeting, or class",
    "sentence": "A: Will you be at the client meeting on Thursday afternoon, or are you still planning to take that day off for your sister's wedding? B: I can't {{BLANK}} the meeting because I'll be in Kaohsiung for the wedding, but my assistant will be there and take detailed notes for me.",
    "cn": "A：你會出席週四下午的客戶會議嗎，還是你仍打算那天請假去參加你妹妹的婚禮？ B：我無法【出席】那場會議，因為我會在高雄參加婚禮，不過我的助理會到場並幫我做詳細的筆記。"
  },
  {
    "word": "study",
    "pos": "v.",
    "cn_def": "讀書；研讀",
    "en_def": "to spend time learning about a subject",
    "sentence": "A: Why have you been leaving the office so early every day this month, even though our team has so many deadlines? B: I need to {{BLANK}} for my accounting certification test next week, so my manager agreed that I could leave at five and make up the hours later.",
    "cn": "A：這個月你為什麼每天都那麼早下班，我們團隊明明有這麼多截止期限？ B：我下週要考會計證照，需要【讀書】準備，所以經理同意我五點下班，之後再把時數補回來。"
  },
  {
    "word": "learn",
    "pos": "v.",
    "cn_def": "學習；學會",
    "en_def": "to get knowledge or a new skill",
    "sentence": "A: Our company is opening a new branch in Vietnam next year, so what are you doing to get ready for working with the team there? B: I'm trying to {{BLANK}} some basic Vietnamese at night school, because I think the local staff will appreciate it if I can greet them in their own language.",
    "cn": "A：我們公司明年要在越南開新分公司，你在做什麼準備以便和那裡的團隊合作？ B：我在夜校【學習】一些基礎越南語，因為我想如果我能用當地員工自己的語言跟他們打招呼，他們會很感激。"
  },
  {
    "word": "academic",
    "pos": "adj.",
    "cn_def": "學術的；學業的",
    "en_def": "related to schools, universities, and studying",
    "sentence": "A: The university wants to hire our firm to design a new website, but what kind of information do they want to show on the homepage? B: They want to highlight their {{BLANK}} programs, especially the business and engineering departments, and show photos of students working in the new research center.",
    "cn": "A：那所大學想雇用我們公司設計新網站，他們希望在首頁上呈現哪些資訊？ B：他們想突顯他們的【學術】課程，特別是商學和工程科系，並放上學生在新研究中心工作的照片。"
  },
  {
    "word": "educational",
    "pos": "adj.",
    "cn_def": "教育的；有教育意義的",
    "en_def": "giving knowledge or helping people learn",
    "sentence": "A: Our marketing team wants to make some short videos for the website, but what kind of content do you think customers would really watch? B: I think {{BLANK}} videos that show people how to use our kitchen products safely would be popular, because customers often call us with the same simple questions.",
    "cn": "A：我們行銷團隊想為網站拍一些短片，你覺得顧客真的會看什麼樣的內容？ B：我覺得教人如何安全使用我們廚房用品的【教育性】影片會很受歡迎，因為顧客常常打電話來問同樣簡單的問題。"
  },
  {
    "word": "higher",
    "pos": "adj.",
    "cn_def": "高等的",
    "en_def": "(of education) at college or university level",
    "sentence": "A: Why is the government giving so much money to universities in the south of the country this year? B: Officials want more young people to continue in {{BLANK}} education after high school, because local factories need skilled engineers and managers to stay competitive in the global market.",
    "cn": "A：為什麼政府今年撥這麼多經費給南部的大學？ B：官員希望更多年輕人在高中畢業後繼續接受【高等】教育，因為當地工廠需要技術熟練的工程師和管理人員，才能在全球市場保持競爭力。"
  },
  {
    "word": "full-time",
    "pos": "adj.",
    "cn_def": "全職的；全日制的",
    "en_def": "working or studying for all the normal hours of the week",
    "sentence": "A: Is the young woman at the front desk a new employee, or is she still working here part-time while she finishes her studies? B: She finished her degree last month, so the manager offered her a {{BLANK}} position with health insurance and two weeks of paid vacation every year.",
    "cn": "A：櫃檯那位年輕女生是新員工，還是她仍一邊完成學業一邊在這裡打工？ B：她上個月拿到學位了，所以經理給了她一個附健保和每年兩週帶薪假的【全職】職位。"
  },
  {
    "word": "international",
    "pos": "adj.",
    "cn_def": "國際的",
    "en_def": "involving more than one country",
    "sentence": "A: Why does the university need so many extra dormitory rooms and English-speaking staff this year? B: The number of {{BLANK}} students has doubled since last year, with many young people arriving from Japan, India, and Indonesia, so the school has to improve its services quickly.",
    "cn": "A：為什麼那所大學今年需要這麼多額外的宿舍房間和會說英語的職員？ B：【國際】學生的人數比去年增加了一倍，很多年輕人來自日本、印度和印尼，所以學校必須迅速改善服務。"
  }
];

const MCQS = [
  {
    "q": "The company will hold its recruitment event on the university _____ next week. Students can visit the booth between classes.",
    "options": [
      "campus",
      "degree",
      "tuition",
      "seminar"
    ],
    "answer": 0,
    "vocabIndex": 0
  },
  {
    "q": "Ms. Lin teaches evening accounting classes at a community _____ downtown. Many of her students already work full-time at local firms.",
    "options": [
      "laboratory",
      "scholarship",
      "college",
      "assignment"
    ],
    "answer": 2,
    "vocabIndex": 1
  },
  {
    "q": "Visitors with a valid _____ ID card receive a twenty percent discount at the museum. Office workers must pay the regular price.",
    "options": [
      "laboratory",
      "student",
      "tuition",
      "subject"
    ],
    "answer": 1,
    "vocabIndex": 2
  },
  {
    "q": "Dr. Chen is a _____ of economics at National Taiwan University. She will speak about global trade at our conference.",
    "options": [
      "campus",
      "degree",
      "seminar",
      "professor"
    ],
    "answer": 3,
    "vocabIndex": 3
  },
  {
    "q": "The company hired a guest _____ from the business school to train staff. She taught a two-day class on negotiation skills.",
    "options": [
      "library",
      "grade",
      "lecturer",
      "scholarship"
    ],
    "answer": 2,
    "vocabIndex": 4
  },
  {
    "q": "More than two hundred people came to the free _____ on online marketing. The speaker answered questions for thirty minutes afterward.",
    "options": [
      "lecture",
      "tuition",
      "doctorate",
      "major"
    ],
    "answer": 0,
    "vocabIndex": 6
  },
  {
    "q": "All new managers must attend a one-day _____ on leadership next Friday. Lunch will be provided in the conference room.",
    "options": [
      "campus",
      "bachelor",
      "grade",
      "seminar"
    ],
    "answer": 3,
    "vocabIndex": 7
  },
  {
    "q": "If you have trouble with the new software, watch the online video _____. It explains each step in less than ten minutes.",
    "options": [
      "scholarship",
      "tutorial",
      "doctorate",
      "campus"
    ],
    "answer": 1,
    "vocabIndex": 8
  },
  {
    "q": "Mr. Park signed up for a three-month _____ in digital marketing at a local university. The company will pay half of the fee.",
    "options": [
      "course",
      "campus",
      "laboratory",
      "library"
    ],
    "answer": 0,
    "vocabIndex": 9
  },
  {
    "q": "Statistics was her favorite _____ in university. Now she uses it every day when she analyzes sales data for the company.",
    "options": [
      "campus",
      "tuition",
      "subject",
      "scholarship"
    ],
    "answer": 2,
    "vocabIndex": 10
  },
  {
    "q": "Before entering the finance industry, Kevin chose economics as his _____ at university. He also took several classes in computer science.",
    "options": [
      "library",
      "major",
      "tuition",
      "campus"
    ],
    "answer": 1,
    "vocabIndex": 11
  },
  {
    "q": "The position requires a _____ in mechanical engineering and three years of experience. Applicants should send their résumés by May 5.",
    "options": [
      "lecture",
      "campus",
      "library",
      "degree"
    ],
    "answer": 3,
    "vocabIndex": 12
  },
  {
    "q": "Applicants must hold at least a _____'s degree in finance. Candidates with a master's degree will receive a higher starting salary.",
    "options": [
      "professor",
      "campus",
      "bachelor",
      "student"
    ],
    "answer": 2,
    "vocabIndex": 13
  },
  {
    "q": "After working in sales for five years, Emma returned to school to earn a _____'s degree in business administration. Her company paid half the cost.",
    "options": [
      "master",
      "lecturer",
      "campus",
      "library"
    ],
    "answer": 0,
    "vocabIndex": 14
  },
  {
    "q": "Dr. Weber earned her _____ in chemistry in Germany. She now leads the research team at our laboratory in Hsinchu.",
    "options": [
      "campus",
      "tuition",
      "lecture",
      "doctorate"
    ],
    "answer": 3,
    "vocabIndex": 15
  },
  {
    "q": "Before launching the product overseas, we need to conduct market _____. It will show us what local customers really want.",
    "options": [
      "tuition",
      "research",
      "campus",
      "lecture"
    ],
    "answer": 1,
    "vocabIndex": 16
  },
  {
    "q": "Employees can borrow business books from the company _____ on the third floor. Books must be returned within two weeks.",
    "options": [
      "library",
      "tuition",
      "seminar",
      "degree"
    ],
    "answer": 0,
    "vocabIndex": 17
  },
  {
    "q": "All visitors must wear safety glasses inside the testing _____. Scientists there check the quality of every new product.",
    "options": [
      "scholarship",
      "major",
      "laboratory",
      "tuition"
    ],
    "answer": 2,
    "vocabIndex": 18
  },
  {
    "q": "Students must hand in their final _____ by Friday at noon. Late work will not be accepted by the professor.",
    "options": [
      "campus",
      "assignment",
      "tuition",
      "doctorate"
    ],
    "answer": 1,
    "vocabIndex": 19
  },
  {
    "q": "Jason needs a score of at least 800 on the TOEIC _____. The overseas position in Singapore requires strong English skills.",
    "options": [
      "campus",
      "library",
      "major",
      "exam"
    ],
    "answer": 3,
    "vocabIndex": 20
  },
  {
    "q": "Lisa got the highest _____ in her accounting class this semester. Her teacher said her final project was excellent.",
    "options": [
      "campus",
      "tuition",
      "grade",
      "library"
    ],
    "answer": 2,
    "vocabIndex": 21
  },
  {
    "q": "Thanks to a full _____ from a technology company, Tom pays nothing for his classes. In return, he will work for the firm after graduating.",
    "options": [
      "scholarship",
      "laboratory",
      "lecturer",
      "campus"
    ],
    "answer": 0,
    "vocabIndex": 22
  },
  {
    "q": "The company will pay half of the _____ for employees taking evening classes. Workers must pass every class to receive the money.",
    "options": [
      "lecturer",
      "campus",
      "laboratory",
      "tuition"
    ],
    "answer": 3,
    "vocabIndex": 23
  },
  {
    "q": "Many students _____ from university in June and start looking for jobs. Our firm holds interviews for them every summer.",
    "options": [
      "enroll",
      "graduate",
      "attend",
      "study"
    ],
    "answer": 1,
    "vocabIndex": 24
  },
  {
    "q": "Employees who want to _____ in the training program must register online by March 1. Only twenty places are available.",
    "options": [
      "enroll",
      "graduate",
      "attend",
      "learn"
    ],
    "answer": 0,
    "vocabIndex": 25
  },
  {
    "q": "Ms. Wu cannot _____ the client meeting on Thursday because she will be in Tokyo. Her assistant will take notes instead.",
    "options": [
      "enroll",
      "graduate",
      "attend",
      "learn"
    ],
    "answer": 2,
    "vocabIndex": 26
  },
  {
    "q": "Scholarships are given to students with excellent _____ performance. They must keep high grades every semester.",
    "options": [
      "full-time",
      "academic",
      "international",
      "higher"
    ],
    "answer": 1,
    "vocabIndex": 29
  },
  {
    "q": "The museum offers _____ tours for school groups. Children learn about local history through games and short videos.",
    "options": [
      "full-time",
      "higher",
      "international",
      "educational"
    ],
    "answer": 3,
    "vocabIndex": 30
  },
  {
    "q": "After finishing her degree, Amy was offered a _____ position at the bank. She will work forty hours a week with paid vacation.",
    "options": [
      "academic",
      "higher",
      "full-time",
      "educational"
    ],
    "answer": 2,
    "vocabIndex": 32
  },
  {
    "q": "The number of _____ students at the university has doubled. Many of them come from Japan, India, and Indonesia.",
    "options": [
      "international",
      "educational",
      "higher",
      "academic"
    ],
    "answer": 0,
    "vocabIndex": 33
  }
];

const LOOKUP = {
  "campus": {
    "pos": "n.",
    "en_def": "the land and buildings of a university or college",
    "cn_def": "校園"
  },
  "college": {
    "pos": "n.",
    "en_def": "a school for study after high school",
    "cn_def": "學院；大學"
  },
  "student": {
    "pos": "n.",
    "en_def": "a person who studies at a school or university",
    "cn_def": "學生"
  },
  "professor": {
    "pos": "n.",
    "en_def": "a university teacher of the highest rank",
    "cn_def": "教授"
  },
  "lecturer": {
    "pos": "n.",
    "en_def": "a person who teaches at a college or university",
    "cn_def": "講師"
  },
  "teacher": {
    "pos": "n.",
    "en_def": "a person whose job is to teach",
    "cn_def": "老師；教師"
  },
  "lecture": {
    "pos": "n.",
    "en_def": "a long talk on a subject given to a group of people",
    "cn_def": "講座；演講"
  },
  "seminar": {
    "pos": "n.",
    "en_def": "a meeting for training or discussion on a subject",
    "cn_def": "研討會；專題討論"
  },
  "tutorial": {
    "pos": "n.",
    "en_def": "a lesson that shows you how to do something, often online or in a small group",
    "cn_def": "教學；個別指導課"
  },
  "course": {
    "pos": "n.",
    "en_def": "a series of lessons on a subject",
    "cn_def": "課程"
  },
  "subject": {
    "pos": "n.",
    "en_def": "an area of knowledge that you study at school",
    "cn_def": "科目；學科"
  },
  "major": {
    "pos": "n.",
    "en_def": "the main subject a university student studies",
    "cn_def": "主修科目"
  },
  "degree": {
    "pos": "n.",
    "en_def": "a qualification a university gives you when you finish a program",
    "cn_def": "學位"
  },
  "bachelor": {
    "pos": "n.",
    "en_def": "the first university qualification (a bachelor's degree)",
    "cn_def": "學士"
  },
  "master": {
    "pos": "n.",
    "en_def": "an advanced degree you can get after a bachelor's degree (a master's degree)",
    "cn_def": "碩士"
  },
  "doctorate": {
    "pos": "n.",
    "en_def": "the highest university degree; a PhD",
    "cn_def": "博士學位"
  },
  "research": {
    "pos": "n.",
    "en_def": "careful study to find out new facts",
    "cn_def": "研究；調查"
  },
  "library": {
    "pos": "n.",
    "en_def": "a place where books are kept for people to read or borrow",
    "cn_def": "圖書館"
  },
  "laboratory": {
    "pos": "n.",
    "en_def": "a room or building where scientists do tests and experiments",
    "cn_def": "實驗室"
  },
  "assignment": {
    "pos": "n.",
    "en_def": "a piece of work given to someone as part of their studies or job",
    "cn_def": "作業；任務"
  },
  "exam": {
    "pos": "n.",
    "en_def": "a formal test of knowledge or skill",
    "cn_def": "考試"
  },
  "grade": {
    "pos": "n.",
    "en_def": "a mark that shows how good a student's work is",
    "cn_def": "成績；分數"
  },
  "scholarship": {
    "pos": "n.",
    "en_def": "money given to a student to help pay for their studies",
    "cn_def": "獎學金"
  },
  "tuition": {
    "pos": "n.",
    "en_def": "money you pay to be taught at a school or university",
    "cn_def": "學費"
  },
  "graduate": {
    "pos": "v.",
    "en_def": "to finish a school or university program successfully",
    "cn_def": "畢業"
  },
  "enroll": {
    "pos": "v.",
    "en_def": "to officially join a course or school",
    "cn_def": "註冊；報名"
  },
  "attend": {
    "pos": "v.",
    "en_def": "to go to an event, meeting, or class",
    "cn_def": "參加；出席"
  },
  "study": {
    "pos": "v.",
    "en_def": "to spend time learning about a subject",
    "cn_def": "讀書；研讀"
  },
  "learn": {
    "pos": "v.",
    "en_def": "to get knowledge or a new skill",
    "cn_def": "學習；學會"
  },
  "academic": {
    "pos": "adj.",
    "en_def": "related to schools, universities, and studying",
    "cn_def": "學術的；學業的"
  },
  "educational": {
    "pos": "adj.",
    "en_def": "giving knowledge or helping people learn",
    "cn_def": "教育的；有教育意義的"
  },
  "higher": {
    "pos": "adj.",
    "en_def": "(of education) at college or university level",
    "cn_def": "高等的"
  },
  "full-time": {
    "pos": "adj.",
    "en_def": "working or studying for all the normal hours of the week",
    "cn_def": "全職的；全日制的"
  },
  "international": {
    "pos": "adj.",
    "en_def": "involving more than one country",
    "cn_def": "國際的"
  }
};

const EXTRA_GLOSSES = {};
